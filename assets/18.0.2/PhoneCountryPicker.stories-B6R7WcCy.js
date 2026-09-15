import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-DDa-F5jp.js";import{Bt as r,Et as i,Ft as a,et as o}from"./ScrollView-DtvYaTvp.js";import{n as s,r as c,t as l}from"./_StoriesComponents-DgW8fSPx.js";import{c as u,o as d,r as f,u as p}from"./countries-BDvp75EQ.js";import{n as m,t as h}from"./PhoneCountryPicker-BJ3twDBY.js";var g,_,v,y,b,x,S,C;t((()=>{g=e(n()),i(),m(),u(),c(),_=o(),v=r.create({container:{width:120}}),y=[`FRA`,`DEU`,`ESP`,`ITA`,`GBR`,`USA`],b={title:`Forms/PhoneCountryPicker`,component:h},x=({initialCountry:e=f,countries:t=p,disabled:n,readOnly:r,error:i})=>{let[o,s]=(0,g.useState)(e);return(0,_.jsx)(a,{style:v.container,children:(0,_.jsx)(h,{value:o,countries:t,onValueChange:s,disabled:n,readOnly:r,error:i})})},S=()=>(0,_.jsxs)(l,{title:`PhoneCountryPicker variations`,children:[(0,_.jsx)(s,{title:`Default (France)`,children:(0,_.jsx)(x,{})}),(0,_.jsx)(s,{title:`Initial country: United States`,children:(0,_.jsx)(x,{initialCountry:d(`USA`)})}),(0,_.jsx)(s,{title:`Initial country: Portugal (long IDD)`,children:(0,_.jsx)(x,{initialCountry:d(`PRT`)})}),(0,_.jsx)(s,{title:`Restricted list (6 countries only)`,children:(0,_.jsx)(x,{countries:y})}),(0,_.jsx)(s,{title:`Error`,children:(0,_.jsx)(x,{error:`Required`})}),(0,_.jsx)(s,{title:`Disabled`,children:(0,_.jsx)(x,{disabled:!0})}),(0,_.jsx)(s,{title:`Readonly`,children:(0,_.jsx)(x,{readOnly:!0})})]}),S.__docgenInfo={description:``,methods:[],displayName:`Variations`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
    <StoryPart title="Default (France)">
      <Editable />
    </StoryPart>

    <StoryPart title="Initial country: United States">
      <Editable initialCountry={getCountryByCCA3("USA")} />
    </StoryPart>

    <StoryPart title="Initial country: Portugal (long IDD)">
      <Editable initialCountry={getCountryByCCA3("PRT")} />
    </StoryPart>

    <StoryPart title="Restricted list (6 countries only)">
      <Editable countries={FEW_COUNTRIES} />
    </StoryPart>

    <StoryPart title="Error">
      <Editable error="Required" />
    </StoryPart>

    <StoryPart title="Disabled">
      <Editable disabled={true} />
    </StoryPart>

    <StoryPart title="Readonly">
      <Editable readOnly={true} />
    </StoryPart>
  </StoryBlock>`,...S.parameters?.docs?.source}}},C=[`Variations`]}))();export{S as Variations,C as __namedExportsOrder,b as default};
//# sourceMappingURL=PhoneCountryPicker.stories-B6R7WcCy.js.map