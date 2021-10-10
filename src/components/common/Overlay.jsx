import React from 'react';
import styled from 'styled-components';
const Overlay = ({ closeModal, children }) => {
  return (
    <OverlayWrapper className='close-btn' onClick={closeModal}>
      {children}
    </OverlayWrapper>
  );
};

const OverlayWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
export default Overlay;
