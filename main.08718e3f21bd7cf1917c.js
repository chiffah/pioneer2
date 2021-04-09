/*! For license information please see main.08718e3f21bd7cf1917c.js.LICENSE.txt */
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
`},91381:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionAccount=void 0;const r=n(t(2784)),i=t(88954),a=t(31604),o=t(88345),s=t(41469);A.OptionAccount=({option:e})=>{const A=o.useBalance(e.address);return r.default.createElement(r.default.Fragment,null,r.default.createElement(s.AccountInfo,{account:e}),r.default.createElement(i.BalanceInfoInRow,null,r.default.createElement(i.InfoTitle,null,"Transferable balance"),r.default.createElement(i.InfoValue,null,r.default.createElement(a.TokenValue,{value:null==A?void 0:A.transferable}))))}},90938:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionListAccount=void 0;const r=n(t(2784)),i=t(52019),a=t(91381);A.OptionListAccount=r.default.memo((({options:e,onChange:A})=>r.default.createElement(i.OptionsListComponent,null,e.map((e=>r.default.createElement(i.Option,{key:e.address,onClick:()=>A&&A(e)},r.default.createElement(a.OptionAccount,{option:e})))))))},67738:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.SelectAccount=A.filterAccount=void 0;const a=i(t(2784)),o=t(52019),s=t(87795),u=t(42482),c=t(3307),l=t(85079),d=t(15838),f=t(91381),g=t(90938);A.filterAccount=e=>{const A="string"==typeof e?e:null==e?void 0:e.address;return e?e=>e.address!==A:()=>!0},A.SelectAccount=a.default.memo((({onChange:e,filter:A,selected:t})=>{const{allAccounts:n}=u.useAccounts(),r=n.filter(A||(()=>!0)),[i,h]=a.useState(t),[p,m]=a.useState(""),y=a.useMemo((()=>d.filterByText(r,p)),[p,r]),I=s.useKeyring();return a.useEffect((()=>{0===y.length&&l.isValidAddress(p,I)&&(!i||i.address!==p)&&h(c.accountOrNamed(n,p,"Unsaved account"))}),[y,p,i]),a.default.createElement(o.Select,{selected:i,onChange:e,disabled:!1,renderSelected:e=>a.default.createElement(f.OptionAccount,{option:e}),placeholder:"Select account or paste account address",renderList:e=>a.default.createElement(g.OptionListAccount,{onChange:e,options:y}),onSearch:e=>m(e)})}))},64297:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SelectedAccount=void 0;const r=n(t(2784)),i=t(55017),a=t(24895),o=t(88954),s=t(31604),u=t(88345),c=t(41469);A.SelectedAccount=({account:e})=>{const{transferable:A}=u.useBalance(e.address)||{};return r.default.createElement(o.LockedAccount,null,r.default.createElement(c.AccountInfo,{account:e}),r.default.createElement(o.BalanceInfoInRow,null,r.default.createElement(o.InfoTitle,null,"Transferable balance"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:A}))),r.default.createElement(i.ToggleButton,{className:"ui-toggle",disabled:!0},r.default.createElement(a.ArrowDownIcon,null)))}},15838:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.filterByText=void 0,A.filterByText=function(e,A){return e.filter((e=>{var t;return(null===(t=e.name)||void 0===t?void 0:t.toLocaleLowerCase().includes(A.toLocaleLowerCase()))||e.address.includes(A)}))}},11679:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(67738),A),r(t(64297),A)},89300:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferButtonStyled=A.TransferButton=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(86096),o=t(67312),s=t(12101),u=t(19221);A.TransferButton=function({from:e,to:A,disabled:t}){const{showModal:n}=u.useModal(),i=!e&&!A,a=i?"transfer":e&&!i?"send":"receive",s=!!t;return r.default.createElement(c,{size:"medium",square:!0,onClick:()=>n({modal:"TransferTokens",data:{from:e,to:A}}),disabled:s},r.default.createElement(o.PickedTransferIcon,{type:a}))},A.TransferButtonStyled=function(){const{showModal:e}=u.useModal();return r.default.createElement(l,{size:"small",square:!0,onClick:()=>e({modal:"TransferTokens",data:{}})},r.default.createElement(o.PickedTransferIcon,{type:"transfer"}))};const c=i.default(a.ButtonGhost)`
  svg {
    color: ${s.Colors.Black[900]};
  }
`,l=i.default(a.ButtonPrimary)`
  width: 32px;
  height: 32px;
  grid-area: balancetransfer;
  justify-self: end;
