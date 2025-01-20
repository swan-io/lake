import{j as e}from"./jsx-runtime-DT09rT5F.js";import{a9 as h,aa as u}from"./ScrollView-uRWD7sHo.js";import{r as t}from"./index-DXKZGL6g.js";import{a as S,L as c}from"./LakeButton-DOM2fx1m.js";import{S as k}from"./SwanLogo-c4MiAWPP.js";import{S as f}from"./_StoriesComponents-BTk4MJDM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CKeW-Qoz.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-DcSKb_Ww.js";import"./index-oSnkc6z1.js";import"./extends-CF3RwP-h.js";import"./Separator-Bs5w-fAv.js";const L=s=>{const o=t.useRef(s.isDone()),i=t.useRef(h.make()),[n,a]=i.current,l=t.useMemo(()=>n.toPromise(),[n]);if(t.useEffect(()=>{s.isDone()&&(a(void 0),o.current=!0)},[s,a]),!o.current)throw l},T={title:"Utils/useAsyncDataSuspense",component:k},x=({asyncData:s})=>(L(s),s.match({NotAsked:()=>e.jsx("h1",{children:"Component not asked"}),Loading:()=>e.jsx("h1",{children:"Component loading"}),Done:o=>e.jsx("h1",{children:o})})),r=()=>{const[s,o]=t.useState(0),[i,n]=t.useState(u.NotAsked());return e.jsxs(f,{title:"SwanLogo",children:[e.jsxs(S,{children:[e.jsx(c,{onPress:()=>o(a=>a+1),children:"Reset"}),e.jsx(c,{onPress:()=>n(u.NotAsked()),children:"NotAsked"}),e.jsx(c,{onPress:()=>n(u.Loading()),children:"Loading"}),e.jsx(c,{onPress:()=>n(u.Done("hello there")),children:"Done"})]}),e.jsx(t.Suspense,{fallback:e.jsx("h1",{children:"Suspense loading"}),children:e.jsx(x,{asyncData:i},s)})]})};r.__docgenInfo={description:"",methods:[],displayName:"useAsyncDataSuspenseDemos"};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const G=["useAsyncDataSuspenseDemos"];export{G as __namedExportsOrder,T as default,r as useAsyncDataSuspenseDemos};
//# sourceMappingURL=Suspense.stories-C_lc9eM5.js.map
