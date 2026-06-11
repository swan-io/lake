import{c as e,i as t}from"./preload-helper-C6cs2Kqh.js";import{o as n}from"./iframe-DGcd-kjM.js";import{B as r,F as i,L as a,M as o,N as s,P as c,R as l,St as u,U as d,_ as f,bt as p,dt as m,ft as h,g,gt as _,h as v,ht as y,it as b,nt as x,o as S,pt as C,s as w,st as T,v as E}from"./ScrollView-SaAeE8cO.js";import{a as D,i as O,r as k,t as A}from"./Pressable-DjPDlSvh.js";import{n as j,t as M}from"./Tag-B2GCLkoC.js";import{n as N,t as P}from"./LakeTextInput-BJ6AoHb5.js";import{n as F,r as I,t as L}from"./_StoriesComponents-BPgwKvbI.js";import{o as R,s as z}from"./validation-BgAce9kV.js";var B,V,H,U,W,G=t((()=>{B=e(n()),y(),s(),T(),f(),O(),i(),g(),w(),k(),j(),V=d(),H=u.create({container:{flexGrow:1,flexShrink:1,flexDirection:`row`,alignItems:`stretch`},root:{flexDirection:`row`,display:`flex`,alignItems:`center`,flexWrap:`wrap`,borderRadius:m[6],backgroundColor:x.accented,borderColor:b.gray[100],borderWidth:1,paddingHorizontal:C[4],paddingTop:C[4],outlineStyle:`none`,cursor:`text`},focused:{borderColor:b.gray[500],boxShadow:h.tile},hovered:{boxShadow:h.tile},disabled:{backgroundColor:b.gray[50],borderColor:b.gray[50],color:b.gray[900],cursor:`not-allowed`},readOnly:{backgroundColor:b.gray[50],borderColor:b.gray[50],color:b.gray[900]},readOnlyError:{borderColor:`transparent`,paddingRight:C[32]},error:{borderColor:b.negative[400]},valid:{borderColor:b.positive[500]},input:{height:28,marginBottom:C[4],marginLeft:C[4],outlineStyle:`none`,flexGrow:1},tag:{marginRight:C[4],marginBottom:C[4],maxWidth:350},errorContainer:{paddingTop:C[4]}}),U=/,| /,W=({ref:e,validator:t=()=>!0,onFocus:n,onBlur:i,validateOnBlur:s=!0,values:u,onValuesChanged:d,readOnly:f=!1,disabled:m=!1,valid:h=!1,hideErrors:g=!1,placeholder:y,help:x,error:C})=>{let w=(0,B.useRef)(null),T=(0,B.useRef)(null),[O,k]=(0,B.useState)(!1),[j,N]=(0,B.useState)(!1),P=D(w,e);E(T,{onHoverStart:()=>N(!0),onHoverEnd:()=>N(!1)});let F=(0,B.useCallback)(e=>{d([...u,...e.filter(e=>!u.includes(e))]),w.current?.clear()},[u,d]),I=(0,B.useCallback)(e=>{let t=[...new Set(e.split(U).filter(e=>e.length>0))];(t.length>1||t[0]!==e)&&F(t)},[F]),L=(0,B.useCallback)(({nativeEvent:e})=>{m||f||o({key:e.key,input:w.current}).with({key:`Backspace`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{r(e.value)&&d(u.filter(e=>e!==u[u.length-1]))}).with({key:`Enter`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{l(e.value)&&F([e.value])})},[d,F,u,m,f]),R=(0,B.useCallback)(()=>{w.current?.focus()},[]),z=(0,B.useCallback)(e=>{k(!0),n?.(e)},[n]),W=(0,B.useCallback)(e=>{let t=w.current;t instanceof HTMLInputElement&&l(t.value)&&s&&F([t.value]),k(!1),i?.(e)},[F,i,s]);(0,B.useImperativeHandle)(e,()=>({pushPendingValue:()=>{let e=w.current;e instanceof HTMLInputElement&&l(e.value)&&s&&F([e.value])}}),[F,s]);let G=l(C);return(0,V.jsxs)(p,{children:[(0,V.jsxs)(A,{style:[H.root,f&&G&&H.readOnlyError,m&&H.disabled,f&&H.readOnly,O&&H.focused,G&&H.error,h&&H.valid,j&&H.hovered],"aria-errormessage":C,onPress:R,ref:T,children:[u.map((e,n)=>(0,V.jsx)(M,{onPressRemove:!f&&!m?()=>d(u.filter(t=>t!==e)):void 0,style:H.tag,color:t(e)?`gray`:`negative`,children:e},n)),(0,V.jsx)(_,{ref:P,style:[H.input,m&&H.disabled],onFocus:z,onBlur:W,"aria-disabled":m,onChangeText:I,onKeyPress:L,readOnly:f,placeholder:y})]}),!g&&(0,V.jsx)(v,{direction:`row`,style:H.errorContainer,children:a(C)?(0,V.jsx)(S,{variant:`smallRegular`,color:b.negative[500],children:C}):(0,V.jsx)(S,{variant:`smallRegular`,color:b.gray[500],children:x??` `})})]})},W.__docgenInfo={description:``,methods:[{name:`pushPendingValue`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`LakeTagInput`,props:{validator:{defaultValue:{value:`() => true`,computed:!1},required:!1},validateOnBlur:{defaultValue:{value:`true`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},valid:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrors:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),K,q,J,Y,X,Z,Q;t((()=>{G(),N(),K=e(n()),y(),R(),I(),q=d(),J=u.create({input:{maxWidth:400}}),Y={title:`Forms/TagInput`,component:P},X=e=>{let[t,n]=(0,K.useState)([`toto`,`dfghj@iouy.fr`]);return(0,q.jsx)(p,{style:J.input,children:(0,q.jsx)(W,{validator:z,onValuesChanged:n,values:t,...e})})},Z=()=>(0,q.jsxs)(L,{title:`Input variations`,children:[(0,q.jsx)(F,{title:`Default`,children:(0,q.jsx)(X,{})}),(0,q.jsx)(F,{title:`Disabled`,children:(0,q.jsx)(X,{disabled:!0})}),(0,q.jsx)(F,{title:`Error`,children:(0,q.jsx)(X,{error:`Nop`})}),(0,q.jsx)(F,{title:`Hidden errors`,children:(0,q.jsx)(X,{error:`Nop`,hideErrors:!0})}),(0,q.jsx)(F,{title:`Valid`,children:(0,q.jsx)(X,{valid:!0})}),(0,q.jsx)(F,{title:`With help`,children:(0,q.jsx)(X,{help:`Fill me`})}),(0,q.jsx)(F,{title:`Read only`,children:(0,q.jsx)(X,{readOnly:!0})})]}),Z.__docgenInfo={description:``,methods:[],displayName:`Variations`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=TagInput.stories-D4aFvQyZ.js.map