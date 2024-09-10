import{s as J,c as ne,$ as se,m as oe,i as l,h as Q,j as e,V as d,B as ie,L as W,S as X}from"./ScrollView-CnkSV7w6.js";import{I as le}from"./InputError-Bh5pwvax.js";import{L as ce}from"./LakeLabel-DmZsmGlF.js";import{L as de}from"./LakeSelect-C5W_bb_n.js";import{L as F}from"./LakeTextInput-d2SWtyI3.js";import{S as w}from"./Stack-BkBNQS4S.js";import{u as me}from"./useResponsive-CzIqCC5v.js";import{u as ye,D as Z,i as ue,a as he,b as pe,c as fe,v as De,d as Se}from"./DatePicker-E9SOXLTz.js";import{e as ke,v as Pe,f as be}from"./validation-KjqNBw44.js";import{t as n,g as xe}from"./i18n-B04lJbGc.js";import{r as c}from"./index-Cs7sjTYM.js";import{L as ee}from"./LakeButton-CC8Q2vJZ.js";import{W as x}from"./WithPartnerAccentColor-BRIDRVxr.js";import{S as g,a as y}from"./_StoriesComponents-C4hUnUV-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./commonStyles-t4XfA7cz.js";import"./v4-DvF23Exx.js";import"./useDisclosure-DLkMFUa4.js";import"./Pressable-BGOPdkuK.js";import"./a11y-DXvpDVrG.js";import"./Fill-DFbCnG2s.js";import"./Popover-j6IN-vPI.js";import"./function-D_aCpe7c.js";import"./BottomPanel-C0i52C2n.js";import"./useBodyClassName-DMoYUPTW.js";import"./FocusTrap-fPGTEZsC.js";import"./array-rjEBP2Ry.js";import"./Suspendable-BPrtu9_T.js";import"./index-Ckk5_94c.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CCVDrWcn.js";import"./index-tMLA6eGL.js";import"./rifm-CYIyesWt.js";import"./utc-DJvBpWoA.js";import"./rifm.esm-FZJd-_Wa.js";import"./LakeModal-CWmtC72s.js";import"./LakeHeading-D1eov0F5.js";import"./ResponsiveContainer-DpHJNgNG.js";import"./string-CfGb_hXU.js";import"./polished.esm-DVgPY5UW.js";const ge=[{value:"01",name:n("datePicker.month.january")},{value:"02",name:n("datePicker.month.february")},{value:"03",name:n("datePicker.month.march")},{value:"04",name:n("datePicker.month.april")},{value:"05",name:n("datePicker.month.may")},{value:"06",name:n("datePicker.month.june")},{value:"07",name:n("datePicker.month.july")},{value:"08",name:n("datePicker.month.august")},{value:"09",name:n("datePicker.month.september")},{value:"10",name:n("datePicker.month.october")},{value:"11",name:n("datePicker.month.november")},{value:"12",name:n("datePicker.month.december")}],m=J.create({container:{paddingTop:6},dayMobile:{maxWidth:70,flexGrow:0},day:{maxWidth:90,flexGrow:0},yearMobile:{maxWidth:80,flexGrow:0},year:{maxWidth:120,flexGrow:0},error:{borderColor:ne.negative[400]}}),Ye=se(xe().cca2).returnType().with("US",()=>"MDY").with("CN","JP","KR","KP","TW","HU","MN","LT","BT",()=>"YMD").otherwise(()=>"DMY"),te=({value:r,label:a,onValueChange:i,error:s,style:h})=>{const{desktop:E}=me(oe.small),{Field:re}=ye({birthdate:{initialValue:l(r)?ke(r):void 0,sanitize:o=>l(o)?{day:o.day.trim(),month:o.month.trim(),year:o.year.trim()}:void 0,strategy:"onBlur",validate:o=>{const p=Pe(o);return Q(p)&&l(o)?i(be(o)):(i(void 0),p)}}});return e.jsx(d,{style:[m.container,h],children:e.jsx(re,{name:"birthdate",children:({error:o,onBlur:p,onChange:j,value:t})=>e.jsx(ce,{label:a,render:ae=>{const I=e.jsx(d,{style:E?m.day:m.dayMobile,children:e.jsx(F,{id:ae,style:(l(o)||l(s))&&m.error,placeholder:n("datePicker.day"),value:(t==null?void 0:t.day)??void 0,onBlur:p,hideErrors:!0,onChangeText:f=>{j({day:f,month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""})},pattern:"[0-9]",maxLength:2,autoComplete:"bday-day"})}),B=e.jsx(de,{value:(t==null?void 0:t.month)===""||t==null?void 0:t.month,style:(l(o)||l(s))&&m.error,placeholder:n("datePicker.month"),hideErrors:!0,items:ge,onValueChange:f=>{j({day:(t==null?void 0:t.day)??"",month:f,year:(t==null?void 0:t.year)??""})}}),V=e.jsx(d,{style:E?m.year:m.yearMobile,children:e.jsx(F,{value:t==null?void 0:t.year,style:(l(o)||l(s))&&m.error,placeholder:n("datePicker.year"),onBlur:p,hideErrors:!0,onChangeText:f=>j({day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:f}),pattern:"[0-9]",maxLength:4,autoComplete:"bday-year"})});return e.jsxs(ie,{children:[Ye==="DMY"?e.jsxs(w,{direction:"row",space:4,children:[I," ",B," ",V]}):e.jsxs(w,{direction:"row",space:4,children:[B," ",I," ",V]}),e.jsx(le,{message:o??s})]})}})})})};te.__docgenInfo={description:"",methods:[],displayName:"BirthdatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};const u=J.create({container:{maxWidth:430},button:{alignSelf:"flex-start"}}),M=new Date;M.setDate(M.getDate()-15);const L=new Date;L.setDate(L.getDate()+15);const ut={title:"Forms/DatePicker",component:Z},Y=({...r})=>{const[a,i]=c.useState();return e.jsx(Z,{...r,value:a,onChange:i})},je=({...r})=>{const[a,i]=c.useState({start:"",end:""}),s=De(a,r.format);return e.jsx(Se,{...r,value:a,error:s?void 0:"End date can't be before start date",onChange:i})},D=()=>e.jsx(x,{color:"#0F6FDE",children:e.jsxs(g,{title:"DatePicker",children:[e.jsx(y,{title:"Default",children:e.jsx(d,{style:u.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})}),e.jsx(y,{title:"Week starting sunday",children:e.jsx(d,{style:u.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY"})})}),e.jsx(y,{title:"Selectable only in the future",children:e.jsx(d,{style:u.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:ue})})}),e.jsx(y,{title:"Selectable only in a range (15 days before or after today)",children:e.jsx(d,{style:u.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:he(M,L)})})})]})}),S=()=>{const r=c.useRef(null),[a,i]=c.useState(""),[s,h]=c.useState(!1);return e.jsx(x,{color:"#0F6FDE",children:e.jsx(g,{title:"DatePicker Modal",children:e.jsxs(y,{title:"Default",children:[e.jsxs(W,{children:["Selected date: ",a]}),e.jsx(X,{height:20}),e.jsx(ee,{ref:r,style:u.button,onPress:()=>h(!0),children:"Open date picker"}),e.jsx(pe,{visible:s,value:a,firstWeekDay:"monday",format:"DD/MM/YYYY",label:"Select a date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:i,onDismiss:()=>h(!1)})]})})})},k=()=>e.jsx(x,{color:"#0F6FDE",children:e.jsx(g,{title:"DateRangePicker",children:e.jsx(y,{title:"Default",children:e.jsx(d,{style:u.container,children:e.jsx(je,{startLabel:"Start date",endLabel:"End date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})})})}),P=()=>{const[r,a]=c.useState({start:"",end:""}),[i,s]=c.useState(!1);return e.jsx(x,{color:"#0F6FDE",children:e.jsx(g,{title:"DatePicker Popover",children:e.jsxs(y,{title:"Default",children:[e.jsxs(W,{children:["Selected date: ",r.start," - ",r.end]}),e.jsx(X,{height:20}),e.jsx(ee,{style:u.button,onPress:()=>s(!0),children:"Open date range picker"}),e.jsx(fe,{visible:i,value:r,firstWeekDay:"monday",format:"DD/MM/YYYY",startLabel:"Start date",endLabel:"End date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:a,onDismiss:()=>s(!1)})]})})})},b=()=>{const r="2000-01-01",[a,i]=c.useState(r),[s,h]=c.useState(void 0);return c.useEffect(()=>{Q(a)?h("The birthdate must be filled"):h(void 0)},[a]),e.jsx(x,{color:"#0F6FDE",children:e.jsx(g,{title:"Inline picker",children:e.jsx(y,{title:"Default",children:e.jsxs(d,{style:u.container,children:[l(a)&&e.jsxs(W,{children:["Selected date: ",a]}),e.jsx(te,{label:"Birthdate",value:r,onValueChange:i,error:s})]})})})})};D.__docgenInfo={description:"",methods:[],displayName:"Default"};S.__docgenInfo={description:"",methods:[],displayName:"ButtonWithModal"};k.__docgenInfo={description:"",methods:[],displayName:"Range"};P.__docgenInfo={description:"",methods:[],displayName:"ButtonWithRangePopover"};b.__docgenInfo={description:"",methods:[],displayName:"Inline"};var T,C,R;D.parameters={...D.parameters,docs:{...(T=D.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(R=(C=D.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var O,_,A;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(A=(_=S.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var v,N,G;k.parameters={...k.parameters,docs:{...(v=k.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DateRangePicker">
        <StoryPart title="Default">
          <View style={styles.container}>
            <InteractiveDateRangePicker startLabel="Start date" endLabel="End date" firstWeekDay="monday" format="DD/MM/YYYY" />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(G=(N=k.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var q,K,U;P.parameters={...P.parameters,docs:{...(q=P.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(U=(K=P.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var $,z,H;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(H=(z=b.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const ht=["Default","ButtonWithModal","Range","ButtonWithRangePopover","Inline"];export{S as ButtonWithModal,P as ButtonWithRangePopover,D as Default,b as Inline,k as Range,ht as __namedExportsOrder,ut as default};
//# sourceMappingURL=DatePicker.stories-CxfJfliv.js.map
