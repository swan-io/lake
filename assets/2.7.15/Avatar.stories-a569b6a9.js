import{S as u,j as t,V as y,c as n,T as v,I as w,a as l,b as o}from"./Space-f85095f8.js";import{d as z}from"./index-356e4a49.js";import{r as x}from"./index-b9a8c83f.js";import{c as f}from"./commonStyles-d52fedae.js";import{t as c}from"./typography-6ad07e3d.js";import{B as d}from"./Box-f4fbfbba.js";import{S as B,a as A,c as C}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./colors-298625c7.js";const p=u.create({text:{...c.bodyLarge,fontWeight:c.fontWeights.demi,textAlign:"center",userSelect:"none"},container:{borderWidth:1}}),g=e=>{switch((e.charCodeAt(0)+e.charCodeAt(1))%3){case 2:return"darkPink";case 1:return"live";default:return"shakespear"}},i=x.memo(({initials:e="",size:r})=>{const a=g(e);return t(y,{role:"img",style:[f.center,p.container,{backgroundColor:n[a][100],borderColor:n[a][200],height:r,width:r,borderRadius:r/2}],children:e!==""?t(v,{style:[p.text,{color:n[a][500],fontSize:r*.4}],children:e}):t(w,{name:"person-filled",size:r-8,color:n[a][50]})})});try{i.displayName="Avatar",i.__docgenInfo={description:"",displayName:"Avatar",props:{initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}}}catch{}const E={title:"Informations/Avatar",component:i},s=({initials:e,size:r})=>l(B,{title:"Avatar",children:[t(A,{title:"Sizes",children:l(d,{direction:"row",children:[t(i,{initials:e,size:r}),t(o,{width:16}),t(i,{initials:"AA",size:48}),t(o,{width:16}),t(i,{initials:"AA",size:64})]})}),t(A,{title:"Colors",children:l(d,{direction:"row",children:[t(i,{initials:"AA",size:32}),t(o,{width:16}),t(i,{initials:"BA",size:32}),t(o,{width:16}),t(i,{initials:"CA",size:32})]})}),t(C,{title:"Code example",children:z`
          <Box direction="row">
            <Avatar initials="AA" size={32} />
            <Space width={16} />
            <Avatar initials="BA" size={32} />
            <Space width={16} />
            <Avatar initials="CA" size={32} />
          </Box>`})]});var m,h,S;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`({
  initials,
  size
}: StoryArgs) => {
  return <StoryBlock title="Avatar">
      <StoryPart title="Sizes">
        <Box direction="row">
          <Avatar initials={initials} size={size} />
          <Space width={16} />
          <Avatar initials="AA" size={48} />
          <Space width={16} />
          <Avatar initials="AA" size={64} />
        </Box>
      </StoryPart>

      <StoryPart title="Colors">
        <Box direction="row">
          <Avatar initials="AA" size={32} />
          <Space width={16} />
          <Avatar initials="BA" size={32} />
          <Space width={16} />
          <Avatar initials="CA" size={32} />
        </Box>
      </StoryPart>

      <StoryCodePart title="Code example">
        {dedent\`
          <Box direction="row">
            <Avatar initials="AA" size={32} />
            <Space width={16} />
            <Avatar initials="BA" size={32} />
            <Space width={16} />
            <Avatar initials="CA" size={32} />
          </Box>\`}
      </StoryCodePart>
    </StoryBlock>;
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const N=["Variants"];export{s as Variants,N as __namedExportsOrder,E as default};
//# sourceMappingURL=Avatar.stories-a569b6a9.js.map
