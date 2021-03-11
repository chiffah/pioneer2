/*! For license information please see main.3809b57dc15789bdf232.js.LICENSE.txt */
  fragment MemberFields on Member {
    id
    rootAccount
    controllerAccount
    handle
    name
    about
    avatarURI
    isFoundingMember
    isVerified
    inviteCount
  }
`,A.BlockFieldsFragmentDoc=o.gql`
  fragment BlockFields on Block {
    id
    height
    timestamp
    network
  }
`,A.MemberWithDetailsFragmentDoc=o.gql`
  fragment MemberWithDetails on Member {
    ...MemberFields
    registeredAtBlock {
      ...BlockFields
    }
    invitees {
      ...MemberFields
    }
  }
  ${A.MemberFieldsFragmentDoc}
  ${A.BlockFieldsFragmentDoc}
`,A.GetMembersDocument=o.gql`
  query GetMembers {
    members {
      ...MemberFields
    }
  }
  ${A.MemberFieldsFragmentDoc}
`,A.useGetMembersQuery=function(e){return a.useQuery(A.GetMembersDocument,e)},A.useGetMembersLazyQuery=function(e){return a.useLazyQuery(A.GetMembersDocument,e)},A.GetMemberDocument=o.gql`
  query GetMember($id: ID!) {
    member(where: { id: $id }) {
      ...MemberWithDetails
    }
  }
  ${A.MemberWithDetailsFragmentDoc}
`,A.useGetMemberQuery=function(e){return a.useQuery(A.GetMemberDocument,e)},A.useGetMemberLazyQuery=function(e){return a.useLazyQuery(A.GetMemberDocument,e)}},3100:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(80408),A),n(t(96243),A)},97159:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AvatarPlaceholder=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.AvatarPlaceholder=({className:e})=>n.default.createElement(a,{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",className:e},n.default.createElement("circle",{fill:o.Colors.Blue[50],cx:"20",cy:"20",r:"19.5"}),n.default.createElement("path",{fill:o.Colors.Black[200],d:"M20,1c10.4934101,0,19,8.5065899,19,19s-8.5065899,19-19,19S1,30.4934101,1,20S9.5065899,1,20,1 M20,0 C8.9719601,0,0,8.9719601,0,20s8.9719601,20,20,20s20-8.9719601,20-20S31.0280399,0,20,0L20,0z"}),n.default.createElement("rect",{x:"0",y:"19.5",transform:"matrix(0.7070976 -0.7071159 0.7071159 0.7070976 -8.2842712 20.0003643)",fill:o.Colors.Blue[100],width:"40",height:"1"}),n.default.createElement("rect",{x:"19.5",y:"0",transform:"matrix(0.7070976 -0.7071159 0.7071159 0.7070976 -8.2842712 20.0003643)",fill:o.Colors.Blue[100],width:"1",height:"40"}),n.default.createElement("rect",{x:"11",y:"11",fill:o.Colors.Blue[50],width:"18",height:"18"}),n.default.createElement("path",{fill:o.Colors.Blue[500],d:"M25,12v7.6500244c0,0.6799927-0.0700073,1.3199463-0.210022,1.9499512 C25.9299927,20.25,26.5599976,18.5,26.5599976,16.6900024V12H25z M14.3099976,25.3800049l-0.3200073,1.1099854 l-0.1499634,0.5300293h0.3099976c0.0899658,0,0.1599731,0,0.25-0.0200195h0.0099487 c0.0300293,0,0.0599976-0.0200195,0.0900269-0.0200195c0.0800171,0,0.1799927-0.0199585,0.2700195-0.039978 c0.0700073-0.0200195,0.1399536-0.039978,0.2099609-0.0599976H15c0.0700073-0.0200195,0.1400146-0.0300293,0.210022-0.0599976 h0.0099487c0.0900269-0.0300293,0.1600342-0.0599976,0.2300415-0.0900269 c0.039978-0.0100098,0.0700073-0.0299683,0.1199951-0.0499878c0.0200195-0.0100098,0.0499878-0.0299683,0.0999756-0.039978 c0.0400391-0.0100098,0.0700073-0.0300293,0.1000366-0.0499878c0.1399536-0.0700073,0.2799683-0.1600342,0.4199829-0.25 l0.1699829-0.1400146c0.0700073-0.0400391,0.1300049-0.0900269,0.1900024-0.1400146l0.1699829-0.1699829 c0.0500488-0.0400391,0.1000366-0.0900269,0.1400146-0.1400146l0.0599976-0.0599976 c0.0400391-0.0300293,0.0700073-0.0700073,0.1100464-0.1199951l0.0499878-0.039978 c0.039978-0.0500488,0.0700073-0.0900269,0.1099854-0.1400146v-0.0100098H14.3099976z M22.1900024,12v11.0300293 c0,0.0599976-0.0100098,0.0999756-0.0100098,0.1599731V23.25c-0.0100098,0.0900269-0.0100098,0.1599731-0.0299683,0.2399902 c0,0.0400391-0.0100098,0.0700073-0.0100098,0.1199951c0,0.0300293-0.0200195,0.0700073-0.0200195,0.1199951 c0,0.0599976-0.0100098,0.1300049-0.0299683,0.210022C22.0800171,24,22.0800171,24.0599976,22.0700073,24.1199951v0.039978 C22.0499878,24.210022,22.0499878,24.25,22.039978,24.2999878l-0.0499878,0.1799927L22.25,24.1599731 C22.2800293,24.0999756,22.3200073,24.0599976,22.3599854,24c0.0499878-0.0499878,0.0800171-0.0900269,0.1199951-0.1500244 c0.0100098-0.0199585,0.0400391-0.039978,0.0599976-0.0799561c0.0400391-0.0400391,0.0700073-0.0900269,0.1000366-0.1500244 c0.039978-0.0599976,0.0799561-0.1300049,0.1199951-0.210022c0.0200195-0.0299683,0.0499878-0.0699463,0.0700073-0.0999756 c0.0299683-0.0499878,0.0499878-0.0999756,0.0799561-0.1500244c0.0100098-0.0499878,0.0400391-0.0699463,0.0500488-0.1199951 C22.9899902,23,23.0100098,22.9400024,23.0300293,22.8900146c0.0299683-0.0499878,0.0599976-0.1000366,0.0799561-0.1500244 c0.0100098-0.0200195,0.0200195-0.0499878,0.0300293-0.0800171c0.0199585-0.0199585,0.0299683-0.0499878,0.039978-0.0699463 c0.0100098-0.0500488,0.039978-0.0900269,0.0499878-0.1500244C23.25,22.3900146,23.2800293,22.3499756,23.289978,22.289978 c0.0200195-0.0499878,0.0400391-0.0899658,0.0599976-0.1499634c0.0200195-0.0499878,0.0400391-0.1099854,0.0599976-0.1700439 c0.0100098-0.039978,0.0200195-0.0999756,0.0400391-0.1499634c0.0599976-0.1699829,0.0999756-0.3699951,0.1400146-0.5499878 v-0.0300293c0.0099487-0.0499878,0.0099487-0.0899658,0.0299683-0.1300049v-0.0199585 c0.0100098-0.0500488,0.0100098-0.1100464,0.0300293-0.1700439c0.0099487-0.039978,0.0099487-0.0999756,0.0299683-0.1599731 V20.710022c0-0.0400391,0.0100098-0.1000366,0.0100098-0.1500244c0-0.0599976,0.0100098-0.1199951,0.0100098-0.1699829 c0-0.0599976,0.0199585-0.1300049,0.0199585-0.1900024c0.0100098-0.0499878,0.0100098-0.1099854,0.0100098-0.1699829 C23.75,19.9099731,23.75,19.7700195,23.75,19.6500244V12H22.1900024z"}),n.default.createElement("path",{fill:o.Colors.Blue[500],d:"M20.9393997,12v10.6047001c0,0.2551994-0.0144997,0.4951-0.0289993,0.7350006 c-0.014101,0.2068996-0.0424995,0.4124985-0.085001,0.615099c-0.0854988,0.4803009-0.2139988,0.9454002-0.3850002,1.3800011 c-0.1042995,0.2719002-0.223299,0.5373993-0.3563995,0.7950001c-0.3976002,0.7467995-0.9078999,1.420599-1.5109005,1.9951 C17.2926998,29.3341007,15.6323996,30.0021,13.9118996,30H13l0.4705-1.6352005h0.4559002 c1.2841997,0.0027008,2.5274-0.4758987,3.5068007-1.3500996c0.5119991-0.4451008,0.9376984-0.9899998,1.2538986-1.6047001 c0.0855007-0.1499004,0.1570015-0.3150997,0.2280006-0.480299c0.114399-0.2694016,0.1998997-0.5398006,0.2709007-0.8250008 c0.0879993-0.3174992,0.1406994-0.6445999,0.1569996-0.9748993c0.0144997-0.1647015,0.0144997-0.3299007,0.0144997-0.4951V12 H20.9393997z"}),n.default.createElement("path",{fill:o.Colors.Blue[500],d:"M18.1315994,22.4400005v0.1646996c0,0.1352005,0,0.2703991-0.0144997,0.3903008 c-0.0284996,0.2546997-0.0569992,0.5098991-0.1280003,0.7497997c-0.0289993,0.1198997-0.0574989,0.2398987-0.1000004,0.3450985 H14.6819l0.4703999-1.6351986h2.9792995v-0.0151997V22.4400005z"}));const a=i.default.svg`
  width: 40px;
  height: 40px;
  border-radius: ${o.BorderRad.round};
  overflow: hidden;
`},1772:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AccountInfo=void 0;const n=r(t(27860)),i=r(t(2784)),o=r(t(52275)),a=t(56053),s=t(67723),u=t(12987),c=t(27609);A.AccountInfo=i.default.memo((({account:e})=>{const{active:A}=u.useMembership();return i.default.createElement(l,null,i.default.createElement(d,null,i.default.createElement(n.default,{size:40,theme:"beachball",value:e.address})),A&&i.default.createElement(g,{active:A,address:e.address}),i.default.createElement(f,null,e.name),i.default.createElement(p,{altText:c.shortenAddress(e.address),copyText:e.address}))}));const l=o.default.div`
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
`,d=o.default.div`
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
`,f=o.default.h5`
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
`,g=({active:e,address:A})=>e&&e.rootAccount===A||e.controllerAccount===A?i.default.createElement(h,null,e.rootAccount===A?"Root account":"Controller account"):null,h=o.default.p`
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
`,p=o.default(a.CopyComponent)`
  grid-area: accountaddress;
`},26812:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AvatarPlaceholderImage=A.AvatarImg=A.Avatar=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(97159);A.Avatar=({avatarURI:e,className:t})=>e?n.default.createElement(A.AvatarImg,{src:e,className:t}):n.default.createElement(A.AvatarPlaceholderImage,null),A.AvatarImg=i.default.img`
  border-radius: ${o.BorderRad.round};
  overflow: hidden;
`,A.AvatarPlaceholderImage=i.default(a.AvatarPlaceholder)`
  width: 100%;
  height: 100%;
`},56053:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CopyText=A.CopyGroup=A.CopyComponent=void 0;const n=r(t(52275)),i=r(t(2784)),o=t(12702),a=t(78777);A.CopyComponent=({altText:e,copyText:t,className:r})=>i.default.createElement(A.CopyGroup,{className:r},i.default.createElement(A.CopyText,null,!e&&t,e&&e),i.default.createElement(o.CopyButton,{textToCopy:t})),A.CopyGroup=n.default.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 8px;
  width: fit-content;
  height: fit-content;
  font-family: ${a.Fonts.Inter};
  font-size: 12px;
  line-height: 18px;
  color: ${a.Colors.Black[400]};
  transition: ${a.Transitions.all};
`,A.CopyText=n.default.span`
  max-width: 152px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`},95148:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.HelpComponent=A.HelperLink=A.HelperText=A.HelpPopupTitle=A.Help=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(79530),s=t(95852);A.Help=n.default.memo((({helperText:e,helperTitle:t,helperLinkText:r,helperLinkURL:i})=>n.default.createElement(A.HelpComponent,null,n.default.createElement(a.QuestionIcon,null),n.default.createElement(u,null,t&&n.default.createElement(A.HelpPopupTitle,null,t),n.default.createElement(A.HelperText,null,e),i&&n.default.createElement(A.HelperLink,{href:i,target:"_blank"},r||"Link",n.default.createElement(s.LinkSymbol,null))))));const u=i.default.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 24px;
  left: -16px;
  width: max-content;
  min-width: 160px;
  max-width: 304px;
  padding: 16px 24px;
  border: 1px solid ${o.Colors.Black[900]};
  background-color: ${o.Colors.Black[700]};
  border-radius: ${o.BorderRad.m};
  transition: ${o.Transitions.all};
  visibility: hidden;
  z-index: 10;
  ${o.Animations.showHelperTooltip};

  &:after {
    content: '';
    position: absolute;
    left: 19px;
    top: -4px;
    width: 8px;
    height: 8px;
    background-color: ${o.Colors.Black[700]};
    border: 1px solid ${o.Colors.Black[900]};
    transform: rotate(45deg);
    clip-path: polygon(100% 0, 0 0, 0 100%);
  }
`;A.HelpPopupTitle=i.default.h6`
  color: ${o.Colors.Black[900]};
  margin-bottom: 10px;
  color: ${o.Colors.White};
`,A.HelperText=i.default.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: ${o.Colors.Black[500]};
  color: ${o.Colors.Black[400]};
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
  color: ${o.Colors.Black[400]};
  transition: ${o.Transitions.all};

  ${s.LinkSymbolStyle} {
    width: 12px;
    height: 12px;
    .blackPart,
    .primaryPart {
      fill: ${o.Colors.Black[300]};
    }
  }

  &:hover {
    color: ${o.Colors.Blue[500]};

    ${s.LinkSymbolStyle} {
      .blackPart,
      .primaryPart {
        fill: ${o.Colors.Blue[500]};
      }
    }
  }
`,A.HelpComponent=i.default.button`
  display: flex;
  position: absolute;
  right: -8px;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: ${o.BorderRad.round};
  background-color: ${o.Colors.Black[75]};
  color: ${o.Colors.Black[500]};
  cursor: pointer;
  transform: translate(100%);
  transition: ${o.Transitions.all};
  z-index: 5;

  svg {
    width: 100%;
    height: 100%;
    position: static;
  }

  &:hover,
  &:focus {
    color: ${o.Colors.Blue[500]};

    ${u} {
      display: flex;
    }
  }
`},18823:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ResultTextWhite=A.ResultText=A.CloseSmallModalButton=A.ModalTitle=A.SignTransferContainer=A.SuccessModalBody=A.ResultModalBody=A.ScrolledModalContainer=A.ScrolledModalBody=A.ScrolledModal=A.ModalHeaderIcon=A.ModalWrap=A.ModalFooter=A.ModalBody=A.ModalTopBar=A.ModalGlass=A.Modal=A.ModalHeader=void 0;const n=r(t(2784)),i=r(t(28316)),o=r(t(52275)),a=t(67723),s=t(59686),u=t(64342);A.ModalHeader=n.default.memo((({onClick:e,title:t,icon:r})=>n.default.createElement(A.ModalTopBar,{columns:r?3:2},r?n.default.createElement(A.ModalHeaderIcon,null,r):null,n.default.createElement(A.ModalTitle,null,t),n.default.createElement(c,{onClick:e})))),A.Modal=({onClose:e,modalHeight:t="m",children:r,modalSize:o,isDark:a,className:s})=>i.default.createPortal(n.default.createElement(A.ModalGlass,{modalHeight:t,modalSize:o,isDark:a,onClick:function(A){A.target===A.currentTarget&&e()},onClose:e},n.default.createElement(A.ModalWrap,{modalMaxSize:o,modalHeight:t,isDark:a,role:"modal",className:s},r)),document.body),A.ModalGlass=o.default.div`
  display: flex;
  justify-content: center;
  align-items: ${({modalHeight:e})=>{switch(e){case"s":return"center"}}};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: ${({modalHeight:e})=>{switch(e){case"s":return"0px";case"m":return"64px";case"l":return"48px"}}};
  padding-left: ${({modalHeight:e})=>{switch(e){case"m":return"44px"}}};
  background-color: ${a.Colors.Black[700.85]};
  color: ${a.Colors.Black[900]};
  z-index: 100000;
  ${a.Animations.showModalBackground};
`,A.ModalTopBar=o.default.header.attrs((e=>({columns:e.columns})))`
  display: grid;
  position: relative;
  grid-auto-flow: column;
  grid-area: modalheader;
  grid-template-columns: ${e=>e.columns>2?"auto 1fr 40px":"1fr 40px"};
  justify-content: start;
  grid-column-gap: 16px;
  align-items: center;
  height: 76px;
  padding: 24px;
  border-radius: 2px 2px 0 0;
`,A.ModalBody=o.default.div`
  display: grid;
  grid-area: modalbody;
  grid-row-gap: 16px;
  padding: 24px 24px 48px;
  background-color: ${a.Colors.Black[50]};
  border-top: 1px solid ${a.Colors.Black[200]};
  border-bottom: 1px solid ${a.Colors.Black[200]};
`,A.ModalFooter=o.default.footer`
  display: inline-grid;
  grid-area: modalfooter;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-column-gap: 46px;
  justify-self: end;
  justify-items: end;
  align-items: center;
  width: fit-content;
  height: 72px;
  padding: 12px 16px;
  border-radius: 0 0 2px 2px;
`,A.ModalWrap=o.default.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'modalheader'
    'modalbody'
    'modalfooter';
  grid-area: modal;
  position: relative;
  background-color: ${a.Colors.White};
  width: 100%;
  max-width: ${({modalMaxSize:e})=>{switch(e){case"xs":return"400px";case"s":return"720px";case"m":return"904px";case"l":return"1240px"}}};
  height: min-content;
  border-radius: ${a.BorderRad.s};
  box-shadow: ${a.Shadows.common};
  ${a.Animations.showModalBlock};
  &,
  ${A.ModalBody}, ${A.ModalTopBar}, ${A.ModalFooter} {
    ${({isDark:e})=>{switch(e){case!0:return`\n          background-color: ${a.Colors.Black[800]};\n          color: ${a.Colors.White};\n          `}}};
  }
  ${A.ModalBody} {
    ${({isDark:e})=>{switch(e){case!0:return`\n          border-color: ${a.Colors.Black[800]};\n          `}}};
  }
`,A.ModalHeaderIcon=o.default.div`
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
`,A.ScrolledModal=o.default(A.Modal)`
  &${A.ModalWrap} {
    max-height: calc(100% - 128px);
    grid-template-rows: auto 1fr auto;
  }
`,A.ScrolledModalBody=o.default(A.ModalBody)`
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
`,A.ScrolledModalContainer=o.default.div`
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
`,A.ResultModalBody=o.default(A.ModalBody)`
  position: relative;
  grid-row-gap: 16px;
  padding: 48px 44px;
  justify-items: center;
  border: none;
  background-color: ${a.Colors.White};
  min-height: 312px;
`,A.SuccessModalBody=o.default(A.ModalBody)`
  grid-row-gap: 8px;
  background-color: ${a.Colors.White};
  border: none;
  padding: 12px 24px 40px;
`,A.SignTransferContainer=o.default.div`
  display: grid;
  grid-row-gap: 8px;
  width: 100%;
  height: 100%;
`,A.ModalTitle=o.default.h4`
  .red-title {
    color: ${a.Colors.Red[400]};
  }
`;const c=o.default(s.CloseButton)`
  position: absolute;
  right: 16px;
`;A.CloseSmallModalButton=o.default(c)`
  position: absolute;
  top: 24px;
  right: 16px;
`,A.ResultText=o.default(u.Text)`
  text-align: center;

  ${u.ValueInJoys} {
    font-family: ${a.Fonts.Inter};
    font-weight: 700;
    color: ${a.Colors.Black[700]};
    &:after {
      font-family: ${a.Fonts.Inter};
      font-weight: 700;
      color: ${a.Colors.Black[700]};
    }
  }
`,A.ResultTextWhite=o.default(A.ResultText)`
  color: ${a.Colors.Black[400]};
`},48438:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.NotificationComponent=A.Notification=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(20625);A.Notification=function({hasNotification:e}){return n.default.createElement(A.NotificationComponent,{hasNotification:e},n.default.createElement(a.NotificationIcon,null))},A.NotificationComponent=i.default.div`
  display: flex;
  position: relative;
  width: 16px;
  height: 16px;
  color: ${o.Colors.Black[500]};
  transition: ${o.Transitions.all};

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    right: 0;
    width: 6px;
    height: 6px;
    border-radius: ${o.BorderRad.round};
    background-color: ${o.Colors.Red[400]};
    opacity: ${e=>!0===e.hasNotification?"1":"0"};
    transition: ${o.Transitions.all};
  }
`},89265:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferButtonStyled=A.TransferButton=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(15689),s=t(90743),u=t(59686),c=t(79530);A.TransferButton=function({from:e,to:A,disabled:t}){const[r,i]=a.useToggle(),o=!e&&!A,u=!!e&&!o,d=o?n.default.createElement(c.TransferIcon,null):u?n.default.createElement(c.ArrowOutsideIcon,null):n.default.createElement(c.ArrowInsideIcon,null),f=!!t;return n.default.createElement(n.default.Fragment,null,n.default.createElement(l,{onClick:i,disabled:f},d),r&&n.default.createElement(s.TransferModal,{onClose:i,from:e,to:A,icon:d}))},A.TransferButtonStyled=function(){const[e,A]=a.useToggle(),t=n.default.createElement(c.TransferIcon,null);return n.default.createElement(n.default.Fragment,null,n.default.createElement(d,{onClick:A},t),e&&n.default.createElement(s.TransferModal,{onClose:A,icon:t}))};const l=i.default(u.ButtonGhostMediumSquare)`
  svg {
    color: ${o.Colors.Black[900]};
  }
`,d=i.default(u.ButtonPrimarySmallSquare)`
  width: 32px;
  height: 32px;
  grid-area: balancetransfer;
  justify-self: end;
