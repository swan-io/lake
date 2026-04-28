import{j as e,c as h,V as S,B as v,L as s,s as j}from"./ScrollView-043YSePJ.js";import{r as b}from"./iframe-BN3BVKX8.js";import{L as p}from"./LakeSelect-BysjrbIM.js";import{S as y,a as t}from"./_StoriesComponents-CeyrHVJO.js";import"./index-Dlpirge6.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBoolean-Bk_yQopR.js";import"./useDisclosure-BCjiHsol.js";import"./Pressable-DzhiLFyl.js";import"./FocusTrap-9tfiqDPy.js";import"./array-BfAlyugE.js";import"./Fill-CI0y9lir.js";import"./FlatList-BToDh8jL.js";import"./Popover-BRPPsjd3.js";import"./useResponsive-C6P0SBx2.js";import"./function-C9uJWYY7.js";import"./BottomPanel-D860CveQ.js";import"./useBodyClassName-Cpl99UgS.js";import"./Suspendable-C9wvjYmr.js";import"./index-P1yuoy8V.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BtVON78z.js";import"./index-CEeJu2lx.js";import"./Separator-CcCQ9Zfp.js";const l=j.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:h.gray[0]},separator:{height:1,width:"100%",flexShrink:1,backgroundColor:h.gray[100]},separatorContainer:{gap:24,paddingHorizontal:24}}),G={title:"Forms/Select",component:p},P=[{name:"Camille",value:1,searchTerms:["Coco"]},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9,searchTerms:["NW65UA","Coco"]},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],a=({initialValue:r,items:i=P,...o})=>{const[n,g]=b.useState(r);return e.jsx(p,{placeholder:"Select someone...",value:n,onValueChange:g,items:i,style:l.select,...o})},c=()=>e.jsxs(y,{title:"Select variations",children:[e.jsx(t,{title:"Default",children:e.jsx(a,{})}),e.jsx(t,{title:"With disabled items",children:e.jsx(a,{disabledItems:[{value:4},{value:5},{value:7},{value:12},{value:15},{value:16},{value:999}]})}),e.jsx(t,{title:"With disabled items tooltips",children:e.jsx(a,{disabledItems:[{message:"Item Émilie is disabled",value:4},{message:"Item François is disabled",value:5},{message:"Item Marie-Anne is disabled",value:7},{message:"Item Valérie is disabled",value:12},{message:"Item Jérôme is disabled",value:15},{message:"Item Thomas is disabled",value:16}]})}),e.jsx(t,{title:"With search",children:e.jsx(a,{hasSearch:!0})}),e.jsx(t,{title:"Small",children:e.jsx(a,{size:"small"})}),e.jsx(t,{title:"Borderless",children:e.jsx(a,{mode:"borderless",initialValue:1})}),e.jsx(t,{title:"With icon",children:e.jsx(a,{icon:"building-bank-regular"})}),e.jsx(t,{title:"With footer",children:e.jsx(a,{PopoverFooter:()=>e.jsx(s,{style:l.footer,children:"List of random people"})})}),e.jsx(t,{title:"With error",children:e.jsx(a,{error:"Required field"})}),e.jsx(t,{title:"Disabled",children:e.jsx(a,{disabled:!0})}),e.jsx(t,{title:"Disabled with value",children:e.jsx(a,{disabled:!0,initialValue:2})})]}),x=[{name:"France",value:"fr",isoCode:"FR",region:"EU"},{name:"Germany",value:"de",isoCode:"DE",region:"EU"},{name:"Canada",value:"ca",isoCode:"CA",region:"NA"}],m=()=>{const[r,i]=b.useState(void 0),o=x.find(n=>n.value===r);return e.jsx(y,{title:"Select with custom item data",children:e.jsxs(t,{title:"Country items",children:[e.jsx(p,{placeholder:"Select a country...",value:r,onValueChange:i,items:x,renderItem:n=>e.jsxs(v,{direction:"column",children:[e.jsx(s,{color:h.gray[900],children:n.name}),e.jsx(s,{variant:"smallRegular",color:h.gray[600],children:n.region})]}),style:l.select,PopoverFooter:({close:n})=>e.jsxs(S,{children:[e.jsxs(v,{direction:"row",alignItems:"center",justifyContent:"center",style:l.separatorContainer,children:[e.jsx(S,{style:l.separator}),e.jsx(s,{variant:"smallRegular",children:"Or"}),e.jsx(S,{style:l.separator})]}),e.jsx(s,{style:l.footer,onPress:()=>{i(void 0),n()},children:"I don't see my country"})]})}),e.jsx(s,{children:o!=null?`Selected: ${o.name} (${o.isoCode})`:"No country selected"})]})})},d=()=>e.jsx(y,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(h).map(r=>e.jsx(t,{title:r,children:e.jsx(a,{icon:"building-bank-filled",color:r})},r))}),u=()=>{const r=[{name:"1",value:1},{name:"2",value:2},{name:"3",value:3}],i=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Société de Participations Financières de Profession Libérale Société à responsabilité limitée (SPFPL SARL) - SPFPL SARL",value:17}];return e.jsxs(y,{title:"short width",description:"",children:[e.jsx(t,{title:"Default",children:e.jsx(a,{items:r})}),e.jsx(t,{title:"With matchReferenceMinWidth false",children:e.jsx(a,{items:r,matchReferenceMinWidth:!1})}),e.jsx(t,{title:"Default With very long items",children:e.jsx(a,{items:i})}),e.jsx(t,{title:"With very long items and matchReferenceWidth true",children:e.jsx(a,{items:i,matchReferenceWidth:!0})})]})};c.__docgenInfo={description:"",methods:[],displayName:"Variations"};m.__docgenInfo={description:"",methods:[],displayName:"CustomItems"};d.__docgenInfo={description:"",methods:[],displayName:"Colors"};u.__docgenInfo={description:"",methods:[],displayName:"VariableWidth"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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

      <StoryPart title="With search">
        <EditableSelect hasSearch={true} />
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select colors" description="Color prop change only icon color">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableSelect icon="building-bank-filled" color={color as ColorVariants} />
        </StoryPart>)}
    </StoryBlock>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const items = [{
    name: "1",
    value: 1
  }, {
    name: "2",
    value: 2
  }, {
    name: "3",
    value: 3
  }];
  const itemsVeryLong = [{
    name: "Camille",
    value: 1
  }, {
    name: "Charlotte",
    value: 2
  }, {
    name: "Francis",
    value: 3
  }, {
    name: "Société de Participations Financières de Profession Libérale Société à responsabilité limitée (SPFPL SARL) - SPFPL SARL",
    value: 17
  }];
  return <StoryBlock title="short width" description="">
      <StoryPart title="Default">
        <EditableSelect items={items} />
      </StoryPart>
      <StoryPart title="With matchReferenceMinWidth false">
        <EditableSelect items={items} matchReferenceMinWidth={false} />
      </StoryPart>
      <StoryPart title="Default With very long items">
        <EditableSelect items={itemsVeryLong} />
      </StoryPart>
      <StoryPart title="With very long items and matchReferenceWidth true">
        <EditableSelect items={itemsVeryLong} matchReferenceWidth={true} />
      </StoryPart>
    </StoryBlock>;
}`,...u.parameters?.docs?.source}}};const Y=["Variations","CustomItems","Colors","VariableWidth"];export{d as Colors,m as CustomItems,u as VariableWidth,c as Variations,Y as __namedExportsOrder,G as default};
//# sourceMappingURL=Select.stories-CJjI7Bw2.js.map
