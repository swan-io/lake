import{s as we,c as G,b as X,e as l,j as e,V as o,n as ke,S as M,d as T,E as je,B as Te}from"./ScrollView-DWjQ00nM.js";import{r as i}from"./index-Cs7sjTYM.js";import{a as Ie,b as Ee,C as ve,S as R,c as qe,d as O,L as ee,E as Ne}from"./FixedListViewCells-CRDTV2G6.js";import{L as B}from"./LakeButton-B6sbG4pD.js";import{a as te}from"./LakeCheckbox-BWeaii5R.js";import{T as U}from"./Tag-CN2d3BfY.js";import{c as Se}from"./commonStyles-t4XfA7cz.js";import{v as Le}from"./v4-DvF23Exx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./a11y-DXvpDVrG.js";import"./array-rjEBP2Ry.js";import"./function-c-Au7wom.js";import"./BorderedIcon-BsWkYR3n.js";import"./LakeHeading-Devxa2jE.js";import"./Pressable-CMe_F2_9.js";import"./index-BJ6ZNIxC.js";import"./extends-CF3RwP-h.js";import"./index-CCMTQrND.js";const n=we.create({container:{...Se.fill,height:1,alignSelf:"stretch"},headerRow:{position:"sticky",top:0,flexDirection:"row",alignItems:"stretch",zIndex:2},cellsContainer:{flexDirection:"row",transform:"translateZ(0)"},stickedToStartColumnGroup:{position:"sticky",left:0,zIndex:1},stickedToEndColumnGroup:{position:"sticky",right:0,zIndex:1},rowsContainer:{position:"relative"},row:{position:"absolute",left:0,right:0,flexDirection:"row",alignItems:"stretch"},headerCell:{display:"flex",flexDirection:"row",flexGrow:1,alignItems:"center"},cell:{display:"flex",flexDirection:"row",flexGrow:1,alignItems:"stretch",boxShadow:`inset 0 -1px ${G.gray[100]}`},shadowsLayerContainer:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:4},shadowsLayer:{position:"sticky",top:12,flexDirection:"row",alignItems:"stretch"},startColumnsShadow:{position:"sticky",left:0,top:0,boxShadow:"15px 0 10px -12px rgba(0, 0, 0, 0.1)",transition:"100ms ease-in-out opacity"},endColumnsShadow:{position:"sticky",right:0,top:0,boxShadow:"-15px 0 10px -12px rgba(0, 0, 0, 0.1)",transition:"100ms ease-in-out opacity"},scrollTracker:{pointerEvents:"none",position:"absolute",left:0,bottom:0,right:0},placeholderRowContainer:{position:"absolute",alignItems:"flex-start",top:0,left:0,right:0,animationKeyframes:{"50%":{opacity:.6}},animationDuration:"2000ms",animationTimingFunction:"linear",animationIterationCount:"infinite",boxShadow:`inset 0 -1px ${G.gray[100]}`},placeholderRowContents:{position:"sticky",width:"50%",left:0,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",flexGrow:1,paddingHorizontal:X[20]},loadingPlaceholder:{position:"absolute",left:0,right:0},placeholderRow:{height:14,width:"30%",backgroundColor:G.gray[100]},placeholderRowEnd:{paddingHorizontal:X[20],position:"sticky",right:0,flexGrow:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},smallPlaceholderRow:{width:"10%"}}),Z=({variant:f,data:h,stickedToStartColumns:g,columns:d,stickedToEndColumns:C,headerHeight:v,rowHeight:c,renderThreshold:b=1e3,onEndReached:q,onEndReachedThreshold:_=200,loading:I,extraInfo:x,keyExtractor:P,marginHorizontal:N})=>{const k=i.useId(),S=i.useRef(null),w=i.useRef(null),j=c*h.length,E=l.fromNullable(I).flatMap(({isLoading:r,count:t})=>r?l.Some(c*t):l.None()).getOr(0),a=v+j+E,m=i.useMemo(()=>l.fromNullable(g).map(r=>r.reduce((t,u)=>t+u.width,0)).getOr(0),[g]),y=i.useMemo(()=>d.reduce((r,t)=>r+t.width,0),[d]),L=i.useMemo(()=>l.fromNullable(C).map(r=>r.reduce((t,u)=>t+u.width,0)).getOr(0),[C]),pe=m+y+L,$=T[f],[K,Y]=i.useState(void 0),[fe,he]=i.useState(void 0),[V,Q]=i.useState(void 0),ge=i.useMemo(()=>l.fromNullable(K).map(({startIndex:r,endIndex:t})=>({startIndex:r,endIndex:t,data:h.slice(r,t)})),[h,K]);i.useLayoutEffect(()=>{const r=l.fromNullable(S.current).flatMap(t=>l.fromNullable(t.element));Y(t=>r.map(u=>{const s=Math.max(0,Math.floor((u.scrollTop-b)/c)),p=Math.min(h.length,s+Math.ceil((u.scrollHeight+b*2)/c));return(t==null?void 0:t.startIndex)===s&&t.endIndex===p?t:{startIndex:s,endIndex:p}}).toUndefined()),he(r.map(t=>t.clientHeight).toUndefined()),Q(r.map(t=>t.scrollWidth===t.clientWidth?"NoScroll":t.scrollLeft<=0?"Start":t.scrollLeft>=t.scrollWidth-t.clientWidth?"End":"Middle").toUndefined())},[h,b,c]);const A=i.useRef(void 0),H=i.useRef(null),ye=i.useCallback(()=>{const r=l.fromNullable(S.current).flatMap(t=>l.fromNullable(t.element));A.current!=null&&clearTimeout(A.current),H.current instanceof HTMLElement&&(H.current.style.pointerEvents="none"),A.current=window.setTimeout(()=>{H.current instanceof HTMLElement&&(H.current.style.pointerEvents="auto")},100),Y(t=>r.map(u=>{const s=Math.max(0,Math.floor((u.scrollTop-b)/c)),p=Math.min(h.length,s+Math.ceil((u.scrollHeight+b*2)/c));return(t==null?void 0:t.startIndex)===s&&t.endIndex===p?t:{startIndex:s,endIndex:p}}).toUndefined()),Q(r.map(t=>t.scrollWidth===t.clientWidth?"NoScroll":t.scrollLeft<=0?"Start":t.scrollLeft>=t.scrollWidth-t.clientWidth?"End":"Middle").toUndefined())},[h,b,c]);i.useEffect(()=>{const r=w.current;if(r!=null){const t=r,u=new IntersectionObserver(s=>{s.forEach(p=>{p.isIntersecting&&q!=null&&q()})});return u.observe(t),()=>u.unobserve(t)}},[q,h.length]);const xe=i.useMemo(()=>e.jsxs(o,{style:[n.headerRow,{height:v}],children:[l.fromNullable(g).map(r=>e.jsx(o,{style:[n.cellsContainer,n.stickedToStartColumnGroup,{width:m,backgroundColor:$}],children:r.map(({id:t,width:u,title:s,renderTitle:p})=>{const D=`${k}_${t}`;return e.jsx(o,{style:[n.headerCell,{width:u}],id:D,children:p({title:s,extraInfo:x,id:t})},D)})})).toNull(),e.jsx(o,{style:[n.cellsContainer,{width:y,backgroundColor:$}],children:d.map(({id:r,width:t,title:u,renderTitle:s})=>{const p=`${k}_${r}`;return e.jsx(o,{style:[n.headerCell,{width:t}],id:p,children:s({title:u,extraInfo:x,id:r})},p)})}),l.fromNullable(C).map(r=>e.jsx(o,{style:[n.cellsContainer,n.stickedToEndColumnGroup,{width:L,backgroundColor:$}],children:r.map(({id:t,width:u,title:s,renderTitle:p})=>{const D=`${k}_${t}`;return e.jsx(o,{style:[n.headerCell,{width:u}],id:D,children:p({title:s,extraInfo:x,id:t})},D)})})).toNull()]}),[$,m,y,L,v,x,g,d,C,k]),Ce=i.useMemo(()=>m===0?l.None():l.Some(e.jsx(o,{style:[n.startColumnsShadow,{width:m,opacity:l.fromNullable(V).map(r=>r==="Start"||r==="NoScroll"?0:1).getOr(0)}]})),[m,V]),be=i.useMemo(()=>L===0?l.None():l.Some(e.jsx(o,{style:[n.endColumnsShadow,{width:L,opacity:l.fromNullable(V).map(r=>r==="End"||r==="NoScroll"?0:1).getOr(0)}]})),[L,V]);return e.jsxs(ke,{ref:S,both:!0,style:[n.container,{marginHorizontal:N}],onScroll:ye,scrollEventThrottle:32,contentContainerStyle:{height:a,width:pe},children:[xe,ge.map(({startIndex:r,endIndex:t,data:u})=>e.jsxs(o,{style:n.rowsContainer,ref:H,children:[u.map((s,p)=>e.jsx(Me,{viewId:k,item:s,rowHeight:c,absoluteIndex:r+p,variant:f,stickedToStartColumnsWidth:m,centerColumnsWidth:y,stickedToEndColumnsWidth:L,stickedToStartColumns:g,columns:d,stickedToEndColumns:C,extraInfo:x},P(s,r+p))),l.fromNullable(I).flatMap(({isLoading:s,count:p})=>s?l.Some(p):l.None()).map(s=>e.jsx(o,{"aria-busy":!0,style:[n.loadingPlaceholder,{top:t*c}],children:e.jsx(ce,{count:s,headerHeight:0,rowHeight:c})})).toNull()]})).toNull(),l.fromNullable(fe).map(r=>e.jsx(o,{style:n.shadowsLayerContainer,children:e.jsxs(o,{style:[n.shadowsLayer,{height:r-12}],children:[Ce.toNull(),e.jsx(o,{style:{width:y}}),be.toNull()]})})).toNull(),e.jsx(o,{style:[n.scrollTracker,{height:_}],ref:w})]})},Re=({viewId:f,rowHeight:h,absoluteIndex:g,variant:d,stickedToStartColumnsWidth:C,centerColumnsWidth:v,stickedToEndColumnsWidth:c,stickedToStartColumns:b,columns:q,stickedToEndColumns:_,extraInfo:I,item:x,getRowLink:P})=>{const[N,k]=i.useState(!1),S=i.useRef(null);je(S,{onHoverStart:()=>k(!0),onHoverEnd:()=>k(!1)});const w=P!=null?P({item:x,index:g,extraInfo:I})??e.jsx(o,{}):e.jsx(o,{});return i.cloneElement(w,{ref:S,style:[n.row,N&&{backgroundColor:d==="accented"?T.default:T.accented},{backgroundColor:T[d],top:g*h,height:h}],children:e.jsxs(e.Fragment,{children:[l.fromNullable(b).map(j=>e.jsx(o,{style:[n.cellsContainer,n.stickedToStartColumnGroup,{width:C,backgroundColor:N?T[d==="accented"?"default":"accented"]:T[d]}],children:j.map(({id:E,width:a,renderCell:m})=>{const y=`${f}_${E}`;return e.jsx(o,{style:[n.cell,{width:a}],"aria-describedby":y,children:m({columnId:y,item:x,index:g,extraInfo:I,isHovered:!1})},y)})})).toNull(),e.jsx(o,{style:[n.cellsContainer,{width:v,backgroundColor:N?T[d==="accented"?"default":"accented"]:T[d]}],children:q.map(({id:j,width:E,renderCell:a})=>{const m=`${f}_${j}`;return e.jsx(o,{style:[n.cell,{width:E}],"aria-describedby":m,children:a({columnId:m,item:x,index:g,extraInfo:I,isHovered:!1})},m)})}),l.fromNullable(_).map(j=>e.jsx(o,{style:[n.cellsContainer,n.stickedToEndColumnGroup,{width:c,backgroundColor:N?T[d==="accented"?"default":"accented"]:T[d]}],children:j.map(({id:E,width:a,renderCell:m})=>{const y=`${f}_${E}`;return e.jsx(o,{style:[n.cell,{width:a}],"aria-describedby":y,children:m({columnId:y,item:x,index:g,extraInfo:I,isHovered:!1})},y)})})).toNull()]})})},Me=i.memo(Re),ce=({count:f,rowHeight:h,groupHeaderHeight:g,headerHeight:d,marginHorizontal:C})=>e.jsxs(o,{style:[n.container,{marginHorizontal:C}],children:[d!=null?e.jsx(o,{style:{height:d}}):null,g!=g?e.jsx(o,{style:{height:d}}):null,e.jsx(o,{children:Array.from({length:f},(v,c)=>{const b=c*h;return e.jsx(o,{style:[n.placeholderRowContainer,{height:h,top:b}],children:e.jsxs(o,{style:n.placeholderRowContents,children:[e.jsx(o,{style:n.placeholderRow}),e.jsx(M,{width:32}),e.jsx(o,{style:[n.placeholderRow,n.smallPlaceholderRow]}),e.jsx(M,{width:32}),e.jsx(o,{style:n.placeholderRowEnd,children:e.jsx(o,{style:[n.placeholderRow,n.smallPlaceholderRow]})})]})},String(c))})})]});Z.__docgenInfo={description:"",methods:[],displayName:"VirtualizedList",props:{variant:{required:!0,tsType:{name:"union",raw:'"default" | "accented"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"accented"'}]},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},keyExtractor:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => string",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""},highlightedRowId:{required:!1,tsType:{name:"string"},description:""},headerHeight:{required:!0,tsType:{name:"number"},description:""},rowHeight:{required:!0,tsType:{name:"number"},description:""},extraInfo:{required:!0,tsType:{name:"ExtraInfo"},description:""},stickedToStartColumns:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  width: number;
  title: string;
  renderTitle: (props: ColumnTitleConfig<ExtraInfo>) => ReactNode;
  renderCell: (props: ColumnCellConfig<T, ExtraInfo>) => ReactNode;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"renderTitle",value:{name:"signature",type:"function",raw:"(props: ColumnTitleConfig<ExtraInfo>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  title: string;
  extraInfo: ExtraInfo;
  id: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}},{key:"id",value:{name:"string",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!0}},{key:"renderCell",value:{name:"signature",type:"function",raw:"(props: ColumnCellConfig<T, ExtraInfo>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  columnId: string;
  item: T;
  index: number;
  extraInfo: ExtraInfo;
  isHovered: boolean;
}`,signature:{properties:[{key:"columnId",value:{name:"string",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}},{key:"isHovered",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!0}}]}}],raw:"ColumnConfig<T, ExtraInfo>[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  width: number;
  title: string;
  renderTitle: (props: ColumnTitleConfig<ExtraInfo>) => ReactNode;
  renderCell: (props: ColumnCellConfig<T, ExtraInfo>) => ReactNode;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"renderTitle",value:{name:"signature",type:"function",raw:"(props: ColumnTitleConfig<ExtraInfo>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  title: string;
  extraInfo: ExtraInfo;
  id: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}},{key:"id",value:{name:"string",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!0}},{key:"renderCell",value:{name:"signature",type:"function",raw:"(props: ColumnCellConfig<T, ExtraInfo>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  columnId: string;
  item: T;
  index: number;
  extraInfo: ExtraInfo;
  isHovered: boolean;
}`,signature:{properties:[{key:"columnId",value:{name:"string",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}},{key:"isHovered",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!0}}]}}],raw:"ColumnConfig<T, ExtraInfo>[]"},description:""},stickedToEndColumns:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  width: number;
  title: string;
  renderTitle: (props: ColumnTitleConfig<ExtraInfo>) => ReactNode;
  renderCell: (props: ColumnCellConfig<T, ExtraInfo>) => ReactNode;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"renderTitle",value:{name:"signature",type:"function",raw:"(props: ColumnTitleConfig<ExtraInfo>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  title: string;
  extraInfo: ExtraInfo;
  id: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}},{key:"id",value:{name:"string",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!0}},{key:"renderCell",value:{name:"signature",type:"function",raw:"(props: ColumnCellConfig<T, ExtraInfo>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  columnId: string;
  item: T;
  index: number;
  extraInfo: ExtraInfo;
  isHovered: boolean;
}`,signature:{properties:[{key:"columnId",value:{name:"string",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}},{key:"isHovered",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!0}}]}}],raw:"ColumnConfig<T, ExtraInfo>[]"},description:""},renderThreshold:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},onEndReached:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEndReachedThreshold:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},getRowLink:{required:!1,tsType:{name:"signature",type:"function",raw:"(config: LinkConfig<T, ExtraInfo>) => ReactElement | undefined",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  item: T;
  index: number;
  extraInfo: ExtraInfo;
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}}]}},name:"config"}],return:{name:"union",raw:"ReactElement | undefined",elements:[{name:"ReactElement"},{name:"undefined"}]}}},description:""},renderEmptyList:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},marginHorizontal:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  isLoading: boolean;
  count: number;
}`,signature:{properties:[{key:"isLoading",value:{name:"boolean",required:!0}},{key:"count",value:{name:"number",required:!0}}]}},description:""}}};ce.__docgenInfo={description:"",methods:[],displayName:"VirtualizedListPlaceholder",props:{count:{required:!0,tsType:{name:"number"},description:""},rowHeight:{required:!0,tsType:{name:"number"},description:""},groupHeaderHeight:{required:!1,tsType:{name:"number"},description:""},headerHeight:{required:!1,tsType:{name:"number"},description:""},marginHorizontal:{required:!1,tsType:{name:"string"},description:""}}};const tt={title:"Layout/VirtualizedList",component:Z},Pe=({id:f})=>f,_e=()=>{const f=["Matthias","John","Jane","Camille","Charlotte","Francis","Émilie","François","Laura","Marie","Natasha","Nicolas","Pierre","Thomas","Valérie","Yann","Zoé","Jérôme","Thomas"];return f[Math.floor(Math.random()*f.length)]??f[0]},J=()=>({id:Le(),name:_e()}),me=()=>{const[f,h]=i.useState({key:"name",order:"Desc"}),[g,d]=i.useState(0),[C,v]=i.useState(!1),[c,b]=i.useState(!1),[q,_]=i.useState(!1),[I,x]=i.useState(()=>Array.from({length:20},w=>J())),P=i.useCallback(()=>{d(w=>w+1),C&&b(!0)},[C]);i.useEffect(()=>{if(c){const w=setTimeout(()=>{b(!1),x(j=>[...j,...Array.from({length:20},E=>J())])},1e3);return()=>clearTimeout(w)}});const{stickedToStartColumns:N,columns:k,stickedToEndColumns:S}=i.useMemo(()=>({stickedToStartColumns:[{width:4,id:"color",title:"Color",renderTitle:()=>null,renderCell:({isHovered:a})=>e.jsx(ve,{isHovered:a,color:"live"})},{width:300,id:"name",title:"Name",renderTitle:({title:a,extraInfo:m,id:y})=>e.jsx(R,{text:a,sort:m.key===y?m.order:void 0,onPress:()=>h({key:y,order:m.order==="Desc"?"Asc":"Desc"})}),renderCell:({item:{name:a}})=>e.jsx(qe,{text:a})}],columns:[{width:500,id:"event_id",title:"Event ID",renderTitle:({title:a})=>e.jsx(R,{text:a}),renderCell:({item:{id:a}})=>e.jsx(O,{text:a})},{width:150,id:"link_before",title:"Link before",renderTitle:({title:a})=>e.jsx(R,{text:a}),renderCell:()=>e.jsx(ee,{onPress:()=>{},buttonPosition:"start",children:e.jsx(U,{color:"shakespear",children:"Demo link"})})},{width:500,id:"onboarding_id",title:"Onboarding ID",renderTitle:({title:a})=>e.jsx(R,{text:a}),renderCell:({item:{id:a}})=>e.jsx(O,{text:a})},{width:150,id:"link_after",title:"Link after",renderTitle:({title:a})=>e.jsx(R,{text:a}),renderCell:()=>e.jsx(ee,{onPress:()=>{},buttonPosition:"end",children:e.jsx(U,{color:"shakespear",children:"Demo link"})})},{width:500,id:"account_id",title:"Account ID",renderTitle:({title:a})=>e.jsx(R,{text:a}),renderCell:({item:{id:a}})=>e.jsx(O,{text:a})}],stickedToEndColumns:[{width:100,id:"dot",title:"Settings",renderTitle:()=>e.jsx(R,{text:"End",justifyContent:"flex-end"}),renderCell:()=>e.jsx(Ne,{children:e.jsx(B,{mode:"tertiary",icon:"chevron-right-filled",ariaLabel:"test",size:"small"})})}]}),[]);return e.jsxs(e.Fragment,{children:[e.jsxs(Te,{direction:"row",alignItems:"center",children:[e.jsx(B,{icon:"add-circle-filled",color:"live",onPress:()=>x(w=>[J(),...w]),children:"Prepend"}),e.jsx(M,{width:16}),e.jsx(B,{icon:"delete-filled",color:"negative",onPress:()=>x([]),children:"Clear"}),e.jsx(M,{width:16}),e.jsxs(U,{label:"End reached",children:[g," times"]}),e.jsx(M,{width:16}),e.jsx(te,{label:"With infinite scroll",value:C,onValueChange:v}),e.jsx(M,{width:16}),e.jsx(te,{label:"Force loading state",value:q,onValueChange:_})]}),e.jsx(M,{height:16}),e.jsx(Z,{variant:"default",extraInfo:f,keyExtractor:Pe,data:I,stickedToStartColumns:N,columns:k,stickedToEndColumns:S,rowHeight:48,headerHeight:48,onEndReached:P,onEndReachedThreshold:300,renderEmptyList:()=>e.jsx(Ee,{icon:"lake-inbox-empty",title:"Nothing to see here"}),loading:{isLoading:q||c,count:20}})]})},z=()=>e.jsx(me,{}),W=()=>e.jsx(me,{}),F=()=>e.jsx(Ie,{rowHeight:48,rowVerticalSpacing:4,headerHeight:48,count:3});z.__docgenInfo={description:"",methods:[],displayName:"Primary"};W.__docgenInfo={description:"",methods:[],displayName:"WithoutBackground"};F.__docgenInfo={description:"",methods:[],displayName:"Placeholder"};var re,ne,oe;z.parameters={...z.parameters,docs:{...(re=z.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <EditableFixedListView />;
}`,...(oe=(ne=z.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ae,le;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <EditableFixedListView />;
}`,...(le=(ae=W.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var se,de,ue;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <FixedListViewPlaceholder rowHeight={48} rowVerticalSpacing={4} headerHeight={48} count={3} />;
}`,...(ue=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const rt=["Primary","WithoutBackground","Placeholder"];export{F as Placeholder,z as Primary,W as WithoutBackground,rt as __namedExportsOrder,tt as default};
//# sourceMappingURL=VirtualizedListView.stories-CEpZYr22.js.map
