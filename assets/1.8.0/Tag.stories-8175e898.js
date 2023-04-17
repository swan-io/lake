import{a as e,j as t}from"./Space-87fd8265.js";import{G as l}from"./Grid-f5d19f01.js";import{K as g}from"./index.module-6e235b1a.js";import{I as c}from"./Icon-341fd06a.js";import{T as o}from"./Tag-4cc7d1b9.js";import{S as u,a as i}from"./_StoriesComponents-9499fdff.js";import"./extends-98964cd2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Svg-440b59f7.js";import"./index-7f28bda4.js";const n=a=>{const p=a.projectEnv==="Live";return e(o,{color:p?"live":"sandbox",children:g(a).with({iconOnly:!0,projectEnv:"Live"},()=>e(c,{name:"live-regular",size:20})).with({iconOnly:!0,projectEnv:"Sandbox"},()=>e(c,{name:"beaker-regular",size:20})).with({projectEnv:"Sandbox"},{projectEnv:"Live"},({projectEnv:d})=>d).exhaustive()})};try{n.displayName="ProjectEnvTag",n.__docgenInfo={description:"",displayName:"ProjectEnvTag",props:{projectEnv:{defaultValue:null,description:"",name:"projectEnv",required:!0,type:{name:"enum",value:[{value:'"Live"'},{value:'"Sandbox"'}]}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const f={title:"Informations/Tag",component:o},r=()=>t(u,{title:"Tag",children:[e(i,{title:"Tag colors",children:t(l,{numColumns:5,verticalSpace:4,children:[e(o,{color:"live",children:"Simple"}),e(o,{color:"sandbox",children:"Sandbox"}),e(o,{color:"negative",onPressRemove:console.log,children:"Dismiss"}),e(o,{color:"warning",label:"Label",children:"O_o"}),e(o,{color:"gray",onPressRemove:console.log,label:"Label",children:"All"})]})}),e(i,{title:"Env tags",children:t(l,{numColumns:5,verticalSpace:4,children:[e(n,{projectEnv:"Live"}),e(n,{projectEnv:"Sandbox"}),e(n,{projectEnv:"Live",iconOnly:!0}),e(n,{projectEnv:"Sandbox",iconOnly:!0})]})})]});var s,v,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <StoryBlock title="Tag">
      <StoryPart title="Tag colors">
        <Grid numColumns={5} verticalSpace={4}>
          <Tag color="live">Simple</Tag>
          <Tag color="sandbox">Sandbox</Tag>

          <Tag color="negative" onPressRemove={console.log}>
            Dismiss
          </Tag>

          <Tag color="warning" label="Label">
            O_o
          </Tag>

          <Tag color="gray" onPressRemove={console.log} label="Label">
            All
          </Tag>
        </Grid>
      </StoryPart>

      <StoryPart title="Env tags">
        <Grid numColumns={5} verticalSpace={4}>
          <ProjectEnvTag projectEnv="Live" />
          <ProjectEnvTag projectEnv="Sandbox" />
          <ProjectEnvTag projectEnv="Live" iconOnly={true} />
          <ProjectEnvTag projectEnv="Sandbox" iconOnly={true} />
        </Grid>
      </StoryPart>
    </StoryBlock>;
}`,...(m=(v=r.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};const O=["All"];export{r as All,O as __namedExportsOrder,f as default};
//# sourceMappingURL=Tag.stories-8175e898.js.map
