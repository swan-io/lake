import{S as g,a as c,j as t,c as s,L as k}from"./Space-64987a8e.js";import{r as x}from"./index-b9a8c83f.js";import{B as i}from"./Box-feb7d382.js";import{a as S}from"./LakeButton-c6aa02e5.js";import{S as b,a as e}from"./_StoriesComponents-54a2d45f.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-606d0e18.js";import"./useMergeRefs-82d36a9e.js";import"./index-5415d504.js";const n=g.create({buttons:{flexWrap:"wrap"},buttonWrapper:{marginRight:32,marginBottom:16},button:{minWidth:200},countValue:{width:24}}),R={title:"Interactivity/Button",component:S},u=o=>o.charAt(0).toUpperCase()+o.slice(1),r=o=>{const[W,C]=x.useState(0);return c(i,{direction:"row",alignItems:"center",style:n.buttonWrapper,children:[t(S,{...o,style:n.button,onPress:()=>C(P=>P+1)}),t(k,{align:"right",style:n.countValue,children:W})]})},l=()=>c(b,{title:"Button colors",children:[t(e,{title:"Primary",children:t(i,{direction:"row",style:n.buttons,children:Object.keys(s).map(o=>t(r,{mode:"primary",color:o,children:u(o)},o))})}),t(e,{title:"Secondary",children:t(i,{direction:"row",style:n.buttons,children:Object.keys(s).map(o=>t(r,{mode:"secondary",color:o,children:u(o)},o))})}),t(e,{title:"Tertiary",children:t(i,{direction:"row",style:n.buttons,children:Object.keys(s).map(o=>t(r,{mode:"tertiary",color:o,children:u(o)},o))})})]}),a=()=>c(b,{title:"Button states",children:[t(e,{title:"Small",children:t(r,{size:"small",color:"live",children:"Small button"})}),t(e,{title:"Disabled",children:t(r,{disabled:!0,color:"live",children:"Disabled"})}),t(e,{title:"Loading",children:t(r,{loading:!0,color:"live",children:"Loading"})}),t(e,{title:"With pill",children:t(r,{pill:!0,color:"live",children:"Pill"})}),t(e,{title:"With icon",children:c(i,{direction:"row",style:n.buttons,children:[t(r,{icon:"add-circle-filled",color:"positive",children:"Add"}),t(r,{icon:"delete-filled",iconPosition:"end",color:"negative",children:"Remove"})]})})]});var d,y,h;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <StoryBlock title="Button colors">
      <StoryPart title="Primary">
        <Box direction="row" style={styles.buttons}>
          {Object.keys(colors).map(color => <ButtonWithCounter key={color} mode="primary" color={(color as ColorVariants)}>
              {capitalize(color)}
            </ButtonWithCounter>)}
        </Box>
      </StoryPart>

      <StoryPart title="Secondary">
        <Box direction="row" style={styles.buttons}>
          {Object.keys(colors).map(color => <ButtonWithCounter mode="secondary" key={color} color={(color as ColorVariants)}>
              {capitalize(color)}
            </ButtonWithCounter>)}
        </Box>
      </StoryPart>

      <StoryPart title="Tertiary">
        <Box direction="row" style={styles.buttons}>
          {Object.keys(colors).map(color => <ButtonWithCounter mode="tertiary" key={color} color={(color as ColorVariants)}>
              {capitalize(color)}
            </ButtonWithCounter>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var m,p,B;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="Button states">
      <StoryPart title="Small">
        <ButtonWithCounter size="small" color="live">
          Small button
        </ButtonWithCounter>
      </StoryPart>

      <StoryPart title="Disabled">
        <ButtonWithCounter disabled={true} color="live">
          Disabled
        </ButtonWithCounter>
      </StoryPart>

      <StoryPart title="Loading">
        <ButtonWithCounter loading={true} color="live">
          Loading
        </ButtonWithCounter>
      </StoryPart>

      <StoryPart title="With pill">
        <ButtonWithCounter pill={true} color="live">
          Pill
        </ButtonWithCounter>
      </StoryPart>

      <StoryPart title="With icon">
        <Box direction="row" style={styles.buttons}>
          <ButtonWithCounter icon="add-circle-filled" color="positive">
            Add
          </ButtonWithCounter>

          <ButtonWithCounter icon="delete-filled" iconPosition="end" color="negative">
            Remove
          </ButtonWithCounter>
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(B=(p=a.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};const T=["Colors","ButtonStates"];export{a as ButtonStates,l as Colors,T as __namedExportsOrder,R as default};
//# sourceMappingURL=Button.stories-45f51933.js.map
