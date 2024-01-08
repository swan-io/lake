import{s as m,g as h,j as i,V as t,a as e,d as x,t as T,c as n,F as _,L as p,S as l}from"./Space-qDRhxWQC.js";import{r as y}from"./index-4g5l5LRQ.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";const C=20,a=m.create({root:{height:1,flexGrow:1},container:{height:1,flexGrow:1},topGradient:{height:30,position:"absolute",left:0,right:0,top:0,backgroundImage:`linear-gradient(to bottom, ${h.default}, ${h.defaultTransparent})`,opacity:0,transition:"200ms ease-in-out opacity",pointerEvents:"none"},visibleTopGradient:{opacity:1}}),s=({children:c,horizontalSafeArea:d=C,style:k,contentContainerStyle:b})=>{const[w,V]=y.useState(!1),f=y.useCallback(L=>{V(L.nativeEvent.contentOffset.y>0)},[]);return i(t,{style:a.root,children:[e(x,{onScroll:f,scrollEventThrottle:16,style:[a.container,{marginHorizontal:-d},k],contentContainerStyle:[{paddingHorizontal:d},b],children:c}),e(t,{style:[a.topGradient,w&&a.visibleTopGradient]})]})};try{s.displayName="LakeScrollView",s.__docgenInfo={description:"",displayName:"LakeScrollView",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},contentContainerStyle:{defaultValue:null,description:"",name:"contentContainerStyle",required:!1,type:{name:"StyleProp<ViewStyle>"}},horizontalSafeArea:{defaultValue:{value:"20"},description:"",name:"horizontalSafeArea",required:!1,type:{name:"number"}}}}}catch{}const o=m.create({storyTitle:{...T.h1},blockSmall:{width:400,height:200,backgroundColor:n.gray[200],borderRadius:8},blockMedium:{width:600,height:300,backgroundColor:n.gray[200],borderRadius:8},blockLarge:{width:800,height:400,backgroundColor:n.gray[200],borderRadius:8}}),R={title:"Layout/ScrollView",component:s},r=()=>i(_,{children:[i(t,{children:[e(p,{style:o.storyTitle,children:"ScrollView"}),e(l,{height:8}),e(p,{children:"You can scroll to see gradient appear at top"})]}),e(l,{height:16}),i(s,{children:[e(t,{style:o.blockSmall}),e(l,{height:16}),e(t,{style:o.blockLarge}),e(l,{height:16}),e(t,{style:o.blockMedium}),e(l,{height:16}),e(t,{style:o.blockLarge}),e(l,{height:16}),e(t,{style:o.blockSmall}),e(l,{height:16}),e(t,{style:o.blockMedium})]})]});var g,u,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const I=["Default"];export{r as Default,I as __namedExportsOrder,R as default};
//# sourceMappingURL=ScrollView.stories-zVssbUnE.js.map
