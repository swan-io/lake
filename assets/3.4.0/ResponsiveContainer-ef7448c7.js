import{S as p,j as d,V as f}from"./Space-d12e3bfc.js";import{r as t}from"./index-f1286426.js";const y=p.create({hidden:{opacity:0}}),i=({children:n,style:c,breakpoint:e=1e3})=>{const[a,r]=t.useState(null),l=t.useRef(null),u=t.useCallback(({nativeEvent:{layout:{width:s}}})=>{r(()=>s<e)},[e]);t.useLayoutEffect(()=>{if(l.current!=null){const s=l.current;r(()=>s.offsetWidth<e)}},[e]);const o=a??!1;return d(f,{ref:l,onLayout:u,style:[c,a==null?y.hidden:null],children:n({small:o,large:!o})})};try{i.displayName="ResponsiveContainer",i.__docgenInfo={description:"",displayName:"ResponsiveContainer",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},breakpoint:{defaultValue:{value:"1000"},description:"",name:"breakpoint",required:!1,type:{name:"number"}}}}}catch{}export{i as R};
//# sourceMappingURL=ResponsiveContainer-ef7448c7.js.map