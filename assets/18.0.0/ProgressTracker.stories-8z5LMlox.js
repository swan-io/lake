import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-Dfd2BKQF.js";import{$ as r,Ct as i,H as a,Pt as o,Q as s,Tt as c,U as l,Z as u,_t as d,ft as f,g as p,h as m,i as h,l as g,mt as _,o as v,r as y,s as b,u as x,zt as S}from"./ScrollView-B6KTtxSY.js";import{n as C,r as w,t as T}from"./_StoriesComponents-CoRU051E.js";import{n as E,t as D}from"./BulletList-Djc7HGa9.js";import{n as O,t as k}from"./Tag-DE6N9PZ8.js";import{n as A,t as j}from"./LakeAlert-BddjCrHU.js";var M,N,P,F,I,L,R=t((()=>{M=e(n()),c(),l(),d(),p(),s(),b(),x(),h(),N=r(),P=24,F=14,I=S.create({row:{flexDirection:`row`,alignItems:`stretch`},rail:{width:P,alignItems:`center`},circle:{width:P,height:P,borderRadius:P/2,alignItems:`center`,justifyContent:`center`},circleDone:{backgroundColor:_.positive[500]},circleActive:{backgroundColor:f.accented,borderWidth:2,borderColor:_.gray[900]},circleFuture:{backgroundColor:_.gray[100]},connector:{flexGrow:1,width:1,backgroundColor:_.gray[200]},content:{flex:1},contentSpacing:{paddingBottom:i[24]},labelRow:{minHeight:P},checklistRing:{width:F,height:F,borderRadius:F/2,borderWidth:1,borderColor:_.gray[300]}}),L=({steps:e,style:t})=>(0,N.jsx)(o,{role:`list`,style:t,children:e.map((t,n)=>{let r=n===e.length-1;return(0,N.jsxs)(o,{role:`listitem`,"aria-current":t.status===`active`?`step`:void 0,style:I.row,children:[(0,N.jsxs)(o,{style:I.rail,children:[a(t.status).with(`done`,()=>(0,N.jsx)(o,{style:[I.circle,I.circleDone],children:(0,N.jsx)(u,{name:`checkmark-filled`,size:14,color:_.positive.contrast})})).with(`active`,()=>(0,N.jsx)(o,{style:[I.circle,I.circleActive],children:(0,N.jsx)(v,{variant:`smallSemibold`,color:_.gray[900],children:n+1})})).with(`future`,()=>(0,N.jsx)(o,{style:[I.circle,I.circleFuture],children:(0,N.jsx)(v,{variant:`smallSemibold`,color:_.gray[500],children:n+1})})).exhaustive(),!r&&(0,N.jsx)(o,{style:I.connector})]}),(0,N.jsx)(y,{width:12}),(0,N.jsxs)(o,{style:[I.content,!r&&I.contentSpacing],children:[(0,N.jsxs)(m,{direction:`row`,alignItems:`center`,style:I.labelRow,children:[(0,N.jsx)(v,{variant:`smallMedium`,color:t.status===`future`?_.gray[500]:_.gray[900],children:t.label}),t.badge!=null&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(y,{width:8}),t.badge]})]}),t.checklist!=null&&t.checklist.length>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(y,{height:12}),t.checklist.map((e,t)=>(0,N.jsxs)(M.Fragment,{children:[t>0&&(0,N.jsx)(y,{height:8}),(0,N.jsxs)(m,{direction:`row`,alignItems:`center`,children:[e.isDone?(0,N.jsx)(u,{name:`checkmark-filled`,size:F,color:_.positive[500]}):(0,N.jsx)(o,{style:I.checklistRing}),(0,N.jsx)(y,{width:8}),(0,N.jsx)(v,{variant:`smallRegular`,color:_.gray[700],children:e.label}),e.help!=null&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(y,{width:4}),(0,N.jsx)(g,{content:e.help,placement:`center`,togglableOnFocus:!0,describedBy:`copy`,width:300,children:(0,N.jsx)(u,{name:`info-regular`,size:F,color:_.gray[900]})})]})]})]},t))]}),t.message!=null&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(y,{height:12}),t.message]})]})]},t.id)})}),L.__docgenInfo={description:``,methods:[],displayName:`ProgressTracker`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  label: string;
  // explicit per-step status (rather than a single active id) keeps the
  // component purely presentational — it derives nothing from step order
  status: ProgressTrackerStepStatus;
  badge?: ReactNode;
  checklist?: ProgressTrackerChecklistItem[];
  message?: ReactNode;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`status`,value:{name:`union`,raw:`"done" | "active" | "future"`,elements:[{name:`literal`,value:`"done"`},{name:`literal`,value:`"active"`},{name:`literal`,value:`"future"`}],required:!0}},{key:`badge`,value:{name:`ReactNode`,required:!1}},{key:`checklist`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string;
  isDone: boolean;
  // string or rich content (e.g. a BulletList — pass contrast colors, the panel is dark)
  help?: ReactNode;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`isDone`,value:{name:`boolean`,required:!0}},{key:`help`,value:{name:`ReactNode`,required:!1}}]}}],raw:`ProgressTrackerChecklistItem[]`,required:!1}},{key:`message`,value:{name:`ReactNode`,required:!1}}]}}],raw:`ProgressTrackerStep[]`},description:``},style:{required:!1,tsType:{name:`StyleProp`,elements:[{name:`ViewStyle`}],raw:`StyleProp<ViewStyle>`},description:``}}}})),z,B,V,H,U,W,G,K;t((()=>{E(),A(),b(),R(),h(),O(),d(),w(),z=r(),B={title:`Layout/ProgressTracker`,component:L},V=[`Case creation`,`Shareholder KYC & Funding`,`Case review`,`Notary certification`,`Company registration and KBIS`,`Final review and funds release`],H=(e,t)=>V.map((n,r)=>({id:String(r+1),label:n,status:r<e?`done`:r===e?`active`:`future`,...r===e?t:void 0})),U=(0,z.jsx)(k,{color:`warning`,children:`In progress`}),W=(0,z.jsx)(k,{color:`shakespear`,children:`In progress`}),G=()=>(0,z.jsxs)(T,{title:`ProgressTracker`,description:[`A vertical status-driven progress tracker.`],children:[(0,z.jsx)(C,{title:`First step active with checklist`,children:(0,z.jsx)(L,{steps:H(0,{badge:U,checklist:[{label:`Company onboarding`,isDone:!0},{label:`Company documents collection 2/3`,isDone:!1},{label:`Shareholders onboarding 0/2`,isDone:!1}]})})}),(0,z.jsx)(C,{title:`Active step with checklist and help tooltip`,children:(0,z.jsx)(L,{steps:H(1,{badge:U,checklist:[{label:`ID verification 2/2`,isDone:!0},{label:`Document collection 1/1`,isDone:!0},{label:`Capital transfer 1/2`,isDone:!1,help:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(v,{color:_.gray.contrast,variant:`smallMedium`,children:`To be accepted, each transfer must:`}),(0,z.jsx)(y,{height:8}),(0,z.jsx)(D,{color:_.gray.contrast,variant:`smallRegular`,items:[`Come from a bank account in the shareholder's name`,`Come from an authorized bank`,`Match the exact capital deposit amount`]})]})}]})})}),(0,z.jsx)(C,{title:`Active step with info message`,children:(0,z.jsx)(L,{steps:H(2,{badge:W,message:(0,z.jsx)(j,{anchored:!0,variant:`info`,title:`Swan is reviewing the case. No action needed.`})})})}),(0,z.jsx)(C,{title:`Active step with warning message`,children:(0,z.jsx)(L,{steps:H(4,{badge:U,message:(0,z.jsx)(j,{anchored:!0,variant:`warning`,title:`Your client needs to register the company at the Greffe, then upload the KBIS extract.`})})})}),(0,z.jsx)(C,{title:`Active step with action needed and error message`,children:(0,z.jsx)(L,{steps:H(2,{badge:(0,z.jsx)(k,{color:`negative`,children:`Action needed`}),message:(0,z.jsx)(j,{anchored:!0,variant:`error`,title:`2 documents refused. Re-upload required.`,children:(0,z.jsx)(D,{color:_.negative[700],items:[`Company lease agreement: Document refused for compliance reasons.`,`Power of attorney: Full document required.`]})})})})}),(0,z.jsx)(C,{title:`Last step active with message`,children:(0,z.jsx)(L,{steps:H(V.length-1,{badge:W,message:(0,z.jsx)(j,{anchored:!0,variant:`info`,title:`Verification completed. The notary is transferring funds to the company account.`,children:`This usually takes about 3 business days. No action needed.`})})})})]}),G.__docgenInfo={description:``,methods:[],displayName:`Default`},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="ProgressTracker" description={["A vertical status-driven progress tracker."]}>
      <StoryPart title="First step active with checklist">
        <ProgressTracker steps={makeSteps(0, {
        badge: inProgressTag,
        checklist: [{
          label: "Company onboarding",
          isDone: true
        }, {
          label: "Company documents collection 2/3",
          isDone: false
        }, {
          label: "Shareholders onboarding 0/2",
          isDone: false
        }]
      })} />
      </StoryPart>

      <StoryPart title="Active step with checklist and help tooltip">
        <ProgressTracker steps={makeSteps(1, {
        badge: inProgressTag,
        checklist: [{
          label: "ID verification 2/2",
          isDone: true
        }, {
          label: "Document collection 1/1",
          isDone: true
        }, {
          label: "Capital transfer 1/2",
          isDone: false,
          help: <>
                    <LakeText color={colors.gray.contrast} variant="smallMedium">
                      To be accepted, each transfer must:
                    </LakeText>

                    <Space height={8} />

                    <BulletList color={colors.gray.contrast} variant="smallRegular" items={["Come from a bank account in the shareholder's name", "Come from an authorized bank", "Match the exact capital deposit amount"]} />
                  </>
        }]
      })} />
      </StoryPart>

      <StoryPart title="Active step with info message">
        <ProgressTracker steps={makeSteps(2, {
        badge: processingTag,
        message: <LakeAlert anchored={true} variant="info" title="Swan is reviewing the case. No action needed." />
      })} />
      </StoryPart>

      <StoryPart title="Active step with warning message">
        <ProgressTracker steps={makeSteps(4, {
        badge: inProgressTag,
        message: <LakeAlert anchored={true} variant="warning" title="Your client needs to register the company at the Greffe, then upload the KBIS extract." />
      })} />
      </StoryPart>

      <StoryPart title="Active step with action needed and error message">
        <ProgressTracker steps={makeSteps(2, {
        badge: <Tag color="negative">Action needed</Tag>,
        message: <LakeAlert anchored={true} variant="error" title="2 documents refused. Re-upload required.">
                <BulletList color={colors.negative[700]} items={["Company lease agreement: Document refused for compliance reasons.", "Power of attorney: Full document required."]} />
              </LakeAlert>
      })} />
      </StoryPart>

      <StoryPart title="Last step active with message">
        <ProgressTracker steps={makeSteps(labels.length - 1, {
        badge: processingTag,
        message: <LakeAlert anchored={true} variant="info" title="Verification completed. The notary is transferring funds to the company account.">
                This usually takes about 3 business days. No action needed.
              </LakeAlert>
      })} />
      </StoryPart>
    </StoryBlock>;
}`,...G.parameters?.docs?.source}}},K=[`Default`]}))();export{G as Default,K as __namedExportsOrder,B as default};
//# sourceMappingURL=ProgressTracker.stories-8z5LMlox.js.map