import{j as e}from"./jsx-runtime-DT09rT5F.js";import{L as Z}from"./LakeButton-CVVSHUYx.js";import{i as l,m as le,d as de,V as d,s as ee,B as ce,c as me,z as ue,L,S as te,k as ye}from"./ScrollView-DmQfgLfc.js";import{W as j}from"./WithPartnerAccentColor-2rt4tnVD.js";import{r as u}from"./index-DXKZGL6g.js";import{e as pe,f as fe,v as he}from"./validation-DCSCrqLM.js";import{I as De}from"./InputError-z2BPnb0I.js";import{L as Se}from"./LakeLabel-l7dK7hcQ.js";import{L as ke}from"./LakeSelect-QJXODN46.js";import{L as v}from"./LakeTextInput-QJ4qFEyK.js";import{S as R}from"./Stack-BrYJlv04.js";import{u as ge}from"./useResponsive-6iDeDSbQ.js";import{u as xe,a as re,i as Pe,b as be,D as je,c as Ye,v as Me,d as Le}from"./DatePicker-BjnwYItK.js";import{t as s}from"./i18n-CSSfE9Sx.js";import{c as we,f as Be}from"./countries-DGLDUNj1.js";import{S as Y,a as c}from"./_StoriesComponents-B9HmSSEq.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-qr-VC_qH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BJTS7HPn.js";import"./extends-CF3RwP-h.js";import"./index-BlQSi2IU.js";import"./utc-D_eSGhSe.js";import"./iban-DIYypfei.js";import"./v4-C6aID195.js";import"./useDisclosure-CwHJfrsH.js";import"./FocusTrap-DNHrld98.js";import"./array-BfAlyugE.js";import"./Fill-CUnIUPIA.js";import"./Popover-D6DUAftz.js";import"./function-CEqjUwAs.js";import"./BottomPanel-BUH_mbnv.js";import"./useBodyClassName-CYzM7DM-.js";import"./Suspendable-BjksFpPY.js";import"./TransitionView-B8hXHfhO.js";import"./index-BwY4x6i0.js";import"./Separator-DsQMCOlS.js";import"./index-Yq17wMy8.js";import"./rifm-O4oTxRTM.js";import"./rifm.esm-B_sHgh9o.js";import"./LakeModal-DAlslLff.js";import"./LakeHeading-D5hgUnge.js";import"./ResponsiveContainer-CJ6uRWwm.js";import"./string-Bw7KfuiM.js";const We=()=>{const n=navigator.languages.map(r=>r.split("-")[1]).filter(l);for(let r=0;r<n.length;r++){const a=n[r],i=we.find(({cca2:y})=>y===a);if(l(i))return i}return Be},Ie=[{value:"01",name:s("datePicker.month.january")},{value:"02",name:s("datePicker.month.february")},{value:"03",name:s("datePicker.month.march")},{value:"04",name:s("datePicker.month.april")},{value:"05",name:s("datePicker.month.may")},{value:"06",name:s("datePicker.month.june")},{value:"07",name:s("datePicker.month.july")},{value:"08",name:s("datePicker.month.august")},{value:"09",name:s("datePicker.month.september")},{value:"10",name:s("datePicker.month.october")},{value:"11",name:s("datePicker.month.november")},{value:"12",name:s("datePicker.month.december")}],p=ee.create({container:{paddingTop:6},dayMobile:{maxWidth:70,flexGrow:0},day:{maxWidth:90,flexGrow:0},yearMobile:{maxWidth:80,flexGrow:0},year:{maxWidth:120,flexGrow:0},error:{borderColor:me.negative[400]}}),Te=ue(We().cca2).returnType().with("US",()=>"MDY").with("CN","JP","KR","KP","TW","HU","MN","LT","BT",()=>"YMD").otherwise(()=>"DMY"),ne=({value:n,label:r,readOnly:a=!1,onValueChange:i,validate:y=()=>{},error:f,style:ae})=>{const{desktop:T}=ge(le.small),h=u.useRef(new Set),{Field:ie,validateField:se}=xe({date:{initialValue:l(n)?pe(n):void 0,sanitize:o=>l(o)?{day:o.day.trim(),month:o.month.trim(),year:o.year.trim()}:void 0,strategy:"onSubmit",validate:o=>{const D=y(o);return de(D)&&l(o)?i==null?void 0:i(fe(o)):(i==null||i(void 0),D)}}}),w=()=>{h.current.has("day")&&h.current.has("month")&&h.current.has("year")&&se("date")};return e.jsx(d,{style:[p.container,ae],children:e.jsx(ie,{name:"date",children:({error:o,onChange:D,value:t})=>e.jsx(Se,{label:r,render:oe=>{const V=e.jsx(d,{style:T?p.day:p.dayMobile,children:e.jsx(v,{id:oe,readOnly:a,style:(l(o)||l(f))&&p.error,placeholder:s("datePicker.day"),value:(t==null?void 0:t.day)??void 0,onBlur:()=>{h.current.add("day"),w()},hideErrors:!0,onChangeText:S=>{D({day:S,month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""})},pattern:"[0-9]",maxLength:2,autoComplete:"bday-day"})}),E=e.jsx(ke,{value:(t==null?void 0:t.month)===""||t==null?void 0:t.month,style:(l(o)||l(f))&&p.error,readOnly:a,placeholder:s("datePicker.month"),hideErrors:!0,items:Ie,onValueChange:S=>{h.current.add("month"),w(),D({day:(t==null?void 0:t.day)??"",month:S,year:(t==null?void 0:t.year)??""})}}),F=e.jsx(d,{style:T?p.year:p.yearMobile,children:e.jsx(v,{value:t==null?void 0:t.year,style:(l(o)||l(f))&&p.error,readOnly:a,placeholder:s("datePicker.year"),onBlur:()=>{h.current.add("year"),w()},hideErrors:!0,onChangeText:S=>D({day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:S}),pattern:"[0-9]",maxLength:4,autoComplete:"bday-year"})});return e.jsxs(ce,{children:[Te==="DMY"?e.jsxs(R,{direction:"row",space:4,children:[V," ",E," ",F]}):e.jsxs(R,{direction:"row",space:4,children:[E," ",V," ",F]}),e.jsx(De,{message:o??f})]})}})})})};ne.__docgenInfo={description:"",methods:[],displayName:"InlineDatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},validate:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ExtractedDate | undefined) => string | undefined",signature:{arguments:[{type:{name:"union",raw:"ExtractedDate | undefined",elements:[{name:"signature",type:"object",raw:`{
  day: string;
  month: string;
  year: string;
}`,signature:{properties:[{key:"day",value:{name:"string",required:!0}},{key:"month",value:{name:"string",required:!0}},{key:"year",value:{name:"string",required:!0}}]}},{name:"undefined"}]},name:"value"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:"",defaultValue:{value:"() => undefined",computed:!1}}}};const B=({value:n,label:r,readOnly:a=!1,onValueChange:i,error:y,style:f})=>e.jsx(ne,{value:n,label:r,readOnly:a,onValueChange:i,error:y,style:f,validate:he});B.__docgenInfo={description:"",methods:[],displayName:"BirthdatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const m=ee.create({container:{maxWidth:430},button:{alignSelf:"flex-start"}}),W=new Date;W.setDate(W.getDate()-15);const I=new Date;I.setDate(I.getDate()+15);const jt={title:"Forms/DatePicker",component:re},M=({...n})=>{const[r,a]=u.useState();return e.jsx(re,{...n,value:r,onChange:a})},Ve=({...n})=>{const[r,a]=u.useState({start:"",end:""}),i=Me(r,n.format);return e.jsx(Le,{...n,value:r,error:i?void 0:"End date can't be before start date",onChange:a})},k=()=>e.jsx(j,{color:"#0F6FDE",children:e.jsxs(Y,{title:"DatePicker",children:[e.jsx(c,{title:"Default",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})}),e.jsx(c,{title:"Week starting sunday",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY"})})}),e.jsx(c,{title:"Selectable only in the future",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:Pe})})}),e.jsx(c,{title:"Selectable only in a range (15 days before or after today)",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:be(W,I)})})})]})}),g=()=>{const n=u.useRef(null),[r,a]=u.useState(""),[i,y]=u.useState(!1);return e.jsx(j,{color:"#0F6FDE",children:e.jsx(Y,{title:"DatePicker Modal",children:e.jsxs(c,{title:"Default",children:[e.jsxs(L,{children:["Selected date: ",r]}),e.jsx(te,{height:20}),e.jsx(Z,{ref:n,style:m.button,onPress:()=>y(!0),children:"Open date picker"}),e.jsx(je,{visible:i,value:r,firstWeekDay:"monday",format:"DD/MM/YYYY",label:"Select a date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:a,onDismiss:()=>y(!1)})]})})})},x=()=>e.jsx(j,{color:"#0F6FDE",children:e.jsx(Y,{title:"DateRangePicker",children:e.jsx(c,{title:"Default",children:e.jsx(d,{style:m.container,children:e.jsx(Ve,{startLabel:"Start date",endLabel:"End date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})})})}),P=()=>{const[n,r]=u.useState({start:"",end:""}),[a,i]=u.useState(!1);return e.jsx(j,{color:"#0F6FDE",children:e.jsx(Y,{title:"DatePicker Popover",children:e.jsxs(c,{title:"Default",children:[e.jsxs(L,{children:["Selected date: ",n.start," - ",n.end]}),e.jsx(te,{height:20}),e.jsx(Z,{style:m.button,onPress:()=>i(!0),children:"Open date range picker"}),e.jsx(Ye,{visible:a,value:n,firstWeekDay:"monday",format:"DD/MM/YYYY",startLabel:"Start date",endLabel:"End date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:r,onDismiss:()=>i(!1)})]})})})},b=()=>{const n="",[r,a]=u.useState(n);return e.jsx(j,{color:"#0F6FDE",children:e.jsxs(Y,{title:"Inline picker",children:[e.jsx(c,{title:"Default",children:e.jsxs(d,{style:m.container,children:[ye(r)&&e.jsxs(L,{children:["Selected date: ",r]}),e.jsx(B,{label:"Birthdate",value:n,onValueChange:a})]})}),e.jsx(c,{title:"Readonly",children:e.jsxs(d,{style:m.container,children:[l(r)&&e.jsxs(L,{children:["Selected date: ",r]}),e.jsx(B,{label:"Birthdate",value:n,readOnly:!0,onValueChange:a})]})})]})})};k.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"ButtonWithModal"};x.__docgenInfo={description:"",methods:[],displayName:"Range"};P.__docgenInfo={description:"",methods:[],displayName:"ButtonWithRangePopover"};b.__docgenInfo={description:"",methods:[],displayName:"Inline"};var O,C,_;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DatePicker">
        <StoryPart title="Default">
          <View style={styles.container}>
            <InteractiveDatePicker label="Select a date" firstWeekDay="monday" format="DD/MM/YYYY" />
          </View>
        </StoryPart>

        <StoryPart title="Week starting sunday">
          <View style={styles.container}>
            <InteractiveDatePicker label="Select a date" firstWeekDay="sunday" format="DD/MM/YYYY" />
          </View>
        </StoryPart>

        <StoryPart title="Selectable only in the future">
          <View style={styles.container}>
            <InteractiveDatePicker label="Select a date" firstWeekDay="sunday" format="DD/MM/YYYY" isSelectable={isTodayOrFutureDate} />
          </View>
        </StoryPart>

        <StoryPart title="Selectable only in a range (15 days before or after today)">
          <View style={styles.container}>
            <InteractiveDatePicker label="Select a date" firstWeekDay="sunday" format="DD/MM/YYYY" isSelectable={isDateInRange(FIFTEEN_DAYS_AGO, FIFTEEN_DAYS_LATER)} />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(_=(C=k.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var N,A,q;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const buttonRef = useRef<View | null>(null);
  const [value, setValue] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DatePicker Modal">
        <StoryPart title="Default">
          <LakeText>Selected date: {value}</LakeText>
          <Space height={20} />

          <LakeButton ref={buttonRef} style={styles.button} onPress={() => setIsOpened(true)}>
            Open date picker
          </LakeButton>

          <DatePickerModal visible={isOpened} value={value} firstWeekDay="monday" format="DD/MM/YYYY" label="Select a date" confirmLabel="Select" cancelLabel="Cancel" onChange={setValue} onDismiss={() => setIsOpened(false)} />
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(q=(A=g.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var G,U,z;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DateRangePicker">
        <StoryPart title="Default">
          <View style={styles.container}>
            <InteractiveDateRangePicker startLabel="Start date" endLabel="End date" firstWeekDay="monday" format="DD/MM/YYYY" />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(z=(U=x.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var K,H,J;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [value, setValue] = useState({
    start: "",
    end: ""
  });
  const [isOpened, setIsOpened] = useState(false);
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DatePicker Popover">
        <StoryPart title="Default">
          <LakeText>
            Selected date: {value.start} - {value.end}
          </LakeText>

          <Space height={20} />

          <LakeButton style={styles.button} onPress={() => setIsOpened(true)}>
            Open date range picker
          </LakeButton>

          <DateRangePickerModal visible={isOpened} value={value} firstWeekDay="monday" format="DD/MM/YYYY" startLabel="Start date" endLabel="End date" confirmLabel="Select" cancelLabel="Cancel" onChange={setValue} onDismiss={() => setIsOpened(false)} />
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(J=(H=P.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var $,Q,X;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const initialValue = "";
  const [birthdate, setBirthdate] = useState<string | undefined>(initialValue);
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="Inline picker">
        <StoryPart title="Default">
          <View style={styles.container}>
            {isNotNullishOrEmpty(birthdate) && <LakeText>Selected date: {birthdate}</LakeText>}

            <BirthdatePicker label={"Birthdate"} value={initialValue} onValueChange={setBirthdate} />
          </View>
        </StoryPart>

        <StoryPart title="Readonly">
          <View style={styles.container}>
            {isNotNullish(birthdate) && <LakeText>Selected date: {birthdate}</LakeText>}

            <BirthdatePicker label={"Birthdate"} value={initialValue} readOnly={true} onValueChange={setBirthdate} />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Yt=["Default","ButtonWithModal","Range","ButtonWithRangePopover","Inline"];export{g as ButtonWithModal,P as ButtonWithRangePopover,k as Default,b as Inline,x as Range,Yt as __namedExportsOrder,jt as default};
//# sourceMappingURL=DatePicker.stories-DMyYW8wR.js.map
