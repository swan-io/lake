import{S as T,c as C,j as e,a as s,V as t,b as d,F as u,T as S}from"./Space-f85095f8.js";import{G as B}from"./Grid-5aa0270a.js";import{L as f}from"./LakeCopyButton-7282bdb6.js";import{L as r}from"./LakeLabel-2fef3f03.js";import{L as k}from"./LakeTextInput-221c8734.js";import{S as p,a as i}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-b9a8c83f.js";import"./Pressable-7e9fd84c.js";import"./useMergeRefs-56399732.js";import"./index-ca925b5c.js";import"./commonStyles-d52fedae.js";import"./Box-f4fbfbba.js";import"./v4-a960c1f4.js";import"./Fill-0c0bad9d.js";import"./index-4daf2301.js";const a=T.create({block:{height:50,backgroundColor:C.gray[100],borderRadius:5}}),Q={title:"Forms/Label",component:r},o="Creditor IBAN",c=({id:n,children:v})=>e(p,{title:"Readonly label",children:e(i,{title:"Color variations",children:s(B,{numColumns:5,horizontalSpace:8,verticalSpace:8,children:[e(r,{label:o,render:l=>e(t,{id:l,style:a.block,children:v})}),e(r,{label:"Gray",readOnly:!0,color:"gray",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Live",readOnly:!0,color:"live",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Sandbox",readOnly:!0,color:"sandbox",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Positive",readOnly:!0,color:"positive",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Warning",readOnly:!0,color:"warning",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Negative",readOnly:!0,color:"negative",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Current",readOnly:!0,color:"current",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Partner",readOnly:!0,color:"partner",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Swan",readOnly:!0,color:"swan",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Shakespear",readOnly:!0,color:"shakespear",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"DarkPink",readOnly:!0,color:"darkPink",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"Sunglow",readOnly:!0,color:"sunglow",render:l=>e(t,{id:l,style:a.block})}),e(r,{label:"MediumSladeBlue",readOnly:!0,color:"mediumSladeBlue",render:l=>e(t,{id:l,style:a.block})})]})})}),y=()=>e(p,{title:"Types labels",children:s(t,{children:[e(i,{title:"Default",children:e(r,{label:o,render:n=>e(k,{id:n})})}),e(i,{title:"Form",children:e(r,{label:o,render:n=>e(k,{id:n}),type:"form"})}),e(i,{title:"FormSmall",children:e(r,{label:o,render:n=>e(k,{id:n}),type:"formSmall"})}),s(i,{title:"View",children:[e(r,{label:o,render:n=>e(t,{id:n,style:a.block}),type:"view"}),e(d,{height:20})]}),e(i,{title:"ViewSmall",children:e(r,{label:o,render:n=>e(t,{id:n,style:a.block}),type:"viewSmall"})})]})}),b=()=>e(p,{title:"Variations labels",children:s(t,{children:[e(i,{title:"Optional label",children:e(r,{label:o,render:n=>e(t,{id:n,style:a.block}),optionalLabel:"Optional label"})}),e(d,{height:20}),e(i,{title:"Extra",children:e(r,{label:o,render:n=>e(t,{id:n,style:a.block}),extra:()=>s(u,{children:[e(d,{width:4}),e(S,{children:"Extra"})]})})}),e(d,{height:20}),e(i,{title:"Help",children:e(r,{label:o,render:n=>e(t,{id:n,style:a.block}),help:s(u,{children:[e(d,{width:4}),e(S,{children:"Help"})]})})}),e(d,{height:20}),e(i,{title:"With actions",children:e(r,{label:o,render:n=>e(t,{id:n,style:a.block}),actions:e(f,{valueToCopy:"",copyText:"Copy",copiedText:"Copied"})})})]})});var m,L,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`({
  id,
  children
}: StoryArgs) => {
  return <StoryBlock title="Readonly label">
      <StoryPart title="Color variations">
        <Grid numColumns={5} horizontalSpace={8} verticalSpace={8}>
          <LakeLabel label={label} render={id => <View id={id} style={styles.block} children={children} />} />

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
}`,...(h=(L=c.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var w,V,O;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(O=(V=y.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var g,P,x;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(x=(P=b.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const U=["ReadOnly","Types","Variations"];export{c as ReadOnly,y as Types,b as Variations,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Label.stories-ab23ebbd.js.map
