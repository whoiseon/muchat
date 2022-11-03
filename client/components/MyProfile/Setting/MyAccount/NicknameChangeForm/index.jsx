import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useRef, useState} from "react";
import {FormWrapper, UpdateInput} from "./styles";
import useInput from "../../../../../hooks/useInput";
import {updateMyNickname} from "../../../../../slices/userSlice";
import {ErrorMessage} from "../../../../../styles/common";
import {useRouter} from "next/router";

const NicknameChangeForm = ({ setShowUpdateModal }) => {
  const { userInfo, updateMyNicknameError, updateMyNicknameDone } = useSelector((state) => state.user);

  const NicknameRef = useRef();
  const dispatch = useDispatch();
  const router = useRouter();

  const [nickname, onChangeNickname, setNickname] = useInput(userInfo?.nickname);
  const [password, onChangePassword, setPassword] = useInput('');

  const onClickChangeNickname = useCallback(async () => {
    await dispatch(updateMyNickname({
      token: userInfo?.token,
      nickname,
      password,
    }));
  }, [userInfo?.token, nickname, password]);

  useEffect(() => {
    NicknameRef.current.focus();

    if (updateMyNicknameDone) {
      setShowUpdateModal(false);
      router.push('/');
    }
  }, [NicknameRef, updateMyNicknameDone]);

  return (
    <FormWrapper>
      <UpdateInput>
        <p>사용자명</p>
        <input
          type="text"
          ref={NicknameRef}
          value={nickname}
          onChange={onChangeNickname}
        />
      </UpdateInput>
      <UpdateInput>
        <p>현재 비밀번호</p>
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </UpdateInput>
      {updateMyNicknameError && <ErrorMessage>{updateMyNicknameError}</ErrorMessage>}
      <button
        type="button"
        onClick={onClickChangeNickname}
      >
        변경하기
      </button>
    </FormWrapper>
  );
};

export default NicknameChangeForm;
