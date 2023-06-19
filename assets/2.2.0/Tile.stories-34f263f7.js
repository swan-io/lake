import{S as c,j as r,a as t,L as n,F as p,b as T}from"./Space-7ef2bf1f.js";import{I as h}from"./Icon-620f8419.js";import{L as S}from"./LakeAlert-efa9c665.js";import{T as e,a as s}from"./Tile-641c3725.js";import{S as m,a as l}from"./_StoriesComponents-1c8fe2d9.js";import"./extends-98964cd2.js";import"./index-ebeaab24.js";import"./Svg-3c682173.js";import"./commonStyles-d52fedae.js";import"./index-afc058e4.js";const i=c.create({part:{padding:6},footer:{padding:12}}),D={title:"Layout/Tile",component:e},a=()=>r(m,{title:"Tile",description:["This component creates a tile. "],children:[t(l,{title:"Default",style:i.part,children:t(e,{})}),t(l,{title:"With anchored alert",style:i.part,children:t(e,{footer:t(S,{anchored:!0,variant:"error",title:"It is an anchored alert"})})}),t(l,{title:"With icon and title",style:i.part,children:t(e,{icon:t(h,{name:"document-regular",size:20}),title:"Tile title"})}),t(l,{title:"With description",style:i.part,children:t(e,{title:"Tile title",description:"It is a description"})}),t(l,{title:"With header end",style:i.part,children:t(e,{title:"Tile title",headerEnd:t(n,{children:"It is a text"})})}),t(l,{title:"With footer",style:i.part,children:t(e,{title:"Tile title",footer:r(p,{children:[t(T,{width:48}),t(n,{style:i.footer,children:"It is a text"})]})})}),t(l,{title:"Hovered",style:i.part,children:t(e,{hovered:!0})}),t(l,{title:"Selected",style:i.part,children:t(e,{selected:!0})}),t(l,{title:"Disabled",style:i.part,children:t(e,{title:"Tile title",disabled:!0})}),t(l,{title:"With 2 tiles",style:i.part,children:r(s,{children:[t(e,{title:"Tile title"}),t(e,{title:"Tile title"})]})}),t(l,{title:"With 3 tiles",style:i.part,children:r(s,{children:[t(e,{title:"Tile title"}),t(e,{title:"Tile title"}),t(e,{title:"Tile title"})]})})]});var o,d,y;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <StoryBlock title="Tile" description={["This component creates a tile. "]}>
      <StoryPart title="Default" style={styles.part}>
        <Tile />
      </StoryPart>

      <StoryPart title="With anchored alert" style={styles.part}>
        <Tile footer={<LakeAlert anchored={true} variant="error" title="It is an anchored alert" />} />
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
}`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,D as default};
//# sourceMappingURL=Tile.stories-34f263f7.js.map
