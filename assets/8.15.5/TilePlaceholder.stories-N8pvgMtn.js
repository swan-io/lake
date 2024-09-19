import{s as T,c as n,r as d,j as e,V as t}from"./ScrollView-CnkSV7w6.js";import{r as y}from"./index-Cs7sjTYM.js";import{T as f,a as x}from"./Tile-BdP2Odjc.js";import{S as j,a as i}from"./_StoriesComponents-BdGCWCNA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./commonStyles-t4XfA7cz.js";const r=T.create({placeholderTitle:{height:14,width:"40%",backgroundColor:n.gray[200],borderRadius:d[6],animationKeyframes:{"50%":{opacity:.6}},animationDuration:"2000ms",animationTimingFunction:"linear",animationIterationCount:"infinite"},placeholderText:{height:10,width:"50%",backgroundColor:n.gray[100],borderRadius:d[6],marginVertical:24},content:{animationKeyframes:{"50%":{opacity:.6}},animationDuration:"2000ms",animationTimingFunction:"linear",animationIterationCount:"infinite"},withTabs:{paddingTop:61}}),l=()=>e.jsx(f,{title:e.jsx(t,{style:r.placeholderTitle}),children:e.jsxs(t,{style:r.content,children:[e.jsx(t,{style:r.placeholderText}),e.jsx(t,{style:r.placeholderText}),e.jsx(t,{style:r.placeholderText}),e.jsx(t,{style:r.placeholderText})]})}),o=({numberOfItems:s=2,withTabs:p=!0})=>e.jsx(t,{style:p&&r.withTabs,children:e.jsx(x,{children:y.useMemo(()=>Array(s).fill(null).map((P,u)=>e.jsx(l,{},`placeholder-${u}`)),[s])})});l.__docgenInfo={description:"",methods:[],displayName:"TilePlaceholder"};o.__docgenInfo={description:"",methods:[],displayName:"TileGridPlaceholder",props:{numberOfItems:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},withTabs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const I={title:"Layout/TilePlaceholder",component:l},a=()=>e.jsxs(j,{title:"TilePlaceholder",children:[e.jsx(i,{title:"Default placeholder",children:e.jsx(l,{})}),e.jsx(i,{title:"Grid placeholder",children:e.jsx(o,{withTabs:!1})}),e.jsx(i,{title:"Grid placeholder with 3 items",children:e.jsx(o,{withTabs:!1,numberOfItems:3})})]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,h,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,I as default};
//# sourceMappingURL=TilePlaceholder.stories-N8pvgMtn.js.map
