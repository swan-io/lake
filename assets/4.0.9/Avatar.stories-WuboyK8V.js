import{S as u,a as t,V as y,c as n,T as v,I as w,j as l,b as o}from"./Space-t6mwz88k.js";import{d as x}from"./index-PPLHz8o0.js";import{r as z}from"./index-4g5l5LRQ.js";import{c as f,B as c}from"./commonStyles-_QWv9FCr.js";import{t as d}from"./typography-w_j0Ieqf.js";import{S as B,a as A,c as C}from"./_StoriesComponents-tD2zAERO.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./colors-34oHE9gw.js";const p=u.create({text:{...d.bodyLarge,fontWeight:d.fontWeights.demi,textAlign:"center",userSelect:"none"},container:{borderWidth:1}}),g=i=>{switch((i.charCodeAt(0)+i.charCodeAt(1))%3){case 2:return"darkPink";case 1:return"live";default:return"shakespear"}},e=z.memo(({initials:i="",size:r})=>{const a=g(i);return t(y,{role:"img",style:[f.center,p.container,{backgroundColor:n[a][100],borderColor:n[a][200],height:r,width:r,borderRadius:r/2}],children:i!==""?t(v,{style:[p.text,{color:n[a][500],fontSize:r*.4}],children:i}):t(w,{name:"person-filled",size:r-8,color:n[a][50]})})});try{e.displayName="Avatar",e.__docgenInfo={description:"",displayName:"Avatar",props:{initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}}}catch{}const E={title:"Informations/Avatar",component:e},s=()=>l(B,{title:"Avatar",children:[t(A,{title:"Sizes",children:l(c,{direction:"row",children:[t(e,{initials:"AA",size:32}),t(o,{width:16}),t(e,{initials:"AA",size:48}),t(o,{width:16}),t(e,{initials:"AA",size:64})]})}),t(A,{title:"Colors",children:l(c,{direction:"row",children:[t(e,{initials:"AA",size:32}),t(o,{width:16}),t(e,{initials:"BA",size:32}),t(o,{width:16}),t(e,{initials:"CA",size:32})]})}),t(C,{title:"Code example",children:x`
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
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const N=["Variants"];export{s as Variants,N as __namedExportsOrder,E as default};
//# sourceMappingURL=Avatar.stories-WuboyK8V.js.map
