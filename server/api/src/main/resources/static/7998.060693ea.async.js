(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[7998],{24004:function(e,n,t){"use strict";t.d(n,{ZX:function(){return a},ff:function(){return u}});var r=t(67294),i=t(95522),a=r.createContext({theme:i.uH}),_=r.createContext({theme:i.uH}),u=r.createContext({})},87998:function(e,n,t){"use strict";t.d(n,{SB:function(){return r.SB},vW:function(){return r.vW},CL:function(){return r.CL},XO:function(){return r.XO},R6:function(){return r.R6},Op:function(){return r.Op},d0:function(){return r.d0},kb:function(){return r.kb},MA:function(){return r.MA},iq:function(){return r.iq},ZX:function(){return a.ZX},ff:function(){return a.ff}});var r=t(37191),i=t(95522),a=t(24004)},95522:function(e,n,t){"use strict";t.d(n,{uH:function(){return i}});var r={components:{},decorators:{},answerSheet:{}},i="antd";function a(s,d){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:i;r.components[c]||(r.components[c]={}),r.components[c][s]=d}function _(s,d){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:i;r.decorators[c]||(r.decorators[c]={}),r.decorators[c][s]=d}function u(s,d){r.answerSheet[s]=d}function o(s,d){return r.components[s][d]}function l(s,d){return r.decorators[s][d]}function f(s){return r.answerSheet[s]}},37191:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{R6:function(){return parseOptionTypes},Op:function(){return parseQuestionVariable},d0:function(){return parseVariableValue},SB:function(){return checkIsMobile},vW:function(){return formulaParse},kb:function(){return randomId},CL:function(){return isWechat},iq:function(){return schemaHasAttribute},XO:function(){return parseInitialValuesFromUrlParameter},MA:function(){return renderResultMessage}});var _Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(32059),_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_construct_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9963),_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(94657),_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11849),_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(83279),_formulajs_formulajs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(17243),_formulajs_formulajs__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_formulajs_formulajs__WEBPACK_IMPORTED_MODULE_0__),nanoid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(17244),computeFunction={getAgeFromIdNum:function(n){var t=computeFunction.getBirthdayFromIdNum(n),r=new Date(t),i=new Date,a=i.getFullYear()-r.getFullYear();return(i.getMonth()<r.getMonth()||i.getMonth()==r.getMonth()&&i.getDate()<r.getDate())&&a--,a},getBirthdayFromIdNum:function(n){var t=(n+"").length,r="";if(t===18&&(r=n.substr(6,4)+"/"+n.substr(10,2)+"/"+n.substr(12,2)),t===15){var i="";i=n.charAt(6)+n.charAt(7),parseInt(i)<10?r="20"+n.substr(6,2)+"/"+n.substr(8,2)+"/"+n.substr(10,2):r="19"+n.substr(6,2)+"/"+n.substr(8,2)+"/"+n.substr(10,2)}return r}},groupFieldsByName=function(n){var t={};return n.forEach(function(r){var i=r.name;t[i]||(t[i]=[]),t[i].push(r)}),t};function findOptionInExpression(e){return(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(new Set(e.match(/(\w+\.\w+\.\w+)/g))).map(function(n){var t=n.startsWith("_"),r=n.substring(0,n.lastIndexOf("."));t&&(r=r.substring(1));var i=n.substring(n.lastIndexOf(".")+1);return{source:n,isFillBlank:t,name:r,optionId:i}})}function computeExpress(form,express){var fn=computeFunction,expr=express;findOptionInExpression(express).forEach(function(e){var n=e.name,t=e.isFillBlank,r=e.optionId,i=e.source,a=form.query(n).get("value"),_=a&&a[r],u=_;_!==void 0?t||(u="true"):t?u="undefined":u="false",expr=expr.replaceAll(i,u)});try{return eval(expr)}catch(e){}}function isValid(e){return e==null||typeof e=="number"&&e.toString()==="NaN"||typeof e=="number"&&e.toString()==="Infinity"?!1:!(typeof e=="string"&&e.trim()==="")}function isEmpty(e){return!isValid(e)||Object.keys(e).length===0||Object.values(e).filter(function(n){return!!n}).length===0}function isMatrixEmpty(e){if(e.toString()==="[object Object]"){var n=!0;for(var t in e){var r=Object.values(e[t]).filter(function(i){return isValid(i)}).length;r>0&&(n=!1)}return n}return!1}function isVoid(e){var n=["SplitLine","Pagination","Remark"];return n.includes(e)}function isDataNode(e){var n=["FillBlank","Textarea","User","Dept","MultipleBlank","HorzBlank","Signature","Radio","Checkbox","Select","Cascader","MatrixAuto","MatrixRadio","MatrixCheckbox","MatrixFillBlank","MatrixScore","MatrixNps","Upload","Score","Nps","Address","Drug"];return n.includes(e)}function filterSchema(e){var n,t=((n=e.children)===null||n===void 0?void 0:n.filter(function(i){return i.type!=="Pagination"}))||[],r=(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},e),{},{children:t});return r}function parseOptionTypes(e){var n,t={};return(n=e.children)===null||n===void 0||n.forEach(function(r){if(r.type==="QuestionSet")r.children&&Object.assign(t,parseOptionTypes(r));else{var i,a=["FillBlank","MultipleBlank","MatrixFillBlank","HorzBlank","Nps"],_="boolean";a.includes(r.type)&&(_="number"),t[r.id]=_,(i=r.children)===null||i===void 0||i.forEach(function(u){t[u.id]=_})}}),t}function parsePagination(e,n){var t=1;if(n){var r;t=((r=e.children)===null||r===void 0?void 0:r.filter(function(a){var _;return(isDataNode(a.type)||a.type==="QuestionSet")&&((_=a.attribute)===null||_===void 0?void 0:_.display)!=="hidden"}).length)||1}else{var i;t=((i=e.children)===null||i===void 0?void 0:i.filter(function(a){return a.type==="Pagination"}).length)||1}return{current:1,pageSize:t}}function groupByPagination(e,n){var t,r,i=[],a=[];if(n){var _;return(_=e.children)===null||_===void 0||_.filter(function(o){var l;return o.type!=="Pagination"&&((l=o.attribute)===null||l===void 0?void 0:l.display)!=="hidden"}).forEach(function(o){isDataNode(o.type)||o.type==="QuestionSet"?(a=[o],i.push(a)):a.push(o)}),i}var u=(t=e.children)===null||t===void 0?void 0:t.find(function(o){return o.type==="Pagination"});return u?((r=e.children)===null||r===void 0||r.forEach(function(o){o.type==="Pagination"?(a=[],i.push(a)):a.push(o)}),i):e.children?[e.children]:[]}function parseExpression(e){for(var n={},t=0;t<e.length;){var r=e[t],i=e[t+1];if(r==="#"&&i==="{"){t++;for(var a="#",_="",u=!1;r!=="}";)r=e[t],a+=r,t++,r!=="."&&!u&&r!=="{"&&r!=="}"?_+=r:r==="."&&(u=!0);a+"";var o=n[_];o||(o=new Set,n[_]=o),o.add(a)}else t++}return n}function parseQuestionVariable(e){return e.substring(2,e.length-1).split(".").map(function(n){return n.replace("_","")})}function parseVariableValue(e,n,t,r){var i=t.substring(2,t.length-1).split("."),a=(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(i,2),_=a[0],u=a[1];if(_.startsWith("_")&&r)return n?Object.keys(n).map(function(o){var l=n[o];return l===!0?r[o]:r[o]||""+l}).join(";"):void 0;if(_&&!u)return n&&e[_]==="boolean"?!0:n?Object.values(n)[0]:"";if(_&&u){if(e[u]==="boolean")return!!(n&&n[u]!==void 0);if(n)return n[u]}}function getQuestionExpress(e,n){var t,r={};return(t=e.children)===null||t===void 0||t.forEach(function(i){var a=i.attribute&&i.attribute[n];a&&(r[i.id]=a)}),r}var ENVS={compile:function(n,t){var r=Object.keys(t||{}),i=r.map(function(a){return t[a]});return(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_construct_js__WEBPACK_IMPORTED_MODULE_4__.Z)(Function,r.concat(["return (".concat(n,");")])).apply(void 0,(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(i))}};function parseAttribute(e,n){var t={};if(isDataNode(e.type)){var r;(r=e.children)===null||r===void 0||r.forEach(function(a){var _=a.attribute&&a.attribute[n];_&&(t[e.id]||(t[e.id]={}),t[e.id][a.id]=_)})}else{var i;(i=e.children)===null||i===void 0||i.forEach(function(a){Object.assign(t,parseAttribute(a,n))})}return t}function isNumeric(e){return typeof e=="number"?e:typeof e!="string"?!1:!isNaN(e)&&!isNaN(parseFloat(e))}function cleanValue(e,n){var t;if(n&&(t=n.attribute)!==null&&t!==void 0&&t.numericScale){var r=Math.round(e*Math.pow(10,n.attribute.numericScale))/Math.pow(10,n.attribute.numericScale);return isValid(r)?r:void 0}if(!!isValid(e))return isNumeric(e)?Math.round(e*1e3)/1e3:e}function checkIsMobile(){var e=!1;return function(n){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}var formulaKeys=Object.keys(_formulajs_formulajs__WEBPACK_IMPORTED_MODULE_0___default());formulaKeys.forEach(function(e){window[e]=_formulajs_formulajs__WEBPACK_IMPORTED_MODULE_0___default()[e]});function formulaParse(e,n){for(var t=0,r=[],i=!0;t<e.length;){var a=e[t],_=e[t+1];if(a==="#"&&_==="{"){for(var u="";a!=="}";)u+=a,t++,a=e[t];u+="}",t++;var o=n(u);if(isValid(o))typeof o=="string"?r.push("'".concat(o.replaceAll("'","\\'"),"'")):r.push(o);else{i=!1;break}}else r.push(a),t++}if(!i)return{success:!0,result:void 0};try{var l=ENVS.compile(r.join(""),{});return{success:!0,result:l}}catch(f){return console.error("\u516C\u5F0F\u89E3\u6790\u5931\u8D25",r.join("")),{success:!1}}}function parseFloatExpression(exp){var _exp$match,newExp=exp;return(_exp$match=exp.match(/(\([\d\.\+\-\*\/]{3,}\))/g))===null||_exp$match===void 0||_exp$match.forEach(function(m){try{var val=Number(eval(m).toFixed(3));newExp=newExp.replace(m,val)}catch(e){}}),newExp}function randomId(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,n=(0,nanoid__WEBPACK_IMPORTED_MODULE_5__.kP)("_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",e);return n()}function isWechat(){return/MicroMessenger/i.test(window.navigator.userAgent)}function findPos(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=n;if(e.offsetParent){do t+=e.offsetTop;while(e=e.offsetParent);return t}}function scrollToDataId(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=document.querySelector("[data-id='".concat(e,"']"));if(t){var r=findPos(t,n);window.scroll({top:r})}}function schemaHasAttribute(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return((n=e.children)===null||n===void 0?void 0:n.some(function(a){return!!(a.attribute&&r.some(function(_){var u;return((u=a.attribute)===null||u===void 0?void 0:u[_])!==void 0})||schemaHasAttribute.apply(void 0,[a].concat(r)))}))||!1}function parseInitialValuesFromUrlParameter(e,n){var t,r={};function i(_){var u;(u=_.children)===null||u===void 0||u.forEach(function(o){r[o.id]={type:_.type,qId:_.id}})}e==null||(t=e.children)===null||t===void 0||t.forEach(function(_){if(_.type==="QuestionSet"){var u;(u=_.children)===null||u===void 0||u.forEach(function(o){return i(o)})}else i(_)});var a={};return Object.keys(n.query).forEach(function(_){var u=n.query[_];r[_]&&(a[r[_].qId]=(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},a[r[_].qId]),{},(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},_,u)))}),a}function parseRedirectUrl(e,n){var t,r=e;return(t=e.match(/(#\{.+?\})/g))===null||t===void 0||t.forEach(function(i){var a=i.replace("#{","").replace("}","");n[a]&&(r=r.replaceAll(i,Object.values(n[a]).join(",")))}),r}function flatSurveySchema(e){var n,t,r=[];return isDataNode(e.type)&&((n=e.attribute)===null||n===void 0?void 0:n.display)!=="hidden"&&r.push(e),(t=e.children)===null||t===void 0||t.forEach(function(i){return r.push.apply(r,(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(flatSurveySchema(i)))}),r}function schemaId2title(e){var n={},t=function r(i){n[i.id]=i.title,i.children&&i.children.forEach(r)};return t(e),n}function renderResultMessage(e,n,t,r){n||(n="\u95EE\u5377\u5230\u6B64\u7ED3\u675F\uFF0C\u611F\u8C22\u60A8\u7684\u53C2\u4E0E\uFF01");var i=new DOMParser,a=i.parseFromString(n,"text/html");a.querySelectorAll(".ql-label").forEach(function(s){s.textContent="".concat(r||0)});var _=parseOptionTypes(e),u=schemaId2title(e);a.querySelectorAll(".ql-score-logic").forEach(function(s){var d=s.dataset.formula;if(d){var c=formulaParse(d,function(m){var v=parseQuestionVariable(m),g=(0,_Users_dahuang_Code_github_com_javahuang_survey_king_admin_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(v,1),p=g[0],b=t[p];return p==="score"?r:parseVariableValue(_,b,m,u)});c.success&&(s.innerHTML=c.result)}});for(var o=Array.from(a.body.childNodes),l=0;l<o.length;l++){var f;(f=document.getElementById("result-message"))===null||f===void 0||f.appendChild(o[l])}}}}]);