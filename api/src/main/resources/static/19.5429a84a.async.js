(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"/mkp":function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}));var n=r("q1tI"),a=r.n(n),c=a.a.createContext({}),s=a.a.createContext({}),i=a.a.createContext({})},"770a":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return j}));var n=r("q1tI"),a=Object(n["createContext"])({}),c=a.Provider,s=(r("miYZ"),r("tsqr")),i=r("9og8"),o=r("WmNS"),u=r.n(o);r("bZMm");function d(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){var a=r[n].trim();if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""}function l(e,t,r){return h.apply(this,arguments)}function h(){return h=Object(i["a"])(u.a.mark((function e(t,r,n){var a;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={method:t.toUpperCase(),credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache","X-XSRF-TOKEN":d("XSRF-TOKEN"),Expires:"-1",Pragma:"no-cache"},body:n},n&&(a.body=JSON.stringify(n)),e.next=4,fetch(r,a).then((e=>e.json())).then((e=>(200!==e.code&&s["default"].error(e.message),e)));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}var j={put(e,t){return Object(i["a"])(u.a.mark((function r(){return u.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,l("PUT",e,t);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},delete(e){return Object(i["a"])(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l("DELETE",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},post(e,t){return Object(i["a"])(u.a.mark((function r(){return u.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,l("POST",e,t);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},patch(e,t){return Object(i["a"])(u.a.mark((function r(){return u.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,l("PATCH",e,t);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},get(e){return Object(i["a"])(u.a.mark((function t(){return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l("GET",e).then((e=>{if(200===e.code)return e.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},getWithPagination(e,t){var r=this;return Object(i["a"])(u.a.mark((function n(){return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",r.get(p(e,t)).then((e=>{if(e)return{records:e.records,pagination:{current:e.current,pageSize:e.size,total:e.total}}})));case 1:case"end":return n.stop()}}),n)})))()},loadSchema(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return this.get("/api/projects/".concat(e,"?fields=").concat(r.join(",")))},loadData(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return this.getWithPagination("/api/answers?shortId=".concat(e,"&fields=").concat(n.join(",")),t)},saveAnswer(e){return this.post("/api/answers",e)},updateAnswer(e){return this.patch("/api/answers",e)},deleteAnswer(e){return this.delete("/api/answers?ids=".concat(e.join(",")))},saveSurvey(e){return this.post("/api/projects",{survey:e})},updateSurvey(e,t){return this.patch("/api/projects",{survey:t,shortId:e})}};function p(e,t){var r=[];return Object.keys(t).forEach((e=>{var n=t[e];r.push("".concat(e,"=").concat(n instanceof Array?n.join(","):n))})),-1!==e.indexOf("?")?"".concat(e,"&").concat(r.join("&")):"".concat(e,"?").concat(r.join("&"))}},DVlV:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return h}));var n=r("9og8"),a=r("WmNS"),c=r.n(a),s=r("nzmB"),i=r("hF6A");class o{constructor(e){this.records=[],this.selected=void 0,this.currentIndex=-1,this.projectStore=void 0,this.loading=void 0,this.reportData=void 0,this.progress=void 0,this.pagination={current:1,pageSize:20,total:0},this.projectStore=e,this.makeObservable()}makeObservable(){Object(s["e"])(this,{loading:s["h"].ref,pagination:s["h"].ref,records:s["h"].ref,selected:s["h"].ref,currentIndex:s["h"].ref,reportData:s["h"].ref,progress:s["h"].ref,shortId:s["h"].computed,loadData:s["b"],loadReportData:s["b"],downloadSurvey:s["b"],downloadCurrentAttachment:s["b"],downloadSurveyAttachment:s["b"]})}get shortId(){return this.projectStore.shortId}loadData(e){var t=this;return Object(n["a"])(c.a.mark((function r(){var n;return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i["b"].loadData(t.shortId,e||t.pagination);case 2:n=r.sent,n&&(t.pagination=n.pagination,t.records=n.records);case 4:case"end":return r.stop()}}),r)})))()}saveData(e){var t=this;return Object(n["a"])(c.a.mark((function r(){return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.loading=!0,e.shortId=t.shortId,r.next=4,i["b"].saveAnswer(e);case 4:t.loading=!1;case 5:case"end":return r.stop()}}),r)})))()}updateData(e){var t=this;return Object(n["a"])(c.a.mark((function r(){return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i["b"].updateAnswer(e);case 2:t.loadData();case 3:case"end":return r.stop()}}),r)})))()}deleteData(e){var t=this;return Object(n["a"])(c.a.mark((function r(){var n,a;return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=[],n=void 0!==e?[t.records[e].id]:(null===(a=t.records)||void 0===a?void 0:a.reduce(((e,r,n)=>{var a;return null!==(a=t.selected)&&void 0!==a&&a.includes(n)&&e.push(r.id),e}),[]))||[],r.next=4,i["b"].deleteAnswer(n);case 4:t.loadData();case 5:case"end":return r.stop()}}),r)})))()}loadReportData(e){var t=this;return Object(n["a"])(c.a.mark((function r(){var n;return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.loading=!0,r.next=3,i["b"].loadReportData(t.shortId,e);case 3:n=r.sent,n&&(t.reportData=n),t.loading=!1;case 6:case"end":return r.stop()}}),r)})))()}downloadSurvey(){var e=this;return Object(n["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["b"].download("/api/answers/download?shortId=".concat(e.shortId,"&type=SURVEY_ANSWER"),(t=>{e.progress=t}));case 2:case"end":return t.stop()}}),t)})))()}downloadCurrentAttachment(e){var t=this;return Object(n["a"])(c.a.mark((function r(){return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i["b"].download("/api/answers/download?shortId=".concat(t.shortId,"&answerId=").concat(e,"&type=ANSWER_ATTACHMENT"),(e=>{t.progress=e}));case 2:case"end":return r.stop()}}),r)})))()}downloadSurveyAttachment(){var e=this;return Object(n["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["b"].download("/api/answers/download?shortId=".concat(e.shortId,"&type=ANSWER_ATTACHMENT"),(t=>{e.progress=t}));case 2:case"end":return t.stop()}}),t)})))()}upload(e,t){return Object(n["a"])(c.a.mark((function r(){return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",i["b"].upload("/api/public/upload",{file:e},t));case 1:case"end":return r.stop()}}),r)})))()}}r("miYZ");var u=r("tsqr"),d=r("k1fw");class l{constructor(e,t){this.id=void 0,this.shortId=void 0,this.project=void 0,this.loading=void 0,this.isPC=void 0,this.bgi=[],this.hi=[],this.qt=[],this.st=[],this.currentSchema=void 0,this.currentCategory=void 0,this.shortId=e,this.id=t,this.makeObservable(),this.loadImages("BACKGROUND_IMAGE"),this.loadImages("HEADER_IMAGE")}makeObservable(){Object(s["e"])(this,{id:s["h"].ref,shortId:s["h"].ref,loading:s["h"].ref,project:s["h"].ref,bgi:s["h"],hi:s["h"],qt:s["h"].ref,st:s["h"].ref,currentSchema:s["h"].ref,currentCategory:s["h"].ref,schema:s["h"].computed,setting:s["h"].computed,name:s["h"].computed,saveOrUpdateProject:s["b"],loadImages:s["b"],updateSetting:s["b"],uploadImage:s["b"],loadTemplate:s["b"],saveTemplate:s["b"],deleteTemplate:s["b"]})}get name(){var e;return null===(e=this.project)||void 0===e?void 0:e.name}get schema(){var e;return null===(e=this.project)||void 0===e?void 0:e.survey}get setting(){var e;return null===(e=this.project)||void 0===e?void 0:e.setting}loadProject(){var e=this;return Object(n["a"])(c.a.mark((function t(){var r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.shortId||"new"===e.shortId){t.next=6;break}return e.loading=!0,t.next=4,i["b"].loadProject(e.shortId);case 4:r=t.sent,r&&(e.project=r);case 6:e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}saveOrUpdateProject(e){var t=this;return Object(n["a"])(c.a.mark((function r(){var n;return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("new"!==t.shortId){r.next=9;break}return r.next=3,i["b"].saveProject(Object(d["a"])(Object(d["a"])({},e),{},{setting:{answerSetting:{progressBar:!0,autoSave:!0}}}));case 3:return n=r.sent,n.success&&(t.shortId=n.data),t.loadProject(),r.abrupt("return",n);case 9:return r.next=11,i["b"].updateProject(Object(d["a"])(Object(d["a"])({},e),{},{id:t.id,shortId:t.shortId}));case 11:return r.abrupt("return",r.sent);case 12:case"end":return r.stop()}}),r)})))()}updateSetting(e){var t=this;return Object(n["a"])(c.a.mark((function r(){return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i["b"].updateSetting(t.shortId,e);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()}deleteProject(e){return Object(n["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["b"].deleteProject(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}loadImages(e){var t=this;return Object(n["a"])(c.a.mark((function r(){var n;return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.loading=!0,r.next=3,i["b"].loadImages(e);case 3:n=r.sent,"BACKGROUND_IMAGE"===e&&n?t.bgi=n:"HEADER_IMAGE"===e&&n&&(t.hi=n),t.loading=!1;case 6:case"end":return r.stop()}}),r)})))()}uploadImage(e,t,r){var a=this;return Object(n["a"])(c.a.mark((function n(){var s;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.loading=!0,n.next=3,i["b"].uploadImage(e,t,r);case 3:return s=n.sent,"BACKGROUND_IMAGE"===e&&s.success?a.bgi.push(s.data):"HEADER_IMAGE"===e&&s.success&&a.hi.push(s.data),a.loading=!1,n.abrupt("return",s);case 7:case"end":return n.stop()}}),n)})))()}deleteImage(e,t){var r=this;return Object(n["a"])(c.a.mark((function n(){var a;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i["b"].deleteImage(e);case 2:return a=n.sent,"BACKGROUND_IMAGE"===t&&(r.bgi=r.bgi.filter((t=>t.attachmentId!==e))),"HEADER_IMAGE"===t&&(r.hi=r.hi.filter((t=>t.attachmentId!==e))),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))()}loadTemplate(e){var t=this;return Object(n["a"])(c.a.mark((function r(){var n;return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i["b"].loadTemplate(e);case 2:n=r.sent,n&&("Survey"===e?t.st=n:t.qt=n);case 4:case"end":return r.stop()}}),r)})))()}saveTemplate(e){var t=this;return Object(n["a"])(c.a.mark((function r(){var n;return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i["b"].saveTemplate(e);case 2:return n=r.sent,n.success?("Survey"===e.questionType?t.st=[...t.st,Object(d["a"])(Object(d["a"])({},e),{},{id:n.data})]:t.qt=[...t.qt,Object(d["a"])(Object(d["a"])({},e),{},{id:n.data,owner:!0})],t.currentSchema=void 0):u["default"].error(n.message),r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})))()}deleteTemplate(e){var t=this;return Object(n["a"])(c.a.mark((function r(){var n;return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i["b"].deleteTemplate(e);case 2:return n=r.sent,n.success&&t.currentCategory&&(t.qt=[...t.qt.filter((t=>t.id!==e))]),r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})))()}}class h{constructor(){this.projects=void 0,this.loading=!1,this.makeObservable()}makeObservable(){Object(s["e"])(this,{projects:s["h"].ref,loading:s["h"].ref})}loadProjects(e){var t=this;return Object(n["a"])(c.a.mark((function r(){var n;return c.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.loading=!0,r.next=3,i["b"].loadProjects(e);case 3:n=r.sent,n&&(t.projects=n),t.loading=!1;case 6:case"end":return r.stop()}}),r)})))()}}},MsQj:function(e,t,r){},PPVq:function(e,t,r){"use strict";r.d(t,"f",(function(){return n["a"]})),r.d(t,"k",(function(){return n["d"]})),r.d(t,"j",(function(){return n["c"]})),r.d(t,"i",(function(){return n["b"]})),r.d(t,"c",(function(){return a["c"]})),r.d(t,"a",(function(){return a["a"]})),r.d(t,"b",(function(){return a["b"]})),r.d(t,"g",(function(){return c})),r.d(t,"m",(function(){return s})),r.d(t,"l",(function(){return i})),r.d(t,"d",(function(){return o})),r.d(t,"n",(function(){return u["d"]})),r.d(t,"h",(function(){return u["b"]})),r.d(t,"e",(function(){return p}));var n=r("vLn2"),a=r("/mkp"),c=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach((t=>e.query(e.path.concat(t)).take((e=>e.display="none"))))},s=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach((t=>e.query(e.path.concat(t)).take((e=>e.display="visible"))))},i=(r("hxAm"),(e,t)=>window["requestIdleCallback"](e,t)),o=e=>{window["cancelIdleCallback"](e)},u=r("pcCm"),d=r("k1fw"),l=r("q1tI"),h=r("jOlz"),j=r("nKUr");function p(e,t){return r=>{var n=r.name||(null===t||void 0===t?void 0:t.name);if(!n)throw new Error("field name \u672a\u5b9a\u4e49");var a=Object(l["useMemo"])((()=>Object(h["g"])(e,Object(h["h"])(((e,t)=>Object(d["a"])(Object(d["a"])({},e),{},{onChange:e=>{t.onInput(e)},hasError:t.errors.length>0}))))),[]);return Object(j["jsx"])(h["b"],Object(d["a"])(Object(d["a"])(Object(d["a"])({},r),t),{},{name:n,component:[a,r],reactions:[e=>{var t=r.syncDisplay;t&&("string"===typeof t||"object"===typeof t&&Object.keys(t).forEach((r=>{var n=e.query(e.path.parent().concat(r)).get("value");t[r].includes(n)?e.display="visible":e.display="none"})));var n=r.mirrorFieldAddress;if(n){var a=e.query(n),c=a.get("value");c?e.visible=!0:void 0!==a.take()&&(e.visible=!1)}},...r.reactions||[]]}))}}},STtH:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"f",(function(){return o})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return v}));var n=r("q1tI"),a=Object(n["createContext"])({}),c=a.Provider,s=r("rsWy"),i=r("PPVq");function o(e){var t,r=[];return null===e||void 0===e||null===(t=e.children)||void 0===t||t.filter((e=>!Object(s["j"])(e.type))).map((e=>{"QuestionSet"===e.type?r.push(...o(e)):r.push({name:e.id,title:Object(i["n"])(e.title),schema:e,type:"Upload"===e.type?"image":"string"})})),0===r.length?r.push({name:"\u6682\u65e0\u6570\u636e!"}):(r.push({name:"totalTime",title:"\u7b54\u5377\u65f6\u957f"}),r.push({name:"deviceType",title:"\u8bbe\u5907\u7c7b\u578b"}),r.push({name:"platform",title:"\u5e73\u53f0\u7c7b\u578b"})),r}function u(e){var t={};return e?(e.id&&(t[e.id]=Object(i["n"])(e.title)),e.children&&e.children.forEach((e=>Object.assign(t,u(e)))),t):t}function d(e,t,r){return e.map((e=>{var r={};return t.forEach((t=>{if("totalTime"!==t.name)if("deviceType"!==t.name)if("platform"!==t.name){var n=t.schema||{},a=n.type,c=n.id,s=e.answer[c];if(s){var i=[];i="Cascader"===a?j(s,n):"MatrixAuto"===a?b(s,n):a.startsWith("Matrix")?p(s,n):"Upload"===a?h(s,n,e.attachment):l(s,n),r[c]="Upload"===a?i:i.join(",")}}else r.platform=e.metaInfo.clientInfo.platform;else r.deviceType=e.metaInfo.clientInfo.deviceType;else r.totalTime=v(e.metaInfo.answerInfo.endTime-e.metaInfo.answerInfo.startTime)})),r.id=e.id,r}))}function l(e,t){var r,n=[];return null===(r=t.children)||void 0===r||r.forEach((t=>{var r=e[t.id];!0===r?n.push(Object(i["n"])(t.title)):r&&n.push(r)})),n}function h(e,t,r){var n,a=[];return null===(n=t.children)||void 0===n||n.forEach((t=>{var n=e[t.id];a=r.filter((e=>n.includes(e.id)))})),a}function j(e,t){var r,n=[],a=null===t||void 0===t?void 0:t.dataSource;return a?(null===(r=t.children)||void 0===r||r.forEach((t=>{if(e.hasOwnProperty(t.id)){var r,c=null===(r=a)||void 0===r?void 0:r.find((r=>r.value===e[t.id]));c?(a=c.children,n.push(c.label)):n.push("")}})),n):n}function p(e,t){var r,n=[];return null===(r=t.row)||void 0===r||r.forEach((r=>{var a=r.id,c=Object(i["n"])(r.title);n.push("".concat(c,":(").concat(l(e[a],t),")"))})),n}function b(e,t){var r=[];return e.forEach((e=>{r.push("(".concat(l(e,t),")"))})),r}function v(e){var t=Math.floor(e/864e5),r=Math.floor(e/36e5%24),n=Math.floor(e/6e4%60),a=Math.floor(e/1e3%60),c="";return t>0&&(c+=t+"\u5929"),r>0&&(c+=r+"\u5c0f\u65f6"),n>0&&(c+=n+"\u5206\u949f"),a>0&&(c+=a+"\u79d2"),c}},f7qo:function(e,t,r){"use strict";r.r(t),r.d(t,"Overview",(function(){return ce})),r.d(t,"SurveyContext",(function(){return ne["a"]})),r.d(t,"SurveyDataProvider",(function(){return ne["b"]})),r.d(t,"api",(function(){return ne["c"]}));r("GNNt");var n=r("wEI+"),a=r("q1tI"),c=r("Ty5D"),s=r("SA0R"),i=r.n(s),o=(r("bbsP"),r("/wGt")),u=(r("qVdP"),r("jsC+")),d=(r("Telt"),r("Tckk")),l=(r("+L6B"),r("2/Rp")),h=(r("lUTK"),r("BvKs")),j=r("tJVT"),p=r("cJ7L"),b=r("eFNv"),v=r("aIfO"),f=r("wJku"),O=r("/1V0"),m=r("G3dp"),x=r("1013"),w=r("U+PY"),g=r("UdsK"),y=r("uqfK"),I=r("55Ip"),k=r("TSYQ"),N=r.n(k),S=r("6qww"),T=r("+59K"),E=r("nKUr"),A=Object(T["a"])((e=>{var t=Object(a["useState"])(!1),r=Object(j["a"])(t,2),n=r[0],c=r[1],s=Object(S["a"])(),i=Object(E["jsxs"])(h["a"],{className:"",selectedKeys:[],onClick:e=>{"logout"===e.key&&s.logout()},children:[Object(E["jsxs"])(h["a"].Item,{children:[Object(E["jsx"])(p["a"],{}),"\u4e2a\u4eba\u4e2d\u5fc3"]},"center"),Object(E["jsxs"])(h["a"].Item,{children:[Object(E["jsx"])(b["a"],{}),"\u4e2a\u4eba\u8bbe\u7f6e"]},"settings"),Object(E["jsx"])(h["a"].Divider,{}),Object(E["jsxs"])(h["a"].Item,{children:[Object(E["jsx"])(v["a"],{}),"\u9000\u51fa\u767b\u5f55"]},"logout")]});return Object(E["jsx"])("div",{className:"survey-main-header-mobile",children:Object(E["jsxs"])("div",{className:"survey-main-header-mobile-content",children:[Object(E["jsx"])("span",{className:"survey-main-header-mobile-collapsed-button",children:Object(E["jsx"])(l["a"],{type:"text",icon:Object(E["jsx"])(f["a"],{style:{fontSize:24},onClick:()=>c(!0)}),shape:"circle"})}),Object(E["jsx"])("span",{className:"survey-main-header-mobile-user",children:Object(E["jsx"])(u["a"],{overlay:i,overlayClassName:"user-dropdown-menu",overlayStyle:{width:"100%",borderRadius:0},children:Object(E["jsx"])("a",{className:"ant-dropdown-link",onClick:e=>e.preventDefault(),children:Object(E["jsx"])(d["a"],{src:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"})})})}),Object(E["jsx"])(o["a"],{width:60,autoFocus:!1,placement:"left",closable:!1,onClose:()=>c(!1),visible:n,bodyStyle:{padding:0},children:e.children})]})})})),C=Object(T["a"])((()=>{var e=Object(c["j"])(),t=(e.path,e.url),r=Object(c["h"])(),n=Object(c["g"])(),s=Object(c["i"])(),i=s.shortId,o=Object(a["useState"])("dashboard"),u=Object(j["a"])(o,2),d=u[0],h=u[1],v=Object(S["a"])(),f=v.isMobile;Object(a["useEffect"])((()=>{var e=r.pathname.split("/").slice(-1)[0];["edit","setting","flow","data","report"].includes(e)?h(e):h("new"===e?"new":"dashboard")}),[r]);var k=()=>Object(E["jsxs"])("div",{className:"survey-main-navigator",children:[Object(E["jsxs"])("div",{className:"actions-container",children:[Object(E["jsx"])("div",{className:"action-item",children:Object(E["jsx"])(I["b"],{to:"".concat(t),className:N()("action-label",{active:"dashboard"===d,disabled:"new"===i}),children:Object(E["jsx"])(l["a"],{type:"text",shape:"circle",icon:Object(E["jsx"])(O["a"],{}),size:"large",children:"\u6982\u8ff0"})})}),Object(E["jsx"])("div",{className:"action-item",children:Object(E["jsx"])(I["b"],{to:"".concat(t,"/edit"),className:N()("action-label",{active:"edit"===d||"new"===d,disabled:"new"===i}),children:Object(E["jsx"])(l["a"],{type:"text",shape:"circle",icon:Object(E["jsx"])(m["a"],{}),size:"large",children:"\u7f16\u8f91"})})}),Object(E["jsx"])("div",{className:"action-item",children:Object(E["jsx"])(I["b"],{to:"".concat(t,"/setting"),className:N()("action-label",{active:"setting"===d,disabled:"new"===i}),children:Object(E["jsx"])(l["a"],{type:"text",shape:"circle",icon:Object(E["jsx"])(b["a"],{}),size:"large",children:"\u8bbe\u7f6e"})})}),Object(E["jsx"])("div",{className:"action-item",children:Object(E["jsx"])(I["b"],{to:"".concat(t,"/flow"),className:N()("action-label",{active:"flow"===d,disabled:"new"===i}),children:Object(E["jsx"])(l["a"],{type:"text",shape:"circle",icon:Object(E["jsx"])(x["a"],{}),size:"large",children:"\u5de5\u4f5c\u6d41"})})}),Object(E["jsx"])("div",{className:"action-item",children:Object(E["jsx"])(I["b"],{to:"".concat(t,"/data"),className:N()("action-label",{active:"data"===d,disabled:"new"===i}),children:Object(E["jsx"])(l["a"],{type:"text",shape:"circle",icon:Object(E["jsx"])(w["a"],{}),size:"large",children:"\u6570\u636e"})})}),Object(E["jsx"])("div",{className:"action-item",children:Object(E["jsx"])(I["b"],{to:"".concat(t,"/report"),className:N()("action-label",{active:"report"===d,disabled:"new"===i}),children:Object(E["jsx"])(l["a"],{type:"text",shape:"circle",icon:Object(E["jsx"])(g["a"],{}),size:"large",children:"\u62a5\u8868"})})})]}),Object(E["jsxs"])("div",{children:[Object(E["jsx"])("div",{className:"action-item",children:Object(E["jsx"])("a",{className:"action-label",children:Object(E["jsx"])(l["a"],{type:"text",shape:"circle",icon:Object(E["jsx"])(y["a"],{}),size:"large",onClick:()=>n.push("/"),children:"\u4e3b\u9875"})})}),Object(E["jsx"])("div",{className:"action-item",children:Object(E["jsx"])("a",{className:"action-label",children:Object(E["jsx"])(l["a"],{type:"text",shape:"circle",icon:Object(E["jsx"])(p["a"],{}),size:"large",children:"\u7528\u6237"})})})]})]});return f?Object(E["jsx"])(A,{children:k()}):k()})),D=r("9og8"),P=r("WmNS"),q=r.n(P),M=r("rlch"),R=r("DAmd"),U=Object(M["c"])({loader:function(){var e=Object(D["a"])(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(1),r.e(3),r.e(2),r.e(5),r.e(14)]).then(r.bind(null,"dtXA"));case 2:return t=e.sent,n=t.default,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>Object(E["jsx"])(R["a"],{})}),z=Object(M["c"])({loader:function(){var e=Object(D["a"])(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(23).then(r.bind(null,"aYbn"));case 2:return t=e.sent,n=t.default,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>Object(E["jsx"])(R["a"],{})}),G=Object(M["c"])({loader:function(){var e=Object(D["a"])(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(1),r.e(3),r.e(5),r.e(15),r.e(21)]).then(r.bind(null,"bUpz"));case 2:return t=e.sent,n=t.default,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>Object(E["jsx"])(R["a"],{})}),K=Object(M["c"])({loader:function(){var e=Object(D["a"])(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(18),r.e(22)]).then(r.bind(null,"T4O8"));case 2:return t=e.sent,n=t.default,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>Object(E["jsx"])(R["a"],{})}),H=Object(M["c"])({loader:function(){var e=Object(D["a"])(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(1),r.e(3),r.e(2),r.e(5),r.e(13)]).then(r.bind(null,"Schy"));case 2:return t=e.sent,n=t.default,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>Object(E["jsx"])(R["a"],{})}),B=(r("BoS7"),r("Sdc0")),V=(r("miYZ"),r("tsqr")),W=(r("14J3"),r("BMrR")),_=(r("jCWc"),r("kPKH")),Y=(r("IzEo"),r("bx4M")),F=(r("5Dmo"),r("3S7+")),J=(r("5NDa"),r("5rEg")),L=r("+YFz"),Q=r("STtH"),X=r("j0GH"),Z=J["a"].Search,$=e=>[{title:"\u95ee\u5377\u603b\u6570",desc:Object(E["jsx"])("span",{children:"\u95ee\u5377\u521b\u5efa\u4e4b\u540e\u586b\u5199\u7684\u95ee\u5377\u6570\u91cf\u603b\u548c"}),total:(null===e||void 0===e?void 0:e.total)||0},{title:"\u4eca\u65e5\u65b0\u589e",desc:Object(E["jsx"])("span",{children:"\u8be5\u6570\u636e\u6307\u7684\u662f\u4eca\u65e5\u5185\uff0c\u6240\u6709\u8bbf\u5ba2\u5728\u8be5\u95ee\u5377\u5185\u63d0\u4ea4\u6570\u636e\u7684\u603b\u548c"}),total:(null===e||void 0===e?void 0:e.totalOfToday)||0},{title:"\u5e73\u5747\u586b\u5199\u65f6\u957f",desc:Object(E["jsx"])("span",{children:"\u5e73\u5747\u586b\u5199\u65f6\u957f=\u5355\u6761\u6570\u636e\u586b\u5199\u65f6\u957f\u603b\u548c/\u6570\u636e\u6761\u6570"}),total:Object(Q["e"])((null===e||void 0===e?void 0:e.averageDuration)||0)},{title:"\u6700\u8fd1\u66f4\u65b0\u65f6\u95f4",desc:Object(E["jsx"])("span",{children:"\u6700\u8fd1\u4e00\u6b21\u95ee\u5377\u586b\u5199\u65f6\u95f4"}),total:null!==e&&void 0!==e&&e.lastUpdate?"".concat(Object(Q["e"])((new Date).getTime()-(e.lastUpdate||0)),"\u524d"):"\u672a\u5f00\u59cb"}],ee=Object(T["a"])((()=>{var e=Object(X["a"])(),t=e.loading,r=Object(a["useState"])($(e.project)),n=Object(j["a"])(r,2),c=n[0],s=n[1];return Object(a["useEffect"])((()=>{var t=window.setInterval((()=>{s($(e.project))}),1e3);return()=>clearInterval(t)}),[]),Object(E["jsx"])(W["a"],{gutter:[20,20],className:"data-info",children:c.map((e=>Object(E["jsx"])(_["a"],{sm:6,xs:24,children:Object(E["jsxs"])(Y["a"],{loading:t,children:[Object(E["jsx"])("div",{className:"title",children:Object(E["jsx"])(l["a"],{type:"link",className:"total",children:e.total})}),Object(E["jsxs"])("div",{className:"desc",children:[e.title,Object(E["jsx"])(F["a"],{overlay:e.desc,placement:"bottom",children:Object(E["jsx"])(L["a"],{className:"desc-info"})})]})]})},e.title)))})})),te=Object(T["a"])((()=>{var e,t,r,n=Object(X["a"])(),a=n.loading;return Object(E["jsxs"])("div",{className:"survey-overview",children:[Object(E["jsx"])("div",{className:"survey-title",children:"\u75ab\u60c5\u8c03\u67e5\u95ee\u5377"}),Object(E["jsx"])(ee,{}),Object(E["jsx"])(W["a"],{gutter:[20,20],style:{marginTop:20},children:Object(E["jsx"])(_["a"],{sm:12,xs:24,children:Object(E["jsx"])(Y["a"],{loading:a,children:Object(E["jsxs"])(W["a"],{gutter:[10,10],children:[Object(E["jsx"])(_["a"],{span:24,children:Object(E["jsx"])(Z,{value:"https://surveyking.cn/s/".concat(n.shortId),enterButton:"\u6253\u5f00",className:"open-target",onSearch:e=>{window.open("/s/".concat(n.shortId))}})}),Object(E["jsxs"])(_["a"],{className:"setting-item",span:24,children:[Object(E["jsx"])("div",{className:"title",children:"\u95ee\u5377\u5f00\u542f/\u505c\u6b62"}),Object(E["jsx"])("div",{children:Object(E["jsx"])(B["a"],{defaultChecked:1===(null===(e=n.project)||void 0===e?void 0:e.status),onChange:e=>{n.saveOrUpdateProject({status:e?1:0}).then((t=>{200===t.code?e?V["default"].info("\u95ee\u5377\u5df2\u5f00\u542f"):V["default"].warn("\u95ee\u5377\u5df2\u505c\u6b62"):V["default"].error(t.message)}))}})})]}),Object(E["jsxs"])(_["a"],{className:"setting-item",span:24,children:[Object(E["jsx"])("div",{className:"title",children:"\u95ee\u5377\u586b\u5199\u65f6\u81ea\u52a8\u4fdd\u5b58"}),Object(E["jsx"])("div",{children:Object(E["jsx"])(B["a"],{defaultChecked:null===(t=n.project)||void 0===t||null===(r=t.setting)||void 0===r?void 0:r.answerSetting.autoSave,onChange:e=>{n.updateSetting({answerSetting:{autoSave:e}}).then((t=>{200===t.code?e?V["default"].info("\u6682\u5b58\u5df2\u5f00\u542f"):V["default"].warn("\u6682\u5b58\u5df2\u505c\u6b62"):V["default"].error(t.message)}))}})})]})]})})})})]})})),re=(r("k1fw"),r("8ub7"),()=>{var e=Object(c["j"])(),t=e.path,r=e.url,n=Object(c["i"])(),a=n.shortId,s=()=>"new"===a?Object(E["jsx"])(H,{}):Object(E["jsx"])(te,{});return Object(E["jsx"])("div",{className:"survey-main-content",children:Object(E["jsxs"])(c["d"],{children:[Object(E["jsx"])(c["b"],{exact:!0,path:t,children:s()}),Object(E["jsx"])(c["b"],{path:"/survey/new",children:Object(E["jsx"])(H,{})}),Object(E["jsx"])(c["b"],{path:"/survey/:shortId/edit",children:Object(E["jsx"])(H,{})}),Object(E["jsx"])(c["b"],{path:"/survey/:shortId/setting",children:Object(E["jsx"])(K,{})}),Object(E["jsx"])(c["b"],{path:"/survey/:shortId/flow",children:Object(E["jsx"])(z,{})}),Object(E["jsx"])(c["b"],{path:"/survey/:shortId/data",children:Object(E["jsx"])(U,{id:a})}),Object(E["jsx"])(c["b"],{path:"/survey/:shortId/report",children:Object(E["jsx"])(G,{id:a})}),Object(E["jsx"])(c["b"],{path:"*",render:()=>Object(E["jsx"])(c["a"],{to:r})})]})})}),ne=(r("MsQj"),r("770a")),ae=r("DVlV"),ce=Object(T["a"])((()=>{var e=Object(c["i"])(),t=e.shortId,r=Object(a["useMemo"])((()=>new ae["c"](t)),[t]),s=Object(S["a"])(),o=s.isMobile,u=r.name;return Object(a["useEffect"])((()=>{r.loadProject()}),[r]),Object(a["useEffect"])((()=>(u&&(document.title=u),()=>{document.title="\u5377\u738b"})),[u]),Object(E["jsx"])(n["a"],{locale:i.a,children:Object(E["jsx"])(ne["a"].Provider,{value:{store:r},children:Object(E["jsxs"])("div",{className:"survey-main ".concat(o?"mobile":""),children:[Object(E["jsx"])(C,{}),Object(E["jsx"])(re,{})]})})})}));t["default"]=ce},j0GH:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),a=r("770a"),c=()=>{var e=Object(n["useContext"])(a["a"]);return e.store}},pcCm:function(e,t,r){"use strict";function n(e){var t=1;for(var r in e)if(e.hasOwnProperty(r)&&"object"===typeof e[r]&&a(e[r])){var c=n(e[r])+1;t=Math.max(c,t)}return t}function a(e){return void 0!==e&&null!==e&&(("number"!==typeof e||"NaN"!==e.toString())&&("string"!==typeof e||""!==e.trim()))}r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return c})),r.d(t,"b",(function(){return s}));function c(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}function s(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return 0===e.length?n:t>=e.length?e.concat(n):e.reduce(((e,r,a)=>(t===a&&e.push(...n),e.push(r),e)),[])}},vLn2:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return u}));var n={},a={},c={questionTypes:{},questionSettings:{},questionOperations:{},registerDesignerIcons:e=>{Object.assign(n,e)},getDesignerIcon:e=>n[e],registerQuestionTemplates:e=>{Object.assign(a,e)},getQuestionTemplate:e=>a[e]||{type:e}},s=()=>c;function i(e,t){c.questionTypes[e]=t}function o(e,t){c.questionSettings[e]=t}function u(e,t){c.questionOperations[e]=t}}}]);