`},20882:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferInviteButton=void 0;const n=r(t(2784)),i=t(15689),o=t(98098),a=t(59686),s=t(79530);A.TransferInviteButton=function({member:e}){const A=e.inviteCount<=0,[t,r]=i.useToggle(),u=n.default.createElement(s.TransferIcon,null);return n.default.createElement(n.default.Fragment,null,n.default.createElement(a.ButtonSecondarySmallSquare,{disabled:A,onClick:r},u),t&&n.default.createElement(o.TransferInviteModal,{onClose:r,icon:u,member:e}))}},97720:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionAccount=void 0;const n=r(t(2784)),i=t(25047),o=t(10233),a=t(1772),s=t(64342);A.OptionAccount=({account:e})=>{const A=i.useBalance(e);return n.default.createElement(n.default.Fragment,null,n.default.createElement(a.AccountInfo,{account:e}),n.default.createElement(o.BalanceInfoInRow,null,n.default.createElement(o.InfoTitle,null,"Transferable balance"),n.default.createElement(o.InfoValue,null,n.default.createElement(s.TokenValue,{value:null==A?void 0:A.transferable}))))}},56362:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionListAccount=void 0;const n=r(t(2784)),i=t(13682),o=t(97720);A.OptionListAccount=n.default.memo((({options:e,onChange:A})=>n.default.createElement(i.OptionsListComponent,null,e.map((e=>n.default.createElement(i.Option,{key:e.address,onClick:()=>A&&A(e)},n.default.createElement(o.OptionAccount,{account:e})))))))},64414:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.SelectAccount=A.filterAccount=void 0;const o=i(t(2784)),a=t(52452),s=t(25047),u=t(75278),c=t(5568),l=t(15689),d=t(10233),f=t(1772),g=t(9398),h=t(79530),p=t(13682),m=t(64342),I=t(83748),B=t(56362);A.filterAccount=e=>e?A=>A.address!==e.address:()=>!0,A.SelectAccount=o.default.memo((({onChange:e,filter:A,selected:t})=>{const{allAccounts:r}=a.useAccounts(),n=r.filter(A||(()=>!0)),[i,y]=l.useToggle(),[E,C]=o.useState(t),b=s.useBalance(E),v=o.useRef(null),Q=o.useRef(null),[w,M]=o.useState(""),S=u.useDebounce(w,500),D=o.useMemo((()=>I.filterByText(n,S)),[S,n]),_=c.useKeyring(),k=o.useCallback((A=>{y(),C(A),e(A),M("")}),[A,y]);return o.useEffect((()=>{const e=e=>{i&&v.current&&!e.composedPath().includes(v.current)&&(y(),M(""))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[i]),o.useEffect((()=>{const e=e=>{i&&"Escape"===e.key&&(y(),M(""))};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[i]),o.useEffect((()=>{var e;i&&(null===(e=Q.current)||void 0===e||e.focus())}),[i]),o.useEffect((()=>{0===D.length&&I.isValidAddress(S,_)&&k({name:"Unsaved Account",address:S})}),[D]),o.default.createElement(p.SelectComponent,{ref:v},o.default.createElement(g.Toggle,{onClick:y,isOpen:i},E&&o.default.createElement(p.SelectedOption,null,o.default.createElement(f.AccountInfo,{account:E}),o.default.createElement(d.BalanceInfoInRow,null,o.default.createElement(d.InfoTitle,null,"Transferable balance"),o.default.createElement(d.InfoValue,null,o.default.createElement(m.TokenValue,{value:null==b?void 0:b.transferable})))),(!E||i)&&o.default.createElement(p.EmptyOption,{ref:Q,type:"text",placeholder:"Select account or paste account address",autoComplete:"off",value:w,onChange:e=>M(e.target.value)}),o.default.createElement(g.ToggleButton,null,o.default.createElement(h.ArrowDownIcon,null))),i&&o.default.createElement(B.OptionListAccount,{onChange:k,options:D}))}))},83748:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.isValidAddress=A.filterByText=void 0,A.filterByText=function(e,A){return e.filter((e=>{var t;return(null===(t=e.name)||void 0===t?void 0:t.toLocaleLowerCase().includes(A.toLocaleLowerCase()))||e.address.includes(A)}))},A.isValidAddress=function(e,A){try{A.encodeAddress(A.decodeAddress(e))}catch(e){return!1}return!0}},71196:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(64414),A)},18531:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ButtonsGroup=A.ButtonGhostSmallSquare=A.ButtonGhostSmall=A.ButtonGhostMediumSquare=A.ButtonGhostMedium=A.ButtonGhostSquare=A.ButtonGhost=A.ButtonSecondarySmallSquare=A.ButtonSecondarySmall=A.ButtonSecondaryMediumSquare=A.ButtonSecondaryMedium=A.ButtonSecondarySquare=A.ButtonSecondary=A.ButtonPrimarySmallSquare=A.ButtonPrimarySmall=A.ButtonPrimaryMediumSquare=A.ButtonPrimaryMedium=A.ButtonPrimarySquare=A.ButtonPrimary=void 0;const n=r(t(52275)),i=t(67723);A.ButtonPrimary=n.default.button`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  justify-items: center;
  align-items: center;
  width: fit-content;
  min-width: 48px;
  height: 48px;
  padding: 8px 16px;
  border: 1px solid ${i.Colors.Blue[500]};
  border-radius: ${i.BorderRad.s};
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${i.Colors.White};
  background-color: ${i.Colors.Blue[500]};
  outline: none;
  transition: ${i.Transitions.all};
  cursor: pointer;

  &:hover {
    border-color: ${i.Colors.Blue[600]};
    background-color: ${i.Colors.Blue[600]};
  }

  &:focus,
  &:active {
    border-color: ${i.Colors.Blue[700]};
    background-color: ${i.Colors.Blue[700]};
  }

  &:disabled {
    border-color: ${i.Colors.Blue[100]};
    background-color: ${i.Colors.Blue[100]};
    cursor: not-allowed;
  }
`,A.ButtonPrimarySquare=n.default(A.ButtonPrimary)`
  padding: 8px;
  max-width: 48px;
`,A.ButtonPrimaryMedium=n.default(A.ButtonPrimary)`
  height: 40px;
  padding: 4px 16px;
  min-width: 40px;
`,A.ButtonPrimaryMediumSquare=n.default(A.ButtonPrimaryMedium)`
  max-width: 40px;
  padding: 8px;
`,A.ButtonPrimarySmall=n.default(A.ButtonPrimary)`
  height: 32px;
  padding: 4px 8px;
  grid-column-gap: 4px;
  min-width: 32px;
  font-size: 14px;
`,A.ButtonPrimarySmallSquare=n.default(A.ButtonPrimarySmall)`
  max-width: 32px;
  padding: 6px;
`,A.ButtonSecondary=n.default(A.ButtonPrimary)`
  border-color: ${i.Colors.Black[75]};
  color: ${i.Colors.Black[900]};
  background-color: ${i.Colors.Black[75]};

  svg {
    color: ${i.Colors.Black[400]};
  }

  &:hover {
    border-color: ${i.Colors.Black[100]};
    background-color: ${i.Colors.Black[100]};
  }

  &:focus,
  &:active {
    border-color: ${i.Colors.Black[100]};
    background-color: ${i.Colors.Black[100]};
    color: ${i.Colors.Blue[500]};

    svg {
      color: ${i.Colors.Blue[400]};
    }
  }

  &:disabled {
    color: ${i.Colors.Black[300]};
    border-color: ${i.Colors.Black[50]};
    background-color: ${i.Colors.Black[50]};

    svg {
      color: ${i.Colors.Black[300]};
    }
  }
`,A.ButtonSecondarySquare=n.default(A.ButtonSecondary)`
  padding: 8px;
  max-width: 48px;
`,A.ButtonSecondaryMedium=n.default(A.ButtonSecondary)`
  height: 40px;
  padding: 4px 16px;
  min-width: 40px;
`,A.ButtonSecondaryMediumSquare=n.default(A.ButtonSecondaryMedium)`
  max-width: 40px;
  padding: 8px;
`,A.ButtonSecondarySmall=n.default(A.ButtonSecondary)`
  height: 32px;
  padding: 4px 8px;
  grid-column-gap: 4px;
  min-width: 32px;
  font-size: 14px;
`,A.ButtonSecondarySmallSquare=n.default(A.ButtonSecondarySmall)`
  max-width: 32px;
  padding: 6px;
`,A.ButtonGhost=n.default(A.ButtonPrimary)`
  border-color: ${i.Colors.Black[200]};
  color: ${i.Colors.Black[900]};
  background-color: ${i.Colors.White};

  svg {
    color: ${i.Colors.Black[400]};
  }

  &:hover {
    border-color: ${i.Colors.Blue[300]};
    background-color: ${i.Colors.White};
  }

  &:focus,
  &:active {
    border-color: ${i.Colors.Blue[300]};
    background-color: ${i.Colors.White};
    color: ${i.Colors.Blue[500]};

    svg {
      color: ${i.Colors.Blue[400]};
    }
  }

  &:disabled {
    color: ${i.Colors.Black[300]};
    border-color: ${i.Colors.Black[100]};
    background-color: ${i.Colors.White};

    svg {
      color: ${i.Colors.Black[300]};
    }
  }
`,A.ButtonGhostSquare=n.default(A.ButtonGhost)`
  padding: 8px;
  max-width: 48px;
`,A.ButtonGhostMedium=n.default(A.ButtonGhost)`
  height: 40px;
  padding: 4px 16px;
  min-width: 40px;
`,A.ButtonGhostMediumSquare=n.default(A.ButtonGhostMedium)`
  max-width: 40px;
  padding: 8px;
`,A.ButtonGhostSmall=n.default(A.ButtonGhost)`
  height: 32px;
  padding: 4px 8px;
  grid-column-gap: 4px;
  min-width: 32px;
  font-size: 14px;
`,A.ButtonGhostSmallSquare=n.default(A.ButtonGhostSmall)`
  max-width: 32px;
  padding: 6px;
`,A.ButtonsGroup=n.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  width: fit-content;
`},45905:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Close=A.CloseButton=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(79530);A.CloseButton=e=>n.default.createElement(A.Close,Object.assign({},e),n.default.createElement(a.CrossIcon,null)),A.Close=i.default.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
  color: ${o.Colors.Black[400]};
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: ${o.Transitions.all};

  &:hover {
    color: ${o.Colors.Blue[200]};
  }

  &:focus,
  &:active {
    color: ${o.Colors.Blue[400]};
  }

  &:disabled {
    color: ${o.Colors.Black[300]};
    cursor: not-allowed;
  }
`},12702:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CopyButtonIcon=A.CopyButton=void 0;const a=i(t(2784)),s=o(t(52275)),u=t(79530),c=t(78777),l=t(39119),d=t(68873);A.CopyButton=function({textToCopy:e}){const[t,r]=a.useState(!1),[n,i]=a.useState(!1);return a.default.createElement(A.CopyButtonIcon,{onClick:()=>{try{navigator.clipboard.writeText(e),r(!t)}catch(e){i(!n)}}},!t&&!n&&a.default.createElement(u.CopyIcon,null),t&&setTimeout((function(){r(!t)}),1e3)&&a.default.createElement(f,null,a.default.createElement(d.SuccessSymbol,null)),n&&setTimeout((function(){i(!n)}),1e3)&&a.default.createElement(f,null,a.default.createElement(l.FailureSymbol,null)))},A.CopyButtonIcon=s.default.button`
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
  cursor: copy;
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
`},9398:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Toggle=A.ToggleButton=void 0;const n=r(t(52275)),i=t(67723),o=t(79530),a=t(18531);A.ToggleButton=n.default(a.ButtonGhostMediumSquare)`
  background-color: transparent;
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
  }
  svg {
    color: ${i.Colors.Black[600]};
  }
