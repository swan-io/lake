import{G as c,N as Ae,$ as O,v as W,z as y,H as N,s as Le,g as xe,f as De,j as m,V as J,c as k,B as ae,I as P,S as _,L as H,n as je,w as Re,D as le,h as Me}from"./Space-Bx5QDxXb.js";import{L as A}from"./LakeButton-Y-MEhM3X.js";import{m as Pe,d as Be,y as Ve}from"./Request-TetOgKGf.js";import{r as j}from"./index-BwDkhjyp.js";import{t as ce}from"./i18n-DbOmQyk3.js";import{w as Ge}from"./with-selector-Dj8Ry1kX.js";import{P as ue}from"./Pressable-Bn1ZMN3h.js";import{T as qe}from"./TransitionGroupView-Ci5EGebl.js";import{C as We}from"./index-DGaDRGzj.js";import{S as Ue,a as X}from"./_StoriesComponents-AhKOd4N3.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./commonStyles-t4XfA7cz.js";import"./index-CWXQFdbZ.js";import"./rifm-Rmu9g2Q0.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./TransitionView-oHMWxRhX.js";var S={NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType"},U={QUERY:"query",MUTATION:"mutation",SUBSCRIPTION:"subscription"};class pe extends Error{constructor(t,r,n,s,i,o,u){super(t),this.name="GraphQLError",this.message=t,i&&(this.path=i),r&&(this.nodes=Array.isArray(r)?r:[r]),n&&(this.source=n),s&&(this.positions=s),o&&(this.originalError=o);var a=u;if(!a&&o){var h=o.extensions;h&&typeof h=="object"&&(a=h)}this.extensions=a||{}}toJSON(){return{...this,message:this.message}}toString(){return this.message}get[Symbol.toStringTag](){return"GraphQLError"}}var $e=function(e){return e[e.Const=1]="Const",e[e.Var=2]="Var",e[e.Int=3]="Int",e[e.Float=4]="Float",e[e.BlockString=5]="BlockString",e[e.String=6]="String",e[e.Enum=7]="Enum",e}($e||{}),Ke=function(e){return e[e.Spread=1]="Spread",e[e.Name=2]="Name",e}(Ke||{}),V={};function te(e,t){var r=[],n=[];try{var s=function i(o,u,a){var h=!1,l=t[o.kind]&&t[o.kind].enter||t[o.kind]||t.enter,p=l&&l.call(t,o,u,a,n,r);if(p===!1)return o;if(p===null)return null;if(p===V)throw V;p&&typeof p.kind=="string"&&(h=p!==o,o=p),a&&r.push(a);var f,g={...o};for(var v in o){n.push(v);var d=o[v];if(Array.isArray(d)){for(var E=[],w=0;w<d.length;w++)d[w]!=null&&typeof d[w].kind=="string"&&(r.push(o),n.push(w),f=i(d[w],w,d),n.pop(),r.pop(),f==null?h=!0:(h=h||f!==d[w],E.push(f)));d=E}else d!=null&&typeof d.kind=="string"&&(f=i(d,v,o))!==void 0&&(h=h||d!==f,d=f);n.pop(),h&&(g[v]=d)}a&&r.pop();var I=t[o.kind]&&t[o.kind].leave||t.leave,R=I&&I.call(t,o,u,a,n,r);if(R===V)throw V;return R!==void 0?R:p!==void 0?h?g:p:h?g:o}(e);return s!==void 0&&s!==!1?s:e}catch(i){if(i!==V)throw i;return e}}var G=Symbol.for("DEEP_MERGE_DELETE"),B=Symbol.for("__requestedKeys"),$=(e,t)=>{if(e instanceof Set&&t instanceof Set)return new Set([...e,...t]);const r=Array.isArray(e)?Array(e.length):Array.isArray(t)?Array(t.length):{};return Object.getOwnPropertyNames(e).forEach(n=>{t[n]!==G&&(r[n]=e[n])}),Object.getOwnPropertySymbols(e).forEach(n=>{t[n]!==G&&(r[n]=e[n])}),Object.getOwnPropertyNames(t).forEach(n=>{t[n]!==G&&(b(r[n])&&b(t[n])?r[n]=$(r[n],t[n]):r[n]=t[n])}),Object.getOwnPropertySymbols(t).forEach(n=>{t[n]!==G&&(b(r[n])&&b(t[n])?r[n]=$(r[n],t[n]):r[n]=t[n])}),r},Ee=(e,t)=>[...t.values()].every(n=>e.has(n)),b=e=>e!=null&&typeof e=="object",z=Object.prototype.hasOwnProperty,we=(e,t)=>{if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const s of r)if(!z.call(t,s)||!we(e[s],t[s]))return!1;return!0},re=e=>JSON.stringify(e),Q=e=>O(e).with({__typename:y.select(y.union("Query","Mutation","Subscription"))},t=>c.Some(Symbol.for(t))).with({__typename:y.select("name",y.string),id:y.select("id",y.string)},({name:t,id:r})=>c.Some(Symbol.for(`${t}<${r}>`))).otherwise(()=>c.None()),be=e=>O(e.operation).with(U.QUERY,()=>c.Some(Symbol.for("Query"))).with(U.SUBSCRIPTION,()=>c.Some(Symbol.for("Subscription"))).otherwise(()=>c.None()),he=class{constructor(e){this.cache=new Map,this.operationCache=new Map,this.schemaConfig=Object.fromEntries(Object.entries(e.interfaceToTypes).map(([t,r])=>[t,new Set(r)]))}isTypeCompatible(e,t){if(e===t)return!0;const r=this.schemaConfig[t];return r==null?!1:r.has(e)}dump(){return this.cache}getOperationFromCache(e,t){const r=re(t);return c.fromNullable(this.operationCache.get(e)).flatMap(n=>c.fromNullable(n.get(r))).flatMap(n=>n)}setOperationInCache(e,t,r){const n=re(t),s=c.fromNullable(this.operationCache.get(e)).getOr(new Map);s.set(n,c.Some(r)),this.operationCache.set(e,s)}getFromCache(e,t){return this.get(e).flatMap(r=>b(r)?Ee(r[B],t)?c.Some(r):c.None():c.Some(r))}getFromCacheWithoutKey(e){return this.get(e).flatMap(t=>c.Some(t))}get(e){return this.cache.has(e)?c.Some(this.cache.get(e)):c.None()}getOrDefault(e){return this.cache.has(e)?this.cache.get(e):{}}set(e,t){this.cache.set(e,t)}cacheIfEligible(e,t){const r=Q(e);if(r.isSome()){const n=r.get(),s=this.getOrDefault(n);return this.set(n,$(s,b(e)?{...e,[B]:t}:e)),n}else return e}updateFieldInClosestCachedAncestor({originalFieldName:e,fieldNameWithArguments:t,value:r,path:n,ancestors:s,variables:i,rootTypename:o,selectedKeys:u}){const a=s.concat(),h=n.concat(),l=[];let p;for(;p=a.pop();){const f=Q(a.length===0?{...p,__typename:o}:p);if(f.isSome()){const g=f.get(),v=this.getOrDefault(g);b(r)&&!N.isArray(r)&&(typeof r.__typename=="string"&&r.__typename.endsWith("Connection")&&(r.__connectionCacheKey=g.description,r.__connectionCachePath=[[...l,t].map(E=>typeof E=="symbol"?{symbol:E.description}:E)],r.__connectionArguments=i),r[B]=u);const d=l.reduce((E,w)=>({[w]:E}),{[e]:G,[t]:r});this.set(g,$(v,d));break}l.push(h.pop())}}unsafe__update(e,t,r){this.get(e).map(n=>{t.reduce((i,o)=>i.flatMap(u=>c.fromNullable(b(u)?u[o]:null)),c.fromNullable(n)).map(i=>{const o=t.reduce((u,a)=>({[a]:u}),r(i));this.set(e,$(n,o))})})}updateConnection(e,t){O(e).with({__connectionCacheKey:y.string,__connectionCachePath:y.array(y.array(y.union({symbol:y.string},y.string)))},({__connectionCacheKey:r,__connectionCachePath:n})=>{const s=Symbol.for(r),i=n.map(h=>h.map(l=>typeof l=="string"?l:Symbol.for(l.symbol))),o=Symbol.for("__typename"),u=Symbol.for("edges"),a=Symbol.for("node");O(t).with({prepend:y.select(y.nonNullable)},h=>{const l=i[0];l!=null&&this.unsafe__update(s,l,p=>!b(p)||!N.isArray(p[u])?p:{...p,[u]:[...N.filterMap(h,({node:f,__typename:g})=>Q(f).flatMap(v=>this.getFromCacheWithoutKey(v).map(()=>({[o]:g,[a]:v})))),...p[u]]})}).with({append:y.select(y.nonNullable)},h=>{const l=i[i.length-1];l!=null&&this.unsafe__update(s,l,p=>!b(p)||!N.isArray(p[u])?p:{...p,[u]:[...p[u],...N.filterMap(h,({node:f,__typename:g})=>Q(f).flatMap(v=>this.getFromCacheWithoutKey(v).map(()=>({[o]:g,[a]:v}))))]})}).with({remove:y.select(y.array())},h=>{i.forEach(l=>{this.unsafe__update(s,l,p=>b(p)&&N.isArray(p[u])?{...p,[u]:p[u].filter(f=>{const g=f[a];return!h.some(v=>{var d;return(d=g.description)==null?void 0:d.includes(`<${v}>`)})})}:p)})}).exhaustive()}).otherwise(()=>{})}},M=(e,t)=>{const r=new Set,n=s=>{s.selections.forEach(i=>{if(i.kind===S.FIELD){const o=Y(i,t);r.add(o)}else i.kind===S.INLINE_FRAGMENT&&n(i.selectionSet)})};return e.selectionSet&&n(e.selectionSet),r},Y=(e,t)=>{const r=ie(e),n=Ne(e,t);return Object.keys(n).length===0?Symbol.for(r):Symbol.for(`${r}(${JSON.stringify(n)})`)},Ne=(e,t)=>{var r;const n=(r=e.arguments)!=null?r:[];return Object.fromEntries(n.map(({name:{value:s},value:i})=>[s,se(i,t)]))},se=(e,t)=>O(e).with({kind:S.NULL},()=>null).with({kind:y.union(S.INT,S.FLOAT,S.STRING,S.BOOLEAN,S.ENUM)},({value:r})=>r).with({kind:S.LIST},({values:r})=>r.map(n=>se(n,t))).with({kind:S.OBJECT},({fields:r})=>Object.fromEntries(r.map(({name:{value:n},value:s})=>[n,s]))).with({kind:S.VARIABLE},({name:{value:r}})=>t[r]).exhaustive(),ie=e=>e.alias?e.alias.value:e.name.value,Qe=e=>{const t={};te(e,{[S.FRAGMENT_DEFINITION](n){t[n.name.value]=n}});const r=n=>{if(n.kind===S.FRAGMENT_SPREAD){const s=n.name.value,i=t[s];if(!i)throw new Error(`Fragment "${s}" is not defined.`);return{kind:S.INLINE_FRAGMENT,typeCondition:i.typeCondition,selectionSet:i.selectionSet}}return n.kind===S.SELECTION_SET?{...n,selections:n.selections.map(s=>r(s))}:"selectionSet"in n&&n.selectionSet!=null?{...n,selectionSet:r(n.selectionSet)}:n};return te(e,{[S.FRAGMENT_DEFINITION]:()=>null,enter:r})},ze={kind:S.FIELD,name:{kind:S.NAME,value:"__typename"}},Z=e=>te(e,{[S.SELECTION_SET]:t=>t.selections.find(r=>r.kind===S.FIELD&&r.name.value==="__typename")?t:{...t,selections:[ze,...t.selections]}}),Ye=e=>N.findMap(e.definitions,t=>t.kind===S.OPERATION_DEFINITION?c.fromNullable(t.name).map(r=>r.value):c.None()),ne=e=>O(e).with({kind:S.FIELD},t=>t.name.value==="id"?c.Some(t):c.None()).with({kind:S.INLINE_FRAGMENT},t=>N.findMap(t.selectionSet.selections,ne)).otherwise(()=>c.None()),me=(e,t)=>{const r=N.findMap(e.selections,ne);return N.findMap(t.selections,ne).isSome()?t:r.map(s=>({...t,selections:[s,...t.selections]})).getOr(t)},Je=(e,t)=>N.isArray(e.directives)?e.directives.some(r=>r.name.value==="include"&&r.arguments!=null&&r.arguments.some(n=>n.name.value==="if"&&se(n.value,t)===!1)):!1,fe=(e,t,r)=>typeof t=="symbol"?e.getFromCache(t,r).flatMap(c.fromNullable):b(t)&&B in t&&t[B]instanceof Set?Ee(t[B],r)?c.Some(t):c.None():c.Some(t),de=(e,t)=>typeof t=="symbol"?e.getFromCacheWithoutKey(t).flatMap(c.fromNullable):c.Some(t),ee=new WeakMap,He=Symbol.for("EXCLUDED"),ge=(e,t,r)=>{const n=(s,i)=>s.selections.reduce((o,u)=>o.flatMap(a=>{var h;if(u.kind===S.FIELD){const l=u,p=ie(l),f=Y(l,r);if(a==null)return c.None();if(!(z.call(a,p)||z.call(a,f)))return Je(l,r)?c.Some({...a,[p]:He}):c.None();const v=p in a?a[p]:a[f];if(v==null)return c.Some({...a,[p]:v});if(N.isArray(v)){const d=M(l,r);return c.all(v.map(E=>fe(e,E,d).flatMap(I=>b(I)&&l.selectionSet!=null?n(l.selectionSet,I):c.Some(I)))).map(E=>({...a,[p]:E}))}else{const d=M(l,r);return fe(e,v,d).flatMap(w=>b(w)&&l.selectionSet!=null?n(l.selectionSet,w).map(I=>({...a,[p]:I})):c.Some({...a,[p]:w}))}}if(u.kind===S.INLINE_FRAGMENT){const l=u,p=(h=l.typeCondition)==null?void 0:h.name.value,f=O(a).with({__typename:y.select(y.string)},g=>g).with({__typename:y.array({__typename:y.select(y.string)})},g=>g[0]).otherwise(()=>{});return p!=null&&f!=null?e.isTypeCompatible(f,p)?n(l.selectionSet,a):l.selectionSet.selections.some(g=>g.kind===S.INLINE_FRAGMENT)?n({...l.selectionSet,selections:l.selectionSet.selections.filter(g=>{var v;if(g.kind===S.INLINE_FRAGMENT){const d=(v=g.typeCondition)==null?void 0:v.name.value;return d==null?!0:e.isTypeCompatible(f,d)}return!0})},a):c.Some(a):n(l.selectionSet,a)}else return c.None()}),c.Some(i));return N.findMap(t.definitions,s=>s.kind===S.OPERATION_DEFINITION?c.Some(s):c.None()).flatMap(s=>be(s).map(i=>({operation:s,cacheKey:i}))).flatMap(({operation:s,cacheKey:i})=>e.getFromCache(i,M(s,r)).map(o=>({cache:o,operation:s}))).flatMap(({operation:s,cache:i})=>n(s.selectionSet,i)).map(s=>JSON.parse(JSON.stringify(s))).flatMap(s=>{var i;const o=re(r),u=c.fromNullable(ee.get(t)).flatMap(a=>c.fromNullable(a.get(o))).flatMap(a=>a);if(u.flatMap(a=>a.toOption()).map(a=>we(s,a)).getOr(!1))return u;{const a=c.Some(W.Ok(s)),h=(i=ee.get(t))!=null?i:new Map;return h.set(o,a),ee.set(t,h),a}})},Xe=(e,t,r)=>{const n=(s,i,o)=>{const u=N.filterMap(s.selections,a=>O(a).with({kind:S.FIELD},h=>{const l=Y(h,r);if(i==null)return c.Some(h);if(!z.call(i,l))return c.Some(h);if(o.has(l)){const f=i[l],g=M(h,r);if(N.isArray(f))return f.reduce((v,d)=>{const E=de(e,d);if(E.isNone())return c.Some(h);const w=h.selectionSet;return w!=null?n(w,E.get(),g).map(I=>({...h,selectionSet:me(w,I)})):v},c.None());{const v=de(e,f);if(v.isNone())return c.Some(h);const d=h.selectionSet;return d!=null?n(d,v.get(),g).map(E=>({...h,selectionSet:me(d,E)})):c.None()}}else return c.Some(h)}).with({kind:S.INLINE_FRAGMENT},h=>n(h.selectionSet,i,o).map(l=>({...h,selectionSet:l}))).with({kind:S.FRAGMENT_SPREAD},()=>c.None()).exhaustive());return u.length>0?c.Some({...s,selections:u}):c.None()};return N.findMap(t.definitions,s=>s.kind===S.OPERATION_DEFINITION?c.Some(s):c.None()).flatMap(s=>be(s).map(i=>({operation:s,cacheKey:i}))).flatMap(({operation:s,cacheKey:i})=>{const o=M(s,r);return e.getFromCache(i,o).map(u=>({cache:u,operation:s,selectedKeys:o}))}).flatMap(({operation:s,cache:i,selectedKeys:o})=>n(s.selectionSet,i,o).map(u=>({...t,definitions:[{...s,selectionSet:u}]})))},Ze=(e,t,r,n)=>{const s=(i,o,u=[],a)=>{i.selections.forEach(h=>{O(h).with({kind:S.FIELD},l=>{const p=ie(l),f=Y(l,n),g=Ne(l,n),v=o[o.length-1],d=v[p],E=M(l,n);if(d!=null)if(Array.isArray(d)){e.updateFieldInClosestCachedAncestor({originalFieldName:p,fieldNameWithArguments:f,value:d,path:u,ancestors:o,variables:g,rootTypename:a,selectedKeys:E});const w=Array(d.length);e.updateFieldInClosestCachedAncestor({originalFieldName:p,fieldNameWithArguments:f,value:w,path:[...u,f],ancestors:[...o,d],variables:g,rootTypename:a,selectedKeys:E}),d.forEach((I,R)=>{const _e=e.cacheIfEligible(I,E);e.updateFieldInClosestCachedAncestor({originalFieldName:R.toString(),fieldNameWithArguments:R.toString(),value:_e,path:[...u,f],ancestors:[...o,d],variables:g,rootTypename:a,selectedKeys:E}),b(I)&&s(l.selectionSet,[...o,d,I],[...u,f,R.toString()],a)})}else{const w=e.cacheIfEligible(d,E);e.updateFieldInClosestCachedAncestor({originalFieldName:p,fieldNameWithArguments:f,value:w,path:u,ancestors:o,variables:g,rootTypename:a,selectedKeys:E}),b(d)&&l.selectionSet!=null&&s(l.selectionSet,[...o,d],[...u,f],a)}else p in v&&e.updateFieldInClosestCachedAncestor({originalFieldName:p,fieldNameWithArguments:f,value:d,path:u,ancestors:o,variables:g,rootTypename:a,selectedKeys:E})}).with({kind:S.INLINE_FRAGMENT},l=>{s(l.selectionSet,o,u,a)}).with({kind:S.FRAGMENT_SPREAD},()=>{}).exhaustive()})};return t.definitions.forEach(i=>{if(i.kind===S.OPERATION_DEFINITION){const o=O(i.operation).with(U.QUERY,()=>"Query").with(U.SUBSCRIPTION,()=>"Subscription").with(U.MUTATION,()=>"Mutation").exhaustive();e.cacheIfEligible(b(r)?{...r,__typename:o}:r,M(i,n)),s(i.selectionSet,[r],[],o)}}),e},et=class Oe extends Error{constructor(t){super("Received an invalid GraphQL response"),Object.setPrototypeOf(this,Oe.prototype),this.name="InvalidGraphQLResponseError",this.response=t}},tt=e=>O(e).with({message:y.string,nodes:y.optional(y.any),source:y.optional(y.any),positions:y.optional(y.any),path:y.optional(y.any),error:y.optional(y.any),extensions:y.optional(y.any)},({message:t,nodes:r,source:n,positions:s,path:i,error:o,extensions:u})=>{const a=O(o).with({message:y.string},({message:h})=>new Error(h)).otherwise(()=>{});return new pe(t,r,n,s,i,a,u)}).otherwise(t=>new pe(JSON.stringify(t))),Te={toArray:e=>Array.isArray(e)?e:[e],forEach:(e,t)=>{Te.toArray(e).forEach(t)}},rt=e=>JSON.stringify(e),nt=e=>'"""'+e.replace(/"""/g,'\\"""')+'"""',C=e=>!!(e&&e.length),st=80,T={OperationDefinition(e){if(e.operation==="query"&&!e.name&&!C(e.variableDefinitions)&&!C(e.directives))return T.SelectionSet(e.selectionSet);let t=e.operation;return e.name&&(t+=" "+e.name.value),C(e.variableDefinitions)&&(e.name||(t+=" "),t+="("+e.variableDefinitions.map(T.VariableDefinition).join(", ")+")"),C(e.directives)&&(t+=" "+e.directives.map(T.Directive).join(" ")),t+" "+T.SelectionSet(e.selectionSet)},VariableDefinition(e){let t=T.Variable(e.variable)+": "+F(e.type);return e.defaultValue&&(t+=" = "+F(e.defaultValue)),C(e.directives)&&(t+=" "+e.directives.map(T.Directive).join(" ")),t},Field(e){let t=(e.alias?e.alias.value+": ":"")+e.name.value;if(C(e.arguments)){const r=e.arguments.map(T.Argument),n=t+"("+r.join(", ")+")";t=n.length>st?t+"("+r.join(" ")+")":n}return C(e.directives)&&(t+=" "+e.directives.map(T.Directive).join(" ")),e.selectionSet?t+" "+T.SelectionSet(e.selectionSet):t},StringValue(e){return e.block?nt(e.value):rt(e.value)},BooleanValue(e){return String(e.value)},NullValue(){return"null"},IntValue(e){return e.value},FloatValue(e){return e.value},EnumValue(e){return e.value},Name(e){return e.value},Variable(e){return"$"+e.name.value},ListValue(e){return"["+e.values.map(F).join(", ")+"]"},ObjectValue(e){return"{"+e.fields.map(T.ObjectField).join(", ")+"}"},ObjectField(e){return e.name.value+": "+F(e.value)},Document(e){return C(e.definitions)?e.definitions.map(F).join(" "):""},SelectionSet(e){return"{"+e.selections.map(F).join(" ")+"}"},Argument(e){return e.name.value+": "+F(e.value)},FragmentSpread(e){let t="..."+e.name.value;return C(e.directives)&&(t+=" "+e.directives.map(T.Directive).join(" ")),t},InlineFragment(e){let t="...";return e.typeCondition&&(t+=" on "+e.typeCondition.name.value),C(e.directives)&&(t+=" "+e.directives.map(T.Directive).join(" ")),t+" "+F(e.selectionSet)},FragmentDefinition(e){let t="fragment "+e.name.value;return t+=" on "+e.typeCondition.name.value,C(e.directives)&&(t+=" "+e.directives.map(T.Directive).join(" ")),t+" "+F(e.selectionSet)},Directive(e){let t="@"+e.name.value;return C(e.arguments)&&(t+="("+e.arguments.map(T.Argument).join(", ")+")"),t},NamedType(e){return e.name.value},ListType(e){return"["+F(e.type)+"]"},NonNullType(e){return F(e.type)+"!"}},F=e=>typeof T[e.kind]=="function"?T[e.kind](e):"",it=({url:e,headers:t,operationName:r,withCredentials:n,document:s,variables:i})=>Pe.make({url:e,method:"POST",responseType:"json",headers:t,withCredentials:c.fromNullable(n).getOr(!1),body:JSON.stringify({operationName:r,query:F(s),variables:i})}).mapOkToResult(Be).mapOkToResult(Ve).mapOkToResult(o=>O(o).returnType().with({errors:y.select(y.array())},u=>W.Error(u.map(tt))).with({data:y.select(y.nonNullable)},u=>W.Ok(u)).otherwise(u=>W.Error(new et(u)))),ot=(e,t)=>[e,{prepend:t}],at=(e,t)=>[e,{append:t}],lt=(e,t)=>[e,{remove:t}],ct=class{constructor(e){var t,r;this.url=e.url,this.headers=(t=e.headers)!=null?t:{"Content-Type":"application/json"},this.schemaConfig=e.schemaConfig,this.cache=new he(e.schemaConfig),this.makeRequest=(r=e.makeRequest)!=null?r:it,this.subscribers=new Set,this.transformedDocuments=new Map,this.transformedDocumentsForRequest=new Map}getTransformedDocument(e){if(this.transformedDocuments.has(e))return this.transformedDocuments.get(e);{const t=Qe(Z(e));return this.transformedDocuments.set(e,t),t}}getTransformedDocumentsForRequest(e){if(this.transformedDocumentsForRequest.has(e))return this.transformedDocumentsForRequest.get(e);{const t=Z(e);return this.transformedDocumentsForRequest.set(e,t),t}}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}request(e,t,{optimize:r=!1,connectionUpdates:n,overrides:s}={}){const i=this.getTransformedDocument(e),o=this.getTransformedDocumentsForRequest(e),u=Ye(i).getOr("Untitled"),a=t,h=r?Xe(this.cache,i,a).map(Z):c.Some(o);if(h.isNone()){const l=ge(this.cache,i,a);if(l.isSome())return Ae.value(l.get())}return this.makeRequest({url:this.url,operationName:u,document:h.getOr(o),variables:a,...s,headers:{...this.headers,...s!=null?s.headers:null}}).mapOk(l=>l).tapOk(l=>{Ze(this.cache,i,l,a)}).tapOk(l=>{n!==void 0&&n.forEach(p=>{p({data:l,variables:t,prepend:ot,append:at,remove:lt}).map(([f,g])=>{this.cache.updateConnection(f,g)})})}).tap(l=>{this.cache.setOperationInCache(i,a,l),this.subscribers.forEach(p=>{p()})})}readFromCache(e,t){const r=t,n=this.getTransformedDocument(e);return O(this.cache.getOperationFromCache(n,r)).with(c.P.Some(W.P.Error(y._)),s=>s).otherwise(()=>ge(this.cache,n,r))}query(e,t,r){return this.request(e,t,r)}commitMutation(e,t,r){return this.request(e,t,r)}purge(){this.cache=new he(this.schemaConfig),this.subscribers.forEach(e=>{e()})}};j.createContext(new ct({url:"/graphql",schemaConfig:{interfaceToTypes:{}}}));function ut(e){const t=new Set;let r=e;return{get:()=>r,set(n){r=typeof n=="function"?n(r):n,t.forEach(s=>s(r))},subscribe:n=>(t.add(n),()=>{t.delete(n)}),reset(){r=e,t.forEach(n=>n(r))}}}function pt(e){return e}function ht(e,t){return t===void 0&&(t=Object.is),Ge.useSyncExternalStoreWithSelector(e.subscribe,e.get,e.get,pt,t)}const mt=({duration:e,onEnd:t})=>{const r=new Set;let n=0,s=0;const i=()=>{const f=(n-Date.now())/e;r.forEach(g=>g(f)),o=window.requestAnimationFrame(i)};let o=window.requestAnimationFrame(i);const u=()=>{n=Date.now()+e,s=window.setTimeout(()=>{l(),t()},e)},a=()=>{window.clearTimeout(s),u()},h=f=>(r.add(f),()=>{r.delete(f)}),l=()=>{document.removeEventListener("visibilitychange",p),window.clearTimeout(s),window.cancelAnimationFrame(o)},p=()=>{document.removeEventListener("visibilitychange",p),a()};return document.hidden?document.addEventListener("visibilitychange",p):a(),{clear:l,reset:a,subscribe:h}},K=ut([]),ft=()=>ht(K),Ie=e=>{var r;const t=K.get().find(n=>n.uid===e);t!=null&&((r=t.progress)==null||r.clear(),K.set(n=>n.filter(s=>s.uid!==e)))};let ke=new WeakMap;const dt=e=>{ke=e},gt=()=>ke,L=({variant:e,title:t,description:r,error:n,autoClose:s})=>{var h;const i=`${e} - ${t} - ${r??""}`,o=K.get().find(l=>l.uid===i);if(o!=null)return(h=o.progress)==null||h.reset(),i;const a=s??(e==="info"||e==="success")?mt({duration:1e4,onEnd:()=>{Ie(i)}}):void 0;return K.set(l=>[{uid:i,variant:e,title:t,description:r,error:n,progress:a},...l]),i},D=Le.create({list:{position:"absolute",right:0,bottom:0,maxHeight:"100%",maxWidth:400,paddingVertical:8,width:"100%",zIndex:10},toastWrapper:{paddingHorizontal:16,paddingVertical:8},toast:{padding:24,borderRadius:4,borderWidth:1,borderLeftWidth:4,overflow:"hidden",boxShadow:xe.modal},contentContainer:{paddingRight:36},closeButton:{zIndex:1,position:"absolute",width:24,height:24,right:24,top:0,bottom:0,margin:"auto"},progressBar:{height:2,transformOrigin:"left"},copyTooltip:{alignSelf:"flex-start"},copyButton:{alignItems:"center",flexDirection:"row",flexGrow:1,flexShrink:1}}),yt=j.memo(({variant:e,uid:t,title:r,description:n,error:s,progress:i,onClose:o})=>{const u=j.useRef(null),[a,h]=j.useState("copy"),l=Me(n),[p]=j.useState(()=>s==null?c.None():N.findMap(Te.toArray(s),g=>g instanceof Error?c.fromNullable(gt().get(g)):c.None())),f=O(e).returnType().with("success",()=>"positive").with("error",()=>"negative").with("info",()=>"shakespear").with("warning",()=>"warning").exhaustive();return j.useEffect(()=>{if(!De(i))return i.subscribe(g=>{u.current instanceof HTMLElement&&(u.current.style.transform=`scaleX(${g})`)})},[i]),m.jsx(J,{style:D.toastWrapper,children:m.jsxs(J,{style:[D.toast,{borderColor:k[f][200],borderLeftColor:k[f][500],backgroundColor:k[f][0]}],children:[m.jsxs(ae,{style:D.contentContainer,children:[m.jsxs(ae,{direction:"row",alignItems:"center",children:[O(e).with("success",()=>m.jsx(P,{name:"checkmark-circle-regular",size:20,color:k[f][700]})).with("error",()=>m.jsx(P,{name:"dismiss-circle-regular",size:20,color:k[f][700]})).with("info",()=>m.jsx(P,{name:"info-regular",size:20,color:k[f][700]})).with("warning",()=>m.jsx(P,{name:"warning-regular",size:20,color:k[f][700]})).exhaustive(),m.jsx(_,{width:12}),m.jsx(H,{variant:"regular",color:k[f][700],children:r})]}),l&&m.jsxs(m.Fragment,{children:[m.jsx(_,{height:8}),m.jsx(H,{variant:"smallRegular",color:k.gray[700],children:n})]}),O(p).with(c.P.None,()=>null).with(c.P.Some(y.select()),g=>m.jsxs(m.Fragment,{children:[m.jsx(_,{height:l?4:8}),m.jsx(je,{describedBy:"copy",onHide:()=>h("copy"),togglableOnFocus:!0,placement:"center",containerStyle:D.copyTooltip,content:a==="copy"?ce("copyButton.copyTooltip"):ce("copyButton.copiedTooltip"),children:m.jsxs(ue,{style:D.copyButton,onPress:v=>{v.stopPropagation(),v.preventDefault(),We.setString(g??""),h("copied")},children:[m.jsx(P,{color:k.gray[700],size:14,name:"copy-regular"}),m.jsx(_,{width:4}),m.jsxs(H,{numberOfLines:1,variant:"smallRegular",color:k.gray[700],children:["ID: ",g]})]})})]})).exhaustive()]}),m.jsx(ue,{onPress:()=>o(t),style:D.closeButton,children:m.jsx(P,{name:"lake-close",size:24,color:k.gray[500]})}),i!=null&&m.jsxs(m.Fragment,{children:[m.jsx(_,{height:24}),m.jsx(J,{ref:u,role:"progressbar",style:[D.progressBar,{backgroundColor:k[f][500]}]})]})]})})}),oe=()=>{const e=ft(),[t,r]=j.useState(()=>{});return j.useEffect(()=>{const n=document.createElement("div");return document.body.append(n),r(n),()=>{n.remove(),r(void 0)}},[]),t==null?null:m.jsx(Re,{container:t,children:m.jsx(qe,{style:D.list,enter:le.fadeAndSlideInFromRight.enter,leave:le.fadeAndSlideInFromRight.leave,children:e.map(n=>m.jsx(yt,{uid:n.uid,variant:n.variant,title:n.title,description:n.description,error:n.error,progress:n.progress,onClose:Ie},n.uid))})})};oe.__docgenInfo={description:"",methods:[],displayName:"ToastStack"};const x={button:{width:200}},Mt={title:"Interactivity/Toast",component:oe},Ce=new WeakMap;dt(Ce);const Fe=new Error;Ce.set(Fe,"req-thvfknqp");const q=()=>m.jsxs(m.Fragment,{children:[m.jsx(oe,{}),m.jsxs(Ue,{title:"Toast",children:[m.jsxs(X,{title:"With only title",children:[m.jsx(A,{color:"positive",style:x.button,onPress:()=>L({variant:"success",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),m.jsx(_,{height:16}),m.jsx(A,{color:"negative",style:x.button,onPress:()=>L({variant:"error",title:"Oops ! Something went wrong"}),children:"Open error toast"}),m.jsx(_,{height:16}),m.jsx(A,{color:"shakespear",style:x.button,onPress:()=>L({variant:"info",title:"Successfully copy to clipboard !"}),children:"Open success toast"}),m.jsx(_,{height:16}),m.jsx(A,{color:"warning",style:x.button,onPress:()=>L({variant:"warning",title:"Oops ! Something went wrong"}),children:"Open warning toast"})]}),m.jsxs(X,{title:"With title and description",children:[m.jsx(A,{color:"positive",style:x.button,onPress:()=>L({variant:"success",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),m.jsx(_,{height:16}),m.jsx(A,{color:"negative",style:x.button,onPress:()=>L({variant:"error",title:"Oops ! Something went wrong",error:Fe,description:"Please retry or contact us"}),children:"Open error toast"}),m.jsx(_,{height:16}),m.jsx(A,{color:"shakespear",style:x.button,onPress:()=>L({variant:"info",title:"Successfully copy to clipboard !",description:"You can now paste it anywhere"}),children:"Open success toast"}),m.jsx(_,{height:16}),m.jsx(A,{color:"warning",style:x.button,onPress:()=>L({variant:"warning",title:"Oops ! Something went wrong",description:"Talk to an expert"}),children:"Open warning toast"})]}),m.jsxs(X,{title:"With long title and description",children:[m.jsx(A,{color:"positive",style:x.button,onPress:()=>L({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"}),m.jsx(_,{height:16}),m.jsx(A,{color:"positive",style:x.button,onPress:()=>L({variant:"success",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"}),children:"Open success toast"})]})]})]});q.__docgenInfo={description:"",methods:[],displayName:"Default"};var ye,Se,ve;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <ToastStack />

      <StoryBlock title="Toast">
        <StoryPart title="With only title">
          <LakeButton color="positive" style={styles.button} onPress={() => showToast({
          variant: "success",
          title: "Successfully copy to clipboard !"
        })}>
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="negative" style={styles.button} onPress={() => showToast({
          variant: "error",
          title: "Oops ! Something went wrong"
        })}>
            Open error toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="shakespear" style={styles.button} onPress={() => showToast({
          variant: "info",
          title: "Successfully copy to clipboard !"
        })}>
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="warning" style={styles.button} onPress={() => showToast({
          variant: "warning",
          title: "Oops ! Something went wrong"
        })}>
            Open warning toast
          </LakeButton>
        </StoryPart>

        <StoryPart title="With title and description">
          <LakeButton color="positive" style={styles.button} onPress={() => showToast({
          variant: "success",
          title: "Successfully copy to clipboard !",
          description: "You can now paste it anywhere"
        })}>
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="negative" style={styles.button} onPress={() => showToast({
          variant: "error",
          title: "Oops ! Something went wrong",
          error,
          description: "Please retry or contact us"
        })}>
            Open error toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="shakespear" style={styles.button} onPress={() => showToast({
          variant: "info",
          title: "Successfully copy to clipboard !",
          description: "You can now paste it anywhere"
        })}>
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="warning" style={styles.button} onPress={() => showToast({
          variant: "warning",
          title: "Oops ! Something went wrong",
          description: "Talk to an expert"
        })}>
            Open warning toast
          </LakeButton>
        </StoryPart>

        <StoryPart title="With long title and description">
          <LakeButton color="positive" style={styles.button} onPress={() => showToast({
          variant: "success",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"
        })}>
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton color="positive" style={styles.button} onPress={() => showToast({
          variant: "success",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut"
        })}>
            Open success toast
          </LakeButton>
        </StoryPart>
      </StoryBlock>
    </>;
}`,...(ve=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};const Pt=["Default"];export{q as Default,Pt as __namedExportsOrder,Mt as default};
//# sourceMappingURL=Toast.stories-uE2I1BW7.js.map
