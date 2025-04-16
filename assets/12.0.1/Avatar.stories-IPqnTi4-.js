import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-D9D9kDko.js";import{z as v,N as w,V as y,s as z,c as n,L as N,I as B,B as h,S as i}from"./ScrollView-BXYY5pE1.js";import{c as C}from"./commonStyles-BBEkV6IC.js";import{S as k,a as x}from"./_StoriesComponents-J340Bf-T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D0hBKHsB.js";import"./Separator-C6_iuU14.js";const u=z.create({text:{userSelect:"none"},container:{borderWidth:1}}),g=a=>{switch((a.charCodeAt(0)+a.charCodeAt(1))%3){case 2:return"darkPink";case 1:return"live";default:return"shakespear"}},t=f.memo(({user:a,size:e})=>{const l=v(a).with(w.nonNullable,d=>{var m,A;return(((m=d.firstName)==null?void 0:m.charAt(0))??"")+(((A=d.preferredLastName??d.lastName)==null?void 0:A.charAt(0))??"")}).otherwise(()=>""),o=g(l);return r.jsx(y,{role:"img",style:[C.center,u.container,{backgroundColor:n[o][100],borderColor:n[o][200],height:e,width:e,borderRadius:e/2}],children:l!==""?r.jsx(N,{variant:"semibold",align:"center",style:[u.text,{color:n[o][500],fontSize:e*.4}],children:l}):r.jsx(B,{name:"person-filled",size:e-8,color:n[o][50]})})});t.__docgenInfo={description:"",methods:[],displayName:"Avatar"};const W={title:"Informations/Avatar",component:t},c={firstName:"Aaron",lastName:"Aaronson"},_={firstName:"Bernard",lastName:"Arthus"},b={firstName:"Chloe",lastName:"Arthus"},s=()=>r.jsxs(k,{title:"Avatar",children:[r.jsx(x,{title:"Sizes",children:r.jsxs(h,{direction:"row",children:[r.jsx(t,{user:c,size:32}),r.jsx(i,{width:16}),r.jsx(t,{user:c,size:48}),r.jsx(i,{width:16}),r.jsx(t,{user:c,size:64})]})}),r.jsx(x,{title:"Colors",children:r.jsxs(h,{direction:"row",children:[r.jsx(t,{user:c,size:32}),r.jsx(i,{width:16}),r.jsx(t,{user:_,size:32}),r.jsx(i,{width:16}),r.jsx(t,{user:b,size:32})]})})]});s.__docgenInfo={description:"",methods:[],displayName:"Variants"};var p,S,j;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const q=["Variants"];export{s as Variants,q as __namedExportsOrder,W as default};
//# sourceMappingURL=Avatar.stories-IPqnTi4-.js.map
