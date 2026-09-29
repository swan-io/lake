import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-zI7J7sxQ.js";import{Bt as r,Et as i,Ft as a,G as o,J as s,K as c,U as l,W as u,g as d,h as f,ht as p,i as m,o as h,q as g,r as _,s as v,vt as y}from"./ScrollView-Bjc5mCN-.js";import{n as b,t as x}from"./commonStyles-IchN61IH.js";import{n as S,r as C,t as w}from"./_StoriesComponents-CP3MOd32.js";var T,E,D,O,k,A=t((()=>{T=e(n()),i(),u(),b(),y(),g(),v(),E=s(),D=r.create({text:{userSelect:`none`},container:{borderWidth:1}}),O=e=>{switch((e.charCodeAt(0)+e.charCodeAt(1))%3){case 2:return`darkPink`;case 1:return`live`;default:return`shakespear`}},k=(0,T.memo)(({user:e,size:t})=>{let n=l(e).with(o.nonNullable,e=>(e.firstName?.charAt(0)??``)+((e.preferredLastName??e.lastName)?.charAt(0)??``)).otherwise(()=>``),r=O(n);return(0,E.jsx)(a,{role:`img`,"aria-label":n===``?`avatar`:n,style:[x.center,D.container,{backgroundColor:p[r][100],borderColor:p[r][200],height:t,width:t,borderRadius:t/2}],children:n===``?(0,E.jsx)(c,{name:`person-filled`,size:t-8,color:p[r][50]}):(0,E.jsx)(h,{variant:`semibold`,align:`center`,style:[D.text,{color:p[r][500],fontSize:t*.4}],children:n})})}),k.__docgenInfo={description:``,methods:[],displayName:`Avatar`}})),j,M,N,P,F,I,L;t((()=>{A(),d(),m(),C(),j=s(),M={title:`Informations/Avatar`,component:k},N={firstName:`Aaron`,lastName:`Aaronson`},P={firstName:`Bernard`,lastName:`Arthus`},F={firstName:`Chloe`,lastName:`Arthus`},I=()=>(0,j.jsxs)(w,{title:`Avatar`,children:[(0,j.jsx)(S,{title:`Sizes`,children:(0,j.jsxs)(f,{direction:`row`,children:[(0,j.jsx)(k,{user:N,size:32}),(0,j.jsx)(_,{width:16}),(0,j.jsx)(k,{user:N,size:48}),(0,j.jsx)(_,{width:16}),(0,j.jsx)(k,{user:N,size:64})]})}),(0,j.jsx)(S,{title:`Colors`,children:(0,j.jsxs)(f,{direction:`row`,children:[(0,j.jsx)(k,{user:N,size:32}),(0,j.jsx)(_,{width:16}),(0,j.jsx)(k,{user:P,size:32}),(0,j.jsx)(_,{width:16}),(0,j.jsx)(k,{user:F,size:32})]})})]}),I.__docgenInfo={description:``,methods:[],displayName:`Variants`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Avatar.stories-5Mjh-lme.js.map