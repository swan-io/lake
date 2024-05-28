import{s as be,d as M,b as j,c as pe,i as A,f as he,j as e,V as m,F as Ne,k as ye,C as xe,B as Te,S as B}from"./Space-Ba_5kcAr.js";import{r as n}from"./index-BwDkhjyp.js";import{P as we,S as y,c as ie,d as R}from"./FixedListViewCells-CUa9sNLu.js";import{L as W}from"./LakeButton-9L8svTrP.js";import{a as Ce}from"./LakeCheckbox-CX-BNnNM.js";import{c as te}from"./commonStyles-t4XfA7cz.js";import{L as Se}from"./LakeHeading-xyezRPip.js";import{R as ke}from"./ResponsiveContainer-B4rTbhwZ.js";import{T as Ie}from"./Tag-Bq1jvqWH.js";import{v as Re}from"./v4-CQkTLCs1.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./a11y-DXvpDVrG.js";import"./array-rjEBP2Ry.js";import"./function-C_obDF4E.js";import"./BorderedIcon-Bxi4u8nd.js";import"./Pressable-D7iehN0m.js";import"./index-CGhaABkj.js";import"./index-Ch8EHhxe.js";const Me="inherit",r=be.create({root:{height:1,alignSelf:"stretch",flexGrow:1,backgroundColor:M.default},contentContainer:{flexDirection:"column",alignItems:"stretch",flexGrow:1},segment:{flexDirection:"row",alignItems:"stretch",overflow:"hidden",paddingHorizontal:j[8]},segmentLarge:{paddingHorizontal:j[24]},row:{boxShadow:`inset 0 -1px ${pe.gray[100]}`},activeRow:{backgroundColor:M.accented},hoveredRow:{backgroundColor:M.accented},segmentHeaderCell:{display:"flex",flexDirection:"row",alignItems:"center"},header:{position:"sticky",top:0,flexDirection:"row",alignItems:"stretch",zIndex:2},stickyHeader:{position:"sticky",backgroundColor:M.default90Transparency,backdropFilter:"blur(4px)",zIndex:10,paddingHorizontal:j[24],flexDirection:"row",alignItems:"center"},stickyHeaderLarge:{paddingHorizontal:j[40]},loadingPlaceholder:{position:"absolute",left:0,right:0,top:0},rowLink:{color:Me,textDecorationLine:"none"},emptyListContainer:{...te.fill,flexDirection:"column",alignItems:"center",justifyContent:"center",padding:j[48],backgroundColor:M.default},scrollTracker:{pointerEvents:"none",position:"absolute",left:0,bottom:0,right:0}}),K=1,re=0,Ee=({id:t,item:p,index:a,rowHeight:w,columns:h,extraInfo:C,isActive:S,isHovered:f,large:N,style:b,onMouseEnter:E,onMouseLeave:v})=>{const g=n.useRef(null);return xe(g,{onHoverStart:()=>E(t),onHoverEnd:()=>v()}),e.jsx(m,{ref:g,style:[r.segment,N&&r.segmentLarge,r.row,b==null?void 0:b(p,N),S&&r.activeRow,f&&r.hoveredRow,{minHeight:w}],children:h.map(({width:i,id:d,renderCell:c})=>e.jsx(m,{style:[r.segmentHeaderCell,{width:typeof i=="number"?i:K,flexGrow:i==="grow"?K:re}],id:d,children:c({columnId:d,item:p,index:a,extraInfo:C,isHovered:f})},d))})},q=({data:t,keyExtractor:p,rowHeight:a,groupHeaderHeight:w,headerHeight:h,columns:C,smallColumns:S=C,extraInfo:f,onEndReached:N,onEndReachedThresholdPx:b=200,headerStyle:E,rowStyle:v,getRowLink:g,activeRowId:i,renderEmptyList:d,onActiveRowChange:c,groupBy:F,loading:x,breakpoint:le=ye.large,withoutScroll:D=!1,stickyOffset:de=0,headerBackgroundColor:se=M.default})=>{const oe=n.useId(),O=n.useRef(null),J=n.useMemo(()=>{if(F==null)return new Map([[null,t]]);const l=new Map;return t.forEach(o=>{const s=F(o);l.set(s,[...l.get(s)??[],o])}),l},[F,t]),Q=a*t.length+J.size*w,H=A(x)&&x.isLoading,G=t.length===0,[me,Z]=n.useState(void 0),ge=n.useCallback(()=>{Z(void 0)},[]);n.useEffect(()=>{const l=O.current;if(l!=null){const o=l,s=new IntersectionObserver(u=>{u.forEach(T=>{T.isIntersecting&&A(N)&&N()})});return s.observe(o),()=>s.unobserve(o)}},[N]);const ce=n.useCallback(({item:l,absoluteIndex:o,extraInfo:s})=>{const u=g==null?void 0:g({item:l,index:o,extraInfo:s});return he(u)?e.jsx(m,{}):u},[g]),Y=n.useRef(null);n.useEffect(()=>{const l=Y.current;if(i!=null&&l!=null){const o=l;o.scrollIntoView({behavior:"smooth",block:"nearest"}),c==null||c(o)}},[i,c]);const ue=n.useMemo(()=>D?e.jsx(m,{style:r.contentContainer}):e.jsx(Ne,{scrollEventThrottle:32,contentContainerStyle:[r.contentContainer,{minHeight:Q+(H?x.count*a:0)}]}),[H,x==null?void 0:x.count,a,Q,D]);return e.jsx(ke,{style:D?G?te.fill:void 0:r.root,breakpoint:le,children:({large:l})=>{const o=l?C:S;return e.jsx(e.Fragment,{children:n.cloneElement(ue,{children:e.jsxs(e.Fragment,{children:[!G&&l?e.jsx(m,{style:[r.segment,r.segmentLarge,r.header,E,{backgroundColor:se}],children:o.map(({id:s,width:u,title:T,renderTitle:k})=>{const I=`${oe}_${s}`;return e.jsx(m,{style:[r.segmentHeaderCell,{width:typeof u=="number"?u:K,flexGrow:u==="grow"?K:re,height:h}],id:I,children:k({title:T,extraInfo:f,id:s})},I)})}):null,e.jsx(m,{children:Array.from(J.entries()).map(([s,u])=>e.jsxs(n.Fragment,{children:[s!=null?e.jsx(m,{style:[r.stickyHeader,l&&r.stickyHeaderLarge,{height:w,top:de+(l?h:0)}],children:e.jsx(Se,{level:3,variant:"h3",children:s})}):null,u.map((T,k)=>{const I=p(T,k),X=i===I,fe=A(g)&&me===I,U=ce({item:T,absoluteIndex:k,extraInfo:f});return n.cloneElement(U,{style:{...r.rowLink,...U.props.style},key:k,ref:X?Y:null,children:e.jsx(Ee,{id:I,rowHeight:a,columns:o,item:T,index:k,extraInfo:f,isActive:X,isHovered:fe,large:l,style:v,onMouseEnter:Z,onMouseLeave:ge})})})]},s))}),e.jsx(m,{children:e.jsx(m,{"aria-busy":H,style:r.loadingPlaceholder,children:H?e.jsx(we,{count:x.count,rowHeight:a,rowVerticalSpacing:0,paddingHorizontal:0}):null})}),G&&A(d)&&!H?e.jsx(m,{style:r.emptyListContainer,children:d()}):null,e.jsx(m,{style:[r.scrollTracker,{height:b}],ref:O})]})})})}})};q.__docgenInfo={description:"",methods:[],displayName:"PlainListView",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},keyExtractor:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => string",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""},highlightedRowId:{required:!1,tsType:{name:"string"},description:""},headerHeight:{required:!0,tsType:{name:"number"},description:""},rowHeight:{required:!0,tsType:{name:"number"},description:""},groupHeaderHeight:{required:!0,tsType:{name:"number"},description:""},extraInfo:{required:!0,tsType:{name:"ExtraInfo"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  width: number | "grow";
  title: string;
  renderTitle: (props: ColumnTitleConfig<ExtraInfo>) => ReactNode;
  renderCell: (props: ColumnCellConfig<T, ExtraInfo>) => ReactNode;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"width",value:{name:"union",raw:'number | "grow"',elements:[{name:"number"},{name:"literal",value:'"grow"'}],required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"renderTitle",value:{name:"signature",type:"function",raw:"(props: ColumnTitleConfig<ExtraInfo>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  title: string;
  extraInfo: ExtraInfo;
  id: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}},{key:"id",value:{name:"string",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!0}},{key:"renderCell",value:{name:"signature",type:"function",raw:"(props: ColumnCellConfig<T, ExtraInfo>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  columnId: string;
  item: T;
  index: number;
  extraInfo: ExtraInfo;
  isHovered: boolean;
}`,signature:{properties:[{key:"columnId",value:{name:"string",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}},{key:"isHovered",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!0}}]}}],raw:"ColumnConfig<T, ExtraInfo>[]"},description:""},smallColumns:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  width: number | "grow";
  title: string;
  renderTitle: (props: ColumnTitleConfig<ExtraInfo>) => ReactNode;
  renderCell: (props: ColumnCellConfig<T, ExtraInfo>) => ReactNode;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"width",value:{name:"union",raw:'number | "grow"',elements:[{name:"number"},{name:"literal",value:'"grow"'}],required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"renderTitle",value:{name:"signature",type:"function",raw:"(props: ColumnTitleConfig<ExtraInfo>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  title: string;
  extraInfo: ExtraInfo;
  id: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}},{key:"id",value:{name:"string",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!0}},{key:"renderCell",value:{name:"signature",type:"function",raw:"(props: ColumnCellConfig<T, ExtraInfo>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  columnId: string;
  item: T;
  index: number;
  extraInfo: ExtraInfo;
  isHovered: boolean;
}`,signature:{properties:[{key:"columnId",value:{name:"string",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}},{key:"isHovered",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!0}}]}}],raw:"ColumnConfig<T, ExtraInfo>[]"},description:"",defaultValue:{value:"columns",computed:!1}},onEndReached:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEndReachedThresholdPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},headerStyle:{required:!1,tsType:{name:"union",raw:"ViewStyle | null | undefined",elements:[{name:"ViewStyle"},{name:"null"},{name:"undefined"}]},description:""},rowStyle:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T, large: boolean) => ViewStyle | null | undefined",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"boolean"},name:"large"}],return:{name:"union",raw:"ViewStyle | null | undefined",elements:[{name:"ViewStyle"},{name:"null"},{name:"undefined"}]}}},description:""},getRowLink:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  config: LinkConfig<T, ExtraInfo>,
) => ReactElement<{ children: (state: PressableStateCallbackType) => React.ReactNode }>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  item: T;
  index: number;
  extraInfo: ExtraInfo;
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}},{key:"extraInfo",value:{name:"ExtraInfo",required:!0}}]}},name:"config"}],return:{name:"ReactElement",elements:[{name:"signature",type:"object",raw:"{ children: (state: PressableStateCallbackType) => React.ReactNode }",signature:{properties:[{key:"children",value:{name:"signature",type:"function",raw:"(state: PressableStateCallbackType) => React.ReactNode",signature:{arguments:[{type:{name:"PressableStateCallbackType"},name:"state"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!0}}]}}],raw:"ReactElement<{ children: (state: PressableStateCallbackType) => React.ReactNode }>"}}},description:""},renderEmptyList:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},groupBy:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},onActiveRowChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(element: HTMLElement) => void",signature:{arguments:[{type:{name:"HTMLElement"},name:"element"}],return:{name:"void"}}},description:""},activeRowId:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  isLoading: boolean;
  count: number;
}`,signature:{properties:[{key:"isLoading",value:{name:"boolean",required:!0}},{key:"count",value:{name:"number",required:!0}}]}},description:""},breakpoint:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"950",computed:!1}},withoutScroll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},stickyOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},headerBackgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"var(--color-background-default)"',computed:!1}}}};const _e={title:"Layout/PlainListView",component:q},ve=({id:t})=>t,Fe=()=>{const t=["Matthias","John","Jane","Camille","Charlotte","Francis","Émilie","François","Laura","Marie","Natasha","Nicolas","Pierre","Thomas","Valérie","Yann","Zoé","Jérôme","Thomas"];return t[Math.floor(Math.random()*t.length)]??t[0]},V=t=>({id:Re(),name:Fe(),modulo:String(t%10)}),L=()=>{const[t,p]=n.useState({key:"name",order:"Desc"}),[a,w]=n.useState(0),[h,C]=n.useState(!1),[S,f]=n.useState(!1),[N,b]=n.useState(()=>Array.from({length:100},(i,d)=>V(d))),E=()=>{b(i=>[V(i.length),...i])},v=n.useCallback(()=>{w(i=>i+1),h&&f(!0)},[h]);n.useEffect(()=>{if(S){const i=setTimeout(()=>{f(!1),b(d=>[...d,...Array.from({length:100},(c,F)=>V(F+d.length))])},1e3);return()=>clearTimeout(i)}});const g=n.useMemo(()=>[{id:"name",width:"grow",title:"Name",renderTitle:({title:i,extraInfo:d,id:c})=>e.jsx(y,{text:i,sort:d.key===c?d.order:void 0,onPress:()=>p({key:c,order:d.order==="Desc"?"Asc":"Desc"})}),renderCell:({item:{name:i}})=>e.jsx(ie,{text:i})}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(Te,{direction:"row",alignItems:"center",children:[e.jsx(W,{icon:"add-circle-filled",color:"live",onPress:E,children:"Prepend"}),e.jsx(B,{width:16}),e.jsx(W,{icon:"delete-filled",color:"negative",onPress:()=>b([]),children:"Clear"}),e.jsx(B,{width:16}),e.jsxs(Ie,{label:"End reached",children:[a," times"]}),e.jsx(B,{width:16}),e.jsx(Ce,{label:"With infinite scroll",value:h,onValueChange:C})]}),e.jsx(B,{height:16}),e.jsx(q,{groupBy:i=>i.modulo,extraInfo:t,keyExtractor:ve,data:N,columns:g,rowHeight:48,headerHeight:48,groupHeaderHeight:48,onEndReached:v,onEndReachedThresholdPx:300,loading:{isLoading:S,count:5}})]})},P=()=>{const t=[{id:"175b2b6a-36ef-4e1b-88a9-621a5f0c2e80",firstName:"Gardiner",lastName:"Aslum",email:"gaslum0@twitter.com",gender:"Male",age:62,language:"Swahili",iban:"PK59 CRCM H5JR O6JG M55Q K4P4"},{id:"dc413590-7160-4ea8-ada0-ba441243d0db",firstName:"Cirillo",lastName:"Ackerman",email:"cackerman1@elegantthemes.com",gender:"Male",age:55,language:"Marathi",iban:"GI75 AOAI 5BZV QMBT UN9A YVM"},{id:"9316b303-9279-477f-a3be-ace7462a8cfe",firstName:"Karie",lastName:"Burdus",email:"kburdus2@twitpic.com",gender:"Female",age:11,language:"Afrikaans",iban:"SA20 84VK BWXJ PDSM UV1M OYIN"},{id:"5bcfd19d-df3c-4510-9f2f-1fc1ba46b737",firstName:"Aldon",lastName:"Johananoff",email:"ajohananoff3@geocities.jp",gender:"Male",age:1,language:"Yiddish",iban:"MD68 4ADX ICKA OXRJ FQWE K2HZ"},{id:"553d0990-0b0d-45fb-bfd1-a6244dae0a30",firstName:"Johann",lastName:"Giacoboni",email:"jgiacoboni4@cnn.com",gender:"Male",age:46,language:"Telugu",iban:"LT32 0997 2947 1756 9437"},{id:"812fb6ae-3d6f-4cf0-b287-9f44a652b374",firstName:"Eleanor",lastName:"Sieghart",email:"esieghart5@ucla.edu",gender:"Female",age:26,language:"Georgian",iban:"LT27 9047 2611 1452 8780"},{id:"5668b708-5bfe-4a34-bc31-6b0a57c8d18b",firstName:"Rickie",lastName:"Jansky",email:"rjansky6@ezinearticles.com",gender:"Male",age:73,language:"Swedish",iban:"CZ21 6893 5210 5891 9226 5922"},{id:"f64c201c-f3c3-44e5-ad87-260ef4f0f557",firstName:"Tony",lastName:"Nineham",email:"tnineham7@dion.ne.jp",gender:"Male",age:37,language:"Dhivehi",iban:"FR38 6440 8279 33ST RSDF 6F8M T28"},{id:"f2d85ef2-6dc4-458e-8763-f88f940f1ef6",firstName:"Land",lastName:"Chanter",email:"lchanter8@msn.com",gender:"Male",age:20,language:"Nepali",iban:"FI32 1667 7210 0638 43"},{id:"edd5f87b-0fd3-4a1d-98aa-838bd07a65e3",firstName:"Else",lastName:"Tupling",email:"etupling9@hubpages.com",gender:"Female",age:12,language:"Punjabi",iban:"DO02 14II 8601 9014 6446 5324 5633"},{id:"308d3a75-d317-4a13-8fb2-ddfd79a842cc",firstName:"Idell",lastName:"Penley",email:"ipenleya@behance.net",gender:"Female",age:51,language:"Telugu",iban:"VG47 NBTH 9789 2609 3658 9814"},{id:"6f524896-9df4-4750-baca-b4e3865509ef",firstName:"Thornie",lastName:"De Bellis",email:"tdebellisb@exblog.jp",gender:"Male",age:75,language:"Portuguese",iban:"FR12 6263 3211 29VU Y5FH W9VF Y03"},{id:"12e1cda3-976f-4e94-988c-f21f1b9601a8",firstName:"Everard",lastName:"Chainey",email:"echaineyc@bloomberg.com",gender:"Male",age:98,language:"Latvian",iban:"FR40 2091 7795 48O8 BA94 EI1B 208"},{id:"777eb6d6-309c-4111-869d-99e8428bb0a2",firstName:"Gradeigh",lastName:"Cristou",email:"gcristoud@un.org",gender:"Male",age:71,language:"Dhivehi",iban:"IS70 2614 2202 5571 2550 4949 88"},{id:"ee3e26be-dada-4a2c-80d3-5c3d6872006b",firstName:"Cesar",lastName:"Mixworthy",email:"cmixworthye@discuz.net",gender:"Male",age:17,language:"Bosnian",iban:"HR46 3404 9971 4281 8436 9"},{id:"02218e29-fe31-498c-93df-ecfed3a09c0e",firstName:"Rabi",lastName:"Haken",email:"rhakenf@mayoclinic.com",gender:"Male",age:16,language:"Somali",iban:"HR23 7589 1477 6114 8045 6"},{id:"01c3bc82-f2aa-4a77-9bed-e2551db15a36",firstName:"Tami",lastName:"Raittie",email:"traittieg@dailymail.co.uk",gender:"Female",age:61,language:"Guaraní",iban:"LI65 2052 2XAV 9X48 5OEP I"},{id:"52422c9d-9f2c-451f-8154-5403f2bc4d47",firstName:"Frasier",lastName:"Ricson",email:"fricsonh@dropbox.com",gender:"Male",age:16,language:"Swahili",iban:"FR48 3461 8133 97SJ LIQ7 MY9A I63"},{id:"deb3d0ca-61cc-4a7e-9211-0a2a4df3f8cd",firstName:"Mareah",lastName:"Bernini",email:"mberninii@altervista.org",gender:"Female",age:27,language:"Swati",iban:"IS51 4493 4445 4310 0784 4980 44"},{id:"acb714f4-f173-4eb7-b644-c16697f72cde",firstName:"Stanfield",lastName:"Ownsworth",email:"sownsworthj@csmonitor.com",gender:"Male",age:94,language:"Dari",iban:"ES60 2752 6335 4537 0578 3332"},{id:"2019dd71-21fd-40e5-91c2-cddb6dda2eea",firstName:"Emerson",lastName:"Haggata",email:"ehaggatak@mayoclinic.com",gender:"Male",age:35,language:"Hebrew",iban:"CY31 9765 4754 IQH3 LICK AIKU 4PLQ"},{id:"29cfbf9c-7c55-433a-83ec-dffc67c2dbdd",firstName:"Odie",lastName:"Tommei",email:"otommeil@naver.com",gender:"Male",age:15,language:"Malagasy",iban:"BG81 RBEC 5389 42TC NEXL HG"},{id:"706965f6-3722-4947-8707-c1397980b8bb",firstName:"Laurianne",lastName:"Joanic",email:"ljoanicm@census.gov",gender:"Female",age:81,language:"Albanian",iban:"ES14 1609 6277 9104 2449 0881"},{id:"333e3121-1b7c-4dae-9303-21d63f1e5554",firstName:"Tiphany",lastName:"Howson",email:"thowsonn@usa.gov",gender:"Female",age:77,language:"Tswana",iban:"SI52 4130 0420 3721 773"},{id:"81cb18de-6c5f-4f41-add8-335f8a7ce655",firstName:"Elliott",lastName:"Vivers",email:"eviverso@wikimedia.org",gender:"Male",age:17,language:"Hebrew",iban:"ME18 8754 3427 9112 7382 38"},{id:"7c118fe5-3929-4077-be27-03f2d4a31481",firstName:"Randi",lastName:"Thackeray",email:"rthackerayp@nbcnews.com",gender:"Female",age:95,language:"Estonian",iban:"CZ48 1381 4600 0501 0321 2985"},{id:"f6189f94-b630-4d92-8ddc-43ca79d5ccf3",firstName:"Teddy",lastName:"Cordaroy",email:"tcordaroyq@pagesperso-orange.fr",gender:"Female",age:53,language:"German",iban:"KW39 XNHP RSYI K2PZ VD49 ERDZ DQRR 2L"},{id:"91aad887-0f88-47ac-a383-78224efe7015",firstName:"Sianna",lastName:"Wiskar",email:"swiskarr@ca.gov",gender:"Female",age:57,language:"Swati",iban:"IT75 S421 6382 981E RLEM EYMS FYU"},{id:"0a893880-c5d0-4871-ab5e-db3e26c633b6",firstName:"Abelard",lastName:"Curmi",email:"acurmis@storify.com",gender:"Male",age:76,language:"Hebrew",iban:"GB43 UFMM 5267 2492 0553 52"},{id:"6bd1e82d-e33d-40a7-8872-49a86d7cdb1a",firstName:"Channa",lastName:"Starmer",email:"cstarmert@wikimedia.org",gender:"Female",age:57,language:"Yiddish",iban:"MK07 261H IZNA OG1J H90"},{id:"e94c71ea-9026-4853-862a-37472e1208c1",firstName:"Sanson",lastName:"Palleske",email:"spalleskeu@ameblo.jp",gender:"Male",age:7,language:"Polish",iban:"IT70 Y658 7555 842T IGLV DNQS DIX"},{id:"7162059c-8455-4c3d-976e-6e74bd319a1f",firstName:"Roma",lastName:"Aldren",email:"raldrenv@eepurl.com",gender:"Male",age:23,language:"Quechua",iban:"NO08 9195 1286 666"},{id:"68020793-04d8-462a-8d82-e22b4e8298ba",firstName:"Garvy",lastName:"Twitchett",email:"gtwitchettw@microsoft.com",gender:"Male",age:13,language:"Tetum",iban:"KZ81 391U TQ36 DKXZ WSFO"},{id:"0fec1900-0394-4529-ae16-6f098f5fed3f",firstName:"Sheffy",lastName:"Heyns",email:"sheynsx@tamu.edu",gender:"Male",age:60,language:"Bengali",iban:"CZ22 1207 2864 2266 7776 9806"},{id:"2595827a-0347-4eae-8d0d-920138db66b2",firstName:"Minnaminnie",lastName:"Howick",email:"mhowicky@blogger.com",gender:"Female",age:52,language:"Belarusian",iban:"MR30 1295 5903 4088 9897 4509 851"},{id:"d6d109a3-27f0-4ac5-bdd8-5aefd818a3f5",firstName:"Evania",lastName:"MacKowle",email:"emackowlez@examiner.com",gender:"Female",age:83,language:"Mongolian",iban:"FR46 6328 5587 86KB IEDX 83PH T09"},{id:"daaa8ca4-68ca-44e2-8db1-658dd6512e58",firstName:"Sigvard",lastName:"Coite",email:"scoite10@aol.com",gender:"Male",age:91,language:"Mongolian",iban:"BR13 0345 3620 8756 0448 7226 150O X"},{id:"4aee61a5-495f-4b37-ad56-535670e9a1c7",firstName:"Elle",lastName:"Espinal",email:"eespinal11@ameblo.jp",gender:"Female",age:95,language:"Telugu",iban:"FR63 6349 9707 26H3 2HJ9 UKRR C83"},{id:"c916198a-dac3-4c07-8345-7ca3bf5a41af",firstName:"Rennie",lastName:"Reuven",email:"rreuven12@icio.us",gender:"Female",age:97,language:"Oriya",iban:"AT03 8563 8509 2879 2356"},{id:"33738690-a693-413e-8a2b-5b61de0f271c",firstName:"Lanie",lastName:"Mandifield",email:"lmandifield13@youtu.be",gender:"Female",age:75,language:"Khmer",iban:"FO86 0926 5037 5098 31"},{id:"29e5c7de-7342-487e-82e6-b19edab8cd7e",firstName:"Gordan",lastName:"Kernley",email:"gkernley14@tinypic.com",gender:"Male",age:67,language:"Hebrew",iban:"LU86 969B 3JI6 3IVF KQ2G"},{id:"00243774-aa91-49a1-b600-8c6b7d2a07e5",firstName:"Eddi",lastName:"Bramhill",email:"ebramhill15@prnewswire.com",gender:"Female",age:56,language:"Spanish",iban:"SA40 15AZ 1QZA UL6T CWPM 4KMJ"},{id:"e72769d2-5362-4794-818e-3e8b8ffcff35",firstName:"Ferris",lastName:"Scherme",email:"fscherme16@google.it",gender:"Male",age:38,language:"New Zealand Sign Language",iban:"GR52 1991 550F UIEC GLTM 5TKR NVT"},{id:"bfb15290-51cb-4399-b49c-1ecd26a3d807",firstName:"Sibbie",lastName:"Perigoe",email:"sperigoe17@alexa.com",gender:"Female",age:2,language:"Tetum",iban:"EE49 2365 6849 4864 3325"},{id:"aed1a45a-85d2-48d1-ac3d-b4693e4ebf27",firstName:"Joy",lastName:"Goldes",email:"jgoldes18@shop-pro.jp",gender:"Female",age:97,language:"Tajik",iban:"FR22 2122 4677 00KQ RZ4P 3DVQ H15"},{id:"f46ba64d-bf63-4bb0-868a-f1461069e4a2",firstName:"Tracie",lastName:"Kincaid",email:"tkincaid19@pagesperso-orange.fr",gender:"Female",age:80,language:"Dhivehi",iban:"HU15 0070 5329 2620 0803 6672 5660"},{id:"9cd90ae9-b5dd-4261-94ae-28e2767c637c",firstName:"Nikolia",lastName:"Bruniges",email:"nbruniges1a@businessinsider.com",gender:"Female",age:40,language:"Portuguese",iban:"AD27 6822 3765 QSPS XCN3 9ZGN"},{id:"eae21532-59c2-441b-9554-bd75ff7e8938",firstName:"Giles",lastName:"Scollick",email:"gscollick1b@ihg.com",gender:"Male",age:71,language:"Georgian",iban:"PS22 EUXP PYKC PSXP CC0S O6XK E5T8 B"},{id:"62f46930-2abc-4240-b32a-cec75c1fa9bd",firstName:"Sid",lastName:"Popple",email:"spopple1c@shutterfly.com",gender:"Male",age:73,language:"Malayalam",iban:"FR58 9594 1152 21KO KM8Q G587 B66"},{id:"e114aa1c-3d13-44aa-9351-e6fa908cbc0c",firstName:"Merlina",lastName:"Abbati",email:"mabbati1d@sciencedirect.com",gender:"Female",age:33,language:"Bengali",iban:"IT58 K059 0159 0301 GDRY CY1K JNN"}],p=[{id:"id",width:"grow",title:"ID",renderTitle:({title:a})=>e.jsx(y,{text:a}),renderCell:({item:a})=>e.jsx(ie,{text:a.id})},{id:"fullName",width:200,title:"Full name",renderTitle:({title:a})=>e.jsx(y,{text:a}),renderCell:({item:a})=>e.jsx(R,{text:`${a.firstName} ${a.lastName}`})},{id:"email",width:220,title:"Email",renderTitle:({title:a})=>e.jsx(y,{text:a}),renderCell:({item:a})=>e.jsx(R,{text:a.email})},{id:"gender",width:100,title:"Gender",renderTitle:({title:a})=>e.jsx(y,{text:a}),renderCell:({item:a})=>e.jsx(R,{text:a.gender})},{id:"age",width:80,title:"Age",renderTitle:({title:a})=>e.jsx(y,{text:a}),renderCell:({item:a})=>e.jsx(R,{text:a.age.toString()})},{id:"language",width:150,title:"Language",renderTitle:({title:a})=>e.jsx(y,{text:a}),renderCell:({item:a})=>e.jsx(R,{text:a.language})},{id:"iban",width:180,title:"IBAN",renderTitle:({title:a})=>e.jsx(y,{text:a}),renderCell:({item:a})=>e.jsx(R,{text:a.iban})}];return e.jsx(q,{keyExtractor:({id:a})=>a,data:t,columns:p,extraInfo:void 0,rowHeight:48,headerHeight:48,groupHeaderHeight:48,onEndReachedThresholdPx:300})};L.__docgenInfo={description:"",methods:[],displayName:"Primary"};P.__docgenInfo={description:"",methods:[],displayName:"MultiColumn"};var z,_,$;L.parameters={...L.parameters,docs:{...(z=L.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [sort, setSort] = useState<SortInfo>({
    key: "name",
    order: "Desc"
  });
  const [endReachedTimes, setEndReachedTimes] = useState(0);
  const [withInfiniteScroll, setWithInfiniteScroll] = useState(false);
  const [showFakeLoader, setShowFakeLoader] = useState(false);
  const [data, setData] = useState(() => Array.from({
    length: 100
  }, (_, index) => generateItem(index)));
  const prependItem = () => {
    setData(data => [generateItem(data.length), ...data]);
  };
  const onEndReached = useCallback(() => {
    setEndReachedTimes(v => v + 1);
    if (withInfiniteScroll) {
      setShowFakeLoader(true);
    }
  }, [withInfiniteScroll]);
  useEffect(() => {
    if (showFakeLoader) {
      const timeout = setTimeout(() => {
        setShowFakeLoader(false);
        setData(data => [...data, ...Array.from({
          length: 100
        }, (_, index) => generateItem(index + data.length))]);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  });
  const columns = useMemo(() => {
    return [{
      id: "name",
      width: ("grow" as const),
      title: "Name",
      renderTitle: ({
        title,
        extraInfo,
        id
      }: ColumnTitleConfig<SortInfo>) => <SimpleHeaderCell text={title} sort={extraInfo.key === id ? extraInfo.order : undefined} onPress={() => setSort({
        key: id,
        order: extraInfo.order === "Desc" ? "Asc" : "Desc"
      })} />,
      renderCell: ({
        item: {
          name
        }
      }: ColumnCellConfig<TestRow, SortInfo>) => <SimpleTitleCell text={name} />
    }];
  }, []);
  return <>
      <Box direction="row" alignItems="center">
        <LakeButton icon="add-circle-filled" color="live" onPress={prependItem}>
          Prepend
        </LakeButton>

        <Space width={16} />

        <LakeButton icon="delete-filled" color="negative" onPress={() => setData([])}>
          Clear
        </LakeButton>

        <Space width={16} />
        <Tag label="End reached">{endReachedTimes} times</Tag>
        <Space width={16} />

        <LakeLabelledCheckbox label="With infinite scroll" value={withInfiniteScroll} onValueChange={setWithInfiniteScroll} />
      </Box>

      <Space height={16} />

      <PlainListView groupBy={item => item.modulo} extraInfo={sort} keyExtractor={keyExtractor} data={data} columns={columns} rowHeight={48} headerHeight={48} groupHeaderHeight={48} onEndReached={onEndReached} onEndReachedThresholdPx={300} loading={{
      isLoading: showFakeLoader,
      count: 5
    }} />
    </>;
}`,...($=(_=L.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var ee,ae,ne;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  type ExtraInfo = undefined;
  type Item = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: "Male" | "Female";
    age: number;
    language: string;
    iban: string;
  };
  const data: Item[] = [{
    id: "175b2b6a-36ef-4e1b-88a9-621a5f0c2e80",
    firstName: "Gardiner",
    lastName: "Aslum",
    email: "gaslum0@twitter.com",
    gender: "Male",
    age: 62,
    language: "Swahili",
    iban: "PK59 CRCM H5JR O6JG M55Q K4P4"
  }, {
    id: "dc413590-7160-4ea8-ada0-ba441243d0db",
    firstName: "Cirillo",
    lastName: "Ackerman",
    email: "cackerman1@elegantthemes.com",
    gender: "Male",
    age: 55,
    language: "Marathi",
    iban: "GI75 AOAI 5BZV QMBT UN9A YVM"
  }, {
    id: "9316b303-9279-477f-a3be-ace7462a8cfe",
    firstName: "Karie",
    lastName: "Burdus",
    email: "kburdus2@twitpic.com",
    gender: "Female",
    age: 11,
    language: "Afrikaans",
    iban: "SA20 84VK BWXJ PDSM UV1M OYIN"
  }, {
    id: "5bcfd19d-df3c-4510-9f2f-1fc1ba46b737",
    firstName: "Aldon",
    lastName: "Johananoff",
    email: "ajohananoff3@geocities.jp",
    gender: "Male",
    age: 1,
    language: "Yiddish",
    iban: "MD68 4ADX ICKA OXRJ FQWE K2HZ"
  }, {
    id: "553d0990-0b0d-45fb-bfd1-a6244dae0a30",
    firstName: "Johann",
    lastName: "Giacoboni",
    email: "jgiacoboni4@cnn.com",
    gender: "Male",
    age: 46,
    language: "Telugu",
    iban: "LT32 0997 2947 1756 9437"
  }, {
    id: "812fb6ae-3d6f-4cf0-b287-9f44a652b374",
    firstName: "Eleanor",
    lastName: "Sieghart",
    email: "esieghart5@ucla.edu",
    gender: "Female",
    age: 26,
    language: "Georgian",
    iban: "LT27 9047 2611 1452 8780"
  }, {
    id: "5668b708-5bfe-4a34-bc31-6b0a57c8d18b",
    firstName: "Rickie",
    lastName: "Jansky",
    email: "rjansky6@ezinearticles.com",
    gender: "Male",
    age: 73,
    language: "Swedish",
    iban: "CZ21 6893 5210 5891 9226 5922"
  }, {
    id: "f64c201c-f3c3-44e5-ad87-260ef4f0f557",
    firstName: "Tony",
    lastName: "Nineham",
    email: "tnineham7@dion.ne.jp",
    gender: "Male",
    age: 37,
    language: "Dhivehi",
    iban: "FR38 6440 8279 33ST RSDF 6F8M T28"
  }, {
    id: "f2d85ef2-6dc4-458e-8763-f88f940f1ef6",
    firstName: "Land",
    lastName: "Chanter",
    email: "lchanter8@msn.com",
    gender: "Male",
    age: 20,
    language: "Nepali",
    iban: "FI32 1667 7210 0638 43"
  }, {
    id: "edd5f87b-0fd3-4a1d-98aa-838bd07a65e3",
    firstName: "Else",
    lastName: "Tupling",
    email: "etupling9@hubpages.com",
    gender: "Female",
    age: 12,
    language: "Punjabi",
    iban: "DO02 14II 8601 9014 6446 5324 5633"
  }, {
    id: "308d3a75-d317-4a13-8fb2-ddfd79a842cc",
    firstName: "Idell",
    lastName: "Penley",
    email: "ipenleya@behance.net",
    gender: "Female",
    age: 51,
    language: "Telugu",
    iban: "VG47 NBTH 9789 2609 3658 9814"
  }, {
    id: "6f524896-9df4-4750-baca-b4e3865509ef",
    firstName: "Thornie",
    lastName: "De Bellis",
    email: "tdebellisb@exblog.jp",
    gender: "Male",
    age: 75,
    language: "Portuguese",
    iban: "FR12 6263 3211 29VU Y5FH W9VF Y03"
  }, {
    id: "12e1cda3-976f-4e94-988c-f21f1b9601a8",
    firstName: "Everard",
    lastName: "Chainey",
    email: "echaineyc@bloomberg.com",
    gender: "Male",
    age: 98,
    language: "Latvian",
    iban: "FR40 2091 7795 48O8 BA94 EI1B 208"
  }, {
    id: "777eb6d6-309c-4111-869d-99e8428bb0a2",
    firstName: "Gradeigh",
    lastName: "Cristou",
    email: "gcristoud@un.org",
    gender: "Male",
    age: 71,
    language: "Dhivehi",
    iban: "IS70 2614 2202 5571 2550 4949 88"
  }, {
    id: "ee3e26be-dada-4a2c-80d3-5c3d6872006b",
    firstName: "Cesar",
    lastName: "Mixworthy",
    email: "cmixworthye@discuz.net",
    gender: "Male",
    age: 17,
    language: "Bosnian",
    iban: "HR46 3404 9971 4281 8436 9"
  }, {
    id: "02218e29-fe31-498c-93df-ecfed3a09c0e",
    firstName: "Rabi",
    lastName: "Haken",
    email: "rhakenf@mayoclinic.com",
    gender: "Male",
    age: 16,
    language: "Somali",
    iban: "HR23 7589 1477 6114 8045 6"
  }, {
    id: "01c3bc82-f2aa-4a77-9bed-e2551db15a36",
    firstName: "Tami",
    lastName: "Raittie",
    email: "traittieg@dailymail.co.uk",
    gender: "Female",
    age: 61,
    language: "Guaraní",
    iban: "LI65 2052 2XAV 9X48 5OEP I"
  }, {
    id: "52422c9d-9f2c-451f-8154-5403f2bc4d47",
    firstName: "Frasier",
    lastName: "Ricson",
    email: "fricsonh@dropbox.com",
    gender: "Male",
    age: 16,
    language: "Swahili",
    iban: "FR48 3461 8133 97SJ LIQ7 MY9A I63"
  }, {
    id: "deb3d0ca-61cc-4a7e-9211-0a2a4df3f8cd",
    firstName: "Mareah",
    lastName: "Bernini",
    email: "mberninii@altervista.org",
    gender: "Female",
    age: 27,
    language: "Swati",
    iban: "IS51 4493 4445 4310 0784 4980 44"
  }, {
    id: "acb714f4-f173-4eb7-b644-c16697f72cde",
    firstName: "Stanfield",
    lastName: "Ownsworth",
    email: "sownsworthj@csmonitor.com",
    gender: "Male",
    age: 94,
    language: "Dari",
    iban: "ES60 2752 6335 4537 0578 3332"
  }, {
    id: "2019dd71-21fd-40e5-91c2-cddb6dda2eea",
    firstName: "Emerson",
    lastName: "Haggata",
    email: "ehaggatak@mayoclinic.com",
    gender: "Male",
    age: 35,
    language: "Hebrew",
    iban: "CY31 9765 4754 IQH3 LICK AIKU 4PLQ"
  }, {
    id: "29cfbf9c-7c55-433a-83ec-dffc67c2dbdd",
    firstName: "Odie",
    lastName: "Tommei",
    email: "otommeil@naver.com",
    gender: "Male",
    age: 15,
    language: "Malagasy",
    iban: "BG81 RBEC 5389 42TC NEXL HG"
  }, {
    id: "706965f6-3722-4947-8707-c1397980b8bb",
    firstName: "Laurianne",
    lastName: "Joanic",
    email: "ljoanicm@census.gov",
    gender: "Female",
    age: 81,
    language: "Albanian",
    iban: "ES14 1609 6277 9104 2449 0881"
  }, {
    id: "333e3121-1b7c-4dae-9303-21d63f1e5554",
    firstName: "Tiphany",
    lastName: "Howson",
    email: "thowsonn@usa.gov",
    gender: "Female",
    age: 77,
    language: "Tswana",
    iban: "SI52 4130 0420 3721 773"
  }, {
    id: "81cb18de-6c5f-4f41-add8-335f8a7ce655",
    firstName: "Elliott",
    lastName: "Vivers",
    email: "eviverso@wikimedia.org",
    gender: "Male",
    age: 17,
    language: "Hebrew",
    iban: "ME18 8754 3427 9112 7382 38"
  }, {
    id: "7c118fe5-3929-4077-be27-03f2d4a31481",
    firstName: "Randi",
    lastName: "Thackeray",
    email: "rthackerayp@nbcnews.com",
    gender: "Female",
    age: 95,
    language: "Estonian",
    iban: "CZ48 1381 4600 0501 0321 2985"
  }, {
    id: "f6189f94-b630-4d92-8ddc-43ca79d5ccf3",
    firstName: "Teddy",
    lastName: "Cordaroy",
    email: "tcordaroyq@pagesperso-orange.fr",
    gender: "Female",
    age: 53,
    language: "German",
    iban: "KW39 XNHP RSYI K2PZ VD49 ERDZ DQRR 2L"
  }, {
    id: "91aad887-0f88-47ac-a383-78224efe7015",
    firstName: "Sianna",
    lastName: "Wiskar",
    email: "swiskarr@ca.gov",
    gender: "Female",
    age: 57,
    language: "Swati",
    iban: "IT75 S421 6382 981E RLEM EYMS FYU"
  }, {
    id: "0a893880-c5d0-4871-ab5e-db3e26c633b6",
    firstName: "Abelard",
    lastName: "Curmi",
    email: "acurmis@storify.com",
    gender: "Male",
    age: 76,
    language: "Hebrew",
    iban: "GB43 UFMM 5267 2492 0553 52"
  }, {
    id: "6bd1e82d-e33d-40a7-8872-49a86d7cdb1a",
    firstName: "Channa",
    lastName: "Starmer",
    email: "cstarmert@wikimedia.org",
    gender: "Female",
    age: 57,
    language: "Yiddish",
    iban: "MK07 261H IZNA OG1J H90"
  }, {
    id: "e94c71ea-9026-4853-862a-37472e1208c1",
    firstName: "Sanson",
    lastName: "Palleske",
    email: "spalleskeu@ameblo.jp",
    gender: "Male",
    age: 7,
    language: "Polish",
    iban: "IT70 Y658 7555 842T IGLV DNQS DIX"
  }, {
    id: "7162059c-8455-4c3d-976e-6e74bd319a1f",
    firstName: "Roma",
    lastName: "Aldren",
    email: "raldrenv@eepurl.com",
    gender: "Male",
    age: 23,
    language: "Quechua",
    iban: "NO08 9195 1286 666"
  }, {
    id: "68020793-04d8-462a-8d82-e22b4e8298ba",
    firstName: "Garvy",
    lastName: "Twitchett",
    email: "gtwitchettw@microsoft.com",
    gender: "Male",
    age: 13,
    language: "Tetum",
    iban: "KZ81 391U TQ36 DKXZ WSFO"
  }, {
    id: "0fec1900-0394-4529-ae16-6f098f5fed3f",
    firstName: "Sheffy",
    lastName: "Heyns",
    email: "sheynsx@tamu.edu",
    gender: "Male",
    age: 60,
    language: "Bengali",
    iban: "CZ22 1207 2864 2266 7776 9806"
  }, {
    id: "2595827a-0347-4eae-8d0d-920138db66b2",
    firstName: "Minnaminnie",
    lastName: "Howick",
    email: "mhowicky@blogger.com",
    gender: "Female",
    age: 52,
    language: "Belarusian",
    iban: "MR30 1295 5903 4088 9897 4509 851"
  }, {
    id: "d6d109a3-27f0-4ac5-bdd8-5aefd818a3f5",
    firstName: "Evania",
    lastName: "MacKowle",
    email: "emackowlez@examiner.com",
    gender: "Female",
    age: 83,
    language: "Mongolian",
    iban: "FR46 6328 5587 86KB IEDX 83PH T09"
  }, {
    id: "daaa8ca4-68ca-44e2-8db1-658dd6512e58",
    firstName: "Sigvard",
    lastName: "Coite",
    email: "scoite10@aol.com",
    gender: "Male",
    age: 91,
    language: "Mongolian",
    iban: "BR13 0345 3620 8756 0448 7226 150O X"
  }, {
    id: "4aee61a5-495f-4b37-ad56-535670e9a1c7",
    firstName: "Elle",
    lastName: "Espinal",
    email: "eespinal11@ameblo.jp",
    gender: "Female",
    age: 95,
    language: "Telugu",
    iban: "FR63 6349 9707 26H3 2HJ9 UKRR C83"
  }, {
    id: "c916198a-dac3-4c07-8345-7ca3bf5a41af",
    firstName: "Rennie",
    lastName: "Reuven",
    email: "rreuven12@icio.us",
    gender: "Female",
    age: 97,
    language: "Oriya",
    iban: "AT03 8563 8509 2879 2356"
  }, {
    id: "33738690-a693-413e-8a2b-5b61de0f271c",
    firstName: "Lanie",
    lastName: "Mandifield",
    email: "lmandifield13@youtu.be",
    gender: "Female",
    age: 75,
    language: "Khmer",
    iban: "FO86 0926 5037 5098 31"
  }, {
    id: "29e5c7de-7342-487e-82e6-b19edab8cd7e",
    firstName: "Gordan",
    lastName: "Kernley",
    email: "gkernley14@tinypic.com",
    gender: "Male",
    age: 67,
    language: "Hebrew",
    iban: "LU86 969B 3JI6 3IVF KQ2G"
  }, {
    id: "00243774-aa91-49a1-b600-8c6b7d2a07e5",
    firstName: "Eddi",
    lastName: "Bramhill",
    email: "ebramhill15@prnewswire.com",
    gender: "Female",
    age: 56,
    language: "Spanish",
    iban: "SA40 15AZ 1QZA UL6T CWPM 4KMJ"
  }, {
    id: "e72769d2-5362-4794-818e-3e8b8ffcff35",
    firstName: "Ferris",
    lastName: "Scherme",
    email: "fscherme16@google.it",
    gender: "Male",
    age: 38,
    language: "New Zealand Sign Language",
    iban: "GR52 1991 550F UIEC GLTM 5TKR NVT"
  }, {
    id: "bfb15290-51cb-4399-b49c-1ecd26a3d807",
    firstName: "Sibbie",
    lastName: "Perigoe",
    email: "sperigoe17@alexa.com",
    gender: "Female",
    age: 2,
    language: "Tetum",
    iban: "EE49 2365 6849 4864 3325"
  }, {
    id: "aed1a45a-85d2-48d1-ac3d-b4693e4ebf27",
    firstName: "Joy",
    lastName: "Goldes",
    email: "jgoldes18@shop-pro.jp",
    gender: "Female",
    age: 97,
    language: "Tajik",
    iban: "FR22 2122 4677 00KQ RZ4P 3DVQ H15"
  }, {
    id: "f46ba64d-bf63-4bb0-868a-f1461069e4a2",
    firstName: "Tracie",
    lastName: "Kincaid",
    email: "tkincaid19@pagesperso-orange.fr",
    gender: "Female",
    age: 80,
    language: "Dhivehi",
    iban: "HU15 0070 5329 2620 0803 6672 5660"
  }, {
    id: "9cd90ae9-b5dd-4261-94ae-28e2767c637c",
    firstName: "Nikolia",
    lastName: "Bruniges",
    email: "nbruniges1a@businessinsider.com",
    gender: "Female",
    age: 40,
    language: "Portuguese",
    iban: "AD27 6822 3765 QSPS XCN3 9ZGN"
  }, {
    id: "eae21532-59c2-441b-9554-bd75ff7e8938",
    firstName: "Giles",
    lastName: "Scollick",
    email: "gscollick1b@ihg.com",
    gender: "Male",
    age: 71,
    language: "Georgian",
    iban: "PS22 EUXP PYKC PSXP CC0S O6XK E5T8 B"
  }, {
    id: "62f46930-2abc-4240-b32a-cec75c1fa9bd",
    firstName: "Sid",
    lastName: "Popple",
    email: "spopple1c@shutterfly.com",
    gender: "Male",
    age: 73,
    language: "Malayalam",
    iban: "FR58 9594 1152 21KO KM8Q G587 B66"
  }, {
    id: "e114aa1c-3d13-44aa-9351-e6fa908cbc0c",
    firstName: "Merlina",
    lastName: "Abbati",
    email: "mabbati1d@sciencedirect.com",
    gender: "Female",
    age: 33,
    language: "Bengali",
    iban: "IT58 K059 0159 0301 GDRY CY1K JNN"
  }];
  const columns: ColumnConfig<Item, ExtraInfo>[] = [{
    id: "id",
    width: "grow",
    title: "ID",
    renderTitle: ({
      title
    }) => <SimpleHeaderCell text={title} />,
    renderCell: ({
      item
    }) => <SimpleTitleCell text={item.id} />
  }, {
    id: "fullName",
    width: 200,
    title: "Full name",
    renderTitle: ({
      title
    }) => <SimpleHeaderCell text={title} />,
    renderCell: ({
      item
    }) => <SimpleRegularTextCell text={\`\${item.firstName} \${item.lastName}\`} />
  }, {
    id: "email",
    width: 220,
    title: "Email",
    renderTitle: ({
      title
    }) => <SimpleHeaderCell text={title} />,
    renderCell: ({
      item
    }) => <SimpleRegularTextCell text={item.email} />
  }, {
    id: "gender",
    width: 100,
    title: "Gender",
    renderTitle: ({
      title
    }) => <SimpleHeaderCell text={title} />,
    renderCell: ({
      item
    }) => <SimpleRegularTextCell text={item.gender} />
  }, {
    id: "age",
    width: 80,
    title: "Age",
    renderTitle: ({
      title
    }) => <SimpleHeaderCell text={title} />,
    renderCell: ({
      item
    }) => <SimpleRegularTextCell text={item.age.toString()} />
  }, {
    id: "language",
    width: 150,
    title: "Language",
    renderTitle: ({
      title
    }) => <SimpleHeaderCell text={title} />,
    renderCell: ({
      item
    }) => <SimpleRegularTextCell text={item.language} />
  }, {
    id: "iban",
    width: 180,
    title: "IBAN",
    renderTitle: ({
      title
    }) => <SimpleHeaderCell text={title} />,
    renderCell: ({
      item
    }) => <SimpleRegularTextCell text={item.iban} />
  }];
  return <PlainListView keyExtractor={({
    id
  }) => id} data={data} columns={columns} extraInfo={undefined} rowHeight={48} headerHeight={48} groupHeaderHeight={48} onEndReachedThresholdPx={300} />;
}`,...(ne=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const $e=["Primary","MultiColumn"];export{P as MultiColumn,L as Primary,$e as __namedExportsOrder,_e as default};
//# sourceMappingURL=PlainListView.stories-B6OYzzIg.js.map
