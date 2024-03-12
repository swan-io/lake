import{o as n,s as x,c as f,j as a,a as t,B as e,L as o,F as T,S as L}from"./Space-C_BZbDkO.js";import{P as k}from"./Pressable-CqA6H6Mb.js";import{S as g,a as r}from"./_StoriesComponents-Bd9cS-Qo.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";const i=x.create({target:{height:40,paddingHorizontal:20,backgroundColor:f.gray[100],borderRadius:6}}),H={title:"Interactivity/Tooltip",component:n},c=()=>a(g,{title:"Tooltip placements",children:[t(r,{title:"Left",children:t(e,{direction:"row",justifyContent:"center",children:t(n,{content:"Tooltip content",placement:"left",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(o,{children:"Hover to display tooltip at top"})})})})}),t(r,{title:"Center",children:t(e,{direction:"row",justifyContent:"center",children:t(n,{content:"Tooltip content",placement:"center",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(o,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Right",children:t(e,{direction:"row",justifyContent:"center",children:t(n,{content:"Tooltip content",placement:"right",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(o,{children:"Hover to display tooltip at left"})})})})}),t(r,{title:"Auto",children:t(e,{direction:"row",justifyContent:"center",children:Array.from({length:10},(B,s)=>a(T,{children:[s>0?t(L,{width:12}):null,t(n,{content:"Tooltip content",children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(o,{children:"Hover"})})})]},String(s)))})})]}),l=()=>a(g,{title:"Tooltip behaviors",children:[t(r,{title:"Match Reference Width",children:t(e,{direction:"row",justifyContent:"center",children:t(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",matchReferenceWidth:!0,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(o,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Without arrow",children:t(e,{direction:"row",justifyContent:"center",children:t(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",hideArrow:!0,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(o,{children:"Hover to display tooltip at bottom"})})})})}),t(r,{title:"Display onfocus",children:t(e,{direction:"row",justifyContent:"center",children:t(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",togglableOnFocus:!0,children:t(k,{children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(o,{children:"Focus or hover to display tooltip at bottom"})})})})})}),t(r,{title:"Disabled",children:t(e,{direction:"row",justifyContent:"center",children:t(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",disabled:!0,children:t(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t(o,{children:"Tooltip should not be displayed on hover"})})})})})]});var d,p,y;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(y=(p=c.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var m,u,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const F=["Placements","Behaviors"];export{l as Behaviors,c as Placements,F as __namedExportsOrder,H as default};
//# sourceMappingURL=Tooltip.stories-BmAE1I1d.js.map
