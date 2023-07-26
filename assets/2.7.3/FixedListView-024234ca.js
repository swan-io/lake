import{S as cl,e as ce,c as C,j as e,h as ee,V as r,a as y,L as B,i as h,F as kl,b as N,g as Ll,f as Q,s as je,r as A,n as ye}from"./Space-294dc0e7.js";import{r as a}from"./index-76fb7be0.js";import{R as be,B as Ke}from"./index-704795fc.js";import{v as El}from"./commonStyles-d52fedae.js";import{I as _e}from"./Icon-32362032.js";import{L as Il}from"./LakeTooltip-15a27db7.js";import{P as Ae}from"./Pressable-2a516de8.js";import{C as Hl}from"./index-ca925b5c.js";import{a as dl}from"./useMergeRefs-946e2a98.js";import{g as ml,f as Te,l as Ve,s as Tl}from"./array-a4405b3e.js";import{n as Ce}from"./function-30fe01e9.js";import{B as Vl}from"./BorderedIcon-6623fce5.js";import{L as ql}from"./LakeHeading-21345e41.js";import{v as Ml}from"./v4-a960c1f4.js";const p=cl.create({cellContainer:{display:"flex",flexGrow:1,flexDirection:"row",alignItems:"center"},balanceCellContainer:{width:"100%"},cell:{display:"flex",paddingHorizontal:ce[16],flexGrow:1,flexDirection:"row",alignItems:"center"},icon:{alignSelf:"stretch",alignItems:"center",justifyContent:"center",paddingHorizontal:ce[4]},iconContainer:{flexDirection:"row",alignSelf:"stretch",alignItems:"stretch",justifyContent:"center"},centeredCell:{justifyContent:"center"},endAlignedCell:{justifyContent:"flex-end"},regularText:{overflow:"hidden",textOverflow:"ellipsis",width:1,flexGrow:1,whiteSpace:"nowrap"},mediumText:{overflow:"hidden",textOverflow:"ellipsis",width:1,flexGrow:1,whiteSpace:"nowrap",flexDirection:"row",alignItems:"center"},colorPatch:{flexGrow:1},alternativeText:El,sortIcon:{transitionProperty:"transform",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},sortIconReversed:{transform:"rotate(-180deg)"},cellAction:{paddingVertical:ce[16],paddingHorizontal:ce[8]},underline:{boxShadow:"inset 0 -2px currentColor"},sortHorizontalBar:{position:"absolute",width:"100%",height:2,bottom:-10,backgroundColor:C.current[500],borderBottomColor:C.current[500]}}),Ye=({text:t,sort:n,justifyContent:i="flex-start",onPress:u})=>{const s=h(n)&&h(u);return e(Ae,{onPress:()=>{u==null||u(be(n).returnType().with("Desc",()=>"Asc").with("Asc",()=>"Desc").otherwise(()=>"Desc"))},disabled:ee(u),style:p.cellContainer,children:({hovered:m})=>e(r,{style:[p.cell,{justifyContent:i}],children:y(r,{children:[y(Ke,{direction:"row",alignItems:"center",children:[e(B,{numberOfLines:1,variant:"medium",color:s?C.current[500]:C.gray[900],style:{textAlign:be(i).with("flex-start",()=>"left").with("center",()=>"center").with("flex-end",()=>"right").exhaustive()},children:t}),h(u)?y(kl,{children:[e(N,{width:8}),e(Ke,{style:[p.sortIcon,n==="Asc"&&p.sortIconReversed],children:e(_e,{size:15,color:s?C.current[500]:C.gray[500],name:s?"arrow-down-filled":"chevron-up-down-regular"})})]}):null]}),s?e(r,{style:p.sortHorizontalBar}):m?e(r,{style:[p.sortHorizontalBar,{backgroundColor:C.gray[900]}]}):null]})})})},Ze=({isHovered:t,alternativeText:n,color:i})=>t?e(r,{style:[p.colorPatch,{backgroundColor:C[i].primary}],children:h(n)?e(B,{style:p.alternativeText,children:n}):null}):null,Je=({isHighlighted:t=!1,text:n})=>e(r,{style:p.cell,children:e(B,{numberOfLines:1,color:t?C.current.primary:C.gray[900],style:p.regularText,variant:"medium",children:n})}),Ue=({variant:t="regular",text:n,textAlign:i="left",color:u=C.gray[900]})=>e(r,{style:p.cell,children:e(B,{align:i,color:u,style:p.regularText,variant:t,children:n})}),Xe=({variant:t="regular",text:n,copyWording:i,copiedWording:u})=>{const[s,m]=a.useState("copy"),c=a.useCallback(w=>{w.preventDefault(),Hl.setString(n),m("copied")},[n]);return y(r,{style:p.cell,children:[e(Il,{placement:"top",onHide:()=>m("copy"),togglableOnFocus:!0,content:s==="copy"?i:u,containerStyle:p.iconContainer,children:e(Ae,{role:"button","aria-label":i,onPress:c,style:({hovered:w})=>[p.icon,w&&p.underline],children:({hovered:w})=>e(_e,{name:w?"copy-filled":"copy-regular",color:"currentColor",size:14})})}),e(N,{width:4}),e(B,{color:C.gray[900],style:p.regularText,variant:t,children:n})]})},Qe=({value:t,currency:n,originalValue:i,formatCurrency:u,textAlign:s="right"})=>y(r,{style:p.balanceCellContainer,children:[e(r,{style:p.cell,children:y(B,{align:s,color:C.gray[900],variant:"medium",style:[p.mediumText,{justifyContent:be(s).with("left",()=>"flex-start").with("center",()=>"center").with("right",()=>"flex-end").exhaustive()},t>0&&{color:C.positive.primary},t<0&&{color:C.negative.primary}],children:[t>0&&"+",u(t,n)]})}),h(i)&&i.currency!==n&&e(r,{style:p.cell,children:y(B,{style:p.mediumText,align:s,color:C.gray[500],variant:"smallRegular",children:[i.value>0&&"+",u(i.value,i.currency)]})})]}),el=({children:t,external:n=!1,onPress:i})=>y(r,{style:p.cell,children:[e(Ae,{style:({hovered:u})=>[p.icon,u&&p.underline],onPress:u=>{u.preventDefault(),i()},children:e(_e,{size:14,name:n?"open-regular":"arrow-right-filled"})}),e(N,{width:8}),e(B,{color:C.gray[900],variant:"medium",style:p.mediumText,children:t})]}),ll=({children:t})=>e(r,{style:p.cell,children:t}),tl=({children:t})=>e(r,{style:[p.cell,p.centeredCell],children:t}),rl=({children:t})=>e(r,{style:[p.cell,p.endAlignedCell],children:t}),al=({children:t})=>e(r,{style:p.cellAction,children:t});try{Ye.displayName="SimpleHeaderCell",Ye.__docgenInfo={description:"",displayName:"SimpleHeaderCell",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},justifyContent:{defaultValue:{value:"flex-start"},description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},sort:{defaultValue:null,description:"",name:"sort",required:!1,type:{name:"enum",value:[{value:'"Desc"'},{value:'"Asc"'}]}},onPress:{defaultValue:null,description:"",name:"onPress",required:!1,type:{name:"((direction: SortDirection) => void)"}}}}}catch{}try{Ze.displayName="ColorPatchCell",Ze.__docgenInfo={description:"",displayName:"ColorPatchCell",props:{isHovered:{defaultValue:null,description:"",name:"isHovered",required:!0,type:{name:"boolean"}},alternativeText:{defaultValue:null,description:"",name:"alternativeText",required:!1,type:{name:"string"}},color:{defaultValue:{value:"colors.gray[900]"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}}}}}catch{}try{Je.displayName="SimpleTitleCell",Je.__docgenInfo={description:"",displayName:"SimpleTitleCell",props:{isHighlighted:{defaultValue:{value:"false"},description:"",name:"isHighlighted",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}try{Ue.displayName="SimpleRegularTextCell",Ue.__docgenInfo={description:"",displayName:"SimpleRegularTextCell",props:{variant:{defaultValue:{value:"regular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"semibold"'},{value:'"medium"'},{value:'"regular"'},{value:'"light"'},{value:'"smallSemibold"'},{value:'"smallMedium"'},{value:'"smallRegular"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},textAlign:{defaultValue:{value:"right"},description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:{value:"colors.gray[900]"},description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}try{Xe.displayName="CopyableRegularTextCell",Xe.__docgenInfo={description:"",displayName:"CopyableRegularTextCell",props:{variant:{defaultValue:{value:"regular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"semibold"'},{value:'"medium"'},{value:'"regular"'},{value:'"light"'},{value:'"smallSemibold"'},{value:'"smallMedium"'},{value:'"smallRegular"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},copyWording:{defaultValue:null,description:"",name:"copyWording",required:!0,type:{name:"string"}},copiedWording:{defaultValue:null,description:"",name:"copiedWording",required:!0,type:{name:"string"}}}}}catch{}try{Qe.displayName="BalanceCell",Qe.__docgenInfo={description:"",displayName:"BalanceCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},currency:{defaultValue:null,description:"",name:"currency",required:!0,type:{name:"string"}},originalValue:{defaultValue:null,description:"",name:"originalValue",required:!1,type:{name:"{ value: number; currency: string; }"}},formatCurrency:{defaultValue:null,description:"",name:"formatCurrency",required:!0,type:{name:"(value: number, currency: string) => string"}},textAlign:{defaultValue:{value:"right"},description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}try{el.displayName="LinkCell",el.__docgenInfo={description:"",displayName:"LinkCell",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},external:{defaultValue:{value:"false"},description:"",name:"external",required:!1,type:{name:"boolean"}}}}}catch{}try{ll.displayName="StartAlignedCell",ll.__docgenInfo={description:"",displayName:"StartAlignedCell",props:{}}}catch{}try{tl.displayName="CenteredCell",tl.__docgenInfo={description:"",displayName:"CenteredCell",props:{}}}catch{}try{rl.displayName="EndAlignedCell",rl.__docgenInfo={description:"",displayName:"EndAlignedCell",props:{}}}catch{}try{al.displayName="CellAction",al.__docgenInfo={description:"",displayName:"CellAction",props:{}}}catch{}const le=10,we=20,l=cl.create({root:{height:1,alignSelf:"stretch",flexGrow:1},container:{height:1,alignSelf:"stretch",flexGrow:1},containerTile:{marginHorizontal:-le},contentContainer:{flexDirection:"row",alignItems:"stretch",flexGrow:1},scrollContentContainer:{flexGrow:1,flexDirection:"row",alignItems:"stretch"},centerColumnsContainer:{width:1,flexGrow:1,flexDirection:"column",alignItems:"stretch"},centerColumns:{flexGrow:1},centerColumnsContentContainer:{flexDirection:"column",flexGrow:1},stickyColumn:{flexGrow:0,zIndex:1},stickyColumnStartOverflow:{position:"absolute",top:0,bottom:0,right:"100%"},stickyColumnEndOverflow:{position:"absolute",top:0,bottom:0,left:"100%"},rowSegment:{position:"absolute",left:0,right:0,display:"flex",flexGrow:1,alignSelf:"stretch",flexDirection:"row",alignItems:"stretch",transitionProperty:"top",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out",overflow:"hidden"},headingSegment:{position:"sticky",top:0,flexDirection:"row",alignItems:"stretch",zIndex:2},segment:{flexDirection:"row",alignItems:"stretch",overflow:"hidden"},segmentOverflow:{overflow:"hidden",flexDirection:"row",alignItems:"stretch"},visibleGradient:{opacity:1},leftToRightGradient:{position:"absolute",left:0,top:0,height:"100%",width:10,backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0))",opacity:0,transition:"150ms ease-in-out opacity",pointerEvents:"none"},rightToLeftGradient:{position:"absolute",right:0,top:0,height:"100%",width:10,backgroundImage:"linear-gradient(to left, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0))",opacity:0,transition:"150ms ease-in-out opacity",pointerEvents:"none"},horizontalScrollbar:{position:"sticky",bottom:0,borderBottomWidth:5,borderBottomColor:Ll.transparent,flexGrow:0,height:we},cell:{flexDirection:"row",alignItems:"stretch"},evenRow:{backgroundColor:Q.accented},oddRow:{backgroundColor:Q.default},rowShadow:{boxShadow:je.tile},hoveredRowShadow:{boxShadow:je.tileHover},highlightedRow:{borderColor:C.current.primary,borderWidth:1},segmentHeaderCell:{display:"flex",flexDirection:"row",flexGrow:1,alignItems:"center"},rowBackground:{borderRadius:A[4],transitionProperty:"top",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},rowPlainBackground:{transitionProperty:"top",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},rowBackgroundContainer:{position:"absolute",left:0,right:0,display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"center",transitionProperty:"top",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},rowBackgroundContainerPlain:{left:-10,right:-10,boxShadow:`inset 0 -1px ${C.gray[100]}`},backgroundRows:{position:"absolute",left:le,right:le,top:0,bottom:0},placeholderRowContainer:{flexDirection:"row",alignItems:"center",position:"absolute",top:0,left:20,right:20,animationKeyframes:{"50%":{opacity:.6}},animationDuration:"2000ms",animationTimingFunction:"linear",animationIterationCount:"infinite"},placeholderRowContainerPlain:{left:10},placeholderRow:{height:14,width:"30%",backgroundColor:C.gray[200],borderRadius:A[6]},placeholderRowEnd:{flexGrow:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},smallPlaceholderRow:{width:"10%"},centerSegmentContainer:{flexGrow:1},rowLeftRadii:{borderTopLeftRadius:A[4],borderBottomLeftRadius:A[4]},rowRightRadii:{borderTopRightRadius:A[4],borderBottomRightRadius:A[4]},emptyListContainer:{position:"absolute",top:0,left:0,right:0,bottom:0,flexDirection:"column",alignItems:"center",justifyContent:"center",padding:ce[48],backgroundColor:Q.default},emptyList:{flexDirection:"column",alignItems:"center",justifyContent:"center"},loadingPlaceholder:{position:"absolute",left:0,right:0},topGradient:{height:30,position:"absolute",left:0,right:0,top:"100%",backgroundImage:`linear-gradient(to bottom, ${Q.default}, ${Q.defaultTransparent})`,opacity:0,transition:"200ms ease-in-out opacity",pointerEvents:"none"},visibleTopGradient:{opacity:1}}),Al=({absoluteIndex:t,id:n,isHovered:i,isHighlighted:u,top:s,rowHeight:m,rowVerticalSpacing:c,onMouseEnter:w,onMouseLeave:v,mode:x})=>{const T=a.useRef(null);return dl(T,{onHoverStart:()=>w(n),onHoverEnd:()=>v()}),e(r,{style:[l.rowBackgroundContainer,x==="plain"&&l.rowBackgroundContainerPlain,{top:s,paddingVertical:c/2}],ref:T,children:x==="tile"?e(r,{style:[l.rowBackground,i?l.hoveredRowShadow:l.rowShadow,u&&l.highlightedRow,t%2===0?l.evenRow:l.oddRow,{height:m}]}):e(r,{style:[l.rowPlainBackground,{height:m}]})})},Ne=a.memo(Al),Nl={start:"0",center:"1",end:"2"},Gl=({columns:t,item:n,style:i,absoluteIndex:u,viewId:s,segmentColumn:m,rowVerticalSpacing:c,width:w,id:v,isHovered:x,extraInfo:T,onMouseEnter:te,onMouseLeave:$,createRowWrapper:G,focusId:V,top:O,totalRowHeight:X,minWidth:re})=>{const W=a.useRef(null);dl(W,{onHoverStart:()=>te(v),onHoverEnd:()=>$()});const H=G({item:n,absoluteIndex:u,extraInfo:T});return a.cloneElement(H,{id:V,tabIndex:0,style:[l.rowSegment,{top:O,height:X,width:ee(re)?w:void 0,minWidth:re}]},e(r,{style:[l.segment,{width:w,paddingVertical:c/2},m==="center"&&l.centerSegmentContainer,m==="start"&&{borderTopLeftRadius:A[4],borderBottomLeftRadius:A[4]},m==="end"&&{borderTopRightRadius:A[4],borderBottomRightRadius:A[4]}],ref:W,"aria-hidden":!1,children:e(r,{style:[l.segmentOverflow,i],children:t.map(({id:z,width:j,renderCell:K},S)=>{const P=`${s}_${z}`,Y=String(u).padStart(10,"0"),q=String(S).padStart(10,"0"),ae=`${s}__Row_${Y}_Segment_${Nl[m]}_Cell_${q}`;return e(r,{style:[l.cell,{width:j}],"aria-describedby":P,id:ae,children:K({columnId:P,item:n,index:u,extraInfo:T,isHovered:x})},P)})})}))},Ie=a.memo(Gl),He=({columns:t,viewId:n,extraInfo:i,width:u})=>e(r,{style:[l.segment,{width:u}],children:t.map(({id:s,width:m,title:c,renderTitle:w})=>{const v=`${n}_${s}`;return e(r,{style:[l.segmentHeaderCell,{width:m}],id:v,children:w({title:c,extraInfo:i,id:s})},v)})}),nl=(t,n,i)=>{let u=n+i;for(;u>=0&&u<t.length;){const s=t[u];if(h(s)){const m=document.getElementById(s);if(h(m)){const c=ml(m,!1),w=i===-1?Ve(c):Te(c);if(h(w))return w}}u=u+i}},ol=[],il=0,ul=({data:t,mode:n="tile",keyExtractor:i,highlightedRowId:u,rowHeight:s,rowVerticalSpacing:m,horizontalPadding:c=le,headerBackgroundColor:w=Q.default,headerHeight:v,renderThreshold:x=1e3,stickedToStartColumns:T=ol,columns:te,stickedToEndColumns:$=ol,extraInfo:G,onEndReached:V,onEndReachedThresholdPx:O=200,getRowLink:X,renderEmptyList:re,loading:W})=>{const[H]=a.useState(()=>Ml()),z=a.useRef(null),j=a.useRef(null),K=a.useRef(null),S=s+m,P=t.length*S,Y=v+P,[{data:q,range:[ae,Ge]},xe]=a.useState({data:t,range:[0,20]}),De=a.useRef(null),Fe=a.useRef(null),[Be,pl]=a.useState(!1),[Oe,fl]=a.useState(!1),[gl,Re]=a.useState(!1),[vl,Se]=a.useState(!0),[We,ne]=a.useState(void 0),de=a.useRef(0),me=a.useRef(0),{stickedToStartColumns:E,columns:oe,stickedToEndColumns:I}=a.useMemo(()=>Oe?{stickedToStartColumns:[],columns:[...T,...te,...$],stickedToEndColumns:[]}:{stickedToStartColumns:T,columns:te,stickedToEndColumns:$},[T,te,$,Oe]),[ke,hl]=a.useState(!1),ie=a.useCallback(()=>{ne(void 0)},[]),Pe=a.useMemo(()=>T.reduce((o,{width:d})=>o+d,0),[T]),$e=a.useMemo(()=>$.reduce((o,{width:d})=>o+d,0),[$]),pe=a.useMemo(()=>E.reduce((o,{width:d})=>o+d,0),[E]),fe=a.useMemo(()=>I.reduce((o,{width:d})=>o+d,0),[I]),D=a.useMemo(()=>oe.reduce((o,{width:d})=>o+d,0),[oe]),ze=a.useMemo(()=>[E.length===0&&l.rowLeftRadii,I.length===0&&l.rowRightRadii],[E,I]),ge=a.useCallback(({item:o,absoluteIndex:d,extraInfo:b})=>{const g=X==null?void 0:X({item:o,index:d,extraInfo:b});return ee(g)?e(r,{}):g},[X]),[yl,wl,bl,Cl]=a.useMemo(()=>{const o=Math.max(0,Ge-ae),d=Array(o),b=Array(o),g=Array(o),L=Array(o);let k=-1;for(;++k<o;){const R=ae+k,_=q[R];if(ee(_))continue;const f=i(_,R),J=R*S,M=We===f,he=u===f,Ee=String(R).padStart(10,"0"),se=`${H}__Row_${Ee}`;d[k]=e(Ne,{mode:n,isHovered:M,isHighlighted:he,absoluteIndex:R,top:J,id:f,rowHeight:s,rowVerticalSpacing:m,onMouseEnter:ne,onMouseLeave:ie},f),E.length>0&&(b[k]=e(Ie,{createRowWrapper:ge,focusId:se,top:J,totalRowHeight:S,id:f,style:l.rowLeftRadii,onMouseEnter:ne,onMouseLeave:ie,segmentColumn:"start",columns:E,width:pe,item:_,absoluteIndex:R,rowVerticalSpacing:m,viewId:H,isHovered:M,extraInfo:G},f)),g[k]=e(Ie,{mode:n,createRowWrapper:ge,focusId:se,top:J,totalRowHeight:S,minWidth:D,id:f,style:ze,onMouseEnter:ne,onMouseLeave:ie,segmentColumn:"center",columns:oe,width:D,item:_,absoluteIndex:R,rowVerticalSpacing:m,viewId:H,isHovered:M,extraInfo:G},f),I.length>0&&(L[k]=e(Ie,{createRowWrapper:ge,focusId:se,top:J,totalRowHeight:S,id:f,style:l.rowLeftRadii,onMouseEnter:ne,onMouseLeave:ie,segmentColumn:"end",columns:I,width:fe,item:_,absoluteIndex:R,rowVerticalSpacing:m,viewId:H,isHovered:M,extraInfo:G},f))}return[d,b,g,L]},[q,ae,Ge,i,u,s,S,oe,I,E,H,pe,D,fe,We,m,G,ie,ze,ge,n]);a.useLayoutEffect(()=>{z.current instanceof Element&&z.current.setAttribute("data-hide-scrollbar",String(!0)),j.current instanceof Element&&j.current.setAttribute("data-hide-scrollbar",String(!0)),K.current instanceof Element&&K.current.setAttribute("data-force-scrollbar",String(!0))},[]);const F=a.useRef({initiator:"columns",date:0});a.useEffect(()=>{if(h(z.current)&&h(j.current)&&h(K.current)){const d=j.current,b=z.current,g=K.current,L=()=>{const _=Date.now();if(F.current.initiator==="columns"||_-F.current.date>500){const f=d.scrollLeft;Re(f>0),Se(d.scrollWidth-c*2>=f+d.clientWidth),b.scrollLeft=f,g.scrollLeft=f,F.current={initiator:"columns",date:_}}},k=()=>{const _=Date.now();if(F.current.initiator==="headers"||_-F.current.date>500){const f=b.scrollLeft;Re(f>0),Se(b.scrollWidth-c*2>=f+b.clientWidth),d.scrollLeft=f,g.scrollLeft=f,F.current={initiator:"headers",date:_}}},R=()=>{const _=Date.now();if(F.current.initiator==="scrollbar"||_-F.current.date>500){const f=g.scrollLeft;Re(f>0),Se(g.scrollWidth-c*2>=f+g.clientWidth),b.scrollLeft=f,d.scrollLeft=f,F.current={initiator:"scrollbar",date:_}}};return d.addEventListener("scroll",L,{passive:!0}),b.addEventListener("scroll",k,{passive:!0}),g.addEventListener("scroll",R,{passive:!0}),()=>{d.removeEventListener("scroll",L),b.removeEventListener("scroll",k),g.removeEventListener("scroll",R)}}},[c]);const _l=a.useCallback(o=>{var k,R;const d=o.nativeEvent.target,b=o.nativeEvent.currentTarget,g=d.closest(`[id^="${H}__Row"]`),L=g==null?void 0:g.id;if(o.nativeEvent.key==="Tab"&&h(g)){const _=ml(g,!1),f=Te(_),J=Ve(_),M=Array.from(b.querySelectorAll(`[id^="${H}__Row"]`),U=>U.id).sort(),he=Tl(M,L),Ee=ee(f)||f===d,se=ee(J)||J===d;if(Ee&&o.nativeEvent.shiftKey&&Te(M)!==L){const U=nl(M,he,-1);h(U)?(o.preventDefault(),U.focus()):(o.preventDefault(),(k=De.current)==null||k.focus())}if(se&&!o.nativeEvent.shiftKey&&Ve(M)!==L){const U=nl(M,he,1);h(U)?(o.preventDefault(),U.focus()):(o.preventDefault(),(R=Fe.current)==null||R.focus())}}},[H]);a.useEffect(()=>{const o=Math.max(0,Math.floor((de.current-x)/S)),d=Math.min(t.length,o+Math.ceil((me.current+x*2)/S));xe(b=>{const{data:g,range:[L,k]}=b;return L===o&&k===d&&g===t?b:{data:t,range:[o,d]}})},[t,x,S]);const xl=a.useCallback(({nativeEvent:{layout:{height:o,width:d}}})=>{me.current=o;const b=Math.max(0,Math.floor((de.current-x)/S)),g=Math.min(t.length,b+Math.ceil((o+x*2)/S));xe(L=>{const{data:k,range:[R,_]}=L;return R===b&&_===g&&k===t?L:{data:t,range:[b,g]}}),h(V)&&!Z.current&&o>=Y-O&&(Z.current=!0,V()),fl(d-(Pe+$e)<300)},[t,x,S,V,O,Y,Pe,$e]),Le=a.useRef(void 0),ue=a.useRef(null),Z=a.useRef(!1);a.useEffect(()=>{if(h(V)&&!Z.current&&me.current>=Y-O){Z.current=!0,V();return}Z.current=!1},[q,V,O,Y]);const Rl=a.useCallback(({nativeEvent:{contentOffset:{y:o},layoutMeasurement:{height:d},contentSize:{height:b}}})=>{hl(o>0),me.current=d,de.current=o,h(Le.current)&&clearTimeout(Le.current),ue.current instanceof HTMLElement&&(ue.current.style.pointerEvents="none"),Le.current=window.setTimeout(()=>{ue.current instanceof HTMLElement&&(ue.current.style.pointerEvents="auto")},100);const g=Math.max(0,Math.floor((de.current-x)/S)),L=Math.min(q.length,g+Math.ceil((d+x*2)/S));xe(k=>{const{data:R,range:[_,f]}=k;return _===g&&f===L&&R===R?k:{data:R,range:[g,L]}}),h(V)&&!Z.current&&o+d>=b-O&&(Z.current=!0,V())},[q.length,x,S,V,O]),Sl=a.useCallback(({nativeEvent:{layout:{width:o}}})=>{pl(D>o)},[D]),ve=h(W)&&W.isLoading;return y(r,{style:l.root,children:[e(r,{ref:De,tabIndex:0}),y(ye,{onKeyDown:_l,onLayout:xl,onScroll:Rl,scrollEventThrottle:32,style:[l.container,n==="tile"&&l.containerTile],contentContainerStyle:[l.contentContainer,{height:Y+we+(ve?W.count*(s+m):0)}],children:[e(r,{"aria-busy":ve,style:[l.loadingPlaceholder,{top:P,marginLeft:c*2,marginRight:c*2}],children:ve?be(n).with("tile",()=>e(qe,{count:W.count,rowHeight:s,rowVerticalSpacing:m,paddingHorizontal:0})).with("plain",()=>e(Me,{count:W.count,rowHeight:s,rowVerticalSpacing:m,paddingHorizontal:0})).exhaustive():null}),e(r,{style:[l.backgroundRows,{top:v}],children:yl}),y(r,{style:l.scrollContentContainer,ref:ue,children:[E.length>0?y(r,{style:[l.stickyColumn,{width:pe+c,paddingLeft:c}],children:[y(r,{style:[l.headingSegment,{height:v,backgroundColor:w}],children:[e(He,{columns:E,extraInfo:G,viewId:H,width:pe}),e(r,{style:[l.stickyColumnStartOverflow,{width:c,backgroundColor:w}]}),e(r,{style:[l.topGradient,ke&&l.visibleTopGradient]})]}),e(r,{style:{height:P},children:wl})]}):null,y(r,{style:[l.centerColumnsContainer,{paddingLeft:E.length===0?c:il,paddingRight:I.length===0?c:il}],children:[y(r,{style:[l.headingSegment,{height:v,backgroundColor:w}],children:[e(ye,{ref:z,horizontal:!0,onLayout:Sl,style:l.centerColumns,contentContainerStyle:{minWidth:D+(E.length===0?c:0)+(I.length===0?c:0)},children:e(He,{columns:oe,extraInfo:G,viewId:H,width:D})}),e(r,{style:[l.topGradient,ke&&l.visibleTopGradient]})]}),e(ye,{horizontal:!0,ref:j,style:l.centerColumns,contentContainerStyle:[l.centerColumnsContentContainer,{minWidth:D+(E.length===0?c:0)+(I.length===0?c:0)}],children:bl}),e(ye,{ref:K,horizontal:!0,style:l.horizontalScrollbar,contentContainerStyle:{minWidth:D+(E.length===0?c:0)+(I.length===0?c:0)}}),E.length>0&&Be?e(r,{style:[l.leftToRightGradient,{maxHeight:q.length*S,top:v,bottom:we+m/2},gl&&l.visibleGradient]}):null,I.length>0&&Be?e(r,{style:[l.rightToLeftGradient,{maxHeight:q.length*S,top:v,bottom:we+m/2},vl&&l.visibleGradient]}):null]}),I.length>0?y(r,{style:[l.stickyColumn,{width:fe+c,paddingRight:c}],children:[y(r,{style:[l.headingSegment,{height:v,backgroundColor:w}],children:[e(r,{style:[l.stickyColumnEndOverflow,{width:c,backgroundColor:w}]}),e(He,{columns:I,extraInfo:G,viewId:H,width:fe}),e(r,{style:[l.topGradient,ke&&l.visibleTopGradient]})]}),e(r,{style:{height:P},children:Cl})]}):null]})]}),q.length===0&&h(re)&&!ve?e(r,{style:l.emptyListContainer,children:re()}):null,e(r,{ref:Fe,tabIndex:0})]})},qe=({count:t,rowHeight:n,rowVerticalSpacing:i,groupHeaderHeight:u,headerHeight:s,paddingHorizontal:m=le})=>{const c=n+i;return y(r,{style:[l.container,l.containerTile,{paddingHorizontal:m}],children:[h(s)?e(r,{style:{height:s}}):null,h(u)?e(r,{style:{height:s}}):null,e(r,{children:Array.from({length:t},(w,v)=>{const x=v*c+i/2;return y(a.Fragment,{children:[e(Ne,{isHovered:!1,isHighlighted:!1,absoluteIndex:v,top:x,rowVerticalSpacing:i,id:String(v),rowHeight:n,onMouseEnter:Ce,onMouseLeave:Ce,mode:"tile"}),y(r,{style:[l.placeholderRowContainer,{top:x,height:c}],children:[e(r,{style:l.placeholderRow}),e(N,{width:32}),e(r,{style:[l.placeholderRow,l.smallPlaceholderRow]}),e(N,{width:32}),e(r,{style:l.placeholderRowEnd,children:e(r,{style:[l.placeholderRow,l.smallPlaceholderRow]})})]},String(v))]},String(v))})})]})},Me=({count:t,rowHeight:n,rowVerticalSpacing:i,groupHeaderHeight:u,headerHeight:s,paddingHorizontal:m=le})=>{const c=n+i;return y(r,{style:[l.container,{paddingHorizontal:m}],children:[h(s)?e(r,{style:{height:s}}):null,h(u)?e(r,{style:{height:s}}):null,e(r,{children:Array.from({length:t},(w,v)=>{const x=v*c+i/2;return y(a.Fragment,{children:[e(Ne,{isHovered:!1,isHighlighted:!1,absoluteIndex:v,top:x,rowVerticalSpacing:i,id:String(v),rowHeight:n,onMouseEnter:Ce,onMouseLeave:Ce,mode:"plain"}),y(r,{style:[l.placeholderRowContainer,l.placeholderRowContainerPlain,{top:x,height:c}],children:[e(r,{style:l.placeholderRow}),e(N,{width:32}),e(r,{style:[l.placeholderRow,l.smallPlaceholderRow]}),e(N,{width:32}),e(r,{style:l.placeholderRowEnd,children:e(r,{style:[l.placeholderRow,l.smallPlaceholderRow]})})]},String(v))]},String(v))})})]})},sl=({icon:t,borderedIcon:n=!1,title:i,subtitle:u,children:s})=>y(r,{style:l.emptyList,children:[n?e(Vl,{name:t}):e(_e,{name:t,size:96,color:C.current.primary}),e(N,{height:32}),h(i)&&e(ql,{level:3,variant:"h3",color:C.gray[700],align:"center",children:i}),e(N,{height:8}),h(u)&&e(B,{align:"center",children:u}),e(N,{height:8}),s]});try{ul.displayName="FixedListView",ul.__docgenInfo={description:"",displayName:"FixedListView",props:{mode:{defaultValue:{value:"tile"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"tile"'},{value:'"plain"'}]}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},keyExtractor:{defaultValue:null,description:"",name:"keyExtractor",required:!0,type:{name:"(item: T, index: number) => string"}},highlightedRowId:{defaultValue:null,description:"",name:"highlightedRowId",required:!1,type:{name:"string"}},headerBackgroundColor:{defaultValue:{value:"backgroundColor.default"},description:"",name:"headerBackgroundColor",required:!1,type:{name:"string"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"number"}},rowVerticalSpacing:{defaultValue:null,description:"",name:"rowVerticalSpacing",required:!0,type:{name:"number"}},horizontalPadding:{defaultValue:{value:"10"},description:"",name:"horizontalPadding",required:!1,type:{name:"number"}},extraInfo:{defaultValue:null,description:"",name:"extraInfo",required:!0,type:{name:"ExtraInfo"}},stickedToStartColumns:{defaultValue:null,description:"",name:"stickedToStartColumns",required:!1,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},stickedToEndColumns:{defaultValue:null,description:"",name:"stickedToEndColumns",required:!1,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},renderThreshold:{defaultValue:{value:"1000"},description:"",name:"renderThreshold",required:!1,type:{name:"number"}},onEndReached:{defaultValue:null,description:"",name:"onEndReached",required:!1,type:{name:"(() => void)"}},onEndReachedThresholdPx:{defaultValue:{value:"200"},description:"",name:"onEndReachedThresholdPx",required:!1,type:{name:"number"}},getRowLink:{defaultValue:null,description:"",name:"getRowLink",required:!1,type:{name:"((config: LinkConfig<T, ExtraInfo>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},renderEmptyList:{defaultValue:null,description:"",name:"renderEmptyList",required:!1,type:{name:"(() => ReactNode)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"{ isLoading: boolean; count: number; }"}}}}}catch{}try{qe.displayName="FixedListViewPlaceholder",qe.__docgenInfo={description:"",displayName:"FixedListViewPlaceholder",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"number"}},rowVerticalSpacing:{defaultValue:null,description:"",name:"rowVerticalSpacing",required:!0,type:{name:"number"}},groupHeaderHeight:{defaultValue:null,description:"",name:"groupHeaderHeight",required:!1,type:{name:"number"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!1,type:{name:"number"}},paddingHorizontal:{defaultValue:{value:"10"},description:"",name:"paddingHorizontal",required:!1,type:{name:"number"}}}}}catch{}try{Me.displayName="PlainListViewPlaceholder",Me.__docgenInfo={description:"",displayName:"PlainListViewPlaceholder",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"number"}},rowVerticalSpacing:{defaultValue:null,description:"",name:"rowVerticalSpacing",required:!0,type:{name:"number"}},groupHeaderHeight:{defaultValue:null,description:"",name:"groupHeaderHeight",required:!1,type:{name:"number"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!1,type:{name:"number"}},paddingHorizontal:{defaultValue:{value:"10"},description:"",name:"paddingHorizontal",required:!1,type:{name:"number"}}}}}catch{}try{sl.displayName="FixedListViewEmpty",sl.__docgenInfo={description:"",displayName:"FixedListViewEmpty",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"lake-building-bank"'},{value:'"lake-calendar-arrow-swap"'},{value:'"lake-card"'},{value:'"lake-card-filled"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"check-filled"'},{value:'"check-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-regular"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},borderedIcon:{defaultValue:{value:"false"},description:"",name:"borderedIcon",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}}}}}catch{}export{Ze as C,ul as F,Me as P,Ye as S,qe as a,Je as b,Ue as c};
//# sourceMappingURL=FixedListView-024234ca.js.map
