import{a as e,i as b,s as f,j as L}from"./Space-DOX6gAiW.js";import{L as v}from"./LakeAlert-urEr72PC.js";import{L as T}from"./LakeButton-B3KFTJp0.js";import{u as C}from"./useBoolean-B5BCxMq_.js";import{t as n}from"./i18n-t5FQMYIj.js";import{S as w,a as l}from"./_StoriesComponents-xnDfvWtG.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-DfxPIYeB.js";import"./index-z9UhBOMa.js";import"./rifm-CU5abgDe.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";const t=({showMoreLabel:s=n("common.showMore"),showLessLabel:c=n("common.showLess"),initialCollapsed:d=!1,children:r,...y})=>{const[o,{toggle:h}]=C(d);return e(v,{anchored:!0,...y,callToAction:b(r)?e(T,{onPress:h,mode:"tertiary",size:"small",children:o?c:s}):null,children:o?r:null})};try{t.displayName="CollapsibleLakeAlert",t.__docgenInfo={description:"",displayName:"CollapsibleLakeAlert",props:{anchored:{defaultValue:null,description:"",name:"anchored",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"neutral"'}]}},callToAction:{defaultValue:null,description:"",name:"callToAction",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},showMoreLabel:{defaultValue:{value:'t("common.showMore")'},description:"",name:"showMoreLabel",required:!1,type:{name:"string"}},showLessLabel:{defaultValue:{value:'t("common.showLess")'},description:"",name:"showLessLabel",required:!1,type:{name:"string"}},initialCollapsed:{defaultValue:{value:"false"},description:"",name:"initialCollapsed",required:!1,type:{name:"boolean"}}}}}catch{}const i=f.create({part:{padding:10,maxWidth:600}}),D={title:"Informations/CollapsibleAlert",component:t},a=()=>L(w,{title:"Initially collapsed",children:[e(l,{title:"info",style:i.part,children:e(t,{variant:"info",title:"Title",subtitle:"This is a subtitle",children:"This alert is initially closed"})}),e(l,{title:"Initially open",style:i.part,children:e(t,{variant:"warning",title:"Title",subtitle:"This is a subtitle",initialCollapsed:!0,children:"This alert is initially open"})}),e(l,{title:"Custom labels",style:i.part,children:e(t,{variant:"error",title:"Title",subtitle:"This is a subtitle",showLessLabel:"Give me less",showMoreLabel:"Give me more",children:"With custom labels"})}),e(l,{title:"Without children",style:i.part,children:e(t,{variant:"info",title:"Title",subtitle:"This is a subtitle"})})]});var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Defaults"];export{a as Defaults,R as __namedExportsOrder,D as default};
//# sourceMappingURL=CollapsibleAlert.stories-jFxydgWw.js.map
