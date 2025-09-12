import{z as x,N as u,j as r,V as p,s as S,c as n,L as j,I as v,B as m,S as i}from"./ScrollView-vEi5sUNw.js";import{r as w}from"./iframe-DG43haB4.js";import{c as f}from"./commonStyles-BBEkV6IC.js";import{S as y,a as A}from"./_StoriesComponents-6MdzomJS.js";import"./index-AsoTAYPq.js";import"./preload-helper-D1IIBeq1.js";import"./Separator-ZzbVwDxr.js";const h=S.create({text:{userSelect:"none"},container:{borderWidth:1}}),z=a=>{switch((a.charCodeAt(0)+a.charCodeAt(1))%3){case 2:return"darkPink";case 1:return"live";default:return"shakespear"}},t=w.memo(({user:a,size:e})=>{const l=x(a).with(u.nonNullable,d=>(d.firstName?.charAt(0)??"")+((d.preferredLastName??d.lastName)?.charAt(0)??"")).otherwise(()=>""),o=z(l);return r.jsx(p,{role:"img",style:[f.center,h.container,{backgroundColor:n[o][100],borderColor:n[o][200],height:e,width:e,borderRadius:e/2}],children:l!==""?r.jsx(j,{variant:"semibold",align:"center",style:[h.text,{color:n[o][500],fontSize:e*.4}],children:l}):r.jsx(v,{name:"person-filled",size:e-8,color:n[o][50]})})});t.__docgenInfo={description:"",methods:[],displayName:"Avatar"};const I={title:"Informations/Avatar",component:t},c={firstName:"Aaron",lastName:"Aaronson"},N={firstName:"Bernard",lastName:"Arthus"},B={firstName:"Chloe",lastName:"Arthus"},s=()=>r.jsxs(y,{title:"Avatar",children:[r.jsx(A,{title:"Sizes",children:r.jsxs(m,{direction:"row",children:[r.jsx(t,{user:c,size:32}),r.jsx(i,{width:16}),r.jsx(t,{user:c,size:48}),r.jsx(i,{width:16}),r.jsx(t,{user:c,size:64})]})}),r.jsx(A,{title:"Colors",children:r.jsxs(m,{direction:"row",children:[r.jsx(t,{user:c,size:32}),r.jsx(i,{width:16}),r.jsx(t,{user:N,size:32}),r.jsx(i,{width:16}),r.jsx(t,{user:B,size:32})]})})]});s.__docgenInfo={description:"",methods:[],displayName:"Variants"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Avatar">
      <StoryPart title="Sizes">
        <Box direction="row">
          <Avatar user={AA} size={32} />
          <Space width={16} />
          <Avatar user={AA} size={48} />
          <Space width={16} />
          <Avatar user={AA} size={64} />
        </Box>
      </StoryPart>

      <StoryPart title="Colors">
        <Box direction="row">
          <Avatar user={AA} size={32} />
          <Space width={16} />
          <Avatar user={BA} size={32} />
          <Space width={16} />
          <Avatar user={CA} size={32} />
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...s.parameters?.docs?.source}}};const E=["Variants"];export{s as Variants,E as __namedExportsOrder,I as default};
//# sourceMappingURL=Avatar.stories-KrIG5ORn.js.map