`,A.Toggle=n.default.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-template-rows: 1fr;
  grid-column-gap: 4px;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: ${i.Sizes.selectHeight};
  max-height: ${i.Sizes.selectHeight};
  margin: 0;
  padding: 0;
  border: 1px solid ${({disabled:e})=>e?i.Colors.Black[200]:i.Colors.Black[300]};
  border-radius: ${i.BorderRad.s};
  background-color: ${({disabled:e})=>e?i.Colors.Black[75]:i.Colors.White};
  font-size: 1em;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: ${i.Transitions.all};

  ${A.ToggleButton} ${o.Icon} {
    transition: ${i.Transitions.all};
    transform: scaleY(${({isOpen:e})=>e?"-1":"1"});
  }

  &:hover {
    border-color: ${({disabled:e})=>e?i.Colors.Black[200]:i.Colors.Blue[200]};
  }

  &:focus-within,
  &:active,
  &:focus {
    border-color: ${i.Colors.Blue[300]};
  }
`},59686:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(18531),A),n(t(45905),A),n(t(12702),A)},16057:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CheckboxNative=A.CheckboxLabel=A.CheckboxStyled=A.CheckboxSideText=A.Checkbox=void 0;const a=i(t(2784)),s=o(t(52275)),u=t(67723),c=t(1079);A.Checkbox=function({id:e,isRequired:t,children:r,enabled:n=!0,isChecked:i=!1,onChange:o}){const[s,u]=a.useState(i);return a.default.createElement(A.CheckboxLabel,{htmlFor:e,onClick:e=>{e.preventDefault(),!1!==n&&(u(!s),o&&o(!s))},isLabelEnabled:n},a.default.createElement(A.CheckboxNative,{type:"checkbox",id:e,name:e,required:t,checked:s,disabled:!n,onChange:e=>u(e.target.checked)}),a.default.createElement(A.CheckboxStyled,null,a.default.createElement(c.CheckboxIcon,null)),a.default.createElement(A.CheckboxSideText,null,r))},A.CheckboxSideText=s.default.span`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`,A.CheckboxStyled=s.default.span`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 2px solid ${u.Colors.Black[400]};
  border-radius: ${u.BorderRad.m};
  color: ${u.Colors.Black[400]};
  transition: ${u.Transitions.all};
  pointer-events: none;
  overflow: hidden;

  ${c.CheckboxIconStyles} {
    position: absolute;
    transform: translateY(-100%);
    transition: transform ${u.Transitions.duration} ease;
  }
`,A.CheckboxLabel=s.default.label`
  display: inline-grid;
  position: relative;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  align-items: center;
  width: fit-content;
  color: ${u.Colors.Black[900]};
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-family: ${u.Fonts.Inter};
  opacity: ${e=>0==e.isLabelEnabled?"0.5":"1"};
  cursor: ${e=>0==e.isLabelEnabled?"not-allowed":"pointer"};
  user-select: none;

  &:hover {
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
  &:disabled&:focus + ${A.CheckboxStyled}, &:disabled&:hover + ${A.CheckboxStyled} {
    border: 2px solid ${u.Colors.Black[300]};
    color: ${u.Colors.Black[400]};
  }
`},75903:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TextArea=A.NumberInput=A.TextInput=void 0;const n=r(t(52275)),i=t(67723);A.TextInput=n.default.input`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${i.Colors.Black[300]};
  border-radius: ${i.BorderRad.s};
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${i.Colors.Black[400]};
  }
`,A.NumberInput=n.default(A.TextInput)`
  text-align: right;
`,A.TextArea=n.default.textarea`
  font-family: ${i.Fonts.Inter};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${i.Colors.Black[300]};
  border-radius: ${i.BorderRad.s};
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  resize: none;

  &::placeholder {
    font-weight: 400;
    color: ${i.Colors.Black[400]};
  }
`},52762:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Label=void 0;const n=r(t(52275)),i=t(67723),o=t(95148);A.Label=n.default.label`
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

  ${o.HelpComponent} {
    position: relative;
    display: inline;
    transform: unset;
    right: unset;
    margin-left: 4px;
  }
`},66848:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Link=A.LabelLink=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.LabelLink=function({href:e,target:t,children:r,className:i}){return n.default.createElement(A.Link,{onClick:e=>e.stopPropagation(),href:e,target:t,className:i},r)},A.Link=i.default.a`
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: ${o.Transitions.all};

  &:hover {
    color: ${o.Colors.Blue[500]};
  }
  &:active,
  &:focus {
    outline: none;
    color: ${o.Colors.Blue[600]};
  }
`},96312:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.InlineToggleWrap=A.ToggleCheckbox=void 0;const a=o(t(2784)),s=i(t(52275)),u=t(67723),c=t(52762);A.ToggleCheckbox=function({isRequired:e,disabled:A,checked:t,onChange:r,trueLabel:n,falseLabel:i}){const o=e=>()=>{!0!==A&&r(e)};return a.default.createElement(p,{groupDisabled:A},a.default.createElement(l,{onClick:o(!0)},n),a.default.createElement(g,{isChecked:t},a.default.createElement(d,{type:"checkbox",disabled:A,checked:t,onChange:e=>r(e.currentTarget.checked),required:e})),a.default.createElement(l,{onClick:o(!1)},i))};const l=s.default.button`
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
`},81328:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(75903),A),n(t(52762),A),n(t(66848),A),n(t(16057),A),n(t(96312),A)},84952:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ArrowIcon=A.ArrowDownExpandedIcon=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(70305);A.ArrowDownExpandedIcon=function(){return n.default.createElement(A.ArrowIcon,{size:"24",viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M11.1421 12.1049V3.58594H13.2718V12.1049H11.1421Z",fill:"currentColor"}),n.default.createElement("path",{d:"M12.207 16.9882L5.50595 10.2871L4 11.7931L12.207 20.0001L20.4141 11.7931L18.9081 10.2871L12.207 16.9882Z",fill:"currentColor"}))},A.ArrowIcon=i.default(o.Icon)``},35891:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ArrowDownIcon=void 0;const n=r(t(2784)),i=t(70305);A.ArrowDownIcon=function(){return n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.13804 9.3253L3.67065 4.85791L2.66669 5.86187L8.13804 11.3332L13.6094 5.86187L12.6054 4.85791L8.13804 9.3253Z",fill:"currentColor"}))}},38234:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ArrowInsideIcon=void 0;const n=r(t(2784)),i=t(70305);A.ArrowInsideIcon=function(){return n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M13.8281 12.1874H2.57812C2.50937 12.1874 2.45312 12.2436 2.45312 12.3124V13.2499C2.45312 13.3186 2.50937 13.3749 2.57812 13.3749H13.8281C13.8969 13.3749 13.9531 13.3186 13.9531 13.2499V12.3124C13.9531 12.2436 13.8969 12.1874 13.8281 12.1874ZM6.25 8.03472H7.40469V2.74878C7.40469 2.68003 7.46094 2.62378 7.52969 2.62378H8.46719C8.53594 2.62378 8.59219 2.68003 8.59219 2.74878V8.03472H9.75C9.85469 8.03472 9.9125 8.15503 9.84844 8.23628L8.09844 10.4519C8.08674 10.4668 8.07181 10.4789 8.05475 10.4872C8.03769 10.4955 8.01897 10.4999 8 10.4999C7.98103 10.4999 7.96231 10.4955 7.94525 10.4872C7.92819 10.4789 7.91326 10.4668 7.90156 10.4519L6.15156 8.23784C6.0875 8.15503 6.14531 8.03472 6.25 8.03472Z",fill:"currentColor"}))}},40894:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ArrowOutsideIcon=void 0;const n=r(t(2784)),i=t(70305);A.ArrowOutsideIcon=function(){return n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M13.8281 12.1874H2.57812C2.50937 12.1874 2.45312 12.2436 2.45312 12.3124V13.2499C2.45312 13.3186 2.50937 13.3749 2.57812 13.3749H13.8281C13.8969 13.3749 13.9531 13.3186 13.9531 13.2499V12.3124C13.9531 12.2436 13.8969 12.1874 13.8281 12.1874ZM6.25 5.08893H7.40469V10.3749C7.40469 10.4436 7.46094 10.4999 7.52969 10.4999H8.46719C8.53594 10.4999 8.59219 10.4436 8.59219 10.3749V5.08893H9.75C9.85469 5.08893 9.9125 4.96862 9.84844 4.88737L8.09844 2.67174C8.08674 2.6568 8.0718 2.64472 8.05475 2.63641C8.03769 2.6281 8.01897 2.62378 8 2.62378C7.98103 2.62378 7.96231 2.6281 7.94525 2.63641C7.92819 2.64472 7.91326 2.6568 7.90156 2.67174L6.15156 4.8858C6.0875 4.96862 6.14531 5.08893 6.25 5.08893Z",fill:"currentColor"}))}},33702:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.BlockIcon=void 0;const n=r(t(2784)),i=t(70305);A.BlockIcon=function(){return n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 1L14 4.75V11.5094L8 14.8844L2 11.5094V4.75L8 1ZM3.33333 6.2594L7.33333 8.5094V12.9796L3.33333 10.7296V6.2594ZM8.66667 12.9796L12.6667 10.7296V5.489L8 2.57233L3.97283 5.08931L7.99397 7.35121L11.0927 5.54365L11.7645 6.69535L8.66667 8.50241V12.9796Z",fill:"currentColor"}))}},1079:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CheckboxIconStyles=A.CheckboxIcon=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(70305);A.CheckboxIcon=function(){return n.default.createElement(A.CheckboxIconStyles,{size:"24",viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M20 7.5975L9.90608 18L4 12.735L5.78463 11.0132L9.77205 14.5679L18.0857 6L20 7.5975Z",fill:"currentColor"}))},A.CheckboxIconStyles=i.default(o.Icon)``},88001:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CopyIcon=void 0;const n=r(t(2784)),i=t(70305);A.CopyIcon=({className:e})=>n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},n.default.createElement("path",{d:"M10.6667 1.33325H2.66671C1.93004 1.33325 1.33337 1.92992 1.33337 2.66659V11.9999H2.66671V2.66659H10.6667V1.33325ZM12.6667 3.99992H5.33337C4.59671 3.99992 4.00004 4.59659 4.00004 5.33325V13.3333C4.00004 14.0699 4.59671 14.6666 5.33337 14.6666H12.6667C13.4034 14.6666 14 14.0699 14 13.3333V5.33325C14 4.59659 13.4034 3.99992 12.6667 3.99992ZM12.6667 13.3333H5.33337V5.33325H12.6667V13.3333Z",fill:"currentColor"}))},10628:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CrossIcon=void 0;const n=r(t(2784)),i=t(70305);A.CrossIcon=function(){return n.default.createElement(i.Icon,{size:"24",viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.4095 12.1366L20.273 19L19.0002 20.2728L12.1367 13.4094L5.27331 20.2728L4.00051 19L10.864 12.1366L4.00018 5.27279L5.27297 4L12.1367 10.8638L19.0005 4L20.2733 5.27279L13.4095 12.1366Z",fill:"currentColor"}))}},64020:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.FailureIcon=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(70305);A.FailureIcon=function(){return n.default.createElement(s,{width:"80",height:"82",viewBox:"0 0 80 82",fill:"none"},n.default.createElement("rect",{y:"0.75",width:"80",height:"80",rx:"40",fill:o.Colors.Black[100]}),n.default.createElement("g",{clipPath:"url(#clip0)"},n.default.createElement("path",{d:"M43.0837 47.9011C42.2724 47.0489 40.8063 47.048 39.9938 47.8991L33.3112 54.6177C32.7033 55.2299 31.8828 55.5051 31.0801 55.4217C33.7426 53.1277 33.9923 51.1119 31.2461 48.7388C29.1178 46.8157 27.0866 48.0727 25.5141 49.9287C25.3827 49.0693 25.6515 48.1672 26.2925 47.5198L32.9881 40.7893C33.8282 39.9449 33.8294 38.5685 32.9904 37.7208C31.5732 36.4673 29.6051 33.2171 27.4661 35.2637C21.819 41.294 12.6395 46.9549 19.258 56.1845L14.5348 60.9077C13.6647 61.7548 15.0117 63.0997 15.8575 62.2303L28.0265 50.0613C28.5257 49.5408 29.4242 49.5407 29.9233 50.0614C30.6948 50.774 31.9702 51.8917 30.9108 52.9458L13.428 70.4289C12.3731 71.4882 11.2561 70.2123 10.5436 69.4412C9.10208 68.0525 11.9714 66.3362 12.6834 65.4046C13.5562 64.5589 12.2048 63.2119 11.361 64.0821C9.45044 65.9221 6.7947 68.0554 9.22105 70.764C10.0804 71.6649 11.1165 72.7803 12.4797 72.692C14.4549 73.3255 23.3366 62.6849 24.7688 61.7332C33.9145 68.3558 39.5877 59.0187 45.5143 53.4224C47.532 51.3283 44.3114 49.3048 43.0837 47.9011ZM21.268 44.1519L28.7924 36.5826C28.9644 36.4542 29.0565 36.4544 29.2285 36.5826L31.6618 39.0372C31.7805 39.1572 31.7807 39.3514 31.6623 39.4705L24.9652 46.2026C23.5891 47.5922 23.2418 49.6829 24.0224 51.4207L20.5913 54.8517C18.1561 51.6724 18.3857 47.0568 21.268 44.1519ZM44.188 52.104C39.1037 56.5795 33.9437 65.9696 26.1011 60.4008L29.5629 56.9389C31.2675 57.6553 33.3006 57.2828 34.6377 55.9362L41.3196 49.2182C41.4885 49.0878 41.5944 49.0925 41.7558 49.2182L44.1886 51.6724C44.3066 51.7914 44.3065 51.9849 44.188 52.104Z",fill:o.Colors.Black[500]}),n.default.createElement("path",{d:"M72.1978 12.9739C72.2823 11.6153 71.1761 10.5686 70.2694 9.71528C69.0739 8.46942 66.923 8.46942 65.7274 9.71528L55.6903 19.7525C46.4529 13.133 40.7989 22.3179 34.769 27.9611C32.724 30.094 35.9729 32.0722 37.2271 33.4855C38.0737 34.3237 39.45 34.3228 40.2949 33.4826L47.024 26.7884C47.6724 26.1462 48.5746 25.8772 49.4344 26.0086C47.5778 27.5827 46.3213 29.6113 48.2444 31.7406C50.618 34.4879 52.6359 34.2351 54.9272 31.5747C55.0105 32.3773 54.7353 33.1978 54.1228 33.8061L47.4046 40.4882C45.3593 42.6208 48.6066 44.5977 49.8608 46.0108C50.7069 46.8503 52.0829 46.8493 52.928 46.0089L60.5093 38.4726C63.0035 36.0006 64.0028 32.3596 63.1173 28.9705C62.9867 28.4708 62.4758 28.1714 61.9761 28.302C61.4764 28.4326 61.1771 28.9436 61.3076 29.4432C63.4381 35.4704 54.8605 40.9098 51.6094 44.6828C51.4904 44.801 51.2969 44.801 51.1778 44.6829L48.7242 42.2506C48.5981 42.089 48.5933 41.9835 48.7237 41.8142L55.4413 35.1328C56.7884 33.7951 57.1608 31.762 56.4445 30.0575C57.2067 28.7785 73.2783 14.5659 72.1978 12.9739ZM45.7066 25.4608L38.976 32.1564C38.8569 32.2748 38.6625 32.2747 38.5433 32.1566L36.0885 29.7228C35.96 29.551 35.9599 29.4588 36.0879 29.2869L43.6569 21.7627C46.5623 18.8797 51.1781 18.6502 54.3572 21.0854L50.9262 24.5165C49.1884 23.7358 47.0975 24.0833 45.7066 25.4608ZM69.9345 13.9223L52.4513 31.4055C52.1981 31.6589 51.8611 31.7984 51.5028 31.7984C50.7494 31.8835 50.0577 30.8369 49.5668 30.4179C49.0467 29.9185 49.0461 29.0204 49.5669 28.5211L67.05 11.038C67.549 10.5175 68.4478 10.5175 68.9467 11.038C69.7184 11.7505 70.9936 12.8681 69.9345 13.9223Z",fill:o.Colors.Black[500]}),n.default.createElement("path",{d:"M20.2025 31.5112L22.9347 32.5447C23.405 32.7265 23.9579 32.4889 24.1401 32.001C24.3228 31.518 24.0794 30.9782 23.5964 30.7955L20.8642 29.762C19.7369 29.316 19.0605 31.0985 20.2025 31.5112Z",fill:o.Colors.Red[400]}),n.default.createElement("path",{d:"M26.4211 27.1377C27.2559 28.0175 28.6201 26.6869 27.7592 25.8308C27.7594 25.8308 25.6346 23.655 25.6346 23.655C25.2738 23.2855 24.6817 23.2784 24.312 23.6393C23.9426 24.0002 23.9355 24.5922 24.2963 24.9618L26.4211 27.1377Z",fill:o.Colors.Red[400]}),n.default.createElement("path",{d:"M31.5609 23.5214C31.8595 24.7041 33.6946 24.2097 33.3693 23.0448L32.613 20.1752C32.4814 19.6758 31.9699 19.3776 31.4705 19.5093C30.9711 19.6409 30.6729 20.1524 30.8046 20.6517L31.5609 23.5214Z",fill:o.Colors.Red[400]})),n.default.createElement("rect",{x:"48",y:"49.25",width:"32",height:"32",rx:"16",fill:o.Colors.Red[400]}),n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M53.8461 65.25C53.8461 59.6422 58.3922 55.0961 64 55.0961C69.6078 55.0961 74.1538 59.6422 74.1538 65.25C74.1538 66.8763 73.7714 68.4133 73.0917 69.776L74.5134 71.0397C75.4608 69.323 75.9999 67.3494 75.9999 65.25C75.9999 58.6226 70.6274 53.25 64 53.25C57.3726 53.25 52 58.6226 52 65.25C52 71.8774 57.3726 77.2499 64 77.2499C65.3687 77.2499 66.6839 77.0208 67.9092 76.5987L66.934 74.9734C66.0051 75.2533 65.0201 75.4038 64 75.4038C58.3922 75.4038 53.8461 70.8578 53.8461 65.25Z",fill:o.Colors.White}),n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M68.3164 74.4434C69.9745 73.6636 71.3873 72.4485 72.4076 70.9453L73.7975 72.1808C72.6397 73.8145 71.0835 75.1459 69.2706 76.0336L68.3164 74.4434Z",fill:o.Colors.White}),n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M68.4036 68.4026L65.2512 65.2502L68.4037 62.0976L67.1523 60.8462L63.9998 63.9987L60.6255 60.6243L59.374 61.8758L62.7484 65.2502L59.3742 68.6244L60.6256 69.8759L63.9998 66.5016L67.1521 69.654L68.4036 68.4026Z",fill:o.Colors.White}),n.default.createElement("defs",null,n.default.createElement("clipPath",{id:"clip0"},n.default.createElement("rect",{width:"64",height:"64",fill:o.Colors.White,transform:"translate(8.25 8.75)"}))))};const s=i.default(a.Icon)`
  margin-bottom: 8px;
`},57548:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.FounderMemberIcon=void 0;const n=r(t(2784)),i=t(78777),o=t(70305);A.FounderMemberIcon=function(){return n.default.createElement(o.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("circle",{className:"memberCircle",cx:"8",cy:"8",r:"7.5",stroke:i.Colors.Blue[50]}),n.default.createElement("path",{className:"memberInner",d:"M11.9026 5.15556L10.6558 6.66667L11.9026 8.17778C11.9569 8.24384 11.99 8.32234 11.9981 8.4045C12.0061 8.48666 11.9889 8.56925 11.9483 8.64303C11.9078 8.71682 11.8454 8.77889 11.7682 8.8223C11.6911 8.86572 11.6022 8.88877 11.5114 8.88889H5.64449V12H4.66666V4.44444C4.66666 4.32657 4.71817 4.21352 4.80986 4.13017C4.90155 4.04683 5.02591 4 5.15558 4C5.28524 4 5.4096 4.04683 5.50129 4.13017C5.59298 4.21352 5.64449 4.32657 5.64449 4.44444H11.5114C11.6022 4.44456 11.6911 4.46761 11.7682 4.51103C11.8454 4.55445 11.9078 4.61652 11.9483 4.6903C11.9889 4.76408 12.0061 4.84667 11.9981 4.92883C11.99 5.01099 11.9569 5.08949 11.9026 5.15556Z",fill:i.Colors.Blue[700]}))}},70305:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Icon=void 0;const n=r(t(52275));A.Icon=n.default.svg`
  height: ${e=>e.size}px;
  width: ${e=>e.size}px;
  position: relative;
`},77191:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.LoaderComponent=A.Loader=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.Loader=function(){return n.default.createElement(A.LoaderComponent,{viewBox:"0 0 24 24",fill:"none"},n.default.createElement("path",{d:"M22.9092 11.4546H18.5455C17.9431 11.4546 17.4546 11.9431 17.4546 12.5455C17.4546 13.1479 17.9431 13.6364 18.5455 13.6364H22.9092C23.5116 13.6364 24.0001 13.1479 24.0001 12.5455C24.0001 11.9431 23.5117 11.4546 22.9092 11.4546Z",fill:o.Colors.Black[500]}),n.default.createElement("path",{d:"M18.9423 4.06013L15.8566 7.14579C15.4306 7.57171 15.4306 8.26246 15.8566 8.6885C16.0696 8.90158 16.3488 9.00811 16.6279 9.00811C16.9072 9.00811 17.1864 8.90169 17.3994 8.6885L20.485 5.60285C20.9111 5.17692 20.9111 4.48617 20.485 4.06013C20.0591 3.63409 19.3683 3.63409 18.9423 4.06013Z",fill:o.Colors.Black[500]}),n.default.createElement("path",{opacity:"0.9",d:"M12.0001 0.54541C11.3977 0.54541 10.9092 1.03389 10.9092 1.63632V5.99998C10.9092 6.60242 11.3977 7.0909 12.0001 7.0909C12.6025 7.0909 13.091 6.60242 13.091 5.99998V1.63632C13.091 1.03389 12.6025 0.54541 12.0001 0.54541Z",fill:o.Colors.Black[500]}),n.default.createElement("path",{opacity:"0.8",d:"M5.05756 4.06013C4.63163 3.63409 3.94088 3.63409 3.51484 4.06013C3.0888 4.48617 3.0888 5.17681 3.51484 5.60285L6.60038 8.6885C6.81335 8.90158 7.09257 9.00811 7.3718 9.00811C7.65091 9.00811 7.93025 8.90158 8.1431 8.6885C8.56914 8.26258 8.56914 7.57182 8.1431 7.14579L5.05756 4.06013Z",fill:o.Colors.Black[500]}),n.default.createElement("path",{opacity:"0.7",d:"M5.45457 11.4546H1.09091C0.488476 11.4546 0 11.9431 0 12.5455C0 13.1479 0.488476 13.6364 1.09091 13.6364H5.45457C6.05701 13.6364 6.54549 13.1479 6.54549 12.5455C6.54549 11.9431 6.05701 11.4546 5.45457 11.4546Z",fill:o.Colors.Black[500]}),n.default.createElement("path",{opacity:"0.5",d:"M6.5999 16.4024L3.51435 19.4881C3.08831 19.9141 3.08831 20.6047 3.51435 21.0308C3.72732 21.2437 4.00654 21.3503 4.28577 21.3503C4.56499 21.3503 4.84422 21.2437 5.05707 21.0308L8.14261 17.9451C8.56865 17.5191 8.56865 16.8285 8.14261 16.4024C7.71669 15.9764 7.02593 15.9764 6.5999 16.4024Z",fill:o.Colors.Black[500]}),n.default.createElement("path",{opacity:"0.4",d:"M11.9996 19.0909C11.3972 19.0909 10.9087 19.5794 10.9087 20.1819V22.3637C10.9087 22.9661 11.3972 23.4546 11.9996 23.4546C12.602 23.4546 13.0905 22.9661 13.0905 22.3637V20.1819C13.0905 19.5794 12.602 19.0909 11.9996 19.0909Z",fill:o.Colors.Black[500]}))},A.LoaderComponent=i.default.svg`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 24px;
  height: 24px;
  border-radius: ${o.BorderRad.round};
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
`},20625:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.NotificationIconStyles=A.NotificationIcon=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(70305);A.NotificationIcon=function(){return n.default.createElement(A.NotificationIconStyles,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M3.33336 5.33329C3.33336 2.75596 5.4227 0.666626 8.00003 0.666626C10.5774 0.666626 12.6667 2.75596 12.6667 5.33329C12.6667 7.5684 13.1447 8.95638 13.5853 9.76406C13.8065 10.1696 14.0219 10.4356 14.1715 10.5935C14.2465 10.6727 14.3054 10.7252 14.3409 10.7547C14.3586 10.7695 14.3705 10.7786 14.3757 10.7824C14.3782 10.7843 14.3791 10.7849 14.3782 10.7843L14.3754 10.7824L14.373 10.7807L14.3715 10.7797L14.3707 10.7792C14.3706 10.7791 14.3705 10.7791 14.369 10.7812L14 12H2.00003L1.63101 10.7812C1.62951 10.7791 1.62944 10.7791 1.62937 10.7792L1.62857 10.7797L1.62709 10.7807L1.62466 10.7824L1.62188 10.7843C1.62095 10.7849 1.62183 10.7843 1.62439 10.7824C1.62953 10.7786 1.64143 10.7695 1.65918 10.7547C1.69465 10.7252 1.75358 10.6727 1.82856 10.5935C1.97818 10.4356 2.19357 10.1696 2.41476 9.76406C2.85532 8.95638 3.33336 7.5684 3.33336 5.33329ZM3.43291 10.6666H12.5671C12.5164 10.5835 12.4655 10.4955 12.4148 10.4025C11.8553 9.37687 11.3334 7.76485 11.3334 5.33329C11.3334 3.49234 9.84098 1.99996 8.00003 1.99996C6.15908 1.99996 4.66669 3.49234 4.66669 5.33329C4.66669 7.76485 4.14474 9.37687 3.58529 10.4025C3.53456 10.4955 3.48363 10.5835 3.43291 10.6666Z",fill:"currentColor"}),n.default.createElement("path",{d:"M8 15.3333C6.89543 15.3333 6 14.4378 6 13.3333H7.33333C7.33333 13.7014 7.63181 13.9999 8 13.9999C8.36819 13.9999 8.66667 13.7014 8.66667 13.3333H10C10 14.4378 9.10457 15.3333 8 15.3333Z",fill:"currentColor"}))},A.NotificationIconStyles=i.default(o.Icon)``},45740:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.QuestionIcon=void 0;const n=r(t(2784)),i=t(70305);A.QuestionIcon=function(){return n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{d:"M9.55266 8.11325L10.1527 7.49991C10.5327 7.11991 10.7727 6.58658 10.7727 5.99992C10.7727 4.52658 9.57933 3.33325 8.106 3.33325C6.63266 3.33325 5.43933 4.52658 5.43933 5.99992H6.77266C6.77266 5.26658 7.37266 4.66658 8.106 4.66658C8.83933 4.66658 9.43933 5.26658 9.43933 5.99992C9.43933 6.36658 9.29266 6.69991 9.046 6.93991L8.21933 7.77991C7.73933 8.26658 7.43933 8.93324 7.43933 9.66658V9.99991H8.77266C8.77266 8.99991 9.07266 8.59991 9.55266 8.11325ZM7.43911 12.6666H8.77245V11.3333H7.43911V12.6666Z",fill:"currentColor"}))}},14478:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SuccessIcon=void 0;const n=r(t(2784)),i=t(67723),o=t(70305);A.SuccessIcon=function(){return n.default.createElement(o.Icon,{size:"24",viewBox:"0 0 24 24",fill:"none"},n.default.createElement("path",{d:"M9.66667 3.66679H10.3333V4.33346C10.3333 4.70159 10.6318 5.00012 11 5.00012C11.3682 5.00012 11.6667 4.70159 11.6667 4.33346V3.66679H12.3333C12.7015 3.66679 13 3.36826 13 3.00012C13 2.63199 12.7015 2.33346 12.3333 2.33346H11.6667V1.66679C11.6667 1.29866 11.3682 1.00012 11 1.00012C10.6318 1.00012 10.3333 1.29866 10.3333 1.66679V2.33346H9.66667C9.29847 2.33346 9 2.63199 9 3.00012C9 3.36832 9.29847 3.66679 9.66667 3.66679Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M23.3333 17.3335H22.6667V16.6668C22.6667 16.2987 22.3681 16.0001 22 16.0001C21.6319 16.0001 21.3333 16.2987 21.3333 16.6668V17.3335H20.6667C20.2985 17.3335 20 17.632 20 18.0001C20 18.3683 20.2985 18.6668 20.6667 18.6668H21.3333V19.3335C21.3333 19.7016 21.6319 20.0001 22 20.0001C22.3681 20.0001 22.6667 19.7016 22.6667 19.3335V18.6668H23.3333C23.7015 18.6668 24 18.3683 24 18.0001C24 17.632 23.7015 17.3335 23.3333 17.3335Z",fill:i.Colors.Blue[500]}),n.default.createElement("path",{d:"M5.30469 4.48157C6.08009 4.48157 6.71094 3.85073 6.71094 3.07532C6.71094 2.29991 6.08009 1.66907 5.30469 1.66907C4.52928 1.66907 3.89844 2.29991 3.89844 3.07532C3.89844 3.85073 4.52928 4.48157 5.30469 4.48157ZM5.30469 2.60657C5.56316 2.60657 5.77344 2.81685 5.77344 3.07532C5.77344 3.33379 5.56316 3.54407 5.30469 3.54407C5.04622 3.54407 4.83594 3.33379 4.83594 3.07532C4.83594 2.8169 5.04622 2.60657 5.30469 2.60657Z",fill:i.Colors.Blue[500]}),n.default.createElement("path",{d:"M21.0557 13.7842C21.0557 13.526 20.8451 13.3154 20.5869 13.3154C20.3287 13.3154 20.1182 13.526 20.1182 13.7842C20.1182 14.0424 20.3287 14.2529 20.5869 14.2529C20.8451 14.2529 21.0557 14.0423 21.0557 13.7842Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M15.7119 4.4563C15.9701 4.4563 16.1807 4.24574 16.1807 3.98755C16.1807 3.72936 15.9701 3.5188 15.7119 3.5188C15.4537 3.5188 15.2432 3.72936 15.2432 3.98755C15.2432 4.24569 15.4538 4.4563 15.7119 4.4563Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M21.2446 5.00634C20.9284 5.05486 20.7088 5.36839 20.7542 5.70674C20.7707 5.83134 20.7843 5.9524 20.7963 6.07185C20.9338 7.4375 20.7691 8.4727 20.2938 9.22662C19.7767 10.0466 18.818 10.5276 17.9083 10.4233C17.6957 10.3988 17.4864 10.3426 17.2864 10.2589C17.323 10.1914 17.3569 10.1222 17.3879 10.0518C17.5552 9.67265 17.6246 9.23629 17.5975 8.80316C17.5767 8.4727 17.4999 8.14435 17.3667 7.84436C17.1009 7.246 16.6533 6.83689 16.1062 6.69229C15.5027 6.53287 14.8372 6.9623 14.6226 7.64948C14.4826 8.09792 14.5195 8.61085 14.7323 9.17391C14.909 9.64186 15.1679 10.0644 15.4867 10.4232C15.1988 10.5874 14.8603 10.7067 14.4882 10.7696C14.1727 10.8229 13.9573 11.1399 14.0072 11.4776C14.052 11.7825 14.298 12 14.5776 12C14.6076 12 14.638 11.9976 14.6684 11.9924C15.3595 11.8756 15.977 11.6049 16.467 11.2192C16.8742 11.4498 17.321 11.6009 17.7851 11.6541C17.9115 11.6686 18.0377 11.6757 18.1639 11.6757C19.3799 11.6757 20.5622 11.0136 21.2523 9.91912C21.937 8.83314 22.1485 7.39785 21.8989 5.53136C21.8536 5.19301 21.5604 4.95782 21.2446 5.00634ZM15.7195 8.04183C15.743 7.96671 15.8079 7.9082 15.8397 7.89723C16.1082 7.9738 16.257 8.22914 16.3222 8.37599C16.4826 8.73691 16.4904 9.18729 16.3422 9.52338C16.3362 9.53708 16.3299 9.55079 16.3234 9.56433C16.1031 9.31657 15.9242 9.02706 15.8044 8.70982C15.6993 8.4316 15.67 8.20061 15.7195 8.04183Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M18.9031 14.9377C18.9031 14.4492 18.5117 14.0533 18.0288 14.0533C17.5458 14.0533 17.1543 14.4492 17.1543 14.9377C17.1543 15.4261 17.5458 15.822 18.0288 15.822C18.5117 15.822 18.9031 15.4261 18.9031 14.9377Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M12.6541 8.4223C12.6541 7.93396 12.2626 7.53809 11.7796 7.53809C11.2968 7.53809 10.9053 7.93396 10.9053 8.4223C10.9053 8.91064 11.2968 9.30652 11.7796 9.30652C12.2626 9.30652 12.6541 8.91064 12.6541 8.4223Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M20.2109 3.8891C20.2109 3.40076 19.8193 3.00488 19.3364 3.00488C18.8534 3.00488 18.4619 3.40076 18.4619 3.8891C18.4619 4.37762 18.8534 4.7735 19.3364 4.7735C19.8193 4.7735 20.2109 4.37762 20.2109 3.8891Z",fill:i.Colors.Black[900]}),n.default.createElement("path",{d:"M7.08999 6.49108C6.82742 6.20489 6.38265 6.18566 6.09646 6.44805C5.81027 6.71062 5.79122 7.15538 6.05361 7.44158L6.32937 7.74224L0.164758 22.034C-0.0600956 22.5556 0.0413448 23.1374 0.429528 23.5521C0.703088 23.8441 1.06838 23.9996 1.44778 23.9996C1.6069 23.9996 1.76876 23.9721 1.92696 23.9159L16.4348 18.7591L16.636 18.9785C16.7748 19.1297 16.9643 19.2063 17.1544 19.2063C17.3243 19.2063 17.4944 19.1451 17.6295 19.0213C17.9157 18.7588 17.9348 18.314 17.6724 18.028L7.08999 6.49108ZM6.52438 20.7894L4.41024 15.7419L6.37606 11.1846L9.89663 19.5908L6.52438 20.7894ZM1.45602 22.5908L3.6368 17.5351L5.19723 21.2611L1.45602 22.5908ZM11.2236 19.1191L7.1495 9.39146L7.36776 8.88573L15.3944 17.6365L11.2236 19.1191Z",fill:i.Colors.Black[900]}))}},85249:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferIcon=void 0;const n=r(t(2784)),i=t(70305);A.TransferIcon=function(){return n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.01061 8.34823L5.31143 9.82643L4.61945 10.9626L1.33337 8.85138L1.38734 7.68413L13.7408 1.33325L14.6667 2.09081L11.7309 14.4869L10.7512 14.8967L7.67263 12.9206L6.09552 15.3683L4.89904 14.9986V11.9833H6.20386V12.7718L6.93528 11.6366L7.82513 11.4382L10.6765 13.2685L13.0662 3.17867L3.01061 8.34823Z",fill:"currentColor"}),n.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1579 5.80433L7.28517 11.1581L6.24561 10.196L10.1183 4.84229L11.1579 5.80433Z",fill:"currentColor"}))}},40443:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.VerifiedMemberIcon=void 0;const n=r(t(2784)),i=t(78777),o=t(70305);A.VerifiedMemberIcon=function(){return n.default.createElement(o.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("circle",{className:"memberCircle",cx:"8",cy:"8",r:"7.5",stroke:i.Colors.Blue[50]}),n.default.createElement("path",{className:"memberInner",d:"M12.8889 5.30975L6.72039 11.6668L3.11112 8.44931L4.20173 7.39713L6.63848 9.56941L11.7191 4.3335L12.8889 5.30975Z",fill:i.Colors.Blue[700]}))}},64261:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WaitingIcon=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(70305);A.WaitingIcon=function(){return n.default.createElement(s,{width:"132",height:"108",viewBox:"0 0 132 108",fill:"none"},n.default.createElement("rect",{x:"11",width:"108",height:"108",rx:"54",fill:o.Colors.Black[700]}),n.default.createElement("path",{d:"M67.9276 79.837C65.9311 79.8425 63.9346 79.8468 61.9381 79.85C61.2671 79.8511 60.5961 79.852 59.9252 79.8524C58.7093 79.8533 57.8901 79.6044 57.6177 78.2404C57.3874 77.0871 55.7878 77.2421 55.4769 78.2404C54.7088 80.7065 53.4383 79.7403 52.7266 78.0814C52.0166 76.4265 51.8346 74.5743 51.5245 72.8131C51.2966 71.5189 49.3775 71.8817 49.344 73.1141C49.2999 74.737 49.1513 76.3341 48.7474 77.9081C48.3308 79.5321 47.7063 81.0928 47.0864 82.6445C46.5461 83.9972 48.6949 84.5791 49.2272 83.2465C49.7765 81.8716 50.3265 80.4892 50.7359 79.0629C51.4967 80.9287 53.0706 83.0391 55.3134 81.7954C55.7306 81.564 56.1203 81.235 56.4624 80.8514C57.6287 82.226 59.3647 82.1177 60.9891 82.1157C63.302 82.1127 65.615 82.1075 67.9279 82.1014C69.3561 82.0976 69.3587 79.8332 67.9276 79.837Z",fill:o.Colors.White}),n.default.createElement("path",{d:"M38.0703 104L50.4233 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M34.1177 104L46.4706 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M42.0234 104L54.3764 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M45.9766 104L58.3295 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M49.9297 104L62.2826 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M53.8828 104L66.2358 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M57.835 104L70.1879 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M61.7881 104L74.141 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M65.7412 104L78.0942 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M69.6943 104L82.0473 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M73.647 104L85.9999 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M77.6001 104L89.953 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M81.5527 104L93.9057 91.6268",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M15.8359 12.439L5.68408 22.6074",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M11.8824 12.439L2 22.3375",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M17.1096 15.1222L9.54346 22.7007",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M18.8 17.3882L13.3647 22.8324",stroke:o.Colors.Blue[500],strokeWidth:"0.5"}),n.default.createElement("path",{d:"M10.8941 12.439C4.17412 12.439 2.16471 19.038 2 22.3375H19.7882M10.8941 12.439C17.6141 12.439 54.2118 12.439 71.6706 12.439C74.3059 12.6039 79.5765 14.8146 79.5765 22.3375C79.5765 24.6393 79.5765 30.1197 79.5765 37.1852M10.8941 12.439C18.0094 12.439 19.7882 19.038 19.7882 22.3375M79.5765 91.132H93.9059C93.2471 95.4213 89.4588 104 79.5765 104C71.2504 104 46.4394 104 29.6706 104M79.5765 91.132C79.5765 84.817 79.5765 77.2469 79.5765 68.3261M79.5765 91.132H40.5412C40.5412 102.614 32.6353 104 29.6706 104M19.7882 22.3375V45.5989C19.7882 45.5989 19.7882 55.2515 19.7882 61.4365C19.7882 71.8736 19.7882 88.1624 19.7882 88.1624V91.132C19.7882 101.426 26.3765 104 29.6706 104M32.6353 28.7715H67.2235M32.6353 40.1547H67.2235M32.6353 51.0431H67.2235M32.6353 62.4263H53.3882M79.5765 37.1852L75.6235 44.1141L77.1059 55.0025L72.6588 51.0431C69.5294 55.4974 65.1482 65.7918 72.6588 71.335M79.5765 37.1852L91.4353 16.8933C96.0471 9.46943 109.816 -2.60673 128 8.47958C119.699 19.5659 98.1882 47.7436 88.4706 60.4466C86.6588 63.0862 80.96 68.9593 72.6588 71.335M72.6588 71.335C69.4965 77.2741 68.0471 80.4086 67.7176 81.2335L72.6588 71.335ZM72.6588 71.335C83.5294 55.0025 106.654 21.0507 112.188 15.9034",stroke:o.Colors.Blue[500],strokeWidth:"3"}))};const s=i.default(a.Icon)`
  margin-bottom: 8px;
`},79530:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(84952),A),n(t(35891),A),n(t(38234),A),n(t(40894),A),n(t(88001),A),n(t(10628),A),n(t(70305),A),n(t(77191),A),n(t(45740),A),n(t(14478),A),n(t(85249),A)},78478:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.EditSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.EditSymbol=function(){return n.default.createElement(a,{viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{className:"primaryPart",d:"M10.9564 8.37713L7.62305 5.0438L8.37729 4.28955L11.7106 7.62288L10.9564 8.37713Z",fill:o.Colors.Blue[500]}),n.default.createElement("path",{className:"blackPart",d:"M2.96633 10.0354L2.63315 13.3672L5.96494 13.034L13.8657 5.13331L10.867 2.1347L2.96633 10.0354ZM2.02191 9.37706L10.4664 0.932617H11.2677L15.0677 4.73262V5.534L6.62329 13.9784L6.27899 14.1416L2.05676 14.5638L1.43652 13.9436L1.85875 9.72137L2.02191 9.37706Z",fill:o.Colors.Black[900]}))};const a=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${o.Colors.Black[900]};
    transition: ${o.Transitions.all};
  }
  .primaryPart {
    fill: ${o.Colors.Blue[500]};
    transition: ${o.Transitions.all};
  }
`},39119:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.FailureSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.FailureSymbol=function(){return n.default.createElement(a,{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{className:"blackPart",d:"M1.84615 12C1.84615 6.39216 6.39216 1.84615 12 1.84615C17.6078 1.84615 22.1538 6.39216 22.1538 12C22.1538 13.6263 21.7714 15.1633 21.0917 16.526L22.5134 17.7897C23.4608 16.073 23.9999 14.0994 23.9999 12C23.9999 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 23.9999 12 23.9999C13.3687 23.9999 14.6839 23.7708 15.9092 23.3487L14.934 21.7234C14.0051 22.0033 13.0201 22.1538 12 22.1538C6.39216 22.1538 1.84615 17.6078 1.84615 12Z",fill:o.Colors.Black[900]}),n.default.createElement("path",{className:"primaryPart",d:"M16.3162 21.1934C17.9742 20.4136 19.3871 19.1985 20.4073 17.6953L21.7973 18.9308C20.6394 20.5645 19.0833 21.8959 17.2703 22.7836L16.3162 21.1934Z",fill:o.Colors.Blue[500]}),n.default.createElement("path",{className:"blackPart",d:"M16.4038 15.1526L13.2515 12.0002L16.404 8.8476L15.1525 7.59616L12 10.7487L8.62571 7.37433L7.37427 8.62577L10.7486 12.0002L7.37443 15.3744L8.62587 16.6259L12 13.2516L15.1524 16.404L16.4038 15.1526Z",fill:o.Colors.Black[900]}))};const a=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${o.Colors.Black[900]};
    transition: ${o.Transitions.all};
  }
  .primaryPart {
    fill: ${o.Colors.Blue[500]};
    transition: ${o.Transitions.all};
  }
`},70245:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.HomeSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.HomeSymbol=function(){return n.default.createElement(a,{viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{className:"blackPart",d:"M2.19526 6.86165L7.5286 1.52832H8.4714L13.8047 6.86165L14 7.33306V13.9997L13.3333 14.6664H2.66667L2 13.9997V7.33306L2.19526 6.86165ZM3.33333 7.6092V13.3331H12.6667V7.6092L8 2.94253L3.33333 7.6092Z",fill:o.Colors.Black[900]}),n.default.createElement("path",{className:"primaryPart",d:"M5.33337 7.33301H10.6667V11.9997H9.33337V8.66634H6.66671V11.9997H5.33337V7.33301Z",fill:o.Colors.Blue[500]}))};const a=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${o.Colors.Black[900]};
    transition: ${o.Transitions.all};
  }
  .primaryPart {
    fill: ${o.Colors.Blue[500]};
    transition: ${o.Transitions.all};
  }
`},95852:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.LinkSymbolStyle=A.LinkSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.LinkSymbol=function(){return n.default.createElement(A.LinkSymbolStyle,{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{className:"blackPart",d:"M1.1001 3.99998L2.0001 3.09998H12.8001V4.89998H2.9001V21.1H19.1001V11.2H20.9001V22L20.0001 22.9H2.0001L1.1001 22V3.99998Z",fill:o.Colors.Black[900]}),n.default.createElement("path",{className:"primaryPart",d:"M15.4999 1.09998H21.9999L22.8999 1.99998V8.49998H21.0999V4.17277L10.6363 14.6364L9.36353 13.3636L19.8271 2.89998H15.4999V1.09998Z",fill:o.Colors.Blue[500]}))},A.LinkSymbolStyle=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${o.Colors.Black[900]};
    transition: ${o.Transitions.all};
  }
  .primaryPart {
    fill: ${o.Colors.Blue[500]};
    transition: ${o.Transitions.all};
  }
