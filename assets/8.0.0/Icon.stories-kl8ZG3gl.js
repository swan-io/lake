import{s as w,j as e,B as a,I as x,c as h,S as c,L as m,D as j,E as k}from"./Space-BWfEUChJ.js";import{r as L}from"./index-CBqU2yxZ.js";import{B as u}from"./BorderedIcon-CwINKfhr.js";import{L as v}from"./LakeLabel-CWBKzEmw.js";import{L as b}from"./LakeTextInput-BBpa1KVu.js";import{S as T,a as d}from"./_StoriesComponents-DYQz1sEa.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./v4-D8aEg3BZ.js";import"./Pressable-BWpnb3-9.js";import"./Fill-BPcGJFMF.js";import"./LakeSelect-CEx3Mz4E.js";import"./useDisclosure-CS9t68_Y.js";import"./a11y-DXvpDVrG.js";import"./Popover-DXf9ahkM.js";import"./useResponsive-CyaDkPhb.js";import"./function-B_pffWFs.js";import"./BottomPanel-Cd6wydjY.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-AB3ajLl_.js";import"./FocusTrap-C3KiEsBv.js";import"./array-rjEBP2Ry.js";import"./Suspendable-BCxE0MfD.js";import"./index-mKv4xz1S.js";import"./TransitionView-DBPRGHtc.js";import"./index-E0U1iK8S.js";import"./index-BzEbCcHK.js";import"./index-uAdUn8KT.js";const o=w.create({container:{flexWrap:"wrap"},icon:{flexBasis:"0%",flexGrow:1,minWidth:250,paddingVertical:16}}),oe={title:"Informations/Icon",component:u},p=r=>Object.keys(r),i=()=>{const[r,s]=L.useState("");return e.jsxs(T,{title:"Icon",children:[e.jsx(v,{label:"Search",render:()=>e.jsx(b,{icon:"search-filled",value:r,onChangeText:s})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(j).filter(n=>n.includes(r)).map(n=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(x,{name:n,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(k).filter(n=>n.includes(r)).map(n=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(x,{name:n,size:30,color:h.gray[800]}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:n})]},n))})})]})},l=({color:r})=>{const[s,n]=L.useState("");return e.jsxs(T,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e.jsx(v,{label:"Search",render:()=>e.jsx(b,{icon:"search-filled",value:s,onChangeText:n})}),e.jsx(d,{title:"Fluent icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(j).filter(t=>t.includes(s)).map(t=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(u,{name:t,color:r,size:40,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})}),e.jsx(d,{title:"Custom icons",children:e.jsx(a,{direction:"row",alignItems:"center",style:o.container,children:p(k).filter(t=>t.includes(s)).map(t=>e.jsxs(a,{alignItems:"center",style:o.icon,children:[e.jsx(u,{name:t,color:r,size:100,padding:8}),e.jsx(c,{height:8}),e.jsx(m,{align:"center",numberOfLines:1,children:t})]},t))})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Bordered",props:{color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:""}}};var g,y,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const se=["Default","Bordered"];export{l as Bordered,i as Default,se as __namedExportsOrder,oe as default};
//# sourceMappingURL=Icon.stories-kl8ZG3gl.js.map