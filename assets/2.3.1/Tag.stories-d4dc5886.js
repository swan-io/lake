import{a as e,S as b,d as y,j as d,c as i,b as c}from"./Space-a702eced.js";import{Q as S,B as a}from"./index-ac9179ac.js";import{I as p}from"./Icon-deaf2458.js";import{T as r}from"./Tag-8d38127b.js";import{n as m}from"./function-fbf93c31.js";import{S as x,a as l}from"./_StoriesComponents-97d37cc1.js";import"./extends-98964cd2.js";import"./index-ebeaab24.js";import"./Svg-fe3a1521.js";import"./index-a55ccc10.js";import"./Boxed-dafb0729.js";const n=t=>{const u=t.projectEnv==="Live";return e(r,{color:u?"live":"sandbox",children:S(t).with({iconOnly:!0,projectEnv:"Live"},()=>e(p,{name:"live-regular",size:20})).with({iconOnly:!0,projectEnv:"Sandbox"},()=>e(p,{name:"beaker-regular",size:20})).with({projectEnv:"Sandbox"},{projectEnv:"Live"},({projectEnv:j})=>j).exhaustive()})};try{n.displayName="ProjectEnvTag",n.__docgenInfo={description:"",displayName:"ProjectEnvTag",props:{projectEnv:{defaultValue:null,description:"",name:"projectEnv",required:!0,type:{name:"enum",value:[{value:'"Live"'},{value:'"Sandbox"'}]}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const o=b.create({container:{flexWrap:"wrap"},tag:{marginRight:y[12],marginBottom:y[12]}}),W={title:"Informations/Tag",component:r},s=()=>d(x,{title:"Tag",children:[e(l,{title:"Default",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"With label",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{label:"Label",style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"With dismiss",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{onPressRemove:m,style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"With label and dismiss",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{label:"Label",onPressRemove:m,style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"Env tags",children:d(a,{direction:"row",style:o.container,children:[e(n,{projectEnv:"Live"}),e(c,{width:12,height:12}),e(n,{projectEnv:"Sandbox"}),e(c,{width:12,height:12}),e(n,{projectEnv:"Live",iconOnly:!0}),e(c,{width:12,height:12}),e(n,{projectEnv:"Sandbox",iconOnly:!0})]})})]});var h,g,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const R=["All"];export{s as All,R as __namedExportsOrder,W as default};
//# sourceMappingURL=Tag.stories-d4dc5886.js.map
