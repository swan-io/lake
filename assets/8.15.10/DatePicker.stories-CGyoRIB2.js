import{s as Q,c as se,$ as oe,m as ie,i as l,h as X,j as e,V as d,B as le,L as j,S as Z}from"./ScrollView-CnkSV7w6.js";import{I as ce}from"./InputError-Bh5pwvax.js";import{L as de}from"./LakeLabel-DmZsmGlF.js";import{L as me}from"./LakeSelect-CZ-mOKvi.js";import{L as T}from"./LakeTextInput-BooRKEW-.js";import{S as V}from"./Stack-BkBNQS4S.js";import{u as ye}from"./useResponsive-CzIqCC5v.js";import{u as ue,D as ee,i as he,a as pe,b as fe,c as De,v as Se,d as ke}from"./DatePicker-CZYSE2Ui.js";import{e as xe,v as be,f as Pe}from"./validation-DlvTgpKZ.js";import{t as s,g as ge}from"./i18n-Xw7AAIJ-.js";import{r as m}from"./index-Cs7sjTYM.js";import{L as te}from"./LakeButton-CC8Q2vJZ.js";import{W as P}from"./WithPartnerAccentColor-BRIDRVxr.js";import{S as g,a as y}from"./_StoriesComponents-BdGCWCNA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./commonStyles-t4XfA7cz.js";import"./v4-DvF23Exx.js";import"./useDisclosure-DLkMFUa4.js";import"./Pressable-BGOPdkuK.js";import"./a11y-DXvpDVrG.js";import"./Fill-DFbCnG2s.js";import"./Popover-j6IN-vPI.js";import"./function-D_aCpe7c.js";import"./BottomPanel-C0i52C2n.js";import"./useBodyClassName-DMoYUPTW.js";import"./FocusTrap-fPGTEZsC.js";import"./array-rjEBP2Ry.js";import"./Suspendable-BPrtu9_T.js";import"./index-Ckk5_94c.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CCVDrWcn.js";import"./index-tMLA6eGL.js";import"./rifm-CYIyesWt.js";import"./utc-DJvBpWoA.js";import"./rifm.esm-FZJd-_Wa.js";import"./LakeModal-CMxfS8ug.js";import"./LakeHeading-D1eov0F5.js";import"./ResponsiveContainer-DpHJNgNG.js";import"./string-CfGb_hXU.js";import"./polished.esm-DVgPY5UW.js";const Ye=[{value:"01",name:s("datePicker.month.january")},{value:"02",name:s("datePicker.month.february")},{value:"03",name:s("datePicker.month.march")},{value:"04",name:s("datePicker.month.april")},{value:"05",name:s("datePicker.month.may")},{value:"06",name:s("datePicker.month.june")},{value:"07",name:s("datePicker.month.july")},{value:"08",name:s("datePicker.month.august")},{value:"09",name:s("datePicker.month.september")},{value:"10",name:s("datePicker.month.october")},{value:"11",name:s("datePicker.month.november")},{value:"12",name:s("datePicker.month.december")}],h=Q.create({container:{paddingTop:6},dayMobile:{maxWidth:70,flexGrow:0},day:{maxWidth:90,flexGrow:0},yearMobile:{maxWidth:80,flexGrow:0},year:{maxWidth:120,flexGrow:0},error:{borderColor:se.negative[400]}}),je=oe(ge().cca2).returnType().with("US",()=>"MDY").with("CN","JP","KR","KP","TW","HU","MN","LT","BT",()=>"YMD").otherwise(()=>"DMY"),L=({value:a,label:r,readOnly:o=!1,onValueChange:n,error:c,style:re})=>{const{desktop:E}=ye(ie.small),{Field:ae}=ue({birthdate:{initialValue:l(a)?xe(a):void 0,sanitize:i=>l(i)?{day:i.day.trim(),month:i.month.trim(),year:i.year.trim()}:void 0,strategy:"onBlur",validate:i=>{const p=be(i);return X(p)&&l(i)?n==null?void 0:n(Pe(i)):(n==null||n(void 0),p)}}});return e.jsx(d,{style:[h.container,re],children:e.jsx(ae,{name:"birthdate",children:({error:i,onBlur:p,onChange:M,value:t})=>e.jsx(de,{label:r,render:ne=>{const I=e.jsx(d,{style:E?h.day:h.dayMobile,children:e.jsx(T,{id:ne,readOnly:o,style:(l(i)||l(c))&&h.error,placeholder:s("datePicker.day"),value:(t==null?void 0:t.day)??void 0,onBlur:p,hideErrors:!0,onChangeText:f=>{M({day:f,month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""})},pattern:"[0-9]",maxLength:2,autoComplete:"bday-day"})}),w=e.jsx(me,{value:(t==null?void 0:t.month)===""||t==null?void 0:t.month,style:(l(i)||l(c))&&h.error,readOnly:o,placeholder:s("datePicker.month"),hideErrors:!0,items:Ye,onValueChange:f=>{M({day:(t==null?void 0:t.day)??"",month:f,year:(t==null?void 0:t.year)??""})}}),F=e.jsx(d,{style:E?h.year:h.yearMobile,children:e.jsx(T,{value:t==null?void 0:t.year,style:(l(i)||l(c))&&h.error,readOnly:o,placeholder:s("datePicker.year"),onBlur:p,hideErrors:!0,onChangeText:f=>M({day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:f}),pattern:"[0-9]",maxLength:4,autoComplete:"bday-year"})});return e.jsxs(le,{children:[je==="DMY"?e.jsxs(V,{direction:"row",space:4,children:[I," ",w," ",F]}):e.jsxs(V,{direction:"row",space:4,children:[w," ",I," ",F]}),e.jsx(ce,{message:i??c})]})}})})})};L.__docgenInfo={description:"",methods:[],displayName:"BirthdatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const u=Q.create({container:{maxWidth:430},button:{alignSelf:"flex-start"}}),W=new Date;W.setDate(W.getDate()-15);const B=new Date;B.setDate(B.getDate()+15);const ht={title:"Forms/DatePicker",component:ee},Y=({...a})=>{const[r,o]=m.useState();return e.jsx(ee,{...a,value:r,onChange:o})},Me=({...a})=>{const[r,o]=m.useState({start:"",end:""}),n=Se(r,a.format);return e.jsx(ke,{...a,value:r,error:n?void 0:"End date can't be before start date",onChange:o})},D=()=>e.jsx(P,{color:"#0F6FDE",children:e.jsxs(g,{title:"DatePicker",children:[e.jsx(y,{title:"Default",children:e.jsx(d,{style:u.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})}),e.jsx(y,{title:"Week starting sunday",children:e.jsx(d,{style:u.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY"})})}),e.jsx(y,{title:"Selectable only in the future",children:e.jsx(d,{style:u.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:he})})}),e.jsx(y,{title:"Selectable only in a range (15 days before or after today)",children:e.jsx(d,{style:u.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:pe(W,B)})})})]})}),S=()=>{const a=m.useRef(null),[r,o]=m.useState(""),[n,c]=m.useState(!1);return e.jsx(P,{color:"#0F6FDE",children:e.jsx(g,{title:"DatePicker Modal",children:e.jsxs(y,{title:"Default",children:[e.jsxs(j,{children:["Selected date: ",r]}),e.jsx(Z,{height:20}),e.jsx(te,{ref:a,style:u.button,onPress:()=>c(!0),children:"Open date picker"}),e.jsx(fe,{visible:n,value:r,firstWeekDay:"monday",format:"DD/MM/YYYY",label:"Select a date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:o,onDismiss:()=>c(!1)})]})})})},k=()=>e.jsx(P,{color:"#0F6FDE",children:e.jsx(g,{title:"DateRangePicker",children:e.jsx(y,{title:"Default",children:e.jsx(d,{style:u.container,children:e.jsx(Me,{startLabel:"Start date",endLabel:"End date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})})})}),x=()=>{const[a,r]=m.useState({start:"",end:""}),[o,n]=m.useState(!1);return e.jsx(P,{color:"#0F6FDE",children:e.jsx(g,{title:"DatePicker Popover",children:e.jsxs(y,{title:"Default",children:[e.jsxs(j,{children:["Selected date: ",a.start," - ",a.end]}),e.jsx(Z,{height:20}),e.jsx(te,{style:u.button,onPress:()=>n(!0),children:"Open date range picker"}),e.jsx(De,{visible:o,value:a,firstWeekDay:"monday",format:"DD/MM/YYYY",startLabel:"Start date",endLabel:"End date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:r,onDismiss:()=>n(!1)})]})})})},b=()=>{const a="2000-01-01",[r,o]=m.useState(a),[n,c]=m.useState(void 0);return m.useEffect(()=>{X(r)?c("The birthdate must be filled"):c(void 0)},[r]),e.jsx(P,{color:"#0F6FDE",children:e.jsxs(g,{title:"Inline picker",children:[e.jsx(y,{title:"Default",children:e.jsxs(d,{style:u.container,children:[l(r)&&e.jsxs(j,{children:["Selected date: ",r]}),e.jsx(L,{label:"Birthdate",value:a,onValueChange:o,error:n})]})}),e.jsx(y,{title:"Readonly",children:e.jsxs(d,{style:u.container,children:[l(r)&&e.jsxs(j,{children:["Selected date: ",r]}),e.jsx(L,{label:"Birthdate",value:a,readOnly:!0,onValueChange:o,error:n})]})})]})})};D.__docgenInfo={description:"",methods:[],displayName:"Default"};S.__docgenInfo={description:"",methods:[],displayName:"ButtonWithModal"};k.__docgenInfo={description:"",methods:[],displayName:"Range"};x.__docgenInfo={description:"",methods:[],displayName:"ButtonWithRangePopover"};b.__docgenInfo={description:"",methods:[],displayName:"Inline"};var R,O,C;D.parameters={...D.parameters,docs:{...(R=D.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(C=(O=D.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var _,v,N;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(N=(v=S.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var A,q,G;k.parameters={...k.parameters,docs:{...(A=k.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DateRangePicker">
        <StoryPart title="Default">
          <View style={styles.container}>
            <InteractiveDateRangePicker startLabel="Start date" endLabel="End date" firstWeekDay="monday" format="DD/MM/YYYY" />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(G=(q=k.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,U,$;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...($=(U=x.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var z,H,J;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(J=(H=b.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const pt=["Default","ButtonWithModal","Range","ButtonWithRangePopover","Inline"];export{S as ButtonWithModal,x as ButtonWithRangePopover,D as Default,b as Inline,k as Range,pt as __namedExportsOrder,ht as default};
//# sourceMappingURL=DatePicker.stories-CGyoRIB2.js.map
