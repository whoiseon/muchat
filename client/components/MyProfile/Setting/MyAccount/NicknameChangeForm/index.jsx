import {FormWrapper, UpdateInput} from "./styles";
import useInput from "../../../../../hooks/useInput";
import {useSelector} from "react-redux";

const NicknameChangeForm = () => {
  const { userInfo } = useSelector((state) => state.user);

  const [nickname, onChangeNickname, setNickname] = useInput(userInfo?.nickname);
  const [password, onChangePassword, setPassword] = useInput('');

  return (
    <FormWrapper>
      <UpdateInput>
        <p>사용자명</p>
        <input
          type="text"
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
      <button
        type="button"
      >
        변경하기
      </button>
    </FormWrapper>
  );
};

export default NicknameChangeForm;
