import{s as P,c as u,j as f,a as e,L as k}from"./Space-0QEd5EJK.js";import{r as g}from"./index-CBqU2yxZ.js";import{L as p}from"./LakeSelect-BRArT0M-.js";import{S,a as t}from"./_StoriesComponents-C7kheqYo.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-jyCP8gIs.js";import"./useDisclosure-CS9t68_Y.js";import"./Pressable-D6Gv2Tr6.js";import"./a11y-DXvpDVrG.js";import"./Fill-BVjLX86m.js";import"./Popover-BA4OnHop.js";import"./useResponsive-BDq6En_j.js";import"./function-DduAtdVv.js";import"./Boxed-xcydBHmC.js";import"./BottomPanel-BHIShnm5.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-r9OFY3qO.js";import"./FocusTrap-4VJTFWX8.js";import"./array-rjEBP2Ry.js";import"./LoadingView-CWXS8wJa.js";import"./index-BknMujka.js";import"./TransitionView-Ddig4leW.js";import"./index-Bbmah9pb.js";import"./index-C3BPAJ4D.js";import"./index-D0MGDgfK.js";const b=P.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:u.gray[0]}}),U={title:"Forms/Select",component:p},E=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],r=({initialValue:a,...y})=>{const[h,v]=g.useState(a);return e(p,{placeholder:"Select someone...",value:h,onValueChange:v,items:E,style:b.select,...y})},l=()=>f(S,{title:"Select variations",children:[e(t,{title:"Default",children:e(r,{})}),e(t,{title:"With disabled items",children:e(r,{isItemDisabled:a=>a%2===0})}),e(t,{title:"With disabled items tooltips",children:e(r,{isItemDisabled:a=>a%2===0?"I'm disabled":!1})}),e(t,{title:"Small",children:e(r,{size:"small"})}),e(t,{title:"Borderless",children:e(r,{mode:"borderless",initialValue:1})}),e(t,{title:"With icon",children:e(r,{icon:"building-bank-regular"})}),e(t,{title:"With footer",children:e(r,{PopoverFooter:e(k,{style:b.footer,children:"List of random people"})})}),e(t,{title:"With error",children:e(r,{error:"Required field"})}),e(t,{title:"Disabled",children:e(r,{disabled:!0})}),e(t,{title:"Disabled with value",children:e(r,{disabled:!0,initialValue:2})})]}),i=()=>e(S,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(u).map(a=>e(t,{title:a,children:e(r,{icon:"building-bank-filled",color:a})},a))});var o,n,s;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select variations">
      <StoryPart title="Default">
        <EditableSelect />
      </StoryPart>

      <StoryPart title="With disabled items">
        <EditableSelect isItemDisabled={value => value % 2 === 0} />
      </StoryPart>

      <StoryPart title="With disabled items tooltips">
        <EditableSelect isItemDisabled={value => value % 2 === 0 ? "I'm disabled" : false} />
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
}`,...(s=(n=l.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,d,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select colors" description="Color prop change only icon color">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableSelect icon="building-bank-filled" color={(color as ColorVariants)} />
        </StoryPart>)}
    </StoryBlock>;
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const X=["Variations","Colors"];export{i as Colors,l as Variations,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Select.stories-CDOQW3o4.js.map
