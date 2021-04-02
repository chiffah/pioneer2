/*! For license information please see main.2671894fa8ca7bea809b.js.LICENSE.txt */
  fragment MemberFields on Membership {
    id
    rootAccount
    controllerAccount
    handle
    name
    about
    avatarUri
    isVerified
    inviteCount
  }
`,A.BlockFieldsFragmentDoc=a.gql`
  fragment BlockFields on Block {
    id
    block
    network
  }
`,A.MemberWithDetailsFragmentDoc=a.gql`
  fragment MemberWithDetails on Membership {
    ...MemberFields
    registeredAtTime
    registeredAtBlock {
      ...BlockFields
    }
    invitees {
      ...MemberFields
    }
  }
  ${A.MemberFieldsFragmentDoc}
  ${A.BlockFieldsFragmentDoc}
`,A.GetMembersDocument=a.gql`
  query GetMembers($rootAccount_in: [String!], $controllerAccount_in: [String!]) {
    memberships(where: { rootAccount_in: $rootAccount_in, controllerAccount_in: $controllerAccount_in }) {
      ...MemberFields
    }
  }
  ${A.MemberFieldsFragmentDoc}
`,A.useGetMembersQuery=function(e){const t=Object.assign(Object.assign({},s),e);return o.useQuery(A.GetMembersDocument,t)},A.useGetMembersLazyQuery=function(e){const t=Object.assign(Object.assign({},s),e);return o.useLazyQuery(A.GetMembersDocument,t)},A.GetMemberDocument=a.gql`
  query GetMember($id: ID!) {
    membership(where: { id: $id }) {
      ...MemberWithDetails
    }
  }
  ${A.MemberWithDetailsFragmentDoc}
`,A.useGetMemberQuery=function(e){const t=Object.assign(Object.assign({},s),e);return o.useQuery(A.GetMemberDocument,t)},A.useGetMemberLazyQuery=function(e){const t=Object.assign(Object.assign({},s),e);return o.useLazyQuery(A.GetMemberDocument,t)},A.SearchMembersDocument=a.gql`
  query SearchMembers($text: String!, $limit: Int) {
    memberships(where: { name_contains: $text, handle_contains: $text }, limit: $limit) {
      ...MemberFields
    }
  }
  ${A.MemberFieldsFragmentDoc}
`,A.useSearchMembersQuery=function(e){const t=Object.assign(Object.assign({},s),e);return o.useQuery(A.SearchMembersDocument,t)},A.useSearchMembersLazyQuery=function(e){const t=Object.assign(Object.assign({},s),e);return o.useLazyQuery(A.SearchMembersDocument,t)}},3100:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(80408),A),n(t(96243),A)},52082:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.GlobalModals=void 0;const n=r(t(2784)),i=t(63486),a=t(54698),o=t(66337),s=t(98098),u=t(70311);A.GlobalModals=()=>{const{modal:e}=a.useModal();switch(e){case"Member":return n.default.createElement(i.MemberProfile,null);case"BuyMembership":return n.default.createElement(o.AddMembershipModal,null);case"TransferInvites":return n.default.createElement(s.TransferInviteModal,null);case"TransferTokens":return n.default.createElement(u.TransferModal,null);default:return null}}},97159:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AvatarPlaceholder=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.AvatarPlaceholder=({className:e})=>n.default.createElement(o,{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",className:e},n.default.createElement("rect",{fill:a.Colors.Blue[50],x:"0",y:"0",width:"40",height:"40"}),n.default.createElement("rect",{x:"0",y:"19.5",transform:"matrix(0.7070976 -0.7071159 0.7071159 0.7070976 -8.2842712 20.0003643)",fill:a.Colors.Blue[100],width:"40",height:"1"}),n.default.createElement("rect",{x:"19.5",y:"0",transform:"matrix(0.7070976 -0.7071159 0.7071159 0.7070976 -8.2842712 20.0003643)",fill:a.Colors.Blue[100],width:"1",height:"40"}),n.default.createElement("rect",{x:"11",y:"11",fill:a.Colors.Blue[50],width:"18",height:"18"}),n.default.createElement("path",{fill:a.Colors.Blue[500],d:"M25,12v7.6500244c0,0.6799927-0.0700073,1.3199463-0.210022,1.9499512 C25.9299927,20.25,26.5599976,18.5,26.5599976,16.6900024V12H25z M14.3099976,25.3800049l-0.3200073,1.1099854 l-0.1499634,0.5300293h0.3099976c0.0899658,0,0.1599731,0,0.25-0.0200195h0.0099487 c0.0300293,0,0.0599976-0.0200195,0.0900269-0.0200195c0.0800171,0,0.1799927-0.0199585,0.2700195-0.039978 c0.0700073-0.0200195,0.1399536-0.039978,0.2099609-0.0599976H15c0.0700073-0.0200195,0.1400146-0.0300293,0.210022-0.0599976 h0.0099487c0.0900269-0.0300293,0.1600342-0.0599976,0.2300415-0.0900269 c0.039978-0.0100098,0.0700073-0.0299683,0.1199951-0.0499878c0.0200195-0.0100098,0.0499878-0.0299683,0.0999756-0.039978 c0.0400391-0.0100098,0.0700073-0.0300293,0.1000366-0.0499878c0.1399536-0.0700073,0.2799683-0.1600342,0.4199829-0.25 l0.1699829-0.1400146c0.0700073-0.0400391,0.1300049-0.0900269,0.1900024-0.1400146l0.1699829-0.1699829 c0.0500488-0.0400391,0.1000366-0.0900269,0.1400146-0.1400146l0.0599976-0.0599976 c0.0400391-0.0300293,0.0700073-0.0700073,0.1100464-0.1199951l0.0499878-0.039978 c0.039978-0.0500488,0.0700073-0.0900269,0.1099854-0.1400146v-0.0100098H14.3099976z M22.1900024,12v11.0300293 c0,0.0599976-0.0100098,0.0999756-0.0100098,0.1599731V23.25c-0.0100098,0.0900269-0.0100098,0.1599731-0.0299683,0.2399902 c0,0.0400391-0.0100098,0.0700073-0.0100098,0.1199951c0,0.0300293-0.0200195,0.0700073-0.0200195,0.1199951 c0,0.0599976-0.0100098,0.1300049-0.0299683,0.210022C22.0800171,24,22.0800171,24.0599976,22.0700073,24.1199951v0.039978 C22.0499878,24.210022,22.0499878,24.25,22.039978,24.2999878l-0.0499878,0.1799927L22.25,24.1599731 C22.2800293,24.0999756,22.3200073,24.0599976,22.3599854,24c0.0499878-0.0499878,0.0800171-0.0900269,0.1199951-0.1500244 c0.0100098-0.0199585,0.0400391-0.039978,0.0599976-0.0799561c0.0400391-0.0400391,0.0700073-0.0900269,0.1000366-0.1500244 c0.039978-0.0599976,0.0799561-0.1300049,0.1199951-0.210022c0.0200195-0.0299683,0.0499878-0.0699463,0.0700073-0.0999756 c0.0299683-0.0499878,0.0499878-0.0999756,0.0799561-0.1500244c0.0100098-0.0499878,0.0400391-0.0699463,0.0500488-0.1199951 C22.9899902,23,23.0100098,22.9400024,23.0300293,22.8900146c0.0299683-0.0499878,0.0599976-0.1000366,0.0799561-0.1500244 c0.0100098-0.0200195,0.0200195-0.0499878,0.0300293-0.0800171c0.0199585-0.0199585,0.0299683-0.0499878,0.039978-0.0699463 c0.0100098-0.0500488,0.039978-0.0900269,0.0499878-0.1500244C23.25,22.3900146,23.2800293,22.3499756,23.289978,22.289978 c0.0200195-0.0499878,0.0400391-0.0899658,0.0599976-0.1499634c0.0200195-0.0499878,0.0400391-0.1099854,0.0599976-0.1700439 c0.0100098-0.039978,0.0200195-0.0999756,0.0400391-0.1499634c0.0599976-0.1699829,0.0999756-0.3699951,0.1400146-0.5499878 v-0.0300293c0.0099487-0.0499878,0.0099487-0.0899658,0.0299683-0.1300049v-0.0199585 c0.0100098-0.0500488,0.0100098-0.1100464,0.0300293-0.1700439c0.0099487-0.039978,0.0099487-0.0999756,0.0299683-0.1599731 V20.710022c0-0.0400391,0.0100098-0.1000366,0.0100098-0.1500244c0-0.0599976,0.0100098-0.1199951,0.0100098-0.1699829 c0-0.0599976,0.0199585-0.1300049,0.0199585-0.1900024c0.0100098-0.0499878,0.0100098-0.1099854,0.0100098-0.1699829 C23.75,19.9099731,23.75,19.7700195,23.75,19.6500244V12H22.1900024z"}),n.default.createElement("path",{fill:a.Colors.Blue[500],d:"M20.9393997,12v10.6047001c0,0.2551994-0.0144997,0.4951-0.0289993,0.7350006 c-0.014101,0.2068996-0.0424995,0.4124985-0.085001,0.615099c-0.0854988,0.4803009-0.2139988,0.9454002-0.3850002,1.3800011 c-0.1042995,0.2719002-0.223299,0.5373993-0.3563995,0.7950001c-0.3976002,0.7467995-0.9078999,1.420599-1.5109005,1.9951 C17.2926998,29.3341007,15.6323996,30.0021,13.9118996,30H13l0.4705-1.6352005h0.4559002 c1.2841997,0.0027008,2.5274-0.4758987,3.5068007-1.3500996c0.5119991-0.4451008,0.9376984-0.9899998,1.2538986-1.6047001 c0.0855007-0.1499004,0.1570015-0.3150997,0.2280006-0.480299c0.114399-0.2694016,0.1998997-0.5398006,0.2709007-0.8250008 c0.0879993-0.3174992,0.1406994-0.6445999,0.1569996-0.9748993c0.0144997-0.1647015,0.0144997-0.3299007,0.0144997-0.4951V12 H20.9393997z"}),n.default.createElement("path",{fill:a.Colors.Blue[500],d:"M18.1315994,22.4400005v0.1646996c0,0.1352005,0,0.2703991-0.0144997,0.3903008 c-0.0284996,0.2546997-0.0569992,0.5098991-0.1280003,0.7497997c-0.0289993,0.1198997-0.0574989,0.2398987-0.1000004,0.3450985 H14.6819l0.4703999-1.6351986h2.9792995v-0.0151997V22.4400005z"}));const o=i.default.svg`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: contain;
`},1772:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AccountInfo=void 0;const n=r(t(27860)),i=r(t(2784)),a=r(t(52275)),o=t(56053),s=t(67723),u=t(82975),c=t(27609);A.AccountInfo=i.default.memo((({account:e})=>{const{active:A}=u.useMyMemberships();return i.default.createElement(l,null,i.default.createElement(d,null,i.default.createElement(n.default,{size:40,theme:"beachball",value:e.address})),A&&i.default.createElement(g,{active:A,address:e.address}),i.default.createElement(f,null,e.name),i.default.createElement(p,{altText:c.shortenAddress(e.address),copyText:e.address}))}));const l=a.default.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: min-content 24px 18px;
  grid-column-gap: 12px;
  grid-template-areas:
    'accountphoto accounttype'
    'accountphoto accountname'
    'accountphoto accountaddress';
  align-items: center;
  width: 100%;
  justify-self: start;
`,d=a.default.div`
  display: flex;
  grid-area: accountphoto;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  align-self: center;
  height: 40px;
  width: 40px;
  background-color: ${s.Colors.Blue[500]};
  border-radius: ${s.BorderRad.full};
  overflow: hidden;
`,f=a.default.h5`
  grid-area: accountname;
  max-width: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${s.Colors.Black[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,g=({active:e,address:A})=>e&&e.rootAccount===A||e.controllerAccount===A?i.default.createElement(h,null,e.rootAccount===A?"Root account":"Controller account"):null,h=a.default.p`
  display: flex;
  grid-area: accounttype;
  justify-content: center;
  width: fit-content;
  margin: 0;
  padding: 0 8px;
  font-size: 10px;
  line-height: 16px;
  border-radius: 8px;
  color: ${s.Colors.White};
  background-color: ${s.Colors.Blue[200]};
  text-transform: uppercase;
`,p=a.default(o.CopyComponent)`
  grid-area: accountaddress;
`},26812:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AvatarPlaceholderImage=A.AvatarImg=A.Avatar=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(97159);A.Avatar=n.default.memo((({avatarUri:e,className:t})=>e?n.default.createElement(A.AvatarImg,{src:e,className:t}):n.default.createElement(A.AvatarPlaceholderImage,null))),A.AvatarImg=i.default.img`
  border-radius: ${a.BorderRad.round};
  overflow: hidden;
`,A.AvatarPlaceholderImage=i.default(o.AvatarPlaceholder)`
  width: 100%;
  height: 100%;
`},22114:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.ConnectionStatus=void 0;const a=i(t(2784)),o=t(8162),s=t(37662);A.ConnectionStatus=()=>{const{isConnected:e,api:A}=o.useApi(),[t,r]=a.useState(!1);return a.useEffect((()=>{A&&(A.on("connected",(()=>{r(!0)})),A.on("disconnected",(()=>{r(!0)})))}),[A]),a.default.createElement(a.default.Fragment,null,t&&(e?a.default.createElement(s.SideNotification,{onClick:()=>r(!1),title:"Connected to network"}):a.default.createElement(s.SideNotification,{isError:!0,onClick:()=>r(!1),title:"Disconnected from network"})))}},56053:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CopyText=A.CopyGroup=A.CopyComponent=void 0;const n=r(t(52275)),i=r(t(2784)),a=t(59686),o=t(67723);A.CopyComponent=i.default.memo((({altText:e,copyText:t,className:r})=>i.default.createElement(A.CopyGroup,{className:r},i.default.createElement(A.CopyText,null,!e&&t,e&&e),i.default.createElement(a.CopyButton,{textToCopy:t})))),A.CopyGroup=n.default.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 8px;
  width: fit-content;
  height: fit-content;
  font-family: ${o.Fonts.Inter};
  font-size: 12px;
  line-height: 18px;
  color: ${o.Colors.Black[400]};
  transition: ${o.Transitions.all};
`,A.CopyText=n.default.span`
  max-width: 152px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`},95148:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.HelpComponent=A.HelperLink=A.HelperText=A.HelpPopupTitle=A.Help=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(79530),s=t(95852);A.Help=n.default.memo((({helperText:e,helperTitle:t,helperLinkText:r,helperLinkURL:i,icon:a,memberRole:l,size:d,className:f,absolute:g})=>n.default.createElement(u,{absolute:g},n.default.createElement(A.HelpComponent,{size:d,className:f,memberRole:l},!l&&a&&a,!l&&!a&&n.default.createElement(o.QuestionIcon,null),l&&!a&&l),n.default.createElement(c,{size:d},t&&n.default.createElement(A.HelpPopupTitle,null,t),n.default.createElement(A.HelperText,null,e),i&&n.default.createElement(A.HelperLink,{href:i,target:"_blank"},r||"Link",n.default.createElement(s.LinkSymbol,null))))));const u=i.default.div`
  display: flex;
  position: ${({absolute:e})=>e?"absolute":"relative"};
  right: ${({absolute:e})=>e?"-24px":"auto"};
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`,c=i.default.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: ${({size:e})=>{switch(e){case"l":return"28px";case"m":default:return"20px"}}};
  left: ${({size:e})=>{switch(e){case"l":return"-12px";case"m":default:return"-16px"}}};
  width: max-content;
  min-width: 160px;
  max-width: 304px;
  padding: 16px 24px;
  border: 1px solid ${a.Colors.Black[900]};
  background-color: ${a.Colors.Black[700]};
  border-radius: ${a.BorderRad.m};
  transition: ${a.Transitions.all};
  visibility: hidden;
  z-index: 55;
  ${a.Animations.showHelperTooltip};

  &:after {
    content: '';
    position: absolute;
    left: 19px;
    top: -4px;
    width: 8px;
    height: 8px;
    background-color: ${a.Colors.Black[700]};
    border: 1px solid ${a.Colors.Black[900]};
    transform: rotate(45deg);
    clip-path: polygon(100% 0, 0 0, 0 100%);
  }
`;A.HelpPopupTitle=i.default.h6`
  color: ${a.Colors.Black[900]};
  margin-bottom: 10px;
  color: ${a.Colors.White};
`,A.HelperText=i.default.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: ${a.Colors.Black[500]};
  color: ${a.Colors.Black[400]};
`,A.HelperLink=i.default.a`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  width: fit-content;
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${a.Colors.Black[400]};
  transition: ${a.Transitions.all};

  ${s.LinkSymbolStyle} {
    width: 12px;
    height: 12px;
    .blackPart,
    .primaryPart {
      fill: ${a.Colors.Black[300]};
    }
  }

  &:hover {
    color: ${a.Colors.Blue[500]};

    ${s.LinkSymbolStyle} {
      .blackPart,
      .primaryPart {
        fill: ${a.Colors.Blue[500]};
      }
    }
  }
`,A.HelpComponent=i.default.span`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${({size:e})=>{switch(e){case"l":return"24px";case"m":default:return"16px"}}};
  height: ${({size:e})=>{switch(e){case"l":return"24px";case"m":default:return"16px"}}};
  border: 1px solid ${({memberRole:e})=>e?"transparent":a.Colors.Black[300]};
  border-radius: ${a.BorderRad.round};
  background-color: transparent;
  color: ${a.Colors.Black[500]};
  font-size: ${({size:e})=>{switch(e){case"l":return"10px";case"m":default:return"6px"}}};
  line-height: 1;
  font-family: ${a.Fonts.Inter};
  font-weight: 700;
  cursor: pointer;
  transition: ${a.Transitions.all};
  z-index: 5;

  svg {
    width: 100%;
    height: 100%;
    position: static;
  }

  &:hover,
  &:focus {
    color: ${a.Colors.Blue[500]};
    background-color: ${a.Colors.Black[100]};
    & ~ ${c} {
      display: flex;
    }
  }
`},18823:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ResultTextWhite=A.ResultText=A.ModalTitle=A.SignTransferContainer=A.SuccessModalBody=A.ResultModalBody=A.ScrolledModalContainer=A.ScrolledModalBody=A.ScrolledModal=A.ModalHeaderIcon=A.ModalWrap=A.ModalFooterGroup=A.ModalFooter=A.ModalBody=A.ModalTopBar=A.ModalGlass=A.Modal=A.ModalHeader=void 0;const n=r(t(2784)),i=r(t(28316)),a=r(t(52275)),o=t(67723),s=t(59686),u=t(64342);A.ModalHeader=n.default.memo((({onClick:e,title:t,icon:r,modalHeaderSize:i,className:a})=>n.default.createElement(A.ModalTopBar,{columns:r?3:2,modalHeaderSize:i,className:a},r?n.default.createElement(A.ModalHeaderIcon,null,r):null,n.default.createElement(A.ModalTitle,null,t),n.default.createElement(s.CloseButton,{onClick:e})))),A.Modal=({onClose:e,modalHeight:t="m",children:r,modalSize:a,isDark:o,className:s})=>i.default.createPortal(n.default.createElement(A.ModalGlass,{modalHeight:t,modalSize:a,isDark:o,onClick:function(A){A.target===A.currentTarget&&e()},onClose:e},n.default.createElement(A.ModalWrap,{modalMaxSize:a,modalHeight:t,isDark:o,role:"modal",className:s},r)),document.body),A.ModalGlass=a.default.div`
  display: flex;
  justify-content: center;
  align-items: ${({modalHeight:e})=>{switch(e){case"s":return"center"}}};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: ${({modalHeight:e})=>{switch(e){case"s":return"0px";case"m":return"64px";case"l":return"48px"}}};
  background-color: ${o.Colors.Black[700.85]};
  color: ${o.Colors.Black[900]};
  z-index: 100000;
  ${o.Animations.showModalBackground};
`,A.ModalTopBar=a.default.header`
  display: grid;
  position: relative;
  grid-auto-flow: column;
  grid-area: modalheader;
  grid-template-columns: ${e=>e.columns>2?"24px 1fr 20px":"1fr 20px"};
  justify-content: start;
  grid-column-gap: 8px;
  align-items: center;
  height: ${({modalHeaderSize:e})=>{switch(e){case"s":return"48px";case"m":case void 0:default:return"56px"}}};
  padding: ${({modalHeaderSize:e})=>{switch(e){case"s":return"24px 24px 0px";case"m":case void 0:default:return"16px 24px"}}};
  border-radius: 2px 2px 0 0;
`,A.ModalBody=a.default.div`
  display: grid;
  grid-area: modalbody;
  grid-row-gap: 16px;
  padding: 24px 24px 24px;
  background-color: ${o.Colors.Black[50]};
  border-top: 1px solid ${o.Colors.Black[200]};
  border-bottom: 1px solid ${o.Colors.Black[200]};
`,A.ModalFooter=a.default.footer`
  display: inline-grid;
  grid-area: modalfooter;
  grid-template-columns: ${({twoColumns:e})=>e?"1fr auto":"1fr"};
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-column-gap: 40px;
  justify-self: end;
  justify-items: end;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 8px 24px;
  border-radius: 0 0 2px 2px;
`,A.ModalFooterGroup=a.default.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  width: fit-content;
  height: 100%;
  justify-self: ${({left:e})=>e?"start":"end"};
  grid-column-gap: 40px;
  justify-items: ${({left:e})=>e?"start":"end"};
  justify-content: ${({left:e})=>e?"start":"end"};
`,A.ModalWrap=a.default.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'modalheader'
    'modalbody'
    'modalfooter';
  grid-area: modal;
  position: relative;
  background-color: ${o.Colors.White};
  width: 100%;
  max-width: ${({modalMaxSize:e})=>{switch(e){case"xs":return"400px";case"s":return"720px";case"m":return"904px";case"l":return"1240px"}}};
  height: min-content;
  border-radius: ${o.BorderRad.s};
  box-shadow: ${o.Shadows.common};
  ${o.Animations.showModalBlock};
  &,
  ${A.ModalBody}, ${A.ModalTopBar}, ${A.ModalFooter} {
    ${({isDark:e})=>{switch(e){case!0:return`\n          background-color: ${o.Colors.Black[800]};\n          color: ${o.Colors.White};\n          `}}};
  }
  ${A.ModalBody} {
    ${({isDark:e})=>{switch(e){case!0:return`\n          border-color: ${o.Colors.Black[800]};\n          `}}};
  }
`,A.ModalHeaderIcon=a.default.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 24px;
  width: 24px;

  svg {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`,A.ScrolledModal=a.default(A.Modal)`
  &${A.ModalWrap} {
    max-height: calc(100% - 128px);
    grid-template-rows: auto 1fr auto;
  }
`,A.ScrolledModalBody=a.default(A.ModalBody)`
  display: flex;
  flex-direction: column;
  grid-row-gap: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,A.ScrolledModalContainer=a.default.div`
  display: grid;
  grid-row-gap: 16px;
  width: 100%;
  height: 100%;
  padding: 24px 24px 20px;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    visibility: hidden;
  }
`,A.ResultModalBody=a.default(A.ModalBody)`
  position: relative;
  grid-row-gap: 16px;
  padding: 8px 40px 40px;
  justify-items: center;
  border: none;
  background-color: ${o.Colors.White};
`,A.SuccessModalBody=a.default(A.ModalBody)`
  grid-row-gap: 8px;
  background-color: ${o.Colors.White};
  border: none;
  padding: 12px 24px 40px;
`,A.SignTransferContainer=a.default.div`
  display: grid;
  grid-row-gap: 8px;
  width: 100%;
  height: 100%;
`,A.ModalTitle=a.default.h5`
  .red-title {
    color: ${o.Colors.Red[400]};
  }
`,A.ResultText=a.default(u.TextMedium)`
  text-align: center;

  ${u.ValueInJoys} {
    font-family: ${o.Fonts.Inter};
    font-weight: 700;
    color: ${o.Colors.Black[700]};
    &:after {
      font-family: ${o.Fonts.Inter};
      font-weight: 700;
      color: ${o.Colors.Black[700]};
    }
  }
`,A.ResultTextWhite=a.default(A.ResultText)`
  color: ${o.Colors.Black[400]};
`},48438:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.NotificationComponent=A.Notification=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(20625);A.Notification=function({hasNotification:e}){return n.default.createElement(A.NotificationComponent,{hasNotification:e},n.default.createElement(o.NotificationIcon,null))},A.NotificationComponent=i.default.div`
  display: flex;
  position: relative;
  width: 16px;
  height: 16px;
  color: ${a.Colors.Black[500]};
  transition: ${a.Transitions.all};

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    right: 0;
    width: 6px;
    height: 6px;
    border-radius: ${a.BorderRad.round};
    background-color: ${a.Colors.Red[400]};
    opacity: ${e=>!0===e.hasNotification?"1":"0"};
    transition: ${a.Transitions.all};
  }
`},40329:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.HeaderText=A.SortIconUp=A.SortIconDown=void 0;const n=r(t(52275)),i=t(67723),a=t(79530),o=r(t(2784));A.SortIconDown=function(){return o.default.createElement(s,null,o.default.createElement(a.ArrowDownIcon,null))},A.SortIconUp=function(){return o.default.createElement(u,null,o.default.createElement(a.ArrowDownIcon,null))},A.HeaderText=n.default.span`
  display: inline-flex;
  position: relative;
  align-items: center;
  width: fit-content;
`;const s=n.default.span`
  display: inline-flex;
  position: absolute;
  left: calc(100% + 4px);
  width: fit-content;
  height: fit-content;
  transition: ${i.Transitions.all};

  ${a.Icon.type} {
    width: 12px;
    height: 12px;
    color: ${i.Colors.Black[600]};
    animation: sortArrowFlip ${i.Transitions.duration} ease;

    @keyframes sortArrowFlip {
      from {
        opacity: 0;
        transform: scaleY(-1);
      }
      to {
        opacity: 1;
        transform: scaleY(1);
      }
    }
  }
`,u=n.default(s)`
  transform: rotate(180deg);
`},89265:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferButtonStyled=A.TransferButton=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(54698),s=t(59686),u=t(12447);A.TransferButton=function({from:e,to:A,disabled:t}){const{showModal:r}=o.useModal(),i=!e&&!A,a=i?"transfer":e&&!i?"send":"receive",s=!!t;return n.default.createElement(c,{size:"medium",square:!0,onClick:()=>r({modal:"TransferTokens",data:{from:e,to:A}}),disabled:s},n.default.createElement(u.PickedTransferIcon,{type:a}))},A.TransferButtonStyled=function(){const{showModal:e}=o.useModal();return n.default.createElement(l,{size:"small",square:!0,onClick:()=>e({modal:"TransferTokens",data:{}})},n.default.createElement(u.PickedTransferIcon,{type:"transfer"}))};const c=i.default(s.ButtonGhost)`
  svg {
    color: ${a.Colors.Black[900]};
  }
`,l=i.default(s.ButtonPrimary)`
  width: 32px;
  height: 32px;
  grid-area: balancetransfer;
  justify-self: end;
`},20882:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferInviteButton=void 0;const n=r(t(2784)),i=t(67723),a=r(t(52275)),o=t(54698),s=t(59686),u=t(79530);A.TransferInviteButton=function({member:e,square:A,children:t}){const r=e.inviteCount<=0,{showModal:i}=o.useModal();return n.default.createElement(s.ButtonGhost,{size:"small",square:null==A||A,disabled:r,onClick:()=>i({modal:"TransferInvites",data:{memberId:e.id}})},t||n.default.createElement(c,null))};const c=a.default(u.TransferIcon)`
  & > .blackPart {
    fill: ${i.Colors.Black[900]};
  }
  & > .primaryPart {
    fill: ${i.Colors.Blue[500]};
  }
`},97720:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionAccount=void 0;const n=r(t(2784)),i=t(25047),a=t(10233),o=t(1772),s=t(64342);A.OptionAccount=({option:e})=>{const A=i.useBalance(e);return n.default.createElement(n.default.Fragment,null,n.default.createElement(o.AccountInfo,{account:e}),n.default.createElement(a.BalanceInfoInRow,null,n.default.createElement(a.InfoTitle,null,"Transferable balance"),n.default.createElement(a.InfoValue,null,n.default.createElement(s.TokenValue,{value:null==A?void 0:A.transferable}))))}},56362:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionListAccount=void 0;const n=r(t(2784)),i=t(13682),a=t(97720);A.OptionListAccount=n.default.memo((({options:e,onChange:A})=>n.default.createElement(i.OptionsListComponent,null,e.map((e=>n.default.createElement(i.Option,{key:e.address,onClick:()=>A&&A(e)},n.default.createElement(a.OptionAccount,{option:e})))))))},64414:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.SelectAccount=A.filterAccount=void 0;const a=i(t(2784)),o=t(52452),s=t(5568),u=t(13682),c=t(83748),l=t(96723),d=t(97720),f=t(56362);A.filterAccount=e=>{const A="string"==typeof e?e:null==e?void 0:e.address;return e?e=>e.address!==A:()=>!0},A.SelectAccount=a.default.memo((({onChange:e,filter:A,selected:t})=>{const{allAccounts:r}=o.useAccounts(),n=r.filter(A||(()=>!0)),[i,g]=a.useState(t),[h,p]=a.useState(""),m=a.useMemo((()=>c.filterByText(n,h)),[h,n]),I=s.useKeyring();return a.useEffect((()=>{0===m.length&&l.isValidAddress(h,I)&&(!i||i.address!==h)&&g({name:"Unsaved Account",address:h})}),[m,h,i]),a.default.createElement(u.Select,{selected:i,onChange:e,disabled:!1,renderSelected:e=>a.default.createElement(d.OptionAccount,{option:e}),placeholder:"Select account or paste account address",renderList:e=>a.default.createElement(f.OptionListAccount,{onChange:e,options:m}),onSearch:e=>p(e)})}))},42002:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SelectedAccount=void 0;const n=r(t(2784)),i=t(25047),a=t(10233),o=t(1772),s=t(9398),u=t(79530),c=t(64342);A.SelectedAccount=({account:e})=>{const{transferable:A}=i.useBalance(e)||{};return n.default.createElement(a.LockedAccount,null,n.default.createElement(o.AccountInfo,{account:e}),n.default.createElement(a.BalanceInfoInRow,null,n.default.createElement(a.InfoTitle,null,"Transferable balance"),n.default.createElement(a.InfoValue,null,n.default.createElement(c.TokenValue,{value:A}))),n.default.createElement(s.ToggleButton,{className:"ui-toggle",disabled:!0},n.default.createElement(u.ArrowDownIcon,null)))}},83748:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.filterByText=void 0,A.filterByText=function(e,A){return e.filter((e=>{var t;return(null===(t=e.name)||void 0===t?void 0:t.toLocaleLowerCase().includes(A.toLocaleLowerCase()))||e.address.includes(A)}))}},71196:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(64414),A),n(t(42002),A)},18531:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ButtonsGroup=A.ButtonGhostStyles=A.ButtonSecondaryStyles=A.ButtonPrimaryStyles=A.ButtonGhost=A.ButtonSecondary=A.ButtonPrimary=void 0;const o=a(t(2784)),s=i(t(52275)),u=t(67723),c={large:"48px",medium:"40px",small:"32px"},l=e=>c[e.size||"large"];A.ButtonPrimary=function({className:e,children:t,size:r,square:n,disabled:i,onClick:a}){return o.default.createElement(A.ButtonPrimaryStyles,{className:e,size:r,square:n,disabled:i,onClick:a},t)},A.ButtonSecondary=function({className:e,children:t,size:r,square:n,disabled:i,onClick:a}){return o.default.createElement(A.ButtonSecondaryStyles,{className:e,size:r,square:n,disabled:i,onClick:a},t)},A.ButtonGhost=function({className:e,children:t,size:r,square:n,disabled:i,onClick:a}){return o.default.createElement(A.ButtonGhostStyles,{className:e,size:r,square:n,disabled:i,onClick:a},t)};const d=s.css`
  display: inline-grid;
  position: relative;
  justify-items: center;
  align-items: center;
  width: fit-content;
  min-width: ${l};
  ${e=>{if(e.square)return s.css`
        max-width: ${l(e)};
      `}}
  height: ${l};
  padding: ${e=>"small"==e.size?e.square?"6px":"4px 8px":"medium"==e.size?e.square?"8px":"4px 16px":e.square?"8px":"8px 16px"};
  border: 1px solid transparent;
  border-radius: ${u.BorderRad.s};
  outline: none;
  cursor: pointer;
  overflow: hidden;
  transition: ${u.Transitions.all};

  grid-auto-flow: column;
  grid-column-gap: ${({size:e})=>"small"==e?"4px":"8px"};

  font-family: ${u.Fonts.Grotesk};
  font-size: ${e=>"small"===e.size?"14px":"16px"};
  line-height: ${e=>"small"===e.size?"20px":"24px"};
  font-weight: 700;
  text-transform: capitalize;

  & > svg {
    z-index: 2;
    transform: translateY(-1px);
    transition: ${u.Transitions.all};
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 150%;
    height: 150%;
    border-radius: ${u.BorderRad.full};
    transform: translate(-150%, -50%);
    transition: ${u.Transitions.all};
    z-index: -1;
    pointer-events: none;
  }

  &:hover,
  &:focus {
    &:before {
      transform: translate(-50%, -50%);
    }
  }
  &:active {
    transform: scale(0.96);
    &:after {
      transform: translate(-50%, -50%);
    }
  }
  &:disabled {
    cursor: not-allowed;

    &:hover,
    &:focus,
    &:active {
      transform: scale(1);
      &:after,
      &:before {
        transform: translate(-150%, -50%);
      }
    }
  }
`;A.ButtonPrimaryStyles=s.default.button`
  ${d};

  color: ${u.Colors.White};
  border-color: ${u.Colors.Blue[500]};
  background-color: ${u.Colors.Blue[500]};

  & > svg {
    color: ${u.Colors.White};
  }

  &:before {
    background-color: ${u.Colors.Blue[400]};
  }
  &:after {
    background-color: ${u.Colors.Blue[700]};
  }

  &:hover,
  &:focus {
    border-color: ${u.Colors.Blue[400]};
  }

  &:active {
    border-color: ${u.Colors.Blue[700]};
  }

  &:disabled {
    border-color: ${u.Colors.Blue[100]};
    background-color: ${u.Colors.Blue[100]};
  }
`,A.ButtonSecondaryStyles=s.default.button`
  ${d};

  border-color: ${u.Colors.Black[75]};
  background-color: ${u.Colors.Black[75]};

  & > svg {
    color: ${u.Colors.Black[400]};
  }

  &:before {
    background-color: ${u.Colors.Black[50]};
  }
  &:after {
    background-color: ${u.Colors.Black[100]};
  }

  &:hover,
  &:focus {
    border-color: ${u.Colors.Black[50]};
    color: ${u.Colors.Blue[500]};

    & > svg {
      color: ${u.Colors.Blue[500]};
    }
  }

  &:active {
    border-color: ${u.Colors.Black[100]};
  }

  &:disabled {
    & > svg {
      color: ${u.Colors.Black[300]};
    }
    color: ${u.Colors.Black[300]};
    border-color: ${u.Colors.Black[50]};
    background-color: ${u.Colors.Black[50]};
  }
`,A.ButtonGhostStyles=s.default.button`
  ${d};

  color: ${u.Colors.Black[900]};
  border-color: ${u.Colors.Black[200]};
  background-color: ${u.Colors.White};

  & > svg {
    color: ${u.Colors.Black[400]};
  }

  &:before {
    background-color: ${u.Colors.White};
    border: 1px solid ${u.Colors.Blue[100]};
  }
  &:after {
    background-color: ${u.Colors.Blue[50]};
  }

  &:hover,
  &:focus {
    border-color: ${u.Colors.Blue[100]};
    color: ${u.Colors.Blue[500]};
    & > svg {
      color: ${u.Colors.Blue[500]};
    }
  }

  &:active {
    border-color: ${u.Colors.Blue[100]};
  }

  &:disabled {
    & > svg {
      color: ${u.Colors.Black[300]};
    }
    color: ${u.Colors.Black[300]};
    border-color: ${u.Colors.Black[200]};
    background-color: ${u.Colors.White};
  }
`,A.ButtonsGroup=s.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  width: fit-content;
`},45905:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Close=A.CloseButton=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(79530);A.CloseButton=n.default.memo((e=>n.default.createElement(A.Close,Object.assign({},e),n.default.createElement(o.CrossIcon,null)))),A.Close=i.default.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  color: ${a.Colors.Black[400]};
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: ${a.Transitions.all};

  &:hover {
    color: ${a.Colors.Blue[500]};
  }

  &:focus,
  &:active {
    color: ${a.Colors.Blue[600]};
  }

  &:disabled {
    color: ${a.Colors.Black[300]};
    cursor: not-allowed;
  }
`},12702:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CopyButtonIcon=A.CopyButton=void 0;const o=i(t(2784)),s=a(t(52275)),u=t(79530),c=t(78777),l=t(39119),d=t(68873);A.CopyButton=function({textToCopy:e,className:t,disabled:r}){const[n,i]=o.useState(!1),[a,s]=o.useState(!1);return o.default.createElement(A.CopyButtonIcon,{disabled:r,onClick:()=>{if(e&&!r)try{navigator.clipboard.writeText(e),i(!n)}catch(e){s(!a)}},className:t},!n&&!a&&o.default.createElement(u.CopyIcon,null),n&&setTimeout((function(){i(!n)}),1e3)&&o.default.createElement(f,null,o.default.createElement(d.SuccessSymbol,null)),a&&setTimeout((function(){s(!a)}),1e3)&&o.default.createElement(f,null,o.default.createElement(l.FailureSymbol,null)))},A.CopyButtonIcon=s.default.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  color: ${c.Colors.Black[400]};
  outline: none;
  background-color: transparent;
  cursor: ${({disabled:e})=>e?"not-allowed":"copy"};
  transition: ${c.Transitions.all};

  &:hover,
  &:focus {
    color: ${c.Colors.Blue[500]};
  }
  &:active {
    color: ${c.Colors.Blue[600]};
  }
