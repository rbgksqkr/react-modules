import{r as u}from"./index-uubelm5h.js";import{r as le}from"./index-Dei0BBcc.js";var de={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee=u,fe=Symbol.for("react.element"),ge=Symbol.for("react.fragment"),he=Object.prototype.hasOwnProperty,be=Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oe={key:!0,ref:!0,__self:!0,__source:!0};function ie(n,t,s){var r,a={},d=null,i=null;s!==void 0&&(d=""+s),t.key!==void 0&&(d=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)he.call(t,r)&&!Oe.hasOwnProperty(r)&&(a[r]=t[r]);if(n&&n.defaultProps)for(r in t=n.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:fe,type:n,key:d,ref:i,props:a,_owner:be.current}}h.Fragment=ge;h.jsx=ie;h.jsxs=ie;de.exports=h;var e=de.exports;const ye="_dimmed_yizsj_9",Fe="_modalWrapper_yizsj_15",Ae="_modalBottomWrapper_yizsj_25",De="_modal_yizsj_15",Ie="_modalBottom_yizsj_25",Re="_modalEnter_yizsj_52",Te="_modalFadeIn_yizsj_1",ve="_modalExit_yizsj_56",we="_modalFadeOut_yizsj_1",He="_modalBottomEnter_yizsj_60",Ne="_modalBottomFadeIn_yizsj_1",Se="_modalBottomExit_yizsj_64",Le="_modalBottomFadeOut_yizsj_1",l={dimmed:ye,modalWrapper:Fe,modalBottomWrapper:Ae,modal:De,modalBottom:Ie,modalEnter:Re,modalFadeIn:Te,modalExit:ve,modalFadeOut:we,modalBottomEnter:He,modalBottomFadeIn:Ne,modalBottomExit:Se,modalBottomFadeOut:Le},y={center:{enter:`${l.modal} ${l.modalEnter}`,exit:`${l.modal} ${l.modalExit}`},bottom:{enter:`${l.modalBottom} ${l.modalBottomEnter}`,exit:`${l.modalBottom} ${l.modalBottomExit}`}},$e=({isAnimation:n,isOpen:t,position:s,delay:r})=>{const[a,d]=u.useState(!1),i=u.useRef(),O=t?y[s].enter:y[s].exit;return u.useEffect(()=>{if(!n){d(t);return}return t?d(!0):!t&&a&&(i.current=setTimeout(()=>{d(!1)},r)),()=>{clearTimeout(i.current)}},[n,t,a,r]),{mounted:a,modalAnimationClass:O}},We="_dimmed_21fx6_1",ze={dimmed:We},Pe=({onDimmedClick:n,style:t,...s})=>le.createPortal(e.jsx("div",{className:ze.dimmed,style:t,onClick:n,...s}),document.body),ke="_modalHeader_1m1z4_1",Ve={modalHeader:ke},ue=({style:n,children:t,...s})=>e.jsx("header",{className:Ve.modalHeader,style:n,...s,children:t});ue.__docgenInfo={description:"",methods:[],displayName:"ModalHeader"};const qe="_title_jysup_1",Ue={title:qe},ce=({title:n})=>e.jsx("span",{className:Ue.title,children:n&&n});ce.__docgenInfo={description:"",methods:[],displayName:"ModalTitle",props:{title:{required:!1,tsType:{name:"string"},description:""}}};const Ye="_closeButton_xu7h7_1",Je={closeButton:Ye},F="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2729_1438)'%3e%3cpath%20d='M19.8167%206.41L18.4067%205L12.8167%2010.59L7.22665%205L5.81665%206.41L11.4067%2012L5.81665%2017.59L7.22665%2019L12.8167%2013.41L18.4067%2019L19.8167%2017.59L14.2267%2012L19.8167%206.41Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2729_1438'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.81665)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",me=({onClose:n,showCloseIcon:t=!0,customCloseIcon:s})=>{const r=a=>{a.currentTarget.src=F};return e.jsx(e.Fragment,{children:t&&e.jsx("img",{src:s??F,alt:"close",className:Je.closeButton,onClick:n,onError:r})})};me.__docgenInfo={description:"",methods:[],displayName:"ModalCloseIcon",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCloseIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},customCloseIcon:{required:!1,tsType:{name:"string"},description:""}}};const Ze="_content_oq6f1_1",Ge={content:Ze},_e=({style:n,children:t,...s})=>t?e.jsx("section",{className:Ge.content,style:n,...s,children:t}):null;_e.__docgenInfo={description:"",methods:[],displayName:"ModalContent"};const Ke="_closeButton_jjdzn_1",Qe={closeButton:Ke},Ce=({label:n,onClose:t,style:s,...r})=>e.jsx("button",{className:Qe.closeButton,style:s,onClick:t,...r,children:n});Ce.__docgenInfo={description:"",methods:[],displayName:"CloseButton"};const Xe="_confirmButton_9g36g_1",eo={confirmButton:Xe},pe=({label:n,onConfirm:t,style:s,...r})=>e.jsx("button",{className:eo.confirmButton,style:s,onClick:t,...r,children:n});pe.__docgenInfo={description:"",methods:[],displayName:"ConfirmButton"};const oo="_row_hr5wl_1",no="_rowReverse_hr5wl_9",to="_column_hr5wl_18",so="_columnReverse_hr5wl_27",c={row:oo,rowReverse:no,column:to,columnReverse:so},ro={row:c.row,"row-reverse":c.rowReverse,column:c.column,"column-reverse":c.columnReverse},Be=({position:n="column",children:t,...s})=>e.jsx("footer",{className:ro[n],...s,children:t});Be.__docgenInfo={description:"",methods:[],displayName:"Container",props:{position:{defaultValue:{value:"'column'",computed:!1},required:!1}}};const ao={center:l.modalWrapper,bottom:l.modalBottomWrapper},lo={center:l.modal,bottom:l.modalBottom},Me=({isOpen:n,position:t="center",isAnimation:s=!1,duration:r,style:a,children:d,...i})=>{const{mounted:O,modalAnimationClass:xe}=$e({isAnimation:s,isOpen:n,position:t,delay:r}),je=s?xe:lo[t];return O?e.jsx(e.Fragment,{children:le.createPortal(e.jsx("div",{className:ao[t],children:e.jsx("div",{className:je,style:{animationDuration:`${r}ms`,...a},...i,children:d})}),document.body)}):null},o=Object.assign(Me,{Dimmed:Pe,Header:ue,Title:ce,CloseIcon:me,Content:_e,CloseButton:Ce,ConfirmButton:pe,Footer:Be});Me.__docgenInfo={description:"",methods:[],displayName:"ModalMain",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},position:{required:!1,tsType:{name:"union",raw:"'center' | 'bottom'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},isAnimation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:""}}};const co={title:"Modal",component:o},b=({...n})=>{const[t,s]=u.useReducer(r=>!r,!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:s,children:"모달열기"}),e.jsxs(o,{...n,isOpen:t,children:[e.jsx(o.Dimmed,{onDimmedClick:()=>s()}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"마루"}),e.jsx(o.CloseIcon,{onClose:()=>s()})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>s()}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>s()})]})]})]})},m={args:{isOpen:!0,position:"center"},render:n=>e.jsx(b,{...n})},_={args:{isOpen:!0,position:"center",isAnimation:!0,duration:500},render:n=>e.jsx(b,{...n})},C={args:{isOpen:!0,position:"bottom"},render:n=>e.jsx(b,{...n})},p={args:{isOpen:!0,position:"bottom",isAnimation:!0,duration:500},render:n=>e.jsx(b,{...n})},B={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달 버튼 1개"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsx(o.Footer,{children:e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})})]})},M={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_버튼_배치_ROW"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{position:"row",children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},x={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_버튼_배치_ROW_REVERSE"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{position:"row-reverse",children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},j={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_버튼_배치_COLUMN_REVERSE"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{position:"column-reverse",children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},E={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_닫기_아이콘_숨김"}),e.jsx(o.CloseIcon,{onClose:()=>"",showCloseIcon:!1})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},f={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_닫기_아이콘_커스텀"}),e.jsx(o.CloseIcon,{onClose:()=>"",customCloseIcon:"https://github.com/jinhokim98/react-payments/blob/step2/src/assets/image/failure.png?raw=true"})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},g={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_닫기_아이콘_커스텀_오류"}),e.jsx(o.CloseIcon,{onClose:()=>"",customCloseIcon:"잘못된 이미지 경로를 넣는다면?"})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})};var A,D,I;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'center'
  },
  render: args => <DefaultModal {...args} />
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var R,T,v;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'center',
    isAnimation: true,
    duration: 500
  },
  render: args => <DefaultModal {...args} />
}`,...(v=(T=_.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var w,H,N;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'bottom'
  },
  render: args => <DefaultModal {...args} />
}`,...(N=(H=C.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var S,L,$;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'bottom',
    isAnimation: true,
    duration: 500
  },
  render: args => <DefaultModal {...args} />
}`,...($=(L=p.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var W,z,P;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달 버튼 1개" />
        <Modal.CloseIcon onClose={() => ''} />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer>
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
}`,...(P=(z=B.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var k,V,q;M.parameters={...M.parameters,docs:{...(k=M.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_버튼_배치_ROW" />
        <Modal.CloseIcon onClose={() => ''} />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer position="row">
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
}`,...(q=(V=M.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var U,Y,J;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_버튼_배치_ROW_REVERSE" />
        <Modal.CloseIcon onClose={() => ''} />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer position="row-reverse">
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
}`,...(J=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Z,G,K;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_버튼_배치_COLUMN_REVERSE" />
        <Modal.CloseIcon onClose={() => ''} />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer position="column-reverse">
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
}`,...(K=(G=j.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,ee;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_닫기_아이콘_숨김" />
        <Modal.CloseIcon onClose={() => ''} showCloseIcon={false} />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer>
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
}`,...(ee=(X=E.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var oe,ne,te;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_닫기_아이콘_커스텀" />
        <Modal.CloseIcon onClose={() => ''} customCloseIcon="https://github.com/jinhokim98/react-payments/blob/step2/src/assets/image/failure.png?raw=true" />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer>
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
}`,...(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,re,ae;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <Modal {...args}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title title="모달_닫기_아이콘_커스텀_오류" />
        <Modal.CloseIcon onClose={() => ''} customCloseIcon="잘못된 이미지 경로를 넣는다면?" />
      </Modal.Header>
      <Modal.Content>마루와 쿠키</Modal.Content>
      <Modal.Footer>
        <Modal.ConfirmButton label="확인" onConfirm={() => ''} />
        <Modal.CloseButton label="닫기" onClose={() => ''} />
      </Modal.Footer>
    </Modal>
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const mo=["모달_열림_center","모달_열림_center_animation","모달_열림_bottom","모달_열림_bottom_animation","모달_버튼_1개","모달_버튼_배치_ROW","모달_버튼_배치_ROW_REVERSE","모달_버튼_배치_COLUMN_REVERSE","모달_닫기_아이콘_숨김","모달_닫기_아이콘_커스텀","모달_닫기_아이콘_커스텀_오류"];export{mo as __namedExportsOrder,co as default,E as 모달_닫기_아이콘_숨김,f as 모달_닫기_아이콘_커스텀,g as 모달_닫기_아이콘_커스텀_오류,B as 모달_버튼_1개,j as 모달_버튼_배치_COLUMN_REVERSE,M as 모달_버튼_배치_ROW,x as 모달_버튼_배치_ROW_REVERSE,C as 모달_열림_bottom,p as 모달_열림_bottom_animation,m as 모달_열림_center,_ as 모달_열림_center_animation};
