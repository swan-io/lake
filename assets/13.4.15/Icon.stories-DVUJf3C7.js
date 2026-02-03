import{j as e,B as a,S as c,L as m,I as x,c as h,s as j,x as k,A as g,C as y}from"./ScrollView-CEkK9Hd6.js";import{r as f}from"./iframe-BMPSa_nH.js";import{B as u}from"./BorderedIcon-3PF47mXT.js";import{L as I}from"./LakeLabel-C-s2pFve.js";import{L as S}from"./LakeTextInput-B4cbwjKl.js";import{S as B,a as d}from"./_StoriesComponents-C9KGsWsz.js";import"./index-DtsbNqQk.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./v4-EwEgHOG0.js";import"./Pressable-NCInIZh9.js";import"./Fill-CBVagzPo.js";import"./LakeSelect-C4CNElf7.js";import"./useDisclosure-BowS14xA.js";import"./FocusTrap-BPI7e37h.js";import"./array-BfAlyugE.js";import"./Popover-BLkTygP9.js";import"./useResponsive-Cj3w86GI.js";import"./function-BzKDd819.js";import"./BottomPanel-DdXacmU9.js";import"./useBodyClassName-DP1kmiaP.js";import"./Suspendable-CkaWaAoY.js";import"./index-DunI5Tmz.js";import"./extends-CF3RwP-h.js";import"./TransitionView-D8TKJhjg.js";import"./index-DyAO2k44.js";import"./Separator--VsLgKIp.js";import"./index-Ba2uqmhy.js";const s=j.create({container:{flexWrap:"wrap"},icon:{flexBasis:"0%",flexGrow:1,minWidth:250,paddingVertical:16}}),Z={title:"Informations/Icon",component:u},p=r=>Object.keys(r),i=()=>{const[r,o]=f.useState("");return e.jsxs(B,{title:"Icon",children:[e.jsx(I,{label:"Search",render:()=>e.jsx(S,{icon:"search-filled",value:r,onChangeText:o})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p({...g,...k}).filter(n=>n.includes(r)).map(n=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(x,{name:n,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p(y).filter(n=>n.includes(r)).map(n=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(x,{name:n,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})})]})},l=({color:r})=>{const[o,n]=f.useState("");return e.jsxs(B,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e.jsx(I,{label:"Search",render:()=>e.jsx(S,{icon:"search-filled",value:o,onChangeText:n})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p(g).filter(t=>t.includes(o)).map(t=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(u,{name:t,color:r,size:40,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p(y).filter(t=>t.includes(o)).map(t=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(u,{name:t,color:r,size:100,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Bordered",props:{color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:""}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const $=["Default","Bordered"];export{l as Bordered,i as Default,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Icon.stories-DVUJf3C7.js.map
