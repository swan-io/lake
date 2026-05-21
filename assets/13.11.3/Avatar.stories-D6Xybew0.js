import{c as e,i as t}from"./preload-helper-BnfVW-Vi.js";import{o as n}from"./iframe-Bcqu9WHo.js";import{H as r,M as i,N as a,P as o,St as s,U as c,V as l,bt as u,g as d,h as f,ht as p,i as m,it as h,o as g,r as _,s as v,st as y}from"./ScrollView-CsKo37bE.js";import{n as b,t as x}from"./commonStyles-Cc8New32.js";import{n as S,r as C,t as w}from"./_StoriesComponents-ChNnKMle.js";var T,E,D,O,k,A=t((()=>{T=e(n()),p(),a(),b(),y(),r(),v(),E=c(),D=s.create({text:{userSelect:`none`},container:{borderWidth:1}}),O=e=>{switch((e.charCodeAt(0)+e.charCodeAt(1))%3){case 2:return`darkPink`;case 1:return`live`;default:return`shakespear`}},k=(0,T.memo)(({user:e,size:t})=>{let n=i(e).with(o.nonNullable,e=>(e.firstName?.charAt(0)??``)+((e.preferredLastName??e.lastName)?.charAt(0)??``)).otherwise(()=>``),r=O(n);return(0,E.jsx)(u,{role:`img`,style:[x.center,D.container,{backgroundColor:h[r][100],borderColor:h[r][200],height:t,width:t,borderRadius:t/2}],children:n===``?(0,E.jsx)(l,{name:`person-filled`,size:t-8,color:h[r][50]}):(0,E.jsx)(g,{variant:`semibold`,align:`center`,style:[D.text,{color:h[r][500],fontSize:t*.4}],children:n})})}),k.__docgenInfo={description:``,methods:[],displayName:`Avatar`}})),j,M,N,P,F,I,L;t((()=>{A(),d(),m(),C(),j=c(),M={title:`Informations/Avatar`,component:k},N={firstName:`Aaron`,lastName:`Aaronson`},P={firstName:`Bernard`,lastName:`Arthus`},F={firstName:`Chloe`,lastName:`Arthus`},I=()=>(0,j.jsxs)(w,{title:`Avatar`,children:[(0,j.jsx)(S,{title:`Sizes`,children:(0,j.jsxs)(f,{direction:`row`,children:[(0,j.jsx)(k,{user:N,size:32}),(0,j.jsx)(_,{width:16}),(0,j.jsx)(k,{user:N,size:48}),(0,j.jsx)(_,{width:16}),(0,j.jsx)(k,{user:N,size:64})]})}),(0,j.jsx)(S,{title:`Colors`,children:(0,j.jsxs)(f,{direction:`row`,children:[(0,j.jsx)(k,{user:N,size:32}),(0,j.jsx)(_,{width:16}),(0,j.jsx)(k,{user:P,size:32}),(0,j.jsx)(_,{width:16}),(0,j.jsx)(k,{user:F,size:32})]})})]}),I.__docgenInfo={description:``,methods:[],displayName:`Variants`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}},L=[`Variants`]}))();export{I as Variants,L as __namedExportsOrder,M as default};
//# sourceMappingURL=Avatar.stories-D6Xybew0.js.map