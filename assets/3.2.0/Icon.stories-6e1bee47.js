import{S as b,a as i,j as e,I as u,c as g,b as m,L as d,z as k,B as L}from"./Space-dba27b92.js";import{r as T}from"./index-f1286426.js";import{B as y}from"./BorderedIcon-c047bd55.js";import{B as o}from"./commonStyles-42a4f97c.js";import{L as j}from"./LakeLabel-af31f9aa.js";import{L as P}from"./LakeTextInput-bf88f81b.js";import{S as w,a as p}from"./_StoriesComponents-3cc488e2.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./v4-4a60fe23.js";import"./Pressable-20b32eda.js";import"./Fill-e938b4c1.js";import"./LakeSelect-d9f7eed7.js";import"./useDisclosure-a0ce2208.js";import"./a11y-e7c88e69.js";import"./Popover-37204331.js";import"./useResponsive-c5d6bc67.js";import"./function-a81f264e.js";import"./Boxed-86465006.js";import"./BottomPanel-de831ede.js";import"./useBodyClassName-4b4df53c.js";import"./math-15178691.js";import"./FocusTrap-b85d66d4.js";import"./array-4dd4a51c.js";import"./LoadingView-935232a8.js";import"./colors-298625c7.js";import"./index-7f82ccac.js";import"./TransitionView-81a4e627.js";import"./index-35c6183c.js";import"./index-7af8ab58.js";import"./index-1e262cdd.js";const a=b.create({container:{flexWrap:"wrap"},iconContainer:{width:200,height:100}}),se={title:"Informations/Icon",component:y},h=r=>Object.keys(r),c=()=>{const[r,s]=T.useState("");return i(w,{title:"Icon",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:r,onChangeText:s})}),e(p,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:h(k).filter(t=>t.includes(r)).map(t=>i(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(u,{name:t,size:30,color:g.gray[800]}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})}),e(p,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:h(L).filter(t=>t.includes(r)).map(t=>i(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(u,{name:t,size:30,color:g.gray[800]}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})})]})},l=({color:r})=>{const[s,t]=T.useState("");return i(w,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:s,onChangeText:t})}),e(p,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:h(k).filter(n=>n.includes(s)).map(n=>i(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(y,{name:n,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})}),e(p,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:h(L).filter(n=>n.includes(s)).map(n=>i(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(y,{name:n,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})})]})};var x,I,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="Icon">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" justifyContent="start" style={styles.iconContainer}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>)}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" justifyContent="start" style={styles.iconContainer}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var f,B,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`({
  color
}: BorderedArgs) => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="BorderedIcon" description="You can change the color in 'Controls' panel (Press A to open it)">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" justifyContent="start" style={styles.iconContainer}>
                <BorderedIcon name={name} color={color} size={40} padding={8} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>)}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" justifyContent="start" style={styles.iconContainer}>
                <BorderedIcon name={name} color={color} size={40} padding={8} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const ce=["Default","Bordered"];export{l as Bordered,c as Default,ce as __namedExportsOrder,se as default};
//# sourceMappingURL=Icon.stories-6e1bee47.js.map
