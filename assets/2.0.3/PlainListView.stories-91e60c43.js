import{S as se,f as H,e as R,c as ce,d as P,h as de,a as e,V as c,q as ue,j as v,F as z,m as me,b as q}from"./Space-10c0535d.js";import{r as t}from"./index-ebeaab24.js";import{B as fe}from"./index-33d543aa.js";import{P as pe,S as he,b as ge}from"./FixedListViewCells-9251a3a6.js";import{L as Z}from"./LakeButton-ae494f42.js";import{a as ye}from"./LakeCheckbox-93063ede.js";import{c as Q}from"./commonStyles-d52fedae.js";import{u as we}from"./useMergeRefs-1578fbfc.js";import{L as ke}from"./LakeHeading-47d4c86f.js";import{R as Se}from"./ResponsiveContainer-23cb934c.js";import{T as be}from"./Tag-e36d16cd.js";import{v as xe}from"./v4-a960c1f4.js";import"./extends-98964cd2.js";import"./array-b3630b94.js";import"./function-fbf93c31.js";import"./Boxed-dafb0729.js";import"./BorderedIcon-462fb39e.js";import"./Icon-a62b9fe2.js";import"./Svg-e4713af8.js";import"./LakeTooltip-14bef89a.js";import"./index-9c09ad76.js";import"./Portal-a9f36de9.js";import"./WithCurrentColor-96c945ba.js";import"./Pressable-d8a27403.js";import"./index-ca925b5c.js";import"./index-f297b6da.js";import"./index-b316fd3c.js";const Ce="inherit",o=se.create({root:{height:1,alignSelf:"stretch",flexGrow:1,backgroundColor:H.default},contentContainer:{flexDirection:"column",alignItems:"stretch",flexGrow:1},segment:{flexDirection:"row",alignItems:"stretch",overflow:"hidden",paddingHorizontal:R[8]},segmentLarge:{paddingHorizontal:R[24]},row:{boxShadow:`inset 0 -1px ${ce.gray[100]}`},activeRow:{backgroundColor:H.accented},hoveredRow:{backgroundColor:H.accented},segmentHeaderCell:{display:"flex",flexDirection:"row",alignItems:"center"},stickyHeader:{position:"sticky",backgroundColor:H.default90Transparency,backdropFilter:"blur(4px)",zIndex:10,paddingHorizontal:R[24],flexDirection:"row",alignItems:"center"},stickyHeaderLarge:{paddingHorizontal:R[40]},loadingPlaceholder:{position:"absolute",left:0,right:0,top:0},rowLink:{color:Ce,textDecorationLine:"none"},emptyListContainer:{...Q.fill,flexDirection:"column",alignItems:"center",justifyContent:"center",padding:R[48],backgroundColor:H.default},scrollTracker:{pointerEvents:"none",position:"absolute",left:0,bottom:0,right:0}}),F=1,U=0,Ie=({id:r,item:b,index:u,rowHeight:x,columns:k,extraInfo:C,isActive:I,isHovered:m,large:y,style:f,onMouseEnter:T,onMouseLeave:p})=>{const w=t.useRef(null);return we(w,{onHoverStart:()=>T(r),onHoverEnd:()=>p()}),e(c,{ref:w,style:[o.segment,y&&o.segmentLarge,o.row,f==null?void 0:f(b,y),I&&o.activeRow,m&&o.hoveredRow,{minHeight:x}],children:k.map(({width:n,id:a,renderCell:h})=>e(c,{style:[o.segmentHeaderCell,{width:typeof n=="number"?n:F,flexGrow:n==="grow"?F:U}],id:a,children:h({columnId:a,item:b,index:u,extraInfo:C,isHovered:m})},a))})},D=({data:r,keyExtractor:b,rowHeight:u,groupHeaderHeight:x,headerHeight:k,columns:C,smallColumns:I=C,extraInfo:m,onEndReached:y,onEndReachedThresholdPx:f=200,rowStyle:T,getRowLink:p,activeRowId:w,renderEmptyList:n,onActiveRowChange:a,groupBy:h,loading:g,breakpoint:ee=me.large,withoutScroll:M=!1,stickyOffset:te=0})=>{const ne=t.useId(),O=t.useRef(null),W=t.useMemo(()=>{if(h==null)return new Map([[null,r]]);const l=new Map;return r.forEach(s=>{const i=h(s);l.set(i,[...l.get(i)??[],s])}),l},[h,r]),A=u*r.length+W.size*x,V=P(g)&&g.isLoading,N=r.length===0,[re,j]=t.useState(void 0),oe=t.useCallback(()=>{j(void 0)},[]);t.useEffect(()=>{const l=O.current;if(l!=null){const s=l,i=new IntersectionObserver(d=>{d.forEach(S=>{S.isIntersecting&&P(y)&&y()})});return i.observe(s),()=>i.unobserve(s)}},[y]);const ae=t.useCallback(({item:l,absoluteIndex:s,extraInfo:i})=>{const d=p==null?void 0:p({item:l,index:s,extraInfo:i});return de(d)?e(c,{}):d},[p]),G=t.useRef(null);t.useEffect(()=>{const l=G.current;if(w!=null&&l!=null){const s=l;s.scrollIntoView({behavior:"smooth",block:"nearest"}),a==null||a(s)}},[w,a]);const le=t.useMemo(()=>M?e(c,{style:o.contentContainer}):e(ue,{scrollEventThrottle:32,contentContainerStyle:[o.contentContainer,{minHeight:A+(V?g.count*u:0)}]}),[V,g==null?void 0:g.count,u,A,M]);return e(Se,{style:M?N?Q.fill:void 0:o.root,breakpoint:ee,children:({large:l})=>{const s=l?C:I;return v(z,{children:[!N&&l?e(c,{style:[o.segment,l&&o.segmentLarge],children:s.map(({id:i,width:d,title:S,renderTitle:E})=>{const L=`${ne}_${i}`;return e(c,{style:[o.segmentHeaderCell,{width:typeof d=="number"?d:F,flexGrow:d==="grow"?F:U,height:k}],id:L,children:E({title:S,extraInfo:m,id:i})},L)})}):null,t.cloneElement(le,{children:v(z,{children:[Array.from(W.entries()).map(([i,d])=>v(t.Fragment,{children:[i!=null?e(c,{style:[o.stickyHeader,l&&o.stickyHeaderLarge,{height:x,top:te}],children:e(ke,{level:3,variant:"h3",children:i})}):null,d.map((S,E)=>{const L=b(S,E),J=w===L,ie=P(p)&&re===L,$=ae({item:S,absoluteIndex:E,extraInfo:m});return t.cloneElement($,{style:{...o.rowLink,...$.props.style},key:E,ref:J?G:null,children:e(Ie,{id:L,rowHeight:u,columns:s,item:S,index:E,extraInfo:m,isActive:J,isHovered:ie,large:l,style:T,onMouseEnter:j,onMouseLeave:oe})})})]},i)),e(c,{children:e(c,{"aria-busy":V,style:o.loadingPlaceholder,children:V?e(pe,{count:g.count,rowHeight:u,rowVerticalSpacing:0,paddingHorizontal:0}):null})}),N&&P(n)&&!V?e(c,{style:o.emptyListContainer,children:n()}):null,e(c,{style:[o.scrollTracker,{height:f}],ref:O})]})})]})}})};try{D.displayName="PlainListView",D.__docgenInfo={description:"",displayName:"PlainListView",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},keyExtractor:{defaultValue:null,description:"",name:"keyExtractor",required:!0,type:{name:"(item: T, index: number) => string"}},highlightedRowId:{defaultValue:null,description:"",name:"highlightedRowId",required:!1,type:{name:"string"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"number"}},groupHeaderHeight:{defaultValue:null,description:"",name:"groupHeaderHeight",required:!0,type:{name:"number"}},extraInfo:{defaultValue:null,description:"",name:"extraInfo",required:!0,type:{name:"ExtraInfo"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},smallColumns:{defaultValue:null,description:"",name:"smallColumns",required:!1,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},onEndReached:{defaultValue:null,description:"",name:"onEndReached",required:!1,type:{name:"(() => void)"}},onEndReachedThresholdPx:{defaultValue:{value:"200"},description:"",name:"onEndReachedThresholdPx",required:!1,type:{name:"number"}},rowStyle:{defaultValue:null,description:"",name:"rowStyle",required:!1,type:{name:"((item: T, large: boolean) => ViewStyle | null)"}},getRowLink:{defaultValue:null,description:"",name:"getRowLink",required:!1,type:{name:"((config: LinkConfig<T, ExtraInfo>) => ReactElement<{ children: (state: PressableStateCallbackType) => ReactNode; }, string | JSXElementConstructor<...>>)"}},renderEmptyList:{defaultValue:null,description:"",name:"renderEmptyList",required:!1,type:{name:"(() => ReactNode)"}},groupBy:{defaultValue:null,description:"",name:"groupBy",required:!1,type:{name:"((item: T) => string)"}},onActiveRowChange:{defaultValue:null,description:"",name:"onActiveRowChange",required:!1,type:{name:"((element: HTMLElement) => void)"}},activeRowId:{defaultValue:null,description:"",name:"activeRowId",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"{ isLoading: boolean; count: number; }"}},breakpoint:{defaultValue:{value:"950"},description:"",name:"breakpoint",required:!1,type:{name:"number"}},withoutScroll:{defaultValue:{value:"false"},description:"",name:"withoutScroll",required:!1,type:{name:"boolean"}},stickyOffset:{defaultValue:{value:"0"},description:"",name:"stickyOffset",required:!1,type:{name:"number"}}}}}catch{}const et={title:"Layout/PlainListView",component:D},Ee=({id:r})=>r,Le=()=>{const r=["Matthias","John","Jane","Camille","Charlotte","Francis","Émilie","François","Laura","Marie","Natasha","Nicolas","Pierre","Thomas","Valérie","Yann","Zoé","Jérôme","Thomas"];return r[Math.floor(Math.random()*r.length)]??r[0]},B=r=>({id:xe(),name:Le(),modulo:String(r%10)}),_=()=>{const[r,b]=t.useState({key:"name",order:"Desc"}),[u,x]=t.useState(0),[k,C]=t.useState(!1),[I,m]=t.useState(!1),[y,f]=t.useState(()=>Array.from({length:100},(n,a)=>B(a))),T=()=>{f(n=>[B(n.length),...n])},p=t.useCallback(()=>{x(n=>n+1),k&&m(!0)},[k]);t.useEffect(()=>{if(I){const n=setTimeout(()=>{m(!1),f(a=>[...a,...Array.from({length:100},(h,g)=>B(g+a.length))])},1e3);return()=>clearTimeout(n)}});const w=t.useMemo(()=>[{id:"name",width:"grow",title:"Name",renderTitle:({title:n,extraInfo:a,id:h})=>e(he,{text:n,sort:a.key===h?a.order:void 0,onPress:()=>b({key:h,order:a.order==="Desc"?"Asc":"Desc"})}),renderCell:({item:{name:n}})=>e(ge,{text:n})}],[]);return v(z,{children:[v(fe,{direction:"row",alignItems:"center",children:[e(Z,{icon:"add-circle-filled",color:"live",onPress:T,children:"Prepend"}),e(q,{width:16}),e(Z,{icon:"delete-filled",color:"negative",onPress:()=>f([]),children:"Clear"}),e(q,{width:16}),v(be,{label:"End reached",children:[u," times"]}),e(q,{width:16}),e(ye,{label:"With infinite scroll",value:k,onValueChange:C})]}),e(q,{height:16}),e(D,{groupBy:n=>n.modulo,extraInfo:r,keyExtractor:Ee,data:y,columns:w,rowHeight:48,headerHeight:48,groupHeaderHeight:48,onEndReached:p,onEndReachedThresholdPx:300,loading:{isLoading:I,count:5}})]})};var X,Y,K;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(K=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};const tt=["Primary"];export{_ as Primary,tt as __namedExportsOrder,et as default};
//# sourceMappingURL=PlainListView.stories-91e60c43.js.map
