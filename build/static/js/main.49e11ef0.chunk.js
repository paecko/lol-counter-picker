(this["webpackJsonplol-frontend"]=this["webpackJsonplol-frontend"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},51:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(16),c=n.n(i),s=(n(51),n(14)),r=n(19),o=n.n(r),l=function(){return o.a.get("/api/champions")},u=n(102),p=(n(26),n(27),n(11)),h=n.n(p),m=n(18),d=n(15),j=n(2),f=function(e){var t=e.searchText,n=e.setSearchText,a=e.setDisplayChampions,i=e.champions;return Object(j.jsx)("form",{children:Object(j.jsx)("input",{style:{borderRadius:10,height:25,width:200,border:"4px solid #4F485D",backgroundColor:"#2A1355"},type:"text",value:t,onChange:function(e){if(n(e.target.value),""!==e.target.value){var t=i.filter((function(t){return t.name.toLowerCase().startsWith(e.target.value.toLowerCase())}));a(t)}else a(i)},placeholder:"Search Champions"})})},b="/api/statistics",x={getAll:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(b);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),get:function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(b,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=n(94),O=n(95),v=n(103),y=n(28),C=n.n(y),w=function(){var e=Object(d.a)(h.a.mark((function e(t,n,a,i,c){var s,r,o,l,u,p,d,j,f,b;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=n.filter((function(e){return e.name!==t.target.value})),1!==n.length){e.next=5;break}c([]),e.next=12;break;case 5:return e.next=7,x.get(t.target.value);case 7:for(r=e.sent,o=r[0].winMap,l={},u=0;u<o.length;u++)p=o[u].WinRate,d=o[u].championName,j=i[u].WinRate,f=j*n.length,b=(f-p)/(n.length-1),l[d]={WinRate:b,Games:o[u].Games};c(i.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{WinRate:l[e.championName].WinRate,Games:e.Games-l[e.championName].Games})})));case 12:a(s);case 13:case"end":return e.stop()}}),e)})));return function(t,n,a,i,c){return e.apply(this,arguments)}}(),W=function(e){var t=e.selectedChampions,n=e.setSelectedChampions,a=e.currentWinMap,i=e.setCurrentWinMap,c=function(e){e.preventDefault(),w(e,t,n,a,i)};return Object(j.jsx)(C.a,{row:!0,style:{padding:30},children:t.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(C.a,{style:{margin:15},children:Object(j.jsx)("input",{width:"90",type:"image",src:"/assets/images/"+e.image,alt:e.name,onClick:c,value:e.name})})},e.name)}))})},S=function(){var e=Object(d.a)(h.a.mark((function e(t,n,a,i,c,s){var r,o,l,u,p,d,j,f,b,g,O,v,y,C,w;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.filter((function(e){return e.name===t.target.value})),o=r[0],l={name:o.name,image:o.image,championId:o.championId},!(0===a.filter((function(e){return e.name===l.name})).length&&a.length<5)){e.next=23;break}if(0!==a.length){e.next=13;break}return e.next=8,x.get(l.name);case 8:u=e.sent,p=u[0].winMap,s(p),e.next=22;break;case 13:if(!(a.length>0)){e.next=22;break}return d=l,e.next=17,x.get(d.name);case 17:for(j=e.sent,f=j[0].winMap,b={},g=0;g<f.length;g++)O=f[g].WinRate,v=f[g].championName,y=c[g].WinRate,C=y*a.length,w=(C+O)/(a.length+1),b[v]={WinRate:w,Games:f[g].Games};s(c.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{WinRate:b[e.championName].WinRate,Games:b[e.championName].Games+e.Games})})));case 22:i(a.concat(l));case 23:case"end":return e.stop()}}),e)})));return function(t,n,a,i,c,s){return e.apply(this,arguments)}}(),N=function(e){var t=e.champions,n=e.displayChampions,i=e.selectedChampions,c=e.setSelectedChampions,r=e.setCurrentWinMap,o=e.currentWinMap,l=e.searchText,u=e.setSearchText,p=e.setDisplayChampions,h=i.map((function(e){return e.name})),m=function(e){e.preventDefault(),h.includes(e.target.value)?w(e,i,c,o,r):S(e,t,i,c,o,r)},d=Object(a.useState)({style:{display:"none"},champ:""}),b=Object(s.a)(d,2),x=b[0],y=b[1],C=function(e){var t="";return t=h.includes(e)?"Remove Enemy":"Add Enemy",Object(j.jsx)("div",{className:"championListName",style:x,children:t})};return Object(j.jsxs)("div",{style:{marginTop:100,marginLeft:100},children:[Object(j.jsx)(f,{searchText:l,setSearchText:u,setDisplayChampions:p,champions:t}),Object(j.jsx)(g.a,{id:"style-1",style:{maxHeight:800,maxWidth:200,overflow:"auto",backgroundColor:"#130E1F",borderRadius:20},children:Object(j.jsx)(O.a,{cols:1,rowHeight:90,style:{paddingTop:10,position:"center"},children:n.map((function(e){return Object(j.jsx)(v.a,{onMouseEnter:function(t){y({style:{display:"block"},champ:e.name})},onMouseLeave:function(e){y({style:{display:"none"},champ:""})},children:Object(j.jsx)("form",{onSubmit:m,children:Object(j.jsxs)("div",{className:"hvr-grow-shadow ".concat(h.includes(e.name)?"opacitySelectedChamps":""),id:"addEnemy",style:{position:"relative",textAlign:"center",marginLeft:40},children:[x.champ===e.name?C(e.name):(t=e.name,Object(j.jsx)("div",{className:"championListName",style:x,children:t})),Object(j.jsx)("input",{type:"image",src:"/assets/images/"+e.image,alt:e.name,value:e.name,onClick:m,width:"100",height:"90"})]})})},e.name);var t}))})})]})},R=n(97),k=n(101),T=n(100),L=n(96),M=n(98),E=n(99),G=function(e){var t=e.currentWinMap,n=e.selectedChampions,a=JSON.parse(JSON.stringify(t)),i=n.map((function(e){return e.name}));return(a=a.filter((function(e){return!i.includes(e.championName)}))).map((function(e){return e.WinRate=100-e.WinRate})),a.sort((function(e,t){return t.WinRate-e.WinRate})),Object(j.jsx)(L.a,{style:{width:"100%",backgroundColor:"#28252F",paddingLeft:"10%",paddingRight:"10%",overflow:"auto",maxHeight:800,maxWidth:800,minWidth:500,position:"relative",borderRadius:10},component:g.a,id:"style-1",children:Object(j.jsxs)(R.a,{style:{borderCollapse:"collapse"},children:[Object(j.jsx)(M.a,{children:Object(j.jsxs)(E.a,{children:[Object(j.jsx)(T.a,{class:"counterListHeaderText",children:"Champion"}),Object(j.jsx)(T.a,{class:"counterListHeaderText",children:"WinRate"}),Object(j.jsx)(T.a,{class:"counterListHeaderText",children:"Games"})]})}),Object(j.jsx)(k.a,{children:a.map((function(e,t){return Object(j.jsxs)(E.a,{children:[Object(j.jsx)(T.a,{class:"counterListCellText",style:{paddingTop:.01,paddingBottom:25,paddingLeft:30},component:"th",scope:"row",children:Object(j.jsxs)("div",{style:{position:"absolute"},children:[Object(j.jsx)("img",{style:{width:"30%",height:"20%",float:"left"},src:"/assets/images/"+e.championName+".png"}),Object(j.jsx)("p",{children:e.championName})]})}),Object(j.jsx)(T.a,{class:"counterListCellText",style:{textAlign:"center"},children:e.WinRate.toFixed(1)}),Object(j.jsx)(T.a,{class:"counterListCellText",style:{textAlign:"center"},children:e.Games})]},e.championName)}))})]})})},A=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)([]),r=Object(s.a)(c,2),o=r[0],p=r[1],h=Object(a.useState)(""),m=Object(s.a)(h,2),d=m[0],f=m[1],b=Object(a.useState)([]),x=Object(s.a)(b,2),g=x[0],O=x[1],v=Object(a.useState)([]),y=Object(s.a)(v,2),C=y[0],w=y[1];Object(a.useEffect)((function(){l().then((function(e){return i(e.data)}))}),[]),Object(a.useEffect)((function(){p(n)}),[n]),Object(a.useEffect)((function(){document.body.style.backgroundColor="#1b1625"}),[]),Object(a.useEffect)((function(){var e=localStorage.getItem("selectedChampions"),t=localStorage.getItem("currentWinMap");if("[]"!==e&&e){console.log("loading saved selected champs");var n=JSON.parse(e);O(n)}if("[]"!==t&&t){console.log("loading win map");var a=JSON.parse(t);w(a)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("selectedChampions",JSON.stringify(g))}),[g]),Object(a.useEffect)((function(){localStorage.setItem("currentWinMap",JSON.stringify(C))}),[C]);var S=function(){O([]),w([])};return Object(j.jsxs)("div",{style:{float:"left",position:"relative"},children:[Object(j.jsx)("div",{style:{float:"left",paddingTop:0,paddingLeft:100},children:Object(j.jsx)(N,{champions:n,selectedChampions:g,setSelectedChampions:O,setCurrentWinMap:w,currentWinMap:C,displayChampions:o,searchText:d,setSearchText:f,setDisplayChampions:p})}),g.length>0?Object(j.jsxs)("div",{style:{position:"absolute",left:400,top:50},children:[Object(j.jsx)("div",{style:{position:"relative",left:65},children:Object(j.jsx)(W,{selectedChampions:g,setSelectedChampions:O,currentWinMap:C,setCurrentWinMap:w})}),Object(j.jsx)("div",{style:{position:"absolute",left:100,top:150},children:Object(j.jsx)(u.a,{variant:"contained",color:"primary",onClick:S,style:{maxWidth:100,minWidth:100,maxHeight:30,minHeight:30,whiteSpace:"nowrap"},children:"Clear All"})}),Object(j.jsx)("div",{style:{position:"absolute",left:100,top:200},children:C.length>0?Object(j.jsx)(G,{currentWinMap:C,selectedChampions:g}):""})]}):Object(j.jsxs)("div",{style:{position:"absolute"},children:[Object(j.jsx)("div",{style:{color:"white",position:"relative",left:650,top:200,whiteSpace:"nowrap"},children:"Choose enemy champions from the list on the left. You can also search for champions."}),Object(j.jsx)("div",{style:{color:"white",position:"relative",left:600,top:250},children:Object(j.jsx)("h1",{children:"About LolCounter"})})]})]})};c.a.render(Object(j.jsx)(A,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.49e11ef0.chunk.js.map