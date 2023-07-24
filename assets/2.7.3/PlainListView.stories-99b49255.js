import{S as ce,f as R,e as P,c as de,i as q,h as ue,j as e,V as c,n as me,a as L,F as O,p as fe,b as _}from"./Space-cf4dfeb4.js";import{r as t}from"./index-76fb7be0.js";import{B as pe}from"./index-5b9f7f54.js";import{P as he,S as ge,b as ye}from"./FixedListView-32e90f14.js";import{a as X}from"./LakeButton-f988ae88.js";import{L as we}from"./LakeCheckbox-cf91cccd.js";import{c as U}from"./commonStyles-d52fedae.js";import{a as ke}from"./useMergeRefs-b61c1307.js";import{L as Se}from"./LakeHeading-a6130733.js";import{R as be}from"./ResponsiveContainer-5db25790.js";import{T as xe}from"./Tag-b70268e6.js";import{v as Ce}from"./v4-a960c1f4.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-6f7a1461.js";import"./Svg-b1e67ad2.js";import"./LakeTooltip-d2186e1e.js";import"./index-d3ea75b5.js";import"./Portal-e0be6b33.js";import"./WithCurrentColor-992ec9cb.js";import"./Pressable-ed362142.js";import"./index-ca925b5c.js";import"./array-a4405b3e.js";import"./function-30fe01e9.js";import"./Boxed-b75d14a5.js";import"./BorderedIcon-2f6ffff3.js";import"./index-f3e36406.js";import"./index-af3f1da0.js";const Ie="inherit",o=ce.create({root:{height:1,alignSelf:"stretch",flexGrow:1,backgroundColor:R.default},contentContainer:{flexDirection:"column",alignItems:"stretch",flexGrow:1},segment:{flexDirection:"row",alignItems:"stretch",overflow:"hidden",paddingHorizontal:P[8]},segmentLarge:{paddingHorizontal:P[24]},row:{boxShadow:`inset 0 -1px ${de.gray[100]}`},activeRow:{backgroundColor:R.accented},hoveredRow:{backgroundColor:R.accented},segmentHeaderCell:{display:"flex",flexDirection:"row",alignItems:"center"},stickyHeader:{position:"sticky",backgroundColor:R.default90Transparency,backdropFilter:"blur(4px)",zIndex:10,paddingHorizontal:P[24],flexDirection:"row",alignItems:"center"},stickyHeaderLarge:{paddingHorizontal:P[40]},loadingPlaceholder:{position:"absolute",left:0,right:0,top:0},rowLink:{color:Ie,textDecorationLine:"none"},emptyListContainer:{...U.fill,flexDirection:"column",alignItems:"center",justifyContent:"center",padding:P[48],backgroundColor:R.default},scrollTracker:{pointerEvents:"none",position:"absolute",left:0,bottom:0,right:0}}),D=1,ee=0,Ee=({id:r,item:S,index:f,rowHeight:b,columns:y,extraInfo:x,isActive:C,isHovered:p,large:g,style:h,onMouseEnter:v,onMouseLeave:T})=>{const d=t.useRef(null);return ke(d,{onHoverStart:()=>v(r),onHoverEnd:()=>T()}),e(c,{ref:d,style:[o.segment,g&&o.segmentLarge,o.row,h==null?void 0:h(S,g),C&&o.activeRow,p&&o.hoveredRow,{minHeight:b}],children:y.map(({width:n,id:l,renderCell:u})=>e(c,{style:[o.segmentHeaderCell,{width:typeof n=="number"?n:D,flexGrow:n==="grow"?D:ee}],id:l,children:u({columnId:l,item:S,index:f,extraInfo:x,isHovered:p})},l))})},M=({data:r,keyExtractor:S,rowHeight:f,groupHeaderHeight:b,headerHeight:y,columns:x,smallColumns:C=x,extraInfo:p,onEndReached:g,onEndReachedThresholdPx:h=200,headerStyle:v,rowStyle:T,getRowLink:d,activeRowId:n,renderEmptyList:l,onActiveRowChange:u,groupBy:V,loading:w,breakpoint:te=fe.large,withoutScroll:N=!1,stickyOffset:ne=0})=>{const re=t.useId(),W=t.useRef(null),A=t.useMemo(()=>{if(V==null)return new Map([[null,r]]);const a=new Map;return r.forEach(s=>{const i=V(s);a.set(i,[...a.get(i)??[],s])}),a},[V,r]),j=f*r.length+A.size*b,H=q(w)&&w.isLoading,B=r.length===0,[oe,G]=t.useState(void 0),ae=t.useCallback(()=>{G(void 0)},[]);t.useEffect(()=>{const a=W.current;if(a!=null){const s=a,i=new IntersectionObserver(m=>{m.forEach(k=>{k.isIntersecting&&q(g)&&g()})});return i.observe(s),()=>i.unobserve(s)}},[g]);const le=t.useCallback(({item:a,absoluteIndex:s,extraInfo:i})=>{const m=d==null?void 0:d({item:a,index:s,extraInfo:i});return ue(m)?e(c,{}):m},[d]),J=t.useRef(null);t.useEffect(()=>{const a=J.current;if(n!=null&&a!=null){const s=a;s.scrollIntoView({behavior:"smooth",block:"nearest"}),u==null||u(s)}},[n,u]);const ie=t.useMemo(()=>N?e(c,{style:o.contentContainer}):e(me,{scrollEventThrottle:32,contentContainerStyle:[o.contentContainer,{minHeight:j+(H?w.count*f:0)}]}),[H,w==null?void 0:w.count,f,j,N]);return e(be,{style:N?B?U.fill:void 0:o.root,breakpoint:te,children:({large:a})=>{const s=a?x:C;return L(O,{children:[!B&&a?e(c,{style:[o.segment,o.segmentLarge,v],children:s.map(({id:i,width:m,title:k,renderTitle:I})=>{const E=`${re}_${i}`;return e(c,{style:[o.segmentHeaderCell,{width:typeof m=="number"?m:D,flexGrow:m==="grow"?D:ee,height:y}],id:E,children:I({title:k,extraInfo:p,id:i})},E)})}):null,t.cloneElement(ie,{children:L(O,{children:[Array.from(A.entries()).map(([i,m])=>L(t.Fragment,{children:[i!=null?e(c,{style:[o.stickyHeader,a&&o.stickyHeaderLarge,{height:b,top:ne}],children:e(Se,{level:3,variant:"h3",children:i})}):null,m.map((k,I)=>{const E=S(k,I),$=n===E,se=q(d)&&oe===E,Z=le({item:k,absoluteIndex:I,extraInfo:p});return t.cloneElement(Z,{style:{...o.rowLink,...Z.props.style},key:I,ref:$?J:null,children:e(Ee,{id:E,rowHeight:f,columns:s,item:k,index:I,extraInfo:p,isActive:$,isHovered:se,large:a,style:T,onMouseEnter:G,onMouseLeave:ae})})})]},i)),e(c,{children:e(c,{"aria-busy":H,style:o.loadingPlaceholder,children:H?e(he,{count:w.count,rowHeight:f,rowVerticalSpacing:0,paddingHorizontal:0}):null})}),B&&q(l)&&!H?e(c,{style:o.emptyListContainer,children:l()}):null,e(c,{style:[o.scrollTracker,{height:h}],ref:W})]})})]})}})};try{M.displayName="PlainListView",M.__docgenInfo={description:"",displayName:"PlainListView",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},keyExtractor:{defaultValue:null,description:"",name:"keyExtractor",required:!0,type:{name:"(item: T, index: number) => string"}},highlightedRowId:{defaultValue:null,description:"",name:"highlightedRowId",required:!1,type:{name:"string"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"number"}},groupHeaderHeight:{defaultValue:null,description:"",name:"groupHeaderHeight",required:!0,type:{name:"number"}},extraInfo:{defaultValue:null,description:"",name:"extraInfo",required:!0,type:{name:"ExtraInfo"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},smallColumns:{defaultValue:null,description:"",name:"smallColumns",required:!1,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},onEndReached:{defaultValue:null,description:"",name:"onEndReached",required:!1,type:{name:"(() => void)"}},onEndReachedThresholdPx:{defaultValue:{value:"200"},description:"",name:"onEndReachedThresholdPx",required:!1,type:{name:"number"}},headerStyle:{defaultValue:null,description:"",name:"headerStyle",required:!1,type:{name:"ViewStyle | null"}},rowStyle:{defaultValue:null,description:"",name:"rowStyle",required:!1,type:{name:"((item: T, large: boolean) => ViewStyle | null)"}},getRowLink:{defaultValue:null,description:"",name:"getRowLink",required:!1,type:{name:"((config: LinkConfig<T, ExtraInfo>) => ReactElement<{ children: (state: PressableStateCallbackType) => ReactNode; }, string | JSXElementConstructor<...>>)"}},renderEmptyList:{defaultValue:null,description:"",name:"renderEmptyList",required:!1,type:{name:"(() => ReactNode)"}},groupBy:{defaultValue:null,description:"",name:"groupBy",required:!1,type:{name:"((item: T) => string)"}},onActiveRowChange:{defaultValue:null,description:"",name:"onActiveRowChange",required:!1,type:{name:"((element: HTMLElement) => void)"}},activeRowId:{defaultValue:null,description:"",name:"activeRowId",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"{ isLoading: boolean; count: number; }"}},breakpoint:{defaultValue:{value:"950"},description:"",name:"breakpoint",required:!1,type:{name:"number"}},withoutScroll:{defaultValue:{value:"false"},description:"",name:"withoutScroll",required:!1,type:{name:"boolean"}},stickyOffset:{defaultValue:{value:"0"},description:"",name:"stickyOffset",required:!1,type:{name:"number"}}}}}catch{}const nt={title:"Layout/PlainListView",component:M},Le=({id:r})=>r,ve=()=>{const r=["Matthias","John","Jane","Camille","Charlotte","Francis","Émilie","François","Laura","Marie","Natasha","Nicolas","Pierre","Thomas","Valérie","Yann","Zoé","Jérôme","Thomas"];return r[Math.floor(Math.random()*r.length)]??r[0]},z=r=>({id:Ce(),name:ve(),modulo:String(r%10)}),F=()=>{const[r,S]=t.useState({key:"name",order:"Desc"}),[f,b]=t.useState(0),[y,x]=t.useState(!1),[C,p]=t.useState(!1),[g,h]=t.useState(()=>Array.from({length:100},(n,l)=>z(l))),v=()=>{h(n=>[z(n.length),...n])},T=t.useCallback(()=>{b(n=>n+1),y&&p(!0)},[y]);t.useEffect(()=>{if(C){const n=setTimeout(()=>{p(!1),h(l=>[...l,...Array.from({length:100},(u,V)=>z(V+l.length))])},1e3);return()=>clearTimeout(n)}});const d=t.useMemo(()=>[{id:"name",width:"grow",title:"Name",renderTitle:({title:n,extraInfo:l,id:u})=>e(ge,{text:n,sort:l.key===u?l.order:void 0,onPress:()=>S({key:u,order:l.order==="Desc"?"Asc":"Desc"})}),renderCell:({item:{name:n}})=>e(ye,{text:n})}],[]);return L(O,{children:[L(pe,{direction:"row",alignItems:"center",children:[e(X,{icon:"add-circle-filled",color:"live",onPress:v,children:"Prepend"}),e(_,{width:16}),e(X,{icon:"delete-filled",color:"negative",onPress:()=>h([]),children:"Clear"}),e(_,{width:16}),L(xe,{label:"End reached",children:[f," times"]}),e(_,{width:16}),e(we,{label:"With infinite scroll",value:y,onValueChange:x})]}),e(_,{height:16}),e(M,{groupBy:n=>n.modulo,extraInfo:r,keyExtractor:Le,data:g,columns:d,rowHeight:48,headerHeight:48,groupHeaderHeight:48,onEndReached:T,onEndReachedThresholdPx:300,loading:{isLoading:C,count:5}})]})};var Y,K,Q;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [sort, setSort] = useState<SortInfo>({
    key: "name",
    order: "Desc"
  });
  const [endReachedTimes, setEndReachedTimes] = useState(0);
  const [withInfiniteScroll, setWithInfiniteScroll] = useState(false);
  const [showFakeLoader, setShowFakeLoader] = useState(false);
  const [data, setData] = useState(() => Array.from({
    length: 100
  }, (_, index) => generateItem(index)));
  const prependItem = () => {
    setData(data => [generateItem(data.length), ...data]);
  };
  const onEndReached = useCallback(() => {
    setEndReachedTimes(v => v + 1);
    if (withInfiniteScroll) {
      setShowFakeLoader(true);
    }
  }, [withInfiniteScroll]);
  useEffect(() => {
    if (showFakeLoader) {
      const timeout = setTimeout(() => {
        setShowFakeLoader(false);
        setData(data => [...data, ...Array.from({
          length: 100
        }, (_, index) => generateItem(index + data.length))]);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  });
  const columns = useMemo(() => {
    return [{
      id: "name",
      width: ("grow" as const),
      title: "Name",
      renderTitle: ({
        title,
        extraInfo,
        id
      }: ColumnTitleConfig<SortInfo>) => <SimpleHeaderCell text={title} sort={extraInfo.key === id ? extraInfo.order : undefined} onPress={() => setSort({
        key: id,
        order: extraInfo.order === "Desc" ? "Asc" : "Desc"
      })} />,
      renderCell: ({
        item: {
          name
        }
      }: ColumnCellConfig<TestRow, SortInfo>) => <SimpleTitleCell text={name} />
    }];
  }, []);
  return <>
      <Box direction="row" alignItems="center">
        <LakeButton icon="add-circle-filled" color="live" onPress={prependItem}>
          Prepend
        </LakeButton>

        <Space width={16} />

        <LakeButton icon="delete-filled" color="negative" onPress={() => setData([])}>
          Clear
        </LakeButton>

        <Space width={16} />
        <Tag label="End reached">{endReachedTimes} times</Tag>
        <Space width={16} />

        <LakeLabelledCheckbox label="With infinite scroll" value={withInfiniteScroll} onValueChange={setWithInfiniteScroll} />
      </Box>

      <Space height={16} />

      <PlainListView groupBy={item => item.modulo} extraInfo={sort} keyExtractor={keyExtractor} data={data} columns={columns} rowHeight={48} headerHeight={48} groupHeaderHeight={48} onEndReached={onEndReached} onEndReachedThresholdPx={300} loading={{
      isLoading: showFakeLoader,
      count: 5
    }} />
    </>;
}`,...(Q=(K=F.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const rt=["Primary"];export{F as Primary,rt as __namedExportsOrder,nt as default};
//# sourceMappingURL=PlainListView.stories-99b49255.js.map
