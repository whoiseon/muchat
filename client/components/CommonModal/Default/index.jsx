import {useCallback} from "react";
import CloseIcon from "@mui/icons-material/Close";
import {Background, Content, Header, ModalWrapper} from "./styles";
import Link from "next/link";

const DefaultModal = ({ setNonLoginModal, header, children, buttonText, router }) => {
  const onCloseBackgroundModal = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setNonLoginModal(false);
    }
  }, []);

  const onCloseModal = useCallback(() => {
    setNonLoginModal(false);
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
        <Link href={router}>
          <a>
            { buttonText }
          </a>
        </Link>
      </ModalWrapper>
    </Background>
  );
};

export default DefaultModal;
