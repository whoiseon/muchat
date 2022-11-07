import useInput from "../../../../../hooks/useInput";
import {FormWrapper, UpdateInput} from "../NicknameChangeForm/styles";
import {useEffect, useRef, useCallback, useState} from "react";
import ConfirmModal from "../../../../CommonModal/ConfirmModal";

const PasswordChangeForm = () => {
  const passwordRef = useRef();

  const [nowPassword, onChangeNowPassword, setNowPassword] = useInput('');
  const [newPassword, onChangeNewPassword, setNewPassword] = useInput('');
  const [newPasswordCheck, onChangeNewPasswordCheck, setNewPasswordCheck] = useInput('');

  const [confirmModal, setConfirmModal] = useState(false);

  const onClickShowConfirmModal = useCallback(() => {
    setConfirmModal(true);
  }, []);

  const onClickCloseConfirmModal = useCallback(() => {
    setConfirmModal(false);
  }, []);

  useEffect(() => {
    passwordRef.current.focus();
  }, []);

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
            <div>
              <button
                type="button"
                onClick={onClickCloseConfirmModal}
              >
                취소
              </button>
              <button
                type="button"
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
