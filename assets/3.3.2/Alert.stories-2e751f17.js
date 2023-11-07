import{S as T,a as y,j as t}from"./Space-357d3b43.js";import{L as e}from"./LakeAlert-7e998040.js";import{a as p}from"./LakeButton-bd450cda.js";import{S as u,a as i}from"./_StoriesComponents-9af3c44d.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-f1286426.js";import"./commonStyles-e9d52da3.js";import"./Pressable-babfcc78.js";import"./index-eaebc258.js";const r=T.create({part:{padding:10,maxWidth:600}}),g={title:"Informations/Alert",component:e},l=()=>y(u,{title:"Alert variations",children:[t(i,{title:"info",style:r.part,children:t(e,{variant:"info",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})}),t(i,{title:"warning",style:r.part,children:t(e,{variant:"warning",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})}),t(i,{title:"error",style:r.part,children:t(e,{variant:"error",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})}),t(i,{title:"success",style:r.part,children:t(e,{variant:"success",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})}),t(i,{title:"neutral",style:r.part,children:t(e,{variant:"neutral",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})})]}),a=()=>y(u,{title:"Alert formats",children:[t(i,{title:"Anchored",style:r.part,children:t(e,{anchored:!0,variant:"info",title:"Title"})}),t(i,{title:"With subtitle",style:r.part,children:t(e,{variant:"info",title:"Title",subtitle:"This is a subtitle"})}),t(i,{title:"With call to action",style:r.part,children:t(e,{variant:"info",title:"Title",callToAction:t(p,{size:"small",color:"shakespear",icon:"add-filled",ariaLabel:"Action !"})})}),t(i,{title:"With children",style:r.part,children:t(e,{variant:"info",title:"Title",children:"This is a children"})}),t(i,{title:"With subtitle and children",style:r.part,children:t(e,{variant:"info",title:"Title",subtitle:"This is a subtitle",children:"This is a children"})})]});var s,n,o;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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

      <StoryPart title="neutral" style={styles.part}>
        <LakeAlert variant="neutral" title="Title" subtitle="This is a subtitle">
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
        <LakeAlert variant="info" title="Title" callToAction={<LakeButton size="small" color="shakespear" icon="add-filled" ariaLabel="Action !" />} />
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
}`,...(d=(h=a.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const B=["Variants","Formats"];export{a as Formats,l as Variants,B as __namedExportsOrder,g as default};
//# sourceMappingURL=Alert.stories-2e751f17.js.map