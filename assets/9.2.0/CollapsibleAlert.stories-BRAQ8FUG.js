import{j as t}from"./jsx-runtime-BlAj40OV.js";import{L as b}from"./LakeAlert-BKoYXZxE.js";import{L as f}from"./LakeButton-92bu12CU.js";import{u as T}from"./useBoolean-DHW5baxv.js";import{i as L,s as v}from"./ScrollView-C9Sl8l-9.js";import{t as o}from"./i18n-wa0w1hPY.js";import{S as x,a as i}from"./_StoriesComponents--LS6DWDz.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./commonStyles-t4XfA7cz.js";import"./useResponsive-CzIqCC5v.js";import"./Pressable-B-ndY5ns.js";import"./index-D9GDMxJ-.js";import"./extends-CF3RwP-h.js";import"./index-DJFdew98.js";import"./rifm-Kh7ohp2j.js";import"./utc-Bb9NEY8r.js";import"./array-BfAlyugE.js";const e=({showMoreLabel:u=o("common.showMore"),showLessLabel:c=o("common.showLess"),initialCollapsed:d=!1,children:r,...h})=>{const[a,{toggle:y}]=T(d);return t.jsx(b,{anchored:!0,...h,callToAction:L(r)?t.jsx(f,{onPress:y,mode:"tertiary",size:"small",children:a?c:u}):null,children:a?r:null})};e.__docgenInfo={description:"",methods:[],displayName:"CollapsibleLakeAlert",props:{showMoreLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("common.showMore")',computed:!0}},showLessLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("common.showLess")',computed:!0}},initialCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const s=v.create({part:{padding:10,maxWidth:600}}),E={title:"Informations/CollapsibleAlert",component:e},l=()=>t.jsxs(x,{title:"Initially collapsed",children:[t.jsx(i,{title:"info",style:s.part,children:t.jsx(e,{variant:"info",title:"Title",subtitle:"This is a subtitle",children:"This alert is initially closed"})}),t.jsx(i,{title:"Initially open",style:s.part,children:t.jsx(e,{variant:"warning",title:"Title",subtitle:"This is a subtitle",initialCollapsed:!0,children:"This alert is initially open"})}),t.jsx(i,{title:"Custom labels",style:s.part,children:t.jsx(e,{variant:"error",title:"Title",subtitle:"This is a subtitle",showLessLabel:"Give me less",showMoreLabel:"Give me more",children:"With custom labels"})}),t.jsx(i,{title:"Without children",style:s.part,children:t.jsx(e,{variant:"info",title:"Title",subtitle:"This is a subtitle"})})]});l.__docgenInfo={description:"",methods:[],displayName:"Defaults"};var n,p,m;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Defaults"];export{l as Defaults,R as __namedExportsOrder,E as default};
//# sourceMappingURL=CollapsibleAlert.stories-BRAQ8FUG.js.map
