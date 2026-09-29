import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-BNm9BVzc.js";import{Bt as r,Ct as i,Dt as a,Et as o,Ft as s,G as c,J as l,St as u,U as d,W as f,_ as p,ct as m,dt as h,g,h as _,ht as v,lt as y,o as b,ot as x,pt as S,s as C,v as w,vt as T,wt as E}from"./ScrollView-DkoYtt3j.js";import{a as D,i as O,r as k,t as A}from"./Pressable-DSdALZtb.js";import{n as j,t as M}from"./Tag-BjZaOOGs.js";import{n as N,t as P}from"./LakeTextInput-DV3EpSFZ.js";import{n as F,r as I,t as L}from"./_StoriesComponents-CdlbkFJh.js";import{o as R,s as z}from"./validation-B6sAzMk0.js";var B,V,H,U,W,G=t((()=>{B=e(n()),o(),f(),T(),p(),O(),x(),g(),C(),k(),j(),V=l(),H=r.create({container:{flexGrow:1,flexShrink:1,flexDirection:`row`,alignItems:`stretch`},root:{flexDirection:`row`,display:`flex`,alignItems:`center`,flexWrap:`wrap`,borderRadius:u[6],backgroundColor:S.accented,borderColor:v.gray[100],borderWidth:1,paddingHorizontal:E[4],paddingTop:E[4],outlineStyle:`none`,cursor:`text`},focused:{borderColor:v.gray[500],boxShadow:i.tile},hovered:{boxShadow:i.tile},disabled:{backgroundColor:v.gray[50],borderColor:v.gray[50],color:v.gray[900],cursor:`not-allowed`},readOnly:{backgroundColor:v.gray[50],borderColor:v.gray[50],color:v.gray[900]},readOnlyError:{borderColor:`transparent`,paddingRight:E[32]},error:{borderColor:v.negative[400]},valid:{borderColor:v.positive[500]},input:{height:28,marginBottom:E[4],marginLeft:E[4],outlineStyle:`none`,flexGrow:1},tag:{marginRight:E[4],marginBottom:E[4],maxWidth:350},errorContainer:{paddingTop:E[4]}}),U=/,| /,W=({ref:e,id:t,validator:n=()=>!0,onFocus:r,onBlur:i,validateOnBlur:o=!0,values:l,onValuesChanged:u,readOnly:f=!1,disabled:p=!1,valid:g=!1,hideErrors:x=!1,placeholder:S,help:C,error:T})=>{let E=(0,B.useRef)(null),O=(0,B.useRef)(null),[k,j]=(0,B.useState)(!1),[N,P]=(0,B.useState)(!1),F=D(E,e);w(O,{onHoverStart:()=>P(!0),onHoverEnd:()=>P(!1)});let I=(0,B.useCallback)(e=>{u([...l,...e.filter(e=>!l.includes(e))]),E.current?.clear()},[l,u]),L=(0,B.useCallback)(e=>{let t=[...new Set(e.split(U).filter(e=>e.length>0))];(t.length>1||t[0]!==e)&&I(t)},[I]),R=(0,B.useCallback)(({nativeEvent:e})=>{p||f||d({key:e.key,input:E.current}).with({key:`Backspace`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{h(e.value)&&u(l.filter(e=>e!==l[l.length-1]))}).with({key:`Enter`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{y(e.value)&&I([e.value])})},[u,I,l,p,f]),z=(0,B.useCallback)(()=>{E.current?.focus()},[]),W=(0,B.useCallback)(e=>{j(!0),r?.(e)},[r]),G=(0,B.useCallback)(e=>{let t=E.current;t instanceof HTMLInputElement&&y(t.value)&&o&&I([t.value]),j(!1),i?.(e)},[I,i,o]);(0,B.useImperativeHandle)(e,()=>({pushPendingValue:()=>{let e=E.current;e instanceof HTMLInputElement&&y(e.value)&&o&&I([e.value])}}),[I,o]);let K=y(T);return(0,V.jsxs)(s,{children:[(0,V.jsxs)(A,{style:[H.root,f&&K&&H.readOnlyError,p&&H.disabled,f&&H.readOnly,k&&H.focused,K&&H.error,g&&H.valid,N&&H.hovered],"aria-errormessage":T,onPress:z,ref:O,children:[l.map((e,t)=>(0,V.jsx)(M,{onPressRemove:!f&&!p?()=>u(l.filter(t=>t!==e)):void 0,style:H.tag,color:n(e)?`gray`:`negative`,children:e},t)),(0,V.jsx)(a,{ref:F,id:t,style:[H.input,p&&H.disabled],onFocus:W,onBlur:G,"aria-disabled":p,onChangeText:L,onKeyPress:R,readOnly:f,placeholder:S})]}),!x&&(0,V.jsx)(_,{direction:`row`,style:H.errorContainer,children:m(T)?(0,V.jsx)(b,{variant:`smallRegular`,color:v.negative[500],children:T}):(0,V.jsx)(b,{variant:`smallRegular`,color:v.gray[500],children:C??` `})})]})},W.__docgenInfo={description:``,methods:[{name:`pushPendingValue`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`LakeTagInput`,props:{validator:{defaultValue:{value:`() => true`,computed:!1},required:!1},validateOnBlur:{defaultValue:{value:`true`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},valid:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrors:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),K,q,J,Y,X,Z,Q;t((()=>{G(),N(),K=e(n()),o(),R(),I(),q=l(),J=r.create({input:{maxWidth:400}}),Y={title:`Forms/TagInput`,component:P},X=e=>{let[t,n]=(0,K.useState)([`toto`,`dfghj@iouy.fr`]);return(0,q.jsx)(s,{style:J.input,children:(0,q.jsx)(W,{validator:z,onValuesChanged:n,values:t,...e})})},Z=()=>(0,q.jsxs)(L,{title:`Input variations`,children:[(0,q.jsx)(F,{title:`Default`,children:(0,q.jsx)(X,{})}),(0,q.jsx)(F,{title:`Disabled`,children:(0,q.jsx)(X,{disabled:!0})}),(0,q.jsx)(F,{title:`Error`,children:(0,q.jsx)(X,{error:`Nop`})}),(0,q.jsx)(F,{title:`Hidden errors`,children:(0,q.jsx)(X,{error:`Nop`,hideErrors:!0})}),(0,q.jsx)(F,{title:`Valid`,children:(0,q.jsx)(X,{valid:!0})}),(0,q.jsx)(F,{title:`With help`,children:(0,q.jsx)(X,{help:`Fill me`})}),(0,q.jsx)(F,{title:`Read only`,children:(0,q.jsx)(X,{readOnly:!0})})]}),Z.__docgenInfo={description:``,methods:[],displayName:`Variations`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=TagInput.stories-D44p3_yq.js.map