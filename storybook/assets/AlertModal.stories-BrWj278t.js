import{A as m,j as o}from"./Input-vtyCMKML.js";import"./index-Dei0BBcc.js";import"./index-uubelm5h.js";const g={title:"AlertModal",component:m,argTypes:{isOpen:{control:"boolean"}}},c=({...e})=>o.jsx(m,{isOpen:e.isOpen,title:"AlertModal 제목입니다.",content:"AlertModal content 입니다.",isAnimation:!0,animationDuration:300,buttonLabel:"테스트",...e}),r={args:{isOpen:!0,position:"bottom"},render:e=>o.jsx(c,{...e})},t={args:{isOpen:!0,position:"center",title:"제목 변경!"},render:e=>o.jsx(c,{...e})};var n,s,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const f=["Confirm_모달_위치","Confirm_모달_타이틀_변경"];export{r as Confirm_모달_위치,t as Confirm_모달_타이틀_변경,f as __namedExportsOrder,g as default};
