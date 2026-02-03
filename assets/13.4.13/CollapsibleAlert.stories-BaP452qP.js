import{j as t,i as d,s as h}from"./ScrollView-_8KYWiBf.js";import{L as y}from"./LakeAlert-TlQ1CcWl.js";import{L as b}from"./LakeButton-jIbtwXL1.js";import{u as f}from"./useBoolean-DZ--DGri.js";import{t as o}from"./i18n-DNbmMgJT.js";import{S as T,a as i}from"./_StoriesComponents-D4OcUC6v.js";import"./iframe-B6yiAHCJ.js";import"./preload-helper-D1IIBeq1.js";import"./index-BCgZZqfb.js";import"./commonStyles-BBEkV6IC.js";import"./useResponsive-DWJkC8c9.js";import"./Tag-Di1UOj6L.js";import"./index-BkKZlxez.js";import"./extends-CF3RwP-h.js";import"./Pressable-D59uze9x.js";import"./index-B_UXp7Ng.js";import"./rifm-Dj9I2IO5.js";import"./array-BfAlyugE.js";import"./Separator-CrOyoMki.js";const e=({showMoreLabel:n=o("common.showMore"),showLessLabel:p=o("common.showLess"),initialCollapsed:m=!1,children:r,...u})=>{const[a,{toggle:c}]=f(m);return t.jsx(y,{anchored:!0,...u,callToAction:d(r)?t.jsx(b,{onPress:c,mode:"tertiary",size:"small",children:a?p:n}):null,children:a?r:null})};e.__docgenInfo={description:"",methods:[],displayName:"CollapsibleLakeAlert",props:{showMoreLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("common.showMore")',computed:!0}},showLessLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("common.showLess")',computed:!0}},initialCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const s=h.create({part:{padding:10,maxWidth:600}}),D={title:"Informations/CollapsibleAlert",component:e},l=()=>t.jsxs(T,{title:"Initially collapsed",children:[t.jsx(i,{title:"info",style:s.part,children:t.jsx(e,{variant:"info",title:"Title",subtitle:"This is a subtitle",children:"This alert is initially closed"})}),t.jsx(i,{title:"Initially open",style:s.part,children:t.jsx(e,{variant:"warning",title:"Title",subtitle:"This is a subtitle",initialCollapsed:!0,children:"This alert is initially open"})}),t.jsx(i,{title:"Custom labels",style:s.part,children:t.jsx(e,{variant:"error",title:"Title",subtitle:"This is a subtitle",showLessLabel:"Give me less",showMoreLabel:"Give me more",children:"With custom labels"})}),t.jsx(i,{title:"Without children",style:s.part,children:t.jsx(e,{variant:"info",title:"Title",subtitle:"This is a subtitle"})})]});l.__docgenInfo={description:"",methods:[],displayName:"Defaults"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const V=["Defaults"];export{l as Defaults,V as __namedExportsOrder,D as default};
//# sourceMappingURL=CollapsibleAlert.stories-BaP452qP.js.map
