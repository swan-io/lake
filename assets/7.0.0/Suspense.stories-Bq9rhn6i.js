import{Y as k,Z as r,j as d,a as e}from"./Space-DOX6gAiW.js";import{r as s}from"./index-CBqU2yxZ.js";import{a as S,L as a}from"./LakeButton-B3KFTJp0.js";import{S as f}from"./SwanLogo-CfB4FYXF.js";import{S as L}from"./_StoriesComponents-xnDfvWtG.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-DfxPIYeB.js";import"./index-z9UhBOMa.js";const D=t=>{const o=s.useRef(t.isDone()),c=s.useRef(k.make()),[n,i]=c.current,h=s.useMemo(()=>n.toPromise(),[n]);if(s.useEffect(()=>{t.isDone()&&(i(void 0),o.current=!0)}),!o.current)throw h},j={title:"Utils/useAsyncDataSuspense",component:f},A=({asyncData:t})=>(D(t),t.match({NotAsked:()=>e("h1",{children:"Component not asked"}),Loading:()=>e("h1",{children:"Component loading"}),Done:o=>e("h1",{children:o})})),u=()=>{const[t,o]=s.useState(0),[c,n]=s.useState(r.NotAsked());return d(L,{title:"SwanLogo",children:[d(S,{children:[e(a,{onPress:()=>o(i=>i+1),children:"Reset"}),e(a,{onPress:()=>n(r.NotAsked()),children:"NotAsked"}),e(a,{onPress:()=>n(r.Loading()),children:"Loading"}),e(a,{onPress:()=>n(r.Done("hello there")),children:"Done"})]}),e(s.Suspense,{fallback:e("h1",{children:"Suspense loading"}),children:e(A,{asyncData:c},t)})]})};var p,l,m;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(m=(l=u.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const v=["useAsyncDataSuspenseDemos"];export{v as __namedExportsOrder,j as default,u as useAsyncDataSuspenseDemos};
//# sourceMappingURL=Suspense.stories-Bq9rhn6i.js.map
