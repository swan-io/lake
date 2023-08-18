import{S as m,g as h,a as n,V as t,j as e,q as x,t as T,c,F as _,L as y,b as l}from"./Space-f85095f8.js";import{r as p}from"./index-b9a8c83f.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";const A=20,r=m.create({root:{height:1,flexGrow:1},container:{height:1,flexGrow:1},topGradient:{height:30,position:"absolute",left:0,right:0,top:0,backgroundImage:`linear-gradient(to bottom, ${h.default}, ${h.defaultTransparent})`,opacity:0,transition:"200ms ease-in-out opacity",pointerEvents:"none"},visibleTopGradient:{opacity:1}}),s=({children:o,horizontalSafeArea:d=A,style:k,contentContainerStyle:b})=>{const[w,V]=p.useState(!1),f=p.useCallback(L=>{V(L.nativeEvent.contentOffset.y>0)},[]);return n(t,{style:r.root,children:[e(x,{onScroll:f,scrollEventThrottle:16,style:[r.container,{marginHorizontal:-d},k],contentContainerStyle:[{paddingHorizontal:d},b],children:o}),e(t,{style:[r.topGradient,w&&r.visibleTopGradient]})]})};try{s.displayName="LakeScrollView",s.__docgenInfo={description:"",displayName:"LakeScrollView",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},contentContainerStyle:{defaultValue:null,description:"",name:"contentContainerStyle",required:!1,type:{name:"StyleProp<ViewStyle>"}},horizontalSafeArea:{defaultValue:{value:"20"},description:"",name:"horizontalSafeArea",required:!1,type:{name:"number"}}}}}catch{}const a=m.create({storyTitle:{...T.h1},blockSmall:{width:400,height:200,backgroundColor:c.gray[200],borderRadius:8},blockMedium:{width:600,height:300,backgroundColor:c.gray[200],borderRadius:8},blockLarge:{width:800,height:400,backgroundColor:c.gray[200],borderRadius:8}}),G={title:"Layout/ScrollView",component:s},i=({horizontalSafeArea:o})=>n(_,{children:[n(t,{children:[e(y,{style:a.storyTitle,children:"ScrollView"}),e(l,{height:8}),e(y,{children:"You can scroll to see gradient appear at top"})]}),e(l,{height:16}),n(s,{horizontalSafeArea:o,children:[e(t,{style:a.blockSmall}),e(l,{height:16}),e(t,{style:a.blockLarge}),e(l,{height:16}),e(t,{style:a.blockMedium}),e(l,{height:16}),e(t,{style:a.blockLarge}),e(l,{height:16}),e(t,{style:a.blockSmall}),e(l,{height:16}),e(t,{style:a.blockMedium})]})]});var g,u,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`({
  horizontalSafeArea
}: StoryArgs) => {
  return <>
      <View>
        <LakeText style={styles.storyTitle}>ScrollView</LakeText>
        <Space height={8} />
        <LakeText>You can scroll to see gradient appear at top</LakeText>
      </View>

      <Space height={16} />

      <LakeScrollView horizontalSafeArea={horizontalSafeArea}>
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
}`,...(S=(u=i.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const M=["Default"];export{i as Default,M as __namedExportsOrder,G as default};
//# sourceMappingURL=ScrollView.stories-d707228c.js.map
