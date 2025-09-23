import{j as t,P as V,e as R,s as _,d as $,p as v,y as E,z as P,f as M,V as L,c as a,B as W,n as H,I as b,S as c,L as B,N as Y,q as G}from"./ScrollView-C9PsFYIv.js";import{L as u}from"./LakeButton-CzcE5UO-.js";import{P as z}from"./Pressable-Cxbb0NSX.js";import{T as X}from"./TransitionGroupView-CcQ9SZG5.js";import{s as J}from"./clipboard-BXAk6GqW.js";import{r as f}from"./iframe-CApFOUbG.js";import{w as K}from"./with-selector-DXwnkK9o.js";import{t as A}from"./i18n-D8hVVgLH.js";import{S as Q,a as O}from"./_StoriesComponents-8kZSVQgb.js";import"./index-BMBfe11t.js";import"./commonStyles-BBEkV6IC.js";import"./index-CoVy-U7n.js";import"./extends-CF3RwP-h.js";import"./TransitionView-ClFxX6ig.js";import"./preload-helper-D1IIBeq1.js";import"./rifm-BtXqfJHA.js";import"./array-BfAlyugE.js";import"./Separator-CrS2qz3T.js";function U(e){const s=new Set;let n=e;return{get:()=>n,set(o){n=typeof o=="function"?o(n):o,s.forEach(l=>l(n))},subscribe:o=>(s.add(o),()=>{s.delete(o)}),reset(){n=e,s.forEach(o=>o(n))}}}function Z(e){return e}function tt(e,s){return s===void 0&&(s=Object.is),K.useSyncExternalStoreWithSelector(e.subscribe,e.get,e.get,Z,s)}const et=({duration:e,onEnd:s})=>{const n=new Set;let o=0,l=0;const i=()=>{const r=(o-Date.now())/e;n.forEach(m=>m(r)),y=window.requestAnimationFrame(i)};let y=window.requestAnimationFrame(i);const x=()=>{o=Date.now()+e,l=window.setTimeout(()=>{S(),s()},e)},w=()=>{window.clearTimeout(l),x()},h=r=>(n.add(r),()=>{n.delete(r)}),S=()=>{document.removeEventListener("visibilitychange",j),window.clearTimeout(l),window.cancelAnimationFrame(y)},j=()=>{document.removeEventListener("visibilitychange",j),w()};return document.hidden?document.addEventListener("visibilitychange",j):w(),{clear:S,reset:w,subscribe:h}},T=U([]),ot=()=>tt(T),C=e=>{const s=T.get().find(n=>n.uid===e);s!=null&&(s.progress?.clear(),T.set(n=>n.filter(o=>o.uid!==e)))};let F=new WeakMap;const nt=e=>{F=e},st=()=>F,p=({variant:e,title:s,description:n,error:o,autoClose:l})=>{const i=`${e} - ${s} - ${n??""}`,y=T.get().find(h=>h.uid===i);if(y!=null)return y.progress?.reset(),i;const w=l??(e==="info"||e==="success")?et({duration:1e4,onEnd:()=>{C(i)}}):void 0;return T.set(h=>[{uid:i,variant:e,title:s,description:n,error:o,progress:w},...h]),i},g=_.create({list:{position:"fixed",right:0,bottom:0,maxHeight:"100%",maxWidth:400,paddingVertical:8,width:"100%",zIndex:10,pointerEvents:"none"},toastWrapper:{paddingHorizontal:16,paddingVertical:8,pointerEvents:"auto"},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:"hidden",boxShadow:$.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:"absolute",width:24,height:24,right:24,top:0,bottom:0,margin:"auto"},progressBar:{height:2,transformOrigin:"left"},copyTooltip:{alignSelf:"flex-start"},copyButton:{alignItems:"center",flexDirection:"row",flexGrow:1,flexShrink:1}}),rt=e=>{const s=E.isArray(e)?e:[e];return E.filterMap(s,n=>n instanceof Error?v.Some(n):v.None())},it=f.memo(({variant:e,uid:s,title:n,description:o,error:l,progress:i,onClose:y})=>{const x=f.useRef(null),[w,h]=f.useState("copy"),S=H(o),[j]=f.useState(()=>l==null?v.None():E.findMap(rt(l),m=>v.fromNullable(st().get(m)))),r=P(e).returnType().with("success",()=>"positive").with("error",()=>"negative").with("info",()=>"shakespear").with("warning",()=>"warning").exhaustive();return f.useEffect(()=>{if(!M(i))return i.subscribe(m=>{x.current instanceof HTMLElement&&(x.current.style.transform=`scaleX(${m})`)})},[i]),t.jsx(L,{style:g.toastWrapper,children:t.jsxs(L,{style:[g.toast,{borderColor:a[r][200],borderLeftColor:a[r][500],backgroundColor:a[r][0]}],children:[t.jsxs(W,{style:g.contentContainer,children:[t.jsxs(W,{direction:"row",alignItems:"center",children:[P(e).with("success",()=>t.jsx(b,{name:"checkmark-circle-regular",size:20,color:a[r][700]})).with("error",()=>t.jsx(b,{name:"dismiss-circle-regular",size:20,color:a[r][700]})).with("info",()=>t.jsx(b,{name:"info-regular",size:20,color:a[r][700]})).with("warning",()=>t.jsx(b,{name:"warning-regular",size:20,color:a[r][700]})).exhaustive(),t.jsx(c,{width:12}),t.jsx(B,{variant:"regular",color:a[r][700],children:n})]}),S&&t.jsxs(t.Fragment,{children:[t.jsx(c,{height:8}),t.jsx(B,{variant:"smallRegular",color:a.gray[700],children:o})]}),P(j).with(v.P.None,()=>null).with(v.P.Some(Y.select()),m=>t.jsxs(t.Fragment,{children:[t.jsx(c,{height:S?4:8}),t.jsx(G,{describedBy:"copy",onHide:()=>h("copy"),togglableOnFocus:!0,placement:"center",containerStyle:g.copyTooltip,content:w==="copy"?A("copyButton.copyTooltip"):A("copyButton.copiedTooltip"),children:t.jsxs(z,{style:g.copyButton,onPress:I=>{I.stopPropagation(),I.preventDefault(),J(m??""),h("copied")},children:[t.jsx(b,{color:a.gray[700],size:14,name:"copy-regular"}),t.jsx(c,{width:4}),t.jsxs(B,{numberOfLines:1,variant:"smallRegular",color:a.gray[700],children:["ID: ",m]})]})})]})).exhaustive()]}),t.jsx(z,{onPress:()=>y(s),style:g.closeButton,children:t.jsx(b,{name:"lake-close",size:24,color:a.gray[500]})}),i!=null&&t.jsxs(t.Fragment,{children:[t.jsx(c,{height:24}),t.jsx(L,{ref:x,role:"progressbar",style:[g.progressBar,{backgroundColor:a[r][500]}]})]})]})})}),D=()=>{const e=ot(),[s,n]=f.useState(()=>{});return f.useEffect(()=>{const o=document.createElement("div");return document.body.append(o),n(o),()=>{o.remove(),n(void 0)}},[]),s==null?null:t.jsx(V,{container:s,children:t.jsx(X,{style:g.list,enter:R.fadeAndSlideInFromRight.enter,leave:R.fadeAndSlideInFromRight.leave,children:e.map(o=>t.jsx(it,{uid:o.uid,variant:o.variant,title:o.title,description:o.description,error:o.error,progress:o.progress,onClose:C},o.uid))})})};D.__docgenInfo={description:"",methods:[],displayName:"ToastStack"};const d={button:{width:200}},Tt={title:"Interactivity/Toast",component:D},N=new WeakMap;nt(N);const q=new Error;N.set(q,"req-thvfknqp");const k=()=>t.jsxs(t.Fragment,{children:[t.jsx(D,{}),t.jsxs(Q,{title:"Toast",children:[t.jsxs(O,{title:"With only title",children:[t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t.jsx(c,{height:16}),t.jsx(u,{color:"negative",style:d.button,onPress:()=>p({variant:"error",title:"Oops ! Something went wrong"}),children:"Open error toast"}),t.jsx(c,{height:16}),t.jsx(u,{color:"shakespear",style:d.button,onPress:()=>p({variant:"info",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t.jsx(c,{height:16}),t.jsx(u,{color:"warning",style:d.button,onPress:()=>p({variant:"warning",title:"Oops ! Something went wrong"}),children:"Open warning toast"})]}),t.jsxs(O,{title:"With title and description",children:[t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t.jsx(c,{height:16}),t.jsx(u,{color:"negative",style:d.button,onPress:()=>p({variant:"error",title:"Oops ! Something went wrong",error:q,description:"Please retry or contact us"}),children:"Open error toast"}),t.jsx(c,{height:16}),t.jsx(u,{color:"shakespear",style:d.button,onPress:()=>p({variant:"info",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t.jsx(c,{height:16}),t.jsx(u,{color:"warning",style:d.button,onPress:()=>p({variant:"warning",title:"Oops ! Something went wrong",description:"Talk to an expert"}),children:"Open warning toast"})]}),t.jsxs(O,{title:"With long title and description",children:[t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"}),t.jsx(c,{height:16}),t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"})]})]})]});k.__docgenInfo={description:"",methods:[],displayName:"Default"};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};const Pt=["Default"];export{k as Default,Pt as __namedExportsOrder,Tt as default};
//# sourceMappingURL=Toast.stories-CmRi2_TN.js.map
