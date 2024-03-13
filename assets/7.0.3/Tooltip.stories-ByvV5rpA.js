import{n,s as h,c as j,j as t,B as e,L as o,S as g}from"./Space-ChRvaji1.js";import{P as f}from"./Pressable-DD_-8IPu.js";import{S as u,a as r}from"./_StoriesComponents-DuIeS3XV.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";const i=h.create({target:{height:40,paddingHorizontal:20,backgroundColor:j.gray[100],borderRadius:6}}),v={title:"Interactivity/Tooltip",component:n},s=()=>t.jsxs(u,{title:"Tooltip placements",children:[t.jsx(r,{title:"Left",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Tooltip content",placement:"left",children:t.jsx(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(o,{children:"Hover to display tooltip at top"})})})})}),t.jsx(r,{title:"Center",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Tooltip content",placement:"center",children:t.jsx(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(o,{children:"Hover to display tooltip at bottom"})})})})}),t.jsx(r,{title:"Right",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Tooltip content",placement:"right",children:t.jsx(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(o,{children:"Hover to display tooltip at left"})})})})}),t.jsx(r,{title:"Auto",children:t.jsx(e,{direction:"row",justifyContent:"center",children:Array.from({length:10},(T,l)=>t.jsxs(t.Fragment,{children:[l>0?t.jsx(g,{width:12}):null,t.jsx(n,{content:"Tooltip content",children:t.jsx(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(o,{children:"Hover"})})})]},String(l)))})})]}),c=()=>t.jsxs(u,{title:"Tooltip behaviors",children:[t.jsx(r,{title:"Match Reference Width",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",matchReferenceWidth:!0,children:t.jsx(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(o,{children:"Hover to display tooltip at bottom"})})})})}),t.jsx(r,{title:"Without arrow",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",hideArrow:!0,children:t.jsx(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(o,{children:"Hover to display tooltip at bottom"})})})})}),t.jsx(r,{title:"Display onfocus",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",togglableOnFocus:!0,children:t.jsx(f,{children:t.jsx(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(o,{children:"Focus or hover to display tooltip at bottom"})})})})})}),t.jsx(r,{title:"Disabled",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",disabled:!0,children:t.jsx(e,{style:i.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(o,{children:"Tooltip should not be displayed on hover"})})})})})]});s.__docgenInfo={description:"",methods:[],displayName:"Placements"};c.__docgenInfo={description:"",methods:[],displayName:"Behaviors"};var a,d,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var y,x,m;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(m=(x=c.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const I=["Placements","Behaviors"];export{c as Behaviors,s as Placements,I as __namedExportsOrder,v as default};
//# sourceMappingURL=Tooltip.stories-ByvV5rpA.js.map
