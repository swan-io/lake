import{j as e}from"./jsx-runtime-BlAj40OV.js";import{L as X}from"./LakeButton-ByCQ9xNi.js";import{i as l,s as Z,c as oe,z as le,m as de,h as ee,V as c,B as ce,L as M,S as te}from"./ScrollView-DAMcnhPN.js";import{W as b}from"./WithPartnerAccentColor-SkHQwTcc.js";import{r as m}from"./index-Cs7sjTYM.js";import{e as me,f as ue,v as ye}from"./validation-CmECYqqH.js";import{I as pe}from"./InputError-CkzCzEWc.js";import{L as fe}from"./LakeLabel-C4tp_Ka_.js";import{L as he}from"./LakeSelect-Df_m7OdR.js";import{L as V}from"./LakeTextInput-DLJpkVXB.js";import{S as F}from"./Stack-By4T4ToS.js";import{u as De}from"./useResponsive-CzIqCC5v.js";import{u as Se,a as re,i as ke,b as ge,D as xe,c as Pe,v as be,d as je}from"./DatePicker-B5bwrp3p.js";import{t as s}from"./i18n-txGMRmwr.js";import{f as Ye,c as Me}from"./countries-CAya7Lwk.js";import{S as j,a as u}from"./_StoriesComponents-Bs-HXw4X.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-8N6ahZPW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJghV6hQ.js";import"./extends-CF3RwP-h.js";import"./index-DJFdew98.js";import"./polished.esm-DVgPY5UW.js";import"./utc-Bb9NEY8r.js";import"./iban-DC8cy8qB.js";import"./v4-DvF23Exx.js";import"./useDisclosure-DLkMFUa4.js";import"./FocusTrap-HMOsJfWh.js";import"./array-BfAlyugE.js";import"./Fill-l8vhgJyC.js";import"./Popover-SzN_tnL1.js";import"./function-DMPX11KF.js";import"./BottomPanel-DvLAyyFQ.js";import"./useBodyClassName-DMoYUPTW.js";import"./Suspendable-Bl-Qq_g-.js";import"./TransitionView-_995VKea.js";import"./index-Cp2lnEJT.js";import"./Separator-qitoqTAJ.js";import"./index-Cyz8msWj.js";import"./rifm-D9VipfZA.js";import"./rifm.esm-FZJd-_Wa.js";import"./LakeModal-DecRK6Tn.js";import"./LakeHeading-XXdKUg9r.js";import"./ResponsiveContainer-BcpmGxdZ.js";import"./string-CSzQMepT.js";const Le=()=>{const n=navigator.languages.map(r=>r.split("-")[1]).filter(l);for(let r=0;r<n.length;r++){const i=n[r],a=Me.find(({cca2:d})=>d===i);if(l(a))return a}return Ye},we=[{value:"01",name:s("datePicker.month.january")},{value:"02",name:s("datePicker.month.february")},{value:"03",name:s("datePicker.month.march")},{value:"04",name:s("datePicker.month.april")},{value:"05",name:s("datePicker.month.may")},{value:"06",name:s("datePicker.month.june")},{value:"07",name:s("datePicker.month.july")},{value:"08",name:s("datePicker.month.august")},{value:"09",name:s("datePicker.month.september")},{value:"10",name:s("datePicker.month.october")},{value:"11",name:s("datePicker.month.november")},{value:"12",name:s("datePicker.month.december")}],p=Z.create({container:{paddingTop:6},dayMobile:{maxWidth:70,flexGrow:0},day:{maxWidth:90,flexGrow:0},yearMobile:{maxWidth:80,flexGrow:0},year:{maxWidth:120,flexGrow:0},error:{borderColor:oe.negative[400]}}),Te=le(Le().cca2).returnType().with("US",()=>"MDY").with("CN","JP","KR","KP","TW","HU","MN","LT","BT",()=>"YMD").otherwise(()=>"DMY"),ne=({value:n,label:r,readOnly:i=!1,onValueChange:a,validate:d=()=>{},error:f,style:ae})=>{const{desktop:v}=De(de.small),{Field:ie}=Se({date:{initialValue:l(n)?me(n):void 0,sanitize:o=>l(o)?{day:o.day.trim(),month:o.month.trim(),year:o.year.trim()}:void 0,strategy:"onBlur",validate:o=>{const h=d(o);return ee(h)&&l(o)?a==null?void 0:a(ue(o)):(a==null||a(void 0),h)}}});return e.jsx(c,{style:[p.container,ae],children:e.jsx(ie,{name:"date",children:({error:o,onBlur:h,onChange:L,value:t})=>e.jsx(fe,{label:r,render:se=>{const B=e.jsx(c,{style:v?p.day:p.dayMobile,children:e.jsx(V,{id:se,readOnly:i,style:(l(o)||l(f))&&p.error,placeholder:s("datePicker.day"),value:(t==null?void 0:t.day)??void 0,onBlur:h,hideErrors:!0,onChangeText:D=>{L({day:D,month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""})},pattern:"[0-9]",maxLength:2,autoComplete:"bday-day"})}),E=e.jsx(he,{value:(t==null?void 0:t.month)===""||t==null?void 0:t.month,style:(l(o)||l(f))&&p.error,readOnly:i,placeholder:s("datePicker.month"),hideErrors:!0,items:we,onValueChange:D=>{L({day:(t==null?void 0:t.day)??"",month:D,year:(t==null?void 0:t.year)??""})}}),I=e.jsx(c,{style:v?p.year:p.yearMobile,children:e.jsx(V,{value:t==null?void 0:t.year,style:(l(o)||l(f))&&p.error,readOnly:i,placeholder:s("datePicker.year"),onBlur:h,hideErrors:!0,onChangeText:D=>L({day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:D}),pattern:"[0-9]",maxLength:4,autoComplete:"bday-year"})});return e.jsxs(ce,{children:[Te==="DMY"?e.jsxs(F,{direction:"row",space:4,children:[B," ",E," ",I]}):e.jsxs(F,{direction:"row",space:4,children:[E," ",B," ",I]}),e.jsx(pe,{message:o??f})]})}})})})};ne.__docgenInfo={description:"",methods:[],displayName:"InlineDatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},validate:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ExtractedDate | undefined) => string | undefined",signature:{arguments:[{type:{name:"union",raw:"ExtractedDate | undefined",elements:[{name:"signature",type:"object",raw:`{
  day: string;
  month: string;
  year: string;
}`,signature:{properties:[{key:"day",value:{name:"string",required:!0}},{key:"month",value:{name:"string",required:!0}},{key:"year",value:{name:"string",required:!0}}]}},{name:"undefined"}]},name:"value"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:"",defaultValue:{value:"() => undefined",computed:!1}}}};const w=({value:n,label:r,readOnly:i=!1,onValueChange:a,error:d,style:f})=>e.jsx(ne,{value:n,label:r,readOnly:i,onValueChange:a,error:d,style:f,validate:ye});w.__docgenInfo={description:"",methods:[],displayName:"BirthdatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const y=Z.create({container:{maxWidth:430},button:{alignSelf:"flex-start"}}),T=new Date;T.setDate(T.getDate()-15);const W=new Date;W.setDate(W.getDate()+15);const Pt={title:"Forms/DatePicker",component:re},Y=({...n})=>{const[r,i]=m.useState();return e.jsx(re,{...n,value:r,onChange:i})},We=({...n})=>{const[r,i]=m.useState({start:"",end:""}),a=be(r,n.format);return e.jsx(je,{...n,value:r,error:a?void 0:"End date can't be before start date",onChange:i})},S=()=>e.jsx(b,{color:"#0F6FDE",children:e.jsxs(j,{title:"DatePicker",children:[e.jsx(u,{title:"Default",children:e.jsx(c,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})}),e.jsx(u,{title:"Week starting sunday",children:e.jsx(c,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY"})})}),e.jsx(u,{title:"Selectable only in the future",children:e.jsx(c,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:ke})})}),e.jsx(u,{title:"Selectable only in a range (15 days before or after today)",children:e.jsx(c,{style:y.container,children:e.jsx(Y,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:ge(T,W)})})})]})}),k=()=>{const n=m.useRef(null),[r,i]=m.useState(""),[a,d]=m.useState(!1);return e.jsx(b,{color:"#0F6FDE",children:e.jsx(j,{title:"DatePicker Modal",children:e.jsxs(u,{title:"Default",children:[e.jsxs(M,{children:["Selected date: ",r]}),e.jsx(te,{height:20}),e.jsx(X,{ref:n,style:y.button,onPress:()=>d(!0),children:"Open date picker"}),e.jsx(xe,{visible:a,value:r,firstWeekDay:"monday",format:"DD/MM/YYYY",label:"Select a date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:i,onDismiss:()=>d(!1)})]})})})},g=()=>e.jsx(b,{color:"#0F6FDE",children:e.jsx(j,{title:"DateRangePicker",children:e.jsx(u,{title:"Default",children:e.jsx(c,{style:y.container,children:e.jsx(We,{startLabel:"Start date",endLabel:"End date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})})})}),x=()=>{const[n,r]=m.useState({start:"",end:""}),[i,a]=m.useState(!1);return e.jsx(b,{color:"#0F6FDE",children:e.jsx(j,{title:"DatePicker Popover",children:e.jsxs(u,{title:"Default",children:[e.jsxs(M,{children:["Selected date: ",n.start," - ",n.end]}),e.jsx(te,{height:20}),e.jsx(X,{style:y.button,onPress:()=>a(!0),children:"Open date range picker"}),e.jsx(Pe,{visible:i,value:n,firstWeekDay:"monday",format:"DD/MM/YYYY",startLabel:"Start date",endLabel:"End date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:r,onDismiss:()=>a(!1)})]})})})},P=()=>{const n="2000-01-01",[r,i]=m.useState(n),[a,d]=m.useState(void 0);return m.useEffect(()=>{ee(r)?d("The birthdate must be filled"):d(void 0)},[r]),e.jsx(b,{color:"#0F6FDE",children:e.jsxs(j,{title:"Inline picker",children:[e.jsx(u,{title:"Default",children:e.jsxs(c,{style:y.container,children:[l(r)&&e.jsxs(M,{children:["Selected date: ",r]}),e.jsx(w,{label:"Birthdate",value:n,onValueChange:i,error:a})]})}),e.jsx(u,{title:"Readonly",children:e.jsxs(c,{style:y.container,children:[l(r)&&e.jsxs(M,{children:["Selected date: ",r]}),e.jsx(w,{label:"Birthdate",value:n,readOnly:!0,onValueChange:i,error:a})]})})]})})};S.__docgenInfo={description:"",methods:[],displayName:"Default"};k.__docgenInfo={description:"",methods:[],displayName:"ButtonWithModal"};g.__docgenInfo={description:"",methods:[],displayName:"Range"};x.__docgenInfo={description:"",methods:[],displayName:"ButtonWithRangePopover"};P.__docgenInfo={description:"",methods:[],displayName:"Inline"};var R,C,O;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(O=(C=S.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var _,N,A;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(A=(N=k.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var q,G,U;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DateRangePicker">
        <StoryPart title="Default">
          <View style={styles.container}>
            <InteractiveDateRangePicker startLabel="Start date" endLabel="End date" firstWeekDay="monday" format="DD/MM/YYYY" />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(U=(G=g.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var z,K,H;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(H=(K=x.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var J,$,Q;P.parameters={...P.parameters,docs:{...(J=P.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(Q=($=P.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};const bt=["Default","ButtonWithModal","Range","ButtonWithRangePopover","Inline"];export{k as ButtonWithModal,x as ButtonWithRangePopover,S as Default,P as Inline,g as Range,bt as __namedExportsOrder,Pt as default};
//# sourceMappingURL=DatePicker.stories-hPFsRcPs.js.map
