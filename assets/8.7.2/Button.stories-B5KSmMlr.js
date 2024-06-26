import{s as R,j as e,B as s,c as u,S as h,L as S}from"./ScrollView-CDd3NuTl.js";import{r as L}from"./index-uCp2LrAq.js";import{L as g}from"./LakeButton-DuBJGGIy.js";import{S as d}from"./Stack-DngA15zZ.js";import{S as k,a as r}from"./_StoriesComponents-CxVx-ODm.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-pmCYH0N6.js";import"./index-aaXJrpQQ.js";import"./extends-CF3RwP-h.js";const t=R.create({buttons:{flexWrap:"wrap"},buttonWrapper:{marginRight:32,marginBottom:16},button:{minWidth:200},countValue:{width:24}}),T={title:"Interactivity/Button",component:g},y=n=>n.charAt(0).toUpperCase()+n.slice(1),i=n=>{const[m,c]=L.useState(0);return e.jsxs(s,{direction:"row",alignItems:"center",style:t.buttonWrapper,children:[e.jsx(g,{...n,style:t.button,onPress:()=>c(z=>z+1)}),e.jsx(S,{align:"right",style:t.countValue,children:m})]})},o=n=>{const[m,c]=L.useState(!1);return e.jsx(g,{color:"live",...n,loading:m,onPress:()=>{c(!0),setTimeout(()=>c(!1),2e3)}})},l=()=>e.jsxs(k,{title:"Button colors",children:[e.jsx(r,{title:"Primary",children:e.jsx(s,{direction:"row",style:t.buttons,children:Object.keys(u).map(n=>e.jsx(i,{mode:"primary",color:n,children:y(n)},n))})}),e.jsx(r,{title:"Secondary",children:e.jsx(s,{direction:"row",style:t.buttons,children:Object.keys(u).map(n=>e.jsx(i,{mode:"secondary",color:n,children:y(n)},n))})}),e.jsx(r,{title:"Tertiary",children:e.jsx(s,{direction:"row",style:t.buttons,children:Object.keys(u).map(n=>e.jsx(i,{mode:"tertiary",color:n,children:y(n)},n))})})]}),a=()=>e.jsxs(k,{title:"Button states",children:[e.jsx(r,{title:"Small",children:e.jsx(i,{size:"small",color:"live",children:"Small button"})}),e.jsx(r,{title:"Disabled",children:e.jsx(i,{disabled:!0,color:"live",children:"Disabled"})}),e.jsxs(r,{title:"Loading",children:[e.jsxs(d,{alignItems:"center",direction:"row",space:12,children:[e.jsx(o,{size:"large",mode:"primary",children:"Refresh"}),e.jsx(o,{size:"small",mode:"primary",children:"Refresh"}),e.jsx(o,{size:"large",mode:"secondary",children:"Refresh"}),e.jsx(o,{size:"small",mode:"secondary",children:"Refresh"}),e.jsx(o,{size:"large",mode:"tertiary",children:"Refresh"}),e.jsx(o,{size:"small",mode:"tertiary",children:"Refresh"})]}),e.jsx(h,{height:12}),e.jsxs(d,{alignItems:"center",direction:"row",space:12,children:[e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"large",mode:"primary"}),e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"small",mode:"primary"}),e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"large",mode:"secondary"}),e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"small",mode:"secondary"}),e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"large",mode:"tertiary"}),e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"small",mode:"tertiary"})]}),e.jsx(h,{height:12}),e.jsxs(d,{alignItems:"center",direction:"row",space:12,children:[e.jsx(o,{icon:"arrow-clockwise-filled",size:"large",mode:"primary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",size:"small",mode:"primary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",size:"large",mode:"secondary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",size:"small",mode:"secondary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",size:"large",mode:"tertiary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",size:"small",mode:"tertiary",children:"Refresh"})]}),e.jsx(h,{height:12}),e.jsxs(d,{alignItems:"center",direction:"row",space:12,children:[e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"large",mode:"primary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"small",mode:"primary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"large",mode:"secondary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"small",mode:"secondary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"large",mode:"tertiary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"small",mode:"tertiary",children:"Refresh"})]})]}),e.jsx(r,{title:"With pill",children:e.jsx(i,{pill:!0,color:"live",children:"Pill"})}),e.jsx(r,{title:"With icon",children:e.jsxs(s,{direction:"row",style:t.buttons,children:[e.jsx(i,{icon:"add-circle-filled",color:"positive",children:"Add"}),e.jsx(i,{icon:"delete-filled",iconPosition:"end",color:"negative",children:"Remove"})]})}),e.jsx(r,{title:"Vertical",children:e.jsxs(s,{direction:"row",style:t.buttons,children:[e.jsx(i,{icon:"add-circle-regular",color:"positive",direction:"column",mode:"secondary",children:"Add"}),e.jsx(i,{icon:"delete-regular",iconPosition:"end",color:"negative",direction:"column",size:"small",mode:"secondary",children:"Remove"})]})})]});l.__docgenInfo={description:"",methods:[],displayName:"Colors"};a.__docgenInfo={description:"",methods:[],displayName:"ButtonStates"};var f,w,B;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var p,x,j;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
        <Stack alignItems="center" direction="row" space={12}>
          <LoadingButton size="large" mode="primary">
            Refresh
          </LoadingButton>

          <LoadingButton size="small" mode="primary">
            Refresh
          </LoadingButton>

          <LoadingButton size="large" mode="secondary">
            Refresh
          </LoadingButton>

          <LoadingButton size="small" mode="secondary">
            Refresh
          </LoadingButton>

          <LoadingButton size="large" mode="tertiary">
            Refresh
          </LoadingButton>

          <LoadingButton size="small" mode="tertiary">
            Refresh
          </LoadingButton>
        </Stack>

        <Space height={12} />

        <Stack alignItems="center" direction="row" space={12}>
          <LoadingButton ariaLabel="Refresh" icon="arrow-clockwise-filled" size="large" mode="primary" />

          <LoadingButton ariaLabel="Refresh" icon="arrow-clockwise-filled" size="small" mode="primary" />

          <LoadingButton ariaLabel="Refresh" icon="arrow-clockwise-filled" size="large" mode="secondary" />

          <LoadingButton ariaLabel="Refresh" icon="arrow-clockwise-filled" size="small" mode="secondary" />

          <LoadingButton ariaLabel="Refresh" icon="arrow-clockwise-filled" size="large" mode="tertiary" />

          <LoadingButton ariaLabel="Refresh" icon="arrow-clockwise-filled" size="small" mode="tertiary" />
        </Stack>

        <Space height={12} />

        <Stack alignItems="center" direction="row" space={12}>
          <LoadingButton icon="arrow-clockwise-filled" size="large" mode="primary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" size="small" mode="primary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" size="large" mode="secondary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" size="small" mode="secondary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" size="large" mode="tertiary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" size="small" mode="tertiary">
            Refresh
          </LoadingButton>
        </Stack>

        <Space height={12} />

        <Stack alignItems="center" direction="row" space={12}>
          <LoadingButton icon="arrow-clockwise-filled" iconPosition="end" size="large" mode="primary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" iconPosition="end" size="small" mode="primary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" iconPosition="end" size="large" mode="secondary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" iconPosition="end" size="small" mode="secondary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" iconPosition="end" size="large" mode="tertiary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" iconPosition="end" size="small" mode="tertiary">
            Refresh
          </LoadingButton>
        </Stack>
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

      <StoryPart title="Vertical">
        <Box direction="row" style={styles.buttons}>
          <ButtonWithCounter icon="add-circle-regular" color="positive" direction="column" mode="secondary">
            Add
          </ButtonWithCounter>

          <ButtonWithCounter icon="delete-regular" iconPosition="end" color="negative" direction="column" size="small" mode="secondary">
            Remove
          </ButtonWithCounter>
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const E=["Colors","ButtonStates"];export{a as ButtonStates,l as Colors,E as __namedExportsOrder,T as default};
//# sourceMappingURL=Button.stories-B5KSmMlr.js.map
