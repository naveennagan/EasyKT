import React from 'react'
import { useContext } from 'react';
import { ModalContext } from '../utils/ModalContext';

const Modal = ({title, children}) => {
    const {show, setShow} = useContext(ModalContext);
    
    if(!show){
        return null;
    }

    return(
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h3 className='modal-title'>title</h3>
                </div>
                <div className='modal-body'>
                    <div>body</div>
                </div>
                <div className='modal-footer'>
                    <button className='modal-footer-button' onClick={() => setShow(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;