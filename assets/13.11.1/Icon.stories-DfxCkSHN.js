import{j as e,B as a,S as c,L as m,I as h,c as x,s as j,af as k,ag as g,ah as y}from"./ScrollView-D0eHMW9u.js";import{r as f}from"./iframe-I_zhAHSZ.js";import{B as u}from"./BorderedIcon-DVUqTUt7.js";import{L as I}from"./LakeLabel-CCB-L70s.js";import{L as S}from"./LakeTextInput-DRN6MWSM.js";import{S as B,a as d}from"./_StoriesComponents-C_CVCPuA.js";import"./index-nmojPuxQ.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./v4-EwEgHOG0.js";import"./Pressable-CzqhAcYg.js";import"./Fill-DPlfr9LZ.js";import"./LakeSelect-wBB1A3lv.js";import"./i18n-pdKponm_.js";import"./array-BfAlyugE.js";import"./useBoolean-BfZOYiLt.js";import"./useDisclosure-DxqCMjjy.js";import"./FocusTrap-B2D6zT1J.js";import"./FlatList-DQ17J3dn.js";import"./Popover-BxFjU2yO.js";import"./useResponsive-CnPNojAi.js";import"./function-DLOc_IHQ.js";import"./BottomPanel-WUgTR9rw.js";import"./useBodyClassName-D-de-nu-.js";import"./Suspendable-Cq8MLLTV.js";import"./index-BUef1l32.js";import"./extends-CF3RwP-h.js";import"./TransitionView-DOOghWVz.js";import"./index-CLXkQ942.js";import"./Separator-DBVLfx5C.js";const s=j.create({container:{flexWrap:"wrap"},icon:{flexBasis:"0%",flexGrow:1,minWidth:250,paddingVertical:16}}),ee={title:"Informations/Icon",component:u},p=r=>Object.keys(r),i=()=>{const[r,o]=f.useState("");return e.jsxs(B,{title:"Icon",children:[e.jsx(I,{label:"Search",render:()=>e.jsx(S,{icon:"search-filled",value:r,onChangeText:o})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p({...g,...k}).filter(n=>n.includes(r)).map(n=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(h,{name:n,size:30,color:x.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p(y).filter(n=>n.includes(r)).map(n=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(h,{name:n,size:30,color:x.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})})]})},l=({color:r})=>{const[o,n]=f.useState("");return e.jsxs(B,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e.jsx(I,{label:"Search",render:()=>e.jsx(S,{icon:"search-filled",value:o,onChangeText:n})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p(g).filter(t=>t.includes(o)).map(t=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(u,{name:t,color:r,size:40,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p(y).filter(t=>t.includes(o)).map(t=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(u,{name:t,color:r,size:100,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Bordered",props:{color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:""}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="Icon">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys({
          ...fluentIcons,
          ...fluentResizedIcons
        }).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  color
}: BorderedArgs) => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="BorderedIcon" description="You can change the color in 'Controls' panel (Press A to open it)">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <BorderedIcon name={name} color={color} size={40} padding={8} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <BorderedIcon name={name} color={color} size={100} padding={8} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...l.parameters?.docs?.source}}};const ne=["Default","Bordered"];export{l as Bordered,i as Default,ne as __namedExportsOrder,ee as default};
//# sourceMappingURL=Icon.stories-DfxCkSHN.js.map
