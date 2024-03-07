import{j as p,a as e}from"./Space-BCziztcN.js";import{A as S,j as r}from"./Boxed-zE7Q22Jk.js";import{r as s}from"./index-CBqU2yxZ.js";import{a as k,L as a}from"./LakeButton-ChmxUdFG.js";import{S as f}from"./SwanLogo-CEdZLonP.js";import{S as L}from"./_StoriesComponents-CsF9jyfb.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-Bdp8T-E1.js";import"./Pressable-CoGghYMa.js";import"./index-CVrd429m.js";const D=t=>{const o=s.useRef(t.isDone()),c=s.useRef(S.make()),[n,i]=c.current,h=s.useMemo(()=>n.toPromise(),[n]);if(s.useEffect(()=>{t.isDone()&&(i(void 0),o.current=!0)}),!o.current)throw h},E={title:"Utils/useAsyncDataSuspense",component:f},A=({asyncData:t})=>(D(t),t.match({NotAsked:()=>e("h1",{children:"Component not asked"}),Loading:()=>e("h1",{children:"Component loading"}),Done:o=>e("h1",{children:o})})),u=()=>{const[t,o]=s.useState(0),[c,n]=s.useState(r.NotAsked());return p(L,{title:"SwanLogo",children:[p(k,{children:[e(a,{onPress:()=>o(i=>i+1),children:"Reset"}),e(a,{onPress:()=>n(r.NotAsked()),children:"NotAsked"}),e(a,{onPress:()=>n(r.Loading()),children:"Loading"}),e(a,{onPress:()=>n(r.Done("hello there")),children:"Done"})]}),e(s.Suspense,{fallback:e("h1",{children:"Suspense loading"}),children:e(A,{asyncData:c},t)})]})};var d,m,l;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(l=(m=u.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const G=["useAsyncDataSuspenseDemos"];export{G as __namedExportsOrder,E as default,u as useAsyncDataSuspenseDemos};
//# sourceMappingURL=Suspense.stories-Chs3YB7K.js.map