`;const f=s.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  ${c.Animations.showResultSymbol};
`},9398:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Toggle=A.ToggleButton=void 0;const n=r(t(52275)),i=t(67723),a=t(79530),o=t(18531);A.ToggleButton=n.default(o.ButtonPrimary)`
  background-color: transparent;
  color: ${i.Colors.Black[900]};
  &,
  &:hover,
  &:focus,
  &:active,
  &:disabled {
    background-color: transparent;
    border: 1px solid transparent;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${i.Colors.Black[400]};
  }
  &:before,
  &:after {
    display: none;
  }

  & > svg {
    color: inherit;
  }
`,A.Toggle=n.default.div`
  display: grid;
  grid-template-columns: 1fr 48px;
  grid-template-rows: 1fr;
  grid-column-gap: 4px;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border-radius: ${i.BorderRad.s};
  background-color: ${({disabled:e})=>e?i.Colors.Black[75]:i.Colors.White};
  font-size: 1em;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: ${i.Transitions.all};

  ${A.ToggleButton} ${a.Icon.type} {
    transition: ${i.Transitions.all};
    transform: scaleY(${({isOpen:e})=>e?"-1":"1"});
  }

  &:focus-within,
  &:active,
  &:focus {
    border-color: ${i.Colors.Blue[300]};
  }
`},59686:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(18531),A),n(t(45905),A),n(t(12702),A)},16057:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CheckboxNative=A.CheckboxLabel=A.CheckboxStyled=A.CheckboxSideText=A.Checkbox=void 0;const o=i(t(2784)),s=a(t(52275)),u=t(67723),c=t(1079);A.Checkbox=function({id:e,isRequired:t,children:r,enabled:n=!0,isChecked:i=!1,onChange:a}){const[s,u]=o.useState(i);return o.default.createElement(A.CheckboxLabel,{htmlFor:e,onClick:e=>{e.preventDefault(),!1!==n&&(u(!s),a&&a(!s))},isLabelEnabled:n,isCheckboxChecked:s},o.default.createElement(A.CheckboxNative,{type:"checkbox",id:e,name:e,required:t,checked:s,disabled:!n,onChange:e=>u(e.target.checked)}),o.default.createElement(A.CheckboxStyled,{disabled:!n},o.default.createElement(c.CheckboxIcon,null)),o.default.createElement(A.CheckboxSideText,null,r))},A.CheckboxSideText=s.default.span`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`,A.CheckboxStyled=s.default.span`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  margin: 4px;
  border: 2px solid ${u.Colors.Black[300]};
  border-radius: ${u.BorderRad.m};
  background-color: ${({disabled:e})=>e?u.Colors.Black[75]:"transparent"};
  color: ${u.Colors.Black[300]};
  transition: ${u.Transitions.all};
  pointer-events: none;
  overflow: hidden;

  ${c.CheckboxIconStyles} {
    width: 16px;
    height: 16px;
    position: absolute;
    transform: translateY(-100%);
    transition: transform ${u.Transitions.duration} ease;
  }
`,A.CheckboxLabel=s.default.label`
  display: inline-grid;
  position: relative;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  color: ${e=>!1===e.isCheckboxChecked?u.Colors.Black[600]:!0===e.isCheckboxChecked?u.Colors.Black[900]:0==e.isLabelEnabled?u.Colors.Black[600]:u.Colors.Black[900]};
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-family: ${u.Fonts.Inter};
  opacity: ${e=>0==e.isLabelEnabled?"0.4":"1"};
  cursor: ${e=>0==e.isLabelEnabled?"not-allowed":"pointer"};
  user-select: none;
  transition: ${u.Transitions.all};

  &:hover,
  &:focus-within {
    color: ${e=>0==e.isLabelEnabled?u.Colors.Black[600]:u.Colors.Blue[500]};

    ${A.CheckboxStyled} {
      border: 2px solid ${u.Colors.Blue[400]};
      color: ${u.Colors.Blue[500]};
    }
  }
`,A.CheckboxNative=s.default.input`
  position: absolute;
  width: 1px;
  max-width: 1px;
  height: 1px;
  max-height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  outline: none;

  &:focus + ${A.CheckboxStyled}, &:hover + ${A.CheckboxStyled} {
    border: 2px solid ${u.Colors.Black[300]};
    color: ${u.Colors.Black[400]};
  }

  &:checked + ${A.CheckboxStyled} {
    border: 2px solid ${u.Colors.Blue[500]};
    color: ${u.Colors.Black[900]};
    ${c.CheckboxIconStyles} {
      transform: translateY(0);
    }
  }
  &:checked&:focus + ${A.CheckboxStyled}, &:checked&:hover + ${A.CheckboxStyled} {
    border: 2px solid ${u.Colors.Blue[400]};
    color: ${u.Colors.Blue[500]};
  }
  &:focus + ${A.CheckboxStyled}, &:hover + ${A.CheckboxStyled} {
    border: 2px solid ${u.Colors.Blue[400]};
  }
  &:disabled&:focus + ${A.CheckboxStyled}, &:disabled&:hover + ${A.CheckboxStyled} {
    border: 2px solid ${u.Colors.Black[300]};
    color: ${u.Colors.Black[400]};
  }
`},20554:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.FieldError=A.hasError=A.getErrorMessage=A.getError=void 0;const n=r(t(2784)),i=t(75903);A.getError=(e,A)=>A.find((A=>A.path===e)),A.getErrorMessage=(e,t)=>{const r=A.getError(e,t);return null==r?void 0:r.message},A.hasError=(e,t)=>{var r;return!!(null===(r=A.getError(e,t))||void 0===r?void 0:r.value)},A.FieldError=({name:e,errors:t})=>{const r=A.getError(e,t);return r&&r.value?n.default.createElement(n.default.Fragment,null,n.default.createElement(i.ValidationErrorInfo,null,r.message)):null}},75903:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.ValidationErrorInfo=A.TextArea=A.NumberInput=A.TextInput=void 0;const a=i(t(52275)),o=t(67723);A.TextInput=a.default.input`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${o.Colors.Black[300]};
  border-radius: ${o.BorderRad.s};
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${o.Colors.Black[400]};
  }

  ${({invalid:e})=>{if(e)return a.css`
        border-color: red;
        /* Simulate outline on FF */
        box-shadow: 0 0 0 3px red;
        outline: none;
      `}}
`,A.NumberInput=a.default(A.TextInput)`
  text-align: right;
`,A.TextArea=a.default.textarea`
  font-family: ${o.Fonts.Inter};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${o.Colors.Black[300]};
  border-radius: ${o.BorderRad.s};
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  resize: none;

  &::placeholder {
    font-weight: 400;
    color: ${o.Colors.Black[400]};
  }
`,A.ValidationErrorInfo=a.default.span`
  color: red;
  padding: 4px 0;
`},26672:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Input=A.InputTextarea=A.InputNumber=A.InputText=A.InputComponent=void 0;const o=a(t(2784)),s=i(t(52275)),u=t(67723),c=t(59686),l=t(95148),d=t(8382),f=t(68873),g=t(64342),h=t(81328);A.InputComponent=({id:e,label:A,required:t,validation:r,disabled:n,value:i,inputSize:a,inputWidth:s,icon:u,copy:c,textToCopy:g,units:h,message:p,helperText:m,helperTitle:I,helperLinkText:y,helperLinkURL:B,className:E,children:C,borderless:O})=>o.default.createElement(v,{className:E,inputSize:a,inputWidth:s},A&&o.default.createElement(b,{htmlFor:e,isRequired:t,disabled:n},A,m&&o.default.createElement(l.Help,{helperText:m,helperTitle:I,helperLinkText:y,helperLinkURL:B})),o.default.createElement(Q,{copy:c,units:h,icon:u,validation:r,disabled:n,inputSize:a,borderless:O},u&&o.default.createElement(w,null,u),o.default.createElement(M,null,C),(h||c)&&o.default.createElement(D,null,h&&o.default.createElement(_,null,h),c&&o.default.createElement(S,{textToCopy:g||i,disabled:n}))),p&&o.default.createElement(k,{validation:r},"invalid"===r&&o.default.createElement(N,null,o.default.createElement(d.AlertSymbol,null)),"warning"===r&&o.default.createElement(N,null,o.default.createElement(d.AlertSymbol,null)),"valid"===r&&o.default.createElement(N,null,o.default.createElement(f.SuccessSymbol,null)),o.default.createElement(L,null,p))),A.InputText=({id:e,value:t,required:r,validation:n,placeholder:i,disabled:a,onChange:s})=>o.default.createElement(A.Input,{id:e,name:e,type:"text",value:t,required:r,validation:n,placeholder:i,disabled:a,onChange:s,autoComplete:"off"}),A.InputNumber=({id:e,value:A,required:t,validation:r,placeholder:n,disabled:i,onChange:a})=>o.default.createElement(E,{id:e,name:e,type:"text",value:A,required:t,validation:r,placeholder:n,disabled:i,onChange:a,autoComplete:"off"}),A.InputTextarea=({id:e,value:A,required:t,validation:r,placeholder:n,disabled:i,onChange:a})=>o.default.createElement(C,{id:e,name:e,value:A,required:t,validation:r,placeholder:n,disabled:i,onChange:a,autoComplete:"off"});const p=s.css`
  padding: 0 16px 1px 16px;
`,m=s.css`
  padding: 0 16px 1px 36px;
`,I=s.css`
  padding: 0 0 1px 16px;
`,y=s.css`
  padding: 0 0 1px 36px;
`,B=s.css`
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: ${u.BorderRad.s};
  font-family: ${u.Fonts.Inter};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${u.Colors.Black[900]};
  transition: ${u.Transitions.all};

  &::placeholder {
    font-weight: 400;
    color: ${u.Colors.Black[400]};
  }
`;A.Input=s.default.input`
  ${B};
  &[type='number'] {
    text-align: right;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;const E=s.default(A.Input)`
  text-align: right;
`,C=s.default.textarea`
  ${B} {
    resize: none;
  }
`,v=s.default.div`
  display: grid;
  grid-row-gap: 4px;
  align-items: center;
  width: 100%;
  min-width: ${({inputWidth:e})=>"s"===e?"320px":"400px"};
`,b=s.default(h.Label)`
  margin-bottom: 0;
  color: ${({disabled:e})=>e?u.Colors.Black[500]:u.Colors.Black[900]};
`,Q=s.default.div`
  display: grid;
  position: relative;
  grid-template-columns: ${e=>e.copy||e.units?"1fr auto":"1fr"};
  align-items: center;
  width: 100%;
  height: ${({inputSize:e})=>{switch(e){case"l":return"80px";case"m":default:return"48px"}}};
  border: 1px solid
    ${({validation:e})=>{switch(e){case"invalid":return u.Colors.Red[400];case"valid":return u.Colors.Green[500];case"warning":return u.Colors.Orange[500];case void 0:default:return u.Colors.Black[200]}}};
  border: ${({borderless:e})=>{if(e)return"none"}};
  border-color: ${({disabled:e})=>{if(e)return u.Colors.Black[200]}};
  border-radius: ${u.BorderRad.s};
  background-color: ${({disabled:e})=>e?u.Colors.Black[75]:u.Colors.White};
  box-shadow: ${u.Shadows.transparent};
  transition: ${u.Transitions.all};
  & input,
  & textarea {
    ${e=>e.icon||e.units||e.copy?null:p}
    ${e=>!e.icon||e.units||e.copy?null:m}
    ${e=>!e.units&&!e.copy||e.icon?null:I}
    ${e=>(e.units||e.copy)&&e.icon?y:null}
  }
  & textarea {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  &:hover,
  &:focus,
  &:focus-within {
    border-color: ${({validation:e})=>{switch(e){case"invalid":return u.Colors.Red[400];case"valid":return u.Colors.Green[500];case"warning":return u.Colors.Orange[500];default:return u.Colors.Blue[400]}}};
    border-color: ${({disabled:e})=>{if(e)return u.Colors.Black[200]}};
    box-shadow: ${({validation:e})=>{switch(e){case"invalid":return u.Shadows.focusInvalid;case"valid":return u.Shadows.focusValid;case"warning":return u.Shadows.focusWarning;default:return u.Shadows.focusDefault}}};
    box-shadow: ${({disabled:e})=>{if(e)return"none"}};
  }
`,w=s.default.div`
  display: flex;
  position: absolute;
  left: 16px;
  width: 16px;
  height: 16px;
  pointer-events: none;
  color: inherit;
  transition: ${u.Transitions.all};
`,M=s.default.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`,D=s.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  height: 100%;
  padding: 0 12px 0 8px;
`,S=s.default(c.CopyButton)`
  width: 24px;
  height: 24px;
  padding: 0 4px;
  color: ${({disabled:e})=>e?u.Colors.Black[400]:u.Colors.Black[900]};
`,_=s.default.span`
  font-family: ${u.Fonts.Grotesk};
  font-size: 14px;
  line-height: 1.5;
  font-weight: 700;
  color: ${u.Colors.Black[400]};
  text-transform: uppercase;
`,k=s.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  color: ${({validation:e})=>{switch(e){case"invalid":return u.Colors.Red[400];case"valid":return u.Colors.Green[500];case"warning":return u.Colors.Orange[500];case void 0:default:return u.Colors.Black[400]}}};
`,N=s.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  color: inherit;

  .blackPart,
  .primaryPart {
    fill: currentColor;
  }
`,L=s.default(g.TextSmall)`
  font-size: 12px;
  line-height: 18px;
  color: inherit;
`},52762:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Label=void 0;const n=r(t(52275)),i=t(67723),a=t(95148);A.Label=n.default.label`
  display: inline-flex;
  align-items: center;
  align-content: center;
  width: fit-content;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${i.Colors.Black[900]};
  position: relative;

  &:after {
    ${({isRequired:e})=>{switch(e){case!0:return`\n            content: '*';\n            color: ${i.Colors.Black[400]};\n            font-size: 14px;\n            line-height: 14px;\n            font-family: inherit;\n            margin-left: 4px;\n            transform: translateY(2px);\n          `}}};
  }

  ${a.HelpComponent} {
    position: relative;
    display: inline;
    transform: unset;
    right: unset;
    margin-left: 4px;
  }
`},66848:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Link=A.LabelLink=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.LabelLink=function({href:e,target:t,children:r,className:i}){return n.default.createElement(A.Link,{onClick:e=>e.stopPropagation(),href:e,target:t,className:i},r)},A.Link=i.default.a`
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: ${a.Colors.Blue[500]};
  }
  &:active,
  &:focus {
    outline: none;
    color: ${a.Colors.Blue[600]};
  }
`},96312:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.InlineToggleWrap=A.ToggleCheckbox=void 0;const o=a(t(2784)),s=i(t(52275)),u=t(67723),c=t(52762);A.ToggleCheckbox=function({isRequired:e,disabled:A,checked:t,onChange:r,trueLabel:n,falseLabel:i}){const a=e=>()=>{!0!==A&&r(e)};return o.default.createElement(p,{groupDisabled:A},o.default.createElement(l,{onClick:a(!0)},n),o.default.createElement(g,{isChecked:t},o.default.createElement(d,{type:"checkbox",disabled:A,checked:t,onChange:e=>r(e.currentTarget.checked),required:e})),o.default.createElement(l,{onClick:a(!1)},i))};const l=s.default.button`
  outline: none;
  font-family: ${u.Fonts.Inter};
  font-size: 14px;
  line-height: 20px;
  color: ${u.Colors.Black[900]};
  cursor: pointer;
`,d=s.default.input`
  position: absolute;
  height: 0;
  z-index: -1;
  opacity: 0;
  outline: none;
`,f=s.css`
  background-color: ${u.Colors.Blue[500]};

  &:hover,
  &:focus {
    background-color: ${u.Colors.Blue[400]};
  }
  &:after {
    transform: translateX(0%);
  }
`,g=s.default.label`
  display: flex;
  align-items: center;
  width: 48px;
  height: 24px;
  margin: 0 10px;
  position: relative;
  border-radius: ${u.BorderRad.full};
  background-color: ${u.Colors.Black[300]};
  cursor: pointer;
  transition: ${u.Transitions.all};

  &:hover,
  &:focus {
    background-color: ${u.Colors.Black[200]};
  }

  &:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border: 2px solid transparent;
    border-radius: ${u.BorderRad.round};
    background-color: ${u.Colors.White};
    background-clip: content-box;
    transform: translateX(100%);
    transition: ${u.Transitions.all};
  }

  ${e=>e.isChecked&&f};
`,h=s.css`
  opacity: 0.5;
  cursor: not-allowed;

  ${g},
  ${l} {
    cursor: not-allowed;
  }
`,p=s.default.div`
  display: flex;
  align-items: center;
  width: fit-content;
  ${e=>e.groupDisabled&&h};
