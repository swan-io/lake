import{S as g,c as x,j as u,a as t,L as n}from"./Space-d8a3a2fb.js";import{B as e}from"./index-792e89f6.js";import{L as o}from"./LakeTooltip-e0857f25.js";import{P as f}from"./Pressable-f145b70b.js";import{S as h,a as r}from"./_StoriesComponents-209aaa6f.js";import"./extends-98964cd2.js";import"./index-ebeaab24.js";import"./index-9c09ad76.js";import"./useMergeRefs-c81cc1be.js";import"./Icon-b1271a47.js";import"./Svg-e0dc1839.js";import"./Portal-7eda4751.js";import"./WithCurrentColor-c06016a8.js";const i=g.create({target:{height:40,paddingHorizontal:20,backgroundColor:x.gray[100],borderRadius:6}}),R={title:"Interactivity/Tooltip",component:o},c=()=>u(h,{title:"Tooltip placements",children:[t(r,{title:"Top",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"top",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at top"})})})})}),t(r,{title:"Bottom",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"bottom",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Left",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"left",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at left"})})})})}),t(r,{title:"Right",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Tooltip content",placement:"right",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at right"})})})})})]}),l=()=>u(h,{title:"Tooltip behaviors",children:[t(r,{title:"Match Reference Width",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"bottom",matchReferenceWidth:!0,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Without arrow",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"bottom",hideArrow:!0,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Display onfocus",children:t(e,{direction:"row",justifyContent:"center",children:t(o,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"bottom",togglableOnFocus:!0,children:t(f,{children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(n,{children:"Focus or hover to display tooltip at bottom"})})})})})})]});var a,s,p;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(p=(s=c.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var d,m,y;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
    </StoryBlock>;
}`,...(y=(m=l.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const W=["Placements","Behaviors"];export{l as Behaviors,c as Placements,W as __namedExportsOrder,R as default};
//# sourceMappingURL=Tooltip.stories-15b7129f.js.map