`},42482:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useAccounts=void 0;const n=t(2784),r=t(6846);A.useAccounts=function(){return n.useContext(r.AccountsContext)}},88345:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.useBalance=A.toBalances=void 0;const r=n(t(62197)),i=t(1361),a=t(28443);function o(e){const{lockedBalance:A,availableBalance:t}=e;return{total:t.add(A),transferable:t,locked:A,recoverable:new r.default(0)}}A.toBalances=o,A.useBalance=e=>{const{api:A}=i.useApi(),t=a.useObservable(e?null==A?void 0:A.derive.balances.all(e):void 0,[A,e]);return void 0===t?null:o(t)}},6908:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useBalances=void 0;const n=t(24496),r=t(56276),i=t(1361),a=t(28443),o=t(42482),s=t(88345);A.useBalances=function(){const{hasAccounts:e,allAccounts:A}=o.useAccounts(),{isConnected:t,api:u}=i.useApi(),c=A.map((e=>e.address)),l=u?c.map((e=>u.derive.balances.all(e).pipe(r.map(s.toBalances)))):[],d=a.useObservable(n.combineLatest(l),[u,JSON.stringify(c)]);return e&&t&&d?d.reduce(((e,A,t)=>Object.assign({[c[t]]:A},e)),{}):{}}},40531:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.useTotalBalances=A.zeroBalance=void 0;const r=n(t(62197)),i=t(6908);A.zeroBalance=()=>({recoverable:new r.default(0),locked:new r.default(0),transferable:new r.default(0),total:new r.default(0)});const a=(e,A)=>({recoverable:e.recoverable.add(A.recoverable),locked:e.locked.add(A.locked),transferable:e.transferable.add(A.transferable),total:e.total.add(A.total)});A.useTotalBalances=function(){const e=i.useBalances();return[...Object.values(e)].reduce(a,A.zeroBalance())}},48592:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useTransactionFee=void 0;const n=t(2784),r=t(28443),i=t(88345);A.useTransactionFee=function(e,A){const t=r.useObservable(null==A?void 0:A.paymentInfo(e||""),[A,e]),a=i.useBalance(e);return n.useMemo((()=>a&&t?{transactionFee:t.partialFee,canAfford:a.transferable.gte(t.partialFee)}:void 0),[a,t])}},38611:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferFormModal=void 0;const o=a(t(62197)),s=i(t(2784)),u=a(t(52275)),c=t(86096),l=t(85534),d=t(67312),f=t(76488),g=t(88954),h=t(65639),p=t(69051),m=t(11679),y=t(88345);A.TransferFormModal=function({from:e,to:A,onClose:t,onAccept:n,title:r}){var i;const[a,u]=s.useState(A),[E,C]=s.useState(e),[v,b]=h.useNumberInput(0),w=y.useBalance(null==E?void 0:E.address),Q=s.useCallback(m.filterAccount(a),[a]),M=null!==(i=null==w?void 0:w.transferable)&&void 0!==i?i:new o.default(0),S=s.useCallback(m.filterAccount(E),[E]),D=new o.default(v).lte(new o.default(0)),_=new o.default(v).gt(M||0),k=D||_||!a,N=!E;return s.default.createElement(f.Modal,{modalSize:"m",onClose:t},s.default.createElement(f.ModalHeader,{onClick:t,title:r,icon:s.default.createElement(d.PickedTransferIcon,{type:e?"send":A?"receive":"transfer"})}),s.default.createElement(f.ModalBody,null,s.default.createElement(g.Row,null,s.default.createElement(l.InputComponent,{required:!0,inputSize:"l",label:"From",id:"transfer-from-input",disabled:!!e,borderless:!!e},e?s.default.createElement(m.SelectedAccount,{account:e}):s.default.createElement(m.SelectAccount,{filter:Q,onChange:C}))),s.default.createElement(g.TransactionAmount,null,s.default.createElement(l.InputComponent,{label:"Number of tokens",id:"amount-input",disabled:N,required:!0,inputWidth:"s",units:"JOY"},s.default.createElement(l.InputNumber,{id:"amount-input",value:p.formatTokenValue(new o.default(v)),onChange:e=>b(e.target.value),disabled:N,placeholder:"0"})),s.default.createElement(I,null,s.default.createElement(B,{size:"small",onClick:()=>b(M.div(new o.default(2)).toString()),disabled:N},"Use half"),s.default.createElement(B,{size:"small",onClick:()=>b(M.toString()),disabled:N},"Use max"))),s.default.createElement(g.Row,null,s.default.createElement(l.InputComponent,{required:!0,inputSize:"l",label:"Destination account",id:"transfer-to-input",disabled:!!A,borderless:!!A},A?s.default.createElement(m.SelectedAccount,{account:A}):s.default.createElement(m.SelectAccount,{filter:S,onChange:u})))),s.default.createElement(f.ModalFooter,null,s.default.createElement(c.ButtonPrimary,{size:"medium",onClick:()=>{v&&a&&E&&n(new o.default(v),E,a)},disabled:k},"Transfer tokens")))};const I=u.default.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  width: fit-content;
  height: 46px;
  align-items: center;
`,B=u.default(c.ButtonGhost)`
  height: 26px;
  padding: 4px 6px;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
`},62291:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferModal=void 0;const o=a(t(62197)),s=i(t(2784)),u=t(15912),c=t(31604),l=t(19221),d=t(38611),f=t(90997),g=t(7283);A.TransferModal=function(){const{hideModal:e,modalData:A}=l.useModal(),{from:t,to:n}=A,[r,i]=s.useState("PREPARE"),[a,h]=s.useState(new o.default(0)),[p,m]=s.useState(new o.default(0)),[y,I]=s.useState(t),[B,E]=s.useState(n),C=t||n?t?"Send tokens":"Receive tokens":"Transfer tokens";return"PREPARE"!==r&&B&&y?"AUTHORIZE"===r?s.default.createElement(f.TransferSignModal,{onClose:e,from:y,amount:a,to:B,onDone:(e,A,t)=>{i(e?"SUCCESS":"ERROR"),m(t)}}):"SUCCESS"===r?s.default.createElement(g.TransferSuccessModal,{onClose:e,from:y,to:B,amount:a,fee:p}):s.default.createElement(u.FailureModal,{onClose:e},"You haven’t transferred ",s.default.createElement(c.TokenValue,{value:a})," stake from “",y.name,"” account to “",B.name,"” destination."):s.default.createElement(d.TransferFormModal,{onClose:e,from:y,to:B,onAccept:(e,A,t)=>{h(e),E(t),I(A),i("AUTHORIZE")},title:C})}},90997:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferSignModal=void 0;const a=i(t(2784)),o=t(86096),s=t(76746),u=t(24895),c=t(76488),l=t(88954),d=t(22807),f=t(31604),g=t(1361),h=t(28711),p=t(41469),m=t(88345);A.TransferSignModal=function({onClose:e,from:A,amount:t,to:n,onDone:r}){const i=n.address,y=A.address,I=m.useBalance(y),B=m.useBalance(i),{api:E}=g.useApi(),C=a.useMemo((()=>{var e,A;return null===(A=null===(e=null==E?void 0:E.tx)||void 0===e?void 0:e.balances)||void 0===A?void 0:A.transfer(i,t)}),[i,t]),{paymentInfo:v,send:b,status:w}=h.useSignAndSendTransaction({transaction:C,signer:y,onDone:r});return a.default.createElement(d.TransactionModal,{status:w,onClose:e},a.default.createElement(c.ModalBody,null,a.default.createElement(c.SignTransferContainer,null,a.default.createElement(l.Row,null,a.default.createElement(f.TextMedium,{margin:"xl"},"You are transferring ",a.default.createElement(f.TokenValue,{value:t})," stake from “",A.name,"” account to “",n.name,"”"," ","destination."),a.default.createElement(l.LockedAccount,null,a.default.createElement(p.AccountInfo,{account:A}),a.default.createElement(l.BalanceInfoInRow,null,a.default.createElement(l.InfoTitle,null,"Transferable balance"),a.default.createElement(l.InfoValue,null,a.default.createElement(f.TokenValue,{value:null==I?void 0:I.transferable}))))),a.default.createElement(l.TransactionAmountInfo,null,a.default.createElement(u.ArrowDownExpandedIcon,null),a.default.createElement(l.TransactionAmountInfoText,null,"Transferring ",a.default.createElement(f.TokenValue,{value:t}))),a.default.createElement(l.Row,null,a.default.createElement(l.LockedAccount,null,a.default.createElement(p.AccountInfo,{account:n}),a.default.createElement(l.BalanceInfoInRow,null,a.default.createElement(l.InfoTitle,null,"Transferable balance"),a.default.createElement(l.InfoValue,null,a.default.createElement(f.TokenValue,{value:null==B?void 0:B.transferable}))))))),a.default.createElement(c.ModalFooter,null,a.default.createElement(l.TransactionInfo,null,a.default.createElement(l.BalanceInfoNarrow,null,a.default.createElement(l.InfoTitle,null,"Amount:"),a.default.createElement(l.InfoValue,null,a.default.createElement(f.TokenValue,{value:t}))),a.default.createElement(l.BalanceInfoNarrow,null,a.default.createElement(l.InfoTitle,null,"Transaction fee:"),a.default.createElement(l.InfoValue,null,a.default.createElement(f.TokenValue,{value:null==v?void 0:v.partialFee.toBn()})),a.default.createElement(s.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora mollitia necessitatibus, eos recusandae obcaecati facilis sed maiores. Impedit iusto expedita natus perspiciatis, perferendis totam commodi ad, illo, veritatis omnis beatae.Facilis natus recusandae, magni saepe hic veniam aliquid tempore quia assumenda voluptatum reprehenderit. Officiis provident nam corrupti, incidunt, repudiandae accusantium porro libero ipsam illo quae ratione. Beatae itaque quo quidem.",absolute:!0}))),a.default.createElement(o.ButtonPrimary,{size:"medium",onClick:b,disabled:"READY"!==w},"Sign transaction and Transfer")))}},7283:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferSuccessModal=void 0;const r=n(t(2784)),i=t(24895),a=t(76488),o=t(88954),s=t(31604),u=t(41469),c=t(88345);A.TransferSuccessModal=function({onClose:e,from:A,to:t,amount:n,fee:l}){const d=c.useBalance(A.address),f=c.useBalance(t.address);if(!d||!f)return r.default.createElement(r.default.Fragment,null);const g=d.transferable,h=g.add(n).add(l),p=f.transferable,m=p.sub(n);return r.default.createElement(a.Modal,{modalSize:"m",modalHeight:"s",onClose:e},r.default.createElement(a.ModalHeader,{onClick:e,title:"Success",icon:r.default.createElement(i.SuccessIcon,null)}),r.default.createElement(a.SuccessModalBody,null,r.default.createElement(s.TextMedium,{margin:"l"},"You have just successfully transferred balance from"),r.default.createElement(o.LockedAccount,null,r.default.createElement(u.AccountInfo,{account:A}),r.default.createElement(o.BalanceInfo,null,r.default.createElement(o.InfoTitle,null,"Transferable balance before:"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:h})),r.default.createElement(o.InfoTitle,null,"Transferable balance after:"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:g})))),r.default.createElement(o.TransactionAmountInfo,null,r.default.createElement(i.ArrowDownExpandedIcon,null),r.default.createElement(o.TransactionAmountInfoText,null,"Transferred ",r.default.createElement(s.TokenValue,{value:n}))),r.default.createElement(o.LockedAccount,null,r.default.createElement(u.AccountInfo,{account:t}),r.default.createElement(o.BalanceInfo,null,r.default.createElement(o.InfoTitle,null,"Transferable balance before:"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:m})),r.default.createElement(o.InfoTitle,null,"Transferable balance after:"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:p}))))))}},10055:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(62291),A),r(t(28298),A)},28298:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0})},53892:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.BalanceComparator=void 0;const r=n(t(62197)),i=t(19709);A.BalanceComparator=(e,A,t)=>(n,a)=>{var o,s;const u=(null===(o=e[n.address])||void 0===o?void 0:o[A])||new r.default(0),c=(null===(s=e[a.address])||void 0===s?void 0:s[A])||new r.default(0);return i.applyOrder(u.cmp(c),t)}},3307:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.accountOrNamed=void 0,A.accountOrNamed=(e,A,t)=>{const n=e.find((e=>e.address===A));return null!=n?n:{address:A,name:t}}},86325:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.filterAccounts=void 0;const r=n(t(62197));A.filterAccounts=(e,A,t)=>A?e:e.filter((({address:e})=>t[e]&&t[e].total.gt(new r.default(0))))},85079:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.isValidAddress=void 0,A.isValidAddress=function(e,A){try{A.encodeAddress(A.decodeAddress(e))}catch(e){return!1}return!0}},89905:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.sortAccounts=void 0;const n=t(19709),r=t(53892);A.sortAccounts=function(e,A,t,i=!1){return"name"===t?e.sort(n.Comparator(i,t).string):e.sort(r.BalanceComparator(A,t,i))}},6846:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.AccountsContext=void 0;const n=t(2784);A.AccountsContext=n.createContext({hasAccounts:!1,allAccounts:[]})},32415:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.AccountsContextProvider=void 0;const a=t(2028),o=i(t(2784)),s=t(87795),u=t(28443),c=t(6846);A.AccountsContextProvider=e=>{const A=s.useKeyring(),[t,n]=o.useState(!1),[r,i]=o.useState(!1);var l,d;o.useEffect((l=()=>n(!0),d=()=>i(!0),()=>{let e=0;const A=setInterval((()=>{Object.keys(window.injectedWeb3).length?(clearInterval(A),l()):(e+=20,e>=1e3&&(clearInterval(A),d()))}),20);return()=>clearInterval(A)}),[]),o.useEffect((()=>{t&&(async e=>{await a.web3Enable("Pioneer");const A=(await a.web3Accounts()).map((({address:e,meta:A})=>({address:e,meta:Object.assign(Object.assign({},A),{name:`${A.name} (${A.source})`})})));(function(e){try{return!!e.keyring}catch(e){return!1}})(e)||e.loadAll({isDevelopment:!0},A)})(A).catch(console.error)}),[t]);const f=u.useObservable(A.accounts.subject.asObservable(),[A]),g=[];f&&g.push(...Object.values(f).map((e=>({address:e.json.address,name:e.json.meta.name}))));const h={allAccounts:g,hasAccounts:0!==g.length};return r&&(h.error="EXTENSION"),o.default.createElement(c.AccountsContext.Provider,{value:h},e.children)}},96646:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.App=void 0;const r=n(t(2784)),i=t(76410),a=t(27544),o=t(2040),s=t(60740),u=t(18809),c=t(45695),l=t(58430),d=t(97525),f=t(50695);A.App=()=>r.default.createElement(f.Providers,null,r.default.createElement(i.Switch,null,r.default.createElement(i.Route,{exact:!0,path:"/profile",component:u.MyAccounts}),r.default.createElement(i.Route,{exact:!0,path:"/profile/memberships",component:c.MyMemberships}),r.default.createElement(i.Route,{exact:!0,path:"/groups",component:d.WorkingGroups}),r.default.createElement(i.Route,{exact:!0,path:"/groups/grouppreview",component:l.WorkingGroup}),r.default.createElement(i.Redirect,{exact:!0,from:"/",to:"/profile"})),r.default.createElement(a.ConnectionStatus,null),r.default.createElement(o.ExtensionWarning,null),r.default.createElement(s.GlobalModals,null))},60740:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.GlobalModals=void 0;const r=n(t(2784)),i=t(10055),a=t(19221),o=t(8182),s=t(50291),u=t(26885);A.GlobalModals=()=>{const{modal:e}=a.useModal();switch(e){case"Member":return r.default.createElement(o.MemberProfile,null);case"BuyMembership":return r.default.createElement(s.BuyMembershipModal,null);case"TransferInvites":return r.default.createElement(u.TransferInviteModal,null);case"TransferTokens":return r.default.createElement(i.TransferModal,null);default:return null}}},50695:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Providers=void 0;const r=t(73059),i=n(t(2784)),a=t(76410),o=t(32415),s=t(26129),u=t(97136),c=t(71458),l=t(27813),d=t(61999),f=t(20184),g=t(52905),h=t(86693),p=g.makeServer(),m=new r.ApolloClient({uri:"http://localhost:8081/graphql",cache:new r.InMemoryCache});A.Providers=e=>i.default.createElement(u.KeyringContextProvider,null,i.default.createElement(o.AccountsContextProvider,null,i.default.createElement(s.ApiContextProvider,null,i.default.createElement(l.ServerContextProvider,{value:p},i.default.createElement(r.ApolloProvider,{client:m},i.default.createElement(d.MembershipContextProvider,null,i.default.createElement(a.HashRouter,null,i.default.createElement(c.ModalContextProvider,null,i.default.createElement(f.Mocks,null),i.default.createElement(h.GlobalStyle,null),e.children))))))))},2040:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.ExtensionWarning=void 0;const a=i(t(2784)),o=t(42482),s=t(46020);A.ExtensionWarning=function(){const{error:e}=o.useAccounts(),[A,t]=a.useState(!1);return a.useEffect((()=>{"EXTENSION"===e&&t(!0)}),[e]),a.useEffect((()=>{if(!A)return;const e=setTimeout((()=>t(!1)),1e4);return()=>clearTimeout(e)}),[A]),A?a.default.createElement(s.SideNotification,{onClick:()=>t(!1),title:"Extension unavailable",message:"You need a Polkadot.js extension to use this site.",isError:!0}):null}},17554:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SideBar=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(35442),o=t(97426),s=t(20389),u=t(20828),c=t(84432),l=t(36085),d=t(47105),f=t(55805);A.SideBar=()=>r.default.createElement(u.Navigation,null,r.default.createElement(c.NavigationHeader,null,r.default.createElement(s.LogoLink,null)),r.default.createElement(g,null,r.default.createElement(h,null,r.default.createElement(l.NavigationLink,{to:"/profile"},r.default.createElement(a.MyProfileIcon,null),"My profile")),r.default.createElement(h,null,r.default.createElement(l.NavigationLink,{to:"/groups"},r.default.createElement(o.WorkingGroupsIcon,null),"Working Groups"))),r.default.createElement(f.ProfileComponent,null),r.default.createElement(d.Version,null));const g=i.default.ul`
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
`},81495:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(96646),A)},38705:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyMembershipsContent=A.MyProfileContent=A.MyProfile=void 0;const r=n(t(52275));A.MyProfile=r.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 24px;
  width: 100%;
`,A.MyProfileContent=r.default.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px auto;
  grid-template-areas:
    'accountstabs'
    'accountstable';
  grid-row-gap: 18px;
  width: 100%;
`,A.MyMembershipsContent=r.default.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`},41108:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Accounts=void 0;const o=a(t(62197)),s=i(t(2784)),u=a(t(52275)),c=t(41469),l=t(89300),d=t(42482),f=t(88345),g=t(6908),h=t(86325),p=t(89905),m=t(16400),y=t(89451),I=t(31604),B=t(12101),E=t(98582);A.Accounts=function(){const{allAccounts:e,hasAccounts:A}=d.useAccounts(),[t,n]=s.useState(!0),r=g.useBalances(),[i,a]=s.useState("name"),[o,u]=s.useState(!1),c=s.useMemo((()=>h.filterAccounts(e,t,r)),[e,t,A]),l=s.useMemo((()=>p.sortAccounts(c,r,i,o)),[c,r,i,o]);if(!A)return s.default.createElement(k,null,"Loading accounts...");const f=({children:e,sortKey:A})=>{return s.default.createElement(Q,{onClick:(t=A,()=>E.setOrder(t,i,a,o,u))},s.default.createElement(y.HeaderText,null,e,i===A&&(o?s.default.createElement(y.SortIconDown,null):s.default.createElement(y.SortIconUp,null))));var t};return s.default.createElement(s.default.Fragment,null,s.default.createElement(v,{tabsSize:"xs"},s.default.createElement(m.PageTab,{active:t,onClick:()=>!t&&n(!0)},"All accounts"),s.default.createElement(m.PageTab,{active:!t,onClick:()=>t&&n(!1)},"Transferable balance")),s.default.createElement(b,null,s.default.createElement(w,null,s.default.createElement(f,{sortKey:"name"},"Account"),s.default.createElement(f,{sortKey:"total"},"Total balance"),s.default.createElement(f,{sortKey:"locked"},"Locked balance"),s.default.createElement(f,{sortKey:"recoverable"},"Recoverable balance"),s.default.createElement(f,{sortKey:"transferable"},"Transferable balance")),s.default.createElement(M,null,l.map((e=>s.default.createElement(C,{key:e.address,account:e}))))))};const C=({account:e})=>{const A=e.address,t=f.useBalance(A),n=!(null==t?void 0:t.transferable)||!t.transferable.gt(new o.default(0));return s.default.createElement(S,{key:A},s.default.createElement(c.AccountInfo,{account:e}),s.default.createElement(D,null,s.default.createElement(I.TokenValue,{value:null==t?void 0:t.total})),s.default.createElement(D,null,s.default.createElement(I.TokenValue,{value:null==t?void 0:t.locked})),s.default.createElement(D,null,s.default.createElement(I.TokenValue,{value:null==t?void 0:t.recoverable})),s.default.createElement(D,null,s.default.createElement(I.TokenValue,{value:null==t?void 0:t.transferable})),s.default.createElement(_,null,s.default.createElement(l.TransferButton,{to:e}),s.default.createElement(l.TransferButton,{from:e,disabled:n})))},v=u.default(m.PageTabsNav)`
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
`,w=u.default.div`
  display: grid;
  grid-area: accountstablenav;
  grid-template-rows: 1fr;
  grid-template-columns: 276px repeat(4, 128px) 136px;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
`,Q=u.default.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  justify-self: end;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${B.Colors.Black[400]};
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
`,S=u.default.li`
  display: grid;
  grid-template-columns: 276px repeat(4, 128px) 136px;
  grid-template-rows: 1fr;
  justify-content: space-between;
  justify-items: end;
  align-items: center;
  width: 100%;
  height: ${B.Sizes.accountHeight};
  padding: 16px 0 16px 14px;
  border: 1px solid ${B.Colors.Black[100]};
  border-radius: ${B.BorderRad.s};

  & + & {
    margin-top: -1px;
  }
`,D=u.default.p``,_=u.default.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
  grid-template-rows: 40px;
  grid-column-gap: 8px;
`,k=u.default.div`
  font-size: 2em;
`},52136:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyAccounts=void 0;const r=n(t(2784)),i=t(40531),a=t(11667),o=t(12510),s=t(10686),u=t(209),c=t(31294),l=t(70705),d=t(17554),f=t(38705),g=t(91755),h=t(41108);A.MyAccounts=function(){const{total:e,transferable:A,locked:t,recoverable:n}=i.useTotalBalances();return r.default.createElement(a.Page,null,r.default.createElement(d.SideBar,null),r.default.createElement(o.PageContent,null,r.default.createElement(c.Breadcrumbs,{crumbs:[{href:"#",text:"My Profile"},{href:"#",text:"My Accounts"}]}),r.default.createElement(f.MyProfile,null,r.default.createElement(s.PageHeader,null,r.default.createElement(u.PageTitle,null,"My profile"),r.default.createElement(g.MyProfileTabs,null),r.default.createElement(l.Statistics,{stats:[{title:"Total balance",helperText:"Lorem fishy",value:e},{title:"Total transferable balance",helperText:"Lorem fishy",value:A},{title:"Total locked balance",helperText:"Lorem fishy",value:t},{title:"Total recoverable",helperText:"Lorem fishy",value:n}]})),r.default.createElement(f.MyProfileContent,null,r.default.createElement(h.Accounts,null)))))}},98582:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.setOrder=void 0,A.setOrder=function(e,A,t,n,r){e===A?r(!n):(r("name"!==e),t(e))}},18809:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(52136),A)},22656:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MemberItem=void 0;const o=i(t(2784)),s=a(t(52275)),u=t(27070),c=t(12101),l=t(19221),d=t(60956),f=t(20843),g=t(31968);A.MemberItem=({member:e})=>{const{showModal:A}=l.useModal(),t=o.useCallback((()=>{A({modal:"Member",data:{id:e.id}})}),[e.id]);return o.default.createElement(p,null,o.default.createElement(m,null,o.default.createElement(d.MemberInfo,{member:e,onClick:t,showId:!0})),o.default.createElement(y,null,o.default.createElement(d.MemberRoleHelp,{memberRole:"SL",size:"l",helperText:"Lorem fishy"}),o.default.createElement(d.MemberRoleHelp,{memberRole:"SP",size:"l",helperText:"Lorem fishy"}),o.default.createElement(d.MemberRoleHelp,{memberRole:"RL",size:"l",helperText:"Lorem fishy"}),o.default.createElement(d.MemberRoleHelp,{memberRole:"LI",size:"l",helperText:"Lorem fishy"}),o.default.createElement(d.MemberRoleHelp,{memberRole:"SR",size:"l",helperText:"Lorem fishy"})),o.default.createElement(m,null,o.default.createElement(h,null,"0 times")),o.default.createElement(m,null,o.default.createElement(h,null,"0 times")),o.default.createElement(m,null,o.default.createElement(h,null,e.inviteCount),o.default.createElement(g.TransferInviteButton,{member:e})),o.default.createElement(m,null,o.default.createElement(h,null,"0")),o.default.createElement(I,null,o.default.createElement(f.EditMembershipButton,{member:e,size:"small"},o.default.createElement(u.EditSymbol,null))))};const h=s.default.span`
  font-family: ${c.Fonts.Grotesk};
  font-weight: 700;
`,p=s.default.li`
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
`,m=s.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  align-items: center;
  width: fit-content;
  max-width: 100%;
