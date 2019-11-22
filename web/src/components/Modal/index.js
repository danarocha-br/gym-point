import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { PoseGroup } from 'react-pose';
import { useMediaQuery } from 'react-responsive';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { ModalWrapper, ModalWrapperMob, Overlay, Header, Body } from './styles';

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

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-width: 991px)',
  });

  function renderModal() {
    if (isTabletOrMobileDevice === true) {
      return (
        <ModalWrapperMob key="modal">
          <Header>
            <h3>{title}</h3>

            <IoIosCloseCircleOutline
              color="var(--color-purple)"
              size="30px"
              onClick={() => handleHideModal()}
            />
          </Header>

          <Body>{children}</Body>
        </ModalWrapperMob>
      );
    }
    return (
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
      </ModalWrapper>
    );
  }

  return (
    <PoseGroup>
      {isVisible && [
        <Overlay key="overlay" onClick={() => handleHideModal()} />,
        renderModal(),
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
