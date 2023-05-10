import{S as B,a as e,j as d,V as m,L as V,b as I}from"./Space-65f9bfa9.js";import{r as i}from"./index-8db94870.js";import{D as A,i as T,a as x,b as _,c as j,v as J,d as G}from"./DatePicker-3258b1fc.js";import{L as C}from"./LakeButton-bed23784.js";import{W as f}from"./WithPartnerAccentColor-32c24029.js";import{S as k,a as n}from"./_StoriesComponents-9f567819.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Boxed-b55f7b9d.js";import"./dayjs.min-49185a9c.js";import"./index-5dcf0b89.js";import"./Popover-c2e3d2c8.js";import"./useResponsive-57a84c0b.js";import"./BottomPanel-78f9e8ed.js";import"./commonStyles-d52fedae.js";import"./useBodyClassName-27d97f40.js";import"./math-e2f11545.js";import"./FocusTrap-269094b2.js";import"./array-b3630b94.js";import"./LoadingView-a1303365.js";import"./colors-298625c7.js";import"./index-2930334e.js";import"./Portal-e966a77e.js";import"./index-8ce4a492.js";import"./WithCurrentColor-41bea5ae.js";import"./TransitionView-e9c85895.js";import"./index-186348e9.js";import"./index-da7d3046.js";import"./function-841632b4.js";import"./rifm-8dee749e.js";import"./Fill-24da9952.js";import"./Icon-4e86e06c.js";import"./Svg-7871e2fb.js";import"./LakeLabel-6151c738.js";import"./v4-a960c1f4.js";import"./LakeModal-32dccbca.js";import"./LakeHeading-627b7829.js";import"./Pressable-2163c0dc.js";import"./useMergeRefs-5d4c6491.js";import"./ResponsiveContainer-eb20e0c2.js";import"./LakeSelect-bafb4765.js";import"./index-2379b1a9.js";import"./LakeTextInput-494abc41.js";import"./polished.esm-77d64d09.js";const o=B.create({container:{maxWidth:430},button:{alignSelf:"flex-start"}}),h=new Date;h.setDate(h.getDate()-15);const P=new Date;P.setDate(P.getDate()+15);const Ae={title:"Forms/DatePicker",component:A},y=({...t})=>{const[a,r]=i.useState();return e(A,{...t,value:a,onChange:r})},q=({...t})=>{const[a,r]=i.useState({start:"",end:""}),c=J(a,t.format);return e(G,{...t,value:a,error:c?void 0:"End date can't be before start date",onChange:r})},s=["January","February","March","April","May","June","July","August","September","October","November","December"],l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],D=()=>e(f,{color:"#0F6FDE",children:d(k,{title:"DatePicker",children:[e(n,{title:"Default",children:e(m,{style:o.container,children:e(y,{label:"Select a date",firstWeekDay:"monday",monthNames:s,weekDayNames:l,format:"DD/MM/YYYY"})})}),e(n,{title:"Week starting sunday",children:e(m,{style:o.container,children:e(y,{label:"Select a date",firstWeekDay:"sunday",monthNames:s,weekDayNames:l,format:"DD/MM/YYYY"})})}),e(n,{title:"Selectable only in the future",children:e(m,{style:o.container,children:e(y,{label:"Select a date",firstWeekDay:"sunday",monthNames:s,weekDayNames:l,format:"DD/MM/YYYY",isSelectable:T})})}),e(n,{title:"Selectable only in a range (15 days before or after today)",children:e(m,{style:o.container,children:e(y,{label:"Select a date",firstWeekDay:"sunday",monthNames:s,weekDayNames:l,format:"DD/MM/YYYY",isSelectable:x(h,P)})})})]})}),u=()=>{const t=i.useRef(null),[a,r]=i.useState(""),[c,Y]=i.useState(!1);return e(f,{color:"#0F6FDE",children:e(k,{title:"DatePicker Popover",children:d(n,{title:"Default",children:[d(V,{children:["Selected date: ",a]}),e(I,{height:20}),e(C,{ref:t,style:o.button,onPress:()=>Y(!0),children:"Open date picker"}),e(_,{visible:c,monthNames:s,weekDayNames:l,referenceRef:t,value:a,firstWeekDay:"monday",format:"DD/MM/YYYY",label:"Select a date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:r,onDissmiss:()=>Y(!1)})]})})})},p=()=>e(f,{color:"#0F6FDE",children:e(k,{title:"DateRangePicker",children:e(n,{title:"Default",children:e(m,{style:o.container,children:e(q,{startLabel:"Start date",endLabel:"End date",firstWeekDay:"monday",monthNames:s,weekDayNames:l,format:"DD/MM/YYYY"})})})})}),S=()=>{const[t,a]=i.useState({start:"",end:""}),[r,c]=i.useState(!1);return e(f,{color:"#0F6FDE",children:e(k,{title:"DatePicker Popover",children:d(n,{title:"Default",children:[d(V,{children:["Selected date: ",t.start," - ",t.end]}),e(I,{height:20}),e(C,{style:o.button,onPress:()=>c(!0),children:"Open date range picker"}),e(j,{visible:r,monthNames:s,weekDayNames:l,value:t,firstWeekDay:"monday",format:"DD/MM/YYYY",startLabel:"Start date",endLabel:"End date",confirmLabel:"Select",cancelLabel:"Cancel",onChange:a,onDissmiss:()=>c(!1)})]})})})};var b,N,g;D.parameters={...D.parameters,docs:{...(b=D.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DatePicker">
        <StoryPart title="Default">
          <View style={styles.container}>
            <InteractiveDatePicker label="Select a date" firstWeekDay="monday" monthNames={monthNames} weekDayNames={dayNames} format="DD/MM/YYYY" />
          </View>
        </StoryPart>

        <StoryPart title="Week starting sunday">
          <View style={styles.container}>
            <InteractiveDatePicker label="Select a date" firstWeekDay="sunday" monthNames={monthNames} weekDayNames={dayNames} format="DD/MM/YYYY" />
          </View>
        </StoryPart>

        <StoryPart title="Selectable only in the future">
          <View style={styles.container}>
            <InteractiveDatePicker label="Select a date" firstWeekDay="sunday" monthNames={monthNames} weekDayNames={dayNames} format="DD/MM/YYYY" isSelectable={isTodayOrFutureDate} />
          </View>
        </StoryPart>

        <StoryPart title="Selectable only in a range (15 days before or after today)">
          <View style={styles.container}>
            <InteractiveDatePicker label="Select a date" firstWeekDay="sunday" monthNames={monthNames} weekDayNames={dayNames} format="DD/MM/YYYY" isSelectable={isDateInRange(FIFTEEN_DAYS_AGO, FIFTEEN_DAYS_LATER)} />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(g=(N=D.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};var v,M,W;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const buttonRef = useRef<View | null>(null);
  const [value, setValue] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DatePicker Popover">
        <StoryPart title="Default">
          <LakeText>Selected date: {value}</LakeText>
          <Space height={20} />

          <LakeButton ref={buttonRef} style={styles.button} onPress={() => setIsOpened(true)}>
            Open date picker
          </LakeButton>

          <DatePickerPopover visible={isOpened} monthNames={monthNames} weekDayNames={dayNames} referenceRef={buttonRef} value={value} firstWeekDay="monday" format="DD/MM/YYYY" label="Select a date" confirmLabel="Select" cancelLabel="Cancel" onChange={setValue} onDissmiss={() => setIsOpened(false)} />
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(W=(M=u.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var L,F,w;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DateRangePicker">
        <StoryPart title="Default">
          <View style={styles.container}>
            <InteractiveDateRangePicker startLabel="Start date" endLabel="End date" firstWeekDay="monday" monthNames={monthNames} weekDayNames={dayNames} format="DD/MM/YYYY" />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(w=(F=p.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var E,O,R;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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

          <DateRangePickerModal visible={isOpened} monthNames={monthNames} weekDayNames={dayNames} value={value} firstWeekDay="monday" format="DD/MM/YYYY" startLabel="Start date" endLabel="End date" confirmLabel="Select" cancelLabel="Cancel" onChange={setValue} onDissmiss={() => setIsOpened(false)} />
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>;
}`,...(R=(O=S.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Ce=["Default","ButtonWithPopover","Range","ButtonWithRangePopover"];export{u as ButtonWithPopover,S as ButtonWithRangePopover,D as Default,p as Range,Ce as __namedExportsOrder,Ae as default};
//# sourceMappingURL=DatePicker.stories-ab69c63d.js.map
