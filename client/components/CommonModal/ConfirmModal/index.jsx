import {useCallback} from "react";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import {Background, Header, ModalWrapper} from "../Default/styles";
import {Content} from "./styles";

const ConfirmModal = ({ setConfirmModal, header, children }) => {
  const onCloseBackgroundModal = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setConfirmModal(false);
    }
  }, []);

  const onCloseModal = useCallback(() => {
    setConfirmModal(false);
  }, []);

  return (
    <Background onClick={onCloseBackgroundModal}>
      <ModalWrapper>
        <Header>
          <h1>
            { header }
          </h1>
          <button type="button" onClick={onCloseModal}>
            <CloseIcon />
          </button>
        </Header>
        <Content>
          { children }
        </Content>
      </ModalWrapper>
    </Background>
  );
};

export default ConfirmModal;