`;A.InlineToggleWrap=s.default.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  ${c.Label} {
    line-height: 20px;
    margin-bottom: 0;
  }

  ${p} {
    margin-left: 12px;
  }
`},81328:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(75903),A),n(t(52762),A),n(t(66848),A),n(t(16057),A),n(t(96312),A),n(t(26672),A)},84952:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ArrowDownExpandedIcon=void 0;const n=r(t(2784)),i=t(70305);A.ArrowDownExpandedIcon=n.default.memo((()=>n.default.createElement(i.Icon,{size:"24",viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M11.1421 12.1049V3.58594H13.2718V12.1049H11.1421Z",fill:"currentColor"}),n.default.createElement("path",{d:"M12.207 16.9882L5.50595 10.2871L4 11.7931L12.207 20.0001L20.4141 11.7931L18.9081 10.2871L12.207 16.9882Z",fill:"currentColor"}))))},35891:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ArrowDownIcon=void 0;const n=r(t(2784)),i=t(70305);A.ArrowDownIcon=function(){return n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.13804 9.3253L3.67065 4.85791L2.66669 5.86187L8.13804 11.3332L13.6094 5.86187L12.6054 4.85791L8.13804 9.3253Z",fill:"currentColor"}))}},38234:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ArrowInsideIcon=void 0;const n=r(t(2784)),i=t(70305);A.ArrowInsideIcon=function(){return n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M13.8281 12.1874H2.57812C2.50937 12.1874 2.45312 12.2436 2.45312 12.3124V13.2499C2.45312 13.3186 2.50937 13.3749 2.57812 13.3749H13.8281C13.8969 13.3749 13.9531 13.3186 13.9531 13.2499V12.3124C13.9531 12.2436 13.8969 12.1874 13.8281 12.1874ZM6.25 8.03472H7.40469V2.74878C7.40469 2.68003 7.46094 2.62378 7.52969 2.62378H8.46719C8.53594 2.62378 8.59219 2.68003 8.59219 2.74878V8.03472H9.75C9.85469 8.03472 9.9125 8.15503 9.84844 8.23628L8.09844 10.4519C8.08674 10.4668 8.07181 10.4789 8.05475 10.4872C8.03769 10.4955 8.01897 10.4999 8 10.4999C7.98103 10.4999 7.96231 10.4955 7.94525 10.4872C7.92819 10.4789 7.91326 10.4668 7.90156 10.4519L6.15156 8.23784C6.0875 8.15503 6.14531 8.03472 6.25 8.03472Z",fill:"currentColor"}))}},40894:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ArrowOutsideIcon=void 0;const n=r(t(2784)),i=t(70305);A.ArrowOutsideIcon=function(){return n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M13.8281 12.1874H2.57812C2.50937 12.1874 2.45312 12.2436 2.45312 12.3124V13.2499C2.45312 13.3186 2.50937 13.3749 2.57812 13.3749H13.8281C13.8969 13.3749 13.9531 13.3186 13.9531 13.2499V12.3124C13.9531 12.2436 13.8969 12.1874 13.8281 12.1874ZM6.25 5.08893H7.40469V10.3749C7.40469 10.4436 7.46094 10.4999 7.52969 10.4999H8.46719C8.53594 10.4999 8.59219 10.4436 8.59219 10.3749V5.08893H9.75C9.85469 5.08893 9.9125 4.96862 9.84844 4.88737L8.09844 2.67174C8.08674 2.6568 8.0718 2.64472 8.05475 2.63641C8.03769 2.6281 8.01897 2.62378 8 2.62378C7.98103 2.62378 7.96231 2.6281 7.94525 2.63641C7.92819 2.64472 7.91326 2.6568 7.90156 2.67174L6.15156 4.8858C6.0875 4.96862 6.14531 5.08893 6.25 5.08893Z",fill:"currentColor"}))}},33702:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.BlockIcon=void 0;const n=r(t(2784)),i=t(70305);A.BlockIcon=()=>n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 1L14 4.75V11.5094L8 14.8844L2 11.5094V4.75L8 1ZM3.33333 6.2594L7.33333 8.5094V12.9796L3.33333 10.7296V6.2594ZM8.66667 12.9796L12.6667 10.7296V5.489L8 2.57233L3.97283 5.08931L7.99397 7.35121L11.0927 5.54365L11.7645 6.69535L8.66667 8.50241V12.9796Z",fill:"currentColor"}))},1079:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CheckboxIconStyles=A.CheckboxIcon=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(70305);A.CheckboxIcon=function(){return n.default.createElement(A.CheckboxIconStyles,{size:"24",viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M20 7.5975L9.90608 18L4 12.735L5.78463 11.0132L9.77205 14.5679L18.0857 6L20 7.5975Z",fill:"currentColor"}))},A.CheckboxIconStyles=i.default(a.Icon)``},88001:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CopyIcon=void 0;const n=r(t(2784)),i=t(70305);A.CopyIcon=n.default.memo((({className:e})=>n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},n.default.createElement("path",{d:"M10.6667 1.33325H2.66671C1.93004 1.33325 1.33337 1.92992 1.33337 2.66659V11.9999H2.66671V2.66659H10.6667V1.33325ZM12.6667 3.99992H5.33337C4.59671 3.99992 4.00004 4.59659 4.00004 5.33325V13.3333C4.00004 14.0699 4.59671 14.6666 5.33337 14.6666H12.6667C13.4034 14.6666 14 14.0699 14 13.3333V5.33325C14 4.59659 13.4034 3.99992 12.6667 3.99992ZM12.6667 13.3333H5.33337V5.33325H12.6667V13.3333Z",fill:"currentColor"}))))},10628:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CrossIcon=void 0;const n=r(t(2784)),i=t(70305);A.CrossIcon=n.default.memo((({className:e})=>n.default.createElement(i.Icon,{size:"20",viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.4095 12.1366L20.273 19L19.0002 20.2728L12.1367 13.4094L5.27331 20.2728L4.00051 19L10.864 12.1366L4.00018 5.27279L5.27297 4L12.1367 10.8638L19.0005 4L20.2733 5.27279L13.4095 12.1366Z",fill:"currentColor"}))))},64020:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.FailureIcon=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(70305);A.FailureIcon=function(){return n.default.createElement(s,{width:"80",height:"82",viewBox:"0 0 80 82",fill:"none"},n.default.createElement("rect",{y:"0.75",width:"80",height:"80",rx:"40",fill:a.Colors.Black[100]}),n.default.createElement("g",{clipPath:"url(#clip0)"},n.default.createElement("path",{d:"M43.0837 47.9011C42.2724 47.0489 40.8063 47.048 39.9938 47.8991L33.3112 54.6177C32.7033 55.2299 31.8828 55.5051 31.0801 55.4217C33.7426 53.1277 33.9923 51.1119 31.2461 48.7388C29.1178 46.8157 27.0866 48.0727 25.5141 49.9287C25.3827 49.0693 25.6515 48.1672 26.2925 47.5198L32.9881 40.7893C33.8282 39.9449 33.8294 38.5685 32.9904 37.7208C31.5732 36.4673 29.6051 33.2171 27.4661 35.2637C21.819 41.294 12.6395 46.9549 19.258 56.1845L14.5348 60.9077C13.6647 61.7548 15.0117 63.0997 15.8575 62.2303L28.0265 50.0613C28.5257 49.5408 29.4242 49.5407 29.9233 50.0614C30.6948 50.774 31.9702 51.8917 30.9108 52.9458L13.428 70.4289C12.3731 71.4882 11.2561 70.2123 10.5436 69.4412C9.10208 68.0525 11.9714 66.3362 12.6834 65.4046C13.5562 64.5589 12.2048 63.2119 11.361 64.0821C9.45044 65.9221 6.7947 68.0554 9.22105 70.764C10.0804 71.6649 11.1165 72.7803 12.4797 72.692C14.4549 73.3255 23.3366 62.6849 24.7688 61.7332C33.9145 68.3558 39.5877 59.0187 45.5143 53.4224C47.532 51.3283 44.3114 49.3048 43.0837 47.9011ZM21.268 44.1519L28.7924 36.5826C28.9644 36.4542 29.0565 36.4544 29.2285 36.5826L31.6618 39.0372C31.7805 39.1572 31.7807 39.3514 31.6623 39.4705L24.9652 46.2026C23.5891 47.5922 23.2418 49.6829 24.0224 51.4207L20.5913 54.8517C18.1561 51.6724 18.3857 47.0568 21.268 44.1519ZM44.188 52.104C39.1037 56.5795 33.9437 65.9696 26.1011 60.4008L29.5629 56.9389C31.2675 57.6553 33.3006 57.2828 34.6377 55.9362L41.3196 49.2182C41.4885 49.0878 41.5944 49.0925 41.7558 49.2182L44.1886 51.6724C44.3066 51.7914 44.3065 51.9849 44.188 52.104Z",fill:a.Colors.Black[500]}),n.default.createElement("path",{d:"M72.1978 12.9739C72.2823 11.6153 71.1761 10.5686 70.2694 9.71528C69.0739 8.46942 66.923 8.46942 65.7274 9.71528L55.6903 19.7525C46.4529 13.133 40.7989 22.3179 34.769 27.9611C32.724 30.094 35.9729 32.0722 37.2271 33.4855C38.0737 34.3237 39.45 34.3228 40.2949 33.4826L47.024 26.7884C47.6724 26.1462 48.5746 25.8772 49.4344 26.0086C47.5778 27.5827 46.3213 29.6113 48.2444 31.7406C50.618 34.4879 52.6359 34.2351 54.9272 31.5747C55.0105 32.3773 54.7353 33.1978 54.1228 33.8061L47.4046 40.4882C45.3593 42.6208 48.6066 44.5977 49.8608 46.0108C50.7069 46.8503 52.0829 46.8493 52.928 46.0089L60.5093 38.4726C63.0035 36.0006 64.0028 32.3596 63.1173 28.9705C62.9867 28.4708 62.4758 28.1714 61.9761 28.302C61.4764 28.4326 61.1771 28.9436 61.3076 29.4432C63.4381 35.4704 54.8605 40.9098 51.6094 44.6828C51.4904 44.801 51.2969 44.801 51.1778 44.6829L48.7242 42.2506C48.5981 42.089 48.5933 41.9835 48.7237 41.8142L55.4413 35.1328C56.7884 33.7951 57.1608 31.762 56.4445 30.0575C57.2067 28.7785 73.2783 14.5659 72.1978 12.9739ZM45.7066 25.4608L38.976 32.1564C38.8569 32.2748 38.6625 32.2747 38.5433 32.1566L36.0885 29.7228C35.96 29.551 35.9599 29.4588 36.0879 29.2869L43.6569 21.7627C46.5623 18.8797 51.1781 18.6502 54.3572 21.0854L50.9262 24.5165C49.1884 23.7358 47.0975 24.0833 45.7066 25.4608ZM69.9345 13.9223L52.4513 31.4055C52.1981 31.6589 51.8611 31.7984 51.5028 31.7984C50.7494 31.8835 50.0577 30.8369 49.5668 30.4179C49.0467 29.9185 49.0461 29.0204 49.5669 28.5211L67.05 11.038C67.549 10.5175 68.4478 10.5175 68.9467 11.038C69.7184 11.7505 70.9936 12.8681 69.9345 13.9223Z",fill:a.Colors.Black[500]}),n.default.createElement("path",{d:"M20.2025 31.5112L22.9347 32.5447C23.405 32.7265 23.9579 32.4889 24.1401 32.001C24.3228 31.518 24.0794 30.9782 23.5964 30.7955L20.8642 29.762C19.7369 29.316 19.0605 31.0985 20.2025 31.5112Z",fill:a.Colors.Red[400]}),n.default.createElement("path",{d:"M26.4211 27.1377C27.2559 28.0175 28.6201 26.6869 27.7592 25.8308C27.7594 25.8308 25.6346 23.655 25.6346 23.655C25.2738 23.2855 24.6817 23.2784 24.312 23.6393C23.9426 24.0002 23.9355 24.5922 24.2963 24.9618L26.4211 27.1377Z",fill:a.Colors.Red[400]}),n.default.createElement("path",{d:"M31.5609 23.5214C31.8595 24.7041 33.6946 24.2097 33.3693 23.0448L32.613 20.1752C32.4814 19.6758 31.9699 19.3776 31.4705 19.5093C30.9711 19.6409 30.6729 20.1524 30.8046 20.6517L31.5609 23.5214Z",fill:a.Colors.Red[400]})),n.default.createElement("rect",{x:"48",y:"49.25",width:"32",height:"32",rx:"16",fill:a.Colors.Red[400]}),n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M53.8461 65.25C53.8461 59.6422 58.3922 55.0961 64 55.0961C69.6078 55.0961 74.1538 59.6422 74.1538 65.25C74.1538 66.8763 73.7714 68.4133 73.0917 69.776L74.5134 71.0397C75.4608 69.323 75.9999 67.3494 75.9999 65.25C75.9999 58.6226 70.6274 53.25 64 53.25C57.3726 53.25 52 58.6226 52 65.25C52 71.8774 57.3726 77.2499 64 77.2499C65.3687 77.2499 66.6839 77.0208 67.9092 76.5987L66.934 74.9734C66.0051 75.2533 65.0201 75.4038 64 75.4038C58.3922 75.4038 53.8461 70.8578 53.8461 65.25Z",fill:a.Colors.White}),n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M68.3164 74.4434C69.9745 73.6636 71.3873 72.4485 72.4076 70.9453L73.7975 72.1808C72.6397 73.8145 71.0835 75.1459 69.2706 76.0336L68.3164 74.4434Z",fill:a.Colors.White}),n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M68.4036 68.4026L65.2512 65.2502L68.4037 62.0976L67.1523 60.8462L63.9998 63.9987L60.6255 60.6243L59.374 61.8758L62.7484 65.2502L59.3742 68.6244L60.6256 69.8759L63.9998 66.5016L67.1521 69.654L68.4036 68.4026Z",fill:a.Colors.White}),n.default.createElement("defs",null,n.default.createElement("clipPath",{id:"clip0"},n.default.createElement("rect",{width:"64",height:"64",fill:a.Colors.White,transform:"translate(8.25 8.75)"}))))};const s=i.default(o.Icon)`
  margin-bottom: 8px;
`},57548:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.FounderMemberIcon=void 0;const n=r(t(2784)),i=t(70305);A.FounderMemberIcon=n.default.memo((()=>n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{className:"memberInner",d:"M11.9026 5.15556L10.6558 6.66667L11.9026 8.17778C11.9569 8.24384 11.99 8.32234 11.9981 8.4045C12.0061 8.48666 11.9889 8.56925 11.9483 8.64303C11.9078 8.71682 11.8454 8.77889 11.7682 8.8223C11.6911 8.86572 11.6022 8.88877 11.5114 8.88889H5.64449V12H4.66666V4.44444C4.66666 4.32657 4.71817 4.21352 4.80986 4.13017C4.90155 4.04683 5.02591 4 5.15558 4C5.28524 4 5.4096 4.04683 5.50129 4.13017C5.59298 4.21352 5.64449 4.32657 5.64449 4.44444H11.5114C11.6022 4.44456 11.6911 4.46761 11.7682 4.51103C11.8454 4.55445 11.9078 4.61652 11.9483 4.6903C11.9889 4.76408 12.0061 4.84667 11.9981 4.92883C11.99 5.01099 11.9569 5.08949 11.9026 5.15556Z",fill:"currentColor"}))))},70305:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Icon=void 0;const n=r(t(2784)),i=r(t(52275));A.Icon=n.default.memo(i.default.svg`
  height: ${e=>e.size}px;
  width: ${e=>e.size}px;
  position: relative;
`)},77191:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.LoaderComponent=A.Loader=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.Loader=function(){return n.default.createElement(A.LoaderComponent,{viewBox:"0 0 24 24",fill:"none"},n.default.createElement("path",{d:"M22.9092 11.4546H18.5455C17.9431 11.4546 17.4546 11.9431 17.4546 12.5455C17.4546 13.1479 17.9431 13.6364 18.5455 13.6364H22.9092C23.5116 13.6364 24.0001 13.1479 24.0001 12.5455C24.0001 11.9431 23.5117 11.4546 22.9092 11.4546Z",fill:a.Colors.Black[500]}),n.default.createElement("path",{d:"M18.9423 4.06013L15.8566 7.14579C15.4306 7.57171 15.4306 8.26246 15.8566 8.6885C16.0696 8.90158 16.3488 9.00811 16.6279 9.00811C16.9072 9.00811 17.1864 8.90169 17.3994 8.6885L20.485 5.60285C20.9111 5.17692 20.9111 4.48617 20.485 4.06013C20.0591 3.63409 19.3683 3.63409 18.9423 4.06013Z",fill:a.Colors.Black[500]}),n.default.createElement("path",{opacity:"0.9",d:"M12.0001 0.54541C11.3977 0.54541 10.9092 1.03389 10.9092 1.63632V5.99998C10.9092 6.60242 11.3977 7.0909 12.0001 7.0909C12.6025 7.0909 13.091 6.60242 13.091 5.99998V1.63632C13.091 1.03389 12.6025 0.54541 12.0001 0.54541Z",fill:a.Colors.Black[500]}),n.default.createElement("path",{opacity:"0.8",d:"M5.05756 4.06013C4.63163 3.63409 3.94088 3.63409 3.51484 4.06013C3.0888 4.48617 3.0888 5.17681 3.51484 5.60285L6.60038 8.6885C6.81335 8.90158 7.09257 9.00811 7.3718 9.00811C7.65091 9.00811 7.93025 8.90158 8.1431 8.6885C8.56914 8.26258 8.56914 7.57182 8.1431 7.14579L5.05756 4.06013Z",fill:a.Colors.Black[500]}),n.default.createElement("path",{opacity:"0.7",d:"M5.45457 11.4546H1.09091C0.488476 11.4546 0 11.9431 0 12.5455C0 13.1479 0.488476 13.6364 1.09091 13.6364H5.45457C6.05701 13.6364 6.54549 13.1479 6.54549 12.5455C6.54549 11.9431 6.05701 11.4546 5.45457 11.4546Z",fill:a.Colors.Black[500]}),n.default.createElement("path",{opacity:"0.5",d:"M6.5999 16.4024L3.51435 19.4881C3.08831 19.9141 3.08831 20.6047 3.51435 21.0308C3.72732 21.2437 4.00654 21.3503 4.28577 21.3503C4.56499 21.3503 4.84422 21.2437 5.05707 21.0308L8.14261 17.9451C8.56865 17.5191 8.56865 16.8285 8.14261 16.4024C7.71669 15.9764 7.02593 15.9764 6.5999 16.4024Z",fill:a.Colors.Black[500]}),n.default.createElement("path",{opacity:"0.4",d:"M11.9996 19.0909C11.3972 19.0909 10.9087 19.5794 10.9087 20.1819V22.3637C10.9087 22.9661 11.3972 23.4546 11.9996 23.4546C12.602 23.4546 13.0905 22.9661 13.0905 22.3637V20.1819C13.0905 19.5794 12.602 19.0909 11.9996 19.0909Z",fill:a.Colors.Black[500]}))},A.LoaderComponent=i.default.svg`
  width: 24px;
  height: 24px;
  border-radius: ${a.BorderRad.round};
  animation: spinLoader 1s infinite linear;
  justify-self: start;

  @keyframes spinLoader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`},20625:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.NotificationIcon=void 0;const n=r(t(2784)),i=t(70305);A.NotificationIcon=function(){return n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M3.33336 5.33329C3.33336 2.75596 5.4227 0.666626 8.00003 0.666626C10.5774 0.666626 12.6667 2.75596 12.6667 5.33329C12.6667 7.5684 13.1447 8.95638 13.5853 9.76406C13.8065 10.1696 14.0219 10.4356 14.1715 10.5935C14.2465 10.6727 14.3054 10.7252 14.3409 10.7547C14.3586 10.7695 14.3705 10.7786 14.3757 10.7824C14.3782 10.7843 14.3791 10.7849 14.3782 10.7843L14.3754 10.7824L14.373 10.7807L14.3715 10.7797L14.3707 10.7792C14.3706 10.7791 14.3705 10.7791 14.369 10.7812L14 12H2.00003L1.63101 10.7812C1.62951 10.7791 1.62944 10.7791 1.62937 10.7792L1.62857 10.7797L1.62709 10.7807L1.62466 10.7824L1.62188 10.7843C1.62095 10.7849 1.62183 10.7843 1.62439 10.7824C1.62953 10.7786 1.64143 10.7695 1.65918 10.7547C1.69465 10.7252 1.75358 10.6727 1.82856 10.5935C1.97818 10.4356 2.19357 10.1696 2.41476 9.76406C2.85532 8.95638 3.33336 7.5684 3.33336 5.33329ZM3.43291 10.6666H12.5671C12.5164 10.5835 12.4655 10.4955 12.4148 10.4025C11.8553 9.37687 11.3334 7.76485 11.3334 5.33329C11.3334 3.49234 9.84098 1.99996 8.00003 1.99996C6.15908 1.99996 4.66669 3.49234 4.66669 5.33329C4.66669 7.76485 4.14474 9.37687 3.58529 10.4025C3.53456 10.4955 3.48363 10.5835 3.43291 10.6666Z",fill:"currentColor"}),n.default.createElement("path",{d:"M8 15.3333C6.89543 15.3333 6 14.4378 6 13.3333H7.33333C7.33333 13.7014 7.63181 13.9999 8 13.9999C8.36819 13.9999 8.66667 13.7014 8.66667 13.3333H10C10 14.4378 9.10457 15.3333 8 15.3333Z",fill:"currentColor"}))}},45740:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.QuestionIcon=void 0;const n=r(t(2784)),i=t(70305);A.QuestionIcon=function(){return n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M9.55266 8.11325L10.1527 7.49991C10.5327 7.11991 10.7727 6.58658 10.7727 5.99992C10.7727 4.52658 9.57933 3.33325 8.106 3.33325C6.63266 3.33325 5.43933 4.52658 5.43933 5.99992H6.77266C6.77266 5.26658 7.37266 4.66658 8.106 4.66658C8.83933 4.66658 9.43933 5.26658 9.43933 5.99992C9.43933 6.36658 9.29266 6.69991 9.046 6.93991L8.21933 7.77991C7.73933 8.26658 7.43933 8.93324 7.43933 9.66658V9.99991H8.77266C8.77266 8.99991 9.07266 8.59991 9.55266 8.11325ZM7.43911 12.6666H8.77245V11.3333H7.43911V12.6666Z",fill:"currentColor"}))}},14478:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SuccessIcon=void 0;const n=r(t(2784)),i=t(67723),a=t(70305);A.SuccessIcon=function(){return n.default.createElement(a.Icon,{size:"24",viewBox:"0 0 24 24",fill:"none"},n.default.createElement("path",{d:"M9.66667 3.66679H10.3333V4.33346C10.3333 4.70159 10.6318 5.00012 11 5.00012C11.3682 5.00012 11.6667 4.70159 11.6667 4.33346V3.66679H12.3333C12.7015 3.66679 13 3.36826 13 3.00012C13 2.63199 12.7015 2.33346 12.3333 2.33346H11.6667V1.66679C11.6667 1.29866 11.3682 1.00012 11 1.00012C10.6318 1.00012 10.3333 1.29866 10.3333 1.66679V2.33346H9.66667C9.29847 2.33346 9 2.63199 9 3.00012C9 3.36832 9.29847 3.66679 9.66667 3.66679Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M23.3333 17.3335H22.6667V16.6668C22.6667 16.2987 22.3681 16.0001 22 16.0001C21.6319 16.0001 21.3333 16.2987 21.3333 16.6668V17.3335H20.6667C20.2985 17.3335 20 17.632 20 18.0001C20 18.3683 20.2985 18.6668 20.6667 18.6668H21.3333V19.3335C21.3333 19.7016 21.6319 20.0001 22 20.0001C22.3681 20.0001 22.6667 19.7016 22.6667 19.3335V18.6668H23.3333C23.7015 18.6668 24 18.3683 24 18.0001C24 17.632 23.7015 17.3335 23.3333 17.3335Z",fill:i.Colors.Blue[500]}),n.default.createElement("path",{d:"M5.30469 4.48157C6.08009 4.48157 6.71094 3.85073 6.71094 3.07532C6.71094 2.29991 6.08009 1.66907 5.30469 1.66907C4.52928 1.66907 3.89844 2.29991 3.89844 3.07532C3.89844 3.85073 4.52928 4.48157 5.30469 4.48157ZM5.30469 2.60657C5.56316 2.60657 5.77344 2.81685 5.77344 3.07532C5.77344 3.33379 5.56316 3.54407 5.30469 3.54407C5.04622 3.54407 4.83594 3.33379 4.83594 3.07532C4.83594 2.8169 5.04622 2.60657 5.30469 2.60657Z",fill:i.Colors.Blue[500]}),n.default.createElement("path",{d:"M21.0557 13.7842C21.0557 13.526 20.8451 13.3154 20.5869 13.3154C20.3287 13.3154 20.1182 13.526 20.1182 13.7842C20.1182 14.0424 20.3287 14.2529 20.5869 14.2529C20.8451 14.2529 21.0557 14.0423 21.0557 13.7842Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M15.7119 4.4563C15.9701 4.4563 16.1807 4.24574 16.1807 3.98755C16.1807 3.72936 15.9701 3.5188 15.7119 3.5188C15.4537 3.5188 15.2432 3.72936 15.2432 3.98755C15.2432 4.24569 15.4538 4.4563 15.7119 4.4563Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M21.2446 5.00634C20.9284 5.05486 20.7088 5.36839 20.7542 5.70674C20.7707 5.83134 20.7843 5.9524 20.7963 6.07185C20.9338 7.4375 20.7691 8.4727 20.2938 9.22662C19.7767 10.0466 18.818 10.5276 17.9083 10.4233C17.6957 10.3988 17.4864 10.3426 17.2864 10.2589C17.323 10.1914 17.3569 10.1222 17.3879 10.0518C17.5552 9.67265 17.6246 9.23629 17.5975 8.80316C17.5767 8.4727 17.4999 8.14435 17.3667 7.84436C17.1009 7.246 16.6533 6.83689 16.1062 6.69229C15.5027 6.53287 14.8372 6.9623 14.6226 7.64948C14.4826 8.09792 14.5195 8.61085 14.7323 9.17391C14.909 9.64186 15.1679 10.0644 15.4867 10.4232C15.1988 10.5874 14.8603 10.7067 14.4882 10.7696C14.1727 10.8229 13.9573 11.1399 14.0072 11.4776C14.052 11.7825 14.298 12 14.5776 12C14.6076 12 14.638 11.9976 14.6684 11.9924C15.3595 11.8756 15.977 11.6049 16.467 11.2192C16.8742 11.4498 17.321 11.6009 17.7851 11.6541C17.9115 11.6686 18.0377 11.6757 18.1639 11.6757C19.3799 11.6757 20.5622 11.0136 21.2523 9.91912C21.937 8.83314 22.1485 7.39785 21.8989 5.53136C21.8536 5.19301 21.5604 4.95782 21.2446 5.00634ZM15.7195 8.04183C15.743 7.96671 15.8079 7.9082 15.8397 7.89723C16.1082 7.9738 16.257 8.22914 16.3222 8.37599C16.4826 8.73691 16.4904 9.18729 16.3422 9.52338C16.3362 9.53708 16.3299 9.55079 16.3234 9.56433C16.1031 9.31657 15.9242 9.02706 15.8044 8.70982C15.6993 8.4316 15.67 8.20061 15.7195 8.04183Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M18.9031 14.9377C18.9031 14.4492 18.5117 14.0533 18.0288 14.0533C17.5458 14.0533 17.1543 14.4492 17.1543 14.9377C17.1543 15.4261 17.5458 15.822 18.0288 15.822C18.5117 15.822 18.9031 15.4261 18.9031 14.9377Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M12.6541 8.4223C12.6541 7.93396 12.2626 7.53809 11.7796 7.53809C11.2968 7.53809 10.9053 7.93396 10.9053 8.4223C10.9053 8.91064 11.2968 9.30652 11.7796 9.30652C12.2626 9.30652 12.6541 8.91064 12.6541 8.4223Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M20.2109 3.8891C20.2109 3.40076 19.8193 3.00488 19.3364 3.00488C18.8534 3.00488 18.4619 3.40076 18.4619 3.8891C18.4619 4.37762 18.8534 4.7735 19.3364 4.7735C19.8193 4.7735 20.2109 4.37762 20.2109 3.8891Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M7.08999 6.49108C6.82742 6.20489 6.38265 6.18566 6.09646 6.44805C5.81027 6.71062 5.79122 7.15538 6.05361 7.44158L6.32937 7.74224L0.164758 22.034C-0.0600956 22.5556 0.0413448 23.1374 0.429528 23.5521C0.703088 23.8441 1.06838 23.9996 1.44778 23.9996C1.6069 23.9996 1.76876 23.9721 1.92696 23.9159L16.4348 18.7591L16.636 18.9785C16.7748 19.1297 16.9643 19.2063 17.1544 19.2063C17.3243 19.2063 17.4944 19.1451 17.6295 19.0213C17.9157 18.7588 17.9348 18.314 17.6724 18.028L7.08999 6.49108ZM6.52438 20.7894L4.41024 15.7419L6.37606 11.1846L9.89663 19.5908L6.52438 20.7894ZM1.45602 22.5908L3.6368 17.5351L5.19723 21.2611L1.45602 22.5908ZM11.2236 19.1191L7.1495 9.39146L7.36776 8.88573L15.3944 17.6365L11.2236 19.1191Z",fill:i.Colors.Black[900]}))}},85249:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferIcon=void 0;const n=r(t(2784)),i=t(70305);A.TransferIcon=n.default.memo((({className:e})=>n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.01061 8.34823L5.31143 9.82643L4.61945 10.9626L1.33337 8.85138L1.38734 7.68413L13.7408 1.33325L14.6667 2.09081L11.7309 14.4869L10.7512 14.8967L7.67263 12.9206L6.09552 15.3683L4.89904 14.9986V11.9833H6.20386V12.7718L6.93528 11.6366L7.82513 11.4382L10.6765 13.2685L13.0662 3.17867L3.01061 8.34823Z",fill:"currentColor",className:"blackPart"}),n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1579 5.80433L7.28517 11.1581L6.24561 10.196L10.1183 4.84229L11.1579 5.80433Z",fill:"currentColor",className:"primaryPart"}))))},12447:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.PickedTransferIcon=void 0;const n=r(t(2784)),i=t(79530);A.PickedTransferIcon=function({type:e}){switch(e){case"transfer":return n.default.createElement(i.TransferIcon,null);case"send":return n.default.createElement(i.ArrowOutsideIcon,null);case"receive":return n.default.createElement(i.ArrowInsideIcon,null);default:return null}}},40443:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.VerifiedMemberIcon=void 0;const n=r(t(2784)),i=t(70305);A.VerifiedMemberIcon=n.default.memo((()=>n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{className:"memberInner",d:"M12.8889 5.30975L6.72039 11.6668L3.11112 8.44931L4.20173 7.39713L6.63848 9.56941L11.7191 4.3335L12.8889 5.30975Z",fill:"currentColor"}))))},64261:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WaitingIcon=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(70305);A.WaitingIcon=function(){return n.default.createElement(s,{width:"132",height:"108",viewBox:"0 0 132 108",fill:"none"},n.default.createElement("rect",{x:"11",width:"108",height:"108",rx:"54",fill:a.Colors.Black[700]}),n.default.createElement("path",{d:"M67.9276 79.837C65.9311 79.8425 63.9346 79.8468 61.9381 79.85C61.2671 79.8511 60.5961 79.852 59.9252 79.8524C58.7093 79.8533 57.8901 79.6044 57.6177 78.2404C57.3874 77.0871 55.7878 77.2421 55.4769 78.2404C54.7088 80.7065 53.4383 79.7403 52.7266 78.0814C52.0166 76.4265 51.8346 74.5743 51.5245 72.8131C51.2966 71.5189 49.3775 71.8817 49.344 73.1141C49.2999 74.737 49.1513 76.3341 48.7474 77.9081C48.3308 79.5321 47.7063 81.0928 47.0864 82.6445C46.5461 83.9972 48.6949 84.5791 49.2272 83.2465C49.7765 81.8716 50.3265 80.4892 50.7359 79.0629C51.4967 80.9287 53.0706 83.0391 55.3134 81.7954C55.7306 81.564 56.1203 81.235 56.4624 80.8514C57.6287 82.226 59.3647 82.1177 60.9891 82.1157C63.302 82.1127 65.615 82.1075 67.9279 82.1014C69.3561 82.0976 69.3587 79.8332 67.9276 79.837Z",fill:a.Colors.White}),n.default.createElement("path",{d:"M38.0703 104L50.4233 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M34.1177 104L46.4706 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M42.0234 104L54.3764 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M45.9766 104L58.3295 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M49.9297 104L62.2826 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M53.8828 104L66.2358 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M57.835 104L70.1879 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M61.7881 104L74.141 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M65.7412 104L78.0942 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M69.6943 104L82.0473 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M73.647 104L85.9999 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M77.6001 104L89.953 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M81.5527 104L93.9057 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M15.8359 12.439L5.68408 22.6074",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M11.8824 12.439L2 22.3375",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M17.1096 15.1222L9.54346 22.7007",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M18.8 17.3882L13.3647 22.8324",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M10.8941 12.439C4.17412 12.439 2.16471 19.038 2 22.3375H19.7882M10.8941 12.439C17.6141 12.439 54.2118 12.439 71.6706 12.439C74.3059 12.6039 79.5765 14.8146 79.5765 22.3375C79.5765 24.6393 79.5765 30.1197 79.5765 37.1852M10.8941 12.439C18.0094 12.439 19.7882 19.038 19.7882 22.3375M79.5765 91.132H93.9059C93.2471 95.4213 89.4588 104 79.5765 104C71.2504 104 46.4394 104 29.6706 104M79.5765 91.132C79.5765 84.817 79.5765 77.2469 79.5765 68.3261M79.5765 91.132H40.5412C40.5412 102.614 32.6353 104 29.6706 104M19.7882 22.3375V45.5989C19.7882 45.5989 19.7882 55.2515 19.7882 61.4365C19.7882 71.8736 19.7882 88.1624 19.7882 88.1624V91.132C19.7882 101.426 26.3765 104 29.6706 104M32.6353 28.7715H67.2235M32.6353 40.1547H67.2235M32.6353 51.0431H67.2235M32.6353 62.4263H53.3882M79.5765 37.1852L75.6235 44.1141L77.1059 55.0025L72.6588 51.0431C69.5294 55.4974 65.1482 65.7918 72.6588 71.335M79.5765 37.1852L91.4353 16.8933C96.0471 9.46943 109.816 -2.60673 128 8.47958C119.699 19.5659 98.1882 47.7436 88.4706 60.4466C86.6588 63.0862 80.96 68.9593 72.6588 71.335M72.6588 71.335C69.4965 77.2741 68.0471 80.4086 67.7176 81.2335L72.6588 71.335ZM72.6588 71.335C83.5294 55.0025 106.654 21.0507 112.188 15.9034",stroke:a.Colors.Blue[500],strokeWidth:"3"}))};const s=i.default(o.Icon)`
  margin-bottom: 8px;
`},79530:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(84952),A),n(t(35891),A),n(t(38234),A),n(t(40894),A),n(t(88001),A),n(t(10628),A),n(t(70305),A),n(t(77191),A),n(t(45740),A),n(t(14478),A),n(t(85249),A)},8382:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Symbol=A.AlertSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.AlertSymbol=function({className:e}){return n.default.createElement(A.Symbol,{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e||"symbol"},n.default.createElement("path",{className:"blackPart",fillRule:"evenodd",clipRule:"evenodd",d:"M10.9515 1.57408L12.5286 1.55859L23.7844 21.5586L23.0001 22.9H1.00011L0.207275 21.5741L10.9515 1.57408ZM11.7626 3.86763L2.50525 21.1H21.4609L11.7626 3.86763Z",fill:a.Colors.Black[900]}),n.default.createElement("path",{className:"primaryPart",d:"M10.875 18.375C10.875 18.6734 10.9935 18.9595 11.2045 19.1705C11.4155 19.3815 11.7016 19.5 12 19.5C12.2984 19.5 12.5845 19.3815 12.7955 19.1705C13.0065 18.9595 13.125 18.6734 13.125 18.375C13.125 18.0766 13.0065 17.7905 12.7955 17.5795C12.5845 17.3685 12.2984 17.25 12 17.25C11.7016 17.25 11.4155 17.3685 11.2045 17.5795C10.9935 17.7905 10.875 18.0766 10.875 18.375ZM11.4375 15.75H12.5625C12.6656 15.75 12.75 15.6656 12.75 15.5625V9.1875C12.75 9.08437 12.6656 9 12.5625 9H11.4375C11.3344 9 11.25 9.08437 11.25 9.1875V15.5625C11.25 15.6656 11.3344 15.75 11.4375 15.75Z",fill:a.Colors.Blue[500]}))},A.Symbol=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},78478:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.EditSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.EditSymbol=function({className:e}){return n.default.createElement(o,{viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},n.default.createElement("path",{className:"primaryPart",d:"M10.9564 8.37713L7.62305 5.0438L8.37729 4.28955L11.7106 7.62288L10.9564 8.37713Z",fill:a.Colors.Blue[500]}),n.default.createElement("path",{className:"blackPart",d:"M2.96633 10.0354L2.63315 13.3672L5.96494 13.034L13.8657 5.13331L10.867 2.1347L2.96633 10.0354ZM2.02191 9.37706L10.4664 0.932617H11.2677L15.0677 4.73262V5.534L6.62329 13.9784L6.27899 14.1416L2.05676 14.5638L1.43652 13.9436L1.85875 9.72137L2.02191 9.37706Z",fill:a.Colors.Black[900]}))};const o=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},39119:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.FailureSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.FailureSymbol=function({className:e}){return n.default.createElement(o,{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},n.default.createElement("path",{className:"blackPart",d:"M1.84615 12C1.84615 6.39216 6.39216 1.84615 12 1.84615C17.6078 1.84615 22.1538 6.39216 22.1538 12C22.1538 13.6263 21.7714 15.1633 21.0917 16.526L22.5134 17.7897C23.4608 16.073 23.9999 14.0994 23.9999 12C23.9999 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 23.9999 12 23.9999C13.3687 23.9999 14.6839 23.7708 15.9092 23.3487L14.934 21.7234C14.0051 22.0033 13.0201 22.1538 12 22.1538C6.39216 22.1538 1.84615 17.6078 1.84615 12Z",fill:a.Colors.Black[900]}),n.default.createElement("path",{className:"primaryPart",d:"M16.3162 21.1934C17.9742 20.4136 19.3871 19.1985 20.4073 17.6953L21.7973 18.9308C20.6394 20.5645 19.0833 21.8959 17.2703 22.7836L16.3162 21.1934Z",fill:a.Colors.Blue[500]}),n.default.createElement("path",{className:"blackPart",d:"M16.4038 15.1526L13.2515 12.0002L16.404 8.8476L15.1525 7.59616L12 10.7487L8.62571 7.37433L7.37427 8.62577L10.7486 12.0002L7.37443 15.3744L8.62587 16.6259L12 13.2516L15.1524 16.404L16.4038 15.1526Z",fill:a.Colors.Black[900]}))};const o=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},70245:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.HomeSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.HomeSymbol=function({className:e}){return n.default.createElement(o,{viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},n.default.createElement("path",{className:"blackPart",d:"M2.19526 6.86165L7.5286 1.52832H8.4714L13.8047 6.86165L14 7.33306V13.9997L13.3333 14.6664H2.66667L2 13.9997V7.33306L2.19526 6.86165ZM3.33333 7.6092V13.3331H12.6667V7.6092L8 2.94253L3.33333 7.6092Z",fill:a.Colors.Black[900]}),n.default.createElement("path",{className:"primaryPart",d:"M5.33337 7.33301H10.6667V11.9997H9.33337V8.66634H6.66671V11.9997H5.33337V7.33301Z",fill:a.Colors.Blue[500]}))};const o=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},95852:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.LinkSymbolStyle=A.LinkSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.LinkSymbol=function({className:e}){return n.default.createElement(A.LinkSymbolStyle,{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},n.default.createElement("path",{className:"blackPart",d:"M1.1001 3.99998L2.0001 3.09998H12.8001V4.89998H2.9001V21.1H19.1001V11.2H20.9001V22L20.0001 22.9H2.0001L1.1001 22V3.99998Z",fill:a.Colors.Black[900]}),n.default.createElement("path",{className:"primaryPart",d:"M15.4999 1.09998H21.9999L22.8999 1.99998V8.49998H21.0999V4.17277L10.6363 14.6364L9.36353 13.3636L19.8271 2.89998H15.4999V1.09998Z",fill:a.Colors.Blue[500]}))},A.LinkSymbolStyle=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},68873:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SuccessSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.SuccessSymbol=function({className:e}){return n.default.createElement(o,{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},n.default.createElement("path",{className:"blackPart",d:"M12 1.84615C6.39216 1.84615 1.84615 6.39216 1.84615 12C1.84615 17.6078 6.39216 22.1538 12 22.1538C17.6078 22.1538 22.1538 17.6078 22.1538 12C22.1538 6.39216 17.6078 1.84615 12 1.84615ZM0 12C0 5.37256 5.37256 0 12 0C18.6274 0 23.9999 5.37256 23.9999 12C23.9999 18.6274 18.6274 23.9999 12 23.9999C5.37256 23.9999 0 18.6274 0 12Z",fill:a.Colors.Black[900]}),n.default.createElement("path",{className:"primaryPart",d:"M17.734 8.60827L10.4977 16.6497L6.26367 12.5797L7.54306 11.2487L10.4016 13.9965L16.3616 7.37335L17.734 8.60827Z",fill:a.Colors.Blue[500]}))};const o=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},21790:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.TransferSymbol=function({className:e}){return n.default.createElement(o,{viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},n.default.createElement("path",{className:"blackPart",d:"M3.01061 8.34823L5.31143 9.82643L4.61945 10.9626L1.33337 8.85138L1.38734 7.68413L13.7408 1.33325L14.6667 2.09081L11.7309 14.4869L10.7512 14.8967L7.67263 12.9206L6.09552 15.3683L4.89904 14.9986V11.9833H6.20386V12.7718L6.93528 11.6366L7.82513 11.4382L10.6765 13.2685L13.0662 3.17867L3.01061 8.34823Z",fill:a.Colors.Black[900]}),n.default.createElement("path",{className:"primaryPart",d:"M11.1579 5.80433L7.28517 11.1581L6.24561 10.196L10.1183 4.84229L11.1579 5.80433Z",fill:a.Colors.Blue[500]}))};const o=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},96528:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AddMembershipButton=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(54698),o=t(59686);A.AddMembershipButton=({className:e,children:A,size:t})=>{const{showModal:r}=a.useModal();return n.default.createElement(s,{size:t,onClick:()=>r({modal:"BuyMembership"}),className:e},A)};const s=i.default(o.ButtonPrimary)`
  justify-self: center;
  align-self: center;
`},75270:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AddMembershipButtonSwitch=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(72433),s=t(64342);A.AddMembershipButtonSwitch=({onClick:e})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(d,{onClick:e},n.default.createElement(u,null,n.default.createElement(o.MyProfileIcon,null)),n.default.createElement(c,null,"New Member"),n.default.createElement(l,null,"Create a New Membership")));const u=i.default.span`
  display: flex;
  grid-area: createicon;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: ${a.BorderRad.round};
  background-color: ${a.Colors.Black[700]};
  color: ${a.Colors.Black[75]};
  transition: ${a.Transitions.all};

  .nav-icon {
    .whitePart {
      transition: ${a.Transitions.all};
    }
    .primaryPart {
      fill: ${a.Colors.Blue[500]};
      transition: ${a.Transitions.all};
    }
  }
`,c=i.default.h6`
  grid-area: createtitle;
  color: ${a.Colors.Black[75]};
  transition: ${a.Transitions.all};
`,l=i.default(s.TextSmall)`
  grid-area: createtext;
  color: ${a.Colors.Black[400]};
  transition: ${a.Transitions.all};
`,d=i.default.button`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 20px 18px;
  grid-template-areas:
    'createicon createtitle'
    'createicon createtext';
  grid-column-gap: 8px;
  grid-row-gap: 4px;
  justify-content: start;
  justify-items: start;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border-radius: ${a.BorderRad.s};
  transition: ${a.Transitions.all};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${a.Colors.Black[600]};

    ${u} {
      background-color: ${a.Colors.Black[500]};
      color: ${a.Colors.Black[50]};
    }
    ${c} {
      color: ${a.Colors.Black[50]};
    }
    ${l} {
      color: ${a.Colors.Black[300]};
    }
  }
`},21557:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.InviteMemberButton=void 0;const n=r(t(2784)),i=t(15689),a=t(73233),o=t(59686);A.InviteMemberButton=({className:e,children:A,size:t})=>{const[r,s]=i.useToggle();return n.default.createElement(n.default.Fragment,null,n.default.createElement(o.ButtonGhost,{size:t,onClick:s,className:e},A),r&&n.default.createElement(a.InviteMemberModal,{onClose:s}))}},24619:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MemberInfo=void 0;const n=r(t(2784)),i=t(26812),a=(t(57548),t(40443)),o=t(75113);A.MemberInfo=n.default.memo((({member:e,onClick:A,isOnDark:t,showId:r,memberSize:s,size:u,className:c})=>n.default.createElement(o.MemberInfoWrap,{isOnDark:t,memberSize:s,className:c},n.default.createElement(o.MemberPhoto,null,n.default.createElement(i.Avatar,{avatarUri:e.avatarUri})),n.default.createElement(o.MemberHandle,{onClick:A},e.handle),n.default.createElement(o.MemberIcons,null,e.isVerified&&n.default.createElement(o.MemberStatusHelp,{icon:n.default.createElement(a.VerifiedMemberIcon,null),helperText:"Lorem fishy"}),!1),!r&&n.default.createElement(o.MemberRoles,null,n.default.createElement(o.MemberRoleHelp,{memberRole:"LI",helperText:"Lorem fishy",size:u})),r&&n.default.createElement(o.MemberId,null,"Worker ID: ",e.id))))},15768:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MemberAccounts=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(10233),o=t(1772),s=t(84124);A.MemberAccounts=({member:e})=>{const A={address:e.rootAccount,name:"Root Account"},t={address:e.controllerAccount,name:"Controller Account"};return n.default.createElement(u,null,n.default.createElement(s.MembershipLabel,{text:"Root account"}),!!A&&n.default.createElement(a.AccountRow,null,n.default.createElement(o.AccountInfo,{account:A})),n.default.createElement(s.MembershipLabel,{text:"Controller account"}),!!t&&n.default.createElement(a.AccountRow,null,n.default.createElement(o.AccountInfo,{account:t})))};const u=i.default.div`
  display: grid;
  grid-row-gap: 16px;
  padding: 24px;
`},80132:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MemberDetails=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(3100),o=t(67723),s=t(27609),u=t(81328),c=t(33702),l=t(21790),d=t(20882),f=t(64342),g=t(84124),h=t(24619),p=t(16185);A.MemberDetails=n.default.memo((({member:e})=>{const{data:A,loading:t}=a.useGetMemberQuery({variables:{id:e.id}});if(t||!A||!A.membership)return n.default.createElement(p.EmptyBody,null,"Loading...");const r=A.membership.registeredAtBlock;return n.default.createElement(I,null,n.default.createElement(y,null,n.default.createElement(g.MembershipLabel,{text:"About"}),n.default.createElement(E,null,(null==e?void 0:e.about)||"")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Registered on"}),n.default.createElement(C,null,n.default.createElement(E,null,s.formatDateString(A.membership.registeredAtTime)),n.default.createElement(m,{height:r.block,network:r.network}))),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Member ID"}),n.default.createElement(E,null,null==e?void 0:e.id)),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Member Name"}),n.default.createElement(E,null,null==e?void 0:e.name)),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Invitations Left"}),n.default.createElement(w,null,n.default.createElement(E,null,null==e?void 0:e.inviteCount),n.default.createElement(d.TransferInviteButton,{member:e,square:!1},n.default.createElement(l.TransferSymbol,null),"Transfer Invites"))),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Invited"}),n.default.createElement(C,null,(A.membership.invitees||[]).map((e=>n.default.createElement(h.MemberInfo,{member:e,key:e.handle}))))),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Hired"}),n.default.createElement(E,null,"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Applied"}),n.default.createElement(E,null,"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Being A leader"}),n.default.createElement(E,null,"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Being Council Member"}),n.default.createElement(E,null,"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Slashed"}),n.default.createElement(E,null,"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Terminated"}),n.default.createElement(E,null,"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Initiating leaving"}),n.default.createElement(E,null,"-")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Blog posts"}),n.default.createElement(E,null,"-")))}));const m=n.default.memo((({height:e,network:A})=>n.default.createElement(v,null,n.default.createElement(c.BlockIcon,null),n.default.createElement(Q,null,s.formatTokenValue(e)),n.default.createElement(b,null,"on ",A," network")))),I=i.default.ul`
  display: grid;
  grid-row-gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    visibility: hidden;
  }
`,y=i.default.li`
  display: grid;
  grid-row-gap: 8px;
  width: 100%;
  height: fit-content;
`,B=i.default.li`
  display: grid;
  grid-template-columns: 168px 1fr;
  grid-column-gap: 24px;
`,E=i.default(f.TextMedium)`
  color: ${o.Colors.Black[600]};
`,C=i.default.div`
  display: grid;
  grid-row-gap: 4px;
  width: 100%;
  height: fit-content;
`,v=i.default.span`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  height: fit-content;
  color: ${o.Colors.Black[400]};
`,b=i.default(f.TextSmall)`
  color: ${o.Colors.Black[400]};
`,Q=i.default(u.LabelLink)`
  font-size: inherit;
  line-height: inherit;
  transition: ${o.Transitions.all};
`,w=i.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`},16185:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.EmptyBody=A.SidePaneGlass=A.MemberProfile=void 0;const o=i(t(2784)),s=a(t(52275)),u=t(3100),c=t(67723),l=t(54698),d=t(82975),f=t(61060),g=t(59686),h=t(78478),p=t(86243),m=t(75113),I=t(24619),y=t(15768),B=t(80132);A.MemberProfile=o.default.memo((()=>{const[e,t]=o.useState("DETAILS"),{members:r,isLoading:n}=d.useMyMemberships(),{modalData:i,hideModal:a}=l.useModal(),{data:s,loading:c}=u.useGetMemberQuery({variables:{id:i.id}}),m=null==s?void 0:s.membership,w=!n&&!!r.find((e=>e.id==(null==m?void 0:m.id))),M=e=>{e.target===e.currentTarget&&a()};return c||!m?o.default.createElement(A.SidePaneGlass,{onClick:M},o.default.createElement(E,null,o.default.createElement(Q,null,o.default.createElement(A.EmptyBody,null,"Loading...")))):o.default.createElement(A.SidePaneGlass,{onClick:M},o.default.createElement(E,null,o.default.createElement(C,null,o.default.createElement(v,null,o.default.createElement(b,null,"My Profile"),w&&"DETAILS"===e&&o.default.createElement(f.EditMembershipButton,{member:m},o.default.createElement(h.EditSymbol,null)),o.default.createElement(g.CloseButton,{onClick:a})),o.default.createElement(I.MemberInfo,{member:m,memberSize:"l",size:"l"}),o.default.createElement(p.PageTabsNav,null,o.default.createElement(p.PageTab,{active:"DETAILS"===e,onClick:()=>t("DETAILS")},"Member details"),o.default.createElement(p.PageTab,{active:"ACCOUNTS"===e,onClick:()=>t("ACCOUNTS")},"Accounts"),o.default.createElement(p.PageTab,{active:"ROLES"===e,onClick:()=>t("ROLES")},"Roles"))),o.default.createElement(Q,null,"DETAILS"===e&&o.default.createElement(B.MemberDetails,{member:m}),"ACCOUNTS"===e&&o.default.createElement(y.MemberAccounts,{member:m}),"ROLES"===e&&o.default.createElement(A.EmptyBody,null,"Roles"))))})),A.SidePaneGlass=s.default.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${c.Colors.Black[700.85]};
  color: ${c.Colors.Black[900]};
  z-index: 100000;
  ${c.Animations.showModalBackground};
`;const E=s.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(auto, 192px) 1fr;
  grid-template-areas:
    'sidepaneheader'
    'sidepanebody';
  grid-area: modal;
  position: relative;
  background-color: ${c.Colors.White};
  width: 100%;
  max-width: 552px;
  height: 100vh;
  overflow: hidden;
  ${c.Animations.showSidePane};
`,C=s.default.div`
  display: grid;
  grid-area: sidepaneheader;
  grid-row-gap: 20px;
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 200px;
  padding: 12px 24px 0;
  background-color: ${c.Colors.White};

  ${m.MemberInfoWrap} {
    padding-bottom: 4px;
  }
`,v=s.default.div`
  display: grid;
  grid-template-columns: 1fr 32px 20px;
  grid-column-gap: 14px;
  align-items: center;
  width: 100%;
`,b=s.default.h5``,Q=s.default.div`
  display: flex;
  grid-area: sidepanebody;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: ${c.Colors.Black[50]};
  border-top: 1px solid ${c.Colors.Black[200]};
  border-bottom: 1px solid ${c.Colors.Black[200]};
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;A.EmptyBody=s.default.div`
  padding: 24px;
`},63486:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(16185),A),n(t(80132),A),n(t(41408),A)},41408:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0})},6315:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Memberships=A.MembershipsCount=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(64342);A.MembershipsCount=n.default.memo((({count:e})=>n.default.createElement(A.Memberships,null,"Memberships ",n.default.createElement(s,null,e)))),A.Memberships=i.default.span`
  display: inline-flex;
  position: relative;
  align-items: center;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${a.Colors.Black[400]};
`;const s=i.default(o.Badge)`
  position: absolute;
  right: -24px;
`},17721:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionMember=void 0;const n=r(t(2784)),i=t(24619);A.OptionMember=({member:e})=>n.default.createElement(i.MemberInfo,{member:e})},31826:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionsListMember=void 0;const n=r(t(2784)),i=t(13682),a=t(17721);A.OptionsListMember=n.default.memo((({allMembers:e,onChange:A})=>n.default.createElement(i.OptionsListComponent,null,e.map((e=>n.default.createElement(i.Option,{key:e.handle,onClick:()=>A(e)},n.default.createElement(a.OptionMember,{member:e})))))))},70335:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.SelectMember=A.filterMember=void 0;const a=i(t(2784)),o=t(3100),s=t(75278),u=t(13682),c=t(24619),l=t(31826);A.filterMember=e=>e?A=>A.handle!==e.handle:()=>!0,A.SelectMember=({onChange:e,filter:A,selected:t,disabled:r})=>{const n=A||(()=>!0),[i,d]=a.useState(""),f=s.useDebounce(i,400),{data:g}=o.useSearchMembersQuery({variables:{text:f,limit:10}}),h=(null==g?void 0:g.memberships)||[],p=a.useMemo((()=>((e,A)=>{if(!A.length)return e;const t=A.toLocaleLowerCase();return e.filter((({handle:e,id:A,name:r})=>(null==r?void 0:r.toLocaleLowerCase().includes(t))||(null==e?void 0:e.toLocaleLowerCase().includes(t))||A.includes(t)))})(h.filter(n),f)),[f,h]);return a.default.createElement(u.Select,{selected:t,onChange:e,disabled:r,renderSelected:e=>a.default.createElement(c.MemberInfo,{member:e}),placeholder:"Select Member or type a member",renderList:e=>a.default.createElement(l.OptionsListMember,{allMembers:p,onChange:e}),onSearch:e=>d(e)})}},56404:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(70335),A)},75113:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.MemberDarkHover=A.MemberInfoWrap=A.MemberRoleHelp=A.MemberStatusHelp=A.MemberPhoto=A.MemberId=A.MemberRoles=A.MemberIcons=A.MemberHandle=void 0;const a=i(t(52275)),o=t(67723),s=t(26812),u=t(64342),c=t(95148);A.MemberHandle=a.default.span`
  grid-area: memberhandle;
  max-width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  font-family: ${o.Fonts.Grotesk};
  color: ${o.Colors.Black[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: ${o.Transitions.all};

  &:hover {
    color: ${o.Colors.Black[700]};
  }
`,A.MemberIcons=a.default.div`
  display: grid;
  grid-area: membericons;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin-left: -4px;
`,A.MemberRoles=a.default.div`
  display: grid;
  grid-area: memberroles;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
`,A.MemberId=a.default(u.TextSmall)`
  grid-area: memberroles;
  color: ${o.Colors.Black[400]};
`,A.MemberPhoto=a.default.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  grid-area: memberphoto;
  border-radius: ${o.BorderRad.round};
  overflow: hidden;
  border: 1px solid ${o.Colors.Black[200]};

  ${s.AvatarImg} {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,A.MemberStatusHelp=a.default(c.Help)`
  background-color: transparent;
  color: ${o.Colors.Blue[500]};

  &:hover,
  &:focus {
    background-color: ${o.Colors.Blue[500]};
    border-color: ${o.Colors.Blue[500]};
    color: ${o.Colors.Black[25]};
  }
`,A.MemberRoleHelp=a.default(c.Help)`
  background-color: ${o.Colors.Black[100]};
  color: ${o.Colors.Black[600]};
  border-color: ${o.Colors.Black[100]};

  &:hover,
  &:focus {
    background-color: ${o.Colors.Blue[500]};
    border-color: ${o.Colors.Blue[500]};
    color: ${o.Colors.Black[25]};
  }
`,A.MemberInfoWrap=a.default.div`
  display: grid;

  grid-template-areas:
    'memberphoto memberhandle membericons'
    'memberphoto memberroles memberroles';
  align-items: center;
  width: 100%;
  justify-self: start;
  border-radius: ${o.BorderRad.s};
  transition: ${o.Transitions.all};

  ${A.MemberPhoto} {
    width: ${({memberSize:e})=>{switch(e){case"l":return"80px";case"m":default:return"40px"}}};
    height: ${({memberSize:e})=>{switch(e){case"l":return"80px";case"m":default:return"40px"}}};
  }

  ${A.MemberRoles} {
    align-self: ${({memberSize:e})=>{switch(e){case"l":return"start";case"m":default:return"center"}}};
  }

  ${A.MemberHandle} {
    font-size: ${({memberSize:e})=>{switch(e){case"l":return"20px";case"m":default:return"14px"}}};
    align-self: ${({memberSize:e})=>{switch(e){case"l":return"end";case"m":default:return"center"}}};
  }

  ${A.MemberIcons} {
    align-self: ${({memberSize:e})=>{switch(e){case"l":return"end";case"m":default:return"center"}}};
    padding: ${({memberSize:e})=>{switch(e){case"l":return"4px 0";case"m":default:return"0"}}};
    margin-left: ${({memberSize:e})=>{switch(e){case"l":return"-6px";case"m":default:return"-4px"}}};
  }

  ${({isOnDark:e})=>!0===e&&l}

  ${({memberSize:e})=>{switch(e){case"l":return d;case"m":default:return f}}}
`,A.MemberDarkHover=a.css`
  ${A.MemberInfoWrap} {
    ${A.MemberHandle} {
      color: ${o.Colors.Black[50]};
    }
    ${A.MemberStatusHelp} {
      border-color: ${o.Colors.Blue[400]};
      color: ${o.Colors.Blue[400]};
      background-color: transparent;

      &:hover,
      &:focus {
        background-color: ${o.Colors.Blue[500]};
        border-color: ${o.Colors.Blue[500]};
        color: ${o.Colors.Black[300]};
      }
    }
    ${A.MemberRoleHelp} {
      color: ${o.Colors.Black[200]};
      background-color: ${o.Colors.Black[500]};
      border-color: ${o.Colors.Black[500]};

      &:hover,
      &:focus {
        background-color: ${o.Colors.Blue[500]};
        border-color: ${o.Colors.Blue[500]};
        color: ${o.Colors.Black[300]};
      }
    }
  }
`;const l=a.css`
  ${A.MemberHandle} {
    color: ${o.Colors.Black[75]};
  }
  ${A.MemberStatusHelp} {
    color: ${o.Colors.Blue[500]};
    background-color: transparent;
    border-color: ${o.Colors.Blue[500]};

    &:hover {
      color: ${o.Colors.Black[300]};
      background-color: ${o.Colors.Blue[500]};
      border-color: ${o.Colors.Blue[500]};
    }
  }
  ${A.MemberRoleHelp} {
    color: ${o.Colors.Black[300]};
    background-color: ${o.Colors.Black[600]};
    border-color: ${o.Colors.Black[600]};

    &:hover {
      color: ${o.Colors.Black[300]};
      background-color: ${o.Colors.Blue[500]};
      border-color: ${o.Colors.Blue[500]};
    }
  }
`,d=a.css`
  grid-template-columns: 80px auto 1fr;
  grid-template-rows: 36px 38px;
  grid-column-gap: 12px;
  grid-row-gap: 6px;
`,f=a.css`
  grid-template-columns: 40px auto 1fr;
  grid-template-rows: 20px 16px;
  grid-column-gap: 8px;
  grid-row-gap: 4px;
`},20396:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(75113),A),n(t(44056),A),n(t(24619),A),n(t(6315),A)},44056:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0})},68797:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Page=void 0;const n=r(t(52275));A.Page=n.default.div`
  display: grid;
  position: relative;
  grid-template-columns: 226px 1fr 0;
  grid-template-rows: auto;
  grid-template-areas:
    'navbar page .'
    'navbar page .';
  grid-column-gap: 24px;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  min-height: 100vh;
`},71121:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.PageContent=void 0;const n=r(t(52275));A.PageContent=n.default.main`
  position: relative;
  width: 100%;
  height: 100%;
  grid-area: page;
  padding: 40px 0;
`},88979:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.PageHeader=void 0;const n=r(t(52275));A.PageHeader=n.default.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px auto;
  grid-row-gap: 16px;
`},86243:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.PageTabsNav=A.PageTab=A.PageTabs=void 0;const a=i(t(52275)),o=t(67723);A.PageTabs=a.default.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  z-index: 2;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: calc(100% + 24px);
    height: 1px;
    background-color: ${o.Colors.Black[200]};
    z-index: -1;
  }
`,A.PageTab=a.default.a`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  position: relative;
  align-items: center;
  width: fit-content;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${({active:e})=>e?o.Colors.Black[900]:o.Colors.Black[500]};
  text-transform: capitalize;
  -webkit-text-stroke: 0.05em;
  -webkit-text-stroke-color: ${({active:e})=>e?o.Colors.Black[900]:"transparent"};
  cursor: pointer;
  transition: ${o.Transitions.all};
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: ${o.Colors.Blue[500]};
    transform: scaleX(0);
    transition: ${o.Transitions.all};
    animation: hideTabUnderline ${o.Transitions.duration};

    @keyframes hideTabUnderline {
      from {
        transform: scaleX(1);
        background: ${o.Colors.Blue[500]};
      }
      to {
        transform: scaleX(0);
      }
    }
  }

  &:hover {
    color: ${o.Colors.Blue[500]};
    -webkit-text-stroke-color: ${({active:e})=>e?o.Colors.Blue[500]:"transparent"};
  }

  ${({active:e})=>e&&a.css`
      &:before {
        content: '';
        position: absolute;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background: ${o.Colors.Blue[500]};
        transform: scaleX(1);
        transition: ${o.Transitions.all};
        animation: showTabUnderline ${o.Transitions.duration};

        @keyframes showTabUnderline {
          from {
            transform: scaleX(0);
            background: ${o.Colors.Blue[500]};
          }
          to {
            transform: scaleX(1);
          }
        }
      }
    `}
`,A.PageTabsNav=a.default.nav`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 40px;
  width: fit-content;
  align-items: center;
  justify-items: start;
  z-index: 1;

  ${A.PageTab} {
    font-size: ${({tabsSize:e})=>{switch(e){case"xs":return"14px";case"s":default:return"16px"}}};
    line-height: ${({tabsSize:e})=>{switch(e){case"xs":return"20px";case"s":default:return"24px"}}};
  }
`},34754:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.PageTitle=void 0;const n=r(t(52275));A.PageTitle=n.default.h2`
  text-transform: capitalize;
`},31591:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SideBar=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(72433),o=t(8738),s=t(13962),u=t(83141),c=t(70135),l=t(56910),d=t(62551),f=t(95149);A.SideBar=()=>n.default.createElement(u.Navigation,null,n.default.createElement(c.NavigationHeader,null,n.default.createElement(s.LogoLink,null)),n.default.createElement(g,null,n.default.createElement(h,null,n.default.createElement(l.NavigationLink,{to:"/profile"},n.default.createElement(a.MyProfileIcon,null),"My profile")),n.default.createElement(h,null,n.default.createElement(l.NavigationLink,{to:"/groups"},n.default.createElement(o.WorkingGroupsIcon,null),"Working Groups"))),n.default.createElement(d.ProfileComponent,null),n.default.createElement(f.Version,null));const g=i.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: barlinks;
  margin: 0;
  padding: 0;
  list-style: none;
`,h=i.default.li`
  display: flex;
  flex-direction: column;
  flex-basis: 48px;
  flex-shrink: 0;
  width: 100%;
`},37662:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SideNotification=void 0;const n=r(t(2784)),i=r(t(28316)),a=r(t(52275)),o=t(67723),s=t(59686),u=t(64342);A.SideNotification=({title:e,icon:A,message:t,link:r,onClick:a,isError:o})=>i.default.createPortal(n.default.createElement(c,{isError:o},n.default.createElement(f,{onClick:a}),n.default.createElement(l,{isError:o},A,n.default.createElement(d,null,e)),n.default.createElement(g,null,t,r)),document.body);const c=a.default.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 8px;
  right: 8px;
  width: 100%;
  max-width: 438px;
  padding: 16px 24px 20px 20px;
  background-color: ${o.Colors.Black[800]};
  border-left: 4px solid ${({isError:e})=>e?o.Colors.Red[400]:o.Colors.Blue[500]};
  border-radius: ${o.BorderRad.m};
  box-shadow: ${o.Shadows.common};
  ${o.Animations.showNotification};
