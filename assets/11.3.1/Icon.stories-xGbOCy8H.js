import{j as e}from"./jsx-runtime-DT09rT5F.js";import{r as j}from"./index-DXKZGL6g.js";import{B as u}from"./BorderedIcon-D2u950Z6.js";import{s as w,B as a,I as x,c as h,S as c,L as m,f as k,a as L}from"./ScrollView-C1yxRy16.js";import{L as v}from"./LakeLabel-DkfEw3kL.js";import{L as b}from"./LakeTextInput-CEY2eHwV.js";import{S as T,a as d}from"./_StoriesComponents-CKgElVW5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BeFrmAzh.js";import"./commonStyles-CWvHnKRn.js";import"./v4-C6aID195.js";import"./Pressable-to27AyJA.js";import"./Fill-CPmWVm4i.js";import"./LakeSelect-CKFvqJMY.js";import"./useDisclosure-CwHJfrsH.js";import"./FocusTrap-Cq0HuauR.js";import"./array-BfAlyugE.js";import"./Popover-DDdajSsf.js";import"./useResponsive-6iDeDSbQ.js";import"./function-DXO-3Yjx.js";import"./BottomPanel-D4EPn_06.js";import"./useBodyClassName-CYzM7DM-.js";import"./Suspendable-CKuscA2L.js";import"./index-BpljNV4n.js";import"./extends-CF3RwP-h.js";import"./TransitionView-Cm_7ViIn.js";import"./index-VNGmZ7GH.js";import"./Separator-DMQr2iVh.js";import"./index-BAVjSphd.js";const o=w.create({container:{flexWrap:"wrap"},icon:{flexBasis:"0%",flexGrow:1,minWidth:250,paddingVertical:16}}),ae={title:"Informations/Icon",component:u},p=r=>Object.keys(r),i=()=>{const[r,s]=j.useState("");return e.jsxs(T,{title:"Icon",children:[e.jsx(v,{label:"Search",render:()=>e.jsx(b,{icon:"search-filled",value:r,onChangeText:s})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(k).filter(t=>t.includes(r)).map(t=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(x,{name:t,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(L).filter(t=>t.includes(r)).map(t=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(x,{name:t,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})})]})},l=({color:r})=>{const[s,t]=j.useState("");return e.jsxs(T,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e.jsx(v,{label:"Search",render:()=>e.jsx(b,{icon:"search-filled",value:s,onChangeText:t})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(k).filter(n=>n.includes(s)).map(n=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(u,{name:n,color:r,size:40,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(L).filter(n=>n.includes(s)).map(n=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(u,{name:n,color:r,size:100,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Bordered",props:{color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:""}}};var g,y,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Icon.stories-xGbOCy8H.js.map
