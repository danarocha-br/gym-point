import React, { useState, useEffect } from 'react';
import { PoseGroup } from 'react-pose';
import { useDispatch } from 'react-redux';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { ModalWrapper, Overlay, Header, Body } from './styles';

import { hideModal } from '~/store/reducers/modals/actions';

const Modal = props => {
  const [isVisible, setVisibility] = useState({ isVisible: false });

  const dispatch = useDispatch();

  useEffect(() => {
    setVisibility({
      isVisible: true,
    });
  }, []);

  function handleHideModal() {
    dispatch(hideModal());
    setVisibility({
      isVisible: false,
    });
  }

  return (
    <PoseGroup>
      {isVisible && [
        <Overlay key="overlay" onClick={() => handleHideModal()} />,
        <ModalWrapper key="modal">
          <Header>
            <h3>{props.title}</h3>

            <IoIosCloseCircleOutline
              color="white"
              size="30px"
              onClick={() => handleHideModal()}
            />
          </Header>

          <Body>{props.children}</Body>
        </ModalWrapper>,
      ]}
    </PoseGroup>
  );
};

export default Modal;
