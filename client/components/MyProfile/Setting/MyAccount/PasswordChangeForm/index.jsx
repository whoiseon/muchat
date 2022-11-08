import {useEffect, useRef, useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import useInput from "../../../../../hooks/useInput";
import {FormWrapper, UpdateInput} from "../NicknameChangeForm/styles";
import ConfirmModal from "../../../../CommonModal/ConfirmModal";
import {updateMyPassword, userLogout} from "../../../../../slices/userSlice";
import {ErrorMessage} from "../../../../../styles/common";
import {useRouter} from "next/router";

const PasswordChangeForm = ({ setShowUpdateModal }) => {
  const {
    userInfo,
    updateMyPasswordError,
    updateMyPasswordDone,
    userLogoutDone,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();
  const passwordRef = useRef();

  const [nowPassword, onChangeNowPassword, setNowPassword] = useInput('');
  const [newPassword, onChangeNewPassword, setNewPassword] = useInput('');
  const [newPasswordCheck, onChangeNewPasswordCheck, setNewPasswordCheck] = useInput('');

  const [confirmModal, setConfirmModal] = useState(false);

  const onClickChangeNickname = useCallback(async () => {
    setConfirmModal(false);

    await dispatch(updateMyPassword({
      token: userInfo?.token,
      nowPassword,
      newPassword,
      newPasswordCheck,
    }));

    await dispatch(userLogout({
      token: userInfo?.token,
    }));
  }, [userInfo?.token, nowPassword, newPassword, newPasswordCheck]);

  const onClickShowConfirmModal = useCallback(() => {
    setConfirmModal(true);
  }, []);

  const onClickCloseConfirmModal = useCallback(() => {
    setConfirmModal(false);
  }, []);

  useEffect(() => {
    passwordRef.current.focus();

    if (userLogoutDone || updateMyPasswordDone) {
      router.push('/');
    }
  }, [updateMyPasswordDone, userLogoutDone]);

  return (
    <FormWrapper>
      <UpdateInput>
        <p>현재 비밀번호</p>
        <input
          type="password"
          value={nowPassword}
          onChange={onChangeNowPassword}
          ref={passwordRef}
        />
      </UpdateInput>
      <UpdateInput>
        <p>새 비밀번호</p>
        <input
          type="password"
          value={newPassword}
          onChange={onChangeNewPassword}
        />
      </UpdateInput>
      <UpdateInput>
        <p>새 비밀번호 확인</p>
        <input
          type="password"
          value={newPasswordCheck}
          onChange={onChangeNewPasswordCheck}
        />
      </UpdateInput>
      {updateMyPasswordError && <ErrorMessage>{updateMyPasswordError}</ErrorMessage>}
      <button
        type="button"
        onClick={onClickShowConfirmModal}
      >
        변경하기
      </button>
      {
        confirmModal && (
          <ConfirmModal
            header="비밀번호 변경"
            setConfirmModal={setConfirmModal}
          >
            <p>사용 가능한 비밀번호 입니다</p>
            <p>정말 비밀번호를 변경하시겠습니까?</p>
            <p>비밀번호 변경시 로그아웃 됩니다.</p>
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

export default PasswordChangeForm;
