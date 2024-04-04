import { createContext, useReducer, useState } from 'react';
import { ModalContextInitialState, PropsChildren } from '../../types';
import { modalReducer } from './modalReducer';
import { ModalActionTypes } from './modalActions';

const initialState: ModalContextInitialState = {
  type: 'idle',
};

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }: PropsChildren) => {
  const [Probando, setProbando] = useState(false);
  const [modalState, modalDispatch] = useReducer(modalReducer, initialState);

  const handleClosedModal = () => {
    modalDispatch({ type: ModalActionTypes.CLOSE_MODAL });
  };

  const handleOpenModal = (type: ModalActionTypes) => {
    modalDispatch({ type });
  };

  return (
    <ModalContext.Provider
      value={{
        handleClosedModal,
        modalState,
        handleOpenModal,
        Probando,
        setProbando,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
