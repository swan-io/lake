import{s as P,c as p,j as f,a as e,L as k}from"./Space-CgCWV-Mq.js";import{r as g}from"./index-CBqU2yxZ.js";import{L as u}from"./LakeSelect-BB8XJQ6s.js";import{S,a as t}from"./_StoriesComponents-B1tuaLOg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-btEIBsfg.js";import"./useDisclosure-CS9t68_Y.js";import"./Pressable-DFt-3toh.js";import"./a11y-DXvpDVrG.js";import"./Fill-CKUkIdcB.js";import"./Popover-CzPkoIVN.js";import"./useResponsive-HHrxyCXA.js";import"./function-DNthd_7Y.js";import"./Boxed-zu2eTygX.js";import"./BottomPanel-BUjYBvpI.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-BkFYzAYb.js";import"./FocusTrap-D_xjippm.js";import"./array-rjEBP2Ry.js";import"./LoadingView-ByD0I-Nz.js";import"./index-CNnwCGiS.js";import"./TransitionView-DYUYBhiu.js";import"./index-MXBIjStY.js";import"./index-BScOByK1.js";import"./index-Bi7lHBnd.js";const y=P.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:p.gray[0]}}),U={title:"Forms/Select",component:u},E=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],r=({initialValue:o,...b})=>{const[h,v]=g.useState(o);return e(u,{placeholder:"Select someone...",value:h,onValueChange:v,items:E,style:y.select,...b})},a=()=>f(S,{title:"Select variations",children:[e(t,{title:"Default",children:e(r,{})}),e(t,{title:"Small",children:e(r,{size:"small"})}),e(t,{title:"Borderless",children:e(r,{mode:"borderless",initialValue:1})}),e(t,{title:"With icon",children:e(r,{icon:"building-bank-regular"})}),e(t,{title:"With footer",children:e(r,{PopoverFooter:e(k,{style:y.footer,children:"List of random people"})})}),e(t,{title:"With error",children:e(r,{error:"Required field"})}),e(t,{title:"Disabled",children:e(r,{disabled:!0})}),e(t,{title:"Disabled with value",children:e(r,{disabled:!0,initialValue:2})})]}),l=()=>e(S,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(p).map(o=>e(t,{title:o,children:e(r,{icon:"building-bank-filled",color:o})},o))});var i,n,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select variations">
      <StoryPart title="Default">
        <EditableSelect />
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
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,m,d;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select colors" description="Color prop change only icon color">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableSelect icon="building-bank-filled" color={(color as ColorVariants)} />
        </StoryPart>)}
    </StoryBlock>;
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const X=["Variations","Colors"];export{l as Colors,a as Variations,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Select.stories-CYl3UF4M.js.map
