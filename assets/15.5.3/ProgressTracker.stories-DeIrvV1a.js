import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-DNnw0iKl.js";import{H as r,M as i,N as a,U as o,V as s,g as c,h as l,ht as u,i as d,it as f,kt as p,l as m,nt as h,o as g,pt as _,r as v,s as y,st as b,u as x,wt as S}from"./ScrollView-B3PbhVy2.js";import{n as C,r as w,t as T}from"./_StoriesComponents-BEfbESw0.js";import{n as E,t as D}from"./Tag-Ci6ujdDf.js";import{n as O,t as k}from"./LakeAlert-c3pS927-.js";import{n as A,t as j}from"./BulletList-BVRF2_iS.js";var M,N,P,F,I,L,R=t((()=>{M=e(n()),u(),a(),b(),c(),r(),y(),x(),d(),N=o(),P=24,F=14,I=p.create({row:{flexDirection:`row`,alignItems:`stretch`},rail:{width:P,alignItems:`center`},circle:{width:P,height:P,borderRadius:P/2,alignItems:`center`,justifyContent:`center`},circleDone:{backgroundColor:f.positive[500]},circleActive:{backgroundColor:h.accented,borderWidth:2,borderColor:f.gray[900]},circleFuture:{backgroundColor:f.gray[100]},connector:{flexGrow:1,width:1,backgroundColor:f.gray[200]},content:{flex:1},contentSpacing:{paddingBottom:_[24]},labelRow:{minHeight:P},checklistRing:{width:F,height:F,borderRadius:F/2,borderWidth:1,borderColor:f.gray[300]}}),L=({steps:e,style:t})=>(0,N.jsx)(S,{role:`list`,style:t,children:e.map((t,n)=>{let r=n===e.length-1;return(0,N.jsxs)(S,{role:`listitem`,"aria-current":t.status===`active`?`step`:void 0,style:I.row,children:[(0,N.jsxs)(S,{style:I.rail,children:[i(t.status).with(`done`,()=>(0,N.jsx)(S,{style:[I.circle,I.circleDone],children:(0,N.jsx)(s,{name:`checkmark-filled`,size:14,color:f.positive.contrast})})).with(`active`,()=>(0,N.jsx)(S,{style:[I.circle,I.circleActive],children:(0,N.jsx)(g,{variant:`smallSemibold`,color:f.gray[900],children:n+1})})).with(`future`,()=>(0,N.jsx)(S,{style:[I.circle,I.circleFuture],children:(0,N.jsx)(g,{variant:`smallSemibold`,color:f.gray[500],children:n+1})})).exhaustive(),!r&&(0,N.jsx)(S,{style:I.connector})]}),(0,N.jsx)(v,{width:12}),(0,N.jsxs)(S,{style:[I.content,!r&&I.contentSpacing],children:[(0,N.jsxs)(l,{direction:`row`,alignItems:`center`,style:I.labelRow,children:[(0,N.jsx)(g,{variant:`smallMedium`,color:t.status===`future`?f.gray[500]:f.gray[900],children:t.label}),t.badge!=null&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{width:8}),t.badge]})]}),t.checklist!=null&&t.checklist.length>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{height:12}),t.checklist.map((e,t)=>(0,N.jsxs)(M.Fragment,{children:[t>0&&(0,N.jsx)(v,{height:8}),(0,N.jsxs)(l,{direction:`row`,alignItems:`center`,children:[e.isDone?(0,N.jsx)(s,{name:`checkmark-filled`,size:F,color:f.positive[500]}):(0,N.jsx)(S,{style:I.checklistRing}),(0,N.jsx)(v,{width:8}),(0,N.jsx)(g,{variant:`smallRegular`,color:f.gray[700],children:e.label}),e.help!=null&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{width:4}),(0,N.jsx)(m,{content:e.help,placement:`center`,togglableOnFocus:!0,describedBy:`copy`,width:300,children:(0,N.jsx)(s,{name:`info-regular`,size:F,color:f.gray[900]})})]})]})]},t))]}),t.message!=null&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{height:12}),t.message]})]})]},t.id)})}),L.__docgenInfo={description:``,methods:[],displayName:`ProgressTracker`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`isDone`,value:{name:`boolean`,required:!0}},{key:`help`,value:{name:`ReactNode`,required:!1}}]}}],raw:`ProgressTrackerChecklistItem[]`,required:!1}},{key:`message`,value:{name:`ReactNode`,required:!1}}]}}],raw:`ProgressTrackerStep[]`},description:``},style:{required:!1,tsType:{name:`StyleProp`,elements:[{name:`ViewStyle`}],raw:`StyleProp<ViewStyle>`},description:``}}}})),z,B,V,H,U,W,G,K;t((()=>{A(),O(),y(),R(),d(),E(),b(),w(),z=o(),B={title:`Layout/ProgressTracker`,component:L},V=[`Case creation`,`Shareholder KYC & Funding`,`Case review`,`Notary certification`,`Company registration and KBIS`,`Final review and funds release`],H=(e,t)=>V.map((n,r)=>({id:String(r+1),label:n,status:r<e?`done`:r===e?`active`:`future`,...r===e?t:void 0})),U=(0,z.jsx)(D,{color:`warning`,children:`In progress`}),W=(0,z.jsx)(D,{color:`shakespear`,children:`In progress`}),G=()=>(0,z.jsxs)(T,{title:`ProgressTracker`,description:[`A vertical status-driven progress tracker.`],children:[(0,z.jsx)(C,{title:`First step active with checklist`,children:(0,z.jsx)(L,{steps:H(0,{badge:U,checklist:[{label:`Company onboarding`,isDone:!0},{label:`Company documents collection 2/3`,isDone:!1},{label:`Shareholders onboarding 0/2`,isDone:!1}]})})}),(0,z.jsx)(C,{title:`Active step with checklist and help tooltip`,children:(0,z.jsx)(L,{steps:H(1,{badge:U,checklist:[{label:`ID verification 2/2`,isDone:!0},{label:`Document collection 1/1`,isDone:!0},{label:`Capital transfer 1/2`,isDone:!1,help:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(g,{color:f.gray.contrast,variant:`smallMedium`,children:`To be accepted, each transfer must:`}),(0,z.jsx)(v,{height:8}),(0,z.jsx)(j,{color:f.gray.contrast,variant:`smallRegular`,items:[`Come from a bank account in the shareholder's name`,`Come from an authorized bank`,`Match the exact capital deposit amount`]})]})}]})})}),(0,z.jsx)(C,{title:`Active step with info message`,children:(0,z.jsx)(L,{steps:H(2,{badge:W,message:(0,z.jsx)(k,{anchored:!0,variant:`info`,title:`Swan is reviewing the case. No action needed.`})})})}),(0,z.jsx)(C,{title:`Active step with warning message`,children:(0,z.jsx)(L,{steps:H(4,{badge:U,message:(0,z.jsx)(k,{anchored:!0,variant:`warning`,title:`Your client needs to register the company at the Greffe, then upload the KBIS extract.`})})})}),(0,z.jsx)(C,{title:`Active step with action needed and error message`,children:(0,z.jsx)(L,{steps:H(2,{badge:(0,z.jsx)(D,{color:`negative`,children:`Action needed`}),message:(0,z.jsx)(k,{anchored:!0,variant:`error`,title:`2 documents refused. Re-upload required.`,children:(0,z.jsx)(j,{color:f.negative[700],items:[`Company lease agreement: Document refused for compliance reasons.`,`Power of attorney: Full document required.`]})})})})}),(0,z.jsx)(C,{title:`Last step active with message`,children:(0,z.jsx)(L,{steps:H(V.length-1,{badge:W,message:(0,z.jsx)(k,{anchored:!0,variant:`info`,title:`Verification completed. The notary is transferring funds to the company account.`,children:`This usually takes about 3 business days. No action needed.`})})})})]}),G.__docgenInfo={description:``,methods:[],displayName:`Default`},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=ProgressTracker.stories-DeIrvV1a.js.map