`,y=s.default(m)`
  grid-template-columns: repeat(auto-fill, 24px);
  grid-auto-flow: dense;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  width: 100%;
  max-width: 164px;
  max-height: 52px;
`,I=s.default.div``},14395:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Memberships=void 0;const o=i(t(2784)),s=a(t(52275)),u=t(86096),c=t(89451),l=t(31604),d=t(12101),f=t(17129),g=t(3363),h=t(54065),p=t(6395),m=t(92097),y=t(22656);A.Memberships=function(){const{count:e,isLoading:A,members:t,active:n}=h.useMyMemberships(),r=!!e;if(A)return o.default.createElement(_,null,"Loading...");if(!r)return o.default.createElement(E,null,o.default.createElement(C,null,o.default.createElement("h3",null,"You have no active membership"),o.default.createElement(l.TextMedium,null,"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.")),o.default.createElement(B,null,"Create a membership"));const i=t.filter((e=>!n||n.handle!==e.handle));return o.default.createElement(v,null,o.default.createElement(b,null,o.default.createElement(g.InviteMemberButton,{size:"medium"},"Invite a member"),o.default.createElement(f.AddMembershipButton,{size:"medium"},"Add Membership")),!!n&&o.default.createElement(I,{title:"Active membership",members:[n]}),!!i.length&&o.default.createElement(I,{title:"Other memberships",members:i}))};const I=({title:e,members:A})=>{const[t,n]=o.useState("handle"),[r,i]=o.useState(!1),a=o.useMemo((()=>p.sortMemberships(A,t,r)),[A,t,r]),s=({children:e,sortKey:A})=>{return o.default.createElement(S,{onClick:A&&(a=A,()=>m.setOrder(a,t,n,r,i))},o.default.createElement(c.HeaderText,null,e,t===A&&(r?o.default.createElement(c.SortIconDown,null):o.default.createElement(c.SortIconUp,null))));var a},u=a.length>1;return o.default.createElement(o.default.Fragment,null,o.default.createElement(w,null,e),o.default.createElement(Q,null,o.default.createElement(M,null,o.default.createElement(s,{sortKey:u?"handle":void 0},"Memeberships"),o.default.createElement(S,null,"Roles"),o.default.createElement(S,null,"Slashed"),o.default.createElement(S,null,"Terminated"),o.default.createElement(s,{sortKey:u?"inviteCount":void 0},"Invitations"),o.default.createElement(S,null,"Invited")),o.default.createElement(D,null,a.map((e=>o.default.createElement(y.MemberItem,{member:e,key:e.handle}))))))},B=s.default(f.AddMembershipButton)`
  grid-area: none;
  margin-top: 24px;
