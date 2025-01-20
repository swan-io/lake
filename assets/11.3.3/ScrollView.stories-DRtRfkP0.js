import{j as e}from"./jsx-runtime-DT09rT5F.js";import{r as c}from"./index-DXKZGL6g.js";import{s as u,e as d,V as t,j as V,t as f,c as a,L as p,S as s}from"./ScrollView-uRWD7sHo.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CKeW-Qoz.js";const L=20,l=u.create({root:{height:1,flexGrow:1},container:{height:1,flexGrow:1},topGradient:{height:30,position:"absolute",left:0,right:0,top:0,backgroundImage:`linear-gradient(to bottom, ${d.default}, ${d.defaultTransparent})`,opacity:0,transition:"200ms ease-in-out opacity",pointerEvents:"none"},visibleTopGradient:{opacity:1}}),i=({children:m,horizontalSafeArea:n=L,style:x,contentContainerStyle:S})=>{const[k,b]=c.useState(!1),w=c.useCallback(j=>{b(j.nativeEvent.contentOffset.y>0)},[]);return e.jsxs(t,{style:l.root,children:[e.jsx(V,{onScroll:w,scrollEventThrottle:16,style:[l.container,{marginHorizontal:-n},x],contentContainerStyle:[{paddingHorizontal:n},S],children:m}),e.jsx(t,{style:[l.topGradient,k&&l.visibleTopGradient]})]})};i.__docgenInfo={description:"",methods:[],displayName:"LakeScrollView",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:'ViewProps["style"]',raw:'ViewProps["style"]'},description:""},contentContainerStyle:{required:!1,tsType:{name:'ViewProps["style"]',raw:'ViewProps["style"]'},description:""},horizontalSafeArea:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const o=u.create({storyTitle:{...f.h1},blockSmall:{width:400,height:200,backgroundColor:a.gray[200],borderRadius:8},blockMedium:{width:600,height:300,backgroundColor:a.gray[200],borderRadius:8},blockLarge:{width:800,height:400,backgroundColor:a.gray[200],borderRadius:8}}),R={title:"Layout/ScrollView",component:i},r=()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(p,{style:o.storyTitle,children:"ScrollView"}),e.jsx(s,{height:8}),e.jsx(p,{children:"You can scroll to see gradient appear at top"})]}),e.jsx(s,{height:16}),e.jsxs(i,{children:[e.jsx(t,{style:o.blockSmall}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockLarge}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockMedium}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockLarge}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockSmall}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockMedium})]})]});r.__docgenInfo={description:"",methods:[],displayName:"Default"};var h,y,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const G=["Default"];export{r as Default,G as __namedExportsOrder,R as default};
//# sourceMappingURL=ScrollView.stories-DRtRfkP0.js.map
