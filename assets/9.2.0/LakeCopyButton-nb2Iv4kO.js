import{j as e}from"./jsx-runtime-BlAj40OV.js";import{r as c}from"./index-Cs7sjTYM.js";import{s as d}from"./clipboard-BXAk6GqW.js";import{n as u,I as l}from"./ScrollView-C9Sl8l-9.js";import{P as m}from"./Pressable-B-ndY5ns.js";const y=21,f=({color:r,copiedText:s,copyText:i,size:p=y,valueToCopy:a})=>{const[n,t]=c.useState("copy");return e.jsx(u,{describedBy:"copy",onHide:()=>t("copy"),togglableOnFocus:!0,content:n==="copy"?i:s,children:e.jsx(m,{onPress:o=>{o.stopPropagation(),o.preventDefault(),d(a),t("copied")},children:e.jsx(l,{color:r,size:p,name:"copy-regular"})})})};f.__docgenInfo={description:"",methods:[],displayName:"LakeCopyButton",props:{color:{required:!1,tsType:{name:"string"},description:""},copiedText:{required:!0,tsType:{name:"string"},description:""},copyText:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"21",computed:!1}},valueToCopy:{required:!0,tsType:{name:"string"},description:""}}};export{f as L,y as c};
//# sourceMappingURL=LakeCopyButton-nb2Iv4kO.js.map
