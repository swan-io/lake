import{j as e,V as t,s as h,h as k,b as c,L as d,S as s,c as a,t as w}from"./ScrollView-CpUTXgYs.js";import{r as p}from"./iframe-dOPJIEGP.js";import"./index-DnkiMwA5.js";import"./preload-helper-D1IIBeq1.js";const V=20,l=h.create({root:{height:1,flexGrow:1},container:{height:1,flexGrow:1},topGradient:{height:30,position:"absolute",left:0,right:0,top:0,backgroundImage:`linear-gradient(to bottom, ${c.default}, ${c.defaultTransparent})`,opacity:0,transition:"200ms ease-in-out opacity",pointerEvents:"none"},visibleTopGradient:{opacity:1}}),i=({children:y,horizontalSafeArea:n=V,style:g,contentContainerStyle:u})=>{const[m,x]=p.useState(!1),S=p.useCallback(b=>{x(b.nativeEvent.contentOffset.y>0)},[]);return e.jsxs(t,{style:l.root,children:[e.jsx(k,{onScroll:S,scrollEventThrottle:16,style:[l.container,{marginHorizontal:-n},g],contentContainerStyle:[{paddingHorizontal:n},u],children:y}),e.jsx(t,{style:[l.topGradient,m&&l.visibleTopGradient]})]})};i.__docgenInfo={description:"",methods:[],displayName:"LakeScrollView",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:'ViewProps["style"]',raw:'ViewProps["style"]'},description:""},contentContainerStyle:{required:!1,tsType:{name:'ViewProps["style"]',raw:'ViewProps["style"]'},description:""},horizontalSafeArea:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const o=h.create({storyTitle:{...w.h1},blockSmall:{width:400,height:200,backgroundColor:a.gray[200],borderRadius:8},blockMedium:{width:600,height:300,backgroundColor:a.gray[200],borderRadius:8},blockLarge:{width:800,height:400,backgroundColor:a.gray[200],borderRadius:8}}),_={title:"Layout/ScrollView",component:i},r=()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(d,{style:o.storyTitle,children:"ScrollView"}),e.jsx(s,{height:8}),e.jsx(d,{children:"You can scroll to see gradient appear at top"})]}),e.jsx(s,{height:16}),e.jsxs(i,{children:[e.jsx(t,{style:o.blockSmall}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockLarge}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockMedium}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockLarge}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockSmall}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockMedium})]})]});r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <>
      <View>
        <LakeText style={styles.storyTitle}>ScrollView</LakeText>
        <Space height={8} />
        <LakeText>You can scroll to see gradient appear at top</LakeText>
      </View>

      <Space height={16} />

      <LakeScrollView>
        <View style={styles.blockSmall} />
        <Space height={16} />
        <View style={styles.blockLarge} />
        <Space height={16} />
        <View style={styles.blockMedium} />
        <Space height={16} />
        <View style={styles.blockLarge} />
        <Space height={16} />
        <View style={styles.blockSmall} />
        <Space height={16} />
        <View style={styles.blockMedium} />
      </LakeScrollView>
    </>;
}`,...r.parameters?.docs?.source}}};const E=["Default"];export{r as Default,E as __namedExportsOrder,_ as default};
//# sourceMappingURL=ScrollView.stories-Da7nCLL2.js.map
