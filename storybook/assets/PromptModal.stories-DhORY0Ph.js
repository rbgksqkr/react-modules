import{P as u,j as t}from"./Input-vtyCMKML.js";import"./index-Dei0BBcc.js";import"./index-uubelm5h.js";const _={title:"PromptModal",component:u,argTypes:{isOpen:{control:"boolean"}}},l=({...e})=>t.jsx(u,{isOpen:e.isOpen,title:"PromptModal 제목입니다.",content:"PromptModal content 입니다.",isAnimation:!0,animationDuration:300,closeButtonLabel:"취소",confirmButtonLabel:"확인",value:"",onChange:()=>{},...e}),o={args:{isOpen:!0,position:"bottom",value:"",onChange:()=>{}},render:e=>t.jsx(l,{...e})},n={args:{isOpen:!0,position:"center",title:"제목 변경!",value:"",onChange:()=>{}},render:e=>t.jsx(l,{...e})};var r,a,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'bottom',
    value: '',
    onChange: () => {}
  },
  render: args => <DefaultModal {...args} />
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,i,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'center',
    title: '제목 변경!',
    value: '',
    onChange: () => {}
  },
  render: args => <DefaultModal {...args} />
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const C=["Prompt_모달_위치","Prompt_모달_타이틀_변경"];export{o as Prompt_모달_위치,n as Prompt_모달_타이틀_변경,C as __namedExportsOrder,_ as default};
