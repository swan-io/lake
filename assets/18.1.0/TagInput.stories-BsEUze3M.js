import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-Bp7n9_Wj.js";import{Bt as r,Ct as i,Dt as a,Et as o,Ft as s,G as c,J as l,St as u,U as d,W as f,_ as p,ct as ee,dt as m,g as h,h as g,ht as _,lt as v,o as y,ot as b,pt as x,s as S,v as C,vt as w,wt as T}from"./ScrollView-CaaTTa8S.js";import{a as E,i as D,r as O,t as k}from"./Pressable-9eSPRqev.js";import{n as A,t as j}from"./Tag-Dwp0vaFy.js";import{n as M,t as N}from"./LakeTextInput-CNq0O1dd.js";import{n as P,t as F}from"./LakeLabel-U6Y9ZmUv.js";import{n as I,r as L,t as R}from"./_StoriesComponents-30iWd_0f.js";import{o as z,s as B}from"./validation-NefNcmqf.js";var V,H,U,W,G,K=t((()=>{V=e(n()),o(),f(),w(),p(),D(),b(),h(),S(),O(),A(),H=l(),U=r.create({container:{flexGrow:1,flexShrink:1,flexDirection:`row`,alignItems:`stretch`},root:{flexDirection:`row`,display:`flex`,alignItems:`center`,flexWrap:`wrap`,borderRadius:u[6],backgroundColor:x.accented,borderColor:_.gray[100],borderWidth:1,paddingHorizontal:T[4],paddingTop:T[4],outlineStyle:`none`,cursor:`text`},focused:{borderColor:_.gray[500],boxShadow:i.tile},hovered:{boxShadow:i.tile},disabled:{backgroundColor:_.gray[50],borderColor:_.gray[50],color:_.gray[900],cursor:`not-allowed`},readOnly:{backgroundColor:_.gray[50],borderColor:_.gray[50],color:_.gray[900]},readOnlyError:{borderColor:`transparent`,paddingRight:T[32]},error:{borderColor:_.negative[400]},valid:{borderColor:_.positive[500]},input:{height:28,marginBottom:T[4],marginLeft:T[4],outlineStyle:`none`,flexGrow:1},tag:{marginRight:T[4],marginBottom:T[4],maxWidth:350},errorContainer:{paddingTop:T[4]}}),W=/,| /,G=({ref:e,id:t,validator:n=()=>!0,onFocus:r,onBlur:i,validateOnBlur:o=!0,values:l,onValuesChanged:u,readOnly:f=!1,disabled:p=!1,valid:h=!1,hideErrors:b=!1,placeholder:x,help:S,error:w})=>{let T=(0,V.useRef)(null),D=(0,V.useRef)(null),[O,A]=(0,V.useState)(!1),[M,N]=(0,V.useState)(!1),P=E(T,e);C(D,{onHoverStart:()=>N(!0),onHoverEnd:()=>N(!1)});let F=(0,V.useCallback)(e=>{u([...l,...e.filter(e=>!l.includes(e))]),T.current?.clear()},[l,u]),I=(0,V.useCallback)(e=>{let t=[...new Set(e.split(W).filter(e=>e.length>0))];(t.length>1||t[0]!==e)&&F(t)},[F]),L=(0,V.useCallback)(({nativeEvent:e})=>{p||f||d({key:e.key,input:T.current}).with({key:`Backspace`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{m(e.value)&&u(l.filter(e=>e!==l[l.length-1]))}).with({key:`Enter`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{v(e.value)&&F([e.value])})},[u,F,l,p,f]),R=(0,V.useCallback)(()=>{T.current?.focus()},[]),z=(0,V.useCallback)(e=>{A(!0),r?.(e)},[r]),B=(0,V.useCallback)(e=>{let t=T.current;t instanceof HTMLInputElement&&v(t.value)&&o&&F([t.value]),A(!1),i?.(e)},[F,i,o]);(0,V.useImperativeHandle)(e,()=>({pushPendingValue:()=>{let e=T.current;e instanceof HTMLInputElement&&v(e.value)&&o&&F([e.value])}}),[F,o]);let G=v(w);return(0,H.jsxs)(s,{children:[(0,H.jsxs)(k,{style:[U.root,f&&G&&U.readOnlyError,p&&U.disabled,f&&U.readOnly,O&&U.focused,G&&U.error,h&&U.valid,M&&U.hovered],"aria-errormessage":w,onPress:R,ref:D,children:[l.map((e,t)=>(0,H.jsx)(j,{onPressRemove:!f&&!p?()=>u(l.filter(t=>t!==e)):void 0,style:U.tag,color:n(e)?`gray`:`negative`,children:e},t)),(0,H.jsx)(a,{ref:P,id:t,style:[U.input,p&&U.disabled],onFocus:z,onBlur:B,"aria-disabled":p,onChangeText:I,onKeyPress:L,readOnly:f,placeholder:x})]}),!b&&(0,H.jsx)(g,{direction:`row`,style:U.errorContainer,children:ee(w)?(0,H.jsx)(y,{variant:`smallRegular`,color:_.negative[500],children:w}):(0,H.jsx)(y,{variant:`smallRegular`,color:_.gray[500],children:S??` `})})]})},G.__docgenInfo={description:``,methods:[{name:`pushPendingValue`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`LakeTagInput`,props:{validator:{defaultValue:{value:`() => true`,computed:!1},required:!1},validateOnBlur:{defaultValue:{value:`true`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},valid:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrors:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),q,J,Y,X,Z,Q,$;t((()=>{P(),K(),M(),q=e(n()),o(),z(),L(),J=l(),Y=r.create({input:{maxWidth:400}}),X={title:`Forms/TagInput`,component:N},Z=e=>{let[t,n]=(0,q.useState)([`toto`,`dfghj@iouy.fr`]);return(0,J.jsx)(s,{style:Y.input,children:(0,J.jsx)(F,{label:`Emails`,render:r=>(0,J.jsx)(G,{id:r,validator:B,onValuesChanged:n,values:t,...e})})})},Q=()=>(0,J.jsxs)(R,{title:`Input variations`,children:[(0,J.jsx)(I,{title:`Default`,children:(0,J.jsx)(Z,{})}),(0,J.jsx)(I,{title:`Disabled`,children:(0,J.jsx)(Z,{disabled:!0})}),(0,J.jsx)(I,{title:`Error`,children:(0,J.jsx)(Z,{error:`Nop`})}),(0,J.jsx)(I,{title:`Hidden errors`,children:(0,J.jsx)(Z,{error:`Nop`,hideErrors:!0})}),(0,J.jsx)(I,{title:`Valid`,children:(0,J.jsx)(Z,{valid:!0})}),(0,J.jsx)(I,{title:`With help`,children:(0,J.jsx)(Z,{help:`Fill me`})}),(0,J.jsx)(I,{title:`Read only`,children:(0,J.jsx)(Z,{readOnly:!0})})]}),Q.__docgenInfo={description:``,methods:[],displayName:`Variations`},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Input variations">
      <StoryPart title="Default">
        <EditableTagInput />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableTagInput disabled={true} />
      </StoryPart>

      <StoryPart title="Error">
        <EditableTagInput error="Nop" />
      </StoryPart>

      <StoryPart title="Hidden errors">
        <EditableTagInput error="Nop" hideErrors={true} />
      </StoryPart>

      <StoryPart title="Valid">
        <EditableTagInput valid={true} />
      </StoryPart>

      <StoryPart title="With help">
        <EditableTagInput help="Fill me" />
      </StoryPart>

      <StoryPart title="Read only">
        <EditableTagInput readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...Q.parameters?.docs?.source}}},$=[`Variations`]}))();export{Q as Variations,$ as __namedExportsOrder,X as default};
//# sourceMappingURL=TagInput.stories-BsEUze3M.js.map