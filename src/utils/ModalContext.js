import React, {useState, createContext, useMemo} from 'react'

export const ModalContext = createContext({
    show: false,
    setShow: () => {}
});

export const ModalProvider = ({children}) => {
    const [show, setShow] = useState(false);
    const value = useMemo(
        () => ({ show, setShow }), 
        [show]
      );
      
    return(
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
};