`},68873:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SuccessSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.SuccessSymbol=function(){return n.default.createElement(a,{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{className:"blackPart",d:"M12 1.84615C6.39216 1.84615 1.84615 6.39216 1.84615 12C1.84615 17.6078 6.39216 22.1538 12 22.1538C17.6078 22.1538 22.1538 17.6078 22.1538 12C22.1538 6.39216 17.6078 1.84615 12 1.84615ZM0 12C0 5.37256 5.37256 0 12 0C18.6274 0 23.9999 5.37256 23.9999 12C23.9999 18.6274 18.6274 23.9999 12 23.9999C5.37256 23.9999 0 18.6274 0 12Z",fill:o.Colors.Black[900]}),n.default.createElement("path",{className:"primaryPart",d:"M17.734 8.60827L10.4977 16.6497L6.26367 12.5797L7.54306 11.2487L10.4016 13.9965L16.3616 7.37335L17.734 8.60827Z",fill:o.Colors.Blue[500]}))};const a=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${o.Colors.Black[900]};
    transition: ${o.Transitions.all};
  }
  .primaryPart {
    fill: ${o.Colors.Blue[500]};
    transition: ${o.Transitions.all};
  }
`},21790:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferSymbol=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.TransferSymbol=function(){return n.default.createElement(a,{viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},n.default.createElement("path",{className:"blackPart",d:"M3.01061 8.34823L5.31143 9.82643L4.61945 10.9626L1.33337 8.85138L1.38734 7.68413L13.7408 1.33325L14.6667 2.09081L11.7309 14.4869L10.7512 14.8967L7.67263 12.9206L6.09552 15.3683L4.89904 14.9986V11.9833H6.20386V12.7718L6.93528 11.6366L7.82513 11.4382L10.6765 13.2685L13.0662 3.17867L3.01061 8.34823Z",fill:o.Colors.Black[900]}),n.default.createElement("path",{className:"primaryPart",d:"M11.1579 5.80433L7.28517 11.1581L6.24561 10.196L10.1183 4.84229L11.1579 5.80433Z",fill:o.Colors.Blue[500]}))};const a=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${o.Colors.Black[900]};
    transition: ${o.Transitions.all};
  }
  .primaryPart {
    fill: ${o.Colors.Blue[500]};
    transition: ${o.Transitions.all};
  }
`},96528:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AddMembershipButton=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(15689),a=t(66337),s=t(59686);A.AddMembershipButton=({className:e})=>{const[A,t]=o.useToggle();return n.default.createElement(n.default.Fragment,null,n.default.createElement(u,{onClick:t,className:e},"Create a membership"),A&&n.default.createElement(a.AddMembershipModal,{onClose:t}))};const u=i.default(s.ButtonPrimary)`
  grid-area: memberaccount;
  justify-self: center;
  align-self: center;
`},75270:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AddMembershipButtonSwitch=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(72433),s=t(64342);A.AddMembershipButtonSwitch=({onClick:e})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(d,{onClick:e},n.default.createElement(u,null,n.default.createElement(a.MyProfileIcon,null)),n.default.createElement(c,null,"New Member"),n.default.createElement(l,{size:3},"Create a New Membership")));const u=i.default.span`
  display: flex;
  grid-area: createicon;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: ${o.BorderRad.round};
  background-color: ${o.Colors.Black[700]};
  color: ${o.Colors.Black[75]};
  transition: ${o.Transitions.all};

  .nav-icon {
    .whitePart {
      transition: ${o.Transitions.all};
    }
    .primaryPart {
      fill: ${o.Colors.Blue[500]};
      transition: ${o.Transitions.all};
    }
  }
`,c=i.default.h6`
  grid-area: createtitle;
  color: ${o.Colors.Black[75]};
  transition: ${o.Transitions.all};
`,l=i.default(s.Text)`
  grid-area: createtext;
  color: ${o.Colors.Black[400]};
  transition: ${o.Transitions.all};
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
  border-radius: ${o.BorderRad.s};
  transition: ${o.Transitions.all};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${o.Colors.Black[600]};

    ${u} {
      background-color: ${o.Colors.Black[500]};
      color: ${o.Colors.Black[50]};
    }
    ${c} {
      color: ${o.Colors.Black[50]};
    }
    ${l} {
      color: ${o.Colors.Black[300]};
    }
  }
`},24619:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MemberDarkHover=A.MemberInfoWrap=A.MemberRole=A.MemberRoles=A.MemberIcons=A.MemberHandle=A.MemberInfo=void 0;const a=o(t(2784)),s=i(t(52275)),u=t(67723),c=t(26812),l=t(57548),d=t(40443),f=t(64342);A.MemberInfo=a.default.memo((({member:e,onClick:t,isOnDark:r,showId:n,memberSize:i})=>a.default.createElement(A.MemberInfoWrap,{isOnDark:r,memberSize:i},a.default.createElement(h,null,a.default.createElement(c.Avatar,{avatarURI:e.avatarURI})),a.default.createElement(A.MemberHandle,{onClick:t},e.handle),a.default.createElement(A.MemberIcons,null,e.isVerified&&a.default.createElement(d.VerifiedMemberIcon,null),e.isFoundingMember&&a.default.createElement(l.FounderMemberIcon,null)),!n&&a.default.createElement(A.MemberRoles,null,a.default.createElement(A.MemberRole,null,"LI")),n&&a.default.createElement(g,{size:3},"Worker ID: ",e.id)))),A.MemberHandle=s.default.span`
  grid-area: memberhandle;
  max-width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  font-family: ${u.Fonts.Grotesk};
  color: ${u.Colors.Black[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: ${u.Transitions.all};

  &:hover {
    color: ${u.Colors.Black[700]};
  }
`,A.MemberIcons=s.default.div`
  display: grid;
  grid-area: membericons;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin-left: -4px;
`,A.MemberRoles=s.default.div`
  display: grid;
  grid-area: memberroles;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
`,A.MemberRole=s.default.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: ${u.BorderRad.round};
  background-color: ${u.Colors.Black[100]};
  font-size: 6px;
  line-height: 1;
  font-family: ${u.Fonts.Inter};
  font-weight: 700;
  color: ${u.Colors.Black[600]};
  text-transform: uppercase;
`;const g=s.default(f.Text)`
  grid-area: memberroles;
  color: ${u.Colors.Black[400]};
`,h=s.default.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  grid-area: memberphoto;

  ${c.AvatarImg} {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,p=s.css`
  ${A.MemberHandle} {
    color: ${u.Colors.Black[75]};
  }
  ${A.MemberIcons} {
    .memberCircle {
      stroke: ${u.Colors.Blue[500]};
      transition: ${u.Transitions.all};
    }
    .memberInner {
      fill: ${u.Colors.Blue[500]};
      transition: ${u.Transitions.all};
    }
  }
  ${A.MemberRole} {
    color: ${u.Colors.Black[300]};
    background-color: ${u.Colors.Black[600]};
    transition: ${u.Transitions.all};
  }
`,m=s.css`
  grid-template-columns: 80px auto 1fr;
  grid-template-rows: 36px 38px;
  grid-column-gap: 12px;
  grid-row-gap: 6px;
`,I=s.css`
  grid-template-columns: 40px auto 1fr;
  grid-template-rows: 20px 16px;
  grid-column-gap: 8px;
  grid-row-gap: 4px;
`;A.MemberInfoWrap=s.default.div`
  display: grid;

  grid-template-areas:
    'memberphoto memberhandle membericons'
    'memberphoto memberroles memberroles';
  align-items: center;
  width: 100%;
  justify-self: start;
  border-radius: ${u.BorderRad.s};
  transition: ${u.Transitions.all};

  ${h} {
    width: ${({memberSize:e})=>{switch(e){case"l":return"80px";case"m":default:return"40px"}}};
    height: ${({memberSize:e})=>{switch(e){case"l":return"80px";case"m":default:return"40px"}}};
  }

  ${A.MemberRoles} {
    align-self: ${({memberSize:e})=>{switch(e){case"l":return"start";case"m":default:return"center"}}};
  }

  ${A.MemberRole} {
    width: ${({memberSize:e})=>{switch(e){case"l":return"24px";case"m":default:return"16px"}}};
    height: ${({memberSize:e})=>{switch(e){case"l":return"24px";case"m":default:return"16px"}}};
    font-size: ${({memberSize:e})=>{switch(e){case"l":return"10px";case"m":default:return"6px"}}};
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

  ${({isOnDark:e})=>!0===e&&p}

  ${({memberSize:e})=>{switch(e){case"l":return m;case"m":default:return I}}}
`,A.MemberDarkHover=s.css`
  ${A.MemberInfoWrap} {
    ${A.MemberHandle} {
      color: ${u.Colors.Black[50]};
    }
    ${A.MemberIcons} {
      .memberCircle {
        stroke: ${u.Colors.Blue[400]};
      }
      .memberInner {
        fill: ${u.Colors.Blue[400]};
      }
    }
    ${A.MemberRole} {
      color: ${u.Colors.Black[200]};
      background-color: ${u.Colors.Black[500]};
    }
  }
`},80132:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MemberDetails=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(3100),a=t(67723),s=t(27609),u=t(59686),c=t(81328),l=t(33702),d=t(21790),f=t(64342),g=t(84124),h=t(24619),p=t(16185);A.MemberDetails=({member:e})=>{const{data:A,loading:t}=o.useGetMemberQuery({variables:{id:e.id}});if(t||!A||!A.member)return n.default.createElement(p.EmptyBody,null,"Loading...");const r=A.member.registeredAtBlock;return n.default.createElement(m,null,n.default.createElement(I,null,n.default.createElement(g.MembershipLabel,{text:"About"}),n.default.createElement(y,{size:2},(null==e?void 0:e.about)||"")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Registered on"}),n.default.createElement(E,null,n.default.createElement(y,{size:2},s.formatDateString(r.timestamp)),n.default.createElement(C,null,n.default.createElement(l.BlockIcon,null),n.default.createElement(v,null,s.formatTokenValue(r.height)),n.default.createElement(b,{size:3},"on ",r.network," network")))),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Member ID"}),n.default.createElement(y,{size:2},null==e?void 0:e.id)),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Invitations Left"}),n.default.createElement(Q,null,n.default.createElement(y,{size:2},null==e?void 0:e.inviteCount),n.default.createElement(u.ButtonGhostSmall,null,n.default.createElement(d.TransferSymbol,null),"Transfer Invites"))),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Invited"}),n.default.createElement(E,null,(A.member.invitees||[]).map((e=>n.default.createElement(h.MemberInfo,{member:e,key:e.handle}))))),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Hired"}),n.default.createElement(y,{size:2},"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Applied"}),n.default.createElement(y,{size:2},"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Being A leader"}),n.default.createElement(y,{size:2},"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Being Council Member"}),n.default.createElement(y,{size:2},"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Slashed"}),n.default.createElement(y,{size:2},"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Terminated"}),n.default.createElement(y,{size:2},"-"," times")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Initiating leaving"}),n.default.createElement(y,{size:2},"-")),n.default.createElement(B,null,n.default.createElement(g.MembershipLabel,{text:"Blog posts"}),n.default.createElement(y,{size:2},"-")))};const m=i.default.ul`
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
`,I=i.default.li`
  display: grid;
  grid-row-gap: 8px;
  width: 100%;
  height: fit-content;
`,B=i.default.li`
  display: grid;
  grid-template-columns: 168px 1fr;
  grid-column-gap: 24px;
`,y=i.default(f.Text)`
  color: ${a.Colors.Black[600]};
`,E=i.default.div`
  display: grid;
  grid-row-gap: 4px;
  width: 100%;
  height: fit-content;
`,C=i.default.span`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  height: fit-content;
  color: ${a.Colors.Black[400]};
`,b=i.default(f.Text)`
  color: ${a.Colors.Black[400]};
`,v=i.default(c.LabelLink)`
  font-size: inherit;
  line-height: inherit;
`,Q=i.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`},16185:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.EmptyBody=A.SidePaneGlass=A.MemberProfile=void 0;const a=i(t(2784)),s=o(t(52275)),u=t(67723),c=t(59686),l=t(78478),d=t(18823),f=t(86243),g=t(24619),h=t(80132);A.MemberProfile=({onClose:e,member:t})=>{const[r,n]=a.useState("DETAILS");return a.default.createElement(A.SidePaneGlass,{member:t,onClick:A=>{A.target===A.currentTarget&&e()},onClose:e},a.default.createElement(p,null,a.default.createElement(m,null,a.default.createElement(d.CloseSmallModalButton,{onClick:e}),a.default.createElement(I,null,"My Profile"),a.default.createElement(g.MemberInfo,{member:t,memberSize:"l"}),a.default.createElement(f.PageTabsNav,null,a.default.createElement(f.PageTab,{active:"DETAILS"===r,onClick:()=>n("DETAILS")},"Member details"),a.default.createElement(f.PageTab,{active:"ACCOUNTS"===r,onClick:()=>n("ACCOUNTS")},"Accounts"),a.default.createElement(f.PageTab,{active:"ROLES"===r,onClick:()=>n("ROLES")},"Roles"))),a.default.createElement(B,null,"DETAILS"===r&&a.default.createElement(h.MemberDetails,{member:t}),"ACCOUNTS"===r&&a.default.createElement(A.EmptyBody,null,"Accounts"),"ROLES"===r&&a.default.createElement(A.EmptyBody,null,"Roles")),a.default.createElement(y,null,a.default.createElement(c.ButtonGhostMedium,null,a.default.createElement(l.EditSymbol,null),"Edit My Profile"))))},A.SidePaneGlass=s.default.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${u.Colors.Black[700.85]};
  color: ${u.Colors.Black[900]};
  z-index: 100000;
  ${u.Animations.showModalBackground};
`;const p=s.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(auto, 200px) 1fr 72px;
  grid-template-areas:
    'sidepaneheader'
    'sidepanebody'
    'sidepanefooter';
  grid-area: modal;
  position: relative;
  background-color: ${u.Colors.White};
  width: 100%;
  max-width: 552px;
  height: 100vh;
  overflow: hidden;
  ${u.Animations.showSidePane};
