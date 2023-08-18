import{S as f,a as r,j as t,L as n,I as L,F as W,b as x}from"./Space-f85095f8.js";import{L as o}from"./LakeAlert-09a14a7e.js";import{T as e,a as s}from"./Tile-58f53060.js";import{S as k,a as l}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-b9a8c83f.js";import"./commonStyles-d52fedae.js";import"./Box-f4fbfbba.js";const i=f.create({part:{padding:6},footer:{padding:12}}),A={title:"Layout/Tile",component:e},a=({icon:h,paddingVertical:p,paddingHorizontal:T,numberOfLines:S,hovered:u,disabled:m,selected:P})=>r(k,{title:"Tile",description:["This component creates a tile. "],children:[t(l,{title:"Default",style:i.part,children:t(e,{icon:h,paddingVertical:p,paddingHorizontal:T,numberOfLines:S,hovered:u,disabled:m,selected:P})}),t(l,{title:"With anchored alert",style:i.part,children:t(e,{footer:t(o,{anchored:!0,variant:"error",title:"It is an anchored alert"})})}),t(l,{title:"With neutral anchored alert",style:i.part,children:t(e,{footer:t(o,{anchored:!0,variant:"neutral",title:"It is an anchored alert",children:t(n,{children:"Helloworld"})})})}),t(l,{title:"With icon and title",style:i.part,children:t(e,{icon:t(L,{name:"document-regular",size:20}),title:"Tile title"})}),t(l,{title:"With description",style:i.part,children:t(e,{title:"Tile title",description:"It is a description"})}),t(l,{title:"With header end",style:i.part,children:t(e,{title:"Tile title",headerEnd:t(n,{children:"It is a text"})})}),t(l,{title:"With footer",style:i.part,children:t(e,{title:"Tile title",footer:r(W,{children:[t(x,{width:48}),t(n,{style:i.footer,children:"It is a text"})]})})}),t(l,{title:"Hovered",style:i.part,children:t(e,{hovered:!0})}),t(l,{title:"Selected",style:i.part,children:t(e,{selected:!0})}),t(l,{title:"Disabled",style:i.part,children:t(e,{title:"Tile title",disabled:!0})}),t(l,{title:"With 2 tiles",style:i.part,children:r(s,{children:[t(e,{title:"Tile title"}),t(e,{title:"Tile title"})]})}),t(l,{title:"With 3 tiles",style:i.part,children:r(s,{children:[t(e,{title:"Tile title"}),t(e,{title:"Tile title"}),t(e,{title:"Tile title"})]})})]});var d,c,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  icon,
  paddingVertical,
  paddingHorizontal,
  numberOfLines,
  hovered,
  disabled,
  selected
}: TileProps) => {
  return <StoryBlock title="Tile" description={["This component creates a tile. "]}>
      <StoryPart title="Default" style={styles.part}>
        <Tile icon={icon} paddingVertical={paddingVertical} paddingHorizontal={paddingHorizontal} numberOfLines={numberOfLines} hovered={hovered} disabled={disabled} selected={selected} />
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
}`,...(y=(c=a.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const O=["Default"];export{a as Default,O as __namedExportsOrder,A as default};
//# sourceMappingURL=Tile.stories-ba71a790.js.map
