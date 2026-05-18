import{c as e,i as t}from"./preload-helper-BnfVW-Vi.js";import{o as n}from"./iframe-Bq2x3Iai.js";import{E as r,U as i,k as a,w as o}from"./ScrollView-DcIByLZz.js";import{n as s,r as c,t as l}from"./LakeButton-CpBoi28m.js";import{r as u,t as d}from"./_StoriesComponents-BSHgV9ow.js";import{n as f,t as p}from"./SwanLogo-DujtBTsV.js";var m,h,g=t((()=>{r(),m=e(n()),h=e=>{let t=(0,m.useRef)(e.isDone()),[n,r]=(0,m.useRef)(a.make()).current,i=(0,m.useMemo)(()=>n.toPromise(),[n]);if((0,m.useEffect)(()=>{e.isDone()&&(r(void 0),t.current=!0)},[e,r]),!t.current)throw i}})),_,v,y,b,x,S;t((()=>{r(),_=e(n()),c(),f(),g(),u(),v=i(),y={title:`Utils/useAsyncDataSuspense`,component:p},b=({asyncData:e})=>(h(e),e.match({NotAsked:()=>(0,v.jsx)(`h1`,{children:`Component not asked`}),Loading:()=>(0,v.jsx)(`h1`,{children:`Component loading`}),Done:e=>(0,v.jsx)(`h1`,{children:e})})),x=()=>{let[e,t]=(0,_.useState)(0),[n,r]=(0,_.useState)(o.NotAsked());return(0,v.jsxs)(d,{title:`SwanLogo`,children:[(0,v.jsxs)(s,{children:[(0,v.jsx)(l,{onPress:()=>t(e=>e+1),children:`Reset`}),(0,v.jsx)(l,{onPress:()=>r(o.NotAsked()),children:`NotAsked`}),(0,v.jsx)(l,{onPress:()=>r(o.Loading()),children:`Loading`}),(0,v.jsx)(l,{onPress:()=>r(o.Done(`hello there`)),children:`Done`})]}),(0,v.jsx)(_.Suspense,{fallback:(0,v.jsx)(`h1`,{children:`Suspense loading`}),children:(0,v.jsx)(b,{asyncData:n},e)})]})},x.__docgenInfo={description:``,methods:[],displayName:`useAsyncDataSuspenseDemos`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [refreshCount, setRefreshCount] = useState(0);
  const [state, setState] = useState<AsyncData<string>>(AsyncData.NotAsked());
  return <StoryBlock title="SwanLogo">
      <LakeButtonGroup>
        <LakeButton onPress={() => setRefreshCount(x => x + 1)}>Reset</LakeButton>
        <LakeButton onPress={() => setState(AsyncData.NotAsked())}>NotAsked</LakeButton>
        <LakeButton onPress={() => setState(AsyncData.Loading())}>Loading</LakeButton>
        <LakeButton onPress={() => setState(AsyncData.Done("hello there"))}>Done</LakeButton>
      </LakeButtonGroup>

      <Suspense fallback={<h1>Suspense loading</h1>}>
        <TestComponent asyncData={state} key={refreshCount} />
      </Suspense>
    </StoryBlock>;
}`,...x.parameters?.docs?.source}}},S=[`useAsyncDataSuspenseDemos`]}))();export{S as __namedExportsOrder,y as default,x as useAsyncDataSuspenseDemos};
//# sourceMappingURL=Suspense.stories-CzHnuNoF.js.map