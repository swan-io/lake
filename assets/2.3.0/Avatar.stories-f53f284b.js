import{S as u,a as t,V as y,c as o,T as v,j as l,b as n}from"./Space-a498ed61.js";import{d as w}from"./index-356e4a49.js";import{r as x}from"./index-ebeaab24.js";import{c as z}from"./commonStyles-d52fedae.js";import{t as c}from"./typography-6ad07e3d.js";import{I as f}from"./Icon-6b80fc75.js";import{B as d}from"./index-1de7d3af.js";import{S as B,a as A,c as C}from"./_StoriesComponents-b8009221.js";import"./extends-98964cd2.js";import"./colors-298625c7.js";import"./Svg-eea3a775.js";const p=u.create({text:{...c.bodyLarge,fontWeight:c.fontWeights.demi,textAlign:"center",userSelect:"none"},container:{borderWidth:1}}),g=i=>{switch((i.charCodeAt(0)+i.charCodeAt(1))%3){case 2:return"darkPink";case 1:return"live";default:return"shakespear"}},e=x.memo(({initials:i="",size:r})=>{const a=g(i);return t(y,{role:"img",style:[z.center,p.container,{backgroundColor:o[a][100],borderColor:o[a][200],height:r,width:r,borderRadius:r/2}],children:i!==""?t(v,{style:[p.text,{color:o[a][500],fontSize:r*.4}],children:i}):t(f,{name:"person-filled",size:r-8,color:o[a][50]})})});try{e.displayName="Avatar",e.__docgenInfo={description:"",displayName:"Avatar",props:{initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}}}catch{}const N={title:"Informations/Avatar",component:e},s=()=>l(B,{title:"Avatar",children:[t(A,{title:"Sizes",children:l(d,{direction:"row",children:[t(e,{initials:"AA",size:32}),t(n,{width:16}),t(e,{initials:"AA",size:48}),t(n,{width:16}),t(e,{initials:"AA",size:64})]})}),t(A,{title:"Colors",children:l(d,{direction:"row",children:[t(e,{initials:"AA",size:32}),t(n,{width:16}),t(e,{initials:"BA",size:32}),t(n,{width:16}),t(e,{initials:"CA",size:32})]})}),t(C,{title:"Code example",children:w`
          <Box direction="row">
            <Avatar initials="AA" size={32} />
            <Space width={16} />
            <Avatar initials="BA" size={32} />
            <Space width={16} />
            <Avatar initials="CA" size={32} />
          </Box>`})]});var m,h,S;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="Avatar">
      <StoryPart title="Sizes">
        <Box direction="row">
          <Avatar initials="AA" size={32} />
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
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const L=["Variants"];export{s as Variants,L as __namedExportsOrder,N as default};
//# sourceMappingURL=Avatar.stories-f53f284b.js.map
