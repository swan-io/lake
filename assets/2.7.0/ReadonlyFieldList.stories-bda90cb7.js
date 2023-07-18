import{a as e,F as m,i as k,j as y,V as b,L as r,c as o}from"./Space-6d26d64b.js";import{L as T}from"./LakeCopyButton-2048bf40.js";import{L as a}from"./LakeLabel-58a7b458.js";import{r as g}from"./index-8db94870.js";import{b as x,S as h}from"./_StoriesComponents-d5642f21.js";import{T as c}from"./Tag-dd3261a1.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Icon-be3f4c28.js";import"./Svg-4d5f70b1.js";import"./LakeTooltip-a01aa60d.js";import"./index-8ce4a492.js";import"./index-a023e010.js";import"./useMergeRefs-02efd9e3.js";import"./Portal-bfcf7103.js";import"./WithCurrentColor-ca19b7ee.js";import"./Pressable-ec1343e5.js";import"./index-ca925b5c.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./index-022bb208.js";const t=({children:i})=>e(m,{children:g.Children.toArray(i).filter(k).map((L,n)=>y(b,{children:[n!==0&&e(x,{horizontal:!1,space:8}),L]},n))});try{t.displayName="ReadOnlyFieldList",t.__docgenInfo={description:"",displayName:"ReadOnlyFieldList",props:{}}}catch{}const q={title:"Forms/ReadOnlyFieldList",component:t},l=()=>e(h,{title:"Readonly field list",children:y(t,{children:[e(a,{label:"Card holder",type:"view",render:()=>e(r,{color:o.gray[900],children:"John Doe"})}),e(a,{label:"Account",type:"view",render:()=>e(r,{color:o.gray[900],children:"Compte courant"})}),e(a,{label:"Account holder",type:"view",render:()=>e(r,{color:o.gray[900],children:"John Doe"})}),e(a,{label:"Type",type:"view",render:()=>e(r,{color:o.gray[900],children:"Single use"})}),e(a,{label:"Name",type:"view",render:()=>e(r,{color:o.gray[900],children:"John Doe"})}),e(a,{label:"Status",type:"view",render:()=>e(r,{color:o.gray[900],children:e(c,{color:"positive",children:"Enabled"})})}),e(a,{label:"Contract expiry date",type:"view",render:()=>e(r,{color:o.gray[900],children:e(c,{color:"gray",children:"Unlimited"})})}),e(a,{label:"ID",type:"view",render:()=>e(r,{color:o.gray[900],children:"123456789"}),actions:e(T,{valueToCopy:"123456789",copyText:"Click to copy",copiedText:"Copied to clipboard!"})}),e(a,{label:"Created",type:"view",render:()=>e(r,{color:o.gray[900],children:"16-01-2023"})}),e(a,{label:"Updated",type:"view",render:()=>e(r,{color:o.gray[900],children:"17-01-2023"})})]})});var d,p,s;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(s=(p=l.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const G=["Default"];export{l as Default,G as __namedExportsOrder,q as default};
//# sourceMappingURL=ReadonlyFieldList.stories-bda90cb7.js.map
