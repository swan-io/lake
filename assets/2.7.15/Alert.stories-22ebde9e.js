import{S as A,a as T,j as t}from"./Space-f85095f8.js";import{L as e}from"./LakeAlert-09a14a7e.js";import{a as S}from"./LakeButton-e8594097.js";import{S as p,a as i}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-b9a8c83f.js";import"./commonStyles-d52fedae.js";import"./Box-f4fbfbba.js";import"./Pressable-7e9fd84c.js";import"./useMergeRefs-56399732.js";import"./index-4daf2301.js";const r=A.create({part:{padding:10,maxWidth:600}}),j={title:"Informations/Alert",component:e},n=({anchored:l,callToAction:a})=>T(p,{title:"Alert variations",children:[t(i,{title:"info",style:r.part,children:t(e,{variant:"info",title:"Title",subtitle:"Subtitle",anchored:l,callToAction:a,children:"This is a children"})}),t(i,{title:"warning",style:r.part,children:t(e,{variant:"warning",title:"Title",subtitle:"This is a subtitle",anchored:l,callToAction:a,children:"This is a children"})}),t(i,{title:"error",style:r.part,children:t(e,{variant:"error",title:"Title",subtitle:"This is a subtitle",anchored:l,callToAction:a,children:"This is a children"})}),t(i,{title:"success",style:r.part,children:t(e,{variant:"success",title:"Title",subtitle:"This is a subtitle",anchored:l,callToAction:a,children:"This is a children"})}),t(i,{title:"neutral",style:r.part,children:t(e,{variant:"neutral",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})})]}),s=()=>T(p,{title:"Alert formats",children:[t(i,{title:"Anchored",style:r.part,children:t(e,{anchored:!0,variant:"info",title:"Title"})}),t(i,{title:"With subtitle",style:r.part,children:t(e,{variant:"info",title:"Title",subtitle:"This is a subtitle"})}),t(i,{title:"With call to action",style:r.part,children:t(e,{variant:"info",title:"Title",callToAction:t(S,{size:"small",color:"shakespear",icon:"add-filled"})})}),t(i,{title:"With children",style:r.part,children:t(e,{variant:"info",title:"Title",children:"This is a children"})}),t(i,{title:"With subtitle and children",style:r.part,children:t(e,{variant:"info",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})})]});var o,c,h;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`({
  anchored,
  callToAction
}: StoryArgs) => {
  return <StoryBlock title="Alert variations">
      <StoryPart title="info" style={styles.part}>
        <LakeAlert variant="info" title="Title" subtitle="Subtitle" anchored={anchored} callToAction={callToAction}>
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="warning" style={styles.part}>
        <LakeAlert variant="warning" title="Title" subtitle="This is a subtitle" anchored={anchored} callToAction={callToAction}>
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="error" style={styles.part}>
        <LakeAlert variant="error" title="Title" subtitle="This is a subtitle" anchored={anchored} callToAction={callToAction}>
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="success" style={styles.part}>
        <LakeAlert variant="success" title="Title" subtitle="This is a subtitle" anchored={anchored} callToAction={callToAction}>
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="neutral" style={styles.part}>
        <LakeAlert variant="neutral" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>
    </StoryBlock>;
}`,...(h=(c=n.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var d,y,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <StoryBlock title="Alert formats">
      <StoryPart title="Anchored" style={styles.part}>
        <LakeAlert anchored={true} variant="info" title="Title" />
      </StoryPart>

      <StoryPart title="With subtitle" style={styles.part}>
        <LakeAlert variant="info" title="Title" subtitle="This is a subtitle" />
      </StoryPart>

      <StoryPart title="With call to action" style={styles.part}>
        <LakeAlert variant="info" title="Title" callToAction={<LakeButton size="small" color="shakespear" icon="add-filled" />} />
      </StoryPart>

      <StoryPart title="With children" style={styles.part}>
        <LakeAlert variant="info" title="Title">
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="With subtitle and children" style={styles.part}>
        <LakeAlert variant="info" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>
    </StoryBlock>;
}`,...(u=(y=s.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const _=["Variants","Formats"];export{s as Formats,n as Variants,_ as __namedExportsOrder,j as default};
//# sourceMappingURL=Alert.stories-22ebde9e.js.map
