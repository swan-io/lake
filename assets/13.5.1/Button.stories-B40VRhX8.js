import{j as e,S as m,B as s,c as g,L as x,s as j}from"./ScrollView-BHyA0YQe.js";import{r as w}from"./iframe-D68wIgOL.js";import{a as h}from"./LakeButton-BDabxjzV.js";import{S as u}from"./Stack-BdSe-tUu.js";import{S as B,a as i}from"./_StoriesComponents-B5dTlONB.js";import"./index-kFt5shej.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-WCLW66TX.js";import"./index-vyVBHV6P.js";import"./extends-CF3RwP-h.js";import"./Separator-Rc6ZyfHq.js";const r=j.create({buttons:{flexWrap:"wrap"},buttonWrapper:{marginRight:32,marginBottom:16},button:{minWidth:200},countValue:{width:24}}),O={title:"Interactivity/Button",component:h},f=n=>n.charAt(0).toUpperCase()+n.slice(1),t=n=>{const[l,a]=w.useState(0);return e.jsxs(s,{direction:"row",alignItems:"center",style:r.buttonWrapper,children:[e.jsx(h,{...n,style:r.button,onPress:()=>a(y=>y+1)}),e.jsx(x,{align:"right",style:r.countValue,children:l})]})},o=n=>{const[l,a]=w.useState(!1);return e.jsx(h,{color:"live",...n,loading:l,onPress:()=>{a(!0),setTimeout(()=>a(!1),2e3)}})},c=()=>e.jsxs(B,{title:"Button colors",children:[e.jsx(i,{title:"Primary",children:e.jsx(s,{direction:"row",style:r.buttons,children:Object.keys(g).map(n=>e.jsx(t,{mode:"primary",color:n,children:f(n)},n))})}),e.jsx(i,{title:"Secondary",children:e.jsx(s,{direction:"row",style:r.buttons,children:Object.keys(g).map(n=>e.jsx(t,{mode:"secondary",color:n,children:f(n)},n))})}),e.jsx(i,{title:"Tertiary",children:e.jsx(s,{direction:"row",style:r.buttons,children:Object.keys(g).map(n=>e.jsx(t,{mode:"tertiary",color:n,children:f(n)},n))})})]}),d=()=>{const[n,l]=w.useState(void 0);return e.jsxs(B,{title:"Button states",children:[e.jsx(i,{title:"Small",children:e.jsx(t,{size:"small",color:"live",children:"Small button"})}),e.jsx(i,{title:"Disabled",children:e.jsx(t,{disabled:!0,color:"live",children:"Disabled"})}),e.jsxs(i,{title:"Loading",children:[e.jsxs(u,{alignItems:"center",direction:"row",space:12,children:[e.jsx(o,{size:"large",mode:"primary",children:"Refresh"}),e.jsx(o,{size:"small",mode:"primary",children:"Refresh"}),e.jsx(o,{size:"large",mode:"secondary",children:"Refresh"}),e.jsx(o,{size:"small",mode:"secondary",children:"Refresh"}),e.jsx(o,{size:"large",mode:"tertiary",children:"Refresh"}),e.jsx(o,{size:"small",mode:"tertiary",children:"Refresh"})]}),e.jsx(m,{height:12}),e.jsxs(u,{alignItems:"center",direction:"row",space:12,children:[e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"large",mode:"primary"}),e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"small",mode:"primary"}),e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"large",mode:"secondary"}),e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"small",mode:"secondary"}),e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"large",mode:"tertiary"}),e.jsx(o,{ariaLabel:"Refresh",icon:"arrow-clockwise-filled",size:"small",mode:"tertiary"})]}),e.jsx(m,{height:12}),e.jsxs(u,{alignItems:"center",direction:"row",space:12,children:[e.jsx(o,{icon:"arrow-clockwise-filled",size:"large",mode:"primary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",size:"small",mode:"primary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",size:"large",mode:"secondary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",size:"small",mode:"secondary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",size:"large",mode:"tertiary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",size:"small",mode:"tertiary",children:"Refresh"})]}),e.jsx(m,{height:12}),e.jsxs(u,{alignItems:"center",direction:"row",space:12,children:[e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"large",mode:"primary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"small",mode:"primary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"large",mode:"secondary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"small",mode:"secondary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"large",mode:"tertiary",children:"Refresh"}),e.jsx(o,{icon:"arrow-clockwise-filled",iconPosition:"end",size:"small",mode:"tertiary",children:"Refresh"})]})]}),e.jsxs(i,{title:"Disabled until",children:[e.jsx(s,{direction:"row",children:e.jsx(h,{mode:"secondary",size:"small",onPress:()=>{const y=Date.now()+1e4,p=new Date(y);l(p.toISOString())},children:"Set for 10s"})}),e.jsx(m,{height:12}),e.jsx(t,{color:"live",disabledUntil:n,children:"Disabled until"})]}),e.jsx(i,{title:"With pill",children:e.jsx(t,{pill:!0,color:"live",children:"Pill"})}),e.jsx(i,{title:"With icon",children:e.jsxs(s,{direction:"row",style:r.buttons,children:[e.jsx(t,{icon:"add-circle-filled",color:"positive",children:"Add"}),e.jsx(t,{icon:"delete-filled",iconPosition:"end",color:"negative",children:"Remove"})]})}),e.jsx(i,{title:"Vertical",children:e.jsxs(s,{direction:"row",style:r.buttons,children:[e.jsx(t,{icon:"add-circle-regular",color:"positive",direction:"column",mode:"secondary",children:"Add"}),e.jsx(t,{icon:"delete-regular",iconPosition:"end",color:"negative",direction:"column",size:"small",mode:"secondary",children:"Remove"})]})})]})};c.__docgenInfo={description:"",methods:[],displayName:"Colors"};d.__docgenInfo={description:"",methods:[],displayName:"ButtonStates"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Button colors">
      <StoryPart title="Primary">
        <Box direction="row" style={styles.buttons}>
          {Object.keys(colors).map(color => <ButtonWithCounter key={color} mode="primary" color={color as ColorVariants}>
              {capitalize(color)}
            </ButtonWithCounter>)}
        </Box>
      </StoryPart>

      <StoryPart title="Secondary">
        <Box direction="row" style={styles.buttons}>
          {Object.keys(colors).map(color => <ButtonWithCounter mode="secondary" key={color} color={color as ColorVariants}>
              {capitalize(color)}
            </ButtonWithCounter>)}
        </Box>
      </StoryPart>

      <StoryPart title="Tertiary">
        <Box direction="row" style={styles.buttons}>
          {Object.keys(colors).map(color => <ButtonWithCounter mode="tertiary" key={color} color={color as ColorVariants}>
              {capitalize(color)}
            </ButtonWithCounter>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [endDate, setEndDate] = useState<string | undefined>(undefined);
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

      <StoryPart title="Disabled until">
        <Box direction="row">
          <LakeButton mode="secondary" size="small" onPress={() => {
          const now = Date.now();
          const inTenSeconds = now + 10_000;
          const date = new Date(inTenSeconds);
          setEndDate(date.toISOString());
        }}>
            Set for 10s
          </LakeButton>
        </Box>

        <Space height={12} />

        <ButtonWithCounter color="live" disabledUntil={endDate}>
          Disabled until
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
}`,...d.parameters?.docs?.source}}};const _=["Colors","ButtonStates"];export{d as ButtonStates,c as Colors,_ as __namedExportsOrder,O as default};
//# sourceMappingURL=Button.stories-B40VRhX8.js.map
