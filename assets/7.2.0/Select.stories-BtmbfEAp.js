import{s as x,c as u,j as e,L as j}from"./Space-BJ8o3sFw.js";import{r as g}from"./index-CBqU2yxZ.js";import{L as p}from"./LakeSelect-BpRrlMtx.js";import{S,a as t}from"./_StoriesComponents-SDLtyL2-.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./useDisclosure-CS9t68_Y.js";import"./Pressable-DzF9rM7z.js";import"./a11y-DXvpDVrG.js";import"./Fill-BOphEy9A.js";import"./Popover-CIwE_vQX.js";import"./useResponsive-BX72-yEI.js";import"./function-BSvIwqUo.js";import"./BottomPanel-C9G1c8W7.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-DwykiY4o.js";import"./FocusTrap-n96NuHfD.js";import"./array-rjEBP2Ry.js";import"./LoadingView-CV6Guj08.js";import"./index-QI0gf_ds.js";import"./TransitionView-DoG_oH2X.js";import"./index-DrKPpo-4.js";import"./index-B1925W4Z.js";import"./index-BpMotjcQ.js";const b=x.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:u.gray[0]}}),K={title:"Forms/Select",component:p},P=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],a=({initialValue:l,...v})=>{const[y,h]=g.useState(l);return e.jsx(p,{placeholder:"Select someone...",value:y,onValueChange:h,items:P,style:b.select,...v})},r=()=>e.jsxs(S,{title:"Select variations",children:[e.jsx(t,{title:"Default",children:e.jsx(a,{})}),e.jsx(t,{title:"With disabled items",children:e.jsx(a,{disabledItems:[{value:4},{value:5},{value:7},{value:12},{value:15},{value:16},{value:999}]})}),e.jsx(t,{title:"With disabled items tooltips",children:e.jsx(a,{disabledItems:[{message:"Item Émilie is disabled",value:4},{message:"Item François is disabled",value:5},{message:"Item Marie-Anne is disabled",value:7},{message:"Item Valérie is disabled",value:12},{message:"Item Jérôme is disabled",value:15},{message:"Item Thomas is disabled",value:16}]})}),e.jsx(t,{title:"Small",children:e.jsx(a,{size:"small"})}),e.jsx(t,{title:"Borderless",children:e.jsx(a,{mode:"borderless",initialValue:1})}),e.jsx(t,{title:"With icon",children:e.jsx(a,{icon:"building-bank-regular"})}),e.jsx(t,{title:"With footer",children:e.jsx(a,{PopoverFooter:e.jsx(j,{style:b.footer,children:"List of random people"})})}),e.jsx(t,{title:"With error",children:e.jsx(a,{error:"Required field"})}),e.jsx(t,{title:"Disabled",children:e.jsx(a,{disabled:!0})}),e.jsx(t,{title:"Disabled with value",children:e.jsx(a,{disabled:!0,initialValue:2})})]}),i=()=>e.jsx(S,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(u).map(l=>e.jsx(t,{title:l,children:e.jsx(a,{icon:"building-bank-filled",color:l})},l))});r.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.__docgenInfo={description:"",methods:[],displayName:"Colors"};var s,o,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,m,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select colors" description="Color prop change only icon color">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableSelect icon="building-bank-filled" color={(color as ColorVariants)} />
        </StoryPart>)}
    </StoryBlock>;
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Q=["Variations","Colors"];export{i as Colors,r as Variations,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Select.stories-BtmbfEAp.js.map
