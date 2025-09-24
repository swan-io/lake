import{j as t,s as o,L as s,I as d,S as c}from"./ScrollView-DRMbQjBv.js";import{L as a}from"./LakeAlert-3Wj7Fp8C.js";import{T as e,a as n}from"./Tile--oIaOfL8.js";import{S as y,a as l}from"./_StoriesComponents-WOCjs0a4.js";import"./iframe-OdvdEG2R.js";import"./preload-helper-D1IIBeq1.js";import"./index-DmuaoBTZ.js";import"./commonStyles-BBEkV6IC.js";import"./useResponsive-B7r_lvl7.js";import"./ResponsiveContainer-Bam5QSjT.js";import"./Separator-CAYVt1Y-.js";const i=o.create({part:{padding:6},footer:{padding:12}}),k={title:"Layout/Tile",component:e},r=()=>t.jsxs(y,{title:"Tile",description:["This component creates a tile. "],children:[t.jsx(l,{title:"Default",style:i.part,children:t.jsx(e,{})}),t.jsx(l,{title:"With anchored alert",style:i.part,children:t.jsx(e,{footer:t.jsx(a,{anchored:!0,variant:"error",title:"It is an anchored alert"})})}),t.jsx(l,{title:"With neutral anchored alert",style:i.part,children:t.jsx(e,{footer:t.jsx(a,{anchored:!0,variant:"neutral",title:"It is an anchored alert",children:t.jsx(s,{children:"Helloworld"})})})}),t.jsx(l,{title:"With icon and title",style:i.part,children:t.jsx(e,{icon:t.jsx(d,{name:"document-regular",size:20}),title:"Tile title"})}),t.jsx(l,{title:"With description",style:i.part,children:t.jsx(e,{title:"Tile title",description:"It is a description"})}),t.jsx(l,{title:"With header end",style:i.part,children:t.jsx(e,{title:"Tile title",headerEnd:t.jsx(s,{children:"It is a text"})})}),t.jsx(l,{title:"With footer",style:i.part,children:t.jsx(e,{title:"Tile title",footer:t.jsxs(t.Fragment,{children:[t.jsx(c,{width:48}),t.jsx(s,{style:i.footer,children:"It is a text"})]})})}),t.jsx(l,{title:"Hovered",style:i.part,children:t.jsx(e,{hovered:!0})}),t.jsx(l,{title:"Selected",style:i.part,children:t.jsx(e,{selected:!0})}),t.jsx(l,{title:"Disabled",style:i.part,children:t.jsx(e,{title:"Tile title",disabled:!0})}),t.jsx(l,{title:"With 2 tiles",style:i.part,children:t.jsxs(n,{children:[t.jsx(e,{title:"Tile title"}),t.jsx(e,{title:"Tile title"})]})}),t.jsx(l,{title:"With 3 tiles",style:i.part,children:t.jsxs(n,{children:[t.jsx(e,{title:"Tile title"}),t.jsx(e,{title:"Tile title"}),t.jsx(e,{title:"Tile title"})]})})]});r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Tile" description={["This component creates a tile. "]}>
      <StoryPart title="Default" style={styles.part}>
        <Tile />
      </StoryPart>

      <StoryPart title="With anchored alert" style={styles.part}>
        <Tile footer={<LakeAlert anchored={true} variant="error" title="It is an anchored alert" />} />
      </StoryPart>

      <StoryPart title="With neutral anchored alert" style={styles.part}>
        <Tile footer={<LakeAlert anchored={true} variant="neutral" title="It is an anchored alert">
              <LakeText>Helloworld</LakeText>
            </LakeAlert>} />
      </StoryPart>

      <StoryPart title="With icon and title" style={styles.part}>
        <Tile icon={<Icon name="document-regular" size={20} />} title="Tile title" />
      </StoryPart>

      <StoryPart title="With description" style={styles.part}>
        <Tile title="Tile title" description="It is a description" />
      </StoryPart>

      <StoryPart title="With header end" style={styles.part}>
        <Tile title="Tile title" headerEnd={<LakeText>It is a text</LakeText>} />
      </StoryPart>

      <StoryPart title="With footer" style={styles.part}>
        <Tile title="Tile title" footer={<>
              <Space width={48} />
              <LakeText style={styles.footer}>It is a text</LakeText>
            </>} />
      </StoryPart>

      <StoryPart title="Hovered" style={styles.part}>
        <Tile hovered={true} />
      </StoryPart>

      <StoryPart title="Selected" style={styles.part}>
        <Tile selected={true} />
      </StoryPart>

      <StoryPart title="Disabled" style={styles.part}>
        <Tile title="Tile title" disabled={true} />
      </StoryPart>

      <StoryPart title="With 2 tiles" style={styles.part}>
        <TileGrid>
          <Tile title="Tile title" />
          <Tile title="Tile title" />
        </TileGrid>
      </StoryPart>

      <StoryPart title="With 3 tiles" style={styles.part}>
        <TileGrid>
          <Tile title="Tile title" />
          <Tile title="Tile title" />
          <Tile title="Tile title" />
        </TileGrid>
      </StoryPart>
    </StoryBlock>;
}`,...r.parameters?.docs?.source}}};const I=["Default"];export{r as Default,I as __namedExportsOrder,k as default};
//# sourceMappingURL=Tile.stories-DejqIPj8.js.map
