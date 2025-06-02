import{j as t,i as b,s as f}from"./ScrollView-DNzX2UpE.js";import{L as T}from"./LakeAlert-BC8GMZmH.js";import{L}from"./LakeButton-k1c78r39.js";import{u as v}from"./useBoolean-C1I6f9gr.js";import{t as o}from"./i18n-nEnXHto2.js";import{S as x,a as i}from"./_StoriesComponents-DZLD0G_7.js";import"./iframe-D9fVQpWw.js";import"./index-BeqyeIeF.js";import"./commonStyles-BBEkV6IC.js";import"./useResponsive-DN303nFi.js";import"./Pressable-C8aXbCDy.js";import"./index-C_jJlAmp.js";import"./extends-CF3RwP-h.js";import"./rifm-t9r8TNQF.js";import"./array-BfAlyugE.js";import"./Separator-CmlvbXjh.js";const e=({showMoreLabel:u=o("common.showMore"),showLessLabel:c=o("common.showLess"),initialCollapsed:d=!1,children:a,...h})=>{const[r,{toggle:y}]=v(d);return t.jsx(T,{anchored:!0,...h,callToAction:b(a)?t.jsx(L,{onPress:y,mode:"tertiary",size:"small",children:r?c:u}):null,children:r?a:null})};e.__docgenInfo={description:"",methods:[],displayName:"CollapsibleLakeAlert",props:{showMoreLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("common.showMore")',computed:!0}},showLessLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("common.showLess")',computed:!0}},initialCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const s=f.create({part:{padding:10,maxWidth:600}}),D={title:"Informations/CollapsibleAlert",component:e},l=()=>t.jsxs(x,{title:"Initially collapsed",children:[t.jsx(i,{title:"info",style:s.part,children:t.jsx(e,{variant:"info",title:"Title",subtitle:"This is a subtitle",children:"This alert is initially closed"})}),t.jsx(i,{title:"Initially open",style:s.part,children:t.jsx(e,{variant:"warning",title:"Title",subtitle:"This is a subtitle",initialCollapsed:!0,children:"This alert is initially open"})}),t.jsx(i,{title:"Custom labels",style:s.part,children:t.jsx(e,{variant:"error",title:"Title",subtitle:"This is a subtitle",showLessLabel:"Give me less",showMoreLabel:"Give me more",children:"With custom labels"})}),t.jsx(i,{title:"Without children",style:s.part,children:t.jsx(e,{variant:"info",title:"Title",subtitle:"This is a subtitle"})})]});l.__docgenInfo={description:"",methods:[],displayName:"Defaults"};var n,p,m;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const V=["Defaults"];export{l as Defaults,V as __namedExportsOrder,D as default};
//# sourceMappingURL=CollapsibleAlert.stories-CuBO1GwC.js.map
