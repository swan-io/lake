import{s as J,c as ae,$ as ne,m as se,i as l,h as M,K as oe,j as e,V as m,B as ie,L as E,S as Q}from"./ScrollView-8Hl1h1Us.js";import{I as le}from"./InputError-TUQR9Wmt.js";import{L as ce}from"./LakeLabel-CDi8fZNJ.js";import{L as de}from"./LakeSelect-Bl7Dj2AO.js";import{L as V}from"./LakeTextInput-DMzvzYUm.js";import{S as C}from"./Stack-CeA9k2vm.js";import{u as me}from"./useResponsive-CzIqCC5v.js";import{u as ue,D as X,i as ye,a as he,b as pe,c as fe,v as De,d as ke}from"./DatePicker-CU0fFgvg.js";import{e as Se,v as be,f as Pe}from"./validation-BD--hSIP.js";import{t as n,g as xe}from"./i18n-CT_V8aae.js";import{r as c}from"./index-Cs7sjTYM.js";import{L as Z}from"./LakeButton-qB7tMjtm.js";import{W as x}from"./WithPartnerAccentColor-BIRljD12.js";import{S as g,a as u}from"./_StoriesComponents-DckyEGzw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./commonStyles-t4XfA7cz.js";import"./v4-DvF23Exx.js";import"./useDisclosure-DLkMFUa4.js";import"./Pressable-tq390Bi7.js";import"./a11y-DXvpDVrG.js";import"./Fill-DDYU1Win.js";import"./Popover-CNqXw4yz.js";import"./function-DLna_oOb.js";import"./BottomPanel-BkuU7PJu.js";import"./useBodyClassName-DMoYUPTW.js";import"./FocusTrap-DMtVGNnG.js";import"./array-rjEBP2Ry.js";import"./Suspendable-D2Ue0Svt.js";import"./index-DSYtjRQU.js";import"./extends-CF3RwP-h.js";import"./TransitionView-1pfuVC8D.js";import"./index-CymDs86F.js";import"./rifm-CBVz_C_4.js";import"./utc-DJvBpWoA.js";import"./rifm.esm-FZJd-_Wa.js";import"./LakeModal-CaWATFps.js";import"./LakeHeading-DAMhqRCX.js";import"./ResponsiveContainer-Bu_ZwvXj.js";import"./string-DkW8Zwm4.js";import"./polished.esm-DVgPY5UW.js";const ge=[{value:"01",name:n("datePicker.month.january")},{value:"02",name:n("datePicker.month.february")},{value:"03",name:n("datePicker.month.march")},{value:"04",name:n("datePicker.month.april")},{value:"05",name:n("datePicker.month.may")},{value:"06",name:n("datePicker.month.june")},{value:"07",name:n("datePicker.month.july")},{value:"08",name:n("datePicker.month.august")},{value:"09",name:n("datePicker.month.september")},{value:"10",name:n("datePicker.month.october")},{value:"11",name:n("datePicker.month.november")},{value:"12",name:n("datePicker.month.december")}],h=J.create({dayMobile:{maxWidth:70,flexGrow:0},day:{maxWidth:90,flexGrow:0},yearMobile:{maxWidth:80,flexGrow:0},year:{maxWidth:120,flexGrow:0},error:{borderColor:ae.negative[400]}}),Ye=ne(xe().cca2).returnType().with("US",()=>"MDY").with("CN","JP","KR","KP","TW","HU","MN","LT","BT",()=>"YMD").otherwise(()=>"DMY"),ee=({value:r,label:a,onValueChange:i,error:o})=>{const{desktop:d}=me(se.small),{Field:te}=ue({birthdate:{initialValue:l(r)?Se(r):void 0,sanitize:s=>l(s)?{day:s.day.trim(),month:s.month.trim(),year:s.year.trim()}:void 0,strategy:"onBlur",validate:s=>{const p=M(s)||Object.values(s).some(oe)?n("datePicker.error.incomplete"):be(s);return M(p)&&l(s)?i(Pe(s)):(i(void 0),p)}}});return e.jsx(te,{name:"birthdate",children:({error:s,onBlur:p,onChange:j,value:t})=>e.jsx(ce,{label:a,render:re=>{const I=e.jsx(m,{style:d?h.day:h.dayMobile,children:e.jsx(V,{id:re,style:(l(s)||l(o))&&h.error,placeholder:n("datePicker.day"),value:(t==null?void 0:t.day)??void 0,onBlur:p,hideErrors:!0,onChangeText:f=>{j({day:f,month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""})},pattern:"[0-9]",maxLength:2,autoComplete:"bday-day"})}),B=e.jsx(de,{value:(t==null?void 0:t.month)===""||t==null?void 0:t.month,style:(l(s)||l(o))&&h.error,placeholder:n("datePicker.month"),hideErrors:!0,items:ge,onValueChange:f=>{j({day:(t==null?void 0:t.day)??"",month:f,year:(t==null?void 0:t.year)??""})}}),F=e.jsx(m,{style:d?h.year:h.yearMobile,children:e.jsx(V,{value:t==null?void 0:t.year,style:(l(s)||l(o))&&h.error,placeholder:n("datePicker.year"),onBlur:p,hideErrors:!0,onChangeText:f=>j({day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:f}),pattern:"[0-9]",maxLength:4,autoComplete:"bday-year"})});return e.jsxs(ie,{children:[Ye==="DMY"?e.jsxs(C,{direction:"row",space:4,children:[I," ",B," ",F]}):e.jsxs(C,{direction:"row",space:4,children:[B," ",I," ",F]}),e.jsx(le,{message:s??o})]})}})})};ee.__docgenInfo={description:"",methods:[],displayName:"BirthdatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""}}};const y=J.create({container:{maxWidth:430},button:{alignSelf:"flex-start"}}),L=new Date;L.setDate(L.getDate()-15);const W=new Date;W.setDate(W.getDate()+15);const yt={title:"Forms/DatePicker",component:X},Y=({...r})=>{const[a,i]=c.useState();return e.jsx(X,{...r,value:a,onChange:i})},je=({...r})=>{const[a,i]=c.useState({start:"",end:""}),o=De(a,r.format);return e.jsx(ke,{...r,value:a,error:o?void 0:"End date can't be before start date",onChange:i})},D=()=>e.jsx(x,{color:"#0F6FDE",children:e.jsxs(g,{title:"DatePicker",children:[e.jsx(u,{title:"Default",children:e.jsx(m,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})}),e.jsx(u,{title:"Week starting sunday",children:e.jsx(m,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY"})})}),e.jsx(u,{title:"Selectable only in the future",children:e.jsx(m,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:ye})})}),e.jsx(u,{title:"Selectable only in a range (15 days before or after today)",children:e.jsx(m,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:he(L,W)})})})]})}),k=()=>{const r=c.useRef(null),[a,i]=c.useState(""),[o,d]=c.useState(!1);return e.jsx(x,{color:"#0F6FDE",children:e.jsx(g,{title:"DatePicker Modal",children:e.jsxs(u,{title:"Default",children:[e.jsxs(E,{children:["Selected date: ",a]}),e.jsx(Q,{height:20}),e.jsx(Z,{ref:r,style:y.button,onPress:()=>d(!0),children:"Open date picker"}),e.jsx(pe,{visible:o,value:a,firstWeekDay:"monday",format:"DD/MM/YYYY",label:"Select a date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:i,onDismiss:()=>d(!1)})]})})})},S=()=>e.jsx(x,{color:"#0F6FDE",children:e.jsx(g,{title:"DateRangePicker",children:e.jsx(u,{title:"Default",children:e.jsx(m,{style:y.container,children:e.jsx(je,{startLabel:"Start date",endLabel:"End date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})})})}),b=()=>{const[r,a]=c.useState({start:"",end:""}),[i,o]=c.useState(!1);return e.jsx(x,{color:"#0F6FDE",children:e.jsx(g,{title:"DatePicker Popover",children:e.jsxs(u,{title:"Default",children:[e.jsxs(E,{children:["Selected date: ",r.start," - ",r.end]}),e.jsx(Q,{height:20}),e.jsx(Z,{style:y.button,onPress:()=>o(!0),children:"Open date range picker"}),e.jsx(fe,{visible:i,value:r,firstWeekDay:"monday",format:"DD/MM/YYYY",startLabel:"Start date",endLabel:"End date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:a,onDismiss:()=>o(!1)})]})})})},P=()=>{const r="2000-01-01",[a,i]=c.useState(r),[o,d]=c.useState(void 0);return c.useEffect(()=>{M(a)?d("The birthdate must be filled"):d(void 0)},[a]),e.jsx(x,{color:"#0F6FDE",children:e.jsx(g,{title:"Inline picker",children:e.jsx(u,{title:"Default",children:e.jsxs(m,{style:y.container,children:[l(a)&&e.jsxs(E,{children:["Selected date: ",a]}),e.jsx(ee,{label:"Birthdate",value:r,onValueChange:i,error:o})]})})})})};D.__docgenInfo={description:"",methods:[],displayName:"Default"};k.__docgenInfo={description:"",methods:[],displayName:"ButtonWithModal"};S.__docgenInfo={description:"",methods:[],displayName:"Range"};b.__docgenInfo={description:"",methods:[],displayName:"ButtonWithRangePopover"};P.__docgenInfo={description:"",methods:[],displayName:"Inline"};var w,T,R;D.parameters={...D.parameters,docs:{...(w=D.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(R=(T=D.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var O,_,v;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(v=(_=k.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var A,N,G;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DateRangePicker">
        <StoryPart title="Default">
          <View style={styles.container}>
            <InteractiveDateRangePicker startLabel="Start date" endLabel="End date" firstWeekDay="monday" format="DD/MM/YYYY" />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(G=(N=S.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var q,K,U;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(U=(K=b.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var $,z,H;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(H=(z=P.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const ht=["Default","ButtonWithModal","Range","ButtonWithRangePopover","Inline"];export{k as ButtonWithModal,b as ButtonWithRangePopover,D as Default,P as Inline,S as Range,ht as __namedExportsOrder,yt as default};
//# sourceMappingURL=DatePicker.stories-BunzqEZX.js.map
