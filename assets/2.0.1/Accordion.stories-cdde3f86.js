import{S as x,b as T,s,j as n,V as l,a as e,c as m,d as b,L as a}from"./Space-866c6d2d.js";import{r as p}from"./index-ebeaab24.js";import{u as S}from"./useDisclosure-f840d913.js";import{I as L}from"./Icon-3493efb8.js";import{P as M}from"./index-b75cb4fd.js";import{B as P}from"./BorderedIcon-066d22e8.js";import{B as D}from"./index-9b96a6d6.js";import{F as z}from"./Fill-6bd9df79.js";import{L as C}from"./LakeButton-8fafd98b.js";import{c as I}from"./commonStyles-d52fedae.js";import{S as F,a as f}from"./_StoriesComponents-143445d5.js";import"./extends-98964cd2.js";import"./Svg-36b671a5.js";import"./Pressable-4fafd1ef.js";import"./useMergeRefs-f233a2be.js";import"./index-deb1010d.js";const H=()=>{const t=p.useRef(!0);return t.current?(t.current=!1,!0):t.current},i=x.create({trigger:{flexDirection:"row",alignItems:"center",backgroundColor:T.accented,paddingVertical:s[12],paddingHorizontal:s[20]},arrow:{transitionProperty:"transform",transitionDuration:"200ms"},arrowOpen:{transform:"rotate(90deg)"},content:{display:"none",paddingVertical:s[12],paddingHorizontal:s[20]},contentDisplayed:{display:"flex"}}),r=({trigger:t,children:h})=>{const g=H(),u=p.useRef(null),[o,{toggle:A}]=S(!1);return p.useEffect(()=>{!g&&u.current instanceof HTMLDivElement&&console.log(o?"OPEN ANIMATION":"CLOSE ANIMATION")},[g,o]),n(l,{children:[n(M,{style:i.trigger,onPress:A,children:[e(L,{name:"chevron-right-filled",size:12,color:m.gray[500],style:[i.arrow,o&&i.arrowOpen]}),e(b,{width:20}),typeof t=="string"?e(a,{variant:"smallMedium",color:m.gray[900],children:t}):t]}),e(l,{ref:u,style:[i.content,o&&i.contentDisplayed],children:h})]})};try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}}}}}catch{}const w=x.create({accordionContainer:{maxWidth:800}}),X={title:"Layout/Accordion",component:r},c=({name:t,icon:h})=>n(D,{direction:"row",alignItems:"center",style:I.fill,children:[e(P,{name:h,size:32,padding:4}),e(b,{width:12}),e(a,{variant:"smallMedium",color:m.gray[900],children:t}),e(z,{minWidth:12}),e(C,{size:"small",color:"sandbox",onPress:()=>{console.log("Press on payment method",t)},children:"Activate"})]}),d=()=>n(F,{title:"Accordion",children:[e(f,{title:"Default",children:n(l,{style:w.accordionContainer,children:[e(r,{trigger:"Frederic",children:e(a,{children:"Frederic is a creative and detail-oriented front-end developer who loves to experiment with new design trends and push the boundaries of user experience. He's always eager to learn and try out new technologies, and he's not afraid to take risks to achieve his goals."})}),e(r,{trigger:"Mathieu",children:e(a,{children:"Mathieu is a meticulous and analytical front-end developer who takes a data-driven approach to design and development. He's skilled at analyzing user behavior and making data-informed decisions to optimize the user experience. He's also an excellent problem-solver who loves to dig deep into complex technical challenges."})}),e(r,{trigger:"Matthias",children:e(a,{children:"Matthias is a versatile and adaptable front-end developer who excels at creating user-friendly interfaces across a wide range of platforms and devices. He's skilled at working with different programming languages and frameworks, and he's always looking for ways to optimize his code for maximum performance."})}),e(r,{trigger:"Sandrine",children:e(a,{children:"Sandrine is a collaborative and communicative front-end developer who thrives in team environments. She's passionate about creating user-centered designs that meet the needs of diverse audiences, and she's skilled at collaborating with designers and other developers to bring those designs to life. She's also a skilled communicator who can explain complex technical concepts in plain language."})})]})}),e(f,{title:"Trigger with content",children:n(l,{style:w.accordionContainer,children:[e(r,{trigger:e(c,{icon:"lake-card",name:"Card"}),children:e(a,{children:"This feature allows users to manage their debit or credit cards within the app. Users can view their card details, track their spending, set spending limits, and freeze or unfreeze their card if it's lost or stolen."})}),e(r,{trigger:e(c,{icon:"lake-transfer",name:"SEPA Direct Debit"}),children:e(a,{children:"This feature enables users to authorize regular payments to be made from their bank account to a third party. Users can set up recurring payments for bills or subscriptions, and can easily manage and cancel these payments within the app."})}),e(r,{trigger:e(c,{icon:"lake-card",name:"Check"}),children:e(a,{children:"This feature allows users to deposit checks into their account by taking a photo of the check with their phone. Users can see the status of their check deposit and receive notifications when the deposit is complete."})}),e(r,{trigger:e(c,{icon:"lake-transfer",name:"Internal Direct Debit"}),children:e(a,{children:"This feature allows users to set up automatic payments between their own accounts within the same bank. For example, users can set up a recurring transfer from their checking account to their savings account each month. Users can manage and cancel these payments within the app."})})]})})]});var y,k,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(v=(k=d.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const Y=["Default"];export{d as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Accordion.stories-cdde3f86.js.map
