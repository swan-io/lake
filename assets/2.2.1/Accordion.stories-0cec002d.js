import{S as k,e as b,d as c,j as o,V as i,a as e,c as p,b as v,L as r}from"./Space-0b64da45.js";import{r as T}from"./index-ebeaab24.js";import{u as A}from"./useDisclosure-f840d913.js";import{I as S}from"./Icon-8654d215.js";import{P as L}from"./index-d9d7e38d.js";import{B as C}from"./BorderedIcon-d83f4293.js";import{B as P}from"./index-4abb1146.js";import{F as D}from"./Fill-403a6640.js";import{L as z}from"./LakeButton-699dd5a4.js";import{c as M}from"./commonStyles-d52fedae.js";import{S as I,a as g}from"./_StoriesComponents-2cf8813d.js";import"./extends-98964cd2.js";import"./Svg-0b1693f1.js";import"./Pressable-e4f14661.js";import"./useMergeRefs-50701c02.js";import"./index-de7777d2.js";const n=k.create({trigger:{flexDirection:"row",alignItems:"center",backgroundColor:b.accented,paddingVertical:c[12],paddingHorizontal:c[20]},arrow:{transitionProperty:"transform",transitionDuration:"200ms"},arrowOpen:{transform:"rotate(90deg)"},contentContainer:{display:"grid",gridTemplateRows:"0fr",transitionProperty:"grid-template-rows",transitionDuration:"300ms"},contentContainerDisplayed:{gridTemplateRows:"1fr"},contentInner:{overflow:"hidden"},content:{paddingVertical:c[12],paddingHorizontal:c[20]}}),t=({trigger:a,children:h})=>{const m=T.useId(),[s,{toggle:x}]=A(!1);return o(i,{children:[o(L,{"aria-expanded":s,"aria-controls":m,style:n.trigger,onPress:x,children:[e(S,{name:"chevron-right-filled",size:12,color:p.gray[500],style:[n.arrow,s&&n.arrowOpen]}),e(v,{width:20}),typeof a=="string"?e(r,{variant:"smallMedium",color:p.gray[900],children:a}):a]}),e(i,{"aria-labelledby":m,"aria-hidden":!s,role:"region",style:[n.contentContainer,s&&n.contentContainerDisplayed],children:e(i,{style:n.contentInner,children:e(i,{style:n.content,children:h})})})]})};try{t.displayName="Accordion",t.__docgenInfo={description:"",displayName:"Accordion",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}}}}}catch{}const u=k.create({accordionContainer:{maxWidth:800}}),K={title:"Layout/Accordion",component:t},d=({name:a,icon:h})=>o(P,{direction:"row",alignItems:"center",style:M.fill,children:[e(C,{name:h,size:32,padding:4}),e(v,{width:12}),e(r,{variant:"smallMedium",color:p.gray[900],children:a}),e(D,{minWidth:12}),e(z,{size:"small",color:"sandbox",onPress:()=>{console.log("Press on payment method",a)},children:"Activate"})]}),l=()=>o(I,{title:"Accordion",children:[e(g,{title:"Default",children:o(i,{style:u.accordionContainer,children:[e(t,{trigger:"Frederic",children:e(r,{children:"Frederic is a creative and detail-oriented front-end developer who loves to experiment with new design trends and push the boundaries of user experience. He's always eager to learn and try out new technologies, and he's not afraid to take risks to achieve his goals."})}),e(t,{trigger:"Mathieu",children:e(r,{children:"Mathieu is a meticulous and analytical front-end developer who takes a data-driven approach to design and development. He's skilled at analyzing user behavior and making data-informed decisions to optimize the user experience. He's also an excellent problem-solver who loves to dig deep into complex technical challenges."})}),e(t,{trigger:"Matthias",children:e(r,{children:"Matthias is a versatile and adaptable front-end developer who excels at creating user-friendly interfaces across a wide range of platforms and devices. He's skilled at working with different programming languages and frameworks, and he's always looking for ways to optimize his code for maximum performance."})}),e(t,{trigger:"Sandrine",children:e(r,{children:"Sandrine is a collaborative and communicative front-end developer who thrives in team environments. She's passionate about creating user-centered designs that meet the needs of diverse audiences, and she's skilled at collaborating with designers and other developers to bring those designs to life. She's also a skilled communicator who can explain complex technical concepts in plain language."})})]})}),e(g,{title:"Trigger with content",children:o(i,{style:u.accordionContainer,children:[e(t,{trigger:e(d,{icon:"lake-card",name:"Card"}),children:e(r,{children:"This feature allows users to manage their debit or credit cards within the app. Users can view their card details, track their spending, set spending limits, and freeze or unfreeze their card if it's lost or stolen."})}),e(t,{trigger:e(d,{icon:"lake-transfer",name:"SEPA Direct Debit"}),children:e(r,{children:"This feature enables users to authorize regular payments to be made from their bank account to a third party. Users can set up recurring payments for bills or subscriptions, and can easily manage and cancel these payments within the app."})}),e(t,{trigger:e(d,{icon:"lake-card",name:"Check"}),children:e(r,{children:"This feature allows users to deposit checks into their account by taking a photo of the check with their phone. Users can see the status of their check deposit and receive notifications when the deposit is complete."})}),e(t,{trigger:e(d,{icon:"lake-transfer",name:"Internal Direct Debit"}),children:e(r,{children:"This feature allows users to set up automatic payments between their own accounts within the same bank. For example, users can set up a recurring transfer from their checking account to their savings account each month. Users can manage and cancel these payments within the app."})})]})})]});var f,w,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const Q=["Default"];export{l as Default,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Accordion.stories-0cec002d.js.map