`,l=a.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  width: fit-content;
  color: ${({isError:e})=>e?o.Colors.Red[400]:o.Colors.White};
  margin-bottom: 16px;
`,d=a.default.h4`
  color: ${o.Colors.White};
`,f=a.default(s.CloseButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
`,g=a.default(u.TextMedium)`
  color: ${o.Colors.Black[400]};
`},67966:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Breadcrumbs=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(93467),o=t(49605);A.Breadcrumbs=function({crumbs:e}){return n.default.createElement(s,null,n.default.createElement(o.HomeLink,null),n.default.createElement(a.BreadcrumbsList,{crumbs:e}))};const s=i.default.nav`
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: 6px;
  left: 0;
`},10370:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.BreadcrumbsItem=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.BreadcrumbsItem=function({href:e,text:A}){return n.default.createElement(s,null,n.default.createElement(o,{href:e},A))};const o=i.default.a`
  font-size: 10px;
  line-height: 16px;
  color: ${a.Colors.Black[500]};
  transition: ${a.Transitions.all};
  text-decoration: none;
  font-family: ${a.Fonts.Inter};

  &:hover {
    color: ${a.Colors.Blue[500]};
  }
`,s=i.default.li`
  display: inline-flex;
  position: relative;
  align-items: center;
  margin-left: 26px;
  color: ${a.Colors.Black[500]};

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -16px;
    width: 4px;
    height: 4px;
    border-top: 1px solid ${a.Colors.Black[300]};
    border-right: 1px solid ${a.Colors.Black[300]};
    transform: translate(0, -50%) rotate(45deg);
  }

  &:last-child {
    color: ${a.Colors.Black[400]};
  }
