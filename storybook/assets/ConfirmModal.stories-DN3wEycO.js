import{C as c,j as o}from"./Input-vtyCMKML.js";import"./index-Dei0BBcc.js";import"./index-uubelm5h.js";const f={title:"ConfirmModal",component:c,argTypes:{isOpen:{control:"boolean"}}},m=({...e})=>o.jsx(c,{isOpen:e.isOpen,title:"ConfirmModal 제목입니다.",content:"ConfirmModal content 입니다.",isAnimation:!0,animationDuration:300,closeButtonLabel:"취소",confirmButtonLabel:"확인",...e}),r={args:{isOpen:!0,position:"bottom"},render:e=>o.jsx(m,{...e})},t={args:{isOpen:!0,position:"center",title:"제목 변경!"},render:e=>o.jsx(m,{...e})};var n,s,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'bottom'
  },
  render: args => <DefaultModal {...args} />
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,p,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'center',
    title: '제목 변경!'
  },
  render: args => <DefaultModal {...args} />
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const g=["Alert_모달_위치","Alert_모달_타이틀_변경"];export{r as Alert_모달_위치,t as Alert_모달_타이틀_변경,g as __namedExportsOrder,f as default};
