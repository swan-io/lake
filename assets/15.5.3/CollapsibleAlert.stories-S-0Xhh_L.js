import{i as e}from"./preload-helper-CCSz8wUY.js";import{F as t,L as n,U as r,ht as i,kt as a}from"./ScrollView-C-QKdz_V.js";import{n as o,t as s}from"./useBoolean-DvBxv6wg.js";import{r as c,t as l}from"./LakeButton-Dr4H-eri.js";import{n as u,t as d}from"./LakeAlert-DUzKGcfI.js";import{a as f,s as p}from"./i18n-C3qZKhr3.js";import{n as m,r as h,t as g}from"./_StoriesComponents-CT0jR6qv.js";var _,v,y=e((()=>{u(),c(),s(),t(),f(),_=r(),v=({showMoreLabel:e=p(`common.showMore`),showLessLabel:t=p(`common.showLess`),initialCollapsed:r=!1,children:i,...a})=>{let[s,{toggle:c}]=o(r);return(0,_.jsx)(d,{anchored:!0,...a,callToAction:n(i)?(0,_.jsx)(l,{onPress:c,mode:`tertiary`,size:`small`,children:s?t:e}):null,children:s?i:null})},v.__docgenInfo={description:``,methods:[],displayName:`CollapsibleLakeAlert`,props:{showMoreLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`t("common.showMore")`,computed:!0}},showLessLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`t("common.showLess")`,computed:!0}},initialCollapsed:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``}}}})),b,x,S,C,w;e((()=>{i(),y(),h(),b=r(),x=a.create({part:{padding:10,maxWidth:600}}),S={title:`Informations/CollapsibleAlert`,component:v},C=()=>(0,b.jsxs)(g,{title:`Initially collapsed`,children:[(0,b.jsx)(m,{title:`info`,style:x.part,children:(0,b.jsx)(v,{variant:`info`,title:`Title`,subtitle:`This is a subtitle`,children:`This alert is initially closed`})}),(0,b.jsx)(m,{title:`Initially open`,style:x.part,children:(0,b.jsx)(v,{variant:`warning`,title:`Title`,subtitle:`This is a subtitle`,initialCollapsed:!0,children:`This alert is initially open`})}),(0,b.jsx)(m,{title:`Custom labels`,style:x.part,children:(0,b.jsx)(v,{variant:`error`,title:`Title`,subtitle:`This is a subtitle`,showLessLabel:`Give me less`,showMoreLabel:`Give me more`,children:`With custom labels`})}),(0,b.jsx)(m,{title:`Without children`,style:x.part,children:(0,b.jsx)(v,{variant:`info`,title:`Title`,subtitle:`This is a subtitle`})})]}),C.__docgenInfo={description:``,methods:[],displayName:`Defaults`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CollapsibleAlert.stories-S-0Xhh_L.js.map