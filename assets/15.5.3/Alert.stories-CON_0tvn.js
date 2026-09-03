import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-DAAsiA_8.js";import{U as r,ht as i,it as a,kt as o,st as s}from"./ScrollView-CMRijcj4.js";import{r as c,t as l}from"./LakeButton-COOre31o.js";import{n as u,r as d,t as f}from"./_StoriesComponents-CyiaMgiM.js";import{n as p,t as m}from"./BulletList-DaNljrOG.js";import{n as h,t as g}from"./LakeAlert-CeMZ1hUg.js";import{n as _,t as v}from"./Popover-BFvoI1ci.js";var y,b,x,S,C,w,T,E,D;t((()=>{y=e(n()),i(),p(),h(),c(),_(),s(),d(),b=r(),x=o.create({part:{padding:10,maxWidth:600},button:{alignSelf:`flex-start`},alertInPopover:{width:500}}),S={title:`Informations/Alert`,component:g},C=()=>(0,b.jsxs)(f,{title:`Alert variations`,children:[(0,b.jsx)(u,{title:`info`,style:x.part,children:(0,b.jsx)(g,{variant:`info`,title:`Title`,subtitle:`This is a subtitle`,children:`This is a children`})}),(0,b.jsx)(u,{title:`warning`,style:x.part,children:(0,b.jsx)(g,{variant:`warning`,title:`Title`,subtitle:`This is a subtitle`,children:`This is a children`})}),(0,b.jsx)(u,{title:`error`,style:x.part,children:(0,b.jsx)(g,{variant:`error`,title:`Title`,subtitle:`This is a subtitle`,children:`This is a children`})}),(0,b.jsx)(u,{title:`success`,style:x.part,children:(0,b.jsx)(g,{variant:`success`,title:`Title`,subtitle:`This is a subtitle`,children:`This is a children`})}),(0,b.jsx)(u,{title:`neutral`,style:x.part,children:(0,b.jsx)(g,{variant:`neutral`,title:`Title`,subtitle:`This is a subtitle`,children:`This is a children`})}),(0,b.jsx)(u,{title:`With tag`,style:x.part,children:(0,b.jsx)(g,{variant:`warning`,title:`Title`,subtitle:`This is a subtitle`,tag:`Action required`,children:`This is a children`})})]}),w=()=>(0,b.jsxs)(f,{title:`Alert formats`,children:[(0,b.jsx)(u,{title:`Anchored`,style:x.part,children:(0,b.jsx)(g,{anchored:!0,variant:`info`,title:`Title`})}),(0,b.jsx)(u,{title:`With subtitle`,style:x.part,children:(0,b.jsx)(g,{variant:`info`,title:`Title`,subtitle:`This is a subtitle`})}),(0,b.jsx)(u,{title:`With call to action`,style:x.part,children:(0,b.jsx)(g,{variant:`info`,title:`Title`,callToAction:(0,b.jsx)(l,{size:`small`,color:`shakespear`,icon:`add-filled`,ariaLabel:`Action !`})})}),(0,b.jsx)(u,{title:`With children`,style:x.part,children:(0,b.jsx)(g,{variant:`info`,title:`Title`,children:`This is a children`})}),(0,b.jsx)(u,{title:`With subtitle and children`,style:x.part,children:(0,b.jsx)(g,{variant:`info`,title:`Title`,subtitle:`This is a subtitle`,children:`This is a children`})})]}),T=({anchored:e=!1})=>{let[t,n]=(0,y.useState)(!1),r=(0,y.useRef)(null);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{ref:r,size:`small`,style:x.button,onPress:()=>n(!0),children:`Open popover`}),(0,b.jsx)(v,{referenceRef:r,visible:t,onDismiss:()=>n(!1),children:(0,b.jsx)(g,{anchored:e,inPopover:!0,variant:`warning`,style:x.alertInPopover,title:`Onboarding incomplete`,callToAction:(0,b.jsx)(l,{onPress:()=>n(!1),icon:`lake-close`,mode:`tertiary`,size:`small`,color:`warning`,ariaLabel:`Close`}),children:(0,b.jsx)(m,{color:a.warning[700],items:[`Email`,`Name`,`Business Activity`,`Monthly Payment Volume`]})})})]})},E=()=>(0,b.jsxs)(f,{title:`Alert in a popover`,description:"Popover clips its content with an 8px border radius. Set `inPopover={true}` on the alert so its corners match.",children:[(0,b.jsx)(u,{title:`With popover`,style:x.part,children:(0,b.jsx)(T,{})}),(0,b.jsx)(u,{title:`Anchored`,style:x.part,children:(0,b.jsx)(T,{anchored:!0})})]}),C.__docgenInfo={description:``,methods:[],displayName:`Variants`},w.__docgenInfo={description:``,methods:[],displayName:`Formats`},E.__docgenInfo={description:``,methods:[],displayName:`InPopover`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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

      <StoryPart title="With tag" style={styles.part}>
        <LakeAlert variant="warning" title="Title" subtitle="This is a subtitle" tag="Action required">
          This is a children
        </LakeAlert>
      </StoryPart>
    </StoryBlock>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Alert in a popover" description="Popover clips its content with an 8px border radius. Set \`inPopover={true}\` on the alert so its corners match.">
      <StoryPart title="With popover" style={styles.part}>
        <AlertInPopover />
      </StoryPart>

      <StoryPart title="Anchored" style={styles.part}>
        <AlertInPopover anchored={true} />
      </StoryPart>
    </StoryBlock>;
}`,...E.parameters?.docs?.source}}},D=[`Variants`,`Formats`,`InPopover`]}))();export{w as Formats,E as InPopover,C as Variants,D as __namedExportsOrder,S as default};
//# sourceMappingURL=Alert.stories-CON_0tvn.js.map