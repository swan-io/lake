import{s as se,c as a,r as x,b as d,g as A,t as B,e as O,j as e,V as H,B as R,I as q,S as C,i as c,L as g,n as le,o as ne}from"./Space-Bfex_hJx.js";import{r as u}from"./index-CBqU2yxZ.js";import{c as P}from"./commonStyles-t4XfA7cz.js";import{u as oe}from"./useDisclosure-CS9t68_Y.js";import{u as ie,P as N}from"./Pressable-BgOPYjbo.js";import{g as de}from"./a11y-DXvpDVrG.js";import{F as $}from"./Fill-CUI_szNE.js";import{P as ce}from"./Popover-Dgqw1V2K.js";import{b as ue}from"./_StoriesComponents-BGHZFReg.js";import{F as me}from"./index-C2BwA3tx.js";const t=se.create({normal:{backgroundColor:a.gray.contrast,borderColor:a.gray[100],borderRadius:x[6],borderWidth:1,justifyContent:"center",minWidth:100,paddingHorizontal:d[16],height:40},borderless:{justifyContent:"center",height:40,paddingHorizontal:d[16],borderRadius:x[6],transitionProperty:"background-color",transitionDuration:"150ms"},small:{paddingVertical:5},shadowed:{position:"absolute",opacity:0,left:0,top:0,width:"100%",height:"100%",borderRadius:x[6],boxShadow:A.tile,transitionDuration:"150ms",transitionProperty:"opacity"},hovered:{opacity:1},selectPlaceholder:B.placeholder,selectSmallPlaceholder:B.smallPlaceholder,selected:{color:a.gray[800]},inputDisabled:{backgroundColor:a.gray[50],borderColor:a.gray[50],cursor:"not-allowed"},listContent:{paddingVertical:12},item:{display:"flex",paddingHorizontal:d[24],paddingVertical:d[8],flexDirection:"row",alignItems:"center"},itemHighlighted:{backgroundColor:a.gray[50]},itemFocused:{boxShadow:`inset 0 0 0 1px ${a.gray[500]}`,borderRadius:x[4],outlineStyle:"none"},itemDisabled:{opacity:.5},selectListTitle:{paddingHorizontal:d[24],paddingVertical:d[12]},inputBorderlessDisabled:{backgroundColor:O.transparent},itemText:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},errorText:{paddingTop:d[4]},focusedInput:{borderColor:a.gray[500],boxShadow:A.tile,outlineStyle:"none"},focusedWithoutShadow:{boxShadow:"none"},errorContainer:{borderColor:a.negative[500]}}),pe=({title:V,items:m,valueStyle:_,size:D,color:K="current",disabled:h=!1,mode:y="normal",placeholder:M,readOnly:w=!1,id:U,matchReferenceWidth:G=!0,value:v,error:b,hideErrors:J=!1,icon:I,onValueChange:T,disabledItems:Q=[],PopoverFooter:X,style:Y},Z)=>{const E=u.useRef(null),F=u.useRef(null),j=u.useRef(void 0),S=u.useRef(void 0),L=u.useRef(Array(m.length)),ee=ie(E,Z),[p,{close:W,open:re}]=oe(!1),te=c(v),k=D==="small",i=m.find(r=>r.value===v),z=u.useCallback(r=>{var l;if(r.nativeEvent.key.length===1){r.nativeEvent.stopPropagation();const n=`${S.current??""}${r.nativeEvent.key.toLowerCase()}`;S.current=n;const s=m.findIndex(f=>f.name.toLowerCase().startsWith(n)),o=m[s];o!=null&&(p?F.current!=null&&((l=L.current[s])==null||l.focus()):T(o.value))}j.current!=null&&window.clearTimeout(j.current),j.current=window.setTimeout(()=>{S.current=void 0},300)},[m,T,p]),ae=(i==null?void 0:i.name)??v;return e.jsxs(H,{style:P.fill,children:[e.jsx(N,{id:U,ref:ee,"aria-haspopup":"listbox",role:"button","aria-expanded":p,disabled:w||h,style:({focused:r,hovered:l,pressed:n})=>[y==="normal"?t.normal:t.borderless,D==="small"&&t.small,(h||w)&&t.inputDisabled,(p||r)&&t.focusedInput,y==="borderless"&&[{backgroundColor:n?a.gray[200]:l?a.gray[100]:O.transparent},t.focusedWithoutShadow],y!=="borderless"&&b!=null&&t.errorContainer,(h||w)&&y==="borderless"&&t.inputBorderlessDisabled,Y],onPress:re,onKeyDown:z,"aria-errormessage":b,children:({hovered:r})=>e.jsxs(e.Fragment,{children:[y==="normal"&&e.jsx(H,{style:[t.shadowed,r&&t.hovered]}),e.jsxs(R,{direction:"row",justifyContent:"spaceBetween",alignItems:"center",children:[e.jsxs(R,{direction:"row",alignItems:"center",style:P.fill,children:[I&&e.jsxs(e.Fragment,{children:[e.jsx(q,{color:a[K].primary,name:I,size:k?16:18}),e.jsx(C,{width:8})]}),te?e.jsxs(R,{direction:"row",alignItems:"center",style:P.fill,children:[c(i==null?void 0:i.icon)&&e.jsxs(e.Fragment,{children:[i==null?void 0:i.icon,e.jsx(C,{width:12})]}),e.jsx(g,{color:a.gray[900],variant:k?"smallRegular":"regular",style:[t.itemText,_],children:ae})]}):e.jsx(g,{style:[t.itemText,t.selectPlaceholder,k&&t.selectSmallPlaceholder],children:M??" "})]}),e.jsx($,{minWidth:8}),!h&&e.jsx(q,{color:a.gray[900],name:p?"chevron-up-filled":"chevron-down-filled",size:16})]})]})}),!J&&e.jsx(g,{variant:"smallRegular",color:a.negative[500],style:t.errorText,children:b??" "}),e.jsxs(ce,{role:"listbox",matchReferenceMinWidth:G,onDismiss:W,referenceRef:E,returnFocus:!0,visible:p,children:[c(V)&&e.jsxs(e.Fragment,{children:[e.jsx(g,{variant:"semibold",color:a.gray[900],style:t.selectListTitle,children:V}),e.jsx(ue,{})]}),e.jsx(me,{role:"list",data:m,ref:F,contentContainerStyle:t.listContent,onKeyDown:r=>{var n;const{key:l}=r.nativeEvent;if((l==="ArrowDown"||l==="ArrowUp")&&(r.preventDefault(),c(r.currentTarget))){const s=de(r.currentTarget),o=s.indexOf(r.target),f=l==="ArrowDown"?o+1:o-1;(n=s[f])==null||n.focus()}},keyExtractor:(r,l)=>`select-item-${l}`,renderItem:({item:r,index:l})=>{const n=v===r.value,s=Q.find(({value:o})=>o===r.value);return e.jsx(le,{placement:"right",content:s==null?void 0:s.message,disabled:ne(s==null?void 0:s.message),children:e.jsxs(N,{ref:o=>L.current[l]=o,onKeyDown:z,disabled:c(s),style:({hovered:o,focused:f})=>[t.item,(o||n)&&t.itemHighlighted,f&&t.itemFocused,c(s)&&t.itemDisabled],role:"option","aria-selected":!0,onPress:()=>{T(r.value),W()},children:[c(r.icon)&&e.jsxs(e.Fragment,{children:[r.icon,e.jsx(C,{width:12})]}),e.jsx(g,{color:a.gray[900],numberOfLines:1,style:[t.itemText,n&&t.selected],children:r.name}),e.jsx($,{minWidth:12}),n&&e.jsx(q,{color:a.positive[500],name:"checkmark-filled",size:14})]})})}}),X]})]})},fe=u.forwardRef(pe);fe.__docgenInfo={description:"",methods:[],displayName:"LakeSelect",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  value: V;
  icon?: ReactNode;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"V",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}}]}}],raw:"Item<V>[]"},description:""},matchReferenceWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:'"normal" | "borderless"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"borderless"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},valueStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"TextStyle"}],raw:"StyleProp<TextStyle>"},description:""},PopoverFooter:{required:!1,tsType:{name:"ReactElement"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},description:""},icon:{required:!1,tsType:{name:"unknown"},description:""},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:"",defaultValue:{value:'"current"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"V"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: V) => void",signature:{arguments:[{type:{name:"V"},name:"value"}],return:{name:"void"}}},description:""},disabledItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: V; message?: string }",signature:{properties:[{key:"value",value:{name:"V",required:!0}},{key:"message",value:{name:"string",required:!1}}]}}],raw:"{ value: V; message?: string }[]"},description:"",defaultValue:{value:"[]",computed:!1}},hideErrors:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};export{fe as L};
//# sourceMappingURL=LakeSelect-CpIvcrj9.js.map
