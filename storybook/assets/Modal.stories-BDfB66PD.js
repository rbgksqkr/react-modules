import{r as y}from"./index-uubelm5h.js";import{r as we}from"./index-Dei0BBcc.js";var de={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee=y,fe=Symbol.for("react.element"),ve=Symbol.for("react.fragment"),ye=Object.prototype.hasOwnProperty,Re=Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oe={key:!0,ref:!0,__self:!0,__source:!0};function me(u,o,c){var n,r={},t=null,i=null;c!==void 0&&(t=""+c),o.key!==void 0&&(t=""+o.key),o.ref!==void 0&&(i=o.ref);for(n in o)ye.call(o,n)&&!Oe.hasOwnProperty(n)&&(r[n]=o[n]);if(u&&u.defaultProps)for(n in o=u.defaultProps,o)r[n]===void 0&&(r[n]=o[n]);return{$$typeof:fe,type:u,key:t,ref:i,props:r,_owner:Re.current}}v.Fragment=ve;v.jsx=me;v.jsxs=me;de.exports=v;var e=de.exports;const xe="_dimmed_3clts_9",je="_modal_3clts_16",Pe="_modalBottom_3clts_32",Se="_modalHeader_3clts_45",Le="_closeButton_3clts_52",Ne="_title_3clts_59",Te="_buttonRow_3clts_68",Ie="_buttonRowReverse_3clts_76",Fe="_buttonColumn_3clts_85",De="_buttonColumnReverse_3clts_94",s={dimmed:xe,modal:je,modalBottom:Pe,modalHeader:Se,closeButton:Le,title:Ne,buttonRow:Te,buttonRowReverse:Ie,buttonColumn:Fe,buttonColumnReverse:De},j="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2729_1438)'%3e%3cpath%20d='M19.8167%206.41L18.4067%205L12.8167%2010.59L7.22665%205L5.81665%206.41L11.4067%2012L5.81665%2017.59L7.22665%2019L12.8167%2013.41L18.4067%2019L19.8167%2017.59L14.2267%2012L19.8167%206.41Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2729_1438'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.81665)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",qe={center:s.modal,bottom:s.modalBottom},Ae={row:s.buttonRow,"row-reverse":s.buttonRowReverse,column:s.buttonColumn,"column-reverse":s.buttonColumnReverse},pe=({isOpen:u,onClose:o,title:c,position:n,content:r,style:t,closeButton:i,confirmButton:R,buttonPosition:O,closeOnOutsideClick:x=!0,customCloseIcon:_e,hideCloseIcon:Be=!1})=>{const l=y.useRef(null),be=i||R,Ce=O?Ae[O]:s.buttonRow;y.useEffect(()=>{const a=he=>{l.current&&!l.current.contains(he.target)&&x&&o()};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[l,o,x]);const ge=a=>{a.currentTarget.src=j};return e.jsx(e.Fragment,{children:u&&we.createPortal(e.jsx("div",{className:s.dimmed,style:t==null?void 0:t.dimmed,children:e.jsxs("section",{className:qe[n],ref:l,style:t==null?void 0:t.modal,children:[e.jsxs("header",{className:s.modalHeader,style:t==null?void 0:t.modalHeader,children:[e.jsx("span",{className:s.title,style:t==null?void 0:t.modalTitle,children:c}),!Be&&e.jsx("img",{src:_e??j,alt:"close",className:s.closeButton,onClick:o,onError:ge})]}),r&&e.jsx("section",{children:r}),be&&e.jsxs("footer",{className:Ce,children:[i,R]})]})}),document.body)})};pe.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},position:{required:!0,tsType:{name:"union",raw:"'center' | 'bottom'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'bottom'"}]},description:""},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ModalStyle"},description:""},closeButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},confirmButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttonPosition:{required:!1,tsType:{name:"union",raw:"'row' | 'row-reverse' | 'column' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column'"},{name:"literal",value:"'column-reverse'"}]},description:""},closeOnOutsideClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},customCloseIcon:{required:!1,tsType:{name:"string"},description:""},hideCloseIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ue={title:"Modal",component:pe},d={args:{isOpen:!0,title:"마루",position:"center",onClose:()=>console.log("마루")}},m={args:{isOpen:!0,title:"마루",position:"bottom",onClose:()=>console.log("마루")}},p={args:{isOpen:!1,title:"마루",position:"center",onClose:()=>console.log("마루")}},_={args:{isOpen:!0,title:"마루",position:"center",onClose:()=>console.log("마루"),closeButton:e.jsx("button",{style:{width:"100%"},children:"쿠키"})}},B={args:{isOpen:!0,title:"마루",position:"center",onClose:()=>console.log("마루"),buttonPosition:"row",closeButton:e.jsx("button",{style:{width:"100%"},children:"쿠키"}),confirmButton:e.jsx("button",{style:{width:"100%"},children:"마루"})}},b={args:{isOpen:!0,title:"마루",position:"center",onClose:()=>console.log("마루"),buttonPosition:"row-reverse",closeButton:e.jsx("button",{style:{width:"100%"},children:"쿠키"}),confirmButton:e.jsx("button",{style:{width:"100%"},children:"마루"})}},C={args:{isOpen:!0,title:"마루",position:"center",onClose:()=>console.log("마루"),buttonPosition:"column",closeButton:e.jsx("button",{style:{width:"100%"},children:"쿠키"}),confirmButton:e.jsx("button",{style:{width:"100%"},children:"마루"})}},g={args:{isOpen:!0,title:"마루",position:"center",onClose:()=>console.log("마루"),buttonPosition:"column-reverse",closeButton:e.jsx("button",{style:{width:"100%"},children:"쿠키"}),confirmButton:e.jsx("button",{style:{width:"100%"},children:"마루"})}},h={args:{isOpen:!0,title:"마루",position:"center",onClose:()=>console.log("마루"),hideCloseIcon:!0,buttonPosition:"row-reverse",closeButton:e.jsx("button",{style:{width:"100%"},children:"쿠키"}),confirmButton:e.jsx("button",{style:{width:"100%"},children:"마루"})}},w={args:{isOpen:!0,title:"마루",position:"center",onClose:()=>console.log("마루"),customCloseIcon:"https://github.com/jinhokim98/react-payments/blob/step2/src/assets/image/failure.png?raw=true",buttonPosition:"row-reverse",closeButton:e.jsx("button",{style:{width:"100%"},children:"쿠키"}),confirmButton:e.jsx("button",{style:{width:"100%"},children:"마루"})}},E={args:{isOpen:!0,title:"마루",position:"center",onClose:()=>console.log("마루"),customCloseIcon:"이미지",buttonPosition:"row-reverse",closeButton:e.jsx("button",{style:{width:"100%"},children:"쿠키"}),confirmButton:e.jsx("button",{style:{width:"100%"},children:"마루"})}},f={args:{isOpen:!0,title:"마루",position:"center",onClose:()=>console.log("마루"),content:e.jsx("div",{children:"안녕 나는 마루랑 쿠키야"}),customCloseIcon:"이미지",buttonPosition:"row-reverse",closeButton:e.jsx("button",{style:{width:"100%"},children:"쿠키"}),confirmButton:e.jsx("button",{style:{width:"100%"},children:"마루"})}};var P,S,L;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루')
  }
}`,...(L=(S=d.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var N,T,I;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '마루',
    position: 'bottom',
    onClose: () => console.log('마루')
  }
}`,...(I=(T=m.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var F,D,q;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루')
  }
}`,...(q=(D=p.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var A,k,M;_.parameters={..._.parameters,docs:{...(A=_.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    closeButton: <button style={{
      width: '100%'
    }}>쿠키</button>
  }
}`,...(M=(k=_.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var U,V,H;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    buttonPosition: 'row',
    closeButton: <button style={{
      width: '100%'
    }}>쿠키</button>,
    confirmButton: <button style={{
      width: '100%'
    }}>마루</button>
  }
}`,...(H=(V=B.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var W,Y,$;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    buttonPosition: 'row-reverse',
    closeButton: <button style={{
      width: '100%'
    }}>쿠키</button>,
    confirmButton: <button style={{
      width: '100%'
    }}>마루</button>
  }
}`,...($=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var J,Z,z;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    buttonPosition: 'column',
    closeButton: <button style={{
      width: '100%'
    }}>쿠키</button>,
    confirmButton: <button style={{
      width: '100%'
    }}>마루</button>
  }
}`,...(z=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:z.source}}};var G,K,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    buttonPosition: 'column-reverse',
    closeButton: <button style={{
      width: '100%'
    }}>쿠키</button>,
    confirmButton: <button style={{
      width: '100%'
    }}>마루</button>
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,ee,te;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    hideCloseIcon: true,
    buttonPosition: 'row-reverse',
    closeButton: <button style={{
      width: '100%'
    }}>쿠키</button>,
    confirmButton: <button style={{
      width: '100%'
    }}>마루</button>
  }
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ne,se;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    customCloseIcon: 'https://github.com/jinhokim98/react-payments/blob/step2/src/assets/image/failure.png?raw=true',
    buttonPosition: 'row-reverse',
    closeButton: <button style={{
      width: '100%'
    }}>쿠키</button>,
    confirmButton: <button style={{
      width: '100%'
    }}>마루</button>
  }
}`,...(se=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,ue,ie;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    customCloseIcon: '이미지',
    buttonPosition: 'row-reverse',
    closeButton: <button style={{
      width: '100%'
    }}>쿠키</button>,
    confirmButton: <button style={{
      width: '100%'
    }}>마루</button>
  }
}`,...(ie=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var ce,le,ae;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '마루',
    position: 'center',
    onClose: () => console.log('마루'),
    content: <div>안녕 나는 마루랑 쿠키야</div>,
    customCloseIcon: '이미지',
    buttonPosition: 'row-reverse',
    closeButton: <button style={{
      width: '100%'
    }}>쿠키</button>,
    confirmButton: <button style={{
      width: '100%'
    }}>마루</button>
  }
}`,...(ae=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};const Ve=["모달이_열림_center","모달이_열림_bottom","모달이_닫힘","모달_버튼_1개","모달_버튼_2개_ROW","모달_버튼_2개_ROW_REVERSE","모달_버튼_2개_COLUMN","모달_버튼_2개_COLUMN_REVERSE","모달_닫기_아이콘_숨김","모달_닫기_아이콘_커스텀","모달_닫기_아이콘_커스텀_오류","모달_컨텐츠"];export{Ve as __namedExportsOrder,Ue as default,h as 모달_닫기_아이콘_숨김,w as 모달_닫기_아이콘_커스텀,E as 모달_닫기_아이콘_커스텀_오류,_ as 모달_버튼_1개,C as 모달_버튼_2개_COLUMN,g as 모달_버튼_2개_COLUMN_REVERSE,B as 모달_버튼_2개_ROW,b as 모달_버튼_2개_ROW_REVERSE,f as 모달_컨텐츠,p as 모달이_닫힘,m as 모달이_열림_bottom,d as 모달이_열림_center};
