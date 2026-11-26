import{i as e}from"./preload-helper-CCSz8wUY.js";import{Bt as t,Et as n,J as r,g as i,h as a,ht as o,i as s,m as c,mt as l,o as u,p as d,r as f,s as p,vt as m}from"./ScrollView-CqOqaV3p.js";import{r as h,t as g}from"./LakeButton-NJ2tUtGC.js";import{n as _,t as v}from"./BulletList-DW8vZsH7.js";import{n as y,t as b}from"./function-DVkPbGyq.js";import{a as x,r as S,s as C}from"./i18n-Dc18RPeX.js";import{n as w,t as T}from"./ResponsiveContainer-KmZUuAj_.js";import{r as E,t as D}from"./Tile-DwMR-xUF.js";import{n as O,r as k,t as A}from"./_StoriesComponents-NaDRwbEq.js";var j,M,N,P,F=e((()=>{i(),_(),h(),p(),w(),s(),E(),m(),n(),x(),j=r(),M=t.create({root:{alignSelf:`stretch`}}),N=e=>(0,j.jsx)(u,{variant:`smallMedium`,color:o.gray[500],children:e}),P=({onStart:e})=>(0,j.jsx)(T,{breakpoint:l.medium,style:M.root,children:({small:t})=>{let n=t?24:32;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{title:C(`fraudReport.intro.title`),description:C(`fraudReport.intro.description`),paddingVertical:n,paddingHorizontal:n}),(0,j.jsx)(f,{height:t?24:48}),(0,j.jsxs)(D,{title:C(`fraudReport.intro.rulesTitle`),paddingVertical:n,paddingHorizontal:n,children:[(0,j.jsx)(v,{variant:`smallRegular`,color:o.gray[500],items:[S(`fraudReport.intro.rule.oneVictim`,{bold:N}),S(`fraudReport.intro.rule.transactions`,{bold:N}),S(`fraudReport.intro.rule.refund`,{bold:N}),S(`fraudReport.intro.rule.deadline`,{bold:N}),S(`fraudReport.intro.rule.saved`,{bold:N}),S(`fraudReport.intro.rule.policeReport`,{bold:N})]}),(0,j.jsx)(f,{height:t?24:32}),(0,j.jsx)(u,{variant:`medium`,color:o.gray[500],children:C(`fraudReport.intro.falseInformation`)})]}),(0,j.jsx)(f,{height:t?24:48}),(0,j.jsx)(a,{direction:`row`,children:(0,j.jsx)(g,{color:`current`,onPress:e,children:C(`fraudReport.intro.start`)})})]})}}),P.__docgenInfo={description:``,methods:[],displayName:`IntroStep`,props:{onStart:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),I,L,R,z,B,V,H,U;e((()=>{c(),b(),n(),F(),k(),I=r(),{expect:L,fn:R}=__STORYBOOK_MODULE_TEST__,z={title:`Fraud report/FraudReportIntroStep`,component:P},B=t.create({mobile:{maxWidth:390}}),V=()=>(0,I.jsx)(d,{variant:`live`,children:(0,I.jsxs)(A,{title:`Intro step`,description:[`What the user reads before starting a report`],children:[(0,I.jsx)(O,{title:`Desktop`,children:(0,I.jsx)(P,{onStart:y})}),(0,I.jsx)(O,{title:`Mobile`,style:B.mobile,children:(0,I.jsx)(P,{onStart:y})})]})}),H={args:{onStart:R()},parameters:{a11y:{test:`off`}},render:e=>(0,I.jsx)(d,{variant:`live`,children:(0,I.jsx)(P,{...e})}),play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Start`})),await L(e.onStart).toHaveBeenCalledTimes(1)}},V.__docgenInfo={description:``,methods:[],displayName:`States`},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => <WithCurrentColor variant="live">
    <StoryBlock title="Intro step" description={["What the user reads before starting a report"]}>
      <StoryPart title="Desktop">
        <IntroStep onStart={noop} />
      </StoryPart>

      <StoryPart title="Mobile" style={styles.mobile}>
        <IntroStep onStart={noop} />
      </StoryPart>
    </StoryBlock>
  </WithCurrentColor>`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    onStart: fn()
  },
  // States runs the a11y checks on the same screen
  parameters: {
    a11y: {
      test: "off"
    }
  },
  render: args => <WithCurrentColor variant="live">
      <IntroStep {...args} />
    </WithCurrentColor>,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Start"
    }));
    await expect(args.onStart).toHaveBeenCalledTimes(1);
  }
}`,...H.parameters?.docs?.source}}},U=[`States`,`Start`]}))();export{H as Start,V as States,U as __namedExportsOrder,z as default};
//# sourceMappingURL=FraudReportIntroStep.stories-Dxbz-0o8.js.map