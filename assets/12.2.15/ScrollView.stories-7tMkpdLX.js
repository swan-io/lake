import{j as e,V as t,s as u,h as j,b as c,L as d,S as s,c as a,t as f}from"./ScrollView-BL5TcFHx.js";import{r as h}from"./iframe-DR7W7vfy.js";import"./index-C4fev7_8.js";const L=20,r=u.create({root:{height:1,flexGrow:1},container:{height:1,flexGrow:1},topGradient:{height:30,position:"absolute",left:0,right:0,top:0,backgroundImage:`linear-gradient(to bottom, ${c.default}, ${c.defaultTransparent})`,opacity:0,transition:"200ms ease-in-out opacity",pointerEvents:"none"},visibleTopGradient:{opacity:1}}),i=({children:m,horizontalSafeArea:n=L,style:x,contentContainerStyle:S})=>{const[b,k]=h.useState(!1),w=h.useCallback(V=>{k(V.nativeEvent.contentOffset.y>0)},[]);return e.jsxs(t,{style:r.root,children:[e.jsx(j,{onScroll:w,scrollEventThrottle:16,style:[r.container,{marginHorizontal:-n},x],contentContainerStyle:[{paddingHorizontal:n},S],children:m}),e.jsx(t,{style:[r.topGradient,b&&r.visibleTopGradient]})]})};i.__docgenInfo={description:"",methods:[],displayName:"LakeScrollView",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:'ViewProps["style"]',raw:'ViewProps["style"]'},description:""},contentContainerStyle:{required:!1,tsType:{name:'ViewProps["style"]',raw:'ViewProps["style"]'},description:""},horizontalSafeArea:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const o=u.create({storyTitle:{...f.h1},blockSmall:{width:400,height:200,backgroundColor:a.gray[200],borderRadius:8},blockMedium:{width:600,height:300,backgroundColor:a.gray[200],borderRadius:8},blockLarge:{width:800,height:400,backgroundColor:a.gray[200],borderRadius:8}}),v={title:"Layout/ScrollView",component:i},l=()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(d,{style:o.storyTitle,children:"ScrollView"}),e.jsx(s,{height:8}),e.jsx(d,{children:"You can scroll to see gradient appear at top"})]}),e.jsx(s,{height:16}),e.jsxs(i,{children:[e.jsx(t,{style:o.blockSmall}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockLarge}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockMedium}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockLarge}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockSmall}),e.jsx(s,{height:16}),e.jsx(t,{style:o.blockMedium})]})]});l.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,y,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const C=["Default"];export{l as Default,C as __namedExportsOrder,v as default};
//# sourceMappingURL=ScrollView.stories-7tMkpdLX.js.map