`},93467:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.BreadcrumbsList=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(10370);A.BreadcrumbsList=function({crumbs:e}){return n.default.createElement(o,null,e.map((({href:e,text:A},t)=>n.default.createElement(a.BreadcrumbsItem,{key:t,href:e,text:A}))))};const o=i.default.ul`
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0;
`},49605:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.HomeLink=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(70245),o=t(67723);A.HomeLink=function(){return n.default.createElement(s,{href:"#"},n.default.createElement(a.HomeSymbol,null))};const s=i.default.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    .blackPart {
      fill: ${o.Colors.Blue[500]};
    }
    .primaryPart {
      fill: ${o.Colors.Black[900]};
    }
  }
`},88542:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CurrentMember=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(54698),s=t(82975),u=t(15689),c=t(79530),l=t(20396),d=t(96528),f=t(81660);A.CurrentMember=()=>{const{count:e,active:A}=s.useMyMemberships(),[t,r]=u.useToggle(),{showModal:i}=o.useModal();return e<1?n.default.createElement(d.AddMembershipButton,null,"Create membership"):n.default.createElement(n.default.Fragment,null,n.default.createElement(l.MembershipsCount,{count:e}),n.default.createElement(h,{onClick:r},A&&n.default.createElement(l.MemberInfo,{member:A,isOnDark:!0}),!A&&n.default.createElement(n.default.Fragment,null,"Select membership"),n.default.createElement(g,null,n.default.createElement(c.ArrowDownExpandedIcon,null))),t&&n.default.createElement(f.SwitchMemberModal,{onClose:r,onCreateMember:()=>i({modal:"BuyMembership"})}))};const g=i.default.span`
  width: 16px;
  height: 16px;

  ${c.Icon.type} {
    width: 100%;
    height: 100%;
    color: ${a.Colors.Black[400]};
    transform: rotate(-90deg);
    transition: ${a.Transitions.all};
  }
`,h=i.default.div`
  display: grid;
  grid-template-columns: 1fr 16px;
  grid-column-gap: 8px;
  align-items: center;
  grid-area: memberaccount;
  padding: 12px 8px;
  background-color: ${a.Colors.Black[700]};
  border-radius: ${a.BorderRad.s};
  transition: ${a.Transitions.all};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background: ${a.Colors.Black[600]};

    ${l.MemberDarkHover}
  }
`},81660:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SwitchMemberModal=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(82975),s=t(20396),u=t(75270),c=t(18823),l=t(48438);A.SwitchMemberModal=({onClose:e,onCreateMember:A})=>{const{count:t,members:r,setActive:i,active:a}=o.useMyMemberships();return n.default.createElement(c.Modal,{modalSize:"xs",modalHeight:"s",isDark:!0,onClose:e},n.default.createElement(d,{title:"Select Membership",onClick:e,modalHeaderSize:"s"}),n.default.createElement(f,null,n.default.createElement(s.MembershipsCount,{count:t}),n.default.createElement(h,null,r.map((A=>n.default.createElement(p,{key:A.handle,onClick:()=>(A=>{i(A),e()})(A),isMemberActive:(null==a?void 0:a.handle)===A.handle},n.default.createElement(s.MemberInfo,{member:A,isOnDark:!0}),n.default.createElement(l.Notification,null)))))),n.default.createElement(g,null,n.default.createElement(u.AddMembershipButtonSwitch,{onClick:()=>{e(),A()}})))};const d=i.default(c.ModalHeader)`
  padding: 16px 16px 0px;
`,f=i.default(c.ModalBody)`
  position: relative;
  padding: 16px;
  grid-row-gap: 16px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: calc(100% - 32px);
    height: 1px;
    background-color: ${a.Colors.Black[700]};
    transform: translateX(-50%);
  }
`,g=i.default(c.ModalFooter)`
  width: 100%;
  height: auto;
  padding: 16px;
`,h=i.default.ul`
  display: flex;
  flex-direction: column;
  width: calc(100% + 16px);
  height: 100%;
  max-height: 192px;
  margin-left: -16px;
  padding-left: 16px;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,p=i.default.li`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 16px;
  grid-column-gap: 8px;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 64px;
  padding: 12px 16px;
  border-radius: ${a.BorderRad.s};
  transition: ${a.Transitions.all};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${a.Colors.Black[600]};

    ${l.NotificationComponent} {
      color: ${a.Colors.White};
    }
    ${s.MemberDarkHover}
  }

  &:before {
    content: '';
    display: ${({isMemberActive:e})=>e?"block":"none"};
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${a.Colors.Blue[500]};
    transform: translateX(-16px);
  }
`},8566:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(88542),A)},72433:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyProfileIcon=void 0;const n=r(t(2784)),i=t(79530);A.MyProfileIcon=()=>n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:"nav-icon"},n.default.createElement("path",{className:"whitePart",d:"M1.23076 7.99997C1.23076 4.26144 4.26144 1.23076 7.99997 1.23076C11.7385 1.23076 14.7692 4.26144 14.7692 7.99997C14.7692 9.08417 14.5143 10.1088 14.0612 11.0173L15.0089 11.8598C15.6405 10.7153 15.9999 9.39961 15.9999 7.99997C15.9999 3.58171 12.4182 0 7.99997 0C3.58171 0 0 3.58171 0 7.99997C0 12.4182 3.58171 15.9999 7.99997 15.9999C8.91244 15.9999 9.78923 15.8472 10.6062 15.5658L9.95603 14.4823C9.33676 14.6689 8.68008 14.7692 7.99997 14.7692C4.26144 14.7692 1.23076 11.7385 1.23076 7.99997Z",fill:"currentColor"}),n.default.createElement("path",{className:"primaryPart",d:"M10.8774 14.1289C11.9828 13.6091 12.9247 12.799 13.6049 11.7969L14.5315 12.6205C13.7596 13.7096 12.7222 14.5973 11.5135 15.1891L10.8774 14.1289Z",fill:"currentColor"}),n.default.createElement("path",{className:"whitePart",d:"M9.50009 5.60023C9.50009 6.33661 8.90314 6.93356 8.16676 6.93356C7.43038 6.93356 6.83342 6.33661 6.83342 5.60023C6.83342 4.86385 7.43038 4.26689 8.16676 4.26689C8.90314 4.26689 9.50009 4.86385 9.50009 5.60023ZM9.63224 7.66691C10.2785 7.20784 10.7001 6.45327 10.7001 5.60023C10.7001 4.20111 9.56588 3.06689 8.16676 3.06689C6.76763 3.06689 5.63342 4.20111 5.63342 5.60023C5.63342 6.45325 6.05503 7.2078 6.70123 7.66687C6.01079 7.93715 5.4991 8.39353 5.13882 8.91797C4.58096 9.72999 4.40002 10.6789 4.40002 11.3003V11.6711L4.7317 11.8369C5.2342 12.0882 6.55022 12.5336 8.16669 12.5336C9.78317 12.5336 11.0992 12.0882 11.6017 11.8369L11.9334 11.6711V11.3003C11.9334 10.6789 11.7524 9.72999 11.1946 8.91797C10.8343 8.39355 10.3226 7.93718 9.63224 7.66691ZM8.16669 11.3336C7.07498 11.3336 6.15422 11.0989 5.63005 10.9124C5.68859 10.5097 5.83834 10.019 6.1279 9.59746C6.49833 9.05826 7.11031 8.60682 8.16669 8.60682C9.22308 8.60682 9.83505 9.05826 10.2055 9.59746C10.495 10.019 10.6448 10.5097 10.7033 10.9124C10.1792 11.0989 9.2584 11.3336 8.16669 11.3336Z",fill:"currentColor"}))},8738:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroupsIcon=void 0;const n=r(t(2784)),i=t(79530);A.WorkingGroupsIcon=()=>n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:"nav-icon"},n.default.createElement("path",{className:"whitePart",d:"M4.90905 2.66667L5.57572 2H10.4242L11.0909 2.66667V3.77778H15.3333V7.7037L14.6666 8.37037H11V7.03704H14V5.11111H9.75753V3.33333H6.24238V5.11111H1.99996V7.03704H4.99996V8.37037H1.33329L0.666626 7.7037V3.77778H4.90905V2.66667ZM0.666626 13.3333V8.88889H1.99996V12.6667H14V8.88889H15.3333V13.3333L14.6666 14H1.33329L0.666626 13.3333Z",fill:"currentColor"}),n.default.createElement("path",{className:"primaryPart",d:"M6 9.33301H7.33333V9.99967H8.66667V9.33301H10V11.333H6V9.33301Z",fill:"currentColor"}),n.default.createElement("path",{className:"whitePart",d:"M6 8.66699H7.33333V8.00033H8.66667V8.66699H10V6.66699H6V8.66699Z",fill:"currentColor"}))},70259:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Logo=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.Logo=()=>n.default.createElement(o,{viewBox:"0 0 114 24",preserveAspectRatio:"xMidYMid meet"},n.default.createElement("path",{d:"M24.5582 21.4241V19.5354H27.5464V7.49545H29.644V19.6935C29.6434 20.1525 29.4598 20.5925 29.1333 20.9171C28.8068 21.2417 28.3642 21.4243 27.9025 21.4248H24.5582V21.4241ZM32.3746 16.3288C31.3654 15.3255 30.851 14.0661 30.851 12.5715C30.851 11.0761 31.3654 9.81678 32.3746 8.81345C33.3838 7.81012 34.6506 7.29878 36.154 7.29878C37.6582 7.29878 38.9048 7.81012 39.9341 8.81345C40.9434 9.81678 41.4577 11.0761 41.4577 12.5715C41.4577 14.0661 40.9434 15.3255 39.9341 16.3288C38.9249 17.3321 37.6582 17.8435 36.154 17.8435C34.6305 17.8435 33.3838 17.3321 32.3746 16.3288ZM33.8982 10.0928C33.3242 10.7021 33.0472 11.5288 33.0472 12.5515C33.0472 13.5748 33.3242 14.4008 33.8988 15.0108C34.4722 15.6208 35.2239 15.9355 36.1346 15.9355C37.0446 15.9355 37.797 15.6208 38.3703 15.0108C38.9444 14.4008 39.222 13.5748 39.222 12.5515C39.222 11.5288 38.9444 10.7021 38.3703 10.0928C37.797 9.48278 37.0446 9.16745 36.1346 9.16745C35.2239 9.18745 34.4722 9.48278 33.8982 10.0928ZM41.6167 7.49545H43.8128L46.009 15.6601H47.0974L49.492 7.49545H51.6889L47.4937 21.4241H45.2968L46.4838 17.6468H45.7126C44.9408 17.6468 44.248 17.1355 44.0495 16.3881L41.6167 7.49545ZM51.4897 14.4601H53.7858C53.8059 14.4995 53.8254 14.5581 53.8649 14.6175L54.1023 14.9715C54.221 15.1488 54.3793 15.3061 54.5382 15.4241C54.6958 15.5615 54.9533 15.6795 55.2497 15.7775C55.5826 15.8825 55.9298 15.9358 56.2791 15.9355C57.0113 15.9355 57.5451 15.8175 57.8818 15.6008C58.2184 15.3848 58.3767 15.0895 58.3767 14.7548C58.3767 14.4401 58.1587 14.1841 57.7235 14.0075C57.2059 13.8035 56.669 13.6518 56.1208 13.5548C55.4852 13.4346 54.8573 13.277 54.2405 13.0828C53.629 12.8999 53.0764 12.5608 52.6378 12.0995C52.2019 11.6268 51.9846 11.0368 51.9846 10.2895C51.9846 9.50278 52.3407 8.79412 53.073 8.20412C53.8053 7.61345 54.7749 7.31878 55.9625 7.31878C56.7143 7.31878 57.3674 7.43678 57.9609 7.65278C58.5544 7.86945 58.9903 8.14478 59.2867 8.43945C59.5837 8.75478 59.8211 9.06945 60.0189 9.38412C60.2168 9.69878 60.3354 9.95478 60.3945 10.1908L60.4743 10.5055H58.2774C58.254 10.4614 58.2342 10.4154 58.2184 10.3681C58.1983 10.3088 58.1192 10.2108 58.0005 10.0528C57.8891 9.90276 57.7557 9.77018 57.6048 9.65945C57.4466 9.54145 57.2293 9.44345 56.9517 9.34478C56.6747 9.24678 56.3381 9.20745 55.982 9.20745C55.3885 9.20745 54.9533 9.30545 54.6361 9.52212C54.3397 9.73812 54.1815 9.99412 54.1815 10.3088C54.1815 10.5648 54.3397 10.8008 54.6562 10.9775C54.9728 11.1548 55.3684 11.2928 55.8432 11.3708C56.3186 11.4501 56.833 11.5681 57.3869 11.7255C57.9104 11.8757 58.4257 12.053 58.9306 12.2568C59.4072 12.4549 59.8184 12.782 60.1175 13.2008C60.4347 13.6341 60.5936 14.1648 60.5936 14.7741C60.5936 15.6208 60.2168 16.3488 59.4449 16.9581C58.6737 17.5681 57.6249 17.8635 56.2985 17.8635C55.5072 17.8635 54.8145 17.7455 54.2009 17.5095C53.588 17.2735 53.1125 16.9975 52.796 16.6628C52.5022 16.3532 52.2373 16.0175 52.0047 15.6601C51.8069 15.3255 51.6681 15.0501 51.6091 14.8335L51.4897 14.4601ZM60.9692 9.38412V7.49545H62.1561V5.31212H64.2537V7.49545H67.3605V9.38412H64.2738V15.7581H67.4591V17.6468H63.8983C63.4365 17.6464 62.9936 17.4639 62.667 17.1393C62.3404 16.8147 62.1566 16.3746 62.1561 15.9155V9.38412H60.9692ZM70.745 9.38412V17.6468H68.6467V9.01078C68.6467 8.60889 68.8073 8.22346 69.0932 7.93928C69.379 7.6551 69.7667 7.49545 70.171 7.49545H74.8416V9.38412H70.7457H70.745ZM76.2659 16.3288C75.2762 15.3061 74.7618 14.0468 74.7618 12.5715C74.7618 11.0961 75.2762 9.83678 76.2659 8.81345C77.2752 7.79078 78.5017 7.29878 79.9468 7.29878C81.3913 7.29878 82.6178 7.81012 83.627 8.81345C84.6362 9.83678 85.1311 11.0761 85.1311 12.5715V13.2601H76.8594C76.9982 14.0868 77.3738 14.7355 77.9283 15.2268C78.5017 15.7188 79.175 15.9548 79.9468 15.9548C80.5798 15.9548 81.1136 15.8368 81.6085 15.6015C82.084 15.3648 82.4199 15.1288 82.5782 14.8928L82.8357 14.5581H85.0325C85.0124 14.6568 84.9534 14.7748 84.8937 14.9121C84.8341 15.0501 84.6563 15.3255 84.3794 15.6988C84.1117 16.0699 83.7994 16.4071 83.4493 16.7028C83.1127 16.9781 82.6178 17.2535 81.9847 17.4895C81.3517 17.7255 80.6784 17.8435 79.9267 17.8435C78.5017 17.8435 77.2752 17.3321 76.2653 16.3288H76.2659ZM77.2356 11.5681H83.2119C83.1127 10.9188 82.7961 10.3481 82.2617 9.89612C81.7279 9.42345 81.0546 9.18745 80.2231 9.18745C79.5275 9.17967 78.8503 9.40882 78.3039 9.83678C77.75 10.2701 77.3939 10.8401 77.2356 11.5681ZM87.0906 16.3881C86.1799 15.4041 85.7246 14.1255 85.7246 12.5715C85.7246 11.0175 86.1806 9.73812 87.0906 8.75478C88.0006 7.77078 89.1486 7.29878 90.5139 7.29878C91.147 7.29878 91.721 7.41678 92.2555 7.67212C92.7892 7.92812 93.1654 8.16412 93.3834 8.40078L93.6999 8.77412H93.7985V7.47612H95.8961V17.6268H93.7985V16.2301H93.6999C93.6798 16.2695 93.6208 16.3281 93.5611 16.4068C93.5021 16.4855 93.3633 16.6035 93.1654 16.8001C92.9681 16.9808 92.7564 17.1454 92.5324 17.2921C92.3145 17.4301 91.9979 17.5481 91.6419 17.6655C91.2773 17.7818 90.8968 17.8416 90.5139 17.8428C89.1681 17.8428 88.0207 17.3514 87.0906 16.3875V16.3881ZM97.7167 17.6468V7.49545H99.8143V8.89278H99.9136C99.9337 8.85278 99.9726 8.79412 100.013 8.71545C100.052 8.63678 100.151 8.51878 100.329 8.32212C100.507 8.14478 100.685 7.96745 100.903 7.83012C101.101 7.69212 101.398 7.57412 101.754 7.45678C102.124 7.33739 102.512 7.27753 102.902 7.27945C103.376 7.27945 103.832 7.33812 104.227 7.47612C104.643 7.61345 104.96 7.77078 105.178 7.94812C105.415 8.12545 105.613 8.32145 105.771 8.49878C105.929 8.67612 106.028 8.83345 106.088 8.97078L106.187 9.16745H106.285C106.306 9.10878 106.345 9.04945 106.404 8.95145C106.444 8.87278 106.583 8.71545 106.78 8.49878C106.978 8.28278 107.195 8.10545 107.434 7.92812C107.671 7.77078 108.007 7.61345 108.423 7.47612C108.863 7.33256 109.324 7.25943 109.788 7.25945C110.955 7.25945 111.886 7.63278 112.559 8.38078C113.231 9.12878 113.568 10.1708 113.568 11.5481V17.6081H111.47V11.6661C111.47 10.0141 110.738 9.18745 109.274 9.18745C108.561 9.18745 107.948 9.46278 107.434 9.99412C106.919 10.5448 106.681 11.2335 106.681 12.0595V17.6275H104.584V11.6661C104.584 10.0141 103.851 9.18745 102.387 9.18745C101.675 9.18745 101.061 9.46278 100.547 9.99412C100.032 10.5448 99.7949 11.2335 99.7949 12.0595V17.6275H97.7167V17.6475V17.6468ZM27.5658 3.62012V5.70545H29.6634V3.62012H27.5658ZM88.4955 10.0928C87.9221 10.7021 87.6452 11.5288 87.6452 12.5515C87.6452 13.5748 87.9221 14.4008 88.4961 15.0108C89.0702 15.6208 89.8219 15.9355 90.7319 15.9355C91.6425 15.9355 92.3949 15.6208 92.9683 15.0108C93.5423 14.4008 93.8193 13.5748 93.8193 12.5515C93.8193 11.5288 93.5423 10.7021 92.9683 10.0928C92.3943 9.48278 91.6425 9.16745 90.7319 9.16745C89.8219 9.18745 89.0702 9.48278 88.4961 10.0928H88.4955Z",fill:a.Colors.White}),n.default.createElement("path",{d:"M16.6621 0H18.8194V6.15733C18.8201 8.528 17.9469 10.8167 16.365 12.5907C16.5635 11.764 16.6621 10.9187 16.6621 10.0333V0ZM5.81801 17.568C5.75833 17.6273 5.71876 17.686 5.65975 17.7453L5.60007 17.804C5.54106 17.8633 5.50149 17.922 5.44181 17.9613L5.36268 18.04C5.30135 18.104 5.23522 18.1633 5.16486 18.2173C5.08573 18.296 5.0066 18.3553 4.92747 18.434C4.85043 18.5102 4.76389 18.5763 4.66996 18.6307L4.43257 18.8073C4.23475 18.9253 4.03693 19.0433 3.8391 19.142C3.79887 19.162 3.75997 19.182 3.70029 19.2007C3.64128 19.2207 3.60172 19.2407 3.56215 19.26C3.50247 19.28 3.4629 19.3 3.40389 19.3193C3.30465 19.3587 3.20607 19.398 3.08737 19.4373H3.06726C2.96801 19.4767 2.86943 19.496 2.77019 19.516H2.75007C2.65149 19.536 2.55292 19.5747 2.45367 19.5947C2.33497 19.6147 2.19683 19.6533 2.07814 19.6533C2.0379 19.6533 1.99901 19.6733 1.95877 19.6733H1.93933C1.82063 19.6933 1.72139 19.6933 1.60269 19.6933H1.16748L1.82063 17.5487H5.81734V17.5687L5.81801 17.568ZM14.9206 0V10.0333C14.9206 10.1907 14.9206 10.368 14.9005 10.5253C14.9005 10.604 14.9005 10.6827 14.881 10.7613C14.881 10.84 14.8609 10.9187 14.8609 10.9973C14.8609 11.076 14.8414 11.1547 14.8414 11.2333C14.8414 11.2927 14.8213 11.3713 14.8213 11.43V11.4893C14.8019 11.568 14.8019 11.6467 14.7824 11.7053C14.7623 11.784 14.7623 11.8627 14.7422 11.922V11.942C14.7228 12.0007 14.7228 12.0593 14.7033 12.1187V12.1587C14.6436 12.394 14.5846 12.65 14.5055 12.8853C14.4854 12.9453 14.4652 13.024 14.4458 13.0827C14.4283 13.1578 14.4018 13.2306 14.3667 13.2993C14.3466 13.378 14.3077 13.4367 14.2875 13.496C14.2674 13.5747 14.2285 13.6333 14.2084 13.6927C14.1883 13.7713 14.1487 13.83 14.1293 13.8893C14.1092 13.948 14.0696 14.0273 14.03 14.086C14.0052 14.1552 13.9721 14.2213 13.9315 14.2827C13.8912 14.342 13.8718 14.4207 13.8322 14.4793C13.8121 14.5387 13.7732 14.578 13.7531 14.6367C13.6946 14.7524 13.6285 14.8642 13.5553 14.9713C13.5005 15.0659 13.4412 15.1578 13.3776 15.2467C13.343 15.3197 13.296 15.3862 13.2387 15.4433C13.2186 15.4833 13.1797 15.522 13.1596 15.542C13.1006 15.6207 13.0604 15.6793 13.0014 15.7387C12.9417 15.8173 12.8827 15.876 12.8431 15.9547L12.487 16.368L12.546 16.132C12.5661 16.0727 12.5661 16.014 12.5863 15.9547V15.896C12.6057 15.8173 12.6057 15.7387 12.6252 15.66C12.6453 15.5613 12.6654 15.4633 12.6654 15.3847C12.6654 15.3253 12.6848 15.2667 12.6848 15.2273C12.6848 15.168 12.705 15.1287 12.705 15.0693C12.7244 14.9713 12.7244 14.8727 12.7438 14.7547V14.676C12.7438 14.5973 12.764 14.5387 12.764 14.46V0H14.9206Z",fill:a.Colors.LogoPurple}),n.default.createElement("path",{d:"M11.0225 0V13.9087C11.0225 14.2433 11.0023 14.558 10.9822 14.8727C10.9627 15.1441 10.9232 15.4137 10.8642 15.6793C10.7455 16.3093 10.5671 16.9193 10.3297 17.4893C10.1849 17.846 10.0197 18.1941 9.83485 18.532C9.28286 19.5114 8.57443 20.3952 7.73725 21.1487C5.95964 22.7347 3.65459 23.6107 1.26607 23.608H0L0.653153 21.4633H1.28619C3.06907 21.4668 4.79495 20.8391 6.15466 19.6927C6.86555 19.1088 7.45661 18.3942 7.89551 17.588C8.0142 17.3913 8.11345 17.1747 8.21202 16.958C8.37095 16.6047 8.48965 16.25 8.58822 15.876C8.71038 15.4596 8.78351 15.0305 8.80616 14.5973C8.82628 14.3813 8.82628 14.1647 8.82628 13.948V0H11.0225Z",fill:a.Colors.LogoPurple}),n.default.createElement("path",{d:"M7.1243 13.6926V13.9086C7.1243 14.0859 7.1243 14.2632 7.10418 14.4206C7.06462 14.7546 7.02506 15.0892 6.92648 15.4039C6.88624 15.5612 6.84668 15.7186 6.78767 15.8566H2.33496L2.98811 13.7119H7.1243V13.6919V13.6926Z",fill:a.Colors.LogoPurple}));const o=i.default.svg`
  height: 24px;
  width: auto;
  position: relative;
`},13962:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.LogoLink=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(70259);A.LogoLink=function(){return n.default.createElement(o,{href:"#"},n.default.createElement(a.Logo,null))};const o=i.default.a`
  display: flex;
  max-height: 24px;
`},83141:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Navigation=void 0;const n=r(t(52275)),i=t(67723);A.Navigation=n.default.nav`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 76px 1fr 176px 10px 20px;
  grid-row-gap: 8px;
  grid-template-areas:
    'barheader'
    'barlinks'
    'barmember'
    'barnetwork'
    'barversion';
  grid-area: navbar;
  width: 100%;
  max-width: 226px;
  height: 100vh;
  z-index: 10;
  background: ${i.Colors.Black[900]};
  color: ${i.Colors.White};
`},70135:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.NavigationHeader=void 0;const n=r(t(52275));A.NavigationHeader=n.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 0;
  grid-area: barheader;
`},56910:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.NavigationLink=void 0;const n=r(t(2784)),i=t(76410),a=r(t(52275)),o=t(67723);A.NavigationLink=({children:e,exact:A,className:t,to:r})=>n.default.createElement(s,{exact:A,to:r,className:t,activeClassName:"active-page"},e);const s=a.default(i.NavLink)`
  display: grid;
  position: relative;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 12px 12px 12px 24px;
  border-radius: 0 ${o.BorderRad.s} ${o.BorderRad.s} 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  -webkit-text-stroke: 0.05em;
  -webkit-text-stroke-color: transparent;
  color: ${o.Colors.Black[200]};
  text-transform: capitalize;
  text-decoration: none;
  overflow: hidden;
  transition: ${o.Transitions.all};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: transparent;
    transition: ${o.Transitions.all};
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    opacity: 0.16;
    transition: ${o.Transitions.all};
    z-index: -1;
  }

  .nav-icon {
    color: ${o.Colors.Black[300]};
    transition: ${o.Transitions.all};
  }

  &:hover {
    color: ${o.Colors.White};
    &:after {
      background-color: ${o.Colors.Blue[700]};
    }
    .nav-icon {
      color: ${o.Colors.Blue[500]};
    }
  }

  &.active-page {
    color: ${o.Colors.White};
    background-color: ${o.Colors.Black[700]};
    -webkit-text-stroke-color: ${o.Colors.White};

    &:before {
      background-color: ${o.Colors.Blue[500]};
    }
  }
  &.active-page .nav-icon {
    color: ${o.Colors.White};
  }
`},62551:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ProfileComponent=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(51534),s=t(6315),u=t(89265),c=t(64342),l=t(8566);A.ProfileComponent=function(){const{total:e}=o.useTotalBalances();return n.default.createElement(d,null,n.default.createElement(l.CurrentMember,null),n.default.createElement(f,null,n.default.createElement(g,null,"Total Balance"),n.default.createElement(h,null,n.default.createElement(p,{value:e})),n.default.createElement(u.TransferButtonStyled,null)))};const d=i.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16px 64px 56px;
  grid-template-areas:
    'memberships'
    'memberaccount'
    'memberbalance';
  grid-row-gap: 16px;
  grid-area: barmember;
  width: 100%;
  padding: 0 8px;

  ${s.Memberships} {
    margin-left: 8px;
  }
`,f=i.default.div`
  display: grid;
  grid-area: memberbalance;
  grid-template-columns: 1fr 32px;
  grid-template-rows: 16px 24px;
  grid-template-areas:
    'balancetitle balancetransfer'
    'balancevalue balancetransfer';
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  align-items: center;
  width: 100%;
  margin-top: 8px;
  padding-left: 8px;
`,g=i.default.span`
  grid-area: balancetitle;
  font-size: 10px;
  line-height: 16px;
  color: ${a.Colors.Black[400]};
  text-transform: uppercase;
  font-weight: 700;
`,h=i.default.span`
  display: inline-flex;
  align-items: baseline;
  position: relative;
  grid-area: balancevalue;
  width: fit-content;
  font-size: 16px;
  line-height: 24px;
  color: ${a.Colors.White};
  font-weight: 700;
`,p=i.default(c.TokenValue)`
  color: ${a.Colors.White};
`},95149:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Version=void 0;const n=r(t(52275)),i=r(t(2784));A.Version=function(){return i.default.createElement(a,null,"Version: ","8b06fb9"," ")};const a=n.default.div`
  display: grid;
  grid-area: barversion;
  justify-content: center;
  align-items: center;
`},70446:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionsListComponent=A.OptionHeaderComponent=A.OptionComponent=A.OptionComponentContainer=A.SelectComponent=A.EmptyOption=A.SelectedOption=A.OptionSectionHeader=A.Option=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723);A.Option=({children:e,onClick:t})=>n.default.createElement(A.OptionComponentContainer,{onClick:t},n.default.createElement(A.OptionComponent,null,e)),A.OptionSectionHeader=({children:e})=>n.default.createElement(A.OptionComponentContainer,null,n.default.createElement(A.OptionHeaderComponent,null,e)),A.SelectedOption=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  padding: 10px 28px 10px 16px;
`,A.EmptyOption=i.default.input`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${a.Colors.Black[900]};
  width: 100%;
  height: 100%;
  padding: 16px;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    font-size: 14px;
    line-height: 78px;
    font-weight: 400;
    color: ${a.Colors.Black[400]};
  }
  &:disabled {
    cursor: not-allowed;
  }
`,A.SelectComponent=i.default.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
`,A.OptionComponentContainer=i.default.li`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid ${a.Colors.Black[300]};
  border-radius: ${a.BorderRad.s};
  background-color: transparent;
