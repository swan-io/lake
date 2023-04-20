import{a as e,S as x,j as y,c as i,b as c}from"./Space-131d2659.js";import{K as E,B as a}from"./index.module-1db6bb3b.js";import{I as d}from"./Icon-73a40682.js";import{T as r}from"./Tag-d08da38d.js";import{n as p}from"./function-1bad6ac0.js";import{S as P,a as l}from"./_StoriesComponents-4317655e.js";import"./extends-98964cd2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Svg-2acfd8ba.js";import"./index-e53aaaa4.js";const n=t=>{const S=t.projectEnv==="Live";return e(r,{color:S?"live":"sandbox",children:E(t).with({iconOnly:!0,projectEnv:"Live"},()=>e(d,{name:"live-regular",size:20})).with({iconOnly:!0,projectEnv:"Sandbox"},()=>e(d,{name:"beaker-regular",size:20})).with({projectEnv:"Sandbox"},{projectEnv:"Live"},({projectEnv:b})=>b).exhaustive()})};try{n.displayName="ProjectEnvTag",n.__docgenInfo={description:"",displayName:"ProjectEnvTag",props:{projectEnv:{defaultValue:null,description:"",name:"projectEnv",required:!0,type:{name:"enum",value:[{value:'"Live"'},{value:'"Sandbox"'}]}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const o=x.create({container:{flexWrap:"wrap"},tag:{marginRight:12,marginBottom:12}}),C={title:"Informations/Tag",component:r},s=()=>y(P,{title:"Tag",children:[e(l,{title:"Default",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"With label",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{label:"Label",style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"With dismiss",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{onPressRemove:p,style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"With label and dismiss",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{label:"Label",onPressRemove:p,style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"Env tags",children:y(a,{direction:"row",style:o.container,children:[e(n,{projectEnv:"Live"}),e(c,{width:12,height:12}),e(n,{projectEnv:"Sandbox"}),e(c,{width:12,height:12}),e(n,{projectEnv:"Live",iconOnly:!0}),e(c,{width:12,height:12}),e(n,{projectEnv:"Sandbox",iconOnly:!0})]})})]});var m,g,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`StyleSheet.create({
  container: {
    flexWrap: "wrap"
  },
  tag: {
    marginRight: 12,
    marginBottom: 12
  }
})`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,u,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <StoryBlock title="Tag">
      <StoryPart title="Default">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} style={styles.tag} color={(color as ColorVariants)}>
              Value
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With label">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} label="Label" style={styles.tag} color={(color as ColorVariants)}>
              Value
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With dismiss">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} onPressRemove={noop} style={styles.tag} color={(color as ColorVariants)}>
              Value
            </Tag>)}
        </Box>
      </StoryPart>

      <StoryPart title="With label and dismiss">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} label="Label" onPressRemove={noop} style={styles.tag} color={(color as ColorVariants)}>
              Value
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
}`,...(j=(u=s.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const I=["styles","All"];export{s as All,I as __namedExportsOrder,C as default,o as styles};
//# sourceMappingURL=Tag.stories-d32014be.js.map
