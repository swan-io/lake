import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-lhskn-nq.js";import{U as r,dt as i,ht as a,it as o,kt as s,st as c,wt as l}from"./ScrollView-CDZwE4p9.js";import{n as u,r as d,t as f}from"./_StoriesComponents-DcLheBv-.js";import{n as p,r as m,t as h}from"./Tile-DhZZD32s.js";var g,_,v,y,b,x=t((()=>{g=e(n()),a(),c(),m(),_=r(),v=s.create({placeholderTitle:{height:14,width:`40%`,backgroundColor:o.gray[200],borderRadius:i[6],animationKeyframes:{"50%":{opacity:.6}},animationDuration:`2000ms`,animationTimingFunction:`linear`,animationIterationCount:`infinite`},placeholderText:{height:10,width:`50%`,backgroundColor:o.gray[100],borderRadius:i[6],marginVertical:24},content:{animationKeyframes:{"50%":{opacity:.6}},animationDuration:`2000ms`,animationTimingFunction:`linear`,animationIterationCount:`infinite`},withTabs:{paddingTop:61}}),y=()=>(0,_.jsx)(h,{title:(0,_.jsx)(l,{style:v.placeholderTitle}),children:(0,_.jsxs)(l,{style:v.content,children:[(0,_.jsx)(l,{style:v.placeholderText}),(0,_.jsx)(l,{style:v.placeholderText}),(0,_.jsx)(l,{style:v.placeholderText}),(0,_.jsx)(l,{style:v.placeholderText})]})}),b=({numberOfItems:e=2,withTabs:t=!0})=>(0,_.jsx)(l,{style:t&&v.withTabs,children:(0,_.jsx)(p,{children:(0,g.useMemo)(()=>Array(e).fill(null).map((e,t)=>(0,_.jsx)(y,{},`placeholder-${t}`)),[e])})}),y.__docgenInfo={description:``,methods:[],displayName:`TilePlaceholder`},b.__docgenInfo={description:``,methods:[],displayName:`TileGridPlaceholder`,props:{numberOfItems:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},withTabs:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}})),S,C,w,T;t((()=>{x(),d(),S=r(),C={title:`Layout/TilePlaceholder`,component:y},w=()=>(0,S.jsxs)(f,{title:`TilePlaceholder`,children:[(0,S.jsx)(u,{title:`Default placeholder`,children:(0,S.jsx)(y,{})}),(0,S.jsx)(u,{title:`Grid placeholder`,children:(0,S.jsx)(b,{withTabs:!1})}),(0,S.jsx)(u,{title:`Grid placeholder with 3 items`,children:(0,S.jsx)(b,{withTabs:!1,numberOfItems:3})})]}),w.__docgenInfo={description:``,methods:[],displayName:`Default`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=TilePlaceholder.stories-1ExAb7Xf.js.map