`,A.OptionComponent=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background: ${a.Colors.White};
  cursor: pointer;
  border-radius: ${a.BorderRad.s};
  transition: ${a.Transitions.all};
  min-height: ${a.Sizes.selectHeight};
  max-height: ${a.Sizes.selectHeight};
  padding: 10px 72px 10px 16px;

  &:active,
  &:focus {
    outline: none;
  }
`,A.OptionHeaderComponent=i.default(A.OptionComponent)`
  min-height: auto;
`,A.OptionsListComponent=i.default.ul`
  display: grid;
  grid-template-columns: 1fr;
  position: absolute;
  left: 50%;
  top: 100%;
  width: calc(100% + 2px);
  height: auto;
  max-height: calc(${a.Sizes.selectHeight} * 2.5);
  margin: 0;
  border-radius: ${a.BorderRad.s};
  border: 1px solid ${a.Colors.Black[300]};
  background-color: ${a.Colors.White};
  box-shadow: ${a.Shadows.select};
  overflow-y: scroll;
  transform: translateX(-50%);
  transition: ${a.Transitions.all};
  animation: showOptions 0.25s ease;
  cursor: auto;
  z-index: 10;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes showOptions {
    from {
      opacity: 0;
      max-height: 0;
    }
  }

  ${A.OptionComponentContainer} {
    border-left: none;
    border-right: none;
    border-radius: 0;

    &:first-child {
      border-top: none;
    }

    &:last-child {
      border-bottom: none;
    }

    ${A.OptionComponent} {
      border-radius: 0;
    }
  }

  ${A.OptionComponentContainer} + ${A.OptionComponentContainer} {
    margin-top: -1px;
  }
`},13682:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(70446),A),n(t(28698),A),n(t(81238),A)},81238:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.Select=void 0;const a=i(t(2784)),o=t(15689),s=t(9398),u=t(79530),c=t(70446);A.Select=({disabled:e,placeholder:A,selected:t,onChange:r,onSearch:n,renderSelected:i,renderList:l})=>{const[d,f]=a.useState(""),g=d,[h,p]=o.useToggle(),[m,I]=a.useState(t),y=a.useRef(null),B=a.useRef(null);a.useEffect((()=>{n(g)}),[g]);const E=a.useCallback((e=>{p(),I(e),r(e),f("")}),[p]);return a.useEffect((()=>{t&&(I(t),r(t))}),[t]),a.useEffect((()=>{const e=e=>{h&&y.current&&!e.composedPath().includes(y.current)&&(p(),f(""))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[h]),a.useEffect((()=>{const e=e=>{h&&"Escape"===e.key&&(p(),f(""))};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[h]),a.useEffect((()=>{var e;h&&(null===(e=B.current)||void 0===e||e.focus())}),[h]),a.default.createElement(c.SelectComponent,{ref:y},a.default.createElement(s.Toggle,{onClick:()=>{!h&&!e&&p()},isOpen:h,disabled:e},m&&!h&&a.default.createElement(c.SelectedOption,null,i(m)),(!m||h)&&a.default.createElement(c.EmptyOption,{ref:B,type:"text",placeholder:A,autoComplete:"off",value:d,disabled:e,onChange:e=>f(e.target.value)}),a.default.createElement(s.ToggleButton,{className:"ui-toggle",disabled:e},a.default.createElement(u.ArrowDownIcon,null))),h&&l(E))}},28698:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0})},37560:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Badge=void 0;const n=r(t(52275)),i=t(67723);A.Badge=n.default.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: ${i.BorderRad.round};
  background-color: ${i.Colors.Black[500]};
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${i.Colors.White};
`},32854:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Label=void 0;const n=r(t(52275)),i=t(67723);A.Label=n.default.span`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${i.Colors.Black[400]};
  text-transform: uppercase;
`},84124:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AboutLabel=A.MembershipLabel=void 0;const n=r(t(2784)),i=r(t(52275));A.MembershipLabel=n.default.memo((({text:e,className:t})=>n.default.createElement(A.AboutLabel,{title:e,className:t},e))),A.AboutLabel=i.default.h6`
  width: fit-content;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
`},12760:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Subscription=void 0;const n=r(t(52275)),i=t(67723);A.Subscription=n.default.span`
  font-size: 12px;
  line-height: 18px;
  color: ${i.Colors.Black[500]};
`},41139:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.TextBig=A.TextMedium=A.TextSmall=void 0;const a=i(t(52275)),o=t(67723),s=a.css`
  font-weight: 700;
`,u=a.css`
  font-weight: 700;
`,c=a.css`
  color: ${o.Colors.Black[700]};
`,l=a.css`
  margin-bottom: ${({margin:e})=>{switch(e){case"s":return"8px";case"m":return"16px";case"l":return"24px";case"xl":return"32px";case void 0:default:return"0px"}}};
`,d=a.css`
  ${e=>{if(!0===e.bold)return s}};
  ${e=>{if(!0===e.italic)return u}};
  ${e=>{if(!0===e.dark)return c}};
  ${l};
`;A.TextSmall=a.default.p`
  font-size: 12px;
  line-height: 18px;
  ${d}
`,A.TextMedium=a.default.p`
  font-size: 14px;
  line-height: 20px;
  ${d}
`,A.TextBig=a.default.p`
  font-size: 16px;
  line-height: 24px;
  ${d}
`},30989:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ValueInJoys=A.TokenValue=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(67723),o=t(27609);A.TokenValue=n.default.memo((({className:e,value:t})=>t?n.default.createElement(A.ValueInJoys,{className:e},o.formatTokenValue(t)):n.default.createElement("span",null,"-"))),A.ValueInJoys=i.default.span`
  display: inline-grid;
  position: relative;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: baseline;
  width: fit-content;
  font-weight: 700;
  color: ${a.Colors.Black[900]};
  font-family: ${a.Fonts.Grotesk};

  &:after {
    content: 'JOY';
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${a.Colors.Black[400]};
    text-transform: uppercase;
    font-family: ${a.Fonts.Grotesk};
  }
`},64342:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(37560),A),n(t(32854),A),n(t(41139),A),n(t(30989),A)},67723:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(78777),A)},78777:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.Overflow=A.Animations=A.Transitions=A.Fonts=A.Shadows=A.Sizes=A.BorderRad=A.Colors=void 0,A.Colors={White:"#FFFFFF",Grey:"#8C96A6",LogoPurple:"#4038FF",Black:{900:"#000000",800:"#131519",700:"#1F252E",600:"#404B5A",500:"#5D6B80",400:"#8C96A6",300:"#C4CCD6",200:"#DDE2EB",100:"#E8EDF6",75:"#EFF3FA",50:"#F6F8FC",25:"#F9FAFC",900.25:"#00000040",700.85:"#1F252ED9"},Blue:{900:"#001AE4",800:"#0027EA",700:"#002CEF",600:"#2734F8",500:"#3F38FF",400:"#6C6CFF",300:"#817EFF",200:"#A7AAFF",100:"#D3DAFF",50:"#E7EBFF",300.4:"#817EFF66"},Green:{500:"#3DCFB3",400:"#62E1CA",400.4:"#62E1CA66",300:"#8EE6D6",200:"#B0EFE4",100:"#CEF5EE",50:"#DDF9F4"},Red:{500:"#F42E55",400:"#FF3960",400.4:"#FF396066",300:"#FF6D87",200:"#F695A4",100:"#FFCBD9",50:"#FEEAF1"},Orange:{500:"#FFAA02",400:"#FFBB33",400.4:"#FFBB3366",300:"#FFC654",200:"#FFDC98",100:"#FFEFCE",50:"#FFFAF0"}},A.BorderRad={s:"2px",m:"4px",full:"1000px",round:"50%"},A.Sizes={selectHeight:"80px",accountHeight:"94px"},A.Shadows={transparent:"0px 0px 0px rgba(0, 0, 0, 0)",focusDefault:`0px 0px 8px ${A.Colors.Blue[300.4]}`,focusInvalid:`0px 0px 8px ${A.Colors.Red[400.4]}`,focusWarning:`0px 0px 8px ${A.Colors.Orange[400.4]}`,focusValid:`0px 0px 8px ${A.Colors.Green[400.4]}`,common:`0px 12px 28px ${A.Colors.Black[900.25]}`,light:"0px 0px 28px #D6D8E780",select:`0px 20px 28px ${A.Colors.Black[900.25]}`},A.Fonts={Grotesk:'"Grotesk", sans-serif',Inter:'"Inter", sans-serif'},A.Transitions={all:"all 0.25s ease",duration:"0.25s",showResult:"1s"},A.Animations={showSymbol:`\n    animation: showSymbol ${A.Transitions.duration} ease;\n\n    @keyframes showSymbol {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n  `,showResultSymbol:`\n    animation: showSymbol ${A.Transitions.showResult} ease;\n\n    @keyframes showSymbol {\n      0% {\n        opacity: 0;\n      }\n      25% {\n        opacity: 1;\n      }\n      75% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n  `,showSidePane:`\n    animation: showSidePane ${A.Transitions.duration} ease;\n\n    @keyframes showSidePane {\n      0% {\n        opacity: 0;\n        transform: translateX(100%);\n      }\n      25% {\n        opacity: 1;\n      }\n      100% {\n        transform: translateX(0%);\n      }\n    }\n  `,showModalBackground:`\n    animation: showModalBackground ${A.Transitions.duration} ease;\n\n    @keyframes showModalBackground {\n      from {\n        background-color: transparent;\n      }\n      to {}\n    }\n  `,showModalBlock:`\n    animation: showModalBlock ${A.Transitions.duration} ease;\n\n    @keyframes showModalBlock {\n      from {\n        opacity: 0;\n        transform: translateY(-24px);\n      }\n      to {}\n    }\n  `,showHelperTooltip:"\n    animation: showHelperTooltip 0.25s ease;\n    animation-delay: 0.25s;\n    animation-fill-mode: forwards;\n\n    @keyframes showHelperTooltip {\n      from {\n        opacity: 0;\n        transform: translateY(8px);\n        visibility: hidden;\n      }\n      to {\n        visibility: visible;\n      }\n    }\n  ",showNotification:`\n    animation: showNotification ${A.Transitions.duration} ease;\n\n    @keyframes showNotification {\n      from {\n        opacity: 0;\n        transform: translateX(120%);\n      }\n      to {\n        opactiy: 1;\n        transform: translateX(0%);\n      }\n    }\n  `},A.Overflow={DotsTwoLine:"\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    overflow: hidden;\n  ",Dots:"\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}},52452:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useAccounts=void 0;const r=t(5568),n=t(25488);A.useAccounts=function(){const e=r.useKeyring(),A=n.useObservable(e.accounts.subject.asObservable(),[e]),t=[];return A&&t.push(...Object.values(A).map((e=>({address:e.json.address,name:e.json.meta.name})))),{allAccounts:t,hasAccounts:0!==t.length}}},8162:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useApi=void 0;const r=t(2784),n=t(12674);A.useApi=()=>Object.assign({},r.useContext(n.ApiContext))},25047:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.useBalance=A.toBalances=void 0;const n=r(t(62197)),i=t(8162),a=t(25488);function o(e){const{lockedBalance:A,availableBalance:t}=e;return{total:t.add(A),transferable:t,locked:A,recoverable:new n.default(0)}}A.toBalances=o,A.useBalance=function(e){const{api:A}=i.useApi(),t=null==e?void 0:e.address,r=a.useObservable(t?null==A?void 0:A.derive.balances.all(t):void 0,[A,t]);return void 0===r?null:o(r)}},27950:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useBalances=void 0;const r=t(24496),n=t(56276),i=t(52452),a=t(8162),o=t(25047),s=t(25488);A.useBalances=function(){const{hasAccounts:e,allAccounts:A}=i.useAccounts(),{isConnected:t,api:u}=a.useApi(),c=A.map((e=>e.address)),l=u?c.map((e=>u.derive.balances.all(e).pipe(n.map(o.toBalances)))):[],d=s.useObservable(r.combineLatest(l),[u,JSON.stringify(c)]);return e&&t&&d?d.reduce(((e,A,t)=>Object.assign({[c[t]]:A},e)),{}):{}}},75278:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useDebounce=void 0;const r=t(2784);A.useDebounce=function(e,A){const[t,n]=r.useState(e);return r.useEffect((()=>{const t=setTimeout((()=>{n(e)}),A);return()=>{clearTimeout(t)}}),[e,A]),t}},6638:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useFormValidation=void 0;const r=t(2784);A.useFormValidation=e=>{const[A,t]=r.useState(!1),[n,i]=r.useState([]),[a,o]=r.useState(),[s,u]=r.useState();return r.useEffect((()=>{let A=!0;return t(!1),e.validate(a,{abortEarly:!1,stripUnknown:!0,context:s}).then((()=>{A&&(t(!0),i([]))})).catch((e=>{A&&(t(!1),i(e.inner))})),()=>{A=!1}}),[a,s]),{isValid:A,errors:n,validate:(e,A)=>{o(e),u(A)}}}},5568:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useKeyring=void 0;const r=t(2784),n=t(52085);A.useKeyring=()=>r.useContext(n.KeyringContext)},54698:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useModal=void 0;const r=t(2784),n=t(92082);A.useModal=()=>r.useContext(n.ModalContext)},82975:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useMyMemberships=void 0;const r=t(2784),n=t(3100),i=t(95601),a=t(52452);A.useMyMemberships=function(){var e,A;const{allAccounts:t}=a.useAccounts(),o=t.map((e=>e.address)),s={variables:{rootAccount_in:o,controllerAccount_in:o},pollInterval:5e3},{data:u,loading:c,error:l}=n.useGetMembersQuery(s),{active:d,setActive:f}=r.useContext(i.MembershipContext);return l&&console.error(l),{count:null!==(e=null==u?void 0:u.memberships.length)&&void 0!==e?e:0,members:null!==(A=null==u?void 0:u.memberships)&&void 0!==A?A:[],isLoading:c,active:d,setActive:f}}},55592:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useNumberInput=void 0;const r=t(2784),n=/^\d*(\.\d*)?$/;function i(e,A){if(e.includes(".")){const[t,r]=e.split("."),n=r.substring(0,A);return 0!==A?`${t}.${n}`:t}return e}A.useNumberInput=function(e=6){const[A,t]=r.useState("");return r.useEffect((()=>{t(i(A,e))}),[e]),[A,function(A){A=function(e){return e.replace(/,/g,"")}(A),n.test(A)&&t(i(function(e){return""===e||((e=e.replace(/^0*/,"")).startsWith(".")||""===e)&&(e="0"+e),e}(A),e))}]}},25488:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useObservable=void 0;const r=t(2784);A.useObservable=function(e,A){const[t,n]=r.useState(void 0);return r.useEffect((()=>{const A=null==e?void 0:e.subscribe(n);return()=>A&&A.unsubscribe()}),A),t}},96065:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.useSignAndSendTransaction=void 0;const n=t(2028),i=r(t(62197)),a=t(2784),o=t(8162),s=t(5568),u=t(25488),c=(e,A,t)=>{e.subscribe((e=>{const{status:r,events:n}=e;console.log(`Current transaction status: ${r.type}`),r.isReady&&A("PENDING"),r.isInBlock&&(console.log("Included at block hash",JSON.stringify(r.asInBlock)),console.log("Events:"),n.forEach((({event:{data:e,method:A,section:t},phase:r})=>{console.log("\t",JSON.stringify(r),`: ${t}.${A}`,JSON.stringify(e))})),console.log(JSON.stringify(n)),t(n),A((e=>e.find((({event:{method:e}})=>"ExtrinsicFailed"===e||"BatchInterrupted"===e)))(n)?"ERROR":"SUCCESS"))}),(()=>A("ERROR")))};A.useSignAndSendTransaction=({transaction:e,from:A,onDone:t})=>{const r=s.useKeyring(),{api:l}=o.useApi(),d=A.address,f=u.useObservable(null==e?void 0:e.paymentInfo(d),[e,d]),[g,h]=a.useState("READY"),[p,m]=a.useState([]);return a.useEffect((()=>{if("SIGN"!==g||!e)return;const A=r.getPair(d);A.meta.isInjected?(h("EXTENSION"),n.web3FromAddress(d).then((({signer:A})=>{c(e.signAndSend(d,{signer:A}),h,m)}))):(h("PENDING"),c(e.signAndSend(A),h,m))}),[l,g]),a.useEffect((()=>{"SUCCESS"!==g&&"ERROR"!==g||t("SUCCESS"===g,p,(null==f?void 0:f.partialFee.toBn())||new i.default(0))}),[g]),{send:()=>h("SIGN"),paymentInfo:f,status:g}}},15689:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useToggle=void 0;const r=t(2784);A.useToggle=(e=!1)=>r.useReducer((e=>!e),e)},51534:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.useTotalBalances=A.zeroBalance=void 0;const n=r(t(62197)),i=t(27950);A.zeroBalance=()=>({recoverable:new n.default(0),locked:new n.default(0),transferable:new n.default(0),total:new n.default(0)});const a=(e,A)=>({recoverable:e.recoverable.add(A.recoverable),locked:e.locked.add(A.locked),transferable:e.transferable.add(A.transferable),total:e.total.add(A.total)});A.useTotalBalances=function(){const e=i.useBalances();return[...Object.values(e)].reduce(a,A.zeroBalance())}},85576:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useTransactionFee=void 0;const r=t(2784),n=t(25047),i=t(25488);A.useTransactionFee=function(e,A){const t=i.useObservable(null==A?void 0:A.paymentInfo(e||""),[A,e]),a=n.useBalance({name:"",address:e||""});return r.useMemo((()=>a&&t?{transactionFee:t.partialFee,canAfford:a.transferable.gte(t.partialFee)}:void 0),[a,t])}},46447:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useTransferInviteFee=void 0;const r=t(2784),n=t(8162),i=t(85576);A.useTransferInviteFee=function(e){const{api:A}=n.useApi(),t=r.useMemo((()=>{var t,r;return e?null===(r=null===(t=null==A?void 0:A.tx)||void 0===t?void 0:t.members)||void 0===r?void 0:r.transferInvites(e.id,e.id,1):void 0}),[e]);return i.useTransactionFee(null==e?void 0:e.controllerAccount,t)}},34582:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0});const n=r(t(2784)),i=r(t(28316)),a=t(85754),o=t(5388);i.default.render(n.default.createElement(o.Providers,null,n.default.createElement(a.App,null)),document.getElementById("app"))},61060:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.EditMembershipButton=void 0;const n=r(t(2784)),i=t(59686),a=t(15689),o=t(21559);A.EditMembershipButton=({className:e,children:A,member:t})=>{const[r,s]=a.useToggle();return n.default.createElement(n.default.Fragment,null,n.default.createElement(i.ButtonGhost,{size:"small",onClick:s,className:e,square:!0},A),r&&n.default.createElement(o.UpdateMembershipModal,{onClose:s,member:t}))}},7323:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.NewAddressSchema=A.ReferrerSchema=A.HandleSchema=A.AvatarURISchema=A.MemberSchema=A.AccountSchema=void 0;const o=a(t(62197)),s=i(t(88253)),u=t(96723);A.AccountSchema=s.object(),A.MemberSchema=s.object(),A.AvatarURISchema=s.string().url(),A.HandleSchema=s.string().test("handle","This handle is already taken",((e,A)=>{var t,r,n,i;return null!==(i=null===(n=null===(r=null===(t=null==A?void 0:A.options)||void 0===t?void 0:t.context)||void 0===r?void 0:r.size)||void 0===n?void 0:n.lte(new o.default(0)))&&void 0!==i&&i})),A.ReferrerSchema=s.object().when("isReferred",((e,A)=>e?A.required():A)),A.NewAddressSchema=e=>s.object().shape({name:s.string(),address:s.string().required()}).test(e,"Address is invalid",((e,A)=>{var t,r;const n=null===(r=null===(t=null==A?void 0:A.options)||void 0===t?void 0:t.context)||void 0===r?void 0:r.keyring;return!e.address||u.isValidAddress(e.address,n)}))},92146:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(977),A),n(t(41758),A)},41758:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.seedBlocks=A.mockBlocks=void 0;const n=t(3100),i=r(t(74765));A.mockBlocks=i.default.map((e=>Object.assign(Object.assign({},e),{network:n.Network.Olympia,__typename:"Block"}))),A.seedBlocks=e=>A.mockBlocks.reduce(((A,t)=>A.set(t.id,e.schema.create("Block",Object.assign({},t)))),new Map)},977:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.seedMembers=A.mockMembers=void 0;const n=r(t(27143));A.mockMembers=n.default.map((e=>Object.assign({},e))),A.seedMembers=e=>{A.mockMembers.map((A=>((e,A)=>{const t=Object.assign({},e);return t.invitedById&&delete t.invitedById,A.schema.create("Membership",Object.assign({},t))})(A,e)))}},98211:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.searchMembersResolver=A.getMembersResolver=A.getMemberResolver=void 0;const r=t(49342);A.getMemberResolver=(e,A,t,n)=>{const i={id:A.where.id};return r.mirageGraphQLFieldResolver(e,i,t,n)},A.getMembersResolver=(e,A,{mirageSchema:t})=>{const r=A.where.rootAccount_in,n=A.where.controllerAccount_in,{models:i}=r?t.where("Membership",(e=>(null==r?void 0:r.includes(e.rootAccount))||(null==n?void 0:n.includes(e.controllerAccount)))):t.all("Membership");return i},A.searchMembersResolver=(e,{text:A,limit:t},{mirageSchema:r})=>{const n=(e=>{const A=new RegExp(e,"i");return e=>A.test(e||"")})(A),{models:i}=r.where("Membership",(e=>n(e.handle)||n(e.name)||n(e.id)));return t?i.slice(0,t):i}},16287:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.makeServer=void 0;const n=t(49342),i=t(17019),a=r(t(64859)),o=t(92146),s=t(98211);A.makeServer=(e="development")=>i.createServer({environment:e,routes(){this.post("http://localhost:8081/graphql",n.createGraphQLHandler(a.default,this.schema,{context:void 0,root:void 0,resolvers:{Query:{membership:s.getMemberResolver,memberships:s.getMembersResolver,searchMemberships:s.searchMembersResolver}}}))},seeds(e){o.seedBlocks(e),o.seedMembers(e)}})},35378:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useMockMembers=void 0;const r=t(2784),n=t(3100),i=t(8162),a=t(25488),o=t(96065);A.useMockMembers=function(){var e,A;const{api:t,isConnected:s}=i.useApi(),{data:u,loading:c}=n.useGetMembersQuery(),l=null==u?void 0:u.memberships,d=r.useMemo((()=>{if(!l||!t)return;const e=l.map((e=>null==t?void 0:t.tx.members.buyMembership({handle:e.handle,metadata:{avatar_uri:e.avatarUri,name:e.name,about:e.about},root_account:e.rootAccount,controller_account:e.controllerAccount})));return t.tx.utility.batch(e)}),[t,l,c]),{send:f}=o.useSignAndSendTransaction({transaction:d,from:{address:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",name:"signer"},onDone:e=>console.log(e?"✅ Members created":"❗️Error processing batch transaction")}),g=null===(A=a.useObservable(null===(e=null==t?void 0:t.query)||void 0===e?void 0:e.members.membershipById.size(0),[s]))||void 0===A?void 0:A.toNumber();r.useEffect((()=>{}),[s,l,g])}},20577:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useSudoBudget=void 0;const r=t(2784),n=t(52452),i=t(8162),a=t(25488),o=t(96065);A.useSudoBudget=function(){const{api:e,isConnected:A}=i.useApi(),{hasAccounts:t}=n.useAccounts(),s=a.useObservable(null==e?void 0:e.query.membershipWorkingGroup.budget(),[A]);console.log(`💸 Current Membership WG budget: ${s} JOY`);const u=r.useMemo((()=>{if(e)return e.tx.sudo.sudo(e.tx.membershipWorkingGroup.setBudget(100))}),[e]),{send:c}=o.useSignAndSendTransaction({transaction:u,from:{address:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",name:"signer"},onDone:e=>{console.log(e?"💰 Budget increased to: 100 JOY":"❗️Error processing sudo transaction")}});r.useEffect((()=>{}),[A,t])}},2850:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AddMembershipFailureModal=void 0;const n=r(t(2784)),i=t(64020),a=t(18823);A.AddMembershipFailureModal=({onClose:e,member:A})=>n.default.createElement(a.Modal,{modalSize:"xs",modalHeight:"s",onClose:e},n.default.createElement(a.ModalHeader,{title:"",onClick:e,modalHeaderSize:"s"}),n.default.createElement(a.ResultModalBody,null,n.default.createElement(i.FailureIcon,null),n.default.createElement(a.ModalTitle,{as:"h4"},n.default.createElement("span",{className:"red-title"},"Oh no!")," Failure"),n.default.createElement(a.ResultText,null,"There was a problem with creating a membership for ",A.name,".")))},5412:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.AddMembershipModal=void 0;const a=i(t(2784)),o=t(8162),s=t(54698),u=t(25488),c=t(92725),l=t(2850),d=t(73187),f=t(86722),g=t(87813);A.AddMembershipModal=()=>{const{hideModal:e}=s.useModal(),A=e,{api:t}=o.useApi(),r=u.useObservable(null==t?void 0:t.query.members.membershipPrice(),[]),[n,i]=a.useState("PREPARE"),[h,p]=a.useState(),m=a.useContext(c.ServerContext),[I,y]=a.useState(),B=a.useMemo((()=>{var e,A,r;return h?null===(A=null===(e=null==t?void 0:t.tx)||void 0===e?void 0:e.members)||void 0===A?void 0:A.buyMembership({root_account:h.rootAccount.address,controller_account:h.controllerAccount.address,handle:h.handle,metadata:{name:h.name,avatar_uri:h.avatarUri,about:h.about},referrer_id:null===(r=h.referrer)||void 0===r?void 0:r.id}):void 0}),[JSON.stringify(h)]),E=a.useMemo((()=>h?(e,A)=>{var t;const r=null===(t=A.find((e=>"MemberRegistered"===e.event.method)))||void 0===t?void 0:t.event.data[0].toString();y(r),m&&r&&m.schema.create("Membership",{id:I,rootAccount:h.rootAccount.address,controllerAccount:h.controllerAccount.address,name:h.name,handle:h.handle,avatarUri:h.avatarUri,about:h.about,isVerified:!1,isFoundingMember:!1,inviteCount:"5",registeredAtBlockId:"block-3"}),i(e?"SUCCESS":"ERROR")}:()=>null),[h]);return"PREPARE"!==n&&h?"AUTHORIZE"===n?a.default.createElement(g.SignCreateMemberModal,{onClose:A,membershipPrice:r,transactionParams:h,onDone:E,transaction:B,initialSigner:h.controllerAccount}):"SUCCESS"===n?a.default.createElement(d.AddMembershipSuccessModal,{onClose:A,member:h,memberId:I}):a.default.createElement(l.AddMembershipFailureModal,{onClose:A,member:h}):a.default.createElement(f.MembershipFormModal,{onClose:A,onSubmit:e=>{i("AUTHORIZE"),p(e)},membershipPrice:r})}},73187:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AddMembershipSuccessModal=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(59686),o=t(79530),s=t(20396),u=t(18823),c=t(64342),l=t(67723),d=t(54698);A.AddMembershipSuccessModal=function({onClose:e,member:A,memberId:t}){const{showModal:r}=d.useModal();return n.default.createElement(u.Modal,{modalSize:"m",modalHeight:"s",onClose:e},n.default.createElement(u.ModalHeader,{onClick:e,title:"Success",icon:n.default.createElement(o.SuccessIcon,null)}),n.default.createElement(u.ModalBody,null,n.default.createElement(c.TextMedium,null,"You have just successfully created a new membership"),n.default.createElement(f,null,n.default.createElement(s.MemberInfo,{member:A}))),n.default.createElement(u.ModalFooter,null,n.default.createElement(a.ButtonPrimary,{size:"medium",disabled:!t,onClick:()=>{e(),t&&r({modal:"Member",data:{id:t}})}},"View my profile")))};const f=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${l.Sizes.accountHeight};
  max-height: ${l.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${l.Colors.Black[300]};
  border-radius: ${l.BorderRad.s};
  background-color: ${l.Colors.White};
`},86722:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.MembershipFormModal=void 0;const a=t(52356),o=i(t(2784)),s=i(t(88253)),u=t(71196),c=t(59686),l=t(81328),d=t(20554),f=t(95148),g=t(56404),h=t(18823),p=t(64342),m=t(8162),I=t(6638),y=t(25488),B=t(7323),E=t(10233),C=t(21696),v=s.object().shape({rootAccount:B.AccountSchema.required(),controllerAccount:B.AccountSchema.required(),avatarUri:B.AvatarURISchema,name:s.string().required(),handle:B.HandleSchema.required(),hasTerms:s.boolean().required().oneOf([!0]),isReferred:s.boolean(),referrer:B.ReferrerSchema});A.MembershipFormModal=({onClose:e,onSubmit:A,membershipPrice:t})=>{const{api:r}=m.useApi(),[n,i]=o.useReducer(C.formReducer,{name:"",rootAccount:void 0,controllerAccount:void 0,handle:"",about:"",avatarUri:"",isReferred:!1,referrer:void 0,hasTerms:!1}),{rootAccount:s,controllerAccount:B,handle:b,name:Q,isReferred:w,avatarUri:M,about:D,referrer:S}=n,_=o.useCallback(u.filterAccount(B),[B]),k=o.useCallback(u.filterAccount(s),[s]),N=a.blake2AsHex(b),L=y.useObservable(null==r?void 0:r.query.members.memberIdByHandleHash.size(N),[b]),{isValid:O,errors:x,validate:Y}=I.useFormValidation(v);o.useEffect((()=>{Y(n,{size:L})}),[n,L]);const T=(e,A)=>{i({type:e,value:A})};return o.default.createElement(h.ScrolledModal,{modalSize:"m",modalHeight:"m",onClose:e},o.default.createElement(h.ModalHeader,{onClick:e,title:"Add membership"}),o.default.createElement(h.ScrolledModalBody,null,o.default.createElement(h.ScrolledModalContainer,null,o.default.createElement(E.Row,null,o.default.createElement(l.InlineToggleWrap,null,o.default.createElement(l.Label,null,"I was referred by a member: "),o.default.createElement(l.ToggleCheckbox,{trueLabel:"Yes",falseLabel:"No",onChange:e=>T("isReferred",e),checked:null!=w&&w})),w&&o.default.createElement(l.InputComponent,{required:!0,inputSize:"l"},o.default.createElement(g.SelectMember,{onChange:e=>T("referrer",e),disabled:!w,selected:S}))),o.default.createElement(E.Row,null,o.default.createElement(p.TextMedium,{dark:!0},"Please fill in all the details below.")),o.default.createElement(E.Row,null,o.default.createElement(l.InputComponent,{label:"Root account",required:!0,inputSize:"l",helperText:"Something about root accounts"},o.default.createElement(u.SelectAccount,{filter:_,onChange:e=>T("rootAccount",e)}))),o.default.createElement(E.Row,null,o.default.createElement(l.InputComponent,{label:"Controller account",required:!0,inputSize:"l",helperText:"Something about controller account"},o.default.createElement(u.SelectAccount,{filter:k,onChange:e=>T("controllerAccount",e)}))),o.default.createElement(E.Row,null,o.default.createElement(l.InputComponent,{id:"member-name",label:"Member Name",required:!0},o.default.createElement(l.InputText,{id:"member-name",placeholder:"Type",value:Q,onChange:e=>T("name",e.target.value)}))),o.default.createElement(E.Row,null,o.default.createElement(l.InputComponent,{id:"membership-handle",label:"Membership handle",required:!0},o.default.createElement(l.InputText,{id:"membership-handle",placeholder:"Type",value:b,onChange:e=>T("handle",e.target.value)}))),o.default.createElement(E.Row,null,o.default.createElement(l.InputComponent,{id:"member-about",label:"About member",inputSize:"l"},o.default.createElement(l.InputTextarea,{id:"member-about",value:D,placeholder:"Type",onChange:e=>T("about",e.target.value)}))),o.default.createElement(E.Row,null,o.default.createElement(l.InputComponent,{id:"member-avatar",label:"Member Avatar",required:!0,value:M,validation:d.hasError("avatarUri",x)?"invalid":void 0,message:d.hasError("avatarUri",x)?d.getErrorMessage("avatarUri",x):"Paste an URL of your avatar image. Text lorem ipsum.",placeholder:"Image URL"},o.default.createElement(l.InputText,{id:"member-avatar",value:M,onChange:e=>T("avatarUri",e.target.value)}))))),o.default.createElement(h.ModalFooter,{twoColumns:!0},o.default.createElement(h.ModalFooterGroup,{left:!0},o.default.createElement(l.Checkbox,{id:"privacy-policy-agreement",onChange:e=>T("hasTerms",e)},o.default.createElement(p.TextMedium,{colorInherit:!0},"I agree to the"," ",o.default.createElement(l.LabelLink,{href:"http://example.com/",target:"_blank"},"Terms of Service")," ","and"," ",o.default.createElement(l.LabelLink,{href:"http://example.com/",target:"_blank"},"Privacy Policy"),"."))),o.default.createElement(h.ModalFooterGroup,null,o.default.createElement(E.BalanceInfoNarrow,null,o.default.createElement(E.InfoTitle,null,"Creation fee:"),o.default.createElement(E.InfoValue,null,o.default.createElement(p.TokenValue,{value:null==t?void 0:t.toBn()})),o.default.createElement(f.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",absolute:!0})),o.default.createElement(c.ButtonPrimary,{size:"medium",onClick:()=>{B&&s&&A(n)},disabled:!O},"Create a Membership"))))}},87813:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.SignCreateMemberModal=void 0;const a=i(t(2784)),o=t(71196),s=t(59686),u=t(81328),c=t(95148),l=t(18823),d=t(64342),f=t(96065),g=t(10233),h=t(15888);A.SignCreateMemberModal=({onClose:e,membershipPrice:A,transactionParams:t,onDone:r,transaction:n,isInvite:i,initialSigner:p})=>{var m,I;const[y,B]=a.useState(null!=p?p:{name:"Controller account",address:null===(m=t.invitor)||void 0===m?void 0:m.controllerAccount}),{paymentInfo:E,send:C,status:v}=f.useSignAndSendTransaction({transaction:n,from:y,onDone:r});return"READY"===v?a.default.createElement(l.Modal,{modalSize:"m",modalHeight:"s",onClose:e},a.default.createElement(l.ModalHeader,{onClick:e,title:"Authorize transaction"}),a.default.createElement(l.ModalBody,null,a.default.createElement(d.TextMedium,null,"You intend to create a new membership."),i?a.default.createElement(d.TextMedium,null,"You are inviting this member. You have ",null===(I=t.invitor)||void 0===I?void 0:I.inviteCount.toString()," invites left."):a.default.createElement(d.TextMedium,null,"The creation of the new membership costs ",a.default.createElement(d.TokenValue,{value:null==A?void 0:A.toBn()}),"."),a.default.createElement(d.TextMedium,null,"Fees of ",a.default.createElement(d.TokenValue,{value:null==E?void 0:E.partialFee.toBn()})," will be applied to the transaction."),a.default.createElement(g.Row,null,a.default.createElement(u.Label,null,"Sending from account"),p?a.default.createElement(o.SelectAccount,{selected:y,onChange:e=>B(e)}):a.default.createElement(o.SelectedAccount,{account:y}))),a.default.createElement(l.ModalFooter,null,a.default.createElement(g.BalanceInfoNarrow,null,!i&&a.default.createElement(a.default.Fragment,null,a.default.createElement(g.InfoTitle,null,"Creation fee:"),a.default.createElement(g.InfoValue,null,a.default.createElement(d.TokenValue,{value:null==A?void 0:A.toBn()})),a.default.createElement(c.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",absolute:!0})),a.default.createElement(g.InfoTitle,null,"Transaction fee:"),a.default.createElement(g.InfoValue,null,a.default.createElement(d.TokenValue,{value:null==E?void 0:E.partialFee.toBn()})),a.default.createElement(c.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",absolute:!0})),a.default.createElement(s.ButtonPrimary,{size:"medium",onClick:C,disabled:"READY"!==v},"Sign and create a member"))):"EXTENSION"===v?a.default.createElement(h.WaitModal,{onClose:e,title:"Waiting for the extension",description:"Please, sign the transaction using external signer app."}):"PENDING"===v?a.default.createElement(h.WaitModal,{onClose:e,title:"Pending transaction",description:"We are waiting for your transaction to be mined. It can takes Lorem ipsum deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}):null}},21696:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.formReducer=void 0,A.formReducer=(e,A)=>{switch(A.type){case"name":case"handle":case"about":case"avatarUri":return Object.assign(Object.assign({},e),{[A.type]:A.value});case"rootAccount":case"controllerAccount":return Object.assign(Object.assign({},e),{[A.type]:A.value});case"hasTerms":case"isReferred":return Object.assign(Object.assign({},e),{[A.type]:A.value});case"referrer":return Object.assign(Object.assign({},e),{[A.type]:A.value});case"invitor":return Object.assign(Object.assign({},e),{[A.type]:A.value});default:return Object.assign({},e)}}},66337:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(5412),A),n(t(77600),A)},77600:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0})},2413:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.InviteFormModal=void 0;const a=t(52356),o=i(t(2784)),s=i(t(88253)),u=t(59686),c=t(81328),l=t(20554),d=t(56404),f=t(18823),g=t(64342),h=t(8162),p=t(6638),m=t(5568),I=t(25488),y=t(7323),B=t(21696),E=t(10233),C=s.object().shape({invitor:y.MemberSchema.required(),rootAccount:y.NewAddressSchema("rootAccount"),controllerAccount:y.NewAddressSchema("controllerAccount"),avatarUri:y.AvatarURISchema,name:s.string().required(),handle:y.HandleSchema.required()});A.InviteFormModal=({onClose:e,onSubmit:A})=>{var t,r;const{api:n}=h.useApi(),i=m.useKeyring(),[s,y]=o.useReducer(B.formReducer,{name:"",rootAccount:void 0,controllerAccount:void 0,handle:"",about:"",avatarUri:"",hasTerms:!1,invitor:void 0}),{rootAccount:v,controllerAccount:b,handle:Q,name:w,avatarUri:M,about:D}=s,S=a.blake2AsHex(Q),_=I.useObservable(null==n?void 0:n.query.members.memberIdByHandleHash.size(S),[Q]),{isValid:k,errors:N,validate:L}=p.useFormValidation(C);o.useEffect((()=>{L(s,{size:_,keyring:i})}),[s,_]);const O=(e,A)=>{y({type:e,value:A})};return o.default.createElement(f.ScrolledModal,{modalSize:"m",modalHeight:"m",onClose:e},o.default.createElement(f.ModalHeader,{onClick:e,title:"Invite a member"}),o.default.createElement(f.ScrolledModalBody,null,o.default.createElement(f.ScrolledModalContainer,null,o.default.createElement(c.InputComponent,{label:"Inviting member",inputSize:"l"},o.default.createElement(d.SelectMember,{onChange:e=>O("invitor",e)})),o.default.createElement(E.Row,null,o.default.createElement(g.TextMedium,{dark:!0},"To invite a member please fill in all the details below.")),o.default.createElement(E.Row,null,o.default.createElement(c.InputComponent,{label:"Root account",id:"root-account",required:!0,helperText:"Something about root accounts",validation:l.hasError("rootAccount",N)?"invalid":void 0,message:l.hasError("rootAccount",N)?l.getErrorMessage("rootAccount",N):""},o.default.createElement(c.InputText,{id:"root-account",placeholder:"Type",value:null!==(t=null==v?void 0:v.address)&&void 0!==t?t:"",onChange:e=>O("rootAccount",{name:void 0,address:e.target.value})}))),o.default.createElement(E.Row,null,o.default.createElement(c.InputComponent,{label:"Controller account",id:"controller-account",required:!0,helperText:"Something about controller accounts",validation:l.hasError("controllerAccount",N)?"invalid":void 0,message:l.hasError("controllerAccount",N)?l.getErrorMessage("controllerAccount",N):""},o.default.createElement(c.InputText,{id:"controller-account",placeholder:"Type",value:null!==(r=null==b?void 0:b.address)&&void 0!==r?r:"",onChange:e=>O("controllerAccount",{name:void 0,address:e.target.value})}))),o.default.createElement(E.Row,null,o.default.createElement(c.InputComponent,{id:"member-name",label:"Member Name",required:!0},o.default.createElement(c.InputText,{id:"member-name",placeholder:"Type",value:w,onChange:e=>O("name",e.target.value)}))),o.default.createElement(E.Row,null,o.default.createElement(c.InputComponent,{id:"member-handle",label:"Membership handle",required:!0,validation:l.hasError("handle",N)?"invalid":void 0,message:l.hasError("handle",N)?l.getErrorMessage("handle",N):"Do not use same handles"},o.default.createElement(c.InputText,{id:"member-handle",placeholder:"Type",value:Q,onChange:e=>O("handle",e.target.value)}))),o.default.createElement(E.Row,null,o.default.createElement(c.InputComponent,{id:"member-about",label:"About member",inputSize:"l"},o.default.createElement(c.InputTextarea,{id:"member-about",value:D,placeholder:"Type",onChange:e=>O("about",e.target.value)}))),o.default.createElement(E.Row,null,o.default.createElement(c.InputComponent,{id:"member-avatar",label:"Member Avatar",required:!0,value:M,validation:l.hasError("avatarUri",N)?"invalid":void 0,message:l.hasError("avatarUri",N)?l.getErrorMessage("avatarUri",N):"Paste an URL of your avatar image. Text lorem ipsum.",placeholder:"Image URL"},o.default.createElement(c.InputText,{id:"member-avatar",value:M,onChange:e=>O("avatarUri",e.target.value)}))))),o.default.createElement(f.ModalFooter,null,o.default.createElement(u.ButtonPrimary,{size:"medium",onClick:()=>A(s),disabled:!k},"Invite a Member")))}},7733:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.InviteMemberModal=void 0;const a=i(t(2784)),o=t(8162),s=t(25488),u=t(2850),c=t(73187),l=t(87813),d=t(15888),f=t(2413),g=t(98246);A.InviteMemberModal=function({onClose:e}){const{api:A}=o.useApi(),[t,r]=a.useState("REQUIREMENTS_CHECK"),[n,i]=a.useState(),h=a.useMemo((()=>{var e,t,r;return n?null===(t=null===(e=null==A?void 0:A.tx)||void 0===e?void 0:e.members)||void 0===t?void 0:t.inviteMember({inviting_member_id:null===(r=n.invitor)||void 0===r?void 0:r.id,root_account:n.rootAccount.address,controller_account:n.controllerAccount.address,metadata:{name:n.name,avatar_uri:n.avatarUri,about:n.about},handle:n.handle}):void 0}),[JSON.stringify(n)]),p=s.useObservable(null==A?void 0:A.query.membershipWorkingGroup.budget(),[]),m=s.useObservable(null==A?void 0:A.query.members.membershipPrice(),[]);return a.useEffect((()=>{if("REQUIREMENTS_CHECK"===t&&p&&m){const e=p.toBn().gte(m.toBn());r(e?"PREPARE":"REQUIREMENTS_FAIL")}}),[p,m]),"REQUIREMENTS_CHECK"===t?a.default.createElement(d.WaitModal,{onClose:e,title:"Loading...",description:""}):"REQUIREMENTS_FAIL"===t?a.default.createElement(g.WorkingGroupBudgetModal,{onClose:e}):"PREPARE"!=t&&n?"AUTHORIZE"===t?a.default.createElement(l.SignCreateMemberModal,{onClose:e,transactionParams:n,onDone:e=>r(e?"SUCCESS":"ERROR"),transaction:h,isInvite:!0}):"SUCCESS"===t?a.default.createElement(c.AddMembershipSuccessModal,{onClose:e,member:n}):a.default.createElement(u.AddMembershipFailureModal,{onClose:e,member:n}):a.default.createElement(f.InviteFormModal,{onClose:e,onSubmit:e=>{r("AUTHORIZE"),i(e)}})}},98246:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroupBudgetModal=void 0;const n=r(t(2784)),i=t(18823),a=t(64342),o=t(8162),s=t(25488);A.WorkingGroupBudgetModal=({onClose:e})=>{const{api:A}=o.useApi(),t=s.useObservable(null==A?void 0:A.query.membershipWorkingGroup.budget(),[]),r=s.useObservable(null==A?void 0:A.query.members.membershipPrice(),[]);return n.default.createElement(i.Modal,{modalSize:"m",modalHeight:"s",onClose:e},n.default.createElement(i.ModalHeader,{onClick:e,title:"Insufficient Working Group budget"}),n.default.createElement(i.ModalBody,null,n.default.createElement(a.TextMedium,{margin:"s"},"Unfortunately, the Membership Working group budget is Lorem ipsum dolor sit enim. Please try again later."),n.default.createElement(a.TextMedium,null,"Current budget: ",n.default.createElement(a.TokenValue,{value:null==t?void 0:t.toBn()})),n.default.createElement(a.TextMedium,null,"Working Group Dept: ",n.default.createElement(a.TokenValue,{value:null==r?void 0:r.toBn()}))))}},73233:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(7733),A)},82922:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.RequirementFailedModal=void 0;const o=i(t(2784)),s=a(t(52275)),u=t(1772),c=t(59686),l=t(18823),d=t(64342),f=t(67723),g=t(52452),h=t(25047),p=t(54698),m=t(10233);A.RequirementFailedModal=function({onClose:e,address:A,amount:t}){const{showModal:r}=p.useModal(),{allAccounts:n}=g.useAccounts(),i=o.useMemo((()=>n.find((e=>e.address==A))||{name:"Controller account",address:A}),[n]),{transferable:a}=h.useBalance(i)||{};return o.default.createElement(l.Modal,{modalSize:"m",modalHeight:"s",onClose:e},o.default.createElement(l.ModalHeader,{onClick:e,title:"Insufficient Funds"}),o.default.createElement(l.ModalBody,null,o.default.createElement(d.TextMedium,{margin:"s"},"Unfortunately, you don't have enough Tokens on your Controller account. You need at least"," ",o.default.createElement(d.TokenValue,{value:t})," for the transaction fee."),o.default.createElement(I,null,o.default.createElement(u.AccountInfo,{account:i}),o.default.createElement(m.BalanceInfoInRow,null,o.default.createElement(m.InfoTitle,null,"Transferable balance"),o.default.createElement(m.InfoValue,null,o.default.createElement(d.TokenValue,{value:a}))))),o.default.createElement(l.ModalFooter,null,o.default.createElement(c.ButtonPrimary,{size:"medium",onClick:()=>r({modal:"TransferTokens",data:{to:i}})},"Add JOY to Controller Account")))};const I=s.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${f.Sizes.accountHeight};
  max-height: ${f.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${f.Colors.Black[300]};
  border-radius: ${f.BorderRad.s};
  background-color: ${f.Colors.White};
`},97324:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SignTransferModal=void 0;const o=a(t(62197)),s=i(t(2784)),u=t(71196),c=t(59686),l=t(81328),d=t(95148),f=t(18823),g=t(64342),h=t(8162),p=t(96065),m=t(27609),I=t(10233),y=t(15888);A.SignTransferModal=function({onClose:e,sourceMember:A,targetMember:t,amount:r,onDone:n,signer:i}){const{api:a}=h.useApi(),B=s.useMemo((()=>{var e,n;return null===(n=null===(e=null==a?void 0:a.tx)||void 0===e?void 0:e.members)||void 0===n?void 0:n.transferInvites(A.id,t.id,r)}),[A.id,t.id,r]),{paymentInfo:E,send:C,status:v}=p.useSignAndSendTransaction({transaction:B,from:i,onDone:n}),b=r.gt(new o.default(1)),Q=t.name,w=null==E?void 0:E.partialFee.toBn();return"READY"===v?s.default.createElement(f.Modal,{modalSize:"m",modalHeight:"s",onClose:e},s.default.createElement(f.ModalHeader,{onClick:e,title:"Authorize Transaction"}),s.default.createElement(f.ModalBody,null,s.default.createElement(f.SignTransferContainer,null,s.default.createElement(g.TextMedium,{margin:"m"},"You intend to transfer ",r.toString()," invite",b&&"s"," to ",Q,". A fee of"," ",m.formatTokenValue(w)," JOY will be applied to the transaction."),s.default.createElement(l.InputComponent,{required:!0,inputSize:"l",label:"Fee paid by account",disabled:!0,borderless:!0},s.default.createElement(u.SelectedAccount,{account:i})))),s.default.createElement(f.ModalFooter,null,s.default.createElement(I.TransactionInfo,null,s.default.createElement(I.BalanceInfoNarrow,null,s.default.createElement(I.InfoTitle,null,"Transaction fee:"),s.default.createElement(I.InfoValue,null,s.default.createElement(g.TokenValue,{value:w})),s.default.createElement(d.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora mollitia necessitatibus, eos recusandae obcaecati facilis sed maiores. Impedit iusto expedita natus perspiciatis, perferendis totam commodi ad, illo, veritatis omnis beatae.Facilis natus recusandae, magni saepe hic veniam aliquid tempore quia assumenda voluptatum reprehenderit. Officiis provident nam corrupti, incidunt, repudiandae accusantium porro libero ipsam illo quae ratione. Beatae itaque quo quidem.",absolute:!0}))),s.default.createElement(c.ButtonPrimary,{size:"medium",onClick:C,disabled:"READY"!==v},"Sign and Send"))):"EXTENSION"===v?s.default.createElement(y.WaitModal,{onClose:e,title:"Waiting for the extension",description:"Please sign the transaction using external signer app."}):"PENDING"===v?s.default.createElement(y.WaitModal,{onClose:e,title:"Pending transaction",description:"We are waiting for your transaction to be mined. It can takes Lorem ipsum deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}):null}},55344:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferDetailsModal=void 0;const o=a(t(62197)),s=i(t(2784)),u=t(59686),c=t(81328),l=t(56404),d=t(18823),f=t(64342),g=t(52452),h=t(55592),p=t(27609),m=t(10233);A.TransferDetailsModal=function({onClose:e,onAccept:A,icon:t,member:r}){const[n,i]=s.useState(r),[a,I]=s.useState(),[y,B]=h.useNumberInput(0),E=s.useCallback(l.filterMember(n),[n]),C=g.useAccounts().allAccounts.find((e=>e.address===(null==n?void 0:n.controllerAccount))),v=!n||parseInt(y)<=n.inviteCount,b=!(y&&v&&n&&a),Q=y&&!v;return s.default.createElement(d.Modal,{onClose:e,modalSize:"m"},s.default.createElement(d.ModalHeader,{onClick:e,title:"Transfer invites",icon:t}),s.default.createElement(d.ModalBody,null,s.default.createElement(m.Row,null,s.default.createElement(f.TextMedium,{margin:"s"},"Transfer Invites to a member.")),s.default.createElement(c.InputComponent,{label:"From",inputSize:"l",disabled:!!r},s.default.createElement(l.SelectMember,{onChange:i,disabled:!!r,selected:n})),s.default.createElement(m.TransactionAmount,null,s.default.createElement(c.InputComponent,{id:"amount-input",label:"Number of Invites",required:!0,validation:Q?"invalid":void 0,message:Q?`You only have ${null==n?void 0:n.inviteCount} invites left.`:`You have ${null==n?void 0:n.inviteCount} invites.`,inputWidth:"s"},s.default.createElement(c.InputNumber,{id:"amount-input",value:p.formatTokenValue(new o.default(y)),placeholder:"0",onChange:e=>B(e.target.value)}))),s.default.createElement(c.InputComponent,{label:"To",inputSize:"l",required:!0},s.default.createElement(l.SelectMember,{onChange:I,filter:E}))),s.default.createElement(d.ModalFooter,null,s.default.createElement(u.ButtonPrimary,{size:"medium",onClick:()=>n&&a&&C&&A(new o.default(y),n,a,C),disabled:b},"Transfer Invites")))}},76791:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferFailureModal=void 0;const n=r(t(2784)),i=t(64020),a=t(18823);A.TransferFailureModal=({onClose:e})=>n.default.createElement(a.Modal,{modalSize:"xs",modalHeight:"s",onClose:e},n.default.createElement(a.ModalHeader,{title:"",onClick:e,modalHeaderSize:"s"}),n.default.createElement(a.ResultModalBody,null,n.default.createElement(i.FailureIcon,null),n.default.createElement(a.ModalTitle,{as:"h4"},n.default.createElement("span",{className:"red-title"},"Oh no!")," Failure"),n.default.createElement(a.ResultText,null,"There was a problem transfering your invites.")))},91953:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferInviteModal=void 0;const o=a(t(62197)),s=i(t(2784)),u=t(3100),c=t(79530),l=t(54698),d=t(97324),f=t(55344),g=t(76791),h=t(26394),p=t(15888),m=t(46447),I=t(82922);A.TransferInviteModal=function(){const{hideModal:e,modalData:A}=l.useModal(),{data:t,loading:r}=u.useGetMemberQuery({variables:{id:A.memberId}}),[n,i]=s.useState("REQUIREMENTS_CHECK"),[a,y]=s.useState(new o.default(0)),[B,E]=s.useState(),[C,v]=s.useState(),b=m.useTransferInviteFee(null==t?void 0:t.membership);s.useEffect((()=>{"REQUIREMENTS_CHECK"===n&&b&&i(b.canAfford?"PREPARE":"REQUIREMENTS_FAIL")}),[b]);return r||!(null==t?void 0:t.membership)?null:"REQUIREMENTS_CHECK"===n?s.default.createElement(p.WaitModal,{onClose:e,title:"Loading...",description:""}):"REQUIREMENTS_FAIL"===n&&b?s.default.createElement(I.RequirementFailedModal,{onClose:e,address:t.membership.controllerAccount,amount:b.transactionFee}):"PREPARE"!==n&&B&&C?"AUTHORIZE"===n?s.default.createElement(d.SignTransferModal,{onClose:e,sourceMember:t.membership,targetMember:B,signer:C,amount:a,onDone:e=>{i(e?"SUCCESS":"ERROR")}}):"SUCCESS"===n?s.default.createElement(h.TransferSuccessModal,{onClose:e,recipient:B,amount:a}):s.default.createElement(g.TransferFailureModal,{onClose:e}):s.default.createElement(f.TransferDetailsModal,{onClose:e,onAccept:(e,A,t,r)=>{y(e),E(t),v(r),i("AUTHORIZE")},icon:s.default.createElement(c.TransferIcon,null),member:t.membership})}},26394:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferSuccessModal=void 0;const n=r(t(62197)),i=r(t(2784)),a=r(t(52275)),o=t(59686),s=t(79530),u=t(20396),c=t(18823),l=t(64342),d=t(67723);A.TransferSuccessModal=function({onClose:e,recipient:A,amount:t}){const r=t.gt(new n.default(1)),a=A.name;return i.default.createElement(c.Modal,{modalSize:"m",modalHeight:"s",onClose:e},i.default.createElement(c.ModalHeader,{onClick:e,title:"Success",icon:i.default.createElement(s.SuccessIcon,null)}),i.default.createElement(c.ModalBody,null,i.default.createElement(l.TextMedium,{margin:"s"},"You have just successfully transferred ",t.toString()," invitation",r&&"s"," to ",a,"."),i.default.createElement(f,null,i.default.createElement(u.MemberInfo,{member:A}))),i.default.createElement(c.ModalFooter,null,i.default.createElement(o.ButtonPrimary,{size:"medium",disabled:!0},"View my profile")))};const f=a.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${d.Sizes.accountHeight};
  max-height: ${d.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${d.Colors.Black[300]};
  border-radius: ${d.BorderRad.s};
  background-color: ${d.Colors.White};
`},98098:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(91953),A),n(t(10329),A)},10329:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0})},82949:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.SignTransferModal=void 0;const a=i(t(2784)),o=t(1772),s=t(59686),u=t(95148),c=t(79530),l=t(18823),d=t(64342),f=t(8162),g=t(25047),h=t(96065),p=t(10233),m=t(15888);A.SignTransferModal=function({onClose:e,from:A,amount:t,to:r,onDone:n}){const i=g.useBalance(A),I=g.useBalance(r),{api:y}=f.useApi(),B=a.useMemo((()=>{var e,A;return null===(A=null===(e=null==y?void 0:y.tx)||void 0===e?void 0:e.balances)||void 0===A?void 0:A.transfer(r.address,t)}),[r.address,t]),{paymentInfo:E,send:C,status:v}=h.useSignAndSendTransaction({transaction:B,from:A,onDone:n});return"READY"===v?a.default.createElement(l.Modal,{modalSize:"m",onClose:e},a.default.createElement(l.ModalHeader,{onClick:e,title:"Authorize Transaction"}),a.default.createElement(l.ModalBody,null,a.default.createElement(l.SignTransferContainer,null,a.default.createElement(p.Row,null,a.default.createElement(d.TextMedium,{margin:"xl"},"You are transferring ",a.default.createElement(d.TokenValue,{value:t})," stake from “",A.name,"” account to “",r.name,"”"," ","destination."),a.default.createElement(p.LockedAccount,null,a.default.createElement(o.AccountInfo,{account:A}),a.default.createElement(p.BalanceInfoInRow,null,a.default.createElement(p.InfoTitle,null,"Transferable balance"),a.default.createElement(p.InfoValue,null,a.default.createElement(d.TokenValue,{value:null==i?void 0:i.transferable}))))),a.default.createElement(p.TransactionAmountInfo,null,a.default.createElement(c.ArrowDownExpandedIcon,null),a.default.createElement(p.TransactionAmountInfoText,null,"Transferring ",a.default.createElement(d.TokenValue,{value:t}))),a.default.createElement(p.Row,null,a.default.createElement(p.LockedAccount,null,a.default.createElement(o.AccountInfo,{account:r}),a.default.createElement(p.BalanceInfoInRow,null,a.default.createElement(p.InfoTitle,null,"Transferable balance"),a.default.createElement(p.InfoValue,null,a.default.createElement(d.TokenValue,{value:null==I?void 0:I.transferable}))))))),a.default.createElement(l.ModalFooter,null,a.default.createElement(p.TransactionInfo,null,a.default.createElement(p.BalanceInfoNarrow,null,a.default.createElement(p.InfoTitle,null,"Amount:"),a.default.createElement(p.InfoValue,null,a.default.createElement(d.TokenValue,{value:t}))),a.default.createElement(p.BalanceInfoNarrow,null,a.default.createElement(p.InfoTitle,null,"Transaction fee:"),a.default.createElement(p.InfoValue,null,a.default.createElement(d.TokenValue,{value:null==E?void 0:E.partialFee.toBn()})),a.default.createElement(u.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora mollitia necessitatibus, eos recusandae obcaecati facilis sed maiores. Impedit iusto expedita natus perspiciatis, perferendis totam commodi ad, illo, veritatis omnis beatae.Facilis natus recusandae, magni saepe hic veniam aliquid tempore quia assumenda voluptatum reprehenderit. Officiis provident nam corrupti, incidunt, repudiandae accusantium porro libero ipsam illo quae ratione. Beatae itaque quo quidem.",absolute:!0}))),a.default.createElement(s.ButtonPrimary,{size:"medium",onClick:C,disabled:"READY"!==v},"Sign transaction and Transfer"))):"EXTENSION"===v?a.default.createElement(m.WaitModal,{onClose:e,title:"Waiting for the extension",description:"Please, sign the transaction using external signer app."}):"PENDING"===v?a.default.createElement(m.WaitModal,{onClose:e,title:"Pending transaction",description:"We are waiting for your transaction to be mined. It can takes Lorem ipsum deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}):null}},4858:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransactionFailureModal=void 0;const n=r(t(2784)),i=t(64020),a=t(18823),o=t(64342);A.TransactionFailureModal=({from:e,to:A,amount:t,onClose:r})=>n.default.createElement(a.Modal,{modalSize:"xs",modalHeight:"s",onClose:r},n.default.createElement(a.ModalHeader,{title:"",onClick:r,modalHeaderSize:"s"}),n.default.createElement(a.ResultModalBody,null,n.default.createElement(i.FailureIcon,null),n.default.createElement(a.ModalTitle,{as:"h4"},n.default.createElement("span",{className:"red-title"},"Oh no!")," Failure"),n.default.createElement(a.ResultText,null,"You haven’t transferred ",n.default.createElement(o.TokenValue,{value:t})," stake from “",e.name,"” account to “",A.name,"” destination, because of a lorem ipsum dolor sit amet enim probem.")))},87269:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransactionSuccessModal=void 0;const n=r(t(2784)),i=t(1772),a=t(79530),o=t(18823),s=t(64342),u=t(25047),c=t(10233);A.TransactionSuccessModal=function({onClose:e,from:A,to:t,amount:r,fee:l}){const d=u.useBalance(A),f=u.useBalance(t);if(!d||!f)return n.default.createElement(n.default.Fragment,null);const g=d.transferable,h=g.add(r).add(l),p=f.transferable,m=p.sub(r);return n.default.createElement(o.Modal,{modalSize:"m",modalHeight:"s",onClose:e},n.default.createElement(o.ModalHeader,{onClick:e,title:"Success",icon:n.default.createElement(a.SuccessIcon,null)}),n.default.createElement(o.SuccessModalBody,null,n.default.createElement(s.TextMedium,{margin:"l"},"You have just successfully transferred balance from"),n.default.createElement(c.LockedAccount,null,n.default.createElement(i.AccountInfo,{account:A}),n.default.createElement(c.BalanceInfo,null,n.default.createElement(c.InfoTitle,null,"Transferable balance before:"),n.default.createElement(c.InfoValue,null,n.default.createElement(s.TokenValue,{value:h})),n.default.createElement(c.InfoTitle,null,"Transferable balance after:"),n.default.createElement(c.InfoValue,null,n.default.createElement(s.TokenValue,{value:g})))),n.default.createElement(c.TransactionAmountInfo,null,n.default.createElement(a.ArrowDownExpandedIcon,null),n.default.createElement(c.TransactionAmountInfoText,null,"Transferred ",n.default.createElement(s.TokenValue,{value:r}))),n.default.createElement(c.LockedAccount,null,n.default.createElement(i.AccountInfo,{account:t}),n.default.createElement(c.BalanceInfo,null,n.default.createElement(c.InfoTitle,null,"Transferable balance before:"),n.default.createElement(c.InfoValue,null,n.default.createElement(s.TokenValue,{value:m})),n.default.createElement(c.InfoTitle,null,"Transferable balance after:"),n.default.createElement(c.InfoValue,null,n.default.createElement(s.TokenValue,{value:p}))))))}},33197:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferDetailsModal=void 0;const o=a(t(62197)),s=i(t(2784)),u=a(t(52275)),c=t(71196),l=t(59686),d=t(81328),f=t(12447),g=t(18823),h=t(25047),p=t(55592),m=t(27609),I=t(10233);A.TransferDetailsModal=function({from:e,to:A,onClose:t,onAccept:r,title:n}){var i;const[a,u]=s.useState(A),[E,C]=s.useState(e),[v,b]=p.useNumberInput(0),Q=h.useBalance(E),w=s.useCallback(c.filterAccount(a),[a]),M=null!==(i=null==Q?void 0:Q.transferable)&&void 0!==i?i:new o.default(0),D=s.useCallback(c.filterAccount(E),[E]),S=new o.default(v).lte(new o.default(0)),_=new o.default(v).gt(M||0),k=S||_||!a,N=!E;return s.default.createElement(g.Modal,{modalSize:"m",onClose:t},s.default.createElement(g.ModalHeader,{onClick:t,title:n,icon:s.default.createElement(f.PickedTransferIcon,{type:e?"send":A?"receive":"transfer"})}),s.default.createElement(g.ModalBody,null,s.default.createElement(I.Row,null,s.default.createElement(d.InputComponent,{required:!0,inputSize:"l",label:"From",id:"transfer-from-input",disabled:!!e,borderless:!!e},e?s.default.createElement(c.SelectedAccount,{account:e}):s.default.createElement(c.SelectAccount,{filter:w,onChange:C}))),s.default.createElement(I.TransactionAmount,null,s.default.createElement(d.InputComponent,{label:"Number of tokens",id:"amount-input",disabled:N,required:!0,inputWidth:"s",units:"JOY"},s.default.createElement(d.InputNumber,{id:"amount-input",value:m.formatTokenValue(new o.default(v)),onChange:e=>b(e.target.value),disabled:N,placeholder:"0"})),s.default.createElement(y,null,s.default.createElement(B,{size:"small",onClick:()=>b(M.div(new o.default(2)).toString()),disabled:N},"Use half"),s.default.createElement(B,{size:"small",onClick:()=>b(M.toString()),disabled:N},"Use max"))),s.default.createElement(I.Row,null,s.default.createElement(d.InputComponent,{required:!0,inputSize:"l",label:"Destination account",id:"transfer-to-input",disabled:!!A,borderless:!!A},A?s.default.createElement(c.SelectedAccount,{account:A}):s.default.createElement(c.SelectAccount,{filter:D,onChange:u})))),s.default.createElement(g.ModalFooter,null,s.default.createElement(l.ButtonPrimary,{size:"medium",onClick:()=>{v&&a&&E&&r(new o.default(v),E,a)},disabled:k},"Transfer tokens")))};const y=u.default.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  width: fit-content;
  height: 46px;
  align-items: center;
