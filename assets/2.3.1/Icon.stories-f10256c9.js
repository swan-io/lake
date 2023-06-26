import{S as b,j as s,a as e,c as g,b as m,L as d}from"./Space-09b2011d.js";import{r as k}from"./index-ebeaab24.js";import{B as u}from"./BorderedIcon-05ba6bab.js";import{B as o}from"./index-35ad09cf.js";import{I as p,f as L,c as T}from"./Icon-6b24ae15.js";import{L as j}from"./LakeLabel-b8b7817c.js";import{L as P}from"./LakeTextInput-c976adee.js";import{S as w,a as h}from"./_StoriesComponents-d63fc2ec.js";import"./extends-98964cd2.js";import"./Svg-acec65c8.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./useMergeRefs-c821bd07.js";import"./Fill-0a1d6009.js";import"./index-cc3175a7.js";const a=b.create({container:{flexWrap:"wrap"},iconContainer:{width:200,height:100}}),M={title:"Informations/Icon",component:u},y=r=>Object.keys(r),i=()=>{const[r,c]=k.useState("");return s(w,{title:"Icon",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:r,onChangeText:c})}),e(h,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(L).filter(t=>t.includes(r)).map(t=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(p,{name:t,size:30,color:g.gray[800]}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})}),e(h,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(T).filter(t=>t.includes(r)).map(t=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(p,{name:t,size:30,color:g.gray[800]}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})})]})},l=({color:r})=>{const[c,t]=k.useState("");return s(w,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:c,onChangeText:t})}),e(h,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(L).filter(n=>n.includes(c)).map(n=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(u,{name:n,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})}),e(h,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(T).filter(n=>n.includes(c)).map(n=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(u,{name:n,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})})]})};var x,I,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const N=["Default","Bordered"];export{l as Bordered,i as Default,N as __namedExportsOrder,M as default};
//# sourceMappingURL=Icon.stories-f10256c9.js.map
