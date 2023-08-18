import{S as b,g as A,f as d,a as s,V as i,j as e,I as L,c as m,b as T,L as r}from"./Space-f85095f8.js";import{r as P}from"./index-b9a8c83f.js";import{u as C}from"./useDisclosure-2bfd5a49.js";import{P as z}from"./index-75f16835.js";import{B as D}from"./BorderedIcon-9ab24950.js";import{B as M}from"./Box-f4fbfbba.js";import{F as B}from"./Fill-0c0bad9d.js";import{a as I}from"./LakeButton-e8594097.js";import{c as _}from"./commonStyles-d52fedae.js";import{S as H,a as g}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-7e9fd84c.js";import"./useMergeRefs-56399732.js";import"./index-4daf2301.js";const o=b.create({trigger:{flexDirection:"row",alignItems:"center",backgroundColor:A.accented,paddingVertical:d[12],paddingHorizontal:d[20]},arrow:{transitionProperty:"transform",transitionDuration:"200ms"},arrowOpen:{transform:"rotate(90deg)"},contentContainer:{display:"grid",gridTemplateRows:"0fr",transitionProperty:"grid-template-rows",transitionDuration:"300ms"},contentContainerDisplayed:{gridTemplateRows:"1fr"},contentInner:{overflow:"hidden"},content:{paddingVertical:d[12],paddingHorizontal:d[20]}}),t=({trigger:a,children:h})=>{const p=P.useId(),[c,{toggle:S}]=C(!1);return s(i,{children:[s(z,{"aria-expanded":c,"aria-controls":p,style:o.trigger,onPress:S,children:[e(L,{name:"chevron-right-filled",size:12,color:m.gray[500],style:[o.arrow,c&&o.arrowOpen]}),e(T,{width:20}),typeof a=="string"?e(r,{variant:"smallMedium",color:m.gray[900],children:a}):a]}),e(i,{"aria-labelledby":p,"aria-hidden":!c,role:"region",style:[o.contentContainer,c&&o.contentContainerDisplayed],children:e(i,{style:o.contentInner,children:e(i,{style:o.content,children:h})})})]})};try{t.displayName="Accordion",t.__docgenInfo={description:"",displayName:"Accordion",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}}}}}catch{}const u=b.create({accordionContainer:{maxWidth:800}}),X={title:"Layout/Accordion",component:t},n=({name:a,icon:h})=>s(M,{direction:"row",alignItems:"center",style:_.fill,children:[e(D,{name:h,size:32,padding:4}),e(T,{width:12}),e(r,{variant:"smallMedium",color:m.gray[900],children:a}),e(B,{minWidth:12}),e(I,{size:"small",color:"sandbox",onPress:()=>{console.log("Press on payment method",a)},children:"Activate"})]}),l=({trigger:a})=>s(H,{title:"Accordion",children:[e(g,{title:"Default",children:s(i,{style:u.accordionContainer,children:[e(t,{trigger:"Frederic",children:e(r,{children:"Frederic is a creative and detail-oriented front-end developer who loves to experiment with new design trends and push the boundaries of user experience. He's always eager to learn and try out new technologies, and he's not afraid to take risks to achieve his goals."})}),e(t,{trigger:"Mathieu",children:e(r,{children:"Mathieu is a meticulous and analytical front-end developer who takes a data-driven approach to design and development. He's skilled at analyzing user behavior and making data-informed decisions to optimize the user experience. He's also an excellent problem-solver who loves to dig deep into complex technical challenges."})}),e(t,{trigger:"Matthias",children:e(r,{children:"Matthias is a versatile and adaptable front-end developer who excels at creating user-friendly interfaces across a wide range of platforms and devices. He's skilled at working with different programming languages and frameworks, and he's always looking for ways to optimize his code for maximum performance."})}),e(t,{trigger:"Sandrine",children:e(r,{children:"Sandrine is a collaborative and communicative front-end developer who thrives in team environments. She's passionate about creating user-centered designs that meet the needs of diverse audiences, and she's skilled at collaborating with designers and other developers to bring those designs to life. She's also a skilled communicator who can explain complex technical concepts in plain language."})})]})}),e(g,{title:"Trigger with content",children:s(i,{style:u.accordionContainer,children:[e(t,{trigger:e(n,{icon:"lake-card",name:"Card"}),children:e(r,{children:"This feature allows users to manage their debit or credit cards within the app. Users can view their card details, track their spending, set spending limits, and freeze or unfreeze their card if it's lost or stolen."})}),e(t,{trigger:e(n,{icon:"lake-transfer",name:"SEPA Direct Debit"}),children:e(r,{children:"This feature enables users to authorize regular payments to be made from their bank account to a third party. Users can set up recurring payments for bills or subscriptions, and can easily manage and cancel these payments within the app."})}),e(t,{trigger:e(n,{icon:"lake-card",name:"Check"}),children:e(r,{children:"This feature allows users to deposit checks into their account by taking a photo of the check with their phone. Users can see the status of their check deposit and receive notifications when the deposit is complete."})}),e(t,{trigger:e(n,{icon:"lake-transfer",name:"Internal Direct Debit"}),children:e(r,{children:"This feature allows users to set up automatic payments between their own accounts within the same bank. For example, users can set up a recurring transfer from their checking account to their savings account each month. Users can manage and cancel these payments within the app."})})]})})]});var f,y,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`({
  name,
  icon
}: PaymentMethodContentProps) => {
  return <Box direction="row" alignItems="center" style={commonStyles.fill}>
      <BorderedIcon name={icon} size={32} padding={4} />
      <Space width={12} />

      <LakeText variant="smallMedium" color={colors.gray[900]}>
        {name}
      </LakeText>

      <Fill minWidth={12} />

      <LakeButton size="small" color="sandbox" onPress={() => {
      console.log("Press on payment method", name);
    }}>
        Activate
      </LakeButton>
    </Box>;
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var k,v,x;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`({
  trigger
}: StoryArgs) => {
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
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const Y=["PaymentMethodContent","Default"];export{l as Default,n as PaymentMethodContent,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Accordion.stories-55cb72a9.js.map
