import{S as A,h as $,g as j,a as t,V as P,j as g,c as l,b as m,L as E,F as O,m as x}from"./Space-a702eced.js";import{L as p}from"./LakeButton-133e25cf.js";import{r as v}from"./index-ebeaab24.js";import{Q as W,B as D}from"./index-ac9179ac.js";import{w as F}from"./with-selector-6c55c874.js";import{A as S,E as T}from"./Animated-fe45f80b.js";import{I as f}from"./Icon-deaf2458.js";import{P as N}from"./Portal-2164713e.js";import{P as Y}from"./Pressable-c882f415.js";import{T as H}from"./TransitionGroupView-be88c6e8.js";import{S as _,a as B}from"./_StoriesComponents-97d37cc1.js";import"./extends-98964cd2.js";import"./index-bc6e6125.js";import"./index-1cb3eff1.js";import"./index-7b4c282e.js";import"./index-81df9716.js";import"./index-bc385145.js";import"./index-0b650484.js";import"./Svg-fe3a1521.js";import"./index-9c09ad76.js";import"./WithCurrentColor-083d77eb.js";import"./useMergeRefs-af5bcba9.js";import"./Boxed-dafb0729.js";import"./TransitionView-4539ece9.js";function G(o){var n=new Set,r=o;return{get:function(){return r},set:function(e){r=typeof e=="function"?e(r):e,n.forEach(function(s){return s(r)})},subscribe:function(e){return n.add(e),function(){n.delete(e)}},reset:function(){r=o,n.forEach(function(e){return e(r)})}}}function M(o){return o}function Q(o,n){return n===void 0&&(n=Object.is),F.useSyncExternalStoreWithSelector(o.subscribe,o.get,o.get,M,n)}const X=o=>{const{duration:n,onStart:r,onReset:e,onEnd:s}=o;let a=0,u=n;const i=()=>{document.removeEventListener("visibilitychange",L),window.clearTimeout(a)},y=()=>{u<=0||(a=window.setTimeout(()=>{u=0,i(),s()},u),r(n))},c=()=>{window.clearTimeout(a),u=n,a=window.setTimeout(()=>{u=0,i(),s()},n),e(n)},L=()=>{document.removeEventListener("visibilitychange",L),y()};return document.hidden?document.addEventListener("visibilitychange",L):y(),{duration:n,clear:i,reset:c}},b=G([]),q=()=>Q(b),I=o=>{var r,e;const n=b.get().find(s=>s.uid===o);n&&((r=n.timeout)==null||r.clear(),(e=n.progress)==null||e.stopAnimation(),b.set(s=>s.filter(a=>a.uid!==o)))},d=({variant:o,title:n,description:r,autoClose:e})=>{const s=`${o} - ${n} - ${r??""}`,a=b.get().find(c=>c.uid===s);if(a!=null)return a.timeout&&a.progress&&(a.timeout.clear(),S.timing(a.progress,{duration:100,easing:T.linear,toValue:1,useNativeDriver:!1}).start(()=>{var c;(c=a.timeout)==null||c.reset()})),s;const i=e??(o==="info"||o==="success")?new S.Value(1):void 0,y=i?X({duration:1e4,onStart:c=>{S.timing(i,{duration:c,easing:T.linear,toValue:0,useNativeDriver:!1}).start()},onReset:c=>{S.timing(i,{duration:c,easing:T.linear,toValue:0,useNativeDriver:!1}).start()},onEnd:()=>{I(s)}}):void 0;return b.set(c=>[{uid:s,variant:o,title:n,description:r,progress:i,timeout:y},...c]),s},w=A.create({list:{position:"absolute",right:0,bottom:0,maxHeight:"100%",maxWidth:400,paddingVertical:8,width:"100%",zIndex:10},toastWrapper:{paddingHorizontal:16,paddingVertical:8},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:"hidden",boxShadow:$.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:"absolute",width:24,height:24,right:24,top:0,bottom:0,margin:"auto"},progressBar:{height:2,transformOrigin:"left"}}),J=v.memo(({variant:o,uid:n,title:r,description:e,progress:s,onClose:a})=>{const u=v.useRef(null),i=W(o).returnType().with("success",()=>"positive").with("error",()=>"negative").with("info",()=>"shakespear").with("warning",()=>"warning").exhaustive();return v.useEffect(()=>{if(j(s))return;const y=s.addListener(({value:c})=>{u.current instanceof HTMLElement&&(u.current.style.transform=`scaleX(${c})`)});return()=>s.removeListener(y)},[s]),t(P,{style:w.toastWrapper,children:g(P,{style:[w.toast,{borderColor:l[i][200],borderLeftColor:l[i][500],backgroundColor:l[i][0]}],children:[g(D,{style:w.contentContainer,children:[g(D,{direction:"row",alignItems:"center",children:[W(o).with("success",()=>t(f,{name:"checkmark-circle-regular",size:20,color:l[i][700]})).with("error",()=>t(f,{name:"dismiss-circle-regular",size:20,color:l[i][700]})).with("info",()=>t(f,{name:"info-regular",size:20,color:l[i][700]})).with("warning",()=>t(f,{name:"warning-regular",size:20,color:l[i][700]})).exhaustive(),t(m,{width:12}),t(E,{variant:"regular",color:l[i][700],children:r})]}),e!=null&&g(O,{children:[t(m,{height:8}),t(E,{variant:"smallRegular",color:l.gray[700],children:e})]})]}),t(Y,{onPress:()=>a(n),style:w.closeButton,children:t(f,{name:"lake-close",size:24,color:l.gray[500]})}),s!=null&&g(O,{children:[t(m,{height:24}),t(P,{ref:u,role:"progressbar",style:[w.progressBar,{backgroundColor:l[i][500]}]})]})]})})}),z=()=>{const o=q(),[n,r]=v.useState(()=>{});return v.useEffect(()=>{const e=document.createElement("div");return document.body.append(e),r(e),()=>{e.remove(),r(void 0)}},[]),n==null?null:t(N,{container:n,children:t(H,{style:w.list,enter:x.fadeAndSlideInFromRight.enter,leave:x.fadeAndSlideInFromRight.leave,children:o.map(e=>t(J,{uid:e.uid,variant:e.variant,progress:e.progress,title:e.title,description:e.description,onClose:I},e.uid))})})},h={button:{width:200}},St={title:"Interactivity/Toast",component:z},k=()=>g(O,{children:[t(z,{}),g(_,{title:"Toast",children:[g(B,{title:"With only title",children:[t(p,{color:"positive",style:h.button,onPress:()=>d({variant:"success",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t(m,{height:16}),t(p,{color:"negative",style:h.button,onPress:()=>d({variant:"error",title:"Oops ! Something went wrong"}),children:"Open error toast"}),t(m,{height:16}),t(p,{color:"shakespear",style:h.button,onPress:()=>d({variant:"info",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t(m,{height:16}),t(p,{color:"warning",style:h.button,onPress:()=>d({variant:"warning",title:"Oops ! Something went wrong"}),children:"Open warning toast"})]}),g(B,{title:"With title and description",children:[t(p,{color:"positive",style:h.button,onPress:()=>d({variant:"success",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t(m,{height:16}),t(p,{color:"negative",style:h.button,onPress:()=>d({variant:"error",title:"Oops ! Something went wrong",description:"Please retry or contact us"}),children:"Open error toast"}),t(m,{height:16}),t(p,{color:"shakespear",style:h.button,onPress:()=>d({variant:"info",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t(m,{height:16}),t(p,{color:"warning",style:h.button,onPress:()=>d({variant:"warning",title:"Oops ! Something went wrong",description:"Talk to an expert"}),children:"Open warning toast"})]}),g(B,{title:"With long title and description",children:[t(p,{color:"positive",style:h.button,onPress:()=>d({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"}),t(m,{height:16}),t(p,{color:"positive",style:h.button,onPress:()=>d({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"})]})]})]});var V,C,R;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(R=(C=k.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const kt=["Default"];export{k as Default,kt as __namedExportsOrder,St as default};
//# sourceMappingURL=Toast.stories-67034074.js.map