`,E=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 420px;
  margin: 124px auto 0;
`,C=s.default.div`
  width: 100%;

  ${l.TextMedium} {
    margin-top: 16px;
  }
`,v=s.default.div`
  display: grid;
  position: relative;
  grid-row-gap: 26px;
  width: 100%;
  padding-top: 12px;
`,b=s.default(u.ButtonsGroup)`
  position: absolute;
  right: 0;
  top: 0;
`,w=s.default.h6`
  margin-top: 4px;
`,Q=s.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16px auto;
  grid-template-areas:
    'accountstablenav'
    'accountslist';
  grid-row-gap: 5px;
  width: 100%;
`,M=s.default.div`
  display: grid;
  grid-area: accountstablenav;
  grid-template-rows: 1fr;
  grid-template-columns: 194px 200px 76px 76px 96px 76px 54px;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
`,S=s.default.span`
  display: flex;
  align-items: center;
  align-content: center;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${d.Colors.Black[400]};
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
`,D=s.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`,_=s.default.div`
  font-size: 2em;
`},27255:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyMemberships=void 0;const r=n(t(2784)),i=t(11667),a=t(12510),o=t(10686),s=t(209),u=t(31294),c=t(17554),l=t(38705),d=t(91755),f=t(14395);A.MyMemberships=()=>r.default.createElement(i.Page,null,r.default.createElement(c.SideBar,null),r.default.createElement(a.PageContent,null,r.default.createElement(u.Breadcrumbs,{crumbs:[{href:"#",text:"My Profile"},{href:"#",text:"My Memberships"}]}),r.default.createElement(l.MyProfile,null,r.default.createElement(o.PageHeader,null,r.default.createElement(s.PageTitle,null,"My profile"),r.default.createElement(d.MyProfileTabs,null)),r.default.createElement(l.MyMembershipsContent,null,r.default.createElement(f.Memberships,null)))))},92097:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.setOrder=void 0,A.setOrder=function(e,A,t,n,r){e===A?r(!n):(r("handle"!==e),t(e))}},45695:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(27255),A)},91755:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyProfileTabs=void 0;const r=n(t(2784)),i=t(76410),a=t(16400);A.MyProfileTabs=function(){const e=i.useHistory(),A=!!i.useRouteMatch({exact:!0,path:"/profile"}),t=!!i.useRouteMatch("/profile/memberships");return r.default.createElement(a.Tabs,{tabs:[{inner:"My accounts",active:A,onClick:()=>e.push("/profile")},{inner:"My memberships",active:t,onClick:()=>e.push("/profile/memberships")}]})}},76923:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.GroupContent=A.GroupsContainer=void 0;const r=n(t(52275));A.GroupsContainer=r.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 24px;
  width: 100%;
`,A.GroupContent=r.default.div`
  display: grid;
  grid-row-gap: 24px;
  width: 100%;
`},28210:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OpeningItem=A.OpeningsList=A.OpeningsCategory=A.OpeningsCategories=void 0;const r=n(t(52275)),i=t(12101);A.OpeningsCategories=r.default.div`
  display: grid;
  grid-row-gap: 24px;
  width: 100%;
`,A.OpeningsCategory=r.default.div`
  display: grid;
  grid-row-gap: 16px;
  width: 100%;
