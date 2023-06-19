import{a as e,F as m,i as k,j as y,V as b,L as r,c as o}from"./Space-9dd01fb4.js";import{L as T}from"./LakeCopyButton-0a5f0c94.js";import{L as a}from"./LakeLabel-cc46597d.js";import{r as g}from"./index-ebeaab24.js";import{b as x,S as h}from"./_StoriesComponents-e9e8cbbd.js";import{T as c}from"./Tag-c0916a6b.js";import"./extends-98964cd2.js";import"./Icon-afcf50c4.js";import"./Svg-916796a1.js";import"./LakeTooltip-48a87dfa.js";import"./index-9c09ad76.js";import"./index-8e601d33.js";import"./useMergeRefs-aad54422.js";import"./Portal-1fddf957.js";import"./WithCurrentColor-b1afc1fc.js";import"./Pressable-dd869992.js";import"./index-ca925b5c.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./index-2fb82f15.js";const t=({children:i})=>e(m,{children:g.Children.toArray(i).filter(k).map((L,n)=>y(b,{children:[n!==0&&e(x,{horizontal:!1,space:8}),L]},n))});try{t.displayName="ReadOnlyFieldList",t.__docgenInfo={description:"",displayName:"ReadOnlyFieldList",props:{}}}catch{}const z={title:"Forms/ReadOnlyFieldList",component:t},l=()=>e(h,{title:"Readonly field list",children:y(t,{children:[e(a,{label:"Card holder",type:"view",render:()=>e(r,{color:o.gray[900],children:"John Doe"})}),e(a,{label:"Account",type:"view",render:()=>e(r,{color:o.gray[900],children:"Compte courant"})}),e(a,{label:"Account holder",type:"view",render:()=>e(r,{color:o.gray[900],children:"John Doe"})}),e(a,{label:"Type",type:"view",render:()=>e(r,{color:o.gray[900],children:"Single use"})}),e(a,{label:"Name",type:"view",render:()=>e(r,{color:o.gray[900],children:"John Doe"})}),e(a,{label:"Status",type:"view",render:()=>e(r,{color:o.gray[900],children:e(c,{color:"positive",children:"Enabled"})})}),e(a,{label:"Contract expiry date",type:"view",render:()=>e(r,{color:o.gray[900],children:e(c,{color:"gray",children:"Unlimited"})})}),e(a,{label:"ID",type:"view",render:()=>e(r,{color:o.gray[900],children:"123456789"}),actions:e(T,{valueToCopy:"123456789",copyText:"Click to copy",copiedText:"Copied to clipboard!"})}),e(a,{label:"Created",type:"view",render:()=>e(r,{color:o.gray[900],children:"16-01-2023"})}),e(a,{label:"Updated",type:"view",render:()=>e(r,{color:o.gray[900],children:"17-01-2023"})})]})});var d,p,s;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <StoryBlock title="Readonly field list">
      <ReadOnlyFieldList>
        <LakeLabel label="Card holder" type="view" render={() => <LakeText color={colors.gray[900]}>John Doe</LakeText>} />

        <LakeLabel label="Account" type="view" render={() => <LakeText color={colors.gray[900]}>Compte courant</LakeText>} />

        <LakeLabel label="Account holder" type="view" render={() => <LakeText color={colors.gray[900]}>John Doe</LakeText>} />

        <LakeLabel label="Type" type="view" render={() => <LakeText color={colors.gray[900]}>Single use</LakeText>} />

        <LakeLabel label="Name" type="view" render={() => <LakeText color={colors.gray[900]}>John Doe</LakeText>} />

        <LakeLabel label="Status" type="view" render={() => <LakeText color={colors.gray[900]}>
              <Tag color="positive">Enabled</Tag>
            </LakeText>} />

        <LakeLabel label="Contract expiry date" type="view" render={() => <LakeText color={colors.gray[900]}>
              <Tag color="gray">Unlimited</Tag>
            </LakeText>} />

        <LakeLabel label="ID" type="view" render={() => <LakeText color={colors.gray[900]}>123456789</LakeText>} actions={<LakeCopyButton valueToCopy="123456789" copyText="Click to copy" copiedText="Copied to clipboard!" />} />

        <LakeLabel label="Created" type="view" render={() => <LakeText color={colors.gray[900]}>16-01-2023</LakeText>} />

        <LakeLabel label="Updated" type="view" render={() => <LakeText color={colors.gray[900]}>17-01-2023</LakeText>} />
      </ReadOnlyFieldList>
    </StoryBlock>;
}`,...(s=(p=l.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const q=["Default"];export{l as Default,q as __namedExportsOrder,z as default};
//# sourceMappingURL=ReadonlyFieldList.stories-b6574cdc.js.map
