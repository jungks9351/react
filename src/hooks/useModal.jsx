import { useCallback, useState } from 'react';

const useModal = () => {
  const [modal, setModal] = useState(false);

  const openModal = useCallback((e) => {
    setModal(true);
  }, []);

  const closeModal = useCallback((e) => {
    const currEl = e.target;
    if (currEl.classList.contains('close-btn')) {
      setModal(false);
    }
  }, []);
  return [modal, openModal, closeModal];
};

export default useModal;