`,A.OpeningsList=r.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`,A.OpeningItem=r.default.li`
  display: grid;
  grid-template-columns: 1fr 1fr 16px;
  grid-column-gap: 24px;
  padding: 16px;
  border: 1px solid ${i.Colors.Black[100]};
  border-radius: ${i.BorderRad.s};
  background-color: ${i.Colors.White};
  transition: ${i.Transitions.all};

  & + & {
    margin-top: -1px;
  }
`},85952:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroup=void 0;const r=n(t(2784)),i=t(11667),a=t(12510),o=t(10686),s=t(209),u=t(31294),c=t(70705),l=t(31604),d=t(17554),f=t(76923),g=t(28210),h=t(5330);A.WorkingGroup=function(){return r.default.createElement(i.Page,null,r.default.createElement(d.SideBar,null),r.default.createElement(a.PageContent,null,r.default.createElement(u.Breadcrumbs,{crumbs:[{href:"#",text:"Working Groups"},{href:"#",text:"Working Groups"},{href:"#",text:"Storage"}]}),r.default.createElement(o.PageHeader,null,r.default.createElement(s.PageTitle,null,"Storage"),r.default.createElement(h.WorkingGroupTabs,null),r.default.createElement(a.ContentWithSidepanel,null,r.default.createElement(f.GroupContent,null,r.default.createElement(c.Statistics,{stats:[{title:"Current budget",helperText:"Lorem fishy",value:150200},{title:"Working Group Debt",helperText:"Lorem fishy",value:-200},{title:"Avg Stake",helperText:"Lorem fishy",value:1e5}]}),r.default.createElement(g.OpeningsCategories,null,r.default.createElement(g.OpeningsCategory,null,r.default.createElement(l.Label,null,"Upcoming openings"),r.default.createElement(g.OpeningsList,null,r.default.createElement(g.OpeningItem,null))),r.default.createElement(g.OpeningsCategory,null,r.default.createElement(l.Label,null,"Openings"),r.default.createElement(g.OpeningsList,null,r.default.createElement(g.OpeningItem,null))))),r.default.createElement(a.SidePanel,null,"Some content")))))}},5330:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroupTabs=void 0;const a=i(t(2784)),o=t(16400);A.WorkingGroupTabs=function(){const[e,A]=a.useState(!1);return a.default.createElement(o.Tabs,{tabs:[{inner:"Openings",active:e,onClick:()=>A(!0)},{inner:"About",active:!1,onClick:()=>A(!0)},{inner:"History",active:!1,onClick:()=>A(!0)}]})}},58430:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(85952),A)},41154:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroupListItem=void 0;const r=n(t(2784)),i=t(76410),a=n(t(52275)),o=t(31604),s=t(40823),u=t(12101),c=t(32964);A.WorkingGroupListItem=function({group:e}){const A=i.useHistory();return r.default.createElement(l,null,r.default.createElement(g,{onClick:()=>A.push("/groups/grouppreview")},e.image?r.default.createElement(f,{src:e.image}):r.default.createElement(d,null)),r.default.createElement(h,null,r.default.createElement(p,{onClick:()=>A.push("/groups/grouppreview")},e.name),e.about&&r.default.createElement(m,null,e.about)),r.default.createElement(y,null,r.default.createElement(I,null,r.default.createElement(B,null,"6"),r.default.createElement(s.Subscription,null,"Workers")),r.default.createElement(I,null,r.default.createElement(B,null,r.default.createElement(o.ValueInJoys,null,"130,000.00")),r.default.createElement(s.Subscription,null,"Current budget")),r.default.createElement(I,null,r.default.createElement(B,null,"1"),r.default.createElement(s.Subscription,null,"Openings")),r.default.createElement(I,null,r.default.createElement(B,null,e.leader?r.default.createElement(E,null,r.default.createElement(c.Avatar,{avatarUri:e.leader.avatarUri})):"None"),r.default.createElement(s.Subscription,null,"WG Leader"))))};const l=a.default.section`
  display: grid;
  grid-template-columns: 108px 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 24px;
  width: 100%;
  height: 100%;
  max-height: 108px;
  align-items: center;
  padding-right: 32px;
  border: 1px solid ${u.Colors.Black[100]};
  border-radius: ${u.BorderRad.s};
  background-color: ${u.Colors.White};
  overflow: hidden;
  transition: ${u.Transitions.all};

  &:hover,
  &:focus-within {
    border-color: ${u.Colors.Blue[100]};
  }
`,d=a.default(c.AvatarPlaceholderImage)`
  display: flex;
  position: absolute;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  transform: scale(0.9);
  object-fit: cover;
  transition: ${u.Transitions.all};
`,f=a.default.img`
  display: flex;
  position: absolute;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  transform: scale(0.9);
  object-fit: cover;
  transition: ${u.Transitions.all};
`,g=a.default.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-right: 1px solid ${u.Colors.Black[100]};
  overflow: hidden;
  cursor: pointer;
  transition: ${u.Transitions.all};

  &:hover {
    border-color: ${u.Colors.Blue[100]};

    ${d},
    ${f} {
      transform: scale(1);
    }
  }
`,h=a.default.article`
  display: grid;
  grid-template-rows: 24px 40px;
  grid-row-gap: 8px;
  width: 100%;
`,p=a.default.h5`
  max-width: 100%;
  ${u.Overflow.Dots};
  transition: ${u.Transitions.all};
  cursor: pointer;

  &:hover {
    color: ${u.Colors.Blue[500]};
  }
  &:active {
    color: ${u.Colors.Blue[600]};
  }
`,m=a.default(o.TextMedium)`
  hyphens: auto;
  height: fit-content;
  max-height: 100%;
  max-width: 100%;
  color: ${u.Colors.Black[500]};
  ${u.Overflow.DotsTwoLine};
`,y=a.default.div`
  display: grid;
  grid-template-columns: 64px 116px 64px 64px;
  justify-content: space-between;
  width: 100%;
  grid-column-gap: 8px;
`,I=a.default.div`
  display: grid;
  grid-row-gap: 10px;
`,B=a.default.span`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  align-items: center;
  width: fit-content;
  font-family: ${u.Fonts.Grotesk};
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${u.Colors.Black[900]};
`,E=a.default.div`
  width: 24px;
  height: 24px;
  border-radius: ${u.BorderRad.round};
  overflow: hidden;
