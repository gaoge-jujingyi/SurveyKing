(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[1843],{64752:function(){},31930:function(){},43657:function($,w,e){"use strict";e.r(w),e.d(w,{ExamResult:function(){return he},default:function(){return ge}});var h={};e.r(h),e.d(h,{Number0:function(){return b},Number1:function(){return Y},Number2:function(){return H},Number3:function(){return ne},Number4:function(){return g},Number5:function(){return re},Number6:function(){return de},Number7:function(){return ae},Number8:function(){return Q},Number9:function(){return X},NumberDot:function(){return N},ScoreUnderline:function(){return A}});var f=e(9761),c=e(67294),E=e(51615),C=e(39428),o=e(3182),P=e(69610),W=e(54941),B=e(3980),i=e(54531),O=function(){function d(a){(0,P.Z)(this,d),this.id=void 0,this.answerId=void 0,this.examResult=void 0,this.id=a.id,this.answerId=a.answerId,this.makeObservable(),this.loadExamResult()}return(0,W.Z)(d,[{key:"makeObservable",value:function(){(0,i.Ou)(this,{id:i.LO.ref,answerId:i.LO.ref,examResult:i.LO.ref,loadExamResult:i.aD})}},{key:"loadExamResult",value:function(){var a=(0,o.Z)((0,C.Z)().mark(function m(){var Z;return(0,C.Z)().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,B.hi.loadExamResult({id:this.id,answerId:this.answerId});case 2:Z=S.sent,Z.success&&(this.examResult=Z.data);case 4:case"end":return S.stop()}},m,this)}));function v(){return a.apply(this,arguments)}return v}()}]),d}(),M=e(20136),u=e(55241),n=e(49111),r=e(19650),p=e(57663),T=e(71577),z=e(34792),ie=e(48086),q=e(94657),k=e(28991),F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 00-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z"}}]},name:"select",theme:"outlined"},se=F,y=e(27029),s=function(a,v){return c.createElement(y.Z,(0,k.Z)((0,k.Z)({},a),{},{ref:v,icon:se}))};s.displayName="SelectOutlined";var j=c.forwardRef(s),l=e(23538),x=e(92592),U=e(74855),I=c.createContext({});function K(){return(0,c.useContext)(I)}var t=e(85893),ue=(0,f.Pi)(function(){var d=K(),a=d.examResult,v=(0,c.useState)(""),m=(0,q.Z)(v,2),Z=m[0],V=m[1];(0,c.useEffect)(function(){function R(){return D.apply(this,arguments)}function D(){return D=(0,o.Z)((0,C.Z)().mark(function fe(){return(0,C.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:x.toDataURL(window.location.href,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.3,margin:1}).then(function(oe){V(oe)}).catch(function(oe){console.error(oe)});case 1:case"end":return _.stop()}},fe)})),D.apply(this,arguments)}R()},[]);var S=function(){var R=(0,o.Z)((0,C.Z)().mark(function D(fe){return(0,C.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:x.toDataURL(window.location.href,{errorCorrectionLevel:"H",margin:1,width:fe}).then(function(oe){V(oe);var me=document.createElement("a");me.href=oe,me.setAttribute("download","".concat(a==null?void 0:a.name,"_").concat(fe,".png")),document.body.appendChild(me),me.click(),document.body.removeChild(me)});case 1:case"end":return _.stop()}},D)}));return function(fe){return R.apply(this,arguments)}}(),xe=function(){if(a!=null&&a.schema){var D;return(0,t.jsxs)("span",{className:"total-score",children:["\u603B\u5206",(D=a.schema.attribute)===null||D===void 0?void 0:D.examScore,"\u5206"]})}return(0,t.jsx)(t.Fragment,{})};return(0,t.jsxs)("div",{className:"exam-result-header",children:[(0,t.jsxs)("div",{className:"header-content",children:[(0,t.jsx)(U.CopyToClipboard,{text:"".concat(window.location.href),onCopy:function(){return ie.default.success("\u590D\u5236\u6210\u529F")},children:(0,t.jsx)(T.Z,{icon:(0,t.jsx)(j,{}),children:"\u5206\u4EAB\u7ED9\u597D\u53CB"})}),(0,t.jsx)(u.Z,{overlayInnerStyle:{border:"1px solid rgb(225, 231, 242)",borderRadius:3,boxShadow:"rgb(224 229 236 / 40%) 0px 3px 8px 0px"},content:(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:Z,height:100,width:100}),(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsxs)(r.Z,{children:[(0,t.jsx)("a",{onClick:function(){return S(256)},children:"\u5C0F\u53F7"}),(0,t.jsx)("a",{onClick:function(){return S(512)},children:"\u4E2D\u53F7"}),(0,t.jsx)("a",{onClick:function(){return S(1024)},children:"\u5927\u53F7"})]})})]}),children:(0,t.jsx)(T.Z,{icon:(0,t.jsx)(l.Z,{}),type:"text"})})]}),(0,t.jsxs)("div",{className:"title",children:[a==null?void 0:a.name,xe()]})]})}),ee=e(66456),L=e(53831),G=e(18111),te=e(27484),ce=e.n(te),b=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024","p-id":"1361","data-spm-anchor-id":"a313x.7781069.0.i5",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M383.07989 126.788545l396.245994 67.928045 1.415284 701.919397-533.517367-66.51276 135.856089-703.334682z m512.288105 834.944918l-1.415284-815.13094-48.114067-56.605771L347.703381 5.085297 282.605904 51.78408 122.689985 868.335898l48.119661 67.928045 659.460873 82.075292 65.097476-56.605772z","p-id":"1362","data-spm-anchor-id":"a313x.7781069.0.i6"})}),Y=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M721.875514 50.613231L635.921319 3.610078 300.167797 252.066458l65.809987 87.297142 237.712802-178.623125L541.909442 1012.213591l107.44135 8.057683L721.875514 50.613231z","p-id":"1206"})}),H=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M897.62003 940.716242l-11.754723-104.450063-552.277836 61.364204 485.693625-547.052281-5.225554-75.726157-319.873811-267.6571L431.508365 3.278453 120.770953 216.094971 179.527927 302.266689l278.097114-189.312619 248.064046 207.590964L163.856812 928.967066l43.085859 87.475333 690.677359-75.726157z","p-id":"1518"})}),ne=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M737.423214 989.936662l187.89454-346.261526-33.553787-79.180716-340.891365-84.55643 381.153688-295.258882-26.839698-96.629574L290.505882 2.154728l-14.761001 107.369896 488.523583 68.445948-367.736616 285.862489 20.131162 95.291198 379.815312 93.947271-134.209592 249.626398-550.260996-118.104663-24.157393 104.687592 590.523317 127.495503 59.049556-26.839698z","p-id":"1676"})}),g=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M966.522808 751.55574l-4.036306-108.963429-219.262936 5.383613 44.388142-521.92977-108.957815-9.414305-44.393755 534.033075-447.940178 9.419919L429.79512 41.300564 328.909918 2.290421 54.491615 695.058679l52.460754 73.983979 517.893463-10.761612-21.523224 254.236772 107.616122 8.072612 22.864917-263.656691 232.719161-5.377999z","p-id":"1832"})}),re=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M784.968235 982.615128l170.861419-435.28703-43.393376-74.585138-538.346299-56.953806 56.953806-301.041546h474.615051V6.269714H384.938323l-54.24172 44.746646-74.579592 402.741998 47.458732 65.090064 524.785868 55.600536-128.821312 325.444774-614.284706-135.6043L60.846819 871.419602l661.743438 145.093828 62.377978-33.898302z","p-id":"1988"})}),de=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M672.288828 1004.206903l275.275297-318.669393-20.336395-86.788192-424.444619-180.357063-42.033443 101.704559 353.922156 150.524329-199.338452 233.236208-413.593272-151.87369L576.009942 53.618752 479.731056 2.088969 74.273472 757.403689l31.187742 75.94249 508.517151 185.777092 58.310463-14.916368z","p-id":"2146"})}),ae=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M885.422422 150.609477l-47.387874-83.290486L141.556268 8.440271 130.065421 123.326396l616.05911 54.566161-363.316338 789.818369 104.830936 47.39346 397.783293-864.494909z","p-id":"2302"})}),Q=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M590.001388 117.347799l121.780542 133.82422-175.307999 157.905999-219.468152-171.287864 272.995609-120.442355z m-49.512898 432.245371l263.628304 204.748101-220.806338 151.215067-343.91949-85.643932 301.097524-270.319236z m84.305746 459.0091l301.097524-204.748101 2.676373-89.658491-305.112084-236.864576 200.733542-180.660744 2.676372-77.614814L643.528846 16.983816l-62.894763-13.381864-390.761591 171.287864-12.043678 91.002253 275.677557 216.791779L90.846695 807.868728l24.087356 92.334865 465.700032 115.089609 44.160153-6.690932z","p-id":"2458"})}),X=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M908.989292 186.728233l-39.335692-75.962037L392.18431 6.317002l-55.614067 23.06289L108.684132 344.076574l20.34797 81.386304 377.089689 180.405657 47.480454-99.019353-317.411602-150.563826L404.393092 121.61473l375.735016 81.391879-345.893185 769.103081 100.374026 44.765533L908.989292 186.728233z","p-id":"2614"})}),N=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:"12",height:"12",children:(0,t.jsx)("path",{d:"M653.3 515.4c0 38.7-14 72-42.1 99.9s-61.4 41.9-100 41.9c-38.3 0-71.1-13.9-98.6-41.6-27.5-27.8-41.3-61.1-41.3-100.2 0-38.7 13.6-71.9 40.7-99.6s60.2-41.6 99.2-41.6c39.7 0 73.3 14 100.8 41.9 27.5 27.8 41.3 61 41.3 99.3z","p-id":"7081"})}),A=(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"512",height:"512",children:(0,t.jsx)("path",{d:"M281.6 435.2c38.4-8.533333 247.466667-59.733333 520.533333-76.8 46.933333-4.266667 55.466667-29.866667 29.866667-38.4-21.333333-8.533333-192-29.866667-563.2 55.466667-42.666667 8.533333-64 21.333333-81.066667 42.666666-8.533333 8.533333-8.533333 25.6 0 34.133334 12.8 17.066667 64-12.8 93.866667-17.066667z m550.4 38.4c-64 4.266667-392.533333 17.066667-721.066667 136.533333-59.733333 21.333333-93.866667 42.666667-93.866666 76.8 0 12.8 4.266667 4.266667 17.066666 21.333334 42.666667 42.666667 170.666667-145.066667 887.466667-196.266667 0 0 76.8 0 76.8-21.333333 4.266667-25.6-93.866667-21.333333-166.4-17.066667z","p-id":"1873"})}),le=(0,f.Pi)(function(){var d,a=K(),v=a.examResult;if(!v||!v.examScore)return(0,t.jsx)(t.Fragment,{});var m=(d=v.metaInfo)===null||d===void 0?void 0:d.answerInfo,Z=function(){return v.examScore===void 0?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)("div",{className:"score",children:"".concat(v.examScore).split("").map(function(R){return R!=="."?c.cloneElement(h["Number"+R],{key:R,height:32,width:24,fill:"currentColor",focusable:"false","aria-hidden":"true"}):c.cloneElement(N,{key:R,height:12,width:12,fill:"currentColor",focusable:"false","aria-hidden":"true"})}).concat([c.cloneElement(A,{key:"underline",height:24,width:48,className:"score-underline",fill:"currentColor",focusable:"false","aria-hidden":"true"})])})},V=[{title:"\u5F53\u524D\u6392\u540D",dataIndex:"rank",align:"center"},{title:"\u7B54\u9898\u65F6\u957F",dataIndex:"duration",align:"center"},{title:"\u63D0\u4EA4\u65F6\u95F4",dataIndex:"submitTime",align:"center"}],S=[{key:"1",rank:v.rank,duration:(0,G.gh)(((m==null?void 0:m.endTime)||0)-((m==null?void 0:m.startTime)||0)),submitTime:ce()(m==null?void 0:m.endTime).format("YYYY.MM.DD HH:mm")}];return v.rank===void 0&&V.splice(0,1),(0,t.jsxs)("div",{className:"exam-result-mine",children:[Z(),(0,t.jsx)(L.Z,{className:"result-info",bordered:!0,size:"small",rowKey:"key",pagination:!1,columns:V,dataSource:S})]})}),J=e(68068),ve=(0,f.Pi)(function(){var d,a=K(),v=a.examResult,m=(0,B.dD)();return!v||!v.schema?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)("div",{children:(0,t.jsx)(J.Z,{schema:v.schema,initialValues:v.answer,readOnly:!0,theme:m?"antdMobile":"antd",headerVisible:!1,footerVisible:!1,paginationVisible:!1,questionNumber:!1,correctAnswerVisible:!0,examScoreVisible:!0,mode:"exam",questionScore:(d=v.examInfo)===null||d===void 0?void 0:d.questionScore})})}),he=(0,f.Pi)(function(d){var a=(0,E.UO)(),v=a.id,m=a.answerId,Z=(0,c.useMemo)(function(){return new O({id:v,answerId:m})},[]);return(0,t.jsx)(I.Provider,{value:Z,children:(0,t.jsxs)("div",{className:"exam-result",children:[(0,t.jsx)(ue,{}),(0,t.jsx)(le,{}),(0,t.jsx)(ve,{})]})})}),ge=he},81643:function($,w,e){"use strict";e.d(w,{Z:function(){return h}});var h=function(c){if(!c)return null;var E=typeof c=="function";return E?c():c}},9676:function($,w,e){"use strict";e.d(w,{Z:function(){return se}});var h=e(96156),f=e(22122),c=e(36228),E=e.n(c),C=e(45947),o=e(67294),P=e(53124),W=e(65223),B=e(85061),i=e(28481),O=e(98423),M=function(y,s){var j={};for(var l in y)Object.prototype.hasOwnProperty.call(y,l)&&s.indexOf(l)<0&&(j[l]=y[l]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,l=Object.getOwnPropertySymbols(y);x<l.length;x++)s.indexOf(l[x])<0&&Object.prototype.propertyIsEnumerable.call(y,l[x])&&(j[l[x]]=y[l[x]]);return j},u=o.createContext(null),n=function(s,j){var l=s.defaultValue,x=s.children,U=s.options,I=U===void 0?[]:U,K=s.prefixCls,t=s.className,ue=s.style,ee=s.onChange,L=M(s,["defaultValue","children","options","prefixCls","className","style","onChange"]),G=o.useContext(P.E_),te=G.getPrefixCls,ce=G.direction,b=o.useState(L.value||l||[]),Y=(0,i.Z)(b,2),H=Y[0],ne=Y[1],g=o.useState([]),re=(0,i.Z)(g,2),de=re[0],ae=re[1];o.useEffect(function(){"value"in L&&ne(L.value||[])},[L.value]);var Q=function(){return I.map(function(a){return typeof a=="string"||typeof a=="number"?{label:a,value:a}:a})},X=function(a){ae(function(v){return v.filter(function(m){return m!==a})})},N=function(a){ae(function(v){return[].concat((0,B.Z)(v),[a])})},A=function(a){var v=H.indexOf(a.value),m=(0,B.Z)(H);v===-1?m.push(a.value):m.splice(v,1),"value"in L||ne(m);var Z=Q();ee==null||ee(m.filter(function(V){return de.indexOf(V)!==-1}).sort(function(V,S){var xe=Z.findIndex(function(D){return D.value===V}),R=Z.findIndex(function(D){return D.value===S});return xe-R}))},le=te("checkbox",K),J="".concat(le,"-group"),ve=(0,O.Z)(L,["value","disabled"]);I&&I.length>0&&(x=Q().map(function(d){return o.createElement(k,{prefixCls:le,key:d.value.toString(),disabled:"disabled"in d?d.disabled:L.disabled,value:d.value,checked:H.indexOf(d.value)!==-1,onChange:d.onChange,className:"".concat(J,"-item"),style:d.style},d.label)}));var he={toggleOption:A,value:H,disabled:L.disabled,name:L.name,registerValue:N,cancelValue:X},ge=E()(J,(0,h.Z)({},"".concat(J,"-rtl"),ce==="rtl"),t);return o.createElement("div",(0,f.Z)({className:ge,style:ue},ve,{ref:j}),o.createElement(u.Provider,{value:he},x))},r=o.forwardRef(n),p=o.memo(r),T=e(98866),z=function(y,s){var j={};for(var l in y)Object.prototype.hasOwnProperty.call(y,l)&&s.indexOf(l)<0&&(j[l]=y[l]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,l=Object.getOwnPropertySymbols(y);x<l.length;x++)s.indexOf(l[x])<0&&Object.prototype.propertyIsEnumerable.call(y,l[x])&&(j[l[x]]=y[l[x]]);return j},ie=function(s,j){var l,x=s.prefixCls,U=s.className,I=s.children,K=s.indeterminate,t=K===void 0?!1:K,ue=s.style,ee=s.onMouseEnter,L=s.onMouseLeave,G=s.skipGroup,te=G===void 0?!1:G,ce=s.disabled,b=z(s,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),Y=o.useContext(P.E_),H=Y.getPrefixCls,ne=Y.direction,g=o.useContext(u),re=(0,o.useContext)(W.aM),de=re.isFormItemInput,ae=(0,o.useContext)(T.Z),Q=ce||(g==null?void 0:g.disabled)||ae,X=o.useRef(b.value);o.useEffect(function(){g==null||g.registerValue(b.value)},[]),o.useEffect(function(){if(!te)return b.value!==X.current&&(g==null||g.cancelValue(X.current),g==null||g.registerValue(b.value),X.current=b.value),function(){return g==null?void 0:g.cancelValue(b.value)}},[b.value]);var N=H("checkbox",x),A=(0,f.Z)({},b);g&&!te&&(A.onChange=function(){b.onChange&&b.onChange.apply(b,arguments),g.toggleOption&&g.toggleOption({label:I,value:b.value})},A.name=g.name,A.checked=g.value.indexOf(b.value)!==-1);var le=E()((l={},(0,h.Z)(l,"".concat(N,"-wrapper"),!0),(0,h.Z)(l,"".concat(N,"-rtl"),ne==="rtl"),(0,h.Z)(l,"".concat(N,"-wrapper-checked"),A.checked),(0,h.Z)(l,"".concat(N,"-wrapper-disabled"),Q),(0,h.Z)(l,"".concat(N,"-wrapper-in-form-item"),de),l),U),J=E()((0,h.Z)({},"".concat(N,"-indeterminate"),t)),ve=t?"mixed":void 0;return o.createElement("label",{className:le,style:ue,onMouseEnter:ee,onMouseLeave:L},o.createElement(C.Z,(0,f.Z)({"aria-checked":ve},A,{prefixCls:N,className:J,disabled:Q,ref:j})),I!==void 0&&o.createElement("span",null,I))},q=o.forwardRef(ie),k=q,F=k;F.Group=p,F.__ANT_CHECKBOX=!0;var se=F},63185:function($,w,e){"use strict";var h=e(38663),f=e.n(h),c=e(64752),E=e.n(c)},55241:function($,w,e){"use strict";var h=e(22122),f=e(67294),c=e(53124),E=e(94199),C=e(81643),o=e(33603),P=function(i,O){var M={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&O.indexOf(u)<0&&(M[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,u=Object.getOwnPropertySymbols(i);n<u.length;n++)O.indexOf(u[n])<0&&Object.prototype.propertyIsEnumerable.call(i,u[n])&&(M[u[n]]=i[u[n]]);return M},W=function(O){var M=O.title,u=O.content,n=O.prefixCls;return!M&&!u?null:f.createElement(f.Fragment,null,M&&f.createElement("div",{className:"".concat(n,"-title")},(0,C.Z)(M)),f.createElement("div",{className:"".concat(n,"-inner-content")},(0,C.Z)(u)))},B=f.forwardRef(function(i,O){var M=i.prefixCls,u=i.title,n=i.content,r=i._overlay,p=i.placement,T=p===void 0?"top":p,z=i.trigger,ie=z===void 0?"hover":z,q=i.mouseEnterDelay,k=q===void 0?.1:q,F=i.mouseLeaveDelay,se=F===void 0?.1:F,y=i.overlayStyle,s=y===void 0?{}:y,j=P(i,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),l=f.useContext(c.E_),x=l.getPrefixCls,U=x("popover",M),I=x();return f.createElement(E.Z,(0,h.Z)({placement:T,trigger:ie,mouseEnterDelay:k,mouseLeaveDelay:se,overlayStyle:s},j,{prefixCls:U,ref:O,overlay:r||f.createElement(W,{prefixCls:U,title:u,content:n}),transitionName:(0,o.mL)(I,"zoom-big",j.transitionName)}))});w.Z=B},20136:function($,w,e){"use strict";var h=e(38663),f=e.n(h),c=e(31930),E=e.n(c)},84164:function($,w,e){"use strict";e.d(w,{Z:function(){return c}});var h=e(90484),f=e(67294);function c(E,C,o){var P=f.useRef({});function W(B){if(!P.current||P.current.data!==E||P.current.childrenColumnName!==C||P.current.getRowKey!==o){let O=function(M){M.forEach(function(u,n){var r=o(u,n);i.set(r,u),u&&(0,h.Z)(u)==="object"&&C in u&&O(u[C]||[])})};var i=new Map;O(E),P.current={data:E,childrenColumnName:C,kvMap:i,getRowKey:o}}return P.current.kvMap.get(B)}return[W]}},27678:function($,w,e){"use strict";e.d(w,{g1:function(){return O},os:function(){return u}});var h=/margin|padding|width|height|max|min|offset/,f={left:!0,top:!0},c={cssFloat:1,styleFloat:1,float:1};function E(n){return n.nodeType===1?n.ownerDocument.defaultView.getComputedStyle(n,null):{}}function C(n,r,p){if(r=r.toLowerCase(),p==="auto"){if(r==="height")return n.offsetHeight;if(r==="width")return n.offsetWidth}return r in f||(f[r]=h.test(r)),f[r]?parseFloat(p)||0:p}function o(n,r){var p=arguments.length,T=E(n);return r=c[r]?"cssFloat"in n.style?"cssFloat":"styleFloat":r,p===1?T:C(n,r,T[r]||n.style[r])}function P(n,r,p){var T=arguments.length;if(r=c[r]?"cssFloat"in n.style?"cssFloat":"styleFloat":r,T===3)return typeof p=="number"&&h.test(r)&&(p="".concat(p,"px")),n.style[r]=p,p;for(var z in r)r.hasOwnProperty(z)&&P(n,z,r[z]);return E(n)}function W(n){return n===document.body?document.documentElement.clientWidth:n.offsetWidth}function B(n){return n===document.body?window.innerHeight||document.documentElement.clientHeight:n.offsetHeight}function i(){var n=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),r=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);return{width:n,height:r}}function O(){var n=document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight;return{width:n,height:r}}function M(){return{scrollLeft:Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),scrollTop:Math.max(document.documentElement.scrollTop,document.body.scrollTop)}}function u(n){var r=n.getBoundingClientRect(),p=document.documentElement;return{left:r.left+(window.pageXOffset||p.scrollLeft)-(p.clientLeft||document.body.clientLeft||0),top:r.top+(window.pageYOffset||p.scrollTop)-(p.clientTop||document.body.clientTop||0)}}}}]);