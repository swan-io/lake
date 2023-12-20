import{a as t,N as j,I as p,S as x,s as g,j as n,c as i,b as y}from"./Space-wnTUk9_7.js";import{B as a}from"./commonStyles-BqLI9qZ4.js";import{T as r}from"./Tag-uJPGw5EE.js";import{n as d}from"./function-dZk570d0.js";import{S,a as l}from"./_StoriesComponents-Cnmx45dd.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-4g5l5LRQ.js";import"./index-jmm5gWkb.js";import"./index--1aOCiTn.js";import"./Boxed-X5xMwKRs.js";const s=e=>{const v=e.projectEnv==="Live";return t(r,{color:v?"live":"sandbox",children:j(e).with({iconOnly:!0,projectEnv:"Live"},()=>t(p,{name:"live-regular",size:20})).with({iconOnly:!0,projectEnv:"Sandbox"},()=>t(p,{name:"beaker-regular",size:20})).with({projectEnv:"Sandbox"},{projectEnv:"Live"},({projectEnv:b})=>b).exhaustive()})};try{s.displayName="ProjectEnvTag",s.__docgenInfo={description:"",displayName:"ProjectEnvTag",props:{projectEnv:{defaultValue:null,description:"",name:"projectEnv",required:!0,type:{name:"enum",value:[{value:'"Live"'},{value:'"Sandbox"'}]}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const o=x.create({container:{flexWrap:"wrap"},tag:{marginRight:g[12],marginBottom:g[12]}}),_={title:"Informations/Tag",component:r},c=()=>n(S,{title:"Tag",children:[t(l,{title:"Default",children:t(a,{direction:"row",style:o.container,children:Object.keys(i).map(e=>n(r,{style:o.tag,color:e,children:["Value (",e,")"]},e))})}),t(l,{title:"Large",children:t(a,{direction:"row",style:o.container,children:Object.keys(i).map(e=>n(r,{size:"large",style:o.tag,color:e,children:["Value (",e,")"]},e))})}),t(l,{title:"With label",children:t(a,{direction:"row",style:o.container,children:Object.keys(i).map(e=>n(r,{label:"Label",style:o.tag,color:e,children:["Value (",e,")"]},e))})}),t(l,{title:"With dismiss",children:t(a,{direction:"row",style:o.container,children:Object.keys(i).map(e=>n(r,{onPressRemove:d,style:o.tag,color:e,children:["Value (",e,")"]},e))})}),t(l,{title:"With icon",children:t(a,{direction:"row",style:o.container,children:Object.keys(i).map(e=>n(r,{style:o.tag,icon:"arrow-down-filled",color:e,children:["Value (",e,")"]},e))})}),t(l,{title:"With label and dismiss",children:t(a,{direction:"row",style:o.container,children:Object.keys(i).map(e=>n(r,{label:"Label",onPressRemove:d,style:o.tag,color:e,children:["Value (",e,")"]},e))})}),t(l,{title:"With max width",children:t(a,{direction:"row",style:o.container,children:Object.keys(i).map(e=>n(r,{label:"Label",onPressRemove:d,style:[o.tag,{maxWidth:100}],color:e,children:["Value with long long text and ellipsis (",e,")"]},e))})}),t(l,{title:"Env tags",children:n(a,{direction:"row",style:o.container,children:[t(s,{projectEnv:"Live"}),t(y,{width:12,height:12}),t(s,{projectEnv:"Sandbox"}),t(y,{width:12,height:12}),t(s,{projectEnv:"Live",iconOnly:!0}),t(y,{width:12,height:12}),t(s,{projectEnv:"Sandbox",iconOnly:!0})]})})]});var h,m,u;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(u=(m=c.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const C=["All"];export{c as All,C as __namedExportsOrder,_ as default};
//# sourceMappingURL=Tag.stories-PDDDNLIq.js.map
