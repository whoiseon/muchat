import {useSelector} from "react-redux";
import Link from "next/link";
import {useCallback, useState} from "react";
import {
  Header,
  MySettingWrapper,
  AccountSetting,
  AccountInfo,
  ChangeInfo,
  ChangeNickname,
  ChangePassword
} from "./styles";
import UpdateModal from "../../../CommonModal/UpdateModal";
import NicknameChangeForm from "./NicknameChangeForm";
import PasswordChangeForm from "./PasswordChangeForm";

const MyAccount = () => {
  const { userInfo } = useSelector((state) => state.user);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateKind, setUpdateKind] = useState('');

  const onClickUpdate = useCallback(async (e) => {
    await setUpdateKind(e.target.textContent);
    setShowUpdateModal(true);
  }, []);

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
            <button
              type="button"
              onClick={onClickUpdate}
            >
              수정하기
            </button>
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
              onClick={onClickUpdate}
            >
              비밀번호 변경하기
            </button>
          </div>
        </ChangePassword>
      </div>
      {
        showUpdateModal && (
          <UpdateModal
            setShowUpdateModal={setShowUpdateModal}
            header={updateKind}
          >
            {
              updateKind === '비밀번호 변경하기'
                ? <PasswordChangeForm setShowUpdateModal={setShowUpdateModal} />
                : <NicknameChangeForm setShowUpdateModal={setShowUpdateModal }/>
            }
          </UpdateModal>
        )
      }
    </MySettingWrapper>
  );
};

export default MyAccount;
