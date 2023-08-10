import{S as A,s as N,N as E,k as $,j as t,V as P,a as g,c as l,I as f,b as m,L as x,F as O,P as j,p as W}from"./Space-f85095f8.js";import{a as d}from"./LakeButton-8ba56376.js";import{r as v}from"./index-b9a8c83f.js";import{w as F}from"./with-selector-74062ea5.js";import{A as S,E as T}from"./Animated-2d9f33ca.js";import{B as C}from"./Box-f4fbfbba.js";import{P as Y}from"./Pressable-37f3c29b.js";import{T as H}from"./TransitionGroupView-7b1f450f.js";import{S as _,a as B}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-4daf2301.js";import"./index-c216e26a.js";import"./index-1a82f3cd.js";import"./index-71e0d995.js";import"./index-51399c4b.js";import"./useMergeRefs-56399732.js";import"./Boxed-885d7854.js";import"./TransitionView-5833e7af.js";function G(o){var n=new Set,r=o;return{get:function(){return r},set:function(e){r=typeof e=="function"?e(r):e,n.forEach(function(s){return s(r)})},subscribe:function(e){return n.add(e),function(){n.delete(e)}},reset:function(){r=o,n.forEach(function(e){return e(r)})}}}function M(o){return o}function X(o,n){return n===void 0&&(n=Object.is),F.useSyncExternalStoreWithSelector(o.subscribe,o.get,o.get,M,n)}const q=o=>{const{duration:n,onStart:r,onReset:e,onEnd:s}=o;let a=0,u=n;const i=()=>{document.removeEventListener("visibilitychange",L),window.clearTimeout(a)},y=()=>{u<=0||(a=window.setTimeout(()=>{u=0,i(),s()},u),r(n))},c=()=>{window.clearTimeout(a),u=n,a=window.setTimeout(()=>{u=0,i(),s()},n),e(n)},L=()=>{document.removeEventListener("visibilitychange",L),y()};return document.hidden?document.addEventListener("visibilitychange",L):y(),{duration:n,clear:i,reset:c}},b=G([]),J=()=>X(b),I=o=>{var r,e;const n=b.get().find(s=>s.uid===o);n&&((r=n.timeout)==null||r.clear(),(e=n.progress)==null||e.stopAnimation(),b.set(s=>s.filter(a=>a.uid!==o)))},p=({variant:o,title:n,description:r,autoClose:e})=>{const s=`${o} - ${n} - ${r??""}`,a=b.get().find(c=>c.uid===s);if(a!=null)return a.timeout&&a.progress&&(a.timeout.clear(),S.timing(a.progress,{duration:100,easing:T.linear,toValue:1,useNativeDriver:!1}).start(()=>{var c;(c=a.timeout)==null||c.reset()})),s;const i=e??(o==="info"||o==="success")?new S.Value(1):void 0,y=i?q({duration:1e4,onStart:c=>{S.timing(i,{duration:c,easing:T.linear,toValue:0,useNativeDriver:!1}).start()},onReset:c=>{S.timing(i,{duration:c,easing:T.linear,toValue:0,useNativeDriver:!1}).start()},onEnd:()=>{I(s)}}):void 0;return b.set(c=>[{uid:s,variant:o,title:n,description:r,progress:i,timeout:y},...c]),s},w=A.create({list:{position:"absolute",right:0,bottom:0,maxHeight:"100%",maxWidth:400,paddingVertical:8,width:"100%",zIndex:10},toastWrapper:{paddingHorizontal:16,paddingVertical:8},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:"hidden",boxShadow:N.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:"absolute",width:24,height:24,right:24,top:0,bottom:0,margin:"auto"},progressBar:{height:2,transformOrigin:"left"}}),K=v.memo(({variant:o,uid:n,title:r,description:e,progress:s,onClose:a})=>{const u=v.useRef(null),i=E(o).returnType().with("success",()=>"positive").with("error",()=>"negative").with("info",()=>"shakespear").with("warning",()=>"warning").exhaustive();return v.useEffect(()=>{if($(s))return;const y=s.addListener(({value:c})=>{u.current instanceof HTMLElement&&(u.current.style.transform=`scaleX(${c})`)});return()=>s.removeListener(y)},[s]),t(P,{style:w.toastWrapper,children:g(P,{style:[w.toast,{borderColor:l[i][200],borderLeftColor:l[i][500],backgroundColor:l[i][0]}],children:[g(C,{style:w.contentContainer,children:[g(C,{direction:"row",alignItems:"center",children:[E(o).with("success",()=>t(f,{name:"checkmark-circle-regular",size:20,color:l[i][700]})).with("error",()=>t(f,{name:"dismiss-circle-regular",size:20,color:l[i][700]})).with("info",()=>t(f,{name:"info-regular",size:20,color:l[i][700]})).with("warning",()=>t(f,{name:"warning-regular",size:20,color:l[i][700]})).exhaustive(),t(m,{width:12}),t(x,{variant:"regular",color:l[i][700],children:r})]}),e!=null&&g(O,{children:[t(m,{height:8}),t(x,{variant:"smallRegular",color:l.gray[700],children:e})]})]}),t(Y,{onPress:()=>a(n),style:w.closeButton,children:t(f,{name:"lake-close",size:24,color:l.gray[500]})}),s!=null&&g(O,{children:[t(m,{height:24}),t(P,{ref:u,role:"progressbar",style:[w.progressBar,{backgroundColor:l[i][500]}]})]})]})})}),z=()=>{const o=J(),[n,r]=v.useState(()=>{});return v.useEffect(()=>{const e=document.createElement("div");return document.body.append(e),r(e),()=>{e.remove(),r(void 0)}},[]),n==null?null:t(j,{container:n,children:t(H,{style:w.list,enter:W.fadeAndSlideInFromRight.enter,leave:W.fadeAndSlideInFromRight.leave,children:o.map(e=>t(K,{uid:e.uid,variant:e.variant,progress:e.progress,title:e.title,description:e.description,onClose:I},e.uid))})})},h={button:{width:200}},yt={title:"Interactivity/Toast",component:z},k=()=>g(O,{children:[t(z,{}),g(_,{title:"Toast",children:[g(B,{title:"With only title",children:[t(d,{color:"positive",style:h.button,onPress:()=>p({variant:"success",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t(m,{height:16}),t(d,{color:"negative",style:h.button,onPress:()=>p({variant:"error",title:"Oops ! Something went wrong"}),children:"Open error toast"}),t(m,{height:16}),t(d,{color:"shakespear",style:h.button,onPress:()=>p({variant:"info",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t(m,{height:16}),t(d,{color:"warning",style:h.button,onPress:()=>p({variant:"warning",title:"Oops ! Something went wrong"}),children:"Open warning toast"})]}),g(B,{title:"With title and description",children:[t(d,{color:"positive",style:h.button,onPress:()=>p({variant:"success",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t(m,{height:16}),t(d,{color:"negative",style:h.button,onPress:()=>p({variant:"error",title:"Oops ! Something went wrong",description:"Please retry or contact us"}),children:"Open error toast"}),t(m,{height:16}),t(d,{color:"shakespear",style:h.button,onPress:()=>p({variant:"info",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t(m,{height:16}),t(d,{color:"warning",style:h.button,onPress:()=>p({variant:"warning",title:"Oops ! Something went wrong",description:"Talk to an expert"}),children:"Open warning toast"})]}),g(B,{title:"With long title and description",children:[t(d,{color:"positive",style:h.button,onPress:()=>p({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"}),t(m,{height:16}),t(d,{color:"positive",style:h.button,onPress:()=>p({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"})]})]})]});var D,V,R;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(R=(V=k.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};const wt=["Default"];export{k as Default,wt as __namedExportsOrder,yt as default};
//# sourceMappingURL=Toast.stories-edab0ae7.js.map
