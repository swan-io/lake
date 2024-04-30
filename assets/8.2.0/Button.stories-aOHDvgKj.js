import{s as C,j as t,B as s,c as a,L as W}from"./Space-BXMyA1ws.js";import{r as P}from"./index-CBqU2yxZ.js";import{L as B}from"./LakeButton-CNUtrYY9.js";import{S as x,a as r}from"./_StoriesComponents-BWgpKEh4.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-BslpIjNC.js";import"./index-CRomvYkY.js";const n=C.create({buttons:{flexWrap:"wrap"},buttonWrapper:{marginRight:32,marginBottom:16},button:{minWidth:200},countValue:{width:24}}),D={title:"Interactivity/Button",component:B},c=o=>o.charAt(0).toUpperCase()+o.slice(1),e=o=>{const[S,j]=P.useState(0);return t.jsxs(s,{direction:"row",alignItems:"center",style:n.buttonWrapper,children:[t.jsx(B,{...o,style:n.button,onPress:()=>j(b=>b+1)}),t.jsx(W,{align:"right",style:n.countValue,children:S})]})},i=()=>t.jsxs(x,{title:"Button colors",children:[t.jsx(r,{title:"Primary",children:t.jsx(s,{direction:"row",style:n.buttons,children:Object.keys(a).map(o=>t.jsx(e,{mode:"primary",color:o,children:c(o)},o))})}),t.jsx(r,{title:"Secondary",children:t.jsx(s,{direction:"row",style:n.buttons,children:Object.keys(a).map(o=>t.jsx(e,{mode:"secondary",color:o,children:c(o)},o))})}),t.jsx(r,{title:"Tertiary",children:t.jsx(s,{direction:"row",style:n.buttons,children:Object.keys(a).map(o=>t.jsx(e,{mode:"tertiary",color:o,children:c(o)},o))})})]}),l=()=>t.jsxs(x,{title:"Button states",children:[t.jsx(r,{title:"Small",children:t.jsx(e,{size:"small",color:"live",children:"Small button"})}),t.jsx(r,{title:"Disabled",children:t.jsx(e,{disabled:!0,color:"live",children:"Disabled"})}),t.jsx(r,{title:"Loading",children:t.jsx(e,{loading:!0,color:"live",children:"Loading"})}),t.jsx(r,{title:"With pill",children:t.jsx(e,{pill:!0,color:"live",children:"Pill"})}),t.jsx(r,{title:"With icon",children:t.jsxs(s,{direction:"row",style:n.buttons,children:[t.jsx(e,{icon:"add-circle-filled",color:"positive",children:"Add"}),t.jsx(e,{icon:"delete-filled",iconPosition:"end",color:"negative",children:"Remove"})]})})]});i.__docgenInfo={description:"",methods:[],displayName:"Colors"};l.__docgenInfo={description:"",methods:[],displayName:"ButtonStates"};var d,u,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var m,h,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(p=(h=l.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const I=["Colors","ButtonStates"];export{l as ButtonStates,i as Colors,I as __namedExportsOrder,D as default};
//# sourceMappingURL=Button.stories-aOHDvgKj.js.map
