import React from 'react';
import { createPortal } from 'react-dom';
import { OverLay, ButtonClose, Modal, Svg, ButtonCall } from './Modal.styled';
import { useEffect } from 'react';

const modalElement = document.getElementById('portal');

export const ModalCar = ({ children, toggleModal }) => {
  const onClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };
  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', onEscapeClick);

    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [toggleModal]);

  return createPortal(
    <OverLay onClick={onClickBackdrop}>
      <Modal>
        <ButtonClose onClick={toggleModal} type="button">
          <Svg />
        </ButtonClose>
        {children}

        <ButtonCall type="buttom">
          <a href="tel:+380730000000">Rental Car</a>
        </ButtonCall>
      </Modal>
    </OverLay>,
    modalElement
  );
};
