import React from 'react'
import Modal from "react-modal";

const CustomModal = ({children}) => {

    return (
        <Modal
          isOpen={true}
          style={
            {content:{ inset: '100px' }}}
        >
          {children}
        </Modal> 
      );
}

export default CustomModal;