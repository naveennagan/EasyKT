import React from 'react';
import { Home } from './Home';
import Modal from './Modal';
import { ModalProvider } from '../utils/ModalContext';

export const EasyKT = ()=>{

    return (
    <div>
        <ModalProvider>
          <Home />
        </ModalProvider>
    </div>
    )
}