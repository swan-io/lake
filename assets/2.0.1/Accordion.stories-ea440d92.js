import{S as T,b as C,s as d,j as o,V as s,a as e,c as u,d as L,L as a}from"./Space-866c6d2d.js";import{r as f}from"./index-ebeaab24.js";import{u as D}from"./useDisclosure-f840d913.js";import{I as M}from"./Icon-3493efb8.js";import{P}from"./index-b75cb4fd.js";import{B as z}from"./BorderedIcon-066d22e8.js";import{B as H}from"./index-9b96a6d6.js";import{F}from"./Fill-6bd9df79.js";import{L as E}from"./LakeButton-8fafd98b.js";import{c as _}from"./commonStyles-d52fedae.js";import{S as V,a as k}from"./_StoriesComponents-143445d5.js";import"./extends-98964cd2.js";import"./Svg-36b671a5.js";import"./Pressable-4fafd1ef.js";import"./useMergeRefs-f233a2be.js";import"./index-deb1010d.js";const B=()=>{const n=f.useRef(!0);return n.current?(n.current=!1,!0):n.current},i=T.create({trigger:{flexDirection:"row",alignItems:"center",backgroundColor:C.accented,paddingVertical:d[12],paddingHorizontal:d[20]},arrow:{transitionProperty:"transform",transitionDuration:"200ms"},arrowOpen:{transform:"rotate(90deg)"},contentContainer:{display:"none",overflow:"hidden",transitionDuration:"300ms"},contentContainerDisplayed:{display:"flex"},content:{paddingVertical:d[12],paddingHorizontal:d[20]}}),r=({trigger:n,children:m})=>{const y=B(),w=f.useRef(null),[c,{toggle:S}]=D(!1);return f.useEffect(()=>{const t=w.current;if(!y&&t instanceof HTMLDivElement){const p=()=>{t.removeAttribute("style"),t.removeEventListener("transitionend",p)};if(t.addEventListener("transitionend",p),c){const g=t.clientHeight;t.style.height="0px",requestAnimationFrame(()=>{t.style.height=`${g}px`})}else return t.style.display="flex",requestAnimationFrame(()=>{const g=t.clientHeight;t.style.height=`${g}px`,requestAnimationFrame(()=>{t.style.height="0px"})}),()=>{t instanceof HTMLDivElement&&t.removeEventListener("transitionend",p)}}},[y,c]),o(s,{children:[o(P,{style:i.trigger,onPress:S,children:[e(M,{name:"chevron-right-filled",size:12,color:u.gray[500],style:[i.arrow,c&&i.arrowOpen]}),e(L,{width:20}),typeof n=="string"?e(a,{variant:"smallMedium",color:u.gray[900],children:n}):n]}),e(s,{ref:w,style:[i.contentContainer,c&&i.contentContainerDisplayed],children:e(s,{style:i.content,children:m})})]})};try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}}}}}catch{}const v=T.create({accordionContainer:{maxWidth:800}}),ee={title:"Layout/Accordion",component:r},l=({name:n,icon:m})=>o(H,{direction:"row",alignItems:"center",style:_.fill,children:[e(z,{name:m,size:32,padding:4}),e(L,{width:12}),e(a,{variant:"smallMedium",color:u.gray[900],children:n}),e(F,{minWidth:12}),e(E,{size:"small",color:"sandbox",onPress:()=>{console.log("Press on payment method",n)},children:"Activate"})]}),h=()=>o(V,{title:"Accordion",children:[e(k,{title:"Default",children:o(s,{style:v.accordionContainer,children:[e(r,{trigger:"Frederic",children:e(a,{children:"Frederic is a creative and detail-oriented front-end developer who loves to experiment with new design trends and push the boundaries of user experience. He's always eager to learn and try out new technologies, and he's not afraid to take risks to achieve his goals."})}),e(r,{trigger:"Mathieu",children:e(a,{children:"Mathieu is a meticulous and analytical front-end developer who takes a data-driven approach to design and development. He's skilled at analyzing user behavior and making data-informed decisions to optimize the user experience. He's also an excellent problem-solver who loves to dig deep into complex technical challenges."})}),e(r,{trigger:"Matthias",children:e(a,{children:"Matthias is a versatile and adaptable front-end developer who excels at creating user-friendly interfaces across a wide range of platforms and devices. He's skilled at working with different programming languages and frameworks, and he's always looking for ways to optimize his code for maximum performance."})}),e(r,{trigger:"Sandrine",children:e(a,{children:"Sandrine is a collaborative and communicative front-end developer who thrives in team environments. She's passionate about creating user-centered designs that meet the needs of diverse audiences, and she's skilled at collaborating with designers and other developers to bring those designs to life. She's also a skilled communicator who can explain complex technical concepts in plain language."})})]})}),e(k,{title:"Trigger with content",children:o(s,{style:v.accordionContainer,children:[e(r,{trigger:e(l,{icon:"lake-card",name:"Card"}),children:e(a,{children:"This feature allows users to manage their debit or credit cards within the app. Users can view their card details, track their spending, set spending limits, and freeze or unfreeze their card if it's lost or stolen."})}),e(r,{trigger:e(l,{icon:"lake-transfer",name:"SEPA Direct Debit"}),children:e(a,{children:"This feature enables users to authorize regular payments to be made from their bank account to a third party. Users can set up recurring payments for bills or subscriptions, and can easily manage and cancel these payments within the app."})}),e(r,{trigger:e(l,{icon:"lake-card",name:"Check"}),children:e(a,{children:"This feature allows users to deposit checks into their account by taking a photo of the check with their phone. Users can see the status of their check deposit and receive notifications when the deposit is complete."})}),e(r,{trigger:e(l,{icon:"lake-transfer",name:"Internal Direct Debit"}),children:e(a,{children:"This feature allows users to set up automatic payments between their own accounts within the same bank. For example, users can set up a recurring transfer from their checking account to their savings account each month. Users can manage and cancel these payments within the app."})})]})})]});var x,b,A;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(A=(b=h.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};const te=["Default"];export{h as Default,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=Accordion.stories-ea440d92.js.map
