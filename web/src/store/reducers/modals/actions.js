export const showModal = (modalType, modalProps) => {
  return {
    type: '@modal/SHOW_MODAL',
    payload: {
      modalType,
      modalProps,
    },
  };
};

export const hideModal = () => {
  return {
    type: '@modal/HIDE_MODAL',
  };
};
