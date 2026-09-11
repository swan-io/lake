import{i as e}from"./preload-helper-CCSz8wUY.js";import{$ as t,Ct as n,Pt as r,Q as i,Tt as a,Z as o,_t as s,g as c,h as l,i as u,mt as d,o as f,r as p,s as m,zt as h}from"./ScrollView-Bti_909s.js";import{n as g,r as _,t as v}from"./_StoriesComponents-zlbAi_Kf.js";import{n as y,t as b}from"./Tag-B1__3j9Y.js";import{n as x,t as S}from"./function-DtMgGsDc.js";var C,w,T=e((()=>{y(),C=t(),w=e=>{let t=e.projectEnv===`Live`;return e.iconOnly===!0?(0,C.jsx)(b,{color:t?`live`:`sandbox`,icon:t?`live-regular`:`beaker-regular`}):(0,C.jsx)(b,{color:t?`live`:`sandbox`,children:e.projectEnv})},w.__docgenInfo={description:``,methods:[],displayName:`ProjectEnvTag`,props:{projectEnv:{required:!0,tsType:{name:`union`,raw:`"Live" | "Sandbox"`,elements:[{name:`literal`,value:`"Live"`},{name:`literal`,value:`"Sandbox"`}]},description:``},iconOnly:{required:!1,tsType:{name:`boolean`},description:``}}}})),E,D,O,k,A;e((()=>{a(),c(),i(),m(),T(),u(),y(),s(),S(),_(),E=t(),D=h.create({container:{flexWrap:`wrap`},tag:{marginRight:n[12],marginBottom:n[12]},limited:{maxWidth:150},rightsIcon:{marginHorizontal:n[4]},separator:{width:1,alignSelf:`stretch`,backgroundColor:d.gray[200],marginHorizontal:n[4]}}),O={title:`Informations/Tag`,component:b},k=()=>(0,E.jsxs)(v,{title:`Tag`,children:[(0,E.jsx)(g,{title:`Default`,children:(0,E.jsx)(l,{direction:`row`,style:D.container,children:Object.keys(d).map(e=>(0,E.jsxs)(b,{style:D.tag,color:e,children:[`Value (`,e,`)`]},e))})}),(0,E.jsx)(g,{title:`Large`,children:(0,E.jsx)(l,{direction:`row`,style:D.container,children:Object.keys(d).map(e=>(0,E.jsxs)(b,{size:`large`,style:D.tag,color:e,children:[`Value (`,e,`)`]},e))})}),(0,E.jsx)(g,{title:`With label`,children:(0,E.jsx)(l,{direction:`row`,style:D.container,children:Object.keys(d).map(e=>(0,E.jsxs)(b,{label:`Label`,style:D.tag,color:e,children:[`Value (`,e,`)`]},e))})}),(0,E.jsx)(g,{title:`With dismiss`,children:(0,E.jsx)(l,{direction:`row`,style:D.container,children:Object.keys(d).map(e=>(0,E.jsxs)(b,{onPressRemove:x,style:D.tag,color:e,children:[`Value (`,e,`)`]},e))})}),(0,E.jsx)(g,{title:`With icon`,children:(0,E.jsx)(l,{direction:`row`,style:D.container,children:Object.keys(d).map(e=>(0,E.jsxs)(b,{style:D.tag,icon:`arrow-down-filled`,color:e,children:[`Value (`,e,`)`]},e))})}),(0,E.jsx)(g,{title:`With label and dismiss`,children:(0,E.jsx)(l,{direction:`row`,style:D.container,children:Object.keys(d).map(e=>(0,E.jsxs)(b,{label:`Label`,onPressRemove:x,style:D.tag,color:e,children:[`Value (`,e,`)`]},e))})}),(0,E.jsx)(g,{title:`With max width`,children:(0,E.jsx)(l,{direction:`row`,style:D.container,children:Object.keys(d).map(e=>(0,E.jsxs)(b,{label:`Label`,onPressRemove:x,style:[D.tag,D.limited],color:e,children:[`Value with long long text and ellipsis (`,e,`)`]},e))})}),(0,E.jsx)(g,{title:`With icon only`,children:(0,E.jsx)(l,{direction:`row`,style:D.container,children:Object.keys(d).map(e=>(0,E.jsx)(b,{icon:`arrow-down-filled`,style:D.tag,color:e},e))})}),(0,E.jsx)(g,{title:`With icon only (large)`,children:(0,E.jsx)(l,{direction:`row`,style:D.container,children:Object.keys(d).map(e=>(0,E.jsx)(b,{icon:`arrow-down-filled`,style:D.tag,color:e,size:`large`},e))})}),(0,E.jsx)(g,{title:`With elements inside`,children:(0,E.jsx)(l,{direction:`row`,children:(0,E.jsxs)(b,{color:`gray`,children:[(0,E.jsx)(o,{name:`eye-regular`,size:16,color:d.swan[500],style:D.rightsIcon}),(0,E.jsx)(o,{name:`arrow-swap-regular`,size:16,color:d.swan[500],style:D.rightsIcon}),(0,E.jsx)(o,{name:`person-add-regular`,size:16,color:d.swan[500],style:D.rightsIcon}),(0,E.jsx)(o,{name:`settings-regular`,size:16,color:d.swan[500],style:D.rightsIcon}),(0,E.jsx)(r,{style:D.separator}),(0,E.jsx)(o,{name:`payment-regular`,size:16,color:d.swan[500],style:D.rightsIcon}),(0,E.jsx)(f,{color:d.swan[500],variant:`smallRegular`,children:`12`})]})})}),(0,E.jsx)(g,{title:`Env tags`,children:(0,E.jsxs)(l,{direction:`row`,style:D.container,children:[(0,E.jsx)(w,{projectEnv:`Live`}),(0,E.jsx)(p,{width:12,height:12}),(0,E.jsx)(w,{projectEnv:`Sandbox`}),(0,E.jsx)(p,{width:12,height:12}),(0,E.jsx)(w,{projectEnv:`Live`,iconOnly:!0}),(0,E.jsx)(p,{width:12,height:12}),(0,E.jsx)(w,{projectEnv:`Sandbox`,iconOnly:!0})]})})]}),k.__docgenInfo={description:``,methods:[],displayName:`All`},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Tag">
      <StoryPart title="Default">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} style={styles.tag} color={color as ColorVariants}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="Large">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} size="large" style={styles.tag} color={color as ColorVariants}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With label">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} label="Label" style={styles.tag} color={color as ColorVariants}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With dismiss">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} onPressRemove={noop} style={styles.tag} color={color as ColorVariants}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With icon">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} style={styles.tag} icon="arrow-down-filled" color={color as ColorVariants}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With label and dismiss">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} label="Label" onPressRemove={noop} style={styles.tag} color={color as ColorVariants}>
              Value ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With max width">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} label="Label" onPressRemove={noop} style={[styles.tag, styles.limited]} color={color as ColorVariants}>
              Value with long long text and ellipsis ({color})
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With icon only">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} icon="arrow-down-filled" style={styles.tag} color={color as ColorVariants} />)}
        </Box>
      </StoryPart>

      <StoryPart title="With icon only (large)">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} icon="arrow-down-filled" style={styles.tag} color={color as ColorVariants} size="large" />)}
        </Box>
      </StoryPart>

      <StoryPart title="With elements inside">
        <Box direction="row">
          <Tag color="gray">
            <Icon name="eye-regular" size={16} color={colors.swan[500]} style={styles.rightsIcon} />

            <Icon name="arrow-swap-regular" size={16} color={colors.swan[500]} style={styles.rightsIcon} />

            <Icon name="person-add-regular" size={16} color={colors.swan[500]} style={styles.rightsIcon} />

            <Icon name="settings-regular" size={16} color={colors.swan[500]} style={styles.rightsIcon} />

            <View style={styles.separator} />

            <Icon name="payment-regular" size={16} color={colors.swan[500]} style={styles.rightsIcon} />

            <LakeText color={colors.swan[500]} variant="smallRegular">
              12
            </LakeText>
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
}`,...k.parameters?.docs?.source}}},A=[`All`]}))();export{k as All,A as __namedExportsOrder,O as default};
//# sourceMappingURL=Tag.stories-DnGkJcI9.js.map