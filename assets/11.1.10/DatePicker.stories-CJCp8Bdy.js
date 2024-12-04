import{j as e}from"./jsx-runtime-BlAj40OV.js";import{L as Z}from"./LakeButton-DnzG22cg.js";import{i as l,s as ee,c as le,z as de,m as ce,h as me,V as d,B as ue,L,S as te,l as ye}from"./ScrollView-C_lwoIgf.js";import{W as j}from"./WithPartnerAccentColor-CPj5lnbv.js";import{r as u}from"./index-Cs7sjTYM.js";import{e as pe,f as he,v as fe}from"./validation-DKs0Zizc.js";import{I as De}from"./InputError-De8tHpff.js";import{L as Se}from"./LakeLabel-NUs8ADFa.js";import{L as ke}from"./LakeSelect-DoCAyqn7.js";import{L as F}from"./LakeTextInput-C-MwScKF.js";import{S as R}from"./Stack-C8ZZkcFB.js";import{u as ge}from"./useResponsive-CzIqCC5v.js";import{u as xe,a as re,i as Pe,b as be,D as je,c as Ye,v as Me,d as Le}from"./DatePicker-Dqnxp189.js";import{t as s}from"./i18n-DNpbU2sO.js";import{f as we,c as Be}from"./countries-BaPFFDOt.js";import{S as Y,a as c}from"./_StoriesComponents-CC5vQLxw.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-W_iHORBJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CaijTTxg.js";import"./extends-CF3RwP-h.js";import"./index-DJFdew98.js";import"./polished.esm-DVgPY5UW.js";import"./utc-Bb9NEY8r.js";import"./iban-DC8cy8qB.js";import"./v4-DvF23Exx.js";import"./useDisclosure-DLkMFUa4.js";import"./FocusTrap-tt26dmM5.js";import"./array-BfAlyugE.js";import"./Fill-CxyWBYvl.js";import"./Popover-CkJWDK5H.js";import"./function-vx2uFMA-.js";import"./BottomPanel-BkMazo9g.js";import"./useBodyClassName-DMoYUPTW.js";import"./Suspendable-D-vBtNRb.js";import"./TransitionView-CVLW7WBQ.js";import"./index-Cp1_4Cpa.js";import"./Separator-nprBuSRp.js";import"./index-DL70bTWb.js";import"./rifm-B8WXo291.js";import"./rifm.esm-FZJd-_Wa.js";import"./LakeModal-DYr8NHp-.js";import"./LakeHeading-CG12b__s.js";import"./ResponsiveContainer-CT0OothZ.js";import"./string-DzDMYgTT.js";const We=()=>{const a=navigator.languages.map(r=>r.split("-")[1]).filter(l);for(let r=0;r<a.length;r++){const n=a[r],i=Be.find(({cca2:y})=>y===n);if(l(i))return i}return we},ve=[{value:"01",name:s("datePicker.month.january")},{value:"02",name:s("datePicker.month.february")},{value:"03",name:s("datePicker.month.march")},{value:"04",name:s("datePicker.month.april")},{value:"05",name:s("datePicker.month.may")},{value:"06",name:s("datePicker.month.june")},{value:"07",name:s("datePicker.month.july")},{value:"08",name:s("datePicker.month.august")},{value:"09",name:s("datePicker.month.september")},{value:"10",name:s("datePicker.month.october")},{value:"11",name:s("datePicker.month.november")},{value:"12",name:s("datePicker.month.december")}],p=ee.create({container:{paddingTop:6},dayMobile:{maxWidth:70,flexGrow:0},day:{maxWidth:90,flexGrow:0},yearMobile:{maxWidth:80,flexGrow:0},year:{maxWidth:120,flexGrow:0},error:{borderColor:le.negative[400]}}),Ie=de(We().cca2).returnType().with("US",()=>"MDY").with("CN","JP","KR","KP","TW","HU","MN","LT","BT",()=>"YMD").otherwise(()=>"DMY"),ae=({value:a,label:r,readOnly:n=!1,onValueChange:i,validate:y=()=>{},error:h,style:ne})=>{const{desktop:I}=ge(ce.small),f=u.useRef(new Set),{Field:ie,validateField:se}=xe({date:{initialValue:l(a)?pe(a):void 0,sanitize:o=>l(o)?{day:o.day.trim(),month:o.month.trim(),year:o.year.trim()}:void 0,strategy:"onSubmit",validate:o=>{const D=y(o);return me(D)&&l(o)?i==null?void 0:i(he(o)):(i==null||i(void 0),D)}}}),w=()=>{f.current.has("day")&&f.current.has("month")&&f.current.has("year")&&se("date")};return e.jsx(d,{style:[p.container,ne],children:e.jsx(ie,{name:"date",children:({error:o,onChange:D,value:t})=>e.jsx(Se,{label:r,render:oe=>{const T=e.jsx(d,{style:I?p.day:p.dayMobile,children:e.jsx(F,{id:oe,readOnly:n,style:(l(o)||l(h))&&p.error,placeholder:s("datePicker.day"),value:(t==null?void 0:t.day)??void 0,onBlur:()=>{f.current.add("day"),w()},hideErrors:!0,onChangeText:S=>{D({day:S,month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""})},pattern:"[0-9]",maxLength:2,autoComplete:"bday-day"})}),V=e.jsx(ke,{value:(t==null?void 0:t.month)===""||t==null?void 0:t.month,style:(l(o)||l(h))&&p.error,readOnly:n,placeholder:s("datePicker.month"),hideErrors:!0,items:ve,onValueChange:S=>{f.current.add("month"),w(),D({day:(t==null?void 0:t.day)??"",month:S,year:(t==null?void 0:t.year)??""})}}),E=e.jsx(d,{style:I?p.year:p.yearMobile,children:e.jsx(F,{value:t==null?void 0:t.year,style:(l(o)||l(h))&&p.error,readOnly:n,placeholder:s("datePicker.year"),onBlur:()=>{f.current.add("year"),w()},hideErrors:!0,onChangeText:S=>D({day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:S}),pattern:"[0-9]",maxLength:4,autoComplete:"bday-year"})});return e.jsxs(ue,{children:[Ie==="DMY"?e.jsxs(R,{direction:"row",space:4,children:[T," ",V," ",E]}):e.jsxs(R,{direction:"row",space:4,children:[V," ",T," ",E]}),e.jsx(De,{message:o??h})]})}})})})};ae.__docgenInfo={description:"",methods:[],displayName:"InlineDatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},validate:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ExtractedDate | undefined) => string | undefined",signature:{arguments:[{type:{name:"union",raw:"ExtractedDate | undefined",elements:[{name:"signature",type:"object",raw:`{
  day: string;
  month: string;
  year: string;
}`,signature:{properties:[{key:"day",value:{name:"string",required:!0}},{key:"month",value:{name:"string",required:!0}},{key:"year",value:{name:"string",required:!0}}]}},{name:"undefined"}]},name:"value"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:"",defaultValue:{value:"() => undefined",computed:!1}}}};const B=({value:a,label:r,readOnly:n=!1,onValueChange:i,error:y,style:h})=>e.jsx(ae,{value:a,label:r,readOnly:n,onValueChange:i,error:y,style:h,validate:fe});B.__docgenInfo={description:"",methods:[],displayName:"BirthdatePicker",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const m=ee.create({container:{maxWidth:430},button:{alignSelf:"flex-start"}}),W=new Date;W.setDate(W.getDate()-15);const v=new Date;v.setDate(v.getDate()+15);const Yt={title:"Forms/DatePicker",component:re},M=({...a})=>{const[r,n]=u.useState();return e.jsx(re,{...a,value:r,onChange:n})},Te=({...a})=>{const[r,n]=u.useState({start:"",end:""}),i=Me(r,a.format);return e.jsx(Le,{...a,value:r,error:i?void 0:"End date can't be before start date",onChange:n})},k=()=>e.jsx(j,{color:"#0F6FDE",children:e.jsxs(Y,{title:"DatePicker",children:[e.jsx(c,{title:"Default",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})}),e.jsx(c,{title:"Week starting sunday",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY"})})}),e.jsx(c,{title:"Selectable only in the future",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:Pe})})}),e.jsx(c,{title:"Selectable only in a range (15 days before or after today)",children:e.jsx(d,{style:m.container,children:e.jsx(M,{label:"Select a date",firstWeekDay:"sunday",format:"DD/MM/YYYY",isSelectable:be(W,v)})})})]})}),g=()=>{const a=u.useRef(null),[r,n]=u.useState(""),[i,y]=u.useState(!1);return e.jsx(j,{color:"#0F6FDE",children:e.jsx(Y,{title:"DatePicker Modal",children:e.jsxs(c,{title:"Default",children:[e.jsxs(L,{children:["Selected date: ",r]}),e.jsx(te,{height:20}),e.jsx(Z,{ref:a,style:m.button,onPress:()=>y(!0),children:"Open date picker"}),e.jsx(je,{visible:i,value:r,firstWeekDay:"monday",format:"DD/MM/YYYY",label:"Select a date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:n,onDismiss:()=>y(!1)})]})})})},x=()=>e.jsx(j,{color:"#0F6FDE",children:e.jsx(Y,{title:"DateRangePicker",children:e.jsx(c,{title:"Default",children:e.jsx(d,{style:m.container,children:e.jsx(Te,{startLabel:"Start date",endLabel:"End date",firstWeekDay:"monday",format:"DD/MM/YYYY"})})})})}),P=()=>{const[a,r]=u.useState({start:"",end:""}),[n,i]=u.useState(!1);return e.jsx(j,{color:"#0F6FDE",children:e.jsx(Y,{title:"DatePicker Popover",children:e.jsxs(c,{title:"Default",children:[e.jsxs(L,{children:["Selected date: ",a.start," - ",a.end]}),e.jsx(te,{height:20}),e.jsx(Z,{style:m.button,onPress:()=>i(!0),children:"Open date range picker"}),e.jsx(Ye,{visible:n,value:a,firstWeekDay:"monday",format:"DD/MM/YYYY",startLabel:"Start date",endLabel:"End date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:r,onDismiss:()=>i(!1)})]})})})},b=()=>{const a="",[r,n]=u.useState(a);return e.jsx(j,{color:"#0F6FDE",children:e.jsxs(Y,{title:"Inline picker",children:[e.jsx(c,{title:"Default",children:e.jsxs(d,{style:m.container,children:[ye(r)&&e.jsxs(L,{children:["Selected date: ",r]}),e.jsx(B,{label:"Birthdate",value:a,onValueChange:n})]})}),e.jsx(c,{title:"Readonly",children:e.jsxs(d,{style:m.container,children:[l(r)&&e.jsxs(L,{children:["Selected date: ",r]}),e.jsx(B,{label:"Birthdate",value:a,readOnly:!0,onValueChange:n})]})})]})})};k.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"ButtonWithModal"};x.__docgenInfo={description:"",methods:[],displayName:"Range"};P.__docgenInfo={description:"",methods:[],displayName:"ButtonWithRangePopover"};b.__docgenInfo={description:"",methods:[],displayName:"Inline"};var O,C,_;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Mt=["Default","ButtonWithModal","Range","ButtonWithRangePopover","Inline"];export{g as ButtonWithModal,P as ButtonWithRangePopover,k as Default,b as Inline,x as Range,Mt as __namedExportsOrder,Yt as default};
//# sourceMappingURL=DatePicker.stories-CJCp8Bdy.js.map