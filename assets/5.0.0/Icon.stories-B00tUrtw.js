import{s as O,j as a,a as e,I as g,c as y,S as m,L as d,f as k,b}from"./Space-BLMRR6Ce.js";import{r as T}from"./index-CBqU2yxZ.js";import{B as u}from"./BorderedIcon-D2i12Wip.js";import{B as o}from"./commonStyles-Bfc4wRWx.js";import{L as P}from"./LakeLabel-C0fzRUNy.js";import{L as w}from"./LakeTextInput-ZpW54gVW.js";import{S as C,a as p}from"./_StoriesComponents-DKbq9KSk.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./v4-D8aEg3BZ.js";import"./Pressable-Cl0_6ci1.js";import"./Fill-Ch35xhAe.js";import"./LakeSelect-BzCTA_qi.js";import"./useDisclosure-CS9t68_Y.js";import"./a11y-DXvpDVrG.js";import"./Popover-C_v-F6Wd.js";import"./useResponsive-DjZsT3r2.js";import"./function-7KRoCZYk.js";import"./Boxed-xcydBHmC.js";import"./BottomPanel-CnRQEnj6.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-DjC8LVX7.js";import"./FocusTrap-qIqsDkFM.js";import"./array-rjEBP2Ry.js";import"./LoadingView-CJpJGpXG.js";import"./index-BRNIhqxc.js";import"./TransitionView-BtGHLqFT.js";import"./index-s-DbfM5I.js";import"./index-866Q9wj8.js";import"./index-CjSW1CIS.js";const i=O.create({container:{flexWrap:"wrap"},icon:{flexBasis:"0%",flexGrow:1,minWidth:250,paddingVertical:16}}),se={title:"Informations/Icon",component:u},h=r=>Object.keys(r),c=()=>{const[r,s]=T.useState("");return a(C,{title:"Icon",children:[e(P,{label:"Search",render:()=>e(w,{icon:"search-filled",value:r,onChangeText:s})}),e(p,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(k).filter(n=>n.includes(r)).map(n=>a(o,{alignItems:"center",style:i.icon,children:[e(g,{name:n,size:30,color:y.gray[800]}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:n})]},n))})}),e(p,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(b).filter(n=>n.includes(r)).map(n=>a(o,{alignItems:"center",style:i.icon,children:[e(g,{name:n,size:30,color:y.gray[800]}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:n})]},n))})})]})},l=({color:r})=>{const[s,n]=T.useState("");return a(C,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e(P,{label:"Search",render:()=>e(w,{icon:"search-filled",value:s,onChangeText:n})}),e(p,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(k).filter(t=>t.includes(s)).map(t=>a(o,{alignItems:"center",style:i.icon,children:[e(u,{name:t,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:t})]},t))})}),e(p,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(b).filter(t=>t.includes(s)).map(t=>a(o,{alignItems:"center",style:i.icon,children:[e(u,{name:t,color:r,size:100,padding:8}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:t})]},t))})})]})};var x,I,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="Icon">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
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
}`,...(f=(I=c.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var S,B,L;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const ce=["Default","Bordered"];export{l as Bordered,c as Default,ce as __namedExportsOrder,se as default};
//# sourceMappingURL=Icon.stories-B00tUrtw.js.map
