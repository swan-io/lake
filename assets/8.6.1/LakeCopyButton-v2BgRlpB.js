import{j as e,m as c,I as d}from"./ScrollView-CouMEPyK.js";import{r as u}from"./index-uCp2LrAq.js";import{s as l}from"./clipboard-BXAk6GqW.js";import{P as m}from"./Pressable-XeZGT766.js";const y=21,f=({color:r,copiedText:s,copyText:i,size:p=y,valueToCopy:a})=>{const[n,t]=u.useState("copy");return e.jsx(c,{describedBy:"copy",onHide:()=>t("copy"),togglableOnFocus:!0,content:n==="copy"?i:s,children:e.jsx(m,{onPress:o=>{o.stopPropagation(),o.preventDefault(),l(a),t("copied")},children:e.jsx(d,{color:r,size:p,name:"copy-regular"})})})};f.__docgenInfo={description:"",methods:[],displayName:"LakeCopyButton",props:{color:{required:!1,tsType:{name:"string"},description:""},copiedText:{required:!0,tsType:{name:"string"},description:""},copyText:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"21",computed:!1}},valueToCopy:{required:!0,tsType:{name:"string"},description:""}}};export{f as L,y as c};
//# sourceMappingURL=LakeCopyButton-v2BgRlpB.js.map
