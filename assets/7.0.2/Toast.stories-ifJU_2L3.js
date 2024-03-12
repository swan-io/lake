import{s as R,g as V,N as P,f as z,j as t,V as j,c as l,B,I as w,S as m,L as O,P as A,p as E}from"./Space-Bfex_hJx.js";import{L as d}from"./LakeButton-DgMSOTHv.js";import{r as v}from"./index-CBqU2yxZ.js";import{w as N}from"./with-selector-D-Y2eL2T.js";import{A as b,E as k}from"./Animated-iOMc0azd.js";import{P as _}from"./Pressable-BgOPYjbo.js";import{T as F}from"./TransitionGroupView-C3dBcIre.js";import{S as $,a as L}from"./_StoriesComponents-BGHZFReg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./index-CYWflgUg.js";import"./index-C2BwA3tx.js";import"./index-CAUOOh5b.js";import"./index-CZpPLWdc.js";import"./TransitionView-BczQdH9L.js";function Y(o){const n=new Set;let r=o;return{get:()=>r,set(e){r=typeof e=="function"?e(r):e,n.forEach(s=>s(r))},subscribe:e=>(n.add(e),()=>{n.delete(e)}),reset(){r=o,n.forEach(e=>e(r))}}}function H(o){return o}function G(o,n){return n===void 0&&(n=Object.is),N.useSyncExternalStoreWithSelector(o.subscribe,o.get,o.get,H,n)}const M=o=>{const{duration:n,onStart:r,onReset:e,onEnd:s}=o;let a=0,u=n;const i=()=>{document.removeEventListener("visibilitychange",S),window.clearTimeout(a)},g=()=>{u<=0||(a=window.setTimeout(()=>{u=0,i(),s()},u),r(n))},c=()=>{window.clearTimeout(a),u=n,a=window.setTimeout(()=>{u=0,i(),s()},n),e(n)},S=()=>{document.removeEventListener("visibilitychange",S),g()};return document.hidden?document.addEventListener("visibilitychange",S):g(),{duration:n,clear:i,reset:c}},x=Y([]),X=()=>G(x),I=o=>{var r,e;const n=x.get().find(s=>s.uid===o);n&&((r=n.timeout)==null||r.clear(),(e=n.progress)==null||e.stopAnimation(),x.set(s=>s.filter(a=>a.uid!==o)))},p=({variant:o,title:n,description:r,autoClose:e})=>{const s=`${o} - ${n} - ${r??""}`,a=x.get().find(c=>c.uid===s);if(a!=null)return a.timeout&&a.progress&&(a.timeout.clear(),b.timing(a.progress,{duration:100,easing:k.linear,toValue:1,useNativeDriver:!1}).start(()=>{var c;(c=a.timeout)==null||c.reset()})),s;const i=e??(o==="info"||o==="success")?new b.Value(1):void 0,g=i?M({duration:1e4,onStart:c=>{b.timing(i,{duration:c,easing:k.linear,toValue:0,useNativeDriver:!1}).start()},onReset:c=>{b.timing(i,{duration:c,easing:k.linear,toValue:0,useNativeDriver:!1}).start()},onEnd:()=>{I(s)}}):void 0;return x.set(c=>[{uid:s,variant:o,title:n,description:r,progress:i,timeout:g},...c]),s},y=R.create({list:{position:"absolute",right:0,bottom:0,maxHeight:"100%",maxWidth:400,paddingVertical:8,width:"100%",zIndex:10},toastWrapper:{paddingHorizontal:16,paddingVertical:8},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:"hidden",boxShadow:V.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:"absolute",width:24,height:24,right:24,top:0,bottom:0,margin:"auto"},progressBar:{height:2,transformOrigin:"left"}}),q=v.memo(({variant:o,uid:n,title:r,description:e,progress:s,onClose:a})=>{const u=v.useRef(null),i=P(o).returnType().with("success",()=>"positive").with("error",()=>"negative").with("info",()=>"shakespear").with("warning",()=>"warning").exhaustive();return v.useEffect(()=>{if(z(s))return;const g=s.addListener(({value:c})=>{u.current instanceof HTMLElement&&(u.current.style.transform=`scaleX(${c})`)});return()=>s.removeListener(g)},[s]),t.jsx(j,{style:y.toastWrapper,children:t.jsxs(j,{style:[y.toast,{borderColor:l[i][200],borderLeftColor:l[i][500],backgroundColor:l[i][0]}],children:[t.jsxs(B,{style:y.contentContainer,children:[t.jsxs(B,{direction:"row",alignItems:"center",children:[P(o).with("success",()=>t.jsx(w,{name:"checkmark-circle-regular",size:20,color:l[i][700]})).with("error",()=>t.jsx(w,{name:"dismiss-circle-regular",size:20,color:l[i][700]})).with("info",()=>t.jsx(w,{name:"info-regular",size:20,color:l[i][700]})).with("warning",()=>t.jsx(w,{name:"warning-regular",size:20,color:l[i][700]})).exhaustive(),t.jsx(m,{width:12}),t.jsx(O,{variant:"regular",color:l[i][700],children:r})]}),e!=null&&t.jsxs(t.Fragment,{children:[t.jsx(m,{height:8}),t.jsx(O,{variant:"smallRegular",color:l.gray[700],children:e})]})]}),t.jsx(_,{onPress:()=>a(n),style:y.closeButton,children:t.jsx(w,{name:"lake-close",size:24,color:l.gray[500]})}),s!=null&&t.jsxs(t.Fragment,{children:[t.jsx(m,{height:24}),t.jsx(j,{ref:u,role:"progressbar",style:[y.progressBar,{backgroundColor:l[i][500]}]})]})]})})}),T=()=>{const o=X(),[n,r]=v.useState(()=>{});return v.useEffect(()=>{const e=document.createElement("div");return document.body.append(e),r(e),()=>{e.remove(),r(void 0)}},[]),n==null?null:t.jsx(A,{container:n,children:t.jsx(F,{style:y.list,enter:E.fadeAndSlideInFromRight.enter,leave:E.fadeAndSlideInFromRight.leave,children:o.map(e=>t.jsx(q,{uid:e.uid,variant:e.variant,progress:e.progress,title:e.title,description:e.description,onClose:I},e.uid))})})};T.__docgenInfo={description:"",methods:[],displayName:"ToastStack"};const h={button:{width:200}},pt={title:"Interactivity/Toast",component:T},f=()=>t.jsxs(t.Fragment,{children:[t.jsx(T,{}),t.jsxs($,{title:"Toast",children:[t.jsxs(L,{title:"With only title",children:[t.jsx(d,{color:"positive",style:h.button,onPress:()=>p({variant:"success",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t.jsx(m,{height:16}),t.jsx(d,{color:"negative",style:h.button,onPress:()=>p({variant:"error",title:"Oops ! Something went wrong"}),children:"Open error toast"}),t.jsx(m,{height:16}),t.jsx(d,{color:"shakespear",style:h.button,onPress:()=>p({variant:"info",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t.jsx(m,{height:16}),t.jsx(d,{color:"warning",style:h.button,onPress:()=>p({variant:"warning",title:"Oops ! Something went wrong"}),children:"Open warning toast"})]}),t.jsxs(L,{title:"With title and description",children:[t.jsx(d,{color:"positive",style:h.button,onPress:()=>p({variant:"success",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t.jsx(m,{height:16}),t.jsx(d,{color:"negative",style:h.button,onPress:()=>p({variant:"error",title:"Oops ! Something went wrong",description:"Please retry or contact us"}),children:"Open error toast"}),t.jsx(m,{height:16}),t.jsx(d,{color:"shakespear",style:h.button,onPress:()=>p({variant:"info",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t.jsx(m,{height:16}),t.jsx(d,{color:"warning",style:h.button,onPress:()=>p({variant:"warning",title:"Oops ! Something went wrong",description:"Talk to an expert"}),children:"Open warning toast"})]}),t.jsxs(L,{title:"With long title and description",children:[t.jsx(d,{color:"positive",style:h.button,onPress:()=>p({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"}),t.jsx(m,{height:16}),t.jsx(d,{color:"positive",style:h.button,onPress:()=>p({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"})]})]})]});f.__docgenInfo={description:"",methods:[],displayName:"Default"};var D,W,C;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(C=(W=f.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};const ht=["Default"];export{f as Default,ht as __namedExportsOrder,pt as default};
//# sourceMappingURL=Toast.stories-ifJU_2L3.js.map
