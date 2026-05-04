import{j as e,V as f,L as C,c as h,S as v,s as j,e as d}from"./ScrollView-Be2uaeG1.js";import{r as m}from"./iframe-CM3RFg6E.js";import{u as M}from"./useDisclosure-D-IvSYYN.js";import{n as I}from"./function-zvU19JR4.js";import{a as S}from"./LakeButton-OvTMb_WF.js";import{P as b}from"./Popover-pUrGJMLy.js";import{P as w}from"./Pressable-B-CjcGuW.js";import{S as p}from"./Separator-CadOK1O6.js";import{S as R,a as x}from"./_StoriesComponents-CWTMDqNc.js";import"./index-uExSJENR.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./index-Cy5rO2Vu.js";import"./extends-CF3RwP-h.js";import"./useResponsive-BMK3LEh9.js";import"./BottomPanel-BMMDum8M.js";import"./useBodyClassName-DvGTgE7N.js";import"./FocusTrap-o5qWQcdJ.js";import"./array-BfAlyugE.js";import"./Suspendable-BkabwyAO.js";import"./TransitionView-Dg4VrjO0.js";import"./index-TBlMkm3Q.js";const l=j.create({container:{minWidth:120},menuItem:{flexDirection:"row",alignItems:"center",paddingHorizontal:d[24],paddingVertical:d[12]},dot:{width:8,height:8,borderRadius:4,backgroundColor:h.negative[500]}}),g=m.createContext({close:I}),n=({children:r,ariaLabel:s,withPill:i=!1,verticalPlacement:a})=>{const[y,{open:P,close:c}]=M(!1),u=m.useRef(null);return e.jsxs(g.Provider,{value:{close:c},children:[e.jsx(S,{ref:u,mode:"tertiary",size:"small",icon:"more-horizontal-filled",color:"gray",onPress:P,ariaLabel:s,pill:i}),e.jsx(b,{referenceRef:u,visible:y,onDismiss:c,verticalPlacement:a,children:e.jsx(f,{style:l.container,children:r})})]})},t=({children:r,withPill:s=!1,onPress:i})=>{const{close:a}=m.useContext(g);return e.jsxs(w,{style:l.menuItem,onPress:()=>{a(),i()},children:[e.jsx(C,{variant:"regular",color:h.gray[700],children:r}),s?e.jsxs(e.Fragment,{children:[e.jsx(v,{width:8}),e.jsx(f,{style:l.dot})]}):null]})};n.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},withPill:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},verticalPlacement:{required:!1,tsType:{name:"union",raw:'"above" | "below"',elements:[{name:"literal",value:'"above"'},{name:"literal",value:'"below"'}]},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"ContextMenuItem",props:{children:{required:!0,tsType:{name:"string"},description:""},withPill:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Y={title:"Interactivity/ContextMenu",component:n},o=()=>e.jsxs(R,{title:"ContextMenu",children:[e.jsx(x,{title:"Default",children:e.jsxs(n,{ariaLabel:"Actions",children:[e.jsx(t,{onPress:()=>console.log("Edit"),children:"Edit"}),e.jsx(p,{}),e.jsx(t,{onPress:()=>console.log("Remove"),children:"Remove"})]})}),e.jsx(x,{title:"With missing info",children:e.jsxs(n,{ariaLabel:"Actions",withPill:!0,children:[e.jsx(t,{withPill:!0,onPress:()=>console.log("Edit"),children:"Edit"}),e.jsx(p,{}),e.jsx(t,{onPress:()=>console.log("Remove"),children:"Remove"})]})})]});o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=ContextMenu.stories-D5XOK1ZD.js.map
