import{S as g,c as C,a,F as w,j as t,b as B,q as P,V as i}from"./Space-f85095f8.js";import{r as V}from"./index-b9a8c83f.js";import{G as v}from"./Grid-5aa0270a.js";import{a as p}from"./LakeButton-e8594097.js";import{L as k}from"./LakeModal-f1996725.js";import{S as M,a as r}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-7e9fd84c.js";import"./useMergeRefs-56399732.js";import"./index-4daf2301.js";import"./commonStyles-d52fedae.js";import"./useBodyClassName-4a67c631.js";import"./FocusTrap-758e437a.js";import"./array-a4405b3e.js";import"./LakeHeading-8971a458.js";import"./LoadingView-406d6625.js";import"./colors-298625c7.js";import"./ResponsiveContainer-46064607.js";import"./TransitionView-5833e7af.js";import"./Box-f4fbfbba.js";const o=g.create({block:{height:200,backgroundColor:C.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),Q={title:"Layout/Modal",component:k},e=({withCloseCross:n=!1,color:l,...c})=>{const[d,m]=V.useState(!1);return a(w,{children:[t(p,{color:l,size:"small",onPress:()=>m(!0),style:o.button,children:"Open"}),a(k,{...c,visible:d,onPressClose:n?()=>m(!1):void 0,children:[t(B,{height:8}),t(P,{children:a(v,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t(i,{style:o.block}),t(i,{style:o.block}),t(i,{style:o.block}),t(i,{style:o.block})]})}),t(p,{color:l,size:"small",onPress:()=>m(!1),children:"Close"})]})]})},s=({color:n,title:l,icon:c,maxWidth:d})=>a(M,{title:"Default",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t(r,{title:"Default",children:t(e,{title:l,color:n,icon:c,maxWidth:d})}),t(r,{title:"With title",children:t(e,{title:l})}),t(r,{title:"With title and icon",children:t(e,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t(r,{title:"Closable with click outside and top right cross",children:t(e,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});var u,y,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`({
  withCloseCross = false,
  color,
  ...props
}: ButtonModalProps & StoryArgs) => {
  const [visible, setVisible] = useState(false);
  return <>
      <LakeButton color={color} size="small" onPress={() => setVisible(true)} style={styles.button}>
        Open
      </LakeButton>

      <LakeModal {...props} visible={visible} onPressClose={withCloseCross ? () => setVisible(false) : undefined}>
        <Space height={8} />

        <ScrollView>
          <Grid horizontalSpace={4} verticalSpace={4} numColumns={4} style={styles.grid}>
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
          </Grid>
        </ScrollView>

        <LakeButton color={color} size="small" onPress={() => setVisible(false)}>
          Close
        </LakeButton>
      </LakeModal>
    </>;
}`,...(h=(y=e.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,b,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`({
  color,
  title,
  icon,
  maxWidth
}: StoryArgs) => {
  return <StoryBlock title="Default" description={["This component creates a modal with enter and leave animation. ", 'You can try it by clicking on "Open" button.']}>
      <StoryPart title="Default">
        <ButtonModal title={title} color={color} icon={icon} maxWidth={maxWidth} />
      </StoryPart>

      <StoryPart title="With title">
        <ButtonModal title={title} />
      </StoryPart>

      <StoryPart title="With title and icon">
        <ButtonModal title="Title and icon" icon="add-circle-filled" color="live" />
      </StoryPart>

      <StoryPart title="Closable with click outside and top right cross">
        <ButtonModal title="Title and icon" icon="add-circle-filled" color="live" withCloseCross={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const U=["ButtonModal","All"];export{s as All,e as ButtonModal,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Modal.stories-ad9aacc3.js.map
