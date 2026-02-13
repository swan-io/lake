import{j as e,Y as ie,Z as H,s as ae,o as ce,p as O,y as F,M as I,i as le,V as W,c as f,B as U,I as L,S as g,L as V,z as ue,a0 as de,g as pe}from"./ScrollView-BgLPe5gl.js";import{a as v}from"./LakeButton-X8-KBYv6.js";import{P as X}from"./Pressable-BDDPqJMq.js";import{T as he}from"./TransitionGroupView-CZEx0QBR.js";import{s as me}from"./clipboard-BXAk6GqW.js";import{b as te,r as T}from"./iframe-ngjqEMqC.js";import{t as Z}from"./i18n-H1CddC6P.js";import{S as fe,a as _}from"./_StoriesComponents-BcNDBbeg.js";import"./index-D9fjzRNm.js";import"./commonStyles-BBEkV6IC.js";import"./index-C_J9C14u.js";import"./extends-CF3RwP-h.js";import"./TransitionView-D-VivBTI.js";import"./preload-helper-D1IIBeq1.js";import"./rifm-MUJawLsm.js";import"./array-BfAlyugE.js";import"./Separator-B7i4NH44.js";var q={exports:{}},z={},C={exports:{}},A={};var J;function ge(){if(J)return A;J=1;var t=te();function s(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var r=typeof Object.is=="function"?Object.is:s,n=t.useState,p=t.useEffect,l=t.useLayoutEffect,y=t.useDebugValue;function w(i,o){var a=o(),m=n({inst:{value:a,getSnapshot:o}}),d=m[0].inst,j=m[1];return l(function(){d.value=a,d.getSnapshot=o,h(d)&&j({inst:d})},[i,a,o]),p(function(){return h(d)&&j({inst:d}),i(function(){h(d)&&j({inst:d})})},[i]),y(a),a}function h(i){var o=i.getSnapshot;i=i.value;try{var a=o();return!r(i,a)}catch{return!0}}function c(i,o){return o()}var u=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?c:w;return A.useSyncExternalStore=t.useSyncExternalStore!==void 0?t.useSyncExternalStore:u,A}var K;function ye(){return K||(K=1,C.exports=ge()),C.exports}var Q;function we(){if(Q)return z;Q=1;var t=te(),s=ye();function r(c,u){return c===u&&(c!==0||1/c===1/u)||c!==c&&u!==u}var n=typeof Object.is=="function"?Object.is:r,p=s.useSyncExternalStore,l=t.useRef,y=t.useEffect,w=t.useMemo,h=t.useDebugValue;return z.useSyncExternalStoreWithSelector=function(c,u,i,o,a){var m=l(null);if(m.current===null){var d={hasValue:!1,value:null};m.current=d}else d=m.current;m=w(function(){function N(b){if(!$){if($=!0,R=b,b=o(b),a!==void 0&&d.hasValue){var E=d.value;if(a(E,b))return D=E}return D=b}if(E=D,n(R,b))return E;var G=o(b);return a!==void 0&&a(E,G)?(R=b,E):(R=b,D=G)}var $=!1,R,D,Y=i===void 0?null:i;return[function(){return N(u())},Y===null?void 0:function(){return N(Y())}]},[u,i,o,a]);var j=p(c,m[0],m[1]);return y(function(){d.hasValue=!0,d.value=j},[j]),h(j),j},z}var ee;function ve(){return ee||(ee=1,q.exports=we()),q.exports}var Se=ve();function xe(t){const s=new Set;let r=t;return{get:()=>r,set(n){r=typeof n=="function"?n(r):n,s.forEach(p=>p(r))},subscribe:n=>(s.add(n),()=>{s.delete(n)}),reset(){r=t,s.forEach(n=>n(r))}}}function be(t){return t}function je(t,s){return s===void 0&&(s=Object.is),Se.useSyncExternalStoreWithSelector(t.subscribe,t.get,t.get,be,s)}const ke=({duration:t,onEnd:s})=>{const r=new Set;let n=0,p=0;const l=()=>{const o=(n-Date.now())/t;r.forEach(a=>a(o)),y=window.requestAnimationFrame(l)};let y=window.requestAnimationFrame(l);const w=()=>{n=Date.now()+t,p=window.setTimeout(()=>{u(),s()},t)},h=()=>{window.clearTimeout(p),w()},c=o=>(r.add(o),()=>{r.delete(o)}),u=()=>{document.removeEventListener("visibilitychange",i),window.clearTimeout(p),window.cancelAnimationFrame(y)},i=()=>{document.removeEventListener("visibilitychange",i),h()};return document.hidden?document.addEventListener("visibilitychange",i):h(),{clear:u,reset:h,subscribe:c}},B=xe([]),Te=()=>je(B),ne=t=>{const s=B.get().find(r=>r.uid===t);s!=null&&(s.progress?.clear(),B.set(r=>r.filter(n=>n.uid!==t)))};let oe=new WeakMap;const Ee=t=>{oe=t},Le=()=>oe,S=({variant:t,title:s,description:r,error:n,autoClose:p})=>{const l=`${t} - ${s} - ${r??""}`,y=B.get().find(c=>c.uid===l);if(y!=null)return y.progress?.reset(),l;const h=p??(t==="info"||t==="success")?ke({duration:1e4,onEnd:()=>{ne(l)}}):void 0;return B.set(c=>[{uid:l,variant:t,title:s,description:r,error:n,progress:h},...c]),l},k=ae.create({list:{position:"fixed",right:0,bottom:0,maxHeight:"100%",maxWidth:400,paddingVertical:8,width:"100%",zIndex:10,pointerEvents:"none"},toastWrapper:{paddingHorizontal:16,paddingVertical:8,pointerEvents:"auto"},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:"hidden",boxShadow:ce.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:"absolute",width:24,height:24,right:24,top:0,bottom:0,margin:"auto"},progressBar:{height:2,transformOrigin:"left"},copyTooltip:{alignSelf:"flex-start"},copyButton:{alignItems:"center",flexDirection:"row",flexGrow:1,flexShrink:1}}),Oe=t=>{const s=F.isArray(t)?t:[t];return F.filterMap(s,r=>r instanceof Error?O.Some(r):O.None())},Pe=T.memo(({variant:t,uid:s,title:r,description:n,error:p,progress:l,onClose:y})=>{const w=T.useRef(null),[h,c]=T.useState("copy"),u=pe(n),[i]=T.useState(()=>p==null?O.None():F.findMap(Oe(p),a=>O.fromNullable(Le().get(a)))),o=I(t).returnType().with("success",()=>"positive").with("error",()=>"negative").with("info",()=>"shakespear").with("warning",()=>"warning").exhaustive();return T.useEffect(()=>{if(!le(l))return l.subscribe(a=>{w.current instanceof HTMLElement&&(w.current.style.transform=`scaleX(${a})`)})},[l]),e.jsx(W,{style:k.toastWrapper,children:e.jsxs(W,{style:[k.toast,{borderColor:f[o][200],borderLeftColor:f[o][500],backgroundColor:f[o][0]}],children:[e.jsxs(U,{style:k.contentContainer,children:[e.jsxs(U,{direction:"row",alignItems:"center",children:[I(t).with("success",()=>e.jsx(L,{name:"checkmark-circle-regular",size:20,color:f[o][700]})).with("error",()=>e.jsx(L,{name:"dismiss-circle-regular",size:20,color:f[o][700]})).with("info",()=>e.jsx(L,{name:"info-regular",size:20,color:f[o][700]})).with("warning",()=>e.jsx(L,{name:"warning-regular",size:20,color:f[o][700]})).exhaustive(),e.jsx(g,{width:12}),e.jsx(V,{variant:"regular",color:f[o][700],children:r})]}),u&&e.jsxs(e.Fragment,{children:[e.jsx(g,{height:8}),e.jsx(V,{variant:"smallRegular",color:f.gray[700],children:n})]}),I(i).with(O.P.None,()=>null).with(O.P.Some(ue.select()),a=>e.jsxs(e.Fragment,{children:[e.jsx(g,{height:u?4:8}),e.jsx(de,{describedBy:"copy",onHide:()=>c("copy"),togglableOnFocus:!0,placement:"center",containerStyle:k.copyTooltip,content:h==="copy"?Z("copyButton.copyTooltip"):Z("copyButton.copiedTooltip"),children:e.jsxs(X,{style:k.copyButton,onPress:m=>{m.stopPropagation(),m.preventDefault(),me(a??""),c("copied")},children:[e.jsx(L,{color:f.gray[700],size:14,name:"copy-regular"}),e.jsx(g,{width:4}),e.jsxs(V,{numberOfLines:1,variant:"smallRegular",color:f.gray[700],children:["ID: ",a]})]})})]})).exhaustive()]}),e.jsx(X,{onPress:()=>y(s),style:k.closeButton,children:e.jsx(L,{name:"lake-close",size:24,color:f.gray[500]})}),l!=null&&e.jsxs(e.Fragment,{children:[e.jsx(g,{height:24}),e.jsx(W,{ref:w,role:"progressbar",style:[k.progressBar,{backgroundColor:f[o][500]}]})]})]})})}),M=()=>{const t=Te(),[s,r]=T.useState(()=>{});return T.useEffect(()=>{const n=document.createElement("div");return document.body.append(n),r(n),()=>{n.remove(),r(void 0)}},[]),s==null?null:e.jsx(ie,{container:s,children:e.jsx(he,{style:k.list,enter:H.fadeAndSlideInFromRight.enter,leave:H.fadeAndSlideInFromRight.leave,children:t.map(n=>e.jsx(Pe,{uid:n.uid,variant:n.variant,title:n.title,description:n.description,error:n.error,progress:n.progress,onClose:ne},n.uid))})})};M.__docgenInfo={description:"",methods:[],displayName:"ToastStack"};const x={button:{width:200}},He={title:"Interactivity/Toast",component:M},re=new WeakMap;Ee(re);const se=new Error;re.set(se,"req-thvfknqp");const P=()=>e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsxs(fe,{title:"Toast",children:[e.jsxs(_,{title:"With only title",children:[e.jsx(v,{color:"positive",style:x.button,onPress:()=>S({variant:"success",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"negative",style:x.button,onPress:()=>S({variant:"error",title:"Oops ! Something went wrong"}),children:"Open error toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"shakespear",style:x.button,onPress:()=>S({variant:"info",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"warning",style:x.button,onPress:()=>S({variant:"warning",title:"Oops ! Something went wrong"}),children:"Open warning toast"})]}),e.jsxs(_,{title:"With title and description",children:[e.jsx(v,{color:"positive",style:x.button,onPress:()=>S({variant:"success",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"negative",style:x.button,onPress:()=>S({variant:"error",title:"Oops ! Something went wrong",error:se,description:"Please retry or contact us"}),children:"Open error toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"shakespear",style:x.button,onPress:()=>S({variant:"info",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"warning",style:x.button,onPress:()=>S({variant:"warning",title:"Oops ! Something went wrong",description:"Talk to an expert"}),children:"Open warning toast"})]}),e.jsxs(_,{title:"With long title and description",children:[e.jsx(v,{color:"positive",style:x.button,onPress:()=>S({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"}),e.jsx(g,{height:16}),e.jsx(v,{color:"positive",style:x.button,onPress:()=>S({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"})]})]})]});P.__docgenInfo={description:"",methods:[],displayName:"Default"};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};const Ue=["Default"];export{P as Default,Ue as __namedExportsOrder,He as default};
//# sourceMappingURL=Toast.stories-CpMLpugY.js.map
