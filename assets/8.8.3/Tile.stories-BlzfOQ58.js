import{s as y,j as t,L as s,I as h,S as p}from"./ScrollView-Boi5CiBf.js";import{L as a}from"./LakeAlert-CSYHJwmm.js";import{T as e,a as n}from"./Tile-CCmcPdna.js";import{S as T,a as i}from"./_StoriesComponents-6_K3irzY.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./commonStyles-t4XfA7cz.js";import"./useResponsive-CWYKQO6x.js";const l=y.create({part:{padding:6},footer:{padding:12}}),I={title:"Layout/Tile",component:e},r=()=>t.jsxs(T,{title:"Tile",description:["This component creates a tile. "],children:[t.jsx(i,{title:"Default",style:l.part,children:t.jsx(e,{})}),t.jsx(i,{title:"With anchored alert",style:l.part,children:t.jsx(e,{footer:t.jsx(a,{anchored:!0,variant:"error",title:"It is an anchored alert"})})}),t.jsx(i,{title:"With neutral anchored alert",style:l.part,children:t.jsx(e,{footer:t.jsx(a,{anchored:!0,variant:"neutral",title:"It is an anchored alert",children:t.jsx(s,{children:"Helloworld"})})})}),t.jsx(i,{title:"With icon and title",style:l.part,children:t.jsx(e,{icon:t.jsx(h,{name:"document-regular",size:20}),title:"Tile title"})}),t.jsx(i,{title:"With description",style:l.part,children:t.jsx(e,{title:"Tile title",description:"It is a description"})}),t.jsx(i,{title:"With header end",style:l.part,children:t.jsx(e,{title:"Tile title",headerEnd:t.jsx(s,{children:"It is a text"})})}),t.jsx(i,{title:"With footer",style:l.part,children:t.jsx(e,{title:"Tile title",footer:t.jsxs(t.Fragment,{children:[t.jsx(p,{width:48}),t.jsx(s,{style:l.footer,children:"It is a text"})]})})}),t.jsx(i,{title:"Hovered",style:l.part,children:t.jsx(e,{hovered:!0})}),t.jsx(i,{title:"Selected",style:l.part,children:t.jsx(e,{selected:!0})}),t.jsx(i,{title:"Disabled",style:l.part,children:t.jsx(e,{title:"Tile title",disabled:!0})}),t.jsx(i,{title:"With 2 tiles",style:l.part,children:t.jsxs(n,{children:[t.jsx(e,{title:"Tile title"}),t.jsx(e,{title:"Tile title"})]})}),t.jsx(i,{title:"With 3 tiles",style:l.part,children:t.jsxs(n,{children:[t.jsx(e,{title:"Tile title"}),t.jsx(e,{title:"Tile title"}),t.jsx(e,{title:"Tile title"})]})})]});r.__docgenInfo={description:"",methods:[],displayName:"Default"};var o,d,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const L=["Default"];export{r as Default,L as __namedExportsOrder,I as default};
//# sourceMappingURL=Tile.stories-BlzfOQ58.js.map
