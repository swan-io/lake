import{S as h,j as r,a as t,L as n,I as p,F as T,b as S}from"./Space-t6mwz88k.js";import{L as o}from"./LakeAlert-DKBGLMPR.js";import{T as e,a as s}from"./Tile-RPBTYIu2.js";import{S as u,a as i}from"./_StoriesComponents-tD2zAERO.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-4g5l5LRQ.js";import"./index-jmm5gWkb.js";import"./commonStyles-_QWv9FCr.js";const l=h.create({part:{padding:6},footer:{padding:12}}),g={title:"Layout/Tile",component:e},a=()=>r(u,{title:"Tile",description:["This component creates a tile. "],children:[t(i,{title:"Default",style:l.part,children:t(e,{})}),t(i,{title:"With anchored alert",style:l.part,children:t(e,{footer:t(o,{anchored:!0,variant:"error",title:"It is an anchored alert"})})}),t(i,{title:"With neutral anchored alert",style:l.part,children:t(e,{footer:t(o,{anchored:!0,variant:"neutral",title:"It is an anchored alert",children:t(n,{children:"Helloworld"})})})}),t(i,{title:"With icon and title",style:l.part,children:t(e,{icon:t(p,{name:"document-regular",size:20}),title:"Tile title"})}),t(i,{title:"With description",style:l.part,children:t(e,{title:"Tile title",description:"It is a description"})}),t(i,{title:"With header end",style:l.part,children:t(e,{title:"Tile title",headerEnd:t(n,{children:"It is a text"})})}),t(i,{title:"With footer",style:l.part,children:t(e,{title:"Tile title",footer:r(T,{children:[t(S,{width:48}),t(n,{style:l.footer,children:"It is a text"})]})})}),t(i,{title:"Hovered",style:l.part,children:t(e,{hovered:!0})}),t(i,{title:"Selected",style:l.part,children:t(e,{selected:!0})}),t(i,{title:"Disabled",style:l.part,children:t(e,{title:"Tile title",disabled:!0})}),t(i,{title:"With 2 tiles",style:l.part,children:r(s,{children:[t(e,{title:"Tile title"}),t(e,{title:"Tile title"})]})}),t(i,{title:"With 3 tiles",style:l.part,children:r(s,{children:[t(e,{title:"Tile title"}),t(e,{title:"Tile title"}),t(e,{title:"Tile title"})]})})]});var d,c,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(y=(c=a.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const D=["Default"];export{a as Default,D as __namedExportsOrder,g as default};
//# sourceMappingURL=Tile.stories-pT0y4s0x.js.map
