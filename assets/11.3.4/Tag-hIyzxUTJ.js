import{j as e}from"./jsx-runtime-DT09rT5F.js";import{r as S}from"./index-DXKZGL6g.js";import{c as I,B as n,V as g,k as q,s as f,L as x,i as y,h as a,I as h,r}from"./ScrollView-DmQfgLfc.js";import{M as C}from"./index-BwY4x6i0.js";const t=f.create({container:{display:"inline-flex",flexDirection:"row",alignItems:"center",borderRadius:r[4],height:a[24]},border:{...f.absoluteFillObject,borderRadius:r[4],pointerEvents:"none"},icon:{aspectRatio:"1 / 1"},larger:{height:a[40]},label:{paddingHorizontal:a[8],alignSelf:"stretch",borderTopLeftRadius:r[4],borderBottomLeftRadius:r[4]},contents:{flexGrow:1,flexShrink:1},text:{paddingHorizontal:a[8],flexGrow:1,flexShrink:1,overflow:"hidden"},textWithIcon:{paddingLeft:0},textContent:{flexGrow:1,flexShrink:1},unselectable:{userSelect:"none"},dismiss:{alignSelf:"stretch",justifyContent:"center",alignItems:"center",aspectRatio:"1 / 1",borderTopRightRadius:r[4],borderBottomRightRadius:r[4]},dismissIcon:{transform:"translateX(-0.5px)"}}),L=({children:s,label:c,color:b="gray",size:o="small",icon:d,ariaLabel:v,onPressRemove:u,style:w})=>{const j=q(c),{primary:l,...m}=I[b],R=m[50],p=m[100],i=m[200];return e.jsx(n,{direction:"row",children:e.jsxs(g,{style:[t.container,o==="large"&&t.larger,{backgroundColor:R},w],children:[j&&e.jsx(n,{alignItems:"center",direction:"row",style:[t.label,{backgroundColor:p,borderColor:i}],children:e.jsx(x,{numberOfLines:1,variant:"smallMedium",style:t.unselectable,color:l,children:c})}),e.jsxs(n,{alignItems:"center",direction:"row","aria-label":v,style:t.contents,children:[y(d)?e.jsx(n,{style:[t.icon,{width:o==="large"?a[40]:a[24]}],alignItems:"center",justifyContent:"center",children:e.jsx(h,{name:d,color:l,size:16})}):null,s!=null?e.jsx(n,{direction:"row",alignItems:"center",style:[t.text,y(d)?t.textWithIcon:null],children:S.isValidElement(s)?s:e.jsx(x,{numberOfLines:1,variant:"smallMedium",color:l,style:t.textContent,children:s})}):null]}),u!=null?e.jsx(C,{role:"button",onPress:u,style:({hovered:T,pressed:k})=>[t.dismiss,{color:l,width:o==="large"?a[40]:a[24],boxShadow:`-1px 0 ${i}`},T&&{backgroundColor:p},k&&{backgroundColor:i}],children:e.jsx(h,{name:"dismiss-regular",color:l,size:14,style:t.dismissIcon})}):null,e.jsx(g,{style:[t.border,{boxShadow:`inset 0 0 0 1px ${i}`}]})]})})};L.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"union",raw:"ReactElement | ReactText | ReactFragment",elements:[{name:"ReactElement"},{name:"ReactText"},{name:"ReactFragment"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"unknown"},description:""},iconSize:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"small"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:"",defaultValue:{value:'"gray"',computed:!1}},onPressRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};export{L as T};
//# sourceMappingURL=Tag-hIyzxUTJ.js.map
