import{j as e,s as p,d as y,c as r,B as s,I as a,V as w,L as u,S as g}from"./ScrollView-cZfhk1oA.js";import{T as n}from"./Tag-B_pLibEq.js";import{n as x}from"./function-CLsC78Xx.js";import{S as b,a as l}from"./_StoriesComponents-Betxty6r.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./index-BFz_66qN.js";import"./extends-CF3RwP-h.js";import"./commonStyles-t4XfA7cz.js";const i=o=>{const d=o.projectEnv==="Live";return o.iconOnly===!0?e.jsx(n,{color:d?"live":"sandbox",icon:d?"live-regular":"beaker-regular"}):e.jsx(n,{color:d?"live":"sandbox",children:o.projectEnv})};i.__docgenInfo={description:"",methods:[],displayName:"ProjectEnvTag",props:{projectEnv:{required:!0,tsType:{name:"union",raw:'"Live" | "Sandbox"',elements:[{name:"literal",value:'"Live"'},{name:"literal",value:'"Sandbox"'}]},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const t=p.create({container:{flexWrap:"wrap"},tag:{marginRight:y[12],marginBottom:y[12]},rightsIcon:{marginHorizontal:y[4]},separator:{width:1,alignSelf:"stretch",backgroundColor:r.gray[200],marginHorizontal:y[4]}}),f={title:"Informations/Tag",component:n},c=()=>e.jsxs(b,{title:"Tag",children:[e.jsx(l,{title:"Default",children:e.jsx(s,{direction:"row",style:t.container,children:Object.keys(r).map(o=>e.jsxs(n,{style:t.tag,color:o,children:["Value (",o,")"]},o))})}),e.jsx(l,{title:"Large",children:e.jsx(s,{direction:"row",style:t.container,children:Object.keys(r).map(o=>e.jsxs(n,{size:"large",style:t.tag,color:o,children:["Value (",o,")"]},o))})}),e.jsx(l,{title:"With label",children:e.jsx(s,{direction:"row",style:t.container,children:Object.keys(r).map(o=>e.jsxs(n,{label:"Label",style:t.tag,color:o,children:["Value (",o,")"]},o))})}),e.jsx(l,{title:"With dismiss",children:e.jsx(s,{direction:"row",style:t.container,children:Object.keys(r).map(o=>e.jsxs(n,{onPressRemove:x,style:t.tag,color:o,children:["Value (",o,")"]},o))})}),e.jsx(l,{title:"With icon",children:e.jsx(s,{direction:"row",style:t.container,children:Object.keys(r).map(o=>e.jsxs(n,{style:t.tag,icon:"arrow-down-filled",color:o,children:["Value (",o,")"]},o))})}),e.jsx(l,{title:"With label and dismiss",children:e.jsx(s,{direction:"row",style:t.container,children:Object.keys(r).map(o=>e.jsxs(n,{label:"Label",onPressRemove:x,style:t.tag,color:o,children:["Value (",o,")"]},o))})}),e.jsx(l,{title:"With max width",children:e.jsx(s,{direction:"row",style:t.container,children:Object.keys(r).map(o=>e.jsxs(n,{label:"Label",onPressRemove:x,style:[t.tag,{maxWidth:150}],color:o,children:["Value with long long text and ellipsis (",o,")"]},o))})}),e.jsx(l,{title:"With icon only",children:e.jsx(s,{direction:"row",style:t.container,children:Object.keys(r).map(o=>e.jsx(n,{icon:"arrow-down-filled",style:t.tag,color:o},o))})}),e.jsx(l,{title:"With icon only (large)",children:e.jsx(s,{direction:"row",style:t.container,children:Object.keys(r).map(o=>e.jsx(n,{icon:"arrow-down-filled",style:t.tag,color:o,size:"large"},o))})}),e.jsx(l,{title:"With elements inside",children:e.jsx(s,{direction:"row",children:e.jsx(n,{color:"gray",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{name:"eye-regular",size:16,color:r.swan[500],style:t.rightsIcon}),e.jsx(a,{name:"arrow-swap-regular",size:16,color:r.swan[500],style:t.rightsIcon}),e.jsx(a,{name:"person-add-regular",size:16,color:r.swan[500],style:t.rightsIcon}),e.jsx(a,{name:"settings-regular",size:16,color:r.swan[500],style:t.rightsIcon}),e.jsx(w,{style:t.separator}),e.jsxs(e.Fragment,{children:[e.jsx(a,{name:"payment-regular",size:16,color:r.swan[500],style:t.rightsIcon}),e.jsx(u,{color:r.swan[500],variant:"smallRegular",children:"12"})]})]})})})}),e.jsx(l,{title:"Env tags",children:e.jsxs(s,{direction:"row",style:t.container,children:[e.jsx(i,{projectEnv:"Live"}),e.jsx(g,{width:12,height:12}),e.jsx(i,{projectEnv:"Sandbox"}),e.jsx(g,{width:12,height:12}),e.jsx(i,{projectEnv:"Live",iconOnly:!0}),e.jsx(g,{width:12,height:12}),e.jsx(i,{projectEnv:"Sandbox",iconOnly:!0})]})})]});c.__docgenInfo={description:"",methods:[],displayName:"All"};var h,j,m;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
          maxWidth: 150
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

      <StoryPart title="With icon only (large)">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} icon="arrow-down-filled" style={styles.tag} color={(color as ColorVariants)} size="large"></Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With elements inside">
        <Box direction="row">
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
        </Box>
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
}`,...(m=(j=c.parameters)==null?void 0:j.docs)==null?void 0:m.source}}};const L=["All"];export{c as All,L as __namedExportsOrder,f as default};
//# sourceMappingURL=Tag.stories-BCnQIxzd.js.map
