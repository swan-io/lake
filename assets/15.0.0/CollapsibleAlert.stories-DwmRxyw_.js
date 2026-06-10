import{i as e}from"./preload-helper-C6cs2Kqh.js";import{F as t,L as n,St as r,U as i,ht as a}from"./ScrollView-jxbY7XtG.js";import{r as o,t as s}from"./LakeButton-vOYjlZWn.js";import{n as c,t as l}from"./LakeAlert-0W2vzE4g.js";import{i as u,s as d}from"./i18n-C_SsfmJu.js";import{n as f,t as p}from"./useBoolean-bTdrUtQp.js";import{n as m,r as h,t as g}from"./_StoriesComponents-9Fja9n1G.js";var _,v,y=e((()=>{c(),o(),p(),t(),u(),_=i(),v=({showMoreLabel:e=d(`common.showMore`),showLessLabel:t=d(`common.showLess`),initialCollapsed:r=!1,children:i,...a})=>{let[o,{toggle:c}]=f(r);return(0,_.jsx)(l,{anchored:!0,...a,callToAction:n(i)?(0,_.jsx)(s,{onPress:c,mode:`tertiary`,size:`small`,children:o?t:e}):null,children:o?i:null})},v.__docgenInfo={description:``,methods:[],displayName:`CollapsibleLakeAlert`,props:{showMoreLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`t("common.showMore")`,computed:!0}},showLessLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`t("common.showLess")`,computed:!0}},initialCollapsed:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``}}}})),b,x,S,C,w;e((()=>{a(),y(),h(),b=i(),x=r.create({part:{padding:10,maxWidth:600}}),S={title:`Informations/CollapsibleAlert`,component:v},C=()=>(0,b.jsxs)(g,{title:`Initially collapsed`,children:[(0,b.jsx)(m,{title:`info`,style:x.part,children:(0,b.jsx)(v,{variant:`info`,title:`Title`,subtitle:`This is a subtitle`,children:`This alert is initially closed`})}),(0,b.jsx)(m,{title:`Initially open`,style:x.part,children:(0,b.jsx)(v,{variant:`warning`,title:`Title`,subtitle:`This is a subtitle`,initialCollapsed:!0,children:`This alert is initially open`})}),(0,b.jsx)(m,{title:`Custom labels`,style:x.part,children:(0,b.jsx)(v,{variant:`error`,title:`Title`,subtitle:`This is a subtitle`,showLessLabel:`Give me less`,showMoreLabel:`Give me more`,children:`With custom labels`})}),(0,b.jsx)(m,{title:`Without children`,style:x.part,children:(0,b.jsx)(v,{variant:`info`,title:`Title`,subtitle:`This is a subtitle`})})]}),C.__docgenInfo={description:``,methods:[],displayName:`Defaults`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Initially collapsed">
      <StoryPart title="info" style={styles.part}>
        <CollapsibleLakeAlert variant="info" title="Title" subtitle="This is a subtitle">
          This alert is initially closed
        </CollapsibleLakeAlert>
      </StoryPart>

      <StoryPart title="Initially open" style={styles.part}>
        <CollapsibleLakeAlert variant="warning" title="Title" subtitle="This is a subtitle" initialCollapsed={true}>
          This alert is initially open
        </CollapsibleLakeAlert>
      </StoryPart>

      <StoryPart title="Custom labels" style={styles.part}>
        <CollapsibleLakeAlert variant="error" title="Title" subtitle="This is a subtitle" showLessLabel="Give me less" showMoreLabel="Give me more">
          With custom labels
        </CollapsibleLakeAlert>
      </StoryPart>

      <StoryPart title="Without children" style={styles.part}>
        <CollapsibleLakeAlert variant="info" title="Title" subtitle="This is a subtitle" />
      </StoryPart>
    </StoryBlock>;
}`,...C.parameters?.docs?.source}}},w=[`Defaults`]}))();export{C as Defaults,w as __namedExportsOrder,S as default};
//# sourceMappingURL=CollapsibleAlert.stories-DwmRxyw_.js.map