import{a as e,B as c,I as l}from"./Space-UyEqh3Cv.js";import{r as u}from"./index-4g5l5LRQ.js";import{P as d}from"./Pressable-jfwmHhQX.js";import{C as y}from"./index-sXb0hmHj.js";const m=21,r=({valueToCopy:t,size:p=m,copyText:n,copiedText:i})=>{const[s,o]=u.useState("copy");return e(c,{describedBy:"copy",placement:"top",onHide:()=>o("copy"),togglableOnFocus:!0,content:s==="copy"?n:i,children:e(d,{onPress:a=>{a.stopPropagation(),a.preventDefault(),y.setString(t),o("copied")},children:e(l,{size:p,name:"copy-regular"})})})};try{r.displayName="LakeCopyButton",r.__docgenInfo={description:"",displayName:"LakeCopyButton",props:{valueToCopy:{defaultValue:null,description:"",name:"valueToCopy",required:!0,type:{name:"string"}},copyText:{defaultValue:null,description:"",name:"copyText",required:!0,type:{name:"string"}},copiedText:{defaultValue:null,description:"",name:"copiedText",required:!0,type:{name:"string"}},size:{defaultValue:{value:"21"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}export{r as L,m as c};
//# sourceMappingURL=LakeCopyButton-ePsQng5i.js.map