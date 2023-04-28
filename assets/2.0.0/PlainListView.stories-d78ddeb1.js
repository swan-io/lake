import{S as ie,d as H,s as V,c as se,i as R,h as ce,a as e,V as d,k as de,j as L,F as B,l as ue,b as P}from"./Space-131d2659.js";import{r as n}from"./index-f1f749bf.js";import{B as me}from"./index.module-1db6bb3b.js";import{P as fe,S as pe,b as he}from"./FixedListViewCells-47812c39.js";import{L as Z}from"./LakeButton-18d9ef61.js";import{a as ge}from"./LakeCheckbox-34beb070.js";import{c as Q}from"./commonStyles-d52fedae.js";import{u as ye}from"./useMergeRefs-66f03dce.js";import{L as ke}from"./LakeHeading-9bd5316b.js";import{R as we}from"./ResponsiveContainer-141a4bbf.js";import{T as Se}from"./Tag-d08da38d.js";import{v as xe}from"./v4-a960c1f4.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./array-b3630b94.js";import"./function-841632b4.js";import"./Boxed-b55f7b9d.js";import"./BorderedIcon-0a435f6a.js";import"./Icon-73a40682.js";import"./Svg-2acfd8ba.js";import"./LakeTooltip-617ea287.js";import"./index-96c5f47c.js";import"./Portal-73206726.js";import"./WithCurrentColor-109acf67.js";import"./Pressable-9d717e71.js";import"./index-ca925b5c.js";import"./index-6257b084.js";import"./index-e53aaaa4.js";const be="inherit",o=ie.create({root:{height:1,alignSelf:"stretch",flexGrow:1,backgroundColor:H.default},contentContainer:{flexDirection:"column",alignItems:"stretch",flexGrow:1},segment:{flexDirection:"row",alignItems:"stretch",overflow:"hidden",paddingHorizontal:V[8]},segmentLarge:{paddingHorizontal:V[24]},row:{boxShadow:`inset 0 -1px ${se.gray[100]}`},activeRow:{backgroundColor:H.accented},hoveredRow:{backgroundColor:H.accented},segmentHeaderCell:{display:"flex",flexDirection:"row",alignItems:"center"},stickyHeader:{position:"sticky",backgroundColor:H.default90Transparency,backdropFilter:"blur(4px)",zIndex:10,paddingHorizontal:V[24],flexDirection:"row",alignItems:"center"},stickyHeaderLarge:{paddingHorizontal:V[40]},loadingPlaceholder:{position:"absolute",left:0,right:0,top:0},rowLink:{color:be,textDecorationLine:"none"},emptyListContainer:{...Q.fill,flexDirection:"column",alignItems:"center",justifyContent:"center",padding:V[48],backgroundColor:H.default},scrollTracker:{pointerEvents:"none",position:"absolute",left:0,bottom:0,right:0}}),_=1,U=0,Ce=({id:r,item:v,index:m,rowHeight:x,columns:y,extraInfo:b,isActive:C,isHovered:f,large:k,onMouseEnter:w,onMouseLeave:p})=>{const h=n.useRef(null);return ye(h,{onHoverStart:()=>w(r),onHoverEnd:()=>p()}),e(d,{ref:h,style:[o.segment,k&&o.segmentLarge,o.row,C&&o.activeRow,f&&o.hoveredRow,{minHeight:x}],children:y.map(({width:g,id:t,renderCell:l})=>e(d,{style:[o.segmentHeaderCell,{width:typeof g=="number"?g:_,flexGrow:g==="grow"?_:U}],id:t,children:l({columnId:t,item:v,index:m,extraInfo:b,isHovered:f})},t))})},F=({data:r,keyExtractor:v,rowHeight:m,groupHeaderHeight:x,headerHeight:y,columns:b,smallColumns:C=b,extraInfo:f,onEndReached:k,onEndReachedThresholdPx:w=200,getRowLink:p,activeRowId:h,renderEmptyList:g,onActiveRowChange:t,groupBy:l,loading:c,breakpoint:D=ue.large,withoutScroll:M=!1,stickyOffset:ee=0})=>{const te=n.useId(),z=n.useRef(null),O=n.useMemo(()=>{if(l==null)return new Map([[null,r]]);const a=new Map;return r.forEach(s=>{const i=l(s);a.set(i,[...a.get(i)??[],s])}),a},[l,r]),W=m*r.length+O.size*x,T=R(c)&&c.isLoading,A=r.length===0,[ne,j]=n.useState(void 0),re=n.useCallback(()=>{j(void 0)},[]);n.useEffect(()=>{const a=z.current;if(a!=null){const s=a,i=new IntersectionObserver(u=>{u.forEach(S=>{S.isIntersecting&&R(k)&&k()})});return i.observe(s),()=>i.unobserve(s)}},[k]);const oe=n.useCallback(({item:a,absoluteIndex:s,extraInfo:i})=>{const u=p==null?void 0:p({item:a,index:s,extraInfo:i});return ce(u)?e(d,{}):u},[p]),G=n.useRef(null);n.useEffect(()=>{const a=G.current;if(h!=null&&a!=null){const s=a;s.scrollIntoView({behavior:"smooth",block:"nearest"}),t==null||t(s)}},[h,t]);const ae=n.useMemo(()=>M?e(d,{style:o.contentContainer}):e(de,{scrollEventThrottle:32,contentContainerStyle:[o.contentContainer,{minHeight:W+(T?c.count*m:0)}]}),[T,c==null?void 0:c.count,m,W,M]);return e(we,{style:M?A?Q.fill:void 0:o.root,breakpoint:D,children:({large:a})=>{const s=a?b:C;return L(B,{children:[a?e(d,{style:[o.segment,a&&o.segmentLarge],children:s.map(({id:i,width:u,title:S,renderTitle:I})=>{const E=`${te}_${i}`;return e(d,{style:[o.segmentHeaderCell,{width:typeof u=="number"?u:_,flexGrow:u==="grow"?_:U,height:y}],id:E,children:I({title:S,extraInfo:f,id:i})},E)})}):null,n.cloneElement(ae,{children:L(B,{children:[Array.from(O.entries()).map(([i,u])=>L(n.Fragment,{children:[i!=null?e(d,{style:[o.stickyHeader,a&&o.stickyHeaderLarge,{height:x,top:ee}],children:e(ke,{level:3,variant:"h3",children:i})}):null,u.map((S,I)=>{const E=v(S,I),J=h===E,le=R(p)&&ne===E,$=oe({item:S,absoluteIndex:I,extraInfo:f});return n.cloneElement($,{style:{...o.rowLink,...$.props.style},key:I,ref:J?G:null,children:e(Ce,{id:E,rowHeight:m,columns:s,item:S,index:I,extraInfo:f,isActive:J,isHovered:le,large:a,onMouseEnter:j,onMouseLeave:re})})})]},i)),e(d,{children:e(d,{"aria-busy":T,style:o.loadingPlaceholder,children:T?e(fe,{count:c.count,rowHeight:m,rowVerticalSpacing:0,paddingHorizontal:0}):null})}),A&&R(g)&&!T?e(d,{style:o.emptyListContainer,children:g()}):null,e(d,{style:[o.scrollTracker,{height:w}],ref:z})]})})]})}})};try{F.displayName="PlainListView",F.__docgenInfo={description:"",displayName:"PlainListView",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},keyExtractor:{defaultValue:null,description:"",name:"keyExtractor",required:!0,type:{name:"(item: T, index: number) => string"}},highlightedRowId:{defaultValue:null,description:"",name:"highlightedRowId",required:!1,type:{name:"string"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"number"}},groupHeaderHeight:{defaultValue:null,description:"",name:"groupHeaderHeight",required:!0,type:{name:"number"}},extraInfo:{defaultValue:null,description:"",name:"extraInfo",required:!0,type:{name:"ExtraInfo"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},smallColumns:{defaultValue:null,description:"",name:"smallColumns",required:!1,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},onEndReached:{defaultValue:null,description:"",name:"onEndReached",required:!1,type:{name:"(() => void)"}},onEndReachedThresholdPx:{defaultValue:{value:"200"},description:"",name:"onEndReachedThresholdPx",required:!1,type:{name:"number"}},getRowLink:{defaultValue:null,description:"",name:"getRowLink",required:!1,type:{name:"((config: LinkConfig<T, ExtraInfo>) => ReactElement<{ children: (state: PressableStateCallbackType) => ReactNode; }, string | JSXElementConstructor<...>>)"}},renderEmptyList:{defaultValue:null,description:"",name:"renderEmptyList",required:!1,type:{name:"(() => ReactNode)"}},groupBy:{defaultValue:null,description:"",name:"groupBy",required:!1,type:{name:"((item: T) => string)"}},onActiveRowChange:{defaultValue:null,description:"",name:"onActiveRowChange",required:!1,type:{name:"((element: HTMLElement) => void)"}},activeRowId:{defaultValue:null,description:"",name:"activeRowId",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"{ isLoading: boolean; count: number; }"}},breakpoint:{defaultValue:{value:"950"},description:"",name:"breakpoint",required:!1,type:{name:"number"}},withoutScroll:{defaultValue:{value:"false"},description:"",name:"withoutScroll",required:!1,type:{name:"boolean"}},stickyOffset:{defaultValue:{value:"0"},description:"",name:"stickyOffset",required:!1,type:{name:"number"}}}}}catch{}const et={title:"Layout/PlainListView",component:F},Ie=({id:r})=>r,Ee=()=>{const r=["Matthias","John","Jane","Camille","Charlotte","Francis","Émilie","François","Laura","Marie","Natasha","Nicolas","Pierre","Thomas","Valérie","Yann","Zoé","Jérôme","Thomas"];return r[Math.floor(Math.random()*r.length)]??r[0]},N=r=>({id:xe(),name:Ee(),modulo:String(r%10)}),q=()=>{const[r,v]=n.useState({key:"name",order:"Desc"}),[m,x]=n.useState(0),[y,b]=n.useState(!1),[C,f]=n.useState(!1),[k,w]=n.useState(()=>Array.from({length:100},(t,l)=>N(l))),p=()=>{w(t=>[N(t.length),...t])},h=n.useCallback(()=>{x(t=>t+1),y&&f(!0)},[y]);n.useEffect(()=>{if(C){const t=setTimeout(()=>{f(!1),w(l=>[...l,...Array.from({length:100},(c,D)=>N(D+l.length))])},1e3);return()=>clearTimeout(t)}});const g=n.useMemo(()=>[{id:"name",width:"grow",title:"Name",renderTitle:({title:t,extraInfo:l,id:c})=>e(pe,{text:t,sort:l.key===c?l.order:void 0,onPress:()=>v({key:c,order:l.order==="Desc"?"Asc":"Desc"})}),renderCell:({item:{name:t}})=>e(he,{text:t})}],[]);return L(B,{children:[L(me,{direction:"row",alignItems:"center",children:[e(Z,{icon:"add-circle-filled",color:"live",onPress:p,children:"Prepend"}),e(P,{width:16}),e(Z,{icon:"delete-filled",color:"negative",onPress:()=>w([]),children:"Clear"}),e(P,{width:16}),L(Se,{label:"End reached",children:[m," times"]}),e(P,{width:16}),e(ge,{label:"With infinite scroll",value:y,onValueChange:b})]}),e(P,{height:16}),e(F,{groupBy:t=>t.modulo,extraInfo:r,keyExtractor:Ie,data:k,columns:g,rowHeight:48,headerHeight:48,groupHeaderHeight:48,onEndReached:h,onEndReachedThresholdPx:300,loading:{isLoading:C,count:5}})]})};var X,Y,K;q.parameters={...q.parameters,docs:{...(X=q.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(K=(Y=q.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};const tt=["Primary"];export{q as Primary,tt as __namedExportsOrder,et as default};
//# sourceMappingURL=PlainListView.stories-d78ddeb1.js.map
