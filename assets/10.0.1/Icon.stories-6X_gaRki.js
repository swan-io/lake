import{j as e}from"./jsx-runtime-BlAj40OV.js";import{r as j}from"./index-Cs7sjTYM.js";import{B as u}from"./BorderedIcon-DqzxgBJE.js";import{s as w,B as a,I as x,c as h,S as c,L as m,C as k,D as L}from"./ScrollView-CdeN2c90.js";import{L as v}from"./LakeLabel-BHdxvK9H.js";import{L as b}from"./LakeTextInput-DcfmN3Ux.js";import{S as T,a as d}from"./_StoriesComponents-DlaK0P1a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./commonStyles-t4XfA7cz.js";import"./v4-DvF23Exx.js";import"./Pressable-Cm7BIrql.js";import"./Fill-C1Xrh8KL.js";import"./LakeSelect-Y_I7aE6k.js";import"./useDisclosure-DLkMFUa4.js";import"./FocusTrap-CkiMevqq.js";import"./array-BfAlyugE.js";import"./Popover-BGCmf6kz.js";import"./useResponsive-CzIqCC5v.js";import"./function-DqanX5uB.js";import"./BottomPanel-DFGNGfH6.js";import"./useBodyClassName-DMoYUPTW.js";import"./Suspendable-RLtE4NdL.js";import"./index-BaFjtvWz.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CDS0x0T_.js";import"./index-B-e40BQY.js";import"./index-9wgo8SO9.js";const o=w.create({container:{flexWrap:"wrap"},icon:{flexBasis:"0%",flexGrow:1,minWidth:250,paddingVertical:16}}),re={title:"Informations/Icon",component:u},p=r=>Object.keys(r),i=()=>{const[r,s]=j.useState("");return e.jsxs(T,{title:"Icon",children:[e.jsx(v,{label:"Search",render:()=>e.jsx(b,{icon:"search-filled",value:r,onChangeText:s})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(k).filter(n=>n.includes(r)).map(n=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(x,{name:n,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(L).filter(n=>n.includes(r)).map(n=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(x,{name:n,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})})]})},l=({color:r})=>{const[s,n]=j.useState("");return e.jsxs(T,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e.jsx(v,{label:"Search",render:()=>e.jsx(b,{icon:"search-filled",value:s,onChangeText:n})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(k).filter(t=>t.includes(s)).map(t=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(u,{name:t,color:r,size:40,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(L).filter(t=>t.includes(s)).map(t=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(u,{name:t,color:r,size:100,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Bordered",props:{color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:""}}};var g,y,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const ae=["Default","Bordered"];export{l as Bordered,i as Default,ae as __namedExportsOrder,re as default};
//# sourceMappingURL=Icon.stories-6X_gaRki.js.map
