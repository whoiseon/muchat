import useInput from "../../../../../hooks/useInput";
import {FormWrapper, UpdateInput} from "../NicknameChangeForm/styles";
import {useEffect, useRef} from "react";

const PasswordChangeForm = () => {
  const passwordRef = useRef();

  const [nowPassword, onChangeNowPassword, setNowPassword] = useInput('');
  const [newPassword, onChangeNewPassword, setNewPassword] = useInput('');
  const [newPasswordCheck, onChangeNewPasswordCheck, setNewPasswordCheck] = useInput('');

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
      >
        변경하기
      </button>
    </FormWrapper>
  );
};

export default PasswordChangeForm;
