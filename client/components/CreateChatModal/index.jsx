import CloseIcon from '@mui/icons-material/Close';
import {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Background, CreateChatForm, Header, ModalInput, ModalSelect, ModalTextArea, ModalWrapper} from "./styles";
import useInput from "../../hooks/useInput";
import {ErrorMessage} from "../../styles/common";
import {createChat} from "../../slices/chatSlice";
import {loadMyInfo} from "../../slices/userSlice";
import {genreList} from "../../utils/genreList";

const CreateChatModal = ({ setShowCreateChat }) => {
  const { userInfo } = useSelector((state) => state.user);
  const { createChatError, createChatDone } = useSelector((state) => state.chat);

  const inputRef = useRef();
  const dispatch = useDispatch();

  const [title, onChangeTitle, setTitle] = useInput('');
  const [introduce, setIntroduce] = useState('');
  const [genre, setGenre] = useState('');

  const onCloseBackgroundModal = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setShowCreateChat(false);
    }
  }, []);

  const onCloseModal = useCallback((e) => {
    setShowCreateChat(false);
  }, []);

  const onChangeIntroduce = useCallback((e) => {
    setIntroduce(e.target.value);
  }, []);

  const onChangeGenre = useCallback((e) => {
    setGenre(e.target.value);
  }, []);

  const onClickCreateChat = useCallback(async () => {
    await dispatch(createChat({
      manager: userInfo?._id,
      title,
      genre,
      introduce,
      token: userInfo?.token,
    }));

    dispatch(loadMyInfo({
      token: userInfo?.token,
    }));
  }, [userInfo, title, genre, introduce]);

  useEffect(() => {
    inputRef.current.focus();
    if (createChatDone) {
      setShowCreateChat(false);
    }
  }, [inputRef, createChatDone]);

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
            <input
              type="text"
              ref={inputRef}
              value={title}
              onChange={onChangeTitle}
            />
          </ModalInput>
          <ModalSelect>
            <p>장르</p>
            <select onChange={onChangeGenre}>
              <option value="">장르</option>
              {
                genreList.map((item, i) => {
                  return (
                    <option
                      key={item.code}
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  );
                })
              }
            </select>
          </ModalSelect>
          <ModalTextArea>
            <p>설명</p>
            <textarea
              value={introduce}
              onChange={onChangeIntroduce}
              placeholder="심한 욕설 또는 불법적인 내용의 채팅방은&#10;따로 통보하지 않고 삭제 조치 될 수 있습니다."
            />
          </ModalTextArea>
          {createChatError && <ErrorMessage>{ createChatError }</ErrorMessage>}
          <button
            type="button"
            onClick={onClickCreateChat}
          >
            개설하기
          </button>
        </CreateChatForm>
      </ModalWrapper>
    </Background>
  );
};

export default CreateChatModal;
