import{S as b,a as s,j as e,I as g,c as p,b as m,L as d,z as k,B as L}from"./Space-600ec18f.js";import{r as T}from"./index-1e572255.js";import{B as u}from"./BorderedIcon-a46fc73e.js";import{B as o}from"./commonStyles-fed461e2.js";import{L as j}from"./LakeLabel-b0d34408.js";import{L as P}from"./LakeTextInput-c2379697.js";import{S as w,a as h}from"./_StoriesComponents-0d7cb4a4.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./v4-4a60fe23.js";import"./useMergeRefs-82bd0944.js";import"./Fill-a38ef8b6.js";import"./index-bcb99360.js";const a=b.create({container:{flexWrap:"wrap"},iconContainer:{width:200,height:100}}),H={title:"Informations/Icon",component:u},y=r=>Object.keys(r),i=()=>{const[r,c]=T.useState("");return s(w,{title:"Icon",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:r,onChangeText:c})}),e(h,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(k).filter(t=>t.includes(r)).map(t=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(g,{name:t,size:30,color:p.gray[800]}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})}),e(h,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(L).filter(t=>t.includes(r)).map(t=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(g,{name:t,size:30,color:p.gray[800]}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})})]})},l=({color:r})=>{const[c,t]=T.useState("");return s(w,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:c,onChangeText:t})}),e(h,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(k).filter(n=>n.includes(c)).map(n=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(u,{name:n,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})}),e(h,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(L).filter(n=>n.includes(c)).map(n=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(u,{name:n,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})})]})};var x,I,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var f,B,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const J=["Default","Bordered"];export{l as Bordered,i as Default,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Icon.stories-f49bbd61.js.map
