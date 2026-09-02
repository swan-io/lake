import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-DeGKrjzn.js";import{B as r,F as i,L as a,M as o,N as s,P as c,R as l,U as u,_ as d,dt as f,ft as p,g as m,gt as h,h as g,ht as _,it as v,kt as y,nt as b,o as x,pt as S,s as C,st as w,v as T,wt as E}from"./ScrollView-C-QKdz_V.js";import{a as D,i as O,r as k,t as A}from"./Pressable-wM_e9dB-.js";import{n as j,t as M}from"./Tag-C-inxTZg.js";import{n as N,t as P}from"./LakeTextInput-BvoxlJ0k.js";import{n as F,r as I,t as L}from"./_StoriesComponents-CT0jR6qv.js";import{o as R,s as z}from"./validation-Cgwhf4xV.js";var B,V,H,U,W,G=t((()=>{B=e(n()),_(),s(),w(),d(),O(),i(),m(),C(),k(),j(),V=u(),H=y.create({container:{flexGrow:1,flexShrink:1,flexDirection:`row`,alignItems:`stretch`},root:{flexDirection:`row`,display:`flex`,alignItems:`center`,flexWrap:`wrap`,borderRadius:f[6],backgroundColor:b.accented,borderColor:v.gray[100],borderWidth:1,paddingHorizontal:S[4],paddingTop:S[4],outlineStyle:`none`,cursor:`text`},focused:{borderColor:v.gray[500],boxShadow:p.tile},hovered:{boxShadow:p.tile},disabled:{backgroundColor:v.gray[50],borderColor:v.gray[50],color:v.gray[900],cursor:`not-allowed`},readOnly:{backgroundColor:v.gray[50],borderColor:v.gray[50],color:v.gray[900]},readOnlyError:{borderColor:`transparent`,paddingRight:S[32]},error:{borderColor:v.negative[400]},valid:{borderColor:v.positive[500]},input:{height:28,marginBottom:S[4],marginLeft:S[4],outlineStyle:`none`,flexGrow:1},tag:{marginRight:S[4],marginBottom:S[4],maxWidth:350},errorContainer:{paddingTop:S[4]}}),U=/,| /,W=({ref:e,id:t,validator:n=()=>!0,onFocus:i,onBlur:s,validateOnBlur:u=!0,values:d,onValuesChanged:f,readOnly:p=!1,disabled:m=!1,valid:_=!1,hideErrors:y=!1,placeholder:b,help:S,error:C})=>{let w=(0,B.useRef)(null),O=(0,B.useRef)(null),[k,j]=(0,B.useState)(!1),[N,P]=(0,B.useState)(!1),F=D(w,e);T(O,{onHoverStart:()=>P(!0),onHoverEnd:()=>P(!1)});let I=(0,B.useCallback)(e=>{f([...d,...e.filter(e=>!d.includes(e))]),w.current?.clear()},[d,f]),L=(0,B.useCallback)(e=>{let t=[...new Set(e.split(U).filter(e=>e.length>0))];(t.length>1||t[0]!==e)&&I(t)},[I]),R=(0,B.useCallback)(({nativeEvent:e})=>{m||p||o({key:e.key,input:w.current}).with({key:`Backspace`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{r(e.value)&&f(d.filter(e=>e!==d[d.length-1]))}).with({key:`Enter`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{l(e.value)&&I([e.value])})},[f,I,d,m,p]),z=(0,B.useCallback)(()=>{w.current?.focus()},[]),W=(0,B.useCallback)(e=>{j(!0),i?.(e)},[i]),G=(0,B.useCallback)(e=>{let t=w.current;t instanceof HTMLInputElement&&l(t.value)&&u&&I([t.value]),j(!1),s?.(e)},[I,s,u]);(0,B.useImperativeHandle)(e,()=>({pushPendingValue:()=>{let e=w.current;e instanceof HTMLInputElement&&l(e.value)&&u&&I([e.value])}}),[I,u]);let K=l(C);return(0,V.jsxs)(E,{children:[(0,V.jsxs)(A,{style:[H.root,p&&K&&H.readOnlyError,m&&H.disabled,p&&H.readOnly,k&&H.focused,K&&H.error,_&&H.valid,N&&H.hovered],"aria-errormessage":C,onPress:z,ref:O,children:[d.map((e,t)=>(0,V.jsx)(M,{onPressRemove:!p&&!m?()=>f(d.filter(t=>t!==e)):void 0,style:H.tag,color:n(e)?`gray`:`negative`,children:e},t)),(0,V.jsx)(h,{ref:F,id:t,style:[H.input,m&&H.disabled],onFocus:W,onBlur:G,"aria-disabled":m,onChangeText:L,onKeyPress:R,readOnly:p,placeholder:b})]}),!y&&(0,V.jsx)(g,{direction:`row`,style:H.errorContainer,children:a(C)?(0,V.jsx)(x,{variant:`smallRegular`,color:v.negative[500],children:C}):(0,V.jsx)(x,{variant:`smallRegular`,color:v.gray[500],children:S??` `})})]})},W.__docgenInfo={description:``,methods:[{name:`pushPendingValue`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`LakeTagInput`,props:{validator:{defaultValue:{value:`() => true`,computed:!1},required:!1},validateOnBlur:{defaultValue:{value:`true`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},valid:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrors:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),K,q,J,Y,X,Z,Q;t((()=>{G(),N(),K=e(n()),_(),R(),I(),q=u(),J=y.create({input:{maxWidth:400}}),Y={title:`Forms/TagInput`,component:P},X=e=>{let[t,n]=(0,K.useState)([`toto`,`dfghj@iouy.fr`]);return(0,q.jsx)(E,{style:J.input,children:(0,q.jsx)(W,{validator:z,onValuesChanged:n,values:t,...e})})},Z=()=>(0,q.jsxs)(L,{title:`Input variations`,children:[(0,q.jsx)(F,{title:`Default`,children:(0,q.jsx)(X,{})}),(0,q.jsx)(F,{title:`Disabled`,children:(0,q.jsx)(X,{disabled:!0})}),(0,q.jsx)(F,{title:`Error`,children:(0,q.jsx)(X,{error:`Nop`})}),(0,q.jsx)(F,{title:`Hidden errors`,children:(0,q.jsx)(X,{error:`Nop`,hideErrors:!0})}),(0,q.jsx)(F,{title:`Valid`,children:(0,q.jsx)(X,{valid:!0})}),(0,q.jsx)(F,{title:`With help`,children:(0,q.jsx)(X,{help:`Fill me`})}),(0,q.jsx)(F,{title:`Read only`,children:(0,q.jsx)(X,{readOnly:!0})})]}),Z.__docgenInfo={description:``,methods:[],displayName:`Variations`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=TagInput.stories-BeT-S2Wj.js.map