import{s as $,g as G,$ as O,f as Q,j as e,V as L,c as u,B as I,I as x,S as d,L as T,i as _,n as H,P as Y,p as C,h as J}from"./Space-B3r5-oVe.js";import{L as m}from"./LakeButton-DGcntlYI.js";import{t as D}from"./i18n-CC6cRCOL.js";import{r as v}from"./index-CBqU2yxZ.js";import{w as M}from"./with-selector-D-Y2eL2T.js";import{A as k,E}from"./Animated-CFV5VgO7.js";import{P as N}from"./Pressable-xe9FSwv7.js";import{T as X}from"./TransitionGroupView-DNYrzcwy.js";import{C as K}from"./index-DGaDRGzj.js";import{S as U,a as B}from"./_StoriesComponents-Diyw88Ym.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./index-Cve1gofG.js";import"./rifm-ByO29QgC.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./index-CeaNCfOr.js";import"./index-BhlJTZEe.js";import"./index-CQKAl3Bn.js";import"./TransitionView-Cmzg2a-A.js";class V extends Error{constructor(s,n,o,a,r,i,p){super(s),this.name="GraphQLError",this.message=s,r&&(this.path=r),n&&(this.nodes=Array.isArray(n)?n:[n]),o&&(this.source=o),a&&(this.positions=a),i&&(this.originalError=i);var l=p;if(!l&&i){var h=i.extensions;h&&typeof h=="object"&&(l=h)}this.extensions=l||{}}toJSON(){return{...this,message:this.message}}toString(){return this.message}get[Symbol.toStringTag](){return"GraphQLError"}}var Z=function(t){return t[t.Const=1]="Const",t[t.Var=2]="Var",t[t.Int=3]="Int",t[t.Float=4]="Float",t[t.BlockString=5]="BlockString",t[t.String=6]="String",t[t.Enum=7]="Enum",t}(Z||{}),tt=function(t){return t[t.Spread=1]="Spread",t[t.Name=2]="Name",t}(tt||{}),et=t=>t&&t.message&&(t.extensions||t.name==="GraphQLError")?t:typeof t=="object"&&t.message?new V(t.message,t.nodes,t.source,t.positions,t.path,t,t.extensions||{}):new V(t);class z extends Error{constructor(s){var n=(s.graphQLErrors||[]).map(et),o=((a,r)=>{var i="";if(a)return`[Network] ${a.message}`;if(r)for(var p of r)i&&(i+=`
`),i+=`[GraphQL] ${p.message}`;return i})(s.networkError,n);super(o),this.name="CombinedError",this.message=o,this.graphQLErrors=n,this.networkError=s.networkError,this.response=s.response}toString(){return this.message}}typeof TextDecoder<"u"&&new TextDecoder;function ot(t){const s=new Set;let n=t;return{get:()=>n,set(o){n=typeof o=="function"?o(n):o,s.forEach(a=>a(n))},subscribe:o=>(s.add(o),()=>{s.delete(o)}),reset(){n=t,s.forEach(o=>o(n))}}}function st(t){return t}function nt(t,s){return s===void 0&&(s=Object.is),M.useSyncExternalStoreWithSelector(t.subscribe,t.get,t.get,st,s)}const rt=t=>{const{duration:s,onStart:n,onReset:o,onEnd:a}=t;let r=0,i=s;const p=()=>{document.removeEventListener("visibilitychange",c),window.clearTimeout(r)},l=()=>{i<=0||(r=window.setTimeout(()=>{i=0,p(),a()},i),n(s))},h=()=>{window.clearTimeout(r),i=s,r=window.setTimeout(()=>{i=0,p(),a()},s),o(s)},c=()=>{document.removeEventListener("visibilitychange",c),l()};return document.hidden?document.addEventListener("visibilitychange",c):l(),{duration:s,clear:p,reset:h}},b=ot([]),it=()=>nt(b),A=t=>{var n,o;const s=b.get().find(a=>a.uid===t);s&&((n=s.timeout)==null||n.clear(),(o=s.progress)==null||o.stopAnimation(),b.set(a=>a.filter(r=>r.uid!==t)))},g=({variant:t,title:s,description:n,error:o,autoClose:a})=>{const r=`${t} - ${s} - ${n??""}`,i=b.get().find(c=>c.uid===r);if(i!=null)return i.timeout&&i.progress&&(i.timeout.clear(),k.timing(i.progress,{duration:100,easing:E.linear,toValue:1,useNativeDriver:!1}).start(()=>{var c;(c=i.timeout)==null||c.reset()})),r;const l=a??(t==="info"||t==="success")?new k.Value(1):void 0,h=l?rt({duration:1e4,onStart:c=>{k.timing(l,{duration:c,easing:E.linear,toValue:0,useNativeDriver:!1}).start()},onReset:c=>{k.timing(l,{duration:c,easing:E.linear,toValue:0,useNativeDriver:!1}).start()},onEnd:()=>{A(r)}}):void 0;return b.set(c=>[{uid:r,variant:t,title:s,description:n,error:o,progress:l,timeout:h},...c]),r},at=t=>t instanceof z,w=$.create({list:{position:"absolute",right:0,bottom:0,maxHeight:"100%",maxWidth:400,paddingVertical:8,width:"100%",zIndex:10},toastWrapper:{paddingHorizontal:16,paddingVertical:8},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:"hidden",boxShadow:G.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:"absolute",width:24,height:24,right:24,top:0,bottom:0,margin:"auto"},progressBar:{height:2,transformOrigin:"left"},copyTooltip:{alignSelf:"flex-start"},copyButton:{alignItems:"center",flexDirection:"row",flexGrow:1,flexShrink:1}}),ct=v.memo(({variant:t,uid:s,title:n,description:o,error:a,progress:r,onClose:i})=>{const p=v.useRef(null),[l,h]=v.useState("copy"),c=J(o),f=O(t).returnType().with("success",()=>"positive").with("error",()=>"negative").with("info",()=>"shakespear").with("warning",()=>"warning").exhaustive();return v.useEffect(()=>{if(Q(r))return;const j=r.addListener(({value:F})=>{p.current instanceof HTMLElement&&(p.current.style.transform=`scaleX(${F})`)});return()=>r.removeListener(j)},[r]),e.jsx(L,{style:w.toastWrapper,children:e.jsxs(L,{style:[w.toast,{borderColor:u[f][200],borderLeftColor:u[f][500],backgroundColor:u[f][0]}],children:[e.jsxs(I,{style:w.contentContainer,children:[e.jsxs(I,{direction:"row",alignItems:"center",children:[O(t).with("success",()=>e.jsx(x,{name:"checkmark-circle-regular",size:20,color:u[f][700]})).with("error",()=>e.jsx(x,{name:"dismiss-circle-regular",size:20,color:u[f][700]})).with("info",()=>e.jsx(x,{name:"info-regular",size:20,color:u[f][700]})).with("warning",()=>e.jsx(x,{name:"warning-regular",size:20,color:u[f][700]})).exhaustive(),e.jsx(d,{width:12}),e.jsx(T,{variant:"regular",color:u[f][700],children:n})]}),c&&e.jsxs(e.Fragment,{children:[e.jsx(d,{height:8}),e.jsx(T,{variant:"smallRegular",color:u.gray[700],children:o})]}),at(a)&&_(a.requestId)?e.jsxs(e.Fragment,{children:[e.jsx(d,{height:c?4:8}),e.jsx(H,{describedBy:"copy",onHide:()=>h("copy"),togglableOnFocus:!0,placement:"center",containerStyle:w.copyTooltip,content:l==="copy"?D("copyButton.copyTooltip"):D("copyButton.copiedTooltip"),children:e.jsxs(N,{style:w.copyButton,onPress:j=>{j.stopPropagation(),j.preventDefault(),K.setString(a.requestId??""),h("copied")},children:[e.jsx(x,{color:u.gray[700],size:14,name:"copy-regular"}),e.jsx(d,{width:4}),e.jsxs(T,{numberOfLines:1,variant:"smallRegular",color:u.gray[700],children:["ID: ",a.requestId]})]})})]}):null]}),e.jsx(N,{onPress:()=>i(s),style:w.closeButton,children:e.jsx(x,{name:"lake-close",size:24,color:u.gray[500]})}),r!=null&&e.jsxs(e.Fragment,{children:[e.jsx(d,{height:24}),e.jsx(L,{ref:p,role:"progressbar",style:[w.progressBar,{backgroundColor:u[f][500]}]})]})]})})}),P=()=>{const t=it(),[s,n]=v.useState(()=>{});return v.useEffect(()=>{const o=document.createElement("div");return document.body.append(o),n(o),()=>{o.remove(),n(void 0)}},[]),s==null?null:e.jsx(Y,{container:s,children:e.jsx(X,{style:w.list,enter:C.fadeAndSlideInFromRight.enter,leave:C.fadeAndSlideInFromRight.leave,children:t.map(o=>e.jsx(ct,{uid:o.uid,variant:o.variant,title:o.title,description:o.description,error:o.error,progress:o.progress,onClose:A},o.uid))})})};P.__docgenInfo={description:"",methods:[],displayName:"ToastStack"};const y={button:{width:200}},It={title:"Interactivity/Toast",component:P},S=()=>{const t=new z({});return t.requestId="req-thvfknqp",e.jsxs(e.Fragment,{children:[e.jsx(P,{}),e.jsxs(U,{title:"Toast",children:[e.jsxs(B,{title:"With only title",children:[e.jsx(m,{color:"positive",style:y.button,onPress:()=>g({variant:"success",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),e.jsx(d,{height:16}),e.jsx(m,{color:"negative",style:y.button,onPress:()=>g({variant:"error",title:"Oops ! Something went wrong"}),children:"Open error toast"}),e.jsx(d,{height:16}),e.jsx(m,{color:"shakespear",style:y.button,onPress:()=>g({variant:"info",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),e.jsx(d,{height:16}),e.jsx(m,{color:"warning",style:y.button,onPress:()=>g({variant:"warning",title:"Oops ! Something went wrong"}),children:"Open warning toast"})]}),e.jsxs(B,{title:"With title and description",children:[e.jsx(m,{color:"positive",style:y.button,onPress:()=>g({variant:"success",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),e.jsx(d,{height:16}),e.jsx(m,{color:"negative",style:y.button,onPress:()=>g({variant:"error",title:"Oops ! Something went wrong",error:t,description:"Please retry or contact us"}),children:"Open error toast"}),e.jsx(d,{height:16}),e.jsx(m,{color:"shakespear",style:y.button,onPress:()=>g({variant:"info",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),e.jsx(d,{height:16}),e.jsx(m,{color:"warning",style:y.button,onPress:()=>g({variant:"warning",title:"Oops ! Something went wrong",description:"Talk to an expert"}),children:"Open warning toast"})]}),e.jsxs(B,{title:"With long title and description",children:[e.jsx(m,{color:"positive",style:y.button,onPress:()=>g({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"}),e.jsx(d,{height:16}),e.jsx(m,{color:"positive",style:y.button,onPress:()=>g({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"})]})]})]})};S.__docgenInfo={description:"",methods:[],displayName:"Default"};var R,W,q;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(q=(W=S.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const Ct=["Default"];export{S as Default,Ct as __namedExportsOrder,It as default};
//# sourceMappingURL=Toast.stories-Ce5LI3Va.js.map
