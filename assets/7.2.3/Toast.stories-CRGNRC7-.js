import{s as Q,g as $,N as O,f as F,j as t,V as L,c as u,B as D,I as x,S as d,L as T,i as _,n as H,P as Y,p as I,h as J}from"./Space-DL-ib-Tf.js";import{L as m}from"./LakeButton-CvYOlo9I.js";import{t as C}from"./i18n-Bw4KLLM7.js";import{r as v}from"./index-CBqU2yxZ.js";import{w as M}from"./with-selector-D-Y2eL2T.js";import{A as k,E}from"./Animated-DT-_8wlF.js";import{P as N}from"./Pressable-CNHO5Gim.js";import{T as X}from"./TransitionGroupView-CEMk_Jum.js";import{C as K}from"./index-DGaDRGzj.js";import{S as U,a as B}from"./_StoriesComponents-CY4THWfR.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./index-ZD6EBxZp.js";import"./rifm-D6CpFOko.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./index-DIz0UnDg.js";import"./index-BpndFZoR.js";import"./index-CZMiqHJf.js";import"./TransitionView-DNlPtq9W.js";class R extends Error{constructor(s,n,o,a,r,i,p){super(s),this.name="GraphQLError",this.message=s,r&&(this.path=r),n&&(this.nodes=Array.isArray(n)?n:[n]),o&&(this.source=o),a&&(this.positions=a),i&&(this.originalError=i);var l=p;if(!l&&i){var h=i.extensions;h&&typeof h=="object"&&(l=h)}this.extensions=l||{}}toJSON(){return{...this,message:this.message}}toString(){return this.message}get[Symbol.toStringTag](){return"GraphQLError"}}var Z=e=>e&&e.message&&(e.extensions||e.name==="GraphQLError")?e:typeof e=="object"&&e.message?new R(e.message,e.nodes,e.source,e.positions,e.path,e,e.extensions||{}):new R(e);class z extends Error{constructor(s){var n=(s.graphQLErrors||[]).map(Z),o=((a,r)=>{var i="";if(a)return`[Network] ${a.message}`;if(r)for(var p of r)i&&(i+=`
`),i+=`[GraphQL] ${p.message}`;return i})(s.networkError,n);super(o),this.name="CombinedError",this.message=o,this.graphQLErrors=n,this.networkError=s.networkError,this.response=s.response}toString(){return this.message}}typeof TextDecoder<"u"&&new TextDecoder;function tt(e){const s=new Set;let n=e;return{get:()=>n,set(o){n=typeof o=="function"?o(n):o,s.forEach(a=>a(n))},subscribe:o=>(s.add(o),()=>{s.delete(o)}),reset(){n=e,s.forEach(o=>o(n))}}}function et(e){return e}function ot(e,s){return s===void 0&&(s=Object.is),M.useSyncExternalStoreWithSelector(e.subscribe,e.get,e.get,et,s)}const st=e=>{const{duration:s,onStart:n,onReset:o,onEnd:a}=e;let r=0,i=s;const p=()=>{document.removeEventListener("visibilitychange",c),window.clearTimeout(r)},l=()=>{i<=0||(r=window.setTimeout(()=>{i=0,p(),a()},i),n(s))},h=()=>{window.clearTimeout(r),i=s,r=window.setTimeout(()=>{i=0,p(),a()},s),o(s)},c=()=>{document.removeEventListener("visibilitychange",c),l()};return document.hidden?document.addEventListener("visibilitychange",c):l(),{duration:s,clear:p,reset:h}},S=tt([]),nt=()=>ot(S),A=e=>{var n,o;const s=S.get().find(a=>a.uid===e);s&&((n=s.timeout)==null||n.clear(),(o=s.progress)==null||o.stopAnimation(),S.set(a=>a.filter(r=>r.uid!==e)))},g=({variant:e,title:s,description:n,error:o,autoClose:a})=>{const r=`${e} - ${s} - ${n??""}`,i=S.get().find(c=>c.uid===r);if(i!=null)return i.timeout&&i.progress&&(i.timeout.clear(),k.timing(i.progress,{duration:100,easing:E.linear,toValue:1,useNativeDriver:!1}).start(()=>{var c;(c=i.timeout)==null||c.reset()})),r;const l=a??(e==="info"||e==="success")?new k.Value(1):void 0,h=l?st({duration:1e4,onStart:c=>{k.timing(l,{duration:c,easing:E.linear,toValue:0,useNativeDriver:!1}).start()},onReset:c=>{k.timing(l,{duration:c,easing:E.linear,toValue:0,useNativeDriver:!1}).start()},onEnd:()=>{A(r)}}):void 0;return S.set(c=>[{uid:r,variant:e,title:s,description:n,error:o,progress:l,timeout:h},...c]),r},rt=e=>e instanceof z,w=Q.create({list:{position:"absolute",right:0,bottom:0,maxHeight:"100%",maxWidth:400,paddingVertical:8,width:"100%",zIndex:10},toastWrapper:{paddingHorizontal:16,paddingVertical:8},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:"hidden",boxShadow:$.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:"absolute",width:24,height:24,right:24,top:0,bottom:0,margin:"auto"},progressBar:{height:2,transformOrigin:"left"},copyTooltip:{alignSelf:"flex-start"},copyButton:{alignItems:"center",flexDirection:"row",flexGrow:1,flexShrink:1}}),it=v.memo(({variant:e,uid:s,title:n,description:o,error:a,progress:r,onClose:i})=>{const p=v.useRef(null),[l,h]=v.useState("copy"),c=J(o),f=O(e).returnType().with("success",()=>"positive").with("error",()=>"negative").with("info",()=>"shakespear").with("warning",()=>"warning").exhaustive();return v.useEffect(()=>{if(F(r))return;const j=r.addListener(({value:G})=>{p.current instanceof HTMLElement&&(p.current.style.transform=`scaleX(${G})`)});return()=>r.removeListener(j)},[r]),t.jsx(L,{style:w.toastWrapper,children:t.jsxs(L,{style:[w.toast,{borderColor:u[f][200],borderLeftColor:u[f][500],backgroundColor:u[f][0]}],children:[t.jsxs(D,{style:w.contentContainer,children:[t.jsxs(D,{direction:"row",alignItems:"center",children:[O(e).with("success",()=>t.jsx(x,{name:"checkmark-circle-regular",size:20,color:u[f][700]})).with("error",()=>t.jsx(x,{name:"dismiss-circle-regular",size:20,color:u[f][700]})).with("info",()=>t.jsx(x,{name:"info-regular",size:20,color:u[f][700]})).with("warning",()=>t.jsx(x,{name:"warning-regular",size:20,color:u[f][700]})).exhaustive(),t.jsx(d,{width:12}),t.jsx(T,{variant:"regular",color:u[f][700],children:n})]}),c&&t.jsxs(t.Fragment,{children:[t.jsx(d,{height:8}),t.jsx(T,{variant:"smallRegular",color:u.gray[700],children:o})]}),rt(a)&&_(a.requestId)?t.jsxs(t.Fragment,{children:[t.jsx(d,{height:c?4:8}),t.jsx(H,{describedBy:"copy",onHide:()=>h("copy"),togglableOnFocus:!0,placement:"center",containerStyle:w.copyTooltip,content:l==="copy"?C("copyButton.copyTooltip"):C("copyButton.copiedTooltip"),children:t.jsxs(N,{style:w.copyButton,onPress:j=>{j.stopPropagation(),j.preventDefault(),K.setString(a.requestId??""),h("copied")},children:[t.jsx(x,{color:u.gray[700],size:14,name:"copy-regular"}),t.jsx(d,{width:4}),t.jsxs(T,{numberOfLines:1,variant:"smallRegular",color:u.gray[700],children:["ID: ",a.requestId]})]})})]}):null]}),t.jsx(N,{onPress:()=>i(s),style:w.closeButton,children:t.jsx(x,{name:"lake-close",size:24,color:u.gray[500]})}),r!=null&&t.jsxs(t.Fragment,{children:[t.jsx(d,{height:24}),t.jsx(L,{ref:p,role:"progressbar",style:[w.progressBar,{backgroundColor:u[f][500]}]})]})]})})}),P=()=>{const e=nt(),[s,n]=v.useState(()=>{});return v.useEffect(()=>{const o=document.createElement("div");return document.body.append(o),n(o),()=>{o.remove(),n(void 0)}},[]),s==null?null:t.jsx(Y,{container:s,children:t.jsx(X,{style:w.list,enter:I.fadeAndSlideInFromRight.enter,leave:I.fadeAndSlideInFromRight.leave,children:e.map(o=>t.jsx(it,{uid:o.uid,variant:o.variant,title:o.title,description:o.description,error:o.error,progress:o.progress,onClose:A},o.uid))})})};P.__docgenInfo={description:"",methods:[],displayName:"ToastStack"};const y={button:{width:200}},Pt={title:"Interactivity/Toast",component:P},b=()=>{const e=new z({});return e.requestId="req-thvfknqp",t.jsxs(t.Fragment,{children:[t.jsx(P,{}),t.jsxs(U,{title:"Toast",children:[t.jsxs(B,{title:"With only title",children:[t.jsx(m,{color:"positive",style:y.button,onPress:()=>g({variant:"success",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t.jsx(d,{height:16}),t.jsx(m,{color:"negative",style:y.button,onPress:()=>g({variant:"error",title:"Oops ! Something went wrong"}),children:"Open error toast"}),t.jsx(d,{height:16}),t.jsx(m,{color:"shakespear",style:y.button,onPress:()=>g({variant:"info",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),t.jsx(d,{height:16}),t.jsx(m,{color:"warning",style:y.button,onPress:()=>g({variant:"warning",title:"Oops ! Something went wrong"}),children:"Open warning toast"})]}),t.jsxs(B,{title:"With title and description",children:[t.jsx(m,{color:"positive",style:y.button,onPress:()=>g({variant:"success",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t.jsx(d,{height:16}),t.jsx(m,{color:"negative",style:y.button,onPress:()=>g({variant:"error",title:"Oops ! Something went wrong",error:e,description:"Please retry or contact us"}),children:"Open error toast"}),t.jsx(d,{height:16}),t.jsx(m,{color:"shakespear",style:y.button,onPress:()=>g({variant:"info",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),t.jsx(d,{height:16}),t.jsx(m,{color:"warning",style:y.button,onPress:()=>g({variant:"warning",title:"Oops ! Something went wrong",description:"Talk to an expert"}),children:"Open warning toast"})]}),t.jsxs(B,{title:"With long title and description",children:[t.jsx(m,{color:"positive",style:y.button,onPress:()=>g({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"}),t.jsx(d,{height:16}),t.jsx(m,{color:"positive",style:y.button,onPress:()=>g({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"})]})]})]})};b.__docgenInfo={description:"",methods:[],displayName:"Default"};var V,W,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const error = new CombinedError({});
  error.requestId = "req-thvfknqp";
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
}`,...(q=(W=b.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const Ot=["Default"];export{b as Default,Ot as __namedExportsOrder,Pt as default};
//# sourceMappingURL=Toast.stories-CRGNRC7-.js.map
