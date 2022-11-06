import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {FormWrapper, UpdateInput} from "./styles";
import useInput from "../../../../../hooks/useInput";
import {updateMyNickname} from "../../../../../slices/userSlice";
import {ErrorMessage} from "../../../../../styles/common";
import ConfirmModal from "../../../../CommonModal/ConfirmModal";

const NicknameChangeForm = ({ setShowUpdateModal }) => {
  const {
    userInfo,
    updateMyNicknameError,
    updateMyNicknameDone,
  } = useSelector((state) => state.user);

  const nicknameRef = useRef();
  const dispatch = useDispatch();
  const router = useRouter();

  const [nickname, onChangeNickname, setNickname] = useInput(userInfo?.nickname);
  const [password, onChangePassword, setPassword] = useInput('');
  const [confirmModal, setConfirmModal] = useState(false);

  const onClickChangeNickname = useCallback(async () => {
    setConfirmModal(false);
    setShowUpdateModal(false);

    await dispatch(updateMyNickname({
      token: userInfo?.token,
      nickname,
      password,
    }));
  }, [userInfo?.token, nickname, password]);

  const onClickShowConfirmModal = useCallback(() => {
    setConfirmModal(true);
  }, []);

  const onClickCloseConfirmModal = useCallback(() => {
    setConfirmModal(false);
  });

  useEffect(() => {
    nicknameRef.current.focus();

    if (updateMyNicknameDone) {
      router.push('/');
    }
  }, [nicknameRef, updateMyNicknameDone]);

  return (
    <FormWrapper>
      <UpdateInput>
        <p>사용자명</p>
        <input
          type="text"
          ref={nicknameRef}
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
        onClick={onClickShowConfirmModal}
      >
        변경하기
      </button>
      {
        confirmModal && (
          <ConfirmModal
            header="닉네임 변경"
            setConfirmModal={setConfirmModal}
          >
            <p>닉네임을 변경하시면 복구하실 수 없습니다.</p>
            <p>정말로 <i>{nickname}</i>으로 변경하시겠습니까?</p>
            <div>
              <button
                type="button"
                onClick={onClickCloseConfirmModal}
              >
                취소
              </button>
              <button
                type="button"
                onClick={onClickChangeNickname}
              >
                변경
              </button>
            </div>
          </ConfirmModal>
        )
      }
    </FormWrapper>
  );
};

export default NicknameChangeForm;
