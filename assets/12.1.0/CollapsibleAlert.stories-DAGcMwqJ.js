import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{L as b}from"./LakeAlert-D_6gK0uR.js";import{L as f}from"./LakeButton-Y2oJasCQ.js";import{u as T}from"./useBoolean-CLEWiLu4.js";import{i as L,s as v}from"./ScrollView-CRqCiH49.js";import{t as o}from"./i18n-CNtB0jvR.js";import{S as x,a as i}from"./_StoriesComponents-BJjd_5r-.js";import"./commonStyles-BBEkV6IC.js";import"./useResponsive-DVbm4z6j.js";import"./index-D9D9kDko.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Pressable-D0TQHTzC.js";import"./index-X5c_aylL.js";import"./extends-CF3RwP-h.js";import"./index-D0hBKHsB.js";import"./rifm-B2FFccIi.js";import"./utc-JZaFi-_r.js";import"./array-BfAlyugE.js";import"./Separator-Bkm-h-Cw.js";const e=({showMoreLabel:u=o("common.showMore"),showLessLabel:c=o("common.showLess"),initialCollapsed:d=!1,children:r,...h})=>{const[a,{toggle:y}]=T(d);return t.jsx(b,{anchored:!0,...h,callToAction:L(r)?t.jsx(f,{onPress:y,mode:"tertiary",size:"small",children:a?c:u}):null,children:a?r:null})};e.__docgenInfo={description:"",methods:[],displayName:"CollapsibleLakeAlert",props:{showMoreLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("common.showMore")',computed:!0}},showLessLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("common.showLess")',computed:!0}},initialCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const s=v.create({part:{padding:10,maxWidth:600}}),R={title:"Informations/CollapsibleAlert",component:e},l=()=>t.jsxs(x,{title:"Initially collapsed",children:[t.jsx(i,{title:"info",style:s.part,children:t.jsx(e,{variant:"info",title:"Title",subtitle:"This is a subtitle",children:"This alert is initially closed"})}),t.jsx(i,{title:"Initially open",style:s.part,children:t.jsx(e,{variant:"warning",title:"Title",subtitle:"This is a subtitle",initialCollapsed:!0,children:"This alert is initially open"})}),t.jsx(i,{title:"Custom labels",style:s.part,children:t.jsx(e,{variant:"error",title:"Title",subtitle:"This is a subtitle",showLessLabel:"Give me less",showMoreLabel:"Give me more",children:"With custom labels"})}),t.jsx(i,{title:"Without children",style:s.part,children:t.jsx(e,{variant:"info",title:"Title",subtitle:"This is a subtitle"})})]});l.__docgenInfo={description:"",methods:[],displayName:"Defaults"};var n,p,m;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const z=["Defaults"];export{l as Defaults,z as __namedExportsOrder,R as default};
//# sourceMappingURL=CollapsibleAlert.stories-DAGcMwqJ.js.map
