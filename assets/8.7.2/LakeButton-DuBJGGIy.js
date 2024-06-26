import{s as B,c as t,r as J,t as W,d as f,e as P,j as i,$ as K,f as D,I as F,b as V,S as I,L as M,B as Q,V as h,i as U}from"./ScrollView-CDd3NuTl.js";import{r as g}from"./index-uCp2LrAq.js";import{c as X}from"./commonStyles-t4XfA7cz.js";import{P as Y}from"./Pressable-pmCYH0N6.js";import{A as ee}from"./index-aaXJrpQQ.js";const e=B.create({base:{alignItems:"center",backgroundColor:t.gray[900],borderRadius:J[6],flexDirection:"row",flexShrink:0,height:48,minWidth:90,justifyContent:"center",paddingHorizontal:20,transitionDuration:"150ms",transitionProperty:"background-color, color"},grow:{flexGrow:1},iconOnly:{minWidth:48,width:48,paddingRight:0,paddingLeft:0},iconSmallOnly:{minWidth:40,width:40,paddingRight:0,paddingLeft:0},hiddenView:{position:"absolute",width:"100%",height:"100%",transitionDuration:"150ms",transitionProperty:"opacity",opacity:0},pressed:{opacity:.15,backgroundColor:t.gray[900]},small:{height:40,paddingLeft:16,paddingRight:16},withIconStart:{paddingRight:24,paddingLeft:26},withIconStartSmall:{paddingRight:19.5,paddingLeft:21.5},withIconEnd:{paddingRight:20,paddingLeft:24},withIconEndSmall:{paddingRight:20.5,paddingLeft:21.5},text:W.semibold,textSmall:W.smallSemibold,resetOpacity:{opacity:1},loaderContainer:{...B.absoluteFillObject,alignItems:"center",justifyContent:"center",transform:"translateZ(0px)"},group:{flexDirection:"row",alignItems:"stretch",paddingVertical:f[16]},pill:{width:10,height:10,borderRadius:5,borderWidth:2,borderColor:P.default,backgroundColor:t.negative[500],position:"absolute",top:-3,right:-3},vertical:{flexDirection:"column",height:"auto",paddingVertical:f[12]},verticalSmall:{paddingVertical:f[8]},hidden:{visibility:"hidden"}}),z=g.memo(g.forwardRef(({ariaControls:y,ariaExpanded:x,ariaLabel:m,children:l,color:a="gray",direction:T="row",disabled:o=!1,icon:w,grow:_=!1,iconPosition:C="start",loading:s=!1,mode:q="primary",onPress:A,size:L="large",iconSize:v=L==="small"?18:20,style:b,forceBackground:c=!1,href:k,hrefAttrs:G,pill:H=!1},Z)=>{const j=q==="primary",n=L==="small",p=T==="column",R=p?4:void 0,O=p?void 0:n?8:12,S=V(w),E=S&&C==="start",N=S&&C==="end",$=S&&U(l);return i.jsx(Y,{href:k,hrefAttrs:G,role:k!=null?"link":"button","aria-busy":s,"aria-disabled":o,"aria-controls":y,"aria-expanded":x,"aria-label":m,disabled:s||o,ref:Z,onPress:A,style:({hovered:r,pressed:d,focused:u})=>[e.base,n&&e.small,p&&[e.vertical,n&&e.verticalSmall],E&&n?e.withIconStartSmall:e.withIconStart,N&&(n?e.withIconEndSmall:e.withIconEnd),$&&(n?e.iconSmallOnly:e.iconOnly),o&&X.disabled,o&&c&&e.resetOpacity,_&&e.grow,K(q).with("primary",()=>({backgroundColor:a==="warning"?r?t[a][600]:t[a][500]:r?t[a].secondary:t[a].primary})).with("secondary",()=>({backgroundColor:d?t[a][100]:r?t[a][50]:c?P.accented:D.transparent,borderWidth:1,borderColor:o&&c?t[a][100]:r?t[a][600]:t[a][300]})).with("tertiary",()=>({backgroundColor:d?t[a][200]:r?t[a][100]:D.transparent})).exhaustive(),typeof b=="function"?b({hovered:r,pressed:d,focused:u}):b],children:({pressed:r,hovered:d})=>{const u=j?t[a].contrast:o&&c?t[a][300]:d||r?t[a][700]:t[a][600];return i.jsxs(i.Fragment,{children:[E&&i.jsxs(i.Fragment,{children:[i.jsx(F,{color:u,name:w,size:v,style:s&&e.hidden}),V(l)&&i.jsx(I,{height:R,width:O})]}),typeof l=="string"||typeof l=="number"?i.jsx(M,{numberOfLines:1,userSelect:"none",style:[n?e.textSmall:e.text,s&&e.hidden,{color:u}],children:l}):i.jsx(Q,{alignItems:"center",justifyContent:"center",style:[p&&e.vertical,s&&e.hidden],children:l}),N&&i.jsxs(i.Fragment,{children:[V(l)&&i.jsx(I,{height:R,width:O}),i.jsx(F,{color:u,name:w,size:v,style:s&&e.hidden})]}),s&&i.jsx(h,{style:e.loaderContainer,children:i.jsx(ee,{color:j?t[a].contrast:t[a].primary,size:v})}),j&&i.jsx(h,{style:[e.hiddenView,r&&e.pressed]}),H&&i.jsx(h,{style:e.pill})]})}})}));z.displayName="Button";const ae=0,te=({children:y,justifyContent:x="flex-start",paddingBottom:m=16})=>i.jsx(h,{style:[e.group,{justifyContent:x,paddingBottom:m===0?ae:f[m]}],children:g.Children.toArray(y).map((l,a)=>i.jsxs(g.Fragment,{children:[a>0?i.jsx(I,{width:16}):null,l]},a))});z.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{defaultValue:{value:'"gray"',computed:!1},required:!1},direction:{defaultValue:{value:'"row"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},grow:{defaultValue:{value:"false",computed:!1},required:!1},iconPosition:{defaultValue:{value:'"start"',computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},mode:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"large"',computed:!1},required:!1},iconSize:{defaultValue:{value:'size === "small" ? 18 : 20',computed:!1},required:!1},forceBackground:{defaultValue:{value:"false",computed:!1},required:!1},pill:{defaultValue:{value:"false",computed:!1},required:!1}}};te.__docgenInfo={description:"",methods:[],displayName:"LakeButtonGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},justifyContent:{required:!1,tsType:{name:'ViewStyle["justifyContent"]',raw:'ViewStyle["justifyContent"]'},description:"",defaultValue:{value:'"flex-start"',computed:!1}},paddingBottom:{required:!1,tsType:{name:"union",raw:"0 | Spacings",elements:[{name:"literal",value:"0"},{name:"union",raw:"keyof typeof spacings",elements:[{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"32"},{name:"literal",value:"40"},{name:"literal",value:"48"},{name:"literal",value:"72"},{name:"literal",value:"96"}]}]},description:"",defaultValue:{value:"16",computed:!1}}}};export{z as L,te as a};
//# sourceMappingURL=LakeButton-DuBJGGIy.js.map
