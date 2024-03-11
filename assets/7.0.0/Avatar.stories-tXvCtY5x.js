import{s as S,a as t,V as u,c as n,L as v,I as y,j as l,B as c,S as o}from"./Space-DiyC_dNS.js";import{d as w}from"./index-DrFu-skq.js";import{r as z}from"./index-CBqU2yxZ.js";import{c as x}from"./commonStyles-t4XfA7cz.js";import{S as B,a as d,c as C}from"./_StoriesComponents-DQ7bmKJu.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";const A=S.create({text:{userSelect:"none"},container:{borderWidth:1}}),f=i=>{switch((i.charCodeAt(0)+i.charCodeAt(1))%3){case 2:return"darkPink";case 1:return"live";default:return"shakespear"}},e=z.memo(({initials:i="",size:r})=>{const a=f(i);return t(u,{role:"img",style:[x.center,A.container,{backgroundColor:n[a][100],borderColor:n[a][200],height:r,width:r,borderRadius:r/2}],children:i!==""?t(v,{variant:"semibold",align:"center",style:[A.text,{color:n[a][500],fontSize:r*.4}],children:i}):t(y,{name:"person-filled",size:r-8,color:n[a][50]})})});try{e.displayName="Avatar",e.__docgenInfo={description:"",displayName:"Avatar",props:{initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}}}catch{}const q={title:"Informations/Avatar",component:e},s=()=>l(B,{title:"Avatar",children:[t(d,{title:"Sizes",children:l(c,{direction:"row",children:[t(e,{initials:"AA",size:32}),t(o,{width:16}),t(e,{initials:"AA",size:48}),t(o,{width:16}),t(e,{initials:"AA",size:64})]})}),t(d,{title:"Colors",children:l(c,{direction:"row",children:[t(e,{initials:"AA",size:32}),t(o,{width:16}),t(e,{initials:"BA",size:32}),t(o,{width:16}),t(e,{initials:"CA",size:32})]})}),t(C,{title:"Code example",children:w`
          <Box direction="row">
            <Avatar initials="AA" size={32} />
            <Space width={16} />
            <Avatar initials="BA" size={32} />
            <Space width={16} />
            <Avatar initials="CA" size={32} />
          </Box>`})]});var p,m,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const E=["Variants"];export{s as Variants,E as __namedExportsOrder,q as default};
//# sourceMappingURL=Avatar.stories-tXvCtY5x.js.map
