import{j as n}from"./jsx-runtime-DT09rT5F.js";import{r as T}from"./index-DXKZGL6g.js";import{s as Y,aa as ne,G as ie,B as R,L as J,c as S,I as K,h as _,l as j,p as c,V as $,S as D}from"./ScrollView-C1yxRy16.js";import{R as se}from"./rifm.esm-B_sHgh9o.js";import{n as ae}from"./function-DXO-3Yjx.js";import{g as oe}from"./rifm-BpdKztb4.js";import{F as ue}from"./Fill-CPmWVm4i.js";import{L as me}from"./LakeCombobox-CrV2SfZI.js";import{L as F}from"./LakeLabel-DkfEw3kL.js";import{S as Q,a as X}from"./_StoriesComponents-CKgElVW5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BeFrmAzh.js";import"./Pressable-to27AyJA.js";import"./FocusTrap-Cq0HuauR.js";import"./array-BfAlyugE.js";import"./Popover-DDdajSsf.js";import"./useResponsive-6iDeDSbQ.js";import"./BottomPanel-D4EPn_06.js";import"./commonStyles-CWvHnKRn.js";import"./useBodyClassName-CYzM7DM-.js";import"./Suspendable-CKuscA2L.js";import"./index-BpljNV4n.js";import"./extends-CF3RwP-h.js";import"./TransitionView-Cm_7ViIn.js";import"./index-VNGmZ7GH.js";import"./LakeTextInput-CEY2eHwV.js";import"./LakeSelect-CKFvqJMY.js";import"./useDisclosure-CwHJfrsH.js";import"./Separator-DMQr2iVh.js";import"./index-BAVjSphd.js";import"./v4-C6aID195.js";const E=Y.create({label:{flex:1},arrowContainer:{height:40}}),le={hour:0,minute:0},ce={hour:23,minute:59},Z=15,de=oe({accept:"numeric",charMap:{2:":"},maxLength:4}),V=e=>{const[t,r]=e.split(":").map(Number);return _(t)||isNaN(t)||_(r)||isNaN(r)?c.None():c.Some({hour:t,minute:r})},pe=e=>{const t=j(e.start)?V(e.start):c.None(),r=j(e.end)?V(e.end):c.None();return{start:t,end:r}},ge=e=>{const[t,r]=e.split(":");if(_(t)||(t==null?void 0:t.length)!==2||j(r))return c.None();const i=Number(t);return i<0||i>23?c.None():isNaN(i)?c.None():c.Some(i)},w=e=>`${e.hour.toString().padStart(2,"0")}:${e.minute.toString().padStart(2,"0")}`,o=e=>e.hour*60+e.minute,p=e=>({hour:Math.floor(e/60),minute:e%60}),ye=(e,t)=>p(o(e)+t),fe=(e,t)=>{const r=o(e),i=Math.floor(r/t)*t;return p(i)},he=(e,t)=>o(e)<o(t),Te=e=>e.start.isNone()||e.end.isNone()?!0:he(e.start.value,e.end.value),be=(...e)=>{const t=e.map(o),r=Math.min(...t);return p(r)},xe=(...e)=>{const t=e.map(o),r=Math.max(...t);return p(r)},ke=(e,t,r)=>{const i=o(e),u=o(t),l=[];for(let a=i;a<=u;a+=r){const g=p(a);l.push(g)}return l},ve=(e,t,r)=>e.hour===0?`${e.minute} ${t}`:e.minute===0?`${e.hour} ${r}`:`${e.hour} ${r} ${e.minute} ${t}`,b=({value:e,onChangeText:t,suggestionStart:r=le,suggestionEnd:i=ce,intervalInMinutes:u=Z,nbMaxSuggestions:l,suggestionSuffix:a,readOnly:g,disabled:N,error:q,hideErrors:L,noSuggestionLabel:x})=>{const d=ge(e??""),y=T.useMemo(()=>d.match({Some:m=>[xe({hour:m,minute:0},r),be({hour:m,minute:59},i)],None:()=>[r,i]}),[d,r,i]),k=T.useMemo(()=>ke(y[0],y[1],u).slice(0,l),[y,u,l]),s=T.useMemo(()=>ne.Done(ie.Ok(k)),[k]);return n.jsx(se,{value:e??"",onChange:t,...de,children:({value:m,onChange:I})=>n.jsx(me,{keyExtractor:w,placeholder:"HH:MM",value:m,items:s,itemHeight:40,nbItemsDisplayed:4.5,renderItem:v=>{const M=w(v),P=M===m,C=a==null?void 0:a(v),re=j(C)?`${M} ${C}`:M;return n.jsxs(R,{direction:"row",alignItems:"center",children:[n.jsx(J,{color:P?S.gray[700]:S.gray[900],variant:P?"smallRegular":"medium",children:re}),n.jsx(ue,{minWidth:8}),P&&n.jsx(K,{name:"checkmark-filled",color:S.positive[500],size:16})]})},readOnly:g,disabled:N,error:q,hideErrors:L,emptyResultText:x,onChange:I,onValueChange:ae,onSelectItem:v=>t(w(v))})})},ee=({value:e,onChange:t,intervalInMinutes:r=Z,nbMaxSuggestions:i,readOnly:u,disabled:l,error:a,startLabel:g,endLabel:N,minutesLabel:q,hoursLabel:L,noSuggestionLabel:x})=>{const d=V(e.start??""),y=s=>{t({start:s,end:e.end})},k=s=>{t({start:e.start,end:s})};return n.jsxs($,{children:[n.jsxs(R,{direction:"row",alignItems:"end",children:[n.jsx(F,{label:g,style:E.label,render:()=>n.jsx(b,{value:e.start,intervalInMinutes:r,nbMaxSuggestions:i,error:a,hideErrors:!0,disabled:l,readOnly:u,noSuggestionLabel:x,onChangeText:y})}),n.jsx(D,{width:12}),n.jsx(R,{style:E.arrowContainer,justifyContent:"center",children:n.jsx(K,{name:"arrow-right-filled",size:20})}),n.jsx(D,{width:12}),n.jsx(F,{label:N,style:E.label,render:()=>n.jsx(b,{value:e.end,intervalInMinutes:r,nbMaxSuggestions:i,suggestionStart:d.map(s=>fe(s,r)).map(s=>ye(s,r)).match({Some:s=>s,None:()=>{}}),suggestionSuffix:s=>{if(d.isNone())return"";const m=o(s)-o(d.value);if(m>0&&m<=60){const I=p(m);return`(${ve(I,q,L)})`}return""},error:a,hideErrors:!0,disabled:l,readOnly:u,noSuggestionLabel:x,onChangeText:k})})]}),n.jsx(D,{height:4}),n.jsx(J,{variant:"smallRegular",color:S.negative[500],children:a??" "})]})};b.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},onChangeText:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},suggestionStart:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  hour: number;
  minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:"{ hour: 0, minute: 0 }",computed:!1}},suggestionEnd:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  hour: number;
  minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:"{ hour: 23, minute: 59 }",computed:!1}},intervalInMinutes:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"15",computed:!1}},nbMaxSuggestions:{required:!1,tsType:{name:"number"},description:""},suggestionSuffix:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: Time) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  hour: number;
  minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]}},name:"option"}],return:{name:"string"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""},hideErrors:{required:!1,tsType:{name:"boolean"},description:""},noSuggestionLabel:{required:!0,tsType:{name:"string"},description:""}}};ee.__docgenInfo={description:"",methods:[],displayName:"TimeRangePicker",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:"{ start?: string; end?: string }",signature:{properties:[{key:"start",value:{name:"string",required:!1}},{key:"end",value:{name:"string",required:!1}}]}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: { start?: string; end?: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ start?: string; end?: string }",signature:{properties:[{key:"start",value:{name:"string",required:!1}},{key:"end",value:{name:"string",required:!1}}]}},name:"value"}],return:{name:"void"}}},description:""},intervalInMinutes:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"15",computed:!1}},nbMaxSuggestions:{required:!1,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""},startLabel:{required:!0,tsType:{name:"string"},description:""},endLabel:{required:!0,tsType:{name:"string"},description:""},minutesLabel:{required:!0,tsType:{name:"string"},description:""},hoursLabel:{required:!0,tsType:{name:"string"},description:""},noSuggestionLabel:{required:!0,tsType:{name:"string"},description:""}}};const te=Y.create({container:{maxWidth:430}}),A=new Date;A.setDate(A.getDate()-15);const B=new Date;B.setDate(B.getDate()+15);const rt={title:"Forms/TimePicker",component:b},Se=e=>{const[t,r]=T.useState();return n.jsx(b,{...e,value:t,onChangeText:r})},je=e=>{const[t,r]=T.useState({}),i=pe(t),u=Te(i)?void 0:"Start time must be before end time";return n.jsx(ee,{...e,value:t,onChange:r,error:u})},f=()=>n.jsx(Q,{title:"TimePicker",children:n.jsx(X,{title:"Default",children:n.jsx($,{style:te.container,children:n.jsx(Se,{noSuggestionLabel:"No time available"})})})}),h=()=>n.jsx(Q,{title:"TimeRangePicker",children:n.jsx(X,{title:"Default",children:n.jsx($,{style:te.container,children:n.jsx(je,{startLabel:"Start",endLabel:"End",minutesLabel:"Mins",hoursLabel:"Hours",noSuggestionLabel:"No time available",intervalInMinutes:15})})})});f.__docgenInfo={description:"",methods:[],displayName:"Default"};h.__docgenInfo={description:"",methods:[],displayName:"RangePicker"};var H,O,U;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <StoryBlock title="TimePicker">
      <StoryPart title="Default">
        <View style={styles.container}>
          <InteractiveTimePicker noSuggestionLabel="No time available" />
        </View>
      </StoryPart>
    </StoryBlock>;
}`,...(U=(O=f.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var z,G,W;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <StoryBlock title="TimeRangePicker">
      <StoryPart title="Default">
        <View style={styles.container}>
          <InteractiveTimeRangePicker startLabel="Start" endLabel="End" minutesLabel="Mins" hoursLabel="Hours" noSuggestionLabel="No time available" intervalInMinutes={15} />
        </View>
      </StoryPart>
    </StoryBlock>;
}`,...(W=(G=h.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};const nt=["Default","RangePicker"];export{f as Default,h as RangePicker,nt as __namedExportsOrder,rt as default};
//# sourceMappingURL=TimePicker.stories-DgaN0S7b.js.map