`},51155:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroups=void 0;const r=n(t(2784)),i=t(76410),a=t(11667),o=t(12510),s=t(10686),u=t(16400),c=t(209),l=t(31294),d=t(17595),f=t(17554),g=t(76923),h=t(69038);A.WorkingGroups=()=>{const e=i.useHistory(),{isLoading:A,groups:t}=d.useWorkingGroups();return A?null:r.default.createElement(a.Page,null,r.default.createElement(f.SideBar,null),r.default.createElement(o.PageContent,null,r.default.createElement(l.Breadcrumbs,{crumbs:[{href:"#",text:"Working Groups"},{href:"#",text:"Working Groups"}]}),r.default.createElement(g.GroupsContainer,null,r.default.createElement(s.PageHeader,null,r.default.createElement(c.PageTitle,null,"Working Groups"),r.default.createElement(u.Tabs,{tabs:[{inner:"Working Groups",active:!0,onClick:()=>e.push("/groups")}]})),r.default.createElement(h.WorkingGroupsList,{groups:t}))))}},69038:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroupsList=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(41154);A.WorkingGroupsList=({groups:e})=>r.default.createElement(o,null,e.map((e=>r.default.createElement(a.WorkingGroupListItem,{key:e.name,group:e}))));const o=i.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 108px;
  grid-row-gap: 8px;
  width: 100%;
`},97525:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(51155),A)},86693:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.GlobalStyle=void 0;const r=t(52275),i=t(12101),a=n(t(48874)),o=n(t(36749)),s=n(t(28791)),u=n(t(82382));A.GlobalStyle=r.createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url(${o.default}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Inter";
    src: url(${a.default}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Grotesk";
    src: url(${u.default}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Grotesk";
    src: url(${s.default}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
  *::selection, *:before::selection, *:after::selection {
    color: ${i.Colors.Blue[50]};
    background-color: ${i.Colors.Blue[500]};
  }

  body, html {
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: ${i.Colors.White};
    font-family: ${i.Fonts.Grotesk};
    font-size: 14px;
    color: ${i.Colors.Black[900]};
    overscroll-behavior-y: none;
    overflow: hidden;
  }
  body > #app {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  button {
    font-family: ${i.Fonts.Grotesk};
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
    font-family: ${i.Fonts.Inter};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${i.Fonts.Grotesk};
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
    line-height: 24px
  }
  h6 {
    font-size: 14px;
    line-height: 20px
  }
  a {
    text-decoration: none;
    font-family: ${i.Fonts.Grotesk};
  }
  input {
    font-family: ${i.Fonts.Grotesk};

    &::placeholder {
      font-family: ${i.Fonts.Inter};
    }
  }

  h1, h2, h3, h4, h5, h6, p, span, ul, ol, li, a, div, i, button, input {
    &::selection {
      color: ${i.Colors.Blue[50]};
      background-color: ${i.Colors.Blue[500]};
      -webkit-text-stroke-color: ${i.Colors.Blue[50]};
    }
  }
`},28068:(e,A)=>{"use strict";var t,n,r,i,a,o,s;Object.defineProperty(A,"__esModule",{value:!0}),A.ApplicationFormQuestionType=A.WorkingGroupOpeningType=A.Network=A.MembershipSystemOrderByInput=A.MembershipOrderByInput=A.MembershipEntryMethod=A.BlockOrderByInput=void 0,(s=A.BlockOrderByInput||(A.BlockOrderByInput={})).CreatedAtAsc="createdAt_ASC",s.CreatedAtDesc="createdAt_DESC",s.UpdatedAtAsc="updatedAt_ASC",s.UpdatedAtDesc="updatedAt_DESC",s.DeletedAtAsc="deletedAt_ASC",s.DeletedAtDesc="deletedAt_DESC",s.BlockAsc="block_ASC",s.BlockDesc="block_DESC",s.ExecutedAtAsc="executedAt_ASC",s.ExecutedAtDesc="executedAt_DESC",s.NetworkAsc="network_ASC",s.NetworkDesc="network_DESC",(o=A.MembershipEntryMethod||(A.MembershipEntryMethod={})).Paid="PAID",o.Invited="INVITED",o.Genesis="GENESIS",(a=A.MembershipOrderByInput||(A.MembershipOrderByInput={})).CreatedAtAsc="createdAt_ASC",a.CreatedAtDesc="createdAt_DESC",a.UpdatedAtAsc="updatedAt_ASC",a.UpdatedAtDesc="updatedAt_DESC",a.DeletedAtAsc="deletedAt_ASC",a.DeletedAtDesc="deletedAt_DESC",a.HandleAsc="handle_ASC",a.HandleDesc="handle_DESC",a.NameAsc="name_ASC",a.NameDesc="name_DESC",a.AvatarUriAsc="avatarUri_ASC",a.AvatarUriDesc="avatarUri_DESC",a.AboutAsc="about_ASC",a.AboutDesc="about_DESC",a.ControllerAccountAsc="controllerAccount_ASC",a.ControllerAccountDesc="controllerAccount_DESC",a.RootAccountAsc="rootAccount_ASC",a.RootAccountDesc="rootAccount_DESC",a.RegisteredAtBlockIdAsc="registeredAtBlockId_ASC",a.RegisteredAtBlockIdDesc="registeredAtBlockId_DESC",a.RegisteredAtTimeAsc="registeredAtTime_ASC",a.RegisteredAtTimeDesc="registeredAtTime_DESC",a.EntryAsc="entry_ASC",a.EntryDesc="entry_DESC",a.IsVerifiedAsc="isVerified_ASC",a.IsVerifiedDesc="isVerified_DESC",a.InviteCountAsc="inviteCount_ASC",a.InviteCountDesc="inviteCount_DESC",a.InvitedByIdAsc="invitedById_ASC",a.InvitedByIdDesc="invitedById_DESC",a.ReferredByIdAsc="referredById_ASC",a.ReferredByIdDesc="referredById_DESC",(i=A.MembershipSystemOrderByInput||(A.MembershipSystemOrderByInput={})).CreatedAtAsc="createdAt_ASC",i.CreatedAtDesc="createdAt_DESC",i.UpdatedAtAsc="updatedAt_ASC",i.UpdatedAtDesc="updatedAt_DESC",i.DeletedAtAsc="deletedAt_ASC",i.DeletedAtDesc="deletedAt_DESC",i.DefaultInviteCountAsc="defaultInviteCount_ASC",i.DefaultInviteCountDesc="defaultInviteCount_DESC",i.MembershipPriceAsc="membershipPrice_ASC",i.MembershipPriceDesc="membershipPrice_DESC",i.ReferralCutAsc="referralCut_ASC",i.ReferralCutDesc="referralCut_DESC",i.InvitedInitialBalanceAsc="invitedInitialBalance_ASC",i.InvitedInitialBalanceDesc="invitedInitialBalance_DESC",(r=A.Network||(A.Network={})).Babylon="BABYLON",r.Alexandria="ALEXANDRIA",r.Rome="ROME",r.Olympia="OLYMPIA",(n=A.WorkingGroupOpeningType||(A.WorkingGroupOpeningType={})).Regular="REGULAR",n.Leader="LEADER",(t=A.ApplicationFormQuestionType||(A.ApplicationFormQuestionType={})).Text="TEXT",t.Textarea="TEXTAREA"},93395:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(28068),A)},27544:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.ConnectionStatus=void 0;const a=i(t(2784)),o=t(1361),s=t(46020);A.ConnectionStatus=()=>{const{isConnected:e,api:A}=o.useApi(),[t,n]=a.useState(!1);return a.useEffect((()=>{if(!A)return;const e=()=>{A.once("disconnected",t),n(!0)},t=()=>{A.once("connected",e),n(!0)};return A.once("disconnected",t),A.once("connected",e),()=>{A.off("connected",e),A.off("disconnected",t)}}),[A]),a.useEffect((()=>{if(!t)return;const e=setTimeout((()=>n(!1)),5e3);return()=>clearTimeout(e)}),[t]),t?e?a.default.createElement(s.SideNotification,{onClick:()=>n(!1),title:"Connected to network"}):a.default.createElement(s.SideNotification,{isError:!0,onClick:()=>n(!1),title:"Disconnected from network"}):null}},800:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CopyText=A.CopyGroup=A.CopyComponent=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(12101),o=t(86096);A.CopyComponent=r.default.memo((({altText:e,copyText:t,className:n})=>r.default.createElement(A.CopyGroup,{className:n},r.default.createElement(A.CopyText,null,!e&&t,e&&e),r.default.createElement(o.CopyButton,{textToCopy:t})))),A.CopyGroup=i.default.div`
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
`,A.CopyText=i.default.span`
  max-width: 152px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`},15912:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.FailureModal=void 0;const r=n(t(2784)),i=t(33939),a=t(76488);A.FailureModal=({children:e,onClose:A})=>r.default.createElement(a.Modal,{modalSize:"xs",modalHeight:"s",onClose:A},r.default.createElement(a.ModalHeader,{title:"",onClick:A,modalHeaderSize:"s"}),r.default.createElement(a.ResultModalBody,null,r.default.createElement(i.FailureIcon,null),r.default.createElement(a.ModalTitle,{as:"h4"},r.default.createElement("span",{className:"red-title"},"Oh no!")," Failure"),r.default.createElement(a.ResultText,null,e)))},76746:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.HelpComponent=A.HelperLink=A.HelperText=A.HelpPopupTitle=A.HelpContainer=A.Help=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(12101),o=t(24895),s=t(27070);A.Help=r.default.memo((({helperText:e,helperTitle:t,helperLinkText:n,helperLinkURL:i,icon:a,memberRole:c,size:l,className:d,absolute:f})=>r.default.createElement(A.HelpContainer,{absolute:f},r.default.createElement(A.HelpComponent,{size:l,className:d,memberRole:c},!c&&a&&a,!c&&!a&&r.default.createElement(o.QuestionIcon,null),c&&!a&&c),r.default.createElement(u,{size:l},t&&r.default.createElement(A.HelpPopupTitle,null,t),r.default.createElement(A.HelperText,null,e),i&&r.default.createElement(A.HelperLink,{href:i,target:"_blank"},n||"Link",r.default.createElement(s.LinkSymbol,null)))))),A.HelpContainer=i.default.div`
  display: flex;
  position: ${({absolute:e})=>e?"absolute":"relative"};
  right: ${({absolute:e})=>e?"-24px":"auto"};
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;const u=i.default.div`
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
    z-index: 1;
  }
  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: -20px;
    width: calc(100% + 16px);
    height: calc(100% + 32px);
    z-index: -1;
  }
  &:hover {
    display: flex;
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
    & ~ ${u} {
      display: flex;
    }
  }
`},76488:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ResultTextWhite=A.ResultText=A.ModalTitle=A.SignTransferContainer=A.SuccessModalBody=A.ResultModalBody=A.ScrolledModalContainer=A.ScrolledModalBody=A.ScrolledModal=A.ModalHeaderIcon=A.ModalWrap=A.ModalFooterGroup=A.ModalFooter=A.ModalBody=A.ModalTopBar=A.ModalGlass=A.Modal=A.ModalHeader=void 0;const r=n(t(2784)),i=n(t(28316)),a=n(t(52275)),o=t(12101),s=t(86096),u=t(31604);A.ModalHeader=r.default.memo((({onClick:e,title:t,icon:n,modalHeaderSize:i,className:a})=>r.default.createElement(A.ModalTopBar,{columns:n?3:2,modalHeaderSize:i,className:a},n?r.default.createElement(A.ModalHeaderIcon,null,n):null,r.default.createElement(A.ModalTitle,null,t),r.default.createElement(s.CloseButton,{onClick:e})))),A.Modal=({onClose:e,modalHeight:t="m",children:n,modalSize:a,isDark:o,className:s})=>i.default.createPortal(r.default.createElement(A.ModalGlass,{modalHeight:t,modalSize:a,isDark:o,onClick:function(A){A.target===A.currentTarget&&e()},onClose:e},r.default.createElement(A.ModalWrap,{modalMaxSize:a,modalHeight:t,isDark:o,role:"modal",className:s},n)),document.body),A.ModalGlass=a.default.div`
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
`},88954:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransactionAmountInfoText=A.TransactionAmountInfo=A.InfoValue=A.InfoTitle=A.BalanceInfoNarrow=A.BalanceInfoInRow=A.BalanceInfo=A.TransactionInfo=A.TransactionAmount=A.LockedAccount=A.AccountRow=A.Row=A.TransactionInfoLabel=void 0;const r=n(t(52275)),i=t(12101),a=t(85534),o=t(24895),s=t(31604);A.TransactionInfoLabel=r.default(a.Label)`
  display: block;
  margin-bottom: 32px;
  font-weight: 400;
  font-family: ${i.Fonts.Inter};

  ${s.ValueInJoys} {
    font-family: ${i.Fonts.Inter};
    font-weight: 700;
    color: ${i.Colors.Black[700]};
    &:after {
      font-family: ${i.Fonts.Inter};
      font-weight: 700;
      color: ${i.Colors.Black[700]};
    }
  }
`,A.Row=r.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`,A.AccountRow=r.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${i.Sizes.accountHeight};
  max-height: ${i.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${i.Colors.Black[300]};
  border-radius: ${i.BorderRad.s};
  background-color: ${i.Colors.White};
`,A.LockedAccount=r.default(A.AccountRow)`
  padding: 8px 0 8px 16px;
  grid-template-columns: 1fr 1fr 48px;
  height: ${i.Sizes.selectHeight};
  min-height: ${i.Sizes.selectHeight};
  max-height: ${i.Sizes.selectHeight};
  background-color: ${i.Colors.Black[75]};
  border: 1px solid ${i.Colors.Black[200]};
`,A.TransactionAmount=r.default.div`
  display: grid;
  grid-template-columns: 320px auto;
  grid-template-rows: 1fr;
  grid-column-gap: 12px;
  align-items: end;
`,A.TransactionInfo=r.default.div`
  display: grid;
`,A.BalanceInfo=r.default.div`
  display: inline-grid;
  position: relative;
  grid-template-columns: 1fr 168px;
  grid-template-rows: 1fr;
  align-items: center;

  & + & {
    margin-top: 4px;
  }
`,A.BalanceInfoInRow=r.default(A.BalanceInfo)`
  justify-self: end;
`,A.BalanceInfoNarrow=r.default(A.BalanceInfo)`
  grid-template-columns: 1fr 128px;
  width: auto;
`,A.InfoTitle=r.default.span`
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: right;
  color: ${i.Colors.Black[400]};
`,A.InfoValue=r.default.span`
  text-align: right;
  line-height: 20px;
`,A.TransactionAmountInfo=r.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  width: fit-content;
  justify-self: center;
  align-items: center;
  color: ${i.Colors.Black[700]};

  ${o.Icon.type} {
    width: 16px;
    height: 16px;
  }
`,A.TransactionAmountInfoText=r.default.span`
  padding: 4px 6px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${i.Colors.Black[700]};
  text-transform: uppercase;
  border-radius: ${i.BorderRad.m};
  background-color: ${i.Colors.Blue[100]};

  ${s.ValueInJoys}, ${s.ValueInJoys}:after {
    font-size: 10px;
    line-height: 16px;
    font-weight: 700;
    color: ${i.Colors.Black[700]};
  }
`},69231:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.NotificationComponent=A.Notification=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(12101),o=t(21578);A.Notification=function({hasNotification:e}){return r.default.createElement(A.NotificationComponent,{hasNotification:e},r.default.createElement(o.NotificationIcon,null))},A.NotificationComponent=i.default.div`
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
`},89451:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.HeaderText=A.SortIconUp=A.SortIconDown=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(12101),o=t(24895);A.SortIconDown=function(){return r.default.createElement(s,null,r.default.createElement(o.ArrowDownIcon,null))},A.SortIconUp=function(){return r.default.createElement(u,null,r.default.createElement(o.ArrowDownIcon,null))},A.HeaderText=i.default.span`
  display: inline-flex;
  position: relative;
  align-items: center;
  width: fit-content;
`;const s=i.default.span`
  display: inline-flex;
  position: absolute;
  left: calc(100% + 4px);
  width: fit-content;
  height: fit-content;
  transition: ${a.Transitions.all};

  ${o.Icon.type} {
    width: 12px;
    height: 12px;
    color: ${a.Colors.Black[600]};
    animation: sortArrowFlip ${a.Transitions.duration} ease;

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
`,u=i.default(s)`
  transform: rotate(180deg);
`},22807:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransactionModal=void 0;const r=n(t(2784)),i=t(76488),a=t(84878);A.TransactionModal=({status:e,onClose:A,children:t})=>"READY"===e?r.default.createElement(i.Modal,{modalSize:"m",modalHeight:"s",onClose:A},r.default.createElement(i.ModalHeader,{onClick:A,title:"Authorize transaction"}),t):"EXTENSION"===e?r.default.createElement(a.WaitModal,{onClose:A,title:"Waiting for the extension",description:"Please, sign the transaction using external signer app."}):"PENDING"===e?r.default.createElement(a.WaitModal,{onClose:A,title:"Pending transaction",description:"We are waiting for your transaction to be mined. It can takes Lorem ipsum deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}):null},84878:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WaitModal=void 0;const r=n(t(2784)),i=t(24895),a=t(70921),o=t(76488);A.WaitModal=({onClose:e,title:A,description:t})=>r.default.createElement(o.Modal,{modalSize:"xs",modalHeight:"s",isDark:!0,onClose:e},r.default.createElement(o.ModalHeader,{icon:r.default.createElement(i.Loader,null),title:"",onClick:e,modalHeaderSize:"s"}),r.default.createElement(o.ResultModalBody,null,r.default.createElement(a.WaitingIcon,null),r.default.createElement(o.ModalTitle,{as:"h4"},A),r.default.createElement(o.ResultTextWhite,null,t)))},60879:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ButtonsGroup=A.ButtonGhostStyles=A.ButtonSecondaryStyles=A.ButtonPrimaryStyles=A.ButtonGhost=A.ButtonSecondary=A.ButtonPrimary=void 0;const o=a(t(2784)),s=i(t(52275)),u=t(12101),c={large:"48px",medium:"40px",small:"32px"},l=e=>c[e.size||"large"];A.ButtonPrimary=function({className:e,children:t,size:n,square:r,disabled:i,onClick:a}){return o.default.createElement(A.ButtonPrimaryStyles,{className:e,size:n,square:r,disabled:i,onClick:a},t)},A.ButtonSecondary=function({className:e,children:t,size:n,square:r,disabled:i,onClick:a}){return o.default.createElement(A.ButtonSecondaryStyles,{className:e,size:n,square:r,disabled:i,onClick:a},t)},A.ButtonGhost=function({className:e,children:t,size:n,square:r,disabled:i,onClick:a}){return o.default.createElement(A.ButtonGhostStyles,{className:e,size:n,square:r,disabled:i,onClick:a},t)};const d=s.css`
  display: inline-grid;
  position: relative;
  grid-auto-flow: column;
  grid-column-gap: ${({size:e})=>"small"==e?"4px":"8px"};
  justify-items: center;
  align-items: center;
  width: fit-content;
  min-width: ${l};
  ${e=>{if(e.square)return s.css`
        max-width: ${l(e)};
      `}};
  height: ${l};
  padding: ${e=>"small"==e.size?e.square?"6px":"4px 8px":"medium"==e.size?e.square?"8px":"4px 16px":e.square?"8px":"8px 16px"};
  border: 1px solid transparent;
  border-radius: ${u.BorderRad.s};
  font-family: ${u.Fonts.Grotesk};
  font-size: ${e=>"small"===e.size?"14px":"16px"};
  line-height: ${e=>"small"===e.size?"20px":"24px"};
  font-weight: 700;
  text-transform: capitalize;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  transition: ${u.Transitions.all};
  z-index: 1;

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
`},21982:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Close=A.CloseButton=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(12101),o=t(24895);A.CloseButton=r.default.memo((e=>r.default.createElement(A.Close,Object.assign({},e),r.default.createElement(o.CrossIcon,null)))),A.Close=i.default.button`
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
`},48441:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CopyButtonIcon=A.CopyButton=void 0;const o=i(t(2784)),s=a(t(52275)),u=t(12101),c=t(24895),l=t(27070);A.CopyButton=function({textToCopy:e,className:t,disabled:n}){const[r,i]=o.useState(!1),[a,s]=o.useState(!1);return o.default.createElement(A.CopyButtonIcon,{disabled:n,onClick:()=>{if(e&&!n)try{navigator.clipboard.writeText(e),i(!r)}catch(e){s(!a)}else null==e&&s(!a)},className:t},!r&&!a&&o.default.createElement(c.CopyIcon,null),r&&setTimeout((function(){i(!r)}),1e3)&&o.default.createElement(d,null,o.default.createElement(l.SuccessSymbol,null)),a&&setTimeout((function(){s(!a)}),1e3)&&o.default.createElement(d,null,o.default.createElement(l.FailureSymbol,null)))},A.CopyButtonIcon=s.default.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  color: ${u.Colors.Black[400]};
  outline: none;
  background-color: transparent;
  cursor: ${({disabled:e})=>e?"not-allowed":"copy"};
  transition: ${u.Transitions.all};

  &:hover,
  &:focus {
    color: ${u.Colors.Blue[500]};
  }
  &:active {
    color: ${u.Colors.Blue[600]};
  }
  &:disabled {
    color: ${u.Colors.Black[300]};
    border-color: ${u.Colors.Black[50]};
  }
`;const d=s.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  ${u.Animations.showResultSymbol};
`},55017:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Toggle=A.ToggleButton=void 0;const r=n(t(52275)),i=t(12101),a=t(24895),o=t(60879);A.ToggleButton=r.default(o.ButtonPrimary)`
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
`,A.Toggle=r.default.div`
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
`},86096:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(60879),A),r(t(21982),A),r(t(48441),A)},19071:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.CheckboxNative=A.CheckboxLabel=A.CheckboxStyled=A.CheckboxSideText=A.Checkbox=void 0;const o=i(t(2784)),s=a(t(52275)),u=t(12101),c=t(17929);A.Checkbox=function({id:e,isRequired:t,children:n,enabled:r=!0,isChecked:i=!1,onChange:a}){const[s,u]=o.useState(i);return o.default.createElement(A.CheckboxLabel,{htmlFor:e,onClick:e=>{e.preventDefault(),!1!==r&&(u(!s),a&&a(!s))},isLabelEnabled:r,isCheckboxChecked:s},o.default.createElement(A.CheckboxNative,{type:"checkbox",id:e,name:e,required:t,checked:s,disabled:!r,onChange:e=>u(e.target.checked)}),o.default.createElement(A.CheckboxStyled,{disabled:!r},o.default.createElement(c.CheckboxIcon,null)),o.default.createElement(A.CheckboxSideText,null,n))},A.CheckboxSideText=s.default.span`
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
`},20018:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.hasError=A.getErrorMessage=A.getError=void 0,A.getError=(e,A)=>A.find((A=>A.path===e)),A.getErrorMessage=(e,t)=>{const n=A.getError(e,t);return null==n?void 0:n.message},A.hasError=(e,t)=>{var n;return!!(null===(n=A.getError(e,t))||void 0===n?void 0:n.message)}},49569:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Input=A.InputTextarea=A.InputNumber=A.InputText=A.InputComponent=void 0;const o=a(t(2784)),s=i(t(52275)),u=t(12101),c=t(86096),l=t(76746),d=t(27070),f=t(31604),g=t(85534);A.InputComponent=({id:e,label:A,required:t,validation:n,disabled:r,value:i,inputSize:a,inputWidth:s,icon:u,copy:c,textToCopy:f,units:g,message:h,helperText:p,helperTitle:m,helperLinkText:y,helperLinkURL:I,className:B,children:E,borderless:L})=>o.default.createElement(C,{className:B,inputSize:a,inputWidth:s},A&&o.default.createElement(v,{htmlFor:e,isRequired:t,disabled:r},A,p&&o.default.createElement(l.Help,{helperText:p,helperTitle:m,helperLinkText:y,helperLinkURL:I})),o.default.createElement(b,{copy:c,units:g,icon:u,validation:n,disabled:r,inputSize:a,borderless:L},u&&o.default.createElement(w,null,u),o.default.createElement(Q,null,E),(g||c)&&o.default.createElement(M,null,g&&o.default.createElement(D,null,g),c&&o.default.createElement(S,{textToCopy:f||i,disabled:r}))),h&&o.default.createElement(_,{validation:n},"invalid"===n&&o.default.createElement(k,null,o.default.createElement(d.AlertSymbol,null)),"warning"===n&&o.default.createElement(k,null,o.default.createElement(d.AlertSymbol,null)),"valid"===n&&o.default.createElement(k,null,o.default.createElement(d.SuccessSymbol,null)),o.default.createElement(N,null,h))),A.InputText=({id:e,value:t,required:n,validation:r,placeholder:i,disabled:a,onChange:s})=>o.default.createElement(A.Input,{id:e,name:e,type:"text",value:t,required:n,validation:r,placeholder:i,disabled:a,onChange:s,autoComplete:"off"}),A.InputNumber=({id:e,value:A,required:t,validation:n,placeholder:r,disabled:i,onChange:a})=>o.default.createElement(B,{id:e,name:e,type:"number",value:A,required:t,validation:n,placeholder:r,disabled:i,onChange:a,autoComplete:"off"}),A.InputTextarea=({id:e,value:A,required:t,validation:n,placeholder:r,disabled:i,onChange:a})=>o.default.createElement(E,{id:e,name:e,value:A,required:t,validation:n,placeholder:r,disabled:i,onChange:a,autoComplete:"off"});const h=s.css`
  padding: 0 16px 1px 16px;
`,p=s.css`
  padding: 0 16px 1px 36px;
`,m=s.css`
  padding: 0 0 1px 16px;
`,y=s.css`
  padding: 0 0 1px 36px;
`,I=s.css`
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
  ${I};
  &[type='number'] {
    text-align: right;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;const B=s.default(A.Input)`
  text-align: right;
`,E=s.default.textarea`
  ${I} {
    resize: none;
  }
`,C=s.default.div`
  display: grid;
  grid-row-gap: 4px;
  align-items: center;
  width: 100%;
  min-width: ${({inputWidth:e})=>"s"===e?"320px":"400px"};
`,v=s.default(g.Label)`
  margin-bottom: 0;
  color: ${({disabled:e})=>e?u.Colors.Black[500]:u.Colors.Black[900]};
`,b=s.default.div`
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
    ${e=>e.icon||e.units||e.copy?null:h}
    ${e=>!e.icon||e.units||e.copy?null:p}
    ${e=>!e.units&&!e.copy||e.icon?null:m}
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
`,Q=s.default.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`,M=s.default.div`
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
`,D=s.default.span`
  font-family: ${u.Fonts.Grotesk};
  font-size: 14px;
  line-height: 1.5;
  font-weight: 700;
  color: ${u.Colors.Black[400]};
  text-transform: uppercase;
`,_=s.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  color: ${({validation:e})=>{switch(e){case"invalid":return u.Colors.Red[400];case"valid":return u.Colors.Green[500];case"warning":return u.Colors.Orange[500];case void 0:default:return u.Colors.Black[400]}}};
`,k=s.default.div`
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
`,N=s.default(f.TextSmall)`
  font-size: 12px;
  line-height: 18px;
  color: inherit;
`},91584:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Label=void 0;const r=n(t(52275)),i=t(12101),a=t(76746);A.Label=r.default.label`
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

  ${a.HelpContainer} {
    position: relative;
    display: inline;
    transform: unset;
    right: unset;
    margin-left: 4px;
  }
`},59551:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Link=A.LabelLink=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(12101);A.LabelLink=function({href:e,target:t,children:n,className:i}){return r.default.createElement(A.Link,{onClick:e=>e.stopPropagation(),href:e,target:t,className:i},n)},A.Link=i.default.a`
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
`},6696:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.InlineToggleWrap=A.ToggleCheckbox=void 0;const o=a(t(2784)),s=i(t(52275)),u=t(12101),c=t(91584);A.ToggleCheckbox=function({isRequired:e,disabled:A,checked:t,onChange:n,trueLabel:r,falseLabel:i}){const a=e=>()=>{!0!==A&&n(e)};return o.default.createElement(p,{groupDisabled:A},o.default.createElement(l,{onClick:a(!0)},r),o.default.createElement(g,{isChecked:t},o.default.createElement(d,{type:"checkbox",disabled:A,checked:t,onChange:e=>n(e.currentTarget.checked),required:e})),o.default.createElement(l,{onClick:a(!1)},i))};const l=s.default.button`
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
  margin-bottom: 8px;
`},19464:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.FounderMemberIcon=void 0;const r=n(t(2784)),i=t(51669);A.FounderMemberIcon=r.default.memo((()=>r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},r.default.createElement("path",{className:"memberInner",d:"M11.9026 5.15556L10.6558 6.66667L11.9026 8.17778C11.9569 8.24384 11.99 8.32234 11.9981 8.4045C12.0061 8.48666 11.9889 8.56925 11.9483 8.64303C11.9078 8.71682 11.8454 8.77889 11.7682 8.8223C11.6911 8.86572 11.6022 8.88877 11.5114 8.88889H5.64449V12H4.66666V4.44444C4.66666 4.32657 4.71817 4.21352 4.80986 4.13017C4.90155 4.04683 5.02591 4 5.15558 4C5.28524 4 5.4096 4.04683 5.50129 4.13017C5.59298 4.21352 5.64449 4.32657 5.64449 4.44444H11.5114C11.6022 4.44456 11.6911 4.46761 11.7682 4.51103C11.8454 4.55445 11.9078 4.61652 11.9483 4.6903C11.9889 4.76408 12.0061 4.84667 11.9981 4.92883C11.99 5.01099 11.9569 5.08949 11.9026 5.15556Z",fill:"currentColor"}))))},51669:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Icon=void 0;const r=n(t(2784)),i=n(t(52275));A.Icon=r.default.memo(i.default.svg`
  height: ${e=>e.size}px;
  width: ${e=>e.size}px;
  position: relative;
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
  margin-bottom: 8px;
  height: 16px;
  width: 16px;

  .blackPart {