`,B=u.default(l.ButtonGhost)`
  height: 26px;
  padding: 4px 6px;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
`},90743:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferModal=void 0;const o=a(t(62197)),s=i(t(2784)),u=t(54698),c=t(82949),l=t(4858),d=t(87269),f=t(33197);A.TransferModal=function(){const{hideModal:e,modalData:A}=u.useModal(),{from:t,to:r}=A,[n,i]=s.useState("PREPARE"),[a,g]=s.useState(new o.default(0)),[h,p]=s.useState(new o.default(0)),[m,I]=s.useState(t),[y,B]=s.useState(r),E=t||r?t?"Send tokens":"Receive tokens":"Transfer tokens";return"PREPARE"!==n&&y&&m?"AUTHORIZE"===n?s.default.createElement(c.SignTransferModal,{onClose:e,from:m,amount:a,to:y,onDone:(e,A,t)=>{i(e?"SUCCESS":"ERROR"),p(t)}}):"SUCCESS"===n?s.default.createElement(d.TransactionSuccessModal,{onClose:e,from:m,to:y,amount:a,fee:h}):s.default.createElement(l.TransactionFailureModal,{onClose:e,from:m,amount:a,to:y}):s.default.createElement(f.TransferDetailsModal,{onClose:e,from:m,to:y,onAccept:(e,A,t)=>{g(e),B(t),I(A),i("AUTHORIZE")},title:E})}},70311:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(90743),A),n(t(82725),A)},82725:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0})},24594:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.SignUpdateMembershipModal=void 0;const a=i(t(2784)),o=t(71196),s=t(59686),u=t(81328),c=t(95148),l=t(18823),d=t(64342),f=t(8162),g=t(96065),h=t(10233),p=t(15888),m=(e,A)=>A.some((A=>!!e[A]));A.SignUpdateMembershipModal=({onClose:e,transactionParams:A,member:t,signer:r,onDone:n})=>{const{api:i}=f.useApi(),I=a.useMemo((()=>function(e,A,t){var r,n;const i=m(e,["about","handle","avatarUri","name"]),a=m(e,["rootAccount","controllerAccount"]),o=[];if(A&&(i||a)){if(i){const r=A.tx.members.updateProfile(t.id,e.handle||null,{name:e.name||null,avatar_uri:e.avatarUri||null,about:e.about||null});o.push(r)}if(a){const i=A.tx.members.updateAccounts(t.id,(null===(r=e.rootAccount)||void 0===r?void 0:r.address)||null,(null===(n=e.controllerAccount)||void 0===n?void 0:n.address)||null);o.push(i)}return A.tx.utility.batch(o)}}(A,i,t)),[t.id]),{paymentInfo:y,send:B,status:E}=g.useSignAndSendTransaction({transaction:I,from:r,onDone:n});return"READY"===E?a.default.createElement(l.Modal,{modalSize:"m",modalHeight:"s",onClose:e},a.default.createElement(l.ModalHeader,{onClick:e,title:"Authorize transaction"}),a.default.createElement(l.ModalBody,null,a.default.createElement(d.TextMedium,null,"You intend to update your membership. Fees of ",a.default.createElement(d.TokenValue,{value:null==y?void 0:y.partialFee.toBn()})," will be applied to the transaction."),a.default.createElement(h.Row,null,a.default.createElement(u.Label,null,"Sending from account"),a.default.createElement(o.SelectedAccount,{account:r}))),a.default.createElement(l.ModalFooter,null,a.default.createElement(h.BalanceInfoNarrow,null,a.default.createElement(h.InfoTitle,null,"Transaction fee:"),a.default.createElement(h.InfoValue,null,a.default.createElement(d.TokenValue,{value:null==y?void 0:y.partialFee.toBn()})),a.default.createElement(c.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",absolute:!0})),a.default.createElement(s.ButtonPrimary,{size:"medium",onClick:B,disabled:"READY"!==E},"Sign and update a member"))):"EXTENSION"===E?a.default.createElement(p.WaitModal,{onClose:e,title:"Waiting for the extension",description:"Please, sign the transaction using external signer app."}):"PENDING"===E?a.default.createElement(p.WaitModal,{onClose:e,title:"Pending transaction",description:"We are waiting for your transaction to be mined. It can takes Lorem ipsum deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}):null}},87622:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.UpdateMembershipFailureModal=void 0;const n=r(t(2784)),i=t(64020),a=t(18823);A.UpdateMembershipFailureModal=({onClose:e,member:A})=>n.default.createElement(a.Modal,{modalSize:"xs",modalHeight:"s",onClose:e},n.default.createElement(a.ModalHeader,{title:"",onClick:e,modalHeaderSize:"s"}),n.default.createElement(a.ResultModalBody,null,n.default.createElement(i.FailureIcon,null),n.default.createElement(a.ModalTitle,{as:"h4"},n.default.createElement("span",{className:"red-title"},"Oh no!")," Failure"),n.default.createElement(a.ResultText,null,"There was a problem with creating a membership for ",A.name,".")))},5355:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.UpdateMembershipFormModal=void 0;const a=t(52356),o=i(t(2784)),s=i(t(88253)),u=t(71196),c=t(59686),l=t(81328),d=t(20554),f=t(18823),g=t(64342),h=t(8162),p=t(6638),m=t(25488),I=t(7323),y=t(10233),B=t(56871),E=s.object().shape({avatarUri:I.AvatarURISchema.nullable(),handle:s.string().when("$isHandleChanged",((e,A)=>e?I.HandleSchema:A))}),C=(e,A)=>Object.assign(Object.assign({},e),{[A.type]:A.value});A.UpdateMembershipFormModal=({onClose:e,onSubmit:A,member:t})=>{const{api:r}=h.useApi(),[n,i]=o.useReducer(C,{id:t.id,name:t.name||"",handle:t.handle||"",about:t.about||"",avatarUri:t.avatarUri||"",rootAccount:{address:t.rootAccount,name:""},controllerAccount:{address:t.controllerAccount,name:""}}),{handle:s,name:I,avatarUri:v,about:b,controllerAccount:Q,rootAccount:w}=n,M=o.useCallback(u.filterAccount(Q),[Q]),D=o.useCallback(u.filterAccount(w),[w]),S=a.blake2AsHex(s||""),_=m.useObservable(null==r?void 0:r.query.members.memberIdByHandleHash.size(S),[s]),{isValid:k,errors:N,validate:L}=p.useFormValidation(E),O=k&&B.hasAnyEdits(n,t);o.useEffect((()=>{L(n,{size:_,isHandleChanged:n.handle!==t.handle})}),[n,_]);const x=(e,A)=>{i({type:e,value:A})};return o.default.createElement(f.ScrolledModal,{modalSize:"m",modalHeight:"m",onClose:e},o.default.createElement(f.ModalHeader,{onClick:e,title:"Edit membership"}),o.default.createElement(f.ScrolledModalBody,null,o.default.createElement(f.ScrolledModalContainer,null,o.default.createElement(y.Row,null,o.default.createElement(g.TextMedium,{dark:!0},"Please fill in all the details below.")),o.default.createElement(y.Row,null,o.default.createElement(l.InputComponent,{label:"Root account",helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",required:!0,inputSize:"l"},o.default.createElement(u.SelectAccount,{filter:M,onChange:e=>x("rootAccount",e),selected:w}))),o.default.createElement(y.Row,null,o.default.createElement(l.InputComponent,{label:"Controller account",helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",required:!0,inputSize:"l"},o.default.createElement(u.SelectAccount,{filter:D,onChange:e=>x("controllerAccount",e),selected:Q}))),o.default.createElement(y.Row,null,o.default.createElement(l.InputComponent,{id:"member-name",label:"Member Name",required:!0},o.default.createElement(l.InputText,{id:"member-name",placeholder:"Type",value:I,onChange:e=>x("name",e.target.value)}))),o.default.createElement(y.Row,null,o.default.createElement(l.InputComponent,{id:"member-handle",label:"Membership handle",required:!0,validation:d.hasError("handle",N)?"invalid":void 0,message:d.hasError("handle",N)?d.getErrorMessage("handle",N):"Do not use same handles"},o.default.createElement(l.InputText,{id:"member-handle",placeholder:"Type",value:s,onChange:e=>x("handle",e.target.value)}))),o.default.createElement(y.Row,null,o.default.createElement(l.InputComponent,{id:"member-about",label:"About member",inputSize:"l"},o.default.createElement(l.InputTextarea,{id:"member-about",value:b,placeholder:"Type",onChange:e=>x("about",e.target.value)}))),o.default.createElement(y.Row,null,o.default.createElement(l.InputComponent,{id:"member-avatar",label:"Member Avatar",required:!0,value:v,validation:d.hasError("avatarUri",N)?"invalid":void 0,message:d.hasError("avatarUri",N)?d.getErrorMessage("avatarUri",N):"Paste an URL of your avatar image. Text lorem ipsum.",placeholder:"Image URL"},o.default.createElement(l.InputText,{id:"member-avatar",value:v,onChange:e=>x("avatarUri",e.target.value)}))))),o.default.createElement(f.ModalFooter,null,o.default.createElement(c.ButtonPrimary,{size:"medium",onClick:()=>{O&&A(B.changedOrNull(n,t))},disabled:!O},"Save changes")))}},55462:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.UpdateMembershipModal=void 0;const a=i(t(2784)),o=t(52452),s=t(24594),u=t(87622),c=t(5355),l=t(12767);A.UpdateMembershipModal=({onClose:e,member:A})=>{const[t,r]=a.useState("PREPARE"),[n,i]=a.useState(),{allAccounts:d}=o.useAccounts(),f=d.find((e=>A.controllerAccount===e.address));return"PREPARE"!==t&&n&&f?"AUTHORIZE"===t?a.default.createElement(s.SignUpdateMembershipModal,{onClose:e,transactionParams:n,member:A,signer:f,onDone:e=>r(e?"SUCCESS":"ERROR")}):"SUCCESS"===t?a.default.createElement(l.UpdateMembershipSuccessModal,{onClose:e,member:A}):a.default.createElement(u.UpdateMembershipFailureModal,{onClose:e,member:A}):a.default.createElement(c.UpdateMembershipFormModal,{onClose:e,onSubmit:e=>{r("AUTHORIZE"),i(e)},member:A})}},12767:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.UpdateMembershipSuccessModal=void 0;const n=r(t(2784)),i=r(t(52275)),a=t(59686),o=t(79530),s=t(20396),u=t(18823),c=t(64342),l=t(67723);A.UpdateMembershipSuccessModal=function({onClose:e,member:A}){return n.default.createElement(u.Modal,{modalSize:"m",modalHeight:"s",onClose:e},n.default.createElement(u.ModalHeader,{onClick:e,title:"Success",icon:n.default.createElement(o.SuccessIcon,null)}),n.default.createElement(u.ModalBody,null,n.default.createElement(c.TextMedium,null,"You have just successfully updated your membership"),n.default.createElement(d,null,n.default.createElement(s.MemberInfo,{member:A}))),n.default.createElement(u.ModalFooter,null,n.default.createElement(a.ButtonPrimary,{size:"medium",disabled:!0},"View my profile")))};const d=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${l.Sizes.accountHeight};
  max-height: ${l.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${l.Colors.Black[300]};
  border-radius: ${l.BorderRad.s};
  background-color: ${l.Colors.White};
`},21559:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(55462),A)},56871:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.changedOrNull=A.getChangedFields=A.hasAnyEdits=void 0,A.hasAnyEdits=(e,t)=>!!A.getChangedFields(e,t).length,A.getChangedFields=(e,A)=>{var t,r;const n=[];for(const i of Object.keys(e))(A[i]||"")!==(null!==(r=null===(t=e[i])||void 0===t?void 0:t.address)&&void 0!==r?r:e[i]||"")&&n.push(i);return n},A.changedOrNull=(e,t)=>{const r=A.getChangedFields(e,t);return Object.entries(e).reduce(((e,[A,t])=>Object.assign(Object.assign({},e),{[A]:r.includes(A)?t:null})),{})}},15888:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WaitModal=void 0;const n=r(t(2784)),i=t(79530),a=t(64261),o=t(18823);A.WaitModal=({onClose:e,title:A,description:t})=>n.default.createElement(o.Modal,{modalSize:"xs",modalHeight:"s",isDark:!0,onClose:e},n.default.createElement(o.ModalHeader,{icon:n.default.createElement(i.Loader,null),title:"",onClick:e,modalHeaderSize:"s"}),n.default.createElement(o.ResultModalBody,null,n.default.createElement(a.WaitingIcon,null),n.default.createElement(o.ModalTitle,{as:"h4"},A),n.default.createElement(o.ResultTextWhite,null,t)))},10233:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransactionAmountInfoText=A.TransactionAmountInfo=A.InfoValue=A.InfoTitle=A.BalanceInfoNarrow=A.BalanceInfoInRow=A.BalanceInfo=A.TransactionInfo=A.TransactionAmount=A.LockedAccount=A.AccountRow=A.Row=A.TransactionInfoLabel=void 0;const n=r(t(52275)),i=t(81328),a=t(79530),o=t(64342),s=t(67723);A.TransactionInfoLabel=n.default(i.Label)`
  display: block;
  margin-bottom: 32px;
  font-weight: 400;
  font-family: ${s.Fonts.Inter};

  ${o.ValueInJoys} {
    font-family: ${s.Fonts.Inter};
    font-weight: 700;
    color: ${s.Colors.Black[700]};
    &:after {
      font-family: ${s.Fonts.Inter};
      font-weight: 700;
      color: ${s.Colors.Black[700]};
    }
  }
`,A.Row=n.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`,A.AccountRow=n.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${s.Sizes.accountHeight};
  max-height: ${s.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${s.Colors.Black[300]};
  border-radius: ${s.BorderRad.s};
  background-color: ${s.Colors.White};
`,A.LockedAccount=n.default(A.AccountRow)`
  padding: 8px 0 8px 16px;
  grid-template-columns: 1fr 1fr 48px;
  height: ${s.Sizes.selectHeight};
  min-height: ${s.Sizes.selectHeight};
  max-height: ${s.Sizes.selectHeight};
  background-color: ${s.Colors.Black[75]};
  border: 1px solid ${s.Colors.Black[200]};
`,A.TransactionAmount=n.default.div`
  display: grid;
  grid-template-columns: 320px auto;
  grid-template-rows: 1fr;
  grid-column-gap: 12px;
  align-items: end;
`,A.TransactionInfo=n.default.div`
  display: grid;
`,A.BalanceInfo=n.default.div`
  display: inline-grid;
  position: relative;
  grid-template-columns: 1fr 168px;
  grid-template-rows: 1fr;
  align-items: center;

  & + & {
    margin-top: 4px;
  }
`,A.BalanceInfoInRow=n.default(A.BalanceInfo)`
  justify-self: end;
`,A.BalanceInfoNarrow=n.default(A.BalanceInfo)`
  grid-template-columns: 1fr 128px;
  width: auto;
`,A.InfoTitle=n.default.span`
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: right;
  color: ${s.Colors.Black[400]};
`,A.InfoValue=n.default.span`
  text-align: right;
  line-height: 20px;
`,A.TransactionAmountInfo=n.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  width: fit-content;
  justify-self: center;
  align-items: center;
  color: ${s.Colors.Black[700]};

  ${a.Icon.type} {
    width: 16px;
    height: 16px;
  }
