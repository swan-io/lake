import{s as w,d as j,b as d,j as e,V as a,I as T,c as h,S as y,L as n,B as A}from"./Space-B-tuzGSB.js";import{r as S}from"./index-CBqU2yxZ.js";import{u as P}from"./useDisclosure-CS9t68_Y.js";import{P as C}from"./index-BWWcrcy6.js";import{B as L}from"./BorderedIcon-Zbk24ddt.js";import{F as D}from"./Fill-1BmPiHjK.js";import{L as z}from"./LakeButton-B_Hql0KV.js";import{c as M}from"./commonStyles-t4XfA7cz.js";import{S as I,a as m}from"./_StoriesComponents-qw3Cph9e.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-D4CfqCYA.js";import"./index-CP-wDJ33.js";const r=w.create({trigger:{flexDirection:"row",alignItems:"center",backgroundColor:j.accented,paddingVertical:d[12],paddingHorizontal:d[20]},arrow:{transitionProperty:"transform",transitionDuration:"200ms"},arrowOpen:{transform:"rotate(90deg)"},contentContainer:{display:"grid",gridTemplateRows:"0fr",transitionProperty:"grid-template-rows",transitionDuration:"300ms"},contentContainerDisplayed:{gridTemplateRows:"1fr"},contentInner:{overflow:"hidden"},content:{paddingVertical:d[12],paddingHorizontal:d[20]}}),t=({children:s,trigger:i,style:k,contentContainerStyle:v})=>{const p=S.useId(),[c,{toggle:b}]=P(!1);return e.jsxs(a,{children:[e.jsxs(C,{"aria-controls":p,"aria-expanded":c,onPress:b,style:[r.trigger,k],children:[e.jsx(T,{name:"chevron-right-filled",size:12,color:h.gray[500],style:[r.arrow,c&&r.arrowOpen]}),e.jsx(y,{width:20}),typeof i=="string"?e.jsx(n,{variant:"smallMedium",color:h.gray[900],children:i}):i]}),e.jsx(a,{"aria-labelledby":p,"aria-hidden":!c,role:"region",style:[r.contentContainer,c&&r.contentContainerDisplayed],children:e.jsx(a,{style:r.contentInner,children:e.jsx(a,{style:[r.content,v],children:s})})})]})};t.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},trigger:{required:!0,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:'ViewProps["style"]',raw:'ViewProps["style"]'},description:""},contentContainerStyle:{required:!1,tsType:{name:'ViewProps["style"]',raw:'ViewProps["style"]'},description:""}}};const g=w.create({accordionContainer:{maxWidth:800}}),J={title:"Layout/Accordion",component:t},l=({name:s,icon:i})=>e.jsxs(A,{direction:"row",alignItems:"center",style:M.fill,children:[e.jsx(L,{name:i,size:32,padding:4}),e.jsx(y,{width:12}),e.jsx(n,{variant:"smallMedium",color:h.gray[900],children:s}),e.jsx(D,{minWidth:12}),e.jsx(z,{size:"small",color:"sandbox",onPress:()=>{console.log("Press on payment method",s)},children:"Activate"})]}),o=()=>e.jsxs(I,{title:"Accordion",children:[e.jsx(m,{title:"Default",children:e.jsxs(a,{style:g.accordionContainer,children:[e.jsx(t,{trigger:"Frederic",children:e.jsx(n,{children:"Frederic is a creative and detail-oriented front-end developer who loves to experiment with new design trends and push the boundaries of user experience. He's always eager to learn and try out new technologies, and he's not afraid to take risks to achieve his goals."})}),e.jsx(t,{trigger:"Mathieu",children:e.jsx(n,{children:"Mathieu is a meticulous and analytical front-end developer who takes a data-driven approach to design and development. He's skilled at analyzing user behavior and making data-informed decisions to optimize the user experience. He's also an excellent problem-solver who loves to dig deep into complex technical challenges."})}),e.jsx(t,{trigger:"Matthias",children:e.jsx(n,{children:"Matthias is a versatile and adaptable front-end developer who excels at creating user-friendly interfaces across a wide range of platforms and devices. He's skilled at working with different programming languages and frameworks, and he's always looking for ways to optimize his code for maximum performance."})}),e.jsx(t,{trigger:"Sandrine",children:e.jsx(n,{children:"Sandrine is a collaborative and communicative front-end developer who thrives in team environments. She's passionate about creating user-centered designs that meet the needs of diverse audiences, and she's skilled at collaborating with designers and other developers to bring those designs to life. She's also a skilled communicator who can explain complex technical concepts in plain language."})})]})}),e.jsx(m,{title:"Trigger with content",children:e.jsxs(a,{style:g.accordionContainer,children:[e.jsx(t,{trigger:e.jsx(l,{icon:"lake-card",name:"Card"}),children:e.jsx(n,{children:"This feature allows users to manage their debit or credit cards within the app. Users can view their card details, track their spending, set spending limits, and freeze or unfreeze their card if it's lost or stolen."})}),e.jsx(t,{trigger:e.jsx(l,{icon:"lake-transfer",name:"SEPA Direct Debit"}),children:e.jsx(n,{children:"This feature enables users to authorize regular payments to be made from their bank account to a third party. Users can set up recurring payments for bills or subscriptions, and can easily manage and cancel these payments within the app."})}),e.jsx(t,{trigger:e.jsx(l,{icon:"lake-card",name:"Check"}),children:e.jsx(n,{children:"This feature allows users to deposit checks into their account by taking a photo of the check with their phone. Users can see the status of their check deposit and receive notifications when the deposit is complete."})}),e.jsx(t,{trigger:e.jsx(l,{icon:"lake-transfer",name:"Internal Direct Debit"}),children:e.jsx(n,{children:"This feature allows users to set up automatic payments between their own accounts within the same bank. For example, users can set up a recurring transfer from their checking account to their savings account each month. Users can manage and cancel these payments within the app."})})]})})]});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var u,f,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const K=["Default"];export{o as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Accordion.stories-xHsr57fh.js.map
