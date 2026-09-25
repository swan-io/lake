import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-CfAHUjpY.js";import{Bt as r,Et as i,Ft as a,St as o,et as s,ht as c,i as l,r as u,vt as d}from"./ScrollView-BpRevQ4p.js";import{n as f,r as p,t as m}from"./_StoriesComponents-BfG2G5KR.js";import{n as h,r as g,t as _}from"./Tile-rMwJn9YT.js";var v,y,b,x,S,C=t((()=>{v=e(n()),i(),d(),l(),g(),y=s(),b=r.create({placeholderTitle:{height:14,width:`40%`,backgroundColor:c.gray[200],borderRadius:o[6],animationKeyframes:{"50%":{opacity:.6}},animationDuration:`2000ms`,animationTimingFunction:`linear`,animationIterationCount:`infinite`},placeholderText:{height:10,width:`50%`,backgroundColor:c.gray[100],borderRadius:o[6],marginVertical:24},content:{animationKeyframes:{"50%":{opacity:.6}},animationDuration:`2000ms`,animationTimingFunction:`linear`,animationIterationCount:`infinite`},withTabs:{paddingTop:61}}),x=({collapsed:e=!1})=>(0,y.jsxs)(_,{children:[(0,y.jsx)(a,{style:b.placeholderTitle}),!e&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u,{height:24}),(0,y.jsxs)(a,{style:b.content,children:[(0,y.jsx)(a,{style:b.placeholderText}),(0,y.jsx)(a,{style:b.placeholderText}),(0,y.jsx)(a,{style:b.placeholderText}),(0,y.jsx)(a,{style:b.placeholderText})]})]})]}),S=({numberOfItems:e=2,withTabs:t=!0})=>(0,y.jsx)(a,{style:t&&b.withTabs,children:(0,y.jsx)(h,{children:(0,v.useMemo)(()=>Array(e).fill(null).map((e,t)=>(0,y.jsx)(x,{},`placeholder-${t}`)),[e])})}),x.__docgenInfo={description:``,methods:[],displayName:`TilePlaceholder`,props:{collapsed:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},S.__docgenInfo={description:``,methods:[],displayName:`TileGridPlaceholder`,props:{numberOfItems:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},withTabs:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}})),w,T,E,D;t((()=>{C(),p(),w=s(),T={title:`Layout/TilePlaceholder`,component:x},E=()=>(0,w.jsxs)(m,{title:`TilePlaceholder`,children:[(0,w.jsx)(f,{title:`Default placeholder`,children:(0,w.jsx)(x,{})}),(0,w.jsx)(f,{title:`Collapsed placeholder`,children:(0,w.jsx)(x,{collapsed:!0})}),(0,w.jsx)(f,{title:`Grid placeholder`,children:(0,w.jsx)(S,{withTabs:!1})}),(0,w.jsx)(f,{title:`Grid placeholder with 3 items`,children:(0,w.jsx)(S,{withTabs:!1,numberOfItems:3})})]}),E.__docgenInfo={description:``,methods:[],displayName:`Default`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="TilePlaceholder">
      <StoryPart title="Default placeholder">
        <TilePlaceholder />
      </StoryPart>

      <StoryPart title="Collapsed placeholder">
        <TilePlaceholder collapsed={true} />
      </StoryPart>

      <StoryPart title="Grid placeholder">
        <TileGridPlaceholder withTabs={false} />
      </StoryPart>

      <StoryPart title="Grid placeholder with 3 items">
        <TileGridPlaceholder withTabs={false} numberOfItems={3} />
      </StoryPart>
    </StoryBlock>;
}`,...E.parameters?.docs?.source}}},D=[`Default`]}))();export{E as Default,D as __namedExportsOrder,T as default};
//# sourceMappingURL=TilePlaceholder.stories-HAw1cUhA.js.map