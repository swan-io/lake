import{i as e}from"./preload-helper-CxZGalNS.js";import{St as t,U as n,c as r,g as i,h as a,ht as o,i as s,it as c,l,o as u,r as d,s as f,st as p,u as m}from"./ScrollView-DPbqI7Vg.js";import{r as h,t as g}from"./Pressable-Bf3Mh810.js";import{n as _,r as v,t as y}from"./_StoriesComponents-C6upXXxu.js";var b,x,S,C,w,T,E,D;e((()=>{o(),b=n(),i(),f(),m(),h(),s(),p(),v(),x=n(),S=t.create({target:{height:40,paddingHorizontal:20,backgroundColor:c.gray[100],borderRadius:6}}),C={title:`Interactivity/Tooltip`,component:l},w=()=>(0,x.jsxs)(y,{title:`Tooltip placements`,children:[(0,x.jsx)(_,{title:`Left`,children:(0,x.jsx)(a,{direction:`row`,justifyContent:`center`,children:(0,x.jsx)(l,{content:`Tooltip content`,placement:`left`,children:(0,x.jsx)(a,{style:S.target,direction:`row`,justifyContent:`center`,alignItems:`center`,children:(0,x.jsx)(u,{children:`Hover to display tooltip at top`})})})})}),(0,x.jsx)(_,{title:`Center`,children:(0,x.jsx)(a,{direction:`row`,justifyContent:`center`,children:(0,x.jsx)(l,{content:`Tooltip content`,placement:`center`,children:(0,x.jsx)(a,{style:S.target,direction:`row`,justifyContent:`center`,alignItems:`center`,children:(0,x.jsx)(u,{children:`Hover to display tooltip at bottom`})})})})}),(0,x.jsx)(_,{title:`Right`,children:(0,x.jsx)(a,{direction:`row`,justifyContent:`center`,children:(0,x.jsx)(l,{content:`Tooltip content`,placement:`right`,children:(0,x.jsx)(a,{style:S.target,direction:`row`,justifyContent:`center`,alignItems:`center`,children:(0,x.jsx)(u,{children:`Hover to display tooltip at left`})})})})}),(0,x.jsx)(_,{title:`Auto`,children:(0,x.jsx)(a,{direction:`row`,justifyContent:`center`,children:Array.from({length:10},(e,t)=>(0,x.jsxs)(b.Fragment,{children:[t>0?(0,x.jsx)(d,{width:12}):null,(0,x.jsx)(l,{content:`Tooltip content`,children:(0,x.jsx)(a,{style:S.target,direction:`row`,justifyContent:`center`,alignItems:`center`,children:(0,x.jsx)(u,{children:`Hover`})})})]},String(t)))})})]}),T=()=>(0,x.jsxs)(y,{title:`Information Tooltip`,children:[(0,x.jsx)(_,{title:`Default`,children:(0,x.jsx)(a,{direction:`row`,justifyContent:`center`,children:(0,x.jsx)(r,{text:`Default information tooltip`})})}),(0,x.jsx)(_,{title:`With custom icon`,children:(0,x.jsx)(a,{direction:`row`,justifyContent:`center`,children:(0,x.jsx)(r,{icon:`building-shop-regular`,text:`Information tooltip with custom icon`})})}),(0,x.jsx)(_,{title:`With custom size`,children:(0,x.jsx)(a,{direction:`row`,justifyContent:`center`,children:(0,x.jsx)(r,{icon:`lake-face-id`,text:`Information tooltip with custom icon`,iconSize:72})})})]}),E=()=>(0,x.jsxs)(y,{title:`Tooltip behaviors`,children:[(0,x.jsx)(_,{title:`Match Reference Width`,children:(0,x.jsx)(a,{direction:`row`,justifyContent:`center`,children:(0,x.jsx)(l,{content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,placement:`center`,matchReferenceWidth:!0,children:(0,x.jsx)(a,{style:S.target,direction:`row`,justifyContent:`center`,alignItems:`center`,children:(0,x.jsx)(u,{children:`Hover to display tooltip at bottom`})})})})}),(0,x.jsx)(_,{title:`Without arrow`,children:(0,x.jsx)(a,{direction:`row`,justifyContent:`center`,children:(0,x.jsx)(l,{content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,placement:`center`,hideArrow:!0,children:(0,x.jsx)(a,{style:S.target,direction:`row`,justifyContent:`center`,alignItems:`center`,children:(0,x.jsx)(u,{children:`Hover to display tooltip at bottom`})})})})}),(0,x.jsx)(_,{title:`Display onfocus`,children:(0,x.jsx)(a,{direction:`row`,justifyContent:`center`,children:(0,x.jsx)(l,{content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,placement:`center`,togglableOnFocus:!0,children:(0,x.jsx)(g,{children:(0,x.jsx)(a,{style:S.target,direction:`row`,justifyContent:`center`,alignItems:`center`,children:(0,x.jsx)(u,{children:`Focus or hover to display tooltip at bottom`})})})})})}),(0,x.jsx)(_,{title:`Disabled`,children:(0,x.jsx)(a,{direction:`row`,justifyContent:`center`,children:(0,x.jsx)(l,{content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,placement:`center`,disabled:!0,children:(0,x.jsx)(a,{style:S.target,direction:`row`,justifyContent:`center`,alignItems:`center`,children:(0,x.jsx)(u,{children:`Tooltip should not be displayed on hover`})})})})})]}),w.__docgenInfo={description:``,methods:[],displayName:`Placements`},T.__docgenInfo={description:``,methods:[],displayName:`InfoTooltip`},E.__docgenInfo={description:``,methods:[],displayName:`Behaviors`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D=[`Placements`,`InfoTooltip`,`Behaviors`]}))();export{E as Behaviors,T as InfoTooltip,w as Placements,D as __namedExportsOrder,C as default};
//# sourceMappingURL=Tooltip.stories-DNgKrRue.js.map