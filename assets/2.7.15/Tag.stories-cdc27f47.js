import{j as e,N as x,I as g,S as E,f as h,a as n,c as s,b as p}from"./Space-f85095f8.js";import{B as l}from"./Box-f4fbfbba.js";import{T as r}from"./Tag-8a96fdf5.js";import{n as v}from"./function-2aea345a.js";import{S as P,a as c}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-b9a8c83f.js";import"./index-75f16835.js";import"./Boxed-885d7854.js";const a=i=>{const d=i.projectEnv==="Live";return e(r,{color:d?"live":"sandbox",children:x(i).with({iconOnly:!0,projectEnv:"Live"},()=>e(g,{name:"live-regular",size:20})).with({iconOnly:!0,projectEnv:"Sandbox"},()=>e(g,{name:"beaker-regular",size:20})).with({projectEnv:"Sandbox"},{projectEnv:"Live"},({projectEnv:m})=>m).exhaustive()})};try{a.displayName="ProjectEnvTag",a.__docgenInfo={description:"",displayName:"ProjectEnvTag",props:{projectEnv:{defaultValue:null,description:"",name:"projectEnv",required:!0,type:{name:"enum",value:[{value:'"Live"'},{value:'"Sandbox"'}]}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const o=E.create({container:{flexWrap:"wrap"},tag:{marginRight:h[12],marginBottom:h[12]}}),W={title:"Informations/Tag",component:r},y=({iconSize:i,size:d,color:m,icon:b})=>n(P,{title:"Tag",children:[e(c,{title:"Default",children:e(l,{direction:"row",style:o.container,children:Object.keys(s).map(t=>n(r,{style:o.tag,color:t,size:d,icon:b,iconSize:i,children:["Value (",t,")"]},t))})}),e(c,{title:"With label",children:e(l,{direction:"row",style:o.container,children:Object.keys(s).map(t=>n(r,{label:"Label",style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e(c,{title:"With dismiss",children:e(l,{direction:"row",style:o.container,children:Object.keys(s).map(t=>n(r,{onPressRemove:v,style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e(c,{title:"With label and dismiss",children:e(l,{direction:"row",style:o.container,children:Object.keys(s).map(t=>n(r,{label:"Label",onPressRemove:v,style:o.tag,color:t,children:["Value (",t,")"]},t))})}),e(c,{title:"Env tags",children:n(l,{direction:"row",style:o.container,children:[e(a,{projectEnv:"Live"}),e(p,{width:12,height:12}),e(a,{projectEnv:"Sandbox"}),e(p,{width:12,height:12}),e(a,{projectEnv:"Live",iconOnly:!0}),e(p,{width:12,height:12}),e(a,{projectEnv:"Sandbox",iconOnly:!0})]})})]});var u,S,j;y.parameters={...y.parameters,docs:{...(u=y.parameters)==null?void 0:u.docs,source:{originalSource:`({
  iconSize,
  size,
  color,
  icon
}: StoryArgs) => {
  return <StoryBlock title="Tag">
      <StoryPart title="Default">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => <Tag key={color} style={styles.tag} color={(color as ColorVariants)} size={size} icon={icon} iconSize={iconSize}>
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
}`,...(j=(S=y.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const R=["All"];export{y as All,R as __namedExportsOrder,W as default};
//# sourceMappingURL=Tag.stories-cdc27f47.js.map
