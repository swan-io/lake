import{a as e,S as b,s as y,j as d,c as i,b as c}from"./Space-fb680d8f.js";import{K as S,B as a}from"./index.module-89595a06.js";import{I as p}from"./Icon-6ed2878b.js";import{T as r}from"./Tag-4ba5877e.js";import{n as m}from"./function-624a6799.js";import{S as x,a as l}from"./_StoriesComponents-cffce164.js";import"./extends-98964cd2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Svg-c89cbc0b.js";import"./index-75b38219.js";import"./Boxed-aef12ad0.js";const n=t=>{const u=t.projectEnv==="Live";return e(r,{color:u?"live":"sandbox",children:S(t).with({iconOnly:!0,projectEnv:"Live"},()=>e(p,{name:"live-regular",size:20})).with({iconOnly:!0,projectEnv:"Sandbox"},()=>e(p,{name:"beaker-regular",size:20})).with({projectEnv:"Sandbox"},{projectEnv:"Live"},({projectEnv:j})=>j).exhaustive()})};try{n.displayName="ProjectEnvTag",n.__docgenInfo={description:"",displayName:"ProjectEnvTag",props:{projectEnv:{defaultValue:null,description:"",name:"projectEnv",required:!0,type:{name:"enum",value:[{value:'"Live"'},{value:'"Sandbox"'}]}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const o=b.create({container:{flexWrap:"wrap"},tag:{marginRight:y[12],marginBottom:y[12]}}),R={title:"Informations/Tag",component:r},s=()=>d(x,{title:"Tag",children:[e(l,{title:"Default",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"With label",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{label:"Label",style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"With dismiss",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{onPressRemove:m,style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"With label and dismiss",children:e(a,{direction:"row",style:o.container,children:Object.keys(i).map(t=>e(r,{label:"Label",onPressRemove:m,style:o.tag,color:t,children:"Value"},t))})}),e(l,{title:"Env tags",children:d(a,{direction:"row",style:o.container,children:[e(n,{projectEnv:"Live"}),e(c,{width:12,height:12}),e(n,{projectEnv:"Sandbox"}),e(c,{width:12,height:12}),e(n,{projectEnv:"Live",iconOnly:!0}),e(c,{width:12,height:12}),e(n,{projectEnv:"Sandbox",iconOnly:!0})]})})]});var h,g,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const C=["All"];export{s as All,C as __namedExportsOrder,R as default};
//# sourceMappingURL=Tag.stories-88700744.js.map
