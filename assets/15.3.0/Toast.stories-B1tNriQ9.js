import{c as e,i as t,r as n}from"./preload-helper-B45gAKPr.js";import{o as r}from"./iframe-DXgxru2-.js";import{A as i,E as a,F as o,H as s,M as c,N as l,O as u,P as d,R as f,U as p,V as m,d as h,f as g,ft as _,g as v,h as y,ht as ee,i as b,it as x,kt as te,l as ne,o as S,r as C,s as re,st as ie,tt as w,u as ae,wt as T,z as oe}from"./ScrollView-BvY3QTy9.js";import{r as E,t as D}from"./Pressable-B5vE75XS.js";import{r as se,t as O}from"./LakeButton-WRxbqnZ_.js";import{a as ce,s as le}from"./i18n-CDis1b5v.js";import{n as k,t as ue}from"./clipboard-Bs0eOSsi.js";import{n as de,t as fe}from"./TransitionGroupView-BJBiPtN3.js";import{n as A,r as pe,t as me}from"./_StoriesComponents-BLODyyff.js";var he=n((e=>{var t=r();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:n,a=t.useState,o=t.useEffect,s=t.useLayoutEffect,c=t.useDebugValue;function l(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),o(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),ge=n(((e,t)=>{t.exports=he()})),_e=n((e=>{var t=r(),n=ge();function i(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var a=typeof Object.is==`function`?Object.is:i,o=n.useSyncExternalStore,s=t.useRef,c=t.useEffect,l=t.useMemo,u=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!o){if(o=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,a(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var o=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=o(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),ve=n(((e,t)=>{t.exports=_e()}));function ye(e){let t=new Set,n=e;return{get:()=>n,set(e){n=typeof e==`function`?e(n):e,t.forEach(e=>e(n))},subscribe:e=>(t.add(e),()=>{t.delete(e)}),reset(){n=e,t.forEach(e=>e(n))}}}function be(e){return e}function xe(e,t){return t===void 0&&(t=Object.is),(0,j.useSyncExternalStoreWithSelector)(e.subscribe,e.get,e.get,be,t)}var j,Se=t((()=>{j=ve()})),M,N,P,F,I,L,R,z,B=t((()=>{Se(),M=({duration:e,onEnd:t})=>{let n=new Set,r=0,i=0,a=()=>{let t=(r-Date.now())/e;n.forEach(e=>e(t)),o=window.requestAnimationFrame(a)},o=window.requestAnimationFrame(a),s=()=>{r=Date.now()+e,i=window.setTimeout(()=>{u(),t()},e)},c=()=>{window.clearTimeout(i),s()},l=e=>(n.add(e),()=>{n.delete(e)}),u=()=>{document.removeEventListener(`visibilitychange`,d),window.clearTimeout(i),window.cancelAnimationFrame(o)},d=()=>{document.removeEventListener(`visibilitychange`,d),c()};return document.hidden?document.addEventListener(`visibilitychange`,d):c(),{clear:u,reset:c,subscribe:l}},N=ye([]),P=()=>xe(N),F=e=>{let t=N.get().find(t=>t.uid===e);t!=null&&(t.progress?.clear(),N.set(t=>t.filter(t=>t.uid!==e)))},I=new WeakMap,L=e=>{I=e},R=()=>I,z=({variant:e,title:t,description:n,error:r,autoClose:i})=>{let a=`${e} - ${t} - ${n??``}`,o=N.get().find(e=>e.uid===a);if(o!=null)return o.progress?.reset(),a;let s=i??(e===`info`||e===`success`)?M({duration:1e4,onEnd:()=>{F(a)}}):void 0;return N.set(i=>[{uid:a,variant:e,title:t,description:n,error:r,progress:s},...i]),a}})),V,H,U,W,G,K,Ce=t((()=>{a(),v(),s(),re(),ae(),g(),E(),b(),de(),ie(),ue(),o(),V=e(r()),ee(),l(),B(),ce(),H=p(),U=te.create({list:{position:`fixed`,right:0,bottom:0,maxHeight:`100%`,maxWidth:400,paddingVertical:8,width:`100%`,zIndex:10,pointerEvents:`none`},toastWrapper:{paddingHorizontal:16,paddingVertical:8,pointerEvents:`auto`},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:`hidden`,boxShadow:_.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:`absolute`,width:24,height:24,right:24,top:0,bottom:0,margin:`auto`},progressBar:{height:2,transformOrigin:`left`},copyTooltip:{alignSelf:`flex-start`},copyButton:{alignItems:`center`,flexDirection:`row`,flexGrow:1,flexShrink:1}}),W=e=>{let t=i.isArray(e)?e:[e];return i.filterMap(t,e=>e instanceof Error?u.Some(e):u.None())},G=(0,V.memo)(({variant:e,uid:t,title:n,description:r,error:a,progress:o,onClose:s})=>{let l=(0,V.useRef)(null),[p,h]=(0,V.useState)(`copy`),g=f(r),[_]=(0,V.useState)(()=>a==null?u.None():i.findMap(W(a),e=>u.fromNullable(R().get(e)))),v=c(e).returnType().with(`success`,()=>`positive`).with(`error`,()=>`negative`).with(`info`,()=>`shakespear`).with(`warning`,()=>`warning`).exhaustive();return(0,V.useEffect)(()=>{if(!oe(o))return o.subscribe(e=>{l.current instanceof HTMLElement&&(l.current.style.transform=`scaleX(${e})`)})},[o]),(0,H.jsx)(T,{style:U.toastWrapper,children:(0,H.jsxs)(T,{style:[U.toast,{borderColor:x[v][200],borderLeftColor:x[v][500],backgroundColor:x[v][0]}],children:[(0,H.jsxs)(y,{style:U.contentContainer,children:[(0,H.jsxs)(y,{direction:`row`,alignItems:`center`,children:[c(e).with(`success`,()=>(0,H.jsx)(m,{name:`checkmark-circle-regular`,size:20,color:x[v][700]})).with(`error`,()=>(0,H.jsx)(m,{name:`dismiss-circle-regular`,size:20,color:x[v][700]})).with(`info`,()=>(0,H.jsx)(m,{name:`info-regular`,size:20,color:x[v][700]})).with(`warning`,()=>(0,H.jsx)(m,{name:`warning-regular`,size:20,color:x[v][700]})).exhaustive(),(0,H.jsx)(C,{width:12}),(0,H.jsx)(S,{variant:`regular`,color:x[v][700],children:n})]}),g&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(C,{height:8}),(0,H.jsx)(S,{variant:`smallRegular`,color:x.gray[700],children:r})]}),c(_).with(u.P.None,()=>null).with(u.P.Some(d.select()),e=>(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(C,{height:g?4:8}),(0,H.jsx)(ne,{describedBy:`copy`,onHide:()=>h(`copy`),togglableOnFocus:!0,placement:`center`,containerStyle:U.copyTooltip,content:le(p===`copy`?`copyButton.copyTooltip`:`copyButton.copiedTooltip`),children:(0,H.jsxs)(D,{style:U.copyButton,onPress:t=>{t.stopPropagation(),t.preventDefault(),k(e??``),h(`copied`)},children:[(0,H.jsx)(m,{color:x.gray[700],size:14,name:`copy-regular`}),(0,H.jsx)(C,{width:4}),(0,H.jsxs)(S,{numberOfLines:1,variant:`smallRegular`,color:x.gray[700],children:[`ID: `,e]})]})})]})).exhaustive()]}),(0,H.jsx)(D,{onPress:()=>s(t),style:U.closeButton,children:(0,H.jsx)(m,{name:`lake-close`,size:24,color:x.gray[500]})}),o!=null&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(C,{height:24}),(0,H.jsx)(T,{ref:l,role:`progressbar`,style:[U.progressBar,{backgroundColor:x[v][500]}]})]})]})})}),K=()=>{let e=P(),[t,n]=(0,V.useState)(()=>void 0);return(0,V.useEffect)(()=>{let e=document.createElement(`div`);return document.body.append(e),n(e),()=>{e.remove(),n(void 0)}},[]),t==null?null:(0,H.jsx)(h,{container:t,children:(0,H.jsx)(fe,{style:U.list,enter:w.fadeAndSlideInFromRight.enter,leave:w.fadeAndSlideInFromRight.leave,children:e.map(e=>(0,H.jsx)(G,{uid:e.uid,variant:e.variant,title:e.title,description:e.description,error:e.error,progress:e.progress,onClose:F},e.uid))})})},K.__docgenInfo={description:``,methods:[],displayName:`ToastStack`}})),q,J,Y,X,Z,Q,$;t((()=>{se(),b(),Ce(),B(),pe(),q=p(),J={button:{width:200}},Y={title:`Interactivity/Toast`,component:K},X=new WeakMap,L(X),Z=Error(),X.set(Z,`req-thvfknqp`),Q=()=>(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(K,{}),(0,q.jsxs)(me,{title:`Toast`,children:[(0,q.jsxs)(A,{title:`With only title`,children:[(0,q.jsx)(O,{color:`positive`,style:J.button,onPress:()=>z({variant:`success`,title:`Successfully copy to clipboard !`}),children:`Open success toast`}),(0,q.jsx)(C,{height:16}),(0,q.jsx)(O,{color:`negative`,style:J.button,onPress:()=>z({variant:`error`,title:`Oops ! Something went wrong`}),children:`Open error toast`}),(0,q.jsx)(C,{height:16}),(0,q.jsx)(O,{color:`shakespear`,style:J.button,onPress:()=>z({variant:`info`,title:`Successfully copy to clipboard !`}),children:`Open success toast`}),(0,q.jsx)(C,{height:16}),(0,q.jsx)(O,{color:`warning`,style:J.button,onPress:()=>z({variant:`warning`,title:`Oops ! Something went wrong`}),children:`Open warning toast`})]}),(0,q.jsxs)(A,{title:`With title and description`,children:[(0,q.jsx)(O,{color:`positive`,style:J.button,onPress:()=>z({variant:`success`,title:`Successfully copy to clipboard !`,description:`You can now paste it anywhere`}),children:`Open success toast`}),(0,q.jsx)(C,{height:16}),(0,q.jsx)(O,{color:`negative`,style:J.button,onPress:()=>z({variant:`error`,title:`Oops ! Something went wrong`,error:Z,description:`Please retry or contact us`}),children:`Open error toast`}),(0,q.jsx)(C,{height:16}),(0,q.jsx)(O,{color:`shakespear`,style:J.button,onPress:()=>z({variant:`info`,title:`Successfully copy to clipboard !`,description:`You can now paste it anywhere`}),children:`Open success toast`}),(0,q.jsx)(C,{height:16}),(0,q.jsx)(O,{color:`warning`,style:J.button,onPress:()=>z({variant:`warning`,title:`Oops ! Something went wrong`,description:`Talk to an expert`}),children:`Open warning toast`})]}),(0,q.jsxs)(A,{title:`With long title and description`,children:[(0,q.jsx)(O,{color:`positive`,style:J.button,onPress:()=>z({variant:`success`,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut`}),children:`Open success toast`}),(0,q.jsx)(C,{height:16}),(0,q.jsx)(O,{color:`positive`,style:J.button,onPress:()=>z({variant:`success`,title:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut`,description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut`}),children:`Open success toast`})]})]})]}),Q.__docgenInfo={description:``,methods:[],displayName:`Default`},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`]}))();export{Q as Default,$ as __namedExportsOrder,Y as default};
//# sourceMappingURL=Toast.stories-B1tNriQ9.js.map