import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-BRHNB_95.js";import{B as r,F as i,L as a,M as o,N as s,P as c,R as l,U as u,_ as d,dt as f,ft as p,g as m,gt as h,h as g,ht as _,it as v,kt as y,nt as b,o as x,pt as S,s as C,st as w,v as T,wt as E}from"./ScrollView-BPgEBwS5.js";import{a as D,i as O,r as k,t as A}from"./Pressable-DWHNe5vu.js";import{n as j,t as M}from"./Tag-I7FtQh_6.js";import{n as N,t as P}from"./LakeTextInput-BvtcWbud.js";import{n as F,r as I,t as L}from"./_StoriesComponents-D5puCzTY.js";import{o as R,s as z}from"./validation-Gds_W6M2.js";var B,V,H,U,W,G=t((()=>{B=e(n()),_(),s(),w(),d(),O(),i(),m(),C(),k(),j(),V=u(),H=y.create({container:{flexGrow:1,flexShrink:1,flexDirection:`row`,alignItems:`stretch`},root:{flexDirection:`row`,display:`flex`,alignItems:`center`,flexWrap:`wrap`,borderRadius:f[6],backgroundColor:b.accented,borderColor:v.gray[100],borderWidth:1,paddingHorizontal:S[4],paddingTop:S[4],outlineStyle:`none`,cursor:`text`},focused:{borderColor:v.gray[500],boxShadow:p.tile},hovered:{boxShadow:p.tile},disabled:{backgroundColor:v.gray[50],borderColor:v.gray[50],color:v.gray[900],cursor:`not-allowed`},readOnly:{backgroundColor:v.gray[50],borderColor:v.gray[50],color:v.gray[900]},readOnlyError:{borderColor:`transparent`,paddingRight:S[32]},error:{borderColor:v.negative[400]},valid:{borderColor:v.positive[500]},input:{height:28,marginBottom:S[4],marginLeft:S[4],outlineStyle:`none`,flexGrow:1},tag:{marginRight:S[4],marginBottom:S[4],maxWidth:350},errorContainer:{paddingTop:S[4]}}),U=/,| /,W=({ref:e,validator:t=()=>!0,onFocus:n,onBlur:i,validateOnBlur:s=!0,values:u,onValuesChanged:d,readOnly:f=!1,disabled:p=!1,valid:m=!1,hideErrors:_=!1,placeholder:y,help:b,error:S})=>{let C=(0,B.useRef)(null),w=(0,B.useRef)(null),[O,k]=(0,B.useState)(!1),[j,N]=(0,B.useState)(!1),P=D(C,e);T(w,{onHoverStart:()=>N(!0),onHoverEnd:()=>N(!1)});let F=(0,B.useCallback)(e=>{d([...u,...e.filter(e=>!u.includes(e))]),C.current?.clear()},[u,d]),I=(0,B.useCallback)(e=>{let t=[...new Set(e.split(U).filter(e=>e.length>0))];(t.length>1||t[0]!==e)&&F(t)},[F]),L=(0,B.useCallback)(({nativeEvent:e})=>{p||f||o({key:e.key,input:C.current}).with({key:`Backspace`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{r(e.value)&&d(u.filter(e=>e!==u[u.length-1]))}).with({key:`Enter`,input:c.instanceOf(HTMLInputElement)},({input:e})=>{l(e.value)&&F([e.value])})},[d,F,u,p,f]),R=(0,B.useCallback)(()=>{C.current?.focus()},[]),z=(0,B.useCallback)(e=>{k(!0),n?.(e)},[n]),W=(0,B.useCallback)(e=>{let t=C.current;t instanceof HTMLInputElement&&l(t.value)&&s&&F([t.value]),k(!1),i?.(e)},[F,i,s]);(0,B.useImperativeHandle)(e,()=>({pushPendingValue:()=>{let e=C.current;e instanceof HTMLInputElement&&l(e.value)&&s&&F([e.value])}}),[F,s]);let G=l(S);return(0,V.jsxs)(E,{children:[(0,V.jsxs)(A,{style:[H.root,f&&G&&H.readOnlyError,p&&H.disabled,f&&H.readOnly,O&&H.focused,G&&H.error,m&&H.valid,j&&H.hovered],"aria-errormessage":S,onPress:R,ref:w,children:[u.map((e,n)=>(0,V.jsx)(M,{onPressRemove:!f&&!p?()=>d(u.filter(t=>t!==e)):void 0,style:H.tag,color:t(e)?`gray`:`negative`,children:e},n)),(0,V.jsx)(h,{ref:P,style:[H.input,p&&H.disabled],onFocus:z,onBlur:W,"aria-disabled":p,onChangeText:I,onKeyPress:L,readOnly:f,placeholder:y})]}),!_&&(0,V.jsx)(g,{direction:`row`,style:H.errorContainer,children:a(S)?(0,V.jsx)(x,{variant:`smallRegular`,color:v.negative[500],children:S}):(0,V.jsx)(x,{variant:`smallRegular`,color:v.gray[500],children:b??` `})})]})},W.__docgenInfo={description:``,methods:[{name:`pushPendingValue`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`LakeTagInput`,props:{validator:{defaultValue:{value:`() => true`,computed:!1},required:!1},validateOnBlur:{defaultValue:{value:`true`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},valid:{defaultValue:{value:`false`,computed:!1},required:!1},hideErrors:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),K,q,J,Y,X,Z,Q;t((()=>{G(),N(),K=e(n()),_(),R(),I(),q=u(),J=y.create({input:{maxWidth:400}}),Y={title:`Forms/TagInput`,component:P},X=e=>{let[t,n]=(0,K.useState)([`toto`,`dfghj@iouy.fr`]);return(0,q.jsx)(E,{style:J.input,children:(0,q.jsx)(W,{validator:z,onValuesChanged:n,values:t,...e})})},Z=()=>(0,q.jsxs)(L,{title:`Input variations`,children:[(0,q.jsx)(F,{title:`Default`,children:(0,q.jsx)(X,{})}),(0,q.jsx)(F,{title:`Disabled`,children:(0,q.jsx)(X,{disabled:!0})}),(0,q.jsx)(F,{title:`Error`,children:(0,q.jsx)(X,{error:`Nop`})}),(0,q.jsx)(F,{title:`Hidden errors`,children:(0,q.jsx)(X,{error:`Nop`,hideErrors:!0})}),(0,q.jsx)(F,{title:`Valid`,children:(0,q.jsx)(X,{valid:!0})}),(0,q.jsx)(F,{title:`With help`,children:(0,q.jsx)(X,{help:`Fill me`})}),(0,q.jsx)(F,{title:`Read only`,children:(0,q.jsx)(X,{readOnly:!0})})]}),Z.__docgenInfo={description:``,methods:[],displayName:`Variations`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=TagInput.stories-Bi3KnN3m.js.map