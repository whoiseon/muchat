import CloseIcon from '@mui/icons-material/Close';
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Background, CreateChatForm, Header, ModalInput, ModalSelect, ModalTextArea, ModalWrapper} from "./styles";
import useInput from "../../hooks/useInput";
import {ErrorMessage} from "../../styles/common";
import {createChat, loadMainChat} from "../../slices/chatSlice";
import {loadMyInfo} from "../../slices/userSlice";
import {genreList} from "../../utils/genreList";

const randomCode = Math.random().toString(36).substr(2, 6);

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
      code: randomCode,
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
      dispatch(loadMainChat());
      setShowCreateChat(false);
    }
  }, [inputRef, createChatDone, loadMainChat]);

  return (
    <Background onClick={onCloseBackgroundModal}>
      <ModalWrapper>
        <Header>
          <h1>
            ????????? ????????????
          </h1>
          <button type="button" onClick={onCloseModal}>
            <CloseIcon />
          </button>
        </Header>
        <CreateChatForm>
          <ModalInput>
            <p>??????</p>
            <input
              type="text"
              ref={inputRef}
              value={title}
              onChange={onChangeTitle}
            />
          </ModalInput>
          <ModalSelect>
            <p>??????</p>
            <select onChange={onChangeGenre}>
              <option value="">??????</option>
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
            <p>??????</p>
            <textarea
              value={introduce}
              onChange={onChangeIntroduce}
              placeholder="?????? ?????? ?????? ???????????? ????????? ????????????&#10;?????? ???????????? ?????? ?????? ?????? ??? ??? ????????????."
            />
          </ModalTextArea>
          {createChatError && <ErrorMessage>{ createChatError }</ErrorMessage>}
          <button
            type="button"
            onClick={onClickCreateChat}
          >
            ????????????
          </button>
        </CreateChatForm>
      </ModalWrapper>
    </Background>
  );
};

export default CreateChatModal;
