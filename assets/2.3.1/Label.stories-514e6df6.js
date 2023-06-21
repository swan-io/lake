import{S as x,c as v,a as e,j as d,V as t,b as i,F as k,T as u}from"./Space-a702eced.js";import{G as T}from"./Grid-9d61d584.js";import{L as C}from"./LakeCopyButton-295794cc.js";import{L as r}from"./LakeLabel-55b1da60.js";import{L as b}from"./LakeTextInput-9cf6a185.js";import{S as p,a as n}from"./_StoriesComponents-97d37cc1.js";import"./extends-98964cd2.js";import"./index-ebeaab24.js";import"./Icon-deaf2458.js";import"./Svg-fe3a1521.js";import"./LakeTooltip-ea9fa0e0.js";import"./index-9c09ad76.js";import"./index-ac9179ac.js";import"./useMergeRefs-af5bcba9.js";import"./Portal-2164713e.js";import"./WithCurrentColor-083d77eb.js";import"./Pressable-c882f415.js";import"./index-ca925b5c.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Fill-edc8a5e3.js";import"./index-bc6e6125.js";const a=x.create({block:{height:50,backgroundColor:v.gray[100],borderRadius:5}}),Y={title:"Forms/Label",component:r},o="Creditor IBAN",s=()=>e(p,{title:"Readonly label",children:e(n,{title:"Color variations",children:d(T,{numColumns:5,horizontalSpace:8,verticalSpace:8,children:[e(r,{label:"Default",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Gray",readOnly:!0,color:"gray",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Live",readOnly:!0,color:"live",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Sandbox",readOnly:!0,color:"sandbox",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Positive",readOnly:!0,color:"positive",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Warning",readOnly:!0,color:"warning",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Negative",readOnly:!0,color:"negative",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Current",readOnly:!0,color:"current",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Partner",readOnly:!0,color:"partner",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Swan",readOnly:!0,color:"swan",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Shakespear",readOnly:!0,color:"shakespear",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"DarkPink",readOnly:!0,color:"darkPink",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Sunglow",readOnly:!0,color:"sunglow",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"MediumSladeBlue",readOnly:!0,color:"mediumSladeBlue",render:l=>e(t,{id:l,style:a.block})})]})})}),c=()=>e(p,{title:"Types labels",children:d(t,{children:[e(n,{title:"Default",children:e(r,{label:o,render:l=>e(b,{id:l})})}),e(n,{title:"Form",children:e(r,{label:o,render:l=>e(b,{id:l}),type:"form"})}),e(n,{title:"FormSmall",children:e(r,{label:o,render:l=>e(b,{id:l}),type:"formSmall"})}),d(n,{title:"View",children:[e(r,{label:o,render:l=>e(t,{id:l,style:a.block}),type:"view"}),e(i,{height:20})]}),e(n,{title:"ViewSmall",children:e(r,{label:o,render:l=>e(t,{id:l,style:a.block}),type:"viewSmall"})})]})}),y=()=>e(p,{title:"Variations labels",children:d(t,{children:[e(n,{title:"Optional label",children:e(r,{label:o,render:l=>e(t,{id:l,style:a.block}),optionalLabel:"Optional label"})}),e(i,{height:20}),e(n,{title:"Extra",children:e(r,{label:o,render:l=>e(t,{id:l,style:a.block}),extra:()=>d(k,{children:[e(i,{width:4}),e(u,{children:"Extra"})]})})}),e(i,{height:20}),e(n,{title:"Help",children:e(r,{label:o,render:l=>e(t,{id:l,style:a.block}),help:d(k,{children:[e(i,{width:4}),e(u,{children:"Help"})]})})}),e(i,{height:20}),e(n,{title:"With actions",children:e(r,{label:o,render:l=>e(t,{id:l,style:a.block}),actions:e(C,{valueToCopy:"",copyText:"Copy",copiedText:"Copied"})})})]})});var m,S,L;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="Readonly label">
      <StoryPart title="Color variations">
        <Grid numColumns={5} horizontalSpace={8} verticalSpace={8}>
          <LakeLabel label="Default" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="Gray" readOnly={true} color="gray" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="Live" readOnly={true} color="live" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="Sandbox" readOnly={true} color="sandbox" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="Positive" readOnly={true} color="positive" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="Warning" readOnly={true} color="warning" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="Negative" readOnly={true} color="negative" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="Current" readOnly={true} color="current" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="Partner" readOnly={true} color="partner" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="Swan" readOnly={true} color="swan" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="Shakespear" readOnly={true} color="shakespear" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="DarkPink" readOnly={true} color="darkPink" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="Sunglow" readOnly={true} color="sunglow" render={id => <View id={id} style={styles.block} />} />

          <LakeLabel label="MediumSladeBlue" readOnly={true} color="mediumSladeBlue" render={id => <View id={id} style={styles.block} />} />
        </Grid>
      </StoryPart>
    </StoryBlock>;
}`,...(L=(S=s.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var h,w,V;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <StoryBlock title="Types labels">
      <View>
        <StoryPart title="Default">
          <LakeLabel label={label} render={id => <LakeTextInput id={id} />} />
        </StoryPart>

        <StoryPart title="Form">
          <LakeLabel label={label} render={id => <LakeTextInput id={id} />} type="form" />
        </StoryPart>

        <StoryPart title="FormSmall">
          <LakeLabel label={label} render={id => <LakeTextInput id={id} />} type="formSmall" />
        </StoryPart>

        <StoryPart title="View">
          <LakeLabel label={label} render={id => <View id={id} style={styles.block} />} type="view" />

          <Space height={20} />
        </StoryPart>

        <StoryPart title="ViewSmall">
          <LakeLabel label={label} render={id => <View id={id} style={styles.block} />} type="viewSmall" />
        </StoryPart>
      </View>
    </StoryBlock>;
}`,...(V=(w=c.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var O,g,P;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <StoryBlock title="Variations labels">
      <View>
        <StoryPart title="Optional label">
          <LakeLabel label={label} render={id => <View id={id} style={styles.block} />} optionalLabel="Optional label" />
        </StoryPart>

        <Space height={20} />

        <StoryPart title="Extra">
          <LakeLabel label={label} render={id => <View id={id} style={styles.block} />} extra={() => <>
                <Space width={4} />
                <Text>Extra</Text>
              </>} />
        </StoryPart>

        <Space height={20} />

        <StoryPart title="Help">
          <LakeLabel label={label} render={id => <View id={id} style={styles.block} />} help={<>
                <Space width={4} />
                <Text>Help</Text>
              </>} />
        </StoryPart>

        <Space height={20} />

        <StoryPart title="With actions">
          <LakeLabel label={label} render={id => <View id={id} style={styles.block} />} actions={<LakeCopyButton valueToCopy={""} copyText={"Copy"} copiedText={"Copied"} />} />
        </StoryPart>
      </View>
    </StoryBlock>;
}`,...(P=(g=y.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};const Z=["ReadOnly","Types","Variations"];export{s as ReadOnly,c as Types,y as Variations,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Label.stories-514e6df6.js.map
