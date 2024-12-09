import{j as e}from"./jsx-runtime-BlAj40OV.js";import{r as T}from"./index-Cs7sjTYM.js";import{s as y,c as n,r as d,V as t}from"./ScrollView-C_lwoIgf.js";import{T as f,a as x}from"./Tile-BzepjK51.js";import{S as j,a as l}from"./_StoriesComponents-C-aplp8L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./ResponsiveContainer-CT0OothZ.js";import"./Separator-nprBuSRp.js";import"./commonStyles-CWvHnKRn.js";const r=y.create({placeholderTitle:{height:14,width:"40%",backgroundColor:n.gray[200],borderRadius:d[6],animationKeyframes:{"50%":{opacity:.6}},animationDuration:"2000ms",animationTimingFunction:"linear",animationIterationCount:"infinite"},placeholderText:{height:10,width:"50%",backgroundColor:n.gray[100],borderRadius:d[6],marginVertical:24},content:{animationKeyframes:{"50%":{opacity:.6}},animationDuration:"2000ms",animationTimingFunction:"linear",animationIterationCount:"infinite"},withTabs:{paddingTop:61}}),i=()=>e.jsx(f,{title:e.jsx(t,{style:r.placeholderTitle}),children:e.jsxs(t,{style:r.content,children:[e.jsx(t,{style:r.placeholderText}),e.jsx(t,{style:r.placeholderText}),e.jsx(t,{style:r.placeholderText}),e.jsx(t,{style:r.placeholderText})]})}),o=({numberOfItems:s=2,withTabs:p=!0})=>e.jsx(t,{style:p&&r.withTabs,children:e.jsx(x,{children:T.useMemo(()=>Array(s).fill(null).map((P,u)=>e.jsx(i,{},`placeholder-${u}`)),[s])})});i.__docgenInfo={description:"",methods:[],displayName:"TilePlaceholder"};o.__docgenInfo={description:"",methods:[],displayName:"TileGridPlaceholder",props:{numberOfItems:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},withTabs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const C={title:"Layout/TilePlaceholder",component:i},a=()=>e.jsxs(j,{title:"TilePlaceholder",children:[e.jsx(l,{title:"Default placeholder",children:e.jsx(i,{})}),e.jsx(l,{title:"Grid placeholder",children:e.jsx(o,{withTabs:!1})}),e.jsx(l,{title:"Grid placeholder with 3 items",children:e.jsx(o,{withTabs:!1,numberOfItems:3})})]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,m,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <StoryBlock title="TilePlaceholder">
      <StoryPart title="Default placeholder">
        <TilePlaceholder />
      </StoryPart>

      <StoryPart title="Grid placeholder">
        <TileGridPlaceholder withTabs={false} />
      </StoryPart>

      <StoryPart title="Grid placeholder with 3 items">
        <TileGridPlaceholder withTabs={false} numberOfItems={3} />
      </StoryPart>
    </StoryBlock>;
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,C as default};
//# sourceMappingURL=TilePlaceholder.stories-DiO7N1fZ.js.map