`,m=s.default.div`
  display: grid;
  grid-area: sidepaneheader;
  grid-row-gap: 24px;
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 200px;
  padding: 24px 24px 0;
  background-color: ${u.Colors.White};
`,I=s.default.h4`
  line-height: 24px;
`,B=s.default.div`
  display: flex;
  grid-area: sidepanebody;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: ${u.Colors.Black[50]};
  border-top: 1px solid ${u.Colors.Black[200]};
  border-bottom: 1px solid ${u.Colors.Black[200]};
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;A.EmptyBody=s.default.div`
  padding: 24px;
`;const y=s.default.div`
  display: grid;
  grid-area: sidepanefooter;
  position: relative;
  justify-items: end;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 72px;
  padding: 16px 24px;
  background-color: ${u.Colors.White};
`},63486:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(16185),A),n(t(80132),A)},6315:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Memberships=A.MembershipsCount=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(12987),s=t(64342);A.MembershipsCount=()=>{const{count:e}=a.useMembership();return n.default.createElement(A.Memberships,null,"Memberships ",n.default.createElement(u,null,e))},A.Memberships=i.default.span`
  display: inline-flex;
  position: relative;
  align-items: center;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${o.Colors.Black[400]};
`;const u=i.default(s.Badge)`
  position: absolute;
  right: -24px;
`},916:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionListMember=void 0;const n=r(t(2784)),i=t(13682),o=t(17721);A.OptionListMember=n.default.memo((({options:e,onChange:A})=>n.default.createElement(i.OptionsListComponent,null,e.map((e=>n.default.createElement(i.Option,{key:e.handle,onClick:()=>A&&A(e)},n.default.createElement(o.OptionMember,{member:e})))))))},17721:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionMember=void 0;const n=r(t(2784)),i=t(24619);A.OptionMember=({member:e})=>n.default.createElement(i.MemberInfo,{member:e})},70335:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.SelectMember=A.filterMember=void 0;const o=i(t(2784)),a=t(12987),s=t(15689),u=t(9398),c=t(79530),l=t(13682),d=t(24619),f=t(916);A.filterMember=e=>e?A=>A.handle!==e.handle:()=>!0,A.SelectMember=o.default.memo((({onChange:e,filter:A,selected:t,disabled:r})=>{const{isLoading:n,members:i}=a.useMembership(),[g,h]=s.useToggle(),[p,m]=o.useState(t),I=o.useRef(null),B=i.filter(A||(()=>!0)),y=o.useCallback((A=>{h(),m(A),e(A)}),[A,h]);return o.useEffect((()=>{const e=e=>{g&&I.current&&!e.composedPath().includes(I.current)&&h()};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[g]),o.useEffect((()=>{const e=e=>{g&&"Escape"===e.key&&h()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[g]),o.default.createElement(l.SelectComponent,{ref:I},o.default.createElement(u.Toggle,{onClick:h,isOpen:g,disabled:r},p&&o.default.createElement(l.SelectedOption,null,o.default.createElement(d.MemberInfo,{member:p})),(!p||g)&&o.default.createElement(l.EmptyOption,{type:"text",placeholder:"Select Member or type a member",autoComplete:"off",disabled:r}),o.default.createElement(u.ToggleButton,{disabled:r},o.default.createElement(c.ArrowDownIcon,null))),!n&&g&&o.default.createElement(f.OptionListMember,{onChange:y,options:B}))}))},56404:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(70335),A)},68797:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Page=void 0;const n=r(t(52275));A.Page=n.default.div`
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
`},86243:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.PageTabsNav=A.PageTab=A.PageTabs=void 0;const o=i(t(52275)),a=t(67723);A.PageTabs=o.default.div`
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
    background-color: ${a.Colors.Black[200]};
    z-index: -1;
  }
`,A.PageTab=o.default.a`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  position: relative;
  align-items: center;
  width: fit-content;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${a.Colors.Black[900]};
  text-transform: capitalize;
  cursor: pointer;
  transition: ${a.Transitions.all};
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: ${a.Colors.Blue[500]};
    transform: scaleX(0);
    transition: ${a.Transitions.all};
    animation: hideTabUnderline ${a.Transitions.duration};

    @keyframes hideTabUnderline {
      from {
        transform: scaleX(1);
        background: ${a.Colors.Blue[500]};
      }
      to {
        transform: scaleX(0);
      }
    }
  }

  &:hover {
    color: ${a.Colors.Blue[500]};
  }

  ${({active:e})=>e&&o.css`
      &:before {
        content: '';
        position: absolute;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background: ${a.Colors.Blue[500]};
        transform: scaleX(1);
        transition: ${a.Transitions.all};
        animation: showTabUnderline ${a.Transitions.duration};

        @keyframes showTabUnderline {
          from {
            transform: scaleX(0);
            background: ${a.Colors.Blue[500]};
          }
          to {
            transform: scaleX(1);
          }
        }
      }
    `}
`,A.PageTabsNav=o.default.nav`
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
`},31591:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SideBar=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(72433),s=t(13962),u=t(83141),c=t(70135),l=t(62551),d=t(95149);A.SideBar=()=>n.default.createElement(u.Navigation,null,n.default.createElement(c.NavigationHeader,null,n.default.createElement(s.LogoLink,null)),n.default.createElement(f,null,n.default.createElement(g,null,n.default.createElement(h,{href:"#",className:"active"},n.default.createElement(a.MyProfileIcon,null),"My profile"))),n.default.createElement(l.ProfileComponent,null),n.default.createElement(d.Version,null));const f=i.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: barlinks;
  margin: 0;
  padding: 0;
  list-style: none;
`,g=i.default.li`
  display: flex;
  flex-direction: column;
  flex-basis: 48px;
  flex-shrink: 0;
  width: 100%;
`,h=i.default.a`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 12px 12px 12px 24px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: ${o.Colors.Black[200]};
  text-transform: capitalize;
  text-decoration: none;
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

  .nav-icon {
    margin-right: 12px;
    color: ${o.Colors.Black[300]};
    transition: ${o.Transitions.all};
  }

  &.active {
    color: ${o.Colors.White};
    background-color: ${o.Colors.Black[700]};

    &:before {
      background-color: ${o.Colors.Blue[500]};
    }
  }
  &.active .nav-icon {
    color: ${o.Colors.White};
  }
`},67966:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Breadcrumbs=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(93467),a=t(49605);A.Breadcrumbs=function({crumbs:e}){return n.default.createElement(s,null,n.default.createElement(a.HomeLink,null),n.default.createElement(o.BreadcrumbsList,{crumbs:e}))};const s=i.default.nav`
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: 6px;
  left: 0;
`},10370:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.BreadcrumbsItem=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.BreadcrumbsItem=function({href:e,text:A}){return n.default.createElement(s,null,n.default.createElement(a,{href:e},A))};const a=i.default.a`
  font-size: 10px;
  line-height: 16px;
  color: ${o.Colors.Black[500]};
  transition: ${o.Transitions.all};
  text-decoration: none;
  font-family: ${o.Fonts.Inter};

  &:hover {
    color: ${o.Colors.Blue[500]};
  }
`,s=i.default.li`
  display: inline-flex;
  position: relative;
  align-items: center;
  margin-left: 26px;
  color: ${o.Colors.Black[500]};

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -16px;
    width: 4px;
    height: 4px;
    border-top: 1px solid ${o.Colors.Black[300]};
    border-right: 1px solid ${o.Colors.Black[300]};
    transform: translate(0, -50%) rotate(45deg);
  }

  &:last-child {
    color: ${o.Colors.Black[400]};
  }
