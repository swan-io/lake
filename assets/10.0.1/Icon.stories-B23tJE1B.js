import{j as e}from"./jsx-runtime-BlAj40OV.js";import{r as j}from"./index-Cs7sjTYM.js";import{B as u}from"./BorderedIcon-SIIVRc23.js";import{s as w,B as a,I as x,c as h,S as c,L as m,f as k,a as L}from"./ScrollView-DAMcnhPN.js";import{L as v}from"./LakeLabel-C4tp_Ka_.js";import{L as b}from"./LakeTextInput-DLJpkVXB.js";import{S as T,a as d}from"./_StoriesComponents-4WTDdsYg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./commonStyles-t4XfA7cz.js";import"./v4-DvF23Exx.js";import"./Pressable-8N6ahZPW.js";import"./Fill-l8vhgJyC.js";import"./LakeSelect-Df_m7OdR.js";import"./useDisclosure-DLkMFUa4.js";import"./FocusTrap-HMOsJfWh.js";import"./array-BfAlyugE.js";import"./Popover-SzN_tnL1.js";import"./useResponsive-CzIqCC5v.js";import"./function-DMPX11KF.js";import"./BottomPanel-DvLAyyFQ.js";import"./useBodyClassName-DMoYUPTW.js";import"./Suspendable-Bl-Qq_g-.js";import"./index-CJghV6hQ.js";import"./extends-CF3RwP-h.js";import"./TransitionView-_995VKea.js";import"./index-Cp2lnEJT.js";import"./Separator-qitoqTAJ.js";import"./index-Cyz8msWj.js";const o=w.create({container:{flexWrap:"wrap"},icon:{flexBasis:"0%",flexGrow:1,minWidth:250,paddingVertical:16}}),ae={title:"Informations/Icon",component:u},p=r=>Object.keys(r),i=()=>{const[r,s]=j.useState("");return e.jsxs(T,{title:"Icon",children:[e.jsx(v,{label:"Search",render:()=>e.jsx(b,{icon:"search-filled",value:r,onChangeText:s})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(k).filter(t=>t.includes(r)).map(t=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(x,{name:t,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(L).filter(t=>t.includes(r)).map(t=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(x,{name:t,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})})]})},l=({color:r})=>{const[s,t]=j.useState("");return e.jsxs(T,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e.jsx(v,{label:"Search",render:()=>e.jsx(b,{icon:"search-filled",value:s,onChangeText:t})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(k).filter(n=>n.includes(s)).map(n=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(u,{name:n,color:r,size:40,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(L).filter(n=>n.includes(s)).map(n=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(u,{name:n,color:r,size:100,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Bordered",props:{color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:""}}};var g,y,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const oe=["Default","Bordered"];export{l as Bordered,i as Default,oe as __namedExportsOrder,ae as default};
//# sourceMappingURL=Icon.stories-B23tJE1B.js.map
