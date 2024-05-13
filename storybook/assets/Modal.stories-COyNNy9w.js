import{M as o,j as e}from"./Input-vtyCMKML.js";import{r as le}from"./index-uubelm5h.js";import"./index-Dei0BBcc.js";var M={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphoneSE3:{name:"iPhone SE 3rd generation",styles:{height:"667px",width:"375px"},type:"mobile"},iphone13:{name:"iPhone 13",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13pro:{name:"iPhone 13 Pro",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13promax:{name:"iPhone 13 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphone14:{name:"iPhone 14",styles:{height:"844px",width:"390px"},type:"mobile"},iphone14pro:{name:"iPhone 14 Pro",styles:{height:"852px",width:"393px"},type:"mobile"},iphone14promax:{name:"iPhone 14 Pro Max",styles:{height:"932px",width:"430px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad11p:{name:"iPad Pro 11-in",styles:{height:"1194px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}},g={mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"},mobile2:{name:"Large mobile",styles:{height:"896px",width:"414px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}};const pe={title:"Modal",component:o,parameters:{viewport:{viewports:{...M,...g},defaultViewport:"desktop"}}},t=({...n})=>{const[re,s]=le.useReducer(ae=>!ae,!0);return e.jsxs(o,{...n,isOpen:re,children:[e.jsx(o.Dimmed,{onDimmedClick:()=>s()}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"마루"}),e.jsx(o.CloseIcon,{onClose:()=>s()})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>s()}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>s()})]})]})},r={args:{isOpen:!0,position:"center"},render:n=>e.jsx(t,{...n})},a={args:{isOpen:!0,position:"center",isAnimation:!0,animationDuration:500},render:n=>e.jsx(t,{...n})},l={args:{isOpen:!0,position:"bottom"},render:n=>e.jsx(t,{...n})},i={args:{isOpen:!0,position:"bottom",isAnimation:!0,animationDuration:500},render:n=>e.jsx(t,{...n})},d={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달 버튼 1개"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsx(o.Footer,{children:e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})})]})},u={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_버튼_배치_ROW"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{position:"row",children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},p={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_버튼_배치_ROW_REVERSE"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{position:"row-reverse",children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},m={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_버튼_배치_COLUMN_REVERSE"}),e.jsx(o.CloseIcon,{onClose:()=>""})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{position:"column-reverse",children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},C={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_닫기_아이콘_숨김"}),e.jsx(o.CloseIcon,{onClose:()=>"",showCloseIcon:!1})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},c={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_닫기_아이콘_커스텀"}),e.jsx(o.CloseIcon,{onClose:()=>"",customCloseIcon:"https://github.com/jinhokim98/react-payments/blob/step2/src/assets/image/failure.png?raw=true"})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},h={args:{isOpen:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Dimmed,{}),e.jsxs(o.Header,{children:[e.jsx(o.Title,{title:"모달_닫기_아이콘_커스텀_오류"}),e.jsx(o.CloseIcon,{onClose:()=>"",customCloseIcon:"잘못된 이미지 경로를 넣는다면?"})]}),e.jsx(o.Content,{children:"마루와 쿠키"}),e.jsxs(o.Footer,{children:[e.jsx(o.ConfirmButton,{label:"확인",onConfirm:()=>""}),e.jsx(o.CloseButton,{label:"닫기",onClose:()=>""})]})]})},x={parameters:{viewport:{viewports:{...M,...g},defaultViewport:"iphone6"}},args:{isOpen:!0},render:n=>e.jsx(t,{...n})},_={parameters:{viewport:{viewports:{...M,...g},defaultViewport:"tablet"}},args:{isOpen:!0},render:n=>e.jsx(t,{...n})};var B,E,b;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'center'
  },
  render: args => <DefaultModal {...args} />
}`,...(b=(E=r.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var j,y,w;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'center',
    isAnimation: true,
    animationDuration: 500
  },
  render: args => <DefaultModal {...args} />
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var A,D,O;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'bottom'
  },
  render: args => <DefaultModal {...args} />
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var f,I,P;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    position: 'bottom',
    isAnimation: true,
    animationDuration: 500
  },
  render: args => <DefaultModal {...args} />
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var S,F,R;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(F=d.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var T,H,V;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(H=u.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var v,W,L;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(W=p.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var N,X,k;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(k=(X=m.parameters)==null?void 0:X.docs)==null?void 0:k.source}}};var U,G,q;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(G=C.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var z,J,K;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,oe;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(oe=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var ne,te,se;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(te=_.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const me=["모달_열림_center","모달_열림_center_animation","모달_열림_bottom","모달_열림_bottom_animation","모달_버튼_1개","모달_버튼_배치_ROW","모달_버튼_배치_ROW_REVERSE","모달_버튼_배치_COLUMN_REVERSE","모달_닫기_아이콘_숨김","모달_닫기_아이콘_커스텀","모달_닫기_아이콘_커스텀_오류","모달_모바일_반응형","모달_태블릿_반응형"];export{me as __namedExportsOrder,pe as default,C as 모달_닫기_아이콘_숨김,c as 모달_닫기_아이콘_커스텀,h as 모달_닫기_아이콘_커스텀_오류,x as 모달_모바일_반응형,d as 모달_버튼_1개,m as 모달_버튼_배치_COLUMN_REVERSE,u as 모달_버튼_배치_ROW,p as 모달_버튼_배치_ROW_REVERSE,l as 모달_열림_bottom,i as 모달_열림_bottom_animation,r as 모달_열림_center,a as 모달_열림_center_animation,_ as 모달_태블릿_반응형};
