const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/13.12.0/placekit-lite-BNWnPlXp.js","assets/13.12.0/preload-helper-DD0t1PPO.js"])))=>i.map(i=>d[i]);
import{c as e,i as t,n,t as r}from"./preload-helper-DD0t1PPO.js";import{o as i}from"./iframe-DkrSFyIS.js";import{A as a,C as o,D as s,E as c,M as l,N as u,O as d,P as f,St as p,U as m,_t as h,g,h as _,ht as v,it as y,o as b,s as x,st as ee,w as S}from"./ScrollView-D1JXVZqa.js";import{n as te,t as ne}from"./Separator-CbD9ZHpe.js";import{i as re,s as ie}from"./i18n-DoEmsRtN.js";import{n as C,t as w}from"./LakeCombobox-Bh_CgPNg.js";import{n as T,r as E,t as D}from"./_StoriesComponents-Bafc-faz.js";import{c as O,i as k,n as A}from"./countries-C2qEsDyG.js";var j,M,N,P,F=t((()=>{c(),j=e(i()),v(),u(),ee(),C(),x(),te(),M=m(),N=p.create({unselectable:{userSelect:`none`}}),P=({inputRef:e,value:t,onValueChange:n,disabled:r,id:i,placeholder:a,error:o,emptyResult:c,ListFooterComponent:u,shouldDisplaySuggestions:d=!0,loadSuggestions:p,onSuggestion:m,onLoadError:h})=>{let[g,_]=(0,j.useState)(S.NotAsked()),v=(0,j.useRef)(void 0);return(0,M.jsx)(w,{inputRef:e,id:i,placeholder:a,value:t??``,items:g,icon:p==null?void 0:`search-filled`,disabled:r,error:o,ListFooterComponent:u!=null&&(0,M.jsxs)(M.Fragment,{children:[l(g).with(S.P.Done(s.P.Ok(f.select())),e=>e.length>0?(0,M.jsx)(ne,{}):null).otherwise(()=>null),u]}),onSelectItem:e=>{m(e)},onValueChange:e=>{if(v.current?.cancel(),v.current=void 0,n(e),e.length<=3||!d)return _(S.NotAsked());if(p!=null){_(S.Loading());let t=p(e);v.current=t,h!=null&&t.tapError(h),t.onResolve(e=>_(S.Done(e)))}},keyExtractor:e=>`${e.title} ${e.subtitle}`,emptyResult:c,renderItem:e=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(b,{numberOfLines:1,style:N.unselectable,color:y.gray[900],children:e.title}),(0,M.jsx)(b,{numberOfLines:1,style:N.unselectable,variant:`smallRegular`,children:e.subtitle})]})})},P.__docgenInfo={description:``,methods:[],displayName:`AutocompleteSearchInput`,props:{inputRef:{required:!1,tsType:{name:`Ref`,elements:[{name:`unknown`}],raw:`Ref<unknown>`},description:``},value:{required:!1,tsType:{name:`string`},description:``},onValueChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},emptyResult:{required:!0,tsType:{name:`string`},description:``},ListFooterComponent:{required:!1,tsType:{name:`ReactNode`},description:``},shouldDisplaySuggestions:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},loadSuggestions:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => Future<Result<Suggestion<T>[], unknown>>`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`Future`,elements:[{name:`Result`,elements:[{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  title: string;
  subtitle: string;
  value: T;
}`,signature:{properties:[{key:`title`,value:{name:`string`,required:!0}},{key:`subtitle`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`T`,required:!0}}]}}],raw:`Suggestion<T>[]`},{name:`unknown`}],raw:`Result<Suggestion<T>[], unknown>`}],raw:`Future<Result<Suggestion<T>[], unknown>>`}}},description:``},onSuggestion:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(suggestion: Suggestion<T>) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  title: string;
  subtitle: string;
  value: T;
}`,signature:{properties:[{key:`title`,value:{name:`string`,required:!0}},{key:`subtitle`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`T`,required:!0}}]}},name:`suggestion`}],return:{name:`void`}}},description:``},onLoadError:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(error: unknown) => void`,signature:{arguments:[{type:{name:`unknown`},name:`error`}],return:{name:`void`}}},description:``}}}})),I,L,R,z=t((()=>{I=e(i()),n(),L=(e,t)=>{let n;return(...r)=>(clearTimeout(n),new Promise(i=>{n=setTimeout(()=>i(e(...r)),t)}))},R=({apiKey:e,debounceInterval:t=1e3})=>{let[n,i]=(0,I.useState)();return(0,I.useEffect)(()=>{e!=null&&r(async()=>{let{default:e}=await import(`./placekit-lite-BNWnPlXp.js`);return{default:e}},__vite__mapDeps([0,1])).then(({default:t})=>{i(t(e))})},[e]),(0,I.useMemo)(()=>{if(n!=null)return{...n,search:L(n.search,t),reverse:L(n.reverse,t)}},[n,t])}})),B,V,H,ae=t((()=>{c(),F(),B=e(i()),O(),z(),V=m(),H=({inputRef:e,id:t,country:n,disabled:r,error:i,value:c,types:l=[`street`],onValueChange:u,onSuggestion:f,language:p,placeholder:m,shouldDisplaySuggestions:h=!0,emptyResult:g,apiKey:_})=>{let v=R({apiKey:_}),y=(0,B.useCallback)(e=>{if(v!=null){let t=d.fromNullable(n).map(e=>a.filterMap(A[e]??[e],e=>d.fromNullable(k(e)))).getOr([]),r=t.length===0?d.None():d.Some(t);return o.fromPromise(v.search(e,{types:l,language:p,countries:r.toUndefined()})).mapOk(({results:e})=>e.map(e=>({title:e.name,subtitle:`${e.city} (${e.country})`,value:e})),!0)}return o.value(s.Ok([]))},[v,n,p,l]),b=(0,B.useCallback)(e=>{f?.({completeAddress:e.value.name,postalCode:e.value.zipcode[0],city:e.value.city,country:e.value.country,countryCode:e.value.countrycode})},[f]);return(0,V.jsx)(P,{inputRef:e,value:c,onValueChange:u,disabled:r,id:t,placeholder:m,error:i,emptyResult:g,shouldDisplaySuggestions:h,loadSuggestions:v==null?void 0:y,onSuggestion:b})},H.__docgenInfo={description:``,methods:[],displayName:`PlacekitAddressSearchInput`,props:{inputRef:{required:!1,tsType:{name:`Ref`,elements:[{name:`unknown`}],raw:`Ref<unknown>`},description:``},id:{required:!1,tsType:{name:`string`},description:``},types:{required:!1,tsType:{name:`PKOptions["types"]`,raw:`PKOptions["types"]`},description:``,defaultValue:{value:`["street"]`,computed:!1}},country:{required:!1,tsType:{name:`Simplify["cca3"]`,raw:`Country["cca3"]`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},error:{required:!1,tsType:{name:`string`},description:``},onSuggestion:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(suggestion: AddressDetail) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  completeAddress: string;
  city: string;
  postalCode?: string;
  country: string;
  countryCode: string;
}`,signature:{properties:[{key:`completeAddress`,value:{name:`string`,required:!0}},{key:`city`,value:{name:`string`,required:!0}},{key:`postalCode`,value:{name:`string`,required:!1}},{key:`country`,value:{name:`string`,required:!0}},{key:`countryCode`,value:{name:`string`,required:!0}}]}},name:`suggestion`}],return:{name:`void`}}},description:``},onValueChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},style:{required:!1,tsType:{name:`StyleProp`,elements:[{name:`ViewStyle`}],raw:`StyleProp<ViewStyle>`},description:``},value:{required:!1,tsType:{name:`string`},description:``},language:{required:!0,tsType:{name:`union`,raw:`"en" | "es" | "de" | "fi" | "fr" | "it" | "nl" | "pt"`,elements:[{name:`literal`,value:`"en"`},{name:`literal`,value:`"es"`},{name:`literal`,value:`"de"`},{name:`literal`,value:`"fi"`},{name:`literal`,value:`"fr"`},{name:`literal`,value:`"it"`},{name:`literal`,value:`"nl"`},{name:`literal`,value:`"pt"`}]},description:``},placeholder:{required:!0,tsType:{name:`string`},description:``},shouldDisplaySuggestions:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},emptyResult:{required:!0,tsType:{name:`string`},description:``},apiKey:{required:!1,tsType:{name:`string`},description:``}}}})),U,W,G,oe=t((()=>{c(),F(),U=e(i()),O(),z(),re(),W=m(),G=({value:e,onValueChange:t,country:n,disabled:r,placeholder:i,id:c,error:l,onSuggestion:u,onLoadError:f,apiKey:p})=>{let m=R({apiKey:p}),h=(0,U.useCallback)(e=>{if(m!=null){let t=d.fromNullable(n).map(e=>A[e]??[e]).map(e=>a.filterMap(e,e=>d.fromNullable(k(e)))).flatMap(e=>e.length===0?d.None():d.Some(e));return o.fromPromise(m.search(e,{types:[`city`,`county`],countries:t.toUndefined()})).mapOk(({results:e})=>e.filter((e,t,n)=>n.findIndex(t=>t.name===e.name&&t.zipcode[0]===e.zipcode[0])===t).map(e=>({title:e.name,subtitle:e.zipcode[0]??``,value:e})),!0)}return o.value(s.Ok([]))},[m,n]),g=(0,U.useCallback)(e=>{u?.({city:e.value.city===``?e.value.county:e.value.city,postalCode:e.value.zipcode[0]})},[u]);return(0,W.jsx)(P,{value:e,onValueChange:t,disabled:r,id:c,placeholder:i,error:l,emptyResult:ie(`common.noResult`),loadSuggestions:m==null?void 0:h,onSuggestion:g,onLoadError:f})},G.__docgenInfo={description:``,methods:[],displayName:`PlacekitCityInput`,props:{value:{required:!0,tsType:{name:`string`},description:``},onValueChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},country:{required:!1,tsType:{name:`Simplify["cca3"]`,raw:`Country["cca3"]`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},error:{required:!1,tsType:{name:`string`},description:``},id:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``},onSuggestion:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(place: CityDetail) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  city: string;
  postalCode?: string;
}`,signature:{properties:[{key:`city`,value:{name:`string`,required:!0}},{key:`postalCode`,value:{name:`string`,required:!1}}]}},name:`place`}],return:{name:`void`}}},description:``},onLoadError:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(error: unknown) => void`,signature:{arguments:[{type:{name:`unknown`},name:`error`}],return:{name:`void`}}},description:``},apiKey:{required:!1,tsType:{name:`string`},description:``}}}})),K,q,J,Y,X,Z,Q,$;t((()=>{c(),g(),C(),x(),K=e(i()),v(),ae(),oe(),E(),q=m(),J=p.create({footer:{paddingHorizontal:12}}),Y={title:`Forms/Combobox`,component:w},X=e=>{let t=fetch(`https://dummyjson.com/products/search?limit=10&q=${e}`).then(e=>e.json()).then(e=>e.products);return o.fromPromise(t)},Z=e=>{let[t,n]=(0,K.useState)(null),[r,i]=(0,K.useState)(()=>S.NotAsked()),[a,o]=(0,K.useState)(``),s=t?t.title:a;return(0,K.useEffect)(()=>{if(!a){i(S.NotAsked());return}i(S.Loading());let e=X(a);return e.onResolve(e=>{i(S.Done(e))}),()=>{e.cancel()}},[a]),(0,q.jsx)(w,{value:s,items:r,onValueChange:e=>{n(null),o(e)},onSelectItem:e=>{i(S.NotAsked()),n(e)},keyExtractor:e=>e.id.toString(),renderItem:e=>(0,q.jsx)(b,{children:e.title}),emptyResult:`No result`,...e})},Q=()=>{let[e,t]=(0,K.useState)(``),[n,r]=(0,K.useState)(``);return(0,q.jsxs)(D,{title:`Combobox`,children:[(0,q.jsx)(T,{title:`By default`,children:(0,q.jsx)(Z,{})}),(0,q.jsx)(T,{title:`Is disabled`,children:(0,q.jsx)(Z,{disabled:!0})}),(0,q.jsx)(T,{title:`Is readOnly`,children:(0,q.jsx)(Z,{readOnly:!0})}),(0,q.jsx)(T,{title:`With icon`,children:(0,q.jsx)(Z,{icon:`add-circle-regular`})}),(0,q.jsx)(T,{title:`With placeholder`,children:(0,q.jsx)(Z,{placeholder:`Enter a product`})}),(0,q.jsx)(T,{title:`With error`,children:(0,q.jsx)(Z,{placeholder:`An error occurred`})}),(0,q.jsx)(T,{title:`With Footer Component`,children:(0,q.jsx)(Z,{ListFooterComponent:(0,q.jsx)(_,{direction:`row`,justifyContent:`end`,style:J.footer,children:(0,q.jsx)(b,{children:`With footer component`})})})}),(0,q.jsx)(T,{title:`With custom empty result`,children:(0,q.jsx)(Z,{emptyResult:(0,q.jsxs)(b,{children:[`Company not listed?`,` `,(0,q.jsx)(h,{onPress:()=>console.log(`On Press`),style:({hovered:e})=>({opacity:e?.5:1}),children:`Add your organization details`})]})})}),(0,q.jsx)(T,{title:`CityInput`,children:(0,q.jsx)(G,{apiKey:void 0,country:`FRA`,value:n,onValueChange:r,onSuggestion:e=>{console.log(e.city),console.log(e.postalCode)},onLoadError:()=>{}})}),(0,q.jsx)(T,{title:`AddressInput`,children:(0,q.jsx)(H,{apiKey:void 0,country:`FRA`,value:e,onValueChange:t,onSuggestion:e=>{console.log(e.completeAddress),console.log(e.city),console.log(e.postalCode)},language:`fr`,placeholder:``,emptyResult:`Nothing`})})]})},Q.__docgenInfo={description:``,methods:[],displayName:`Variations`},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$=[`Variations`]}))();export{Q as Variations,$ as __namedExportsOrder,Y as default};
//# sourceMappingURL=Combobox.stories-BrQKboGE.js.map