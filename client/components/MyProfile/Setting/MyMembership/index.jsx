import {useSelector} from "react-redux";
import {
  Header, MembershipList,
  MySettingWrapper,
} from "../MyAccount/styles";
import MucornListItem from "../../../MucornListItem";

const MyMembeership = () => {
  const { userInfo } = useSelector((state) => state.user);

  console.log(userInfo);

  return (
    <MySettingWrapper>
      <div>
        <Header>
          <h1>운영중인 채팅방</h1>
        </Header>
        <MembershipList>
          123
        </MembershipList>
      </div>
      <div>
        <Header>
          <h1>가입된 채팅방</h1>
        </Header>
        <MembershipList>
          123
        </MembershipList>
      </div>
    </MySettingWrapper>
  );
};

export default MyMembeership;
