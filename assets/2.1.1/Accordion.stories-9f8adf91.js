import{S,e as M,d,j as s,V as c,a as e,c as f,b as L,L as a}from"./Space-e2d3bd7a.js";import{r as m}from"./index-ebeaab24.js";import{u as D}from"./useDisclosure-f840d913.js";import{I as P}from"./Icon-9c044304.js";import{P as z}from"./index-97fc5218.js";import{B as H}from"./BorderedIcon-0068a506.js";import{B as F}from"./index-58b43804.js";import{F as E}from"./Fill-4a57a874.js";import{L as _}from"./LakeButton-c489e2c7.js";import{c as I}from"./commonStyles-d52fedae.js";import{S as V,a as v}from"./_StoriesComponents-78c281e0.js";import"./extends-98964cd2.js";import"./Svg-40d03a82.js";import"./Pressable-745676e8.js";import"./useMergeRefs-48c9b11c.js";import"./index-c113c62e.js";const B=()=>{const r=m.useRef(!0);return r.current?(r.current=!1,!0):r.current},o=S.create({trigger:{flexDirection:"row",alignItems:"center",backgroundColor:M.accented,paddingVertical:d[12],paddingHorizontal:d[20]},arrow:{transitionProperty:"transform",transitionDuration:"200ms"},arrowOpen:{transform:"rotate(90deg)"},contentContainer:{display:"none",overflow:"hidden",transitionDuration:"300ms"},contentContainerDisplayed:{display:"flex"},content:{paddingVertical:d[12],paddingHorizontal:d[20]}}),n=({trigger:r,children:p})=>{const y=m.useId(),w=B(),k=m.useRef(null),[i,{toggle:C}]=D(!1);return m.useEffect(()=>{const t=k.current;if(!w&&t instanceof HTMLElement){const g=()=>{t.removeAttribute("style"),t.removeEventListener("transitionend",g)};if(t.addEventListener("transitionend",g),i){const u=t.clientHeight;t.style.height="0px",requestAnimationFrame(()=>{t.style.height=`${u}px`})}else return t.style.display="flex",requestAnimationFrame(()=>{const u=t.clientHeight;t.style.height=`${u}px`,requestAnimationFrame(()=>{t.style.height="0px"})}),()=>{t.removeEventListener("transitionend",g)}}},[w,i]),s(c,{children:[s(z,{"aria-expanded":i,"aria-controls":y,style:o.trigger,onPress:C,children:[e(P,{name:"chevron-right-filled",size:12,color:f.gray[500],style:[o.arrow,i&&o.arrowOpen]}),e(L,{width:20}),typeof r=="string"?e(a,{variant:"smallMedium",color:f.gray[900],children:r}):r]}),e(c,{ref:k,"aria-labelledby":y,"aria-hidden":!i,role:"region",style:[o.contentContainer,i&&o.contentContainerDisplayed],children:e(c,{style:o.content,children:p})})]})};try{n.displayName="Accordion",n.__docgenInfo={description:"",displayName:"Accordion",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}}}}}catch{}const x=S.create({accordionContainer:{maxWidth:800}}),te={title:"Layout/Accordion",component:n},l=({name:r,icon:p})=>s(F,{direction:"row",alignItems:"center",style:I.fill,children:[e(H,{name:p,size:32,padding:4}),e(L,{width:12}),e(a,{variant:"smallMedium",color:f.gray[900],children:r}),e(E,{minWidth:12}),e(_,{size:"small",color:"sandbox",onPress:()=>{console.log("Press on payment method",r)},children:"Activate"})]}),h=()=>s(V,{title:"Accordion",children:[e(v,{title:"Default",children:s(c,{style:x.accordionContainer,children:[e(n,{trigger:"Frederic",children:e(a,{children:"Frederic is a creative and detail-oriented front-end developer who loves to experiment with new design trends and push the boundaries of user experience. He's always eager to learn and try out new technologies, and he's not afraid to take risks to achieve his goals."})}),e(n,{trigger:"Mathieu",children:e(a,{children:"Mathieu is a meticulous and analytical front-end developer who takes a data-driven approach to design and development. He's skilled at analyzing user behavior and making data-informed decisions to optimize the user experience. He's also an excellent problem-solver who loves to dig deep into complex technical challenges."})}),e(n,{trigger:"Matthias",children:e(a,{children:"Matthias is a versatile and adaptable front-end developer who excels at creating user-friendly interfaces across a wide range of platforms and devices. He's skilled at working with different programming languages and frameworks, and he's always looking for ways to optimize his code for maximum performance."})}),e(n,{trigger:"Sandrine",children:e(a,{children:"Sandrine is a collaborative and communicative front-end developer who thrives in team environments. She's passionate about creating user-centered designs that meet the needs of diverse audiences, and she's skilled at collaborating with designers and other developers to bring those designs to life. She's also a skilled communicator who can explain complex technical concepts in plain language."})})]})}),e(v,{title:"Trigger with content",children:s(c,{style:x.accordionContainer,children:[e(n,{trigger:e(l,{icon:"lake-card",name:"Card"}),children:e(a,{children:"This feature allows users to manage their debit or credit cards within the app. Users can view their card details, track their spending, set spending limits, and freeze or unfreeze their card if it's lost or stolen."})}),e(n,{trigger:e(l,{icon:"lake-transfer",name:"SEPA Direct Debit"}),children:e(a,{children:"This feature enables users to authorize regular payments to be made from their bank account to a third party. Users can set up recurring payments for bills or subscriptions, and can easily manage and cancel these payments within the app."})}),e(n,{trigger:e(l,{icon:"lake-card",name:"Check"}),children:e(a,{children:"This feature allows users to deposit checks into their account by taking a photo of the check with their phone. Users can see the status of their check deposit and receive notifications when the deposit is complete."})}),e(n,{trigger:e(l,{icon:"lake-transfer",name:"Internal Direct Debit"}),children:e(a,{children:"This feature allows users to set up automatic payments between their own accounts within the same bank. For example, users can set up a recurring transfer from their checking account to their savings account each month. Users can manage and cancel these payments within the app."})})]})})]});var b,A,T;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(T=(A=h.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const re=["Default"];export{h as Default,re as __namedExportsOrder,te as default};
//# sourceMappingURL=Accordion.stories-9f8adf91.js.map
