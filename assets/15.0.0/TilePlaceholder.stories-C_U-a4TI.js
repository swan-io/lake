import{c as e,i as t}from"./preload-helper-C6cs2Kqh.js";import{o as n}from"./iframe-PLcdovXH.js";import{St as r,U as i,bt as a,dt as o,ht as s,it as c,st as l}from"./ScrollView-Bhi9nHhc.js";import{n as u,r as d,t as f}from"./_StoriesComponents-CcLSs0C1.js";import{n as p,r as m,t as h}from"./Tile-BBZrO-7o.js";var g,_,v,y,b,x=t((()=>{g=e(n()),s(),l(),m(),_=i(),v=r.create({placeholderTitle:{height:14,width:`40%`,backgroundColor:c.gray[200],borderRadius:o[6],animationKeyframes:{"50%":{opacity:.6}},animationDuration:`2000ms`,animationTimingFunction:`linear`,animationIterationCount:`infinite`},placeholderText:{height:10,width:`50%`,backgroundColor:c.gray[100],borderRadius:o[6],marginVertical:24},content:{animationKeyframes:{"50%":{opacity:.6}},animationDuration:`2000ms`,animationTimingFunction:`linear`,animationIterationCount:`infinite`},withTabs:{paddingTop:61}}),y=()=>(0,_.jsx)(h,{title:(0,_.jsx)(a,{style:v.placeholderTitle}),children:(0,_.jsxs)(a,{style:v.content,children:[(0,_.jsx)(a,{style:v.placeholderText}),(0,_.jsx)(a,{style:v.placeholderText}),(0,_.jsx)(a,{style:v.placeholderText}),(0,_.jsx)(a,{style:v.placeholderText})]})}),b=({numberOfItems:e=2,withTabs:t=!0})=>(0,_.jsx)(a,{style:t&&v.withTabs,children:(0,_.jsx)(p,{children:(0,g.useMemo)(()=>Array(e).fill(null).map((e,t)=>(0,_.jsx)(y,{},`placeholder-${t}`)),[e])})}),y.__docgenInfo={description:``,methods:[],displayName:`TilePlaceholder`},b.__docgenInfo={description:``,methods:[],displayName:`TileGridPlaceholder`,props:{numberOfItems:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},withTabs:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}})),S,C,w,T;t((()=>{x(),d(),S=i(),C={title:`Layout/TilePlaceholder`,component:y},w=()=>(0,S.jsxs)(f,{title:`TilePlaceholder`,children:[(0,S.jsx)(u,{title:`Default placeholder`,children:(0,S.jsx)(y,{})}),(0,S.jsx)(u,{title:`Grid placeholder`,children:(0,S.jsx)(b,{withTabs:!1})}),(0,S.jsx)(u,{title:`Grid placeholder with 3 items`,children:(0,S.jsx)(b,{withTabs:!1,numberOfItems:3})})]}),w.__docgenInfo={description:``,methods:[],displayName:`Default`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T=[`Default`]}))();export{w as Default,T as __namedExportsOrder,C as default};
//# sourceMappingURL=TilePlaceholder.stories-C_U-a4TI.js.map