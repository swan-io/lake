import{S as p,a,V as i,i as P,c as d}from"./Space-aa12f50f.js";import{r as l}from"./index-8db94870.js";const m=p.create({container:{flexGrow:1,flexDirection:"column",alignItems:"stretch",flexBasis:"0%"}}),g=l.createContext(void 0),v=(t,o)=>{l.useLayoutEffect(()=>{if(P(t.current)&&o!=null){const c=t.current,e=d[o],r=c.style,y={"--color-current-900":r.getPropertyValue("--color-current-900"),"--color-current-800":r.getPropertyValue("--color-current-800"),"--color-current-700":r.getPropertyValue("--color-current-700"),"--color-current-600":r.getPropertyValue("--color-current-600"),"--color-current-500":r.getPropertyValue("--color-current-500"),"--color-current-400":r.getPropertyValue("--color-current-400"),"--color-current-300":r.getPropertyValue("--color-current-300"),"--color-current-200":r.getPropertyValue("--color-current-200"),"--color-current-100":r.getPropertyValue("--color-current-100"),"--color-current-primary":r.getPropertyValue("--color-current-primary"),"--color-current-secondary":r.getPropertyValue("--color-current-secondary"),"--color-current-contrast":r.getPropertyValue("--color-current-contrast")};return r.setProperty("--color-current-900",e[900],""),r.setProperty("--color-current-800",e[800],""),r.setProperty("--color-current-700",e[700],""),r.setProperty("--color-current-600",e[600],""),r.setProperty("--color-current-500",e[500],""),r.setProperty("--color-current-400",e[400],""),r.setProperty("--color-current-300",e[300],""),r.setProperty("--color-current-200",e[200],""),r.setProperty("--color-current-100",e[100],""),r.setProperty("--color-current-50",e[50],""),r.setProperty("--color-current-primary",e.primary,""),r.setProperty("--color-current-secondary",e.secondary,""),r.setProperty("--color-current-contrast",e.contrast,""),()=>{Object.entries(y).forEach(([n,u])=>{u==null?r.removeProperty(n):r.setProperty(n,u,"")})}}},[t,o])},s=({variant:t,style:o,children:c})=>{const e=l.useRef(null);return v(e,t),a(g.Provider,{value:t,children:a(i,{style:o??m.container,ref:e,children:c})})};try{s.displayName="WithCurrentColor",s.__docgenInfo={description:"",displayName:"WithCurrentColor",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}export{g as C,s as W,v as u};
//# sourceMappingURL=WithCurrentColor-14d3a0e7.js.map
