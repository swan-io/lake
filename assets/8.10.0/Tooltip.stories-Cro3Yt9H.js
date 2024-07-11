import{m as n,s as B,c as w,j as t,B as e,L as i,S as k,H as a}from"./ScrollView-BxLwdHnf.js";import{P as L}from"./Pressable-TqGURk75.js";import{S as d,a as o}from"./_StoriesComponents-COUv1FIe.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./commonStyles-t4XfA7cz.js";const r=B.create({target:{height:40,paddingHorizontal:20,backgroundColor:w.gray[100],borderRadius:6}}),W={title:"Interactivity/Tooltip",component:n},c=()=>t.jsxs(d,{title:"Tooltip placements",children:[t.jsx(o,{title:"Left",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Tooltip content",placement:"left",children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover to display tooltip at top"})})})})}),t.jsx(o,{title:"Center",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Tooltip content",placement:"center",children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover to display tooltip at bottom"})})})})}),t.jsx(o,{title:"Right",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Tooltip content",placement:"right",children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover to display tooltip at left"})})})})}),t.jsx(o,{title:"Auto",children:t.jsx(e,{direction:"row",justifyContent:"center",children:Array.from({length:10},(C,p)=>t.jsxs(t.Fragment,{children:[p>0?t.jsx(k,{width:12}):null,t.jsx(n,{content:"Tooltip content",children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover"})})})]},String(p)))})})]}),s=()=>t.jsxs(d,{title:"Information Tooltip",children:[t.jsx(o,{title:"Default",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(a,{text:"Default information tooltip"})})}),t.jsx(o,{title:"With custom icon",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(a,{icon:"building-shop-regular",text:"Information tooltip with custom icon"})})}),t.jsx(o,{title:"With custom size",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(a,{icon:"lake-face-id",text:"Information tooltip with custom icon",iconSize:72})})})]}),l=()=>t.jsxs(d,{title:"Tooltip behaviors",children:[t.jsx(o,{title:"Match Reference Width",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",matchReferenceWidth:!0,children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover to display tooltip at bottom"})})})})}),t.jsx(o,{title:"Without arrow",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",hideArrow:!0,children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover to display tooltip at bottom"})})})})}),t.jsx(o,{title:"Display onfocus",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",togglableOnFocus:!0,children:t.jsx(L,{children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Focus or hover to display tooltip at bottom"})})})})})}),t.jsx(o,{title:"Disabled",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",disabled:!0,children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Tooltip should not be displayed on hover"})})})})})]});c.__docgenInfo={description:"",methods:[],displayName:"Placements"};s.__docgenInfo={description:"",methods:[],displayName:"InfoTooltip"};l.__docgenInfo={description:"",methods:[],displayName:"Behaviors"};var m,x,y;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="Tooltip placements">
      <StoryPart title="Left">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Tooltip content" placement="left">
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at top</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Center">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Tooltip content" placement="center">
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at bottom</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Right">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Tooltip content" placement="right">
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at left</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Auto">
        <Box direction="row" justifyContent="center">
          {Array.from({
          length: 10
        }, (_, index) => <Fragment key={String(index)}>
              {index > 0 ? <Space width={12} /> : null}

              <LakeTooltip content="Tooltip content">
                <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
                  <LakeText>Hover</LakeText>
                </Box>
              </LakeTooltip>
            </Fragment>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var u,h,j;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <StoryBlock title="Information Tooltip">
      <StoryPart title="Default">
        <Box direction="row" justifyContent="center">
          <InformationTooltip text="Default information tooltip" />
        </Box>
      </StoryPart>

      <StoryPart title="With custom icon">
        <Box direction="row" justifyContent="center">
          <InformationTooltip icon="building-shop-regular" text="Information tooltip with custom icon" />
        </Box>
      </StoryPart>

      <StoryPart title="With custom size">
        <Box direction="row" justifyContent="center">
          <InformationTooltip icon="lake-face-id" text="Information tooltip with custom icon" iconSize={72} />
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,g,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <StoryBlock title="Tooltip behaviors">
      <StoryPart title="Match Reference Width">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit." placement="center" matchReferenceWidth={true}>
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at bottom</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Without arrow">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit." placement="center" hideArrow={true}>
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at bottom</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Display onfocus">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit." placement="center" togglableOnFocus={true}>
            <Pressable>
              <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
                <LakeText>Focus or hover to display tooltip at bottom</LakeText>
              </Box>
            </Pressable>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Disabled">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit." placement="center" disabled={true}>
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Tooltip should not be displayed on hover</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(T=(g=l.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const D=["Placements","InfoTooltip","Behaviors"];export{l as Behaviors,s as InfoTooltip,c as Placements,D as __namedExportsOrder,W as default};
//# sourceMappingURL=Tooltip.stories-Cro3Yt9H.js.map
