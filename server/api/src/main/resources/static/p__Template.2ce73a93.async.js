(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[2974],{30670:function(V,b,t){"use strict";t.r(b),t.d(b,{default:function(){return at}});var u=t(47673),h=t(4107),r=t(57663),Z=t(71577),y=t(2824),g=t(70844),E=t(54421),F=t(38272),S=t(68489),U=t(77613),ie=t(58024),B=t(39144),ce=t(9715),L=t(93766),D=t(11849),p=t(32059),G=t(93224),o=t(67294),z=t(94184),K=t.n(z),ae=t(19621),a=t.n(ae),e=t(85893),d=function(l){var s,v=l.title,c=l.children,x=l.last,T=l.block,j=l.grid,C=(0,G.Z)(l,["title","children","last","block","grid"]),I=K()(a().standardFormRow,(s={},(0,p.Z)(s,a().standardFormRowBlock,T),(0,p.Z)(s,a().standardFormRowLast,x),(0,p.Z)(s,a().standardFormRowGrid,j),s));return(0,e.jsxs)("div",(0,D.Z)((0,D.Z)({className:I},C),{},{children:[v&&(0,e.jsx)("div",{className:a().label,children:(0,e.jsx)("span",{children:v})}),(0,e.jsx)("div",{className:a().content,children:c})]}))},n=d,i=t(86582),de=t(71153),w=t(60331),J=t(58491),Q=t(57254),X=t(87653),O=t.n(X),ve=w.Z.CheckableTag,q=function(l){var s=l.children,v=l.checked,c=l.onChange,x=l.value;return(0,e.jsx)(ve,{checked:!!v,onChange:function(j){return c&&c(x,j)},children:s},x)};q.isTagSelectOption=!0;var _=function(l){var s,v=l.children,c=l.hideCheckAll,x=c===void 0?!1:c,T=l.className,j=l.style,C=l.expandable,I=l.actionsText,se=I===void 0?{}:I,$=l.onChange,H=(0,o.useState)(!1),R=(0,y.Z)(H,2),Ae=R[0],Fe=R[1],Ce=(0,o.useState)(l.value||[]),he=(0,y.Z)(Ce,2),ee=he[0],De=he[1],Re=function(A){return A&&A.type&&(A.type.isTagSelectOption||A.type.displayName==="TagSelectOption")},je=function(){var A=o.Children.toArray(v),te=A.filter(function(Y){return Re(Y)}).map(function(Y){return Y.props.value});return te||[]},N=function(A){var te=[];A&&(te=je()),$&&$(te),De(te)},oe=function(A,te){var Y=(0,i.Z)(ee||[]),Ye=Y.indexOf(A);te&&Ye===-1?Y.push(A):!te&&Ye>-1&&Y.splice(Ye,1),De(Y),$&&$(Y)},He=je().length===(ee==null?void 0:ee.length),Xe=se.expandText,nt=Xe===void 0?"\u66F4\u591A":Xe,qe=se.collapseText,rt=qe===void 0?"\u6536\u8D77":qe,_e=se.selectAllText,lt=_e===void 0?"\u5168\u90E8":_e,st=K()(O().tagSelect,T,(s={},(0,p.Z)(s,O().hasExpandTag,C),(0,p.Z)(s,O().expanded,Ae),s));return(0,e.jsxs)("div",{className:st,style:j,children:[x?null:(0,e.jsx)(ve,{checked:He,onChange:N,children:lt},"tag-select-__all__"),v&&o.Children.map(v,function(M){return Re(M)?o.cloneElement(M,{key:"tag-select-".concat(M.props.value),value:M.props.value,checked:ee&&ee.indexOf(M.props.value)>-1,onChange:oe}):M}),C&&(0,e.jsx)("a",{className:O().trigger,onClick:function(){Fe(function(A){return!A})},children:Ae?(0,e.jsxs)(e.Fragment,{children:[rt," ",(0,e.jsx)(J.Z,{})]}):(0,e.jsxs)(e.Fragment,{children:[nt,(0,e.jsx)(Q.Z,{})]})})]})};_.Option=q;var W=_,ne=L.Z.Item,ue=(0,U.P)(function(f){var l=f.shared,s=(0,S.dk)(l),v=s.tags,c=s.categories,x=L.Z.useForm(),T=(0,y.Z)(x,1),j=T[0];return(0,e.jsx)(B.Z,{bordered:!1,children:(0,e.jsxs)(L.Z,{layout:"inline",form:j,onValuesChange:function(I){s.loadTemplates(I)},children:[(0,e.jsx)(n,{title:"\u5206\u7C7B",block:!0,style:{paddingBottom:11},children:(0,e.jsx)(ne,{name:"categories",children:(0,e.jsx)(W,{expandable:!0,children:c.map(function(C){return(0,e.jsx)(W.Option,{value:C,children:C},C)})})})}),(0,e.jsx)(n,{title:"\u6807\u7B7E",block:!0,style:{paddingBottom:11},children:(0,e.jsx)(ne,{name:"tags",children:(0,e.jsx)(W,{expandable:!0,children:v.map(function(C){return(0,e.jsx)(W.Option,{value:C,children:C},C)})})})})]})})}),Ze=t(49111),Te=t(19650),Ie=t(22385),me=t(31097),we=t(71194),ge=t(50146),Me=t(402),xe=t(97272),re=t(27484),ye=t.n(re),Ee=t(42285),Be=t(40520),Le=t(71211),ze=function(l){var s=l.onOk,v=l.schema,c=l.onClose,x=new Le.j$(v).serialize(),T=(0,o.useRef)(null);return(0,e.jsx)(ge.Z,{visible:!0,onCancel:c,width:750,title:"".concat(v.title,"-\u9884\u89C8"),className:"template-preview-modal",okText:"\u7ACB\u5373\u4F7F\u7528",onOk:s,children:(0,e.jsx)("div",{style:{maxHeight:600,overflowY:"auto"},children:(0,e.jsx)(Be.Z,{ref:T,schema:x,headerVisible:!1,paginationVisible:!1,footerVisible:!1})})})},Se=t(84110),Ke=t.n(Se),Je=t(33852),m=t(73171),$e=t(90631),P=t(28991),Ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z"}}]},name:"desktop",theme:"outlined"},Oe=Ve,Ue=t(27029),pe=function(l,s){return o.createElement(Ue.Z,(0,P.Z)((0,P.Z)({},l),{},{ref:s,icon:Oe}))};pe.displayName="DesktopOutlined";var be=o.forwardRef(pe),Ge=t(99165);ye().locale("zh-cn"),ye().extend(Ke());var We=xe.Z.Paragraph,Pe=function(l){var s=l.item,v=l.type,c=(0,o.useRef)(-1),x=(0,o.useState)(0),T=(0,y.Z)(x,2),j=T[0],C=T[1],I=(0,o.useRef)(1),se=(0,o.useState)(!1),$=(0,y.Z)(se,2),H=$[0],R=$[1],Ae=(0,o.useState)(!1),Fe=(0,y.Z)(Ae,2),Ce=Fe[0],he=Fe[1],ee=(0,S.dk)(v);(0,o.useEffect)(function(){var N=new Image;N.src="/api/public/preview/".concat(s.previewUrl),N.onload=function(){var oe=N.height;I.current=oe}},[s]);var De=function(){if(!Ce){R(!0);var oe=-1,He=300;clearInterval(c.current),c.current=window.setInterval(function(){oe++,C(oe*He/I.current)},20)}},Re=function(){Ce||(clearInterval(c.current),C(0),R(!1))};(0,o.useEffect)(function(){clearInterval(c.current)},[]);var je=function(){he(!1),clearInterval(c.current),setTimeout(function(){localStorage.setItem("temp-template",JSON.stringify(s.template)),Ee.m8.push("/survey/new?fromTemplate")},20)};return(0,e.jsxs)(B.Z,{onMouseEnter:De,onMouseLeave:Re,className:"card",hoverable:!0,cover:(0,e.jsx)("div",{style:{backgroundImage:"url(/api/public/preview/".concat(s.previewUrl,")"),overflowY:"hidden",height:200,width:"100%",backgroundSize:"cover",backgroundPosition:"center top",backgroundPositionY:"".concat(j,"%")}}),children:[(0,e.jsx)(B.Z.Meta,{title:(0,e.jsx)("a",{children:s.name}),description:(0,e.jsx)(We,{className:"item",ellipsis:{rows:2}})}),(0,e.jsxs)("div",{className:"cardItemContent",children:[H&&(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(Te.Z,{children:[(0,e.jsx)(me.Z,{title:"\u5220\u9664\u6A21\u677F",children:(0,e.jsx)(Z.Z,{type:"primary",shape:"round",icon:(0,e.jsx)(m.Z,{}),onClick:function(){ge.Z.confirm({title:"\u5220\u9664\u6A21\u677F",type:"error",okType:"danger",okText:"\u5220\u9664",cancelText:"\u53D6\u6D88",onOk:function(){ee.deleteTemplate(s.id)},content:(0,e.jsxs)("span",{children:["\u786E\u8BA4\u5220\u9664\u6A21\u677F ",(0,e.jsxs)("strong",{children:[s.template.title," "]}),"\u5417\uFF1F"]})})}})}),(0,e.jsx)(me.Z,{title:"\u4E0B\u8F7D\u6A21\u677F",children:(0,e.jsx)(Z.Z,{type:"primary",shape:"round",icon:(0,e.jsx)($e.Z,{}),onClick:function(){(0,S.LR)("".concat(s.template.title,".sk.json"),JSON.stringify(s.template))}})}),(0,e.jsx)(me.Z,{title:"\u9884\u89C8\u6A21\u677F",children:(0,e.jsx)(Z.Z,{type:"primary",shape:"round",icon:(0,e.jsx)(be,{}),onClick:function(){he(!0),clearInterval(c.current)}})}),(0,e.jsx)(me.Z,{title:"\u5E94\u7528\u6A21\u677F",children:(0,e.jsx)(Z.Z,{type:"primary",shape:"round",icon:(0,e.jsx)(Ge.Z,{}),onClick:function(){return je()}})})]})}),!H&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:ye()(s.createAt).fromNow()}),(0,e.jsx)("div",{className:"avatarList"})]})]}),Ce&&(0,e.jsx)(ze,{id:s.id,schema:s.template,onOk:je,onClose:function(){he(!1)}})]})},ke=(0,U.P)(function(){var f=(0,S.dk)(1),l=f.loading,s=f.categories,v=f.tags,c=f.templates;(0,o.useEffect)(function(){v.length===0&&f.loadTags(),s.length===0&&f.loadCategories()},[]),(0,o.useEffect)(function(){f.loadTemplates({current:1,pageSize:10})},[]);var x=c&&(0,e.jsx)(F.ZP,{rowKey:"id",loading:l,grid:{gutter:16,xs:1,sm:2,md:3,lg:4,xl:6,xxl:6},dataSource:c,renderItem:function(j){return(0,e.jsx)(F.ZP.Item,{children:(0,e.jsx)(Pe,{item:j,type:1})})}});return(0,e.jsxs)("div",{className:"coverCardList",children:[(0,e.jsx)(ue,{shared:1}),(0,e.jsx)("div",{className:"cardList",children:x})]})}),Ne=(0,U.P)(function(){var f=!1,l=(0,S.dk)(0),s=l.categories,v=l.tags,c=l.templates;(0,o.useEffect)(function(){v.length===0&&l.loadTags(),s.length===0&&l.loadCategories()},[]),(0,o.useEffect)(function(){l.loadTemplates({current:1,pageSize:10})},[]);var x=c&&(0,e.jsx)(F.ZP,{rowKey:"id",loading:f,grid:{gutter:16,xs:1,sm:2,md:3,lg:4,xl:6,xxl:6},dataSource:c,renderItem:function(j){return(0,e.jsx)(F.ZP.Item,{children:(0,e.jsx)(Pe,{item:j,type:0})})}});return(0,e.jsxs)("div",{className:"coverCardList",children:[(0,e.jsx)(ue,{shared:0}),(0,e.jsx)("div",{className:"cardList",children:x})]})}),Qe=t(57338),le=t(25084),fe=t(18673),k=t(11628),et=function(l){var s=l.onClose,v="new",c=(0,S.iZ)(v);return(0,e.jsx)(le.Z,{visible:!0,width:"100%",onClose:s,title:!1,push:!1,closable:!1,bodyStyle:{padding:"0px 5px"},children:(0,e.jsx)(k.xI.Provider,{value:{id:v,store:c},children:(0,e.jsx)(fe.default,{mode:"template",onClose:s})})})},tt=[{key:"public",tab:"\u516C\u5171\u5E93"},{key:"private",tab:"\u79C1\u6709\u5E93"}];function at(){var f=(0,o.useState)("public"),l=(0,y.Z)(f,2),s=l[0],v=l[1],c=(0,o.useState)(!1),x=(0,y.Z)(c,2),T=x[0],j=x[1],C=function(R){v(R)},I=(0,S.dk)(0),se=(0,S.dk)(1),$=function(R){s==="public"?se.loadTemplates({name:R,current:1,pageSize:10}):I.loadTemplates({name:R,current:1,pageSize:10})};return(0,e.jsxs)(g.ZP,{className:"survey-template",tabList:tt,onTabChange:C,extra:[(0,e.jsx)(Z.Z,{type:"primary",onClick:function(){return j(!0)},children:"\u6DFB\u52A0\u6A21\u677F"},"1")],content:(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)(h.Z.Search,{className:"search",placeholder:"\u8F93\u5165\u6A21\u677F\u540D\u5B57\u68C0\u7D22",enterButton:"\u641C\u6A21\u677F",size:"large",onSearch:function(R){$(R)},style:{maxWidth:522,width:"100%"}})}),children:[s==="public"&&(0,e.jsx)(ke,{}),s==="private"&&(0,e.jsx)(Ne,{}),T&&(0,e.jsx)(et,{onClose:function(){j(!1),$()}})]})}},39144:function(V,b,t){"use strict";t.d(b,{Z:function(){return ae}});var u=t(96156),h=t(22122),r=t(67294),Z=t(94184),y=t.n(Z),g=t(98423),E=t(65632),F=function(a,e){var d={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(d[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(a);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(a,n[i])&&(d[n[i]]=a[n[i]]);return d},S=function(e){var d=e.prefixCls,n=e.className,i=e.hoverable,de=i===void 0?!0:i,w=F(e,["prefixCls","className","hoverable"]);return r.createElement(E.C,null,function(J){var Q=J.getPrefixCls,X=Q("card",d),O=y()("".concat(X,"-grid"),n,(0,u.Z)({},"".concat(X,"-grid-hoverable"),de));return r.createElement("div",(0,h.Z)({},w,{className:O}))})},U=S,ie=function(a,e){var d={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(d[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(a);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(a,n[i])&&(d[n[i]]=a[n[i]]);return d},B=function(e){return r.createElement(E.C,null,function(d){var n=d.getPrefixCls,i=e.prefixCls,de=e.className,w=e.avatar,J=e.title,Q=e.description,X=ie(e,["prefixCls","className","avatar","title","description"]),O=n("card",i),ve=y()("".concat(O,"-meta"),de),q=w?r.createElement("div",{className:"".concat(O,"-meta-avatar")},w):null,_=J?r.createElement("div",{className:"".concat(O,"-meta-title")},J):null,W=Q?r.createElement("div",{className:"".concat(O,"-meta-description")},Q):null,ne=_||W?r.createElement("div",{className:"".concat(O,"-meta-detail")},_,W):null;return r.createElement("div",(0,h.Z)({},X,{className:ve}),q,ne)})},ce=B,L=t(67164),D=t(71230),p=t(15746),G=t(97647),o=function(a,e){var d={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(d[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(a);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(a,n[i])&&(d[n[i]]=a[n[i]]);return d};function z(a){var e=a.map(function(d,n){return r.createElement("li",{style:{width:"".concat(100/a.length,"%")},key:"action-".concat(n)},r.createElement("span",null,d))});return e}var K=r.forwardRef(function(a,e){var d,n,i=r.useContext(E.E_),de=i.getPrefixCls,w=i.direction,J=r.useContext(G.Z),Q=function(fe){var k;(k=a.onTabChange)===null||k===void 0||k.call(a,fe)},X=function(){var fe;return r.Children.forEach(a.children,function(k){k&&k.type&&k.type===U&&(fe=!0)}),fe},O=a.prefixCls,ve=a.className,q=a.extra,_=a.headStyle,W=_===void 0?{}:_,ne=a.bodyStyle,ue=ne===void 0?{}:ne,Ze=a.title,Te=a.loading,Ie=a.bordered,me=Ie===void 0?!0:Ie,we=a.size,ge=a.type,Me=a.cover,xe=a.actions,re=a.tabList,ye=a.children,Ee=a.activeTabKey,Be=a.defaultActiveTabKey,Le=a.tabBarExtraContent,ze=a.hoverable,Se=a.tabProps,Ke=Se===void 0?{}:Se,Je=o(a,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),m=de("card",O),$e=ue.padding===0||ue.padding==="0px"?{padding:24}:void 0,P=r.createElement("div",{className:"".concat(m,"-loading-block")}),Ve=r.createElement("div",{className:"".concat(m,"-loading-content"),style:$e},r.createElement(D.Z,{gutter:8},r.createElement(p.Z,{span:22},P)),r.createElement(D.Z,{gutter:8},r.createElement(p.Z,{span:8},P),r.createElement(p.Z,{span:15},P)),r.createElement(D.Z,{gutter:8},r.createElement(p.Z,{span:6},P),r.createElement(p.Z,{span:18},P)),r.createElement(D.Z,{gutter:8},r.createElement(p.Z,{span:13},P),r.createElement(p.Z,{span:9},P)),r.createElement(D.Z,{gutter:8},r.createElement(p.Z,{span:4},P),r.createElement(p.Z,{span:3},P),r.createElement(p.Z,{span:16},P))),Oe=Ee!==void 0,Ue=(0,h.Z)((0,h.Z)({},Ke),(d={},(0,u.Z)(d,Oe?"activeKey":"defaultActiveKey",Oe?Ee:Be),(0,u.Z)(d,"tabBarExtraContent",Le),d)),pe,be=re&&re.length?r.createElement(L.Z,(0,h.Z)({size:"large"},Ue,{className:"".concat(m,"-head-tabs"),onChange:Q}),re.map(function(le){return r.createElement(L.Z.TabPane,{tab:le.tab,disabled:le.disabled,key:le.key})})):null;(Ze||q||be)&&(pe=r.createElement("div",{className:"".concat(m,"-head"),style:W},r.createElement("div",{className:"".concat(m,"-head-wrapper")},Ze&&r.createElement("div",{className:"".concat(m,"-head-title")},Ze),q&&r.createElement("div",{className:"".concat(m,"-extra")},q)),be));var Ge=Me?r.createElement("div",{className:"".concat(m,"-cover")},Me):null,We=r.createElement("div",{className:"".concat(m,"-body"),style:ue},Te?Ve:ye),Pe=xe&&xe.length?r.createElement("ul",{className:"".concat(m,"-actions")},z(xe)):null,ke=(0,g.Z)(Je,["onTabChange"]),Ne=we||J,Qe=y()(m,(n={},(0,u.Z)(n,"".concat(m,"-loading"),Te),(0,u.Z)(n,"".concat(m,"-bordered"),me),(0,u.Z)(n,"".concat(m,"-hoverable"),ze),(0,u.Z)(n,"".concat(m,"-contain-grid"),X()),(0,u.Z)(n,"".concat(m,"-contain-tabs"),re&&re.length),(0,u.Z)(n,"".concat(m,"-").concat(Ne),Ne),(0,u.Z)(n,"".concat(m,"-type-").concat(ge),!!ge),(0,u.Z)(n,"".concat(m,"-rtl"),w==="rtl"),n),ve);return r.createElement("div",(0,h.Z)({ref:e},ke,{className:Qe}),pe,Ge,We,Pe)});K.Grid=U,K.Meta=ce;var ae=K},58024:function(V,b,t){"use strict";var u=t(38842),h=t.n(u),r=t(83940),Z=t.n(r),y=t(18106),g=t(13062),E=t(89032)},84110:function(V){(function(b,t){V.exports=t()})(this,function(){"use strict";return function(b,t,u){b=b||{};var h=t.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Z(g,E,F,S){return h.fromToBase(g,E,F,S)}u.en.relativeTime=r,h.fromToBase=function(g,E,F,S,U){for(var ie,B,ce,L=F.$locale().relativeTime||r,D=b.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=D.length,G=0;G<p;G+=1){var o=D[G];o.d&&(ie=S?u(g).diff(F,o.d,!0):F.diff(g,o.d,!0));var z=(b.rounding||Math.round)(Math.abs(ie));if(ce=ie>0,z<=o.r||!o.r){z<=1&&G>0&&(o=D[G-1]);var K=L[o.l];U&&(z=U(""+z)),B=typeof K=="string"?K.replace("%d",z):K(z,E,o.l,ce);break}}if(E)return B;var ae=ce?L.future:L.past;return typeof ae=="function"?ae(B):ae.replace("%s",B)},h.to=function(g,E){return Z(g,E,this,!0)},h.from=function(g,E){return Z(g,E,this)};var y=function(g){return g.$u?u.utc():u()};h.toNow=function(g){return this.to(y(this),g)},h.fromNow=function(g){return this.from(y(this),g)}}})},97435:function(V,b){"use strict";function t(u,h){for(var r=Object.assign({},u),Z=0;Z<h.length;Z+=1){var y=h[Z];delete r[y]}return r}b.Z=t},19621:function(V){V.exports={standardFormRow:"standardFormRow___1YytV",label:"label___12r3x",content:"content___1TohL",standardFormRowLast:"standardFormRowLast___3Ewjs",standardFormRowBlock:"standardFormRowBlock___2xtd8",standardFormRowGrid:"standardFormRowGrid___3D9br"}},87653:function(V){V.exports={tagSelect:"tagSelect___28brO",expanded:"expanded___2n85Z",trigger:"trigger___3hQQL",anticon:"anticon___3z9aU",hasExpandTag:"hasExpandTag___2D-qj"}},83940:function(){}}]);
