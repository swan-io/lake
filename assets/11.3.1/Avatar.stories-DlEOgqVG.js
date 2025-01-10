import{j as t}from"./jsx-runtime-DT09rT5F.js";import{d as v}from"./index-ogSvIofg.js";import{r as j}from"./index-DXKZGL6g.js";import{s as y,z as u,N as n,V as B,c as o,L as f,I as C,B as x,S as l}from"./ScrollView-BoCrTkEc.js";import{c as P}from"./commonStyles-CWvHnKRn.js";import{i as b}from"./function-BYwUOg0j.js";import{S as k,a as h,b as N}from"./_StoriesComponents-DloRyvw6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BeFrmAzh.js";import"./Separator-BCHPcwA4.js";const p=y.create({text:{userSelect:"none"},container:{borderWidth:1}}),g=a=>{switch((a.charCodeAt(0)+a.charCodeAt(1))%3){case 2:return"darkPink";case 1:return"live";default:return"shakespear"}},i=j.memo(a=>{const{size:e}=a,c=u(a).with({user:n.select(n.nonNullable)},d=>{var A,m;return(((A=d.firstName)==null?void 0:A.charAt(0))??"")+(((m=d.preferredLastName??d.lastName)==null?void 0:m.charAt(0))??"")}).with({initials:n.select(n.nonNullable)},b).otherwise(()=>""),s=g(c);return t.jsx(B,{role:"img",style:[P.center,p.container,{backgroundColor:o[s][100],borderColor:o[s][200],height:e,width:e,borderRadius:e/2}],children:c!==""?t.jsx(f,{variant:"semibold",align:"center",style:[p.text,{color:o[s][500],fontSize:e*.4}],children:c}):t.jsx(C,{name:"person-filled",size:e-8,color:o[s][50]})})});i.__docgenInfo={description:"",methods:[],displayName:"Avatar"};const D={title:"Informations/Avatar",component:i},r=()=>t.jsxs(k,{title:"Avatar",children:[t.jsx(h,{title:"Sizes",children:t.jsxs(x,{direction:"row",children:[t.jsx(i,{initials:"AA",size:32}),t.jsx(l,{width:16}),t.jsx(i,{initials:"AA",size:48}),t.jsx(l,{width:16}),t.jsx(i,{initials:"AA",size:64})]})}),t.jsx(h,{title:"Colors",children:t.jsxs(x,{direction:"row",children:[t.jsx(i,{initials:"AA",size:32}),t.jsx(l,{width:16}),t.jsx(i,{initials:"BA",size:32}),t.jsx(l,{width:16}),t.jsx(i,{initials:"CA",size:32})]})}),t.jsx(N,{title:"Code example",children:v`
          <Box direction="row">
            <Avatar initials="AA" size={32} />
            <Space width={16} />
            <Avatar initials="BA" size={32} />
            <Space width={16} />
            <Avatar initials="CA" size={32} />
          </Box>`})]});r.__docgenInfo={description:"",methods:[],displayName:"Variants"};var S,w,z;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(z=(w=r.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const F=["Variants"];export{r as Variants,F as __namedExportsOrder,D as default};
//# sourceMappingURL=Avatar.stories-DlEOgqVG.js.map
