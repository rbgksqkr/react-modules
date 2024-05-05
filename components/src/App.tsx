import React, { useReducer } from 'react';

import { Modal } from './lib';

function App() {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false);

  return (
    <>
      <button onClick={toggleIsOpen}>모달열기</button>
      <Modal isOpen={isOpen}>
        <Modal.Dimmed />
        <Modal.Header handleClose={() => toggleIsOpen()}>제목</Modal.Header>
        <Modal.Content>
          <>
            <div>내용</div>
            <div>내용</div>
            <div>내용</div>
          </>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default App;
