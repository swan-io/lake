import{X as oe,Y as b,_ as xe,V as ee,s as te,c as m,t as L,j as r,L as _e,S as N,d as se,r as Ce,g as le,i as Q,H as ke,E as Ee,G as ne,B as D,I as U,h as Le,T as A}from"./Space-Bx5QDxXb.js";import{r as c}from"./index-BwDkhjyp.js";import{u as je}from"./useBoolean-DLYn8X0a.js";import{u as Pe}from"./useDisclosure-DRaTvJnZ.js";import{g as He}from"./array-rjEBP2Ry.js";import{s as Re}from"./string-DfCSWG4p.js";import{k as de,_ as we,V as Me,a as Fe,P as Te,F as Ve}from"./Popover-CbrYZVh_.js";import{T as Ne,a as Be}from"./Pressable-Bn1ZMN3h.js";import{T as ce}from"./Tag-Bquq2Kwv.js";import{M as Z}from"./index-COed5YRa.js";import{_ as q}from"./extends-CCbyfPlC.js";import{S as ye,a as j}from"./_StoriesComponents-AhKOd4N3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./BottomPanel-C6LweyEn.js";import"./commonStyles-t4XfA7cz.js";import"./useBodyClassName-Ds2flwH7.js";import"./math-CMPBFgTl.js";import"./FocusTrap-aGNEhBTL.js";import"./a11y-DXvpDVrG.js";import"./Suspendable-B5EH3QQQ.js";import"./index-CWXQFdbZ.js";import"./TransitionView-oHMWxRhX.js";import"./useResponsive-Dg25MDxx.js";import"./function-C7LgQW2P.js";var $e=["ItemSeparatorComponent","SectionSeparatorComponent","renderItem","renderSectionFooter","renderSectionHeader","sections","stickySectionHeadersEnabled"];class Ge extends c.PureComponent{constructor(){super(...arguments),this._keyExtractor=(e,t)=>{var a=this._subExtractor(t);return a&&a.key||String(t)},this._convertViewable=e=>{var t;oe(e.index!=null,"Received a broken ViewToken");var a=this._subExtractor(e.index);if(!a)return null;var s=a.section.keyExtractor,i=this.props.keyExtractor||de,n=s!=null?s(e.item,a.index):i(e.item,(t=a.index)!==null&&t!==void 0?t:0);return b(b({},e),{},{index:a.index,key:n,section:a.section})},this._onViewableItemsChanged=e=>{var t=e.viewableItems,a=e.changed,s=this.props.onViewableItemsChanged;s!=null&&s({viewableItems:t.map(this._convertViewable,this).filter(Boolean),changed:a.map(this._convertViewable,this).filter(Boolean)})},this._renderItem=e=>t=>{var a=t.item,s=t.index,i=this._subExtractor(s);if(!i)return null;var n=i.index;if(n==null){var d=i.section;if(i.header===!0){var u=this.props.renderSectionHeader;return u?u({section:d}):null}else{var S=this.props.renderSectionFooter;return S?S({section:d}):null}}else{var f=i.section.renderItem||this.props.renderItem,p=this._getSeparatorComponent(s,i,e);return oe(f,"no renderItem!"),c.createElement(Oe,{SeparatorComponent:p,LeadingSeparatorComponent:n===0?this.props.SectionSeparatorComponent:void 0,cellKey:i.key,index:n,item:a,leadingItem:i.leadingItem,leadingSection:i.leadingSection,prevCellKey:(this._subExtractor(s-1)||{}).key,setSelfHighlightCallback:this._setUpdateHighlightFor,setSelfUpdatePropsCallback:this._setUpdatePropsFor,updateHighlightFor:this._updateHighlightFor,updatePropsFor:this._updatePropsFor,renderItem:f,section:i.section,trailingItem:i.trailingItem,trailingSection:i.trailingSection,inverted:!!this.props.inverted})}},this._updatePropsFor=(e,t)=>{var a=this._updatePropsMap[e];a!=null&&a(t)},this._updateHighlightFor=(e,t)=>{var a=this._updateHighlightMap[e];a!=null&&a(t)},this._setUpdateHighlightFor=(e,t)=>{t!=null?this._updateHighlightMap[e]=t:delete this._updateHighlightFor[e]},this._setUpdatePropsFor=(e,t)=>{t!=null?this._updatePropsMap[e]=t:delete this._updatePropsMap[e]},this._updateHighlightMap={},this._updatePropsMap={},this._captureRef=e=>{this._listRef=e}}scrollToLocation(e){for(var t=e.itemIndex,a=0;a<e.sectionIndex;a++)t+=this.props.getItemCount(this.props.sections[a].data)+2;var s=e.viewOffset||0;if(this._listRef!=null){if(e.itemIndex>0&&this.props.stickySectionHeadersEnabled){var i=this._listRef.__getFrameMetricsApprox(t-e.itemIndex,this._listRef.props);s+=i.length}var n=b(b({},e),{},{viewOffset:s,index:t});this._listRef.scrollToIndex(n)}}getListRef(){return this._listRef}render(){var e=this.props;e.ItemSeparatorComponent,e.SectionSeparatorComponent,e.renderItem,e.renderSectionFooter,e.renderSectionHeader,e.sections,e.stickySectionHeadersEnabled;for(var t=xe(e,$e),a=this.props.ListHeaderComponent?1:0,s=this.props.stickySectionHeadersEnabled?[]:void 0,i=0,n=we(this.props.sections),d;!(d=n()).done;){var u=d.value;s!=null&&s.push(i+a),i+=2,i+=this.props.getItemCount(u.data)}var S=this._renderItem(i);return c.createElement(Me,q({},t,{keyExtractor:this._keyExtractor,stickyHeaderIndices:s,renderItem:S,data:this.props.sections,getItem:(f,p)=>this._getItem(this.props,f,p),getItemCount:()=>i,onViewableItemsChanged:this.props.onViewableItemsChanged?this._onViewableItemsChanged:void 0,ref:this._captureRef}))}_getItem(e,t,a){if(!t)return null;for(var s=a-1,i=0;i<t.length;i++){var n=t[i],d=n.data,u=e.getItemCount(d);if(s===-1||s===u)return n;if(s<u)return e.getItem(d,s);s-=u+2}return null}_subExtractor(e){for(var t=e,a=this.props,s=a.getItem,i=a.getItemCount,n=a.keyExtractor,d=a.sections,u=0;u<d.length;u++){var S=d[u],f=S.data,p=S.key||String(u);if(t-=1,t>=i(f)+1)t-=i(f)+1;else{if(t===-1)return{section:S,key:p+":header",index:null,header:!0,trailingSection:d[u+1]};if(t===i(f))return{section:S,key:p+":footer",index:null,header:!1,trailingSection:d[u+1]};var y=S.keyExtractor||n||de;return{section:S,key:p+":"+y(s(f,t),t),index:t,leadingItem:s(f,t-1),leadingSection:d[u-1],trailingItem:s(f,t+1),trailingSection:d[u+1]}}}}_getSeparatorComponent(e,t,a){if(t=t||this._subExtractor(e),!t)return null;var s=t.section.ItemSeparatorComponent||this.props.ItemSeparatorComponent,i=this.props.SectionSeparatorComponent,n=e===a-1,d=t.index===this.props.getItemCount(t.section.data)-1;return i&&d?i:s&&!d&&!n?s:null}}function Oe(o){var e=o.LeadingSeparatorComponent,t=o.SeparatorComponent,a=o.cellKey,s=o.prevCellKey,i=o.setSelfHighlightCallback,n=o.updateHighlightFor,d=o.setSelfUpdatePropsCallback,u=o.updatePropsFor,S=o.item,f=o.index,p=o.section,y=o.inverted,x=c.useState(!1),G=x[0],H=x[1],C=c.useState(!1),k=C[0],_=C[1],R=c.useState({leadingItem:o.leadingItem,leadingSection:o.leadingSection,section:o.section,trailingItem:o.item,trailingSection:o.trailingSection}),w=R[0],I=R[1],O=c.useState({leadingItem:o.item,leadingSection:o.leadingSection,section:o.section,trailingItem:o.trailingItem,trailingSection:o.trailingSection}),W=O[0],M=O[1];c.useEffect(()=>(i(a,_),d(a,M),()=>{d(a,null),i(a,null)}),[a,i,M,d]);var K={highlight:()=>{H(!0),_(!0),s!=null&&n(s,!0)},unhighlight:()=>{H(!1),_(!1),s!=null&&n(s,!1)},updateProps:(z,E)=>{z==="leading"?e!=null?I(b(b({},w),E)):s!=null&&u(s,b(b({},w),E)):z==="trailing"&&t!=null&&M(b(b({},W),E))}},F=o.renderItem({item:S,index:f,section:p,separators:K}),T=e!=null&&c.createElement(e,q({highlighted:G},w)),V=t!=null&&c.createElement(t,q({highlighted:k},W));return T||V?c.createElement(ee,null,y===!1?T:V,F,y===!1?V:T):F}var We=["stickySectionHeadersEnabled"];class ze extends c.PureComponent{constructor(){super(...arguments),this._captureRef=e=>{this._wrapperListRef=e}}scrollToLocation(e){this._wrapperListRef!=null&&this._wrapperListRef.scrollToLocation(e)}recordInteraction(){var e=this._wrapperListRef&&this._wrapperListRef.getListRef();e&&e.recordInteraction()}flashScrollIndicators(){var e=this._wrapperListRef&&this._wrapperListRef.getListRef();e&&e.flashScrollIndicators()}getScrollResponder(){var e=this._wrapperListRef&&this._wrapperListRef.getListRef();if(e)return e.getScrollResponder()}getScrollableNode(){var e=this._wrapperListRef&&this._wrapperListRef.getListRef();if(e)return e.getScrollableNode()}render(){var e=this.props,t=e.stickySectionHeadersEnabled,a=xe(e,We),s=t??Fe.OS==="ios";return c.createElement(Ge,q({},a,{stickySectionHeadersEnabled:s,ref:this._captureRef,getItemCount:i=>i.length,getItem:(i,n)=>i[n]}))}}const De=te.create({base:{color:m.negative[500],lineHeight:L.h1.lineHeight,minHeight:32,paddingHorizontal:3,paddingVertical:4}}),be=({message:o="",style:e})=>o!==""?r.jsx(_e,{variant:"smallRegular",style:[De.base,e],children:o}):r.jsx(N,{height:32});be.__docgenInfo={description:"",methods:[],displayName:"InputError",props:{message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"TextStyle"}],raw:"StyleProp<TextStyle>"},description:""}}};const Ue=120,Ae=32,qe=10.5,g=te.create({base:{...L.regular,backgroundColor:se.accented,borderColor:m.gray[100],borderRadius:Ce[6],borderWidth:1,cursor:"default",overflow:"hidden",transitionDuration:"150ms",transitionProperty:"border-color, box-shadow"},errored:{borderColor:m.negative[500]},tag:{marginRight:4,marginVertical:2},hovered:{boxShadow:le.tile},focused:{borderColor:m.gray[500],boxShadow:le.tile,outlineStyle:"none"},disabled:{backgroundColor:m.gray[50],borderColor:m.gray[100],cursor:"not-allowed"},actions:{marginVertical:"auto",position:"absolute",bottom:0,top:0,right:20},placeholder:{...L.regular,color:m.gray[300],userSelect:"none"},list:{marginVertical:4,maxHeight:Ae*qe,minHeight:224},filterContainer:{flexGrow:1,flexShrink:1,margin:16},filterInput:{...L.regular,backgroundColor:se.accented,borderColor:m.gray[100],borderRadius:4,borderWidth:1,flexGrow:1,flexShrink:1,height:40,outlineStyle:"none",paddingHorizontal:12,paddingLeft:40,placeholderTextColor:m.gray[300]},filterFocused:{borderColor:m.gray[200]},searchIcon:{position:"absolute",left:14},tagsList:{flexWrap:"wrap",maxHeight:Ue,minHeight:40,overflowY:"auto",paddingHorizontal:16,paddingRight:60,paddingVertical:8},groupTitleBase:{alignItems:"center",flexDirection:"row",flexGrow:1,flexShrink:1,justifyContent:"space-between",paddingHorizontal:16,paddingVertical:12,transitionDuration:"200ms",transitionProperty:"background-color"},groupTitle:{...L.semibold,userSelect:"none"},line:{...L.regular,paddingHorizontal:16,paddingVertical:8,transitionDuration:"200ms",transitionProperty:"background-color",userSelect:"none"},lineInGroup:{paddingLeft:24},emptyList:{height:136},emptyListText:{color:m.gray.primary}}),re=c.memo(({color:o="gray",disabled:e=!1,emptyResultText:t,enableGroups:a=!0,filterPlaceholder:s,items:i,onValueChange:n,placeholder:d,renderTagGroup:u,error:S,style:f,values:p,id:y})=>{const[x,G]=c.useState(""),[H,C]=je(!1),k=c.useRef(!1),_=c.useRef(null),R=c.useRef(null),w=c.useRef(null),[I,{open:O,close:W}]=Pe(!1),M=m[o][50],K=m[o][100];c.useEffect(()=>{I||G("")},[I]),c.useEffect(()=>{var l,h;if(k.current){const v=(l=_.current)==null?void 0:l.scrollHeight;(h=_.current)==null||h.scrollTo({top:v})}k.current=!1},[p]);const F=l=>{k.current=!0,n([...p,l.value])},T=l=>{n(p.filter(h=>h!==l.value))},V=()=>{n([])},z=l=>{k.current=!0;const h=l.map(J=>J.value),v=[...new Set([...p,...h])];n(v)},E=c.useMemo(()=>i.reduce((l,h)=>(l[h.value]=h,l),{}),[i]),Y=c.useMemo(()=>p.map(l=>E[l]).filter(Q),[p,E]),X=c.useMemo(()=>{const l=i.filter(v=>!p.includes(v.value)),h=x.trim().toLowerCase();return h===""?l:l.filter(({label:v})=>v.toLowerCase().includes(h))},[x,i,p]),ve=c.useMemo(()=>ke.filterMap(Ee.entries(He(X,({group:l})=>l)),([l,h])=>h===void 0?ne.None():ne.Some({title:l,data:h})),[X]),ie=c.useMemo(()=>r.jsxs(D,{direction:"row",alignItems:"center",style:g.filterContainer,children:[r.jsx(Ne,{autoComplete:"off",inputMode:"search",multiline:!1,rows:1,onChangeText:l=>G(l),placeholder:s,value:x,onFocus:C.on,onBlur:C.off,style:[g.filterInput,H&&g.filterFocused]}),r.jsx(U,{name:"search-filled",color:m[o].primary,size:20,style:g.searchIcon})]}),[x,H,C,s,o]),ae=c.useMemo(()=>r.jsxs(D,{justifyContent:"center",alignItems:"center",style:g.emptyList,children:[r.jsx(U,{name:"clipboard-search-regular",size:24,color:m.gray.primary}),Le(t)&&r.jsxs(r.Fragment,{children:[r.jsx(N,{height:8}),r.jsx(A,{style:g.emptyListText,children:t})]})]}),[t]);return r.jsxs(ee,{style:f,children:[r.jsxs(Z,{id:y,ref:R,"aria-haspopup":"listbox",role:"button","aria-expanded":I,disabled:e,onPress:O,style:({hovered:l,focused:h})=>[g.base,l&&g.hovered,(h||I)&&g.focused,e&&g.disabled,Q(S)&&g.errored],children:[r.jsx(D,{ref:_,alignItems:"center",direction:"row",style:g.tagsList,children:Y.length>0?Y.map(l=>r.jsx(ce,{color:o,onPressRemove:e?void 0:()=>T(l),style:g.tag,children:l.label},l.value)):d!==""?r.jsx(A,{role:"label",numberOfLines:1,style:g.placeholder,children:d}):null}),r.jsxs(D,{direction:"row",alignItems:"center",style:g.actions,children:[Y.length>=1&&!e&&r.jsxs(r.Fragment,{children:[r.jsx(Z,{role:"button",onPress:V,children:r.jsx(U,{name:"dismiss-filled",color:m.gray.primary,size:15})}),r.jsx(N,{width:8})]}),r.jsx(U,{color:m.gray.primary,name:I?"chevron-up-filled":"chevron-down-filled",size:20})]})]}),r.jsx(Te,{role:"listbox",matchReferenceWidth:!0,onDismiss:W,referenceRef:R,returnFocus:!0,visible:I,children:r.jsx(ee,{style:g.list,children:a?r.jsx(ze,{role:"listbox","aria-multiselectable":!0,keyExtractor:(l,h)=>`group-field-${l.value}-${h}`,extraData:x,ListHeaderComponent:ie,ListEmptyComponent:ae,ListFooterComponent:r.jsx(N,{height:16}),sections:ve,renderSectionHeader:({section:{title:l,data:h}})=>r.jsxs(Z,{role:"listitem",onPress:()=>z(h),style:({hovered:v,pressed:J,focused:Ie})=>[g.groupTitleBase,(v||Ie)&&{backgroundColor:M},J&&{backgroundColor:K}],children:[r.jsx(A,{numberOfLines:1,style:g.groupTitle,children:l}),Q(u)&&r.jsx(ce,{color:o,children:u(h)})]}),renderItem:({item:l})=>r.jsx(ue,{color:o,filter:x,item:l,handleSelectItem:F,style:g.lineInGroup})}):r.jsx(Ve,{ref:w,role:"list",data:X,extraData:x,keyExtractor:l=>`field-${l.value}`,ListHeaderComponent:ie,ListEmptyComponent:ae,ListFooterComponent:r.jsx(N,{height:8}),renderItem:({item:l})=>r.jsx(ue,{color:o,filter:x,item:l,handleSelectItem:F})})})}),r.jsx(be,{message:S})]})}),ue=({item:o,color:e,filter:t,handleSelectItem:a,style:s})=>{const{label:i,disabled:n=!1}=o,d=t.trim().toLowerCase(),u=m[e][50],S=m[e][100],f=c.useMemo(()=>n||d===""?i:Re(i,d),[i,n,d]);return r.jsx(Be,{role:"listitem",disabled:n,numberOfLines:1,onPress:()=>a(o),style:({hovered:p,pressed:y})=>[g.line,s,p&&{backgroundColor:u},y&&{backgroundColor:S},n&&{backgroundColor:m.gray[50],color:m.gray[100]}],children:typeof f=="string"?f:f.map((p,y)=>p.toLowerCase()===d?r.jsx(A,{style:{color:e},children:p},y):p)})};re.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{color:{defaultValue:{value:'"gray"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},enableGroups:{defaultValue:{value:"true",computed:!1},required:!1}}};const Ke=te.create({select:{maxWidth:400}}),vt={title:"Forms/MultiSelect",component:re},Ye=[{label:"Camille",value:"camille",group:"C"},{label:"Charlotte",value:"charlotte",group:"C"},{label:"Francis",value:"francis",group:"F"},{label:"Émilie",value:"emilie",group:"E"},{label:"François",value:"francois",group:"F"},{label:"Laura",value:"laura",group:"L"},{label:"Marie-Anne",value:"marie_anne",group:"M"},{label:"Natasha",value:"natasha",group:"N",disabled:!0},{label:"Nicolas",value:"nicolas",group:"N"},{label:"Pierre",value:"pierre",group:"P"}],P=({initialValues:o=[],...e})=>{const[t,a]=c.useState(o);return r.jsx(re,{placeholder:"Select people...",filterPlaceholder:"Search...",emptyResultText:"No result",values:t,items:Ye,onValueChange:a,style:Ke.select,...e})},B=()=>r.jsxs(ye,{title:"MultiSelect variations",children:[r.jsx(j,{title:"Default",children:r.jsx(P,{})}),r.jsx(j,{title:"Without groups",children:r.jsx(P,{enableGroups:!1})}),r.jsx(j,{title:"Disabled",children:r.jsx(P,{disabled:!0})}),r.jsx(j,{title:"Disabled with a value",children:r.jsx(P,{disabled:!0,initialValues:["charlotte"]})}),r.jsx(j,{title:"Without any option",children:r.jsx(P,{items:[]})})]}),$=()=>r.jsx(ye,{title:"MultiSelect colors",children:Object.keys(m).map(o=>r.jsx(j,{title:o,children:r.jsx(P,{color:o})},o))});B.__docgenInfo={description:"",methods:[],displayName:"Variations"};$.__docgenInfo={description:"",methods:[],displayName:"Colors"};var pe,he,me;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <StoryBlock title="MultiSelect variations">
      <StoryPart title="Default">
        <EditableMultiSelect />
      </StoryPart>

      <StoryPart title="Without groups">
        <EditableMultiSelect enableGroups={false} />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableMultiSelect disabled={true} />
      </StoryPart>

      <StoryPart title="Disabled with a value">
        <EditableMultiSelect disabled={true} initialValues={["charlotte"]} />
      </StoryPart>

      <StoryPart title="Without any option">
        <EditableMultiSelect items={[]} />
      </StoryPart>
    </StoryBlock>;
}`,...(me=(he=B.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var ge,fe,Se;$.parameters={...$.parameters,docs:{...(ge=$.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <StoryBlock title="MultiSelect colors">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableMultiSelect color={(color as ColorVariants)} />
        </StoryPart>)}
    </StoryBlock>;
}`,...(Se=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};const It=["Variations","Colors"];export{$ as Colors,B as Variations,It as __namedExportsOrder,vt as default};
//# sourceMappingURL=MultiSelect.stories-5QHxkQau.js.map