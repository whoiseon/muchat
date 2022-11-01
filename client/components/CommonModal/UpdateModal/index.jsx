import {useCallback} from "react";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import {Background, Content, Header, ModalWrapper} from "../Default/styles";

const UpdateModal = ({ children, setShowUpdateModal, header, buttonText}) => {
  const onCloseBackgroundModal = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setShowUpdateModal(false);
    }
  }, []);

  const onCloseModal = useCallback(() => {
    setShowUpdateModal(false);
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

export default UpdateModal;
