import{j as t}from"./index-DNTRjB4V.js";import{L as u}from"./LakeButton-BLEdVG10.js";import{s as M,k as H,p as v,F as E,z as P,h as Y,V as L,c as a,B as R,I as S,S as l,L as B,N as G,n as X,P as J,C as W,l as K}from"./ScrollView-DZFasRfs.js";import{P as C}from"./Pressable-B0emFQdy.js";import{T as Q}from"./TransitionGroupView-CVzmP7o8.js";import{s as U}from"./clipboard-BXAk6GqW.js";import{r as x}from"./index-t2oEqn7n.js";import{w as Z}from"./with-selector-BkJ7fhJM.js";import{t as F}from"./i18n-CgHAweqt.js";import{S as tt,a as O}from"./_StoriesComponents-D5s7scz1.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-BJPDY9Ks.js";import"./commonStyles-CWvHnKRn.js";import"./index-DWeVdR1F.js";import"./extends-CF3RwP-h.js";import"./TransitionView-B1FOrxm6.js";import"./rifm-BL9hunKg.js";import"./utc-BLABpmqb.js";import"./array-BfAlyugE.js";import"./Separator-BoTw3Vhn.js";function et(o){const s=new Set;let n=o;return{get:()=>n,set(e){n=typeof e=="function"?e(n):e,s.forEach(c=>c(n))},subscribe:e=>(s.add(e),()=>{s.delete(e)}),reset(){n=o,s.forEach(e=>e(n))}}}function ot(o){return o}function nt(o,s){return s===void 0&&(s=Object.is),Z.useSyncExternalStoreWithSelector(o.subscribe,o.get,o.get,ot,s)}const st=({duration:o,onEnd:s})=>{const n=new Set;let e=0,c=0;const i=()=>{const r=(e-Date.now())/o;n.forEach(m=>m(r)),y=window.requestAnimationFrame(i)};let y=window.requestAnimationFrame(i);const b=()=>{e=Date.now()+o,c=window.setTimeout(()=>{h(),s()},o)},w=()=>{window.clearTimeout(c),b()},f=r=>(n.add(r),()=>{n.delete(r)}),h=()=>{document.removeEventListener("visibilitychange",j),window.clearTimeout(c),window.cancelAnimationFrame(y)},j=()=>{document.removeEventListener("visibilitychange",j),w()};return document.hidden?document.addEventListener("visibilitychange",j):w(),{clear:h,reset:w,subscribe:f}},T=et([]),rt=()=>nt(T),q=o=>{var n;const s=T.get().find(e=>e.uid===o);s!=null&&((n=s.progress)==null||n.clear(),T.set(e=>e.filter(c=>c.uid!==o)))};let V=new WeakMap;const it=o=>{V=o},at=()=>V,p=({variant:o,title:s,description:n,error:e,autoClose:c})=>{var f;const i=`${o} - ${s} - ${n??""}`,y=T.get().find(h=>h.uid===i);if(y!=null)return(f=y.progress)==null||f.reset(),i;const w=c??(o==="info"||o==="success")?st({duration:1e4,onEnd:()=>{q(i)}}):void 0;return T.set(h=>[{uid:i,variant:o,title:s,description:n,error:e,progress:w},...h]),i},g=M.create({list:{position:"fixed",right:0,bottom:0,maxHeight:"100%",maxWidth:400,paddingVertical:8,width:"100%",zIndex:10,pointerEvents:"none"},toastWrapper:{paddingHorizontal:16,paddingVertical:8,pointerEvents:"auto"},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:"hidden",boxShadow:H.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:"absolute",width:24,height:24,right:24,top:0,bottom:0,margin:"auto"},progressBar:{height:2,transformOrigin:"left"},copyTooltip:{alignSelf:"flex-start"},copyButton:{alignItems:"center",flexDirection:"row",flexGrow:1,flexShrink:1}}),ct=o=>{const s=E.isArray(o)?o:[o];return E.filterMap(s,n=>n instanceof Error?v.Some(n):v.None())},lt=x.memo(({variant:o,uid:s,title:n,description:e,error:c,progress:i,onClose:y})=>{const b=x.useRef(null),[w,f]=x.useState("copy"),h=K(e),[j]=x.useState(()=>c==null?v.None():E.findMap(ct(c),m=>v.fromNullable(at().get(m)))),r=P(o).returnType().with("success",()=>"positive").with("error",()=>"negative").with("info",()=>"shakespear").with("warning",()=>"warning").exhaustive();return x.useEffect(()=>{if(!Y(i))return i.subscribe(m=>{b.current instanceof HTMLElement&&(b.current.style.transform=`scaleX(${m})`)})},[i]),t.jsx(L,{style:g.toastWrapper,children:t.jsxs(L,{style:[g.toast,{borderColor:a[r][200],borderLeftColor:a[r][500],backgroundColor:a[r][0]}],children:[t.jsxs(R,{style:g.contentContainer,children:[t.jsxs(R,{direction:"row",alignItems:"center",children:[P(o).with("success",()=>t.jsx(S,{name:"checkmark-circle-regular",size:20,color:a[r][700]})).with("error",()=>t.jsx(S,{name:"dismiss-circle-regular",size:20,color:a[r][700]})).with("info",()=>t.jsx(S,{name:"info-regular",size:20,color:a[r][700]})).with("warning",()=>t.jsx(S,{name:"warning-regular",size:20,color:a[r][700]})).exhaustive(),t.jsx(l,{width:12}),t.jsx(B,{variant:"regular",color:a[r][700],children:n})]}),h&&t.jsxs(t.Fragment,{children:[t.jsx(l,{height:8}),t.jsx(B,{variant:"smallRegular",color:a.gray[700],children:e})]}),P(j).with(v.P.None,()=>null).with(v.P.Some(G.select()),m=>t.jsxs(t.Fragment,{children:[t.jsx(l,{height:h?4:8}),t.jsx(X,{describedBy:"copy",onHide:()=>f("copy"),togglableOnFocus:!0,placement:"center",containerStyle:g.copyTooltip,content:w==="copy"?F("copyButton.copyTooltip"):F("copyButton.copiedTooltip"),children:t.jsxs(C,{style:g.copyButton,onPress:I=>{I.stopPropagation(),I.preventDefault(),U(m??""),f("copied")},children:[t.jsx(S,{color:a.gray[700],size:14,name:"copy-regular"}),t.jsx(l,{width:4}),t.jsxs(B,{numberOfLines:1,variant:"smallRegular",color:a.gray[700],children:["ID: ",m]})]})})]})).exhaustive()]}),t.jsx(C,{onPress:()=>y(s),style:g.closeButton,children:t.jsx(S,{name:"lake-close",size:24,color:a.gray[500]})}),i!=null&&t.jsxs(t.Fragment,{children:[t.jsx(l,{height:24}),t.jsx(L,{ref:b,role:"progressbar",style:[g.progressBar,{backgroundColor:a[r][500]}]})]})]})})}),D=()=>{const o=rt(),[s,n]=x.useState(()=>{});return x.useEffect(()=>{const e=document.createElement("div");return document.body.append(e),n(e),()=>{e.remove(),n(void 0)}},[]),s==null?null:t.jsx(J,{container:s,children:t.jsx(Q,{style:g.list,enter:W.fadeAndSlideInFromRight.enter,leave:W.fadeAndSlideInFromRight.leave,children:o.map(e=>t.jsx(lt,{uid:e.uid,variant:e.variant,title:e.title,description:e.description,error:e.error,progress:e.progress,onClose:q},e.uid))})})};D.__docgenInfo={description:"",methods:[],displayName:"ToastStack"};const d={button:{width:200}},Et={title:"Interactivity/Toast",component:D},_=new WeakMap;it(_);const $=new Error;_.set($,"req-thvfknqp");const k=()=>t.jsxs(t.Fragment,{children:[t.jsx(D,{}),t.jsxs(tt,{title:"Toast",children:[t.jsxs(O,{title:"With only title",children:[t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"negative",style:d.button,onPress:()=>p({variant:"error",title:"Oops ! Something went wrong"}),children:"Open error toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"shakespear",style:d.button,onPress:()=>p({variant:"info",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"warning",style:d.button,onPress:()=>p({variant:"warning",title:"Oops ! Something went wrong"}),children:"Open warning toast"})]}),t.jsxs(O,{title:"With title and description",children:[t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"negative",style:d.button,onPress:()=>p({variant:"error",title:"Oops ! Something went wrong",error:$,description:"Please retry or contact us"}),children:"Open error toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"shakespear",style:d.button,onPress:()=>p({variant:"info",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"warning",style:d.button,onPress:()=>p({variant:"warning",title:"Oops ! Something went wrong",description:"Talk to an expert"}),children:"Open warning toast"})]}),t.jsxs(O,{title:"With long title and description",children:[t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"}),t.jsx(l,{height:16}),t.jsx(u,{color:"positive",style:d.button,onPress:()=>p({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"})]})]})]});k.__docgenInfo={description:"",methods:[],displayName:"Default"};var z,A,N;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(N=(A=k.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const Dt=["Default"];export{k as Default,Dt as __namedExportsOrder,Et as default};
//# sourceMappingURL=Toast.stories-ChYA-PH3.js.map
