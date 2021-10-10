import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(children, document.querySelector('#root'));
};

export default Modal;
