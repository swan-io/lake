import{S as p,j as y,a as t}from"./Space-a702eced.js";import{L as i}from"./LakeAlert-88086da1.js";import{L as T}from"./LakeButton-133e25cf.js";import{S as u,a as e}from"./_StoriesComponents-97d37cc1.js";import"./extends-98964cd2.js";import"./index-ebeaab24.js";import"./commonStyles-d52fedae.js";import"./index-ac9179ac.js";import"./Icon-deaf2458.js";import"./Svg-fe3a1521.js";import"./Pressable-c882f415.js";import"./useMergeRefs-af5bcba9.js";import"./index-bc6e6125.js";const r=p.create({part:{padding:10,maxWidth:600}}),w={title:"Informations/Alert",component:i},l=()=>y(u,{title:"Alert variations",children:[t(e,{title:"info",style:r.part,children:t(i,{variant:"info",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})}),t(e,{title:"warning",style:r.part,children:t(i,{variant:"warning",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})}),t(e,{title:"error",style:r.part,children:t(i,{variant:"error",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})}),t(e,{title:"success",style:r.part,children:t(i,{variant:"success",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})})]}),a=()=>y(u,{title:"Alert formats",children:[t(e,{title:"Anchored",style:r.part,children:t(i,{anchored:!0,variant:"info",title:"Title"})}),t(e,{title:"With subtitle",style:r.part,children:t(i,{variant:"info",title:"Title",subtitle:"This is a subtitle"})}),t(e,{title:"With call to action",style:r.part,children:t(i,{variant:"info",title:"Title",callToAction:t(T,{size:"small",color:"shakespear",icon:"add-filled"})})}),t(e,{title:"With children",style:r.part,children:t(i,{variant:"info",title:"Title",children:"This is a children"})}),t(e,{title:"With subtitle and children",style:r.part,children:t(i,{variant:"info",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})})]});var s,n,o;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <StoryBlock title="Alert variations">
      <StoryPart title="info" style={styles.part}>
        <LakeAlert variant="info" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="warning" style={styles.part}>
        <LakeAlert variant="warning" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="error" style={styles.part}>
        <LakeAlert variant="error" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="success" style={styles.part}>
        <LakeAlert variant="success" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>
    </StoryBlock>;
}`,...(o=(n=l.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,h,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(d=(h=a.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const j=["Variants","Formats"];export{a as Formats,l as Variants,j as __namedExportsOrder,w as default};
//# sourceMappingURL=Alert.stories-fb0d1eaa.js.map
