import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-DDa-F5jp.js";import{Bt as r,Ct as i,Dt as a,Et as o,Ft as s,G as c,J as l,K as u,St as d,U as f,W as p,Y as m,Z as h,_ as g,et as _,g as v,h as y,ht as b,o as x,pt as S,s as C,v as w,vt as T,wt as E}from"./ScrollView-DtvYaTvp.js";import{a as D,i as O,r as k,t as A}from"./Pressable-DLYTIvsO.js";import{n as j,t as M}from"./Tag-Bk9Cmi6g.js";import{n as N,t as P}from"./LakeTextInput-UA4DFNJP.js";import{n as F,r as I,t as L}from"./_StoriesComponents-DgW8fSPx.js";import{o as R,s as z}from"./validation-BNB3BkN0.js";var B,V,H,U,W,G=t((()=>{B=e(n()),o(),p(),T(),g(),O(),u(),v(),C(),k(),j(),V=_(),H=r.create({container:{flexGrow:1,flexShrink:1,flexDirection:`row`,alignItems:`stretch`},root:{flexDirection:`row`,display:`flex`,alignItems:`center`,flexWrap:`wrap`,borderRadius:d[6],backgroundColor:S.accented,borderColor:b.gray[100],borderWidth:1,paddingHorizontal:E[4],paddingTop:E[4],outlineStyle:`none`,cursor:`text`},focused:{borderColor:b.gray[500],boxShadow:i.tile},hovered:{boxShadow:i.tile},disabled:{backgroundColor:b.gray[50],borderColor:b.gray[50],color:b.gray[900],cursor:`not-allowed`},readOnly:{backgroundColor:b.gray[50],borderColor:b.gray[50],color:b.gray[900]},readOnlyError:{borderColor:`transparent`,paddingRight:E[32]},error:{borderColor:b.negative[400]},valid:{borderColor:b.positive[500]},input:{height:28,marginBottom:E[4],marginLeft:E[4],outlineStyle:`none`,flexGrow:1},tag:{marginRight:E[4],marginBottom:E[4],maxWidth:350},errorContainer:{paddingTop:E[4]}}),U=/,| /,W=({ref:e,id:t,validator:n=()=>!0,onFocus:r,onBlur:i,validateOnBlur:o=!0,values:u,onValuesChanged:d,readOnly:p=!1,disabled:g=!1,valid:_=!1,hideErrors:v=!1,placeholder:S,help:C,error:T})=>{let E=(0,B.useRef)(null),O=(0,B.useRef)(null),[k,j]=(0,B.useState)(!1),[N,P]=(0,B.useState)(!1),F=D(E,e);w(O,{onHoverStart:()=>P(!0),onHoverEnd:()=>P(!1)});let I=(0,B.useCallback)(e=>{d([...u,...e.filter(e=>!u.includes(e))]),E.current?.clear()},[u,d]),L=(0,B.useCallback)(e=>{let t=[...new Set(e.split(U).filter(e=>e.length>0))];(t.length>1||t[0]!==e)&&I(t)},[I]),R=(0,B.useCallback)(({nativeEvent:e})=>{g||p||f({key:e.key,input:E.current}).with({key:`Backspace`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{h(e.value)&&d(u.filter(e=>e!==u[u.length-1]))}).with({key:`Enter`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{m(e.value)&&I([e.value])})},[d,I,u,g,p]),z=(0,B.useCallback)(()=>{E.current?.focus()},[]),W=(0,B.useCallback)(e=>{j(!0),r?.(e)},[r]),G=(0,B.useCallback)(e=>{let t=E.current;t instanceof HTMLInputElement&&m(t.value)&&o&&I([t.value]),j(!1),i?.(e)},[I,i,o]);(0,B.useImperativeHandle)(e,()=>({pushPendingValue:()=>{let e=E.current;e instanceof HTMLInputElement&&m(e.value)&&o&&I([e.value])}}),[I,o]);let K=m(T);return(0,V.jsxs)(s,{children:[(0,V.jsxs)(A,{style:[H.root,p&&K&&H.readOnlyError,g&&H.disabled,p&&H.readOnly,k&&H.focused,K&&H.error,_&&H.valid,N&&H.hovered],"aria-errormessage":T,onPress:z,ref:O,children:[u.map((e,t)=>(0,V.jsx)(M,{onPressRemove:!p&&!g?()=>d(u.filter(t=>t!==e)):void 0,style:H.tag,color:n(e)?`gray`:`negative`,children:e},t)),(0,V.jsx)(a,{ref:F,id:t,style:[H.input,g&&H.disabled],onFocus:W,onBlur:G,"aria-disabled":g,onChangeText:L,onKeyPress:R,readOnly:p,placeholder:S})]}),!v&&(0,V.jsx)(y,{direction:`row`,style:H.errorContainer,children:l(T)?(0,V.jsx)(x,{variant:`smallRegular`,color:b.negative[500],children:T}):(0,V.jsx)(x,{variant:`smallRegular`,color:b.gray[500],children:C??` `})})]})},W.__docgenInfo={description:``,methods:[{name:`pushPendingValue`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`LakeTagInput`,props:{validator:{defaultValue:{value:`() => true`,computed:!1},required:!1},validateOnBlur:{defaultValue:{value:`true`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},valid:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrors:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),K,q,J,Y,X,Z,Q;t((()=>{G(),N(),K=e(n()),o(),R(),I(),q=_(),J=r.create({input:{maxWidth:400}}),Y={title:`Forms/TagInput`,component:P},X=e=>{let[t,n]=(0,K.useState)([`toto`,`dfghj@iouy.fr`]);return(0,q.jsx)(s,{style:J.input,children:(0,q.jsx)(W,{validator:z,onValuesChanged:n,values:t,...e})})},Z=()=>(0,q.jsxs)(L,{title:`Input variations`,children:[(0,q.jsx)(F,{title:`Default`,children:(0,q.jsx)(X,{})}),(0,q.jsx)(F,{title:`Disabled`,children:(0,q.jsx)(X,{disabled:!0})}),(0,q.jsx)(F,{title:`Error`,children:(0,q.jsx)(X,{error:`Nop`})}),(0,q.jsx)(F,{title:`Hidden errors`,children:(0,q.jsx)(X,{error:`Nop`,hideErrors:!0})}),(0,q.jsx)(F,{title:`Valid`,children:(0,q.jsx)(X,{valid:!0})}),(0,q.jsx)(F,{title:`With help`,children:(0,q.jsx)(X,{help:`Fill me`})}),(0,q.jsx)(F,{title:`Read only`,children:(0,q.jsx)(X,{readOnly:!0})})]}),Z.__docgenInfo={description:``,methods:[],displayName:`Variations`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=TagInput.stories-CXK__cM5.js.map