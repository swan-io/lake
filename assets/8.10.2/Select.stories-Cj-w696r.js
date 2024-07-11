import{s as x,c as u,j as e,L as j}from"./ScrollView-B9F7HTm3.js";import{r as g}from"./index-uCp2LrAq.js";import{L as p}from"./LakeSelect-Cp-tA_ih.js";import{S,a as t}from"./_StoriesComponents-Cq_5NJ0H.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./commonStyles-t4XfA7cz.js";import"./useDisclosure-X_l1NENI.js";import"./Pressable-CFOT_yy9.js";import"./a11y-DXvpDVrG.js";import"./Fill-n5vMefZr.js";import"./Popover-CWZJwwEZ.js";import"./useResponsive-CWYKQO6x.js";import"./function-BB3dD_YP.js";import"./BottomPanel-DBrvGMAS.js";import"./useBodyClassName-CiTylq2A.js";import"./FocusTrap-DYo-inec.js";import"./array-rjEBP2Ry.js";import"./Suspendable-eyyqBypp.js";import"./index-DL1RuylT.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BP_NA7bv.js";import"./index-yCoSIfiW.js";const b=x.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:u.gray[0]}}),Y={title:"Forms/Select",component:p},P=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],a=({initialValue:l,...v})=>{const[y,h]=g.useState(l);return e.jsx(p,{placeholder:"Select someone...",value:y,onValueChange:h,items:P,style:b.select,...v})},r=()=>e.jsxs(S,{title:"Select variations",children:[e.jsx(t,{title:"Default",children:e.jsx(a,{})}),e.jsx(t,{title:"With disabled items",children:e.jsx(a,{disabledItems:[{value:4},{value:5},{value:7},{value:12},{value:15},{value:16},{value:999}]})}),e.jsx(t,{title:"With disabled items tooltips",children:e.jsx(a,{disabledItems:[{message:"Item Émilie is disabled",value:4},{message:"Item François is disabled",value:5},{message:"Item Marie-Anne is disabled",value:7},{message:"Item Valérie is disabled",value:12},{message:"Item Jérôme is disabled",value:15},{message:"Item Thomas is disabled",value:16}]})}),e.jsx(t,{title:"Small",children:e.jsx(a,{size:"small"})}),e.jsx(t,{title:"Borderless",children:e.jsx(a,{mode:"borderless",initialValue:1})}),e.jsx(t,{title:"With icon",children:e.jsx(a,{icon:"building-bank-regular"})}),e.jsx(t,{title:"With footer",children:e.jsx(a,{PopoverFooter:e.jsx(j,{style:b.footer,children:"List of random people"})})}),e.jsx(t,{title:"With error",children:e.jsx(a,{error:"Required field"})}),e.jsx(t,{title:"Disabled",children:e.jsx(a,{disabled:!0})}),e.jsx(t,{title:"Disabled with value",children:e.jsx(a,{disabled:!0,initialValue:2})})]}),i=()=>e.jsx(S,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(u).map(l=>e.jsx(t,{title:l,children:e.jsx(a,{icon:"building-bank-filled",color:l})},l))});r.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.__docgenInfo={description:"",methods:[],displayName:"Colors"};var s,o,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Z=["Variations","Colors"];export{i as Colors,r as Variations,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Select.stories-Cj-w696r.js.map