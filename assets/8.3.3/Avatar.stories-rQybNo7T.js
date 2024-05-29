import{s as m,j as t,V as h,c as o,L as S,I as v,B as l,S as n}from"./Space-DYY4zSVo.js";import{d as u}from"./index-DrFu-skq.js";import{r as j}from"./index-BwDkhjyp.js";import{c as w}from"./commonStyles-t4XfA7cz.js";import{S as y,a as c,c as z}from"./_StoriesComponents-DbKLmcBl.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";const d=m.create({text:{userSelect:"none"},container:{borderWidth:1}}),B=e=>{switch((e.charCodeAt(0)+e.charCodeAt(1))%3){case 2:return"darkPink";case 1:return"live";default:return"shakespear"}},i=j.memo(({initials:e="",size:r})=>{const s=B(e);return t.jsx(h,{role:"img",style:[w.center,d.container,{backgroundColor:o[s][100],borderColor:o[s][200],height:r,width:r,borderRadius:r/2}],children:e!==""?t.jsx(S,{variant:"semibold",align:"center",style:[d.text,{color:o[s][500],fontSize:r*.4}],children:e}):t.jsx(v,{name:"person-filled",size:r-8,color:o[s][50]})})});i.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{initials:{defaultValue:{value:'""',computed:!1},required:!1}}};const I={title:"Informations/Avatar",component:i},a=()=>t.jsxs(y,{title:"Avatar",children:[t.jsx(c,{title:"Sizes",children:t.jsxs(l,{direction:"row",children:[t.jsx(i,{initials:"AA",size:32}),t.jsx(n,{width:16}),t.jsx(i,{initials:"AA",size:48}),t.jsx(n,{width:16}),t.jsx(i,{initials:"AA",size:64})]})}),t.jsx(c,{title:"Colors",children:t.jsxs(l,{direction:"row",children:[t.jsx(i,{initials:"AA",size:32}),t.jsx(n,{width:16}),t.jsx(i,{initials:"BA",size:32}),t.jsx(n,{width:16}),t.jsx(i,{initials:"CA",size:32})]})}),t.jsx(z,{title:"Code example",children:u`
          <Box direction="row">
            <Avatar initials="AA" size={32} />
            <Space width={16} />
            <Avatar initials="BA" size={32} />
            <Space width={16} />
            <Avatar initials="CA" size={32} />
          </Box>`})]});a.__docgenInfo={description:"",methods:[],displayName:"Variants"};var A,x,p;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(p=(x=a.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const E=["Variants"];export{a as Variants,E as __namedExportsOrder,I as default};
//# sourceMappingURL=Avatar.stories-rQybNo7T.js.map
