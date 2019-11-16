import React from 'react';
import { useSelector } from 'react-redux';

import ModalUpdateStudent from 'pages/Students/ModalUpdateStudent';
import ModalAddStudent from 'pages/Students/ModalAddStudent';
import ModalAddPlan from 'pages/Plans/ModalAddPlan';
import ModalUpdatePlan from 'pages/Plans/ModalUpdatePlan';
import ModalAddEnrollment from 'pages/Enrollments/ModalAddEnrollment';
import ModalUpdateEnrollment from 'pages/Enrollments/ModalUpdateEnrollment';

export default function ModalManager() {
  const modalLookup = {
    ModalAddStudent,
    ModalUpdateStudent,
    ModalAddPlan,
    ModalUpdatePlan,
    ModalAddEnrollment,
    ModalUpdateEnrollment,
  };

  const currentModal = useSelector(state => state.modals.modal);

  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
}
