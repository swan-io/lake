import{R as g,j as e,L as q,c as M,M as z,k as R,z as $,s as N,p as C,y as V,P as j,B as U}from"./ScrollView-C19etCwk.js";import{L as E}from"./LakeCombobox-Ci6S_ds4.js";import{r as l}from"./iframe-UnSFTajO.js";import{S as Y}from"./Separator-rR7D1BeD.js";import{c as O,g as F}from"./countries-YrzKR3vd.js";import{_ as H}from"./preload-helper-D1IIBeq1.js";import{t as G}from"./i18n-D7o2kBLF.js";import{S as J,a as y}from"./_StoriesComponents-DbHjm-wz.js";import{M as Q}from"./index-DxscJms1.js";import"./index-BHZZ4-I5.js";import"./Pressable-BdFKp33q.js";import"./FocusTrap-WL8hZjLi.js";import"./array-BfAlyugE.js";import"./Popover-DZpQuo1m.js";import"./useResponsive-Dlxjlk6t.js";import"./function-iUNJc4bu.js";import"./BottomPanel-BIIKXCNW.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-CQFRDPi_.js";import"./Suspendable-BUJfbgao.js";import"./index-Cr_VThp4.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BqF6ZKwa.js";import"./LakeTextInput-B33_LZvM.js";import"./Fill-hNV5fnZr.js";import"./LakeSelect-Boh3d3E6.js";import"./useDisclosure-Cws0nt6t.js";import"./index-D6uCedjA.js";import"./string-BwTa0fyd.js";import"./rifm-BrMwKOQu.js";const _=N.create({unselectable:{userSelect:"none"}}),I=({inputRef:i,value:o,onValueChange:t,disabled:u,id:r,placeholder:c,error:h,emptyResult:v,ListFooterComponent:s,shouldDisplaySuggestions:S=!0,loadSuggestions:p,onSuggestion:T,onLoadError:x})=>{const[f,m]=l.useState(g.NotAsked()),a=l.useRef(void 0);return e.jsx(E,{inputRef:i,id:r,placeholder:c,value:o??"",items:f,icon:p!=null?"search-filled":void 0,disabled:u,error:h,ListFooterComponent:s!=null&&e.jsxs(e.Fragment,{children:[z(f).with(g.P.Done(R.P.Ok($.select())),n=>n.length>0?e.jsx(Y,{}):null).otherwise(()=>null),s]}),onSelectItem:n=>{T(n)},onValueChange:n=>{if(a.current?.cancel(),a.current=void 0,t(n),n.length<=3||!S)return m(g.NotAsked());if(p!=null){m(g.Loading());const d=p(n);a.current=d,x!=null&&d.tapError(x),d.onResolve(w=>m(g.Done(w)))}},keyExtractor:n=>`${n.title} ${n.subtitle}`,emptyResult:v,renderItem:n=>e.jsxs(e.Fragment,{children:[e.jsx(q,{numberOfLines:1,style:_.unselectable,color:M.gray[900],children:n.title}),e.jsx(q,{numberOfLines:1,style:_.unselectable,variant:"smallRegular",children:n.subtitle})]})})};I.__docgenInfo={description:"",methods:[],displayName:"AutocompleteSearchInput",props:{inputRef:{required:!1,tsType:{name:"Ref",elements:[{name:"unknown"}],raw:"Ref<unknown>"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},emptyResult:{required:!0,tsType:{name:"string"},description:""},ListFooterComponent:{required:!1,tsType:{name:"ReactNode"},description:""},shouldDisplaySuggestions:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loadSuggestions:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => Future<Result<Suggestion<T>[], unknown>>",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  subtitle: string;
  value: T;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"subtitle",value:{name:"string",required:!0}},{key:"value",value:{name:"T",required:!0}}]}}],raw:"Suggestion<T>[]"},{name:"unknown"}],raw:"Result<Suggestion<T>[], unknown>"}],raw:"Future<Result<Suggestion<T>[], unknown>>"}}},description:""},onSuggestion:{required:!0,tsType:{name:"signature",type:"function",raw:"(suggestion: Suggestion<T>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  title: string;
  subtitle: string;
  value: T;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"subtitle",value:{name:"string",required:!0}},{key:"value",value:{name:"T",required:!0}}]}},name:"suggestion"}],return:{name:"void"}}},description:""},onLoadError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"error"}],return:{name:"void"}}},description:""}}};const L=(i,o)=>{let t;return(...u)=>(clearTimeout(t),new Promise(r=>{t=setTimeout(()=>r(i(...u)),o)}))},W=({apiKey:i,debounceInterval:o=1e3})=>{const[t,u]=l.useState();return l.useEffect(()=>{i!=null&&H(async()=>{const{default:r}=await import("./placekit-lite-QUl6RCyD.js");return{default:r}},[]).then(({default:r})=>{u(r(i))})},[i]),l.useMemo(()=>{if(t!=null)return{...t,search:L(t.search,o),reverse:L(t.reverse,o)}},[t,o])},K=({inputRef:i,id:o,country:t,disabled:u,error:r,value:c,types:h=["street"],onValueChange:v,onSuggestion:s,language:S,placeholder:p,shouldDisplaySuggestions:T=!0,emptyResult:x,apiKey:f})=>{const m=W({apiKey:f}),a=l.useCallback(d=>{if(m!=null){const w=C.fromNullable(t).map(A=>V.filterMap(O[A]??[A],k=>C.fromNullable(F(k)))).getOr([]),D=w.length===0?C.None():C.Some(w);return j.fromPromise(m.search(d,{types:h,language:S,countries:D.toUndefined()})).mapOk(({results:A})=>A.map(k=>({title:k.name,subtitle:`${k.city} (${k.country})`,value:k})),!0)}return j.value(R.Ok([]))},[m,t,S,h]),n=l.useCallback(d=>{s?.({completeAddress:d.value.name,postalCode:d.value.zipcode[0],city:d.value.city,country:d.value.country,countryCode:d.value.countrycode})},[s]);return e.jsx(I,{inputRef:i,value:c,onValueChange:v,disabled:u,id:o,placeholder:p,error:r,emptyResult:x,shouldDisplaySuggestions:T,loadSuggestions:m!=null?a:void 0,onSuggestion:n})};K.__docgenInfo={description:"",methods:[],displayName:"PlacekitAddressSearchInput",props:{inputRef:{required:!1,tsType:{name:"Ref",elements:[{name:"unknown"}],raw:"Ref<unknown>"},description:""},id:{required:!1,tsType:{name:"string"},description:""},types:{required:!1,tsType:{name:'PKOptions["types"]',raw:'PKOptions["types"]'},description:"",defaultValue:{value:'["street"]',computed:!1}},country:{required:!1,tsType:{name:'Simplify["cca3"]',raw:'Country["cca3"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""},onSuggestion:{required:!1,tsType:{name:"signature",type:"function",raw:"(suggestion: AddressDetail) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  completeAddress: string;
  city: string;
  postalCode?: string;
  country: string;
  countryCode: string;
}`,signature:{properties:[{key:"completeAddress",value:{name:"string",required:!0}},{key:"city",value:{name:"string",required:!0}},{key:"postalCode",value:{name:"string",required:!1}},{key:"country",value:{name:"string",required:!0}},{key:"countryCode",value:{name:"string",required:!0}}]}},name:"suggestion"}],return:{name:"void"}}},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},value:{required:!1,tsType:{name:"string"},description:""},language:{required:!0,tsType:{name:"union",raw:'"en" | "es" | "de" | "fi" | "fr" | "it" | "nl" | "pt"',elements:[{name:"literal",value:'"en"'},{name:"literal",value:'"es"'},{name:"literal",value:'"de"'},{name:"literal",value:'"fi"'},{name:"literal",value:'"fr"'},{name:"literal",value:'"it"'},{name:"literal",value:'"nl"'},{name:"literal",value:'"pt"'}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},shouldDisplaySuggestions:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},emptyResult:{required:!0,tsType:{name:"string"},description:""},apiKey:{required:!1,tsType:{name:"string"},description:""}}};const B=({value:i,onValueChange:o,country:t,disabled:u,placeholder:r,id:c,error:h,onSuggestion:v,onLoadError:s,apiKey:S})=>{const p=W({apiKey:S}),T=l.useCallback(f=>{if(p!=null){const m=C.fromNullable(t).map(a=>O[a]??[a]).map(a=>V.filterMap(a,n=>C.fromNullable(F(n)))).flatMap(a=>a.length===0?C.None():C.Some(a));return j.fromPromise(p.search(f,{types:["city"],countries:m.toUndefined()})).mapOk(({results:a})=>a.map(n=>({title:n.name,subtitle:n.city,value:n})),!0)}return j.value(R.Ok([]))},[p,t]),x=l.useCallback(f=>{v?.({city:f.value.city,postalCode:f.value.zipcode[0]})},[v]);return e.jsx(I,{value:i,onValueChange:o,disabled:u,id:c,placeholder:r,error:h,emptyResult:G("common.noResult"),loadSuggestions:p!=null?T:void 0,onSuggestion:x,onLoadError:s})};B.__docgenInfo={description:"",methods:[],displayName:"PlacekitCityInput",props:{value:{required:!0,tsType:{name:"string"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},country:{required:!1,tsType:{name:'Simplify["cca3"]',raw:'Country["cca3"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onSuggestion:{required:!1,tsType:{name:"signature",type:"function",raw:"(place: CityDetail) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  city: string;
  postalCode?: string;
}`,signature:{properties:[{key:"city",value:{name:"string",required:!0}},{key:"postalCode",value:{name:"string",required:!1}}]}},name:"place"}],return:{name:"void"}}},description:""},onLoadError:{required:!0,tsType:{name:"signature",type:"function",raw:"(error: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"error"}],return:{name:"void"}}},description:""},apiKey:{required:!1,tsType:{name:"string"},description:""}}};const X=N.create({footer:{paddingHorizontal:12}}),Re={title:"Forms/Combobox",component:E},Z=i=>{const o=fetch(`https://dummyjson.com/products/search?limit=10&q=${i}`).then(t=>t.json()).then(t=>t.products);return j.fromPromise(o)},b=i=>{const[o,t]=l.useState(null),[u,r]=l.useState(()=>g.NotAsked()),[c,h]=l.useState(""),v=o?o.title:c;return l.useEffect(()=>{if(!c){r(g.NotAsked());return}r(g.Loading());const s=Z(c);return s.onResolve(S=>{r(g.Done(S))}),()=>{s.cancel()}},[c]),e.jsx(E,{value:v,items:u,onValueChange:s=>{t(null),h(s)},onSelectItem:s=>{r(g.NotAsked()),t(s)},keyExtractor:s=>s.id.toString(),renderItem:s=>e.jsx(q,{children:s.title}),emptyResult:"No result",...i})},P=()=>{const[i,o]=l.useState(""),[t,u]=l.useState("");return e.jsxs(J,{title:"Combobox",children:[e.jsx(y,{title:"By default",children:e.jsx(b,{})}),e.jsx(y,{title:"Is disabled",children:e.jsx(b,{disabled:!0})}),e.jsx(y,{title:"Is readOnly",children:e.jsx(b,{readOnly:!0})}),e.jsx(y,{title:"With icon",children:e.jsx(b,{icon:"add-circle-regular"})}),e.jsx(y,{title:"With placeholder",children:e.jsx(b,{placeholder:"Enter a product"})}),e.jsx(y,{title:"With error",children:e.jsx(b,{placeholder:"An error occurred"})}),e.jsx(y,{title:"With Footer Component",children:e.jsx(b,{ListFooterComponent:e.jsx(U,{direction:"row",justifyContent:"end",style:X.footer,children:e.jsx(q,{children:"With footer component"})})})}),e.jsx(y,{title:"With custom empty result",children:e.jsx(b,{emptyResult:e.jsxs(q,{children:["Company not listed?"," ",e.jsx(Q,{onPress:()=>console.log("On Press"),style:({hovered:r})=>({opacity:r?.5:1}),children:"Add your organization details"})]})})}),e.jsx(y,{title:"CityInput",children:e.jsx(B,{apiKey:void 0,country:"FRA",value:t,onValueChange:u,onSuggestion:r=>{console.log(r.city),console.log(r.postalCode)},onLoadError:()=>{}})}),e.jsx(y,{title:"AddressInput",children:e.jsx(K,{apiKey:void 0,country:"FRA",value:i,onValueChange:o,onSuggestion:r=>{console.log(r.completeAddress),console.log(r.city),console.log(r.postalCode)},language:"fr",placeholder:"",emptyResult:"Nothing"})})]})};P.__docgenInfo={description:"",methods:[],displayName:"Variations"};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  return <StoryBlock title="Combobox">
      <StoryPart title="By default">
        <EditableCombobox />
      </StoryPart>

      <StoryPart title="Is disabled">
        <EditableCombobox disabled={true} />
      </StoryPart>

      <StoryPart title="Is readOnly">
        <EditableCombobox readOnly={true} />
      </StoryPart>

      <StoryPart title="With icon">
        <EditableCombobox icon={"add-circle-regular"} />
      </StoryPart>

      <StoryPart title="With placeholder">
        <EditableCombobox placeholder={"Enter a product"} />
      </StoryPart>

      <StoryPart title="With error">
        <EditableCombobox placeholder={"An error occurred"} />
      </StoryPart>

      <StoryPart title="With Footer Component">
        <EditableCombobox ListFooterComponent={<Box direction="row" justifyContent="end" style={styles.footer}>
              <LakeText>With footer component</LakeText>
            </Box>} />
      </StoryPart>

      <StoryPart title="With custom empty result">
        <EditableCombobox emptyResult={<LakeText>
              Company not listed?{" "}
              <Pressable onPress={() => console.log("On Press")} style={({
          hovered
        }) => ({
          opacity: hovered ? 0.5 : 1
        })}>
                Add your organization details
              </Pressable>
            </LakeText>} />
      </StoryPart>

      <StoryPart title="CityInput">
        <PlacekitCityInput apiKey={PLACEKIT_API_KEY} country="FRA" value={city} onValueChange={setCity} onSuggestion={place => {
        console.log(place.city);
        console.log(place.postalCode);
      }} onLoadError={() => {}} />
      </StoryPart>

      <StoryPart title="AddressInput">
        <PlacekitAddressSearchInput apiKey={PLACEKIT_API_KEY} country="FRA" value={search} onValueChange={setSearch} onSuggestion={place => {
        console.log(place.completeAddress);
        console.log(place.city);
        console.log(place.postalCode);
      }} language="fr" placeholder="" emptyResult="Nothing" />
      </StoryPart>
    </StoryBlock>;
}`,...P.parameters?.docs?.source}}};const Ee=["Variations"];export{P as Variations,Ee as __namedExportsOrder,Re as default};
//# sourceMappingURL=Combobox.stories-BSpT6f7x.js.map