`,A.TransactionAmountInfoText=n.default.span`
  padding: 4px 6px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${s.Colors.Black[700]};
  text-transform: uppercase;
  border-radius: ${s.BorderRad.m};
  background-color: ${s.Colors.Blue[100]};

  ${o.ValueInJoys}, ${o.ValueInJoys}:after {
    font-size: 10px;
    line-height: 16px;
    font-weight: 700;
    color: ${s.Colors.Black[700]};
  }
`},55699:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroupsList=A.ProfileSummary=A.Groups=void 0;const n=r(t(52275)),i=t(86243);A.Groups=n.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 24px;
  width: 100%;
`,A.ProfileSummary=n.default.div`
  display: flex;
  flex-direction: column;

  ${i.PageTabs} {
    margin-bottom: 24px;
  }
`,A.WorkingGroupsList=n.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 108px;
  grid-row-gap: 8px;
  width: 100%;
`},25715:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroup=void 0;const n=r(t(27860)),i=r(t(2784)),a=r(t(52275)),o=t(26812),s=t(64342),u=t(12760),c=t(41139),l=t(67723);A.WorkingGroup=({groupImage:e,groupTitle:A,groupContent:t,leaderAddress:r})=>i.default.createElement(d,null,i.default.createElement(f,null,e?i.default.createElement(g,{src:e}):i.default.createElement(o.AvatarPlaceholderImage,null)),i.default.createElement(h,null,i.default.createElement(p,null,A),t&&i.default.createElement(m,null,t)),i.default.createElement(I,null,i.default.createElement(y,null,i.default.createElement(B,null,"6"),i.default.createElement(u.Subscription,null,"Workers")),i.default.createElement(y,null,i.default.createElement(B,null,i.default.createElement(s.ValueInJoys,null,"130,000.00")),i.default.createElement(u.Subscription,null,"Current budget")),i.default.createElement(y,null,i.default.createElement(B,null,"1"),i.default.createElement(u.Subscription,null,"Openings")),i.default.createElement(y,null,i.default.createElement(B,null,r?i.default.createElement(E,null,i.default.createElement(n.default,{size:24,theme:"beachball",value:r})):"None"),i.default.createElement(u.Subscription,null,"WG Leader"))));const d=a.default.section`
  display: grid;
  grid-template-columns: 108px 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 24px;
  width: 100%;
  height: 100%;
  max-height: 108px;
  align-items: center;
  padding-right: 32px;
  border: 1px solid ${l.Colors.Black[100]};
  border-radius: ${l.BorderRad.s};
  background-color: ${l.Colors.White};
  overflow: hidden;
`,f=a.default.div`
  display: flex;
  width: 100%;
  height: calc(100% + 2px);
  border-right: 1px solid ${l.Colors.Black[100]};
  margin: 0;
  margin-top: -1px;
  margin-bottom: -1px;
  overflow: hidden;
`,g=a.default.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,h=a.default.article`
  display: grid;
  grid-template-rows: 24px 40px;
  grid-row-gap: 8px;
  width: 100%;
`,p=a.default.h5`
  max-width: 100%;
  ${l.Overflow.Dots};
`,m=a.default(c.TextMedium)`
  hyphens: auto;
  height: fit-content;
  max-height: 100%;
  max-width: 100%;
  color: ${l.Colors.Black[500]};
  ${l.Overflow.DotsTwoLine};
`,I=a.default.div`
  display: grid;
  grid-template-columns: 64px 116px 64px 64px;
  justify-content: space-between;
  width: 100%;
  grid-column-gap: 8px;
`,y=a.default.div`
  display: grid;
  grid-row-gap: 10px;
`,B=a.default.span`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  align-items: center;
  width: fit-content;
  font-family: ${l.Fonts.Grotesk};
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${l.Colors.Black[900]};
`,E=a.default.div`
  width: 24px;
  height: 24px;
  border-radius: ${l.BorderRad.round};
  overflow: hidden;
`},68677:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroups=void 0;const n=r(t(2784)),i=t(76410),a=t(68797),o=t(71121),s=t(88979),u=t(86243),c=t(34754),l=t(31591),d=t(67966),f=t(55699),g=t(25715);A.WorkingGroups=function(){const e=i.useHistory();return n.default.createElement(a.Page,null,n.default.createElement(l.SideBar,null),n.default.createElement(o.PageContent,null,n.default.createElement(d.Breadcrumbs,{crumbs:[{href:"#",text:"Working Groups"},{href:"#",text:"Working Groups"}]}),n.default.createElement(f.Groups,null,n.default.createElement(s.PageHeader,null,n.default.createElement(c.PageTitle,null,"Working Groups"),n.default.createElement(u.PageTabs,null,n.default.createElement(u.PageTabsNav,null,n.default.createElement(u.PageTab,{active:!0,onClick:()=>e.push("/grups")},"Working Groups")))),n.default.createElement(f.WorkingGroupsList,null,n.default.createElement(g.WorkingGroup,{leaderAddress:"5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY",groupTitle:"Distribution",groupContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),n.default.createElement(g.WorkingGroup,{groupImage:"https://s.gitcoin.co/static/v2/card/thumb.0a0be2e5841a.jpg",groupTitle:"Storage",groupContent:"👌🏻 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),n.default.createElement(g.WorkingGroup,{leaderAddress:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",groupTitle:"Forum",groupContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})))))}},72600:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyAccounts=void 0;const n=r(t(2784)),i=t(68797),a=t(71121),o=t(88979),s=t(34754),u=t(31591),c=t(67966),l=t(8236),d=t(12766),f=t(95794),g=t(33630);A.MyAccounts=function(){return n.default.createElement(i.Page,null,n.default.createElement(u.SideBar,null),n.default.createElement(a.PageContent,null,n.default.createElement(c.Breadcrumbs,{crumbs:[{href:"#",text:"My Profile"},{href:"#",text:"My Accounts"}]}),n.default.createElement(g.MyProfile,null,n.default.createElement(o.PageHeader,null,n.default.createElement(s.PageTitle,null,"My profile"),n.default.createElement(f.MyProfileTabs,null),n.default.createElement(g.ProfileSummary,null,n.default.createElement(d.TotalBalances,null))),n.default.createElement(g.MyProfileContent,null,n.default.createElement(l.Accounts,null)))))}},8236:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Accounts=void 0;const o=a(t(62197)),s=i(t(2784)),u=a(t(52275)),c=t(1772),l=t(86243),d=t(40329),f=t(89265),g=t(64342),h=t(67723),p=t(52452),m=t(25047),I=t(27950),y=t(69809),B=t(25299),E=t(13018);A.Accounts=function(){const{allAccounts:e,hasAccounts:A}=p.useAccounts(),[t,r]=s.useState(!0),n=I.useBalances(),[i,a]=s.useState("name"),[o,u]=s.useState(!1),c=s.useMemo((()=>y.filterAccounts(e,t,n)),[e,t,A]),f=s.useMemo((()=>B.sortAccounts(c,n,i,o)),[c,n,i,o]);if(!A)return s.default.createElement(k,null,"Loading accounts...");const g=({children:e,sortKey:A})=>{return s.default.createElement(w,{onClick:(t=A,()=>E.setOrder(t,i,a,o,u))},s.default.createElement(d.HeaderText,null,e,i===A&&(o?s.default.createElement(d.SortIconDown,null):s.default.createElement(d.SortIconUp,null))));var t};return s.default.createElement(s.default.Fragment,null,s.default.createElement(v,{tabsSize:"xs"},s.default.createElement(l.PageTab,{active:t,onClick:()=>!t&&r(!0)},"All accounts"),s.default.createElement(l.PageTab,{active:!t,onClick:()=>t&&r(!1)},"Transferable balance")),s.default.createElement(b,null,s.default.createElement(Q,null,s.default.createElement(g,{sortKey:"name"},"Account"),s.default.createElement(g,{sortKey:"total"},"Total balance"),s.default.createElement(g,{sortKey:"locked"},"Locked balance"),s.default.createElement(g,{sortKey:"recoverable"},"Recoverable balance"),s.default.createElement(g,{sortKey:"transferable"},"Transferable balance")),s.default.createElement(M,null,f.map((e=>s.default.createElement(C,{key:e.address,account:e}))))))};const C=({account:e})=>{const A=m.useBalance(e),t=!(null==A?void 0:A.transferable)||!A.transferable.gt(new o.default(0));return s.default.createElement(D,{key:e.address},s.default.createElement(c.AccountInfo,{account:e}),s.default.createElement(S,null,s.default.createElement(g.TokenValue,{value:null==A?void 0:A.total})),s.default.createElement(S,null,s.default.createElement(g.TokenValue,{value:null==A?void 0:A.locked})),s.default.createElement(S,null,s.default.createElement(g.TokenValue,{value:null==A?void 0:A.recoverable})),s.default.createElement(S,null,s.default.createElement(g.TokenValue,{value:null==A?void 0:A.transferable})),s.default.createElement(_,null,s.default.createElement(f.TransferButton,{to:e}),s.default.createElement(f.TransferButton,{from:e,disabled:t})))},v=u.default(l.PageTabsNav)`
  grid-area: accountstabs;
`,b=u.default.div`
  display: grid;
  grid-area: accountstable;
  grid-template-columns: 1fr;
  grid-template-rows: 16px auto;
  grid-template-areas:
    'accountstablenav'
    'accountslist';
  grid-row-gap: 5px;
  width: 100%;
`,Q=u.default.div`
  display: grid;
  grid-area: accountstablenav;
  grid-template-rows: 1fr;
  grid-template-columns: 276px repeat(4, 128px) 136px;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
`,w=u.default.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  justify-self: end;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${h.Colors.Black[400]};
  text-transform: uppercase;
  text-align: right;
  user-select: none;
  cursor: pointer;

  &:first-child {
    text-align: left;
    justify-self: start;
  }
`,M=u.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`,D=u.default.li`
  display: grid;
  grid-template-columns: 276px repeat(4, 128px) 136px;
  grid-template-rows: 1fr;
  justify-content: space-between;
  justify-items: end;
  align-items: center;
  width: 100%;
  height: ${h.Sizes.accountHeight};
  padding: 16px 0 16px 14px;
  border: 1px solid ${h.Colors.Black[100]};
  border-radius: ${h.BorderRad.s};

  & + & {
    margin-top: -1px;
  }
`,S=u.default.p``,_=u.default.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
  grid-template-rows: 40px;
  grid-column-gap: 8px;
`,k=u.default.div`
  font-size: 2em;
  font-size: 20px;
  line-height: 28px;
`,f=a.default.ul`
  display: flex;
  width: 100%;
  justify-items: flex-start;
`,g=a.default.li`
  display: inline-grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: 16px 28px;
  grid-row-gap: 24px;
  flex-basis: 240px;
  flex-grow: 1;
  height: clamp(100%, 100px, 100px);
  padding: 12px 16px 20px;
  border-radius: ${c.BorderRad.m};
  background-color: ${c.Colors.White};
  box-shadow: ${c.Shadows.light};

  & + & {
    margin-left: 24px;
  }

  &.statsItemWide {
    flex-basis: 302px;
  }
`,h=a.default.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  justify-content: space-between;
  align-items: start;
`,p=a.default(o.ButtonPrimary)`
  position: absolute;
  top: 8px;
  right: 8px;
`,m=a.default(u.Label)`
  position: relative;

