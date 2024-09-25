import{s as X,c as oe,$ as le,m as de,i as l,h as Z,j as e,V as d,B as ce,L as M,S as ee}from"./ScrollView-CnkSV7w6.js";import{e as me,f as ue,v as ye}from"./validation-Cq0A7qzT.js";import{I as pe}from"./InputError-Bh5pwvax.js";import{L as he}from"./LakeLabel-DmZsmGlF.js";import{L as fe}from"./LakeSelect-CZ-mOKvi.js";import{L as v}from"./LakeTextInput-BooRKEW-.js";import{S as F}from"./Stack-BkBNQS4S.js";import{u as De}from"./useResponsive-CzIqCC5v.js";import{u as Se,D as te,i as ke,a as ge,b as xe,c as Pe,v as be,d as je}from"./DatePicker-BCRWyaH8.js";import{t as s,a as Ye}from"./i18n-PICbwUyg.js";import{r as c}from"./index-Cs7sjTYM.js";import{L as re}from"./LakeButton-CC8Q2vJZ.js";import{W as b}from"./WithPartnerAccentColor-BRIDRVxr.js";import{S as j,a as u}from"./_StoriesComponents-BdGCWCNA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./utc-DJvBpWoA.js";import"./commonStyles-t4XfA7cz.js";import"./v4-DvF23Exx.js";import"./useDisclosure-DLkMFUa4.js";import"./Pressable-BGOPdkuK.js";import"./a11y-DXvpDVrG.js";import"./Fill-DFbCnG2s.js";import"./Popover-j6IN-vPI.js";import"./function-D_aCpe7c.js";import"./BottomPanel-C0i52C2n.js";import"./useBodyClassName-DMoYUPTW.js";import"./FocusTrap-fPGTEZsC.js";import"./array-rjEBP2Ry.js";import"./Suspendable-BPrtu9_T.js";import"./index-Ckk5_94c.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CCVDrWcn.js";import"./index-tMLA6eGL.js";import"./rifm-CYIyesWt.js";import"./rifm.esm-FZJd-_Wa.js";import"./LakeModal-Dm4g3crZ.js";import"./LakeHeading-D1eov0F5.js";import"./ResponsiveContainer-DpHJNgNG.js";import"./string-CfGb_hXU.js";import"./polished.esm-DVgPY5UW.js";const Me=[{value:"01",name:s("datePicker.month.january")},{value:"02",name:s("datePicker.month.february")},{value:"03",name:s("datePicker.month.march")},{value:"04",name:s("datePicker.month.april")},{value:"05",name:s("datePicker.month.may")},{value:"06",name:s("datePicker.month.june")},{value:"07",name:s("datePicker.month.july")},{value:"08",name:s("datePicker.month.august")},{value:"09",name:s("datePicker.month.september")},{value:"10",name:s("datePicker.month.october")},{value:"11",name:s("datePicker.month.november")},{value:"12",name:s("datePicker.month.december")}],p=X.create({container:{paddingTop:6},dayMobile:{maxWidth:70,flexGrow:0},day:{maxWidth:90,flexGrow:0},yearMobile:{maxWidth:80,flexGrow:0},year:{maxWidth:120,flexGrow:0},error:{borderColor:oe.negative[400]}}),Le=le(Ye().cca2).returnType().with("US",()=>"MDY").with("CN","JP","KR","KP","TW","HU","MN","LT","BT",()=>"YMD").otherwise(()=>"DMY"),ae=({value:a,label:r,readOnly:i=!1,onValueChange:n,validate:m=()=>{},error:h,style:ne})=>{const{desktop:B}=De(de.small),{Field:ie}=Se({date:{initialValue:l(a)?me(a):void 0,sanitize:o=>l(o)?{day:o.day.trim(),month:o.month.trim(),year:o.year.trim()}:void 0,strategy:"onBlur",validate:o=>{const f=m(o);return Z(f)&&l(o)?n==null?void 0:n(ue(o)):(n==null||n(void 0),f)}}});return e.jsx(d,{style:[p.container,ne],children:e.jsx(ie,{name:"date",children:({error:o,onBlur:f,onChange:L,value:t})=>e.jsx(he,{label:r,render:se=>{const E=e.jsx(d,{style:B?p.day:p.dayMobile,children:e.jsx(v,{id:se,readOnly:i,style:(l(o)||l(h))&&p.error,placeholder:s("datePicker.day"),value:(t==null?void 0:t.day)??void 0,onBlur:f,hideErrors:!0,onChangeText:D=>{L({day:D,month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""})},pattern:"[0-9]",maxLength:2,autoComplete:"bday-day"})}),I=e.jsx(fe,{value:(t==null?void 0:t.month)===""||t==null?void 0:t.month,style:(l(o)||l(h))&&p.error,readOnly:i,placeholder:s("datePicker.month"),hideErrors:!0,items:Me,onValueChange:D=>{L({day:(t==null?void 0:t.day)??"",month:D,year:(t==null?void 0:t.year)??""})}}),V=e.jsx(d,{style:B?p.year:p.yearMobile,children:e.jsx(v,{value:t==null?void 0:t.year,style:(l(o)||l(h))&&p.error,readOnly:i,placeholder:s("datePicker.year"),onBlur:f,hideErrors:!0,onChangeText:D=>L({day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:D}),pattern:"[0-9]",maxLength:4,autoComplete:"bday-year"})});return e.jsxs(ce,{children:[Le==="DMY"?e.jsxs(F,{direction:"row",space:4,children:[E," ",I," ",V]}):e.jsxs(F,{direction:"row",space:4,children:[I," ",E," ",V]}),e.jsx(pe,{message:o??h})]})}})})})};ae.__docgenInfo={description:"",methods:[],displayName:"InlineDatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},validate:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ExtractedDate | undefined) => string | undefined",signature:{arguments:[{type:{name:"union",raw:"ExtractedDate | undefined",elements:[{name:"signature",type:"object",raw:`{
  day: string;
  month: string;
  year: string;
}`,signature:{properties:[{key:"day",value:{name:"string",required:!0}},{key:"month",value:{name:"string",required:!0}},{key:"year",value:{name:"string",required:!0}}]}},{name:"undefined"}]},name:"value"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:"",defaultValue:{value:"() => undefined",computed:!1}}}};const w=({value:a,label:r,readOnly:i=!1,onValueChange:n,error:m,style:h})=>e.jsx(ae,{value:a,label:r,readOnly:i,onValueChange:n,error:m,style:h,validate:ye});w.__docgenInfo={description:"",methods:[],displayName:"BirthdatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const y=X.create({container:{maxWidth:430},button:{alignSelf:"flex-start"}}),T=new Date;T.setDate(T.getDate()-15);const W=new Date;W.setDate(W.getDate()+15);const ft={title:"Forms/DatePicker",component:te},Y=({...a})=>{const[r,i]=c.useState();return e.jsx(te,{...a,value:r,onChange:i})},we=({...a})=>{const[r,i]=c.useState({start:"",end:""}),n=be(r,a.format);return e.jsx(je,{...a,value:r,error:n?void 0:"End date can't be before start date",onChange:i})},S=()=>e.jsx(b,{color:"#0F6FDE",children:e.jsxs(j,{title:"DatePicker",children:[e.jsx(u,{title:"Default",children:e.jsx(d,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})}),e.jsx(u,{title:"Week starting sunday",children:e.jsx(d,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY"})})}),e.jsx(u,{title:"Selectable only in the future",children:e.jsx(d,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:ke})})}),e.jsx(u,{title:"Selectable only in a range (15 days before or after today)",children:e.jsx(d,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:ge(T,W)})})})]})}),k=()=>{const a=c.useRef(null),[r,i]=c.useState(""),[n,m]=c.useState(!1);return e.jsx(b,{color:"#0F6FDE",children:e.jsx(j,{title:"DatePicker Modal",children:e.jsxs(u,{title:"Default",children:[e.jsxs(M,{children:["Selected date: ",r]}),e.jsx(ee,{height:20}),e.jsx(re,{ref:a,style:y.button,onPress:()=>m(!0),children:"Open date picker"}),e.jsx(xe,{visible:n,value:r,firstWeekDay:"monday",format:"DD/MM/YYYY",label:"Select a date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:i,onDismiss:()=>m(!1)})]})})})},g=()=>e.jsx(b,{color:"#0F6FDE",children:e.jsx(j,{title:"DateRangePicker",children:e.jsx(u,{title:"Default",children:e.jsx(d,{style:y.container,children:e.jsx(we,{startLabel:"Start date",endLabel:"End date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})})})}),x=()=>{const[a,r]=c.useState({start:"",end:""}),[i,n]=c.useState(!1);return e.jsx(b,{color:"#0F6FDE",children:e.jsx(j,{title:"DatePicker Popover",children:e.jsxs(u,{title:"Default",children:[e.jsxs(M,{children:["Selected date: ",a.start," - ",a.end]}),e.jsx(ee,{height:20}),e.jsx(re,{style:y.button,onPress:()=>n(!0),children:"Open date range picker"}),e.jsx(Pe,{visible:i,value:a,firstWeekDay:"monday",format:"DD/MM/YYYY",startLabel:"Start date",endLabel:"End date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:r,onDismiss:()=>n(!1)})]})})})},P=()=>{const a="2000-01-01",[r,i]=c.useState(a),[n,m]=c.useState(void 0);return c.useEffect(()=>{Z(r)?m("The birthdate must be filled"):m(void 0)},[r]),e.jsx(b,{color:"#0F6FDE",children:e.jsxs(j,{title:"Inline picker",children:[e.jsx(u,{title:"Default",children:e.jsxs(d,{style:y.container,children:[l(r)&&e.jsxs(M,{children:["Selected date: ",r]}),e.jsx(w,{label:"Birthdate",value:a,onValueChange:i,error:n})]})}),e.jsx(u,{title:"Readonly",children:e.jsxs(d,{style:y.container,children:[l(r)&&e.jsxs(M,{children:["Selected date: ",r]}),e.jsx(w,{label:"Birthdate",value:a,readOnly:!0,onValueChange:i,error:n})]})})]})})};S.__docgenInfo={description:"",methods:[],displayName:"Default"};k.__docgenInfo={description:"",methods:[],displayName:"ButtonWithModal"};g.__docgenInfo={description:"",methods:[],displayName:"Range"};x.__docgenInfo={description:"",methods:[],displayName:"ButtonWithRangePopover"};P.__docgenInfo={description:"",methods:[],displayName:"Inline"};var R,O,_;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(_=(O=S.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var C,N,A;k.parameters={...k.parameters,docs:{...(C=k.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(A=(N=k.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var q,G,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DateRangePicker">
        <StoryPart title="Default">
          <View style={styles.container}>
            <InteractiveDateRangePicker startLabel="Start date" endLabel="End date" firstWeekDay="monday" format="DD/MM/YYYY" />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var U,$,z;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(z=($=x.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var H,J,Q;P.parameters={...P.parameters,docs:{...(H=P.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const initialValue = "2000-01-01";
  const [birthdate, setBirthdate] = useState<string | undefined>(initialValue);
  const [error, setError] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (isNullish(birthdate)) {
      setError("The birthdate must be filled");
    } else {
      setError(undefined);
    }
  }, [birthdate]);
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="Inline picker">
        <StoryPart title="Default">
          <View style={styles.container}>
            {isNotNullish(birthdate) && <LakeText>Selected date: {birthdate}</LakeText>}

            <BirthdatePicker label={"Birthdate"} value={initialValue} onValueChange={setBirthdate} error={error} />
          </View>
        </StoryPart>

        <StoryPart title="Readonly">
          <View style={styles.container}>
            {isNotNullish(birthdate) && <LakeText>Selected date: {birthdate}</LakeText>}

            <BirthdatePicker label={"Birthdate"} value={initialValue} readOnly={true} onValueChange={setBirthdate} error={error} />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(Q=(J=P.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Dt=["Default","ButtonWithModal","Range","ButtonWithRangePopover","Inline"];export{k as ButtonWithModal,x as ButtonWithRangePopover,S as Default,P as Inline,g as Range,Dt as __namedExportsOrder,ft as default};
//# sourceMappingURL=DatePicker.stories-DnxbIMz7.js.map
