import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-Bdn14elh.js";import{U as r,ht as i,i as a,it as o,kt as s,mt as c,n as l,nt as u,o as d,r as f,s as p,st as m,t as h,wt as g}from"./ScrollView-BZAAJkeN.js";var _,v,y,b,x,S=t((()=>{_=e(n()),i(),m(),l(),v=r(),y=20,b=s.create({root:{height:1,flexGrow:1},container:{height:1,flexGrow:1},topGradient:{height:30,position:`absolute`,left:0,right:0,top:0,backgroundImage:`linear-gradient(to bottom, ${u.default}, ${u.defaultTransparent})`,opacity:0,transition:`200ms ease-in-out opacity`,pointerEvents:`none`},visibleTopGradient:{opacity:1}}),x=({children:e,horizontalSafeArea:t=y,style:n,contentContainerStyle:r})=>{let[i,a]=(0,_.useState)(!1),o=(0,_.useCallback)(e=>{a(e.nativeEvent.contentOffset.y>0)},[]);return(0,v.jsxs)(g,{style:b.root,children:[(0,v.jsx)(h,{onScroll:o,scrollEventThrottle:16,style:[b.container,{marginHorizontal:-t},n],contentContainerStyle:[{paddingHorizontal:t},r],children:e}),(0,v.jsx)(g,{style:[b.topGradient,i&&b.visibleTopGradient]})]})},x.__docgenInfo={description:``,methods:[],displayName:`LakeScrollView`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},style:{required:!1,tsType:{name:`ViewProps["style"]`,raw:`ViewProps["style"]`},description:``},contentContainerStyle:{required:!1,tsType:{name:`ViewProps["style"]`,raw:`ViewProps["style"]`},description:``},horizontalSafeArea:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`20`,computed:!1}}}}})),C,w,T,E,D;t((()=>{i(),S(),p(),a(),m(),C=r(),w=s.create({storyTitle:{...c.h1},blockSmall:{width:400,height:200,backgroundColor:o.gray[200],borderRadius:8},blockMedium:{width:600,height:300,backgroundColor:o.gray[200],borderRadius:8},blockLarge:{width:800,height:400,backgroundColor:o.gray[200],borderRadius:8}}),T={title:`Layout/ScrollView`,component:x},E=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(d,{style:w.storyTitle,children:`ScrollView`}),(0,C.jsx)(f,{height:8}),(0,C.jsx)(d,{children:`You can scroll to see gradient appear at top`})]}),(0,C.jsx)(f,{height:16}),(0,C.jsxs)(x,{children:[(0,C.jsx)(g,{style:w.blockSmall}),(0,C.jsx)(f,{height:16}),(0,C.jsx)(g,{style:w.blockLarge}),(0,C.jsx)(f,{height:16}),(0,C.jsx)(g,{style:w.blockMedium}),(0,C.jsx)(f,{height:16}),(0,C.jsx)(g,{style:w.blockLarge}),(0,C.jsx)(f,{height:16}),(0,C.jsx)(g,{style:w.blockSmall}),(0,C.jsx)(f,{height:16}),(0,C.jsx)(g,{style:w.blockMedium})]})]}),E.__docgenInfo={description:``,methods:[],displayName:`Default`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D=[`Default`]}))();export{E as Default,D as __namedExportsOrder,T as default};
//# sourceMappingURL=ScrollView.stories-CbGsX4zG.js.map