import React from 'react';
import { useSelector } from 'react-redux';

import ModalAddStudent from '~/pages/Students/ModalAddStudent';

export default function ModalManager() {
  const modalLookup = { ModalAddStudent };

  const currentModal = useSelector(state => state.modals.modal);

  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
}
