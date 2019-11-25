export const showModal = modalProps => {
  return {
    type: '@modal/SHOW_MODAL',
    payload: {
      modalProps,
    },
  };
};

export const hideModal = () => {
  return {
    type: '@modal/HIDE_MODAL',
  };
};
