import{S as $,a as n,h as v,m as I,j as E,V as k,b as N,L as Q,c as X}from"./Space-131d2659.js";import{r as c}from"./index-f1f749bf.js";import{S as Z,O as ee,h as o}from"./Boxed-504eec90.js";import{R as te}from"./rifm.esm-58cee9fb.js";import{i as P,n as re}from"./function-8a8a634e.js";import{g as ne}from"./rifm-eecf3b98.js";import{B as R}from"./index.module-1db6bb3b.js";import{I as ae}from"./Icon-73a40682.js";import{L as ie}from"./LakeCombobox-1c9abec7.js";import{L as x}from"./LakeLabel-aac4e0bb.js";import{S as Y,a as z}from"./_StoriesComponents-4317655e.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Svg-2acfd8ba.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./Popover-b5bbefb8.js";import"./useResponsive-3673dcf0.js";import"./BottomPanel-fcd63f37.js";import"./commonStyles-d52fedae.js";import"./useBodyClassName-bd00433d.js";import"./math-28929e20.js";import"./FocusTrap-074e2df6.js";import"./array-ac607f66.js";import"./LoadingView-68568d8b.js";import"./index-6257b084.js";import"./Portal-73206726.js";import"./index-96c5f47c.js";import"./WithCurrentColor-109acf67.js";import"./TransitionView-0a62a35b.js";import"./index-fdb8b60f.js";import"./index-e53aaaa4.js";import"./useMergeRefs-66f03dce.js";import"./LakeTextInput-9de5dca3.js";import"./Fill-d3a29646.js";import"./index-8ede57ec.js";import"./v4-a960c1f4.js";const V=$.create({label:{flex:1},arrowContainer:{height:40}}),oe={hour:0,minute:0},se={hour:23,minute:59},G=15,le=ne({accept:"numeric",charMap:{2:":"},maxLength:4}),_=e=>{const[t,r]=e.split(":").map(Number);return v(t)||isNaN(t)||v(r)||isNaN(r)?o.None():o.Some({hour:t,minute:r})},D=e=>{const t=I(e.start)?_(e.start):o.None(),r=I(e.end)?_(e.end):o.None();return{start:t,end:r}},ue=e=>{const[t]=e.split(":");if(v(t)||(t==null?void 0:t.length)!==2)return o.None();const r=Number(t);return r<0||r>23?o.None():isNaN(r)?o.None():o.Some(r)},me=e=>`${e.hour.toString().padStart(2,"0")}:${e.minute.toString().padStart(2,"0")}`,T=e=>e.hour*60+e.minute,de=e=>({hour:Math.floor(e/60),minute:e%60}),M=e=>e.hour>=0&&e.hour<=23&&e.minute>=0&&e.minute<=59,ce=(e,t)=>T(e)<T(t),C=e=>e.start.isNone()||e.end.isNone()?!0:ce(e.start.value,e.end.value),pe=(e,t,r)=>{const s=T(e),l=T(t),i=[];for(let a=s;a<=l;a+=r){const d=de(a);i.push(me(d))}return i},m=({value:e,onChangeText:t,suggestionStart:r=oe,suggestionEnd:s=se,intervalInMinutes:l=G,nbMaxSuggestions:i,readOnly:a,disabled:d,error:b,hideErrors:p,noSuggestionLabel:S})=>{const g=ue(e??""),u=c.useMemo(()=>g.match({Some:f=>[{hour:f,minute:0},{hour:f,minute:59}],None:()=>[r,s]}),[g,r,s]),q=c.useMemo(()=>pe(u[0],u[1],l).slice(0,i),[u,l,i]),J=c.useMemo(()=>Z.Done(ee.Ok(q)),[q]);return n(te,{value:e??"",onChange:t,...le,children:({value:f,onChange:K})=>n(ie,{keyExtractor:P,placeholder:"HH:MM",value:f,items:J,renderItem:P,readOnly:a,disabled:d,error:b,hideErrors:p,emptyResultText:S,onChange:K,onValueChange:re,onSelectItem:t})})},L=({value:e,onChange:t,intervalInMinutes:r=G,nbMaxSuggestions:s,readOnly:l,disabled:i,error:a,startLabel:d,endLabel:b,noSuggestionLabel:p})=>{const S=u=>{t({start:u,end:e.end})},g=u=>{t({start:e.start,end:u})};return E(k,{children:[E(R,{direction:"row",alignItems:"end",children:[n(x,{label:d,style:V.label,render:()=>n(m,{value:e.start,intervalInMinutes:r,nbMaxSuggestions:s,error:a,hideErrors:!0,disabled:i,readOnly:l,noSuggestionLabel:p,onChangeText:S})}),n(N,{width:12}),n(R,{style:V.arrowContainer,justifyContent:"center",children:n(ae,{name:"arrow-right-filled",size:20})}),n(N,{width:12}),n(x,{label:b,style:V.label,render:()=>n(m,{value:e.end,intervalInMinutes:r,nbMaxSuggestions:s,error:a,hideErrors:!0,disabled:i,readOnly:l,noSuggestionLabel:p,onChangeText:g})})]}),n(N,{height:4}),n(Q,{variant:"smallRegular",color:X.negative[500],children:a??" "})]})};try{_.displayName="parseTime",_.__docgenInfo={description:"",displayName:"parseTime",props:{}}}catch{}try{D.displayName="parseTimeRange",D.__docgenInfo={description:"",displayName:"parseTimeRange",props:{start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"string"}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"string"}}}}}catch{}try{M.displayName="validateTime",M.__docgenInfo={description:"",displayName:"validateTime",props:{hour:{defaultValue:null,description:"",name:"hour",required:!0,type:{name:"number"}},minute:{defaultValue:null,description:"",name:"minute",required:!0,type:{name:"number"}}}}}catch{}try{C.displayName="validateTimeRange",C.__docgenInfo={description:"",displayName:"validateTimeRange",props:{start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"Option<Time>"}},end:{defaultValue:null,description:"",name:"end",required:!0,type:{name:"Option<Time>"}}}}}catch{}try{m.displayName="TimePicker",m.__docgenInfo={description:"",displayName:"TimePicker",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChangeText:{defaultValue:null,description:"",name:"onChangeText",required:!0,type:{name:"(value: string) => void"}},suggestionStart:{defaultValue:{value:"{ hour: 0, minute: 0 }"},description:"",name:"suggestionStart",required:!1,type:{name:"Time"}},suggestionEnd:{defaultValue:{value:"{ hour: 23, minute: 59 }"},description:"",name:"suggestionEnd",required:!1,type:{name:"Time"}},intervalInMinutes:{defaultValue:{value:"15"},description:"",name:"intervalInMinutes",required:!1,type:{name:"number"}},nbMaxSuggestions:{defaultValue:null,description:"",name:"nbMaxSuggestions",required:!1,type:{name:"number"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},hideErrors:{defaultValue:null,description:"",name:"hideErrors",required:!1,type:{name:"boolean"}},noSuggestionLabel:{defaultValue:null,description:"",name:"noSuggestionLabel",required:!0,type:{name:"string"}}}}}catch{}try{L.displayName="TimeRangePicker",L.__docgenInfo={description:"",displayName:"TimeRangePicker",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"{ start?: string | undefined; end?: string | undefined; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: { start?: string | undefined; end?: string | undefined; }) => void"}},intervalInMinutes:{defaultValue:{value:"15"},description:"",name:"intervalInMinutes",required:!1,type:{name:"number"}},nbMaxSuggestions:{defaultValue:null,description:"",name:"nbMaxSuggestions",required:!1,type:{name:"number"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},startLabel:{defaultValue:null,description:"",name:"startLabel",required:!0,type:{name:"string"}},endLabel:{defaultValue:null,description:"",name:"endLabel",required:!0,type:{name:"string"}},noSuggestionLabel:{defaultValue:null,description:"",name:"noSuggestionLabel",required:!0,type:{name:"string"}}}}}catch{}const W=$.create({container:{maxWidth:430}}),w=new Date;w.setDate(w.getDate()-15);const O=new Date;O.setDate(O.getDate()+15);const Ze={title:"Forms/TimePicker",component:m},ge=e=>{const[t,r]=c.useState();return n(m,{...e,value:t,onChangeText:r})},fe=e=>{const[t,r]=c.useState({});return n(L,{...e,value:t,onChange:r})},y=()=>n(Y,{title:"TimePicker",children:n(z,{title:"Default",children:n(k,{style:W.container,children:n(ge,{noSuggestionLabel:"No time available"})})})}),h=()=>n(Y,{title:"TimeRangePicker",children:n(z,{title:"Default",children:n(k,{style:W.container,children:n(fe,{startLabel:"Start",endLabel:"End",noSuggestionLabel:"No time available",intervalInMinutes:15})})})});var A,B,F;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <StoryBlock title="TimePicker">
      <StoryPart title="Default">
        <View style={styles.container}>
          <InteractiveTimePicker noSuggestionLabel="No time available" />
        </View>
      </StoryPart>
    </StoryBlock>;
}`,...(F=(B=y.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,j,U;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <StoryBlock title="TimeRangePicker">
      <StoryPart title="Default">
        <View style={styles.container}>
          <InteractiveTimeRangePicker startLabel="Start" endLabel="End" noSuggestionLabel="No time available" intervalInMinutes={15} />
        </View>
      </StoryPart>
    </StoryBlock>;
}`,...(U=(j=h.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};const et=["Default","RangePicker"];export{y as Default,h as RangePicker,et as __namedExportsOrder,Ze as default};
//# sourceMappingURL=TimePicker.stories-ad997246.js.map
