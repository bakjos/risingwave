(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80],{71718:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explain_distsql",function(){return n(22746)}])},6448:function(e,t,n){"use strict";var i=n(85893),o=n(40639);n(67294),t.Z=function(e){let{children:t}=e;return(0,i.jsx)(o.xv,{mb:2,textColor:"blue.500",fontWeight:"semibold",lineHeight:"6",children:t})}},22746:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var i=n(82729),o=n(85893),r=n(40639),a=n(74995),s=n(47741),d=n(67294),l=n(6448),c=n(69647),u=n(56022),h=n(5100),p=n(65362),x=n(94556),g=n(78636),_=n(79855);function f(){let e=(0,i._)(["\n  font-family: sans-serif;\n  text-align: left;\n"]);return f=function(){return e},e}function b(){let e=(0,i._)(["\n  width: 100%;\n  height: 80vh;\n"]);return b=function(){return e},e}let j=(0,x.ZP)(r.xu)(f()),v=(0,x.ZP)(r.xu)(b()),y={x:200,y:100},S={node:g.default};function w(){let[e,t]=(0,d.useState)(""),[n,i]=(0,d.useState)(!1),[x,g]=(0,d.useState)([]),[f,b]=(0,d.useState)([]);return(0,o.jsx)(d.Fragment,{children:(0,o.jsxs)(r.xu,{p:3,children:[(0,o.jsx)(l.Z,{children:"Distributed Plan Explain"}),(0,o.jsxs)(r.Kq,{direction:"row",spacing:4,align:"center",children:[(0,o.jsx)(a.g,{name:"input json",placeholder:"Explain",value:e,onChange:e=>{t(e.target.value),i(!0)},style:{width:"1000px",height:"100px"}}),(0,o.jsx)(s.zx,{colorScheme:"blue",onClick:()=>{if(n){var t=function(e){var t=[],n=[],i=e.stages,o=new Set,r={},a=[];let s=e.root_stage_id.toString();for(let[e,s]of Object.entries(i)){let i=s.root;r[e]=i.plan_node_id;var d={background:"linear-gradient(".concat("hsl("+360*Math.random()+","+(25+70*Math.random())+"%,"+(85+10*Math.random())+"%)",", white, white)"),height:50,width:150,border:"0.5px solid black",padding:"5px","border-radius":"5px"},l={id:i.plan_node_id.toString(),data:{label:"#".concat(i.plan_node_id," ").concat(i.plan_node_type),stage:e,content:Object.values(i.schema)},position:y,type:"node",style:d};null!=i.source_stage_id&&a.push([i.plan_node_id,i.source_stage_id]),o.add(l.id),function e(t,n,i,o,r,a,s){if(0!=t.children.length)for(var d=0;d<t.children.length;d++){let u=t.children[d];var l={id:"e".concat(t.plan_node_id,"-").concat(u.plan_node_id),source:t.plan_node_id.toString(),target:u.plan_node_id.toString(),type:"smoothstep"};if(r.push(l),!a.has(u.plan_node_id)){var c={id:u.plan_node_id.toString(),data:{label:"#".concat(u.plan_node_id," ").concat(u.plan_node_type),stage:n,content:Object.values(u.schema)},position:y,type:"node",style:i};null!=u.source_stage_id&&s.push([u.plan_node_id,u.source_stage_id]),e(u,n,i,o,r,a,s),o.push(c)}}}(i,e,d,t,n,o,a),t.push(l)}for(var c=0;c<a.length;c++){var u=a[c][0],h=r[a[c][1].toString()],p={id:"e".concat(h,"-").concat(u),source:u.toString(),target:h.toString(),type:"smoothstep"};n.push(p)}return!function(e,t,n,i){let o=new Map;e.forEach(e=>{o.set(e.id,[{id:e.id,children:[]},e])}),t.forEach(e=>{let t=o.get(e.source)[0],n=o.get(e.target)[0];t.children.push(n)});var r=o.get(n[i].toString())[0],a=_.bT9(r);_.G_s().nodeSize([60,180])(a).each(e=>{let t=o.get(e.data.id)[1];void 0!=t&&(t.position={x:e.y,y:e.x})})}(t,n,r,s),{node:t,edge:n}}(JSON.parse(e));b(t.edge),g(t.node),i(!1)}},style:{width:"80px",height:"100px"},children:"Click"})]}),(0,o.jsx)(j,{fluid:!0,children:(0,o.jsx)(v,{children:(0,o.jsxs)(c.ZP,{nodes:x,edges:f,nodeTypes:S,children:[(0,o.jsx)(u.Z,{}),(0,o.jsx)(h.i,{}),(0,o.jsx)(p.Z,{color:"#aaa",gap:16})]})})})]})})}},78636:function(e,t,n){"use strict";n.r(t);var i=n(85893),o=n(40639),r=n(65914),a=n(63679),s=n(67294),d=n(69647),l=n(90336);let c=(0,a.ZP)(()=>n.e(171).then(n.t.bind(n,55171,23))),u={background:"#FFFFFF"};t.default=function(e){let{data:t}=e;return void 0===t||void 0===t.label?(0,i.jsx)(s.Fragment,{}):(0,i.jsxs)(o.xu,{children:[(0,i.jsxs)(r.J2,{isLazy:!0,placement:"top",children:[(0,i.jsx)(r.xo,{contentStyle:u,children:(0,i.jsxs)(o.xu,{zIndex:"0",children:[(0,i.jsx)(o.xv,{fontSize:"8px",textAlign:"right",color:"LightSlateGray",children:t.stage}),(0,i.jsxs)(o.xv,{fontSize:"14px",textAlign:"center",children:[t.label," "]})]})}),(0,i.jsx)(o.xu,{zIndex:"popover",children:(0,i.jsxs)(r.yk,{children:[(0,i.jsx)(r.QH,{}),(0,i.jsx)(o.xu,{sx:{"&::-webkit-scrollbar":{width:"16px",borderRadius:"8px",backgroundColor:"rgba(0, 0, 0, 0.05)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0, 0, 0, 0.05)"}},overflowX:"auto",maxHeight:"400px",children:(0,i.jsx)(c,{src:t.content,name:!1,displayDataTypes:!1})})]})})]}),(0,i.jsx)(d.HH,{type:"target",position:l.P.Left}),(0,i.jsx)(d.HH,{type:"source",position:l.P.Right})]})}}},function(e){e.O(0,[770,679,591,855,653,143,977,888,774,179],function(){return e(e.s=71718)}),_N_E=e.O()}]);