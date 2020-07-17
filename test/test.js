import ReactDom from 'react-dom';
import ErsaModal from '../src/ErsaModal.tsx';
import React, { useState } from 'react';


function App() {
  const [state, setState] = useState({
    visible: false,
  })

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    })
  }

  const hideModal = () => {
    setState({
      ...state,
      visible: false,
    })
  }
  return (
    <div>
      <button onClick={() => { showModal(); }}>弹框</button>
      <button onClick={() => { hideModal(); }}>隐藏</button>
      <ErsaModal
        style={{
          // background: "white",
          padding: "10px"
        }}
        visible={state.visible}
        onCancel={() => { hideModal(); }}
      >
        <h3>this is title</h3>
      </ErsaModal>
    </div>
  )
}
ReactDom.render(<App />, document.getElementById("reactApp"));