import{aj as d,R as u,j as e}from"./ScrollView-Be2uaeG1.js";import{r as t}from"./iframe-CM3RFg6E.js";import{L as m,a as c}from"./LakeButton-OvTMb_WF.js";import{S as l}from"./SwanLogo-Dsinvxnr.js";import{S as h}from"./_StoriesComponents-CWTMDqNc.js";import"./index-uExSJENR.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-B-CjcGuW.js";import"./index-Cy5rO2Vu.js";import"./extends-CF3RwP-h.js";import"./Separator-CadOK1O6.js";const S=s=>{const o=t.useRef(s.isDone()),i=t.useRef(d.make()),[n,a]=i.current,p=t.useMemo(()=>n.toPromise(),[n]);if(t.useEffect(()=>{s.isDone()&&(a(void 0),o.current=!0)},[s,a]),!o.current)throw p},N={title:"Utils/useAsyncDataSuspense",component:l},k=({asyncData:s})=>(S(s),s.match({NotAsked:()=>e.jsx("h1",{children:"Component not asked"}),Loading:()=>e.jsx("h1",{children:"Component loading"}),Done:o=>e.jsx("h1",{children:o})})),r=()=>{const[s,o]=t.useState(0),[i,n]=t.useState(u.NotAsked());return e.jsxs(h,{title:"SwanLogo",children:[e.jsxs(m,{children:[e.jsx(c,{onPress:()=>o(a=>a+1),children:"Reset"}),e.jsx(c,{onPress:()=>n(u.NotAsked()),children:"NotAsked"}),e.jsx(c,{onPress:()=>n(u.Loading()),children:"Loading"}),e.jsx(c,{onPress:()=>n(u.Done("hello there")),children:"Done"})]}),e.jsx(t.Suspense,{fallback:e.jsx("h1",{children:"Suspense loading"}),children:e.jsx(k,{asyncData:i},s)})]})};r.__docgenInfo={description:"",methods:[],displayName:"useAsyncDataSuspenseDemos"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const w=["useAsyncDataSuspenseDemos"];export{w as __namedExportsOrder,N as default,r as useAsyncDataSuspenseDemos};
//# sourceMappingURL=Suspense.stories-BQtyvpXt.js.map
