import React from 'react';
import styled from 'styled-components';

const ErrorBox = ({ children }) => {
  return <ErrorContent>{children}</ErrorContent>;
};

const ErrorContent = styled.div`
  text-align: center;
  width: 300px;
  height: 30px;
  font-size: 24px;
  color: red;
`;
export default ErrorBox;
