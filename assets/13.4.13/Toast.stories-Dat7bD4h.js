import{j as e,P as ie,e as Y,s as ae,d as ce,p as P,y as F,z as I,f as le,V as W,c as f,B as U,o as ue,I as L,S as g,L as V,N as de,v as pe}from"./ScrollView-BLWx9OTT.js";import{L as v}from"./LakeButton-DyQpjOgq.js";import{P as X}from"./Pressable-rV0rAhlm.js";import{T as he}from"./TransitionGroupView-BgRTNzc7.js";import{s as me}from"./clipboard-BXAk6GqW.js";import{b as te,r as T}from"./iframe-CHXLMrF-.js";import{t as J}from"./i18n-CGlkxv9h.js";import{S as fe,a as _}from"./_StoriesComponents-D0c3UF1q.js";import"./index-CsLNxXk5.js";import"./commonStyles-BBEkV6IC.js";import"./index-Cq6KeqCz.js";import"./extends-CF3RwP-h.js";import"./TransitionView-VCRDOsQI.js";import"./preload-helper-D1IIBeq1.js";import"./rifm-DMaKDvg0.js";import"./array-BfAlyugE.js";import"./Separator-CtWIH5PB.js";var q={exports:{}},z={},C={exports:{}},A={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K;function ge(){if(K)return A;K=1;var t=te();function s(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var r=typeof Object.is=="function"?Object.is:s,n=t.useState,p=t.useEffect,l=t.useLayoutEffect,y=t.useDebugValue;function w(i,o){var a=o(),m=n({inst:{value:a,getSnapshot:o}}),d=m[0].inst,j=m[1];return l(function(){d.value=a,d.getSnapshot=o,h(d)&&j({inst:d})},[i,a,o]),p(function(){return h(d)&&j({inst:d}),i(function(){h(d)&&j({inst:d})})},[i]),y(a),a}function h(i){var o=i.getSnapshot;i=i.value;try{var a=o();return!r(i,a)}catch{return!0}}function c(i,o){return o()}var u=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?c:w;return A.useSyncExternalStore=t.useSyncExternalStore!==void 0?t.useSyncExternalStore:u,A}var Q;function ye(){return Q||(Q=1,C.exports=ge()),C.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z;function we(){if(Z)return z;Z=1;var t=te(),s=ye();function r(c,u){return c===u&&(c!==0||1/c===1/u)||c!==c&&u!==u}var n=typeof Object.is=="function"?Object.is:r,p=s.useSyncExternalStore,l=t.useRef,y=t.useEffect,w=t.useMemo,h=t.useDebugValue;return z.useSyncExternalStoreWithSelector=function(c,u,i,o,a){var m=l(null);if(m.current===null){var d={hasValue:!1,value:null};m.current=d}else d=m.current;m=w(function(){function M(b){if(!$){if($=!0,R=b,b=o(b),a!==void 0&&d.hasValue){var E=d.value;if(a(E,b))return D=E}return D=b}if(E=D,n(R,b))return E;var H=o(b);return a!==void 0&&a(E,H)?(R=b,E):(R=b,D=H)}var $=!1,R,D,G=i===void 0?null:i;return[function(){return M(u())},G===null?void 0:function(){return M(G())}]},[u,i,o,a]);var j=p(c,m[0],m[1]);return y(function(){d.hasValue=!0,d.value=j},[j]),h(j),j},z}var ee;function ve(){return ee||(ee=1,q.exports=we()),q.exports}var Se=ve();function xe(t){const s=new Set;let r=t;return{get:()=>r,set(n){r=typeof n=="function"?n(r):n,s.forEach(p=>p(r))},subscribe:n=>(s.add(n),()=>{s.delete(n)}),reset(){r=t,s.forEach(n=>n(r))}}}function be(t){return t}function je(t,s){return s===void 0&&(s=Object.is),Se.useSyncExternalStoreWithSelector(t.subscribe,t.get,t.get,be,s)}const ke=({duration:t,onEnd:s})=>{const r=new Set;let n=0,p=0;const l=()=>{const o=(n-Date.now())/t;r.forEach(a=>a(o)),y=window.requestAnimationFrame(l)};let y=window.requestAnimationFrame(l);const w=()=>{n=Date.now()+t,p=window.setTimeout(()=>{u(),s()},t)},h=()=>{window.clearTimeout(p),w()},c=o=>(r.add(o),()=>{r.delete(o)}),u=()=>{document.removeEventListener("visibilitychange",i),window.clearTimeout(p),window.cancelAnimationFrame(y)},i=()=>{document.removeEventListener("visibilitychange",i),h()};return document.hidden?document.addEventListener("visibilitychange",i):h(),{clear:u,reset:h,subscribe:c}},B=xe([]),Te=()=>je(B),ne=t=>{const s=B.get().find(r=>r.uid===t);s!=null&&(s.progress?.clear(),B.set(r=>r.filter(n=>n.uid!==t)))};let oe=new WeakMap;const Ee=t=>{oe=t},Le=()=>oe,S=({variant:t,title:s,description:r,error:n,autoClose:p})=>{const l=`${t} - ${s} - ${r??""}`,y=B.get().find(c=>c.uid===l);if(y!=null)return y.progress?.reset(),l;const h=p??(t==="info"||t==="success")?ke({duration:1e4,onEnd:()=>{ne(l)}}):void 0;return B.set(c=>[{uid:l,variant:t,title:s,description:r,error:n,progress:h},...c]),l},k=ae.create({list:{position:"fixed",right:0,bottom:0,maxHeight:"100%",maxWidth:400,paddingVertical:8,width:"100%",zIndex:10,pointerEvents:"none"},toastWrapper:{paddingHorizontal:16,paddingVertical:8,pointerEvents:"auto"},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:"hidden",boxShadow:ce.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:"absolute",width:24,height:24,right:24,top:0,bottom:0,margin:"auto"},progressBar:{height:2,transformOrigin:"left"},copyTooltip:{alignSelf:"flex-start"},copyButton:{alignItems:"center",flexDirection:"row",flexGrow:1,flexShrink:1}}),Pe=t=>{const s=F.isArray(t)?t:[t];return F.filterMap(s,r=>r instanceof Error?P.Some(r):P.None())},Oe=T.memo(({variant:t,uid:s,title:r,description:n,error:p,progress:l,onClose:y})=>{const w=T.useRef(null),[h,c]=T.useState("copy"),u=ue(n),[i]=T.useState(()=>p==null?P.None():F.findMap(Pe(p),a=>P.fromNullable(Le().get(a)))),o=I(t).returnType().with("success",()=>"positive").with("error",()=>"negative").with("info",()=>"shakespear").with("warning",()=>"warning").exhaustive();return T.useEffect(()=>{if(!le(l))return l.subscribe(a=>{w.current instanceof HTMLElement&&(w.current.style.transform=`scaleX(${a})`)})},[l]),e.jsx(W,{style:k.toastWrapper,children:e.jsxs(W,{style:[k.toast,{borderColor:f[o][200],borderLeftColor:f[o][500],backgroundColor:f[o][0]}],children:[e.jsxs(U,{style:k.contentContainer,children:[e.jsxs(U,{direction:"row",alignItems:"center",children:[I(t).with("success",()=>e.jsx(L,{name:"checkmark-circle-regular",size:20,color:f[o][700]})).with("error",()=>e.jsx(L,{name:"dismiss-circle-regular",size:20,color:f[o][700]})).with("info",()=>e.jsx(L,{name:"info-regular",size:20,color:f[o][700]})).with("warning",()=>e.jsx(L,{name:"warning-regular",size:20,color:f[o][700]})).exhaustive(),e.jsx(g,{width:12}),e.jsx(V,{variant:"regular",color:f[o][700],children:r})]}),u&&e.jsxs(e.Fragment,{children:[e.jsx(g,{height:8}),e.jsx(V,{variant:"smallRegular",color:f.gray[700],children:n})]}),I(i).with(P.P.None,()=>null).with(P.P.Some(de.select()),a=>e.jsxs(e.Fragment,{children:[e.jsx(g,{height:u?4:8}),e.jsx(pe,{describedBy:"copy",onHide:()=>c("copy"),togglableOnFocus:!0,placement:"center",containerStyle:k.copyTooltip,content:h==="copy"?J("copyButton.copyTooltip"):J("copyButton.copiedTooltip"),children:e.jsxs(X,{style:k.copyButton,onPress:m=>{m.stopPropagation(),m.preventDefault(),me(a??""),c("copied")},children:[e.jsx(L,{color:f.gray[700],size:14,name:"copy-regular"}),e.jsx(g,{width:4}),e.jsxs(V,{numberOfLines:1,variant:"smallRegular",color:f.gray[700],children:["ID: ",a]})]})})]})).exhaustive()]}),e.jsx(X,{onPress:()=>y(s),style:k.closeButton,children:e.jsx(L,{name:"lake-close",size:24,color:f.gray[500]})}),l!=null&&e.jsxs(e.Fragment,{children:[e.jsx(g,{height:24}),e.jsx(W,{ref:w,role:"progressbar",style:[k.progressBar,{backgroundColor:f[o][500]}]})]})]})})}),N=()=>{const t=Te(),[s,r]=T.useState(()=>{});return T.useEffect(()=>{const n=document.createElement("div");return document.body.append(n),r(n),()=>{n.remove(),r(void 0)}},[]),s==null?null:e.jsx(ie,{container:s,children:e.jsx(he,{style:k.list,enter:Y.fadeAndSlideInFromRight.enter,leave:Y.fadeAndSlideInFromRight.leave,children:t.map(n=>e.jsx(Oe,{uid:n.uid,variant:n.variant,title:n.title,description:n.description,error:n.error,progress:n.progress,onClose:ne},n.uid))})})};N.__docgenInfo={description:"",methods:[],displayName:"ToastStack"};const x={button:{width:200}},Ye={title:"Interactivity/Toast",component:N},re=new WeakMap;Ee(re);const se=new Error;re.set(se,"req-thvfknqp");const O=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsxs(fe,{title:"Toast",children:[e.jsxs(_,{title:"With only title",children:[e.jsx(v,{color:"positive",style:x.button,onPress:()=>S({variant:"success",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"negative",style:x.button,onPress:()=>S({variant:"error",title:"Oops ! Something went wrong"}),children:"Open error toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"shakespear",style:x.button,onPress:()=>S({variant:"info",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"warning",style:x.button,onPress:()=>S({variant:"warning",title:"Oops ! Something went wrong"}),children:"Open warning toast"})]}),e.jsxs(_,{title:"With title and description",children:[e.jsx(v,{color:"positive",style:x.button,onPress:()=>S({variant:"success",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"negative",style:x.button,onPress:()=>S({variant:"error",title:"Oops ! Something went wrong",error:se,description:"Please retry or contact us"}),children:"Open error toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"shakespear",style:x.button,onPress:()=>S({variant:"info",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"warning",style:x.button,onPress:()=>S({variant:"warning",title:"Oops ! Something went wrong",description:"Talk to an expert"}),children:"Open warning toast"})]}),e.jsxs(_,{title:"With long title and description",children:[e.jsx(v,{color:"positive",style:x.button,onPress:()=>S({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"positive",style:x.button,onPress:()=>S({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"})]})]})]});O.__docgenInfo={description:"",methods:[],displayName:"Default"};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <>
      <ToastStack />

      <StoryBlock title="Toast">
        <StoryPart title="With only title">
          <LakeButton color="positive" style={styles.button} onPress={() => showToast({
          variant: "success",
          title: "Successfully copy to clipboard !"
        })}>
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="negative" style={styles.button} onPress={() => showToast({
          variant: "error",
          title: "Oops ! Something went wrong"
        })}>
            Open error toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="shakespear" style={styles.button} onPress={() => showToast({
          variant: "info",
          title: "Successfully copy to clipboard !"
        })}>
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="warning" style={styles.button} onPress={() => showToast({
          variant: "warning",
          title: "Oops ! Something went wrong"
        })}>
            Open warning toast
          </LakeButton>
        </StoryPart>

        <StoryPart title="With title and description">
          <LakeButton color="positive" style={styles.button} onPress={() => showToast({
          variant: "success",
          title: "Successfully copy to clipboard !",
          description: "You can now paste it anywhere"
        })}>
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="negative" style={styles.button} onPress={() => showToast({
          variant: "error",
          title: "Oops ! Something went wrong",
          error,
          description: "Please retry or contact us"
        })}>
            Open error toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="shakespear" style={styles.button} onPress={() => showToast({
          variant: "info",
          title: "Successfully copy to clipboard !",
          description: "You can now paste it anywhere"
        })}>
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="warning" style={styles.button} onPress={() => showToast({
          variant: "warning",
          title: "Oops ! Something went wrong",
          description: "Talk to an expert"
        })}>
            Open warning toast
          </LakeButton>
        </StoryPart>

        <StoryPart title="With long title and description">
          <LakeButton color="positive" style={styles.button} onPress={() => showToast({
          variant: "success",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"
        })}>
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="positive" style={styles.button} onPress={() => showToast({
          variant: "success",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"
        })}>
            Open success toast
          </LakeButton>
        </StoryPart>
      </StoryBlock>
    </>;
}`,...O.parameters?.docs?.source}}};const Ue=["Default"];export{O as Default,Ue as __namedExportsOrder,Ye as default};
//# sourceMappingURL=Toast.stories-Dat7bD4h.js.map
