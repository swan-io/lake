import{j as e,V as f,L as C,c as h,S as v,s as j,e as d}from"./ScrollView-D0eHMW9u.js";import{r as m}from"./iframe-I_zhAHSZ.js";import{u as M}from"./useDisclosure-DxqCMjjy.js";import{n as I}from"./function-DLOc_IHQ.js";import{a as S}from"./LakeButton-UCnu8mwq.js";import{P as b}from"./Popover-BxFjU2yO.js";import{P as w}from"./Pressable-CzqhAcYg.js";import{S as p}from"./Separator-DBVLfx5C.js";import{S as R,a as x}from"./_StoriesComponents-C_CVCPuA.js";import"./index-nmojPuxQ.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./index-BUef1l32.js";import"./extends-CF3RwP-h.js";import"./useResponsive-CnPNojAi.js";import"./BottomPanel-WUgTR9rw.js";import"./useBodyClassName-D-de-nu-.js";import"./FocusTrap-B2D6zT1J.js";import"./array-BfAlyugE.js";import"./Suspendable-Cq8MLLTV.js";import"./TransitionView-DOOghWVz.js";import"./index-CLXkQ942.js";const l=j.create({container:{minWidth:120},menuItem:{flexDirection:"row",alignItems:"center",paddingHorizontal:d[24],paddingVertical:d[12]},dot:{width:8,height:8,borderRadius:4,backgroundColor:h.negative[500]}}),g=m.createContext({close:I}),n=({children:r,ariaLabel:s,withPill:i=!1,verticalPlacement:a})=>{const[y,{open:P,close:c}]=M(!1),u=m.useRef(null);return e.jsxs(g.Provider,{value:{close:c},children:[e.jsx(S,{ref:u,mode:"tertiary",size:"small",icon:"more-horizontal-filled",color:"gray",onPress:P,ariaLabel:s,pill:i}),e.jsx(b,{referenceRef:u,visible:y,onDismiss:c,verticalPlacement:a,children:e.jsx(f,{style:l.container,children:r})})]})},t=({children:r,withPill:s=!1,onPress:i})=>{const{close:a}=m.useContext(g);return e.jsxs(w,{style:l.menuItem,onPress:()=>{a(),i()},children:[e.jsx(C,{variant:"regular",color:h.gray[700],children:r}),s?e.jsxs(e.Fragment,{children:[e.jsx(v,{width:8}),e.jsx(f,{style:l.dot})]}):null]})};n.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},withPill:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},verticalPlacement:{required:!1,tsType:{name:"union",raw:'"above" | "below"',elements:[{name:"literal",value:'"above"'},{name:"literal",value:'"below"'}]},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"ContextMenuItem",props:{children:{required:!0,tsType:{name:"string"},description:""},withPill:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Y={title:"Interactivity/ContextMenu",component:n},o=()=>e.jsxs(R,{title:"ContextMenu",children:[e.jsx(x,{title:"Default",children:e.jsxs(n,{ariaLabel:"Actions",children:[e.jsx(t,{onPress:()=>console.log("Edit"),children:"Edit"}),e.jsx(p,{}),e.jsx(t,{onPress:()=>console.log("Remove"),children:"Remove"})]})}),e.jsx(x,{title:"With missing info",children:e.jsxs(n,{ariaLabel:"Actions",withPill:!0,children:[e.jsx(t,{withPill:!0,onPress:()=>console.log("Edit"),children:"Edit"}),e.jsx(p,{}),e.jsx(t,{onPress:()=>console.log("Remove"),children:"Remove"})]})})]});o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="ContextMenu">
      <StoryPart title="Default">
        <ContextMenu ariaLabel="Actions">
          <ContextMenuItem onPress={() => console.log("Edit")}>Edit</ContextMenuItem>
          <Separator />
          <ContextMenuItem onPress={() => console.log("Remove")}>Remove</ContextMenuItem>
        </ContextMenu>
      </StoryPart>

      <StoryPart title="With missing info">
        <ContextMenu ariaLabel="Actions" withPill={true}>
          <ContextMenuItem withPill={true} onPress={() => console.log("Edit")}>
            Edit
          </ContextMenuItem>
          <Separator />
          <ContextMenuItem onPress={() => console.log("Remove")}>Remove</ContextMenuItem>
        </ContextMenu>
      </StoryPart>
    </StoryBlock>;
}`,...o.parameters?.docs?.source}}};const Z=["Default"];export{o as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=ContextMenu.stories-D87-TZ7o.js.map
