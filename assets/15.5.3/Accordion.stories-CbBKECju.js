import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-DNnw0iKl.js";import{H as r,U as i,V as a,g as o,h as s,ht as c,i as l,it as u,kt as d,nt as f,o as p,pt as m,r as h,s as g,st as _,vt as v,wt as y}from"./ScrollView-B3PbhVy2.js";import{n as b,t as x}from"./useBoolean-Cj7FwONb.js";import{n as S,t as C}from"./BorderedIcon-DEcJ-Y06.js";import{n as w,t as T}from"./Fill-B1iQNMGV.js";import{n as E,t as D}from"./commonStyles-IchN61IH.js";import{r as O,t as k}from"./LakeButton-D-QjU6bD.js";import{n as A,r as j,t as M}from"./_StoriesComponents-BEfbESw0.js";var N,P,F,I,L=t((()=>{N=e(n()),c(),_(),x(),r(),g(),l(),P=i(),F=d.create({trigger:{flexDirection:`row`,alignItems:`center`,backgroundColor:f.accented,paddingVertical:m[12],paddingHorizontal:m[20]},arrow:{transitionProperty:`transform`,transitionDuration:`200ms`},arrowOpen:{transform:`rotate(90deg)`},contentContainer:{display:`grid`,gridTemplateRows:`0fr`,transitionProperty:`grid-template-rows`,transitionDuration:`300ms`},contentContainerDisplayed:{gridTemplateRows:`1fr`},contentInner:{overflow:`hidden`},content:{paddingVertical:m[12],paddingHorizontal:m[20]}}),I=({children:e,trigger:t,style:n,contentContainerStyle:r})=>{let i=(0,N.useId)(),[o,{toggle:s}]=b(!1);return(0,P.jsxs)(y,{children:[(0,P.jsxs)(v,{"aria-controls":i,role:`button`,"aria-expanded":o,onPress:s,style:[F.trigger,n],children:[(0,P.jsx)(a,{name:`chevron-right-filled`,size:12,color:u.gray[500],style:[F.arrow,o&&F.arrowOpen]}),(0,P.jsx)(h,{width:20}),typeof t==`string`?(0,P.jsx)(p,{variant:`smallMedium`,color:u.gray[900],children:t}):t]}),(0,P.jsx)(y,{"aria-labelledby":i,"aria-hidden":!o,role:`region`,style:[F.contentContainer,o&&F.contentContainerDisplayed],children:(0,P.jsx)(y,{style:F.contentInner,children:(0,P.jsx)(y,{style:[F.content,r],children:e})})})]})},I.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},trigger:{required:!0,tsType:{name:`ReactNode`},description:``},style:{required:!1,tsType:{name:`ViewProps["style"]`,raw:`ViewProps["style"]`},description:``},contentContainerStyle:{required:!1,tsType:{name:`ViewProps["style"]`,raw:`ViewProps["style"]`},description:``}}}})),R,z,B,V,H,U;t((()=>{c(),L(),S(),o(),w(),O(),g(),l(),E(),_(),j(),R=i(),z=d.create({accordionContainer:{maxWidth:800}}),B={title:`Layout/Accordion`,component:I},V=({name:e,icon:t})=>(0,R.jsxs)(s,{direction:`row`,alignItems:`center`,style:D.fill,children:[(0,R.jsx)(C,{name:t,size:32,padding:4}),(0,R.jsx)(h,{width:12}),(0,R.jsx)(p,{variant:`smallMedium`,color:u.gray[900],children:e}),(0,R.jsx)(T,{minWidth:12}),(0,R.jsx)(k,{size:`small`,color:`sandbox`,onPress:()=>{console.log(`Press on payment method`,e)},children:`Activate`})]}),H=()=>(0,R.jsxs)(M,{title:`Accordion`,children:[(0,R.jsx)(A,{title:`Default`,children:(0,R.jsxs)(y,{style:z.accordionContainer,children:[(0,R.jsx)(I,{trigger:`Frederic`,children:(0,R.jsx)(p,{children:`Frederic is a creative and detail-oriented front-end developer who loves to experiment with new design trends and push the boundaries of user experience. He's always eager to learn and try out new technologies, and he's not afraid to take risks to achieve his goals.`})}),(0,R.jsx)(I,{trigger:`Mathieu`,children:(0,R.jsx)(p,{children:`Mathieu is a meticulous and analytical front-end developer who takes a data-driven approach to design and development. He's skilled at analyzing user behavior and making data-informed decisions to optimize the user experience. He's also an excellent problem-solver who loves to dig deep into complex technical challenges.`})}),(0,R.jsx)(I,{trigger:`Matthias`,children:(0,R.jsx)(p,{children:`Matthias is a versatile and adaptable front-end developer who excels at creating user-friendly interfaces across a wide range of platforms and devices. He's skilled at working with different programming languages and frameworks, and he's always looking for ways to optimize his code for maximum performance.`})}),(0,R.jsx)(I,{trigger:`Sandrine`,children:(0,R.jsx)(p,{children:`Sandrine is a collaborative and communicative front-end developer who thrives in team environments. She's passionate about creating user-centered designs that meet the needs of diverse audiences, and she's skilled at collaborating with designers and other developers to bring those designs to life. She's also a skilled communicator who can explain complex technical concepts in plain language.`})})]})}),(0,R.jsx)(A,{title:`Trigger with content`,children:(0,R.jsxs)(y,{style:z.accordionContainer,children:[(0,R.jsx)(I,{trigger:(0,R.jsx)(V,{icon:`lake-card`,name:`Card`}),children:(0,R.jsx)(p,{children:`This feature allows users to manage their debit or credit cards within the app. Users can view their card details, track their spending, set spending limits, and freeze or unfreeze their card if it's lost or stolen.`})}),(0,R.jsx)(I,{trigger:(0,R.jsx)(V,{icon:`lake-transfer`,name:`SEPA Direct Debit`}),children:(0,R.jsx)(p,{children:`This feature enables users to authorize regular payments to be made from their bank account to a third party. Users can set up recurring payments for bills or subscriptions, and can easily manage and cancel these payments within the app.`})}),(0,R.jsx)(I,{trigger:(0,R.jsx)(V,{icon:`lake-card`,name:`Check`}),children:(0,R.jsx)(p,{children:`This feature allows users to deposit checks into their account by taking a photo of the check with their phone. Users can see the status of their check deposit and receive notifications when the deposit is complete.`})}),(0,R.jsx)(I,{trigger:(0,R.jsx)(V,{icon:`lake-transfer`,name:`Internal Direct Debit`}),children:(0,R.jsx)(p,{children:`This feature allows users to set up automatic payments between their own accounts within the same bank. For example, users can set up a recurring transfer from their checking account to their savings account each month. Users can manage and cancel these payments within the app.`})})]})})]}),H.__docgenInfo={description:``,methods:[],displayName:`Default`},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Accordion">
      <StoryPart title="Default">
        <View style={styles.accordionContainer}>
          <Accordion trigger="Frederic">
            <LakeText>
              Frederic is a creative and detail-oriented front-end developer who loves to experiment
              with new design trends and push the boundaries of user experience. He's always eager
              to learn and try out new technologies, and he's not afraid to take risks to achieve
              his goals.
            </LakeText>
          </Accordion>

          <Accordion trigger="Mathieu">
            <LakeText>
              Mathieu is a meticulous and analytical front-end developer who takes a data-driven
              approach to design and development. He's skilled at analyzing user behavior and making
              data-informed decisions to optimize the user experience. He's also an excellent
              problem-solver who loves to dig deep into complex technical challenges.
            </LakeText>
          </Accordion>

          <Accordion trigger="Matthias">
            <LakeText>
              Matthias is a versatile and adaptable front-end developer who excels at creating
              user-friendly interfaces across a wide range of platforms and devices. He's skilled at
              working with different programming languages and frameworks, and he's always looking
              for ways to optimize his code for maximum performance.
            </LakeText>
          </Accordion>

          <Accordion trigger="Sandrine">
            <LakeText>
              Sandrine is a collaborative and communicative front-end developer who thrives in team
              environments. She's passionate about creating user-centered designs that meet the
              needs of diverse audiences, and she's skilled at collaborating with designers and
              other developers to bring those designs to life. She's also a skilled communicator who
              can explain complex technical concepts in plain language.
            </LakeText>
          </Accordion>
        </View>
      </StoryPart>

      <StoryPart title="Trigger with content">
        <View style={styles.accordionContainer}>
          <Accordion trigger={<PaymentMethodContent icon="lake-card" name="Card" />}>
            <LakeText>
              This feature allows users to manage their debit or credit cards within the app. Users
              can view their card details, track their spending, set spending limits, and freeze or
              unfreeze their card if it's lost or stolen.
            </LakeText>
          </Accordion>

          <Accordion trigger={<PaymentMethodContent icon="lake-transfer" name="SEPA Direct Debit" />}>
            <LakeText>
              This feature enables users to authorize regular payments to be made from their bank
              account to a third party. Users can set up recurring payments for bills or
              subscriptions, and can easily manage and cancel these payments within the app.
            </LakeText>
          </Accordion>

          <Accordion trigger={<PaymentMethodContent icon="lake-card" name="Check" />}>
            <LakeText>
              This feature allows users to deposit checks into their account by taking a photo of
              the check with their phone. Users can see the status of their check deposit and
              receive notifications when the deposit is complete.
            </LakeText>
          </Accordion>

          <Accordion trigger={<PaymentMethodContent icon="lake-transfer" name="Internal Direct Debit" />}>
            <LakeText>
              This feature allows users to set up automatic payments between their own accounts
              within the same bank. For example, users can set up a recurring transfer from their
              checking account to their savings account each month. Users can manage and cancel
              these payments within the app.
            </LakeText>
          </Accordion>
        </View>
      </StoryPart>
    </StoryBlock>;
}`,...H.parameters?.docs?.source}}},U=[`Default`]}))();export{H as Default,U as __namedExportsOrder,B as default};
//# sourceMappingURL=Accordion.stories-CbBKECju.js.map