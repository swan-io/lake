import{S as P,c as p,j as f,a as e,L as k}from"./Space-8f7a2f55.js";import{r as g}from"./index-f1f749bf.js";import{L as u}from"./LakeSelect-8b03bd4c.js";import{S,a as t}from"./_StoriesComponents-f2901200.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./commonStyles-d52fedae.js";import"./Popover-4c6235a9.js";import"./index.module-2666926f.js";import"./useResponsive-49cbf92f.js";import"./BottomPanel-6ab10829.js";import"./useBodyClassName-bd00433d.js";import"./math-9bc75990.js";import"./FocusTrap-261a7a03.js";import"./array-b3630b94.js";import"./LoadingView-f76c94f2.js";import"./colors-298625c7.js";import"./index-202a1852.js";import"./Portal-110a97b0.js";import"./index-96c5f47c.js";import"./WithCurrentColor-145e3746.js";import"./TransitionView-4f6ba865.js";import"./index-8c4f30de.js";import"./index-09cb1a1c.js";import"./Fill-262e0d16.js";import"./Icon-dbe1a7eb.js";import"./Svg-b6bf230c.js";import"./Pressable-dfa40091.js";import"./useMergeRefs-6eed9d3a.js";import"./index-6821a6c5.js";const y=P.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:p.gray[0]}}),ee={title:"Forms/Select",component:u},E=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],r=({initialValue:o,...b})=>{const[h,v]=g.useState(o);return e(u,{placeholder:"Select someone...",value:h,onValueChange:v,items:E,style:y.select,...b})},a=()=>f(S,{title:"Select variations",children:[e(t,{title:"Default",children:e(r,{})}),e(t,{title:"Small",children:e(r,{size:"small"})}),e(t,{title:"Borderless",children:e(r,{mode:"borderless",initialValue:1})}),e(t,{title:"With icon",children:e(r,{icon:"building-bank-regular"})}),e(t,{title:"With footer",children:e(r,{PopoverFooter:e(k,{style:y.footer,children:"List of random people"})})}),e(t,{title:"With error",children:e(r,{error:"Required field"})}),e(t,{title:"Disabled",children:e(r,{disabled:!0})}),e(t,{title:"Disabled with value",children:e(r,{disabled:!0,initialValue:2})})]}),l=()=>e(S,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(p).map(o=>e(t,{title:o,children:e(r,{icon:"building-bank-filled",color:o})},o))});var i,n,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const te=["Variations","Colors"];export{l as Colors,a as Variations,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=Select.stories-6730b32c.js.map
