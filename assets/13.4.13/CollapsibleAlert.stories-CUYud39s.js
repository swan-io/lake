import{j as t,i as d,s as h}from"./ScrollView-GnMM-MlE.js";import{L as y}from"./LakeAlert-Btz2XHn3.js";import{L as b}from"./LakeButton-DsqM0yeg.js";import{u as f}from"./useBoolean-B9NMGOp9.js";import{t as o}from"./i18n-CjHCL0yh.js";import{S as T,a as i}from"./_StoriesComponents-cAFR0z6z.js";import"./iframe-K-MNn7hz.js";import"./preload-helper-D1IIBeq1.js";import"./index-DLO6An4q.js";import"./commonStyles-BBEkV6IC.js";import"./useResponsive-DoKngXOx.js";import"./Tag-J5VDlnqJ.js";import"./index-Q_Fjn5eh.js";import"./extends-CF3RwP-h.js";import"./Pressable-qWc6ZaKO.js";import"./index-BfKoHZ8z.js";import"./rifm-Di7LNOEF.js";import"./array-BfAlyugE.js";import"./Separator-BTvze7ui.js";const e=({showMoreLabel:n=o("common.showMore"),showLessLabel:p=o("common.showLess"),initialCollapsed:m=!1,children:r,...u})=>{const[a,{toggle:c}]=f(m);return t.jsx(y,{anchored:!0,...u,callToAction:d(r)?t.jsx(b,{onPress:c,mode:"tertiary",size:"small",children:a?p:n}):null,children:a?r:null})};e.__docgenInfo={description:"",methods:[],displayName:"CollapsibleLakeAlert",props:{showMoreLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("common.showMore")',computed:!0}},showLessLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("common.showLess")',computed:!0}},initialCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const s=h.create({part:{padding:10,maxWidth:600}}),D={title:"Informations/CollapsibleAlert",component:e},l=()=>t.jsxs(T,{title:"Initially collapsed",children:[t.jsx(i,{title:"info",style:s.part,children:t.jsx(e,{variant:"info",title:"Title",subtitle:"This is a subtitle",children:"This alert is initially closed"})}),t.jsx(i,{title:"Initially open",style:s.part,children:t.jsx(e,{variant:"warning",title:"Title",subtitle:"This is a subtitle",initialCollapsed:!0,children:"This alert is initially open"})}),t.jsx(i,{title:"Custom labels",style:s.part,children:t.jsx(e,{variant:"error",title:"Title",subtitle:"This is a subtitle",showLessLabel:"Give me less",showMoreLabel:"Give me more",children:"With custom labels"})}),t.jsx(i,{title:"Without children",style:s.part,children:t.jsx(e,{variant:"info",title:"Title",subtitle:"This is a subtitle"})})]});l.__docgenInfo={description:"",methods:[],displayName:"Defaults"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CollapsibleAlert.stories-CUYud39s.js.map
