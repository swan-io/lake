import{o as le,f as de,i as l,j as e,V as d,s as Z,B as ce,c as me,z as ue,L,S as ee,n as ye}from"./ScrollView-BL5TcFHx.js";import{L as te}from"./LakeButton-CZerSfca.js";import{W as j}from"./WithPartnerAccentColor-MgUbg_4g.js";import{r as u}from"./iframe-DR7W7vfy.js";import{e as pe,f as he,v as fe}from"./validation-l4Vu7Q1O.js";import{I as De}from"./InputError-CkXgq20p.js";import{L as Se}from"./LakeLabel-abgQFJxu.js";import{L as ke}from"./LakeSelect-CwtEki-z.js";import{L as F}from"./LakeTextInput-Be7OkWbZ.js";import{S as C}from"./Stack-UAuKRbdB.js";import{u as ge}from"./useResponsive-DOpzoi-i.js";import{u as xe,D as re,i as Pe,a as be,b as je,c as Ye,v as Me,d as Le}from"./DatePicker-DRBg1aMf.js";import{t as i}from"./i18n-Bw4R-j04.js";import{i as we,b as Be,f as We}from"./countries-C_gUwk3p.js";import{S as Y,a as c}from"./_StoriesComponents-EVaxcr6Q.js";import"./index-C4fev7_8.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DyrugEec.js";import"./index-CFZyA87K.js";import"./extends-CF3RwP-h.js";import"./iban-WpXXMAjb.js";import"./v4-C6aID195.js";import"./useDisclosure-BZ9C1prq.js";import"./FocusTrap-Bg9Oi-0_.js";import"./array-BfAlyugE.js";import"./Fill-tRz2F1S5.js";import"./Popover-XpCIn0xw.js";import"./function-B8V2HEdX.js";import"./BottomPanel-CHbGP619.js";import"./useBodyClassName-DPPZn9ye.js";import"./Suspendable-DoFHUFMc.js";import"./TransitionView-GvJT2lsc.js";import"./index-fhcyh-Nu.js";import"./Separator-DaGe8paf.js";import"./index-DuyLFHTT.js";import"./rifm-eOCPy0iV.js";import"./rifm.esm-DsQQdIhF.js";import"./LakeModal-DQBGuHAN.js";import"./LakeHeading-CM-Y1l5I.js";import"./ResponsiveContainer-CH4NlvgX.js";import"./string-B0awuwt3.js";const Ie=()=>{const a=navigator.languages.map(r=>r.split("-")[1]);for(const r of a)if(we(r))return Be(r);return We},Te=[{value:"01",name:i("datePicker.month.january")},{value:"02",name:i("datePicker.month.february")},{value:"03",name:i("datePicker.month.march")},{value:"04",name:i("datePicker.month.april")},{value:"05",name:i("datePicker.month.may")},{value:"06",name:i("datePicker.month.june")},{value:"07",name:i("datePicker.month.july")},{value:"08",name:i("datePicker.month.august")},{value:"09",name:i("datePicker.month.september")},{value:"10",name:i("datePicker.month.october")},{value:"11",name:i("datePicker.month.november")},{value:"12",name:i("datePicker.month.december")}],y=Z.create({container:{paddingTop:6},dayMobile:{maxWidth:70,flexGrow:0},day:{maxWidth:90,flexGrow:0},yearMobile:{maxWidth:80,flexGrow:0},year:{maxWidth:120,flexGrow:0},error:{borderColor:me.negative[400]}}),ve=ue(Ie().cca2).returnType().with("US",()=>"MDY").with("CN","JP","KR","KP","TW","HU","MN","LT","BT",()=>"YMD").otherwise(()=>"DMY"),ae=({value:a,label:r,readOnly:n=!1,onValueChange:s,validate:p=()=>{},error:h,style:ne})=>{const{desktop:T}=ge(le.small),f=u.useRef(new Set),{Field:se,validateField:ie}=xe({date:{initialValue:l(a)?pe(a):void 0,sanitize:o=>l(o)?{day:o.day.trim(),month:o.month.trim(),year:o.year.trim()}:void 0,strategy:"onSubmit",validate:o=>{const D=p(o);return de(D)&&l(o)?s==null?void 0:s(he(o)):(s==null||s(void 0),D)}}}),w=()=>{f.current.has("day")&&f.current.has("month")&&f.current.has("year")&&ie("date")};return e.jsx(d,{style:[y.container,ne],children:e.jsx(se,{name:"date",children:({error:o,onChange:D,value:t})=>e.jsx(Se,{label:r,render:oe=>{const v=e.jsx(d,{style:T?y.day:y.dayMobile,children:e.jsx(F,{id:oe,readOnly:n,style:(l(o)||l(h))&&y.error,placeholder:i("datePicker.day"),value:(t==null?void 0:t.day)??void 0,onBlur:()=>{f.current.add("day"),w()},hideErrors:!0,onChangeText:S=>{D({day:S,month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""})},pattern:"[0-9]",maxLength:2,autoComplete:"bday-day"})}),V=e.jsx(ke,{value:(t==null?void 0:t.month)===""||t==null?void 0:t.month,style:(l(o)||l(h))&&y.error,readOnly:n,placeholder:i("datePicker.month"),hideErrors:!0,items:Te,onValueChange:S=>{f.current.add("month"),w(),D({day:(t==null?void 0:t.day)??"",month:S,year:(t==null?void 0:t.year)??""})}}),E=e.jsx(d,{style:T?y.year:y.yearMobile,children:e.jsx(F,{value:t==null?void 0:t.year,style:(l(o)||l(h))&&y.error,readOnly:n,placeholder:i("datePicker.year"),onBlur:()=>{f.current.add("year"),w()},hideErrors:!0,onChangeText:S=>D({day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:S}),pattern:"[0-9]",maxLength:4,autoComplete:"bday-year"})});return e.jsxs(ce,{children:[ve==="DMY"?e.jsxs(C,{direction:"row",space:4,children:[v," ",V," ",E]}):e.jsxs(C,{direction:"row",space:4,children:[V," ",v," ",E]}),e.jsx(De,{message:o??h})]})}})})})};ae.__docgenInfo={description:"",methods:[],displayName:"InlineDatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},validate:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ExtractedDate | undefined) => string | undefined",signature:{arguments:[{type:{name:"union",raw:"ExtractedDate | undefined",elements:[{name:"signature",type:"object",raw:`{
  day: string;
  month: string;
  year: string;
}`,signature:{properties:[{key:"day",value:{name:"string",required:!0}},{key:"month",value:{name:"string",required:!0}},{key:"year",value:{name:"string",required:!0}}]}},{name:"undefined"}]},name:"value"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:"",defaultValue:{value:"() => undefined",computed:!1}}}};const B=({value:a,label:r,readOnly:n=!1,onValueChange:s,error:p,style:h})=>e.jsx(ae,{value:a,label:r,readOnly:n,onValueChange:s,error:p,style:h,validate:fe});B.__docgenInfo={description:"",methods:[],displayName:"BirthdatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const m=Z.create({container:{maxWidth:430},button:{alignSelf:"flex-start"}}),W=new Date;W.setDate(W.getDate()-15);const I=new Date;I.setDate(I.getDate()+15);const Pt={title:"Forms/DatePicker",component:re},M=({...a})=>{const[r,n]=u.useState();return e.jsx(re,{...a,value:r,onChange:n})},Ve=({...a})=>{const[r,n]=u.useState({start:"",end:""}),s=Me(r,a.format);return e.jsx(Le,{...a,value:r,error:s?void 0:"End date can't be before start date",onChange:n})},k=()=>e.jsx(j,{color:"#0F6FDE",children:e.jsxs(Y,{title:"DatePicker",children:[e.jsx(c,{title:"Default",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})}),e.jsx(c,{title:"Week starting sunday",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY"})})}),e.jsx(c,{title:"Selectable only in the future",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:Pe})})}),e.jsx(c,{title:"Selectable only in a range (15 days before or after today)",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:be(W,I)})})})]})}),g=()=>{const a=u.useRef(null),[r,n]=u.useState(""),[s,p]=u.useState(!1);return e.jsx(j,{color:"#0F6FDE",children:e.jsx(Y,{title:"DatePicker Modal",children:e.jsxs(c,{title:"Default",children:[e.jsxs(L,{children:["Selected date: ",r]}),e.jsx(ee,{height:20}),e.jsx(te,{ref:a,style:m.button,onPress:()=>p(!0),children:"Open date picker"}),e.jsx(je,{visible:s,value:r,firstWeekDay:"monday",format:"DD/MM/YYYY",label:"Select a date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:n,onDismiss:()=>p(!1)})]})})})},x=()=>e.jsx(j,{color:"#0F6FDE",children:e.jsx(Y,{title:"DateRangePicker",children:e.jsx(c,{title:"Default",children:e.jsx(d,{style:m.container,children:e.jsx(Ve,{startLabel:"Start date",endLabel:"End date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})})})}),P=()=>{const[a,r]=u.useState({start:"",end:""}),[n,s]=u.useState(!1);return e.jsx(j,{color:"#0F6FDE",children:e.jsx(Y,{title:"DatePicker Popover",children:e.jsxs(c,{title:"Default",children:[e.jsxs(L,{children:["Selected date: ",a.start," - ",a.end]}),e.jsx(ee,{height:20}),e.jsx(te,{style:m.button,onPress:()=>s(!0),children:"Open date range picker"}),e.jsx(Ye,{visible:n,value:a,firstWeekDay:"monday",format:"DD/MM/YYYY",startLabel:"Start date",endLabel:"End date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:r,onDismiss:()=>s(!1)})]})})})},b=()=>{const a="",[r,n]=u.useState(a);return e.jsx(j,{color:"#0F6FDE",children:e.jsxs(Y,{title:"Inline picker",children:[e.jsx(c,{title:"Default",children:e.jsxs(d,{style:m.container,children:[ye(r)&&e.jsxs(L,{children:["Selected date: ",r]}),e.jsx(B,{label:"Birthdate",value:a,onValueChange:n})]})}),e.jsx(c,{title:"Readonly",children:e.jsxs(d,{style:m.container,children:[l(r)&&e.jsxs(L,{children:["Selected date: ",r]}),e.jsx(B,{label:"Birthdate",value:a,readOnly:!0,onValueChange:n})]})})]})})};k.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"ButtonWithModal"};x.__docgenInfo={description:"",methods:[],displayName:"Range"};P.__docgenInfo={description:"",methods:[],displayName:"ButtonWithRangePopover"};b.__docgenInfo={description:"",methods:[],displayName:"Inline"};var R,O,_;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(_=(O=k.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var N,A,q;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const buttonRef = useRef<View>(null);
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
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const bt=["Default","ButtonWithModal","Range","ButtonWithRangePopover","Inline"];export{g as ButtonWithModal,P as ButtonWithRangePopover,k as Default,b as Inline,x as Range,bt as __namedExportsOrder,Pt as default};
//# sourceMappingURL=DatePicker.stories-jqAlUgOY.js.map
