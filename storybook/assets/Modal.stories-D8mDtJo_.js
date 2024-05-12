import{r as m}from"./index-uubelm5h.js";import{r as Te}from"./index-Dei0BBcc.js";var Pe={exports:{}},P={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=m,Ke=Symbol.for("react.element"),Qe=Symbol.for("react.fragment"),eo=Object.prototype.hasOwnProperty,oo=Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,to={key:!0,ref:!0,__self:!0,__source:!0};function De(t,n,s){var r,a={},l=null,d=null;s!==void 0&&(l=""+s),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(d=n.ref);for(r in n)eo.call(n,r)&&!to.hasOwnProperty(r)&&(a[r]=n[r]);if(t&&t.defaultProps)for(r in n=t.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Ke,type:t,key:l,ref:d,props:a,_owner:oo.current}}P.Fragment=Qe;P.jsx=De;P.jsxs=De;Pe.exports=P;var e=Pe.exports;const no="_dimmed_17u9q_9",so="_modalWrapper_17u9q_15",ro="_modalBottomWrapper_17u9q_25",ao="_modal_17u9q_15",lo="_modalBottom_17u9q_25",io="_small_17u9q_51",mo="_medium_17u9q_55",uo="_large_17u9q_59",co="_modalEnter_17u9q_63",po="_modalFadeIn_17u9q_1",_o="_modalExit_17u9q_67",Co="_modalFadeOut_17u9q_1",xo="_modalBottomEnter_17u9q_71",ho="_modalBottomFadeIn_17u9q_1",go="_modalBottomExit_17u9q_75",Bo="_modalBottomFadeOut_17u9q_1",i={dimmed:no,modalWrapper:so,modalBottomWrapper:ro,modal:ao,modalBottom:lo,small:io,medium:mo,large:uo,modalEnter:co,modalFadeIn:po,modalExit:_o,modalFadeOut:Co,modalBottomEnter:xo,modalBottomFadeIn:ho,modalBottomExit:go,modalBottomFadeOut:Bo},R={center:{enter:`${i.modal} ${i.modalEnter}`,exit:`${i.modal} ${i.modalExit}`},bottom:{enter:`${i.modalBottom} ${i.modalBottomEnter}`,exit:`${i.modalBottom} ${i.modalBottomExit}`}},Mo=({isAnimation:t,isOpen:n,position:s,delay:r})=>{const[a,l]=m.useState(!1),d=m.useRef(),c=n?R[s].enter:R[s].exit;return m.useEffect(()=>{if(!t){l(n);return}return n?l(!0):!n&&a&&(d.current=setTimeout(()=>{l(!1)},r)),()=>{clearTimeout(d.current)}},[t,n,a,r]),{mounted:a,modalAnimationClass:c}},jo="_dimmed_21fx6_1",fo={dimmed:jo},yo=({onDimmedClick:t,style:n,...s})=>Te.createPortal(e.jsx("div",{className:fo.dimmed,style:n,onClick:t,...s}),document.body),Eo="_modalHeader_1m1z4_1",bo={modalHeader:Eo},Fe=({style:t,children:n,...s})=>e.jsx("header",{className:bo.modalHeader,style:t,...s,children:n});Fe.__docgenInfo={description:"",methods:[],displayName:"ModalHeader"};const Io="_title_jysup_1",wo={title:Io},Re=({title:t})=>e.jsx("span",{className:wo.title,children:t&&t});Re.__docgenInfo={description:"",methods:[],displayName:"ModalTitle",props:{title:{required:!1,tsType:{name:"string"},description:""}}};const Oo="_closeButton_xu7h7_1",Ao={closeButton:Oo},S="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2729_1438)'%3e%3cpath%20d='M19.8167%206.41L18.4067%205L12.8167%2010.59L7.22665%205L5.81665%206.41L11.4067%2012L5.81665%2017.59L7.22665%2019L12.8167%2013.41L18.4067%2019L19.8167%2017.59L14.2267%2012L19.8167%206.41Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2729_1438'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.81665)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Se=({onClose:t,showCloseIcon:n=!0,customCloseIcon:s})=>{const r=a=>{a.currentTarget.src=S};return e.jsx(e.Fragment,{children:n&&e.jsx("img",{src:s??S,alt:"close",className:Ao.closeButton,onClick:t,onError:r})})};Se.__docgenInfo={description:"",methods:[],displayName:"ModalCloseIcon",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCloseIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},customCloseIcon:{required:!1,tsType:{name:"string"},description:""}}};const vo="_content_oq6f1_1",To={content:vo},Ne=({style:t,children:n,...s})=>n?e.jsx("section",{className:To.content,style:t,...s,children:n}):null;Ne.__docgenInfo={description:"",methods:[],displayName:"ModalContent"};const Po="_closeButton_12g5j_1",Do="_small_12g5j_8",Fo="_medium_12g5j_12",Ro="_large_12g5j_16",v={closeButton:Po,small:Do,medium:Fo,large:Ro},So={small:v.small,medium:v.medium,large:v.large},$e=({label:t,onClose:n,size:s,style:r,...a})=>{const l=s?So[s]:"";return e.jsx("button",{className:`${v.closeButton} ${l}`,style:r,onClick:n,...a,children:t})};$e.__docgenInfo={description:"",methods:[],displayName:"CloseButton"};const No="_confirmButton_c7ziy_1",$o="_small_c7ziy_8",Ho="_medium_c7ziy_12",Lo="_large_c7ziy_16",T={confirmButton:No,small:$o,medium:Ho,large:Lo},qo={small:T.small,medium:T.medium,large:T.large},He=({label:t,onConfirm:n,size:s,style:r,...a})=>{const l=s?qo[s]:"";return e.jsx("button",{className:`${T.confirmButton} ${l}`,style:r,onClick:n,...a,children:t})};He.__docgenInfo={description:"",methods:[],displayName:"ConfirmButton"};const Vo="_row_hr5wl_1",Wo="_rowReverse_hr5wl_9",ko="_column_hr5wl_18",zo="_columnReverse_hr5wl_27",p={row:Vo,rowReverse:Wo,column:ko,columnReverse:zo},Uo={row:p.row,"row-reverse":p.rowReverse,column:p.column,"column-reverse":p.columnReverse},Le=({position:t="column",justifyContent:n,alignItems:s,children:r,...a})=>{const l=n||"space-between",d=s||"center";return e.jsx("footer",{className:Uo[t],style:{justifyContent:l,alignItems:d},...a,children:r})};Le.__docgenInfo={description:"",methods:[],displayName:"Container",props:{position:{defaultValue:{value:"'column'",computed:!1},required:!1}}};const Xo="_input_fcje0_1",Yo={input:Xo},qe=({value:t,onChange:n,...s})=>e.jsx("input",{className:Yo.input,value:t,onChange:n,...s});qe.__docgenInfo={description:"",methods:[],displayName:"ModalInput",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const Zo={center:i.modalWrapper,bottom:i.modalBottomWrapper},Go={center:i.modal,bottom:i.modalBottom},Jo={small:i.small,medium:i.medium,large:i.large},Ve=({isOpen:t,size:n,position:s="center",isAnimation:r=!1,duration:a,style:l,children:d,...c})=>{const{mounted:Ue,modalAnimationClass:Xe}=Mo({isAnimation:r,isOpen:t,position:s,delay:a}),Ye=r?Xe:Go[s],Ze=Zo[s],Ge=n?Jo[n]:"";return Ue?e.jsx(e.Fragment,{children:Te.createPortal(e.jsx("div",{className:`${Ze} ${Ge}`,style:l,children:e.jsx("div",{className:Ye,style:{animationDuration:`${a}ms`},...c,children:d})}),document.body)}):null},o=Object.assign(Ve,{Dimmed:yo,Header:Fe,Title:Re,CloseIcon:Se,Content:Ne,CloseButton:$e,ConfirmButton:He,Footer:Le,Input:qe});Ve.__docgenInfo={description:"",methods:[],displayName:"ModalMain",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},position:{required:!1,tsType:{name:"union",raw:"'center' | 'bottom'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},isAnimation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:""}}};var D={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphoneSE3:{name:"iPhone SE 3rd generation",styles:{height:"667px",width:"375px"},type:"mobile"},iphone13:{name:"iPhone 13",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13pro:{name:"iPhone 13 Pro",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13promax:{name:"iPhone 13 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphone14:{name:"iPhone 14",styles:{height:"844px",width:"390px"},type:"mobile"},iphone14pro:{name:"iPhone 14 Pro",styles:{height:"852px",width:"393px"},type:"mobile"},iphone14promax:{name:"iPhone 14 Pro Max",styles:{height:"932px",width:"430px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad11p:{name:"iPad Pro 11-in",styles:{height:"1194px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}},F={mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"},mobile2:{name:"Large mobile",styles:{height:"896px",width:"414px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}};const We=({isOpen:t,toggleIsOpen:n})=>{const s=()=>{n()};return e.jsx(e.Fragment,{children:e.jsxs(o,{isOpen:t,position:"center",size:"small",isAnimation:!0,duration:300,children:[e.jsx(o.Dimmed,{onDimmedClick:s}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"아이디를 입력해 주세요."}),e.jsx(o.CloseIcon,{onClose:s,showCloseIcon:!1})]}),e.jsx(o.Content,{children:e.jsx("div",{children:"아이디는 필수로 입력해야 합니다."})}),e.jsx(o.Footer,{position:"row",justifyContent:"flex-end",children:e.jsx(o.ConfirmButton,{size:"small",label:"확인",onConfirm:s})})]})})};We.__docgenInfo={description:"",methods:[],displayName:"AlertModal"};const ke=({isOpen:t,toggleIsOpen:n})=>{const s=()=>{n()},r=()=>{alert("입력 완료!"),n()};return e.jsx(e.Fragment,{children:e.jsxs(o,{isOpen:t,position:"center",isAnimation:!0,duration:300,size:"medium",children:[e.jsx(o.Dimmed,{onDimmedClick:s}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"카드를 삭제하시겠습니까?"}),e.jsx(o.CloseIcon,{onClose:s,showCloseIcon:!1})]}),e.jsx(o.Content,{children:e.jsx("div",{children:"삭제하면 복구하실 수 없습니다."})}),e.jsxs(o.Footer,{position:"row",justifyContent:"flex-end",children:[e.jsx(o.CloseButton,{size:"small",label:"취소",onClose:s}),e.jsx(o.ConfirmButton,{size:"small",label:"확인",onConfirm:r})]})]})})};ke.__docgenInfo={description:"",methods:[],displayName:"ConfirmModal"};const ze=({isOpen:t,toggleIsOpen:n})=>{const[s,r]=m.useState(""),a=()=>{n()},l=c=>{r(c.target.value)},d=()=>{alert(`${s} 값 입력 완료!`),n(),r("")};return e.jsx(e.Fragment,{children:e.jsxs(o,{isOpen:t,position:"center",isAnimation:!0,duration:300,size:"medium",children:[e.jsx(o.Dimmed,{onDimmedClick:a}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"쿠폰 번호를 입력해 주세요."}),e.jsx(o.CloseIcon,{onClose:a,showCloseIcon:!1})]}),e.jsx(o.Content,{children:e.jsx(o.Input,{value:s,onChange:l,placeholder:"CGEXX46Z",autoFocus:!0})}),e.jsxs(o.Footer,{position:"row",justifyContent:"flex-end",children:[e.jsx(o.CloseButton,{size:"small",label:"취소",onClose:a}),e.jsx(o.ConfirmButton,{size:"small",label:"확인",onConfirm:d})]})]})})};ze.__docgenInfo={description:"",methods:[],displayName:"PromptModal"};const et={title:"Modal",component:o,parameters:{viewport:{viewports:{...D,...F},defaultViewport:"desktop"}}},u=({...t})=>{const[n,s]=m.useReducer(r=>!r,!0);return e.jsxs(o,{...t,isOpen:n,children:[e.jsx(o.Dimmed,{onDimmedClick:()=>s()}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"마루"}),e.jsx(o.CloseIcon,{onClose:()=>s()})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>s()}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>s()})]})]})},_={args:{isOpen:!0,position:"center"},render:t=>e.jsx(u,{...t})},C={args:{isOpen:!0,position:"center",isAnimation:!0,duration:500},render:t=>e.jsx(u,{...t})},x={args:{isOpen:!0,position:"bottom"},render:t=>e.jsx(u,{...t})},h={args:{isOpen:!0,position:"bottom",isAnimation:!0,duration:500},render:t=>e.jsx(u,{...t})},g={args:{isOpen:!0},render:t=>e.jsxs(o,{...t,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달 버튼 1개"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsx(o.Footer,{children:e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})})]})},B={args:{isOpen:!0},render:t=>e.jsxs(o,{...t,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_버튼_배치_ROW"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{position:"row",children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},M={args:{isOpen:!0},render:t=>e.jsxs(o,{...t,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_버튼_배치_ROW_REVERSE"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{position:"row-reverse",children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},j={args:{isOpen:!0},render:t=>e.jsxs(o,{...t,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_버튼_배치_COLUMN_REVERSE"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{position:"column-reverse",children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},f={args:{isOpen:!0},render:t=>e.jsxs(o,{...t,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_닫기_아이콘_숨김"}),e.jsx(o.CloseIcon,{onClose:()=>"",showCloseIcon:!1})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},y={args:{isOpen:!0},render:t=>e.jsxs(o,{...t,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_닫기_아이콘_커스텀"}),e.jsx(o.CloseIcon,{onClose:()=>"",customCloseIcon:"https://github.com/jinhokim98/react-payments/blob/step2/src/assets/image/failure.png?raw=true"})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},E={args:{isOpen:!0},render:t=>e.jsxs(o,{...t,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_닫기_아이콘_커스텀_오류"}),e.jsx(o.CloseIcon,{onClose:()=>"",customCloseIcon:"잘못된 이미지 경로를 넣는다면?"})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},b={args:{isOpen:!0},render:t=>e.jsx(We,{toggleIsOpen:()=>"",...t})},I={args:{isOpen:!0},render:t=>e.jsx(ke,{toggleIsOpen:()=>"",...t})},w={args:{isOpen:!0},render:t=>e.jsx(ze,{toggleIsOpen:()=>"",...t})},O={parameters:{viewport:{viewports:{...D,...F},defaultViewport:"iphone6"}},args:{isOpen:!0},render:t=>e.jsx(u,{...t})},A={parameters:{viewport:{viewports:{...D,...F},defaultViewport:"tablet"}},args:{isOpen:!0},render:t=>e.jsx(u,{...t})};var N,$,H;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'center'
  },
  render: args => <DefaultModal {...args} />
}`,...(H=($=_.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var L,q,V;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'center',
    isAnimation: true,
    duration: 500
  },
  render: args => <DefaultModal {...args} />
}`,...(V=(q=C.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var W,k,z;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'bottom'
  },
  render: args => <DefaultModal {...args} />
}`,...(z=(k=x.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'bottom',
    isAnimation: true,
    duration: 500
  },
  render: args => <DefaultModal {...args} />
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,G,J;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,ee;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(ee=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var oe,te,ne;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(te=M.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,ae;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ae=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var le,ie,de;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,ue,ce;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ce=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,_e,Ce;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(Ce=(_e=E.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var xe,he,ge;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <AlertModal toggleIsOpen={() => ''} {...args} />
}`,...(ge=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var Be,Me,je;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <ConfirmModal toggleIsOpen={() => ''} {...args} />
}`,...(je=(Me=I.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var fe,ye,Ee;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  render: args => <PromptModal toggleIsOpen={() => ''} {...args} />
}`,...(Ee=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:Ee.source}}};var be,Ie,we;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS
      },
      defaultViewport: 'iphone6'
    }
  },
  args: {
    isOpen: true
  },
  render: args => <DefaultModal {...args} />
}`,...(we=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Oe,Ae,ve;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS
      },
      defaultViewport: 'tablet'
    }
  },
  args: {
    isOpen: true
  },
  render: args => <DefaultModal {...args} />
}`,...(ve=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:ve.source}}};const ot=["모달_열림_center","모달_열림_center_animation","모달_열림_bottom","모달_열림_bottom_animation","모달_버튼_1개","모달_버튼_배치_ROW","모달_버튼_배치_ROW_REVERSE","모달_버튼_배치_COLUMN_REVERSE","모달_닫기_아이콘_숨김","모달_닫기_아이콘_커스텀","모달_닫기_아이콘_커스텀_오류","모달_Alert","모달_Confirm","모달_Prompt","모달_모바일_반응형","모달_태블릿_반응형"];export{ot as __namedExportsOrder,et as default,b as 모달_Alert,I as 모달_Confirm,w as 모달_Prompt,f as 모달_닫기_아이콘_숨김,y as 모달_닫기_아이콘_커스텀,E as 모달_닫기_아이콘_커스텀_오류,O as 모달_모바일_반응형,g as 모달_버튼_1개,j as 모달_버튼_배치_COLUMN_REVERSE,B as 모달_버튼_배치_ROW,M as 모달_버튼_배치_ROW_REVERSE,x as 모달_열림_bottom,h as 모달_열림_bottom_animation,_ as 모달_열림_center,C as 모달_열림_center_animation,A as 모달_태블릿_반응형};
