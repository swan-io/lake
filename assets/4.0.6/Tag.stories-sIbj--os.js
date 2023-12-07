import{a as t,N as b,I as d,S,s as p,j as r,c as s,b as y}from"./Space-bJ_OnPZb.js";import{B as l}from"./commonStyles-6WsjpeEH.js";import{T as n}from"./Tag-Wl9PNs3F.js";import{n as m}from"./function-sfCq9YxC.js";import{S as x,a as i}from"./_StoriesComponents-QEQ49ik7.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-4g5l5LRQ.js";import"./index-jmm5gWkb.js";import"./index-8S3Z-QJf.js";import"./Boxed-cdFaaAUo.js";const a=e=>{const u=e.projectEnv==="Live";return t(n,{color:u?"live":"sandbox",children:b(e).with({iconOnly:!0,projectEnv:"Live"},()=>t(d,{name:"live-regular",size:20})).with({iconOnly:!0,projectEnv:"Sandbox"},()=>t(d,{name:"beaker-regular",size:20})).with({projectEnv:"Sandbox"},{projectEnv:"Live"},({projectEnv:j})=>j).exhaustive()})};try{a.displayName="ProjectEnvTag",a.__docgenInfo={description:"",displayName:"ProjectEnvTag",props:{projectEnv:{defaultValue:null,description:"",name:"projectEnv",required:!0,type:{name:"enum",value:[{value:'"Live"'},{value:'"Sandbox"'}]}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const o=S.create({container:{flexWrap:"wrap"},tag:{marginRight:p[12],marginBottom:p[12]}}),W={title:"Informations/Tag",component:n},c=()=>r(x,{title:"Tag",children:[t(i,{title:"Default",children:t(l,{direction:"row",style:o.container,children:Object.keys(s).map(e=>r(n,{style:o.tag,color:e,children:["Value (",e,")"]},e))})}),t(i,{title:"With label",children:t(l,{direction:"row",style:o.container,children:Object.keys(s).map(e=>r(n,{label:"Label",style:o.tag,color:e,children:["Value (",e,")"]},e))})}),t(i,{title:"With dismiss",children:t(l,{direction:"row",style:o.container,children:Object.keys(s).map(e=>r(n,{onPressRemove:m,style:o.tag,color:e,children:["Value (",e,")"]},e))})}),t(i,{title:"With label and dismiss",children:t(l,{direction:"row",style:o.container,children:Object.keys(s).map(e=>r(n,{label:"Label",onPressRemove:m,style:o.tag,color:e,children:["Value (",e,")"]},e))})}),t(i,{title:"Env tags",children:r(l,{direction:"row",style:o.container,children:[t(a,{projectEnv:"Live"}),t(y,{width:12,height:12}),t(a,{projectEnv:"Sandbox"}),t(y,{width:12,height:12}),t(a,{projectEnv:"Live",iconOnly:!0}),t(y,{width:12,height:12}),t(a,{projectEnv:"Sandbox",iconOnly:!0})]})})]});var h,g,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <StoryBlock title="Tag">
      <StoryPart title="Default">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} style={styles.tag} color={(color as ColorVariants)}>
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

      <StoryPart title="With label and dismiss">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} label="Label" onPressRemove={noop} style={styles.tag} color={(color as ColorVariants)}>
              Value ({color})
            </Tag>)}
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
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const R=["All"];export{c as All,R as __namedExportsOrder,W as default};
//# sourceMappingURL=Tag.stories-sIbj--os.js.map
