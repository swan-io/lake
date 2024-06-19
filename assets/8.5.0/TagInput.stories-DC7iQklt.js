import{s as b,r as Y,d as q,c as w,b as S,g as P,C as $,$ as J,z as V,m as X,h as M,j as a,V as H,B as e0,i as t0,L as G}from"./Space-C8PaoKq6.js";import{c as r0}from"./_commonjsHelpers-BosuxZz1.js";import"./i18n-BReFi54a.js";import{r as c}from"./index-uCp2LrAq.js";import{u as n0,P as o0,T as a0}from"./Pressable-Cnn322Ch.js";import{T as i0}from"./Tag-CEiHSpPu.js";import{L as s0}from"./LakeTextInput-ruZO2VyO.js";import{S as l0,a as I}from"./_StoriesComponents-Cu7d59Qu.js";import"./extends-CF3RwP-h.js";import"./index-BOkhicXD.js";import"./rifm-D1c24fWH.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./tslib.es6-UMXCHJY6.js";import"./index-Bs20sl9n.js";import"./commonStyles-t4XfA7cz.js";import"./Fill-k_ReIz2M.js";import"./LakeSelect-ChwZm51I.js";import"./useDisclosure-X_l1NENI.js";import"./a11y-DXvpDVrG.js";import"./Popover-TioPbMSZ.js";import"./useResponsive-CJhtzVQ4.js";import"./function-BaGKQV0a.js";import"./BottomPanel-HwTLdWd3.js";import"./useBodyClassName-CiTylq2A.js";import"./FocusTrap-BMN6lUBt.js";import"./Suspendable-D3bTCPhd.js";import"./index-B6v66OSr.js";import"./TransitionView-DaIvFxGo.js";var F0={};(function(m){(function(l,d){typeof m.nodeName!="string"?d(m):d(l.IBAN={})})(r0,function(l){Array.prototype.map||(Array.prototype.map=function(r){if(this===void 0||this===null)throw new TypeError;var n=Object(this),o=n.length>>>0;if(typeof r!="function")throw new TypeError;for(var F=new Array(o),x=arguments.length>=2?arguments[1]:void 0,f=0;f<o;f++)f in n&&(F[f]=r.call(x,n[f],f,n));return F});var d=65,C=90;function A(r){return r=r.toUpperCase(),r=r.substr(4)+r.substr(0,4),r.split("").map(function(n){var o=n.charCodeAt(0);return o>=d&&o<=C?o-d+10:n}).join("")}function h(r){for(var n=r,o;n.length>2;)o=n.slice(0,9),n=parseInt(o,10)%97+n.slice(o.length);return parseInt(n,10)%97}function B(r){var n=r.match(/(.{3})/g).map(function(o){var F,x=o.slice(0,1),f=parseInt(o.slice(1),10);switch(x){case"A":F="0-9A-Za-z";break;case"B":F="0-9A-Z";break;case"C":F="A-Za-z";break;case"F":F="0-9";break;case"L":F="a-z";break;case"U":F="A-Z";break;case"W":F="0-9a-z";break}return"(["+F+"]{"+f+"})"});return new RegExp("^"+n.join("")+"$")}function u(r){return r.replace(v,"").toUpperCase()}function e(r,n,o,F){this.countryCode=r,this.length=n,this.structure=o,this.example=F}e.prototype._regex=function(){return this._cachedRegex||(this._cachedRegex=B(this.structure))},e.prototype.isValid=function(r){return this.length==r.length&&this.countryCode===r.slice(0,2)&&this._regex().test(r.slice(4))&&h(A(r))==1},e.prototype.toBBAN=function(r,n){return this._regex().exec(r.slice(4)).slice(1).join(n)},e.prototype.fromBBAN=function(r){if(!this.isValidBBAN(r))throw new Error("Invalid BBAN");var n=h(A(this.countryCode+"00"+r)),o=("0"+(98-n)).slice(-2);return this.countryCode+o+r},e.prototype.isValidBBAN=function(r){return this.length-4==r.length&&this._regex().test(r)};var y={};function t(r){y[r.countryCode]=r}t(new e("AD",24,"F04F04A12","AD1200012030200359100100")),t(new e("AE",23,"F03F16","AE070331234567890123456")),t(new e("AL",28,"F08A16","AL47212110090000000235698741")),t(new e("AT",20,"F05F11","AT611904300234573201")),t(new e("AZ",28,"U04A20","AZ21NABZ00000000137010001944")),t(new e("BA",20,"F03F03F08F02","BA391290079401028494")),t(new e("BE",16,"F03F07F02","BE68539007547034")),t(new e("BG",22,"U04F04F02A08","BG80BNBG96611020345678")),t(new e("BH",22,"U04A14","BH67BMAG00001299123456")),t(new e("BR",29,"F08F05F10U01A01","BR9700360305000010009795493P1")),t(new e("BY",28,"A04F04A16","BY13NBRB3600900000002Z00AB00")),t(new e("CH",21,"F05A12","CH9300762011623852957")),t(new e("CR",22,"F04F14","CR72012300000171549015")),t(new e("CY",28,"F03F05A16","CY17002001280000001200527600")),t(new e("CZ",24,"F04F06F10","CZ6508000000192000145399")),t(new e("DE",22,"F08F10","DE89370400440532013000")),t(new e("DK",18,"F04F09F01","DK5000400440116243")),t(new e("DO",28,"U04F20","DO28BAGR00000001212453611324")),t(new e("EE",20,"F02F02F11F01","EE382200221020145685")),t(new e("EG",29,"F04F04F17","EG800002000156789012345180002")),t(new e("ES",24,"F04F04F01F01F10","ES9121000418450200051332")),t(new e("FI",18,"F06F07F01","FI2112345600000785")),t(new e("FO",18,"F04F09F01","FO6264600001631634")),t(new e("FR",27,"F05F05A11F02","FR1420041010050500013M02606")),t(new e("GB",22,"U04F06F08","GB29NWBK60161331926819")),t(new e("GE",22,"U02F16","GE29NB0000000101904917")),t(new e("GI",23,"U04A15","GI75NWBK000000007099453")),t(new e("GL",18,"F04F09F01","GL8964710001000206")),t(new e("GR",27,"F03F04A16","GR1601101250000000012300695")),t(new e("GT",28,"A04A20","GT82TRAJ01020000001210029690")),t(new e("HR",21,"F07F10","HR1210010051863000160")),t(new e("HU",28,"F03F04F01F15F01","HU42117730161111101800000000")),t(new e("IE",22,"U04F06F08","IE29AIBK93115212345678")),t(new e("IL",23,"F03F03F13","IL620108000000099999999")),t(new e("IS",26,"F04F02F06F10","IS140159260076545510730339")),t(new e("IT",27,"U01F05F05A12","IT60X0542811101000000123456")),t(new e("IQ",23,"U04F03A12","IQ98NBIQ850123456789012")),t(new e("JO",30,"A04F22","JO15AAAA1234567890123456789012")),t(new e("KW",30,"U04A22","KW81CBKU0000000000001234560101")),t(new e("KZ",20,"F03A13","KZ86125KZT5004100100")),t(new e("LB",28,"F04A20","LB62099900000001001901229114")),t(new e("LC",32,"U04F24","LC07HEMM000100010012001200013015")),t(new e("LI",21,"F05A12","LI21088100002324013AA")),t(new e("LT",20,"F05F11","LT121000011101001000")),t(new e("LU",20,"F03A13","LU280019400644750000")),t(new e("LV",21,"U04A13","LV80BANK0000435195001")),t(new e("MC",27,"F05F05A11F02","MC5811222000010123456789030")),t(new e("MD",24,"U02A18","MD24AG000225100013104168")),t(new e("ME",22,"F03F13F02","ME25505000012345678951")),t(new e("MK",19,"F03A10F02","MK07250120000058984")),t(new e("MR",27,"F05F05F11F02","MR1300020001010000123456753")),t(new e("MT",31,"U04F05A18","MT84MALT011000012345MTLCAST001S")),t(new e("MU",30,"U04F02F02F12F03U03","MU17BOMM0101101030300200000MUR")),t(new e("NL",18,"U04F10","NL91ABNA0417164300")),t(new e("NO",15,"F04F06F01","NO9386011117947")),t(new e("PK",24,"U04A16","PK36SCBL0000001123456702")),t(new e("PL",28,"F08F16","PL61109010140000071219812874")),t(new e("PS",29,"U04A21","PS92PALS000000000400123456702")),t(new e("PT",25,"F04F04F11F02","PT50000201231234567890154")),t(new e("QA",29,"U04A21","QA30AAAA123456789012345678901")),t(new e("RO",24,"U04A16","RO49AAAA1B31007593840000")),t(new e("RS",22,"F03F13F02","RS35260005601001611379")),t(new e("SA",24,"F02A18","SA0380000000608010167519")),t(new e("SC",31,"U04F04F16U03","SC18SSCB11010000000000001497USD")),t(new e("SE",24,"F03F16F01","SE4550000000058398257466")),t(new e("SI",19,"F05F08F02","SI56263300012039086")),t(new e("SK",24,"F04F06F10","SK3112000000198742637541")),t(new e("SM",27,"U01F05F05A12","SM86U0322509800000000270100")),t(new e("ST",25,"F08F11F02","ST68000100010051845310112")),t(new e("SV",28,"U04F20","SV62CENR00000000000000700025")),t(new e("TL",23,"F03F14F02","TL380080012345678910157")),t(new e("TN",24,"F02F03F13F02","TN5910006035183598478831")),t(new e("TR",26,"F05F01A16","TR330006100519786457841326")),t(new e("UA",29,"F25","UA511234567890123456789012345")),t(new e("VA",22,"F18","VA59001123000012345678")),t(new e("VG",24,"U04F16","VG96VPVG0000012345678901")),t(new e("XK",20,"F04F10F02","XK051212012345678906")),t(new e("AO",25,"F21","AO69123456789012345678901")),t(new e("BF",27,"F23","BF2312345678901234567890123")),t(new e("BI",16,"F12","BI41123456789012")),t(new e("BJ",28,"F24","BJ39123456789012345678901234")),t(new e("CI",28,"U02F22","CI70CI1234567890123456789012")),t(new e("CM",27,"F23","CM9012345678901234567890123")),t(new e("CV",25,"F21","CV30123456789012345678901")),t(new e("DZ",24,"F20","DZ8612345678901234567890")),t(new e("IR",26,"F22","IR861234568790123456789012")),t(new e("MG",27,"F23","MG1812345678901234567890123")),t(new e("ML",28,"U01F23","ML15A12345678901234567890123")),t(new e("MZ",25,"F21","MZ25123456789012345678901")),t(new e("SN",28,"U01F23","SN52A12345678901234567890123")),t(new e("GF",27,"F05F05A11F02","GF121234512345123456789AB13")),t(new e("GP",27,"F05F05A11F02","GP791234512345123456789AB13")),t(new e("MQ",27,"F05F05A11F02","MQ221234512345123456789AB13")),t(new e("RE",27,"F05F05A11F02","RE131234512345123456789AB13")),t(new e("PF",27,"F05F05A11F02","PF281234512345123456789AB13")),t(new e("TF",27,"F05F05A11F02","TF891234512345123456789AB13")),t(new e("YT",27,"F05F05A11F02","YT021234512345123456789AB13")),t(new e("NC",27,"F05F05A11F02","NC551234512345123456789AB13")),t(new e("BL",27,"F05F05A11F02","BL391234512345123456789AB13")),t(new e("MF",27,"F05F05A11F02","MF551234512345123456789AB13")),t(new e("PM",27,"F05F05A11F02","PM071234512345123456789AB13")),t(new e("WF",27,"F05F05A11F02","WF621234512345123456789AB13"));var v=/[^a-zA-Z0-9]/g,R=/(.{4})(?!$)/g;function N(r){return typeof r=="string"||r instanceof String}l.isValid=function(r){if(!N(r))return!1;r=u(r);var n=y[r.slice(0,2)];return!!n&&n.isValid(r)},l.toBBAN=function(r,n){typeof n>"u"&&(n=" "),r=u(r);var o=y[r.slice(0,2)];if(!o)throw new Error("No country with code "+r.slice(0,2));return o.toBBAN(r,n)},l.fromBBAN=function(r,n){var o=y[r];if(!o)throw new Error("No country with code "+r);return o.fromBBAN(u(n))},l.isValidBBAN=function(r,n){if(!N(n))return!1;var o=y[r];return o&&o.isValidBBAN(u(n))},l.printFormat=function(r,n){return typeof n>"u"&&(n=" "),u(r).replace(R,"$1"+n)},l.electronicFormat=u,l.countries=y})})(F0);const u0=/^[A-Z0-9_+.-]*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,c0=m=>u0.test(m),d0="transparent",p=b.create({container:{flexGrow:1,flexShrink:1,flexDirection:"row",alignItems:"stretch"},root:{flexDirection:"row",display:"flex",alignItems:"center",flexWrap:"wrap",borderRadius:Y[6],backgroundColor:q.accented,borderColor:w.gray[100],borderWidth:1,paddingHorizontal:S[4],paddingTop:S[4],outlineStyle:"none",cursor:"text"},focused:{borderColor:w.gray[500],boxShadow:P.tile},hovered:{boxShadow:P.tile},disabled:{backgroundColor:w.gray[50],borderColor:w.gray[50],color:w.gray[900],cursor:"not-allowed"},readOnly:{backgroundColor:w.gray[50],borderColor:w.gray[50],color:w.gray[900]},readOnlyError:{borderColor:d0,paddingRight:S[32]},error:{borderColor:w.negative[400]},valid:{borderColor:w.positive[500]},input:{height:28,marginBottom:S[4],marginLeft:S[4],outlineStyle:"none",flexGrow:1},tag:{marginRight:S[4],marginBottom:S[4],maxWidth:350},errorContainer:{paddingTop:S[4]}}),A0=/,| /,K=c.forwardRef(({validator:m=()=>!0,onFocus:l,onBlur:d,validateOnBlur:C=!0,values:A,onValuesChanged:h,readOnly:B=!1,disabled:u=!1,valid:e=!1,hideErrors:y=!1,placeholder:t,help:v,error:R},N)=>{const r=c.useRef(null),n=c.useRef(null),[o,F]=c.useState(!1),[x,f]=c.useState(!1),_=n0(r,N);$(n,{onHoverStart:()=>f(!0),onHoverEnd:()=>f(!1)});const g=c.useCallback(i=>{var s;h([...A,...i.filter(E=>!A.includes(E))]),(s=r.current)==null||s.clear()},[A,h]),D=c.useCallback(i=>{const s=[...new Set(i.split(A0).filter(E=>E.length))];(s.length>1||s[0]!==i)&&g(s)},[g]),W=c.useCallback(({nativeEvent:i})=>{u||B||J({key:i.key,input:r.current}).with({key:"Backspace",input:V.instanceOf(HTMLInputElement)},({input:s})=>{X(s.value)&&h(A.filter(E=>E!==A[A.length-1]))}).with({key:"Enter",input:V.instanceOf(HTMLInputElement)},({input:s})=>{M(s.value)&&g([s.value])})},[h,g,A,u,B]),O=c.useCallback(()=>{var i;(i=r.current)==null||i.focus()},[]),z=c.useCallback(i=>{F(!0),l==null||l(i)},[l]),Q=c.useCallback(i=>{const s=r.current;s instanceof HTMLInputElement&&M(s.value)&&C&&g([s.value]),F(!1),d==null||d(i)},[g,d,C]);c.useImperativeHandle(N,()=>({pushPendingValue:()=>{const i=r.current;i instanceof HTMLInputElement&&M(i.value)&&C&&g([i.value])}}),[g,C]);const L=M(R);return a.jsxs(H,{children:[a.jsxs(o0,{style:[p.root,B&&L&&p.readOnlyError,u&&p.disabled,B&&p.readOnly,o&&p.focused,L&&p.error,e&&p.valid,x&&p.hovered],"aria-errormessage":R,onPress:O,ref:n,children:[A.map((i,s)=>a.jsx(i0,{onPressRemove:!B&&!u?()=>h(A.filter(E=>E!==i)):void 0,style:p.tag,color:m(i)?"gray":"negative",children:i},s)),a.jsx(a0,{ref:_,style:[p.input,u&&p.disabled],onFocus:z,onBlur:Q,"aria-disabled":u,onChangeText:D,onKeyPress:W,readOnly:B,placeholder:t})]}),!y&&a.jsx(e0,{direction:"row",style:p.errorContainer,children:t0(R)?a.jsx(G,{variant:"smallRegular",color:w.negative[500],children:R}):a.jsx(G,{variant:"smallRegular",color:w.gray[500],children:v??" "})})]})});K.__docgenInfo={description:"",methods:[{name:"pushPendingValue",docblock:null,modifiers:[],params:[],returns:null}],displayName:"LakeTagInput",props:{validator:{defaultValue:{value:"() => true",computed:!1},required:!1},validateOnBlur:{defaultValue:{value:"true",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},valid:{defaultValue:{value:"false",computed:!1},required:!1},hideErrors:{defaultValue:{value:"false",computed:!1},required:!1}}};const p0=b.create({input:{maxWidth:400}}),D0={title:"Forms/TagInput",component:s0},T=m=>{const[l,d]=c.useState(["toto","dfghj@iouy.fr"]);return a.jsx(H,{style:p0.input,children:a.jsx(K,{validator:c0,onValuesChanged:d,values:l,...m})})},U=()=>a.jsxs(l0,{title:"Input variations",children:[a.jsx(I,{title:"Default",children:a.jsx(T,{})}),a.jsx(I,{title:"Disabled",children:a.jsx(T,{disabled:!0})}),a.jsx(I,{title:"Error",children:a.jsx(T,{error:"Nop"})}),a.jsx(I,{title:"Hidden errors",children:a.jsx(T,{error:"Nop",hideErrors:!0})}),a.jsx(I,{title:"Valid",children:a.jsx(T,{valid:!0})}),a.jsx(I,{title:"With help",children:a.jsx(T,{help:"Fill me"})}),a.jsx(I,{title:"Read only",children:a.jsx(T,{readOnly:!0})})]});U.__docgenInfo={description:"",methods:[],displayName:"Variations"};var j,k,Z;U.parameters={...U.parameters,docs:{...(j=U.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <StoryBlock title="Input variations">
      <StoryPart title="Default">
        <EditableTagInput />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableTagInput disabled={true} />
      </StoryPart>

      <StoryPart title="Error">
        <EditableTagInput error="Nop" />
      </StoryPart>

      <StoryPart title="Hidden errors">
        <EditableTagInput error="Nop" hideErrors={true} />
      </StoryPart>

      <StoryPart title="Valid">
        <EditableTagInput valid={true} />
      </StoryPart>

      <StoryPart title="With help">
        <EditableTagInput help="Fill me" />
      </StoryPart>

      <StoryPart title="Read only">
        <EditableTagInput readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(Z=(k=U.parameters)==null?void 0:k.docs)==null?void 0:Z.source}}};const W0=["Variations"];export{U as Variations,W0 as __namedExportsOrder,D0 as default};
//# sourceMappingURL=TagInput.stories-DC7iQklt.js.map