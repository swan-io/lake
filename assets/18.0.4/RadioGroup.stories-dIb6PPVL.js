import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-xecgKmXw.js";import{Bt as r,Et as i,K as a,X as o,Y as s,et as c,g as l,h as u,ht as d,i as f,o as p,r as m,s as h,vt as g,wt as _}from"./ScrollView-CIA5lAtq.js";import{r as v,t as y}from"./Pressable-TPBcInrW.js";import{n as b,r as x,t as S}from"./_StoriesComponents-CpAt8giV.js";import{n as C,t as w}from"./LakeRadio-B_RvEduq.js";function T({items:e,direction:t=`column`,color:n=`current`,disabled:r=!1,hideErrors:i=!1,error:a,help:c,value:l,onValueChange:f}){let h=s(a);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{direction:t,style:O.container,children:e.map((i,a)=>{let s=a===e.length-1,c=r||!o(i.disabled);return(0,D.jsxs)(E.Fragment,{children:[(0,D.jsxs)(y,{disabled:c,onPress:()=>{i.value!==l&&f(i.value)},style:[O.item,t===`row`&&O.withBottomSpace,t===`row`&&!s&&O.withRightSpace],children:[(0,D.jsx)(w,{isError:h,disabled:c,color:n,value:i.value===l}),(0,D.jsx)(m,{width:12}),(0,D.jsx)(p,{color:c?d.gray[300]:d.gray[900],children:i.name})]}),!s&&(0,D.jsx)(m,{height:t===`column`?12:void 0})]},a)})}),!i&&(0,D.jsx)(u,{direction:`row`,style:O.errorContainer,children:s(a)?(0,D.jsx)(p,{variant:`smallRegular`,color:d.negative[500],children:a}):(0,D.jsx)(p,{variant:`smallRegular`,color:d.gray[500],children:c??` `})})]})}var E,D,O,k=t((()=>{E=e(n()),i(),g(),a(),l(),C(),h(),v(),f(),D=c(),O=r.create({container:{flexWrap:`wrap`},item:{flexDirection:`row`,alignItems:`center`},withRightSpace:{marginRight:_[24]},withBottomSpace:{marginBottom:_[12]},errorContainer:{paddingTop:_[4]}}),T.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  name: ReactNode;
  value: V;
  disabled?: boolean;
}`,signature:{properties:[{key:`name`,value:{name:`ReactNode`,required:!0}},{key:`value`,value:{name:`V`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`RadioGroupItem<V>[]`},description:``},direction:{required:!1,tsType:{name:`union`,raw:`"column" | "row"`,elements:[{name:`literal`,value:`"column"`},{name:`literal`,value:`"row"`}]},description:``,defaultValue:{value:`"column"`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`keyof typeof colors`,elements:[{name:`literal`,value:`gray`},{name:`literal`,value:`live`},{name:`literal`,value:`sandbox`},{name:`literal`,value:`positive`},{name:`literal`,value:`warning`},{name:`literal`,value:`negative`},{name:`literal`,value:`current`},{name:`literal`,value:`partner`},{name:`literal`,value:`swan`},{name:`literal`,value:`shakespear`},{name:`literal`,value:`darkPink`},{name:`literal`,value:`sunglow`},{name:`literal`,value:`mediumSladeBlue`}]},description:``,defaultValue:{value:`"current"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},value:{required:!1,tsType:{name:`V`},description:``},error:{required:!1,tsType:{name:`string`},description:``},help:{required:!1,tsType:{name:`string`},description:``},hideErrors:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onValueChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: V) => void`,signature:{arguments:[{type:{name:`V`},name:`value`}],return:{name:`void`}}},description:``}}}}));function A(e){let[t,n]=(0,M.useState)();return(0,N.jsx)(T,{...e,value:t,onValueChange:n})}function j({label:e,description:t}){return(0,N.jsxs)(p,{children:[(0,N.jsx)(p,{color:d.gray[900],children:e}),`: `,(0,N.jsx)(p,{color:d.gray[500],children:t})]})}var M,N,P,F,I,L,R,z;t((()=>{M=e(n()),h(),k(),g(),x(),N=c(),P={title:`Forms/RadioGroup`,component:T},F=[{name:`Less than €500`,value:`LessThan500`},{name:`Between €500 and €1,500`,value:`Between500And1500`},{name:`Between €1,500 and €3,000`,value:`Between1500And3000`},{name:`Between €3,000 and €4,500`,value:`Between3000And4500`},{name:`More than €4,500`,value:`MoreThan4500`}],I=[{name:`Less than €500`,value:`LessThan500`},{name:`Between €500 and €1,500`,value:`Between500And1500`},{name:`Between €1,500 and €3,000`,value:`Between1500And3000`,disabled:!0},{name:`Between €3,000 and €4,500`,value:`Between3000And4500`},{name:`More than €4,500`,value:`MoreThan4500`}],L=[{name:(0,N.jsx)(j,{label:`Less than €500`,description:`Suitable for occasional small purchases`}),value:`LessThan500`},{name:(0,N.jsx)(j,{label:`Between €500 and €1,500`,description:`Ideal for regular everyday spending`}),value:`Between500And1500`},{name:(0,N.jsx)(j,{label:`Between €1,500 and €3,000`,description:`For moderate to high monthly expenses`}),value:`Between1500And3000`},{name:(0,N.jsx)(j,{label:`Between €3,000 and €4,500`,description:`For high spending needs`}),value:`Between3000And4500`},{name:(0,N.jsx)(j,{label:`More than €4,500`,description:`No practical upper limit`}),value:`MoreThan4500`}],R=()=>(0,N.jsxs)(S,{title:`RadioGroup`,children:[(0,N.jsx)(b,{title:`Default`,children:(0,N.jsx)(A,{items:F})}),(0,N.jsx)(b,{title:`Row direction`,children:(0,N.jsx)(A,{items:F,direction:`row`})}),(0,N.jsx)(b,{title:`Disabled`,children:(0,N.jsx)(A,{items:F,disabled:!0})}),(0,N.jsx)(b,{title:`With disabled item`,children:(0,N.jsx)(A,{items:I})}),(0,N.jsx)(b,{title:`With color`,children:(0,N.jsx)(A,{items:F,color:`live`})}),(0,N.jsx)(b,{title:`With help`,children:(0,N.jsx)(A,{items:F,help:`Select a value`})}),(0,N.jsx)(b,{title:`With error`,children:(0,N.jsx)(A,{items:F,error:`This is an error`})}),(0,N.jsx)(b,{title:`With hidden error`,children:(0,N.jsx)(A,{items:F,error:`I'm hidden :(`,hideErrors:!0})}),(0,N.jsx)(b,{title:`With description`,children:(0,N.jsx)(A,{items:L})})]}),R.__docgenInfo={description:``,methods:[],displayName:`Default`},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="RadioGroup">
      <StoryPart title="Default">
        <EditableRadioGroup items={items} />
      </StoryPart>

      <StoryPart title="Row direction">
        <EditableRadioGroup items={items} direction="row" />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableRadioGroup items={items} disabled={true} />
      </StoryPart>

      <StoryPart title="With disabled item">
        <EditableRadioGroup items={itemsWithDisabled} />
      </StoryPart>

      <StoryPart title="With color">
        <EditableRadioGroup items={items} color="live" />
      </StoryPart>

      <StoryPart title="With help">
        <EditableRadioGroup items={items} help="Select a value" />
      </StoryPart>

      <StoryPart title="With error">
        <EditableRadioGroup items={items} error="This is an error" />
      </StoryPart>

      <StoryPart title="With hidden error">
        <EditableRadioGroup items={items} error="I'm hidden :(" hideErrors={true} />
      </StoryPart>

      <StoryPart title="With description">
        <EditableRadioGroup items={itemsWithDescription} />
      </StoryPart>
    </StoryBlock>;
}`,...R.parameters?.docs?.source}}},z=[`Default`]}))();export{R as Default,z as __namedExportsOrder,P as default};
//# sourceMappingURL=RadioGroup.stories-dIb6PPVL.js.map