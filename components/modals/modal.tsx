import React, { Dispatch, ReactElement, SetStateAction } from "react";
import "./modal.css";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children: ReactElement;
}

const Modal: React.FC<Props> = ({ setShowModal, children }) => {
  return (
    <div onClick={() => setShowModal(false)} className="overlay">
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
