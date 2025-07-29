import{j as e,B as a,s as w,I as x,c as h,S as c,L as m,k as j,l as k}from"./ScrollView-edXRKDt7.js";import{r as L}from"./iframe-DBfs29Y0.js";import{B as u}from"./BorderedIcon-D21lR2Ly.js";import{L as v}from"./LakeLabel-oTyNQY4H.js";import{L as b}from"./LakeTextInput-D5xY9nKQ.js";import{S as T,a as d}from"./_StoriesComponents-BB5sTM21.js";import"./index-Br8vrZPs.js";import"./commonStyles-BBEkV6IC.js";import"./v4-C6aID195.js";import"./Pressable-fxu0aaHG.js";import"./Fill-CdKZTXZ7.js";import"./LakeSelect-BZoOsHB2.js";import"./useDisclosure-CQzFySWZ.js";import"./FocusTrap-DR1_tG8s.js";import"./array-BfAlyugE.js";import"./Popover-tCrjSSnW.js";import"./useResponsive-dSfe8l2G.js";import"./function-C8k9QUIB.js";import"./BottomPanel-svm0FXoQ.js";import"./useBodyClassName-zzzUT9NA.js";import"./Suspendable-CllXhJ0J.js";import"./index-CkinW0k-.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BKPiqZjd.js";import"./index-DqCDjfQZ.js";import"./Separator-K4p_Nggp.js";import"./index-C5-twrF0.js";const s=w.create({container:{flexWrap:"wrap"},icon:{flexBasis:"0%",flexGrow:1,minWidth:250,paddingVertical:16}}),te={title:"Informations/Icon",component:u},p=r=>Object.keys(r),i=()=>{const[r,o]=L.useState("");return e.jsxs(T,{title:"Icon",children:[e.jsx(v,{label:"Search",render:()=>e.jsx(b,{icon:"search-filled",value:r,onChangeText:o})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p(j).filter(n=>n.includes(r)).map(n=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(x,{name:n,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p(k).filter(n=>n.includes(r)).map(n=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(x,{name:n,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})})]})},l=({color:r})=>{const[o,n]=L.useState("");return e.jsxs(T,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e.jsx(v,{label:"Search",render:()=>e.jsx(b,{icon:"search-filled",value:o,onChangeText:n})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p(j).filter(t=>t.includes(o)).map(t=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(u,{name:t,color:r,size:40,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:s.container,children:p(k).filter(t=>t.includes(o)).map(t=>e.jsxs(a,{alignItems:"center",style:s.icon,children:[e.jsx(u,{name:t,color:r,size:100,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Bordered",props:{color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:""}}};var g,y,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var I,S,B;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`({
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
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const re=["Default","Bordered"];export{l as Bordered,i as Default,re as __namedExportsOrder,te as default};
//# sourceMappingURL=Icon.stories-ZJhlRE9h.js.map
