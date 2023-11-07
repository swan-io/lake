import{S as Ne,e as x,s as v,c as pe,i as B,g as ye,j as e,V as m,q as Se,F as Q,a as P,z as we,w as Te,b as K}from"./Space-357d3b43.js";import{r as n}from"./index-f1286426.js";import{c as te,B as Ce}from"./commonStyles-e9d52da3.js";import{P as Me,S as N,b as re,c as R}from"./FixedListView-24e3c5c8.js";import{a as z}from"./LakeButton-bd450cda.js";import{L as ke}from"./LakeCheckbox-7ffabe65.js";import{L as Ie}from"./LakeHeading-4727bead.js";import{R as Re}from"./ResponsiveContainer-0b47a67a.js";import{T as xe}from"./Tag-81080271.js";import{v as Ee}from"./v4-4a60fe23.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-babfcc78.js";import"./index-ca925b5c.js";import"./a11y-e7c88e69.js";import"./array-4dd4a51c.js";import"./function-a81f264e.js";import"./Boxed-86465006.js";import"./BorderedIcon-b5f15633.js";import"./index-eaebc258.js";import"./index-d5ea1730.js";const Fe="inherit",t=Ne.create({root:{height:1,alignSelf:"stretch",flexGrow:1,backgroundColor:x.default},contentContainer:{flexDirection:"column",alignItems:"stretch",flexGrow:1},segment:{flexDirection:"row",alignItems:"stretch",overflow:"hidden",paddingHorizontal:v[8]},segmentLarge:{paddingHorizontal:v[24]},row:{boxShadow:`inset 0 -1px ${pe.gray[100]}`},activeRow:{backgroundColor:x.accented},hoveredRow:{backgroundColor:x.accented},segmentHeaderCell:{display:"flex",flexDirection:"row",alignItems:"center"},header:{position:"sticky",top:0,flexDirection:"row",alignItems:"stretch",zIndex:2},stickyHeader:{position:"sticky",backgroundColor:x.default90Transparency,backdropFilter:"blur(4px)",zIndex:10,paddingHorizontal:v[24],flexDirection:"row",alignItems:"center"},stickyHeaderLarge:{paddingHorizontal:v[40]},loadingPlaceholder:{position:"absolute",left:0,right:0,top:0},rowLink:{color:Fe,textDecorationLine:"none"},emptyListContainer:{...te.fill,flexDirection:"column",alignItems:"center",justifyContent:"center",padding:v[48],backgroundColor:x.default},scrollTracker:{pointerEvents:"none",position:"absolute",left:0,bottom:0,right:0}}),G=1,de=0,He=({id:l,item:p,index:a,rowHeight:y,columns:S,extraInfo:C,isActive:M,isHovered:f,large:h,style:b,onMouseEnter:E,onMouseLeave:F})=>{const c=n.useRef(null);return Te(c,{onHoverStart:()=>E(l),onHoverEnd:()=>F()}),e(m,{ref:c,style:[t.segment,h&&t.segmentLarge,t.row,b==null?void 0:b(p,h),M&&t.activeRow,f&&t.hoveredRow,{minHeight:y}],children:S.map(({width:i,id:d,renderCell:g})=>e(m,{style:[t.segmentHeaderCell,{width:typeof i=="number"?i:G,flexGrow:i==="grow"?G:de}],id:d,children:g({columnId:d,item:p,index:a,extraInfo:C,isHovered:f})},d))})},V=({data:l,keyExtractor:p,rowHeight:a,groupHeaderHeight:y,headerHeight:S,columns:C,smallColumns:M=C,extraInfo:f,onEndReached:h,onEndReachedThresholdPx:b=200,headerStyle:E,rowStyle:F,getRowLink:c,activeRowId:i,renderEmptyList:d,onActiveRowChange:g,groupBy:H,loading:w,breakpoint:se=we.large,withoutScroll:O=!1,stickyOffset:oe=0,headerBackgroundColor:me=x.default})=>{const ce=n.useId(),Z=n.useRef(null),X=n.useMemo(()=>{if(H==null)return new Map([[null,l]]);const r=new Map;return l.forEach(o=>{const s=H(o);r.set(s,[...r.get(s)??[],o])}),r},[H,l]),Y=a*l.length+X.size*y,L=B(w)&&w.isLoading,J=l.length===0,[ge,q]=n.useState(void 0),ue=n.useCallback(()=>{q(void 0)},[]);n.useEffect(()=>{const r=Z.current;if(r!=null){const o=r,s=new IntersectionObserver(u=>{u.forEach(T=>{T.isIntersecting&&B(h)&&h()})});return s.observe(o),()=>s.unobserve(o)}},[h]);const fe=n.useCallback(({item:r,absoluteIndex:o,extraInfo:s})=>{const u=c==null?void 0:c({item:r,index:o,extraInfo:s});return ye(u)?e(m,{}):u},[c]),U=n.useRef(null);n.useEffect(()=>{const r=U.current;if(i!=null&&r!=null){const o=r;o.scrollIntoView({behavior:"smooth",block:"nearest"}),g==null||g(o)}},[i,g]);const be=n.useMemo(()=>O?e(m,{style:t.contentContainer}):e(Se,{scrollEventThrottle:32,contentContainerStyle:[t.contentContainer,{minHeight:Y+(L?w.count*a:0)}]}),[L,w==null?void 0:w.count,a,Y,O]);return e(Re,{style:O?J?te.fill:void 0:t.root,breakpoint:se,children:({large:r})=>{const o=r?C:M;return e(Q,{children:n.cloneElement(be,{children:P(Q,{children:[!J&&r?e(m,{style:[t.segment,t.segmentLarge,t.header,E,{backgroundColor:me}],children:o.map(({id:s,width:u,title:T,renderTitle:k})=>{const I=`${ce}_${s}`;return e(m,{style:[t.segmentHeaderCell,{width:typeof u=="number"?u:G,flexGrow:u==="grow"?G:de,height:S}],id:I,children:k({title:T,extraInfo:f,id:s})},I)})}):null,e(m,{children:Array.from(X.entries()).map(([s,u])=>P(n.Fragment,{children:[s!=null?e(m,{style:[t.stickyHeader,r&&t.stickyHeaderLarge,{height:y,top:oe+y}],children:e(Ie,{level:3,variant:"h3",children:s})}):null,u.map((T,k)=>{const I=p(T,k),W=i===I,he=B(c)&&ge===I,_=fe({item:T,absoluteIndex:k,extraInfo:f});return n.cloneElement(_,{style:{...t.rowLink,..._.props.style},key:k,ref:W?U:null,children:e(He,{id:I,rowHeight:a,columns:o,item:T,index:k,extraInfo:f,isActive:W,isHovered:he,large:r,style:F,onMouseEnter:q,onMouseLeave:ue})})})]},s))}),e(m,{children:e(m,{"aria-busy":L,style:t.loadingPlaceholder,children:L?e(Me,{count:w.count,rowHeight:a,rowVerticalSpacing:0,paddingHorizontal:0}):null})}),J&&B(d)&&!L?e(m,{style:t.emptyListContainer,children:d()}):null,e(m,{style:[t.scrollTracker,{height:b}],ref:Z})]})})})}})};try{V.displayName="PlainListView",V.__docgenInfo={description:"",displayName:"PlainListView",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},keyExtractor:{defaultValue:null,description:"",name:"keyExtractor",required:!0,type:{name:"(item: T, index: number) => string"}},highlightedRowId:{defaultValue:null,description:"",name:"highlightedRowId",required:!1,type:{name:"string"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"number"}},groupHeaderHeight:{defaultValue:null,description:"",name:"groupHeaderHeight",required:!0,type:{name:"number"}},extraInfo:{defaultValue:null,description:"",name:"extraInfo",required:!0,type:{name:"ExtraInfo"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},smallColumns:{defaultValue:null,description:"",name:"smallColumns",required:!1,type:{name:"ColumnConfig<T, ExtraInfo>[]"}},onEndReached:{defaultValue:null,description:"",name:"onEndReached",required:!1,type:{name:"(() => void)"}},onEndReachedThresholdPx:{defaultValue:{value:"200"},description:"",name:"onEndReachedThresholdPx",required:!1,type:{name:"number"}},headerStyle:{defaultValue:null,description:"",name:"headerStyle",required:!1,type:{name:"ViewStyle | null"}},rowStyle:{defaultValue:null,description:"",name:"rowStyle",required:!1,type:{name:"((item: T, large: boolean) => ViewStyle | null)"}},getRowLink:{defaultValue:null,description:"",name:"getRowLink",required:!1,type:{name:"((config: LinkConfig<T, ExtraInfo>) => ReactElement<{ children: (state: PressableStateCallbackType) => ReactNode; }, string | JSXElementConstructor<...>>)"}},renderEmptyList:{defaultValue:null,description:"",name:"renderEmptyList",required:!1,type:{name:"(() => ReactNode)"}},groupBy:{defaultValue:null,description:"",name:"groupBy",required:!1,type:{name:"((item: T) => string)"}},onActiveRowChange:{defaultValue:null,description:"",name:"onActiveRowChange",required:!1,type:{name:"((element: HTMLElement) => void)"}},activeRowId:{defaultValue:null,description:"",name:"activeRowId",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"{ isLoading: boolean; count: number; }"}},breakpoint:{defaultValue:{value:"950"},description:"",name:"breakpoint",required:!1,type:{name:"number"}},withoutScroll:{defaultValue:{value:"false"},description:"",name:"withoutScroll",required:!1,type:{name:"boolean"}},stickyOffset:{defaultValue:{value:"0"},description:"",name:"stickyOffset",required:!1,type:{name:"number"}},headerBackgroundColor:{defaultValue:{value:"backgroundColor.default"},description:"",name:"headerBackgroundColor",required:!1,type:{name:"string"}}}}}catch{}const aa={title:"Layout/PlainListView",component:V},Le=({id:l})=>l,ve=()=>{const l=["Matthias","John","Jane","Camille","Charlotte","Francis","Émilie","François","Laura","Marie","Natasha","Nicolas","Pierre","Thomas","Valérie","Yann","Zoé","Jérôme","Thomas"];return l[Math.floor(Math.random()*l.length)]??l[0]},j=l=>({id:Ee(),name:ve(),modulo:String(l%10)}),A=()=>{const[l,p]=n.useState({key:"name",order:"Desc"}),[a,y]=n.useState(0),[S,C]=n.useState(!1),[M,f]=n.useState(!1),[h,b]=n.useState(()=>Array.from({length:100},(i,d)=>j(d))),E=()=>{b(i=>[j(i.length),...i])},F=n.useCallback(()=>{y(i=>i+1),S&&f(!0)},[S]);n.useEffect(()=>{if(M){const i=setTimeout(()=>{f(!1),b(d=>[...d,...Array.from({length:100},(g,H)=>j(H+d.length))])},1e3);return()=>clearTimeout(i)}});const c=n.useMemo(()=>[{id:"name",width:"grow",title:"Name",renderTitle:({title:i,extraInfo:d,id:g})=>e(N,{text:i,sort:d.key===g?d.order:void 0,onPress:()=>p({key:g,order:d.order==="Desc"?"Asc":"Desc"})}),renderCell:({item:{name:i}})=>e(re,{text:i})}],[]);return P(Q,{children:[P(Ce,{direction:"row",alignItems:"center",children:[e(z,{icon:"add-circle-filled",color:"live",onPress:E,children:"Prepend"}),e(K,{width:16}),e(z,{icon:"delete-filled",color:"negative",onPress:()=>b([]),children:"Clear"}),e(K,{width:16}),P(xe,{label:"End reached",children:[a," times"]}),e(K,{width:16}),e(ke,{label:"With infinite scroll",value:S,onValueChange:C})]}),e(K,{height:16}),e(V,{groupBy:i=>i.modulo,extraInfo:l,keyExtractor:Le,data:h,columns:c,rowHeight:48,headerHeight:48,groupHeaderHeight:48,onEndReached:F,onEndReachedThresholdPx:300,loading:{isLoading:M,count:5}})]})},D=()=>e(V,{keyExtractor:({id:a})=>a,data:[{id:"175b2b6a-36ef-4e1b-88a9-621a5f0c2e80",firstName:"Gardiner",lastName:"Aslum",email:"gaslum0@twitter.com",gender:"Male",age:62,language:"Swahili",iban:"PK59 CRCM H5JR O6JG M55Q K4P4"},{id:"dc413590-7160-4ea8-ada0-ba441243d0db",firstName:"Cirillo",lastName:"Ackerman",email:"cackerman1@elegantthemes.com",gender:"Male",age:55,language:"Marathi",iban:"GI75 AOAI 5BZV QMBT UN9A YVM"},{id:"9316b303-9279-477f-a3be-ace7462a8cfe",firstName:"Karie",lastName:"Burdus",email:"kburdus2@twitpic.com",gender:"Female",age:11,language:"Afrikaans",iban:"SA20 84VK BWXJ PDSM UV1M OYIN"},{id:"5bcfd19d-df3c-4510-9f2f-1fc1ba46b737",firstName:"Aldon",lastName:"Johananoff",email:"ajohananoff3@geocities.jp",gender:"Male",age:1,language:"Yiddish",iban:"MD68 4ADX ICKA OXRJ FQWE K2HZ"},{id:"553d0990-0b0d-45fb-bfd1-a6244dae0a30",firstName:"Johann",lastName:"Giacoboni",email:"jgiacoboni4@cnn.com",gender:"Male",age:46,language:"Telugu",iban:"LT32 0997 2947 1756 9437"},{id:"812fb6ae-3d6f-4cf0-b287-9f44a652b374",firstName:"Eleanor",lastName:"Sieghart",email:"esieghart5@ucla.edu",gender:"Female",age:26,language:"Georgian",iban:"LT27 9047 2611 1452 8780"},{id:"5668b708-5bfe-4a34-bc31-6b0a57c8d18b",firstName:"Rickie",lastName:"Jansky",email:"rjansky6@ezinearticles.com",gender:"Male",age:73,language:"Swedish",iban:"CZ21 6893 5210 5891 9226 5922"},{id:"f64c201c-f3c3-44e5-ad87-260ef4f0f557",firstName:"Tony",lastName:"Nineham",email:"tnineham7@dion.ne.jp",gender:"Male",age:37,language:"Dhivehi",iban:"FR38 6440 8279 33ST RSDF 6F8M T28"},{id:"f2d85ef2-6dc4-458e-8763-f88f940f1ef6",firstName:"Land",lastName:"Chanter",email:"lchanter8@msn.com",gender:"Male",age:20,language:"Nepali",iban:"FI32 1667 7210 0638 43"},{id:"edd5f87b-0fd3-4a1d-98aa-838bd07a65e3",firstName:"Else",lastName:"Tupling",email:"etupling9@hubpages.com",gender:"Female",age:12,language:"Punjabi",iban:"DO02 14II 8601 9014 6446 5324 5633"},{id:"308d3a75-d317-4a13-8fb2-ddfd79a842cc",firstName:"Idell",lastName:"Penley",email:"ipenleya@behance.net",gender:"Female",age:51,language:"Telugu",iban:"VG47 NBTH 9789 2609 3658 9814"},{id:"6f524896-9df4-4750-baca-b4e3865509ef",firstName:"Thornie",lastName:"De Bellis",email:"tdebellisb@exblog.jp",gender:"Male",age:75,language:"Portuguese",iban:"FR12 6263 3211 29VU Y5FH W9VF Y03"},{id:"12e1cda3-976f-4e94-988c-f21f1b9601a8",firstName:"Everard",lastName:"Chainey",email:"echaineyc@bloomberg.com",gender:"Male",age:98,language:"Latvian",iban:"FR40 2091 7795 48O8 BA94 EI1B 208"},{id:"777eb6d6-309c-4111-869d-99e8428bb0a2",firstName:"Gradeigh",lastName:"Cristou",email:"gcristoud@un.org",gender:"Male",age:71,language:"Dhivehi",iban:"IS70 2614 2202 5571 2550 4949 88"},{id:"ee3e26be-dada-4a2c-80d3-5c3d6872006b",firstName:"Cesar",lastName:"Mixworthy",email:"cmixworthye@discuz.net",gender:"Male",age:17,language:"Bosnian",iban:"HR46 3404 9971 4281 8436 9"},{id:"02218e29-fe31-498c-93df-ecfed3a09c0e",firstName:"Rabi",lastName:"Haken",email:"rhakenf@mayoclinic.com",gender:"Male",age:16,language:"Somali",iban:"HR23 7589 1477 6114 8045 6"},{id:"01c3bc82-f2aa-4a77-9bed-e2551db15a36",firstName:"Tami",lastName:"Raittie",email:"traittieg@dailymail.co.uk",gender:"Female",age:61,language:"Guaraní",iban:"LI65 2052 2XAV 9X48 5OEP I"},{id:"52422c9d-9f2c-451f-8154-5403f2bc4d47",firstName:"Frasier",lastName:"Ricson",email:"fricsonh@dropbox.com",gender:"Male",age:16,language:"Swahili",iban:"FR48 3461 8133 97SJ LIQ7 MY9A I63"},{id:"deb3d0ca-61cc-4a7e-9211-0a2a4df3f8cd",firstName:"Mareah",lastName:"Bernini",email:"mberninii@altervista.org",gender:"Female",age:27,language:"Swati",iban:"IS51 4493 4445 4310 0784 4980 44"},{id:"acb714f4-f173-4eb7-b644-c16697f72cde",firstName:"Stanfield",lastName:"Ownsworth",email:"sownsworthj@csmonitor.com",gender:"Male",age:94,language:"Dari",iban:"ES60 2752 6335 4537 0578 3332"},{id:"2019dd71-21fd-40e5-91c2-cddb6dda2eea",firstName:"Emerson",lastName:"Haggata",email:"ehaggatak@mayoclinic.com",gender:"Male",age:35,language:"Hebrew",iban:"CY31 9765 4754 IQH3 LICK AIKU 4PLQ"},{id:"29cfbf9c-7c55-433a-83ec-dffc67c2dbdd",firstName:"Odie",lastName:"Tommei",email:"otommeil@naver.com",gender:"Male",age:15,language:"Malagasy",iban:"BG81 RBEC 5389 42TC NEXL HG"},{id:"706965f6-3722-4947-8707-c1397980b8bb",firstName:"Laurianne",lastName:"Joanic",email:"ljoanicm@census.gov",gender:"Female",age:81,language:"Albanian",iban:"ES14 1609 6277 9104 2449 0881"},{id:"333e3121-1b7c-4dae-9303-21d63f1e5554",firstName:"Tiphany",lastName:"Howson",email:"thowsonn@usa.gov",gender:"Female",age:77,language:"Tswana",iban:"SI52 4130 0420 3721 773"},{id:"81cb18de-6c5f-4f41-add8-335f8a7ce655",firstName:"Elliott",lastName:"Vivers",email:"eviverso@wikimedia.org",gender:"Male",age:17,language:"Hebrew",iban:"ME18 8754 3427 9112 7382 38"},{id:"7c118fe5-3929-4077-be27-03f2d4a31481",firstName:"Randi",lastName:"Thackeray",email:"rthackerayp@nbcnews.com",gender:"Female",age:95,language:"Estonian",iban:"CZ48 1381 4600 0501 0321 2985"},{id:"f6189f94-b630-4d92-8ddc-43ca79d5ccf3",firstName:"Teddy",lastName:"Cordaroy",email:"tcordaroyq@pagesperso-orange.fr",gender:"Female",age:53,language:"German",iban:"KW39 XNHP RSYI K2PZ VD49 ERDZ DQRR 2L"},{id:"91aad887-0f88-47ac-a383-78224efe7015",firstName:"Sianna",lastName:"Wiskar",email:"swiskarr@ca.gov",gender:"Female",age:57,language:"Swati",iban:"IT75 S421 6382 981E RLEM EYMS FYU"},{id:"0a893880-c5d0-4871-ab5e-db3e26c633b6",firstName:"Abelard",lastName:"Curmi",email:"acurmis@storify.com",gender:"Male",age:76,language:"Hebrew",iban:"GB43 UFMM 5267 2492 0553 52"},{id:"6bd1e82d-e33d-40a7-8872-49a86d7cdb1a",firstName:"Channa",lastName:"Starmer",email:"cstarmert@wikimedia.org",gender:"Female",age:57,language:"Yiddish",iban:"MK07 261H IZNA OG1J H90"},{id:"e94c71ea-9026-4853-862a-37472e1208c1",firstName:"Sanson",lastName:"Palleske",email:"spalleskeu@ameblo.jp",gender:"Male",age:7,language:"Polish",iban:"IT70 Y658 7555 842T IGLV DNQS DIX"},{id:"7162059c-8455-4c3d-976e-6e74bd319a1f",firstName:"Roma",lastName:"Aldren",email:"raldrenv@eepurl.com",gender:"Male",age:23,language:"Quechua",iban:"NO08 9195 1286 666"},{id:"68020793-04d8-462a-8d82-e22b4e8298ba",firstName:"Garvy",lastName:"Twitchett",email:"gtwitchettw@microsoft.com",gender:"Male",age:13,language:"Tetum",iban:"KZ81 391U TQ36 DKXZ WSFO"},{id:"0fec1900-0394-4529-ae16-6f098f5fed3f",firstName:"Sheffy",lastName:"Heyns",email:"sheynsx@tamu.edu",gender:"Male",age:60,language:"Bengali",iban:"CZ22 1207 2864 2266 7776 9806"},{id:"2595827a-0347-4eae-8d0d-920138db66b2",firstName:"Minnaminnie",lastName:"Howick",email:"mhowicky@blogger.com",gender:"Female",age:52,language:"Belarusian",iban:"MR30 1295 5903 4088 9897 4509 851"},{id:"d6d109a3-27f0-4ac5-bdd8-5aefd818a3f5",firstName:"Evania",lastName:"MacKowle",email:"emackowlez@examiner.com",gender:"Female",age:83,language:"Mongolian",iban:"FR46 6328 5587 86KB IEDX 83PH T09"},{id:"daaa8ca4-68ca-44e2-8db1-658dd6512e58",firstName:"Sigvard",lastName:"Coite",email:"scoite10@aol.com",gender:"Male",age:91,language:"Mongolian",iban:"BR13 0345 3620 8756 0448 7226 150O X"},{id:"4aee61a5-495f-4b37-ad56-535670e9a1c7",firstName:"Elle",lastName:"Espinal",email:"eespinal11@ameblo.jp",gender:"Female",age:95,language:"Telugu",iban:"FR63 6349 9707 26H3 2HJ9 UKRR C83"},{id:"c916198a-dac3-4c07-8345-7ca3bf5a41af",firstName:"Rennie",lastName:"Reuven",email:"rreuven12@icio.us",gender:"Female",age:97,language:"Oriya",iban:"AT03 8563 8509 2879 2356"},{id:"33738690-a693-413e-8a2b-5b61de0f271c",firstName:"Lanie",lastName:"Mandifield",email:"lmandifield13@youtu.be",gender:"Female",age:75,language:"Khmer",iban:"FO86 0926 5037 5098 31"},{id:"29e5c7de-7342-487e-82e6-b19edab8cd7e",firstName:"Gordan",lastName:"Kernley",email:"gkernley14@tinypic.com",gender:"Male",age:67,language:"Hebrew",iban:"LU86 969B 3JI6 3IVF KQ2G"},{id:"00243774-aa91-49a1-b600-8c6b7d2a07e5",firstName:"Eddi",lastName:"Bramhill",email:"ebramhill15@prnewswire.com",gender:"Female",age:56,language:"Spanish",iban:"SA40 15AZ 1QZA UL6T CWPM 4KMJ"},{id:"e72769d2-5362-4794-818e-3e8b8ffcff35",firstName:"Ferris",lastName:"Scherme",email:"fscherme16@google.it",gender:"Male",age:38,language:"New Zealand Sign Language",iban:"GR52 1991 550F UIEC GLTM 5TKR NVT"},{id:"bfb15290-51cb-4399-b49c-1ecd26a3d807",firstName:"Sibbie",lastName:"Perigoe",email:"sperigoe17@alexa.com",gender:"Female",age:2,language:"Tetum",iban:"EE49 2365 6849 4864 3325"},{id:"aed1a45a-85d2-48d1-ac3d-b4693e4ebf27",firstName:"Joy",lastName:"Goldes",email:"jgoldes18@shop-pro.jp",gender:"Female",age:97,language:"Tajik",iban:"FR22 2122 4677 00KQ RZ4P 3DVQ H15"},{id:"f46ba64d-bf63-4bb0-868a-f1461069e4a2",firstName:"Tracie",lastName:"Kincaid",email:"tkincaid19@pagesperso-orange.fr",gender:"Female",age:80,language:"Dhivehi",iban:"HU15 0070 5329 2620 0803 6672 5660"},{id:"9cd90ae9-b5dd-4261-94ae-28e2767c637c",firstName:"Nikolia",lastName:"Bruniges",email:"nbruniges1a@businessinsider.com",gender:"Female",age:40,language:"Portuguese",iban:"AD27 6822 3765 QSPS XCN3 9ZGN"},{id:"eae21532-59c2-441b-9554-bd75ff7e8938",firstName:"Giles",lastName:"Scollick",email:"gscollick1b@ihg.com",gender:"Male",age:71,language:"Georgian",iban:"PS22 EUXP PYKC PSXP CC0S O6XK E5T8 B"},{id:"62f46930-2abc-4240-b32a-cec75c1fa9bd",firstName:"Sid",lastName:"Popple",email:"spopple1c@shutterfly.com",gender:"Male",age:73,language:"Malayalam",iban:"FR58 9594 1152 21KO KM8Q G587 B66"},{id:"e114aa1c-3d13-44aa-9351-e6fa908cbc0c",firstName:"Merlina",lastName:"Abbati",email:"mabbati1d@sciencedirect.com",gender:"Female",age:33,language:"Bengali",iban:"IT58 K059 0159 0301 GDRY CY1K JNN"}],columns:[{id:"id",width:"grow",title:"ID",renderTitle:({title:a})=>e(N,{text:a}),renderCell:({item:a})=>e(re,{text:a.id})},{id:"fullName",width:200,title:"Full name",renderTitle:({title:a})=>e(N,{text:a}),renderCell:({item:a})=>e(R,{text:`${a.firstName} ${a.lastName}`})},{id:"email",width:220,title:"Email",renderTitle:({title:a})=>e(N,{text:a}),renderCell:({item:a})=>e(R,{text:a.email})},{id:"gender",width:100,title:"Gender",renderTitle:({title:a})=>e(N,{text:a}),renderCell:({item:a})=>e(R,{text:a.gender})},{id:"age",width:80,title:"Age",renderTitle:({title:a})=>e(N,{text:a}),renderCell:({item:a})=>e(R,{text:a.age.toString()})},{id:"language",width:150,title:"Language",renderTitle:({title:a})=>e(N,{text:a}),renderCell:({item:a})=>e(R,{text:a.language})},{id:"iban",width:180,title:"IBAN",renderTitle:({title:a})=>e(N,{text:a}),renderCell:({item:a})=>e(R,{text:a.iban})}],extraInfo:void 0,rowHeight:48,headerHeight:48,groupHeaderHeight:48,onEndReachedThresholdPx:300});var $,ee,ae;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(ae=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,ie,le;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(le=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const na=["Primary","MultiColumn"];export{D as MultiColumn,A as Primary,na as __namedExportsOrder,aa as default};
//# sourceMappingURL=PlainListView.stories-8bf902b3.js.map
