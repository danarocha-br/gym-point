import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PoseGroup } from 'react-pose';
import { useDispatch } from 'react-redux';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { ModalWrapper, Overlay, Header, Body } from './styles';

import { hideModal } from '~/store/reducers/modals/actions';

const Modal = ({ children, title }) => {
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
            <h3>{title}</h3>

            <IoIosCloseCircleOutline
              color="white"
              size="30px"
              onClick={() => handleHideModal()}
            />
          </Header>

          <Body>{children}</Body>
        </ModalWrapper>,
      ]}
    </PoseGroup>
  );
};

export default Modal;

Modal.propTypes = {
  /**
   * Defines the title for the modal.
   */
  title: PropTypes.string.isRequired,
  /**
   * Defines the children for the component.
   */
  children: PropTypes.element.isRequired,
};
