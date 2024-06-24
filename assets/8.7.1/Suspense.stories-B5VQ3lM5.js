import{O as h,Q as u,j as e}from"./ScrollView-D_yl_r2G.js";import{r as t}from"./index-uCp2LrAq.js";import{a as S,L as c}from"./LakeButton-C41vxHAP.js";import{S as k}from"./SwanLogo-D6Jao2wu.js";import{S as f}from"./_StoriesComponents-D6eIYpVo.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-7rRI3Ghv.js";import"./index-1Idul8KQ.js";import"./extends-CF3RwP-h.js";const L=s=>{const o=t.useRef(s.isDone()),i=t.useRef(h.make()),[n,a]=i.current,l=t.useMemo(()=>n.toPromise(),[n]);if(t.useEffect(()=>{s.isDone()&&(a(void 0),o.current=!0)},[s,a]),!o.current)throw l},_={title:"Utils/useAsyncDataSuspense",component:k},x=({asyncData:s})=>(L(s),s.match({NotAsked:()=>e.jsx("h1",{children:"Component not asked"}),Loading:()=>e.jsx("h1",{children:"Component loading"}),Done:o=>e.jsx("h1",{children:o})})),r=()=>{const[s,o]=t.useState(0),[i,n]=t.useState(u.NotAsked());return e.jsxs(f,{title:"SwanLogo",children:[e.jsxs(S,{children:[e.jsx(c,{onPress:()=>o(a=>a+1),children:"Reset"}),e.jsx(c,{onPress:()=>n(u.NotAsked()),children:"NotAsked"}),e.jsx(c,{onPress:()=>n(u.Loading()),children:"Loading"}),e.jsx(c,{onPress:()=>n(u.Done("hello there")),children:"Done"})]}),e.jsx(t.Suspense,{fallback:e.jsx("h1",{children:"Suspense loading"}),children:e.jsx(x,{asyncData:i},s)})]})};r.__docgenInfo={description:"",methods:[],displayName:"useAsyncDataSuspenseDemos"};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const E=["useAsyncDataSuspenseDemos"];export{E as __namedExportsOrder,_ as default,r as useAsyncDataSuspenseDemos};
//# sourceMappingURL=Suspense.stories-B5VQ3lM5.js.map
