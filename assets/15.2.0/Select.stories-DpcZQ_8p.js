import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-Bdn14elh.js";import{U as r,g as i,h as a,ht as o,it as s,kt as c,o as l,s as u,st as d,wt as f}from"./ScrollView-BZAAJkeN.js";import{n as p,r as m,t as h}from"./_StoriesComponents-DANNEV0x.js";import{n as g,t as _}from"./LakeSelect-Ck7_TwkK.js";var v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{v=e(n()),o(),i(),g(),u(),d(),m(),y=r(),b=c.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:s.gray[0]},separator:{height:1,width:`100%`,flexShrink:1,backgroundColor:s.gray[100]},separatorContainer:{gap:24,paddingHorizontal:24}}),x={title:`Forms/Select`,component:_},S=[{name:`Camille`,value:1,searchTerms:[`Coco`]},{name:`Charlotte`,value:2},{name:`Francis`,value:3},{name:`Émilie`,value:4},{name:`Marie-Laure-Natasha-Valérie-Émilie`,value:17},{name:`François`,value:5},{name:`Laura`,value:6},{name:`Marie-Anne`,value:7},{name:`Natasha`,value:8},{name:`Nicolas`,value:9,searchTerms:[`NW65UA`,`Coco`]},{name:`Pierre`,value:10},{name:`Thomas`,value:11},{name:`Valérie`,value:12},{name:`Yann`,value:13},{name:`Zoé`,value:14},{name:`Jérôme`,value:15},{name:`Thomas`,value:16}],C=({initialValue:e,items:t=S,...n})=>{let[r,i]=(0,v.useState)(e);return(0,y.jsx)(_,{placeholder:`Select someone...`,value:r,onValueChange:i,items:t,style:b.select,...n})},w=()=>(0,y.jsxs)(h,{title:`Select variations`,children:[(0,y.jsx)(p,{title:`Default`,children:(0,y.jsx)(C,{})}),(0,y.jsx)(p,{title:`With disabled items`,children:(0,y.jsx)(C,{disabledItems:[{value:4},{value:5},{value:7},{value:12},{value:15},{value:16},{value:999}]})}),(0,y.jsx)(p,{title:`With disabled items tooltips`,children:(0,y.jsx)(C,{disabledItems:[{message:`Item Émilie is disabled`,value:4},{message:`Item François is disabled`,value:5},{message:`Item Marie-Anne is disabled`,value:7},{message:`Item Valérie is disabled`,value:12},{message:`Item Jérôme is disabled`,value:15},{message:`Item Thomas is disabled`,value:16}]})}),(0,y.jsx)(p,{title:`With search`,children:(0,y.jsx)(C,{hasSearch:!0})}),(0,y.jsx)(p,{title:`Small`,children:(0,y.jsx)(C,{size:`small`})}),(0,y.jsx)(p,{title:`Borderless`,children:(0,y.jsx)(C,{mode:`borderless`,initialValue:1})}),(0,y.jsx)(p,{title:`With icon`,children:(0,y.jsx)(C,{icon:`building-bank-regular`})}),(0,y.jsx)(p,{title:`With footer`,children:(0,y.jsx)(C,{PopoverFooter:()=>(0,y.jsx)(l,{style:b.footer,children:`List of random people`})})}),(0,y.jsx)(p,{title:`With error`,children:(0,y.jsx)(C,{error:`Required field`})}),(0,y.jsx)(p,{title:`With help`,children:(0,y.jsx)(C,{help:`Additional information`})}),(0,y.jsx)(p,{title:`Disabled`,children:(0,y.jsx)(C,{disabled:!0})}),(0,y.jsx)(p,{title:`Disabled with value`,children:(0,y.jsx)(C,{disabled:!0,initialValue:2})})]}),T=[{name:`France`,value:`fr`,isoCode:`FR`,region:`EU`},{name:`Germany`,value:`de`,isoCode:`DE`,region:`EU`},{name:`Canada`,value:`ca`,isoCode:`CA`,region:`NA`}],E=()=>{let[e,t]=(0,v.useState)(void 0),n=T.find(t=>t.value===e);return(0,y.jsx)(h,{title:`Select with custom item data`,children:(0,y.jsxs)(p,{title:`Country items`,children:[(0,y.jsx)(_,{placeholder:`Select a country...`,value:e,onValueChange:t,items:T,renderItem:e=>(0,y.jsxs)(a,{direction:`column`,children:[(0,y.jsx)(l,{color:s.gray[900],children:e.name}),(0,y.jsx)(l,{variant:`smallRegular`,color:s.gray[600],children:e.region})]}),style:b.select,PopoverFooter:({close:e})=>(0,y.jsxs)(f,{children:[(0,y.jsxs)(a,{direction:`row`,alignItems:`center`,justifyContent:`center`,style:b.separatorContainer,children:[(0,y.jsx)(f,{style:b.separator}),(0,y.jsx)(l,{variant:`smallRegular`,children:`Or`}),(0,y.jsx)(f,{style:b.separator})]}),(0,y.jsx)(l,{style:b.footer,onPress:()=>{t(void 0),e()},children:`I don't see my country`})]})}),(0,y.jsx)(l,{children:n==null?`No country selected`:`Selected: ${n.name} (${n.isoCode})`})]})})},D=()=>(0,y.jsx)(h,{title:`Select colors`,description:`Color prop change only icon color`,children:Object.keys(s).map(e=>(0,y.jsx)(p,{title:e,children:(0,y.jsx)(C,{icon:`building-bank-filled`,color:e})},e))}),O=()=>{let e=[{name:`1`,value:1},{name:`2`,value:2},{name:`3`,value:3}],t=[{name:`Camille`,value:1},{name:`Charlotte`,value:2},{name:`Francis`,value:3},{name:`Société de Participations Financières de Profession Libérale Société à responsabilité limitée (SPFPL SARL) - SPFPL SARL`,value:17}];return(0,y.jsxs)(h,{title:`short width`,description:``,children:[(0,y.jsx)(p,{title:`Default`,children:(0,y.jsx)(C,{items:e})}),(0,y.jsx)(p,{title:`With matchReferenceMinWidth false`,children:(0,y.jsx)(C,{items:e,matchReferenceMinWidth:!1})}),(0,y.jsx)(p,{title:`Default With very long items`,children:(0,y.jsx)(C,{items:t})}),(0,y.jsx)(p,{title:`With very long items and matchReferenceWidth true`,children:(0,y.jsx)(C,{items:t,matchReferenceWidth:!0})})]})},w.__docgenInfo={description:``,methods:[],displayName:`Variations`},E.__docgenInfo={description:``,methods:[],displayName:`CustomItems`},D.__docgenInfo={description:``,methods:[],displayName:`Colors`},O.__docgenInfo={description:``,methods:[],displayName:`VariableWidth`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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

      <StoryPart title="With help">
        <EditableSelect help="Additional information" />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableSelect disabled={true} />
      </StoryPart>

      <StoryPart title="Disabled with value">
        <EditableSelect disabled={true} initialValue={2} />
      </StoryPart>
    </StoryBlock>;
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select colors" description="Color prop change only icon color">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableSelect icon="building-bank-filled" color={color as ColorVariants} />
        </StoryPart>)}
    </StoryBlock>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k=[`Variations`,`CustomItems`,`Colors`,`VariableWidth`]}))();export{D as Colors,E as CustomItems,O as VariableWidth,w as Variations,k as __namedExportsOrder,x as default};
//# sourceMappingURL=Select.stories-DpcZQ_8p.js.map