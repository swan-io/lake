import{j as e,V as t,s as h,r as n,c as d}from"./ScrollView-Bd9kY7Nr.js";import{r as p}from"./iframe-4Is7YPK5.js";import{T as u,a as T}from"./Tile-C3oAWhnO.js";import{S as y,a as l}from"./_StoriesComponents-CnwjhaCN.js";import"./index-BkLsqB7G.js";import"./preload-helper-D1IIBeq1.js";import"./ResponsiveContainer-DnG-77Qg.js";import"./Separator-DPvh-w6v.js";import"./commonStyles-BBEkV6IC.js";const r=h.create({placeholderTitle:{height:14,width:"40%",backgroundColor:d.gray[200],borderRadius:n[6],animationKeyframes:{"50%":{opacity:.6}},animationDuration:"2000ms",animationTimingFunction:"linear",animationIterationCount:"infinite"},placeholderText:{height:10,width:"50%",backgroundColor:d.gray[100],borderRadius:n[6],marginVertical:24},content:{animationKeyframes:{"50%":{opacity:.6}},animationDuration:"2000ms",animationTimingFunction:"linear",animationIterationCount:"infinite"},withTabs:{paddingTop:61}}),i=()=>e.jsx(u,{title:e.jsx(t,{style:r.placeholderTitle}),children:e.jsxs(t,{style:r.content,children:[e.jsx(t,{style:r.placeholderText}),e.jsx(t,{style:r.placeholderText}),e.jsx(t,{style:r.placeholderText}),e.jsx(t,{style:r.placeholderText})]})}),o=({numberOfItems:s=2,withTabs:c=!0})=>e.jsx(t,{style:c&&r.withTabs,children:e.jsx(T,{children:p.useMemo(()=>Array(s).fill(null).map((f,m)=>e.jsx(i,{},`placeholder-${m}`)),[s])})});i.__docgenInfo={description:"",methods:[],displayName:"TilePlaceholder"};o.__docgenInfo={description:"",methods:[],displayName:"TileGridPlaceholder",props:{numberOfItems:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},withTabs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const D={title:"Layout/TilePlaceholder",component:i},a=()=>e.jsxs(y,{title:"TilePlaceholder",children:[e.jsx(l,{title:"Default placeholder",children:e.jsx(i,{})}),e.jsx(l,{title:"Grid placeholder",children:e.jsx(o,{withTabs:!1})}),e.jsx(l,{title:"Grid placeholder with 3 items",children:e.jsx(o,{withTabs:!1,numberOfItems:3})})]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};const I=["Default"];export{a as Default,I as __namedExportsOrder,D as default};
//# sourceMappingURL=TilePlaceholder.stories-nDbfcxJI.js.map
