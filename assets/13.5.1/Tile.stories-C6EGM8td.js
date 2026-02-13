import{j as t,L as s,I as o,S as d,s as c}from"./ScrollView-BHyA0YQe.js";import{L as a}from"./LakeAlert-BwKI1rRr.js";import{T as e,a as n}from"./Tile-CZiDjyGO.js";import{S as y,a as r}from"./_StoriesComponents-B5dTlONB.js";import"./iframe-D68wIgOL.js";import"./preload-helper-D1IIBeq1.js";import"./index-kFt5shej.js";import"./commonStyles-BBEkV6IC.js";import"./useResponsive-BUOCHvLv.js";import"./Tag-D_3JQpa3.js";import"./index-CFkdFAO1.js";import"./extends-CF3RwP-h.js";import"./ResponsiveContainer-DOjPxMwU.js";import"./Separator-Rc6ZyfHq.js";const i=c.create({part:{padding:6},footer:{padding:12}}),v={title:"Layout/Tile",component:e},l=()=>t.jsxs(y,{title:"Tile",description:["This component creates a tile. "],children:[t.jsx(r,{title:"Default",style:i.part,children:t.jsx(e,{})}),t.jsx(r,{title:"With anchored alert",style:i.part,children:t.jsx(e,{footer:t.jsx(a,{anchored:!0,variant:"error",title:"It is an anchored alert"})})}),t.jsx(r,{title:"With neutral anchored alert",style:i.part,children:t.jsx(e,{footer:t.jsx(a,{anchored:!0,variant:"neutral",title:"It is an anchored alert",children:t.jsx(s,{children:"Helloworld"})})})}),t.jsx(r,{title:"With icon and title",style:i.part,children:t.jsx(e,{icon:t.jsx(o,{name:"document-regular",size:20}),title:"Tile title"})}),t.jsx(r,{title:"With description",style:i.part,children:t.jsx(e,{title:"Tile title",description:"It is a description"})}),t.jsx(r,{title:"With header end",style:i.part,children:t.jsx(e,{title:"Tile title",headerEnd:t.jsx(s,{children:"It is a text"})})}),t.jsx(r,{title:"With footer",style:i.part,children:t.jsx(e,{title:"Tile title",footer:t.jsxs(t.Fragment,{children:[t.jsx(d,{width:48}),t.jsx(s,{style:i.footer,children:"It is a text"})]})})}),t.jsx(r,{title:"Hovered",style:i.part,children:t.jsx(e,{hovered:!0})}),t.jsx(r,{title:"Selected",style:i.part,children:t.jsx(e,{selected:!0})}),t.jsx(r,{title:"Disabled",style:i.part,children:t.jsx(e,{title:"Tile title",disabled:!0})}),t.jsx(r,{title:"With 2 tiles",style:i.part,children:t.jsxs(n,{children:[t.jsx(e,{title:"Tile title"}),t.jsx(e,{title:"Tile title"})]})}),t.jsx(r,{title:"With 3 tiles",style:i.part,children:t.jsxs(n,{children:[t.jsx(e,{title:"Tile title"}),t.jsx(e,{title:"Tile title"}),t.jsx(e,{title:"Tile title"})]})})]});l.__docgenInfo={description:"",methods:[],displayName:"Default"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const g=["Default"];export{l as Default,g as __namedExportsOrder,v as default};
//# sourceMappingURL=Tile.stories-C6EGM8td.js.map
