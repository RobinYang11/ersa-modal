

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import "./index.less";

interface ErsaModalProps {
  visible: boolean,
  onCancel: () => void,
  onOk?: () => void,
  style?: Object,
  width?: String,
  children: React.ReactElement | React.ReactChildren | React.ReactFragment
}


function ErsaModal(props: ErsaModalProps) {
  return (
    <div className="modal">
      {
        props.visible ?
          <div className="modal-mask"
            onClick={() => {
              props.onCancel();
            }}>
          </div>
          : null
      }
      <CSSTransition
        in={props.visible}
        classNames="alert"
        unmountOnExit
        timeout={200}
        onEnter={
          () => { }
        }
        onExit={() => {

        }}
      >
        <div className="container">
          <div className="content" style={{ ...props.style, width: props.width ? props.width : '500px' }} >
            {props.children}
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default ErsaModal;