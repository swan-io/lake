import{a as e,N as x,I as i,s as j,e as y,c as n,j as r,F as m,V as S,L as P,S as g}from"./Space-bXOokcxo.js";import{B as s}from"./commonStyles-Icxc0hKT.js";import{T as a}from"./Tag-n4qSzSl6.js";import{n as h}from"./function-dZk570d0.js";import{S as T,a as l}from"./_StoriesComponents-GjAcS3CK.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-4g5l5LRQ.js";import"./index-jmm5gWkb.js";import"./index-WbfcBGzV.js";import"./Boxed-X5xMwKRs.js";const c=t=>{const v=t.projectEnv==="Live";return e(a,{color:v?"live":"sandbox",children:x(t).with({iconOnly:!0,projectEnv:"Live"},()=>e(i,{name:"live-regular",size:20})).with({iconOnly:!0,projectEnv:"Sandbox"},()=>e(i,{name:"beaker-regular",size:20})).with({projectEnv:"Sandbox"},{projectEnv:"Live"},({projectEnv:b})=>b).exhaustive()})};try{c.displayName="ProjectEnvTag",c.__docgenInfo={description:"",displayName:"ProjectEnvTag",props:{projectEnv:{defaultValue:null,description:"",name:"projectEnv",required:!0,type:{name:"enum",value:[{value:'"Live"'},{value:'"Sandbox"'}]}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const o=j.create({container:{flexWrap:"wrap"},tag:{marginRight:y[12],marginBottom:y[12]},rightsIcon:{marginHorizontal:y[4]},separator:{width:1,alignSelf:"stretch",backgroundColor:n.gray[200],height:28,marginHorizontal:y[4]},permissionsContainer:{padding:4}}),C={title:"Informations/Tag",component:a},d=()=>r(T,{title:"Tag",children:[e(l,{title:"Default",children:e(s,{direction:"row",style:o.container,children:Object.keys(n).map(t=>r(a,{style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e(l,{title:"Large",children:e(s,{direction:"row",style:o.container,children:Object.keys(n).map(t=>r(a,{size:"large",style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e(l,{title:"With label",children:e(s,{direction:"row",style:o.container,children:Object.keys(n).map(t=>r(a,{label:"Label",style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e(l,{title:"With dismiss",children:e(s,{direction:"row",style:o.container,children:Object.keys(n).map(t=>r(a,{onPressRemove:h,style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e(l,{title:"With icon",children:e(s,{direction:"row",style:o.container,children:Object.keys(n).map(t=>r(a,{style:o.tag,icon:"arrow-down-filled",color:t,children:["Value (",t,")"]},t))})}),e(l,{title:"With label and dismiss",children:e(s,{direction:"row",style:o.container,children:Object.keys(n).map(t=>r(a,{label:"Label",onPressRemove:h,style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e(l,{title:"With max width",children:e(s,{direction:"row",style:o.container,children:Object.keys(n).map(t=>r(a,{label:"Label",onPressRemove:h,style:[o.tag,{maxWidth:100}],color:t,children:["Value with long long text and ellipsis (",t,")"]},t))})}),e(l,{title:"With icon only",children:e(s,{direction:"row",style:o.container,children:Object.keys(n).map(t=>e(a,{icon:"arrow-down-filled",style:o.tag,color:t},t))})}),e(l,{title:"With elements inside",children:e(a,{color:"gray",children:r(m,{children:[e(i,{name:"eye-regular",size:16,color:n.swan[500],style:o.rightsIcon}),e(i,{name:"arrow-swap-regular",size:16,color:n.swan[500],style:o.rightsIcon}),e(i,{name:"person-add-regular",size:16,color:n.swan[500],style:o.rightsIcon}),e(i,{name:"settings-regular",size:16,color:n.swan[500],style:o.rightsIcon}),e(S,{style:o.separator}),r(m,{children:[e(i,{name:"payment-regular",size:16,color:n.swan[500],style:o.rightsIcon}),e(P,{color:n.swan[500],variant:"smallRegular",children:"12"})]})]})})}),e(l,{title:"Env tags",children:r(s,{direction:"row",style:o.container,children:[e(c,{projectEnv:"Live"}),e(g,{width:12,height:12}),e(c,{projectEnv:"Sandbox"}),e(g,{width:12,height:12}),e(c,{projectEnv:"Live",iconOnly:!0}),e(g,{width:12,height:12}),e(c,{projectEnv:"Sandbox",iconOnly:!0})]})})]});var p,w,u;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(u=(w=d.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};const R=["All"];export{d as All,R as __namedExportsOrder,C as default};
//# sourceMappingURL=Tag.stories-wEGOYRd4.js.map