`},93467:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.BreadcrumbsList=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(10370);A.BreadcrumbsList=function({crumbs:e}){return n.default.createElement(a,null,e.map((({href:e,text:A},t)=>n.default.createElement(o.BreadcrumbsItem,{key:t,href:e,text:A}))))};const a=i.default.ul`
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0;
`},49605:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.HomeLink=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(70245),a=t(67723);A.HomeLink=function(){return n.default.createElement(s,{href:"#"},n.default.createElement(o.HomeSymbol,null))};const s=i.default.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    .blackPart {
      fill: ${a.Colors.Blue[500]};
    }
    .primaryPart {
      fill: ${a.Colors.Black[900]};
    }
  }
`},88542:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CurrentMember=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(12987),s=t(15689),u=t(66337),c=t(96528),l=t(79530),d=t(24619),f=t(6315),g=t(81660);A.CurrentMember=()=>{const{count:e,members:A,active:t}=a.useMembership(),[r,i]=s.useToggle(),[o,m]=s.useToggle();return e<1?n.default.createElement(c.AddMembershipButton,null):n.default.createElement(n.default.Fragment,null,n.default.createElement(f.MembershipsCount,null),n.default.createElement(p,{onClick:i},n.default.createElement(d.MemberInfo,{member:t||A[0],isOnDark:!0}),n.default.createElement(h,null,n.default.createElement(l.ArrowDownExpandedIcon,null))),r&&n.default.createElement(g.SwitchMemberModal,{onClose:i,onCreateMember:m}),o&&n.default.createElement(u.AddMembershipModal,{onClose:m}))};const h=i.default.span`
  width: 16px;
  height: 16px;

  ${l.ArrowIcon} {
    width: 100%;
    height: 100%;
    color: ${o.Colors.Black[400]};
    transform: rotate(-90deg);
    transition: ${o.Transitions.all};
  }
`,p=i.default.div`
  display: grid;
  grid-template-columns: 1fr 16px;
  grid-column-gap: 8px;
  align-items: center;
  grid-area: memberaccount;
  padding: 12px 8px;
  background-color: ${o.Colors.Black[700]};
  border-radius: ${o.BorderRad.s};
  transition: ${o.Transitions.all};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background: ${o.Colors.Black[600]};

    ${l.ArrowIcon} {
      color: ${o.Colors.Black[75]};
    }
    ${d.MemberDarkHover}
  }
`},81660:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SwitchMemberModal=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(12987),s=t(75270),u=t(24619),c=t(6315),l=t(18823),d=t(48438);A.SwitchMemberModal=({onClose:e,onCreateMember:A})=>{const{members:t,setActive:r,active:i}=a.useMembership();return n.default.createElement(l.Modal,{modalSize:"xs",modalHeight:"s",isDark:!0,onClose:e},n.default.createElement(f,null,n.default.createElement(l.CloseSmallModalButton,{onClick:e}),n.default.createElement(g,null,"Select Membership"),n.default.createElement(c.MembershipsCount,null),n.default.createElement(p,null,t.map((A=>n.default.createElement(m,{key:A.handle,onClick:()=>(A=>{r(A),e()})(A),isMemberActive:(null==i?void 0:i.handle)===A.handle},n.default.createElement(u.MemberInfo,{member:A,isOnDark:!0}),n.default.createElement(d.Notification,null)))))),n.default.createElement(h,null,n.default.createElement(s.AddMembershipButtonSwitch,{onClick:()=>{e(),A()}})))};const f=i.default(l.ModalBody)`
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
    background-color: ${o.Colors.Black[700]};
    transform: translateX(-50%);
  }
`,g=i.default(l.ModalTitle)`
  line-height: 40px;
`,h=i.default(l.ModalFooter)`
  width: 100%;
  height: auto;
  padding: 16px;
`,p=i.default.ul`
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
`,m=i.default.li`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 16px;
  grid-column-gap: 8px;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 64px;
  padding: 12px 16px;
  border-radius: ${o.BorderRad.s};
  transition: ${o.Transitions.all};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${o.Colors.Black[600]};

    ${d.NotificationComponent} {
      color: ${o.Colors.White};
    }
    ${u.MemberDarkHover}
  }

  &:before {
    content: '';
    display: ${({isMemberActive:e})=>e?"block":"none"};
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${o.Colors.Blue[500]};
    transform: translateX(-16px);
  }
`},8566:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(88542),A)},72433:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyProfileIcon=void 0;const n=r(t(2784)),i=t(79530);A.MyProfileIcon=()=>n.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:"nav-icon"},n.default.createElement("path",{className:"whitePart",d:"M1.23076 7.99997C1.23076 4.26144 4.26144 1.23076 7.99997 1.23076C11.7385 1.23076 14.7692 4.26144 14.7692 7.99997C14.7692 9.08417 14.5143 10.1088 14.0612 11.0173L15.0089 11.8598C15.6405 10.7153 15.9999 9.39961 15.9999 7.99997C15.9999 3.58171 12.4182 0 7.99997 0C3.58171 0 0 3.58171 0 7.99997C0 12.4182 3.58171 15.9999 7.99997 15.9999C8.91244 15.9999 9.78923 15.8472 10.6062 15.5658L9.95603 14.4823C9.33676 14.6689 8.68008 14.7692 7.99997 14.7692C4.26144 14.7692 1.23076 11.7385 1.23076 7.99997Z",fill:"currentColor"}),n.default.createElement("path",{className:"primaryPart",d:"M10.8774 14.1289C11.9828 13.6091 12.9247 12.799 13.6049 11.7969L14.5315 12.6205C13.7596 13.7096 12.7222 14.5973 11.5135 15.1891L10.8774 14.1289Z",fill:"currentColor"}),n.default.createElement("path",{className:"whitePart",d:"M9.50009 5.60023C9.50009 6.33661 8.90314 6.93356 8.16676 6.93356C7.43038 6.93356 6.83342 6.33661 6.83342 5.60023C6.83342 4.86385 7.43038 4.26689 8.16676 4.26689C8.90314 4.26689 9.50009 4.86385 9.50009 5.60023ZM9.63224 7.66691C10.2785 7.20784 10.7001 6.45327 10.7001 5.60023C10.7001 4.20111 9.56588 3.06689 8.16676 3.06689C6.76763 3.06689 5.63342 4.20111 5.63342 5.60023C5.63342 6.45325 6.05503 7.2078 6.70123 7.66687C6.01079 7.93715 5.4991 8.39353 5.13882 8.91797C4.58096 9.72999 4.40002 10.6789 4.40002 11.3003V11.6711L4.7317 11.8369C5.2342 12.0882 6.55022 12.5336 8.16669 12.5336C9.78317 12.5336 11.0992 12.0882 11.6017 11.8369L11.9334 11.6711V11.3003C11.9334 10.6789 11.7524 9.72999 11.1946 8.91797C10.8343 8.39355 10.3226 7.93718 9.63224 7.66691ZM8.16669 11.3336C7.07498 11.3336 6.15422 11.0989 5.63005 10.9124C5.68859 10.5097 5.83834 10.019 6.1279 9.59746C6.49833 9.05826 7.11031 8.60682 8.16669 8.60682C9.22308 8.60682 9.83505 9.05826 10.2055 9.59746C10.495 10.019 10.6448 10.5097 10.7033 10.9124C10.1792 11.0989 9.2584 11.3336 8.16669 11.3336Z",fill:"currentColor"}))},70259:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Logo=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.Logo=()=>n.default.createElement(a,{viewBox:"0 0 114 24",preserveAspectRatio:"xMidYMid meet"},n.default.createElement("path",{d:"M24.5582 21.4241V19.5354H27.5464V7.49545H29.644V19.6935C29.6434 20.1525 29.4598 20.5925 29.1333 20.9171C28.8068 21.2417 28.3642 21.4243 27.9025 21.4248H24.5582V21.4241ZM32.3746 16.3288C31.3654 15.3255 30.851 14.0661 30.851 12.5715C30.851 11.0761 31.3654 9.81678 32.3746 8.81345C33.3838 7.81012 34.6506 7.29878 36.154 7.29878C37.6582 7.29878 38.9048 7.81012 39.9341 8.81345C40.9434 9.81678 41.4577 11.0761 41.4577 12.5715C41.4577 14.0661 40.9434 15.3255 39.9341 16.3288C38.9249 17.3321 37.6582 17.8435 36.154 17.8435C34.6305 17.8435 33.3838 17.3321 32.3746 16.3288ZM33.8982 10.0928C33.3242 10.7021 33.0472 11.5288 33.0472 12.5515C33.0472 13.5748 33.3242 14.4008 33.8988 15.0108C34.4722 15.6208 35.2239 15.9355 36.1346 15.9355C37.0446 15.9355 37.797 15.6208 38.3703 15.0108C38.9444 14.4008 39.222 13.5748 39.222 12.5515C39.222 11.5288 38.9444 10.7021 38.3703 10.0928C37.797 9.48278 37.0446 9.16745 36.1346 9.16745C35.2239 9.18745 34.4722 9.48278 33.8982 10.0928ZM41.6167 7.49545H43.8128L46.009 15.6601H47.0974L49.492 7.49545H51.6889L47.4937 21.4241H45.2968L46.4838 17.6468H45.7126C44.9408 17.6468 44.248 17.1355 44.0495 16.3881L41.6167 7.49545ZM51.4897 14.4601H53.7858C53.8059 14.4995 53.8254 14.5581 53.8649 14.6175L54.1023 14.9715C54.221 15.1488 54.3793 15.3061 54.5382 15.4241C54.6958 15.5615 54.9533 15.6795 55.2497 15.7775C55.5826 15.8825 55.9298 15.9358 56.2791 15.9355C57.0113 15.9355 57.5451 15.8175 57.8818 15.6008C58.2184 15.3848 58.3767 15.0895 58.3767 14.7548C58.3767 14.4401 58.1587 14.1841 57.7235 14.0075C57.2059 13.8035 56.669 13.6518 56.1208 13.5548C55.4852 13.4346 54.8573 13.277 54.2405 13.0828C53.629 12.8999 53.0764 12.5608 52.6378 12.0995C52.2019 11.6268 51.9846 11.0368 51.9846 10.2895C51.9846 9.50278 52.3407 8.79412 53.073 8.20412C53.8053 7.61345 54.7749 7.31878 55.9625 7.31878C56.7143 7.31878 57.3674 7.43678 57.9609 7.65278C58.5544 7.86945 58.9903 8.14478 59.2867 8.43945C59.5837 8.75478 59.8211 9.06945 60.0189 9.38412C60.2168 9.69878 60.3354 9.95478 60.3945 10.1908L60.4743 10.5055H58.2774C58.254 10.4614 58.2342 10.4154 58.2184 10.3681C58.1983 10.3088 58.1192 10.2108 58.0005 10.0528C57.8891 9.90276 57.7557 9.77018 57.6048 9.65945C57.4466 9.54145 57.2293 9.44345 56.9517 9.34478C56.6747 9.24678 56.3381 9.20745 55.982 9.20745C55.3885 9.20745 54.9533 9.30545 54.6361 9.52212C54.3397 9.73812 54.1815 9.99412 54.1815 10.3088C54.1815 10.5648 54.3397 10.8008 54.6562 10.9775C54.9728 11.1548 55.3684 11.2928 55.8432 11.3708C56.3186 11.4501 56.833 11.5681 57.3869 11.7255C57.9104 11.8757 58.4257 12.053 58.9306 12.2568C59.4072 12.4549 59.8184 12.782 60.1175 13.2008C60.4347 13.6341 60.5936 14.1648 60.5936 14.7741C60.5936 15.6208 60.2168 16.3488 59.4449 16.9581C58.6737 17.5681 57.6249 17.8635 56.2985 17.8635C55.5072 17.8635 54.8145 17.7455 54.2009 17.5095C53.588 17.2735 53.1125 16.9975 52.796 16.6628C52.5022 16.3532 52.2373 16.0175 52.0047 15.6601C51.8069 15.3255 51.6681 15.0501 51.6091 14.8335L51.4897 14.4601ZM60.9692 9.38412V7.49545H62.1561V5.31212H64.2537V7.49545H67.3605V9.38412H64.2738V15.7581H67.4591V17.6468H63.8983C63.4365 17.6464 62.9936 17.4639 62.667 17.1393C62.3404 16.8147 62.1566 16.3746 62.1561 15.9155V9.38412H60.9692ZM70.745 9.38412V17.6468H68.6467V9.01078C68.6467 8.60889 68.8073 8.22346 69.0932 7.93928C69.379 7.6551 69.7667 7.49545 70.171 7.49545H74.8416V9.38412H70.7457H70.745ZM76.2659 16.3288C75.2762 15.3061 74.7618 14.0468 74.7618 12.5715C74.7618 11.0961 75.2762 9.83678 76.2659 8.81345C77.2752 7.79078 78.5017 7.29878 79.9468 7.29878C81.3913 7.29878 82.6178 7.81012 83.627 8.81345C84.6362 9.83678 85.1311 11.0761 85.1311 12.5715V13.2601H76.8594C76.9982 14.0868 77.3738 14.7355 77.9283 15.2268C78.5017 15.7188 79.175 15.9548 79.9468 15.9548C80.5798 15.9548 81.1136 15.8368 81.6085 15.6015C82.084 15.3648 82.4199 15.1288 82.5782 14.8928L82.8357 14.5581H85.0325C85.0124 14.6568 84.9534 14.7748 84.8937 14.9121C84.8341 15.0501 84.6563 15.3255 84.3794 15.6988C84.1117 16.0699 83.7994 16.4071 83.4493 16.7028C83.1127 16.9781 82.6178 17.2535 81.9847 17.4895C81.3517 17.7255 80.6784 17.8435 79.9267 17.8435C78.5017 17.8435 77.2752 17.3321 76.2653 16.3288H76.2659ZM77.2356 11.5681H83.2119C83.1127 10.9188 82.7961 10.3481 82.2617 9.89612C81.7279 9.42345 81.0546 9.18745 80.2231 9.18745C79.5275 9.17967 78.8503 9.40882 78.3039 9.83678C77.75 10.2701 77.3939 10.8401 77.2356 11.5681ZM87.0906 16.3881C86.1799 15.4041 85.7246 14.1255 85.7246 12.5715C85.7246 11.0175 86.1806 9.73812 87.0906 8.75478C88.0006 7.77078 89.1486 7.29878 90.5139 7.29878C91.147 7.29878 91.721 7.41678 92.2555 7.67212C92.7892 7.92812 93.1654 8.16412 93.3834 8.40078L93.6999 8.77412H93.7985V7.47612H95.8961V17.6268H93.7985V16.2301H93.6999C93.6798 16.2695 93.6208 16.3281 93.5611 16.4068C93.5021 16.4855 93.3633 16.6035 93.1654 16.8001C92.9681 16.9808 92.7564 17.1454 92.5324 17.2921C92.3145 17.4301 91.9979 17.5481 91.6419 17.6655C91.2773 17.7818 90.8968 17.8416 90.5139 17.8428C89.1681 17.8428 88.0207 17.3514 87.0906 16.3875V16.3881ZM97.7167 17.6468V7.49545H99.8143V8.89278H99.9136C99.9337 8.85278 99.9726 8.79412 100.013 8.71545C100.052 8.63678 100.151 8.51878 100.329 8.32212C100.507 8.14478 100.685 7.96745 100.903 7.83012C101.101 7.69212 101.398 7.57412 101.754 7.45678C102.124 7.33739 102.512 7.27753 102.902 7.27945C103.376 7.27945 103.832 7.33812 104.227 7.47612C104.643 7.61345 104.96 7.77078 105.178 7.94812C105.415 8.12545 105.613 8.32145 105.771 8.49878C105.929 8.67612 106.028 8.83345 106.088 8.97078L106.187 9.16745H106.285C106.306 9.10878 106.345 9.04945 106.404 8.95145C106.444 8.87278 106.583 8.71545 106.78 8.49878C106.978 8.28278 107.195 8.10545 107.434 7.92812C107.671 7.77078 108.007 7.61345 108.423 7.47612C108.863 7.33256 109.324 7.25943 109.788 7.25945C110.955 7.25945 111.886 7.63278 112.559 8.38078C113.231 9.12878 113.568 10.1708 113.568 11.5481V17.6081H111.47V11.6661C111.47 10.0141 110.738 9.18745 109.274 9.18745C108.561 9.18745 107.948 9.46278 107.434 9.99412C106.919 10.5448 106.681 11.2335 106.681 12.0595V17.6275H104.584V11.6661C104.584 10.0141 103.851 9.18745 102.387 9.18745C101.675 9.18745 101.061 9.46278 100.547 9.99412C100.032 10.5448 99.7949 11.2335 99.7949 12.0595V17.6275H97.7167V17.6475V17.6468ZM27.5658 3.62012V5.70545H29.6634V3.62012H27.5658ZM88.4955 10.0928C87.9221 10.7021 87.6452 11.5288 87.6452 12.5515C87.6452 13.5748 87.9221 14.4008 88.4961 15.0108C89.0702 15.6208 89.8219 15.9355 90.7319 15.9355C91.6425 15.9355 92.3949 15.6208 92.9683 15.0108C93.5423 14.4008 93.8193 13.5748 93.8193 12.5515C93.8193 11.5288 93.5423 10.7021 92.9683 10.0928C92.3943 9.48278 91.6425 9.16745 90.7319 9.16745C89.8219 9.18745 89.0702 9.48278 88.4961 10.0928H88.4955Z",fill:o.Colors.White}),n.default.createElement("path",{d:"M16.6621 0H18.8194V6.15733C18.8201 8.528 17.9469 10.8167 16.365 12.5907C16.5635 11.764 16.6621 10.9187 16.6621 10.0333V0ZM5.81801 17.568C5.75833 17.6273 5.71876 17.686 5.65975 17.7453L5.60007 17.804C5.54106 17.8633 5.50149 17.922 5.44181 17.9613L5.36268 18.04C5.30135 18.104 5.23522 18.1633 5.16486 18.2173C5.08573 18.296 5.0066 18.3553 4.92747 18.434C4.85043 18.5102 4.76389 18.5763 4.66996 18.6307L4.43257 18.8073C4.23475 18.9253 4.03693 19.0433 3.8391 19.142C3.79887 19.162 3.75997 19.182 3.70029 19.2007C3.64128 19.2207 3.60172 19.2407 3.56215 19.26C3.50247 19.28 3.4629 19.3 3.40389 19.3193C3.30465 19.3587 3.20607 19.398 3.08737 19.4373H3.06726C2.96801 19.4767 2.86943 19.496 2.77019 19.516H2.75007C2.65149 19.536 2.55292 19.5747 2.45367 19.5947C2.33497 19.6147 2.19683 19.6533 2.07814 19.6533C2.0379 19.6533 1.99901 19.6733 1.95877 19.6733H1.93933C1.82063 19.6933 1.72139 19.6933 1.60269 19.6933H1.16748L1.82063 17.5487H5.81734V17.5687L5.81801 17.568ZM14.9206 0V10.0333C14.9206 10.1907 14.9206 10.368 14.9005 10.5253C14.9005 10.604 14.9005 10.6827 14.881 10.7613C14.881 10.84 14.8609 10.9187 14.8609 10.9973C14.8609 11.076 14.8414 11.1547 14.8414 11.2333C14.8414 11.2927 14.8213 11.3713 14.8213 11.43V11.4893C14.8019 11.568 14.8019 11.6467 14.7824 11.7053C14.7623 11.784 14.7623 11.8627 14.7422 11.922V11.942C14.7228 12.0007 14.7228 12.0593 14.7033 12.1187V12.1587C14.6436 12.394 14.5846 12.65 14.5055 12.8853C14.4854 12.9453 14.4652 13.024 14.4458 13.0827C14.4283 13.1578 14.4018 13.2306 14.3667 13.2993C14.3466 13.378 14.3077 13.4367 14.2875 13.496C14.2674 13.5747 14.2285 13.6333 14.2084 13.6927C14.1883 13.7713 14.1487 13.83 14.1293 13.8893C14.1092 13.948 14.0696 14.0273 14.03 14.086C14.0052 14.1552 13.9721 14.2213 13.9315 14.2827C13.8912 14.342 13.8718 14.4207 13.8322 14.4793C13.8121 14.5387 13.7732 14.578 13.7531 14.6367C13.6946 14.7524 13.6285 14.8642 13.5553 14.9713C13.5005 15.0659 13.4412 15.1578 13.3776 15.2467C13.343 15.3197 13.296 15.3862 13.2387 15.4433C13.2186 15.4833 13.1797 15.522 13.1596 15.542C13.1006 15.6207 13.0604 15.6793 13.0014 15.7387C12.9417 15.8173 12.8827 15.876 12.8431 15.9547L12.487 16.368L12.546 16.132C12.5661 16.0727 12.5661 16.014 12.5863 15.9547V15.896C12.6057 15.8173 12.6057 15.7387 12.6252 15.66C12.6453 15.5613 12.6654 15.4633 12.6654 15.3847C12.6654 15.3253 12.6848 15.2667 12.6848 15.2273C12.6848 15.168 12.705 15.1287 12.705 15.0693C12.7244 14.9713 12.7244 14.8727 12.7438 14.7547V14.676C12.7438 14.5973 12.764 14.5387 12.764 14.46V0H14.9206Z",fill:o.Colors.LogoPurple}),n.default.createElement("path",{d:"M11.0225 0V13.9087C11.0225 14.2433 11.0023 14.558 10.9822 14.8727C10.9627 15.1441 10.9232 15.4137 10.8642 15.6793C10.7455 16.3093 10.5671 16.9193 10.3297 17.4893C10.1849 17.846 10.0197 18.1941 9.83485 18.532C9.28286 19.5114 8.57443 20.3952 7.73725 21.1487C5.95964 22.7347 3.65459 23.6107 1.26607 23.608H0L0.653153 21.4633H1.28619C3.06907 21.4668 4.79495 20.8391 6.15466 19.6927C6.86555 19.1088 7.45661 18.3942 7.89551 17.588C8.0142 17.3913 8.11345 17.1747 8.21202 16.958C8.37095 16.6047 8.48965 16.25 8.58822 15.876C8.71038 15.4596 8.78351 15.0305 8.80616 14.5973C8.82628 14.3813 8.82628 14.1647 8.82628 13.948V0H11.0225Z",fill:o.Colors.LogoPurple}),n.default.createElement("path",{d:"M7.1243 13.6926V13.9086C7.1243 14.0859 7.1243 14.2632 7.10418 14.4206C7.06462 14.7546 7.02506 15.0892 6.92648 15.4039C6.88624 15.5612 6.84668 15.7186 6.78767 15.8566H2.33496L2.98811 13.7119H7.1243V13.6919V13.6926Z",fill:o.Colors.LogoPurple}));const a=i.default.svg`
  height: 24px;
  width: auto;
  position: relative;
`},13962:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.LogoLink=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(70259);A.LogoLink=function(){return n.default.createElement(a,{href:"#"},n.default.createElement(o.Logo,null))};const a=i.default.a`
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
`},62551:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ProfileComponent=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(51534),s=t(6315),u=t(89265),c=t(64342),l=t(8566);A.ProfileComponent=function(){const{total:e}=a.useTotalBalances();return n.default.createElement(d,null,n.default.createElement(l.CurrentMember,null),n.default.createElement(f,null,n.default.createElement(g,null,"Total Balance"),n.default.createElement(h,null,n.default.createElement(p,{value:e})),n.default.createElement(u.TransferButtonStyled,null)))};const d=i.default.div`
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
  color: ${o.Colors.Black[400]};
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
  color: ${o.Colors.White};
  font-weight: 700;
`,p=i.default(c.TokenValue)`
  color: ${o.Colors.White};
`},95149:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Version=void 0;const n=r(t(52275)),i=r(t(2784));A.Version=function(){return i.default.createElement(o,null,"Version: ","92593a5"," ")};const o=n.default.div`
  display: grid;
  grid-area: barversion;
  justify-content: center;
  align-items: center;
`},70446:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionsListComponent=A.OptionComponent=A.OptionComponentContainer=A.SelectComponent=A.EmptyOption=A.SelectedOption=A.Option=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723);A.Option=({children:e,onClick:t})=>n.default.createElement(A.OptionComponentContainer,{onClick:t},n.default.createElement(A.OptionComponent,null,e)),A.SelectedOption=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  min-height: ${o.Sizes.selectHeight};
  max-height: ${o.Sizes.selectHeight};
  padding: 10px 28px 10px 16px;
`,A.EmptyOption=i.default.input`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${o.Colors.Black[900]};
  width: 100%;
  height: 100%;
  padding: 16px;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    font-size: 14px;
    line-height: 45px;
    font-weight: 400;
    color: ${o.Colors.Black[400]};
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
  border: 1px solid ${o.Colors.Black[300]};
  border-radius: ${o.BorderRad.s};
  background-color: transparent;
