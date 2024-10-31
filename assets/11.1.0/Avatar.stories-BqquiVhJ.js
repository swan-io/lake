import{j as t}from"./jsx-runtime-BlAj40OV.js";import{d as j}from"./index-DrFu-skq.js";import{r as w}from"./index-Cs7sjTYM.js";import{c as u}from"./commonStyles-t4XfA7cz.js";import{s as y,V as B,c as n,L as f,I as C,B as x,S as o}from"./ScrollView-DAMcnhPN.js";import{S as P,a as h,b as k}from"./_StoriesComponents-4WTDdsYg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./Separator-qitoqTAJ.js";const p=y.create({text:{userSelect:"none"},container:{borderWidth:1}}),g=i=>{switch((i.charCodeAt(0)+i.charCodeAt(1))%3){case 2:return"darkPink";case 1:return"live";default:return"shakespear"}},e=w.memo(i=>{var l,d,A,m;const{size:r}=i,c="user"in i?(((d=(l=i.user)==null?void 0:l.firstName)==null?void 0:d.charAt(0))??"")+(((m=(A=i.user)==null?void 0:A.preferredLastName)==null?void 0:m.charAt(0))??""):i.initials??"",s=g(c);return t.jsx(B,{role:"img",style:[u.center,p.container,{backgroundColor:n[s][100],borderColor:n[s][200],height:r,width:r,borderRadius:r/2}],children:c!==""?t.jsx(f,{variant:"semibold",align:"center",style:[p.text,{color:n[s][500],fontSize:r*.4}],children:c}):t.jsx(C,{name:"person-filled",size:r-8,color:n[s][50]})})});e.__docgenInfo={description:"",methods:[],displayName:"Avatar"};const O={title:"Informations/Avatar",component:e},a=()=>t.jsxs(P,{title:"Avatar",children:[t.jsx(h,{title:"Sizes",children:t.jsxs(x,{direction:"row",children:[t.jsx(e,{initials:"AA",size:32}),t.jsx(o,{width:16}),t.jsx(e,{initials:"AA",size:48}),t.jsx(o,{width:16}),t.jsx(e,{initials:"AA",size:64})]})}),t.jsx(h,{title:"Colors",children:t.jsxs(x,{direction:"row",children:[t.jsx(e,{initials:"AA",size:32}),t.jsx(o,{width:16}),t.jsx(e,{initials:"BA",size:32}),t.jsx(o,{width:16}),t.jsx(e,{initials:"CA",size:32})]})}),t.jsx(k,{title:"Code example",children:j`
          <Box direction="row">
            <Avatar initials="AA" size={32} />
            <Space width={16} />
            <Avatar initials="BA" size={32} />
            <Space width={16} />
            <Avatar initials="CA" size={32} />
          </Box>`})]});a.__docgenInfo={description:"",methods:[],displayName:"Variants"};var S,v,z;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(z=(v=a.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};const W=["Variants"];export{a as Variants,W as __namedExportsOrder,O as default};
//# sourceMappingURL=Avatar.stories-BqquiVhJ.js.map
