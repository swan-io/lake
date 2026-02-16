import{j as e,c as m,V as y,B as v,L as s,s as b}from"./ScrollView-DyAWC5hk.js";import{r as h}from"./iframe-mG9qwCeg.js";import{L as p}from"./LakeSelect-B6fVEe5s.js";import{S,a as t}from"./_StoriesComponents-D3w01lJZ.js";import"./index-C2j6Xcq-.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useDisclosure-Da0dmh6q.js";import"./Pressable-D2RMR3Qp.js";import"./FocusTrap-C4gPB5WS.js";import"./array-BfAlyugE.js";import"./Fill-CZV0AkRU.js";import"./Popover-C7Z-lEIC.js";import"./useResponsive-CZ8tlqy5.js";import"./function-uVQX4Iv5.js";import"./BottomPanel-CgkAN4c3.js";import"./useBodyClassName-DMeQHYEU.js";import"./Suspendable-KOquHltP.js";import"./index-DYUa0c_w.js";import"./extends-CF3RwP-h.js";import"./TransitionView-DYLKAvse.js";import"./index-Cf1b7ERE.js";import"./Separator-Cx0ZvMdv.js";const o=b.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:m.gray[0]},separator:{height:1,width:"100%",flexShrink:1,backgroundColor:m.gray[100]},separatorContainer:{gap:24,paddingHorizontal:24}}),J={title:"Forms/Select",component:p},g=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],a=({initialValue:r,...u})=>{const[n,l]=h.useState(r);return e.jsx(p,{placeholder:"Select someone...",value:n,onValueChange:l,items:g,style:o.select,...u})},i=()=>e.jsxs(S,{title:"Select variations",children:[e.jsx(t,{title:"Default",children:e.jsx(a,{})}),e.jsx(t,{title:"With disabled items",children:e.jsx(a,{disabledItems:[{value:4},{value:5},{value:7},{value:12},{value:15},{value:16},{value:999}]})}),e.jsx(t,{title:"With disabled items tooltips",children:e.jsx(a,{disabledItems:[{message:"Item Émilie is disabled",value:4},{message:"Item François is disabled",value:5},{message:"Item Marie-Anne is disabled",value:7},{message:"Item Valérie is disabled",value:12},{message:"Item Jérôme is disabled",value:15},{message:"Item Thomas is disabled",value:16}]})}),e.jsx(t,{title:"Small",children:e.jsx(a,{size:"small"})}),e.jsx(t,{title:"Borderless",children:e.jsx(a,{mode:"borderless",initialValue:1})}),e.jsx(t,{title:"With icon",children:e.jsx(a,{icon:"building-bank-regular"})}),e.jsx(t,{title:"With footer",children:e.jsx(a,{PopoverFooter:()=>e.jsx(s,{style:o.footer,children:"List of random people"})})}),e.jsx(t,{title:"With error",children:e.jsx(a,{error:"Required field"})}),e.jsx(t,{title:"Disabled",children:e.jsx(a,{disabled:!0})}),e.jsx(t,{title:"Disabled with value",children:e.jsx(a,{disabled:!0,initialValue:2})})]}),x=[{name:"France",value:"fr",isoCode:"FR",region:"EU"},{name:"Germany",value:"de",isoCode:"DE",region:"EU"},{name:"Canada",value:"ca",isoCode:"CA",region:"NA"}],d=()=>{const[r,u]=h.useState(void 0),n=x.find(l=>l.value===r);return e.jsx(S,{title:"Select with custom item data",children:e.jsxs(t,{title:"Country items",children:[e.jsx(p,{placeholder:"Select a country...",value:r,onValueChange:u,items:x,renderItem:l=>e.jsxs(v,{direction:"column",children:[e.jsx(s,{color:m.gray[900],children:l.name}),e.jsx(s,{variant:"smallRegular",color:m.gray[600],children:l.region})]}),style:o.select,PopoverFooter:({close:l})=>e.jsxs(y,{children:[e.jsxs(v,{direction:"row",alignItems:"center",justifyContent:"center",style:o.separatorContainer,children:[e.jsx(y,{style:o.separator}),e.jsx(s,{variant:"smallRegular",children:"Or"}),e.jsx(y,{style:o.separator})]}),e.jsx(s,{style:o.footer,onPress:()=>{u(void 0),l()},children:"I don't see my country"})]})}),e.jsx(s,{children:n!=null?`Selected: ${n.name} (${n.isoCode})`:"No country selected"})]})})},c=()=>e.jsx(S,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(m).map(r=>e.jsx(t,{title:r,children:e.jsx(a,{icon:"building-bank-filled",color:r})},r))});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};d.__docgenInfo={description:"",methods:[],displayName:"CustomItems"};c.__docgenInfo={description:"",methods:[],displayName:"Colors"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select variations">
      <StoryPart title="Default">
        <EditableSelect />
      </StoryPart>

      <StoryPart title="With disabled items">
        <EditableSelect disabledItems={[{
        value: 4
      }, {
        value: 5
      }, {
        value: 7
      }, {
        value: 12
      }, {
        value: 15
      }, {
        value: 16
      }, {
        value: 999
      }]} />
      </StoryPart>

      <StoryPart title="With disabled items tooltips">
        <EditableSelect disabledItems={[{
        message: "Item Émilie is disabled",
        value: 4
      }, {
        message: "Item François is disabled",
        value: 5
      }, {
        message: "Item Marie-Anne is disabled",
        value: 7
      }, {
        message: "Item Valérie is disabled",
        value: 12
      }, {
        message: "Item Jérôme is disabled",
        value: 15
      }, {
        message: "Item Thomas is disabled",
        value: 16
      }]} />
      </StoryPart>

      <StoryPart title="Small">
        <EditableSelect size="small" />
      </StoryPart>

      <StoryPart title="Borderless">
        <EditableSelect mode="borderless" initialValue={1} />
      </StoryPart>

      <StoryPart title="With icon">
        <EditableSelect icon="building-bank-regular" />
      </StoryPart>

      <StoryPart title="With footer">
        <EditableSelect PopoverFooter={() => <LakeText style={styles.footer}>List of random people</LakeText>} />
      </StoryPart>

      <StoryPart title="With error">
        <EditableSelect error="Required field" />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableSelect disabled={true} />
      </StoryPart>

      <StoryPart title="Disabled with value">
        <EditableSelect disabled={true} initialValue={2} />
      </StoryPart>
    </StoryBlock>;
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const selectedItem = countryItems.find(item => item.value === value);
  return <StoryBlock title="Select with custom item data">
      <StoryPart title="Country items">
        <LakeSelect placeholder="Select a country..." value={value} onValueChange={setValue} items={countryItems} renderItem={item => <Box direction="column">
              <LakeText color={colors.gray[900]}>{item.name}</LakeText>
              <LakeText variant="smallRegular" color={colors.gray[600]}>
                {item.region}
              </LakeText>
            </Box>} style={styles.select} PopoverFooter={({
        close
      }) => <View>
              <Box direction="row" alignItems="center" justifyContent="center" style={styles.separatorContainer}>
                <View style={styles.separator} />
                <LakeText variant="smallRegular">Or</LakeText>
                <View style={styles.separator} />
              </Box>
              <LakeText style={styles.footer} onPress={() => {
          setValue(undefined);
          close();
        }}>
                I don't see my country
              </LakeText>
            </View>} />
        <LakeText>
          {selectedItem != null ? \`Selected: \${selectedItem.name} (\${selectedItem.isoCode})\` : "No country selected"}
        </LakeText>
      </StoryPart>
    </StoryBlock>;
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select colors" description="Color prop change only icon color">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableSelect icon="building-bank-filled" color={color as ColorVariants} />
        </StoryPart>)}
    </StoryBlock>;
}`,...c.parameters?.docs?.source}}};const q=["Variations","CustomItems","Colors"];export{c as Colors,d as CustomItems,i as Variations,q as __namedExportsOrder,J as default};
//# sourceMappingURL=Select.stories-DfxbvIyX.js.map
