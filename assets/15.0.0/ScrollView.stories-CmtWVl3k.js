import{c as e,i as t}from"./preload-helper-LFDnojF3.js";import{o as n}from"./iframe-BsY-p0G8.js";import{St as r,U as i,bt as a,ht as o,i as s,it as c,mt as l,n as u,nt as d,o as f,r as p,s as m,st as h,t as g}from"./ScrollView-DiKl805m.js";var _,v,y,b,x,S=t((()=>{_=e(n()),o(),h(),u(),v=i(),y=20,b=r.create({root:{height:1,flexGrow:1},container:{height:1,flexGrow:1},topGradient:{height:30,position:`absolute`,left:0,right:0,top:0,backgroundImage:`linear-gradient(to bottom, ${d.default}, ${d.defaultTransparent})`,opacity:0,transition:`200ms ease-in-out opacity`,pointerEvents:`none`},visibleTopGradient:{opacity:1}}),x=({children:e,horizontalSafeArea:t=y,style:n,contentContainerStyle:r})=>{let[i,o]=(0,_.useState)(!1),s=(0,_.useCallback)(e=>{o(e.nativeEvent.contentOffset.y>0)},[]);return(0,v.jsxs)(a,{style:b.root,children:[(0,v.jsx)(g,{onScroll:s,scrollEventThrottle:16,style:[b.container,{marginHorizontal:-t},n],contentContainerStyle:[{paddingHorizontal:t},r],children:e}),(0,v.jsx)(a,{style:[b.topGradient,i&&b.visibleTopGradient]})]})},x.__docgenInfo={description:``,methods:[],displayName:`LakeScrollView`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},style:{required:!1,tsType:{name:`ViewProps["style"]`,raw:`ViewProps["style"]`},description:``},contentContainerStyle:{required:!1,tsType:{name:`ViewProps["style"]`,raw:`ViewProps["style"]`},description:``},horizontalSafeArea:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`20`,computed:!1}}}}})),C,w,T,E,D;t((()=>{o(),S(),m(),s(),h(),C=i(),w=r.create({storyTitle:{...l.h1},blockSmall:{width:400,height:200,backgroundColor:c.gray[200],borderRadius:8},blockMedium:{width:600,height:300,backgroundColor:c.gray[200],borderRadius:8},blockLarge:{width:800,height:400,backgroundColor:c.gray[200],borderRadius:8}}),T={title:`Layout/ScrollView`,component:x},E=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(a,{children:[(0,C.jsx)(f,{style:w.storyTitle,children:`ScrollView`}),(0,C.jsx)(p,{height:8}),(0,C.jsx)(f,{children:`You can scroll to see gradient appear at top`})]}),(0,C.jsx)(p,{height:16}),(0,C.jsxs)(x,{children:[(0,C.jsx)(a,{style:w.blockSmall}),(0,C.jsx)(p,{height:16}),(0,C.jsx)(a,{style:w.blockLarge}),(0,C.jsx)(p,{height:16}),(0,C.jsx)(a,{style:w.blockMedium}),(0,C.jsx)(p,{height:16}),(0,C.jsx)(a,{style:w.blockLarge}),(0,C.jsx)(p,{height:16}),(0,C.jsx)(a,{style:w.blockSmall}),(0,C.jsx)(p,{height:16}),(0,C.jsx)(a,{style:w.blockMedium})]})]}),E.__docgenInfo={description:``,methods:[],displayName:`Default`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=ScrollView.stories-CmtWVl3k.js.map