import{B as o,S as g,c as x,j as u,a as t,L as n}from"./Space-ImkcMIim.js";import{B as e}from"./commonStyles-fDEJ_OM7.js";import{P as T}from"./Pressable-MDITAEu6.js";import{S as h,a as r}from"./_StoriesComponents-NdmN1C35.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-4g5l5LRQ.js";import"./index-jmm5gWkb.js";const i=g.create({target:{height:40,paddingHorizontal:20,backgroundColor:x.gray[100],borderRadius:6}}),S={title:"Interactivity/Tooltip",component:o},l=()=>u(h,{title:"Tooltip placements",children:[t(r,{title:"Top",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"top",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at top"})})})})}),t(r,{title:"Bottom",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"bottom",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Left",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"left",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at left"})})})})}),t(r,{title:"Right",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"right",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at right"})})})})})]}),c=()=>u(h,{title:"Tooltip behaviors",children:[t(r,{title:"Match Reference Width",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"bottom",matchReferenceWidth:!0,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Without arrow",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"bottom",hideArrow:!0,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Display onfocus",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"bottom",togglableOnFocus:!0,children:t(T,{children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Focus or hover to display tooltip at bottom"})})})})})}),t(r,{title:"Disabled",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"bottom",disabled:!0,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Tooltip should not be displayed on hover"})})})})})]});var a,s,d;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <StoryBlock title="Tooltip placements">
      <StoryPart title="Top">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Tooltip content" placement="top">
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at top</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Bottom">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Tooltip content" placement="bottom">
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at bottom</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Left">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Tooltip content" placement="left">
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at left</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Right">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Tooltip content" placement="right">
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at right</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var p,m,y;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <StoryBlock title="Tooltip behaviors">
      <StoryPart title="Match Reference Width">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit." placement="bottom" matchReferenceWidth={true}>
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at bottom</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Without arrow">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit." placement="bottom" hideArrow={true}>
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at bottom</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Display onfocus">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit." placement="bottom" togglableOnFocus={true}>
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
          <LakeTooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit." placement="bottom" disabled={true}>
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Tooltip should not be displayed on hover</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(y=(m=c.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const P=["Placements","Behaviors"];export{c as Behaviors,l as Placements,P as __namedExportsOrder,S as default};
//# sourceMappingURL=Tooltip.stories-xyueDXHR.js.map