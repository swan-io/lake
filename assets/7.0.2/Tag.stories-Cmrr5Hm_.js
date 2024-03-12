import{j as e,N as w,I as l,s as u,b as y,c as n,B as a,V as b,L as v,S as d}from"./Space-Bfex_hJx.js";import{T as r}from"./Tag-BaCsPH4E.js";import{n as g}from"./function-CXiq0wkk.js";import{S,a as s}from"./_StoriesComponents-BGHZFReg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./index-D1EpuBSR.js";import"./commonStyles-t4XfA7cz.js";const i=t=>{const j=t.projectEnv==="Live";return e.jsx(r,{color:j?"live":"sandbox",children:w(t).with({iconOnly:!0,projectEnv:"Live"},()=>e.jsx(l,{name:"live-regular",size:20})).with({iconOnly:!0,projectEnv:"Sandbox"},()=>e.jsx(l,{name:"beaker-regular",size:20})).with({projectEnv:"Sandbox"},{projectEnv:"Live"},({projectEnv:p})=>p).exhaustive()})};i.__docgenInfo={description:"",methods:[],displayName:"ProjectEnvTag",props:{projectEnv:{required:!0,tsType:{name:"union",raw:'"Live" | "Sandbox"',elements:[{name:"literal",value:'"Live"'},{name:"literal",value:'"Sandbox"'}]},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const o=u.create({container:{flexWrap:"wrap"},tag:{marginRight:y[12],marginBottom:y[12]},rightsIcon:{marginHorizontal:y[4]},separator:{width:1,alignSelf:"stretch",backgroundColor:n.gray[200],height:28,marginHorizontal:y[4]},permissionsContainer:{padding:4}}),W={title:"Informations/Tag",component:r},c=()=>e.jsxs(S,{title:"Tag",children:[e.jsx(s,{title:"Default",children:e.jsx(a,{direction:"row",style:o.container,children:Object.keys(n).map(t=>e.jsxs(r,{style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e.jsx(s,{title:"Large",children:e.jsx(a,{direction:"row",style:o.container,children:Object.keys(n).map(t=>e.jsxs(r,{size:"large",style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e.jsx(s,{title:"With label",children:e.jsx(a,{direction:"row",style:o.container,children:Object.keys(n).map(t=>e.jsxs(r,{label:"Label",style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e.jsx(s,{title:"With dismiss",children:e.jsx(a,{direction:"row",style:o.container,children:Object.keys(n).map(t=>e.jsxs(r,{onPressRemove:g,style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e.jsx(s,{title:"With icon",children:e.jsx(a,{direction:"row",style:o.container,children:Object.keys(n).map(t=>e.jsxs(r,{style:o.tag,icon:"arrow-down-filled",color:t,children:["Value (",t,")"]},t))})}),e.jsx(s,{title:"With label and dismiss",children:e.jsx(a,{direction:"row",style:o.container,children:Object.keys(n).map(t=>e.jsxs(r,{label:"Label",onPressRemove:g,style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e.jsx(s,{title:"With max width",children:e.jsx(a,{direction:"row",style:o.container,children:Object.keys(n).map(t=>e.jsxs(r,{label:"Label",onPressRemove:g,style:[o.tag,{maxWidth:100}],color:t,children:["Value with long long text and ellipsis (",t,")"]},t))})}),e.jsx(s,{title:"With icon only",children:e.jsx(a,{direction:"row",style:o.container,children:Object.keys(n).map(t=>e.jsx(r,{icon:"arrow-down-filled",style:o.tag,color:t},t))})}),e.jsx(s,{title:"With elements inside",children:e.jsx(r,{color:"gray",children:e.jsxs(e.Fragment,{children:[e.jsx(l,{name:"eye-regular",size:16,color:n.swan[500],style:o.rightsIcon}),e.jsx(l,{name:"arrow-swap-regular",size:16,color:n.swan[500],style:o.rightsIcon}),e.jsx(l,{name:"person-add-regular",size:16,color:n.swan[500],style:o.rightsIcon}),e.jsx(l,{name:"settings-regular",size:16,color:n.swan[500],style:o.rightsIcon}),e.jsx(b,{style:o.separator}),e.jsxs(e.Fragment,{children:[e.jsx(l,{name:"payment-regular",size:16,color:n.swan[500],style:o.rightsIcon}),e.jsx(v,{color:n.swan[500],variant:"smallRegular",children:"12"})]})]})})}),e.jsx(s,{title:"Env tags",children:e.jsxs(a,{direction:"row",style:o.container,children:[e.jsx(i,{projectEnv:"Live"}),e.jsx(d,{width:12,height:12}),e.jsx(i,{projectEnv:"Sandbox"}),e.jsx(d,{width:12,height:12}),e.jsx(i,{projectEnv:"Live",iconOnly:!0}),e.jsx(d,{width:12,height:12}),e.jsx(i,{projectEnv:"Sandbox",iconOnly:!0})]})})]});c.__docgenInfo={description:"",methods:[],displayName:"All"};var h,x,m;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <StoryBlock title="Tag">
      <StoryPart title="Default">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} style={styles.tag} color={(color as ColorVariants)}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="Large">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} size="large" style={styles.tag} color={(color as ColorVariants)}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With label">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} label="Label" style={styles.tag} color={(color as ColorVariants)}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With dismiss">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} onPressRemove={noop} style={styles.tag} color={(color as ColorVariants)}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With icon">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} style={styles.tag} icon="arrow-down-filled" color={(color as ColorVariants)}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With label and dismiss">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} label="Label" onPressRemove={noop} style={styles.tag} color={(color as ColorVariants)}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With max width">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} label="Label" onPressRemove={noop} style={[styles.tag, {
          maxWidth: 100
        }]} color={(color as ColorVariants)}>
              Value with long long text and ellipsis ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With icon only">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} icon="arrow-down-filled" style={styles.tag} color={(color as ColorVariants)}></Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With elements inside">
        <Tag color="gray">
          <>
            <Icon name="eye-regular" size={16} color={colors.swan[500]} style={styles.rightsIcon} />

            <Icon name="arrow-swap-regular" size={16} color={colors.swan[500]} style={styles.rightsIcon} />

            <Icon name="person-add-regular" size={16} color={colors.swan[500]} style={styles.rightsIcon} />

            <Icon name="settings-regular" size={16} color={colors.swan[500]} style={styles.rightsIcon} />

            <View style={styles.separator} />

            <>
              <Icon name="payment-regular" size={16} color={colors.swan[500]} style={styles.rightsIcon} />

              <LakeText color={colors.swan[500]} variant="smallRegular">
                12
              </LakeText>
            </>
          </>
        </Tag>
      </StoryPart>

      <StoryPart title="Env tags">
        <Box direction="row" style={styles.container}>
          <ProjectEnvTag projectEnv="Live" />
          <Space width={12} height={12} />
          <ProjectEnvTag projectEnv="Sandbox" />
          <Space width={12} height={12} />
          <ProjectEnvTag projectEnv="Live" iconOnly={true} />
          <Space width={12} height={12} />
          <ProjectEnvTag projectEnv="Sandbox" iconOnly={true} />
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(m=(x=c.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const z=["All"];export{c as All,z as __namedExportsOrder,W as default};
//# sourceMappingURL=Tag.stories-Cmrr5Hm_.js.map
