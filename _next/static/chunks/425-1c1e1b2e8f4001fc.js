"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{3526:function(r,e,t){t.d(e,{OL:function(){return l},X8:function(){return c},xv:function(){return i}});var a=t(27012),n=t(43231);async function c(){return await n.ZP.get("/metrics/cluster")}async function i(){return(await n.ZP.get("/clusters/1")).map(a.cX.fromJSON)}async function l(){return(await n.ZP.get("/clusters/2")).map(a.cX.fromJSON)}},44162:function(r,e,t){t.d(e,{Z:function(){return c}});var a=t(67294),n=t(48623);function c(r){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=!(arguments.length>2)||void 0===arguments[2]||arguments[2],[c,i]=(0,a.useState)(),l=(0,n.Z)();return(0,a.useEffect)(()=>{let a=async()=>{if(t)try{let e=await r();i(e)}catch(r){l(r)}};if(a(),!e)return;let n=setInterval(a,e);return()=>clearInterval(n)},[l,r,e,t]),{response:c}}},86357:function(r,e,t){t.d(e,{Kv:function(){return a},R_:function(){return n}});let a={fromJSON:r=>({actorTraces:c(r.actorTraces)?Object.entries(r.actorTraces).reduce((r,e)=>{let[t,a]=e;return r[Number(t)]=String(a),r},{}):{},rpcTraces:c(r.rpcTraces)?Object.entries(r.rpcTraces).reduce((r,e)=>{let[t,a]=e;return r[t]=String(a),r},{}):{},compactionTaskTraces:c(r.compactionTaskTraces)?Object.entries(r.compactionTaskTraces).reduce((r,e)=>{let[t,a]=e;return r[t]=String(a),r},{}):{},inflightBarrierTraces:c(r.inflightBarrierTraces)?Object.entries(r.inflightBarrierTraces).reduce((r,e)=>{let[t,a]=e;return r[Number(t)]=String(a),r},{}):{}}),toJSON(r){let e={};if(r.actorTraces){let t=Object.entries(r.actorTraces);t.length>0&&(e.actorTraces={},t.forEach(r=>{let[t,a]=r;e.actorTraces[t]=a}))}if(r.rpcTraces){let t=Object.entries(r.rpcTraces);t.length>0&&(e.rpcTraces={},t.forEach(r=>{let[t,a]=r;e.rpcTraces[t]=a}))}if(r.compactionTaskTraces){let t=Object.entries(r.compactionTaskTraces);t.length>0&&(e.compactionTaskTraces={},t.forEach(r=>{let[t,a]=r;e.compactionTaskTraces[t]=a}))}if(r.inflightBarrierTraces){let t=Object.entries(r.inflightBarrierTraces);t.length>0&&(e.inflightBarrierTraces={},t.forEach(r=>{let[t,a]=r;e.inflightBarrierTraces[t]=a}))}return e},create:r=>a.fromPartial(null!=r?r:{}),fromPartial(r){var e,t,a,n;let c={actorTraces:{},rpcTraces:{},compactionTaskTraces:{},inflightBarrierTraces:{}};return c.actorTraces=Object.entries(null!==(e=r.actorTraces)&&void 0!==e?e:{}).reduce((r,e)=>{let[t,a]=e;return void 0!==a&&(r[Number(t)]=String(a)),r},{}),c.rpcTraces=Object.entries(null!==(t=r.rpcTraces)&&void 0!==t?t:{}).reduce((r,e)=>{let[t,a]=e;return void 0!==a&&(r[t]=String(a)),r},{}),c.compactionTaskTraces=Object.entries(null!==(a=r.compactionTaskTraces)&&void 0!==a?a:{}).reduce((r,e)=>{let[t,a]=e;return void 0!==a&&(r[t]=String(a)),r},{}),c.inflightBarrierTraces=Object.entries(null!==(n=r.inflightBarrierTraces)&&void 0!==n?n:{}).reduce((r,e)=>{let[t,a]=e;return void 0!==a&&(r[Number(t)]=String(a)),r},{}),c}},n={fromJSON:r=>({dir:function(r){return null!=r}(r.dir)?String(r.dir):"",nameManually:Array.isArray(null==r?void 0:r.nameManually)?r.nameManually.map(r=>String(r)):[],nameAuto:Array.isArray(null==r?void 0:r.nameAuto)?r.nameAuto.map(r=>String(r)):[]}),toJSON(r){var e,t;let a={};return""!==r.dir&&(a.dir=r.dir),(null===(e=r.nameManually)||void 0===e?void 0:e.length)&&(a.nameManually=r.nameManually),(null===(t=r.nameAuto)||void 0===t?void 0:t.length)&&(a.nameAuto=r.nameAuto),a},create:r=>n.fromPartial(null!=r?r:{}),fromPartial(r){var e,t,a;let n={dir:"",nameManually:[],nameAuto:[]};return n.dir=null!==(a=r.dir)&&void 0!==a?a:"",n.nameManually=(null===(e=r.nameManually)||void 0===e?void 0:e.map(r=>r))||[],n.nameAuto=(null===(t=r.nameAuto)||void 0===t?void 0:t.map(r=>r))||[],n}};function c(r){return"object"==typeof r&&null!==r}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}}]);