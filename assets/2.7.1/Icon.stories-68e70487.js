import{S as b,a as s,j as e,c as u,b as m,L as d}from"./Space-8b9461bb.js";import{r as k}from"./index-76fb7be0.js";import{B as p}from"./BorderedIcon-04a2a154.js";import{B as o}from"./index-39866dda.js";import{I as g,f as L,c as T}from"./Icon-c0d6058a.js";import{L as j}from"./LakeLabel-6519d039.js";import{L as P}from"./LakeTextInput-da443d3b.js";import{S as w,a as h}from"./_StoriesComponents-2cd22474.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Svg-77f685f5.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./useMergeRefs-3337b521.js";import"./Fill-89caa860.js";import"./index-7f67d260.js";const a=b.create({container:{flexWrap:"wrap"},iconContainer:{width:200,height:100}}),N={title:"Informations/Icon",component:p},y=r=>Object.keys(r),i=()=>{const[r,c]=k.useState("");return s(w,{title:"Icon",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:r,onChangeText:c})}),e(h,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(L).filter(t=>t.includes(r)).map(t=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(g,{name:t,size:30,color:u.gray[800]}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})}),e(h,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(T).filter(t=>t.includes(r)).map(t=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(g,{name:t,size:30,color:u.gray[800]}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})})]})},l=({color:r})=>{const[c,t]=k.useState("");return s(w,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:c,onChangeText:t})}),e(h,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(L).filter(n=>n.includes(c)).map(n=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(p,{name:n,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})}),e(h,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:y(T).filter(n=>n.includes(c)).map(n=>s(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(p,{name:n,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})})]})};var x,I,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const Q=["Default","Bordered"];export{l as Bordered,i as Default,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=Icon.stories-68e70487.js.map
