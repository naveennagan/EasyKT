import React from 'react'
import Modal from "react-modal";

const CustomModal = ({children, style}) => {

    return (
        <Modal
          isOpen={true}
          style={style}
        >
          {children}
        </Modal> 
      );
}

export default CustomModal;