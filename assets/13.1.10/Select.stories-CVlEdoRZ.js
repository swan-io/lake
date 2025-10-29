import{j as e,L as p,s as S,c as s}from"./ScrollView-BqTydURq.js";import{r as b}from"./iframe-9aSoULCZ.js";import{L as o}from"./LakeSelect-BwXu061M.js";import{S as n,a as t}from"./_StoriesComponents-DN4Bg-Pf.js";import"./index-SVMasu_O.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useDisclosure-Bh3-gWLw.js";import"./Pressable-DTDVRMBn.js";import"./FocusTrap-CwFCF3wQ.js";import"./array-BfAlyugE.js";import"./Fill-Cuy2osBs.js";import"./Popover-BxQ70H36.js";import"./useResponsive-CUtXKT7U.js";import"./function-CLsSHWhG.js";import"./BottomPanel-g7hUw4Xp.js";import"./useBodyClassName-CluOnEB1.js";import"./Suspendable-DNxscq-W.js";import"./index-DHXg-JMF.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CJxI5QP0.js";import"./index-vUELBNf4.js";import"./Separator-D7jsXJ4v.js";const d=S.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:s.gray[0]}}),J={title:"Forms/Select",component:o},v=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],a=({initialValue:l,...m})=>{const[c,u]=b.useState(l);return e.jsx(o,{placeholder:"Select someone...",value:c,onValueChange:u,items:v,style:d.select,...m})},r=()=>e.jsxs(n,{title:"Select variations",children:[e.jsx(t,{title:"Default",children:e.jsx(a,{})}),e.jsx(t,{title:"With disabled items",children:e.jsx(a,{disabledItems:[{value:4},{value:5},{value:7},{value:12},{value:15},{value:16},{value:999}]})}),e.jsx(t,{title:"With disabled items tooltips",children:e.jsx(a,{disabledItems:[{message:"Item Émilie is disabled",value:4},{message:"Item François is disabled",value:5},{message:"Item Marie-Anne is disabled",value:7},{message:"Item Valérie is disabled",value:12},{message:"Item Jérôme is disabled",value:15},{message:"Item Thomas is disabled",value:16}]})}),e.jsx(t,{title:"Small",children:e.jsx(a,{size:"small"})}),e.jsx(t,{title:"Borderless",children:e.jsx(a,{mode:"borderless",initialValue:1})}),e.jsx(t,{title:"With icon",children:e.jsx(a,{icon:"building-bank-regular"})}),e.jsx(t,{title:"With footer",children:e.jsx(a,{PopoverFooter:e.jsx(p,{style:d.footer,children:"List of random people"})})}),e.jsx(t,{title:"With error",children:e.jsx(a,{error:"Required field"})}),e.jsx(t,{title:"Disabled",children:e.jsx(a,{disabled:!0})}),e.jsx(t,{title:"Disabled with value",children:e.jsx(a,{disabled:!0,initialValue:2})})]}),i=()=>e.jsx(n,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(s).map(l=>e.jsx(t,{title:l,children:e.jsx(a,{icon:"building-bank-filled",color:l})},l))});r.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.__docgenInfo={description:"",methods:[],displayName:"Colors"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select variations">
      <StoryPart title="Default">
        <EditableSelect />
      </StoryPart>

      <StoryPart title="With disabled items">
        <EditableSelect disabledItems={[{
        value: 4
      }, {
        value: 5
      }, {
        value: 7
      }, {
        value: 12
      }, {
        value: 15
      }, {
        value: 16
      }, {
        value: 999
      }]} />
      </StoryPart>

      <StoryPart title="With disabled items tooltips">
        <EditableSelect disabledItems={[{
        message: "Item Émilie is disabled",
        value: 4
      }, {
        message: "Item François is disabled",
        value: 5
      }, {
        message: "Item Marie-Anne is disabled",
        value: 7
      }, {
        message: "Item Valérie is disabled",
        value: 12
      }, {
        message: "Item Jérôme is disabled",
        value: 15
      }, {
        message: "Item Thomas is disabled",
        value: 16
      }]} />
      </StoryPart>

      <StoryPart title="Small">
        <EditableSelect size="small" />
      </StoryPart>

      <StoryPart title="Borderless">
        <EditableSelect mode="borderless" initialValue={1} />
      </StoryPart>

      <StoryPart title="With icon">
        <EditableSelect icon="building-bank-regular" />
      </StoryPart>

      <StoryPart title="With footer">
        <EditableSelect PopoverFooter={<LakeText style={styles.footer}>List of random people</LakeText>} />
      </StoryPart>

      <StoryPart title="With error">
        <EditableSelect error="Required field" />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableSelect disabled={true} />
      </StoryPart>

      <StoryPart title="Disabled with value">
        <EditableSelect disabled={true} initialValue={2} />
      </StoryPart>
    </StoryBlock>;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select colors" description="Color prop change only icon color">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableSelect icon="building-bank-filled" color={color as ColorVariants} />
        </StoryPart>)}
    </StoryBlock>;
}`,...i.parameters?.docs?.source}}};const O=["Variations","Colors"];export{i as Colors,r as Variations,O as __namedExportsOrder,J as default};
//# sourceMappingURL=Select.stories-CVlEdoRZ.js.map
