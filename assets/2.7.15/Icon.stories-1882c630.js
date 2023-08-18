import{S as b,a as c,j as e,I as p,b as m,L as d,c as K,z as k,B as L}from"./Space-f85095f8.js";import{r as T}from"./index-b9a8c83f.js";import{B as u}from"./BorderedIcon-9ab24950.js";import{B as r}from"./Box-f4fbfbba.js";import{L as j}from"./LakeLabel-2fef3f03.js";import{L as P}from"./LakeTextInput-221c8734.js";import{S as w,a as h}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./useMergeRefs-56399732.js";import"./Fill-0c0bad9d.js";import"./index-4daf2301.js";const o=b.create({container:{flexWrap:"wrap"},iconContainer:{width:200,height:100}}),N={title:"Informations/Icon",component:u,args:{size:24}},y=a=>Object.keys(a),i=({color:a,size:s,name:g})=>{const[t,z]=T.useState("");return c(w,{title:"Icon",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:t,onChangeText:z})}),e(h,{title:"Fluent icons",children:e(r,{direction:"row",alignItems:"center",style:o.container,children:y(k).filter(n=>n.includes(t)).map(n=>c(r,{alignItems:"center",justifyContent:"start",style:o.iconContainer,children:[e(p,{name:n,size:s,color:a}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})}),e(h,{title:"Custom icons",children:e(r,{direction:"row",alignItems:"center",style:o.container,children:y(L).filter(n=>n.includes(t)).map(n=>c(r,{alignItems:"center",justifyContent:"start",style:o.iconContainer,children:[e(p,{name:n,size:s,color:K.gray[800]}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})})]})},l=({color:a})=>{const[s,g]=T.useState("");return c(w,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:s,onChangeText:g})}),e(h,{title:"Fluent icons",children:e(r,{direction:"row",alignItems:"center",style:o.container,children:y(k).filter(t=>t.includes(s)).map(t=>c(r,{alignItems:"center",justifyContent:"start",style:o.iconContainer,children:[e(u,{name:t,color:a,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})}),e(h,{title:"Custom icons",children:e(r,{direction:"row",alignItems:"center",style:o.container,children:y(L).filter(t=>t.includes(s)).map(t=>c(r,{alignItems:"center",justifyContent:"start",style:o.iconContainer,children:[e(u,{name:t,color:a,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})})]})};var S,x,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`({
  color,
  size,
  name
}: StoryArgs) => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="Icon">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" justifyContent="start" style={styles.iconContainer}>
                <Icon name={name} size={size} color={color} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>)}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" justifyContent="start" style={styles.iconContainer}>
                <Icon name={name} size={size} color={colors.gray[800]} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(I=(x=i.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var f,B,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
//# sourceMappingURL=Icon.stories-1882c630.js.map