`,A.OptionComponent=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background: ${o.Colors.White};
  cursor: pointer;
  border-radius: ${o.BorderRad.s};
  transition: ${o.Transitions.all};
  min-height: ${o.Sizes.selectHeight};
  max-height: ${o.Sizes.selectHeight};
  padding: 10px 72px 10px 16px;

  &:active,
  &:focus {
    outline: none;
  }
`,A.OptionsListComponent=i.default.ul`
  display: grid;
  grid-template-columns: 1fr;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: auto;
  max-height: calc(${o.Sizes.selectHeight} * 2.5);
  margin: -1px 0 0;
  border-radius: ${o.BorderRad.s};
  border: 1px solid ${o.Colors.Black[300]};
  background-color: ${o.Colors.White};
  box-shadow: ${o.Shadows.select};
  overflow-y: scroll;
  transition: ${o.Transitions.all};
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
`},13682:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(70446),A),n(t(28698),A)},28698:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0})},37560:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Badge=void 0;const n=r(t(52275)),i=t(67723);A.Badge=n.default.span`
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
`},84124:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AboutLabel=A.MembershipLabel=void 0;const n=r(t(2784)),i=r(t(52275));A.MembershipLabel=({text:e,className:t})=>n.default.createElement(A.AboutLabel,{title:e,className:t},e),A.AboutLabel=i.default.h6`
  width: fit-content;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
`},41139:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Text=void 0;const n=r(t(52275)),i=t(67723);A.Text=n.default.p`
  font-size: ${e=>1===e.size?"16px":2===e.size?"14px":3===e.size?"12px":"16px"};
  line-height: ${e=>1===e.size?"24px":2===e.size?"20px":3===e.size?"18px":"24px"};
  font-weight: ${e=>e.bold?"700":"400"};
  font-style: ${e=>e.italic?"italic":"normal"};
  color: ${e=>!0===e.dark?i.Colors.Black[700]:i.Colors.Black[500]};
`},30989:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ValueInJoys=A.TokenValue=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(67723),a=t(27609);A.TokenValue=n.default.memo((({className:e,value:t})=>t?n.default.createElement(A.ValueInJoys,{className:e},a.formatTokenValue(t)):n.default.createElement("span",null,"-"))),A.ValueInJoys=i.default.span`
  display: inline-grid;
  position: relative;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: baseline;
  width: fit-content;
  font-weight: 700;
  color: ${o.Colors.Black[900]};
  font-family: ${o.Fonts.Grotesk};

  &:after {
    content: 'JOY';
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${o.Colors.Black[400]};
    text-transform: uppercase;
    font-family: ${o.Fonts.Grotesk};
  }
`},64342:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(37560),A),n(t(32854),A),n(t(41139),A),n(t(30989),A)},67723:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(78777),A)},78777:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.Animations=A.Transitions=A.Fonts=A.Shadows=A.Sizes=A.BorderRad=A.Colors=void 0,A.Colors={White:"#FFFFFF",Grey:"#8C96A6",LogoPurple:"#4038FF",Black:{900:"#000000",800:"#131519",700:"#1F252E",600:"#404B5A",500:"#5D6B80",400:"#8C96A6",300:"#C4CCD6",200:"#DDE2EB",100:"#E8EDF6",75:"#EFF3FA",50:"#F6F8FC",25:"#F9FAFC",900.25:"#00000040",700.85:"#1F252ED9"},Blue:{900:"#001AE4",800:"#0027EA",700:"#002CEF",600:"#2734F8",500:"#3F38FF",400:"#6C6CFF",300:"#817EFF",200:"#A7AAFF",100:"#D3DAFF",50:"#E7EBFF"},Green:{900:"#061612",800:"#0A2C24",700:"#105746",600:"#12836A",500:"#4DCAB1",400:"#6FDFCB",300:"#8EE6D6",200:"#B0EFE4",100:"#CEF5EE",50:"#DDF9F4"},Red:{400:"#FF3960",300:"#FF6D87",200:"#F695A4",100:"#FFCBD9",50:"#FEEAF1"}},A.BorderRad={s:"2px",m:"4px",full:"1000px",round:"50%"},A.Sizes={selectHeight:"80px",accountHeight:"94px"},A.Shadows={common:`0px 12px 28px ${A.Colors.Black[900.25]}`,light:"0px 0px 28px #D6D8E780",select:`0px 20px 28px ${A.Colors.Black[900.25]}`},A.Fonts={Grotesk:'"Grotesk", sans-serif',Inter:'"Inter", sans-serif'},A.Transitions={all:"all 0.25s ease",duration:"0.25s",showResult:"1s"},A.Animations={showSymbol:`\n    animation: showSymbol ${A.Transitions.duration} ease;\n\n    @keyframes showSymbol {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n  `,showResultSymbol:`\n    animation: showSymbol ${A.Transitions.showResult} ease;\n\n    @keyframes showSymbol {\n      0% {\n        opacity: 0;\n      }\n      25% {\n        opacity: 1;\n      }\n      75% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n  `,showSidePane:`\n    animation: showSidePane ${A.Transitions.duration} ease;\n\n    @keyframes showSidePane {\n      0% {\n        opacity: 0;\n        transform: translateX(100%);\n      }\n      25% {\n        opacity: 1;\n      }\n      100% {\n        transform: translateX(0%);\n      }\n    }\n  `,showModalBackground:`\n    animation: showModalBackground ${A.Transitions.duration} ease;\n\n    @keyframes showModalBackground {\n      from {\n        background-color: transparent;\n      }\n      to {}\n    }\n  `,showModalBlock:`\n    animation: showModalBlock ${A.Transitions.duration} ease;\n\n    @keyframes showModalBlock {\n      from {\n        opacity: 0;\n        transform: translateY(-24px);\n      }\n      to {}\n    }\n  `,showHelperTooltip:"\n    animation: showHelperTooltip 0.25s ease;\n    animation-delay: 0.25s;\n    animation-fill-mode: forwards;\n\n    @keyframes showHelperTooltip {\n      from {\n        opacity: 0;\n        transform: translateY(8px);\n        visibility: hidden;\n      }\n      to {\n        visibility: visible;\n      }\n    }\n  "}},52452:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useAccounts=void 0;const r=t(5568),n=t(25488);A.useAccounts=function(){const e=r.useKeyring(),A=n.useObservable(e.accounts.subject.asObservable(),[e]),t=[];return A&&t.push(...Object.values(A).map((e=>({address:e.json.address,name:e.json.meta.name})))),{allAccounts:t,hasAccounts:0!==t.length}}},8162:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useApi=void 0;const r=t(2784),n=t(12674);A.useApi=()=>Object.assign({},r.useContext(n.ApiContext))},25047:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.useBalance=A.toBalances=void 0;const n=r(t(62197)),i=t(8162),o=t(25488);function a(e){const{lockedBalance:A,availableBalance:t}=e;return{total:t.add(A),transferable:t,locked:A,recoverable:new n.default(0)}}A.toBalances=a,A.useBalance=function(e){const{api:A}=i.useApi(),t=o.useObservable(e&&(null==A?void 0:A.derive.balances.all(null==e?void 0:e.address)),[A,e]);return void 0===t?null:a(t)}},27950:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useBalances=void 0;const r=t(24496),n=t(56276),i=t(52452),o=t(8162),a=t(25047),s=t(25488);A.useBalances=function(){const{hasAccounts:e,allAccounts:A}=i.useAccounts(),{isConnected:t,api:u}=o.useApi(),c=A.map((e=>e.address)),l=u?c.map((e=>u.derive.balances.all(e).pipe(n.map(a.toBalances)))):[],d=s.useObservable(r.combineLatest(l),[u,JSON.stringify(c)]);return e&&t&&d?d.reduce(((e,A,t)=>Object.assign({[c[t]]:A},e)),{}):{}}},75278:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useDebounce=void 0;const r=t(2784);A.useDebounce=function(e,A){const[t,n]=r.useState(e);return r.useEffect((()=>{const t=setTimeout((()=>{n(e)}),A);return()=>{clearTimeout(t)}}),[e,A]),t}},5568:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useKeyring=void 0;const r=t(2784),n=t(52085);A.useKeyring=()=>r.useContext(n.KeyringContext)},12987:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useMembership=void 0;const r=t(2784),n=t(3100),i=t(95601);A.useMembership=function(){var e,A;const{data:t,loading:o,error:a}=n.useGetMembersQuery(),{active:s,setActive:u}=r.useContext(i.MembershipContext);return a&&console.error(a),{count:null!==(e=null==t?void 0:t.members.length)&&void 0!==e?e:0,members:null!==(A=null==t?void 0:t.members)&&void 0!==A?A:[],isLoading:o,active:s,setActive:u}}},55592:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useNumberInput=void 0;const r=t(2784),n=/^\d*(\.\d*)?$/;function i(e,A){if(e.includes(".")){const[t,r]=e.split("."),n=r.substring(0,A);return 0!==A?`${t}.${n}`:t}return e}A.useNumberInput=function(e=6){const[A,t]=r.useState("");return r.useEffect((()=>{t(i(A,e))}),[e]),[A,function(A){A=function(e){return e.replace(/,/g,"")}(A),n.test(A)&&t(i(function(e){return""===e||((e=e.replace(/^0*/,"")).startsWith(".")||""===e)&&(e="0"+e),e}(A),e))}]}},25488:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useObservable=void 0;const r=t(2784);A.useObservable=function(e,A){const[t,n]=r.useState(void 0);return r.useEffect((()=>{const A=null==e?void 0:e.subscribe(n);return()=>A&&A.unsubscribe()}),A),t}},96065:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.useSignAndSendTransaction=void 0;const n=t(2028),i=r(t(62197)),o=t(2784),a=t(8162),s=t(5568),u=t(25488),c=(e,A)=>{e.subscribe((e=>{const{status:t,events:r}=e;console.log(`Current transaction status: ${t.type}`),t.isReady&&A("PENDING"),t.isInBlock&&(console.log("Included at block hash",JSON.stringify(t.asInBlock)),console.log("Events:"),r.forEach((({event:{data:e,method:A,section:t},phase:r})=>{console.log("\t",JSON.stringify(r),`: ${t}.${A}`,JSON.stringify(e))})),console.log(JSON.stringify(r))),t.isFinalized&&A((e=>e.find((({event:{method:e}})=>"ExtrinsicFailed"===e)))(r)?"ERROR":"SUCCESS")}),(()=>A("ERROR")))};A.useSignAndSendTransaction=({transaction:e,from:A,onDone:t})=>{const r=s.useKeyring(),{api:l}=a.useApi(),d=u.useObservable(null==e?void 0:e.paymentInfo(A.address),[A]),[f,g]=o.useState("READY");return o.useEffect((()=>{if("SIGN"!==f||!e||!d)return;const t=r.getPair(A.address);t.meta.isInjected?(g("EXTENSION"),n.web3FromAddress(A.address).then((({signer:t})=>{c(e.signAndSend(A.address,{signer:t}),g)}))):(g("PENDING"),c(e.signAndSend(t),g))}),[l,f]),o.useEffect((()=>{"SUCCESS"!==f&&"ERROR"!==f||t("SUCCESS"===f,(null==d?void 0:d.partialFee.toBn())||new i.default(0))}),[f]),{send:()=>g("SIGN"),paymentInfo:d,status:f}}},15689:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useToggle=void 0;const r=t(2784);A.useToggle=function(e=!1){const[A,t]=r.useState(e);return[A,()=>t(!A)]}},51534:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.useTotalBalances=A.zeroBalance=void 0;const n=r(t(62197)),i=t(27950);A.zeroBalance=()=>({recoverable:new n.default(0),locked:new n.default(0),transferable:new n.default(0),total:new n.default(0)});const o=(e,A)=>({recoverable:e.recoverable.add(A.recoverable),locked:e.locked.add(A.locked),transferable:e.transferable.add(A.transferable),total:e.total.add(A.total)});A.useTotalBalances=function(){const e=i.useBalances();return[...Object.values(e)].reduce(o,A.zeroBalance())}},34582:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0});const n=r(t(2784)),i=r(t(28316)),o=t(85754),a=t(5388);i.default.render(n.default.createElement(a.Providers,null,n.default.createElement(o.App,null)),document.getElementById("app"))},92146:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(977),A),n(t(41758),A)},41758:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.mockBlocks=void 0;const n=t(3100),i=r(t(74765));A.mockBlocks=i.default.map((e=>Object.assign(Object.assign({},e),{network:n.Network.Babylon,__typename:"Block"})))},977:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.mockMembers=void 0;const n=r(t(27143));A.mockMembers=n.default.map((e=>Object.assign({},e)))},16287:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.makeServer=void 0;const n=t(49342),i=t(17019),o=r(t(64859)),a=t(92146);A.makeServer=(e="development")=>i.createServer({environment:e,routes(){this.post("/query-node",n.createGraphQLHandler(o.default,this.schema,{context:void 0,root:void 0,resolvers:{Query:{member:(e,A,t,r)=>{const i={id:A.where.id};return n.mirageGraphQLFieldResolver(e,i,t,r)}}}}))},seeds(e){const A=a.mockBlocks.reduce(((A,t)=>A.set(t.id,e.schema.create("Block",Object.assign({},t)))),new Map),t=new Map;a.mockMembers.map((r=>{var n;const i=Object.assign({},r);return(null===(n=null==i?void 0:i.invitees)||void 0===n?void 0:n.length)&&(t.set(r.id,i.invitees),delete i.invitees),e.schema.create("Member",Object.assign(Object.assign({},i),{registeredAtBlock:A.get(r.registeredAtBlock)}))}));for(const[A,r]of t){const t=e.schema.find("Member",A);t.invitees=r.map((A=>e.schema.find("Member",A))),t.save()}}})},2850:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AddMembershipFailureModal=void 0;const n=r(t(2784)),i=t(64020),o=t(18823);A.AddMembershipFailureModal=({onClose:e,member:A})=>n.default.createElement(o.Modal,{modalSize:"xs",modalHeight:"s",onClose:e},n.default.createElement(o.ResultModalBody,null,n.default.createElement(o.CloseSmallModalButton,{onClick:e}),n.default.createElement(i.FailureIcon,null),n.default.createElement(o.ModalTitle,null,n.default.createElement("span",{className:"red-title"},"Oh no!")," Failure"),n.default.createElement(o.ResultText,{size:2},"There was a problem with creating a membership for ",A.name,".")))},5412:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.AddMembershipModal=void 0;const o=i(t(2784)),a=t(8162),s=t(25488),u=t(2850),c=t(73187),l=t(86722),d=t(87813);A.AddMembershipModal=({onClose:e})=>{const{api:A}=a.useApi(),t=s.useObservable(null==A?void 0:A.query.members.membershipPrice(),[]),[r,n]=o.useState("PREPARE"),[i,f]=o.useState();return"PREPARE"!==r&&i?"AUTHORIZE"===r?o.default.createElement(d.SignCreateMemberModal,{onClose:e,membershipPrice:t,transactionParams:i,onDone:e=>n(e?"SUCCESS":"ERROR")}):"SUCCESS"===r?o.default.createElement(c.AddMembershipSuccessModal,{onClose:e,member:i}):o.default.createElement(u.AddMembershipFailureModal,{onClose:e,member:i}):o.default.createElement(l.MembershipFormModal,{onClose:e,onSubmit:e=>{n("AUTHORIZE"),f(e)},membershipPrice:t})}},73187:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.AddMembershipSuccessModal=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(59686),a=t(79530),s=t(24619),u=t(18823),c=t(64342),l=t(67723);A.AddMembershipSuccessModal=function({onClose:e,member:A}){return n.default.createElement(u.Modal,{modalSize:"m",modalHeight:"s",onClose:e},n.default.createElement(u.ModalHeader,{onClick:e,title:"Success",icon:n.default.createElement(a.SuccessIcon,null)}),n.default.createElement(u.ModalBody,null,n.default.createElement(c.Text,null,"You have just successfully create a new membership"),n.default.createElement(d,null,n.default.createElement(s.MemberInfo,{member:A}))),n.default.createElement(u.ModalFooter,null,n.default.createElement(o.ButtonPrimaryMedium,{disabled:!0},"View my profile")))};const d=i.default.div`
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
`},86722:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.MembershipFormModal=void 0;const o=i(t(2784)),a=i(t(88253)),s=t(59686),u=t(81328),c=t(95148),l=t(18823),d=t(71196),f=t(56404),g=t(64342),h=t(10233),p=a.string().url();A.MembershipFormModal=({onClose:e,onSubmit:A,membershipPrice:t})=>{const[r,n]=o.useState(),[i,a]=o.useState(),[m,I]=o.useState(""),[B,y]=o.useState(""),[E,C]=o.useState(""),[b,v]=o.useState(""),[Q,w]=o.useState(!1),[M,S]=o.useState(!1),D=o.useCallback(d.filterAccount(i),[i]),_=o.useCallback(d.filterAccount(r),[r]),[k,L]=o.useState(!1),N=!Q&&!!r&&!!i&&!!m&&!!B&&M;return o.useEffect((()=>{b?p.isValid(b).then((e=>{L(N&&e)})):L(N)}),[r,i,m,B,E,b,Q,M]),o.default.createElement(l.ScrolledModal,{modalSize:"m",modalHeight:"m",onClose:e},o.default.createElement(l.ModalHeader,{onClick:e,title:"Add membership"}),o.default.createElement(l.ScrolledModalBody,null,o.default.createElement(l.ScrolledModalContainer,null,o.default.createElement(h.Row,null,o.default.createElement(u.InlineToggleWrap,null,o.default.createElement(u.Label,null,"I was referred by a member: "),o.default.createElement(u.ToggleCheckbox,{trueLabel:"Yes",falseLabel:"No",onChange:w,checked:Q})),o.default.createElement(f.SelectMember,{onChange:()=>{},disabled:!Q})),o.default.createElement(h.Row,null,o.default.createElement(g.Text,{size:2,dark:!0},"Please fill in all the details below.")),o.default.createElement(h.Row,null,o.default.createElement(u.Label,{isRequired:!0},"Root account ",o.default.createElement(c.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."})),o.default.createElement(d.SelectAccount,{filter:D,onChange:n})),o.default.createElement(h.Row,null,o.default.createElement(u.Label,{isRequired:!0},"Controller account ",o.default.createElement(c.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."})),o.default.createElement(d.SelectAccount,{filter:_,onChange:a})),o.default.createElement(h.Row,null,o.default.createElement(u.Label,{htmlFor:"member-name",isRequired:!0},"Member Name"),o.default.createElement(u.TextInput,{id:"member-name",type:"text",placeholder:"Type",value:m,onChange:e=>I(e.target.value)})),o.default.createElement(h.Row,null,o.default.createElement(u.Label,{htmlFor:"member-handle",isRequired:!0},"Membership handle"),o.default.createElement(u.TextInput,{id:"member-handle",type:"text",placeholder:"Type",value:B,onChange:e=>y(e.target.value)})),o.default.createElement(h.Row,null,o.default.createElement(u.Label,{htmlFor:"member-about"},"About Member"),o.default.createElement(u.TextArea,{id:"member-about",value:E,placeholder:"Type",rows:4,onChange:e=>C(e.target.value)})),o.default.createElement(h.Row,null,o.default.createElement(u.Label,{htmlFor:"member-avatar"},"Member Avatar"),o.default.createElement(u.TextInput,{id:"member-avatar",type:"text",placeholder:"Image URL",value:b,onChange:e=>v(e.target.value)}),o.default.createElement(g.Text,{size:3,italic:!0},"Paste an URL of your avatar image. Text lorem ipsum.")))),o.default.createElement(l.ModalFooter,null,o.default.createElement(u.Label,null,o.default.createElement(u.Checkbox,{id:"privacy-policy-agreement",onChange:e=>S(e)},o.default.createElement(g.Text,{size:2,dark:!0},"I agree to our"," ",o.default.createElement(u.LabelLink,{href:"http://example.com/",target:"_blank"},"Terms of Service")," ","and"," ",o.default.createElement(u.LabelLink,{href:"http://example.com/",target:"_blank"},"Privacy Policy"),"."))),o.default.createElement(h.BalanceInfoNarrow,null,o.default.createElement(h.InfoTitle,null,"Creation fee:"),o.default.createElement(h.InfoValue,null,o.default.createElement(g.TokenValue,{value:null==t?void 0:t.toBn()})),o.default.createElement(c.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."})),o.default.createElement(s.ButtonPrimaryMedium,{onClick:()=>{i&&r&&A({about:E,name:m,handle:B,avatarURI:b,controllerAccount:i,rootAccount:r})},disabled:!k},"Create a Membership")))}},87813:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.SignCreateMemberModal=void 0;const o=i(t(2784)),a=t(59686),s=t(81328),u=t(95148),c=t(18823),l=t(71196),d=t(64342),f=t(8162),g=t(96065),h=t(10233),p=t(15888);A.SignCreateMemberModal=({onClose:e,membershipPrice:A,transactionParams:t,onDone:r})=>{var n,i;const{api:m}=f.useApi(),[I,B]=o.useState(t.controllerAccount),y=null===(i=null===(n=null==m?void 0:m.tx)||void 0===n?void 0:n.members)||void 0===i?void 0:i.buyMembership({root_account:t.rootAccount.address,controller_account:t.controllerAccount.address,name:t.name,handle:t.handle,avatar_uri:t.avatarURI,about:t.about}),{paymentInfo:E,send:C,status:b}=g.useSignAndSendTransaction({transaction:y,from:I,onDone:r});return"READY"===b?o.default.createElement(c.Modal,{modalSize:"m",modalHeight:"s",onClose:e},o.default.createElement(c.ModalHeader,{onClick:e,title:"Authorize transaction"}),o.default.createElement(c.ModalBody,null,o.default.createElement(d.Text,null,"You are intend to create a new membership."),o.default.createElement(d.Text,null,"The creation of the new membership costs ",o.default.createElement(d.TokenValue,{value:null==A?void 0:A.toBn()}),"."),o.default.createElement(d.Text,null,"Fees of ",o.default.createElement(d.TokenValue,{value:null==E?void 0:E.partialFee.toBn()})," will be applied to the transaction."),o.default.createElement(h.Row,null,o.default.createElement(s.Label,null,"Sending from account"),o.default.createElement(l.SelectAccount,{selected:I,onChange:e=>B(e)}))),o.default.createElement(c.ModalFooter,null,o.default.createElement(h.BalanceInfoNarrow,null,o.default.createElement(h.InfoTitle,null,"Creation fee:"),o.default.createElement(h.InfoValue,null,o.default.createElement(d.TokenValue,{value:null==A?void 0:A.toBn()})),o.default.createElement(u.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}),o.default.createElement(h.InfoTitle,null,"Transaction fee:"),o.default.createElement(h.InfoValue,null,o.default.createElement(d.TokenValue,{value:null==E?void 0:E.partialFee.toBn()})),o.default.createElement(u.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."})),o.default.createElement(a.ButtonPrimaryMedium,{onClick:C,disabled:"READY"!==b},"Sign and create a member"))):"EXTENSION"===b?o.default.createElement(p.WaitModal,{onClose:e,title:"Waiting for the extension",description:"Please, sign the transaction using external signer app."}):"PENDING"===b?o.default.createElement(p.WaitModal,{onClose:e,title:"Pending transaction",description:"We are waiting for your transaction to be mined. It can takes Lorem ipsum deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}):null}},66337:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(5412),A)},55344:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferDetailsModal=void 0;const a=o(t(62197)),s=t(59686),u=i(t(2784)),c=o(t(52275)),l=t(81328),d=t(18823),f=t(10233),g=t(56404),h=t(64342),p=t(55592),m=t(27609),I=t(24619);A.TransferDetailsModal=function({onClose:e,icon:A,member:t}){const[r,n]=u.useState(t),[i,o]=u.useState(),[c,I]=p.useNumberInput(0),E=u.useCallback(g.filterMember(r),[r]),C=!r||parseInt(c)<r.inviteCount,b=!(c&&C&&r&&i),v=c&&!C;return u.default.createElement(d.Modal,{onClose:e,modalSize:"m"},u.default.createElement(d.ModalHeader,{onClick:e,title:"Transfer invites",icon:A}),u.default.createElement(d.ModalBody,null,u.default.createElement(f.Row,null,u.default.createElement(h.Text,{size:1},"Transfer Invites to a member.")),u.default.createElement(f.Row,null,u.default.createElement(l.Label,null,"From"),t?u.default.createElement(y,{member:t}):u.default.createElement(g.SelectMember,{onChange:n,disabled:!!t,selected:r})),u.default.createElement(f.TransactionAmount,null,u.default.createElement(f.AmountInputBlock,null,u.default.createElement(l.Label,{htmlFor:"amount-input"},"Number of Invites"),u.default.createElement(l.NumberInput,{id:"amount-input",value:m.formatTokenValue(new a.default(c)),onChange:e=>I(e.target.value),placeholder:"0"}),v&&u.default.createElement(B,null,"You only have ",null==r?void 0:r.inviteCount," invites left."))),u.default.createElement(f.Row,null,u.default.createElement(l.Label,null,"To"),u.default.createElement(g.SelectMember,{onChange:o,filter:E}))),u.default.createElement(d.ModalFooter,null,u.default.createElement(s.ButtonPrimaryMedium,{onClick:()=>null,disabled:b},"Transfer Invites")))};const B=c.default.span`
  color: red;
  padding: 4px 0;
`,y=({member:e})=>u.default.createElement(f.LockedAccount,null,u.default.createElement(I.MemberInfo,{member:e}))},91953:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferInviteModal=void 0;const o=i(t(2784)),a=t(55344);A.TransferInviteModal=function({onClose:e,icon:A,member:t}){const[r]=o.useState("PREPARE");return"PREPARE"===r?o.default.createElement(a.TransferDetailsModal,{onClose:e,icon:A,member:t}):o.default.createElement(o.default.Fragment,null)}},98098:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||r(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),n(t(91953),A)},82949:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SignTransferModal=void 0;const n=r(t(2784)),i=t(1772),o=t(59686),a=t(95148),s=t(79530),u=t(18823),c=t(64342),l=t(8162),d=t(25047),f=t(96065),g=t(10233),h=t(15888);A.SignTransferModal=function({onClose:e,from:A,amount:t,to:r,onDone:p}){var m,I;const B=d.useBalance(A),y=d.useBalance(r),{api:E}=l.useApi(),C=null===(I=null===(m=null==E?void 0:E.tx)||void 0===m?void 0:m.balances)||void 0===I?void 0:I.transfer(r.address,t),{paymentInfo:b,send:v,status:Q}=f.useSignAndSendTransaction({transaction:C,from:A,onDone:p});return"READY"===Q?n.default.createElement(u.Modal,{modalSize:"m",onClose:e},n.default.createElement(u.ModalHeader,{onClick:e,title:"Authorize Transaction"}),n.default.createElement(u.ModalBody,null,n.default.createElement(u.SignTransferContainer,null,n.default.createElement(g.Row,null,n.default.createElement(g.TransactionInfoLabel,null,"You are transferring ",n.default.createElement(c.TokenValue,{value:t})," stake from “",A.name,"” account to “",r.name,"”"," ","destination."),n.default.createElement(g.LockedAccount,null,n.default.createElement(i.AccountInfo,{account:A}),n.default.createElement(g.BalanceInfoInRow,null,n.default.createElement(g.InfoTitle,null,"Transferable balance"),n.default.createElement(g.InfoValue,null,n.default.createElement(c.TokenValue,{value:null==B?void 0:B.transferable}))))),n.default.createElement(g.TransactionAmountInfo,null,n.default.createElement(s.ArrowDownExpandedIcon,null),n.default.createElement(g.TransactionAmountInfoText,null,"Transferring ",n.default.createElement(c.TokenValue,{value:t}))),n.default.createElement(g.Row,null,n.default.createElement(g.LockedAccount,null,n.default.createElement(i.AccountInfo,{account:r}),n.default.createElement(g.BalanceInfoInRow,null,n.default.createElement(g.InfoTitle,null,"Transferable balance"),n.default.createElement(g.InfoValue,null,n.default.createElement(c.TokenValue,{value:null==y?void 0:y.transferable}))))))),n.default.createElement(u.ModalFooter,null,n.default.createElement(g.TransactionInfo,null,n.default.createElement(g.BalanceInfoNarrow,null,n.default.createElement(g.InfoTitle,null,"Amount:"),n.default.createElement(g.InfoValue,null,n.default.createElement(c.TokenValue,{value:t}))),n.default.createElement(g.BalanceInfoNarrow,null,n.default.createElement(g.InfoTitle,null,"Transaction fee:"),n.default.createElement(g.InfoValue,null,n.default.createElement(c.TokenValue,{value:null==b?void 0:b.partialFee.toBn()})),n.default.createElement(a.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora mollitia necessitatibus, eos recusandae obcaecati facilis sed maiores. Impedit iusto expedita natus perspiciatis, perferendis totam commodi ad, illo, veritatis omnis beatae.Facilis natus recusandae, magni saepe hic veniam aliquid tempore quia assumenda voluptatum reprehenderit. Officiis provident nam corrupti, incidunt, repudiandae accusantium porro libero ipsam illo quae ratione. Beatae itaque quo quidem."}))),n.default.createElement(o.ButtonPrimaryMedium,{onClick:v,disabled:"READY"!==Q},"Sign transaction and Transfer"))):"EXTENSION"===Q?n.default.createElement(h.WaitModal,{onClose:e,title:"Waiting for the extension",description:"Please, sign the transaction using external signer app."}):"PENDING"===Q?n.default.createElement(h.WaitModal,{onClose:e,title:"Pending transaction",description:"We are waiting for your transaction to be mined. It can takes Lorem ipsum deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}):null}},4858:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransactionFailureModal=void 0;const n=r(t(2784)),i=t(64020),o=t(18823),a=t(64342);A.TransactionFailureModal=({from:e,to:A,amount:t,onClose:r})=>n.default.createElement(o.Modal,{modalSize:"xs",modalHeight:"s",onClose:r},n.default.createElement(o.ResultModalBody,null,n.default.createElement(o.CloseSmallModalButton,{onClick:r}),n.default.createElement(i.FailureIcon,null),n.default.createElement(o.ModalTitle,null,n.default.createElement("span",{className:"red-title"},"Oh no!")," Failure"),n.default.createElement(o.ResultText,{size:2},"You haven’t transferred ",n.default.createElement(a.TokenValue,{value:t})," stake from “",e.name,"” account to “",A.name,"” destination, because of a lorem ipsum dolor sit amet enim probem.")))},87269:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransactionSuccessModal=void 0;const n=r(t(2784)),i=t(1772),o=t(79530),a=t(18823),s=t(64342),u=t(25047),c=t(10233);A.TransactionSuccessModal=function({onClose:e,from:A,to:t,amount:r,fee:l}){const d=u.useBalance(A),f=u.useBalance(t);if(!d||!f)return n.default.createElement(n.default.Fragment,null);const g=d.transferable,h=g.add(r).add(l),p=f.transferable,m=p.sub(r);return n.default.createElement(a.Modal,{modalSize:"m",modalHeight:"s",onClose:e},n.default.createElement(a.ModalHeader,{onClick:e,title:"Success",icon:n.default.createElement(o.SuccessIcon,null)}),n.default.createElement(a.SuccessModalBody,null,n.default.createElement(c.TransactionInfoLabel,{style:{marginBottom:"28px",justifySelf:"start"}},"You have just successfully transferred balance from"),n.default.createElement(c.LockedAccount,null,n.default.createElement(i.AccountInfo,{account:A}),n.default.createElement(c.BalanceInfo,null,n.default.createElement(c.InfoTitle,null,"Transferable balance before:"),n.default.createElement(c.InfoValue,null,n.default.createElement(s.TokenValue,{value:h})),n.default.createElement(c.InfoTitle,null,"Transferable balance after:"),n.default.createElement(c.InfoValue,null,n.default.createElement(s.TokenValue,{value:g})))),n.default.createElement(c.TransactionAmountInfo,null,n.default.createElement(o.ArrowDownExpandedIcon,null),n.default.createElement(c.TransactionAmountInfoText,null,"Transferred ",n.default.createElement(s.TokenValue,{value:r}))),n.default.createElement(c.LockedAccount,null,n.default.createElement(i.AccountInfo,{account:t}),n.default.createElement(c.BalanceInfo,null,n.default.createElement(c.InfoTitle,null,"Transferable balance before:"),n.default.createElement(c.InfoValue,null,n.default.createElement(s.TokenValue,{value:m})),n.default.createElement(c.InfoTitle,null,"Transferable balance after:"),n.default.createElement(c.InfoValue,null,n.default.createElement(s.TokenValue,{value:p}))))))}},33197:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferDetailsModal=void 0;const a=o(t(62197)),s=i(t(2784)),u=o(t(52275)),c=t(1772),l=t(59686),d=t(81328),f=t(18823),g=t(71196),h=t(64342),p=t(67723),m=t(25047),I=t(55592),B=t(27609),y=t(10233);A.TransferDetailsModal=function({from:e,to:A,onClose:t,onAccept:r,title:n,icon:i}){var o;const[u,c]=s.useState(A),[h,p]=s.useState(e),[v,Q]=I.useNumberInput(0),w=m.useBalance(h),M=s.useCallback(g.filterAccount(u),[u]),S=null!==(o=null==w?void 0:w.transferable)&&void 0!==o?o:new a.default(0),D=s.useCallback(g.filterAccount(h),[h]),_=new a.default(v).lte(new a.default(0)),k=new a.default(v).gt(S||0),L=_||k||!u,N=!h;return s.default.createElement(f.Modal,{modalSize:"m",onClose:t},s.default.createElement(f.ModalHeader,{onClick:t,title:n,icon:i}),s.default.createElement(f.ModalBody,null,s.default.createElement(y.Row,null,s.default.createElement(d.Label,null,"From"),e?s.default.createElement(E,{account:e}):s.default.createElement(g.SelectAccount,{filter:M,onChange:p})),s.default.createElement(y.TransactionAmount,null,s.default.createElement(y.AmountInputBlock,null,s.default.createElement(d.Label,{htmlFor:"amount-input"},"Number of tokens"),s.default.createElement(d.NumberInput,{id:"amount-input",value:B.formatTokenValue(new a.default(v)),onChange:e=>Q(e.target.value),placeholder:"0",disabled:N})),s.default.createElement(C,null,s.default.createElement(b,{onClick:()=>Q(S.div(new a.default(2)).toString()),disabled:N},"Use half"),s.default.createElement(b,{onClick:()=>Q(S.toString()),disabled:N},"Use max"))),s.default.createElement(y.Row,null,s.default.createElement(d.Label,null,"Destination account"),A?s.default.createElement(E,{account:A}):s.default.createElement(g.SelectAccount,{filter:D,onChange:c}))),s.default.createElement(f.ModalFooter,null,s.default.createElement(l.ButtonPrimaryMedium,{onClick:()=>{v&&u&&h&&r(new a.default(v),h,u)},disabled:L},"Transfer tokens")))};const E=({account:e})=>{const{transferable:A}=m.useBalance(e)||{};return s.default.createElement(y.LockedAccount,null,s.default.createElement(c.AccountInfo,{account:e}),s.default.createElement(y.BalanceInfoInRow,null,s.default.createElement(y.InfoTitle,null,"Transferable balance"),s.default.createElement(y.InfoValue,null,s.default.createElement(h.TokenValue,{value:A}))))},C=u.default.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  width: fit-content;
  height: 46px;
  align-items: center;
`,b=u.default(l.ButtonSecondarySmall)`
  height: 26px;
  padding: 4px 6px;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid ${p.Colors.Black[300]};
`},90743:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferModal=void 0;const a=o(t(62197)),s=i(t(2784)),u=t(82949),c=t(4858),l=t(87269),d=t(33197);A.TransferModal=function({from:e,to:A,onClose:t,icon:r}){const[n,i]=s.useState("PREPARE"),[o,f]=s.useState(new a.default(0)),[g,h]=s.useState(new a.default(0)),[p,m]=s.useState(e),[I,B]=s.useState(A),y=e||A?e?"Send tokens":"Receive tokens":"Transfer tokens";return"PREPARE"!==n&&I&&p?"AUTHORIZE"===n?s.default.createElement(u.SignTransferModal,{onClose:t,from:p,amount:o,to:I,onDone:(e,A)=>{i(e?"SUCCESS":"ERROR"),h(A)}}):"SUCCESS"===n?s.default.createElement(l.TransactionSuccessModal,{onClose:t,from:p,to:I,amount:o,fee:g}):s.default.createElement(c.TransactionFailureModal,{onClose:t,from:p,amount:o,to:I}):s.default.createElement(d.TransferDetailsModal,{onClose:t,from:p,to:I,onAccept:(e,A,t)=>{f(e),B(t),m(A),i("AUTHORIZE")},title:y,icon:r})}},15888:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WaitModal=void 0;const n=r(t(2784)),i=t(79530),o=t(64261),a=t(18823);A.WaitModal=({onClose:e,title:A,description:t})=>n.default.createElement(a.Modal,{modalSize:"xs",modalHeight:"s",isDark:!0,onClose:e},n.default.createElement(a.ResultModalBody,null,n.default.createElement(i.Loader,null),n.default.createElement(o.WaitingIcon,null),n.default.createElement(a.ModalTitle,null,A),n.default.createElement(a.ResultTextWhite,{size:2},t)))},10233:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransactionAmountInfoText=A.TransactionAmountInfo=A.InfoValue=A.InfoTitle=A.BalanceInfoNarrow=A.BalanceInfoInRow=A.BalanceInfo=A.TransactionInfo=A.AmountInputBlock=A.TransactionAmount=A.LockedAccount=A.AccountRow=A.Row=A.TransactionInfoLabel=void 0;const n=r(t(52275)),i=t(81328),o=t(79530),a=t(64342),s=t(67723);A.TransactionInfoLabel=n.default(i.Label)`
  display: block;
  margin-bottom: 32px;
  font-weight: 400;
  font-family: ${s.Fonts.Inter};

  ${a.ValueInJoys} {
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
`,A.AmountInputBlock=n.default.div`
  display: flex;
  flex-direction: column;
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

  ${o.Icon} {
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

  ${a.ValueInJoys}, ${a.ValueInJoys}:after {
    font-size: 10px;
    line-height: 16px;
    font-weight: 700;
    color: ${s.Colors.Black[700]};
  }
`},72600:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyAccounts=void 0;const n=r(t(2784)),i=t(68797),o=t(71121),a=t(88979),s=t(34754),u=t(31591),c=t(67966),l=t(8236),d=t(12766),f=t(95794),g=t(33630);A.MyAccounts=function(){return n.default.createElement(i.Page,null,n.default.createElement(u.SideBar,null),n.default.createElement(o.PageContent,null,n.default.createElement(c.Breadcrumbs,{crumbs:[{href:"#",text:"My Profile"},{href:"#",text:"My Accounts"}]}),n.default.createElement(g.MyProfile,null,n.default.createElement(a.PageHeader,null,n.default.createElement(s.PageTitle,null,"My profile"),n.default.createElement(f.MyProfileTabs,null),n.default.createElement(g.ProfileSummary,null,n.default.createElement(d.TotalBalances,null))),n.default.createElement(g.MyProfileContent,null,n.default.createElement(l.Accounts,null)))))}},8236:function(e,A,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,A,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,r){void 0===r&&(r=t),e[r]=A[t]}),n=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(A,e,t);return n(A,e),A},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Accounts=void 0;const a=o(t(62197)),s=i(t(2784)),u=o(t(52275)),c=t(1772),l=t(79530),d=t(86243),f=t(89265),g=t(64342),h=t(67723),p=t(52452),m=t(25047),I=t(27950),B=t(69809),y=t(87585),E=t(13018);A.Accounts=function(){const{allAccounts:e,hasAccounts:A}=p.useAccounts(),[t,r]=s.useState(!0),n=I.useBalances(),[i,o]=s.useState("name"),[a,u]=s.useState(!1),c=s.useMemo((()=>B.filterAccounts(e,t,n)),[e,t,A]),f=s.useMemo((()=>y.sortAccounts(c,n,i,a)),[c,n,i,a]);if(!A)return s.default.createElement(O,null,"Loading accounts...");const g=({children:e,sortKey:A})=>{return s.default.createElement(w,{onClick:(t=A,()=>E.setOrder(t,i,o,a,u))},s.default.createElement(M,{isDescending:a,sortBy:i,sortKey:A},e,i===A&&(a?s.default.createElement(S,null,s.default.createElement(l.ArrowDownIcon,null)):s.default.createElement(D,null,s.default.createElement(l.ArrowDownIcon,null)))));var t};return s.default.createElement(s.default.Fragment,null,s.default.createElement(b,{tabsSize:"xs"},s.default.createElement(d.PageTab,{active:t,onClick:()=>!t&&r(!0)},"All accounts"),s.default.createElement(d.PageTab,{active:!t,onClick:()=>t&&r(!1)},"Transferable balance")),s.default.createElement(v,null,s.default.createElement(Q,null,s.default.createElement(g,{sortKey:"name"},"Account"),s.default.createElement(g,{sortKey:"total"},"Total balance"),s.default.createElement(g,{sortKey:"locked"},"Locked balance"),s.default.createElement(g,{sortKey:"recoverable"},"Recoverable balance"),s.default.createElement(g,{sortKey:"transferable"},"Transferable balance")),s.default.createElement(_,null,f.map((e=>s.default.createElement(C,{key:e.address,account:e}))))))};const C=({account:e})=>{const A=m.useBalance(e),t=!(null==A?void 0:A.transferable)||!A.transferable.gt(new a.default(0));return s.default.createElement(k,{key:e.address},s.default.createElement(c.AccountInfo,{account:e}),s.default.createElement(L,null,s.default.createElement(g.TokenValue,{value:null==A?void 0:A.total})),s.default.createElement(L,null,s.default.createElement(g.TokenValue,{value:null==A?void 0:A.locked})),s.default.createElement(L,null,s.default.createElement(g.TokenValue,{value:null==A?void 0:A.recoverable})),s.default.createElement(L,null,s.default.createElement(g.TokenValue,{value:null==A?void 0:A.transferable})),s.default.createElement(N,null,s.default.createElement(f.TransferButton,{to:e}),s.default.createElement(f.TransferButton,{from:e,disabled:t})))},b=u.default(d.PageTabsNav)`
  grid-area: accountstabs;
`,v=u.default.div`
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
`,M=u.default.span`
  display: inline-flex;
  position: relative;
  align-items: center;
  width: fit-content;
`,S=u.default.span`
  display: inline-flex;
  position: absolute;
  left: calc(100% + 4px);
  width: fit-content;
  height: fit-content;
  transition: ${h.Transitions.all};

  ${l.Icon} {
    width: 12px;
    height: 12px;
    color: ${h.Colors.Black[600]};
    animation: sortArrowFlip ${h.Transitions.duration} ease;

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
`,D=u.default(S)`
  transform: rotate(180deg);

  ${l.Icon} {
  }
`,_=u.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`,k=u.default.li`
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
`,L=u.default.p``,N=u.default.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
  grid-template-rows: 40px;
  grid-column-gap: 8px;
`,O=u.default.div`
  font-size: 2em;
`},12766:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TotalBalances=void 0;const n=r(t(62197)),i=r(t(2784)),o=r(t(52275)),a=t(59686),s=t(95148),u=t(64342),c=t(67723),l=t(51534);A.TotalBalances=()=>{const{total:e,transferable:A,locked:t,recoverable:r}=l.useTotalBalances(),o=r.gt(new n.default(0));return i.default.createElement(f,null,i.default.createElement(g,null,i.default.createElement(h,null,i.default.createElement(m,null,"Total balance",i.default.createElement(s.Help,{helperText:"Lorem fishy"}))),i.default.createElement(I,null,i.default.createElement(d,{value:e}))),i.default.createElement(g,null,i.default.createElement(h,null,i.default.createElement(m,null,"Total transferable balance",i.default.createElement(s.Help,{helperText:"Lorem fishy"}))),i.default.createElement(I,null,i.default.createElement(d,{value:A}))),i.default.createElement(g,null,i.default.createElement(h,null,i.default.createElement(m,null,"Total locked balance",i.default.createElement(s.Help,{helperText:"Lorem fishy"}))),i.default.createElement(I,null,i.default.createElement(d,{value:t}))),i.default.createElement(g,{className:o?"statsItemWide":""},i.default.createElement(h,null,i.default.createElement(m,null,"Total recoverable",i.default.createElement(s.Help,{helperText:"Lorem fishy"})),o&&i.default.createElement(p,null,"Recover all")),i.default.createElement(I,null,i.default.createElement(d,{value:r}))))};const d=o.default(u.TokenValue)`
  font-size: 20px;
  line-height: 28px;
`,f=o.default.ul`
  display: flex;
  width: 100%;
  justify-items: flex-start;
`,g=o.default.li`
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
`,h=o.default.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  justify-content: space-between;
  align-items: start;
