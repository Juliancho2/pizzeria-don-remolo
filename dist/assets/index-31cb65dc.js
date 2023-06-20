function $x(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $o={},Fx={get exports(){return $o},set exports(t){$o=t}},Wu={},_={},Mx={get exports(){return _},set exports(t){_=t}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),Ux=Symbol.for("react.portal"),Bx=Symbol.for("react.fragment"),zx=Symbol.for("react.strict_mode"),jx=Symbol.for("react.profiler"),Vx=Symbol.for("react.provider"),Hx=Symbol.for("react.context"),Wx=Symbol.for("react.forward_ref"),qx=Symbol.for("react.suspense"),Kx=Symbol.for("react.memo"),Gx=Symbol.for("react.lazy"),Hg=Symbol.iterator;function Qx(t){return t===null||typeof t!="object"?null:(t=Hg&&t[Hg]||t["@@iterator"],typeof t=="function"?t:null)}var Wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qv=Object.assign,Kv={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||Wv}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gv(){}Gv.prototype=Ls.prototype;function Jf(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||Wv}var Zf=Jf.prototype=new Gv;Zf.constructor=Jf;qv(Zf,Ls.prototype);Zf.isPureReactComponent=!0;var Wg=Array.isArray,Qv=Object.prototype.hasOwnProperty,ep={current:null},Yv={key:!0,ref:!0,__self:!0,__source:!0};function Xv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qv.call(e,r)&&!Yv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:va,type:t,key:s,ref:o,props:i,_owner:ep.current}}function Yx(t,e){return{$$typeof:va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===va}function Xx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qg=/\/+/g;function md(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xx(""+t.key):e.toString(36)}function xl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case va:case Ux:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+md(o,0):r,Wg(i)?(n="",t!=null&&(n=t.replace(qg,"$&/")+"/"),xl(i,e,n,"",function(d){return d})):i!=null&&(tp(i)&&(i=Yx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+md(s,a);o+=xl(s,e,n,l,i)}else if(l=Qx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+md(s,a++),o+=xl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var r=[],i=0;return xl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Jx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Tl={transition:null},Zx={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:ep};pe.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=Ls;pe.Fragment=Bx;pe.Profiler=jx;pe.PureComponent=Jf;pe.StrictMode=zx;pe.Suspense=qx;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ep.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Qv.call(e,l)&&!Yv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:va,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:Hx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vx,_context:t},t.Consumer=t};pe.createElement=Xv;pe.createFactory=function(t){var e=Xv.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:Wx,render:t}};pe.isValidElement=tp;pe.lazy=function(t){return{$$typeof:Gx,_payload:{_status:-1,_result:t},_init:Jx}};pe.memo=function(t,e){return{$$typeof:Kx,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(t,e){return Mt.current.useCallback(t,e)};pe.useContext=function(t){return Mt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return Mt.current.useEffect(t,e)};pe.useId=function(){return Mt.current.useId()};pe.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return Mt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};pe.useRef=function(t){return Mt.current.useRef(t)};pe.useState=function(t){return Mt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return Mt.current.useTransition()};pe.version="18.2.0";(function(t){t.exports=pe})(Mx);const Ai=Lx(_),ph=$x({__proto__:null,default:Ai},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eT=_,tT=Symbol.for("react.element"),nT=Symbol.for("react.fragment"),rT=Object.prototype.hasOwnProperty,iT=eT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sT={key:!0,ref:!0,__self:!0,__source:!0};function Jv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rT.call(e,r)&&!sT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tT,type:t,key:s,ref:o,props:i,_owner:iT.current}}Wu.Fragment=nT;Wu.jsx=Jv;Wu.jsxs=Jv;(function(t){t.exports=Wu})(Fx);const Zv=$o.Fragment,v=$o.jsx,O=$o.jsxs;var mh={},gh={},oT={get exports(){return gh},set exports(t){gh=t}},en={},yh={},aT={get exports(){return yh},set exports(t){yh=t}},ew={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var te=$.length;$.push(Q);e:for(;0<te;){var we=te-1>>>1,F=$[we];if(0<i(F,Q))$[we]=Q,$[te]=F,te=we;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],te=$.pop();if(te!==Q){$[0]=te;e:for(var we=0,F=$.length,z=F>>>1;we<z;){var j=2*(we+1)-1,ee=$[j],k=j+1,ce=$[k];if(0>i(ee,te))k<F&&0>i(ce,ee)?($[we]=ce,$[k]=te,we=k):($[we]=ee,$[j]=te,we=j);else if(k<F&&0>i(ce,te))$[we]=ce,$[k]=te,we=k;else break e}}return Q}function i($,Q){var te=$.sortIndex-Q.sortIndex;return te!==0?te:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],d=[],h=1,p=null,m=3,I=!1,C=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E($){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=$)r(d),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(d)}}function b($){if(S=!1,E($),!C)if(n(l)!==null)C=!0,it(A);else{var Q=n(d);Q!==null&&ct(b,Q.startTime-$)}}function A($,Q){C=!1,S&&(S=!1,w(B),B=-1),I=!0;var te=m;try{for(E(Q),p=n(l);p!==null&&(!(p.expirationTime>Q)||$&&!He());){var we=p.callback;if(typeof we=="function"){p.callback=null,m=p.priorityLevel;var F=we(p.expirationTime<=Q);Q=t.unstable_now(),typeof F=="function"?p.callback=F:p===n(l)&&r(l),E(Q)}else r(l);p=n(l)}if(p!==null)var z=!0;else{var j=n(d);j!==null&&ct(b,j.startTime-Q),z=!1}return z}finally{p=null,m=te,I=!1}}var P=!1,U=null,B=-1,ue=5,X=-1;function He(){return!(t.unstable_now()-X<ue)}function Le(){if(U!==null){var $=t.unstable_now();X=$;var Q=!0;try{Q=U(!0,$)}finally{Q?ze():(P=!1,U=null)}}else P=!1}var ze;if(typeof g=="function")ze=function(){g(Le)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,De=Ae.port2;Ae.port1.onmessage=Le,ze=function(){De.postMessage(null)}}else ze=function(){T(Le,0)};function it($){U=$,P||(P=!0,ze())}function ct($,Q){B=T(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||I||(C=!0,it(A))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var te=m;m=Q;try{return $()}finally{m=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var te=m;m=$;try{return Q()}finally{m=te}},t.unstable_scheduleCallback=function($,Q,te){var we=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?we+te:we):te=we,$){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=te+F,$={id:h++,callback:Q,priorityLevel:$,startTime:te,expirationTime:F,sortIndex:-1},te>we?($.sortIndex=te,e(d,$),n(l)===null&&$===n(d)&&(S?(w(B),B=-1):S=!0,ct(b,te-we))):($.sortIndex=F,e(l,$),C||I||(C=!0,it(A))),$},t.unstable_shouldYield=He,t.unstable_wrapCallback=function($){var Q=m;return function(){var te=m;m=Q;try{return $.apply(this,arguments)}finally{m=te}}}})(ew);(function(t){t.exports=ew})(aT);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tw=_,Jt=yh;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nw=new Set,Lo={};function _i(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(Lo[t]=e,t=0;t<e.length;t++)nw.add(e[t])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=Object.prototype.hasOwnProperty,lT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kg={},Gg={};function uT(t){return vh.call(Gg,t)?!0:vh.call(Kg,t)?!1:lT.test(t)?Gg[t]=!0:(Kg[t]=!0,!1)}function cT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dT(t,e,n,r){if(e===null||typeof e>"u"||cT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gt[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gt[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gt[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gt[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gt[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gt[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gt[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gt[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gt[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var np=/[\-:]([a-z])/g;function rp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(np,rp);gt[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(np,rp);gt[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(np,rp);gt[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function ip(t,e,n,r){var i=gt.hasOwnProperty(e)?gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dT(e,n,i,r)&&(n=null),r||i===null?uT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var or=tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),Ki=Symbol.for("react.portal"),Gi=Symbol.for("react.fragment"),sp=Symbol.for("react.strict_mode"),wh=Symbol.for("react.profiler"),rw=Symbol.for("react.provider"),iw=Symbol.for("react.context"),op=Symbol.for("react.forward_ref"),Eh=Symbol.for("react.suspense"),Ih=Symbol.for("react.suspense_list"),ap=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),sw=Symbol.for("react.offscreen"),Qg=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=Qg&&t[Qg]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,gd;function lo(t){if(gd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gd=e&&e[1]||""}return`
`+gd+t}var yd=!1;function vd(t,e){if(!t||yd)return"";yd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lo(t):""}function hT(t){switch(t.tag){case 5:return lo(t.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return t=vd(t.type,!1),t;case 11:return t=vd(t.type.render,!1),t;case 1:return t=vd(t.type,!0),t;default:return""}}function Sh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gi:return"Fragment";case Ki:return"Portal";case wh:return"Profiler";case sp:return"StrictMode";case Eh:return"Suspense";case Ih:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iw:return(t.displayName||"Context")+".Consumer";case rw:return(t._context.displayName||"Context")+".Provider";case op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ap:return e=t.displayName||null,e!==null?e:Sh(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return Sh(t(e))}catch{}}return null}function fT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sh(e);case 8:return e===sp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ow(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pT(t){var e=ow(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=pT(t))}function aw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ow(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ch(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lw(t,e){e=e.checked,e!=null&&ip(t,"checked",e,!1)}function kh(t,e){lw(t,e);var n=Fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&bh(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bh(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var uo=Array.isArray;function ls(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(uo(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function uw(t,e){var n=Fr(e.value),r=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Th(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var el,dw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=el.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mT=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){mT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function hw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function fw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gT=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ah(t,e){if(e){if(gT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function _h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ph=null;function lp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rh=null,us=null,cs=null;function ey(t){if(t=Ia(t)){if(typeof Rh!="function")throw Error(D(280));var e=t.stateNode;e&&(e=Yu(e),Rh(t.stateNode,t.type,e))}}function pw(t){us?cs?cs.push(t):cs=[t]:us=t}function mw(){if(us){var t=us,e=cs;if(cs=us=null,ey(t),e)for(t=0;t<e.length;t++)ey(e[t])}}function gw(t,e){return t(e)}function yw(){}var wd=!1;function vw(t,e,n){if(wd)return t(e,n);wd=!0;try{return gw(t,e,n)}finally{wd=!1,(us!==null||cs!==null)&&(yw(),mw())}}function Mo(t,e){var n=t.stateNode;if(n===null)return null;var r=Yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var Dh=!1;if(Xn)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Dh=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Dh=!1}function yT(t,e,n,r,i,s,o,a,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var wo=!1,Gl=null,Ql=!1,Nh=null,vT={onError:function(t){wo=!0,Gl=t}};function wT(t,e,n,r,i,s,o,a,l){wo=!1,Gl=null,yT.apply(vT,arguments)}function ET(t,e,n,r,i,s,o,a,l){if(wT.apply(this,arguments),wo){if(wo){var d=Gl;wo=!1,Gl=null}else throw Error(D(198));Ql||(Ql=!0,Nh=d)}}function Pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ww(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ty(t){if(Pi(t)!==t)throw Error(D(188))}function IT(t){var e=t.alternate;if(!e){if(e=Pi(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ty(i),t;if(s===r)return ty(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function Ew(t){return t=IT(t),t!==null?Iw(t):null}function Iw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Iw(t);if(e!==null)return e;t=t.sibling}return null}var Sw=Jt.unstable_scheduleCallback,ny=Jt.unstable_cancelCallback,ST=Jt.unstable_shouldYield,CT=Jt.unstable_requestPaint,Ke=Jt.unstable_now,kT=Jt.unstable_getCurrentPriorityLevel,up=Jt.unstable_ImmediatePriority,Cw=Jt.unstable_UserBlockingPriority,Yl=Jt.unstable_NormalPriority,bT=Jt.unstable_LowPriority,kw=Jt.unstable_IdlePriority,qu=null,On=null;function xT(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(qu,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:_T,TT=Math.log,AT=Math.LN2;function _T(t){return t>>>=0,t===0?32:31-(TT(t)/AT|0)|0}var tl=64,nl=4194304;function co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=co(a):(s&=o,s!==0&&(r=co(s)))}else o=n&~i,o!==0?r=co(o):s!==0&&(r=co(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-In(e),i=1<<n,r|=t[n],e&=~i;return r}function PT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=PT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bw(){var t=tl;return tl<<=1,!(tl&4194240)&&(tl=64),t}function Ed(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function DT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-In(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-In(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function xw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tw,dp,Aw,_w,Pw,$h=!1,rl=[],Cr=null,kr=null,br=null,Uo=new Map,Bo=new Map,pr=[],NT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ry(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function to(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ia(e),e!==null&&dp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function OT(t,e,n,r,i){switch(e){case"focusin":return Cr=to(Cr,t,e,n,r,i),!0;case"dragenter":return kr=to(kr,t,e,n,r,i),!0;case"mouseover":return br=to(br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Uo.set(s,to(Uo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bo.set(s,to(Bo.get(s)||null,t,e,n,r,i)),!0}return!1}function Rw(t){var e=ri(t.target);if(e!==null){var n=Pi(e);if(n!==null){if(e=n.tag,e===13){if(e=ww(n),e!==null){t.blockedOn=e,Pw(t.priority,function(){Aw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ph=r,n.target.dispatchEvent(r),Ph=null}else return e=Ia(n),e!==null&&dp(e),t.blockedOn=n,!1;e.shift()}return!0}function iy(t,e,n){Al(t)&&n.delete(e)}function $T(){$h=!1,Cr!==null&&Al(Cr)&&(Cr=null),kr!==null&&Al(kr)&&(kr=null),br!==null&&Al(br)&&(br=null),Uo.forEach(iy),Bo.forEach(iy)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,$h||($h=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,$T)))}function zo(t){function e(i){return no(i,t)}if(0<rl.length){no(rl[0],t);for(var n=1;n<rl.length;n++){var r=rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Cr!==null&&no(Cr,t),kr!==null&&no(kr,t),br!==null&&no(br,t),Uo.forEach(e),Bo.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)Rw(n),n.blockedOn===null&&pr.shift()}var ds=or.ReactCurrentBatchConfig,Jl=!0;function LT(t,e,n,r){var i=Ce,s=ds.transition;ds.transition=null;try{Ce=1,hp(t,e,n,r)}finally{Ce=i,ds.transition=s}}function FT(t,e,n,r){var i=Ce,s=ds.transition;ds.transition=null;try{Ce=4,hp(t,e,n,r)}finally{Ce=i,ds.transition=s}}function hp(t,e,n,r){if(Jl){var i=Lh(t,e,n,r);if(i===null)Pd(t,e,r,Zl,n),ry(t,r);else if(OT(i,t,e,n,r))r.stopPropagation();else if(ry(t,r),e&4&&-1<NT.indexOf(t)){for(;i!==null;){var s=Ia(i);if(s!==null&&Tw(s),s=Lh(t,e,n,r),s===null&&Pd(t,e,r,Zl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Pd(t,e,r,null,n)}}var Zl=null;function Lh(t,e,n,r){if(Zl=null,t=lp(r),t=ri(t),t!==null)if(e=Pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ww(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function Dw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kT()){case up:return 1;case Cw:return 4;case Yl:case bT:return 16;case kw:return 536870912;default:return 16}default:return 16}}var Er=null,fp=null,_l=null;function Nw(){if(_l)return _l;var t,e=fp,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _l=i.slice(t,1<r?1-r:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function sy(){return!1}function tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?il:sy,this.isPropagationStopped=sy,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pp=tn(Fs),Ea=Be({},Fs,{view:0,detail:0}),MT=tn(Ea),Id,Sd,ro,Ku=Be({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Id=t.screenX-ro.screenX,Sd=t.screenY-ro.screenY):Sd=Id=0,ro=t),Id)},movementY:function(t){return"movementY"in t?t.movementY:Sd}}),oy=tn(Ku),UT=Be({},Ku,{dataTransfer:0}),BT=tn(UT),zT=Be({},Ea,{relatedTarget:0}),Cd=tn(zT),jT=Be({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),VT=tn(jT),HT=Be({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WT=tn(HT),qT=Be({},Fs,{data:0}),ay=tn(qT),KT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QT[t])?!!e[t]:!1}function mp(){return YT}var XT=Be({},Ea,{key:function(t){if(t.key){var e=KT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mp,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JT=tn(XT),ZT=Be({},Ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ly=tn(ZT),eA=Be({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mp}),tA=tn(eA),nA=Be({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rA=tn(nA),iA=Be({},Ku,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sA=tn(iA),oA=[9,13,27,32],gp=Xn&&"CompositionEvent"in window,Eo=null;Xn&&"documentMode"in document&&(Eo=document.documentMode);var aA=Xn&&"TextEvent"in window&&!Eo,Ow=Xn&&(!gp||Eo&&8<Eo&&11>=Eo),uy=String.fromCharCode(32),cy=!1;function $w(t,e){switch(t){case"keyup":return oA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qi=!1;function lA(t,e){switch(t){case"compositionend":return Lw(e);case"keypress":return e.which!==32?null:(cy=!0,uy);case"textInput":return t=e.data,t===uy&&cy?null:t;default:return null}}function uA(t,e){if(Qi)return t==="compositionend"||!gp&&$w(t,e)?(t=Nw(),_l=fp=Er=null,Qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ow&&e.locale!=="ko"?null:e.data;default:return null}}var cA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cA[t.type]:e==="textarea"}function Fw(t,e,n,r){pw(r),e=eu(e,"onChange"),0<e.length&&(n=new pp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Io=null,jo=null;function dA(t){Gw(t,0)}function Gu(t){var e=Ji(t);if(aw(e))return t}function hA(t,e){if(t==="change")return e}var Mw=!1;if(Xn){var kd;if(Xn){var bd="oninput"in document;if(!bd){var hy=document.createElement("div");hy.setAttribute("oninput","return;"),bd=typeof hy.oninput=="function"}kd=bd}else kd=!1;Mw=kd&&(!document.documentMode||9<document.documentMode)}function fy(){Io&&(Io.detachEvent("onpropertychange",Uw),jo=Io=null)}function Uw(t){if(t.propertyName==="value"&&Gu(jo)){var e=[];Fw(e,jo,t,lp(t)),vw(dA,e)}}function fA(t,e,n){t==="focusin"?(fy(),Io=e,jo=n,Io.attachEvent("onpropertychange",Uw)):t==="focusout"&&fy()}function pA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gu(jo)}function mA(t,e){if(t==="click")return Gu(e)}function gA(t,e){if(t==="input"||t==="change")return Gu(e)}function yA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:yA;function Vo(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vh.call(e,i)||!kn(t[i],e[i]))return!1}return!0}function py(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function my(t,e){var n=py(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=py(n)}}function Bw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zw(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vA(t){var e=zw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bw(n.ownerDocument.documentElement,n)){if(r!==null&&yp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=my(n,s);var o=my(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wA=Xn&&"documentMode"in document&&11>=document.documentMode,Yi=null,Fh=null,So=null,Mh=!1;function gy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mh||Yi==null||Yi!==Kl(r)||(r=Yi,"selectionStart"in r&&yp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&Vo(So,r)||(So=r,r=eu(Fh,"onSelect"),0<r.length&&(e=new pp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yi)))}function sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xi={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},xd={},jw={};Xn&&(jw=document.createElement("div").style,"AnimationEvent"in window||(delete Xi.animationend.animation,delete Xi.animationiteration.animation,delete Xi.animationstart.animation),"TransitionEvent"in window||delete Xi.transitionend.transition);function Qu(t){if(xd[t])return xd[t];if(!Xi[t])return t;var e=Xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jw)return xd[t]=e[n];return t}var Vw=Qu("animationend"),Hw=Qu("animationiteration"),Ww=Qu("animationstart"),qw=Qu("transitionend"),Kw=new Map,yy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){Kw.set(t,e),_i(e,[t])}for(var Td=0;Td<yy.length;Td++){var Ad=yy[Td],EA=Ad.toLowerCase(),IA=Ad[0].toUpperCase()+Ad.slice(1);jr(EA,"on"+IA)}jr(Vw,"onAnimationEnd");jr(Hw,"onAnimationIteration");jr(Ww,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(qw,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);_i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_i("onBeforeInput",["compositionend","keypress","textInput","paste"]);_i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SA=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function vy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ET(r,e,void 0,t),t.currentTarget=null}function Gw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;vy(i,a,d),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,d=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;vy(i,a,d),s=l}}}if(Ql)throw t=Nh,Ql=!1,Nh=null,t}function _e(t,e){var n=e[Vh];n===void 0&&(n=e[Vh]=new Set);var r=t+"__bubble";n.has(r)||(Qw(e,t,2,!1),n.add(r))}function _d(t,e,n){var r=0;e&&(r|=4),Qw(n,t,r,e)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Ho(t){if(!t[ol]){t[ol]=!0,nw.forEach(function(n){n!=="selectionchange"&&(SA.has(n)||_d(n,!1,t),_d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ol]||(e[ol]=!0,_d("selectionchange",!1,e))}}function Qw(t,e,n,r){switch(Dw(e)){case 1:var i=LT;break;case 4:i=FT;break;default:i=hp}n=i.bind(null,e,n,t),i=void 0,!Dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ri(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}vw(function(){var d=s,h=lp(n),p=[];e:{var m=Kw.get(t);if(m!==void 0){var I=pp,C=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":I=JT;break;case"focusin":C="focus",I=Cd;break;case"focusout":C="blur",I=Cd;break;case"beforeblur":case"afterblur":I=Cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=oy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=BT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=tA;break;case Vw:case Hw:case Ww:I=VT;break;case qw:I=rA;break;case"scroll":I=MT;break;case"wheel":I=sA;break;case"copy":case"cut":case"paste":I=WT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=ly}var S=(e&4)!==0,T=!S&&t==="scroll",w=S?m!==null?m+"Capture":null:m;S=[];for(var g=d,E;g!==null;){E=g;var b=E.stateNode;if(E.tag===5&&b!==null&&(E=b,w!==null&&(b=Mo(g,w),b!=null&&S.push(Wo(g,b,E)))),T)break;g=g.return}0<S.length&&(m=new I(m,C,null,n,h),p.push({event:m,listeners:S}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==Ph&&(C=n.relatedTarget||n.fromElement)&&(ri(C)||C[Jn]))break e;if((I||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,I?(C=n.relatedTarget||n.toElement,I=d,C=C?ri(C):null,C!==null&&(T=Pi(C),C!==T||C.tag!==5&&C.tag!==6)&&(C=null)):(I=null,C=d),I!==C)){if(S=oy,b="onMouseLeave",w="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=ly,b="onPointerLeave",w="onPointerEnter",g="pointer"),T=I==null?m:Ji(I),E=C==null?m:Ji(C),m=new S(b,g+"leave",I,n,h),m.target=T,m.relatedTarget=E,b=null,ri(h)===d&&(S=new S(w,g+"enter",C,n,h),S.target=E,S.relatedTarget=T,b=S),T=b,I&&C)t:{for(S=I,w=C,g=0,E=S;E;E=Hi(E))g++;for(E=0,b=w;b;b=Hi(b))E++;for(;0<g-E;)S=Hi(S),g--;for(;0<E-g;)w=Hi(w),E--;for(;g--;){if(S===w||w!==null&&S===w.alternate)break t;S=Hi(S),w=Hi(w)}S=null}else S=null;I!==null&&wy(p,m,I,S,!1),C!==null&&T!==null&&wy(p,T,C,S,!0)}}e:{if(m=d?Ji(d):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var A=hA;else if(dy(m))if(Mw)A=gA;else{A=pA;var P=fA}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(A=mA);if(A&&(A=A(t,d))){Fw(p,A,n,h);break e}P&&P(t,m,d),t==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&bh(m,"number",m.value)}switch(P=d?Ji(d):window,t){case"focusin":(dy(P)||P.contentEditable==="true")&&(Yi=P,Fh=d,So=null);break;case"focusout":So=Fh=Yi=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,gy(p,n,h);break;case"selectionchange":if(wA)break;case"keydown":case"keyup":gy(p,n,h)}var U;if(gp)e:{switch(t){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Qi?$w(t,n)&&(B="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Ow&&n.locale!=="ko"&&(Qi||B!=="onCompositionStart"?B==="onCompositionEnd"&&Qi&&(U=Nw()):(Er=h,fp="value"in Er?Er.value:Er.textContent,Qi=!0)),P=eu(d,B),0<P.length&&(B=new ay(B,t,null,n,h),p.push({event:B,listeners:P}),U?B.data=U:(U=Lw(n),U!==null&&(B.data=U)))),(U=aA?lA(t,n):uA(t,n))&&(d=eu(d,"onBeforeInput"),0<d.length&&(h=new ay("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:d}),h.data=U))}Gw(p,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Mo(t,n),s!=null&&r.unshift(Wo(t,s,i)),s=Mo(t,e),s!=null&&r.push(Wo(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,i?(l=Mo(n,s),l!=null&&o.unshift(Wo(n,l,a))):i||(l=Mo(n,s),l!=null&&o.push(Wo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CA=/\r\n?/g,kA=/\u0000|\uFFFD/g;function Ey(t){return(typeof t=="string"?t:""+t).replace(CA,`
`).replace(kA,"")}function al(t,e,n){if(e=Ey(e),Ey(t)!==e&&n)throw Error(D(425))}function tu(){}var Uh=null,Bh=null;function zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,bA=typeof clearTimeout=="function"?clearTimeout:void 0,Iy=typeof Promise=="function"?Promise:void 0,xA=typeof queueMicrotask=="function"?queueMicrotask:typeof Iy<"u"?function(t){return Iy.resolve(null).then(t).catch(TA)}:jh;function TA(t){setTimeout(function(){throw t})}function Rd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zo(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Dn="__reactFiber$"+Ms,qo="__reactProps$"+Ms,Jn="__reactContainer$"+Ms,Vh="__reactEvents$"+Ms,AA="__reactListeners$"+Ms,_A="__reactHandles$"+Ms;function ri(t){var e=t[Dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[Dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sy(t);t!==null;){if(n=t[Dn])return n;t=Sy(t)}return e}t=n,n=t.parentNode}return null}function Ia(t){return t=t[Dn]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function Yu(t){return t[qo]||null}var Hh=[],Zi=-1;function Vr(t){return{current:t}}function Pe(t){0>Zi||(t.current=Hh[Zi],Hh[Zi]=null,Zi--)}function Te(t,e){Zi++,Hh[Zi]=t.current,t.current=e}var Mr={},_t=Vr(Mr),Vt=Vr(!1),mi=Mr;function ws(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function nu(){Pe(Vt),Pe(_t)}function Cy(t,e,n){if(_t.current!==Mr)throw Error(D(168));Te(_t,e),Te(Vt,n)}function Yw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,fT(t)||"Unknown",i));return Be({},n,r)}function ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,mi=_t.current,Te(_t,t),Te(Vt,Vt.current),!0}function ky(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=Yw(t,e,mi),r.__reactInternalMemoizedMergedChildContext=t,Pe(Vt),Pe(_t),Te(_t,t)):Pe(Vt),Te(Vt,n)}var Vn=null,Xu=!1,Dd=!1;function Xw(t){Vn===null?Vn=[t]:Vn.push(t)}function PA(t){Xu=!0,Xw(t)}function Hr(){if(!Dd&&Vn!==null){Dd=!0;var t=0,e=Ce;try{var n=Vn;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,Xu=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(t+1)),Sw(up,Hr),i}finally{Ce=e,Dd=!1}}return null}var es=[],ts=0,iu=null,su=0,on=[],an=0,gi=null,Hn=1,Wn="";function ei(t,e){es[ts++]=su,es[ts++]=iu,iu=t,su=e}function Jw(t,e,n){on[an++]=Hn,on[an++]=Wn,on[an++]=gi,gi=t;var r=Hn;t=Wn;var i=32-In(r)-1;r&=~(1<<i),n+=1;var s=32-In(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-In(e)+i|n<<i|r,Wn=s+t}else Hn=1<<s|n<<i|r,Wn=t}function vp(t){t.return!==null&&(ei(t,1),Jw(t,1,0))}function wp(t){for(;t===iu;)iu=es[--ts],es[ts]=null,su=es[--ts],es[ts]=null;for(;t===gi;)gi=on[--an],on[an]=null,Wn=on[--an],on[an]=null,Hn=on[--an],on[an]=null}var Yt=null,Qt=null,Ne=!1,wn=null;function Zw(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function by(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,Qt=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gi!==null?{id:Hn,overflow:Wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,Qt=null,!0):!1;default:return!1}}function Wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qh(t){if(Ne){var e=Qt;if(e){var n=e;if(!by(t,e)){if(Wh(t))throw Error(D(418));e=xr(n.nextSibling);var r=Yt;e&&by(t,e)?Zw(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Yt=t)}}else{if(Wh(t))throw Error(D(418));t.flags=t.flags&-4097|2,Ne=!1,Yt=t}}}function xy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function ll(t){if(t!==Yt)return!1;if(!Ne)return xy(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zh(t.type,t.memoizedProps)),e&&(e=Qt)){if(Wh(t))throw e1(),Error(D(418));for(;e;)Zw(t,e),e=xr(e.nextSibling)}if(xy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=Yt?xr(t.stateNode.nextSibling):null;return!0}function e1(){for(var t=Qt;t;)t=xr(t.nextSibling)}function Es(){Qt=Yt=null,Ne=!1}function Ep(t){wn===null?wn=[t]:wn.push(t)}var RA=or.ReactCurrentBatchConfig;function yn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ou=Vr(null),au=null,ns=null,Ip=null;function Sp(){Ip=ns=au=null}function Cp(t){var e=ou.current;Pe(ou),t._currentValue=e}function Kh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){au=t,Ip=ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function fn(t){var e=t._currentValue;if(Ip!==t)if(t={context:t,memoizedValue:e,next:null},ns===null){if(au===null)throw Error(D(308));ns=t,au.dependencies={lanes:0,firstContext:t}}else ns=ns.next=t;return e}var ii=null;function kp(t){ii===null?ii=[t]:ii.push(t)}function t1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,kp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zn(t,r)}function Zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zn(t,n)}return i=r.interleaved,i===null?(e.next=e,kp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zn(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cp(t,n)}}function Ty(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lu(t,e,n,r){var i=t.updateQueue;fr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,d=l.next;l.next=null,o===null?s=d:o.next=d,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,h=d=l=null,a=s;do{var m=a.lane,I=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:I,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=t,S=a;switch(m=e,I=n,S.tag){case 1:if(C=S.payload,typeof C=="function"){p=C.call(I,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=S.payload,m=typeof C=="function"?C.call(I,p,m):C,m==null)break e;p=Be({},p,m);break e;case 2:fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else I={eventTime:I,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=I,l=p):h=h.next=I,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(l=p),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vi|=o,t.lanes=o,t.memoizedState=p}}function Ay(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var r1=new tw.Component().refs;function Gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={isMounted:function(t){return(t=t._reactInternals)?Pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ft(),i=_r(t),s=Yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(Sn(e,t,i,r),Rl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ft(),i=_r(t),s=Yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(Sn(e,t,i,r),Rl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ft(),r=_r(t),i=Yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(Sn(e,t,r,n),Rl(e,t,r))}};function _y(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,r)||!Vo(i,s):!0}function i1(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=fn(s):(i=Ht(e)?mi:_t.current,r=e.contextTypes,s=(r=r!=null)?ws(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Py(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function Qh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=r1,bp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=fn(s):(s=Ht(e)?mi:_t.current,i.context=ws(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ju.enqueueReplaceState(i,i.state,null),lu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===r1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function ul(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ry(t){var e=t._init;return e(t._payload)}function s1(t){function e(w,g){if(t){var E=w.deletions;E===null?(w.deletions=[g],w.flags|=16):E.push(g)}}function n(w,g){if(!t)return null;for(;g!==null;)e(w,g),g=g.sibling;return null}function r(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function i(w,g){return w=Pr(w,g),w.index=0,w.sibling=null,w}function s(w,g,E){return w.index=E,t?(E=w.alternate,E!==null?(E=E.index,E<g?(w.flags|=2,g):E):(w.flags|=2,g)):(w.flags|=1048576,g)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,g,E,b){return g===null||g.tag!==6?(g=Ud(E,w.mode,b),g.return=w,g):(g=i(g,E),g.return=w,g)}function l(w,g,E,b){var A=E.type;return A===Gi?h(w,g,E.props.children,b,E.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===hr&&Ry(A)===g.type)?(b=i(g,E.props),b.ref=io(w,g,E),b.return=w,b):(b=Fl(E.type,E.key,E.props,null,w.mode,b),b.ref=io(w,g,E),b.return=w,b)}function d(w,g,E,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==E.containerInfo||g.stateNode.implementation!==E.implementation?(g=Bd(E,w.mode,b),g.return=w,g):(g=i(g,E.children||[]),g.return=w,g)}function h(w,g,E,b,A){return g===null||g.tag!==7?(g=di(E,w.mode,b,A),g.return=w,g):(g=i(g,E),g.return=w,g)}function p(w,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ud(""+g,w.mode,E),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ja:return E=Fl(g.type,g.key,g.props,null,w.mode,E),E.ref=io(w,null,g),E.return=w,E;case Ki:return g=Bd(g,w.mode,E),g.return=w,g;case hr:var b=g._init;return p(w,b(g._payload),E)}if(uo(g)||Zs(g))return g=di(g,w.mode,E,null),g.return=w,g;ul(w,g)}return null}function m(w,g,E,b){var A=g!==null?g.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return A!==null?null:a(w,g,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ja:return E.key===A?l(w,g,E,b):null;case Ki:return E.key===A?d(w,g,E,b):null;case hr:return A=E._init,m(w,g,A(E._payload),b)}if(uo(E)||Zs(E))return A!==null?null:h(w,g,E,b,null);ul(w,E)}return null}function I(w,g,E,b,A){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(E)||null,a(g,w,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ja:return w=w.get(b.key===null?E:b.key)||null,l(g,w,b,A);case Ki:return w=w.get(b.key===null?E:b.key)||null,d(g,w,b,A);case hr:var P=b._init;return I(w,g,E,P(b._payload),A)}if(uo(b)||Zs(b))return w=w.get(E)||null,h(g,w,b,A,null);ul(g,b)}return null}function C(w,g,E,b){for(var A=null,P=null,U=g,B=g=0,ue=null;U!==null&&B<E.length;B++){U.index>B?(ue=U,U=null):ue=U.sibling;var X=m(w,U,E[B],b);if(X===null){U===null&&(U=ue);break}t&&U&&X.alternate===null&&e(w,U),g=s(X,g,B),P===null?A=X:P.sibling=X,P=X,U=ue}if(B===E.length)return n(w,U),Ne&&ei(w,B),A;if(U===null){for(;B<E.length;B++)U=p(w,E[B],b),U!==null&&(g=s(U,g,B),P===null?A=U:P.sibling=U,P=U);return Ne&&ei(w,B),A}for(U=r(w,U);B<E.length;B++)ue=I(U,w,B,E[B],b),ue!==null&&(t&&ue.alternate!==null&&U.delete(ue.key===null?B:ue.key),g=s(ue,g,B),P===null?A=ue:P.sibling=ue,P=ue);return t&&U.forEach(function(He){return e(w,He)}),Ne&&ei(w,B),A}function S(w,g,E,b){var A=Zs(E);if(typeof A!="function")throw Error(D(150));if(E=A.call(E),E==null)throw Error(D(151));for(var P=A=null,U=g,B=g=0,ue=null,X=E.next();U!==null&&!X.done;B++,X=E.next()){U.index>B?(ue=U,U=null):ue=U.sibling;var He=m(w,U,X.value,b);if(He===null){U===null&&(U=ue);break}t&&U&&He.alternate===null&&e(w,U),g=s(He,g,B),P===null?A=He:P.sibling=He,P=He,U=ue}if(X.done)return n(w,U),Ne&&ei(w,B),A;if(U===null){for(;!X.done;B++,X=E.next())X=p(w,X.value,b),X!==null&&(g=s(X,g,B),P===null?A=X:P.sibling=X,P=X);return Ne&&ei(w,B),A}for(U=r(w,U);!X.done;B++,X=E.next())X=I(U,w,B,X.value,b),X!==null&&(t&&X.alternate!==null&&U.delete(X.key===null?B:X.key),g=s(X,g,B),P===null?A=X:P.sibling=X,P=X);return t&&U.forEach(function(Le){return e(w,Le)}),Ne&&ei(w,B),A}function T(w,g,E,b){if(typeof E=="object"&&E!==null&&E.type===Gi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ja:e:{for(var A=E.key,P=g;P!==null;){if(P.key===A){if(A=E.type,A===Gi){if(P.tag===7){n(w,P.sibling),g=i(P,E.props.children),g.return=w,w=g;break e}}else if(P.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===hr&&Ry(A)===P.type){n(w,P.sibling),g=i(P,E.props),g.ref=io(w,P,E),g.return=w,w=g;break e}n(w,P);break}else e(w,P);P=P.sibling}E.type===Gi?(g=di(E.props.children,w.mode,b,E.key),g.return=w,w=g):(b=Fl(E.type,E.key,E.props,null,w.mode,b),b.ref=io(w,g,E),b.return=w,w=b)}return o(w);case Ki:e:{for(P=E.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===E.containerInfo&&g.stateNode.implementation===E.implementation){n(w,g.sibling),g=i(g,E.children||[]),g.return=w,w=g;break e}else{n(w,g);break}else e(w,g);g=g.sibling}g=Bd(E,w.mode,b),g.return=w,w=g}return o(w);case hr:return P=E._init,T(w,g,P(E._payload),b)}if(uo(E))return C(w,g,E,b);if(Zs(E))return S(w,g,E,b);ul(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,g!==null&&g.tag===6?(n(w,g.sibling),g=i(g,E),g.return=w,w=g):(n(w,g),g=Ud(E,w.mode,b),g.return=w,w=g),o(w)):n(w,g)}return T}var Is=s1(!0),o1=s1(!1),Sa={},$n=Vr(Sa),Ko=Vr(Sa),Go=Vr(Sa);function si(t){if(t===Sa)throw Error(D(174));return t}function xp(t,e){switch(Te(Go,e),Te(Ko,t),Te($n,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Th(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Th(e,t)}Pe($n),Te($n,e)}function Ss(){Pe($n),Pe(Ko),Pe(Go)}function a1(t){si(Go.current);var e=si($n.current),n=Th(e,t.type);e!==n&&(Te(Ko,t),Te($n,n))}function Tp(t){Ko.current===t&&(Pe($n),Pe(Ko))}var Me=Vr(0);function uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nd=[];function Ap(){for(var t=0;t<Nd.length;t++)Nd[t]._workInProgressVersionPrimary=null;Nd.length=0}var Dl=or.ReactCurrentDispatcher,Od=or.ReactCurrentBatchConfig,yi=0,Ue=null,Je=null,ot=null,cu=!1,Co=!1,Qo=0,DA=0;function Et(){throw Error(D(321))}function _p(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function Pp(t,e,n,r,i,s){if(yi=s,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?LA:FA,t=n(r,i),Co){s=0;do{if(Co=!1,Qo=0,25<=s)throw Error(D(301));s+=1,ot=Je=null,e.updateQueue=null,Dl.current=MA,t=n(r,i)}while(Co)}if(Dl.current=du,e=Je!==null&&Je.next!==null,yi=0,ot=Je=Ue=null,cu=!1,e)throw Error(D(300));return t}function Rp(){var t=Qo!==0;return Qo=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Ue.memoizedState=ot=t:ot=ot.next=t,ot}function pn(){if(Je===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=ot===null?Ue.memoizedState:ot.next;if(e!==null)ot=e,Je=t;else{if(t===null)throw Error(D(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},ot===null?Ue.memoizedState=ot=t:ot=ot.next=t}return ot}function Yo(t,e){return typeof e=="function"?e(t):e}function $d(t){var e=pn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,d=s;do{var h=d.lane;if((yi&h)===h)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,Ue.lanes|=h,vi|=h}d=d.next}while(d!==null&&d!==s);l===null?o=r:l.next=a,kn(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ue.lanes|=s,vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ld(t){var e=pn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kn(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function l1(){}function u1(t,e){var n=Ue,r=pn(),i=e(),s=!kn(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,Dp(h1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,Xo(9,d1.bind(null,n,r,i,e),void 0,null),at===null)throw Error(D(349));yi&30||c1(n,e,i)}return i}function c1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function d1(t,e,n,r){e.value=n,e.getSnapshot=r,f1(e)&&p1(t)}function h1(t,e,n){return n(function(){f1(e)&&p1(t)})}function f1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function p1(t){var e=Zn(t,1);e!==null&&Sn(e,t,1,-1)}function Dy(t){var e=Rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},e.queue=t,t=t.dispatch=$A.bind(null,Ue,t),[e.memoizedState,t]}function Xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function m1(){return pn().memoizedState}function Nl(t,e,n,r){var i=Rn();Ue.flags|=t,i.memoizedState=Xo(1|e,n,void 0,r===void 0?null:r)}function Zu(t,e,n,r){var i=pn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&_p(r,o.deps)){i.memoizedState=Xo(e,n,s,r);return}}Ue.flags|=t,i.memoizedState=Xo(1|e,n,s,r)}function Ny(t,e){return Nl(8390656,8,t,e)}function Dp(t,e){return Zu(2048,8,t,e)}function g1(t,e){return Zu(4,2,t,e)}function y1(t,e){return Zu(4,4,t,e)}function v1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w1(t,e,n){return n=n!=null?n.concat([t]):null,Zu(4,4,v1.bind(null,e,t),n)}function Np(){}function E1(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function I1(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function S1(t,e,n){return yi&21?(kn(n,e)||(n=bw(),Ue.lanes|=n,vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function NA(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=Od.transition;Od.transition={};try{t(!1),e()}finally{Ce=n,Od.transition=r}}function C1(){return pn().memoizedState}function OA(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},k1(t))b1(e,n);else if(n=t1(t,e,n,r),n!==null){var i=Ft();Sn(n,t,r,i),x1(n,e,r)}}function $A(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(k1(t))b1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(i.next=i,kp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=t1(t,e,i,r),n!==null&&(i=Ft(),Sn(n,t,r,i),x1(n,e,r))}}function k1(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function b1(t,e){Co=cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cp(t,n)}}var du={readContext:fn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},LA={readContext:fn,useCallback:function(t,e){return Rn().memoizedState=[t,e===void 0?null:e],t},useContext:fn,useEffect:Ny,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,v1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=Rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=OA.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=Rn();return t={current:t},e.memoizedState=t},useState:Dy,useDebugValue:Np,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=Dy(!1),e=t[0];return t=NA.bind(null,t[1]),Rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,i=Rn();if(Ne){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),at===null)throw Error(D(349));yi&30||c1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ny(h1.bind(null,r,s,t),[t]),r.flags|=2048,Xo(9,d1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rn(),e=at.identifierPrefix;if(Ne){var n=Wn,r=Hn;n=(r&~(1<<32-In(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},FA={readContext:fn,useCallback:E1,useContext:fn,useEffect:Dp,useImperativeHandle:w1,useInsertionEffect:g1,useLayoutEffect:y1,useMemo:I1,useReducer:$d,useRef:m1,useState:function(){return $d(Yo)},useDebugValue:Np,useDeferredValue:function(t){var e=pn();return S1(e,Je.memoizedState,t)},useTransition:function(){var t=$d(Yo)[0],e=pn().memoizedState;return[t,e]},useMutableSource:l1,useSyncExternalStore:u1,useId:C1,unstable_isNewReconciler:!1},MA={readContext:fn,useCallback:E1,useContext:fn,useEffect:Dp,useImperativeHandle:w1,useInsertionEffect:g1,useLayoutEffect:y1,useMemo:I1,useReducer:Ld,useRef:m1,useState:function(){return Ld(Yo)},useDebugValue:Np,useDeferredValue:function(t){var e=pn();return Je===null?e.memoizedState=t:S1(e,Je.memoizedState,t)},useTransition:function(){var t=Ld(Yo)[0],e=pn().memoizedState;return[t,e]},useMutableSource:l1,useSyncExternalStore:u1,useId:C1,unstable_isNewReconciler:!1};function Cs(t,e){try{var n="",r=e;do n+=hT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UA=typeof WeakMap=="function"?WeakMap:Map;function T1(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fu||(fu=!0,af=r),Yh(t,e)},n}function A1(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yh(t,e),typeof r!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Oy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ZA.bind(null,t,e,n),e.then(t,t))}function $y(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ly(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var BA=or.ReactCurrentOwner,jt=!1;function Ot(t,e,n,r){e.child=t===null?o1(e,null,n,r):Is(e,t.child,n,r)}function Fy(t,e,n,r,i){n=n.render;var s=e.ref;return hs(e,i),r=Pp(t,e,n,r,s,i),n=Rp(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Ne&&n&&vp(e),e.flags|=1,Ot(t,e,r,i),e.child)}function My(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_1(t,e,s,r,i)):(t=Fl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,r)&&t.ref===e.ref)return er(t,e,i)}return e.flags|=1,t=Pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function _1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vo(s,r)&&t.ref===e.ref)if(jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,er(t,e,i)}return Xh(t,e,n,r,i)}function P1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(is,Gt),Gt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(is,Gt),Gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(is,Gt),Gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(is,Gt),Gt|=r;return Ot(t,e,i,n),e.child}function R1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xh(t,e,n,r,i){var s=Ht(n)?mi:_t.current;return s=ws(e,s),hs(e,i),n=Pp(t,e,n,r,s,i),r=Rp(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Ne&&r&&vp(e),e.flags|=1,Ot(t,e,n,i),e.child)}function Uy(t,e,n,r,i){if(Ht(n)){var s=!0;ru(e)}else s=!1;if(hs(e,i),e.stateNode===null)Ol(t,e),i1(e,n,r),Qh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=fn(d):(d=Ht(n)?mi:_t.current,d=ws(e,d));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==d)&&Py(e,o,r,d),fr=!1;var m=e.memoizedState;o.state=m,lu(e,r,o,i),l=e.memoizedState,a!==r||m!==l||Vt.current||fr?(typeof h=="function"&&(Gh(e,n,h,r),l=e.memoizedState),(a=fr||_y(e,n,a,r,m,l,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,n1(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:yn(e.type,a),o.props=d,p=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=fn(l):(l=Ht(n)?mi:_t.current,l=ws(e,l));var I=n.getDerivedStateFromProps;(h=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Py(e,o,r,l),fr=!1,m=e.memoizedState,o.state=m,lu(e,r,o,i);var C=e.memoizedState;a!==p||m!==C||Vt.current||fr?(typeof I=="function"&&(Gh(e,n,I,r),C=e.memoizedState),(d=fr||_y(e,n,d,r,m,C,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=l,r=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Jh(t,e,n,r,s,i)}function Jh(t,e,n,r,i,s){R1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ky(e,n,!1),er(t,e,s);r=e.stateNode,BA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):Ot(t,e,a,s),e.memoizedState=r.state,i&&ky(e,n,!0),e.child}function D1(t){var e=t.stateNode;e.pendingContext?Cy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cy(t,e.context,!1),xp(t,e.containerInfo)}function By(t,e,n,r,i){return Es(),Ep(i),e.flags|=256,Ot(t,e,n,r),e.child}var Zh={dehydrated:null,treeContext:null,retryLane:0};function ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function N1(t,e,n){var r=e.pendingProps,i=Me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Me,i&1),t===null)return qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,r,0,null),t=di(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ef(n),e.memoizedState=Zh,t):Op(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return zA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Pr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=di(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zh,r}return s=t.child,t=s.sibling,r=Pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Op(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,r){return r!==null&&Ep(r),Is(e,t.child,null,n),t=Op(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fd(Error(D(422))),cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nc({mode:"visible",children:r.children},i,0,null),s=di(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=ef(o),e.memoizedState=Zh,s);if(!(e.mode&1))return cl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=Fd(s,r,void 0),cl(t,e,o,r)}if(a=(o&t.childLanes)!==0,jt||a){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zn(t,i),Sn(r,t,i,-1))}return Bp(),r=Fd(Error(D(421))),cl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=e_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qt=xr(i.nextSibling),Yt=e,Ne=!0,wn=null,t!==null&&(on[an++]=Hn,on[an++]=Wn,on[an++]=gi,Hn=t.id,Wn=t.overflow,gi=e),e=Op(e,r.children),e.flags|=4096,e)}function zy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kh(t.return,e,n)}function Md(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function O1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ot(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zy(t,n,e);else if(t.tag===19)zy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Md(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Md(e,!0,n,null,s);break;case"together":Md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jA(t,e,n){switch(e.tag){case 3:D1(e),Es();break;case 5:a1(e);break;case 1:Ht(e.type)&&ru(e);break;case 4:xp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(ou,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?N1(t,e,n):(Te(Me,Me.current&1),t=er(t,e,n),t!==null?t.sibling:null);Te(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return O1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,P1(t,e,n)}return er(t,e,n)}var $1,tf,L1,F1;$1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tf=function(){};L1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si($n.current);var s=null;switch(n){case"input":i=Ch(t,i),r=Ch(t,r),s=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),s=[];break;case"textarea":i=xh(t,i),r=xh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tu)}Ah(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Lo.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var l=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(d,l))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};F1=function(t,e,n,r){n!==r&&(e.flags|=4)};function so(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function VA(t,e,n){var r=e.pendingProps;switch(wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return Ht(e.type)&&nu(),It(e),null;case 3:return r=e.stateNode,Ss(),Pe(Vt),Pe(_t),Ap(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wn!==null&&(cf(wn),wn=null))),tf(t,e),It(e),null;case 5:Tp(e);var i=si(Go.current);if(n=e.type,t!==null&&e.stateNode!=null)L1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return It(e),null}if(t=si($n.current),ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dn]=e,r[qo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<ho.length;i++)_e(ho[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Yg(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Jg(r,s),_e("invalid",r)}Ah(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&al(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&al(r.textContent,a,t),i=["children",""+a]):Lo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Za(r),Xg(r,s,!0);break;case"textarea":Za(r),Zg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dn]=e,t[qo]=r,$1(t,e,!1,!1),e.stateNode=t;e:{switch(o=_h(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<ho.length;i++)_e(ho[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Yg(t,r),i=Ch(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Jg(t,r),i=xh(t,r),_e("invalid",t);break;default:i=r}Ah(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fo(t,l):typeof l=="number"&&Fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&ip(t,s,l,o))}switch(n){case"input":Za(t),Xg(t,r,!1);break;case"textarea":Za(t),Zg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ls(t,!!r.multiple,s,!1):r.defaultValue!=null&&ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)F1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=si(Go.current),si($n.current),ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dn]=e,(s=r.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:al(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&al(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=e,e.stateNode=r}return It(e),null;case 13:if(Pe(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Qt!==null&&e.mode&1&&!(e.flags&128))e1(),Es(),e.flags|=98560,s=!1;else if(s=ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Dn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else wn!==null&&(cf(wn),wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?et===0&&(et=3):Bp())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return Ss(),tf(t,e),t===null&&Ho(e.stateNode.containerInfo),It(e),null;case 10:return Cp(e.type._context),It(e),null;case 17:return Ht(e.type)&&nu(),It(e),null;case 19:if(Pe(Me),s=e.memoizedState,s===null)return It(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)so(s,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uu(t),o!==null){for(e.flags|=128,so(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Me,Me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>ks&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304)}else{if(!r)if(t=uu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return It(e),null}else 2*Ke()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=Me.current,Te(Me,r?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Up(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Gt&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function HA(t,e){switch(wp(e),e.tag){case 1:return Ht(e.type)&&nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),Pe(Vt),Pe(_t),Ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tp(e),null;case 13:if(Pe(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Me),null;case 4:return Ss(),null;case 10:return Cp(e.type._context),null;case 22:case 23:return Up(),null;case 24:return null;default:return null}}var dl=!1,kt=!1,WA=typeof WeakSet=="function"?WeakSet:Set,V=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function nf(t,e,n){try{n()}catch(r){je(t,e,r)}}var jy=!1;function qA(t,e){if(Uh=Jl,t=zw(),yp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,d=0,h=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++d===i&&(a=o),m===s&&++h===r&&(l=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bh={focusedElem:t,selectionRange:n},Jl=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var S=C.memoizedProps,T=C.memoizedState,w=e.stateNode,g=w.getSnapshotBeforeUpdate(e.elementType===e.type?S:yn(e.type,S),T);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(b){je(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return C=jy,jy=!1,C}function ko(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nf(e,n,s)}i=i.next}while(i!==r)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M1(t){var e=t.alternate;e!==null&&(t.alternate=null,M1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dn],delete e[qo],delete e[Vh],delete e[AA],delete e[_A])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U1(t){return t.tag===5||t.tag===3||t.tag===4}function Vy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tu));else if(r!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}function of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}var ht=null,vn=!1;function cr(t,e,n){for(n=n.child;n!==null;)B1(t,e,n),n=n.sibling}function B1(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(qu,n)}catch{}switch(n.tag){case 5:kt||rs(n,e);case 6:var r=ht,i=vn;ht=null,cr(t,e,n),ht=r,vn=i,ht!==null&&(vn?(t=ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(vn?(t=ht,n=n.stateNode,t.nodeType===8?Rd(t.parentNode,n):t.nodeType===1&&Rd(t,n),zo(t)):Rd(ht,n.stateNode));break;case 4:r=ht,i=vn,ht=n.stateNode.containerInfo,vn=!0,cr(t,e,n),ht=r,vn=i;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nf(n,e,o),i=i.next}while(i!==r)}cr(t,e,n);break;case 1:if(!kt&&(rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,cr(t,e,n),kt=r):cr(t,e,n);break;default:cr(t,e,n)}}function Hy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WA),e.forEach(function(r){var i=t_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ht=a.stateNode,vn=!1;break e;case 3:ht=a.stateNode.containerInfo,vn=!0;break e;case 4:ht=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(ht===null)throw Error(D(160));B1(s,o,i),ht=null,vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){je(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z1(e,t),e=e.sibling}function z1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),_n(t),r&4){try{ko(3,t,t.return),ec(3,t)}catch(S){je(t,t.return,S)}try{ko(5,t,t.return)}catch(S){je(t,t.return,S)}}break;case 1:gn(e,t),_n(t),r&512&&n!==null&&rs(n,n.return);break;case 5:if(gn(e,t),_n(t),r&512&&n!==null&&rs(n,n.return),t.flags&32){var i=t.stateNode;try{Fo(i,"")}catch(S){je(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lw(i,s),_h(a,o);var d=_h(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?fw(i,p):h==="dangerouslySetInnerHTML"?dw(i,p):h==="children"?Fo(i,p):ip(i,h,p,d)}switch(a){case"input":kh(i,s);break;case"textarea":uw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?ls(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?ls(i,!!s.multiple,s.defaultValue,!0):ls(i,!!s.multiple,s.multiple?[]:"",!1))}i[qo]=s}catch(S){je(t,t.return,S)}}break;case 6:if(gn(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){je(t,t.return,S)}}break;case 3:if(gn(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(S){je(t,t.return,S)}break;case 4:gn(e,t),_n(t);break;case 13:gn(e,t),_n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Fp=Ke())),r&4&&Hy(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(d=kt)||h,gn(e,t),kt=d):gn(e,t),_n(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(V=t,h=t.child;h!==null;){for(p=V=h;V!==null;){switch(m=V,I=m.child,m.tag){case 0:case 11:case 14:case 15:ko(4,m,m.return);break;case 1:rs(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(S){je(r,n,S)}}break;case 5:rs(m,m.return);break;case 22:if(m.memoizedState!==null){qy(p);continue}}I!==null?(I.return=m,V=I):qy(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hw("display",o))}catch(S){je(t,t.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(S){je(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gn(e,t),_n(t),r&4&&Hy(t);break;case 21:break;default:gn(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U1(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fo(i,""),r.flags&=-33);var s=Vy(t);of(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Vy(t);sf(t,a,o);break;default:throw Error(D(161))}}catch(l){je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KA(t,e,n){V=t,j1(t)}function j1(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||dl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||kt;a=dl;var d=kt;if(dl=o,(kt=l)&&!d)for(V=i;V!==null;)o=V,l=o.child,o.tag===22&&o.memoizedState!==null?Ky(i):l!==null?(l.return=o,V=l):Ky(i);for(;s!==null;)V=s,j1(s),s=s.sibling;V=i,dl=a,kt=d}Wy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):Wy(t)}}function Wy(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!kt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ay(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ay(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&zo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}kt||e.flags&512&&rf(e)}catch(m){je(e,e.return,m)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function qy(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function Ky(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){je(e,i,l)}}var s=e.return;try{rf(e)}catch(l){je(e,s,l)}break;case 5:var o=e.return;try{rf(e)}catch(l){je(e,o,l)}}}catch(l){je(e,e.return,l)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var GA=Math.ceil,hu=or.ReactCurrentDispatcher,$p=or.ReactCurrentOwner,cn=or.ReactCurrentBatchConfig,ve=0,at=null,Ye=null,pt=0,Gt=0,is=Vr(0),et=0,Jo=null,vi=0,tc=0,Lp=0,bo=null,zt=null,Fp=0,ks=1/0,jn=null,fu=!1,af=null,Ar=null,hl=!1,Ir=null,pu=0,xo=0,lf=null,$l=-1,Ll=0;function Ft(){return ve&6?Ke():$l!==-1?$l:$l=Ke()}function _r(t){return t.mode&1?ve&2&&pt!==0?pt&-pt:RA.transition!==null?(Ll===0&&(Ll=bw()),Ll):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:Dw(t.type)),t):1}function Sn(t,e,n,r){if(50<xo)throw xo=0,lf=null,Error(D(185));wa(t,n,r),(!(ve&2)||t!==at)&&(t===at&&(!(ve&2)&&(tc|=n),et===4&&mr(t,pt)),Wt(t,r),n===1&&ve===0&&!(e.mode&1)&&(ks=Ke()+500,Xu&&Hr()))}function Wt(t,e){var n=t.callbackNode;RT(t,e);var r=Xl(t,t===at?pt:0);if(r===0)n!==null&&ny(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ny(n),e===1)t.tag===0?PA(Gy.bind(null,t)):Xw(Gy.bind(null,t)),xA(function(){!(ve&6)&&Hr()}),n=null;else{switch(xw(r)){case 1:n=up;break;case 4:n=Cw;break;case 16:n=Yl;break;case 536870912:n=kw;break;default:n=Yl}n=Y1(n,V1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V1(t,e){if($l=-1,Ll=0,ve&6)throw Error(D(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var r=Xl(t,t===at?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mu(t,r);else{e=r;var i=ve;ve|=2;var s=W1();(at!==t||pt!==e)&&(jn=null,ks=Ke()+500,ci(t,e));do try{XA();break}catch(a){H1(t,a)}while(1);Sp(),hu.current=s,ve=i,Ye!==null?e=0:(at=null,pt=0,e=et)}if(e!==0){if(e===2&&(i=Oh(t),i!==0&&(r=i,e=uf(t,i))),e===1)throw n=Jo,ci(t,0),mr(t,r),Wt(t,Ke()),n;if(e===6)mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!QA(i)&&(e=mu(t,r),e===2&&(s=Oh(t),s!==0&&(r=s,e=uf(t,s))),e===1))throw n=Jo,ci(t,0),mr(t,r),Wt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:ti(t,zt,jn);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=Fp+500-Ke(),10<e)){if(Xl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jh(ti.bind(null,t,zt,jn),e);break}ti(t,zt,jn);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-In(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GA(r/1960))-r,10<r){t.timeoutHandle=jh(ti.bind(null,t,zt,jn),r);break}ti(t,zt,jn);break;case 5:ti(t,zt,jn);break;default:throw Error(D(329))}}}return Wt(t,Ke()),t.callbackNode===n?V1.bind(null,t):null}function uf(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(ci(t,e).flags|=256),t=mu(t,e),t!==2&&(e=zt,zt=n,e!==null&&cf(e)),t}function cf(t){zt===null?zt=t:zt.push.apply(zt,t)}function QA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~Lp,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),r=1<<n;t[n]=-1,e&=~r}}function Gy(t){if(ve&6)throw Error(D(327));fs();var e=Xl(t,0);if(!(e&1))return Wt(t,Ke()),null;var n=mu(t,e);if(t.tag!==0&&n===2){var r=Oh(t);r!==0&&(e=r,n=uf(t,r))}if(n===1)throw n=Jo,ci(t,0),mr(t,e),Wt(t,Ke()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ti(t,zt,jn),Wt(t,Ke()),null}function Mp(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(ks=Ke()+500,Xu&&Hr())}}function wi(t){Ir!==null&&Ir.tag===0&&!(ve&6)&&fs();var e=ve;ve|=1;var n=cn.transition,r=Ce;try{if(cn.transition=null,Ce=1,t)return t()}finally{Ce=r,cn.transition=n,ve=e,!(ve&6)&&Hr()}}function Up(){Gt=is.current,Pe(is)}function ci(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bA(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(wp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nu();break;case 3:Ss(),Pe(Vt),Pe(_t),Ap();break;case 5:Tp(r);break;case 4:Ss();break;case 13:Pe(Me);break;case 19:Pe(Me);break;case 10:Cp(r.type._context);break;case 22:case 23:Up()}n=n.return}if(at=t,Ye=t=Pr(t.current,null),pt=Gt=e,et=0,Jo=null,Lp=tc=vi=0,zt=bo=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function H1(t,e){do{var n=Ye;try{if(Sp(),Dl.current=du,cu){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cu=!1}if(yi=0,ot=Je=Ue=null,Co=!1,Qo=0,$p.current=null,n===null||n.return===null){et=1,Jo=e,Ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var I=$y(o);if(I!==null){I.flags&=-257,Ly(I,o,a,s,e),I.mode&1&&Oy(s,d,e),e=I,l=d;var C=e.updateQueue;if(C===null){var S=new Set;S.add(l),e.updateQueue=S}else C.add(l);break e}else{if(!(e&1)){Oy(s,d,e),Bp();break e}l=Error(D(426))}}else if(Ne&&a.mode&1){var T=$y(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Ly(T,o,a,s,e),Ep(Cs(l,a));break e}}s=l=Cs(l,a),et!==4&&(et=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=T1(s,l,e);Ty(s,w);break e;case 1:a=l;var g=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Ar===null||!Ar.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=A1(s,a,e);Ty(s,b);break e}}s=s.return}while(s!==null)}K1(n)}catch(A){e=A,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function W1(){var t=hu.current;return hu.current=du,t===null?du:t}function Bp(){(et===0||et===3||et===2)&&(et=4),at===null||!(vi&268435455)&&!(tc&268435455)||mr(at,pt)}function mu(t,e){var n=ve;ve|=2;var r=W1();(at!==t||pt!==e)&&(jn=null,ci(t,e));do try{YA();break}catch(i){H1(t,i)}while(1);if(Sp(),ve=n,hu.current=r,Ye!==null)throw Error(D(261));return at=null,pt=0,et}function YA(){for(;Ye!==null;)q1(Ye)}function XA(){for(;Ye!==null&&!ST();)q1(Ye)}function q1(t){var e=Q1(t.alternate,t,Gt);t.memoizedProps=t.pendingProps,e===null?K1(t):Ye=e,$p.current=null}function K1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HA(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Ye=null;return}}else if(n=VA(n,e,Gt),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);et===0&&(et=5)}function ti(t,e,n){var r=Ce,i=cn.transition;try{cn.transition=null,Ce=1,JA(t,e,n,r)}finally{cn.transition=i,Ce=r}return null}function JA(t,e,n,r){do fs();while(Ir!==null);if(ve&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DT(t,s),t===at&&(Ye=at=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,Y1(Yl,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=cn.transition,cn.transition=null;var o=Ce;Ce=1;var a=ve;ve|=4,$p.current=null,qA(t,n),z1(n,t),vA(Bh),Jl=!!Uh,Bh=Uh=null,t.current=n,KA(n),CT(),ve=a,Ce=o,cn.transition=s}else t.current=n;if(hl&&(hl=!1,Ir=t,pu=i),s=t.pendingLanes,s===0&&(Ar=null),xT(n.stateNode),Wt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fu)throw fu=!1,t=af,af=null,t;return pu&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===lf?xo++:(xo=0,lf=t):xo=0,Hr(),null}function fs(){if(Ir!==null){var t=xw(pu),e=cn.transition,n=Ce;try{if(cn.transition=null,Ce=16>t?16:t,Ir===null)var r=!1;else{if(t=Ir,Ir=null,pu=0,ve&6)throw Error(D(331));var i=ve;for(ve|=4,V=t.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(V=d;V!==null;){var h=V;switch(h.tag){case 0:case 11:case 15:ko(8,h,s)}var p=h.child;if(p!==null)p.return=h,V=p;else for(;V!==null;){h=V;var m=h.sibling,I=h.return;if(M1(h),h===d){V=null;break}if(m!==null){m.return=I,V=m;break}V=I}}}var C=s.alternate;if(C!==null){var S=C.child;if(S!==null){C.child=null;do{var T=S.sibling;S.sibling=null,S=T}while(S!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ko(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,V=w;break e}V=s.return}}var g=t.current;for(V=g;V!==null;){o=V;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,V=E;else e:for(o=g;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ec(9,a)}}catch(A){je(a,a.return,A)}if(a===o){V=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,V=b;break e}V=a.return}}if(ve=i,Hr(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(qu,t)}catch{}r=!0}return r}finally{Ce=n,cn.transition=e}}return!1}function Qy(t,e,n){e=Cs(n,e),e=T1(t,e,1),t=Tr(t,e,1),e=Ft(),t!==null&&(wa(t,1,e),Wt(t,e))}function je(t,e,n){if(t.tag===3)Qy(t,t,n);else for(;e!==null;){if(e.tag===3){Qy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ar===null||!Ar.has(r))){t=Cs(n,t),t=A1(e,t,1),e=Tr(e,t,1),t=Ft(),e!==null&&(wa(e,1,t),Wt(e,t));break}}e=e.return}}function ZA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ft(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(pt&n)===n&&(et===4||et===3&&(pt&130023424)===pt&&500>Ke()-Fp?ci(t,0):Lp|=n),Wt(t,e)}function G1(t,e){e===0&&(t.mode&1?(e=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):e=1);var n=Ft();t=Zn(t,e),t!==null&&(wa(t,e,n),Wt(t,n))}function e_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G1(t,n)}function t_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),G1(t,n)}var Q1;Q1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,jA(t,e,n);jt=!!(t.flags&131072)}else jt=!1,Ne&&e.flags&1048576&&Jw(e,su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ol(t,e),t=e.pendingProps;var i=ws(e,_t.current);hs(e,n),i=Pp(null,e,r,t,i,n);var s=Rp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(s=!0,ru(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bp(e),i.updater=Ju,e.stateNode=i,i._reactInternals=e,Qh(e,r,t,n),e=Jh(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&vp(e),Ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ol(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=r_(r),t=yn(r,t),i){case 0:e=Xh(null,e,r,t,n);break e;case 1:e=Uy(null,e,r,t,n);break e;case 11:e=Fy(null,e,r,t,n);break e;case 14:e=My(null,e,r,yn(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Xh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Uy(t,e,r,i,n);case 3:e:{if(D1(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,n1(t,e),lu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Cs(Error(D(423)),e),e=By(t,e,r,n,i);break e}else if(r!==i){i=Cs(Error(D(424)),e),e=By(t,e,r,n,i);break e}else for(Qt=xr(e.stateNode.containerInfo.firstChild),Yt=e,Ne=!0,wn=null,n=o1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),r===i){e=er(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return a1(e),t===null&&qh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zh(r,i)?o=null:s!==null&&zh(r,s)&&(e.flags|=32),R1(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&qh(e),null;case 13:return N1(t,e,n);case 4:return xp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Is(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Fy(t,e,r,i,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(ou,r._currentValue),r._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===i.children&&!Vt.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Yn(-1,n&-n),l.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?l.next=l:(l.next=h.next,h.next=l),d.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hs(e,n),i=fn(i),r=r(i),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,i=yn(r,e.pendingProps),i=yn(r.type,i),My(t,e,r,i,n);case 15:return _1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Ol(t,e),e.tag=1,Ht(r)?(t=!0,ru(e)):t=!1,hs(e,n),i1(e,r,i),Qh(e,r,i,n),Jh(null,e,r,!0,t,n);case 19:return O1(t,e,n);case 22:return P1(t,e,n)}throw Error(D(156,e.tag))};function Y1(t,e){return Sw(t,e)}function n_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,r){return new n_(t,e,n,r)}function zp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function r_(t){if(typeof t=="function")return zp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===op)return 11;if(t===ap)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gi:return di(n.children,i,s,e);case sp:o=8,i|=8;break;case wh:return t=un(12,n,e,i|2),t.elementType=wh,t.lanes=s,t;case Eh:return t=un(13,n,e,i),t.elementType=Eh,t.lanes=s,t;case Ih:return t=un(19,n,e,i),t.elementType=Ih,t.lanes=s,t;case sw:return nc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rw:o=10;break e;case iw:o=9;break e;case op:o=11;break e;case ap:o=14;break e;case hr:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function di(t,e,n,r){return t=un(7,t,r,e),t.lanes=n,t}function nc(t,e,n,r){return t=un(22,t,r,e),t.elementType=sw,t.lanes=n,t.stateNode={isHidden:!1},t}function Ud(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function Bd(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function i_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ed(0),this.expirationTimes=Ed(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ed(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jp(t,e,n,r,i,s,o,a,l){return t=new i_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bp(s),t}function s_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function X1(t){if(!t)return Mr;t=t._reactInternals;e:{if(Pi(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(Ht(n))return Yw(t,n,e)}return e}function J1(t,e,n,r,i,s,o,a,l){return t=jp(n,r,!0,t,i,s,o,a,l),t.context=X1(null),n=t.current,r=Ft(),i=_r(n),s=Yn(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,wa(t,i,r),Wt(t,r),t}function rc(t,e,n,r){var i=e.current,s=Ft(),o=_r(i);return n=X1(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(Sn(t,i,o,s),Rl(t,i,o)),o}function gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vp(t,e){Yy(t,e),(t=t.alternate)&&Yy(t,e)}function o_(){return null}var Z1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hp(t){this._internalRoot=t}ic.prototype.render=Hp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));rc(t,e,null,null)};ic.prototype.unmount=Hp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){rc(null,t,null,null)}),e[Jn]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=_w();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&Rw(t)}};function Wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xy(){}function a_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=gu(o);s.call(d)}}var o=J1(e,r,t,0,null,!1,!1,"",Xy);return t._reactRootContainer=o,t[Jn]=o.current,Ho(t.nodeType===8?t.parentNode:t),wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=gu(l);a.call(d)}}var l=jp(t,0,!1,null,null,!1,!1,"",Xy);return t._reactRootContainer=l,t[Jn]=l.current,Ho(t.nodeType===8?t.parentNode:t),wi(function(){rc(e,l,n,r)}),l}function oc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=gu(o);a.call(l)}}rc(e,o,t,i)}else o=a_(n,e,t,i,r);return gu(o)}Tw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=co(e.pendingLanes);n!==0&&(cp(e,n|1),Wt(e,Ke()),!(ve&6)&&(ks=Ke()+500,Hr()))}break;case 13:wi(function(){var r=Zn(t,1);if(r!==null){var i=Ft();Sn(r,t,1,i)}}),Vp(t,1)}};dp=function(t){if(t.tag===13){var e=Zn(t,134217728);if(e!==null){var n=Ft();Sn(e,t,134217728,n)}Vp(t,134217728)}};Aw=function(t){if(t.tag===13){var e=_r(t),n=Zn(t,e);if(n!==null){var r=Ft();Sn(n,t,e,r)}Vp(t,e)}};_w=function(){return Ce};Pw=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};Rh=function(t,e,n){switch(e){case"input":if(kh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yu(r);if(!i)throw Error(D(90));aw(r),kh(r,i)}}}break;case"textarea":uw(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};gw=Mp;yw=wi;var l_={usingClientEntryPoint:!1,Events:[Ia,Ji,Yu,pw,mw,Mp]},oo={findFiberByHostInstance:ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},u_={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ew(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||o_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{qu=fl.inject(u_),On=fl}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l_;en.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wp(e))throw Error(D(200));return s_(t,e,null,n)};en.createRoot=function(t,e){if(!Wp(t))throw Error(D(299));var n=!1,r="",i=Z1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jp(t,1,!1,null,null,n,!1,r,i),t[Jn]=e.current,Ho(t.nodeType===8?t.parentNode:t),new Hp(e)};en.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=Ew(e),t=t===null?null:t.stateNode,t};en.flushSync=function(t){return wi(t)};en.hydrate=function(t,e,n){if(!sc(e))throw Error(D(200));return oc(null,t,e,!0,n)};en.hydrateRoot=function(t,e,n){if(!Wp(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Z1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=J1(e,null,t,1,n??null,i,!1,s,o),t[Jn]=e.current,Ho(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ic(e)};en.render=function(t,e,n){if(!sc(e))throw Error(D(200));return oc(null,t,e,!1,n)};en.unmountComponentAtNode=function(t){if(!sc(t))throw Error(D(40));return t._reactRootContainer?(wi(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1};en.unstable_batchedUpdates=Mp;en.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sc(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return oc(t,e,n,!1,r)};en.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=en})(oT);var Jy=gh;mh.createRoot=Jy.createRoot,mh.hydrateRoot=Jy.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zo.apply(this,arguments)}var Sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Sr||(Sr={}));const Zy="popstate";function c_(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return df("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:yu(i)}return h_(e,n,null,t)}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function d_(){return Math.random().toString(36).substr(2,8)}function e0(t,e){return{usr:t.state,key:t.key,idx:e}}function df(t,e,n,r){return n===void 0&&(n=null),Zo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Us(e):e,{state:n,key:e&&e.key||r||d_()})}function yu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Us(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function h_(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Sr.Pop,l=null,d=h();d==null&&(d=0,o.replaceState(Zo({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=Sr.Pop;let T=h(),w=T==null?null:T-d;d=T,l&&l({action:a,location:S.location,delta:w})}function m(T,w){a=Sr.Push;let g=df(S.location,T,w);n&&n(g,T),d=h()+1;let E=e0(g,d),b=S.createHref(g);try{o.pushState(E,"",b)}catch{i.location.assign(b)}s&&l&&l({action:a,location:S.location,delta:1})}function I(T,w){a=Sr.Replace;let g=df(S.location,T,w);n&&n(g,T),d=h();let E=e0(g,d),b=S.createHref(g);o.replaceState(E,"",b),s&&l&&l({action:a,location:S.location,delta:0})}function C(T){let w=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof T=="string"?T:yu(T);return Xe(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let S={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Zy,p),l=T,()=>{i.removeEventListener(Zy,p),l=null}},createHref(T){return e(i,T)},createURL:C,encodeLocation(T){let w=C(T);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:I,go(T){return o.go(T)}};return S}var t0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(t0||(t0={}));function f_(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Us(e):e,i=Kp(r.pathname||"/",n);if(i==null)return null;let s=eE(t);p_(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=C_(s[a],x_(i));return o}function eE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=Rr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),eE(s.children,e,h,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:I_(d,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of tE(s.path))i(s,o,l)}),e}function tE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=tE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function p_(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:S_(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const m_=/^:\w+$/,g_=3,y_=2,v_=1,w_=10,E_=-2,n0=t=>t==="*";function I_(t,e){let n=t.split("/"),r=n.length;return n.some(n0)&&(r+=E_),e&&(r+=y_),n.filter(i=>!n0(i)).reduce((i,s)=>i+(m_.test(s)?g_:s===""?v_:w_),r)}function S_(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function C_(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,d=i==="/"?e:e.slice(i.length)||"/",h=k_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},d);if(!h)return null;Object.assign(r,h.params);let p=a.route;s.push({params:r,pathname:Rr([i,h.pathname]),pathnameBase:P_(Rr([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=Rr([i,h.pathnameBase]))}return s}function k_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=b_(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,h,p)=>{if(h==="*"){let m=a[p]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return d[h]=T_(a[p]||"",h),d},{}),pathname:s,pathnameBase:o,pattern:t}}function b_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function x_(t){try{return decodeURI(t)}catch(e){return qp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function T_(t,e){try{return decodeURIComponent(t)}catch(n){return qp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Kp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function A_(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Us(t):t;return{pathname:n?n.startsWith("/")?n:__(n,e):e,search:R_(r),hash:D_(i)}}function __(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function rE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Us(t):(i=Zo({},t),Xe(!i.pathname||!i.pathname.includes("?"),zd("?","pathname","search",i)),Xe(!i.pathname||!i.pathname.includes("#"),zd("#","pathname","hash",i)),Xe(!i.search||!i.search.includes("#"),zd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let p=e.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?e[p]:"/"}let l=A_(i,a),d=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||h)&&(l.pathname+="/"),l}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),P_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),R_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,D_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function N_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const $_=typeof Object.is=="function"?Object.is:O_,{useState:L_,useEffect:F_,useLayoutEffect:M_,useDebugValue:U_}=ph;function B_(t,e,n){const r=e(),[{inst:i},s]=L_({inst:{value:r,getSnapshot:e}});return M_(()=>{i.value=r,i.getSnapshot=e,jd(i)&&s({inst:i})},[t,r,e]),F_(()=>(jd(i)&&s({inst:i}),t(()=>{jd(i)&&s({inst:i})})),[t]),U_(r),r}function jd(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!$_(n,r)}catch{return!0}}function z_(t,e,n){return e()}const j_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",V_=!j_,H_=V_?z_:B_;"useSyncExternalStore"in ph&&(t=>t.useSyncExternalStore)(ph);const iE=_.createContext(null),Gp=_.createContext(null),Ca=_.createContext(null),ac=_.createContext(null),Wr=_.createContext({outlet:null,matches:[]}),sE=_.createContext(null);function hf(){return hf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hf.apply(this,arguments)}function W_(t,e){let{relative:n}=e===void 0?{}:e;Bs()||Xe(!1);let{basename:r,navigator:i}=_.useContext(Ca),{hash:s,pathname:o,search:a}=oE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Rr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Bs(){return _.useContext(ac)!=null}function lc(){return Bs()||Xe(!1),_.useContext(ac).location}function zs(){Bs()||Xe(!1);let{basename:t,navigator:e}=_.useContext(Ca),{matches:n}=_.useContext(Wr),{pathname:r}=lc(),i=JSON.stringify(nE(n).map(a=>a.pathnameBase)),s=_.useRef(!1);return _.useEffect(()=>{s.current=!0}),_.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let d=rE(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(d.pathname=d.pathname==="/"?t:Rr([t,d.pathname])),(l.replace?e.replace:e.push)(d,l.state,l)},[t,e,i,r])}const q_=_.createContext(null);function K_(t){let e=_.useContext(Wr).outlet;return e&&_.createElement(q_.Provider,{value:t},e)}function G_(){let{matches:t}=_.useContext(Wr),e=t[t.length-1];return e?e.params:{}}function oE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=_.useContext(Wr),{pathname:i}=lc(),s=JSON.stringify(nE(r).map(o=>o.pathnameBase));return _.useMemo(()=>rE(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Q_(t,e){Bs()||Xe(!1);let{navigator:n}=_.useContext(Ca),r=_.useContext(Gp),{matches:i}=_.useContext(Wr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=lc(),d;if(e){var h;let S=typeof e=="string"?Us(e):e;a==="/"||(h=S.pathname)!=null&&h.startsWith(a)||Xe(!1),d=S}else d=l;let p=d.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",I=f_(t,{pathname:m}),C=Z_(I&&I.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:Rr([a,n.encodeLocation?n.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:Rr([a,n.encodeLocation?n.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,r||void 0);return e&&C?_.createElement(ac.Provider,{value:{location:hf({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Sr.Pop}},C):C}function Y_(){let t=r2(),e=N_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),n?_.createElement("pre",{style:i},n):null,s)}class X_ extends _.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?_.createElement(Wr.Provider,{value:this.props.routeContext},_.createElement(sE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function J_(t){let{routeContext:e,match:n,children:r}=t,i=_.useContext(iE);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Wr.Provider,{value:e},r)}function Z_(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Xe(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,d=null;n&&(o.route.ErrorBoundary?d=_.createElement(o.route.ErrorBoundary,null):o.route.errorElement?d=o.route.errorElement:d=_.createElement(Y_,null));let h=e.concat(r.slice(0,a+1)),p=()=>{let m=s;return l?m=d:o.route.Component?m=_.createElement(o.route.Component,null):o.route.element&&(m=o.route.element),_.createElement(J_,{match:o,routeContext:{outlet:s,matches:h},children:m})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?_.createElement(X_,{location:n.location,component:d,error:l,children:p(),routeContext:{outlet:null,matches:h}}):p()},null)}var r0;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(r0||(r0={}));var vu;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(vu||(vu={}));function e2(t){let e=_.useContext(Gp);return e||Xe(!1),e}function t2(t){let e=_.useContext(Wr);return e||Xe(!1),e}function n2(t){let e=t2(),n=e.matches[e.matches.length-1];return n.route.id||Xe(!1),n.route.id}function r2(){var t;let e=_.useContext(sE),n=e2(vu.UseRouteError),r=n2(vu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function i2(t){let{to:e,replace:n,state:r,relative:i}=t;Bs()||Xe(!1);let s=_.useContext(Gp),o=zs();return _.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function s2(t){return K_(t.context)}function Pn(t){Xe(!1)}function o2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Sr.Pop,navigator:s,static:o=!1}=t;Bs()&&Xe(!1);let a=e.replace(/^\/*/,"/"),l=_.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Us(r));let{pathname:d="/",search:h="",hash:p="",state:m=null,key:I="default"}=r,C=_.useMemo(()=>{let S=Kp(d,a);return S==null?null:{location:{pathname:S,search:h,hash:p,state:m,key:I},navigationType:i}},[a,d,h,p,m,I,i]);return C==null?null:_.createElement(Ca.Provider,{value:l},_.createElement(ac.Provider,{children:n,value:C}))}function a2(t){let{children:e,location:n}=t,r=_.useContext(iE),i=r&&!e?r.router.routes:ff(e);return Q_(i,n)}var i0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(i0||(i0={}));new Promise(()=>{});function ff(t,e){e===void 0&&(e=[]);let n=[];return _.Children.forEach(t,(r,i)=>{if(!_.isValidElement(r))return;let s=[...e,i];if(r.type===_.Fragment){n.push.apply(n,ff(r.props.children,s));return}r.type!==Pn&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ff(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pf(){return pf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pf.apply(this,arguments)}function l2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function u2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function c2(t,e){return t.button===0&&(!e||e==="_self")&&!u2(t)}const d2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function h2(t){let{basename:e,children:n,window:r}=t,i=_.useRef();i.current==null&&(i.current=c_({window:r,v5Compat:!0}));let s=i.current,[o,a]=_.useState({action:s.action,location:s.location});return _.useLayoutEffect(()=>s.listen(a),[s]),_.createElement(o2,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const f2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$t=_.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:d,preventScrollReset:h}=e,p=l2(e,d2),{basename:m}=_.useContext(Ca),I,C=!1;if(typeof d=="string"&&p2.test(d)&&(I=d,f2)){let g=new URL(window.location.href),E=d.startsWith("//")?new URL(g.protocol+d):new URL(d),b=Kp(E.pathname,m);E.origin===g.origin&&b!=null?d=b+E.search+E.hash:C=!0}let S=W_(d,{relative:i}),T=m2(d,{replace:o,state:a,target:l,preventScrollReset:h,relative:i});function w(g){r&&r(g),g.defaultPrevented||T(g)}return _.createElement("a",pf({},p,{href:I||S,onClick:C||s?r:w,ref:n,target:l}))});var s0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(s0||(s0={}));var o0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(o0||(o0={}));function m2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=zs(),l=lc(),d=oE(t,{relative:o});return _.useCallback(h=>{if(c2(h,n)){h.preventDefault();let p=r!==void 0?r:yu(l)===yu(d);a(t,{replace:p,state:i,preventScrollReset:s,relative:o})}},[l,a,d,r,i,n,t,s,o])}var ea={},g2={get exports(){return ea},set exports(t){ea=t}},ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ut=typeof Symbol=="function"&&Symbol.for,Qp=ut?Symbol.for("react.element"):60103,Yp=ut?Symbol.for("react.portal"):60106,uc=ut?Symbol.for("react.fragment"):60107,cc=ut?Symbol.for("react.strict_mode"):60108,dc=ut?Symbol.for("react.profiler"):60114,hc=ut?Symbol.for("react.provider"):60109,fc=ut?Symbol.for("react.context"):60110,Xp=ut?Symbol.for("react.async_mode"):60111,pc=ut?Symbol.for("react.concurrent_mode"):60111,mc=ut?Symbol.for("react.forward_ref"):60112,gc=ut?Symbol.for("react.suspense"):60113,y2=ut?Symbol.for("react.suspense_list"):60120,yc=ut?Symbol.for("react.memo"):60115,vc=ut?Symbol.for("react.lazy"):60116,v2=ut?Symbol.for("react.block"):60121,w2=ut?Symbol.for("react.fundamental"):60117,E2=ut?Symbol.for("react.responder"):60118,I2=ut?Symbol.for("react.scope"):60119;function nn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Qp:switch(t=t.type,t){case Xp:case pc:case uc:case dc:case cc:case gc:return t;default:switch(t=t&&t.$$typeof,t){case fc:case mc:case vc:case yc:case hc:return t;default:return e}}case Yp:return e}}}function aE(t){return nn(t)===pc}ke.AsyncMode=Xp;ke.ConcurrentMode=pc;ke.ContextConsumer=fc;ke.ContextProvider=hc;ke.Element=Qp;ke.ForwardRef=mc;ke.Fragment=uc;ke.Lazy=vc;ke.Memo=yc;ke.Portal=Yp;ke.Profiler=dc;ke.StrictMode=cc;ke.Suspense=gc;ke.isAsyncMode=function(t){return aE(t)||nn(t)===Xp};ke.isConcurrentMode=aE;ke.isContextConsumer=function(t){return nn(t)===fc};ke.isContextProvider=function(t){return nn(t)===hc};ke.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qp};ke.isForwardRef=function(t){return nn(t)===mc};ke.isFragment=function(t){return nn(t)===uc};ke.isLazy=function(t){return nn(t)===vc};ke.isMemo=function(t){return nn(t)===yc};ke.isPortal=function(t){return nn(t)===Yp};ke.isProfiler=function(t){return nn(t)===dc};ke.isStrictMode=function(t){return nn(t)===cc};ke.isSuspense=function(t){return nn(t)===gc};ke.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===uc||t===pc||t===dc||t===cc||t===gc||t===y2||typeof t=="object"&&t!==null&&(t.$$typeof===vc||t.$$typeof===yc||t.$$typeof===hc||t.$$typeof===fc||t.$$typeof===mc||t.$$typeof===w2||t.$$typeof===E2||t.$$typeof===I2||t.$$typeof===v2)};ke.typeOf=nn;(function(t){t.exports=ke})(g2);function S2(t){function e(F,z,j,ee,k){for(var ce=0,L=0,he=0,le=0,Ee,K,We=0,dt=0,me,J=me=Ee=0,ae=0,be=0,rn=0,ge=0,qe=j.length,lr=qe-1,wt,q="",Fe="",Fi="",Mi="",sn;ae<qe;){if(K=j.charCodeAt(ae),ae===lr&&L+le+he+ce!==0&&(L!==0&&(K=L===47?10:47),le=he=ce=0,qe++,lr++),L+le+he+ce===0){if(ae===lr&&(0<be&&(q=q.replace(m,"")),0<q.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:q+=j.charAt(ae)}K=59}switch(K){case 123:for(q=q.trim(),Ee=q.charCodeAt(0),me=1,ge=++ae;ae<qe;){switch(K=j.charCodeAt(ae)){case 123:me++;break;case 125:me--;break;case 47:switch(K=j.charCodeAt(ae+1)){case 42:case 47:e:{for(J=ae+1;J<lr;++J)switch(j.charCodeAt(J)){case 47:if(K===42&&j.charCodeAt(J-1)===42&&ae+2!==J){ae=J+1;break e}break;case 10:if(K===47){ae=J+1;break e}}ae=J}}break;case 91:K++;case 40:K++;case 34:case 39:for(;ae++<lr&&j.charCodeAt(ae)!==K;);}if(me===0)break;ae++}switch(me=j.substring(ge,ae),Ee===0&&(Ee=(q=q.replace(p,"").trim()).charCodeAt(0)),Ee){case 64:switch(0<be&&(q=q.replace(m,"")),K=q.charCodeAt(1),K){case 100:case 109:case 115:case 45:be=z;break;default:be=it}if(me=e(z,be,me,K,k+1),ge=me.length,0<$&&(be=n(it,q,rn),sn=a(3,me,be,z,ze,Le,ge,K,k,ee),q=be.join(""),sn!==void 0&&(ge=(me=sn.trim()).length)===0&&(K=0,me="")),0<ge)switch(K){case 115:q=q.replace(P,o);case 100:case 109:case 45:me=q+"{"+me+"}";break;case 107:q=q.replace(g,"$1 $2"),me=q+"{"+me+"}",me=De===1||De===2&&s("@"+me,3)?"@-webkit-"+me+"@"+me:"@"+me;break;default:me=q+me,ee===112&&(me=(Fe+=me,""))}else me="";break;default:me=e(z,n(z,q,rn),me,ee,k+1)}Fi+=me,me=rn=be=J=Ee=0,q="",K=j.charCodeAt(++ae);break;case 125:case 59:if(q=(0<be?q.replace(m,""):q).trim(),1<(ge=q.length))switch(J===0&&(Ee=q.charCodeAt(0),Ee===45||96<Ee&&123>Ee)&&(ge=(q=q.replace(" ",":")).length),0<$&&(sn=a(1,q,z,F,ze,Le,Fe.length,ee,k,ee))!==void 0&&(ge=(q=sn.trim()).length)===0&&(q="\0\0"),Ee=q.charCodeAt(0),K=q.charCodeAt(1),Ee){case 0:break;case 64:if(K===105||K===99){Mi+=q+j.charAt(ae);break}default:q.charCodeAt(ge-1)!==58&&(Fe+=i(q,Ee,K,q.charCodeAt(2)))}rn=be=J=Ee=0,q="",K=j.charCodeAt(++ae)}}switch(K){case 13:case 10:L===47?L=0:1+Ee===0&&ee!==107&&0<q.length&&(be=1,q+="\0"),0<$*te&&a(0,q,z,F,ze,Le,Fe.length,ee,k,ee),Le=1,ze++;break;case 59:case 125:if(L+le+he+ce===0){Le++;break}default:switch(Le++,wt=j.charAt(ae),K){case 9:case 32:if(le+ce+L===0)switch(We){case 44:case 58:case 9:case 32:wt="";break;default:K!==32&&(wt=" ")}break;case 0:wt="\\0";break;case 12:wt="\\f";break;case 11:wt="\\v";break;case 38:le+L+ce===0&&(be=rn=1,wt="\f"+wt);break;case 108:if(le+L+ce+Ae===0&&0<J)switch(ae-J){case 2:We===112&&j.charCodeAt(ae-3)===58&&(Ae=We);case 8:dt===111&&(Ae=dt)}break;case 58:le+L+ce===0&&(J=ae);break;case 44:L+he+le+ce===0&&(be=1,wt+="\r");break;case 34:case 39:L===0&&(le=le===K?0:le===0?K:le);break;case 91:le+L+he===0&&ce++;break;case 93:le+L+he===0&&ce--;break;case 41:le+L+ce===0&&he--;break;case 40:if(le+L+ce===0){if(Ee===0)switch(2*We+3*dt){case 533:break;default:Ee=1}he++}break;case 64:L+he+le+ce+J+me===0&&(me=1);break;case 42:case 47:if(!(0<le+ce+he))switch(L){case 0:switch(2*K+3*j.charCodeAt(ae+1)){case 235:L=47;break;case 220:ge=ae,L=42}break;case 42:K===47&&We===42&&ge+2!==ae&&(j.charCodeAt(ge+2)===33&&(Fe+=j.substring(ge,ae+1)),wt="",L=0)}}L===0&&(q+=wt)}dt=We,We=K,ae++}if(ge=Fe.length,0<ge){if(be=z,0<$&&(sn=a(2,Fe,be,F,ze,Le,ge,ee,k,ee),sn!==void 0&&(Fe=sn).length===0))return Mi+Fe+Fi;if(Fe=be.join(",")+"{"+Fe+"}",De*Ae!==0){switch(De!==2||s(Fe,2)||(Ae=0),Ae){case 111:Fe=Fe.replace(b,":-moz-$1")+Fe;break;case 112:Fe=Fe.replace(E,"::-webkit-input-$1")+Fe.replace(E,"::-moz-$1")+Fe.replace(E,":-ms-input-$1")+Fe}Ae=0}}return Mi+Fe+Fi}function n(F,z,j){var ee=z.trim().split(T);z=ee;var k=ee.length,ce=F.length;switch(ce){case 0:case 1:var L=0;for(F=ce===0?"":F[0]+" ";L<k;++L)z[L]=r(F,z[L],j).trim();break;default:var he=L=0;for(z=[];L<k;++L)for(var le=0;le<ce;++le)z[he++]=r(F[le]+" ",ee[L],j).trim()}return z}function r(F,z,j){var ee=z.charCodeAt(0);switch(33>ee&&(ee=(z=z.trim()).charCodeAt(0)),ee){case 38:return z.replace(w,"$1"+F.trim());case 58:return F.trim()+z.replace(w,"$1"+F.trim());default:if(0<1*j&&0<z.indexOf("\f"))return z.replace(w,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+z}function i(F,z,j,ee){var k=F+";",ce=2*z+3*j+4*ee;if(ce===944){F=k.indexOf(":",9)+1;var L=k.substring(F,k.length-1).trim();return L=k.substring(0,F).trim()+L+";",De===1||De===2&&s(L,1)?"-webkit-"+L+L:L}if(De===0||De===2&&!s(k,1))return k;switch(ce){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(He,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return L=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+k+"-ms-flex-pack"+L+k;case 1005:return C.test(k)?k.replace(I,":-webkit-")+k.replace(I,":-moz-")+k:k;case 1e3:switch(L=k.substring(13).trim(),z=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(z)){case 226:L=k.replace(A,"tb");break;case 232:L=k.replace(A,"tb-rl");break;case 220:L=k.replace(A,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+L+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(z=(k=F).length-10,L=(k.charCodeAt(z)===33?k.substring(0,z):k).substring(F.indexOf(":",7)+1).trim(),ce=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:k=k.replace(L,"-webkit-"+L)+";"+k;break;case 207:case 102:k=k.replace(L,"-webkit-"+(102<ce?"inline-":"")+"box")+";"+k.replace(L,"-webkit-"+L)+";"+k.replace(L,"-ms-"+L+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return L=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+L+"-ms-flex-"+L+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(B,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(B,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(X.test(F)===!0)return(L=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?i(F.replace("stretch","fill-available"),z,j,ee).replace(":fill-available",":stretch"):k.replace(L,"-webkit-"+L)+k.replace(L,"-moz-"+L.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,j+ee===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(S,"$1-webkit-$2")+k}return k}function s(F,z){var j=F.indexOf(z===1?":":"{"),ee=F.substring(0,z!==3?j:10);return j=F.substring(j+1,F.length-1),Q(z!==2?ee:ee.replace(ue,"$1"),j,z)}function o(F,z){var j=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return j!==z+";"?j.replace(U," or ($1)").substring(4):"("+z+")"}function a(F,z,j,ee,k,ce,L,he,le,Ee){for(var K=0,We=z,dt;K<$;++K)switch(dt=ct[K].call(h,F,We,j,ee,k,ce,L,he,le,Ee)){case void 0:case!1:case!0:case null:break;default:We=dt}if(We!==z)return We}function l(F){switch(F){case void 0:case null:$=ct.length=0;break;default:if(typeof F=="function")ct[$++]=F;else if(typeof F=="object")for(var z=0,j=F.length;z<j;++z)l(F[z]);else te=!!F|0}return l}function d(F){return F=F.prefix,F!==void 0&&(Q=null,F?typeof F!="function"?De=1:(De=2,Q=F):De=0),d}function h(F,z){var j=F;if(33>j.charCodeAt(0)&&(j=j.trim()),we=j,j=[we],0<$){var ee=a(-1,z,j,j,ze,Le,0,0,0,0);ee!==void 0&&typeof ee=="string"&&(z=ee)}var k=e(it,j,z,0,0);return 0<$&&(ee=a(-2,k,j,j,ze,Le,k.length,0,0,0),ee!==void 0&&(k=ee)),we="",Ae=0,Le=ze=1,k}var p=/^\0+/g,m=/[\0\r\f]/g,I=/: */g,C=/zoo|gra/,S=/([,: ])(transform)/g,T=/,\r+?/g,w=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,E=/::(place)/g,b=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,U=/([\s\S]*?);/g,B=/-self|flex-/g,ue=/[^]*?(:[rp][el]a[\w-]+)[^]*/,X=/stretch|:\s*\w+\-(?:conte|avail)/,He=/([^-])(image-set\()/,Le=1,ze=1,Ae=0,De=1,it=[],ct=[],$=0,Q=null,te=0,we="";return h.use=l,h.set=d,t!==void 0&&d(t),h}var C2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function k2(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var b2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,a0=k2(function(t){return b2.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Jp=ea,x2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},T2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},A2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zp={};Zp[Jp.ForwardRef]=A2;Zp[Jp.Memo]=lE;function l0(t){return Jp.isMemo(t)?lE:Zp[t.$$typeof]||x2}var _2=Object.defineProperty,P2=Object.getOwnPropertyNames,u0=Object.getOwnPropertySymbols,R2=Object.getOwnPropertyDescriptor,D2=Object.getPrototypeOf,c0=Object.prototype;function uE(t,e,n){if(typeof e!="string"){if(c0){var r=D2(e);r&&r!==c0&&uE(t,r,n)}var i=P2(e);u0&&(i=i.concat(u0(e)));for(var s=l0(t),o=l0(e),a=0;a<i.length;++a){var l=i[a];if(!T2[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var d=R2(e,l);try{_2(t,l,d)}catch{}}}}return t}var N2=uE;function qn(){return(qn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var d0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},mf=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!ea.typeOf(t)},wu=Object.freeze([]),Dr=Object.freeze({});function ta(t){return typeof t=="function"}function h0(t){return t.displayName||t.name||"Component"}function em(t){return t&&typeof t.styledComponentId=="string"}var bs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",tm=typeof window<"u"&&"HTMLElement"in window,O2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function ka(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var $2=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&ka(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),d=0,h=r.length;d<h;d++)this.tag.insertRule(l,r[d])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Ml=new Map,Eu=new Map,To=1,pl=function(t){if(Ml.has(t))return Ml.get(t);for(;Eu.has(To);)To++;var e=To++;return Ml.set(t,e),Eu.set(e,t),e},L2=function(t){return Eu.get(t)},F2=function(t,e){e>=To&&(To=e+1),Ml.set(t,e),Eu.set(e,t)},M2="style["+bs+'][data-styled-version="5.3.9"]',U2=new RegExp("^"+bs+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),B2=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},z2=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(U2);if(a){var l=0|parseInt(a[1],10),d=a[2];l!==0&&(F2(d,l),B2(t,d,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},j2=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},cE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,d=l.length;d>=0;d--){var h=l[d];if(h&&h.nodeType===1&&h.hasAttribute(bs))return h}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(bs,"active"),r.setAttribute("data-styled-version","5.3.9");var o=j2();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},V2=function(){function t(n){var r=this.element=cE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}ka(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),H2=function(){function t(n){var r=this.element=cE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),W2=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),f0=tm,q2={isServer:!tm,useCSSOMInjection:!O2},dE=function(){function t(n,r,i){n===void 0&&(n=Dr),r===void 0&&(r={}),this.options=qn({},q2,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&tm&&f0&&(f0=!1,function(s){for(var o=document.querySelectorAll(M2),a=0,l=o.length;a<l;a++){var d=o[a];d&&d.getAttribute(bs)!=="active"&&(z2(s,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}t.registerId=function(n){return pl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(qn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new W2(o):s?new V2(o):new H2(o),new $2(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(pl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(pl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(pl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=L2(o);if(a!==void 0){var l=n.names.get(a),d=r.getGroup(o);if(l&&d&&l.size){var h=bs+".g"+o+'[id="'+a+'"]',p="";l!==void 0&&l.forEach(function(m){m.length>0&&(p+=m+",")}),s+=""+d+h+'{content:"'+p+`"}/*!sc*/
`}}}return s}(this)},t}(),K2=/(a)(d)/gi,p0=function(t){return String.fromCharCode(t+(t>25?39:97))};function gf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=p0(e%52)+n;return(p0(e%52)+n).replace(K2,"$1-$2")}var ss=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},hE=function(t){return ss(5381,t)};function G2(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ta(n)&&!em(n))return!1}return!0}var Q2=hE("5.3.9"),Y2=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&G2(e),this.componentId=n,this.baseHash=ss(Q2,n),this.baseStyle=r,dE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=xs(this.rules,e,n,r).join(""),a=gf(ss(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var d=this.rules.length,h=ss(this.baseHash,r.hash),p="",m=0;m<d;m++){var I=this.rules[m];if(typeof I=="string")p+=I;else if(I){var C=xs(I,e,n,r),S=Array.isArray(C)?C.join(""):C;h=ss(h,S+m),p+=S}}if(p){var T=gf(h>>>0);if(!n.hasNameForId(i,T)){var w=r(p,"."+T,void 0,i);n.insertRules(i,T,w)}s.push(T)}}return s.join(" ")},t}(),X2=/^\s*\/\/.*$/gm,J2=[":","[",".","#"];function Z2(t){var e,n,r,i,s=t===void 0?Dr:t,o=s.options,a=o===void 0?Dr:o,l=s.plugins,d=l===void 0?wu:l,h=new S2(a),p=[],m=function(S){function T(w){if(w)try{S(w+"}")}catch{}}return function(w,g,E,b,A,P,U,B,ue,X){switch(w){case 1:if(ue===0&&g.charCodeAt(0)===64)return S(g+";"),"";break;case 2:if(B===0)return g+"/*|*/";break;case 3:switch(B){case 102:case 112:return S(E[0]+g),"";default:return g+(X===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(T)}}}(function(S){p.push(S)}),I=function(S,T,w){return T===0&&J2.indexOf(w[n.length])!==-1||w.match(i)?S:"."+e};function C(S,T,w,g){g===void 0&&(g="&");var E=S.replace(X2,""),b=T&&w?w+" "+T+" { "+E+" }":E;return e=g,n=T,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(w||!T?"":T,b)}return h.use([].concat(d,[function(S,T,w){S===2&&w.length&&w[0].lastIndexOf(n)>0&&(w[0]=w[0].replace(r,I))},m,function(S){if(S===-2){var T=p;return p=[],T}}])),C.hash=d.length?d.reduce(function(S,T){return T.name||ka(15),ss(S,T.name)},5381).toString():"",C}var fE=Ai.createContext();fE.Consumer;var pE=Ai.createContext(),eP=(pE.Consumer,new dE),yf=Z2();function tP(){return _.useContext(fE)||eP}function nP(){return _.useContext(pE)||yf}var mE=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=yf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return ka(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=yf),this.name+e.hash},t}(),rP=/([A-Z])/,iP=/([A-Z])/g,sP=/^ms-/,oP=function(t){return"-"+t.toLowerCase()};function m0(t){return rP.test(t)?t.replace(iP,oP).replace(sP,"-ms-"):t}var g0=function(t){return t==null||t===!1||t===""};function xs(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=xs(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(g0(t))return"";if(em(t))return"."+t.styledComponentId;if(ta(t)){if(typeof(d=t)!="function"||d.prototype&&d.prototype.isReactComponent||!e)return t;var l=t(e);return xs(l,e,n,r)}var d;return t instanceof mE?n?(t.inject(n,r),t.getName(r)):t:mf(t)?function h(p,m){var I,C,S=[];for(var T in p)p.hasOwnProperty(T)&&!g0(p[T])&&(Array.isArray(p[T])&&p[T].isCss||ta(p[T])?S.push(m0(T)+":",p[T],";"):mf(p[T])?S.push.apply(S,h(p[T],T)):S.push(m0(T)+": "+(I=T,(C=p[T])==null||typeof C=="boolean"||C===""?"":typeof C!="number"||C===0||I in C2?String(C).trim():C+"px")+";"));return m?[m+" {"].concat(S,["}"]):S}(t):t.toString()}var y0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function gE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ta(t)||mf(t)?y0(xs(d0(wu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:y0(xs(d0(t,n)))}var aP=function(t,e,n){return n===void 0&&(n=Dr),t.theme!==n.theme&&t.theme||e||n.theme},lP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uP=/(^-|-$)/g;function Vd(t){return t.replace(lP,"-").replace(uP,"")}var yE=function(t){return gf(hE(t)>>>0)};function ml(t){return typeof t=="string"&&!0}var vf=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},cP=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function dP(t,e,n){var r=t[n];vf(e)&&vf(r)?vE(r,e):t[n]=e}function vE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(vf(o))for(var a in o)cP(a)&&dP(t,o[a],a)}return t}var wE=Ai.createContext();wE.Consumer;var Hd={};function EE(t,e,n){var r=em(t),i=!ml(t),s=e.attrs,o=s===void 0?wu:s,a=e.componentId,l=a===void 0?function(g,E){var b=typeof g!="string"?"sc":Vd(g);Hd[b]=(Hd[b]||0)+1;var A=b+"-"+yE("5.3.9"+b+Hd[b]);return E?E+"-"+A:A}(e.displayName,e.parentComponentId):a,d=e.displayName,h=d===void 0?function(g){return ml(g)?"styled."+g:"Styled("+h0(g)+")"}(t):d,p=e.displayName&&e.componentId?Vd(e.displayName)+"-"+e.componentId:e.componentId||l,m=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,I=e.shouldForwardProp;r&&t.shouldForwardProp&&(I=e.shouldForwardProp?function(g,E,b){return t.shouldForwardProp(g,E,b)&&e.shouldForwardProp(g,E,b)}:t.shouldForwardProp);var C,S=new Y2(n,p,r?t.componentStyle:void 0),T=S.isStatic&&o.length===0,w=function(g,E){return function(b,A,P,U){var B=b.attrs,ue=b.componentStyle,X=b.defaultProps,He=b.foldedComponentIds,Le=b.shouldForwardProp,ze=b.styledComponentId,Ae=b.target,De=function(ee,k,ce){ee===void 0&&(ee=Dr);var L=qn({},k,{theme:ee}),he={};return ce.forEach(function(le){var Ee,K,We,dt=le;for(Ee in ta(dt)&&(dt=dt(L)),dt)L[Ee]=he[Ee]=Ee==="className"?(K=he[Ee],We=dt[Ee],K&&We?K+" "+We:K||We):dt[Ee]}),[L,he]}(aP(A,_.useContext(wE),X)||Dr,A,B),it=De[0],ct=De[1],$=function(ee,k,ce,L){var he=tP(),le=nP(),Ee=k?ee.generateAndInjectStyles(Dr,he,le):ee.generateAndInjectStyles(ce,he,le);return Ee}(ue,U,it),Q=P,te=ct.$as||A.$as||ct.as||A.as||Ae,we=ml(te),F=ct!==A?qn({},A,{},ct):A,z={};for(var j in F)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?z.as=F[j]:(Le?Le(j,a0,te):!we||a0(j))&&(z[j]=F[j]));return A.style&&ct.style!==A.style&&(z.style=qn({},A.style,{},ct.style)),z.className=Array.prototype.concat(He,ze,$!==ze?$:null,A.className,ct.className).filter(Boolean).join(" "),z.ref=Q,_.createElement(te,z)}(C,g,E,T)};return w.displayName=h,(C=Ai.forwardRef(w)).attrs=m,C.componentStyle=S,C.displayName=h,C.shouldForwardProp=I,C.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):wu,C.styledComponentId=p,C.target=r?t.target:t,C.withComponent=function(g){var E=e.componentId,b=function(P,U){if(P==null)return{};var B,ue,X={},He=Object.keys(P);for(ue=0;ue<He.length;ue++)B=He[ue],U.indexOf(B)>=0||(X[B]=P[B]);return X}(e,["componentId"]),A=E&&E+"-"+(ml(g)?g:Vd(h0(g)));return EE(g,qn({},b,{attrs:m,componentId:A}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?vE({},t.defaultProps,g):g}}),Object.defineProperty(C,"toString",{value:function(){return"."+C.styledComponentId}}),i&&N2(C,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var wf=function(t){return function e(n,r,i){if(i===void 0&&(i=Dr),!ea.isValidElementType(r))return ka(1,String(r));var s=function(){return n(r,i,gE.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,qn({},i,{},o))},s.attrs=function(o){return e(n,r,qn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(EE,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){wf[t]=wf(t)});function ar(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=gE.apply(void 0,[t].concat(n)).join(""),s=yE(i);return new mE(s,i)}const M=wf,nm="/assets/logo-d07f09c6.png";const hP=M.div`
    display:flex;
    align-items:center;
    position:relative;
    height:77px;
`,fP=M.button`
      display:flex;
      align-items:center;
      height:50%;
      width:100%;
      padding:0;
      &>.hamburger-box  {
          width:100%;
          color:red;
        &> div{
             width:100%; 
             height:3px;
             &:after{
                width:100%; 
                height:3px;

            }
             &:before{
                width:100%; 
                height:3px;
            }
        }
    }
`,pP=ar`
    0% {
    transform: translateY(-100%);
    animation-timing-function: ease-in;
  }
  25% {
    transform: translateY(30px);
    animation-timing-function: ease-out;
  }
  50% {
    transform: translateY(-10px);
    animation-timing-function: ease-in;
  }
  75% {
    transform: translateY(5px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0);
  }

`,mP=M.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:absolute;
    gap:10px;
    align-items:center;
    background: #ffff;
    height:150px;
    width:200px;;
    top: 75px;
    right: 0;
    border-radius:8px;
    box-shadow: 0px 4px 4px rgba(211, 211, 211, 0.25);
    animation: ${pP}  ease-in-out .7s;
    &>a{
        text-decoration:none;
        color:#656565;
        font-size:1.2rem;
        font-weight:600;
    }
`,gP=()=>{const[t,e]=_.useState(!1);return O(hP,{children:[v(fP,{onClick:()=>{e(!t)},className:`hamburger hamburger--collapse ${t?"is-active":""}`,children:v("div",{className:"hamburger",children:v("div",{className:"hamburger-box",children:v("div",{className:"hamburger-inner"})})})}),t&&O(mP,{children:[v($t,{to:"/checkout",children:"My orders"}),v($t,{to:"/login",children:"Log in"})]})]})},yP=M.div`
  position: fixed;
  height: 78px;
  width: 100%;
  z-index: 65;
  top: 0;
  background: #FFFFFF;
`,vP=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  width: 90%;

  
`,wP=()=>v(yP,{children:O(vP,{children:[v("div",{children:v("img",{src:nm,height:"77",width:"77",alt:""})}),v(gP,{})]})}),yt=Ai.createContext(void 0),EP=M.div`
    position: sticky;
    max-width: 600px;
	min-width: 332px;
    height: 54px;
    background: #FFFFFF;
    border-radius: 29px;
    box-shadow: 0px 4px 4px rgba(201, 201, 201, 0.25);
    overflow: hidden;
	top: 80px;
	margin: 0 auto;
	margin-bottom: 40px;
	z-index: 51;`,IP=M.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    &>button{
        border: none;
        background: transparent;
        font-size: 1.2rem;
        font-weight: 700;
        color: #838383;
        height: 100%;
        width: 100%;
        transition: all ease-in .2s;
        &:hover{
            background: #FA6241;
            color: #ffff;
        }
    }
    &>.linkActive{
        background: #FA6241;
        color: #ffff;
    }

`,SP=({productsRef:t})=>{const e=_.useContext(yt),n=()=>{t.current!==null&&t.current.scrollIntoView({behavior:"smooth"})},r=i=>{e==null||e.setState({...e.state,category:{name:i}}),setTimeout(()=>{n()},500)};return v(EP,{children:O(IP,{children:[v("button",{onClick:()=>{r("pizza")},className:(e==null?void 0:e.state.category.name)==="pizza"?"linkActive":"",children:"Pizza"}),v("button",{className:(e==null?void 0:e.state.category.name)==="empanada"?"linkActive":"",onClick:()=>{r("empanada")},children:"Empanadas"}),v("button",{className:(e==null?void 0:e.state.category.name)==="bebida"?"linkActive":"",onClick:()=>{r("bebida")},children:"Bebidas"}),v("button",{className:(e==null?void 0:e.state.category.name)==="postres"?"linkActive":"",onClick:()=>{r("postre")},children:"Postres"})]})})},CP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAuJQTFRFAAAA8FAq8FIo8lIm71Io71Mo8VIo8FIn8FEo/FIyhpEH71Ep71In8FIp8FMp8FEn81QtlVQZ7lQp8VMp7lIl8k8p8VMn8FIm8FUh8FUi8FMocHwA708h8VEo71Ip9Ukf8VEp8U4k8k0j7FQo7FYp71En8FAq8FAq8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FMo8FIo8FIo8FIo8FIo8FIo71Io8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8lEk8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8lEp8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8VIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FMo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FEn8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8VIp8FIo8FIo8FIq8FIl8FIn71Mo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo8FIo7lIp8FIo8FIo8FIo8FIo8FEp8FIo8FIo8FIo8FIo8FAn71Mn7lAn8FIo////p1wSqwAAAPR0Uk5TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAaqmNYfCEfM9euns/LMIKyo/3eMlA6T9ZWf+AzLr2hwHCbL3TQSEw8DBq3dtsDvyzxQz9lcSyz4N2CIBknaDqQVIvw45zdTV9GnXMRYu5gNFuFb7qI554NkfAjAGyvFamvDvOtAVcpgBaHyJNy/qQQq+C6PcHYEMAWObSaFbGu00I94BlWtAUfq1tkvu4Sgbr1kDopmdnJ6ILOi8+ErTinGWb8cT4ia0U2oCn0MBAQICIHWnt6BiffnbHsiReE6QAY0XhUICJ3+9iwEBAR/r46oAAAABYktHRPVF0hvbAAAACXBIWXMAABCcAAAQnAEmzTo0AAADyUlEQVRYw+2W91+NURzHrw91M6699x4RyihSpHQJRaJ0b3KFuIqQJCMrRMgMkb0zSlb23mRvkb1Xf4B7Ts8dus84rn7s89Pz+p7PeZ/zfL/f85xHJitUoQpAjc3VpIgloKZmamYLS0C55mqOogUDamFnyZZ4QC1bFRAot7UlIPu/5NCGgNq2s4DU3lSOTh0IqKOzRXUzETq5EJBr5/8FydDFjZBcuhb7X5C7BwF18wSg7P4vyg9q14OAvHoCvXp7+zCrT1+zLfnmNbeVNfq55bLLzwzUfwCJ+wcAAx3YOYEqM5A6iAwMGAQEe7ODBmvyg+RDQujIUMBmGDtoeKh53UZ4kZGRWmBUWLikRo+hoAjzxoPnWDLiMQ4IDRgvpYDIbsQ9IZIHFOXCrVGcpe8mBhJzNN/hxKQYMja5F8MxQYkpdNWpKMkz6DyNjMVOB2Y4j5sprPazALvZxBvnxLcolLS528wBoubOcxBUfNtgYH4c8S5I4AOVwkK63UWLgUSxki/Rncep9GmpgjcNWOagb+7lK4Q5LVcCSavIk+5k8mdwtQ81tgK0a/zDBOTvNx6ItCfO5LX8IDnyWnpdaZsyKWo7Aam1662xwZUYN0YJFBibaHN4B0s0AGZspmXZIuTD1sHEsG27FGjHTuIT/sJj125icEvVlWX6Hide7dHNxt59xLdf+M6BijZ3mhJIP+AVyKtEWJcM4dq6rCBIk0H3fBA4FMtf/AO2gJq2tYe7cAYw6zDN4hHgaCY/KDpJ95mJJ08ttCKp5Jr7WDlrbDp+gkcnVTbl0ZuaTskriIBOnyGe0Z5ii6WcJZ5z58Vqqzeli4HyFrtwSAxUkWvui3KFMOgStVyuZCUCknGJDF94RVhXiSNGJd61uBbEdn1cvyEBUoSwgW4qpc7RrX0sHLcsVJYAaZJZQLpbS5wjU9y+wwLqkyJ518A2K4IqMYJHXDD17j2FFIhTlfsP5FXyB6tWe7irOiOAqliNR4+fPH32PEAhN92rVjU3rekLRyvmH005+vuTn62YNI3JHCRszibpeZlek/W18CqHy2kzY04R+pr7k0uOZNwS8EZfHK+3RpC7vT767j0bCcpoQ5k/GEG+hmD4R0ZQdx/DnMtG0DtDMOMVIyjUzzDnkxGUagiGXWMDVUaWKzcl7rMRdDBDD3oBG8ZsJ+znjuZr4xnHlzfZedEcDWsj1cLXw+Tyjt9t+v+DpG9ndA2Q/d0dtRlBsjoIHvFjzbdRf39zEDXTNzNkr7p0GVYOUd26P+vVzx9s0PDX70b/QilUoRj1B/zXrHyr9nHbAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTAxLTI0VDEwOjI2OjQ4KzAxOjAwDysynwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wMS0yNFQxMDoyNjo0OCswMTowMH52iiMAAABGdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuNy44LTkgMjAxNi0wNi0xNiBRMTYgaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmfmvzS2AAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OmhlaWdodAA1MTLA0FBRAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADUxMhx8A9wAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTQ4NTI1MDAwOCbXxb4AAAARdEVYdFRodW1iOjpTaXplADEzS0JCydz/6wAAAEt0RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzL2Nhcmxvc3ByZXZpL25JQ3lpeUIvMTA3Ny9zaG9wcGluZ2NhcnRfNzc5NjgucG5nZW7h1wAAAABJRU5ErkJggg==";const kP=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}),wc=t=>kP.format(Number(t)),bP=ar`
	to{
		transform: scale(1);
		opacity: 1;
	}
	from{
		transform: scale(0);
		opacity: 0;
	}
`,xP=M.div`
    min-height: 258px;
    box-sizing: border-box;
	animation: ${bP} .8s alternate;
    `,TP=({products:t})=>{const e=_.useContext(yt),n=r=>{const i={...r,amount:1};e==null||e.addToCart(i)};return v(xP,{children:v("div",{className:"small",children:O("article",{className:"recipe",children:[v("div",{className:"pizza-box",children:v("img",{src:t.img_url,width:"1500",height:"1368",alt:""})}),O("div",{className:"recipe-content",children:[v("p",{className:"recipe-tags",children:v("span",{className:"recipe-tag",children:t.category})}),v("h1",{className:"recipe-title",children:v("a",{href:"#",children:t.name})}),O("p",{className:"recipe-metadata",children:[O("span",{className:"recipe-rating",children:["★★★★",v("span",{children:"☆"})]}),v("span",{className:"recipe-votes",children:"(12 votes)"})]}),v("p",{className:"recipe-desc",children:t.description}),O("div",{className:"container-btn",children:[v("button",{className:"recipe-price",type:"button",children:wc(t.price)}),v("button",{className:"recipe-save",type:"button",onClick:()=>{n(t)},children:v("img",{src:CP,width:24,alt:""})})]})]})]})})})},AP="/assets/cart-3a86add1.svg",_P="/assets/pizzaCategory-71189534.png",PP="/assets/dessertCategory-09bb1575.png",RP="/assets/drinkCategory-039eb49d.png",DP="/assets/empanadaCategory-735a89b2.png",NP="/assets/close-04f9f8fa.svg",OP=M.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:30px;
    width:100%;
    height:100%;
    border-radius:3px;
    overflow:hidden;

    &>small{
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:1.4rem;
        height:25px;
        width:25px;
        margin:2px 0;
        border:1px #a6a6a6 solid;
    border-radius:3px;

    }
    &>button{
        
        border:none;
        background: #787878;
        color:#ffff;
        font-size:2rem;
        height:25px;
        width:25px;
        border-radius:3px;
        
    }

`,$P=({product:t})=>{const e=_.useContext(yt),n=()=>{t.amount<5&&(e==null||e.changeAmount(t,"increment"))};return O(OP,{children:[v("button",{onClick:()=>{t.amount>1&&(e==null||e.changeAmount(t,"decrement"))},children:"-"}),v("small",{children:t.amount}),v("button",{onClick:n,children:"+"})]})},LP=M.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    box-sizing: border-box;
    width: 100%;
    max-width: 320px;
    height: 113px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(211, 211, 211, 0.25);
    border-radius: 18px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 0 8px;
    gap: 5px;
    &>img{
        position: absolute;
        right: 5px;
        top: 5px;
        height: 10px;
        width: 10px;
    }
    
`,FP=M.div`
    max-width: 102px;
    height: 77px;
    flex: 2;
    &>img{
        object-fit: cover;
        max-width: 100%!important;
        height: 100%!important;
    }
`,MP=M.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &>h4{
        font-weight: 600;
        font-size: 1.4rem;
        color:#838383;
        text-align: center;
        width: 100px; /* Ancho máximo permitido */
  white-space: nowrap; /* Evita el salto de línea */
  overflow: hidden; /* Oculta el texto que desborda */
  text-overflow: ellipsis;
    }
    &>small{
        font-size: 1.2rem;
        color:#838383;
        font-weight: 600;
    }
`,UP=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-weight: 600;
    color: #838383;
    padding:0 10px;
    
    `,BP=M.p`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #838383;
    font-size: 1.4rem;

`,IE=({product:t})=>{const e=_.useContext(yt),n=r=>{e==null||e.removeFromCart(r)};return O(LP,{children:[v(FP,{children:v("img",{alt:t.name,width:640,height:480,src:t.img_url})}),O(MP,{children:[v("h4",{children:t.name}),v("small",{children:"4.5"})]}),v(UP,{children:v($P,{product:t})}),v(BP,{children:wc(t.price)}),v("img",{onClick:()=>{n(t)},alt:"",src:NP})]})},zP="/assets/arrowdown-40f0d041.svg",jP=ar`
  to{
    animation-timing-function: ease-in;
    transform: translateY(0px);
    }
    from{
    animation-timing-function: ease-out;
    transform: translateY(1000px);
    }
`,VP=M.div`
display:flex;
position: fixed;
left:0;
right: 0;
bottom: 0;
z-index: 10;
height: 466px;
animation: ${jP} ease .5s;
max-width:400px;
min-width:340px;
margin:0 auto;
z-index: 60;
@media (min-width:700px ) {
    left: initial;
        right: 5px;
        margin: 0;
    }
`,HP=M.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow: auto;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: #FFFFFF;
    overflow-y: auto;
    box-shadow: 0px 0px 4px rgba(99, 99, 99, 0.25);
    border-radius: 29px 29px 0px 0px;
    padding: 20px 15px;
    margin:0 auto;
   
    &>img{
        position: sticky;
        top: 5px;
        left: 50%;
        transform: translate(-50%);
        z-index:5;
    }
    &>h2{
        text-align:center;
        color:#656565;
        margin-top:30px;
        font-size:2rem;
    }
    `,WP=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
   &>div{
    display: flex;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    background: #F6F6F6;
    border-radius: 5px;
    height: 50px;
    padding: 0px 15px;
    &>h5{
        display: flex;
        align-items: center;
        color: #656565;
        font-size: 1.6rem;
        font-weight: 600;
        margin: 0;
    }
    &>p{
        display: flex;
        align-items: center;
        color: #656565;
        font-size: 1.6rem;
        font-weight: 600;
    }
   }
   &>a{
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: #FA6241;
        box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.21);
        border-radius: 18px;
        height: 52px;
        width: 115px;
        color: #ffff;
        font-weight: 600;
        font-size: 1.2rem;
        margin-top: 20px;
        text-decoration: none;
      
   }
`,qP=()=>{const t=_.useContext(yt),e=()=>{t==null||t.toggleOrder()},n=t!=null&&t.state?t.state.cart.reduce((r,i)=>r+Number(i.price)*Number(i.amount),0):0;return v(VP,{children:O(HP,{children:[v("img",{onClick:e,height:30,width:30,src:zP,alt:""}),t&&t.state.cart.length===0?v("h2",{children:"Add products"}):O(Zv,{children:[v("div",{children:t==null?void 0:t.state.cart.map(r=>v(IE,{product:r},r.id))}),O(WP,{children:[O("div",{children:[v("h5",{children:"Total:"}),v("p",{children:wc(n)})]}),v($t,{to:"/checkout",children:"Checkout"})]})]})]})})},KP=ar`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,GP=M.div`
  border-radius: 50%;
  width: ${t=>t.size}px;
  height: ${t=>t.size}px;
  margin: 0 auto;
  border: ${t=>t.size/8}px solid ${t=>t.color};
  border-top-color: transparent;
  animation: ${KP} 1s linear infinite;
`,SE=({size:t=24,color:e="#000000"})=>v(GP,{size:t,color:e});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,d=l?t[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|d>>6,I=d&63;l||(I=64,o||(m=64)),r.push(n[h],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(CE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||d==null||p==null)throw new YP;const m=s<<2|a>>4;if(r.push(m),d!==64){const I=a<<4&240|d>>2;if(r.push(I),p!==64){const C=d<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XP=function(t){const e=CE(t);return kE.encodeByteArray(e,!0)},Iu=function(t){return XP(t).replace(/\./g,"")},bE=function(t){try{return kE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=()=>JP().__FIREBASE_DEFAULTS__,eR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bE(t[1]);return e&&JSON.parse(e)},rm=()=>{try{return ZP()||eR()||tR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xE=t=>{var e,n;return(n=(e=rm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nR=t=>{const e=xE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rR=()=>{var t;return(t=rm())===null||t===void 0?void 0:t.config},TE=t=>{var e;return(e=rm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Iu(JSON.stringify(n)),Iu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function AE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lR(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _E(){try{return typeof indexedDB=="object"}catch{return!1}}function PE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function uR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cR,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,a,r)}}function dR(t,e){return t.replace(hR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hR=/\{\$([^}]+)}/g;function fR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function na(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(v0(s)&&v0(o)){if(!na(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function v0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pR(t,e){const n=new mR(t,e);return n.subscribe.bind(n)}class mR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wd),i.error===void 0&&(i.error=Wd),i.complete===void 0&&(i.complete=Wd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=1e3,vR=2,wR=4*60*60*1e3,ER=.5;function w0(t,e=yR,n=vR){const r=e*Math.pow(n,t),i=Math.round(ER*r*(Math.random()-.5)*2);return Math.min(wR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CR(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SR(t){return t===ni?void 0:t}function CR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const bR={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},xR=Ie.INFO,TR={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},AR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ec{constructor(e){this.name=e,this._logLevel=xR,this._logHandler=AR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const _R=(t,e)=>e.some(n=>t instanceof n);let E0,I0;function PR(){return E0||(E0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RR(){return I0||(I0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const RE=new WeakMap,Ef=new WeakMap,DE=new WeakMap,qd=new WeakMap,im=new WeakMap;function DR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&RE.set(n,t)}).catch(()=>{}),im.set(e,t),e}function NR(t){if(Ef.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ef.set(t,e)}let If={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ef.get(t);if(e==="objectStoreNames")return t.objectStoreNames||DE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OR(t){If=t(If)}function $R(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kd(this),e,...n);return DE.set(r,e.sort?e.sort():[e]),Nr(r)}:RR().includes(t)?function(...e){return t.apply(Kd(this),e),Nr(RE.get(this))}:function(...e){return Nr(t.apply(Kd(this),e))}}function LR(t){return typeof t=="function"?$R(t):(t instanceof IDBTransaction&&NR(t),_R(t,PR())?new Proxy(t,If):t)}function Nr(t){if(t instanceof IDBRequest)return DR(t);if(qd.has(t))return qd.get(t);const e=LR(t);return e!==t&&(qd.set(t,e),im.set(e,t)),e}const Kd=t=>im.get(t);function NE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nr(o.result),l.oldVersion,l.newVersion,Nr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const FR=["get","getKey","getAll","getAllKeys","count"],MR=["put","add","delete","clear"],Gd=new Map;function S0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gd.get(e))return Gd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&l.done]))[0]};return Gd.set(e,s),s}OR(t=>({...t,get:(e,n,r)=>S0(e,n)||t.get(e,n,r),has:(e,n)=>!!S0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sf="@firebase/app",C0="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Ec("@firebase/app"),zR="@firebase/app-compat",jR="@firebase/analytics-compat",VR="@firebase/analytics",HR="@firebase/app-check-compat",WR="@firebase/app-check",qR="@firebase/auth",KR="@firebase/auth-compat",GR="@firebase/database",QR="@firebase/database-compat",YR="@firebase/functions",XR="@firebase/functions-compat",JR="@firebase/installations",ZR="@firebase/installations-compat",eD="@firebase/messaging",tD="@firebase/messaging-compat",nD="@firebase/performance",rD="@firebase/performance-compat",iD="@firebase/remote-config",sD="@firebase/remote-config-compat",oD="@firebase/storage",aD="@firebase/storage-compat",lD="@firebase/firestore",uD="@firebase/firestore-compat",cD="firebase",dD="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="[DEFAULT]",hD={[Sf]:"fire-core",[zR]:"fire-core-compat",[VR]:"fire-analytics",[jR]:"fire-analytics-compat",[WR]:"fire-app-check",[HR]:"fire-app-check-compat",[qR]:"fire-auth",[KR]:"fire-auth-compat",[GR]:"fire-rtdb",[QR]:"fire-rtdb-compat",[YR]:"fire-fn",[XR]:"fire-fn-compat",[JR]:"fire-iid",[ZR]:"fire-iid-compat",[eD]:"fire-fcm",[tD]:"fire-fcm-compat",[nD]:"fire-perf",[rD]:"fire-perf-compat",[iD]:"fire-rc",[sD]:"fire-rc-compat",[oD]:"fire-gcs",[aD]:"fire-gcs-compat",[lD]:"fire-fst",[uD]:"fire-fst-compat","fire-js":"fire-js",[cD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map,kf=new Map;function fD(t,e){try{t.container.addComponent(e)}catch(n){Ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(kf.has(e))return Ei.debug(`There were multiple attempts to register component ${e}.`),!1;kf.set(e,t);for(const n of Su.values())fD(n,t);return!0}function Di(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Or=new Ri("app","Firebase",pD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=dD;function OE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Or.create("bad-app-name",{appName:String(i)});if(n||(n=rR()),!n)throw Or.create("no-options");const s=Su.get(i);if(s){if(na(n,s.options)&&na(r,s.config))return s;throw Or.create("duplicate-app",{appName:i})}const o=new kR(i);for(const l of kf.values())o.addComponent(l);const a=new mD(n,r,o);return Su.set(i,a),a}function sm(t=Cf){const e=Su.get(t);if(!e&&t===Cf)return OE();if(!e)throw Or.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let i=(r=hD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ei.warn(a.join(" "));return}Un(new bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="firebase-heartbeat-database",yD=1,ra="firebase-heartbeat-store";let Qd=null;function $E(){return Qd||(Qd=NE(gD,yD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ra)}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),Qd}async function vD(t){try{return(await $E()).transaction(ra).objectStore(ra).get(LE(t))}catch(e){if(e instanceof Tn)Ei.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ei.warn(n.message)}}}async function k0(t,e){try{const r=(await $E()).transaction(ra,"readwrite");return await r.objectStore(ra).put(e,LE(t)),r.done}catch(n){if(n instanceof Tn)Ei.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ei.warn(r.message)}}}function LE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=1024,ED=30*24*60*60*1e3;class ID{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=b0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ED}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=b0(),{heartbeatsToSend:n,unsentEntries:r}=SD(this._heartbeatsCache.heartbeats),i=Iu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function b0(){return new Date().toISOString().substring(0,10)}function SD(t,e=wD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),x0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),x0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _E()?PE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return k0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return k0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function x0(t){return Iu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(t){Un(new bn("platform-logger",e=>new UR(e),"PRIVATE")),Un(new bn("heartbeat",e=>new ID(e),"PRIVATE")),dn(Sf,C0,t),dn(Sf,C0,"esm2017"),dn("fire-js","")}kD("");var bD="firebase",xD="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(bD,xD,"app");const FE="@firebase/installations",om="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=1e4,UE=`w:${om}`,BE="FIS_v2",TD="https://firebaseinstallations.googleapis.com/v1",AD=60*60*1e3,_D="installations",PD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ii=new Ri(_D,PD,RD);function zE(t){return t instanceof Tn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE({projectId:t}){return`${TD}/projects/${t}/installations`}function VE(t){return{token:t.token,requestStatus:2,expiresIn:ND(t.expiresIn),creationTime:Date.now()}}async function HE(t,e){const r=(await e.json()).error;return Ii.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function WE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function DD(t,{refreshToken:e}){const n=WE(t);return n.append("Authorization",OD(e)),n}async function qE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ND(t){return Number(t.replace("s","000"))}function OD(t){return`${BE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=jE(t),i=WE(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:BE,appId:t.appId,sdkVersion:UE},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await qE(()=>fetch(r,a));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:VE(d.authToken)}}else throw await HE("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=/^[cdef][\w-]{21}$/,bf="";function MD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=UD(t);return FD.test(n)?n:bf}catch{return bf}}function UD(t){return LD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=new Map;function QE(t,e){const n=Ic(t);YE(n,e),BD(n,e)}function YE(t,e){const n=GE.get(t);if(n)for(const r of n)r(e)}function BD(t,e){const n=zD();n&&n.postMessage({key:t,fid:e}),jD()}let oi=null;function zD(){return!oi&&"BroadcastChannel"in self&&(oi=new BroadcastChannel("[Firebase] FID Change"),oi.onmessage=t=>{YE(t.data.key,t.data.fid)}),oi}function jD(){GE.size===0&&oi&&(oi.close(),oi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD="firebase-installations-database",HD=1,Si="firebase-installations-store";let Yd=null;function am(){return Yd||(Yd=NE(VD,HD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Si)}}})),Yd}async function Cu(t,e){const n=Ic(t),i=(await am()).transaction(Si,"readwrite"),s=i.objectStore(Si),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&QE(t,e.fid),e}async function XE(t){const e=Ic(t),r=(await am()).transaction(Si,"readwrite");await r.objectStore(Si).delete(e),await r.done}async function Sc(t,e){const n=Ic(t),i=(await am()).transaction(Si,"readwrite"),s=i.objectStore(Si),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&QE(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(t){let e;const n=await Sc(t.appConfig,r=>{const i=WD(r),s=qD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===bf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WD(t){const e=t||{fid:MD(),registrationStatus:0};return JE(e)}function qD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ii.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=KD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:GD(t)}:{installationEntry:e}}async function KD(t,e){try{const n=await $D(t,e);return Cu(t.appConfig,n)}catch(n){throw zE(n)&&n.customData.serverCode===409?await XE(t.appConfig):await Cu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function GD(t){let e=await T0(t.appConfig);for(;e.registrationStatus===1;)await KE(100),e=await T0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await lm(t);return r||n}return e}function T0(t){return Sc(t,e=>{if(!e)throw Ii.create("installation-not-found");return JE(e)})}function JE(t){return QD(t)?{fid:t.fid,registrationStatus:0}:t}function QD(t){return t.registrationStatus===1&&t.registrationTime+ME<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YD({appConfig:t,heartbeatServiceProvider:e},n){const r=XD(t,n),i=DD(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:UE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await qE(()=>fetch(r,a));if(l.ok){const d=await l.json();return VE(d)}else throw await HE("Generate Auth Token",l)}function XD(t,{fid:e}){return`${jE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(t,e=!1){let n;const r=await Sc(t.appConfig,s=>{if(!ZE(s))throw Ii.create("not-registered");const o=s.authToken;if(!e&&eN(o))return s;if(o.requestStatus===1)return n=JD(t,e),s;{if(!navigator.onLine)throw Ii.create("app-offline");const a=nN(s);return n=ZD(t,a),a}});return n?await n:r.authToken}async function JD(t,e){let n=await A0(t.appConfig);for(;n.authToken.requestStatus===1;)await KE(100),n=await A0(t.appConfig);const r=n.authToken;return r.requestStatus===0?um(t,e):r}function A0(t){return Sc(t,e=>{if(!ZE(e))throw Ii.create("not-registered");const n=e.authToken;return rN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ZD(t,e){try{const n=await YD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Cu(t.appConfig,r),n}catch(n){if(zE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await XE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cu(t.appConfig,r)}throw n}}function ZE(t){return t!==void 0&&t.registrationStatus===2}function eN(t){return t.requestStatus===2&&!tN(t)}function tN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+AD}function nN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function rN(t){return t.requestStatus===1&&t.requestTime+ME<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(t){const e=t,{installationEntry:n,registrationPromise:r}=await lm(e);return r?r.catch(console.error):um(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(t,e=!1){const n=t;return await oN(n),(await um(n,e)).token}async function oN(t){const{registrationPromise:e}=await lm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t){if(!t||!t.options)throw Xd("App Configuration");if(!t.name)throw Xd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xd(t){return Ii.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="installations",lN="installations-internal",uN=t=>{const e=t.getProvider("app").getImmediate(),n=aN(e),r=Di(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cN=t=>{const e=t.getProvider("app").getImmediate(),n=Di(e,eI).getImmediate();return{getId:()=>iN(n),getToken:i=>sN(n,i)}};function dN(){Un(new bn(eI,uN,"PUBLIC")),Un(new bn(lN,cN,"PRIVATE"))}dN();dn(FE,om);dn(FE,om,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="analytics",hN="firebase_id",fN="origin",pN=60*1e3,mN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Ec("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xt=new Ri("analytics","Analytics",gN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t){if(!t.startsWith(cm)){const e=Xt.create("invalid-gtag-resource",{gtagURL:t});return qt.warn(e.message),""}return t}function tI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function vN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function wN(t,e){const n=vN("firebase-js-sdk-policy",{createScriptURL:yN}),r=document.createElement("script"),i=`${cm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function EN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function IN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await tI(n)).find(d=>d.measurementId===i);l&&await e[l.appId]}}catch(a){qt.error(a)}t("config",i,s)}async function SN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await tI(n);for(const l of o){const d=a.find(p=>p.measurementId===l),h=d&&e[d.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){qt.error(s)}}function CN(t,e,n,r){async function i(s,o,a){try{s==="event"?await SN(t,e,n,o,a):s==="config"?await IN(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){qt.error(l)}}return i}function kN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=CN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function bN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(cm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=30,TN=1e3;class AN{constructor(e={},n=TN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nI=new AN;function _N(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function PN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:_N(r)},s=mN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function RN(t,e=nI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Xt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Xt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ON;return setTimeout(async()=>{a.abort()},n!==void 0?n:pN),rI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function rI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=nI){var s;const{appId:o,measurementId:a}=t;try{await DN(r,e)}catch(l){if(a)return qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await PN(t);return i.deleteThrottleMetadata(o),l}catch(l){const d=l;if(!NN(d)){if(i.deleteThrottleMetadata(o),a)return qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?w0(n,i.intervalMillis,xN):w0(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,p),qt.debug(`Calling attemptFetch again in ${h} millis`),rI(t,p,r,i)}}function DN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function NN(t){if(!(t instanceof Tn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ON{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function $N(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(){if(_E())try{await PE()}catch(t){return qt.warn(Xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return qt.warn(Xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function FN(t,e,n,r,i,s,o){var a;const l=RN(t);l.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&qt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>qt.error(I)),e.push(l);const d=LN().then(I=>{if(I)return r.getId()}),[h,p]=await Promise.all([l,d]);bN(s)||wN(s,h.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[fN]="firebase",m.update=!0,p!=null&&(m[hN]=p),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.app=e}_delete(){return delete Ao[this.app.options.appId],Promise.resolve()}}let Ao={},_0=[];const P0={};let Jd="dataLayer",UN="gtag",R0,iI,D0=!1;function BN(){const t=[];if(AE()&&t.push("This is a browser extension environment."),uR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Xt.create("invalid-analytics-context",{errorInfo:e});qt.warn(n.message)}}function zN(t,e,n){BN();const r=t.options.appId;if(!r)throw Xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xt.create("no-api-key");if(Ao[r]!=null)throw Xt.create("already-exists",{id:r});if(!D0){EN(Jd);const{wrappedGtag:s,gtagCore:o}=kN(Ao,_0,P0,Jd,UN);iI=s,R0=o,D0=!0}return Ao[r]=FN(t,_0,P0,e,R0,Jd,n),new MN(t)}function jN(t=sm()){t=Rt(t);const e=Di(t,ku);return e.isInitialized()?e.getImmediate():VN(t)}function VN(t,e={}){const n=Di(t,ku);if(n.isInitialized()){const i=n.getImmediate();if(na(e,n.getOptions()))return i;throw Xt.create("already-initialized")}return n.initialize({options:e})}function HN(t,e,n,r){t=Rt(t),$N(iI,Ao[t.app.options.appId],e,n,r).catch(i=>qt.error(i))}const N0="@firebase/analytics",O0="0.9.5";function WN(){Un(new bn(ku,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return zN(r,i,n)},"PUBLIC")),Un(new bn("analytics-internal",t,"PRIVATE")),dn(N0,O0),dn(N0,O0,"esm2017");function t(e){try{const n=e.getProvider(ku).getImmediate();return{logEvent:(r,i,s)=>HN(n,r,i,s)}}catch(n){throw Xt.create("interop-component-reg-failed",{reason:n})}}}WN();const qN={apiKey:"AIzaSyAAhZ1nIIDP1cySnD5lPNLzKOPVAfWRhIA",authDomain:"don-remolo.firebaseapp.com",projectId:"don-remolo",storageBucket:"don-remolo.appspot.com",messagingSenderId:"176032031947",appId:"1:176032031947:web:b6190e6f9a90d2f8ea274e",measurementId:"G-VM2PPN16L1"},mn=OE(qN);jN(mn);var KN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H,dm=dm||{},ie=KN||self;function bu(){}function Cc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ta(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function GN(t){return Object.prototype.hasOwnProperty.call(t,Zd)&&t[Zd]||(t[Zd]=++QN)}var Zd="closure_uid_"+(1e9*Math.random()>>>0),QN=0;function YN(t,e,n){return t.call.apply(t.bind,arguments)}function XN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=YN:Tt=XN,Tt.apply(null,arguments)}function gl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function vt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function qr(){this.s=this.s,this.o=this.o}var JN=0;qr.prototype.s=!1;qr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),JN!=0)&&GN(this)};qr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function $0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Cc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function At(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var ZN=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",bu,e),ie.removeEventListener("test",bu,e)}catch{}return t}();function xu(t){return/^[\s\xa0]*$/.test(t)}var L0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function eh(t,e){return t<e?-1:t>e?1:0}function kc(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return kc().indexOf(t)!=-1}function fm(t){return fm[" "](t),t}fm[" "]=bu;function eO(t){var e=rO;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var tO=Nn("Opera"),Ts=Nn("Trident")||Nn("MSIE"),oI=Nn("Edge"),xf=oI||Ts,aI=Nn("Gecko")&&!(kc().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),nO=kc().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function lI(){var t=ie.document;return t?t.documentMode:void 0}var Tu;e:{var th="",nh=function(){var t=kc();if(aI)return/rv:([^\);]+)(\)|;)/.exec(t);if(oI)return/Edge\/([\d\.]+)/.exec(t);if(Ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(nO)return/WebKit\/(\S+)/.exec(t);if(tO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(nh&&(th=nh?nh[1]:""),Ts){var rh=lI();if(rh!=null&&rh>parseFloat(th)){Tu=String(rh);break e}}Tu=th}var rO={};function iO(){return eO(function(){let t=0;const e=L0(String(Tu)).split("."),n=L0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=eh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||eh(i[2].length==0,s[2].length==0)||eh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Tf;if(ie.document&&Ts){var F0=lI();Tf=F0||parseInt(Tu,10)||void 0}else Tf=void 0;var sO=Tf;function ia(t,e){if(At.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(aI){e:{try{fm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:oO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ia.X.h.call(this)}}vt(ia,At);var oO={2:"touch",3:"pen",4:"mouse"};ia.prototype.h=function(){ia.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Aa="closure_listenable_"+(1e6*Math.random()|0),aO=0;function lO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++aO,this.ba=this.ea=!1}function bc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function pm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function uI(t){const e={};for(const n in t)e[n]=t[n];return e}const M0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<M0.length;s++)n=M0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function xc(t){this.src=t,this.g={},this.h=0}xc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=_f(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new lO(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Af(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=sI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(bc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _f(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var mm="closure_lm_"+(1e6*Math.random()|0),ih={};function dI(t,e,n,r,i){if(r&&r.once)return fI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dI(t,e[s],n,r,i);return null}return n=vm(n),t&&t[Aa]?t.N(e,n,Ta(r)?!!r.capture:!!r,i):hI(t,e,n,!1,r,i)}function hI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ta(i)?!!i.capture:!!i,a=ym(t);if(a||(t[mm]=a=new xc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=uO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ZN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uO(){function t(n){return e.call(t.src,t.listener,n)}const e=cO;return t}function fI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)fI(t,e[s],n,r,i);return null}return n=vm(n),t&&t[Aa]?t.O(e,n,Ta(r)?!!r.capture:!!r,i):hI(t,e,n,!0,r,i)}function pI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pI(t,e[s],n,r,i);else r=Ta(r)?!!r.capture:!!r,n=vm(n),t&&t[Aa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=_f(s,n,r,i),-1<n&&(bc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ym(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_f(e,n,r,i)),(n=-1<t?e[t]:null)&&gm(n))}function gm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Aa])Af(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ym(e))?(Af(n,t),n.h==0&&(n.src=null,e[mm]=null)):bc(t)}}}function mI(t){return t in ih?ih[t]:ih[t]="on"+t}function cO(t,e){if(t.ba)t=!0;else{e=new ia(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&gm(t),t=n.call(r,e)}return t}function ym(t){return t=t[mm],t instanceof xc?t:null}var sh="__closure_events_fn_"+(1e9*Math.random()>>>0);function vm(t){return typeof t=="function"?t:(t[sh]||(t[sh]=function(e){return t.handleEvent(e)}),t[sh])}function lt(){qr.call(this),this.i=new xc(this),this.P=this,this.I=null}vt(lt,qr);lt.prototype[Aa]=!0;lt.prototype.removeEventListener=function(t,e,n,r){pI(this,t,e,n,r)};function mt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new At(e,t);else if(e instanceof At)e.target=e.target||t;else{var i=e;e=new At(r,t),cI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yl(o,r,!0,e)&&i}if(o=e.g=t,i=yl(o,r,!0,e)&&i,i=yl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=yl(o,r,!1,e)&&i}lt.prototype.M=function(){if(lt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)bc(n[r]);delete t.g[e],t.h--}}this.I=null};lt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};lt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Af(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var wm=ie.JSON.stringify;function dO(){var t=vI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hO{constructor(){this.h=this.g=null}add(e,n){const r=gI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var gI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new fO,t=>t.reset());class fO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pO(t){ie.setTimeout(()=>{throw t},0)}function yI(t,e){Pf||mO(),Rf||(Pf(),Rf=!0),vI.add(t,e)}var Pf;function mO(){var t=ie.Promise.resolve(void 0);Pf=function(){t.then(gO)}}var Rf=!1,vI=new hO;function gO(){for(var t;t=dO();){try{t.h.call(t.g)}catch(n){pO(n)}var e=gI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rf=!1}function Tc(t,e){lt.call(this),this.h=t||1,this.g=e||ie,this.j=Tt(this.lb,this),this.l=Date.now()}vt(Tc,lt);H=Tc.prototype;H.ca=!1;H.R=null;H.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),mt(this,"tick"),this.ca&&(Em(this),this.start()))}};H.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Em(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}H.M=function(){Tc.X.M.call(this),Em(this),delete this.g};function Im(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function wI(t){t.g=Im(()=>{t.g=null,t.i&&(t.i=!1,wI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class yO extends qr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wI(this)}M(){super.M(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sa(t){qr.call(this),this.h=t,this.g={}}vt(sa,qr);var U0=[];function EI(t,e,n,r){Array.isArray(n)||(n&&(U0[0]=n.toString()),n=U0);for(var i=0;i<n.length;i++){var s=dI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function II(t){pm(t.g,function(e,n){this.g.hasOwnProperty(n)&&gm(e)},t),t.g={}}sa.prototype.M=function(){sa.X.M.call(this),II(this)};sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ac(){this.g=!0}Ac.prototype.Aa=function(){this.g=!1};function vO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var d=a[l].split("=");if(1<d.length){var h=d[0];d=d[1];var p=h.split("_");o=2<=p.length&&p[1]=="type"?o+(h+"="+d+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function wO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function os(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+IO(t,n)+(r?" "+r:"")})}function EO(t,e){t.info(function(){return"TIMEOUT: "+e})}Ac.prototype.info=function(){};function IO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wm(n)}catch{return e}}var Ni={},B0=null;function _c(){return B0=B0||new lt}Ni.Pa="serverreachability";function SI(t){At.call(this,Ni.Pa,t)}vt(SI,At);function oa(t){const e=_c();mt(e,new SI(e))}Ni.STAT_EVENT="statevent";function CI(t,e){At.call(this,Ni.STAT_EVENT,t),this.stat=e}vt(CI,At);function Lt(t){const e=_c();mt(e,new CI(e,t))}Ni.Qa="timingevent";function kI(t,e){At.call(this,Ni.Qa,t),this.size=e}vt(kI,At);function _a(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var Pc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sm(){}Sm.prototype.h=null;function z0(t){return t.h||(t.h=t.i())}function xI(){}var Pa={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Cm(){At.call(this,"d")}vt(Cm,At);function km(){At.call(this,"c")}vt(km,At);var Df;function Rc(){}vt(Rc,Sm);Rc.prototype.g=function(){return new XMLHttpRequest};Rc.prototype.i=function(){return{}};Df=new Rc;function Ra(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new sa(this),this.O=SO,t=xf?125:void 0,this.T=new Tc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new TI}function TI(){this.i=null,this.g="",this.h=!1}var SO=45e3,Nf={},Au={};H=Ra.prototype;H.setTimeout=function(t){this.O=t};function Of(t,e,n){t.K=1,t.v=Nc(tr(e)),t.s=n,t.P=!0,AI(t,null)}function AI(t,e){t.F=Date.now(),Da(t),t.A=tr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),LI(n.i,"t",r),t.C=0,n=t.l.H,t.h=new TI,t.g=rS(t.l,n?e:null,!t.s),0<t.N&&(t.L=new yO(Tt(t.La,t,t.g),t.N)),EI(t.S,t.g,"readystatechange",t.ib),e=t.H?uI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oa(),vO(t.j,t.u,t.A,t.m,t.U,t.s)}H.ib=function(t){t=t.target;const e=this.L;e&&Kn(t)==3?e.l():this.La(t)};H.La=function(t){try{if(t==this.g)e:{const h=Kn(this.g);var e=this.g.Ea();const p=this.g.aa();if(!(3>h)&&(h!=3||xf||this.g&&(this.h.h||this.g.fa()||W0(this.g)))){this.I||h!=4||e==7||(e==8||0>=p?oa(3):oa(2)),Dc(this);var n=this.g.aa();this.Y=n;t:if(_I(this)){var r=W0(this.g);t="";var i=r.length,s=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ai(this),_o(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,wO(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xu(a)){var d=a;break t}}d=null}if(n=d)os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$f(this,n);else{this.i=!1,this.o=3,Lt(12),ai(this),_o(this);break e}}this.P?(PI(this,h,o),xf&&this.i&&h==3&&(EI(this.S,this.T,"tick",this.hb),this.T.start())):(os(this.j,this.m,o,null),$f(this,o)),h==4&&ai(this),this.i&&!this.I&&(h==4?ZI(this.l,this):(this.i=!1,Da(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Lt(12)):(this.o=0,Lt(13)),ai(this),_o(this)}}}catch{}finally{}};function _I(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function PI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=CO(t,n),i==Au){e==4&&(t.o=4,Lt(14),r=!1),os(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Nf){t.o=4,Lt(15),os(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else os(t.j,t.m,i,null),$f(t,i);_I(t)&&i!=Au&&i!=Nf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rm(e),e.K=!0,Lt(11))):(os(t.j,t.m,n,"[Invalid Chunked Response]"),ai(t),_o(t))}H.hb=function(){if(this.g){var t=Kn(this.g),e=this.g.fa();this.C<e.length&&(Dc(this),PI(this,t,e),this.i&&t!=4&&Da(this))}};function CO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Au:(n=Number(e.substring(n,r)),isNaN(n)?Nf:(r+=1,r+n>e.length?Au:(e=e.substr(r,n),t.C=r+n,e)))}H.cancel=function(){this.I=!0,ai(this)};function Da(t){t.V=Date.now()+t.O,RI(t,t.O)}function RI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_a(Tt(t.gb,t),e)}function Dc(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}H.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(EO(this.j,this.A),this.K!=2&&(oa(),Lt(17)),ai(this),this.o=2,_o(this)):RI(this,this.V-t)};function _o(t){t.l.G==0||t.I||ZI(t.l,t)}function ai(t){Dc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Em(t.T),II(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function $f(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Lf(n.h,t))){if(!t.J&&Lf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ru(n),Lc(n);else break e;Pm(n),Lt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=_a(Tt(n.cb,n),6e3));if(1>=UI(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else li(n,11)}else if((t.J||n.g==t)&&Ru(n),!xu(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let d=i[e];if(n.T=d[0],d=d[1],n.G==2)if(d[0]=="c"){n.I=d[1],n.ka=d[2];const h=d[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const p=d[4];p!=null&&(n.Ca=p,n.j.info("SVER="+n.Ca));const m=d[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const I=t.g;if(I){const C=I.g?I.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var s=r.h;s.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(bm(s,s.h),s.h=null))}if(r.D){const S=I.g?I.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.za=S,Oe(r.F,r.D,S))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=nS(r,r.H?r.ka:null,r.V),o.J){BI(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Dc(a),Da(a)),r.g=o}else XI(r);0<n.i.length&&Fc(n)}else d[0]!="stop"&&d[0]!="close"||li(n,7);else n.G==3&&(d[0]=="stop"||d[0]=="close"?d[0]=="stop"?li(n,7):_m(n):d[0]!="noop"&&n.l&&n.l.wa(d),n.A=0)}}oa(4)}catch{}}function kO(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Cc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function bO(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Cc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function DI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Cc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=bO(t),r=kO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var NI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hi){this.h=e!==void 0?e:t.h,_u(this,t.j),this.s=t.s,this.g=t.g,Pu(this,t.m),this.l=t.l,e=t.i;var n=new aa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),j0(this,n),this.o=t.o}else t&&(n=String(t).match(NI))?(this.h=!!e,_u(this,n[1]||"",!0),this.s=mo(n[2]||""),this.g=mo(n[3]||"",!0),Pu(this,n[4]),this.l=mo(n[5]||"",!0),j0(this,n[6]||"",!0),this.o=mo(n[7]||"")):(this.h=!!e,this.i=new aa(null,this.h))}hi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(go(e,V0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(go(e,V0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(go(n,n.charAt(0)=="/"?_O:AO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",go(n,RO)),t.join("")};function tr(t){return new hi(t)}function _u(t,e,n){t.j=n?mo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function j0(t,e,n){e instanceof aa?(t.i=e,DO(t.i,t.h)):(n||(e=go(e,PO)),t.i=new aa(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function Nc(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function mo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function go(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,TO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function TO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var V0=/[#\/\?@]/g,AO=/[#\?:]/g,_O=/[#\?]/g,PO=/[#\?@]/g,RO=/#/g;function aa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kr(t){t.g||(t.g=new Map,t.h=0,t.i&&xO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}H=aa.prototype;H.add=function(t,e){Kr(this),this.i=null,t=js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function OI(t,e){Kr(t),e=js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $I(t,e){return Kr(t),e=js(t,e),t.g.has(e)}H.forEach=function(t,e){Kr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};H.oa=function(){Kr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};H.W=function(t){Kr(this);let e=[];if(typeof t=="string")$I(this,t)&&(e=e.concat(this.g.get(js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};H.set=function(t,e){return Kr(this),this.i=null,t=js(this,t),$I(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};H.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function LI(t,e,n){OI(t,e),0<n.length&&(t.i=null,t.g.set(js(t,e),hm(n)),t.h+=n.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function DO(t,e){e&&!t.j&&(Kr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(OI(this,r),LI(this,i,n))},t)),t.j=e}var NO=class{constructor(e,n){this.h=e,this.g=n}};function FI(t){this.l=t||OO,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ga&&ie.g.Ga()&&ie.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var OO=10;function MI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function UI(t){return t.h?1:t.g?t.g.size:0}function Lf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bm(t,e){t.g?t.g.add(e):t.h=e}function BI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}FI.prototype.cancel=function(){if(this.i=zI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hm(t.i)}function xm(){}xm.prototype.stringify=function(t){return ie.JSON.stringify(t,void 0)};xm.prototype.parse=function(t){return ie.JSON.parse(t,void 0)};function $O(){this.g=new xm}function LO(t,e,n){const r=n||"";try{DI(t,function(i,s){let o=i;Ta(i)&&(o=wm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function FO(t,e){const n=new Ac;if(ie.Image){const r=new Image;r.onload=gl(vl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gl(vl,n,r,"TestLoadImage: error",!1,e),r.onabort=gl(vl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gl(vl,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Na(t){this.l=t.ac||null,this.j=t.jb||!1}vt(Na,Sm);Na.prototype.g=function(){return new Oc(this.l,this.j)};Na.prototype.i=function(t){return function(){return t}}({});function Oc(t,e){lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Tm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vt(Oc,lt);var Tm=0;H=Oc.prototype;H.open=function(t,e){if(this.readyState!=Tm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,la(this)};H.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ie).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oa(this)),this.readyState=Tm};H.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,la(this)),this.g&&(this.readyState=3,la(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jI(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function jI(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}H.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Oa(this):la(this),this.readyState==3&&jI(this)}};H.Va=function(t){this.g&&(this.response=this.responseText=t,Oa(this))};H.Ua=function(t){this.g&&(this.response=t,Oa(this))};H.ga=function(){this.g&&Oa(this)};function Oa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,la(t)}H.setRequestHeader=function(t,e){this.v.append(t,e)};H.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function la(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Oc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var MO=ie.JSON.parse;function Ve(t){lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=VI,this.K=this.L=!1}vt(Ve,lt);var VI="",UO=/^https?$/i,BO=["POST","PUT"];H=Ve.prototype;H.Ka=function(t){this.L=t};H.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Df.g(),this.C=this.u?z0(this.u):z0(Df),this.g.onreadystatechange=Tt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){H0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=sI(BO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qI(this),0<this.B&&((this.K=zO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.qa,this)):this.A=Im(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){H0(this,s)}};function zO(t){return Ts&&iO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}H.qa=function(){typeof dm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))};function H0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,HI(t),$c(t)}function HI(t){t.D||(t.D=!0,mt(t,"complete"),mt(t,"error"))}H.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,mt(this,"complete"),mt(this,"abort"),$c(this))};H.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$c(this,!0)),Ve.X.M.call(this)};H.Ha=function(){this.s||(this.F||this.v||this.l?WI(this):this.fb())};H.fb=function(){WI(this)};function WI(t){if(t.h&&typeof dm<"u"&&(!t.C[1]||Kn(t)!=4||t.aa()!=2)){if(t.v&&Kn(t)==4)Im(t.Ha,0,t);else if(mt(t,"readystatechange"),Kn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(NI)[1]||null;if(!i&&ie.self&&ie.self.location){var s=ie.self.location.protocol;i=s.substr(0,s.length-1)}r=!UO.test(i?i.toLowerCase():"")}n=r}if(n)mt(t,"complete"),mt(t,"success");else{t.m=6;try{var o=2<Kn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",HI(t)}}finally{$c(t)}}}}function $c(t,e){if(t.g){qI(t);const n=t.g,r=t.C[0]?bu:null;t.g=null,t.C=null,e||mt(t,"ready");try{n.onreadystatechange=r}catch{}}}function qI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}function Kn(t){return t.g?t.g.readyState:0}H.aa=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}};H.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};H.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),MO(e)}};function W0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case VI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}H.Ea=function(){return this.m};H.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function KI(t){let e="";return pm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Am(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=KI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function ao(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function GI(t){this.Ca=0,this.i=[],this.j=new Ac,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ao("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ao("baseRetryDelayMs",5e3,t),this.bb=ao("retryDelaySeedMs",1e4,t),this.$a=ao("forwardChannelMaxRetries",2,t),this.ta=ao("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new FI(t&&t.concurrentRequestLimit),this.Fa=new $O,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}H=GI.prototype;H.ma=8;H.G=1;function _m(t){if(QI(t),t.G==3){var e=t.U++,n=tr(t.F);Oe(n,"SID",t.I),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),$a(t,n),e=new Ra(t,t.j,e,void 0),e.K=2,e.v=Nc(tr(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon&&(n=ie.navigator.sendBeacon(e.v.toString(),"")),!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=rS(e.l,null),e.g.da(e.v)),e.F=Date.now(),Da(e)}tS(t)}function Lc(t){t.g&&(Rm(t),t.g.cancel(),t.g=null)}function QI(t){Lc(t),t.u&&(ie.clearTimeout(t.u),t.u=null),Ru(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function Fc(t){MI(t.h)||t.m||(t.m=!0,yI(t.Ja,t),t.C=0)}function jO(t,e){return UI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=_a(Tt(t.Ja,t,e),eS(t,t.C)),t.C++,!0)}H.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ra(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=uI(s),cI(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=YI(this,i,e),n=tr(this.F),Oe(n,"RID",t),Oe(n,"CVER",22),this.D&&Oe(n,"X-HTTP-Session-Id",this.D),$a(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(KI(s)))+"&"+e:this.o&&Am(n,this.o,s)),bm(this.h,i),this.Ya&&Oe(n,"TYPE","init"),this.O?(Oe(n,"$req",e),Oe(n,"SID","null"),i.Z=!0,Of(i,n,null)):Of(i,n,e),this.G=2}}else this.G==3&&(t?q0(this,t):this.i.length==0||MI(this.h)||q0(this))};function q0(t,e){var n;e?n=e.m:n=t.U++;const r=tr(t.F);Oe(r,"SID",t.I),Oe(r,"RID",n),Oe(r,"AID",t.T),$a(t,r),t.o&&t.s&&Am(r,t.o,t.s),n=new Ra(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=YI(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),bm(t.h,n),Of(n,r,e)}function $a(t,e){t.ia&&pm(t.ia,function(n,r){Oe(e,r,n)}),t.l&&DI({},function(n,r){Oe(e,r,n)})}function YI(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Tt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let d=i[l].h;const h=i[l].g;if(d-=s,0>d)s=Math.max(0,i[l].h-100),a=!1;else try{LO(h,o,"req"+d+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function XI(t){t.g||t.u||(t.Z=1,yI(t.Ia,t),t.A=0)}function Pm(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=_a(Tt(t.Ia,t),eS(t,t.A)),t.A++,!0)}H.Ia=function(){if(this.u=null,JI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=_a(Tt(this.eb,this),t)}};H.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Lt(10),Lc(this),JI(this))};function Rm(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function JI(t){t.g=new Ra(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=tr(t.sa);Oe(e,"RID","rpc"),Oe(e,"SID",t.I),Oe(e,"CI",t.L?"0":"1"),Oe(e,"AID",t.T),Oe(e,"TYPE","xmlhttp"),$a(t,e),t.o&&t.s&&Am(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Nc(tr(e)),n.s=null,n.P=!0,AI(n,t)}H.cb=function(){this.v!=null&&(this.v=null,Lc(this),Pm(this),Lt(19))};function Ru(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function ZI(t,e){var n=null;if(t.g==e){Ru(t),Rm(t),t.g=null;var r=2}else if(Lf(t.h,e))n=e.D,BI(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=_c(),mt(r,new kI(r,n)),Fc(t)}else XI(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&jO(t,e)||r==2&&Pm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:li(t,5);break;case 4:li(t,10);break;case 3:li(t,6);break;default:li(t,2)}}}function eS(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function li(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Tt(t.kb,t);n||(n=new hi("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||_u(n,"https"),Nc(n)),FO(n.toString(),r)}else Lt(2);t.G=0,t.l&&t.l.va(e),tS(t),QI(t)}H.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function tS(t){if(t.G=0,t.la=[],t.l){const e=zI(t.h);(e.length!=0||t.i.length!=0)&&($0(t.la,e),$0(t.la,t.i),t.h.i.length=0,hm(t.i),t.i.length=0),t.l.ua()}}function nS(t,e,n){var r=n instanceof hi?tr(n):new hi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Pu(r,r.m);else{var i=ie.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new hi(null,void 0);r&&_u(s,r),e&&(s.g=e),i&&Pu(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Oe(r,n,e),Oe(r,"VER",t.ma),$a(t,r),r}function rS(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ve(new Na({jb:!0})):new Ve(t.ra),e.Ka(t.H),e}function iS(){}H=iS.prototype;H.xa=function(){};H.wa=function(){};H.va=function(){};H.ua=function(){};H.Ra=function(){};function Du(){if(Ts&&!(10<=Number(sO)))throw Error("Environmental error: no available transport.")}Du.prototype.g=function(t,e){return new Zt(t,e)};function Zt(t,e){lt.call(this),this.g=new GI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!xu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vs(this)}vt(Zt,lt);Zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Lt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=nS(t,null,t.V),Fc(t)};Zt.prototype.close=function(){_m(this.g)};Zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wm(t),t=n);e.i.push(new NO(e.ab++,t)),e.G==3&&Fc(e)};Zt.prototype.M=function(){this.g.l=null,delete this.j,_m(this.g),delete this.g,Zt.X.M.call(this)};function sS(t){Cm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}vt(sS,Cm);function oS(){km.call(this),this.status=1}vt(oS,km);function Vs(t){this.g=t}vt(Vs,iS);Vs.prototype.xa=function(){mt(this.g,"a")};Vs.prototype.wa=function(t){mt(this.g,new sS(t))};Vs.prototype.va=function(t){mt(this.g,new oS)};Vs.prototype.ua=function(){mt(this.g,"b")};Du.prototype.createWebChannel=Du.prototype.g;Zt.prototype.send=Zt.prototype.u;Zt.prototype.open=Zt.prototype.m;Zt.prototype.close=Zt.prototype.close;Pc.NO_ERROR=0;Pc.TIMEOUT=8;Pc.HTTP_ERROR=6;bI.COMPLETE="complete";xI.EventType=Pa;Pa.OPEN="a";Pa.CLOSE="b";Pa.ERROR="c";Pa.MESSAGE="d";lt.prototype.listen=lt.prototype.N;Ve.prototype.listenOnce=Ve.prototype.O;Ve.prototype.getLastError=Ve.prototype.Oa;Ve.prototype.getLastErrorCode=Ve.prototype.Ea;Ve.prototype.getStatus=Ve.prototype.aa;Ve.prototype.getResponseJson=Ve.prototype.Sa;Ve.prototype.getResponseText=Ve.prototype.fa;Ve.prototype.send=Ve.prototype.da;Ve.prototype.setWithCredentials=Ve.prototype.Ka;var VO=function(){return new Du},HO=function(){return _c()},oh=Pc,WO=bI,qO=Ni,K0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},KO=Na,wl=xI,GO=Ve;const G0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Ec("@firebase/firestore");function Q0(){return Ci.logLevel}function W(t,...e){if(Ci.logLevel<=Ie.DEBUG){const n=e.map(Dm);Ci.debug(`Firestore (${Hs}): ${t}`,...n)}}function nr(t,...e){if(Ci.logLevel<=Ie.ERROR){const n=e.map(Dm);Ci.error(`Firestore (${Hs}): ${t}`,...n)}}function Nu(t,...e){if(Ci.logLevel<=Ie.WARN){const n=e.map(Dm);Ci.warn(`Firestore (${Hs}): ${t}`,...n)}}function Dm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw nr(e),new Error(e)}function Re(t,e){t||re()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class YO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XO{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $r,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new aS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new Ct(e)}}class JO{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ZO{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new JO(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class e${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t${constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.T=n.token,new e$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=n$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new tt(0,0))}static max(){return new se(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ua.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ua?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends ua{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const r$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends ua{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return r$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Z(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Z(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Z(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y($e.fromString(e))}static fromName(e){return new Y($e.fromString(e).popFirst(5))}static empty(){return new Y($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new $e(e.slice()))}}function i$(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new Ur(i,Y.empty(),e)}function s$(t){return new Ur(t.readTime,t.key,-1)}class Ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ur(se.min(),Y.empty(),-1)}static max(){return new Ur(se.max(),Y.empty(),-1)}}function o$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==a$)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const d=l;n(e[d]).next(h=>{o[d]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Fa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Nm.ct=-1;function Mc(t){return t==null}function Ou(t){return t===0&&1/t==-1/0}function u$(t){return typeof t=="number"&&Number.isInteger(t)&&!Ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ft.RED,this.left=i??ft.EMPTY,this.right=s??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new X0(this.data.getIterator())}getIteratorFrom(e){return new X0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class X0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new En([])}unionWith(e){let n=new nt(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c$ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new c$("Invalid base64 string: "+i):i}}(e);return new Dt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const d$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(Re(!!t),typeof t=="string"){let e=0;const n=d$.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _s(t){return typeof t=="string"?Dt.fromBase64String(t):Dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dS(t){const e=t.mapValue.fields.__previous_value__;return cS(e)?dS(e):e}function ca(t){const e=Br(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h${constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class da{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new da("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof da&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ki(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cS(t)?4:f$(t)?9007199254740991:10:re()}function Bn(t,e){if(t===e)return!0;const n=ki(t);if(n!==ki(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ca(t).isEqual(ca(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Br(r.timestampValue),o=Br(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return _s(r.bytesValue).isEqual(_s(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Qe(r.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(r.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Qe(r.integerValue)===Qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Qe(r.doubleValue),o=Qe(i.doubleValue);return s===o?Ou(s)===Ou(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Y0(s)!==Y0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Bn(s[a],o[a])))return!1;return!0}(t,e);default:return re()}}function ha(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=ki(t),r=ki(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Qe(i.integerValue||i.doubleValue),a=Qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return J0(t.timestampValue,e.timestampValue);case 4:return J0(ca(t),ca(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(i,s){const o=_s(i),a=_s(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const d=Se(o[l],a[l]);if(d!==0)return d}return Se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Se(Qe(i.latitude),Qe(s.latitude));return o!==0?o:Se(Qe(i.longitude),Qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const d=Ps(o[l],a[l]);if(d)return d}return Se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Il.mapValue&&s===Il.mapValue)return 0;if(i===Il.mapValue)return 1;if(s===Il.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},d=Object.keys(l);a.sort(),d.sort();for(let h=0;h<a.length&&h<d.length;++h){const p=Se(a[h],d[h]);if(p!==0)return p;const m=Ps(o[a[h]],l[d[h]]);if(m!==0)return m}return Se(a.length,d.length)}(t.mapValue,e.mapValue);default:throw re()}}function J0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Br(t),r=Br(e),i=Se(n.seconds,r.seconds);return i!==0?i:Se(n.nanos,r.nanos)}function Rs(t){return Ff(t)}function Ff(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Br(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_s(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ff(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ff(r.fields[a])}`;return s+"}"}(t.mapValue):re();var e,n}function Mf(t){return!!t&&"integerValue"in t}function Om(t){return!!t&&"arrayValue"in t}function Z0(t){return!!t&&"nullValue"in t}function ev(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ul(t){return!!t&&"mapValue"in t}function Po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function f$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(n)}setAll(e){let n=xt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Po(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ws(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ln(Po(this.value))}}function hS(t){const e=[];return Ws(t.fields,(n,r)=>{const i=new xt([n]);if(Ul(r)){const s=hS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new En(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,se.min(),se.min(),se.min(),ln.empty(),0)}static newFoundDocument(e,n,r,i){return new bt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new bt(e,2,n,se.min(),se.min(),ln.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,se.min(),se.min(),ln.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.position=e,this.inclusive=n}}function tv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Ps(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function nv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n="asc"){this.field=e,this.dir=n}}function p$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{}class Ze extends fS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new g$(e,n,r):n==="array-contains"?new w$(e,r):n==="in"?new E$(e,r):n==="not-in"?new I$(e,r):n==="array-contains-any"?new S$(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new y$(e,r):new v$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&ki(this.value)===ki(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class zn extends fS{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new zn(e,n)}matches(e){return pS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function pS(t){return t.op==="and"}function mS(t){return m$(t)&&pS(t)}function m$(t){for(const e of t.filters)if(e instanceof zn)return!1;return!0}function Uf(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(mS(t))return t.filters.map(e=>Uf(e)).join(",");{const e=t.filters.map(n=>Uf(n)).join(",");return`${t.op}(${e})`}}function gS(t,e){return t instanceof Ze?function(n,r){return r instanceof Ze&&n.op===r.op&&n.field.isEqual(r.field)&&Bn(n.value,r.value)}(t,e):t instanceof zn?function(n,r){return r instanceof zn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&gS(s,r.filters[o]),!0):!1}(t,e):void re()}function yS(t){return t instanceof Ze?function(e){return`${e.field.canonicalString()} ${e.op} ${Rs(e.value)}`}(t):t instanceof zn?function(e){return e.op.toString()+" {"+e.getFilters().map(yS).join(" ,")+"}"}(t):"Filter"}class g$ extends Ze{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class y$ extends Ze{constructor(e,n){super(e,"in",n),this.keys=vS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class v$ extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=vS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class w$ extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Om(n)&&ha(n.arrayValue,this.value)}}class E$ extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ha(this.value.arrayValue,n)}}class I$ extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ha(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ha(this.value.arrayValue,n)}}class S$ extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Om(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ha(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function rv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new C$(t,e,n,r,i,s,o)}function $m(t){const e=oe(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Rs(r)).join(",")),e.ft=n}return e.ft}function Lm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!p$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nv(t.startAt,e.startAt)&&nv(t.endAt,e.endAt)}function Bf(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function k$(t,e,n,r,i,s,o,a){return new Uc(t,e,n,r,i,s,o,a)}function wS(t){return new Uc(t)}function iv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function b$(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function x$(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function T$(t){return t.collectionGroup!==null}function ps(t){const e=oe(t);if(e.dt===null){e.dt=[];const n=x$(e),r=b$(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ro(n)),e.dt.push(new Ro(xt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ro(xt.keyField(),s))}}}return e.dt}function rr(t){const e=oe(t);if(!e.wt)if(e.limitType==="F")e.wt=rv(e.path,e.collectionGroup,ps(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ps(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ro(s.field,o))}const r=e.endAt?new $u(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new $u(e.startAt.position,e.startAt.inclusive):null;e.wt=rv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function zf(t,e,n){return new Uc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bc(t,e){return Lm(rr(t),rr(e))&&t.limitType===e.limitType}function ES(t){return`${$m(rr(t))}|lt:${t.limitType}`}function jf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>yS(r)).join(", ")}]`),Mc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Rs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Rs(r)).join(",")),`Target(${n})`}(rr(t))}; limitType=${t.limitType})`}function zc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ps(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=tv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ps(n),r)||n.endAt&&!function(i,s,o){const a=tv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ps(n),r))}(t,e)}function A$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function IS(t){return(e,n)=>{let r=!1;for(const i of ps(t)){const s=_$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _$(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ps(a,l):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P$=new rt(Y.comparator);function ir(){return P$}const SS=new rt(Y.comparator);function yo(...t){let e=SS;for(const n of t)e=e.insert(n.key,n);return e}function CS(t){let e=SS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ui(){return Do()}function kS(){return Do()}function Do(){return new qs(t=>t.toString(),(t,e)=>t.isEqual(e))}const R$=new rt(Y.comparator),D$=new nt(Y.comparator);function fe(...t){let e=D$;for(const n of t)e=e.add(n);return e}const N$=new nt(Se);function bS(){return N$}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ou(e)?"-0":e}}function TS(t){return{integerValue:""+t}}function O$(t,e){return u$(e)?TS(e):xS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this._=void 0}}function $$(t,e,n){return t instanceof Lu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof fa?_S(t,e):t instanceof pa?PS(t,e):function(r,i){const s=AS(r,i),o=sv(s)+sv(r._t);return Mf(s)&&Mf(r._t)?TS(o):xS(r.serializer,o)}(t,e)}function L$(t,e,n){return t instanceof fa?_S(t,e):t instanceof pa?PS(t,e):n}function AS(t,e){return t instanceof Fu?Mf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Lu extends jc{}class fa extends jc{constructor(e){super(),this.elements=e}}function _S(t,e){const n=RS(e);for(const r of t.elements)n.some(i=>Bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class pa extends jc{constructor(e){super(),this.elements=e}}function PS(t,e){let n=RS(e);for(const r of t.elements)n=n.filter(i=>!Bn(i,r));return{arrayValue:{values:n}}}class Fu extends jc{constructor(e,n){super(),this.serializer=e,this._t=n}}function sv(t){return Qe(t.integerValue||t.doubleValue)}function RS(t){return Om(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function F$(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof fa&&r instanceof fa||n instanceof pa&&r instanceof pa?As(n.elements,r.elements,Bn):n instanceof Fu&&r instanceof Fu?Bn(n._t,r._t):n instanceof Lu&&r instanceof Lu}(t.transform,e.transform)}class M${constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vc{}function DS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fm(t.key,Cn.none()):new Ma(t.key,t.data,Cn.none());{const n=t.data,r=ln.empty();let i=new nt(xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Oi(t.key,r,new En(i.toArray()),Cn.none())}}function U$(t,e,n){t instanceof Ma?function(r,i,s){const o=r.value.clone(),a=av(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Oi?function(r,i,s){if(!Bl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=av(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(NS(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function No(t,e,n,r){return t instanceof Ma?function(i,s,o,a){if(!Bl(i.precondition,s))return o;const l=i.value.clone(),d=lv(i.fieldTransforms,a,s);return l.setAll(d),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Oi?function(i,s,o,a){if(!Bl(i.precondition,s))return o;const l=lv(i.fieldTransforms,a,s),d=s.data;return d.setAll(NS(i)),d.setAll(l),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,s,o){return Bl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function B$(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=AS(r.transform,i||null);s!=null&&(n===null&&(n=ln.empty()),n.set(r.field,s))}return n||null}function ov(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&As(n,r,(i,s)=>F$(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ma extends Vc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Oi extends Vc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function NS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function av(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,L$(o,a,n[i]))}return r}function lv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$$(s,o,e))}return r}class Fm extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z$ extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j${constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&U$(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=DS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>ov(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>ov(n,r))}}class Mm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length);let i=R$;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Mm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H${constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,ye;function W$(t){switch(t){default:return re();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function OS(t){if(t===void 0)return nr("GRPC error has no .code"),R.UNKNOWN;switch(t){case Ge.OK:return R.OK;case Ge.CANCELLED:return R.CANCELLED;case Ge.UNKNOWN:return R.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return R.INTERNAL;case Ge.UNAVAILABLE:return R.UNAVAILABLE;case Ge.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Ge.NOT_FOUND:return R.NOT_FOUND;case Ge.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Ge.ABORTED:return R.ABORTED;case Ge.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Ge.DATA_LOSS:return R.DATA_LOSS;default:return re()}}(ye=Ge||(Ge={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Sl}static getOrCreateInstance(){return Sl===null&&(Sl=new Um),Sl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Sl=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hc(se.min(),i,bS(),ir(),fe())}}class Ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ua(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class $S{constructor(e,n){this.targetId=e,this.Et=n}}class LS{constructor(e,n,r=Dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class uv{constructor(){this.At=0,this.Rt=dv(),this.vt=Dt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=fe(),n=fe(),r=fe();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new Ua(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=dv()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class q${constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=ir(),this.qt=cv(),this.Ut=new nt(Se)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(Bf(o))if(i===0){const a=new Y(o.path);this.Qt(r,a,bt.newNoDocument(a,se.min()))}else Re(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=Um.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Bf(a.target)){const l=new Y(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,bt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=fe();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const d=this.Yt(l);return!d||d.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Hc(e,n,this.Ut,this.Lt,r);return this.Lt=ir(),this.qt=cv(),this.Ut=new nt(Se),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new uv,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new nt(Se),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new uv),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function cv(){return new rt(Y.comparator)}function dv(){return new rt(Y.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),G$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Q$=(()=>({and:"AND",or:"OR"}))();class Y${constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function X$(t,e){return Mu(t,e.toTimestamp())}function Ln(t){return Re(!!t),se.fromTimestamp(function(e){const n=Br(e);return new tt(n.seconds,n.nanos)}(t))}function Bm(t,e){return function(n){return new $e(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function MS(t){const e=$e.fromString(t);return Re(jS(e)),e}function Vf(t,e){return Bm(t.databaseId,e.path)}function ah(t,e){const n=MS(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(US(n))}function Hf(t,e){return Bm(t.databaseId,e)}function J$(t){const e=MS(t);return e.length===4?$e.emptyPath():US(e)}function Wf(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function US(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hv(t,e,n){return{name:Vf(t,e),fields:n.value.mapValue.fields}}function Z$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,d){return l.useProto3Json?(Re(d===void 0||typeof d=="string"),Dt.fromBase64String(d||"")):(Re(d===void 0||d instanceof Uint8Array),Dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const d=l.code===void 0?R.UNKNOWN:OS(l.code);return new Z(d,l.message||"")}(o);n=new LS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ah(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):se.min(),a=new ln({mapValue:{fields:r.document.fields}}),l=bt.newFoundDocument(i,s,o,a),d=r.targetIds||[],h=r.removedTargetIds||[];n=new zl(d,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ah(t,r.document),s=r.readTime?Ln(r.readTime):se.min(),o=bt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new zl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ah(t,r.document),s=r.removedTargetIds||[];n=new zl([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new H$(i),o=r.targetId;n=new $S(o,s)}}return n}function eL(t,e){let n;if(e instanceof Ma)n={update:hv(t,e.key,e.value)};else if(e instanceof Fm)n={delete:Vf(t,e.key)};else if(e instanceof Oi)n={update:hv(t,e.key,e.data),updateMask:uL(e.fieldMask)};else{if(!(e instanceof z$))return re();n={verify:Vf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Lu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fa)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof pa)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Fu)return{fieldPath:s.field.canonicalString(),increment:o._t};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:X$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function tL(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ln(r.updateTime):Ln(i);return s.isEqual(se.min())&&(s=Ln(i)),new M$(s,r.transformResults||[])}(n,e))):[]}function nL(t,e){return{documents:[Hf(t,e.path)]}}function rL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Hf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return zS(zn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(d=>function(h){return{field:Wi(h.field),direction:oL(h.dir)}}(d))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,d){return l.useProto3Json||Mc(d)?d:{value:d}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function iL(t){let e=J$(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(h){const p=BS(h);return p instanceof zn&&mS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(p){return new Ro(qi(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(h)));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Mc(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(h){const p=!!h.before,m=h.values||[];return new $u(m,p)}(n.startAt));let d=null;return n.endAt&&(d=function(h){const p=!h.before,m=h.values||[];return new $u(m,p)}(n.endAt)),k$(e,i,o,s,a,"F",l,d)}function sL(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return re()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function BS(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=qi(e.unaryFilter.field);return Ze.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=qi(e.unaryFilter.field);return Ze.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qi(e.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=qi(e.unaryFilter.field);return Ze.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(e){return Ze.create(qi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return zn.create(e.compositeFilter.filters.map(n=>BS(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return re()}}(e.compositeFilter.op))}(t):re()}function oL(t){return K$[t]}function aL(t){return G$[t]}function lL(t){return Q$[t]}function Wi(t){return{fieldPath:t.canonicalString()}}function qi(t){return xt.fromServerFormat(t.fieldPath)}function zS(t){return t instanceof Ze?function(e){if(e.op==="=="){if(ev(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NAN"}};if(Z0(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ev(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NOT_NAN"}};if(Z0(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wi(e.field),op:aL(e.op),value:e.value}}}(t):t instanceof zn?function(e){const n=e.getFilters().map(r=>zS(r));return n.length===1?n[0]:{compositeFilter:{op:lL(e.op),filters:n}}}(t):re()}function uL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r,i,s=se.min(),o=se.min(),a=Dt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new fi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.se=e}}function dL(t){const e=iL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(){this.He=new fL}addToCollectionParentIndex(e,n){return this.He.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Ur.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Ur.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class fL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new nt($e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new nt($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Ds(0)}static bn(){return new Ds(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(){this.changes=new qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&No(r.mutation,i,En.empty(),tt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=yo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ui();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ir();const o=Do(),a=Do();return n.forEach((l,d)=>{const h=r.get(d.key);i.has(d.key)&&(h===void 0||h.mutation instanceof Oi)?s=s.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),No(h.mutation,d,h.mutation.getFieldMask(),tt.now())):o.set(d.key,En.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,h)=>o.set(d,h)),n.forEach((d,h)=>{var p;return a.set(d,new mL(h,(p=o.get(d))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Do();let i=new rt((o,a)=>o-a),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let h=r.get(l)||En.empty();h=a.applyToLocalView(d,h),r.set(l,h);const p=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),d=l.key,h=l.value,p=kS();h.forEach(m=>{if(!s.has(m)){const I=DS(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Y.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):T$(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(ui());let a=-1,l=s;return o.next(d=>N.forEach(d,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?N.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,fe())).next(h=>({batchId:a,changes:CS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=yo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=yo();return this.indexManager.getCollectionParents(e,i).next(o=>N.forEach(o,a=>{const l=function(d,h){return new Uc(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(d=>{d.forEach((h,p)=>{s=s.insert(h,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const d=l.getKey();s.get(d)===null&&(s=s.insert(d,bt.newInvalidDocument(d)))});let o=yo();return s.forEach((a,l)=>{const d=i.get(a);d!==void 0&&No(d.mutation,l,En.empty(),tt.now()),zc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return N.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ln(r.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:dL(r.bundledQuery),readTime:Ln(r.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(){this.overlays=new rt(Y.comparator),this.ts=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ui();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=ui(),s=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new rt((d,h)=>d-h);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let h=s.get(d.largestBatchId);h===null&&(h=ui(),s=s.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const a=ui(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,h)=>a.set(d,h)),!(a.size()>=i)););return N.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new V$(n,r));let s=this.ts.get(n);s===void 0&&(s=fe(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.es=new nt(st.ns),this.ss=new nt(st.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new st(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new st(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new Y(new $e([])),r=new st(n,e),i=new st(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new Y(new $e([])),r=new st(n,e),i=new st(n,e+1);let s=fe();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new st(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return Y.comparator(e.key,n.key)||Se(e.ds,n.ds)}static rs(e,n){return Se(e.ds,n.ds)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new nt(st.ns)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new j$(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(Se);return n.forEach(i=>{const s=new st(i,0),o=new st(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),N.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new st(new Y(s),0);let a=new nt(Se);return this._s.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(l.ds)),!0)},o),N.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return N.forEach(n.mutations,i=>{const s=new st(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new st(n,0),i=this._s.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e){this.Ts=e,this.docs=new rt(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=ir();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():bt.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ir();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:d,value:{document:h}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||o$(s$(h),r)<=0||(i.has(h.key)||zc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Es(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new IL(this)}getSize(e){return N.resolve(this.size)}}class IL extends pL{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e){this.persistence=e,this.As=new qs(n=>$m(n),Lm),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Rs=0,this.vs=new zm,this.targetCount=0,this.bs=Ds.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),N.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Sn(n),N.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Nm(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new SL(this),this.indexManager=new hL,this.remoteDocumentCache=function(r){return new EL(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new cL(n),this.xs=new yL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new wL(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new kL(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return N.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class kL extends l${constructor(e){super(),this.currentSequenceNumber=e}}class jm{constructor(e){this.persistence=e,this.$s=new zm,this.Ms=null}static Fs(e){return new jm(e)}get Bs(){if(this.Ms)return this.Ms;throw re()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),N.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Bs,r=>{const i=Y.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return N.or([()=>N.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(iv(n))return N.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zf(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.$i(n,a);return this.Mi(n,d,o,l.readTime)?this.Ni(e,zf(n,null,"F")):this.Fi(e,d,n,l)}))})))}ki(e,n,r,i){return iv(n)||i.isEqual(se.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(Q0()<=Ie.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),jf(n)),this.Fi(e,o,n,i$(i,-1)))})}$i(e,n){let r=new nt(IS(e));return n.forEach((i,s)=>{zc(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Q0()<=Ie.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",jf(n)),this.xi.getDocumentsMatchingQuery(e,n,Ur.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new rt(Se),this.qi=new qs(s=>$m(s),Lm),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gL(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function TL(t,e,n,r){return new xL(t,e,n,r)}async function VS(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=fe();for(const d of i){o.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}for(const d of s){a.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(d=>({Qi:d,removedBatchIds:o,addedBatchIds:a}))})})}function AL(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,d){const h=l.batch,p=h.keys();let m=N.resolve();return p.forEach(I=>{m=m.next(()=>d.getEntry(a,I)).next(C=>{const S=l.docVersions.get(I);Re(S!==null),C.version.compareTo(S)<0&&(h.applyToRemoteDocument(C,l),C.isValidDocument()&&(C.setReadTime(l.commitVersion),d.addEntry(C)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=fe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function HS(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function _L(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;a.push(n.Ds.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Ds.addMatchingKeys(s,h.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(p)?I=I.withResumeToken(Dt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):h.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(h.resumeToken,r)),i=i.insert(p,I),function(C,S,T){return C.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,I,h)&&a.push(n.Ds.updateTargetData(s,I))});let l=ir(),d=fe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(PL(s,o,e.documentUpdates).next(h=>{l=h.zi,d=h.ji})),!r.isEqual(se.min())){const h=n.Ds.getLastRemoteSnapshotVersion(s).next(p=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(n.Li=i,s))}function PL(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ir();return n.forEach((a,l)=>{const d=s.get(a);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",l.version)}),{zi:o,ji:i}})}function RL(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DL(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new fi(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function qf(t,e,n){const r=oe(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fa(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function fv(t,e,n){const r=oe(t);let i=se.min(),s=fe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,d){const h=oe(a),p=h.qi.get(d);return p!==void 0?N.resolve(h.Li.get(p)):h.Ds.getTargetData(l,d)}(r,o,rr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:fe())).next(a=>(NL(r,A$(e),a),{documents:a,Wi:s})))}function NL(t,e,n){let r=t.Ui.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class pv{constructor(){this.activeTargetIds=bS()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OL{constructor(){this.Br=new pv,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new pv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl=null;function lh(){return Cl===null?Cl=268435456+Math.round(2147483648*Math.random()):Cl++,"0x"+Cl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class ML extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=lh(),a=this.ao(e,n);W("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(d=>(W("RestConnection",`Received RPC '${e}' ${o}: `,d),d),d=>{throw Nu("RestConnection",`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",r),d})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=LL[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=lh();return new Promise((o,a)=>{const l=new GO;l.setWithCredentials(!0),l.listenOnce(WO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case oh.NO_ERROR:const h=l.getResponseJson();W(St,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case oh.TIMEOUT:W(St,`RPC '${e}' ${s} timed out`),a(new Z(R.DEADLINE_EXCEEDED,"Request time out"));break;case oh.HTTP_ERROR:const p=l.getStatus();if(W(St,`RPC '${e}' ${s} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const C=function(S){const T=S.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(T)>=0?T:R.UNKNOWN}(I.status);a(new Z(C,I.message))}else a(new Z(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Z(R.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{W(St,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);W(St,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",d,r,15)})}wo(e,n,r){const i=lh(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=VO(),a=HO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new KO({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");W(St,`Creating RPC '${e}' stream ${i}: ${d}`,l);const h=o.createWebChannel(d,l);let p=!1,m=!1;const I=new FL({Wr:S=>{m?W(St,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(p||(W(St,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),W(St,`RPC '${e}' stream ${i} sending:`,S),h.send(S))},Hr:()=>h.close()}),C=(S,T,w)=>{S.listen(T,g=>{try{w(g)}catch(E){setTimeout(()=>{throw E},0)}})};return C(h,wl.EventType.OPEN,()=>{m||W(St,`RPC '${e}' stream ${i} transport opened.`)}),C(h,wl.EventType.CLOSE,()=>{m||(m=!0,W(St,`RPC '${e}' stream ${i} transport closed`),I.so())}),C(h,wl.EventType.ERROR,S=>{m||(m=!0,Nu(St,`RPC '${e}' stream ${i} transport errored:`,S),I.so(new Z(R.UNAVAILABLE,"The operation could not be completed")))}),C(h,wl.EventType.MESSAGE,S=>{var T;if(!m){const w=S.data[0];Re(!!w);const g=w,E=g.error||((T=g[0])===null||T===void 0?void 0:T.error);if(E){W(St,`RPC '${e}' stream ${i} received error:`,E);const b=E.status;let A=function(U){const B=Ge[U];if(B!==void 0)return OS(B)}(b),P=E.message;A===void 0&&(A=R.INTERNAL,P="Unknown error status: "+b+" with message "+E.message),m=!0,I.so(new Z(A,P)),h.close()}else W(St,`RPC '${e}' stream ${i} received:`,w),I.io(w)}}),C(a,qO.STAT_EVENT,S=>{S.stat===K0.PROXY?W(St,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===K0.NOPROXY&&W(St,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.no()},0),I}}function uh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t){return new Y$(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new WS(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(nr(n.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new Z(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UL extends qS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=Z$(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?se.min():s.readTime?Ln(s.readTime):se.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=Wf(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=Bf(a)?{documents:nL(i,a)}:{query:rL(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=FS(i,s.resumeToken):s.snapshotVersion.compareTo(se.min())>0&&(o.readTime=Mu(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=sL(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Wf(this.serializer),n.removeTarget=e,this.Fo(n)}}class BL extends qS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=tL(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.Zo(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Wf(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>eL(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new Z(R.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(R.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Z(R.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class jL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(nr(n),this.ru=!1):W("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{$i(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=oe(a);l.du.add(4),await Ba(l),l.mu.set("Unknown"),l.du.delete(4),await qc(l)}(this))})}),this.mu=new jL(r,i)}}async function qc(t){if($i(t))for(const e of t.wu)await e(!0)}async function Ba(t){for(const e of t.wu)await e(!1)}function KS(t,e){const n=oe(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),qm(n)?Wm(n):Ks(n).No()&&Hm(n,e))}function GS(t,e){const n=oe(t),r=Ks(n);n.fu.delete(e),r.No()&&QS(n,e),n.fu.size===0&&(r.No()?r.$o():$i(n)&&n.mu.set("Unknown"))}function Hm(t,e){t.gu.Ot(e.targetId),Ks(t).jo(e)}function QS(t,e){t.gu.Ot(e),Ks(t).Wo(e)}function Wm(t){t.gu=new q$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Ks(t).start(),t.mu.ou()}function qm(t){return $i(t)&&!Ks(t).xo()&&t.fu.size>0}function $i(t){return oe(t).du.size===0}function YS(t){t.gu=void 0}async function HL(t){t.fu.forEach((e,n)=>{Hm(t,e)})}async function WL(t,e){YS(t),qm(t)?(t.mu.au(e),Wm(t)):t.mu.set("Unknown")}async function qL(t,e,n){if(t.mu.set("Online"),e instanceof LS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uu(t,r)}else if(e instanceof zl?t.gu.Kt(e):e instanceof $S?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(se.min()))try{const r=await HS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const d=i.fu.get(l);d&&i.fu.set(l,d.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(Dt.EMPTY_BYTE_STRING,l.snapshotVersion)),QS(i,a);const d=new fi(l.target,a,1,l.sequenceNumber);Hm(i,d)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Uu(t,r)}}async function Uu(t,e,n){if(!Fa(e))throw e;t.du.add(1),await Ba(t),t.mu.set("Offline"),n||(n=()=>HS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await qc(t)})}function XS(t,e){return e().catch(n=>Uu(t,n,e))}async function Kc(t){const e=oe(t),n=zr(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;KL(e);)try{const i=await RL(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,GL(e,i)}catch(i){await Uu(e,i)}JS(e)&&ZS(e)}function KL(t){return $i(t)&&t.lu.length<10}function GL(t,e){t.lu.push(e);const n=zr(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function JS(t){return $i(t)&&!zr(t).xo()&&t.lu.length>0}function ZS(t){zr(t).start()}async function QL(t){zr(t).tu()}async function YL(t){const e=zr(t);for(const n of t.lu)e.Yo(n.mutations)}async function XL(t,e,n){const r=t.lu.shift(),i=Mm.from(r,e,n);await XS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kc(t)}async function JL(t,e){e&&zr(t).Jo&&await async function(n,r){if(i=r.code,W$(i)&&i!==R.ABORTED){const s=n.lu.shift();zr(n).Oo(),await XS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Kc(n)}var i}(t,e),JS(t)&&ZS(t)}async function gv(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=$i(n);n.du.add(3),await Ba(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await qc(n)}async function ZL(t,e){const n=oe(t);e?(n.du.delete(2),await qc(n)):e||(n.du.add(2),await Ba(n),n.mu.set("Unknown"))}function Ks(t){return t.yu||(t.yu=function(e,n,r){const i=oe(e);return i.nu(),new UL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:HL.bind(null,t),Zr:WL.bind(null,t),zo:qL.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),qm(t)?Wm(t):t.mu.set("Unknown")):(await t.yu.stop(),YS(t))})),t.yu}function zr(t){return t.pu||(t.pu=function(e,n,r){const i=oe(e);return i.nu(),new BL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:QL.bind(null,t),Zr:JL.bind(null,t),Xo:YL.bind(null,t),Zo:XL.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Kc(t)):(await t.pu.stop(),t.lu.length>0&&(W("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Km(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gm(t,e){if(nr("AsyncQueue",`${e}: ${t}`),Fa(t))return new Z(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=yo(),this.sortedSet=new rt(this.comparator)}static emptySet(e){return new ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(){this.Iu=new rt(Y.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):re():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ns{constructor(e,n,r,i,s,o,a,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ns(e,n,ms.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(){this.Eu=void 0,this.listeners=[]}}class tF{constructor(){this.queries=new qs(e=>ES(e),Bc),this.onlineState="Unknown",this.Au=new Set}}async function nF(t,e){const n=oe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new eF),i)try{s.Eu=await n.onListen(r)}catch(o){const a=Gm(o,`Initialization of query '${jf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Qm(n)}async function rF(t,e){const n=oe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function iF(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Qm(n)}function sF(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Qm(t){t.Au.forEach(e=>{e.next()})}class oF{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.key=e}}class tC{constructor(e){this.key=e}}class aF{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=fe(),this.mutatedKeys=fe(),this.Ku=IS(e),this.Gu=new ms(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new yv,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const m=i.get(h),I=zc(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),S=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let T=!1;m&&I?m.data.isEqual(I.data)?C!==S&&(r.track({type:3,doc:I}),T=!0):this.Wu(m,I)||(r.track({type:2,doc:I}),T=!0,(l&&this.Ku(I,l)>0||d&&this.Ku(I,d)<0)&&(a=!0)):!m&&I?(r.track({type:0,doc:I}),T=!0):m&&!I&&(r.track({type:1,doc:m}),T=!0,(l||d)&&(a=!0)),T&&(I?(o=o.add(I),s=S?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((d,h)=>function(p,m){const I=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return I(p)-I(m)}(d.type,h.type)||this.Ku(d.doc,h.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Ns(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new yv,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=fe(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new tC(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new eC(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=fe();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Ns.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class lF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uF{constructor(e){this.key=e,this.ec=!1}}class cF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new qs(a=>ES(a),Bc),this.ic=new Map,this.rc=new Set,this.oc=new rt(Y.comparator),this.uc=new Map,this.cc=new zm,this.ac={},this.hc=new Map,this.lc=Ds.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function dF(t,e){const n=IF(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await DL(n.localStore,rr(e));n.isPrimaryClient&&KS(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await hF(n,e,r,a==="current",o.resumeToken)}return i}async function hF(t,e,n,r,i){t.dc=(p,m,I)=>async function(C,S,T,w){let g=S.view.zu(T);g.Mi&&(g=await fv(C.localStore,S.query,!1).then(({documents:A})=>S.view.zu(A,g)));const E=w&&w.targetChanges.get(S.targetId),b=S.view.applyChanges(g,C.isPrimaryClient,E);return wv(C,S.targetId,b.Yu),b.snapshot}(t,p,m,I);const s=await fv(t.localStore,e,!0),o=new aF(e,s.Wi),a=o.zu(s.documents),l=Ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(a,t.isPrimaryClient,l);wv(t,n,d.Yu);const h=new lF(e,n,o);return t.sc.set(e,h),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),d.snapshot}async function fF(t,e){const n=oe(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Bc(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),GS(n.remoteStore,r.targetId),Kf(n,r.targetId)}).catch(La)):(Kf(n,r.targetId),await qf(n.localStore,r.targetId,!0))}async function pF(t,e,n){const r=SF(t);try{const i=await function(s,o){const a=oe(s),l=tt.now(),d=o.reduce((m,I)=>m.add(I.key),fe());let h,p;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let I=ir(),C=fe();return a.Ki.getEntries(m,d).next(S=>{I=S,I.forEach((T,w)=>{w.isValidDocument()||(C=C.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,I)).next(S=>{h=S;const T=[];for(const w of o){const g=B$(w,h.get(w.key).overlayedDocument);g!=null&&T.push(new Oi(w.key,g,hS(g.value.mapValue),Cn.exists(!0)))}return a.mutationQueue.addMutationBatch(m,l,T,o)}).next(S=>{p=S;const T=S.applyToLocalDocumentSet(h,C);return a.documentOverlayCache.saveOverlays(m,S.batchId,T)})}).then(()=>({batchId:p.batchId,changes:CS(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new rt(Se)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await za(r,i.changes),await Kc(r.remoteStore)}catch(i){const s=Gm(i,"Failed to persist write");n.reject(s)}}async function nC(t,e){const n=oe(t);try{const r=await _L(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Re(o.ec):i.removedDocuments.size>0&&(Re(o.ec),o.ec=!1))}),await za(n,r,e)}catch(r){await La(r)}}function vv(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=oe(s);a.onlineState=o;let l=!1;a.queries.forEach((d,h)=>{for(const p of h.listeners)p.Ru(o)&&(l=!0)}),l&&Qm(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mF(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new rt(Y.comparator);o=o.insert(s,bt.newNoDocument(s,se.min()));const a=fe().add(s),l=new Hc(se.min(),new Map,new nt(Se),o,a);await nC(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Ym(r)}else await qf(r.localStore,e,!1).then(()=>Kf(r,e,n)).catch(La)}async function gF(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await AL(n.localStore,e);iC(n,r,null),rC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await za(n,i)}catch(i){await La(i)}}async function yF(t,e,n){const r=oe(t);try{const i=await function(s,o){const a=oe(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(Re(h!==null),d=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,d,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>a.localDocuments.getDocuments(l,d))})}(r.localStore,e);iC(r,e,n),rC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await za(r,i)}catch(i){await La(i)}}function rC(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function iC(t,e,n){const r=oe(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Kf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||sC(t,r)})}function sC(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(GS(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Ym(t))}function wv(t,e,n){for(const r of n)r instanceof eC?(t.cc.addReference(r.key,e),vF(t,r)):r instanceof tC?(W("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||sC(t,r.key)):re()}function vF(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(W("SyncEngine","New document in limbo: "+n),t.rc.add(r),Ym(t))}function Ym(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new Y($e.fromString(e)),r=t.lc.next();t.uc.set(r,new uF(n)),t.oc=t.oc.insert(n,r),KS(t.remoteStore,new fi(rr(wS(n.path)),r,2,Nm.ct))}}async function za(t,e,n){const r=oe(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(d=>{if((d||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,d!=null&&d.fromCache?"not-current":"current"),d){i.push(d);const h=Vm.Di(l.targetId,d);s.push(h)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const d=oe(a);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>N.forEach(l,p=>N.forEach(p.Vi,m=>d.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>N.forEach(p.Si,m=>d.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!Fa(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const p=h.targetId;if(!h.fromCache){const m=d.Li.get(p),I=m.snapshotVersion,C=m.withLastLimboFreeSnapshotVersion(I);d.Li=d.Li.insert(p,C)}}}(r.localStore,s))}async function wF(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await VS(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new Z(R.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await za(n,r.Qi)}}function EF(t,e){const n=oe(t),r=n.uc.get(e);if(r&&r.ec)return fe().add(r.key);{let i=fe();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function IF(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mF.bind(null,e),e.nc.zo=iF.bind(null,e.eventManager),e.nc.wc=sF.bind(null,e.eventManager),e}function SF(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yF.bind(null,e),e}class Ev{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return TL(this.persistence,new bL,e.initialUser,this.serializer)}createPersistence(e){return new CL(jm.Fs,this.serializer)}createSharedClientState(e){return new OL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wF.bind(null,this.syncEngine),await ZL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tF}createDatastore(e){const n=Wc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new ML(i));var i;return function(s,o,a,l){return new zL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>vv(this.syncEngine,a,0),o=mv.D()?new mv:new $L,new VL(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,d){const h=new cF(r,i,s,o,a,l);return d&&(h.fc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);W("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Ba(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):nr("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=lS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Z(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ch(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await VS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Iv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TF(t);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>gv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>gv(e.remoteStore,s)),t._onlineComponents=e}function xF(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function TF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await ch(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!xF(n))throw n;Nu("Error using user provided cache. Falling back to memory cache: "+n),await ch(t,new Ev)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await ch(t,new Ev);return t._offlineComponents}async function oC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Iv(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Iv(t,new CF))),t._onlineComponents}function AF(t){return oC(t).then(e=>e.syncEngine)}async function _F(t){const e=await oC(t),n=e.eventManager;return n.onListen=dF.bind(null,e.syncEngine),n.onUnlisten=fF.bind(null,e.syncEngine),n}function PF(t,e,n={}){const r=new $r;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const d=new kF({next:p=>{s.enqueueAndForget(()=>rF(i,h)),p.fromCache&&a.source==="server"?l.reject(new Z(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new oF(o,d,{includeMetadataChanges:!0,xu:!0});return nF(i,h)}(await _F(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t,e,n){if(!n)throw new Z(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RF(t,e,n,r){if(e===!0&&r===!0)throw new Z(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cv(t){if(!Y.isDocumentKey(t))throw new Z(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kv(t){if(Y.isDocumentKey(t))throw new Z(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function bi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xm(t);throw new Z(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,RF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Z(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Z(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new QO;switch(n.type){case"firstParty":return new ZO(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Z(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Sv.get(e);n&&(W("ComponentProvider","Removing Datastore"),Sv.delete(e),n.terminate())}(this),Promise.resolve()}}function DF(t,e,n,r={}){var i;const s=(t=bi(t,Gc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Nu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ct.MOCK_USER;else{o=sR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Z(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ct(l)}t._authCredentials=new YO(new aS(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}}class Qc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qc(this.firestore,e,this._query)}}class Lr extends Qc{constructor(e,n,r){super(e,n,wS(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new Y(e))}withConverter(e){return new Lr(this.firestore,e,this._path)}}function Yc(t,e,...n){if(t=Rt(t),aC("collection","path",e),t instanceof Gc){const r=$e.fromString(e,...n);return kv(r),new Lr(t,null,r)}{if(!(t instanceof hn||t instanceof Lr))throw new Z(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return kv(r),new Lr(t.firestore,null,r)}}function Jm(t,e,...n){if(t=Rt(t),arguments.length===1&&(e=lS.A()),aC("doc","path",e),t instanceof Gc){const r=$e.fromString(e,...n);return Cv(r),new hn(t,null,new Y(r))}{if(!(t instanceof hn||t instanceof Lr))throw new Z(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Cv(r),new hn(t.firestore,t instanceof Lr?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new WS(this,"async_queue_retry"),this.qc=()=>{const n=uh();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=uh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=uh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new $r;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Fa(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw nr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Km.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&re()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class ja extends Gc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new NF,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uC(this),this._firestoreClient.terminate()}}function Li(t,e){const n=typeof t=="object"?t:sm(),r=typeof t=="string"?t:e||"(default)",i=Di(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nR("firestore");s&&DF(i,...s)}return i}function lC(t){return t._firestoreClient||uC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uC(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,d){return new h$(o,a,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new bF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Os(Dt.fromBase64String(e))}catch(n){throw new Z(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Os(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OF=/^__.*__$/;class $F{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Oi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ma(e,this.data,n,this.fieldTransforms)}}function dC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class tg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new tg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Bu(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(dC(this.Yc)&&OF.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class LF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wc(e)}ua(e,n,r,i=!1){return new tg({Yc:e,methodName:n,oa:r,path:xt.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hC(t){const e=t._freezeSettings(),n=Wc(t._databaseId);return new LF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fC(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);yC("Data must be an object, but it was:",o,r);const a=mC(r,o);let l,d;if(s.merge)l=new En(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const m=FF(e,p,n);if(!o.contains(m))throw new Z(R.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);UF(h,m)||h.push(m)}l=new En(h),d=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,d=o.fieldTransforms;return new $F(new ln(a),l,d)}function pC(t,e){if(gC(t=Rt(t)))return yC("Unsupported field value:",e,t),mC(t,e);if(t instanceof cC)return function(n,r){if(!dC(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=pC(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return O$(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=tt.fromDate(n);return{timestampValue:Mu(r.serializer,i)}}if(n instanceof tt){const i=new tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mu(r.serializer,i)}}if(n instanceof eg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Os)return{bytesValue:FS(r.serializer,n._byteString)};if(n instanceof hn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Xm(n)}`)}(t,e)}function mC(t,e){const n={};return uS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(t,(r,i)=>{const s=pC(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function gC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof eg||t instanceof Os||t instanceof hn||t instanceof cC)}function yC(t,e,n){if(!gC(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Xm(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function FF(t,e,n){if((e=Rt(e))instanceof Zm)return e._internalPath;if(typeof e=="string")return vC(t,e);throw Bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const MF=new RegExp("[~\\*/\\[\\]]");function vC(t,e,n){if(e.search(MF)>=0)throw Bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zm(...e.split("."))._internalPath}catch{throw Bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Z(R.INVALID_ARGUMENT,a+t+l)}function UF(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(EC("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BF extends wC{data(){return super.data()}}function EC(t,e){return typeof e=="string"?vC(t,e):e instanceof Zm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zF(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jF{convertValue(e,n="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){const r={};return Ws(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new eg(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dS(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ca(e));default:return null}}convertTimestamp(e){const n=Br(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Re(jS(r));const i=new da(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||nr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VF extends wC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(EC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class jl extends VF{data(e={}){return super.data(e)}}class HF{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new kl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new jl(this._firestore,this._userDataWriter,r.key,r,new kl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new jl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new kl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new jl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new kl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,d=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),d=s.indexOf(o.doc.key)),{type:WF(o.type),doc:a,oldIndex:l,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}class qF extends jF{constructor(e){super(),this.firestore=e}convertBytes(e){return new Os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,n)}}function SC(t){t=bi(t,Qc);const e=bi(t.firestore,ja),n=lC(e),r=new qF(e);return zF(t._query),PF(n,t._query).then(i=>new HF(e,r,t,i))}function KF(t,e,n){t=bi(t,hn);const r=bi(t.firestore,ja),i=IC(t.converter,e,n);return ng(r,[fC(hC(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Cn.none())])}function GF(t){return ng(bi(t.firestore,ja),[new Fm(t._key,Cn.none())])}function CC(t,e){const n=bi(t.firestore,ja),r=Jm(t),i=IC(t.converter,e);return ng(n,[fC(hC(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Cn.exists(!1))]).then(()=>r)}function ng(t,e){return function(n,r){const i=new $r;return n.asyncQueue.enqueueAndForget(async()=>pF(await AF(n),r,i)),i.promise}(lC(t),e)}(function(t,e=!0){(function(n){Hs=n})(xa),Un(new bn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ja(new XO(n.getProvider("auth-internal")),new t$(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Z(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new da(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),dn(G0,"3.10.0",t),dn(G0,"3.10.0","esm2017")})();const QF=Li(mn),rg=async()=>{const t=Yc(QF,"products");return(await SC(t)).docs.map(r=>({id:r.id,name:r.data().name,description:r.data().description,price:r.data().price,img_url:r.data().img_url,category:r.data().category}))},YF=ar`
    0% {
    transform: translateY(100%);
    animation-timing-function: ease-in;
  }
  25% {
    transform: translateY(-10px);
    animation-timing-function: ease-out;
  }
  50% {
    transform: translateY(10px);
    animation-timing-function: ease-in;
  }
  75% {
    transform: translateY(-5px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0);
  }
`,XF=M.div`
    position: relative;
    width: 80%;
    margin: 0 auto;
	padding-bottom: 80px;
    &>h3{
      display: flex;
      gap: 3px;
      width: 90%;
	  margin: 0 auto;
      align-items: center;
      justify-content:flex-start;
        color: #424242;
        font-size: 3.6rem;
    }
	&>hr{
		border-color: #b6b6b627;
		width: 90%;
		margin: 0 auto;
		margin-top: 10px;
	}
    &>div{
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fit,minmax(280px,290px));
        gap: 55px;
        padding: 5px;
        margin: 50px;
        
    }

`,JF=M.div`
    position: fixed;
    bottom: 5px;
    right: 5px;
    
    &>span{
        display:flex;
        justify-content:center;
        align-items:center;
        height:20px;
        width:20px;
        background:#5ea135;
        border-radius:50%;
        position:absolute;
        color:#ffff;
        font-weight:400;
        font-size:1.4rem;
        top:0;
        right:0;
        animation: ${YF} ease 1s;
    }
	&:hover{
		cursor: pointer;
		transform: scale(1.1);
		transition: all .6s;
	}
        
`,ZF=({productsRef:t})=>{var o,a;const e=_.useContext(yt),[n,r]=_.useState({message:"",isError:!1}),i=(l="pizza")=>{let d="";switch(l){case"pizza":d=_P;break;case"bebida":d=RP;break;case"postre":d=PP;break;case"empanada":d=DP;break;default:d=""}return d};_.useEffect(()=>{(async()=>{try{const l=await rg();e==null||e.getProducts(l)}catch{r({message:"ocurrio un error al cargar los productos",isError:!0})}})()},[]);const s=()=>{e==null||e.toggleOrder()};return O(Zv,{children:[O(XF,{ref:t,children:[O("h3",{children:[(o=e==null?void 0:e.state)==null?void 0:o.category.name.toUpperCase()," ",v("img",{src:i((a=e==null?void 0:e.state)==null?void 0:a.category.name),alt:"",width:40})]}),v("hr",{}),O("div",{children:[(e==null?void 0:e.state.products.length)===0&&!n.isError&&v(SE,{}),(e==null?void 0:e.state.products.length)===0&&n.isError&&v("h2",{children:"Ocurrio un error"}),e&&e.state.products.length>0&&e.state.products.filter(l=>l.category===e.state.category.name).map(l=>v(TP,{products:l},l.id)),O(JF,{children:[e&&(e==null?void 0:e.state.cart.length)>0&&v("span",{children:e.state.cart.length}),v("img",{onClick:s,src:AP,alt:""})]})]})]}),(e==null?void 0:e.state)&&(e==null?void 0:e.state.orderIsOpen)&&v(qP,{})]})},eM=M.footer`
  background-color: #dcdcdc;
  padding: 30px;
  text-align: center;
  min-height: 40px;
`,xv=M.p`
  color: #888;
  font-size: 14px;
  margin: 0;
`,tM=M.p`
 
`,nM=()=>O(eM,{children:[v(xv,{children:"© 2023 - Todos los derechos reservados"}),v(xv,{children:"En desarrollo por Julian M."}),v(tM,{children:v("img",{src:nm,alt:"",width:60})})]}),rM="/assets/wave-def1330d.png",iM="/assets/deliveryIcon-fbf367c8.png",sM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACNklEQVR4nO2aPUscURRAFxGRxV8gQSxEQvA3WFlYWIhYiIWISBAJsv9HRFKEICIiIhKCiPgrREIIkiJ1CEEWORZ7r4zD7joz77354N0D02xx557zHlNtq2UYhmEYhmEYRj+A0ap3KAow4jrgA3APLHjaqTSAeeAOeF90wBzwhx7/gEXPOwYDWAD+yu6/gdm8A5Lyyn9gKdDO3gAW5cCSPGSOINc+LZ+MsBzYoTDAkuzYjwdg5q0Bs3JlhvEIrJTklBlgWXYbxi9getCAGamUhUdgtVzFwQArGeSVn8BUesC01MlDF1iryDm5+2oOeeUH8E4HTMkPRegC6xXKr8kORbgHJlvAQcEBlUYA1h3klcMW0AauPETYaJj8LTChA31F2CxBfsOD/M2LfGKwjwhPwFbN5a9Jy3uO0CVABGCTkPKeIzwB2zWTv3pTPkCEjx7kt2WWq3w774snPEXYqYF8tpMfEOHacYFCEYAd3OW/k/fkA0bYbZx8FRGAXdzlL/Eln4rg45uwN+Qdn2opX0YEYK/W8gEidBIzOx7kL4DxoPKJhdv0PjKudORxpTz5ABFcOads+VSEb1HK1yBC9fKKRLgsUf4UGKva+xXAOL2PUWjOaievSITzKOUViXAWQL5+134QwJjnCCeNkVckwmmU8opEOI5SXpEIRwXkjxsvrwCjwNco5RWJ8CVKeUUifI5SXgFGgMM+8kc0+B9puegTIR55RSLsRymvSIQ45Q3DMAzDMAyjWp4BgFkwXRb5ImoAAAAASUVORK5CYII=",oM="/assets/bgBanner-ff3c7828.svg",aM=ar`
    from{
        transform: translateX(-3000px);
    }
    to{
        transform: translateX(0);
    }
`,Gf=ar`
    from{
        transform: translateY(-3000px);
        rotate: calc(90deg);
    }
    to{
        transform: translateY(0);
        rotate: calc(0deg);
    }
`,lM=ar`
    from{
        transform: translateY(5px);
    }
    to{
        transform: translateY(-1px);
    }
`,uM=M.div`
    position: relative;
    width: 100%;
    height: fit-content;
    overflow-x: hidden;
    padding-top: 78px;
    `,cM=M.div`
    display: grid;
    position: relative;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    background: #ffff;
    background: url(${oM}) center/cover no-repeat;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0.5fr 0.3fr;
  }

    &>img{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 140px;
        left: 0;
    }
`,dM=M.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 80px auto;
    width: 80%;
    max-width: 650px;
    gap: 20px;
    z-index: 2;
    color: #5d5d5d;
    padding-top: 80px;
    &>h3{
        text-align: start;
        width: 100%;
        font-size: 6rem;
        margin: 0;
        padding:0;
        color: #FA6241;
        animation: ${Gf} .8s alternate;
    }
    &>small{
        font-size: 2rem;
        font-weight: 600;
        color: #5d5d5d;
        
        text-align: start;
        animation: ${Gf} .8s alternate;
    }
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
    `,hM=M.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 110px;
    height: 40px;
    font-weight: 600;
    font-size: 1.2rem;
    color: #fff;
    background: #FA6241;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(201, 201, 201, 0.25);
    animation: ${Gf} .8s alternate;
    cursor: pointer;
    &>img{
        animation: ${lM} .4s infinite alternate;
    }
`,fM=M.div`
    display: flex;
    padding-top: 80px;
    justify-content: flex-start;
    animation:${aM} 1s alternate;
    &>img{
        width: 100%;
        max-width: 500px;
        max-height: 500px;
        min-width: 200px;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        align-items: flex-start;
        padding-top: 0;
        padding-bottom: 90px;
        &>img{
            width: 300px;
        }
}

`,pM=({productsRef:t})=>v(uM,{children:O(cM,{children:[O(dM,{children:[v("h3",{children:"Pizzeria Don  Remolo"}),O("small",{children:["El sabor que te hace girar la cabeza: ",v("br",{})," ¡Bienvenidos a Don Remolo, la mejor pizzería de la ciudad!"]}),O(hM,{onClick:()=>{t.current!==null&&t.current.scrollIntoView({behavior:"smooth"})},children:["Products ",v("img",{src:sM,alt:"",width:15})]})]}),v(fM,{children:v("img",{src:iM,alt:""})}),v("img",{src:rM,alt:""})]})}),mM=M.div`
	position: relative;
	/* background: #EFEFEF; */
`,gM=()=>{const t=_.useRef(null),e=_.useRef(null);return O(mM,{children:[v(pM,{productsRef:t}),v(SP,{productsRef:t}),v(ZF,{bannerRef:e,productsRef:t}),v(nM,{})]})},yM=()=>(_.useContext(yt),O("div",{children:[v(wP,{}),v(gM,{})]})),kC="/assets/arrow-left-93c183cc.svg";function ig(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vM=bC,xC=new Ri("auth","Firebase",bC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=new Ec("@firebase/auth");function Vl(t,...e){Tv.logLevel<=Ie.ERROR&&Tv.error(`Auth (${xa}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,...e){throw sg(t,...e)}function Fn(t,...e){return sg(t,...e)}function wM(t,e,n){const r=Object.assign(Object.assign({},vM()),{[e]:n});return new Ri("auth","Firebase",r).create(e,{appName:t.name})}function sg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xC.create(t,...e)}function ne(t,e,...n){if(!t)throw sg(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vl(e),new Error(e)}function sr(t,e){t||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=new Map;function Qn(t){sr(t instanceof Function,"Expected a class definition");let e=Av.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Av.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(t,e){const n=Di(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(na(s,e??{}))return i;xn(i,"already-initialized")}return n.initialize({options:e})}function IM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SM(){return _v()==="http:"||_v()==="https:"}function _v(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SM()||AE()||"connection"in navigator)?navigator.onLine:!0}function kM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=oR()||aR()}get(){return CM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM=new Va(3e4,6e4);function Xc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ha(t,e,n,r,i={}){return AC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ba(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),TC.fetch()(_C(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function AC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bM),e);try{const i=new TM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bl(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw wM(t,h,d);xn(t,h)}}catch(i){if(i instanceof Tn)throw i;xn(t,"network-request-failed",{message:String(i)})}}async function Jc(t,e,n,r,i={}){const s=await Ha(t,e,n,r,i);return"mfaPendingCredential"in s&&xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _C(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?og(t.config,i):`${t.config.apiScheme}://${i}`}class TM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fn(this.auth,"network-request-failed")),xM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Fn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AM(t,e){return Ha(t,"POST","/v1/accounts:delete",e)}async function _M(t,e){return Ha(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PM(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),i=ag(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oo(dh(i.auth_time)),issuedAtTime:Oo(dh(i.iat)),expirationTime:Oo(dh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dh(t){return Number(t)*1e3}function ag(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vl("JWT malformed, contained fewer than 3 sections"),null;try{const i=bE(n);return i?JSON.parse(i):(Vl("Failed to decode base64 JWT payload"),null)}catch(i){return Vl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function RM(t){const e=ag(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&DM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ma(t,_M(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?LM(s.providerUserInfo):[],a=$M(t.providerData,o),l=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new PC(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function OM(t){const e=Rt(t);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $M(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function LM(t){return t.map(e=>{var{providerId:n}=e,r=ig(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FM(t,e){const n=await AC(t,{},async()=>{const r=ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=_C(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",TC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ga;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ga,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ig(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new PC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ma(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PM(this,e)}reload(){return OM(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ma(this,AM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,d,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:b,isAnonymous:A,providerData:P,stsTokenManager:U}=n;ne(E&&U,e,"internal-error");const B=ga.fromJSON(this.name,U);ne(typeof E=="string",e,"internal-error"),dr(p,e.name),dr(m,e.name),ne(typeof b=="boolean",e,"internal-error"),ne(typeof A=="boolean",e,"internal-error"),dr(I,e.name),dr(C,e.name),dr(S,e.name),dr(T,e.name),dr(w,e.name),dr(g,e.name);const ue=new pi({uid:E,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:A,photoURL:C,phoneNumber:I,tenantId:S,stsTokenManager:B,createdAt:w,lastLoginAt:g});return P&&Array.isArray(P)&&(ue.providerData=P.map(X=>Object.assign({},X))),T&&(ue._redirectEventId=T),ue}static async _fromIdTokenResponse(e,n,r=!1){const i=new ga;i.updateFromServerResponse(n);const s=new pi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zu(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}RC.type="NONE";const Pv=RC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(Qn(Pv),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Qn(Pv);const o=Hl(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const h=await d._get(o);if(h){const p=pi._fromJSON(e,h);d!==s&&(a=p),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new gs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new gs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(OC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LC(e))return"Blackberry";if(FC(e))return"Webos";if(lg(e))return"Safari";if((e.includes("chrome/")||NC(e))&&!e.includes("edge/"))return"Chrome";if($C(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DC(t=Pt()){return/firefox\//i.test(t)}function lg(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NC(t=Pt()){return/crios\//i.test(t)}function OC(t=Pt()){return/iemobile/i.test(t)}function $C(t=Pt()){return/android/i.test(t)}function LC(t=Pt()){return/blackberry/i.test(t)}function FC(t=Pt()){return/webos/i.test(t)}function Zc(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MM(t=Pt()){var e;return Zc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UM(){return lR()&&document.documentMode===10}function MC(t=Pt()){return Zc(t)||$C(t)||FC(t)||LC(t)||/windows phone/i.test(t)||OC(t)}function BM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t,e=[]){let n;switch(t){case"Browser":n=Rv(Pt());break;case"Worker":n=`${Rv(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xa}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dv(this),this.idTokenSubscription=new Dv(this),this.beforeStateQueue=new zM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xC,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Rt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ed(t){return Rt(t)}class Dv{constructor(e){this.auth=e,this.observer=null,this.addObserver=pR(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function VM(t,e,n){const r=ed(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=BC(e),{host:o,port:a}=HM(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WM()}function BC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HM(t){const e=BC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nv(o)}}}function Nv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function qM(t,e){return Ha(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KM(t,e){return Jc(t,"POST","/v1/accounts:signInWithPassword",Xc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GM(t,e){return Jc(t,"POST","/v1/accounts:signInWithEmailLink",Xc(t,e))}async function QM(t,e){return Jc(t,"POST","/v1/accounts:signInWithEmailLink",Xc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends ug{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return KM(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return GM(e,{email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return qM(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return QM(e,{idToken:n,email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e){return Jc(t,"POST","/v1/accounts:signInWithIdp",Xc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM="http://localhost";class xi extends ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ig(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:YM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ba(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JM(t){const e=fo(po(t)).link,n=e?fo(po(e)).deep_link_id:null,r=fo(po(t)).deep_link_id;return(r?fo(po(r)).link:null)||r||n||e||t}class cg{constructor(e){var n,r,i,s,o,a;const l=fo(po(e)),d=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=XM((i=l.mode)!==null&&i!==void 0?i:null);ne(d&&h&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=JM(e);try{return new cg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.providerId=Gs.PROVIDER_ID}static credential(e,n){return ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cg.parseLink(n);return ne(r,"argument-error"),ya._fromEmailAndCode(e,r.code,r.tenantId)}}Gs.PROVIDER_ID="password";Gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends zC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Wa{constructor(){super("facebook.com")}static credential(e){return xi._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xi._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Wa{constructor(){super("github.com")}static credential(e){return xi._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Wa{constructor(){super("twitter.com")}static credential(e,n){return xi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pi._fromIdTokenResponse(e,r,i),o=Ov(r);return new $s({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ov(r);return new $s({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ov(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends Tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ju.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ju(e,n,r,i)}}function jC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ju._fromErrorAndOperation(t,s,e,r):s})}async function ZM(t,e,n=!1){const r=await ma(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $s._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eU(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ma(t,jC(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=ag(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),$s._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e,n=!1){const r="signIn",i=await jC(t,r,e),s=await $s._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function tU(t,e){return VC(ed(t),e)}function nU(t,e,n){return tU(Rt(t),Gs.credential(e,n))}function rU(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function iU(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}function sU(t,e,n,r){return Rt(t).onAuthStateChanged(e,n,r)}function oU(t){return Rt(t).signOut()}const Vu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vu,"1"),this.storage.removeItem(Vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aU(){const t=Pt();return lg(t)||Zc(t)}const lU=1e3,uU=10;class WC extends HC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aU()&&BM(),this.fallbackToPolling=MC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);UM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}WC.type="LOCAL";const cU=WC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC extends HC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qC.type="SESSION";const KC=qC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dU(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new td(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async d=>d(n.origin,s)),l=await dU(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}td.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const d=dg("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function fU(t){Mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function pU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mU(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gU(){return GC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="firebaseLocalStorageDb",yU=1,Hu="firebaseLocalStorage",YC="fbase_key";class qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nd(t,e){return t.transaction([Hu],e?"readwrite":"readonly").objectStore(Hu)}function vU(){const t=indexedDB.deleteDatabase(QC);return new qa(t).toPromise()}function Yf(){const t=indexedDB.open(QC,yU);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hu,{keyPath:YC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hu)?e(r):(r.close(),await vU(),e(await Yf()))})})}async function $v(t,e,n){const r=nd(t,!0).put({[YC]:e,value:n});return new qa(r).toPromise()}async function wU(t,e){const n=nd(t,!1).get(e),r=await new qa(n).toPromise();return r===void 0?null:r.value}function Lv(t,e){const n=nd(t,!0).delete(e);return new qa(n).toPromise()}const EU=800,IU=3;class XC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IU)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=td._getInstance(gU()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pU(),!this.activeServiceWorker)return;this.sender=new hU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mU()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yf();return await $v(e,Vu,"1"),await Lv(e,Vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$v(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wU(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nd(i,!1).getAll();return new qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XC.type="LOCAL";const SU=XC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kU(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",CU().appendChild(r)})}function bU(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Va(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xU(t,e){return e?Qn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg extends ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TU(t){return VC(t.auth,new hg(t),t.bypassAuthState)}function AU(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),eU(n,new hg(t),t.bypassAuthState)}async function _U(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),ZM(n,new hg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TU;case"linkViaPopup":case"linkViaRedirect":return _U;case"reauthViaPopup":case"reauthViaRedirect":return AU;default:xn(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PU=new Va(2e3,1e4);class as extends JC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=dg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,PU.get())};e()}}as.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RU="pendingRedirect",Wl=new Map;class DU extends JC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await NU(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NU(t,e){const n=LU(e),r=$U(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OU(t,e){Wl.set(t._key(),e)}function $U(t){return Qn(t._redirectPersistence)}function LU(t){return Hl(RU,t.config.apiKey,t.name)}async function FU(t,e,n=!1){const r=ed(t),i=xU(r,e),o=await new DU(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MU=10*60*1e3;class UU{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BU(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MU&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fv(e))}saveEventToCache(e){this.cachedEventUids.add(Fv(e)),this.lastProcessedEventTime=Date.now()}}function Fv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BU(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zU(t,e={}){return Ha(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VU=/^https?/;async function HU(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zU(t);for(const n of e)try{if(WU(n))return}catch{}xn(t,"unauthorized-domain")}function WU(t){const e=Qf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VU.test(n))return!1;if(jU.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qU=new Va(3e4,6e4);function Mv(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KU(t){return new Promise((e,n)=>{var r,i,s;function o(){Mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mv(),n(Fn(t,"network-request-failed"))},timeout:qU.get()})}if(!((i=(r=Mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Mn().gapi)===null||s===void 0)&&s.load)o();else{const a=bU("iframefcb");return Mn()[a]=()=>{gapi.load?o():n(Fn(t,"network-request-failed"))},kU(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ql=null,e})}let ql=null;function GU(t){return ql=ql||KU(t),ql}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QU=new Va(5e3,15e3),YU="__/auth/iframe",XU="emulator/auth/iframe",JU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eB(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?og(e,XU):`https://${t.config.authDomain}/${YU}`,r={apiKey:e.apiKey,appName:t.name,v:xa},i=ZU.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ba(r).slice(1)}`}async function tB(t){const e=await GU(t),n=Mn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:eB(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JU,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Fn(t,"network-request-failed"),a=Mn().setTimeout(()=>{s(o)},QU.get());function l(){Mn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rB=500,iB=600,sB="_blank",oB="http://localhost";class Uv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aB(t,e,n,r=rB,i=iB){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nB),{width:r.toString(),height:i.toString(),top:s,left:o}),d=Pt().toLowerCase();n&&(a=NC(d)?sB:n),DC(d)&&(e=e||oB,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[I,C])=>`${m}${I}=${C},`,"");if(MM(d)&&a!=="_self")return lB(e||"",a),new Uv(null);const p=window.open(e||"",a,h);ne(p,t,"popup-blocked");try{p.focus()}catch{}return new Uv(p)}function lB(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uB="__/auth/handler",cB="emulator/auth/handler";function Bv(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xa,eventId:i};if(e instanceof zC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,d]of Object.entries(s||{}))o[l]=d}if(e instanceof Wa){const l=e.getScopes().filter(d=>d!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${dB(t)}?${ba(a).slice(1)}`}function dB({config:t}){return t.emulator?og(t,cB):`https://${t.authDomain}/${uB}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="webStorageSupport";class hB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KC,this._completeRedirectFn=FU,this._overrideRedirectResult=OU}async _openPopup(e,n,r,i){var s;sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Bv(e,n,r,Qf(),i);return aB(e,o,dg())}async _openRedirect(e,n,r,i){return await this._originValidation(e),fU(Bv(e,n,r,Qf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tB(e),r=new UU(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hh,{type:hh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hh];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HU(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return MC()||lg()||Zc()}}const fB=hB;var zv="@firebase/auth",jv="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pB{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mB(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gB(t){Un(new bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{ne(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),ne(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const d={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UC(t)},h=new jM(a,l,d);return IM(h,n),h})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Un(new bn("auth-internal",e=>{const n=ed(e.getProvider("auth").getImmediate());return(r=>new pB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(zv,jv,mB(t)),dn(zv,jv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yB=5*60,vB=TE("authIdTokenMaxAge")||yB;let Vv=null;const wB=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vB)return;const i=n==null?void 0:n.token;Vv!==i&&(Vv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rd(t=sm()){const e=Di(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EM(t,{popupRedirectResolver:fB,persistence:[SU,cU,KC]}),r=TE("authTokenSyncURL");if(r){const s=wB(r);iU(n,s,()=>s(n.currentUser)),rU(n,o=>s(o))}const i=xE("auth");return i&&VM(n,`http://${i}`),n}gB("Browser");var Xf={},EB={get exports(){return Xf},set exports(t){Xf=t}};/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/(function(t,e){(function(n,r){t.exports=r()})(ur,function(){var n={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const r="swal2-",i=u=>{const c={};for(const f in u)c[u[f]]=r+u[f];return c},s=i(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),o=i(["success","warning","info","question","error"]),a="SweetAlert2:",l=u=>{const c=[];for(let f=0;f<u.length;f++)c.indexOf(u[f])===-1&&c.push(u[f]);return c},d=u=>u.charAt(0).toUpperCase()+u.slice(1),h=u=>{console.warn(`${a} ${typeof u=="object"?u.join(" "):u}`)},p=u=>{console.error(`${a} ${u}`)},m=[],I=u=>{m.includes(u)||(m.push(u),h(u))},C=(u,c)=>{I(`"${u}" is deprecated and will be removed in the next major release. Please use "${c}" instead.`)},S=u=>typeof u=="function"?u():u,T=u=>u&&typeof u.toPromise=="function",w=u=>T(u)?u.toPromise():Promise.resolve(u),g=u=>u&&Promise.resolve(u)===u,E=()=>document.body.querySelector(`.${s.container}`),b=u=>{const c=E();return c?c.querySelector(u):null},A=u=>b(`.${u}`),P=()=>A(s.popup),U=()=>A(s.icon),B=()=>A(s["icon-content"]),ue=()=>A(s.title),X=()=>A(s["html-container"]),He=()=>A(s.image),Le=()=>A(s["progress-steps"]),ze=()=>A(s["validation-message"]),Ae=()=>b(`.${s.actions} .${s.confirm}`),De=()=>b(`.${s.actions} .${s.cancel}`),it=()=>b(`.${s.actions} .${s.deny}`),ct=()=>A(s["input-label"]),$=()=>b(`.${s.loader}`),Q=()=>A(s.actions),te=()=>A(s.footer),we=()=>A(s["timer-progress-bar"]),F=()=>A(s.close),z=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,j=()=>{const u=Array.from(P().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((f,y)=>{const x=parseInt(f.getAttribute("tabindex")),G=parseInt(y.getAttribute("tabindex"));return x>G?1:x<G?-1:0}),c=Array.from(P().querySelectorAll(z)).filter(f=>f.getAttribute("tabindex")!=="-1");return l(u.concat(c)).filter(f=>q(f))},ee=()=>le(document.body,s.shown)&&!le(document.body,s["toast-shown"])&&!le(document.body,s["no-backdrop"]),k=()=>P()&&le(P(),s.toast),ce=()=>P().hasAttribute("data-loading"),L={previousBodyPadding:null},he=(u,c)=>{if(u.textContent="",c){const y=new DOMParser().parseFromString(c,"text/html");Array.from(y.querySelector("head").childNodes).forEach(x=>{u.appendChild(x)}),Array.from(y.querySelector("body").childNodes).forEach(x=>{x instanceof HTMLVideoElement||x instanceof HTMLAudioElement?u.appendChild(x.cloneNode(!0)):u.appendChild(x)})}},le=(u,c)=>{if(!c)return!1;const f=c.split(/\s+/);for(let y=0;y<f.length;y++)if(!u.classList.contains(f[y]))return!1;return!0},Ee=(u,c)=>{Array.from(u.classList).forEach(f=>{!Object.values(s).includes(f)&&!Object.values(o).includes(f)&&!Object.values(c.showClass).includes(f)&&u.classList.remove(f)})},K=(u,c,f)=>{if(Ee(u,c),c.customClass&&c.customClass[f]){if(typeof c.customClass[f]!="string"&&!c.customClass[f].forEach){h(`Invalid type of customClass.${f}! Expected string or iterable object, got "${typeof c.customClass[f]}"`);return}J(u,c.customClass[f])}},We=(u,c)=>{if(!c)return null;switch(c){case"select":case"textarea":case"file":return u.querySelector(`.${s.popup} > .${s[c]}`);case"checkbox":return u.querySelector(`.${s.popup} > .${s.checkbox} input`);case"radio":return u.querySelector(`.${s.popup} > .${s.radio} input:checked`)||u.querySelector(`.${s.popup} > .${s.radio} input:first-child`);case"range":return u.querySelector(`.${s.popup} > .${s.range} input`);default:return u.querySelector(`.${s.popup} > .${s.input}`)}},dt=u=>{if(u.focus(),u.type!=="file"){const c=u.value;u.value="",u.value=c}},me=(u,c,f)=>{!u||!c||(typeof c=="string"&&(c=c.split(/\s+/).filter(Boolean)),c.forEach(y=>{Array.isArray(u)?u.forEach(x=>{f?x.classList.add(y):x.classList.remove(y)}):f?u.classList.add(y):u.classList.remove(y)}))},J=(u,c)=>{me(u,c,!0)},ae=(u,c)=>{me(u,c,!1)},be=(u,c)=>{const f=Array.from(u.children);for(let y=0;y<f.length;y++){const x=f[y];if(x instanceof HTMLElement&&le(x,c))return x}},rn=(u,c,f)=>{f===`${parseInt(f)}`&&(f=parseInt(f)),f||parseInt(f)===0?u.style[c]=typeof f=="number"?`${f}px`:f:u.style.removeProperty(c)},ge=function(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";u.style.display=c},qe=u=>{u.style.display="none"},lr=(u,c,f,y)=>{const x=u.querySelector(c);x&&(x.style[f]=y)},wt=function(u,c){let f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";c?ge(u,f):qe(u)},q=u=>!!(u&&(u.offsetWidth||u.offsetHeight||u.getClientRects().length)),Fe=()=>!q(Ae())&&!q(it())&&!q(De()),Fi=u=>u.scrollHeight>u.clientHeight,Mi=u=>{const c=window.getComputedStyle(u),f=parseFloat(c.getPropertyValue("animation-duration")||"0"),y=parseFloat(c.getPropertyValue("transition-duration")||"0");return f>0||y>0},sn=function(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const f=we();q(f)&&(c&&(f.style.transition="none",f.style.width="100%"),setTimeout(()=>{f.style.transition=`width ${u/1e3}s linear`,f.style.width="0%"},10))},tk=()=>{const u=we(),c=parseInt(window.getComputedStyle(u).width);u.style.removeProperty("transition"),u.style.width="100%";const f=parseInt(window.getComputedStyle(u).width),y=c/f*100;u.style.width=`${y}%`},nk=100,de={},rk=()=>{de.previousActiveElement instanceof HTMLElement?(de.previousActiveElement.focus(),de.previousActiveElement=null):document.body&&document.body.focus()},ik=u=>new Promise(c=>{if(!u)return c();const f=window.scrollX,y=window.scrollY;de.restoreFocusTimeout=setTimeout(()=>{rk(),c()},nk),window.scrollTo(f,y)}),fg=()=>typeof window>"u"||typeof document>"u",sk=`
 <div aria-labelledby="${s.title}" aria-describedby="${s["html-container"]}" class="${s.popup}" tabindex="-1">
   <button type="button" class="${s.close}"></button>
   <ul class="${s["progress-steps"]}"></ul>
   <div class="${s.icon}"></div>
   <img class="${s.image}" />
   <h2 class="${s.title}" id="${s.title}"></h2>
   <div class="${s["html-container"]}" id="${s["html-container"]}"></div>
   <input class="${s.input}" />
   <input type="file" class="${s.file}" />
   <div class="${s.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${s.select}"></select>
   <div class="${s.radio}"></div>
   <label for="${s.checkbox}" class="${s.checkbox}">
     <input type="checkbox" />
     <span class="${s.label}"></span>
   </label>
   <textarea class="${s.textarea}"></textarea>
   <div class="${s["validation-message"]}" id="${s["validation-message"]}"></div>
   <div class="${s.actions}">
     <div class="${s.loader}"></div>
     <button type="button" class="${s.confirm}"></button>
     <button type="button" class="${s.deny}"></button>
     <button type="button" class="${s.cancel}"></button>
   </div>
   <div class="${s.footer}"></div>
   <div class="${s["timer-progress-bar-container"]}">
     <div class="${s["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),ok=()=>{const u=E();return u?(u.remove(),ae([document.documentElement,document.body],[s["no-backdrop"],s["toast-shown"],s["has-column"]]),!0):!1},Gr=()=>{de.currentInstance.resetValidationMessage()},ak=()=>{const u=P(),c=be(u,s.input),f=be(u,s.file),y=u.querySelector(`.${s.range} input`),x=u.querySelector(`.${s.range} output`),G=be(u,s.select),xe=u.querySelector(`.${s.checkbox} input`),Kt=be(u,s.textarea);c.oninput=Gr,f.onchange=Gr,G.onchange=Gr,xe.onchange=Gr,Kt.oninput=Gr,y.oninput=()=>{Gr(),x.value=y.value},y.onchange=()=>{Gr(),x.value=y.value}},lk=u=>typeof u=="string"?document.querySelector(u):u,uk=u=>{const c=P();c.setAttribute("role",u.toast?"alert":"dialog"),c.setAttribute("aria-live",u.toast?"polite":"assertive"),u.toast||c.setAttribute("aria-modal","true")},ck=u=>{window.getComputedStyle(u).direction==="rtl"&&J(E(),s.rtl)},dk=u=>{const c=ok();if(fg()){p("SweetAlert2 requires document to initialize");return}const f=document.createElement("div");f.className=s.container,c&&J(f,s["no-transition"]),he(f,sk);const y=lk(u.target);y.appendChild(f),uk(u),ck(y),ak()},id=(u,c)=>{u instanceof HTMLElement?c.appendChild(u):typeof u=="object"?hk(u,c):u&&he(c,u)},hk=(u,c)=>{u.jquery?fk(c,u):he(c,u.toString())},fk=(u,c)=>{if(u.textContent="",0 in c)for(let f=0;f in c;f++)u.appendChild(c[f].cloneNode(!0));else u.appendChild(c.cloneNode(!0))},Qs=(()=>{if(fg())return!1;const u=document.createElement("div"),c={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const f in c)if(Object.prototype.hasOwnProperty.call(c,f)&&typeof u.style[f]<"u")return c[f];return!1})(),pk=()=>{const u=document.createElement("div");u.className=s["scrollbar-measure"],document.body.appendChild(u);const c=u.getBoundingClientRect().width-u.clientWidth;return document.body.removeChild(u),c},mk=(u,c)=>{const f=Q(),y=$();!c.showConfirmButton&&!c.showDenyButton&&!c.showCancelButton?qe(f):ge(f),K(f,c,"actions"),gk(f,y,c),he(y,c.loaderHtml),K(y,c,"loader")};function gk(u,c,f){const y=Ae(),x=it(),G=De();sd(y,"confirm",f),sd(x,"deny",f),sd(G,"cancel",f),yk(y,x,G,f),f.reverseButtons&&(f.toast?(u.insertBefore(G,y),u.insertBefore(x,y)):(u.insertBefore(G,c),u.insertBefore(x,c),u.insertBefore(y,c)))}function yk(u,c,f,y){if(!y.buttonsStyling){ae([u,c,f],s.styled);return}J([u,c,f],s.styled),y.confirmButtonColor&&(u.style.backgroundColor=y.confirmButtonColor,J(u,s["default-outline"])),y.denyButtonColor&&(c.style.backgroundColor=y.denyButtonColor,J(c,s["default-outline"])),y.cancelButtonColor&&(f.style.backgroundColor=y.cancelButtonColor,J(f,s["default-outline"]))}function sd(u,c,f){wt(u,f[`show${d(c)}Button`],"inline-block"),he(u,f[`${c}ButtonText`]),u.setAttribute("aria-label",f[`${c}ButtonAriaLabel`]),u.className=s[c],K(u,f,`${c}Button`),J(u,f[`${c}ButtonClass`])}const vk=(u,c)=>{const f=F();he(f,c.closeButtonHtml),K(f,c,"closeButton"),wt(f,c.showCloseButton),f.setAttribute("aria-label",c.closeButtonAriaLabel)},wk=(u,c)=>{const f=E();f&&(Ek(f,c.backdrop),Ik(f,c.position),Sk(f,c.grow),K(f,c,"container"))};function Ek(u,c){typeof c=="string"?u.style.background=c:c||J([document.documentElement,document.body],s["no-backdrop"])}function Ik(u,c){c in s?J(u,s[c]):(h('The "position" parameter is not valid, defaulting to "center"'),J(u,s.center))}function Sk(u,c){if(c&&typeof c=="string"){const f=`grow-${c}`;f in s&&J(u,s[f])}}const Ck=["input","file","range","select","radio","checkbox","textarea"],kk=(u,c)=>{const f=P(),y=n.innerParams.get(u),x=!y||c.input!==y.input;Ck.forEach(G=>{const xe=be(f,s[G]);Tk(G,c.inputAttributes),xe.className=s[G],x&&qe(xe)}),c.input&&(x&&bk(c),Ak(c))},bk=u=>{if(!Bt[u.input]){p(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${u.input}"`);return}const c=pg(u.input),f=Bt[u.input](c,u);ge(c),u.inputAutoFocus&&setTimeout(()=>{dt(f)})},xk=u=>{for(let c=0;c<u.attributes.length;c++){const f=u.attributes[c].name;["type","value","style"].includes(f)||u.removeAttribute(f)}},Tk=(u,c)=>{const f=We(P(),u);if(f){xk(f);for(const y in c)f.setAttribute(y,c[y])}},Ak=u=>{const c=pg(u.input);typeof u.customClass=="object"&&J(c,u.customClass.input)},od=(u,c)=>{(!u.placeholder||c.inputPlaceholder)&&(u.placeholder=c.inputPlaceholder)},Ys=(u,c,f)=>{if(f.inputLabel){u.id=s.input;const y=document.createElement("label"),x=s["input-label"];y.setAttribute("for",u.id),y.className=x,typeof f.customClass=="object"&&J(y,f.customClass.inputLabel),y.innerText=f.inputLabel,c.insertAdjacentElement("beforebegin",y)}},pg=u=>be(P(),s[u]||s.input),Ka=(u,c)=>{["string","number"].includes(typeof c)?u.value=`${c}`:g(c)||h(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof c}"`)},Bt={};Bt.text=Bt.email=Bt.password=Bt.number=Bt.tel=Bt.url=(u,c)=>(Ka(u,c.inputValue),Ys(u,u,c),od(u,c),u.type=c.input,u),Bt.file=(u,c)=>(Ys(u,u,c),od(u,c),u),Bt.range=(u,c)=>{const f=u.querySelector("input"),y=u.querySelector("output");return Ka(f,c.inputValue),f.type=c.input,Ka(y,c.inputValue),Ys(f,u,c),u},Bt.select=(u,c)=>{if(u.textContent="",c.inputPlaceholder){const f=document.createElement("option");he(f,c.inputPlaceholder),f.value="",f.disabled=!0,f.selected=!0,u.appendChild(f)}return Ys(u,u,c),u},Bt.radio=u=>(u.textContent="",u),Bt.checkbox=(u,c)=>{const f=We(P(),"checkbox");f.value="1",f.id=s.checkbox,f.checked=!!c.inputValue;const y=u.querySelector("span");return he(y,c.inputPlaceholder),f},Bt.textarea=(u,c)=>{Ka(u,c.inputValue),od(u,c),Ys(u,u,c);const f=y=>parseInt(window.getComputedStyle(y).marginLeft)+parseInt(window.getComputedStyle(y).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const y=parseInt(window.getComputedStyle(P()).width),x=()=>{const G=u.offsetWidth+f(u);G>y?P().style.width=`${G}px`:P().style.width=null};new MutationObserver(x).observe(u,{attributes:!0,attributeFilter:["style"]})}}),u};const _k=(u,c)=>{const f=X();K(f,c,"htmlContainer"),c.html?(id(c.html,f),ge(f,"block")):c.text?(f.textContent=c.text,ge(f,"block")):qe(f),kk(u,c)},Pk=(u,c)=>{const f=te();wt(f,c.footer),c.footer&&id(c.footer,f),K(f,c,"footer")},Rk=(u,c)=>{const f=n.innerParams.get(u),y=U();if(f&&c.icon===f.icon){gg(y,c),mg(y,c);return}if(!c.icon&&!c.iconHtml){qe(y);return}if(c.icon&&Object.keys(o).indexOf(c.icon)===-1){p(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${c.icon}"`),qe(y);return}ge(y),gg(y,c),mg(y,c),J(y,c.showClass.icon)},mg=(u,c)=>{for(const f in o)c.icon!==f&&ae(u,o[f]);J(u,o[c.icon]),$k(u,c),Dk(),K(u,c,"icon")},Dk=()=>{const u=P(),c=window.getComputedStyle(u).getPropertyValue("background-color"),f=u.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let y=0;y<f.length;y++)f[y].style.backgroundColor=c},Nk=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Ok=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,gg=(u,c)=>{let f=u.innerHTML,y;c.iconHtml?y=yg(c.iconHtml):c.icon==="success"?(y=Nk,f=f.replace(/ style=".*?"/g,"")):c.icon==="error"?y=Ok:y=yg({question:"?",warning:"!",info:"i"}[c.icon]),f.trim()!==y.trim()&&he(u,y)},$k=(u,c)=>{if(c.iconColor){u.style.color=c.iconColor,u.style.borderColor=c.iconColor;for(const f of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])lr(u,f,"backgroundColor",c.iconColor);lr(u,".swal2-success-ring","borderColor",c.iconColor)}},yg=u=>`<div class="${s["icon-content"]}">${u}</div>`,Lk=(u,c)=>{const f=He();if(!c.imageUrl){qe(f);return}ge(f,""),f.setAttribute("src",c.imageUrl),f.setAttribute("alt",c.imageAlt),rn(f,"width",c.imageWidth),rn(f,"height",c.imageHeight),f.className=s.image,K(f,c,"image")},Fk=(u,c)=>{const f=E(),y=P();c.toast?(rn(f,"width",c.width),y.style.width="100%",y.insertBefore($(),U())):rn(y,"width",c.width),rn(y,"padding",c.padding),c.color&&(y.style.color=c.color),c.background&&(y.style.background=c.background),qe(ze()),Mk(y,c)},Mk=(u,c)=>{u.className=`${s.popup} ${q(u)?c.showClass.popup:""}`,c.toast?(J([document.documentElement,document.body],s["toast-shown"]),J(u,s.toast)):J(u,s.modal),K(u,c,"popup"),typeof c.customClass=="string"&&J(u,c.customClass),c.icon&&J(u,s[`icon-${c.icon}`])},Uk=(u,c)=>{const f=Le();if(!c.progressSteps||c.progressSteps.length===0){qe(f);return}ge(f),f.textContent="",c.currentProgressStep>=c.progressSteps.length&&h("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),c.progressSteps.forEach((y,x)=>{const G=Bk(y);if(f.appendChild(G),x===c.currentProgressStep&&J(G,s["active-progress-step"]),x!==c.progressSteps.length-1){const xe=zk(c);f.appendChild(xe)}})},Bk=u=>{const c=document.createElement("li");return J(c,s["progress-step"]),he(c,u),c},zk=u=>{const c=document.createElement("li");return J(c,s["progress-step-line"]),u.progressStepsDistance&&rn(c,"width",u.progressStepsDistance),c},jk=(u,c)=>{const f=ue();wt(f,c.title||c.titleText,"block"),c.title&&id(c.title,f),c.titleText&&(f.innerText=c.titleText),K(f,c,"title")},vg=(u,c)=>{Fk(u,c),wk(u,c),Uk(u,c),Rk(u,c),Lk(u,c),jk(u,c),vk(u,c),_k(u,c),mk(u,c),Pk(u,c),typeof c.didRender=="function"&&c.didRender(P())};function wg(){const u=n.innerParams.get(this);if(!u)return;const c=n.domCache.get(this);qe(c.loader),k()?u.icon&&ge(U()):Vk(c),ae([c.popup,c.actions],s.loading),c.popup.removeAttribute("aria-busy"),c.popup.removeAttribute("data-loading"),c.confirmButton.disabled=!1,c.denyButton.disabled=!1,c.cancelButton.disabled=!1}const Vk=u=>{const c=u.popup.getElementsByClassName(u.loader.getAttribute("data-button-to-replace"));c.length?ge(c[0],"inline-block"):Fe()&&qe(u.actions)};function Hk(u){const c=n.innerParams.get(u||this),f=n.domCache.get(u||this);return f?We(f.popup,c.input):null}const Wk=()=>q(P()),Eg=()=>Ae()&&Ae().click(),qk=()=>it()&&it().click(),Kk=()=>De()&&De().click(),Ui=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ig=u=>{u.keydownTarget&&u.keydownHandlerAdded&&(u.keydownTarget.removeEventListener("keydown",u.keydownHandler,{capture:u.keydownListenerCapture}),u.keydownHandlerAdded=!1)},Gk=(u,c,f,y)=>{Ig(c),f.toast||(c.keydownHandler=x=>Yk(u,x,y),c.keydownTarget=f.keydownListenerCapture?window:P(),c.keydownListenerCapture=f.keydownListenerCapture,c.keydownTarget.addEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!0)},ad=(u,c)=>{const f=j();if(f.length){u=u+c,u===f.length?u=0:u===-1&&(u=f.length-1),f[u].focus();return}P().focus()},Sg=["ArrowRight","ArrowDown"],Qk=["ArrowLeft","ArrowUp"],Yk=(u,c,f)=>{const y=n.innerParams.get(u);y&&(c.isComposing||c.keyCode===229||(y.stopKeydownPropagation&&c.stopPropagation(),c.key==="Enter"?Xk(u,c,y):c.key==="Tab"?Jk(c):[...Sg,...Qk].includes(c.key)?Zk(c.key):c.key==="Escape"&&eb(c,y,f)))},Xk=(u,c,f)=>{if(S(f.allowEnterKey)&&c.target&&u.getInput()&&c.target instanceof HTMLElement&&c.target.outerHTML===u.getInput().outerHTML){if(["textarea","file"].includes(f.input))return;Eg(),c.preventDefault()}},Jk=u=>{const c=u.target,f=j();let y=-1;for(let x=0;x<f.length;x++)if(c===f[x]){y=x;break}u.shiftKey?ad(y,-1):ad(y,1),u.stopPropagation(),u.preventDefault()},Zk=u=>{const c=Ae(),f=it(),y=De(),x=[c,f,y];if(document.activeElement instanceof HTMLElement&&!x.includes(document.activeElement))return;const G=Sg.includes(u)?"nextElementSibling":"previousElementSibling";let xe=document.activeElement;for(let Kt=0;Kt<Q().children.length;Kt++){if(xe=xe[G],!xe)return;if(xe instanceof HTMLButtonElement&&q(xe))break}xe instanceof HTMLButtonElement&&xe.focus()},eb=(u,c,f)=>{S(c.allowEscapeKey)&&(u.preventDefault(),f(Ui.esc))};var Xs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const tb=()=>{Array.from(document.body.children).forEach(c=>{c===E()||c.contains(E())||(c.hasAttribute("aria-hidden")&&c.setAttribute("data-previous-aria-hidden",c.getAttribute("aria-hidden")),c.setAttribute("aria-hidden","true"))})},Cg=()=>{Array.from(document.body.children).forEach(c=>{c.hasAttribute("data-previous-aria-hidden")?(c.setAttribute("aria-hidden",c.getAttribute("data-previous-aria-hidden")),c.removeAttribute("data-previous-aria-hidden")):c.removeAttribute("aria-hidden")})},nb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!le(document.body,s.iosfix)){const c=document.body.scrollTop;document.body.style.top=`${c*-1}px`,J(document.body,s.iosfix),ib(),rb()}},rb=()=>{const u=navigator.userAgent,c=!!u.match(/iPad/i)||!!u.match(/iPhone/i),f=!!u.match(/WebKit/i);c&&f&&!u.match(/CriOS/i)&&P().scrollHeight>window.innerHeight-44&&(E().style.paddingBottom="44px")},ib=()=>{const u=E();let c;u.ontouchstart=f=>{c=sb(f)},u.ontouchmove=f=>{c&&(f.preventDefault(),f.stopPropagation())}},sb=u=>{const c=u.target,f=E();return ob(u)||ab(u)?!1:c===f||!Fi(f)&&c instanceof HTMLElement&&c.tagName!=="INPUT"&&c.tagName!=="TEXTAREA"&&!(Fi(X())&&X().contains(c))},ob=u=>u.touches&&u.touches.length&&u.touches[0].touchType==="stylus",ab=u=>u.touches&&u.touches.length>1,lb=()=>{if(le(document.body,s.iosfix)){const u=parseInt(document.body.style.top,10);ae(document.body,s.iosfix),document.body.style.top="",document.body.scrollTop=u*-1}},ub=()=>{L.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(L.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${L.previousBodyPadding+pk()}px`)},cb=()=>{L.previousBodyPadding!==null&&(document.body.style.paddingRight=`${L.previousBodyPadding}px`,L.previousBodyPadding=null)};function kg(u,c,f,y){k()?bg(u,y):(ik(f).then(()=>bg(u,y)),Ig(de)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(c.setAttribute("style","display:none !important"),c.removeAttribute("class"),c.innerHTML=""):c.remove(),ee()&&(cb(),lb(),Cg()),db()}function db(){ae([document.documentElement,document.body],[s.shown,s["height-auto"],s["no-backdrop"],s["toast-shown"]])}function Ga(u){u=mb(u);const c=Xs.swalPromiseResolve.get(this),f=fb(this);this.isAwaitingPromise()?u.isDismissed||(Js(this),c(u)):f&&c(u)}function hb(){return!!n.awaitingPromise.get(this)}const fb=u=>{const c=P();if(!c)return!1;const f=n.innerParams.get(u);if(!f||le(c,f.hideClass.popup))return!1;ae(c,f.showClass.popup),J(c,f.hideClass.popup);const y=E();return ae(y,f.showClass.backdrop),J(y,f.hideClass.backdrop),gb(u,c,f),!0};function pb(u){const c=Xs.swalPromiseReject.get(this);Js(this),c&&c(u)}const Js=u=>{u.isAwaitingPromise()&&(n.awaitingPromise.delete(u),n.innerParams.get(u)||u._destroy())},mb=u=>typeof u>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},u),gb=(u,c,f)=>{const y=E(),x=Qs&&Mi(c);typeof f.willClose=="function"&&f.willClose(c),x?yb(u,c,y,f.returnFocus,f.didClose):kg(u,y,f.returnFocus,f.didClose)},yb=(u,c,f,y,x)=>{de.swalCloseEventFinishedCallback=kg.bind(null,u,f,y,x),c.addEventListener(Qs,function(G){G.target===c&&(de.swalCloseEventFinishedCallback(),delete de.swalCloseEventFinishedCallback)})},bg=(u,c)=>{setTimeout(()=>{typeof c=="function"&&c.bind(u.params)(),u._destroy()})};function xg(u,c,f){const y=n.domCache.get(u);c.forEach(x=>{y[x].disabled=f})}function Tg(u,c){if(u)if(u.type==="radio"){const y=u.parentNode.parentNode.querySelectorAll("input");for(let x=0;x<y.length;x++)y[x].disabled=c}else u.disabled=c}function vb(){xg(this,["confirmButton","denyButton","cancelButton"],!1)}function wb(){xg(this,["confirmButton","denyButton","cancelButton"],!0)}function Eb(){Tg(this.getInput(),!1)}function Ib(){Tg(this.getInput(),!0)}function Sb(u){const c=n.domCache.get(this),f=n.innerParams.get(this);he(c.validationMessage,u),c.validationMessage.className=s["validation-message"],f.customClass&&f.customClass.validationMessage&&J(c.validationMessage,f.customClass.validationMessage),ge(c.validationMessage);const y=this.getInput();y&&(y.setAttribute("aria-invalid",!0),y.setAttribute("aria-describedby",s["validation-message"]),dt(y),J(y,s.inputerror))}function Cb(){const u=n.domCache.get(this);u.validationMessage&&qe(u.validationMessage);const c=this.getInput();c&&(c.removeAttribute("aria-invalid"),c.removeAttribute("aria-describedby"),ae(c,s.inputerror))}const Bi={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},kb=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],bb={},xb=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Ag=u=>Object.prototype.hasOwnProperty.call(Bi,u),_g=u=>kb.indexOf(u)!==-1,ld=u=>bb[u],Tb=u=>{Ag(u)||h(`Unknown parameter "${u}"`)},Ab=u=>{xb.includes(u)&&h(`The parameter "${u}" is incompatible with toasts`)},_b=u=>{ld(u)&&C(u,ld(u))},Pb=u=>{u.backdrop===!1&&u.allowOutsideClick&&h('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const c in u)Tb(c),u.toast&&Ab(c),_b(c)};function Rb(u){const c=P(),f=n.innerParams.get(this);if(!c||le(c,f.hideClass.popup)){h("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const y=Db(u),x=Object.assign({},f,y);vg(this,x),n.innerParams.set(this,x),Object.defineProperties(this,{params:{value:Object.assign({},this.params,u),writable:!1,enumerable:!0}})}const Db=u=>{const c={};return Object.keys(u).forEach(f=>{_g(f)?c[f]=u[f]:h(`Invalid parameter to update: ${f}`)}),c};function Nb(){const u=n.domCache.get(this),c=n.innerParams.get(this);if(!c){Pg(this);return}u.popup&&de.swalCloseEventFinishedCallback&&(de.swalCloseEventFinishedCallback(),delete de.swalCloseEventFinishedCallback),typeof c.didDestroy=="function"&&c.didDestroy(),Ob(this)}const Ob=u=>{Pg(u),delete u.params,delete de.keydownHandler,delete de.keydownTarget,delete de.currentInstance},Pg=u=>{u.isAwaitingPromise()?(ud(n,u),n.awaitingPromise.set(u,!0)):(ud(Xs,u),ud(n,u))},ud=(u,c)=>{for(const f in u)u[f].delete(c)};var Rg=Object.freeze({__proto__:null,_destroy:Nb,close:Ga,closeModal:Ga,closePopup:Ga,closeToast:Ga,disableButtons:wb,disableInput:Ib,disableLoading:wg,enableButtons:vb,enableInput:Eb,getInput:Hk,handleAwaitingPromise:Js,hideLoading:wg,isAwaitingPromise:hb,rejectPromise:pb,resetValidationMessage:Cb,showValidationMessage:Sb,update:Rb});const zi=u=>{let c=P();c||new Ya,c=P();const f=$();k()?qe(U()):$b(c,u),ge(f),c.setAttribute("data-loading","true"),c.setAttribute("aria-busy","true"),c.focus()},$b=(u,c)=>{const f=Q(),y=$();!c&&q(Ae())&&(c=Ae()),ge(f),c&&(qe(c),y.setAttribute("data-button-to-replace",c.className)),y.parentNode.insertBefore(y,c),J([u,f],s.loading)},Lb=(u,c)=>{c.input==="select"||c.input==="radio"?zb(u,c):["text","email","number","tel","textarea"].includes(c.input)&&(T(c.inputValue)||g(c.inputValue))&&(zi(Ae()),jb(u,c))},Fb=(u,c)=>{const f=u.getInput();if(!f)return null;switch(c.input){case"checkbox":return Mb(f);case"radio":return Ub(f);case"file":return Bb(f);default:return c.inputAutoTrim?f.value.trim():f.value}},Mb=u=>u.checked?1:0,Ub=u=>u.checked?u.value:null,Bb=u=>u.files.length?u.getAttribute("multiple")!==null?u.files:u.files[0]:null,zb=(u,c)=>{const f=P(),y=x=>{Vb[c.input](f,cd(x),c)};T(c.inputOptions)||g(c.inputOptions)?(zi(Ae()),w(c.inputOptions).then(x=>{u.hideLoading(),y(x)})):typeof c.inputOptions=="object"?y(c.inputOptions):p(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof c.inputOptions}`)},jb=(u,c)=>{const f=u.getInput();qe(f),w(c.inputValue).then(y=>{f.value=c.input==="number"?`${parseFloat(y)||0}`:`${y}`,ge(f),f.focus(),u.hideLoading()}).catch(y=>{p(`Error in inputValue promise: ${y}`),f.value="",ge(f),f.focus(),u.hideLoading()})},Vb={select:(u,c,f)=>{const y=be(u,s.select),x=(G,xe,Kt)=>{const Nt=document.createElement("option");Nt.value=Kt,he(Nt,xe),Nt.selected=Dg(Kt,f.inputValue),G.appendChild(Nt)};c.forEach(G=>{const xe=G[0],Kt=G[1];if(Array.isArray(Kt)){const Nt=document.createElement("optgroup");Nt.label=xe,Nt.disabled=!1,y.appendChild(Nt),Kt.forEach(Vi=>x(Nt,Vi[1],Vi[0]))}else x(y,Kt,xe)}),y.focus()},radio:(u,c,f)=>{const y=be(u,s.radio);c.forEach(G=>{const xe=G[0],Kt=G[1],Nt=document.createElement("input"),Vi=document.createElement("label");Nt.type="radio",Nt.name=s.radio,Nt.value=xe,Dg(xe,f.inputValue)&&(Nt.checked=!0);const pd=document.createElement("span");he(pd,Kt),pd.className=s.label,Vi.appendChild(Nt),Vi.appendChild(pd),y.appendChild(Vi)});const x=y.querySelectorAll("input");x.length&&x[0].focus()}},cd=u=>{const c=[];return typeof Map<"u"&&u instanceof Map?u.forEach((f,y)=>{let x=f;typeof x=="object"&&(x=cd(x)),c.push([y,x])}):Object.keys(u).forEach(f=>{let y=u[f];typeof y=="object"&&(y=cd(y)),c.push([f,y])}),c},Dg=(u,c)=>c&&c.toString()===u.toString(),Hb=u=>{const c=n.innerParams.get(u);u.disableButtons(),c.input?Ng(u,"confirm"):hd(u,!0)},Wb=u=>{const c=n.innerParams.get(u);u.disableButtons(),c.returnInputValueOnDeny?Ng(u,"deny"):dd(u,!1)},qb=(u,c)=>{u.disableButtons(),c(Ui.cancel)},Ng=(u,c)=>{const f=n.innerParams.get(u);if(!f.input){p(`The "input" parameter is needed to be set when using returnInputValueOn${d(c)}`);return}const y=Fb(u,f);f.inputValidator?Kb(u,y,c):u.getInput().checkValidity()?c==="deny"?dd(u,y):hd(u,y):(u.enableButtons(),u.showValidationMessage(f.validationMessage))},Kb=(u,c,f)=>{const y=n.innerParams.get(u);u.disableInput(),Promise.resolve().then(()=>w(y.inputValidator(c,y.validationMessage))).then(G=>{u.enableButtons(),u.enableInput(),G?u.showValidationMessage(G):f==="deny"?dd(u,c):hd(u,c)})},dd=(u,c)=>{const f=n.innerParams.get(u||void 0);f.showLoaderOnDeny&&zi(it()),f.preDeny?(n.awaitingPromise.set(u||void 0,!0),Promise.resolve().then(()=>w(f.preDeny(c,f.validationMessage))).then(x=>{x===!1?(u.hideLoading(),Js(u)):u.close({isDenied:!0,value:typeof x>"u"?c:x})}).catch(x=>$g(u||void 0,x))):u.close({isDenied:!0,value:c})},Og=(u,c)=>{u.close({isConfirmed:!0,value:c})},$g=(u,c)=>{u.rejectPromise(c)},hd=(u,c)=>{const f=n.innerParams.get(u||void 0);f.showLoaderOnConfirm&&zi(),f.preConfirm?(u.resetValidationMessage(),n.awaitingPromise.set(u||void 0,!0),Promise.resolve().then(()=>w(f.preConfirm(c,f.validationMessage))).then(x=>{q(ze())||x===!1?(u.hideLoading(),Js(u)):Og(u,typeof x>"u"?c:x)}).catch(x=>$g(u||void 0,x))):Og(u,c)},Gb=(u,c,f)=>{n.innerParams.get(u).toast?Qb(u,c,f):(Xb(c),Jb(c),Zb(u,c,f))},Qb=(u,c,f)=>{c.popup.onclick=()=>{const y=n.innerParams.get(u);y&&(Yb(y)||y.timer||y.input)||f(Ui.close)}},Yb=u=>u.showConfirmButton||u.showDenyButton||u.showCancelButton||u.showCloseButton;let Qa=!1;const Xb=u=>{u.popup.onmousedown=()=>{u.container.onmouseup=function(c){u.container.onmouseup=void 0,c.target===u.container&&(Qa=!0)}}},Jb=u=>{u.container.onmousedown=()=>{u.popup.onmouseup=function(c){u.popup.onmouseup=void 0,(c.target===u.popup||u.popup.contains(c.target))&&(Qa=!0)}}},Zb=(u,c,f)=>{c.container.onclick=y=>{const x=n.innerParams.get(u);if(Qa){Qa=!1;return}y.target===c.container&&S(x.allowOutsideClick)&&f(Ui.backdrop)}},ex=u=>typeof u=="object"&&u.jquery,Lg=u=>u instanceof Element||ex(u),tx=u=>{const c={};return typeof u[0]=="object"&&!Lg(u[0])?Object.assign(c,u[0]):["title","html","icon"].forEach((f,y)=>{const x=u[y];typeof x=="string"||Lg(x)?c[f]=x:x!==void 0&&p(`Unexpected type of ${f}! Expected "string" or "Element", got ${typeof x}`)}),c};function nx(){const u=this;for(var c=arguments.length,f=new Array(c),y=0;y<c;y++)f[y]=arguments[y];return new u(...f)}function rx(u){class c extends this{_main(y,x){return super._main(y,Object.assign({},u,x))}}return c}const ix=()=>de.timeout&&de.timeout.getTimerLeft(),Fg=()=>{if(de.timeout)return tk(),de.timeout.stop()},Mg=()=>{if(de.timeout){const u=de.timeout.start();return sn(u),u}},sx=()=>{const u=de.timeout;return u&&(u.running?Fg():Mg())},ox=u=>{if(de.timeout){const c=de.timeout.increase(u);return sn(c,!0),c}},ax=()=>de.timeout&&de.timeout.isRunning();let Ug=!1;const fd={};function lx(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";fd[u]=this,Ug||(document.body.addEventListener("click",ux),Ug=!0)}const ux=u=>{for(let c=u.target;c&&c!==document;c=c.parentNode)for(const f in fd){const y=c.getAttribute(f);if(y){fd[f].fire({template:y});return}}};var cx=Object.freeze({__proto__:null,argsToParams:tx,bindClickHandler:lx,clickCancel:Kk,clickConfirm:Eg,clickDeny:qk,enableLoading:zi,fire:nx,getActions:Q,getCancelButton:De,getCloseButton:F,getConfirmButton:Ae,getContainer:E,getDenyButton:it,getFocusableElements:j,getFooter:te,getHtmlContainer:X,getIcon:U,getIconContent:B,getImage:He,getInputLabel:ct,getLoader:$,getPopup:P,getProgressSteps:Le,getTimerLeft:ix,getTimerProgressBar:we,getTitle:ue,getValidationMessage:ze,increaseTimer:ox,isDeprecatedParameter:ld,isLoading:ce,isTimerRunning:ax,isUpdatableParameter:_g,isValidParameter:Ag,isVisible:Wk,mixin:rx,resumeTimer:Mg,showLoading:zi,stopTimer:Fg,toggleTimer:sx});class dx{constructor(c,f){this.callback=c,this.remaining=f,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(c){const f=this.running;return f&&this.stop(),this.remaining+=c,f&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Bg=["swal-title","swal-html","swal-footer"],hx=u=>{const c=typeof u.template=="string"?document.querySelector(u.template):u.template;if(!c)return{};const f=c.content;return Ex(f),Object.assign(fx(f),px(f),mx(f),gx(f),yx(f),vx(f),wx(f,Bg))},fx=u=>{const c={};return Array.from(u.querySelectorAll("swal-param")).forEach(y=>{Qr(y,["name","value"]);const x=y.getAttribute("name"),G=y.getAttribute("value");typeof Bi[x]=="boolean"?c[x]=G!=="false":typeof Bi[x]=="object"?c[x]=JSON.parse(G):c[x]=G}),c},px=u=>{const c={};return Array.from(u.querySelectorAll("swal-function-param")).forEach(y=>{const x=y.getAttribute("name"),G=y.getAttribute("value");c[x]=new Function(`return ${G}`)()}),c},mx=u=>{const c={};return Array.from(u.querySelectorAll("swal-button")).forEach(y=>{Qr(y,["type","color","aria-label"]);const x=y.getAttribute("type");c[`${x}ButtonText`]=y.innerHTML,c[`show${d(x)}Button`]=!0,y.hasAttribute("color")&&(c[`${x}ButtonColor`]=y.getAttribute("color")),y.hasAttribute("aria-label")&&(c[`${x}ButtonAriaLabel`]=y.getAttribute("aria-label"))}),c},gx=u=>{const c={},f=u.querySelector("swal-image");return f&&(Qr(f,["src","width","height","alt"]),f.hasAttribute("src")&&(c.imageUrl=f.getAttribute("src")),f.hasAttribute("width")&&(c.imageWidth=f.getAttribute("width")),f.hasAttribute("height")&&(c.imageHeight=f.getAttribute("height")),f.hasAttribute("alt")&&(c.imageAlt=f.getAttribute("alt"))),c},yx=u=>{const c={},f=u.querySelector("swal-icon");return f&&(Qr(f,["type","color"]),f.hasAttribute("type")&&(c.icon=f.getAttribute("type")),f.hasAttribute("color")&&(c.iconColor=f.getAttribute("color")),c.iconHtml=f.innerHTML),c},vx=u=>{const c={},f=u.querySelector("swal-input");f&&(Qr(f,["type","label","placeholder","value"]),c.input=f.getAttribute("type")||"text",f.hasAttribute("label")&&(c.inputLabel=f.getAttribute("label")),f.hasAttribute("placeholder")&&(c.inputPlaceholder=f.getAttribute("placeholder")),f.hasAttribute("value")&&(c.inputValue=f.getAttribute("value")));const y=Array.from(u.querySelectorAll("swal-input-option"));return y.length&&(c.inputOptions={},y.forEach(x=>{Qr(x,["value"]);const G=x.getAttribute("value"),xe=x.innerHTML;c.inputOptions[G]=xe})),c},wx=(u,c)=>{const f={};for(const y in c){const x=c[y],G=u.querySelector(x);G&&(Qr(G,[]),f[x.replace(/^swal-/,"")]=G.innerHTML.trim())}return f},Ex=u=>{const c=Bg.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(u.children).forEach(f=>{const y=f.tagName.toLowerCase();c.includes(y)||h(`Unrecognized element <${y}>`)})},Qr=(u,c)=>{Array.from(u.attributes).forEach(f=>{c.indexOf(f.name)===-1&&h([`Unrecognized attribute "${f.name}" on <${u.tagName.toLowerCase()}>.`,`${c.length?`Allowed attributes are: ${c.join(", ")}`:"To set the value, use HTML within the element."}`])})},zg=10,Ix=u=>{const c=E(),f=P();typeof u.willOpen=="function"&&u.willOpen(f);const x=window.getComputedStyle(document.body).overflowY;kx(c,f,u),setTimeout(()=>{Sx(c,f)},zg),ee()&&(Cx(c,u.scrollbarPadding,x),tb()),!k()&&!de.previousActiveElement&&(de.previousActiveElement=document.activeElement),typeof u.didOpen=="function"&&setTimeout(()=>u.didOpen(f)),ae(c,s["no-transition"])},jg=u=>{const c=P();if(u.target!==c)return;const f=E();c.removeEventListener(Qs,jg),f.style.overflowY="auto"},Sx=(u,c)=>{Qs&&Mi(c)?(u.style.overflowY="hidden",c.addEventListener(Qs,jg)):u.style.overflowY="auto"},Cx=(u,c,f)=>{nb(),c&&f!=="hidden"&&ub(),setTimeout(()=>{u.scrollTop=0})},kx=(u,c,f)=>{J(u,f.showClass.backdrop),c.style.setProperty("opacity","0","important"),ge(c,"grid"),setTimeout(()=>{J(c,f.showClass.popup),c.style.removeProperty("opacity")},zg),J([document.documentElement,document.body],s.shown),f.heightAuto&&f.backdrop&&!f.toast&&J([document.documentElement,document.body],s["height-auto"])};var Vg={email:(u,c)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(u)?Promise.resolve():Promise.resolve(c||"Invalid email address"),url:(u,c)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(u)?Promise.resolve():Promise.resolve(c||"Invalid URL")};function bx(u){u.inputValidator||Object.keys(Vg).forEach(c=>{u.input===c&&(u.inputValidator=Vg[c])})}function xx(u){(!u.target||typeof u.target=="string"&&!document.querySelector(u.target)||typeof u.target!="string"&&!u.target.appendChild)&&(h('Target parameter is not valid, defaulting to "body"'),u.target="body")}function Tx(u){bx(u),u.showLoaderOnConfirm&&!u.preConfirm&&h(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),xx(u),typeof u.title=="string"&&(u.title=u.title.split(`
`).join("<br />")),dk(u)}let An;class ji{constructor(){if(typeof window>"u")return;An=this;for(var c=arguments.length,f=new Array(c),y=0;y<c;y++)f[y]=arguments[y];const x=Object.freeze(this.constructor.argsToParams(f));Object.defineProperties(this,{params:{value:x,writable:!1,enumerable:!0,configurable:!0}});const G=An._main(An.params);n.promise.set(this,G)}_main(c){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Pb(Object.assign({},f,c)),de.currentInstance&&(de.currentInstance._destroy(),ee()&&Cg()),de.currentInstance=An;const y=_x(c,f);Tx(y),Object.freeze(y),de.timeout&&(de.timeout.stop(),delete de.timeout),clearTimeout(de.restoreFocusTimeout);const x=Px(An);return vg(An,y),n.innerParams.set(An,y),Ax(An,x,y)}then(c){return n.promise.get(this).then(c)}finally(c){return n.promise.get(this).finally(c)}}const Ax=(u,c,f)=>new Promise((y,x)=>{const G=xe=>{u.close({isDismissed:!0,dismiss:xe})};Xs.swalPromiseResolve.set(u,y),Xs.swalPromiseReject.set(u,x),c.confirmButton.onclick=()=>{Hb(u)},c.denyButton.onclick=()=>{Wb(u)},c.cancelButton.onclick=()=>{qb(u,G)},c.closeButton.onclick=()=>{G(Ui.close)},Gb(u,c,G),Gk(u,de,f,G),Lb(u,f),Ix(f),Rx(de,f,G),Dx(c,f),setTimeout(()=>{c.container.scrollTop=0})}),_x=(u,c)=>{const f=hx(u),y=Object.assign({},Bi,c,f,u);return y.showClass=Object.assign({},Bi.showClass,y.showClass),y.hideClass=Object.assign({},Bi.hideClass,y.hideClass),y},Px=u=>{const c={popup:P(),container:E(),actions:Q(),confirmButton:Ae(),denyButton:it(),cancelButton:De(),loader:$(),closeButton:F(),validationMessage:ze(),progressSteps:Le()};return n.domCache.set(u,c),c},Rx=(u,c,f)=>{const y=we();qe(y),c.timer&&(u.timeout=new dx(()=>{f("timer"),delete u.timeout},c.timer),c.timerProgressBar&&(ge(y),K(y,c,"timerProgressBar"),setTimeout(()=>{u.timeout&&u.timeout.running&&sn(c.timer)})))},Dx=(u,c)=>{if(!c.toast){if(!S(c.allowEnterKey)){Ox();return}Nx(u,c)||ad(-1,1)}},Nx=(u,c)=>c.focusDeny&&q(u.denyButton)?(u.denyButton.focus(),!0):c.focusCancel&&q(u.cancelButton)?(u.cancelButton.focus(),!0):c.focusConfirm&&q(u.confirmButton)?(u.confirmButton.focus(),!0):!1,Ox=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const u=new Date,c=localStorage.getItem("swal-initiation");c?(u.getTime()-Date.parse(c))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const f=document.createElement("audio");f.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",f.loop=!0,document.body.appendChild(f),setTimeout(()=>{f.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${u}`)}Object.assign(ji.prototype,Rg),Object.assign(ji,cx),Object.keys(Rg).forEach(u=>{ji[u]=function(){if(An)return An[u](...arguments)}}),ji.DismissReason=Ui,ji.version="11.7.3";const Ya=ji;return Ya.default=Ya,Ya}),typeof ur<"u"&&ur.Sweetalert2&&(ur.swal=ur.sweetAlert=ur.Swal=ur.SweetAlert=ur.Sweetalert2),typeof document<"u"&&function(n,r){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')})(EB);const Ti=Xf,IB=rd(mn),SB=M.div`
  &>a{
    display: inline-block;
    margin: 10px;
  }
  `,CB=M.div`
  width: 90%;
  margin: 0 auto;
  max-width: 800px;
  box-sizing: border-box;
  
  `,kB=M.div`
  width: 100%;
  text-align: center;
  >img{
    width: 191px;
    height: 191px;
  }
`,bB=M.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  height: 320px;
  margin: 0 auto;
  margin-top: 10px;
  &>h2{
    font-size: 3rem;
    margin: 0;
    color: #424242;
  }
  &>form{
    width: 100%;
    height: 80%;
    border: 1px solid #DFDFDF;
    border-radius: 16px;
  }
`,xB=M.div`
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
      margin-top: 20px;
      gap: 15px;
      &>div{
        display: flex;
        flex-direction: column;
        &>label{
          color:#777070;
          font-size:1.4rem;
          margin-bottom: 5px;
          font-weight: 500;
        }
        &>input{
        border: 1px solid #DFDFDF;
        border-radius: 10px;
        height: 40px;
        outline: none;
        padding: 0;
      }
      }
      &>button{
        width: 92px;
        height: 40px;
        color: #ffff;
        background: #FA6241;
        border-radius: 8px;
        border: none;
        align-self:center ;
        font-weight: 600;
        box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.21);

        transition:  all ease .7s;
        cursor: pointer;
        &:hover{
          opacity:.7 ;
        }
      }
`,TB=()=>{const t=_.useContext(yt),e=zs(),[n,r]=_.useState(""),[i,s]=_.useState(""),[o,a]=_.useState({message:"",isError:!1}),l=async d=>{d.preventDefault();try{await nU(IB,n,i),e("/dashboard"),localStorage.setItem("adminIsLogged","true")}catch{a({message:"Correo o contraseña son incorrectos",isError:!1}),await Ti.fire({title:"¡Contraseña o correo son incorrectos!",icon:"error"})}};return _.useEffect(()=>{t!=null&&t.state.user.isLogged&&e("/dashboard")},[]),O(SB,{children:[v($t,{to:"/",children:v("img",{alt:"",height:"30",width:"30",src:kC})}),O(CB,{children:[v(kB,{children:v("img",{alt:"",src:nm})}),O(bB,{children:[v("h2",{children:"Log in"}),v("form",{onSubmit:l,children:O(xB,{children:[O("div",{children:[v("label",{htmlFor:"",children:"Username"}),v("input",{onChange:d=>{r(d.target.value)},type:"text"})]}),O("div",{children:[v("label",{htmlFor:"",children:"Password"}),v("input",{onChange:d=>{s(d.target.value)},type:"password"})]}),v("button",{children:"Log in"})]})})]})]})]})},AB="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAYAAAB2pebxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADmSURBVHgB7VTBDYJQDO1HB9AJlAlwBJhE3QAuevUo8UA3kBWcQN0AJ/CP4ATU18CBEMjHyMGDTUrT8v77bfPAUIft4/iKEHa8ylPmbbtocEDoS/NoBJvCffizziO4dR0qMSpuP9fYyGixMZKPmZ0kwIcIujcLvD/tATFCQMZwmmWXXZKsjcgGHdxPzIc2vm8nATwsReaaiIiOrCMsusCjLPZP8ssknWKDqB5edYPVfIIISd8gvmIwCVQZN/Mjc46Q08BOlpA8uQxdzUybBMUCxRVVH5XTGgQvfXg1if6tLH1mtqzO0RvEgUCCNZh5wQAAAABJRU5ErkJggg==",_B=Li(mn),PB=({initialForm:t,validateForm:e})=>{const[n,r]=_.useState(t),[i,s]=_.useState({}),[o,a]=_.useState(!1),[l,d]=_.useState(void 0),h=I=>{const{name:C,value:S}=I.target;r({...n,[C]:S})};return{form:n,errors:i,loading:o,response:l,handleChange:h,handleBlur:I=>{h(I),s(e(n))},handleSubmit:async I=>{I.preventDefault(),s(e(n));try{if(Object.keys(i).length===0){const C={...n,orderCompleted:!1,date:new Date().toLocaleDateString(),hour:new Date().toLocaleTimeString()};a(!0),await CC(Yc(_B,"orders"),C),d(!0),Ti.fire({icon:"success",title:"¡Pedido realizado con éxito!"}).then(S=>{r(t),d(!1)}),a(!1)}}catch(C){Ti.fire({icon:"error",title:"Ocurrio un error"}).then(S=>{d(!1)}),a(!1),console.log(C)}}}},RB=ar`
  from {
    opacity: 0;
    transform:  scale(0.8);
  }
  to {
    opacity: 1;
    transform:  scale(1);
  }
`,DB=M.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    background:#2a292933;
    min-height:100vh;
    width:100vw;
    left:0;
    top:0;
    z-index:20;
    overflow-x:hidden;
    `,NB=M.div`
    background:#fff;
    margin:0 10px;
    padding:15px 20px;
    width:400px;
    min-width:310px;
    animation: ${RB} ease .7s; 
`,OB=M.form`
    &>div{
        display:flex;
        flex-direction:column;
        margin-bottom:10px;
        &>input, textarea{
            border: 1px solid #DFDFDF;
            border-radius: 10px;
            height: 40px;
            outline: none;
            padding: 0;
            min-width:240px;
            padding:5px 10px;
            resize:none;
        }
        &>h6{
            margin:5px 0;
            font-size:1.2rem;
            font-weight:400;
            color:#e88181;
        }
        &>label{
            color:#777070;
          font-size:1.4rem;
          margin-bottom: 5px;
          font-weight: 500;
        }
    }
`,$B=M.article`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:100%;
    gap:15px;
    min-height:40px;
    box-sizing:border-box;
    margin:10px 0 0 0;
    &>button{
        display:inline;
        width: 80px;
        height: 35px;
        color: #ffff;
        background: #FA6241;

        border-radius: 8px;
        border: none;
        font-weight: 600;
        box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.21);

        transition:  all ease .7s;
        cursor: pointer;
        &:hover{
          opacity:.7 ;
        }
        }
    &>button:first-child{
        background: transparent;
        border:1px #FA6241 solid;
        color:#3d3d3d;

    }

`,LB={name:"",street:"",phone:"",comment:""},FB=t=>{const e={},n=/^[A-Za-z\s]+$/,r=/^[2-9]\d{2}[2-9]\d{2}\d{4}$/;return t.name.trim()?n.test(t.name.trim())||(e.name="Nombre es invalido"):e.name="Este campo es requerido",t.phone?r.test(t.phone.trim())||(e.phone="Numero celular es invalido"):e.phone="Este campo es requerido",t.comment&&t.comment.length>100&&(e.comment="Sobrepaso el limite de 100 caracteres"),e},MB=({openOrder:t,setOpenOrden:e})=>{const{form:n,errors:r,loading:i,handleChange:s,handleBlur:o,handleSubmit:a,response:l}=PB({initialForm:LB,validateForm:FB});return _.useEffect(()=>{l&&e(!1)},[l]),v(DB,{children:v(NB,{children:O(OB,{onSubmit:a,children:[O("div",{children:[v("label",{htmlFor:"name",children:"Nombre*"}),v("input",{value:n.name,onChange:s,onBlur:o,required:!0,name:"name",type:"text"}),r.name&&v("h6",{children:r.name})]}),O("div",{children:[v("label",{htmlFor:"street",children:"Direccion*"}),v("input",{value:n.street,onChange:s,onBlur:o,required:!0,name:"street",type:"text"}),r.street&&v("h6",{children:r.street})]}),O("div",{children:[v("label",{htmlFor:"phone",children:"Celular*"}),v("input",{value:n.phone,onChange:s,onBlur:o,required:!0,name:"phone",type:"number"}),r.phone&&v("h6",{children:r.phone})]}),O("div",{children:[v("label",{htmlFor:"comment",children:"Comentario adicional (opcional)"}),v("textarea",{value:n.comment,onChange:s,onBlur:o,name:"comment"}),r.comment&&v("h6",{children:r.comment})]}),i&&v(SE,{}),O($B,{children:[v("button",{type:"button",onClick:()=>{e(!t)},children:"Cancelar"}),v("button",{children:"Confirmar"})]})]})})})},UB=M.div`
  &>a{
    display: inline-block;
    margin: 10px;
  }
  `,BB=M.div`
  width: 90%;
  margin: 0 auto;
  max-width: 800px;
  box-sizing: border-box;

  &>p{
    font-size: 1.2rem;
    color: #FA6241;
    margin-top: 20px;
  }
  &>h5{
    font-size: 1.6rem;
    color: #FA6241;
    margin-top: 20px;

  }
  `,zB=M.div`
display: grid;
gap: 10px;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
justify-content: center;
margin-top: 30px;
&>h2{
  font-size: 3rem;
  margin: 0;
  display: flex;
  align-items: center;
}
&>p{
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.4rem;
}
&>small{
  display: flex;
  align-items: center;
  font-size: 1.4rem;
}
&>div{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
  `,jB=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 40px;
 &>div{
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
  background: #F6F6F6;
  border-radius: 5px;
  height: 50px;
  padding: 0px 15px;
  &>h5{
      display: flex;
      align-items: center;
      color: #656565;
      font-size: 1.6rem;
      font-weight: 600;
      margin: 0;
  }
  &>p{
      display: flex;
      align-items: center;
      color: #656565;
      font-size: 1.6rem;
      font-weight: 600;
  }
 }
 &>button{
  
      border: none;
      background: #FA6241;
      box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.21);
      border-radius: 18px;
      height: 52px;
      width: 115px;
      color: #ffff;
      font-weight: 600;
      font-size: 1.2rem;
      margin-top: 20px;
 }
`,VB=()=>{const t=_.useContext(yt),[e,n]=_.useState(!1),r=o=>{if((t==null?void 0:t.state.cart.length)===0){o.preventDefault();return}Ti.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&(t==null||t.removeAllFromCart(),Ti.fire("Deleted!","Your file has been deleted.","success"))})},i=()=>{n(!e)},s=t?t.state.cart.reduce((o,a)=>Number(o)+Number(a.price)*Number(a.amount),0):0;return O(UB,{children:[v($t,{to:"/",children:v("img",{src:kC,alt:""})}),O(BB,{children:[e&&v(MB,{setOpenOrden:n,openOrder:e}),O(zB,{children:[v("h2",{children:"My orders"}),v("p",{children:"Remove all items"}),O("small",{children:[t==null?void 0:t.state.cart.length," Items"]}),v("div",{children:v("img",{onClick:r,alt:"",src:AB})})]}),v("div",{children:(t==null?void 0:t.state.cart.length)===0?v("h2",{children:"No hay productos"}):t==null?void 0:t.state.cart.map(o=>v(IE,{product:o},o.id))}),(t==null?void 0:t.state)&&t.state.cart.length>0&&O(jB,{children:[O("div",{children:[v("h5",{children:"Total:"}),v("p",{children:wc(s)})]}),v("button",{onClick:i,children:"Place order"})]}),v("h5",{children:"¡Atencion!"}),O("p",{children:["El pago se realizará únicamente en efectivo al momento de la entrega. Una vez que hayas concretado tu pedido, recibirás los detalles de contacto a través de WhatsApp. ",v("br",{}),v("br",{}),"¡Gracias por tu preferencia! Nuestro equipo se encargará de preparar tu pedido y realizará el cobro al momento de la entrega"]})]})]})},HB="/assets/usedash-bc3bb59b.png",WB=M.div`
  position: fixed;
  width: 100vw;
  left: 0;
  top:0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 20px;
  background-color: #201368;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  &>div{
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 90%;
	color: #fff;
}

`,qB=()=>{const t=_.useContext(yt);return v(WB,{children:O("div",{children:[v("img",{width:25,src:HB,alt:"user"}),v("p",{children:t==null?void 0:t.state.user.email})]})})},KB="/assets/homeicon-af3dabd8.png",GB="/assets/producticon-911358ae.png",QB="/assets/dashboardicon-d5d4ecc4.png",YB="/assets/ordericon-435c855f.png",XB="/assets/logouticon-71c0b5f8.png",JB=rd(mn),ZB=M.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

`,e5=M.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content:space-between;
	padding-bottom: 40px;
  background-color: #201368;
  width: 200px;
  align-items: center;
  color: #fff;
  &>ul{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 50px;
	padding: 0;
	height: 300px;
	width: 100%;
	&>li{
		list-style: none;
		width: 110px;
		&>a{
			display: flex;
			align-items: center;
			gap: 5px;
			font-size: 1.5rem;
			text-decoration: none;
			width: 100%;
			transition: ease-in .2s ;
			color: #f3f3f3;
			justify-content: center;
			font-weight: 600;
			border-radius: 3px;
			&:hover{
				background: #6a2951;
				padding: 5px;
				color: #fff;
				
			}
		}
	}
  }
  &>div{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 80px;
  }

`,t5=M.div`
  flex-grow: 1;
`,n5=({children:t})=>{const e=_.useContext(yt),n=zs();return O(ZB,{children:[O(e5,{children:[O("div",{children:[v("img",{width:50,src:QB,alt:""}),v("h3",{children:"Dashboard"})]}),O("ul",{children:[v("li",{children:O($t,{to:"/dashboard",children:[v("img",{width:15,src:KB}),"Home"]})}),v("li",{children:O($t,{to:"/dashboard/products",children:[" ",v("img",{width:18,src:GB,alt:""})," Products"]})}),v("li",{children:O($t,{to:"/dashboard/orders",children:[" ",v("img",{width:18,src:YB,alt:""})," Orders"]})}),v("li",{onClick:async()=>{try{await oU(JB),n("/"),localStorage.removeItem("adminIsLogged"),e==null||e.setState({...e.state,user:{email:"",token:"",isLogged:!1}})}catch(i){console.log(i)}},children:O($t,{to:"#",children:[" ",v("img",{width:18,src:XB,alt:""})," Log out"]})})]}),v("div",{children:"All rights reserved  © 2023"})]}),v(t5,{children:t})]})},fh=({children:t})=>{const e=_.useContext(yt);return _.useEffect(()=>{(async()=>{try{const n=await rg();e==null||e.getProducts(n)}catch(n){console.log(n)}})()},[]),O(n5,{children:[v(qB,{}),t]})},r5=({children:t,isAllowed:e,redirectTo:n="/"})=>e?t||v(s2,{}):v(i2,{to:n}),i5="/assets/edit-69d623bf.png",ek="/assets/trashIcon-5bd7a4e9.png",s5=Li(mn),o5=M.div`
	display: flex;
	align-items: center;
	min-height: 100vh;
`,a5=M.div`
	width: 70%;
	margin: 0 auto;
	padding: 60px;
	max-width: 1200px;
	&>a{

		display: flex;
		align-items: center;
		text-decoration: none;
		justify-content: center;
		background: royalblue;
		width: 110px;
		height: 40px;
		border: none;
		border-radius: 5px;
		color: #fff;
		font-size: 1.4rem;
		font-weight: bold;
	}
`,l5=M.table`
  width: 100%;
  margin: 50px auto;
  font-size: 2rem;
  border: 1px solid #b8b7b790;
  border-radius:5px;

`,u5=M.thead`
  background-color: #f4f4f476;
`,c5=M.tr``,Yr=M.th`
  padding: 10px;
  text-align: left;
`,d5=M.tbody`
	border-radius:5px;
`,h5=M.tr`


`,Xr=M.td`
  padding: 10px;
  text-align: left;
  font-size: 1.5rem;
`,f5=M.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;M.button`
  margin-right: 10px;
`;M.button``;const p5=()=>{const t=_.useContext(yt),e=async n=>{try{Ti.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&GF(Jm(s5,"products",n)).then(i=>{t==null||t.setState({...t.state,products:t.state.products.filter(s=>s.id!==n)}),Ti.fire("Deleted!","Your file has been deleted.","success")})})}catch(r){console.log(r)}};return v(o5,{children:O(a5,{children:[v($t,{to:"add",children:"Add"}),O(l5,{children:[v(u5,{children:O(c5,{children:[v(Yr,{children:"ID"}),v(Yr,{children:"Description"}),v(Yr,{children:"Category"}),v(Yr,{children:"Image URL"}),v(Yr,{children:"Price"}),v(Yr,{children:"Name"}),v(Yr,{children:"Actions"})]})}),v(d5,{children:t==null?void 0:t.state.products.map(n=>O(h5,{children:[v(Xr,{children:n.id}),v(Xr,{children:n.description}),v(Xr,{children:n.category}),v(Xr,{children:v("img",{src:n.img_url,width:80,alt:""})}),v(Xr,{children:n.price}),v(Xr,{children:n.name}),v(Xr,{children:O(f5,{children:[v($t,{to:`edit/${n.id}`,children:v("img",{src:i5,width:25,alt:""})}),v($t,{to:"#",onClick:async()=>e(n.id),children:v("img",{src:ek,width:25,alt:""})})]})})]},n.id))})]})]})})};rd(mn);const m5=Li(mn),g5=M.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`,y5=M.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    min-width: 500px;
    max-width: 600px;
    background: #fff;
    max-height: 800px;
    min-height: 500px;
	&>h3{
		text-align: center;
		font-size: 2rem;
		margin-bottom: 10px;
		display: inline-block;
		&>i{
			font-size: 1.6rem;
		}
	}
    `,v5=M.div`
    border: 1px solid #d0d0d0;
    min-height: 400px;
    border-radius: 15px;
    padding: 30px 10px;
`,w5=M.form`
    width: 60%;
    margin: 0 auto;
    padding: 0;
    gap: 5px;
    &>div{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        &>label{
            font-size: 1.6rem;
            margin: 5px 0;
        }
        &>input,select{
            height: 40px;
            border: none;
            outline: none;
            font-size: 1.4rem;
            border-radius:5px;
            border: 1px solid #d0d0d0;
            padding: 5px;
        }
		&>select  option{
			background: #f6f6f695;
			font-size: 1.4rem;
			height: 40px;
			border: none;
		}
        &>textarea{
            width: 100%;
            resize: none;
            outline:none ;
            height: 60px;
            border-radius:5px;
            border: 1px solid #d0d0d0;
            padding: 5px;
        }
    }
`,E5=M.section`
display: flex;
margin: 15px 0;
gap: 10px;
    &>button,&>a{
        width: 90px;
        height: 30px;
        border: none;
        font-size: 1.4rem;
        background: royalblue;
        color: #fff;
        border-radius:5px ;
		cursor: pointer;
    }
	&>a{
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		cursor: pointer;
	}
`,I5=()=>{_.useContext(yt);const t=G_(),[e,n]=_.useState(void 0),r=zs(),[i,s]=_.useState({name:"",description:"",price:"",category:"",img_url:"",id:""});_.useEffect(()=>{(async()=>{try{const d=(await rg()).find(h=>h.id===t.id);d&&s({name:d==null?void 0:d.name,description:d==null?void 0:d.description,price:d==null?void 0:d.price,category:d==null?void 0:d.category,img_url:d==null?void 0:d.img_url,id:d==null?void 0:d.id}),n(d)}catch(l){console.log(l)}})()},[]);const o=l=>{const{value:d}=l.target;i&&s({...i,[l.target.name]:d})},a=async l=>{l.preventDefault();try{if(e){const{id:d}=e;await KF(Jm(m5,"products",d),i),r("/dashboard/products")}}catch(d){console.log(d)}};return v(g5,{children:O(y5,{children:[O("h3",{children:["Edit product: ",O("i",{children:[" ",e==null?void 0:e.id]})]}),e&&v(v5,{children:O(w5,{onSubmit:a,children:[O("div",{children:[v("label",{htmlFor:"",children:"Name"}),v("input",{onChange:o,defaultValue:i==null?void 0:i.name,name:"name",type:"text"})]}),O("div",{children:[v("label",{htmlFor:"",children:"Description"}),v("textarea",{onChange:o,name:"description",defaultValue:i==null?void 0:i.description})]}),O("div",{children:[v("label",{htmlFor:"",children:"Price"}),v("input",{onChange:o,name:"price",defaultValue:i==null?void 0:i.price,type:"text"})]}),v("div",{children:O("select",{onChange:o,name:"category",defaultValue:i==null?void 0:i.category,children:[v("option",{value:"",selected:!0,children:"Choose an category"}),v("option",{value:"pizza",children:"Pizza"}),v("option",{value:"empanada",children:"Empanada"}),v("option",{value:"bebida",children:"Bebidas"}),v("option",{value:"postre",children:"Postres"})]})}),O("div",{children:[v("label",{htmlFor:"",children:"Img url"}),v("input",{onChange:o,name:"img_url",defaultValue:i==null?void 0:i.img_url,type:"text"})]}),O(E5,{children:[v("button",{type:"submit",children:"Edit"}),v($t,{to:"/dashboard/products",children:"Cancel"})]})]})})]})})},S5=Li(mn),C5=M.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`,k5=M.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    min-width: 500px;
    max-width: 600px;
    background: #fff;
    max-height: 800px;
    min-height: 500px;

	&>h3{
		text-align: center;
		font-size: 2rem;
		margin-bottom: 10px;
	}
    `,b5=M.div`
    border: 1px solid #d0d0d0;
    min-height: 400px;
    border-radius: 15px;
    padding: 20px 5px;
`,x5=M.form`
    width: 60%;
    margin: 0 auto;
    padding: 0;
    gap: 5px;
    &>div{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        &>label{
            font-size: 1.6rem;
            margin: 5px 0;
        }
        &>input,select{
            height: 40px;
            border: none;
            outline: none;
            font-size: 1.4rem;
            border-radius:5px;
            border: 1px solid #d0d0d0;
            padding: 5px;
        }
		&>select  option{
			background: #f6f6f695;
			font-size: 1.4rem;
			height: 40px;
			border: none;
		}
        &>textarea{
            width: 100%;
            resize: none;
            outline:none ;
            height: 60px;
            border-radius:5px;
            border: 1px solid #d0d0d0;
            padding: 5px;
        }
    }
`,T5=M.section`
display: flex;
margin-top: 10px;
gap: 10px;
    &>button{
        width: 90px;
        height: 30px;
        border: none;
        font-size: 1.4rem;
        background: royalblue;
        color: #fff;
        border-radius:5px ;
		text-decoration: none;
		text-align: center;
    }
	&>a{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90px;
        height: 30px;
        border: none;
        font-size: 1.4rem;
        background: royalblue;
        color: #fff;
        border-radius:5px ;
		text-decoration: none;
		text-align: center;
	}
`,A5=()=>{const[t,e]=_.useState({name:"",description:"",price:"",category:"",img_url:"",id:""}),n=zs(),r=s=>{const{value:o}=s.target;t&&e({...t,[s.target.name]:o})};return v(C5,{children:O(k5,{children:[v("h3",{children:"Add new product"}),v(b5,{children:O(x5,{onSubmit:async s=>{s.preventDefault();try{await CC(Yc(S5,"products"),t),n("/dashboard/products")}catch(o){console.log(o)}},children:[O("div",{children:[v("label",{htmlFor:"",children:"Name"}),v("input",{required:!0,name:"name",onChange:r,defaultValue:t==null?void 0:t.name,type:"text"})]}),O("div",{children:[v("label",{htmlFor:"",children:"Description"}),v("textarea",{required:!0,name:"description",onChange:r,defaultValue:t==null?void 0:t.description})]}),O("div",{children:[v("label",{htmlFor:"",children:"Price"}),v("input",{required:!0,name:"price",onChange:r,defaultValue:t==null?void 0:t.price,type:"text"})]}),v("div",{children:O("select",{required:!0,name:"category",onChange:r,defaultValue:t==null?void 0:t.category,children:[v("option",{value:"",children:"Choose an category"}),v("option",{value:"pizza",children:"Pizza"}),v("option",{value:"empanada",children:"Empanada"}),v("option",{value:"bebida",children:"Bebidas"}),v("option",{value:"postre",children:"Postres"})]})}),O("div",{children:[v("label",{htmlFor:"",children:"Img url"}),v("input",{required:!0,name:"img_url",onChange:r,defaultValue:t==null?void 0:t.img_url,type:"text"})]}),O(T5,{children:[v("button",{type:"submit",children:"Add"}),v($t,{to:"/dashboard/products",children:"Cancel"})]})]})})]})})},_5=Li(mn),P5=async()=>{const t=Yc(_5,"orders");return(await SC(t)).docs.map(r=>({id:r.id,...r.data()}))};Li(mn);const R5=M.div`
	display: flex;
	align-items: center;
	min-height: 100vh;
`,D5=M.div`
	width: 70%;
	margin: 0 auto;
	padding: 60px;
	max-width: 1200px;
	&>a{

		display: flex;
		align-items: center;
		text-decoration: none;
		justify-content: center;
		background: royalblue;
		width: 110px;
		height: 40px;
		border: none;
		border-radius: 5px;
		color: #fff;
		font-size: 1.4rem;
		font-weight: bold;
	}
`,N5=M.table`
  width: 100%;
  margin: 50px auto;
  font-size: 2rem;
  border: 1px solid #b8b7b790;
  border-radius:5px;

`,O5=M.thead`
  background-color: #f4f4f476;
`,$5=M.tr``,Jr=M.th`
  padding: 10px;
  text-align: left;
`,L5=M.tbody`
	border-radius:5px;
`,F5=M.tr`


`,Zr=M.td`
  padding: 10px;
  text-align: left;
  font-size: 1.5rem;
`,M5=M.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,U5=()=>{_.useContext(yt);const[t,e]=_.useState([]);return _.useEffect(()=>{(async()=>{try{const n=await P5();e(n)}catch(n){console.log(n)}})()},[]),v(R5,{children:v(D5,{children:O(N5,{children:[v(O5,{children:O($5,{children:[v(Jr,{children:"ID"}),v(Jr,{children:"Name user"}),v(Jr,{children:"Date"}),v(Jr,{children:"Hour"}),v(Jr,{children:"Phone"}),v(Jr,{children:"Address"}),v(Jr,{children:"Actions"})]})}),v(L5,{children:t==null?void 0:t.map(n=>O(F5,{children:[v(Zr,{children:n.id}),v(Zr,{children:n.name}),v(Zr,{children:n.date}),v(Zr,{children:n.hour}),v(Zr,{children:n.phone}),v(Zr,{children:n.street}),v(Zr,{children:O(M5,{children:[v("input",{type:"checkbox"}),v($t,{to:"#",children:v("img",{src:ek,width:25,alt:""})})]})})]},n.id))})]})})})},B5=rd(mn),z5=M.div`

`,j5=()=>{const t=_.useContext(yt);return sU(B5,e=>{e&&(t?t.setState({...t.state,user:{email:e.email,token:e.getIdToken,isLogged:!0}}):console.log("ocurrio un error"))}),v(z5,{children:O(a2,{children:[v(Pn,{path:"/",element:v(yM,{})}),v(Pn,{path:"/checkout",element:v(VB,{})}),v(Pn,{path:"/login",element:v(TB,{})}),O(Pn,{element:v(r5,{isAllowed:localStorage.getItem("adminIsLogged")==="true"}),children:[v(Pn,{path:"/dashboard",element:v(fh,{children:v("h2",{children:"Este es el home"})})}),v(Pn,{path:"/dashboard/products",element:O(fh,{children:[" ",v(p5,{})," "]})}),v(Pn,{path:"/dashboard/orders",element:v(fh,{children:v(U5,{})})}),v(Pn,{path:"dashboard/products/edit/:id",element:v(I5,{})}),v(Pn,{path:"dashboard/products/add",element:v(A5,{})})]})]})})},Hv={cart:[],orderIsOpen:!1,menuIsOpen:!1,category:{name:"pizza"},products:[],user:{email:"",token:"",isLogged:!1}},V5=()=>{const[t,e]=_.useState(Hv);return{state:t,addToCart:h=>{const p=t.cart.find(m=>m.id===h.id);p||localStorage.setItem("cart",JSON.stringify([...t.cart,h])),e({...t,cart:p?t.cart:[...t.cart,h]})},toggleOrder:()=>{e({...t,orderIsOpen:!t.orderIsOpen})},toggleMenu:()=>{e({...t,menuIsOpen:!t.menuIsOpen})},setState:e,getProducts:h=>{e({...t,products:h})},removeFromCart:h=>{const p=t.cart.filter(m=>m.id!==h.id);e({...t,cart:p}),localStorage.setItem("cart",JSON.stringify(p))},removeAllFromCart:()=>{e({...t,cart:Hv.cart}),localStorage.removeItem("cart")},changeAmount:(h,p)=>{const m=t.cart.find(C=>C.id===h.id);m&&e(p==="increment"?{...t,cart:t.cart.map(C=>C.id===m.id?{...m,amount:m.amount+1}:C)}:{...t,cart:t.cart.map(C=>C.id===m.id?{...m,amount:m.amount-1}:C)}),localStorage.setItem("cart",JSON.stringify(t.cart.concat(h)))},initialCart:h=>{e({...t,cart:h})}}};function H5(){const t=V5();return v(yt.Provider,{value:t,children:v(h2,{children:v(j5,{})})})}mh.createRoot(document.getElementById("root")).render(v(Ai.StrictMode,{children:v(H5,{})}));
