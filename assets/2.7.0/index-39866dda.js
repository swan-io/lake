import{S as A,j as X,V as ee}from"./Space-8b9461bb.js";import{r as te}from"./index-76fb7be0.js";const ae=A.create({columnReverse:{flexDirection:"column-reverse"},row:{flexDirection:"row"},rowReverse:{flexDirection:"row-reverse"}}),ne=A.create({baseline:{alignItems:"baseline"},center:{alignItems:"center"},end:{alignItems:"flex-end"},start:{alignItems:"flex-start"}}),re=A.create({center:{justifyContent:"center"},end:{justifyContent:"flex-end"},start:{justifyContent:"flex-start"},spaceBetween:{justifyContent:"space-between"},spaceAround:{justifyContent:"space-around"},spaceEvenly:{justifyContent:"space-evenly"}}),k=te.forwardRef(({alignItems:e="stretch",direction:t="column",justifyContent:a="normal",style:n,...r},i)=>X(ee,{ref:i,...r,style:[e!=="stretch"&&ne[e],t!=="column"&&ae[t],a!=="normal"&&re[a],n]}));try{k.displayName="Box",k.__docgenInfo={description:"",displayName:"Box",props:{role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"grid"'},{value:'"row"'},{value:'"cell"'},{value:'"alert"'},{value:'"alertdialog"'},{value:'"application"'},{value:'"article"'},{value:'"banner"'},{value:'"button"'},{value:'"checkbox"'},{value:'"columnheader"'},{value:'"combobox"'},{value:'"complementary"'},{value:'"contentinfo"'},{value:'"definition"'},{value:'"dialog"'},{value:'"directory"'},{value:'"document"'},{value:'"feed"'},{value:'"figure"'},{value:'"form"'},{value:'"group"'},{value:'"heading"'},{value:'"img"'},{value:'"link"'},{value:'"list"'},{value:'"listitem"'},{value:'"log"'},{value:'"main"'},{value:'"marquee"'},{value:'"math"'},{value:'"menu"'},{value:'"menubar"'},{value:'"menuitem"'},{value:'"meter"'},{value:'"navigation"'},{value:'"note"'},{value:'"option"'},{value:'"presentation"'},{value:'"progressbar"'},{value:'"radio"'},{value:'"radiogroup"'},{value:'"region"'},{value:'"rowgroup"'},{value:'"rowheader"'},{value:'"scrollbar"'},{value:'"searchbox"'},{value:'"separator"'},{value:'"slider"'},{value:'"spinbutton"'},{value:'"status"'},{value:'"summary"'},{value:'"switch"'},{value:'"tab"'},{value:'"table"'},{value:'"tablist"'},{value:'"tabpanel"'},{value:'"term"'},{value:'"timer"'},{value:'"toolbar"'},{value:'"tooltip"'},{value:'"tree"'},{value:'"treegrid"'},{value:'"treeitem"'},{value:'"blockquote"'},{value:'"code"'},{value:'"deletion"'},{value:'"emphasis"'},{value:'"insertion"'},{value:'"label"'},{value:'"paragraph"'},{value:'"strong"'},{value:'"gridcell"'},{value:'"listbox"'},{value:'"menuitemcheckbox"'},{value:'"menuitemradio"'},{value:'"textbox"'}]}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyDownCapture:{defaultValue:null,description:"",name:"onKeyDownCapture",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyUpCapture:{defaultValue:null,description:"",name:"onKeyUpCapture",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},tabIndex:{defaultValue:null,description:"Additional accessibility props",name:"tabIndex",required:!1,type:{name:"enum",value:[{value:"0"},{value:"-1"}]}},"aria-activedescendant":{defaultValue:null,description:`Aria props (additional, minus existants)
@see https://necolas.github.io/react-native-web/docs/accessibility
@see https://reactnative.dev/docs/accessibility#aria-valuemax`,name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-atomic":{defaultValue:null,description:"",name:"aria-atomic",required:!1,type:{name:"boolean"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"string"}},"aria-colcount":{defaultValue:null,description:"",name:"aria-colcount",required:!1,type:{name:"number"}},"aria-colindex":{defaultValue:null,description:"",name:"aria-colindex",required:!1,type:{name:"number"}},"aria-colspan":{defaultValue:null,description:"",name:"aria-colspan",required:!1,type:{name:"number"}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},"aria-current":{defaultValue:null,description:"",name:"aria-current",required:!1,type:{name:'boolean | "page" | "step" | "location" | "date" | "time"'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}},"aria-errormessage":{defaultValue:null,description:"",name:"aria-errormessage",required:!1,type:{name:"string"}},"aria-flowto":{defaultValue:null,description:"",name:"aria-flowto",required:!1,type:{name:"string"}},"aria-haspopup":{defaultValue:null,description:"",name:"aria-haspopup",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:"boolean"}},"aria-keyshortcuts":{defaultValue:null,description:"",name:"aria-keyshortcuts",required:!1,type:{name:"string"}},"aria-level":{defaultValue:null,description:"",name:"aria-level",required:!1,type:{name:"number"}},"aria-multiline":{defaultValue:null,description:"",name:"aria-multiline",required:!1,type:{name:"boolean"}},"aria-multiselectable":{defaultValue:null,description:"",name:"aria-multiselectable",required:!1,type:{name:"boolean"}},"aria-orientation":{defaultValue:null,description:"",name:"aria-orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},"aria-owns":{defaultValue:null,description:"",name:"aria-owns",required:!1,type:{name:"string"}},"aria-placeholder":{defaultValue:null,description:"",name:"aria-placeholder",required:!1,type:{name:"string"}},"aria-posinset":{defaultValue:null,description:"",name:"aria-posinset",required:!1,type:{name:"number"}},"aria-pressed":{defaultValue:null,description:"",name:"aria-pressed",required:!1,type:{name:"boolean"}},"aria-readonly":{defaultValue:null,description:"",name:"aria-readonly",required:!1,type:{name:"boolean"}},"aria-required":{defaultValue:null,description:"",name:"aria-required",required:!1,type:{name:"boolean"}},"aria-roledescription":{defaultValue:null,description:"",name:"aria-roledescription",required:!1,type:{name:"string"}},"aria-rowcount":{defaultValue:null,description:"",name:"aria-rowcount",required:!1,type:{name:"number"}},"aria-rowindex":{defaultValue:null,description:"",name:"aria-rowindex",required:!1,type:{name:"number"}},"aria-rowspan":{defaultValue:null,description:"",name:"aria-rowspan",required:!1,type:{name:"number"}},"aria-setsize":{defaultValue:null,description:"",name:"aria-setsize",required:!1,type:{name:"number"}},"aria-sort":{defaultValue:null,description:"",name:"aria-sort",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"ascending"'},{value:'"descending"'},{value:'"other"'}]}},alignItems:{defaultValue:{value:"stretch"},description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"stretch"'},{value:'"baseline"'}]}},direction:{defaultValue:{value:"column"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'},{value:'"columnReverse"'},{value:'"rowReverse"'}]}},justifyContent:{defaultValue:{value:"normal"},description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"spaceBetween"'},{value:'"spaceAround"'},{value:'"spaceEvenly"'}]}}}}}catch{}const m=Symbol.for("@ts-pattern/matcher"),_=Symbol.for("@ts-pattern/isVariadic"),j="@ts-pattern/anonymous-select-key",B=e=>!!(e&&typeof e=="object"),E=e=>e&&!!e[m],s=(e,t,a)=>{if(E(e)){const n=e[m](),{matched:r,selections:i}=n.match(t);return r&&i&&Object.keys(i).forEach(o=>a(o,i[o])),r}if(B(e)){if(!B(t))return!1;if(Array.isArray(e)){if(!Array.isArray(t))return!1;let n=[],r=[],i=[];for(const o of e.keys()){const c=e[o];E(c)&&c[_]?i.push(c):i.length?r.push(c):n.push(c)}if(i.length){if(i.length>1)throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(t.length<n.length+r.length)return!1;const o=t.slice(0,n.length),c=r.length===0?[]:t.slice(-r.length),b=t.slice(n.length,r.length===0?1/0:-r.length);return n.every((h,w)=>s(h,o[w],a))&&r.every((h,w)=>s(h,c[w],a))&&(i.length===0||s(i[0],b,a))}return e.length===t.length&&e.every((o,c)=>s(o,t[c],a))}return Object.keys(e).every(n=>{const r=e[n];return(n in t||E(i=r)&&i[m]().matcherType==="optional")&&s(r,t[n],a);var i})}return Object.is(t,e)},p=e=>{var t,a,n;return B(e)?E(e)?(t=(a=(n=e[m]()).getSelectionKeys)==null?void 0:a.call(n))!=null?t:[]:Array.isArray(e)?x(e,p):x(Object.values(e),p):[]},x=(e,t)=>e.reduce((a,n)=>a.concat(t(n)),[]);function ie(...e){if(e.length===1){const[t]=e;return a=>s(t,a,()=>{})}if(e.length===2){const[t,a]=e;return s(t,a,()=>{})}throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`)}function d(e){return Object.assign(e,{optional:()=>C(e),and:t=>u(e,t),or:t=>N(e,t),select:t=>t===void 0?S(e):S(t,e)})}function I(e){return Object.assign((t=>Object.assign(t,{*[Symbol.iterator](){yield Object.assign(t,{[_]:!0})}}))(e),{optional:()=>I(C(e)),select:t=>I(t===void 0?S(e):S(t,e))})}function C(e){return d({[m]:()=>({match:t=>{let a={};const n=(r,i)=>{a[r]=i};return t===void 0?(p(e).forEach(r=>n(r,void 0)),{matched:!0,selections:a}):{matched:s(e,t,n),selections:a}},getSelectionKeys:()=>p(e),matcherType:"optional"})})}const le=(e,t)=>{for(const a of e)if(!t(a))return!1;return!0},ue=(e,t)=>{for(const[a,n]of e.entries())if(!t(n,a))return!1;return!0};function u(...e){return d({[m]:()=>({match:t=>{let a={};const n=(r,i)=>{a[r]=i};return{matched:e.every(r=>s(r,t,n)),selections:a}},getSelectionKeys:()=>x(e,p),matcherType:"and"})})}function N(...e){return d({[m]:()=>({match:t=>{let a={};const n=(r,i)=>{a[r]=i};return x(e,p).forEach(r=>n(r,void 0)),{matched:e.some(r=>s(r,t,n)),selections:a}},getSelectionKeys:()=>x(e,p),matcherType:"or"})})}function l(e){return{[m]:()=>({match:t=>({matched:!!e(t)})})}}function S(...e){const t=typeof e[0]=="string"?e[0]:void 0,a=e.length===2?e[1]:typeof e[0]=="string"?void 0:e[0];return d({[m]:()=>({match:n=>{let r={[t??j]:n};return{matched:a===void 0||s(a,n,(i,o)=>{r[i]=o}),selections:r}},getSelectionKeys:()=>[t??j].concat(a===void 0?[]:p(a))})})}function f(e){return typeof e=="number"}function q(e){return typeof e=="string"}function g(e){return typeof e=="bigint"}const D=d(l(function(e){return!0})),oe=D,V=e=>Object.assign(d(e),{startsWith:t=>{return V(u(e,(a=t,l(n=>q(n)&&n.startsWith(a)))));var a},endsWith:t=>{return V(u(e,(a=t,l(n=>q(n)&&n.endsWith(a)))));var a},minLength:t=>V(u(e,(a=>l(n=>q(n)&&n.length>=a))(t))),maxLength:t=>V(u(e,(a=>l(n=>q(n)&&n.length<=a))(t))),includes:t=>{return V(u(e,(a=t,l(n=>q(n)&&n.includes(a)))));var a},regex:t=>{return V(u(e,(a=t,l(n=>q(n)&&!!n.match(a)))));var a}}),se=V(l(q)),T=(e,t)=>l(a=>f(a)&&e<=a&&t>=a),z=e=>l(t=>f(t)&&t<e),R=e=>l(t=>f(t)&&t>e),U=e=>l(t=>f(t)&&t<=e),P=e=>l(t=>f(t)&&t>=e),W=()=>l(e=>f(e)&&Number.isInteger(e)),$=()=>l(e=>f(e)&&Number.isFinite(e)),L=()=>l(e=>f(e)&&e>0),M=()=>l(e=>f(e)&&e<0),v=e=>Object.assign(d(e),{between:(t,a)=>v(u(e,T(t,a))),lt:t=>v(u(e,z(t))),gt:t=>v(u(e,R(t))),lte:t=>v(u(e,U(t))),gte:t=>v(u(e,P(t))),int:()=>v(u(e,W())),finite:()=>v(u(e,$())),positive:()=>v(u(e,L())),negative:()=>v(u(e,M()))}),ce=v(l(f)),F=(e,t)=>l(a=>g(a)&&e<=a&&t>=a),J=e=>l(t=>g(t)&&t<e),G=e=>l(t=>g(t)&&t>e),H=e=>l(t=>g(t)&&t<=e),Q=e=>l(t=>g(t)&&t>=e),Y=()=>l(e=>g(e)&&e>0),Z=()=>l(e=>g(e)&&e<0),y=e=>Object.assign(d(e),{between:(t,a)=>y(u(e,F(t,a))),lt:t=>y(u(e,J(t))),gt:t=>y(u(e,G(t))),lte:t=>y(u(e,H(t))),gte:t=>y(u(e,Q(t))),positive:()=>y(u(e,Y())),negative:()=>y(u(e,Z()))}),de=y(l(g)),me=d(l(function(e){return typeof e=="boolean"})),pe=d(l(function(e){return typeof e=="symbol"})),ve=d(l(function(e){return e==null}));var ye={__proto__:null,matcher:m,optional:C,array:function(...e){return I({[m]:()=>({match:t=>{if(!Array.isArray(t))return{matched:!1};if(e.length===0)return{matched:!0};const a=e[0];let n={};if(t.length===0)return p(a).forEach(i=>{n[i]=[]}),{matched:!0,selections:n};const r=(i,o)=>{n[i]=(n[i]||[]).concat([o])};return{matched:t.every(i=>s(a,i,r)),selections:n}},getSelectionKeys:()=>e.length===0?[]:p(e[0])})})},set:function(...e){return d({[m]:()=>({match:t=>{if(!(t instanceof Set))return{matched:!1};let a={};if(t.size===0)return{matched:!0,selections:a};if(e.length===0)return{matched:!0};const n=(i,o)=>{a[i]=(a[i]||[]).concat([o])},r=e[0];return{matched:le(t,i=>s(r,i,n)),selections:a}},getSelectionKeys:()=>e.length===0?[]:p(e[0])})})},map:function(...e){return d({[m]:()=>({match:t=>{if(!(t instanceof Map))return{matched:!1};let a={};if(t.size===0)return{matched:!0,selections:a};const n=(c,b)=>{a[c]=(a[c]||[]).concat([b])};if(e.length===0)return{matched:!0};var r;if(e.length===1)throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${(r=e[0])==null?void 0:r.toString()}`);const[i,o]=e;return{matched:ue(t,(c,b)=>{const h=s(i,b,n),w=s(o,c,n);return h&&w}),selections:a}},getSelectionKeys:()=>e.length===0?[]:[...p(e[0]),...p(e[1])]})})},intersection:u,union:N,not:function(e){return d({[m]:()=>({match:t=>({matched:!s(e,t,()=>{})}),getSelectionKeys:()=>[],matcherType:"not"})})},when:l,select:S,any:D,_:oe,string:se,between:T,lt:z,gt:R,lte:U,gte:P,int:W,finite:$,positive:L,negative:M,number:ce,betweenBigInt:F,ltBigInt:J,gtBigInt:G,lteBigInt:H,gteBigInt:Q,positiveBigInt:Y,negativeBigInt:Z,bigint:de,boolean:me,symbol:pe,nullish:ve,instanceOf:function(e){return d(l(function(t){return a=>a instanceof t}(e)))},shape:function(e){return d(l(ie(e)))}};const O={matched:!1,value:void 0};function ge(e){return new K(e,O)}class K{constructor(t,a){this.input=void 0,this.state=void 0,this.input=t,this.state=a}with(...t){if(this.state.matched)return this;const a=t[t.length-1],n=[t[0]];let r;t.length===3&&typeof t[1]=="function"?(n.push(t[0]),r=t[1]):t.length>2&&n.push(...t.slice(1,t.length-1));let i=!1,o={};const c=(h,w)=>{i=!0,o[h]=w},b=!n.some(h=>s(h,this.input,c))||r&&!r(this.input)?O:{matched:!0,value:a(i?j in o?o[j]:o:this.input,this.input)};return new K(this.input,b)}when(t,a){if(this.state.matched)return this;const n=!!t(this.input);return new K(this.input,n?{matched:!0,value:a(this.input,this.input)}:O)}otherwise(t){return this.state.matched?this.state.value:t(this.input)}exhaustive(){return this.run()}run(){if(this.state.matched)return this.state.value;let t;try{t=JSON.stringify(this.input)}catch{t=this.input}throw new Error(`Pattern matching error: no pattern matches value ${t}`)}returnType(){return this}}export{k as B,ye as H,ge as R};
//# sourceMappingURL=index-39866dda.js.map
