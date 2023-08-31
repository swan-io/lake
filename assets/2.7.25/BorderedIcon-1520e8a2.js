import{S as o,r as n,c as e,j as u,I as c}from"./Space-c91ca29d.js";import{B as g}from"./Box-0e9b987c.js";const t=o.create({base:{borderRadius:n[8],borderWidth:1,borderColor:e.current[100],backgroundColor:e.current[50]}}),v=({name:r,size:l=96,padding:i=0,color:a="current"})=>{const d=l-i*2;return u(g,{alignItems:"center",justifyContent:"center",style:[t.base,{width:l,height:l,borderColor:e[a][100],backgroundColor:e[a][50]}],children:u(c,{name:r,size:d,color:e[a][500]})})};try{v.displayName="BorderedIcon",v.__docgenInfo={description:"",displayName:"BorderedIcon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"lake-building-bank"'},{value:'"lake-calendar-arrow-swap"'},{value:'"lake-card"'},{value:'"lake-card-filled"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"check-filled"'},{value:'"check-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-regular"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},size:{defaultValue:{value:"96"},description:"",name:"size",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"0"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:"0"},{value:"4"},{value:"8"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"72"},{value:"96"}]}},color:{defaultValue:{value:"current"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}}}}}catch{}export{v as B};
//# sourceMappingURL=BorderedIcon-1520e8a2.js.map
