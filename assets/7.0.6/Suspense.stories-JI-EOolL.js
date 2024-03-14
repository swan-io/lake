import{U as h,X as a,j as e}from"./Space-ChRvaji1.js";import{r as t}from"./index-CBqU2yxZ.js";import{a as S,L as u}from"./LakeButton-DtHKm00B.js";import{S as k}from"./SwanLogo-DQX9A0Yt.js";import{S as f}from"./_StoriesComponents-DuIeS3XV.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-DD_-8IPu.js";import"./index-BkhpigpK.js";const L=s=>{const o=t.useRef(s.isDone()),c=t.useRef(h.make()),[n,i]=c.current,l=t.useMemo(()=>n.toPromise(),[n]);if(t.useEffect(()=>{s.isDone()&&(i(void 0),o.current=!0)}),!o.current)throw l},_={title:"Utils/useAsyncDataSuspense",component:k},D=({asyncData:s})=>(L(s),s.match({NotAsked:()=>e.jsx("h1",{children:"Component not asked"}),Loading:()=>e.jsx("h1",{children:"Component loading"}),Done:o=>e.jsx("h1",{children:o})})),r=()=>{const[s,o]=t.useState(0),[c,n]=t.useState(a.NotAsked());return e.jsxs(f,{title:"SwanLogo",children:[e.jsxs(S,{children:[e.jsx(u,{onPress:()=>o(i=>i+1),children:"Reset"}),e.jsx(u,{onPress:()=>n(a.NotAsked()),children:"NotAsked"}),e.jsx(u,{onPress:()=>n(a.Loading()),children:"Loading"}),e.jsx(u,{onPress:()=>n(a.Done("hello there")),children:"Done"})]}),e.jsx(t.Suspense,{fallback:e.jsx("h1",{children:"Suspense loading"}),children:e.jsx(D,{asyncData:c},s)})]})};r.__docgenInfo={description:"",methods:[],displayName:"useAsyncDataSuspenseDemos"};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Suspense.stories-JI-EOolL.js.map
