import{j as t}from"./jsx-runtime-BlAj40OV.js";import{d as v}from"./index-DrFu-skq.js";import{r as j}from"./index-Cs7sjTYM.js";import{s as y,z as u,N as o,V as B,c as l,L as f,I as C,B as x,S as c}from"./ScrollView-DAMcnhPN.js";import{c as b}from"./commonStyles-t4XfA7cz.js";import{i as P}from"./function-B3wRQvvE.js";import{S as k,a as h,b as N}from"./_StoriesComponents-4WTDdsYg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./Separator-qitoqTAJ.js";const p=y.create({text:{userSelect:"none"},container:{borderWidth:1}}),g=r=>{switch((r.charCodeAt(0)+r.charCodeAt(1))%3){case 2:return"darkPink";case 1:return"live";default:return"shakespear"}},i=j.memo(r=>{const{size:e}=r,d=u(r).with({user:o.select(o.nonNullable)},n=>{var m;const A=n.preferredLastName??n.lastName??n.birthLastName;return(((m=n.firstName)==null?void 0:m.charAt(0))??"")+((A==null?void 0:A.charAt(0))??"")}).with({initials:o.select(o.nonNullable)},P).otherwise(()=>""),s=g(d);return t.jsx(B,{role:"img",style:[b.center,p.container,{backgroundColor:l[s][100],borderColor:l[s][200],height:e,width:e,borderRadius:e/2}],children:d!==""?t.jsx(f,{variant:"semibold",align:"center",style:[p.text,{color:l[s][500],fontSize:e*.4}],children:d}):t.jsx(C,{name:"person-filled",size:e-8,color:l[s][50]})})});i.__docgenInfo={description:"",methods:[],displayName:"Avatar"};const D={title:"Informations/Avatar",component:i},a=()=>t.jsxs(k,{title:"Avatar",children:[t.jsx(h,{title:"Sizes",children:t.jsxs(x,{direction:"row",children:[t.jsx(i,{initials:"AA",size:32}),t.jsx(c,{width:16}),t.jsx(i,{initials:"AA",size:48}),t.jsx(c,{width:16}),t.jsx(i,{initials:"AA",size:64})]})}),t.jsx(h,{title:"Colors",children:t.jsxs(x,{direction:"row",children:[t.jsx(i,{initials:"AA",size:32}),t.jsx(c,{width:16}),t.jsx(i,{initials:"BA",size:32}),t.jsx(c,{width:16}),t.jsx(i,{initials:"CA",size:32})]})}),t.jsx(N,{title:"Code example",children:v`
          <Box direction="row">
            <Avatar initials="AA" size={32} />
            <Space width={16} />
            <Avatar initials="BA" size={32} />
            <Space width={16} />
            <Avatar initials="CA" size={32} />
          </Box>`})]});a.__docgenInfo={description:"",methods:[],displayName:"Variants"};var S,w,z;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(z=(w=a.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const F=["Variants"];export{a as Variants,F as __namedExportsOrder,D as default};
//# sourceMappingURL=Avatar.stories-Dq3RZ5jT.js.map
