import{j as t,P as M,e as R,s as H,d as Y,p as S,y as E,z as P,f as G,V as L,c as a,B as W,n as X,I as v,S as l,L as B,N as J,q as K}from"./ScrollView-sI9q1Hi-.js";import{L as u}from"./LakeButton-2WgxBwi5.js";import{P as z}from"./Pressable-DKVnCsyt.js";import{T as Q}from"./TransitionGroupView-CuY1_gX2.js";import{s as U}from"./clipboard-BXAk6GqW.js";import{r as x}from"./iframe-D2cWRokJ.js";import{w as Z}from"./with-selector-GDF9cGTk.js";import{t as A}from"./i18n-CJ1OnRps.js";import{S as tt,a as O}from"./_StoriesComponents-CgIWXonL.js";import"./index-nZb-kHcz.js";import"./commonStyles-BBEkV6IC.js";import"./index-BPFVi3Sk.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CY4WTdT5.js";import"./rifm-7hQg7Zl0.js";import"./array-BfAlyugE.js";import"./Separator-t7kBWJo4.js";function et(o){const s=new Set;let n=o;return{get:()=>n,set(e){n=typeof e=="function"?e(n):e,s.forEach(c=>c(n))},subscribe:e=>(s.add(e),()=>{s.delete(e)}),reset(){n=o,s.forEach(e=>e(n))}}}function ot(o){return o}function nt(o,s){return s===void 0&&(s=Object.is),Z.useSyncExternalStoreWithSelector(o.subscribe,o.get,o.get,ot,s)}const st=({duration:o,onEnd:s})=>{const n=new Set;let e=0,c=0;const i=()=>{const r=(e-Date.now())/o;n.forEach(m=>m(r)),y=window.requestAnimationFrame(i)};let y=window.requestAnimationFrame(i);const b=()=>{e=Date.now()+o,c=window.setTimeout(()=>{h(),s()},o)},w=()=>{window.clearTimeout(c),b()},f=r=>(n.add(r),()=>{n.delete(r)}),h=()=>{document.removeEventListener("visibilitychange",j),window.clearTimeout(c),window.cancelAnimationFrame(y)},j=()=>{document.removeEventListener("visibilitychange",j),w()};return document.hidden?document.addEventListener("visibilitychange",j):w(),{clear:h,reset:w,subscribe:f}},T=et([]),rt=()=>nt(T),q=o=>{var n;const s=T.get().find(e=>e.uid===o);s!=null&&((n=s.progress)==null||n.clear(),T.set(e=>e.filter(c=>c.uid!==o)))};let V=new WeakMap;const it=o=>{V=o},at=()=>V,p=({variant:o,title:s,description:n,error:e,autoClose:c})=>{var f;const i=`${o} - ${s} - ${n??""}`,y=T.get().find(h=>h.uid===i);if(y!=null)return(f=y.progress)==null||f.reset(),i;const w=c??(o==="info"||o==="success")?st({duration:1e4,onEnd:()=>{q(i)}}):void 0;return T.set(h=>[{uid:i,variant:o,title:s,description:n,error:e,progress:w},...h]),i},g=H.create({list:{position:"fixed",right:0,bottom:0,maxHeight:"100%",maxWidth:400,paddingVertical:8,width:"100%",zIndex:10,pointerEvents:"none"},toastWrapper:{paddingHorizontal:16,paddingVertical:8,pointerEvents:"auto"},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:"hidden",boxShadow:Y.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:"absolute",width:24,height:24,right:24,top:0,bottom:0,margin:"auto"},progressBar:{height:2,transformOrigin:"left"},copyTooltip:{alignSelf:"flex-start"},copyButton:{alignItems:"center",flexDirection:"row",flexGrow:1,flexShrink:1}}),ct=o=>{const s=E.isArray(o)?o:[o];return E.filterMap(s,n=>n instanceof Error?S.Some(n):S.None())},lt=x.memo(({variant:o,uid:s,title:n,description:e,error:c,progress:i,onClose:y})=>{const b=x.useRef(null),[w,f]=x.useState("copy"),h=X(e),[j]=x.useState(()=>c==null?S.None():E.findMap(ct(c),m=>S.fromNullable(at().get(m)))),r=P(o).returnType().with("success",()=>"positive").with("error",()=>"negative").with("info",()=>"shakespear").with("warning",()=>"warning").exhaustive();return x.useEffect(()=>{if(!G(i))return i.subscribe(m=>{b.current instanceof HTMLElement&&(b.current.style.transform=`scaleX(${m})`)})},[i]),t.jsx(L,{style:g.toastWrapper,children:t.jsxs(L,{style:[g.toast,{borderColor:a[r][200],borderLeftColor:a[r][500],backgroundColor:a[r][0]}],children:[t.jsxs(W,{style:g.contentContainer,children:[t.jsxs(W,{direction:"row",alignItems:"center",children:[P(o).with("success",()=>t.jsx(v,{name:"checkmark-circle-regular",size:20,color:a[r][700]})).with("error",()=>t.jsx(v,{name:"dismiss-circle-regular",size:20,color:a[r][700]})).with("info",()=>t.jsx(v,{name:"info-regular",size:20,color:a[r][700]})).with("warning",()=>t.jsx(v,{name:"warning-regular",size:20,color:a[r][700]})).exhaustive(),t.jsx(l,{width:12}),t.jsx(B,{variant:"regular",color:a[r][700],children:n})]}),h&&t.jsxs(t.Fragment,{children:[t.jsx(l,{height:8}),t.jsx(B,{variant:"smallRegular",color:a.gray[700],children:e})]}),P(j).with(S.P.None,()=>null).with(S.P.Some(J.select()),m=>t.jsxs(t.Fragment,{children:[t.jsx(l,{height:h?4:8}),t.jsx(K,{describedBy:"copy",onHide:()=>f("copy"),togglableOnFocus:!0,placement:"center",containerStyle:g.copyTooltip,content:w==="copy"?A("copyButton.copyTooltip"):A("copyButton.copiedTooltip"),children:t.jsxs(z,{style:g.copyButton,onPress:I=>{I.stopPropagation(),I.preventDefault(),U(m??""),f("copied")},children:[t.jsx(v,{color:a.gray[700],size:14,name:"copy-regular"}),t.jsx(l,{width:4}),t.jsxs(B,{numberOfLines:1,variant:"smallRegular",color:a.gray[700],children:["ID: ",m]})]})})]})).exhaustive()]}),t.jsx(z,{onPress:()=>y(s),style:g.closeButton,children:t.jsx(v,{name:"lake-close",size:24,color:a.gray[500]})}),i!=null&&t.jsxs(t.Fragment,{children:[t.jsx(l,{height:24}),t.jsx(L,{ref:b,role:"progressbar",style:[g.progressBar,{backgroundColor:a[r][500]}]})]})]})})}),D=()=>{const o=rt(),[s,n]=x.useState(()=>{});return x.useEffect(()=>{const e=document.createElement("div");return document.body.append(e),n(e),()=>{e.remove(),n(void 0)}},[]),s==null?null:t.jsx(M,{container:s,children:t.jsx(Q,{style:g.list,enter:R.fadeAndSlideInFromRight.enter,leave:R.fadeAndSlideInFromRight.leave,children:o.map(e=>t.jsx(lt,{uid:e.uid,variant:e.variant,title:e.title,description:e.description,error:e.error,progress:e.progress,onClose:q},e.uid))})})};D.__docgenInfo={description:"",methods:[],displayName:"ToastStack"};const d={button:{width:200}},Lt={title:"Interactivity/Toast",component:D},_=new WeakMap;it(_);const $=new Error;_.set($,"req-thvfknqp");const k=()=>t.jsxs(t.Fragment,{children:[t.jsx(D,{}),t.jsxs(tt,{title:"Toast",children:[t.jsxs(O,{title:"With only title",children:[t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"negative",style:d.button,onPress:()=>p({variant:"error",title:"Oops ! Something went wrong"}),children:"Open error toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"shakespear",style:d.button,onPress:()=>p({variant:"info",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"warning",style:d.button,onPress:()=>p({variant:"warning",title:"Oops ! Something went wrong"}),children:"Open warning toast"})]}),t.jsxs(O,{title:"With title and description",children:[t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"negative",style:d.button,onPress:()=>p({variant:"error",title:"Oops ! Something went wrong",error:$,description:"Please retry or contact us"}),children:"Open error toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"shakespear",style:d.button,onPress:()=>p({variant:"info",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"warning",style:d.button,onPress:()=>p({variant:"warning",title:"Oops ! Something went wrong",description:"Talk to an expert"}),children:"Open warning toast"})]}),t.jsxs(O,{title:"With long title and description",children:[t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"})]})]})]});k.__docgenInfo={description:"",methods:[],displayName:"Default"};var C,F,N;k.parameters={...k.parameters,docs:{...(C=k.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(N=(F=k.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const Bt=["Default"];export{k as Default,Bt as __namedExportsOrder,Lt as default};
//# sourceMappingURL=Toast.stories-COH_lCpG.js.map
