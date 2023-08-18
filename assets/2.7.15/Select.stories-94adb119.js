import{S as E,c as h,a as V,j as e,L}from"./Space-f85095f8.js";import{r as x}from"./index-b9a8c83f.js";import{L as b}from"./LakeSelect-d682b125.js";import{S as v,a as t}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./commonStyles-d52fedae.js";import"./useDisclosure-2bfd5a49.js";import"./array-a4405b3e.js";import"./Box-f4fbfbba.js";import"./Fill-0c0bad9d.js";import"./Popover-aa318d2f.js";import"./useResponsive-df79d868.js";import"./function-2aea345a.js";import"./Boxed-885d7854.js";import"./BottomPanel-ac91961d.js";import"./useBodyClassName-4a67c631.js";import"./math-57176261.js";import"./FocusTrap-758e437a.js";import"./LoadingView-406d6625.js";import"./colors-298625c7.js";import"./index-4daf2301.js";import"./TransitionView-5833e7af.js";import"./index-71e0d995.js";import"./index-75f16835.js";import"./Pressable-7e9fd84c.js";import"./useMergeRefs-56399732.js";import"./index-1a82f3cd.js";const P=E.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:h.gray[0]}}),oe={title:"Forms/Select",component:b},C=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],r=({initialValue:l,...i})=>{const[n,s]=x.useState(l);return e(b,{placeholder:"Select someone...",value:n,onValueChange:s,items:C,style:P.select,...i})},o=()=>V(v,{title:"Select variations",children:[e(t,{title:"Default",children:e(r,{})}),e(t,{title:"Small",children:e(r,{size:"small"})}),e(t,{title:"Borderless",children:e(r,{mode:"borderless",initialValue:1})}),e(t,{title:"With icon",children:e(r,{icon:"building-bank-regular"})}),e(t,{title:"With footer",children:e(r,{PopoverFooter:e(L,{style:P.footer,children:"List of random people"})})}),e(t,{title:"With error",children:e(r,{error:"Required field"})}),e(t,{title:"Disabled",children:e(r,{disabled:!0})}),e(t,{title:"Disabled with value",children:e(r,{disabled:!0,initialValue:2})})]}),a=({placeholder:l,mode:i,title:n,size:s,icon:f,color:B,disabled:k,error:g})=>e(v,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(h).map(c=>e(t,{title:c,children:e(r,{placeholder:l,mode:i,title:n,size:s,disabled:k,error:g,icon:f,color:c})},c))});var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,S,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`({
  placeholder,
  mode,
  title,
  size,
  icon,
  color,
  disabled,
  error
}: StoryArgs) => {
  return <StoryBlock title="Select colors" description="Color prop change only icon color">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableSelect placeholder={placeholder} mode={mode} title={title} size={size} disabled={disabled} error={error} icon={icon} color={(color as ColorVariants)} />
        </StoryPart>)}
    </StoryBlock>;
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const ae=["Variations","Colors"];export{a as Colors,o as Variations,ae as __namedExportsOrder,oe as default};
//# sourceMappingURL=Select.stories-94adb119.js.map
