import{d as o,S as B,c as L,a as h,j as t,L as n}from"./Space-f85095f8.js";import{B as e}from"./Box-f4fbfbba.js";import{P as k}from"./Pressable-7e9fd84c.js";import{S as u,a as r}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-b9a8c83f.js";import"./useMergeRefs-56399732.js";const i=B.create({target:{height:40,paddingHorizontal:20,backgroundColor:L.gray[100],borderRadius:6}}),H={title:"Interactivity/Tooltip",component:o},c=()=>h(u,{title:"Tooltip placements",children:[t(r,{title:"Top",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"top",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at top"})})})})}),t(r,{title:"Bottom",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"bottom",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Left",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"left",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at left"})})})})}),t(r,{title:"Right",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"right",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at right"})})})})})]}),l=({describedBy:g,matchReferenceWidth:x,placement:f,width:T})=>h(u,{title:"Tooltip behaviors",children:[t(r,{title:"Default",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:f,describedBy:g,matchReferenceWidth:x,width:T,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at top"})})})})}),t(r,{title:"Match Reference Width",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"bottom",matchReferenceWidth:!0,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Without arrow",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"bottom",hideArrow:!0,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Display onfocus",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"bottom",togglableOnFocus:!0,children:t(k,{children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Focus or hover to display tooltip at bottom"})})})})})}),t(r,{title:"Disabled",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"bottom",disabled:!0,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Tooltip should not be displayed on hover"})})})})})]});var a,s,d;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(d=(s=c.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var p,y,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`({
  describedBy,
  matchReferenceWidth,
  placement,
  width
}: StoryArgs) => {
  return <StoryBlock title="Tooltip behaviors">
      <StoryPart title="Default">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Tooltip content" placement={placement} describedBy={describedBy} matchReferenceWidth={matchReferenceWidth} width={width}>
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at top</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

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
}`,...(m=(y=l.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};const R=["Placements","Behaviors"];export{l as Behaviors,c as Placements,R as __namedExportsOrder,H as default};
//# sourceMappingURL=Tooltip.stories-24917940.js.map
