import{S as k,g as T,s as d,j as i,V as n,a as e,I as A,c as p,b as v,L as a}from"./Space-ImkcMIim.js";import{r as C}from"./index-4g5l5LRQ.js";import{u as L}from"./useDisclosure-Cnlvt24p.js";import{P}from"./index-udVSLJHo.js";import{B as D}from"./BorderedIcon-ZFk26Hnq.js";import{B as z,c as M}from"./commonStyles-fDEJ_OM7.js";import{F as V}from"./Fill-TgfWO-23.js";import{L as I}from"./LakeButton-EkDPTC4Q.js";import{S as _,a as g}from"./_StoriesComponents-NdmN1C35.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./Pressable-MDITAEu6.js";import"./index-0MnYVmN_.js";const r=k.create({trigger:{flexDirection:"row",alignItems:"center",backgroundColor:T.accented,paddingVertical:d[12],paddingHorizontal:d[20]},arrow:{transitionProperty:"transform",transitionDuration:"200ms"},arrowOpen:{transform:"rotate(90deg)"},contentContainer:{display:"grid",gridTemplateRows:"0fr",transitionProperty:"grid-template-rows",transitionDuration:"300ms"},contentContainerDisplayed:{gridTemplateRows:"1fr"},contentInner:{overflow:"hidden"},content:{paddingVertical:d[12],paddingHorizontal:d[20]}}),t=({children:o,trigger:s,style:x,contentContainerStyle:b})=>{const m=C.useId(),[c,{toggle:S}]=L(!1);return i(n,{children:[i(P,{"aria-controls":m,"aria-expanded":c,onPress:S,style:[r.trigger,x],children:[e(A,{name:"chevron-right-filled",size:12,color:p.gray[500],style:[r.arrow,c&&r.arrowOpen]}),e(v,{width:20}),typeof s=="string"?e(a,{variant:"smallMedium",color:p.gray[900],children:s}):s]}),e(n,{"aria-labelledby":m,"aria-hidden":!c,role:"region",style:[r.contentContainer,c&&r.contentContainerDisplayed],children:e(n,{style:r.contentInner,children:e(n,{style:[r.content,b],children:o})})})]})};try{t.displayName="Accordion",t.__docgenInfo={description:"",displayName:"Accordion",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},contentContainerStyle:{defaultValue:null,description:"",name:"contentContainerStyle",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}const u=k.create({accordionContainer:{maxWidth:800}}),K={title:"Layout/Accordion",component:t},l=({name:o,icon:s})=>i(z,{direction:"row",alignItems:"center",style:M.fill,children:[e(D,{name:s,size:32,padding:4}),e(v,{width:12}),e(a,{variant:"smallMedium",color:p.gray[900],children:o}),e(V,{minWidth:12}),e(I,{size:"small",color:"sandbox",onPress:()=>{console.log("Press on payment method",o)},children:"Activate"})]}),h=()=>i(_,{title:"Accordion",children:[e(g,{title:"Default",children:i(n,{style:u.accordionContainer,children:[e(t,{trigger:"Frederic",children:e(a,{children:"Frederic is a creative and detail-oriented front-end developer who loves to experiment with new design trends and push the boundaries of user experience. He's always eager to learn and try out new technologies, and he's not afraid to take risks to achieve his goals."})}),e(t,{trigger:"Mathieu",children:e(a,{children:"Mathieu is a meticulous and analytical front-end developer who takes a data-driven approach to design and development. He's skilled at analyzing user behavior and making data-informed decisions to optimize the user experience. He's also an excellent problem-solver who loves to dig deep into complex technical challenges."})}),e(t,{trigger:"Matthias",children:e(a,{children:"Matthias is a versatile and adaptable front-end developer who excels at creating user-friendly interfaces across a wide range of platforms and devices. He's skilled at working with different programming languages and frameworks, and he's always looking for ways to optimize his code for maximum performance."})}),e(t,{trigger:"Sandrine",children:e(a,{children:"Sandrine is a collaborative and communicative front-end developer who thrives in team environments. She's passionate about creating user-centered designs that meet the needs of diverse audiences, and she's skilled at collaborating with designers and other developers to bring those designs to life. She's also a skilled communicator who can explain complex technical concepts in plain language."})})]})}),e(g,{title:"Trigger with content",children:i(n,{style:u.accordionContainer,children:[e(t,{trigger:e(l,{icon:"lake-card",name:"Card"}),children:e(a,{children:"This feature allows users to manage their debit or credit cards within the app. Users can view their card details, track their spending, set spending limits, and freeze or unfreeze their card if it's lost or stolen."})}),e(t,{trigger:e(l,{icon:"lake-transfer",name:"SEPA Direct Debit"}),children:e(a,{children:"This feature enables users to authorize regular payments to be made from their bank account to a third party. Users can set up recurring payments for bills or subscriptions, and can easily manage and cancel these payments within the app."})}),e(t,{trigger:e(l,{icon:"lake-card",name:"Check"}),children:e(a,{children:"This feature allows users to deposit checks into their account by taking a photo of the check with their phone. Users can see the status of their check deposit and receive notifications when the deposit is complete."})}),e(t,{trigger:e(l,{icon:"lake-transfer",name:"Internal Direct Debit"}),children:e(a,{children:"This feature allows users to set up automatic payments between their own accounts within the same bank. For example, users can set up a recurring transfer from their checking account to their savings account each month. Users can manage and cancel these payments within the app."})})]})})]});var f,y,w;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(w=(y=h.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const Q=["Default"];export{h as Default,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Accordion.stories-ZEBJcaQx.js.map
