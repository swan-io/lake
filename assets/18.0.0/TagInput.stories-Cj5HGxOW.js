import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-Dfd2BKQF.js";import{$ as r,Ct as i,Et as a,G as o,H as s,J as c,Pt as l,St as u,Tt as d,U as f,W as p,X as m,_ as h,_t as g,ft as _,g as v,h as y,mt as b,o as x,q as S,s as C,v as w,xt as T,zt as E}from"./ScrollView-B6KTtxSY.js";import{a as D,i as O,r as k,t as A}from"./Pressable-aIPkf_vu.js";import{n as j,t as M}from"./Tag-DE6N9PZ8.js";import{n as N,t as P}from"./LakeTextInput-Cv8xVJbx.js";import{n as F,r as I,t as L}from"./_StoriesComponents-pKlRW1aS.js";import{o as R,s as z}from"./validation-CX70IQt0.js";var B,V,H,U,W,G=t((()=>{B=e(n()),d(),f(),g(),h(),O(),o(),v(),C(),k(),j(),V=r(),H=E.create({container:{flexGrow:1,flexShrink:1,flexDirection:`row`,alignItems:`stretch`},root:{flexDirection:`row`,display:`flex`,alignItems:`center`,flexWrap:`wrap`,borderRadius:T[6],backgroundColor:_.accented,borderColor:b.gray[100],borderWidth:1,paddingHorizontal:i[4],paddingTop:i[4],outlineStyle:`none`,cursor:`text`},focused:{borderColor:b.gray[500],boxShadow:u.tile},hovered:{boxShadow:u.tile},disabled:{backgroundColor:b.gray[50],borderColor:b.gray[50],color:b.gray[900],cursor:`not-allowed`},readOnly:{backgroundColor:b.gray[50],borderColor:b.gray[50],color:b.gray[900]},readOnlyError:{borderColor:`transparent`,paddingRight:i[32]},error:{borderColor:b.negative[400]},valid:{borderColor:b.positive[500]},input:{height:28,marginBottom:i[4],marginLeft:i[4],outlineStyle:`none`,flexGrow:1},tag:{marginRight:i[4],marginBottom:i[4],maxWidth:350},errorContainer:{paddingTop:i[4]}}),U=/,| /,W=({ref:e,id:t,validator:n=()=>!0,onFocus:r,onBlur:i,validateOnBlur:o=!0,values:u,onValuesChanged:d,readOnly:f=!1,disabled:h=!1,valid:g=!1,hideErrors:_=!1,placeholder:v,help:C,error:T})=>{let E=(0,B.useRef)(null),O=(0,B.useRef)(null),[k,j]=(0,B.useState)(!1),[N,P]=(0,B.useState)(!1),F=D(E,e);w(O,{onHoverStart:()=>P(!0),onHoverEnd:()=>P(!1)});let I=(0,B.useCallback)(e=>{d([...u,...e.filter(e=>!u.includes(e))]),E.current?.clear()},[u,d]),L=(0,B.useCallback)(e=>{let t=[...new Set(e.split(U).filter(e=>e.length>0))];(t.length>1||t[0]!==e)&&I(t)},[I]),R=(0,B.useCallback)(({nativeEvent:e})=>{h||f||s({key:e.key,input:E.current}).with({key:`Backspace`,input:p.instanceOf(HTMLInputElement)},({input:e})=>{m(e.value)&&d(u.filter(e=>e!==u[u.length-1]))}).with({key:`Enter`,input:p.instanceOf(HTMLInputElement)},({input:e})=>{c(e.value)&&I([e.value])})},[d,I,u,h,f]),z=(0,B.useCallback)(()=>{E.current?.focus()},[]),W=(0,B.useCallback)(e=>{j(!0),r?.(e)},[r]),G=(0,B.useCallback)(e=>{let t=E.current;t instanceof HTMLInputElement&&c(t.value)&&o&&I([t.value]),j(!1),i?.(e)},[I,i,o]);(0,B.useImperativeHandle)(e,()=>({pushPendingValue:()=>{let e=E.current;e instanceof HTMLInputElement&&c(e.value)&&o&&I([e.value])}}),[I,o]);let K=c(T);return(0,V.jsxs)(l,{children:[(0,V.jsxs)(A,{style:[H.root,f&&K&&H.readOnlyError,h&&H.disabled,f&&H.readOnly,k&&H.focused,K&&H.error,g&&H.valid,N&&H.hovered],"aria-errormessage":T,onPress:z,ref:O,children:[u.map((e,t)=>(0,V.jsx)(M,{onPressRemove:!f&&!h?()=>d(u.filter(t=>t!==e)):void 0,style:H.tag,color:n(e)?`gray`:`negative`,children:e},t)),(0,V.jsx)(a,{ref:F,id:t,style:[H.input,h&&H.disabled],onFocus:W,onBlur:G,"aria-disabled":h,onChangeText:L,onKeyPress:R,readOnly:f,placeholder:v})]}),!_&&(0,V.jsx)(y,{direction:`row`,style:H.errorContainer,children:S(T)?(0,V.jsx)(x,{variant:`smallRegular`,color:b.negative[500],children:T}):(0,V.jsx)(x,{variant:`smallRegular`,color:b.gray[500],children:C??` `})})]})},W.__docgenInfo={description:``,methods:[{name:`pushPendingValue`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`LakeTagInput`,props:{validator:{defaultValue:{value:`() => true`,computed:!1},required:!1},validateOnBlur:{defaultValue:{value:`true`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},valid:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrors:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),K,q,J,Y,X,Z,Q;t((()=>{G(),N(),K=e(n()),d(),R(),I(),q=r(),J=E.create({input:{maxWidth:400}}),Y={title:`Forms/TagInput`,component:P},X=e=>{let[t,n]=(0,K.useState)([`toto`,`dfghj@iouy.fr`]);return(0,q.jsx)(l,{style:J.input,children:(0,q.jsx)(W,{validator:z,onValuesChanged:n,values:t,...e})})},Z=()=>(0,q.jsxs)(L,{title:`Input variations`,children:[(0,q.jsx)(F,{title:`Default`,children:(0,q.jsx)(X,{})}),(0,q.jsx)(F,{title:`Disabled`,children:(0,q.jsx)(X,{disabled:!0})}),(0,q.jsx)(F,{title:`Error`,children:(0,q.jsx)(X,{error:`Nop`})}),(0,q.jsx)(F,{title:`Hidden errors`,children:(0,q.jsx)(X,{error:`Nop`,hideErrors:!0})}),(0,q.jsx)(F,{title:`Valid`,children:(0,q.jsx)(X,{valid:!0})}),(0,q.jsx)(F,{title:`With help`,children:(0,q.jsx)(X,{help:`Fill me`})}),(0,q.jsx)(F,{title:`Read only`,children:(0,q.jsx)(X,{readOnly:!0})})]}),Z.__docgenInfo={description:``,methods:[],displayName:`Variations`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q=[`Variations`]}))();export{Z as Variations,Q as __namedExportsOrder,Y as default};
//# sourceMappingURL=TagInput.stories-Cj5HGxOW.js.map