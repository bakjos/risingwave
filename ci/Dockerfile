#############################################################################################
#                                     !!! IMPORTANT !!!                                     #
# If you want to bump CI Docker image, please update BUILD_ENV_VERSION in build-ci-image.sh #
# and corresponding rw-build-env version in docker-compose.yml.                             #
#############################################################################################

FROM ubuntu:22.04 AS risingwave-build-env

ENV LANG en_US.utf8

# Use AWS ubuntu mirror
RUN sed -i 's|http://archive.ubuntu.com/ubuntu|http://us-east-2.ec2.archive.ubuntu.com/ubuntu/|g' /etc/apt/sources.list
RUN apt-get update -yy && \
    DEBIAN_FRONTEND=noninteractive apt-get -y install make build-essential cmake protobuf-compiler curl parallel python3 python3-pip software-properties-common \
    openssl libssl-dev libsasl2-dev libcurl4-openssl-dev pkg-config bash openjdk-11-jdk wget unzip git tmux lld postgresql-client kafkacat netcat mysql-client \
    maven zstd libzstd-dev locales -yy \
    && rm -rf /var/lib/{apt,dpkg,cache,log}/
# Install Python 3.12
RUN add-apt-repository ppa:deadsnakes/ppa -y && \
    apt-get update -yy && \
    DEBIAN_FRONTEND=noninteractive apt-get install python3.12 python3.12-dev -yy && \
    rm -rf /var/lib/{apt,dpkg,cache,log}/
ENV PYO3_PYTHON=python3.12

SHELL ["/bin/bash", "-c"]

RUN mkdir -p /risingwave

WORKDIR /risingwave

COPY rust-toolchain rust-toolchain

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --no-modify-path --default-toolchain none -y

ENV PATH /root/.cargo/bin/:$PATH

RUN rustup show
RUN rustup default `rustup show active-toolchain | awk '{print $1}'`

RUN curl -sSL "https://github.com/bufbuild/buf/releases/download/v1.29.0/buf-$(uname -s)-$(uname -m).tar.gz" | \
    tar -xvzf - -C /usr/local --strip-components 1

# install python dependencies
RUN pip3 install pyarrow pytest

# Install poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# add required rustup components
RUN rustup component add rustfmt llvm-tools-preview clippy
RUN rustup target add wasm32-wasi

ENV CARGO_REGISTRIES_CRATES_IO_PROTOCOL=sparse

# install build tools
RUN curl -L --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/cargo-bins/cargo-binstall/main/install-from-binstall-release.sh | bash
RUN cargo binstall -y --no-symlinks cargo-llvm-cov cargo-nextest cargo-hakari cargo-sort cargo-cache cargo-audit \
    cargo-make@0.37.9 \
    sqllogictest-bin@0.19.1 \
    sccache@0.7.4 \
    && cargo cache -a \
    && rm -rf "/root/.cargo/registry/index" \
    && rm -rf "/root/.cargo/registry/cache" \
    && rm -rf "/root/.cargo/git/db"
RUN cargo install cargo-dylint@2.6.0 dylint-link@2.6.0
RUN cargo uninstall cargo-binstall cargo-cache
