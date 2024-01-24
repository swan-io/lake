import{s as T,c as s,r as d,a as e,V as t,j as p}from"./Space-c0nmW76v.js";import{r as f}from"./index-4g5l5LRQ.js";import{T as P,a as b}from"./Tile-QqMsDvVh.js";import{S as g,a as o}from"./_StoriesComponents-E0nHbJVI.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./commonStyles-Hba7FQ0u.js";const r=T.create({placeholderTitle:{height:14,width:"40%",backgroundColor:s.gray[200],borderRadius:d[6],animationKeyframes:{"50%":{opacity:.6}},animationDuration:"2000ms",animationTimingFunction:"linear",animationIterationCount:"infinite"},placeholderText:{height:10,width:"50%",backgroundColor:s.gray[100],borderRadius:d[6],marginVertical:24},content:{animationKeyframes:{"50%":{opacity:.6}},animationDuration:"2000ms",animationTimingFunction:"linear",animationIterationCount:"infinite"},withTabs:{paddingTop:61}}),n=()=>e(P,{title:e(t,{style:r.placeholderTitle}),children:p(t,{style:r.content,children:[e(t,{style:r.placeholderText}),e(t,{style:r.placeholderText}),e(t,{style:r.placeholderText}),e(t,{style:r.placeholderText})]})}),l=({numberOfItems:i=2,withTabs:u=!0})=>e(t,{style:u&&r.withTabs,children:e(b,{children:f.useMemo(()=>Array(i).fill(null).map((w,y)=>e(n,{},`placeholder-${y}`)),[i])})});try{l.displayName="TileGridPlaceholder",l.__docgenInfo={description:"",displayName:"TileGridPlaceholder",props:{numberOfItems:{defaultValue:{value:"2"},description:"",name:"numberOfItems",required:!1,type:{name:"number"}},withTabs:{defaultValue:{value:"true"},description:"",name:"withTabs",required:!1,type:{name:"boolean"}}}}}catch{}const C={title:"Layout/TilePlaceholder",component:n},a=()=>p(g,{title:"TilePlaceholder",children:[e(o,{title:"Default placeholder",children:e(n,{})}),e(o,{title:"Grid placeholder",children:e(l,{withTabs:!1})}),e(o,{title:"Grid placeholder with 3 items",children:e(l,{withTabs:!1,numberOfItems:3})})]});var c,h,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const O=["Default"];export{a as Default,O as __namedExportsOrder,C as default};
//# sourceMappingURL=TilePlaceholder.stories-9qMJWPgf.js.map
