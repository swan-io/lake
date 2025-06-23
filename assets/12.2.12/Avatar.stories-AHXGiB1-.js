import{z as v,N as w,j as r,V as f,s as y,c as n,L as z,I as N,B as h,S as i}from"./ScrollView-C2rbZF6W.js";import{r as B}from"./iframe-CS-HVAR2.js";import{c as C}from"./commonStyles-BBEkV6IC.js";import{S as k,a as x}from"./_StoriesComponents-CzI1kha9.js";import"./index-blfurcWX.js";import"./Separator-CA24R0S9.js";const u=y.create({text:{userSelect:"none"},container:{borderWidth:1}}),g=a=>{switch((a.charCodeAt(0)+a.charCodeAt(1))%3){case 2:return"darkPink";case 1:return"live";default:return"shakespear"}},t=B.memo(({user:a,size:e})=>{const l=v(a).with(w.nonNullable,d=>{var m,A;return(((m=d.firstName)==null?void 0:m.charAt(0))??"")+(((A=d.preferredLastName??d.lastName)==null?void 0:A.charAt(0))??"")}).otherwise(()=>""),o=g(l);return r.jsx(f,{role:"img",style:[C.center,u.container,{backgroundColor:n[o][100],borderColor:n[o][200],height:e,width:e,borderRadius:e/2}],children:l!==""?r.jsx(z,{variant:"semibold",align:"center",style:[u.text,{color:n[o][500],fontSize:e*.4}],children:l}):r.jsx(N,{name:"person-filled",size:e-8,color:n[o][50]})})});t.__docgenInfo={description:"",methods:[],displayName:"Avatar"};const T={title:"Informations/Avatar",component:t},c={firstName:"Aaron",lastName:"Aaronson"},_={firstName:"Bernard",lastName:"Arthus"},b={firstName:"Chloe",lastName:"Arthus"},s=()=>r.jsxs(k,{title:"Avatar",children:[r.jsx(x,{title:"Sizes",children:r.jsxs(h,{direction:"row",children:[r.jsx(t,{user:c,size:32}),r.jsx(i,{width:16}),r.jsx(t,{user:c,size:48}),r.jsx(i,{width:16}),r.jsx(t,{user:c,size:64})]})}),r.jsx(x,{title:"Colors",children:r.jsxs(h,{direction:"row",children:[r.jsx(t,{user:c,size:32}),r.jsx(i,{width:16}),r.jsx(t,{user:_,size:32}),r.jsx(i,{width:16}),r.jsx(t,{user:b,size:32})]})})]});s.__docgenInfo={description:"",methods:[],displayName:"Variants"};var p,S,j;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const O=["Variants"];export{s as Variants,O as __namedExportsOrder,T as default};
//# sourceMappingURL=Avatar.stories-AHXGiB1-.js.map
