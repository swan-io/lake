import{S as P,c as p,a as f,j as e,L as k}from"./Space-55c23e8a.js";import{r as g}from"./index-1e572255.js";import{L as u}from"./LakeSelect-c6810375.js";import{S,a as t}from"./_StoriesComponents-f358d2c5.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./commonStyles-d52fedae.js";import"./useDisclosure-c07905bf.js";import"./useMergeRefs-1cf5d56e.js";import"./array-a4405b3e.js";import"./Box-81ede89f.js";import"./Fill-f5918f22.js";import"./Popover-afbf154e.js";import"./useResponsive-642617e6.js";import"./function-a81f264e.js";import"./Boxed-86465006.js";import"./BottomPanel-891c2c29.js";import"./useBodyClassName-915b7711.js";import"./math-cfc7dd63.js";import"./FocusTrap-2a774342.js";import"./LoadingView-31ecf8f7.js";import"./colors-298625c7.js";import"./index-2487a493.js";import"./TransitionView-0f0ebb50.js";import"./index-0a641eec.js";import"./index-6785cb38.js";import"./Pressable-8d5a3408.js";import"./index-1fd8d6ee.js";const y=P.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:p.gray[0]}}),X={title:"Forms/Select",component:u},E=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],r=({initialValue:o,...b})=>{const[h,v]=g.useState(o);return e(u,{placeholder:"Select someone...",value:h,onValueChange:v,items:E,style:y.select,...b})},a=()=>f(S,{title:"Select variations",children:[e(t,{title:"Default",children:e(r,{})}),e(t,{title:"Small",children:e(r,{size:"small"})}),e(t,{title:"Borderless",children:e(r,{mode:"borderless",initialValue:1})}),e(t,{title:"With icon",children:e(r,{icon:"building-bank-regular"})}),e(t,{title:"With footer",children:e(r,{PopoverFooter:e(k,{style:y.footer,children:"List of random people"})})}),e(t,{title:"With error",children:e(r,{error:"Required field"})}),e(t,{title:"Disabled",children:e(r,{disabled:!0})}),e(t,{title:"Disabled with value",children:e(r,{disabled:!0,initialValue:2})})]}),l=()=>e(S,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(p).map(o=>e(t,{title:o,children:e(r,{icon:"building-bank-filled",color:o})},o))});var i,n,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const $=["Variations","Colors"];export{l as Colors,a as Variations,$ as __namedExportsOrder,X as default};
//# sourceMappingURL=Select.stories-b669f6f8.js.map
