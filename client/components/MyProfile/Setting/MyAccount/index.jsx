import {
  Header,
  MySettingWrapper,
  AccountSetting,
  AccountInfo,
  ChangeInfo,
  ChangeNickname,
  ChangePassword
} from "./styles";
import {useSelector} from "react-redux";
import Link from "next/link";

const MyAccount = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <MySettingWrapper>
      <div>
        <Header>
          <h1>내 계정</h1>
        </Header>
        <AccountInfo>
          <div>
            <img src={`/image/mucorn/${userInfo?.mucorn}.png`} alt={`mucorn_${userInfo?.mucorn}`} />
          </div>
          <div>
            <p>{ userInfo?.nickname }</p>
            <p>{ userInfo?.email }</p>
          </div>
        </AccountInfo>
      </div>
      <div>
        <Header>
          <h1>사용자명</h1>
        </Header>
        <ChangeNickname>
          <p>먹보</p>
          <div>
            <Link href="/profile/mucorn">
              <a>수정하기</a>
            </Link>
          </div>
        </ChangeNickname>
      </div>
      <div>
        <Header>
          <h1>비밀번호</h1>
        </Header>
        <ChangePassword>
          <div>
            <button
              type="button"
            >
              비밀번호 변경하기
            </button>
          </div>
        </ChangePassword>
      </div>
    </MySettingWrapper>
  );
};

export default MyAccount;
