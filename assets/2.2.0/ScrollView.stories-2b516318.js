import{S as m,e as h,j as i,V as t,a as e,o as x,t as T,c as s,F as _,L as y,b as l}from"./Space-03a205dd.js";import{r as p}from"./index-ebeaab24.js";import"./extends-98964cd2.js";const C=20,a=m.create({root:{height:1,flexGrow:1},container:{height:1,flexGrow:1},topGradient:{height:30,position:"absolute",left:0,right:0,top:0,backgroundImage:`linear-gradient(to bottom, ${h.default}, ${h.defaultTransparent})`,opacity:0,transition:"200ms ease-in-out opacity",pointerEvents:"none"},visibleTopGradient:{opacity:1}}),n=({children:c,horizontalSafeArea:d=C,style:k,contentContainerStyle:b})=>{const[w,V]=p.useState(!1),f=p.useCallback(L=>{V(L.nativeEvent.contentOffset.y>0)},[]);return i(t,{style:a.root,children:[e(x,{onScroll:f,scrollEventThrottle:16,style:[a.container,{marginHorizontal:-d},k],contentContainerStyle:[{paddingHorizontal:d},b],children:c}),e(t,{style:[a.topGradient,w&&a.visibleTopGradient]})]})};try{n.displayName="LakeScrollView",n.__docgenInfo={description:"",displayName:"LakeScrollView",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},contentContainerStyle:{defaultValue:null,description:"",name:"contentContainerStyle",required:!1,type:{name:"StyleProp<ViewStyle>"}},horizontalSafeArea:{defaultValue:{value:"20"},description:"",name:"horizontalSafeArea",required:!1,type:{name:"number"}}}}}catch{}const o=m.create({storyTitle:{...T.h1},blockSmall:{width:400,height:200,backgroundColor:s.gray[200],borderRadius:8},blockMedium:{width:600,height:300,backgroundColor:s.gray[200],borderRadius:8},blockLarge:{width:800,height:400,backgroundColor:s.gray[200],borderRadius:8}}),A={title:"Layout/ScrollView",component:n},r=()=>i(_,{children:[i(t,{children:[e(y,{style:o.storyTitle,children:"ScrollView"}),e(l,{height:8}),e(y,{children:"You can scroll to see gradient appear at top"})]}),e(l,{height:16}),i(n,{children:[e(t,{style:o.blockSmall}),e(l,{height:16}),e(t,{style:o.blockLarge}),e(l,{height:16}),e(t,{style:o.blockMedium}),e(l,{height:16}),e(t,{style:o.blockLarge}),e(l,{height:16}),e(t,{style:o.blockSmall}),e(l,{height:16}),e(t,{style:o.blockMedium})]})]});var g,u,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const M=["Default"];export{r as Default,M as __namedExportsOrder,A as default};
//# sourceMappingURL=ScrollView.stories-2b516318.js.map
