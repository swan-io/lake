import{s as d,j as i,V as n,f as m}from"./ScrollView-CouMEPyK.js";import{r as y}from"./index-uCp2LrAq.js";const a=d.create({base:{flexDirection:"row",flexWrap:"wrap"},item:{flexShrink:1,width:"100%"}}),u=({children:l,horizontalSpace:e,itemWrapperStyle:p,numColumns:t=1,style:o,verticalSpace:r})=>i.jsx(n,{style:[a.base,o,t>1&&e&&{marginHorizontal:-(e/2)},r&&{marginVertical:-(r/2)}],children:y.Children.map(l,s=>m(s)?s:i.jsx(n,{style:[a.item,p,r&&{paddingVertical:r/2},t>1&&[{width:`${100/t}%`},e&&{paddingHorizontal:e/2}]],children:s}))});u.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},horizontalSpace:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof spacingValues)[number]"},description:""},itemWrapperStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},numColumns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},verticalSpace:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof spacingValues)[number]"},description:""}}};export{u as G};
//# sourceMappingURL=Grid-D-UFnjv9.js.map
