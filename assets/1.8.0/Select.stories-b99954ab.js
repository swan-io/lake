import{S as P,c as p,j as f,a as e,L as k}from"./Space-5c29d500.js";import{r as g}from"./index-f1f749bf.js";import{L as u}from"./LakeSelect-ad937f1f.js";import{S,a as t}from"./_StoriesComponents-bbcd7ec3.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./commonStyles-d52fedae.js";import"./Popover-50e70ffd.js";import"./index.module-bef243ca.js";import"./useResponsive-f4d095a5.js";import"./BottomPanel-a1918361.js";import"./useBodyClassName-bd00433d.js";import"./math-d8257b44.js";import"./FocusTrap-1588cf22.js";import"./array-b3630b94.js";import"./LoadingView-abfecfc9.js";import"./colors-298625c7.js";import"./index-4bbcd6fb.js";import"./Portal-ddaa83ce.js";import"./index-96c5f47c.js";import"./WithCurrentColor-dc917e83.js";import"./TransitionView-c4b12149.js";import"./index-c86de1d8.js";import"./index-37abc2ac.js";import"./Fill-d7d86da4.js";import"./Icon-27bbe041.js";import"./Svg-ff455c54.js";import"./Pressable-d518d699.js";import"./useMergeRefs-b62e07d5.js";import"./index-37690212.js";const y=P.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:p.gray[0]}}),ee={title:"Forms/Select",component:u},E=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],r=({initialValue:o,...b})=>{const[h,v]=g.useState(o);return e(u,{placeholder:"Select someone...",value:h,onValueChange:v,items:E,style:y.select,...b})},a=()=>f(S,{title:"Select variations",children:[e(t,{title:"Default",children:e(r,{})}),e(t,{title:"Small",children:e(r,{size:"small"})}),e(t,{title:"Borderless",children:e(r,{mode:"borderless",initialValue:1})}),e(t,{title:"With icon",children:e(r,{icon:"building-bank-regular"})}),e(t,{title:"With footer",children:e(r,{PopoverFooter:e(k,{style:y.footer,children:"List of random people"})})}),e(t,{title:"With error",children:e(r,{error:"Required field"})}),e(t,{title:"Disabled",children:e(r,{disabled:!0})}),e(t,{title:"Disabled with value",children:e(r,{disabled:!0,initialValue:2})})]}),l=()=>e(S,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(p).map(o=>e(t,{title:o,children:e(r,{icon:"building-bank-filled",color:o})},o))});var i,n,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Select.stories-b99954ab.js.map
