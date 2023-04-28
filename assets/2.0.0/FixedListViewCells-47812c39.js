import{S as il,d as B,o as Rl,e as Oe,c as _,r as G,s as ie,h as ee,a as e,V as r,i as h,j as b,k as ye,b as D,L as O,F as xl}from"./Space-131d2659.js";import{r as n}from"./index-f1f749bf.js";import{K as be,B as We}from"./index.module-1db6bb3b.js";import{u as ul}from"./useMergeRefs-66f03dce.js";import{g as sl,f as He,l as Te,s as Sl}from"./array-b3630b94.js";import{n as Ce}from"./function-841632b4.js";import{B as kl}from"./BorderedIcon-0a435f6a.js";import{I as _e}from"./Icon-73a40682.js";import{L as Ll}from"./LakeHeading-9bd5316b.js";import{v as El}from"./v4-a960c1f4.js";import{v as Il}from"./commonStyles-d52fedae.js";import{L as Hl}from"./LakeTooltip-617ea287.js";import{P as Me}from"./Pressable-9d717e71.js";import{C as Tl}from"./index-ca925b5c.js";const w=10,we=20,l=il.create({root:{height:1,alignSelf:"stretch",flexGrow:1},container:{height:1,alignSelf:"stretch",flexGrow:1},containerTile:{marginHorizontal:-w},contentContainer:{flexDirection:"row",alignItems:"stretch",flexGrow:1},scrollContentContainer:{flexGrow:1,flexDirection:"row",alignItems:"stretch"},centerColumnsContainer:{width:1,flexGrow:1,flexDirection:"column",alignItems:"stretch"},centerColumns:{flexGrow:1},centerColumnsContentContainer:{flexDirection:"column",flexGrow:1},stickyColumn:{flexGrow:0,zIndex:1},stickyColumnStartOverflow:{position:"absolute",top:0,bottom:0,right:"100%",width:w,backgroundColor:B.default},stickyColumnEndOverflow:{position:"absolute",top:0,bottom:0,left:"100%",width:w,backgroundColor:B.default},rowSegment:{position:"absolute",left:0,right:0,display:"flex",flexGrow:1,alignSelf:"stretch",flexDirection:"row",alignItems:"stretch",transitionProperty:"top",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out",overflow:"hidden"},headingSegment:{position:"sticky",top:0,flexDirection:"row",alignItems:"stretch",zIndex:2,backgroundColor:B.default},segment:{flexDirection:"row",alignItems:"stretch",overflow:"hidden"},segmentOverflow:{overflow:"hidden",flexDirection:"row",alignItems:"stretch"},visibleGradient:{opacity:1},leftToRightGradient:{position:"absolute",left:0,top:0,height:"100%",width:10,backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0))",opacity:0,transition:"150ms ease-in-out opacity",pointerEvents:"none"},rightToLeftGradient:{position:"absolute",right:0,top:0,height:"100%",width:10,backgroundImage:"linear-gradient(to left, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0))",opacity:0,transition:"150ms ease-in-out opacity",pointerEvents:"none"},horizontalScrollbar:{position:"sticky",bottom:0,borderBottomWidth:5,borderBottomColor:Rl.transparent,flexGrow:0,height:we},cell:{flexDirection:"row",alignItems:"stretch"},stickyRow:{},evenRow:{backgroundColor:B.accented},oddRow:{backgroundColor:B.default},rowShadow:{boxShadow:Oe.tile},hoveredRowShadow:{boxShadow:Oe.tileHover},highlightedRow:{borderColor:_.current.primary,borderWidth:1},segmentHeaderCell:{display:"flex",flexDirection:"row",flexGrow:1,alignItems:"center"},rowBackground:{borderRadius:G[4],transitionProperty:"top",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},rowPlainBackground:{transitionProperty:"top",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},rowBackgroundContainer:{position:"absolute",left:0,right:0,display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"center",transitionProperty:"top",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},rowBackgroundContainerPlain:{backgroundColor:B.default,left:-10,right:-10,boxShadow:`inset 0 -1px ${_.gray[100]}`},backgroundRows:{position:"absolute",left:w,right:w,top:0,bottom:0},placeholderRowContainer:{flexDirection:"row",alignItems:"center",position:"absolute",top:0,left:20,right:20,animationKeyframes:{"50%":{opacity:.6}},animationDuration:"2000ms",animationTimingFunction:"linear",animationIterationCount:"infinite"},placeholderRowContainerPlain:{left:10},placeholderRow:{height:14,width:"30%",backgroundColor:_.gray[200],borderRadius:G[6]},placeholderRowEnd:{flexGrow:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},smallPlaceholderRow:{width:"10%"},centerSegmentContainer:{flexGrow:1},rowLeftRadii:{borderTopLeftRadius:G[4],borderBottomLeftRadius:G[4]},rowRightRadii:{borderTopRightRadius:G[4],borderBottomRightRadius:G[4]},emptyListContainer:{position:"absolute",top:0,left:0,right:0,bottom:0,flexDirection:"column",alignItems:"center",justifyContent:"center",padding:ie[48],backgroundColor:B.default},emptyList:{flexDirection:"column",alignItems:"center",justifyContent:"center"},loadingPlaceholder:{position:"absolute",left:0,right:0},topGradient:{height:30,position:"absolute",left:0,right:0,top:"100%",backgroundImage:`linear-gradient(to bottom, ${B.default}, ${B.defaultTransparent})`,opacity:0,transition:"200ms ease-in-out opacity",pointerEvents:"none"},visibleTopGradient:{opacity:1}}),Vl=({absoluteIndex:t,id:a,isHovered:i,isHighlighted:u,top:s,rowHeight:c,rowVerticalSpacing:v,onMouseEnter:f,onMouseLeave:y,mode:E})=>{const V=n.useRef(null);return ul(V,{onHoverStart:()=>f(a),onHoverEnd:()=>y()}),e(r,{style:[l.rowBackgroundContainer,E==="plain"&&l.rowBackgroundContainerPlain,{top:s,paddingVertical:v/2}],ref:V,children:E==="tile"?e(r,{style:[l.rowBackground,i?l.hoveredRowShadow:l.rowShadow,u&&l.highlightedRow,t%2===0?l.evenRow:l.oddRow,{height:c}]}):e(r,{style:[l.rowPlainBackground,{height:c}]})})},Ae=n.memo(Vl),ql={start:"0",center:"1",end:"2"},Ml=({columns:t,item:a,style:i,absoluteIndex:u,viewId:s,segmentColumn:c,rowVerticalSpacing:v,width:f,id:y,isHovered:E,extraInfo:V,onMouseEnter:P,onMouseLeave:q,createRowWrapper:W,focusId:Q,top:ue,totalRowHeight:j,minWidth:I})=>{const $=n.useRef(null);ul($,{onHoverStart:()=>P(y),onHoverEnd:()=>q()});const K=W({item:a,absoluteIndex:u,extraInfo:V});return n.cloneElement(K,{id:Q,tabIndex:0,style:[l.rowSegment,{top:ue,height:j,width:ee(I)?f:void 0,minWidth:I}]},e(r,{style:[l.segment,{width:f,paddingVertical:v/2},c==="center"&&l.centerSegmentContainer,c==="start"&&{borderTopLeftRadius:G[4],borderBottomLeftRadius:G[4]},c==="end"&&{borderTopRightRadius:G[4],borderBottomRightRadius:G[4]}],ref:$,"aria-hidden":!1,children:e(r,{style:[l.segmentOverflow,i],children:t.map(({id:Y,width:S,renderCell:M},A)=>{const Z=`${s}_${Y}`,se=String(u).padStart(10,"0"),le=String(A).padStart(10,"0"),de=`${s}__Row_${se}_Segment_${ql[c]}_Cell_${le}`;return e(r,{style:[l.cell,{width:S}],"aria-describedby":Z,id:de,children:M({columnId:Z,item:a,index:u,extraInfo:V,isHovered:E})},Z)})})}))},Ee=n.memo(Ml),Ie=({columns:t,viewId:a,extraInfo:i,width:u})=>e(r,{style:[l.segment,{width:u}],children:t.map(({id:s,width:c,title:v,renderTitle:f})=>{const y=`${a}_${s}`;return e(r,{style:[l.segmentHeaderCell,{width:c}],id:y,children:f({title:v,extraInfo:i,id:s})},y)})}),$e=(t,a,i)=>{let u=a+i;for(;u>=0&&u<t.length;){const s=t[u];if(h(s)){const c=document.getElementById(s);if(h(c)){const v=sl(c,!1),f=i===-1?Te(v):He(v);if(h(f))return f}}u=u+i}},je=[],Ke=0,Ye=({data:t,mode:a="tile",keyExtractor:i,highlightedRowId:u,rowHeight:s,rowVerticalSpacing:c,headerHeight:v,renderThreshold:f=1e3,stickedToStartColumns:y=je,columns:E,stickedToEndColumns:V=je,extraInfo:P,onEndReached:q,onEndReachedThresholdPx:W=200,getRowLink:Q,renderEmptyList:ue,loading:j})=>{const[I]=n.useState(()=>El()),$=n.useRef(null),K=n.useRef(null),Y=n.useRef(null),S=s+c,M=t.length*S+v,[{data:A,range:[Z,se]},le]=n.useState({data:t,range:[0,20]}),de=n.useRef(null),Ne=n.useRef(null),[Ge,dl]=n.useState(!1),[De,cl]=n.useState(!1),[ml,Re]=n.useState(!1),[pl,xe]=n.useState(!0),[Pe,te]=n.useState(void 0),ce=n.useRef(0),me=n.useRef(0),{stickedToStartColumns:H,columns:re,stickedToEndColumns:T}=n.useMemo(()=>De?{stickedToStartColumns:[],columns:[...y,...E,...V],stickedToEndColumns:[]}:{stickedToStartColumns:y,columns:E,stickedToEndColumns:V},[y,E,V,De]),[Se,gl]=n.useState(!1),ne=n.useCallback(()=>{te(void 0)},[]),ze=n.useMemo(()=>y.reduce((o,{width:d})=>o+d,0),[y]),Fe=n.useMemo(()=>V.reduce((o,{width:d})=>o+d,0),[V]),pe=n.useMemo(()=>H.reduce((o,{width:d})=>o+d,0),[H]),ge=n.useMemo(()=>T.reduce((o,{width:d})=>o+d,0),[T]),z=n.useMemo(()=>re.reduce((o,{width:d})=>o+d,0),[re]),Be=n.useMemo(()=>[H.length===0&&l.rowLeftRadii,T.length===0&&l.rowRightRadii],[H,T]),fe=n.useCallback(({item:o,absoluteIndex:d,extraInfo:C})=>{const g=Q==null?void 0:Q({item:o,index:d,extraInfo:C});return ee(g)?e(r,{}):g},[Q]),[fl,hl,vl,yl]=n.useMemo(()=>{const o=Math.max(0,se-Z),d=Array(o),C=Array(o),g=Array(o),L=Array(o);let k=-1;for(;++k<o;){const x=Z+k,R=A[x];if(ee(R))continue;const p=i(R,x),U=x*S,N=Pe===p,ve=u===p,Le=String(x).padStart(10,"0"),oe=`${I}__Row_${Le}`;d[k]=e(Ae,{mode:a,isHovered:N,isHighlighted:ve,absoluteIndex:x,top:U,id:p,rowHeight:s,rowVerticalSpacing:c,onMouseEnter:te,onMouseLeave:ne},p),H.length>0&&(C[k]=e(Ee,{createRowWrapper:fe,focusId:oe,top:U,totalRowHeight:S,id:p,style:l.rowLeftRadii,onMouseEnter:te,onMouseLeave:ne,segmentColumn:"start",columns:H,width:pe,item:R,absoluteIndex:x,rowVerticalSpacing:c,viewId:I,isHovered:N,extraInfo:P},p)),g[k]=e(Ee,{mode:a,createRowWrapper:fe,focusId:oe,top:U,totalRowHeight:S,minWidth:z,id:p,style:Be,onMouseEnter:te,onMouseLeave:ne,segmentColumn:"center",columns:re,width:z,item:R,absoluteIndex:x,rowVerticalSpacing:c,viewId:I,isHovered:N,extraInfo:P},p),T.length>0&&(L[k]=e(Ee,{createRowWrapper:fe,focusId:oe,top:U,totalRowHeight:S,id:p,style:l.rowLeftRadii,onMouseEnter:te,onMouseLeave:ne,segmentColumn:"end",columns:T,width:ge,item:R,absoluteIndex:x,rowVerticalSpacing:c,viewId:I,isHovered:N,extraInfo:P},p))}return[d,C,g,L]},[A,Z,se,i,u,s,S,re,T,H,I,pe,z,ge,Pe,c,P,ne,Be,fe,a]);n.useLayoutEffect(()=>{$.current instanceof Element&&$.current.setAttribute("data-hide-scrollbar",String(!0)),K.current instanceof Element&&K.current.setAttribute("data-hide-scrollbar",String(!0)),Y.current instanceof Element&&Y.current.setAttribute("data-force-scrollbar",String(!0))},[]);const F=n.useRef({initiator:"columns",date:0});n.useEffect(()=>{if(h($.current)&&h(K.current)&&h(Y.current)){const d=K.current,C=$.current,g=Y.current,L=()=>{const R=Date.now();if(F.current.initiator==="columns"||R-F.current.date>500){const p=d.scrollLeft;Re(p>0),xe(d.scrollWidth-w*2>=p+d.clientWidth),C.scrollLeft=p,g.scrollLeft=p,F.current={initiator:"columns",date:R}}},k=()=>{const R=Date.now();if(F.current.initiator==="headers"||R-F.current.date>500){const p=C.scrollLeft;Re(p>0),xe(C.scrollWidth-w*2>=p+C.clientWidth),d.scrollLeft=p,g.scrollLeft=p,F.current={initiator:"headers",date:R}}},x=()=>{const R=Date.now();if(F.current.initiator==="scrollbar"||R-F.current.date>500){const p=g.scrollLeft;Re(p>0),xe(g.scrollWidth-w*2>=p+g.clientWidth),C.scrollLeft=p,d.scrollLeft=p,F.current={initiator:"scrollbar",date:R}}};return d.addEventListener("scroll",L,{passive:!0}),C.addEventListener("scroll",k,{passive:!0}),g.addEventListener("scroll",x,{passive:!0}),()=>{d.removeEventListener("scroll",L),C.removeEventListener("scroll",k),g.removeEventListener("scroll",x)}}},[]);const wl=n.useCallback(o=>{var k,x;const d=o.nativeEvent.target,C=o.nativeEvent.currentTarget,g=d.closest(`[id^="${I}__Row"]`),L=g==null?void 0:g.id;if(o.nativeEvent.key==="Tab"&&h(g)){const R=sl(g,!1),p=He(R),U=Te(R),N=Array.from(C.querySelectorAll(`[id^="${I}__Row"]`),X=>X.id).sort(),ve=Sl(N,L),Le=ee(p)||p===d,oe=ee(U)||U===d;if(Le&&o.nativeEvent.shiftKey&&He(N)!==L){const X=$e(N,ve,-1);h(X)?(o.preventDefault(),X.focus()):(o.preventDefault(),(k=de.current)==null||k.focus())}if(oe&&!o.nativeEvent.shiftKey&&Te(N)!==L){const X=$e(N,ve,1);h(X)?(o.preventDefault(),X.focus()):(o.preventDefault(),(x=Ne.current)==null||x.focus())}}},[I]);n.useEffect(()=>{const o=Math.max(0,Math.floor((ce.current-f)/S)),d=Math.min(t.length,o+Math.ceil((me.current+f*2)/S));le(C=>{const{data:g,range:[L,k]}=C;return L===o&&k===d&&g===t?C:{data:t,range:[o,d]}})},[t,f,S]);const bl=n.useCallback(({nativeEvent:{layout:{height:o,width:d}}})=>{me.current=o;const C=Math.max(0,Math.floor((ce.current-f)/S)),g=Math.min(t.length,C+Math.ceil((o+f*2)/S));le(L=>{const{data:k,range:[x,R]}=L;return x===C&&R===g&&k===t?L:{data:t,range:[C,g]}}),h(q)&&!J.current&&o>=M-W&&(J.current=!0,q()),cl(d-(ze+Fe)<300)},[t,f,S,q,W,M,ze,Fe]),ke=n.useRef(void 0),ae=n.useRef(null),J=n.useRef(!1);n.useEffect(()=>{if(h(q)&&!J.current&&me.current>=M-W){J.current=!0,q();return}J.current=!1},[A,q,W,M]);const Cl=n.useCallback(({nativeEvent:{contentOffset:{y:o},layoutMeasurement:{height:d},contentSize:{height:C}}})=>{gl(o>0),me.current=d,ce.current=o,h(ke.current)&&clearTimeout(ke.current),ae.current instanceof HTMLElement&&(ae.current.style.pointerEvents="none"),ke.current=window.setTimeout(()=>{ae.current instanceof HTMLElement&&(ae.current.style.pointerEvents="auto")},100);const g=Math.max(0,Math.floor((ce.current-f)/S)),L=Math.min(A.length,g+Math.ceil((d+f*2)/S));le(k=>{const{data:x,range:[R,p]}=k;return R===g&&p===L&&x===x?k:{data:x,range:[g,L]}}),h(q)&&!J.current&&o+d>=C-W&&(J.current=!0,q())},[A.length,f,S,q,W]),_l=n.useCallback(({nativeEvent:{layout:{width:o}}})=>{dl(z>o)},[z]),he=h(j)&&j.isLoading;return b(r,{style:l.root,children:[e(r,{ref:de,tabIndex:0}),b(ye,{onKeyDown:wl,onLayout:bl,onScroll:Cl,scrollEventThrottle:32,style:[l.container,a==="tile"&&l.containerTile],contentContainerStyle:[l.contentContainer,{height:M+we+(he?j.count*(s+c):0)}],children:[e(r,{"aria-busy":he,style:[l.loadingPlaceholder,{top:M,marginLeft:w*2,marginRight:w*2}],children:he?be(a).with("tile",()=>e(Ve,{count:j.count,rowHeight:s,rowVerticalSpacing:c,paddingHorizontal:0})).with("plain",()=>e(qe,{count:j.count,rowHeight:s,rowVerticalSpacing:c,paddingHorizontal:0})).exhaustive():null}),e(r,{style:[l.backgroundRows,{top:v}],children:fl}),b(r,{style:l.scrollContentContainer,ref:ae,children:[H.length>0?b(r,{style:[l.stickyColumn,{width:pe+w,paddingLeft:w}],children:[b(r,{style:[l.headingSegment,{height:v}],children:[e(Ie,{columns:H,extraInfo:P,viewId:I,width:pe}),e(r,{style:l.stickyColumnStartOverflow}),e(r,{style:[l.topGradient,Se&&l.visibleTopGradient]})]}),e(r,{style:[l.stickyRow,{height:M}],children:hl})]}):null,b(r,{style:[l.centerColumnsContainer,{paddingLeft:H.length===0?w:Ke,paddingRight:T.length===0?w:Ke}],children:[b(r,{style:[l.headingSegment,{height:v}],children:[e(ye,{ref:$,horizontal:!0,onLayout:_l,style:l.centerColumns,contentContainerStyle:{minWidth:z+(H.length===0?w:0)+(T.length===0?w:0)},children:e(Ie,{columns:re,extraInfo:P,viewId:I,width:z})}),e(r,{style:[l.topGradient,Se&&l.visibleTopGradient]})]}),e(ye,{horizontal:!0,ref:K,style:l.centerColumns,contentContainerStyle:[l.centerColumnsContentContainer,{minWidth:z+(H.length===0?w:0)+(T.length===0?w:0)}],children:vl}),e(ye,{ref:Y,horizontal:!0,style:l.horizontalScrollbar,contentContainerStyle:{minWidth:z+(H.length===0?w:0)+(T.length===0?w:0)}}),H.length>0&&Ge?e(r,{style:[l.leftToRightGradient,{maxHeight:A.length*S,top:v,bottom:we+c/2},ml&&l.visibleGradient]}):null,T.length>0&&Ge?e(r,{style:[l.rightToLeftGradient,{maxHeight:A.length*S,top:v,bottom:we+c/2},pl&&l.visibleGradient]}):null]}),T.length>0?b(r,{style:[l.stickyColumn,{width:ge+w,paddingRight:w}],children:[b(r,{style:[l.headingSegment,{height:v}],children:[e(r,{style:l.stickyColumnEndOverflow}),e(Ie,{columns:T,extraInfo:P,viewId:I,width:ge}),e(r,{style:[l.topGradient,Se&&l.visibleTopGradient]})]}),e(r,{style:[l.stickyRow,{height:M}],children:yl})]}):null]})]}),A.length===0&&h(ue)&&!he?e(r,{style:l.emptyListContainer,children:ue()}):null,e(r,{ref:Ne,tabIndex:0})]})},Ve=({count:t,rowHeight:a,rowVerticalSpacing:i,groupHeaderHeight:u,headerHeight:s,paddingHorizontal:c=w})=>{const v=a+i;return b(r,{style:[l.container,l.containerTile,{paddingHorizontal:c}],children:[h(s)?e(r,{style:{height:s}}):null,h(u)?e(r,{style:{height:s}}):null,e(r,{children:Array.from({length:t},(f,y)=>{const E=y*v+i/2;return b(n.Fragment,{children:[e(Ae,{isHovered:!1,isHighlighted:!1,absoluteIndex:y,top:E,rowVerticalSpacing:i,id:String(y),rowHeight:a,onMouseEnter:Ce,onMouseLeave:Ce,mode:"tile"}),b(r,{style:[l.placeholderRowContainer,{top:E,height:v}],children:[e(r,{style:l.placeholderRow}),e(D,{width:32}),e(r,{style:[l.placeholderRow,l.smallPlaceholderRow]}),e(D,{width:32}),e(r,{style:l.placeholderRowEnd,children:e(r,{style:[l.placeholderRow,l.smallPlaceholderRow]})})]},String(y))]},String(y))})})]})},qe=({count:t,rowHeight:a,rowVerticalSpacing:i,groupHeaderHeight:u,headerHeight:s,paddingHorizontal:c=w})=>{const v=a+i;return b(r,{style:[l.container,{paddingHorizontal:c}],children:[h(s)?e(r,{style:{height:s}}):null,h(u)?e(r,{style:{height:s}}):null,e(r,{children:Array.from({length:t},(f,y)=>{const E=y*v+i/2;return b(n.Fragment,{children:[e(Ae,{isHovered:!1,isHighlighted:!1,absoluteIndex:y,top:E,rowVerticalSpacing:i,id:String(y),rowHeight:a,onMouseEnter:Ce,onMouseLeave:Ce,mode:"plain"}),b(r,{style:[l.placeholderRowContainer,l.placeholderRowContainerPlain,{top:E,height:v}],children:[e(r,{style:l.placeholderRow}),e(D,{width:32}),e(r,{style:[l.placeholderRow,l.smallPlaceholderRow]}),e(D,{width:32}),e(r,{style:l.placeholderRowEnd,children:e(r,{style:[l.placeholderRow,l.smallPlaceholderRow]})})]},String(y))]},String(y))})})]})},Ze=({icon:t,borderedIcon:a=!1,title:i,subtitle:u,children:s})=>b(r,{style:l.emptyList,children:[a?e(kl,{name:t}):e(_e,{name:t,size:96,color:_.current.primary}),e(D,{height:32}),h(i)&&e(Ll,{level:3,variant:"h3",color:_.gray[700],align:"center",children:i}),e(D,{height:8}),h(u)&&e(O,{align:"center",children:u}),e(D,{height:8}),s]});try{Ye.displayName="FixedListView",Ye.__docgenInfo={description:"",displayName:"FixedListView",props:{mode:{defaultValue:{value:"tile"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"tile"'},{value:'"plain"'}]}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},keyExtractor:{defaultValue:null,description:"",name:"keyExtractor",required:!0,type:{name:"(item: T, index: number) => string"}},highlightedRowId:{defaultValue:null,description:"",name:"highlightedRowId",required:!1,type:{name:"string"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"number"}},rowVerticalSpacing:{defaultValue:null,description:"",name:"rowVerticalSpacing",required:!0,type:{name:"number"}},extraInfo:{defaultValue:null,description:"",name:"extraInfo",required:!0,type:{name:"ExtraInfo"}},stickedToStartColumns:{defaultValue:null,description:"",name:"stickedToStartColumns",required:!1,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},stickedToEndColumns:{defaultValue:null,description:"",name:"stickedToEndColumns",required:!1,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},renderThreshold:{defaultValue:{value:"1000"},description:"",name:"renderThreshold",required:!1,type:{name:"number"}},onEndReached:{defaultValue:null,description:"",name:"onEndReached",required:!1,type:{name:"(() => void)"}},onEndReachedThresholdPx:{defaultValue:{value:"200"},description:"",name:"onEndReachedThresholdPx",required:!1,type:{name:"number"}},getRowLink:{defaultValue:null,description:"",name:"getRowLink",required:!1,type:{name:"((config: LinkConfig<T, ExtraInfo>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},renderEmptyList:{defaultValue:null,description:"",name:"renderEmptyList",required:!1,type:{name:"(() => ReactNode)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"{ isLoading: boolean; count: number; }"}}}}}catch{}try{Ve.displayName="FixedListViewPlaceholder",Ve.__docgenInfo={description:"",displayName:"FixedListViewPlaceholder",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"number"}},rowVerticalSpacing:{defaultValue:null,description:"",name:"rowVerticalSpacing",required:!0,type:{name:"number"}},groupHeaderHeight:{defaultValue:null,description:"",name:"groupHeaderHeight",required:!1,type:{name:"number"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!1,type:{name:"number"}},paddingHorizontal:{defaultValue:{value:"10"},description:"",name:"paddingHorizontal",required:!1,type:{name:"number"}}}}}catch{}try{qe.displayName="PlainListViewPlaceholder",qe.__docgenInfo={description:"",displayName:"PlainListViewPlaceholder",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"number"}},rowVerticalSpacing:{defaultValue:null,description:"",name:"rowVerticalSpacing",required:!0,type:{name:"number"}},groupHeaderHeight:{defaultValue:null,description:"",name:"groupHeaderHeight",required:!1,type:{name:"number"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!1,type:{name:"number"}},paddingHorizontal:{defaultValue:{value:"10"},description:"",name:"paddingHorizontal",required:!1,type:{name:"number"}}}}}catch{}try{Ze.displayName="FixedListViewEmpty",Ze.__docgenInfo={description:"",displayName:"FixedListViewEmpty",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"lake-calendar-arrow-swap"'},{value:'"lake-card"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-regular"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},borderedIcon:{defaultValue:{value:"false"},description:"",name:"borderedIcon",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}}}}}catch{}const m=il.create({cellContainer:{display:"flex",flexGrow:1,flexDirection:"row",alignItems:"center"},balanceCellContainer:{width:"100%"},cell:{display:"flex",paddingHorizontal:ie[16],flexGrow:1,flexDirection:"row",alignItems:"center"},icon:{alignSelf:"stretch",alignItems:"center",justifyContent:"center",paddingHorizontal:ie[4]},iconContainer:{flexDirection:"row",alignSelf:"stretch",alignItems:"stretch",justifyContent:"center"},centeredCell:{justifyContent:"center"},endAlignedCell:{justifyContent:"flex-end"},regularText:{overflow:"hidden",textOverflow:"ellipsis",width:1,flexGrow:1,whiteSpace:"nowrap"},mediumText:{overflow:"hidden",textOverflow:"ellipsis",width:1,flexGrow:1,whiteSpace:"nowrap",flexDirection:"row",alignItems:"center"},colorPatch:{flexGrow:1},alternativeText:Il,sortIcon:{transitionProperty:"transform",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},sortIconReversed:{transform:"rotate(-180deg)"},cellAction:{paddingVertical:ie[16],paddingHorizontal:ie[8]},underline:{boxShadow:"inset 0 -2px currentColor"},sortHorizontalBar:{position:"absolute",width:"100%",height:2,bottom:-10,backgroundColor:_.current[500],borderBottomColor:_.current[500]}}),Je=({text:t,sort:a,justifyContent:i="flex-start",onPress:u})=>{const s=h(a)&&h(u);return e(Me,{onPress:()=>{u==null||u(be(a).with("Desc",()=>"Asc").with("Asc",()=>"Desc").otherwise(()=>"Desc"))},disabled:ee(u),style:m.cellContainer,children:({hovered:c})=>e(r,{style:[m.cell,{justifyContent:i}],children:b(r,{children:[b(We,{direction:"row",alignItems:"center",children:[e(O,{numberOfLines:1,variant:"medium",color:s?_.current[500]:_.gray[900],style:{textAlign:be(i).with("flex-start",()=>"left").with("center",()=>"center").with("flex-end",()=>"right").exhaustive()},children:t}),h(u)?b(xl,{children:[e(D,{width:8}),e(We,{style:[m.sortIcon,a==="Asc"&&m.sortIconReversed],children:e(_e,{size:15,color:s?_.current[500]:_.gray[500],name:s?"arrow-down-filled":"chevron-up-down-regular"})})]}):null]}),s?e(r,{style:m.sortHorizontalBar}):c?e(r,{style:[m.sortHorizontalBar,{backgroundColor:_.gray[900]}]}):null]})})})},Ue=({isHovered:t,alternativeText:a,color:i})=>t?e(r,{style:[m.colorPatch,{backgroundColor:_[i].primary}],children:h(a)?e(O,{style:m.alternativeText,children:a}):null}):null,Xe=({isHighlighted:t=!1,text:a})=>e(r,{style:m.cell,children:e(O,{numberOfLines:1,color:_.gray[900],variant:"medium",...t&&{color:_.current.primary},children:a})}),Qe=({variant:t="regular",text:a,textAlign:i="left"})=>e(r,{style:m.cell,children:e(O,{align:i,color:_.gray[900],style:m.regularText,variant:t,children:a})}),el=({variant:t="regular",text:a,copyWording:i,copiedWording:u})=>{const[s,c]=n.useState("copy"),v=n.useCallback(f=>{f.preventDefault(),Tl.setString(a),c("copied")},[a]);return b(r,{style:m.cell,children:[e(Hl,{placement:"top",onHide:()=>c("copy"),togglableOnFocus:!0,content:s==="copy"?i:u,containerStyle:m.iconContainer,children:e(Me,{role:"button","aria-label":i,onPress:v,style:({hovered:f})=>[m.icon,f&&m.underline],children:({hovered:f})=>e(_e,{name:f?"copy-filled":"copy-regular",color:"currentColor",size:14})})}),e(D,{width:4}),e(O,{color:_.gray[900],style:m.regularText,variant:t,children:a})]})},ll=({value:t,currency:a,originalValue:i,formatCurrency:u,textAlign:s="right"})=>b(r,{style:m.balanceCellContainer,children:[e(r,{style:m.cell,children:b(O,{align:s,color:_.gray[900],variant:"medium",style:[m.mediumText,{justifyContent:be(s).with("left",()=>"flex-start").with("center",()=>"center").with("right",()=>"flex-end").exhaustive()},t>0&&{color:_.positive.primary},t<0&&{color:_.negative.primary}],children:[t>0&&"+",u(t,a)]})}),h(i)&&i.currency!==a&&e(r,{style:m.cell,children:b(O,{style:m.mediumText,align:s,color:_.gray[500],variant:"smallRegular",children:[i.value>0&&"+",u(i.value,i.currency)]})})]}),tl=({children:t,external:a=!1,onPress:i})=>b(r,{style:m.cell,children:[e(Me,{style:({hovered:u})=>[m.icon,u&&m.underline],onPress:u=>{u.preventDefault(),i()},children:e(_e,{size:14,name:a?"open-regular":"arrow-right-filled"})}),e(D,{width:8}),e(O,{color:_.gray[900],variant:"medium",style:m.mediumText,children:t})]}),rl=({children:t})=>e(r,{style:m.cell,children:t}),nl=({children:t})=>e(r,{style:[m.cell,m.centeredCell],children:t}),al=({children:t})=>e(r,{style:[m.cell,m.endAlignedCell],children:t}),ol=({children:t})=>e(r,{style:m.cellAction,children:t});try{Je.displayName="SimpleHeaderCell",Je.__docgenInfo={description:"",displayName:"SimpleHeaderCell",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},justifyContent:{defaultValue:{value:"flex-start"},description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},sort:{defaultValue:null,description:"",name:"sort",required:!1,type:{name:"enum",value:[{value:'"Desc"'},{value:'"Asc"'}]}},onPress:{defaultValue:null,description:"",name:"onPress",required:!1,type:{name:"((direction: SortDirection) => void)"}}}}}catch{}try{Ue.displayName="ColorPatchCell",Ue.__docgenInfo={description:"",displayName:"ColorPatchCell",props:{isHovered:{defaultValue:null,description:"",name:"isHovered",required:!0,type:{name:"boolean"}},alternativeText:{defaultValue:null,description:"",name:"alternativeText",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}}}}}catch{}try{Xe.displayName="SimpleTitleCell",Xe.__docgenInfo={description:"",displayName:"SimpleTitleCell",props:{isHighlighted:{defaultValue:{value:"false"},description:"",name:"isHighlighted",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}try{Qe.displayName="SimpleRegularTextCell",Qe.__docgenInfo={description:"",displayName:"SimpleRegularTextCell",props:{variant:{defaultValue:{value:"regular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"semibold"'},{value:'"medium"'},{value:'"regular"'},{value:'"light"'},{value:'"smallSemibold"'},{value:'"smallMedium"'},{value:'"smallRegular"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},textAlign:{defaultValue:{value:"right"},description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}try{el.displayName="CopyableRegularTextCell",el.__docgenInfo={description:"",displayName:"CopyableRegularTextCell",props:{variant:{defaultValue:{value:"regular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"semibold"'},{value:'"medium"'},{value:'"regular"'},{value:'"light"'},{value:'"smallSemibold"'},{value:'"smallMedium"'},{value:'"smallRegular"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},copyWording:{defaultValue:null,description:"",name:"copyWording",required:!0,type:{name:"string"}},copiedWording:{defaultValue:null,description:"",name:"copiedWording",required:!0,type:{name:"string"}}}}}catch{}try{ll.displayName="BalanceCell",ll.__docgenInfo={description:"",displayName:"BalanceCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},currency:{defaultValue:null,description:"",name:"currency",required:!0,type:{name:"string"}},originalValue:{defaultValue:null,description:"",name:"originalValue",required:!1,type:{name:"{ value: number; currency: string; }"}},formatCurrency:{defaultValue:null,description:"",name:"formatCurrency",required:!0,type:{name:"(value: number, currency: string) => string"}},textAlign:{defaultValue:{value:"right"},description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}try{tl.displayName="LinkCell",tl.__docgenInfo={description:"",displayName:"LinkCell",props:{onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},external:{defaultValue:{value:"false"},description:"",name:"external",required:!1,type:{name:"boolean"}}}}}catch{}try{rl.displayName="StartAlignedCell",rl.__docgenInfo={description:"",displayName:"StartAlignedCell",props:{}}}catch{}try{nl.displayName="CenteredCell",nl.__docgenInfo={description:"",displayName:"CenteredCell",props:{}}}catch{}try{al.displayName="EndAlignedCell",al.__docgenInfo={description:"",displayName:"EndAlignedCell",props:{}}}catch{}try{ol.displayName="CellAction",ol.__docgenInfo={description:"",displayName:"CellAction",props:{}}}catch{}export{Ue as C,Ye as F,qe as P,Je as S,Ve as a,Xe as b,Qe as c};
//# sourceMappingURL=FixedListViewCells-47812c39.js.map