`,p=o.default(a.ButtonPrimarySmall)`
  position: absolute;
  top: 8px;
  right: 8px;
`,m=o.default(u.Label)`
  position: relative;
`,I=o.default.div`
  margin-top: auto;
`},13018:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.setOrder=void 0,A.setOrder=function(e,A,t,r,n){e===A?n(!r):(n("name"!==e),t(e))}},65512:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyMemberships=void 0;const n=r(t(2784)),i=t(68797),o=t(88979),a=t(71121),s=t(34754),u=t(31591),c=t(67966),l=t(1890),d=t(95794),f=t(33630);A.MyMemberships=()=>n.default.createElement(i.Page,null,n.default.createElement(u.SideBar,null),n.default.createElement(a.PageContent,null,n.default.createElement(c.Breadcrumbs,{crumbs:[{href:"#",text:"My Profile"},{href:"#",text:"My Memberships"}]}),n.default.createElement(f.MyProfile,null,n.default.createElement(o.PageHeader,null,n.default.createElement(s.PageTitle,null,"My profile"),n.default.createElement(d.MyProfileTabs,null)),n.default.createElement(f.MyMembershipsContent,null,n.default.createElement(l.Memberships,null)))))},38908:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MemberItem=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(59686),a=t(79530),s=t(24619),u=t(63486),c=t(67723),l=t(15689),d=t(20882);A.MemberItem=({member:e})=>{const[A,t]=l.useToggle();return n.default.createElement(g,null,n.default.createElement(h,null,n.default.createElement(s.MemberInfo,{member:e,onClick:t,showId:!0}),A&&n.default.createElement(u.MemberProfile,{member:e,onClose:t})),n.default.createElement(p,null,n.default.createElement(s.MemberRole,null,"SL"),n.default.createElement(s.MemberRole,null,"SP"),n.default.createElement(s.MemberRole,null,"RL"),n.default.createElement(s.MemberRole,null,"LI"),n.default.createElement(s.MemberRole,null,"SR")),n.default.createElement(h,null,n.default.createElement(f,null,"0 times")),n.default.createElement(h,null,n.default.createElement(f,null,"0 times")),n.default.createElement(h,null,n.default.createElement(f,null,e.inviteCount),n.default.createElement(d.TransferInviteButton,{member:e})),n.default.createElement(h,null,n.default.createElement(f,null,"0")),n.default.createElement(m,null,n.default.createElement(I,null,n.default.createElement(a.ArrowOutsideIcon,null))))};const f=i.default.span`
  font-family: ${c.Fonts.Grotesk};
  font-weight: 700;
`,g=i.default.li`
  display: grid;
  grid-template-columns: 194px 200px 76px 76px 96px 76px 54px;
  grid-template-rows: 1fr;
  justify-content: space-between;
  justify-items: start;
  align-items: center;
  width: 100%;
  height: ${c.Sizes.accountHeight};
  padding: 16px 0 16px 14px;
  border: 1px solid ${c.Colors.Black[100]};
  border-radius: ${c.BorderRad.s};

  & + & {
    margin-top: -1px;
  }
`,h=i.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  align-items: center;
  width: fit-content;
  max-width: 100%;
`,p=i.default(h)`
  grid-template-columns: repeat(auto-fill, 24px);
  grid-auto-flow: dense;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  width: 100%;
  max-width: 164px;
  max-height: 52px;
  overflow: hidden;

  ${s.MemberRole} {
    width: 24px;
    height: 24px;
    font-size: 10px;
  }
`,m=i.default.div``,I=i.default(o.ButtonGhostMediumSquare)`
  svg {
    color: ${c.Colors.Black[900]};
  }
`},1890:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Memberships=void 0;const n=r(t(2784)),i=r(t(52275)),o=t(96528),a=t(59686),s=t(64342),u=t(67723),c=t(12987),l=t(38908);A.Memberships=function(){const{count:e,isLoading:A,members:t,active:r}=c.useMembership(),i=!!e;if(A)return n.default.createElement(b,null,"Loading...");if(!i)return n.default.createElement(g,null,n.default.createElement(h,null,n.default.createElement("h3",null,"You have no active membership"),n.default.createElement(s.Text,{size:2},"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.")),n.default.createElement(f,null));const o=t.filter((e=>!r||r.handle!==e.handle));return n.default.createElement(p,null,n.default.createElement(m,null,n.default.createElement(a.ButtonGhostMedium,null,"Invite a member"),n.default.createElement(a.ButtonPrimaryMedium,null,"Add Membership")),!!r&&n.default.createElement(d,{title:"Active membership",members:[r]}),!!o.length&&n.default.createElement(d,{title:"Other memberships",members:o}))};const d=({title:e,members:A})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(I,null,e),n.default.createElement(B,null,n.default.createElement(y,null,n.default.createElement(E,null,"Memeberships"),n.default.createElement(E,null,"Roles"),n.default.createElement(E,null,"Slashed"),n.default.createElement(E,null,"Terminated"),n.default.createElement(E,null,"Invitations"),n.default.createElement(E,null,"Invited")),n.default.createElement(C,null,A.map((e=>n.default.createElement(l.MemberItem,{member:e,key:e.handle})))))),f=i.default(o.AddMembershipButton)`
  grid-area: none;
  margin-top: 24px;
`,g=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 420px;
  margin: 124px auto 0;
`,h=i.default.div`
  width: 100%;

  ${s.Text} {
    margin-top: 16px;
  }
`,p=i.default.div`
  display: grid;
  position: relative;
  grid-row-gap: 26px;
  width: 100%;
  padding-top: 12px;
`,m=i.default(a.ButtonsGroup)`
  position: absolute;
  right: 0;
  top: 0;
`,I=i.default.h6`
  margin-top: 4px;
`,B=i.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16px auto;
  grid-template-areas:
    'accountstablenav'
    'accountslist';
  grid-row-gap: 5px;
  width: 100%;
`,y=i.default.div`
  display: grid;
  grid-area: accountstablenav;
  grid-template-rows: 1fr;
  grid-template-columns: 194px 200px 76px 76px 96px 76px 54px;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
`,E=i.default.span`
  display: flex;
  align-items: center;
  align-content: center;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${u.Colors.Black[400]};
  text-transform: uppercase;
  text-align: left;
  user-select: none;
  cursor: pointer;

  &:first-child {
    justify-content: flex-start;
    text-align: left;
  }
  &:nth-child(2) {
    justify-content: flex-start;
    text-align: left;
  }
  &:last-child {
    position: relative;
  }
`,C=i.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`,b=i.default.div`
  font-size: 2em;
`},95794:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyProfileTabs=void 0;const n=r(t(2784)),i=t(76410),o=t(86243);A.MyProfileTabs=function(){const e=i.useHistory(),A=!!i.useRouteMatch({exact:!0,path:"/profile"}),t=!!i.useRouteMatch("/profile/memberships");return n.default.createElement(o.PageTabs,null,n.default.createElement(o.PageTabsNav,null,n.default.createElement(o.PageTab,{active:A,onClick:()=>e.push("/profile")},"My accounts"),n.default.createElement(o.PageTab,{active:t,onClick:()=>e.push("/profile/memberships")},"My memberships")))}},33630:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyMembershipsContent=A.MyProfileContent=A.ProfileSummary=A.MyProfile=void 0;const n=r(t(52275)),i=t(86243);A.MyProfile=n.default.div`
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
`,A.MyProfileContent=n.default.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px auto;
  grid-template-areas:
    'accountstabs'
    'accountstable';
  grid-row-gap: 18px;
  width: 100%;
`,A.MyMembershipsContent=n.default.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`},40821:function(e,A,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.GlobalStyle=void 0;const n=r(t(24170)),i=r(t(28998)),o=r(t(44561)),a=r(t(11322)),s=t(52275),u=t(67723);A.GlobalStyle=s.createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url(${n.default}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Inter";
    src: url(${i.default}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Grotesk";
    src: url(${o.default}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Grotesk";
    src: url(${a.default}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
  *::selection, *:before::selection, *:after::selection {
    color: ${u.Colors.Blue[50]};
    background-color: ${u.Colors.Blue[500]};
  }

  body, html {
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: ${u.Colors.White};
    font-family: ${u.Fonts.Grotesk};
    font-size: 14px;
    color: ${u.Colors.Black[900]};
    overscroll-behavior-y: none;
    overflow: hidden;
  }
  body > #app {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  button {
    font-family: ${u.Fonts.Grotesk};
    font-size: 1rem;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
    font-family: ${u.Fonts.Inter};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${u.Fonts.Grotesk};
    margin: 0;
    padding: 0;
    font-weight: 700;
  }

  h1 {
    font-size: 40px;
    line-height: 48px
  }
  h2 {
    font-size: 32px;
    line-height: 40px
  }
  h3 {
    font-size: 24px;
    line-height: 32px
  }
  h4 {
    font-size: 20px;
    line-height: 28px
  }
  h5 {
    font-size: 16px;
    line-height: 424px
  }
  h6 {
    font-size: 14px;
    line-height: 20px
  }
  a {
    text-decoration: none;
    font-family: ${u.Fonts.Grotesk};
  }
  input {
    font-family: ${u.Fonts.Grotesk};
    
    &::placeholder {
      font-family: ${u.Fonts.Inter};
    }
  }

  h1, h2, h3, h4, h5, h6, p, span, ul, ol, li, a, div, i, button, input {
    &::selection {
      color: ${u.Colors.Blue[50]};
      background-color: ${u.Colors.Blue[500]};
    }
  }
//# sourceMappingURL=main.3809b57dc15789bdf232.js.map