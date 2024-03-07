import{s as g,c as u,j as P,a as e,L as f}from"./Space-zmwqTKHi.js";import{r as k}from"./index-CBqU2yxZ.js";import{L as p}from"./LakeSelect-ZfSnHgai.js";import{S,a as t}from"./_StoriesComponents-AsKKxUUl.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-B7Nn-ywD.js";import"./useDisclosure-CS9t68_Y.js";import"./Pressable-C7cGiMIQ.js";import"./a11y-DXvpDVrG.js";import"./Fill-cr7fUld1.js";import"./Popover-CmRjX--X.js";import"./useResponsive-ExgpKUbn.js";import"./function-Cx6maCMr.js";import"./Boxed-zE7Q22Jk.js";import"./BottomPanel-C9JHhcZm.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-BcPUczoF.js";import"./FocusTrap-D2e4W7Ji.js";import"./array-rjEBP2Ry.js";import"./LoadingView-itRlBBlm.js";import"./index-D8KEztUm.js";import"./TransitionView-BlamPqme.js";import"./index-CA2FyLdQ.js";import"./index-CXCR4aye.js";import"./index-CLwPXFcj.js";const b=g.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:u.gray[0]}}),U={title:"Forms/Select",component:p},E=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],a=({initialValue:l,...v})=>{const[y,h]=k.useState(l);return e(p,{placeholder:"Select someone...",value:y,onValueChange:h,items:E,style:b.select,...v})},r=()=>P(S,{title:"Select variations",children:[e(t,{title:"Default",children:e(a,{})}),e(t,{title:"With disabled items",children:e(a,{disabledItems:[{value:4},{value:5},{value:7},{value:12},{value:15},{value:16},{value:999}]})}),e(t,{title:"With disabled items tooltips",children:e(a,{disabledItems:[{message:"Item Émilie is disabled",value:4},{message:"Item François is disabled",value:5},{message:"Item Marie-Anne is disabled",value:7},{message:"Item Valérie is disabled",value:12},{message:"Item Jérôme is disabled",value:15},{message:"Item Thomas is disabled",value:16}]})}),e(t,{title:"Small",children:e(a,{size:"small"})}),e(t,{title:"Borderless",children:e(a,{mode:"borderless",initialValue:1})}),e(t,{title:"With icon",children:e(a,{icon:"building-bank-regular"})}),e(t,{title:"With footer",children:e(a,{PopoverFooter:e(f,{style:b.footer,children:"List of random people"})})}),e(t,{title:"With error",children:e(a,{error:"Required field"})}),e(t,{title:"Disabled",children:e(a,{disabled:!0})}),e(t,{title:"Disabled with value",children:e(a,{disabled:!0,initialValue:2})})]}),i=()=>e(S,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(u).map(l=>e(t,{title:l,children:e(a,{icon:"building-bank-filled",color:l})},l))});var o,n,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,d,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select colors" description="Color prop change only icon color">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableSelect icon="building-bank-filled" color={(color as ColorVariants)} />
        </StoryPart>)}
    </StoryBlock>;
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const X=["Variations","Colors"];export{i as Colors,r as Variations,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Select.stories-wcxOr6Ua.js.map
