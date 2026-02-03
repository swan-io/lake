import{v as n,j as t,B as e,L as i,ah as a,S as m,s as x,c as y}from"./ScrollView-BYzbEEWX.js";import{P as u}from"./Pressable-DhB6vjWm.js";import{S as d,a as o}from"./_StoriesComponents-neahVyO-.js";import"./iframe-BKXUNtls.js";import"./preload-helper-D1IIBeq1.js";import"./index-85_8WeyO.js";import"./Separator-D-AI36PG.js";import"./commonStyles-BBEkV6IC.js";const r=x.create({target:{height:40,paddingHorizontal:20,backgroundColor:y.gray[100],borderRadius:6}}),C={title:"Interactivity/Tooltip",component:n},c=()=>t.jsxs(d,{title:"Tooltip placements",children:[t.jsx(o,{title:"Left",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Tooltip content",placement:"left",children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover to display tooltip at top"})})})})}),t.jsx(o,{title:"Center",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Tooltip content",placement:"center",children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover to display tooltip at bottom"})})})})}),t.jsx(o,{title:"Right",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Tooltip content",placement:"right",children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover to display tooltip at left"})})})})}),t.jsx(o,{title:"Auto",children:t.jsx(e,{direction:"row",justifyContent:"center",children:Array.from({length:10},(h,p)=>t.jsxs(t.Fragment,{children:[p>0?t.jsx(m,{width:12}):null,t.jsx(n,{content:"Tooltip content",children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover"})})})]},String(p)))})})]}),s=()=>t.jsxs(d,{title:"Information Tooltip",children:[t.jsx(o,{title:"Default",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(a,{text:"Default information tooltip"})})}),t.jsx(o,{title:"With custom icon",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(a,{icon:"building-shop-regular",text:"Information tooltip with custom icon"})})}),t.jsx(o,{title:"With custom size",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(a,{icon:"lake-face-id",text:"Information tooltip with custom icon",iconSize:72})})})]}),l=()=>t.jsxs(d,{title:"Tooltip behaviors",children:[t.jsx(o,{title:"Match Reference Width",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",matchReferenceWidth:!0,children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover to display tooltip at bottom"})})})})}),t.jsx(o,{title:"Without arrow",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",hideArrow:!0,children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Hover to display tooltip at bottom"})})})})}),t.jsx(o,{title:"Display onfocus",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",togglableOnFocus:!0,children:t.jsx(u,{children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Focus or hover to display tooltip at bottom"})})})})})}),t.jsx(o,{title:"Disabled",children:t.jsx(e,{direction:"row",justifyContent:"center",children:t.jsx(n,{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",placement:"center",disabled:!0,children:t.jsx(e,{style:r.target,direction:"row",justifyContent:"center",alignItems:"center",children:t.jsx(i,{children:"Tooltip should not be displayed on hover"})})})})})]});c.__docgenInfo={description:"",methods:[],displayName:"Placements"};s.__docgenInfo={description:"",methods:[],displayName:"InfoTooltip"};l.__docgenInfo={description:"",methods:[],displayName:"Behaviors"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const S=["Placements","InfoTooltip","Behaviors"];export{l as Behaviors,s as InfoTooltip,c as Placements,S as __namedExportsOrder,C as default};
//# sourceMappingURL=Tooltip.stories-DVelk5zX.js.map
