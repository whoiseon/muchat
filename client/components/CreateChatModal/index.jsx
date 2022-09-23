import CloseIcon from '@mui/icons-material/Close';
import {useCallback, useEffect, useRef} from "react";
import {Background, CreateChatForm, Header, ModalInput, ModalSelect, ModalTextArea, ModalWrapper} from "./styles";

const CreateChatModal = ({ setShowCreateChat }) => {
  const inputRef = useRef();

  const onCloseBackgroundModal = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setShowCreateChat(false);
    }
  }, []);

  const onCloseModal = useCallback((e) => {
    setShowCreateChat(false);
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <Background onClick={onCloseBackgroundModal}>
      <ModalWrapper>
        <Header>
          <h1>
            채팅방 개설하기
          </h1>
          <button type="button" onClick={onCloseModal}>
            <CloseIcon />
          </button>
        </Header>
        <CreateChatForm>
          <ModalInput>
            <p>제목</p>
            <input type="text" ref={inputRef} />
          </ModalInput>
          <ModalSelect>
            <p>장르</p>
            <select>
              <option value="">장르</option>
              <option value="게임/오락">게임/오락</option>
              <option value="애니메이션">애니메이션</option>
              <option value="공부">공부</option>
            </select>
          </ModalSelect>
          <ModalTextArea>
            <p>설명</p>
            <textarea
              placeholder="심한 욕설 또는 불법적인 내용의 채팅방은&#10;따로 통보하지 않고 삭제 조치 될 수 있습니다."
            />
          </ModalTextArea>
          <button type="button">개설하기</button>
        </CreateChatForm>
      </ModalWrapper>
    </Background>
  );
};

export default CreateChatModal;
