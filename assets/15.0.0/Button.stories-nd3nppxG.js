import{c as e,i as t}from"./preload-helper-C6cs2Kqh.js";import{o as n}from"./iframe-DaLHZq-5.js";import{St as r,U as i,g as a,h as o,ht as s,i as c,it as l,o as u,r as d,s as f,st as p}from"./ScrollView-DrpkPocT.js";import{r as m,t as h}from"./LakeButton-DqeKUTzN.js";import{n as g,r as _,t as v}from"./_StoriesComponents-DAmgQRmw.js";import{n as y,t as b}from"./Stack-COo7CpgU.js";var x,S,C,w,T,E,D,O,k,A;t((()=>{x=e(n()),s(),a(),m(),f(),c(),y(),p(),_(),S=i(),C=r.create({buttons:{flexWrap:`wrap`},buttonWrapper:{marginRight:32,marginBottom:16},button:{minWidth:200},countValue:{width:24}}),w={title:`Interactivity/Button`,component:h},T=e=>e.charAt(0).toUpperCase()+e.slice(1),E=e=>{let[t,n]=(0,x.useState)(0);return(0,S.jsxs)(o,{direction:`row`,alignItems:`center`,style:C.buttonWrapper,children:[(0,S.jsx)(h,{...e,style:C.button,onPress:()=>n(e=>e+1)}),(0,S.jsx)(u,{align:`right`,style:C.countValue,children:t})]})},D=e=>{let[t,n]=(0,x.useState)(!1);return(0,S.jsx)(h,{color:`live`,...e,loading:t,onPress:()=>{n(!0),setTimeout(()=>n(!1),2e3)}})},O=()=>(0,S.jsxs)(v,{title:`Button colors`,children:[(0,S.jsx)(g,{title:`Primary`,children:(0,S.jsx)(o,{direction:`row`,style:C.buttons,children:Object.keys(l).map(e=>(0,S.jsx)(E,{mode:`primary`,color:e,children:T(e)},e))})}),(0,S.jsx)(g,{title:`Secondary`,children:(0,S.jsx)(o,{direction:`row`,style:C.buttons,children:Object.keys(l).map(e=>(0,S.jsx)(E,{mode:`secondary`,color:e,children:T(e)},e))})}),(0,S.jsx)(g,{title:`Tertiary`,children:(0,S.jsx)(o,{direction:`row`,style:C.buttons,children:Object.keys(l).map(e=>(0,S.jsx)(E,{mode:`tertiary`,color:e,children:T(e)},e))})})]}),k=()=>{let[e,t]=(0,x.useState)(void 0);return(0,S.jsxs)(v,{title:`Button states`,children:[(0,S.jsx)(g,{title:`Small`,children:(0,S.jsx)(E,{size:`small`,color:`live`,children:`Small button`})}),(0,S.jsx)(g,{title:`Disabled`,children:(0,S.jsx)(E,{disabled:!0,color:`live`,children:`Disabled`})}),(0,S.jsxs)(g,{title:`Loading`,children:[(0,S.jsxs)(b,{alignItems:`center`,direction:`row`,space:12,children:[(0,S.jsx)(D,{size:`large`,mode:`primary`,children:`Refresh`}),(0,S.jsx)(D,{size:`small`,mode:`primary`,children:`Refresh`}),(0,S.jsx)(D,{size:`large`,mode:`secondary`,children:`Refresh`}),(0,S.jsx)(D,{size:`small`,mode:`secondary`,children:`Refresh`}),(0,S.jsx)(D,{size:`large`,mode:`tertiary`,children:`Refresh`}),(0,S.jsx)(D,{size:`small`,mode:`tertiary`,children:`Refresh`})]}),(0,S.jsx)(d,{height:12}),(0,S.jsxs)(b,{alignItems:`center`,direction:`row`,space:12,children:[(0,S.jsx)(D,{ariaLabel:`Refresh`,icon:`arrow-clockwise-filled`,size:`large`,mode:`primary`}),(0,S.jsx)(D,{ariaLabel:`Refresh`,icon:`arrow-clockwise-filled`,size:`small`,mode:`primary`}),(0,S.jsx)(D,{ariaLabel:`Refresh`,icon:`arrow-clockwise-filled`,size:`large`,mode:`secondary`}),(0,S.jsx)(D,{ariaLabel:`Refresh`,icon:`arrow-clockwise-filled`,size:`small`,mode:`secondary`}),(0,S.jsx)(D,{ariaLabel:`Refresh`,icon:`arrow-clockwise-filled`,size:`large`,mode:`tertiary`}),(0,S.jsx)(D,{ariaLabel:`Refresh`,icon:`arrow-clockwise-filled`,size:`small`,mode:`tertiary`})]}),(0,S.jsx)(d,{height:12}),(0,S.jsxs)(b,{alignItems:`center`,direction:`row`,space:12,children:[(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,size:`large`,mode:`primary`,children:`Refresh`}),(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,size:`small`,mode:`primary`,children:`Refresh`}),(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,size:`large`,mode:`secondary`,children:`Refresh`}),(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,size:`small`,mode:`secondary`,children:`Refresh`}),(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,size:`large`,mode:`tertiary`,children:`Refresh`}),(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,size:`small`,mode:`tertiary`,children:`Refresh`})]}),(0,S.jsx)(d,{height:12}),(0,S.jsxs)(b,{alignItems:`center`,direction:`row`,space:12,children:[(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,iconPosition:`end`,size:`large`,mode:`primary`,children:`Refresh`}),(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,iconPosition:`end`,size:`small`,mode:`primary`,children:`Refresh`}),(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,iconPosition:`end`,size:`large`,mode:`secondary`,children:`Refresh`}),(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,iconPosition:`end`,size:`small`,mode:`secondary`,children:`Refresh`}),(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,iconPosition:`end`,size:`large`,mode:`tertiary`,children:`Refresh`}),(0,S.jsx)(D,{icon:`arrow-clockwise-filled`,iconPosition:`end`,size:`small`,mode:`tertiary`,children:`Refresh`})]})]}),(0,S.jsxs)(g,{title:`Disabled until`,children:[(0,S.jsx)(o,{direction:`row`,children:(0,S.jsx)(h,{mode:`secondary`,size:`small`,onPress:()=>{let e=Date.now()+1e4;t(new Date(e).toISOString())},children:`Set for 10s`})}),(0,S.jsx)(d,{height:12}),(0,S.jsx)(E,{color:`live`,disabledUntil:e,children:`Disabled until`})]}),(0,S.jsx)(g,{title:`With pill`,children:(0,S.jsx)(E,{pill:!0,color:`live`,children:`Pill`})}),(0,S.jsx)(g,{title:`With icon`,children:(0,S.jsxs)(o,{direction:`row`,style:C.buttons,children:[(0,S.jsx)(E,{icon:`add-circle-filled`,color:`positive`,children:`Add`}),(0,S.jsx)(E,{icon:`delete-filled`,iconPosition:`end`,color:`negative`,children:`Remove`})]})}),(0,S.jsx)(g,{title:`Vertical`,children:(0,S.jsxs)(o,{direction:`row`,style:C.buttons,children:[(0,S.jsx)(E,{icon:`add-circle-regular`,color:`positive`,direction:`column`,mode:`secondary`,children:`Add`}),(0,S.jsx)(E,{icon:`delete-regular`,iconPosition:`end`,color:`negative`,direction:`column`,size:`small`,mode:`secondary`,children:`Remove`})]})})]})},O.__docgenInfo={description:``,methods:[],displayName:`Colors`},k.__docgenInfo={description:``,methods:[],displayName:`ButtonStates`},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}},A=[`Colors`,`ButtonStates`]}))();export{k as ButtonStates,O as Colors,A as __namedExportsOrder,w as default};
//# sourceMappingURL=Button.stories-nd3nppxG.js.map