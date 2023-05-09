import{S as b,a as i,j as T,k as P,V as y,c as m,L as A}from"./Space-e34312c8.js";import{r as a}from"./index-ebeaab24.js";import{B as E}from"./index-9e94fa55.js";import{S as V}from"./_StoriesComponents-cc47749d.js";import{P as B}from"./index-205208f0.js";import"./extends-98964cd2.js";const g=b.create({track:{position:"absolute",top:0,right:0,bottom:0,width:3},marker:{pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,width:3},trackIndicator:{width:3,height:1,position:"absolute",right:0,transformOrigin:"right top",transition:"150ms ease-in-out",transitionProperty:"transform, background-color"}}),_=a.createContext(t=>{}),h=(t,o)=>{const r=t.offsetHeight,e=o.parentElement;if(e==null||!e.contains(t))return{top:0,height:r};let s=0,n=t;for(;n!=null&&n!=e;)s+=n.offsetTop,n=n.offsetParent;return{top:s,height:r}},d=({style:t,contentContainerStyle:o,children:r})=>{const[e,s]=a.useState(null),n=a.useRef(null),u=a.useRef(null),R=a.useCallback(({color:p,element:c})=>{if(n.current!=null){u.current=c;const{top:x,height:C}=h(c,n.current);s({color:p,top:x,height:C})}},[]),N=a.useCallback(()=>{if(u.current!=null&&(e==null?void 0:e.color)!=null){const{top:p,height:c}=h(u.current,n.current);s({color:e==null?void 0:e.color,top:p,height:c})}},[e]);return i(_.Provider,{value:R,children:T(P,{scrollEventThrottle:30,onLayout:N,style:t,contentContainerStyle:o,role:"banner",children:[r,i(y,{style:g.track,ref:n,children:e!=null?i(y,{style:[g.trackIndicator,{transform:`translateY(${e.top}px) scaleY(${e.height})`,backgroundColor:e.color}]}):null})]})})},f=({color:t})=>{const o=a.useContext(_),r=a.useRef(null),e=a.useCallback(()=>{r.current!=null&&o({color:t,element:r.current})},[o,t]);return a.useEffect(()=>{r.current!=null&&o({color:t,element:r.current})},[o,t]),i(y,{ref:r,onLayout:e,style:g.marker})};try{d.displayName="SidebarNavigationTracker",d.__docgenInfo={description:"",displayName:"SidebarNavigationTracker",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},contentContainerStyle:{defaultValue:null,description:"",name:"contentContainerStyle",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}try{f.displayName="SidebarNavigationTrackerActiveMarker",f.__docgenInfo={description:"",displayName:"SidebarNavigationTrackerActiveMarker",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}const k=b.create({container:{maxWidth:200},row:{height:32,width:"100%"}}),H={title:"Interactivity/SidebarNavigationTracker",component:d},L=(t,o)=>new Array(o-t+1).fill(0).map((r,e)=>t+e),I=L(1,10).map(t=>({id:t.toString(),title:`Row ${t}`})),l=()=>{const[t,o]=a.useState(""),r=e=>()=>{o(e)};return i(V,{title:"SidebarNavigationTracker",description:"You can click on a row to display the navigation tracker",children:i(d,{contentContainerStyle:k.container,children:I.map(e=>i(B,{onPress:r(e.id),children:T(E,{style:k.row,direction:"row",children:[t===e.id&&i(f,{color:m.positive.primary}),i(A,{color:t===e.id?m.positive.primary:m.gray.primary,variant:t===e.id?"semibold":"regular",children:e.title})]})},e.id))})})};var v,w,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [activeRow, setActiveRow] = useState("");
  const selectRow = (id: string) => () => {
    setActiveRow(id);
  };
  return <StoryBlock title="SidebarNavigationTracker" description="You can click on a row to display the navigation tracker">
      <SidebarNavigationTracker contentContainerStyle={styles.container}>
        {rows.map(row => <Pressable key={row.id} onPress={selectRow(row.id)}>
            <Box style={styles.row} direction="row">
              {activeRow === row.id && <SidebarNavigationTrackerActiveMarker color={colors.positive.primary} />}

              <LakeText color={activeRow === row.id ? colors.positive.primary : colors.gray.primary} variant={activeRow === row.id ? "semibold" : "regular"}>
                {row.title}
              </LakeText>
            </Box>
          </Pressable>)}
      </SidebarNavigationTracker>
    </StoryBlock>;
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const O=["Default"];export{l as Default,O as __namedExportsOrder,H as default};
//# sourceMappingURL=SidebarNavigationTracker.stories-5f7a5df4.js.map
