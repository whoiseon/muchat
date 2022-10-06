import {useCallback, useEffect, useRef} from "react";
import {Background, ModalWrapper} from "./styles";

const UserProfileModal = ({ setShowProfileModal }) => {
  const ModalRef = useRef();

  const onClickCloseModal = useCallback((e) => {
    if (ModalRef.current && !ModalRef.current.contains(e.target)) {
      setShowProfileModal(false);
    } else {
      setShowProfileModal(true);
    }
  }, [ModalRef]);

  useEffect(() => {
    document.addEventListener("mousedown", onClickCloseModal);
    return () => {
      document.removeEventListener("mousedown", onClickCloseModal);
    };
  });

  return (
    <Background onClick={onClickCloseModal} ref={ModalRef}>
      <ModalWrapper>
        <li>
          1:1 채팅하기
        </li>
      </ModalWrapper>
    </Background>
  );
};

export default UserProfileModal;
