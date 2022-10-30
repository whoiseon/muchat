import {useSelector} from "react-redux";
import {useState} from "react";
import {
  Header, MembershipList,
  MySettingWrapper,
} from "../MyAccount/styles";
import ProfilePageChatCard from "../../../ChatCard/ProfilePageChatCard";

const MyMembership = () => {
  const { userInfo } = useSelector((state) => state.user);

  console.log(userInfo);

  return (
    <MySettingWrapper>
      <div>
        <Header>
          <h1>가입된 멤버십</h1>
        </Header>
        <MembershipList>
          {
            userInfo?.membership.map((data, i) => {
              return (
                <ProfilePageChatCard
                  data={data}
                />
              );
            })
          }
        </MembershipList>
      </div>
    </MySettingWrapper>
  );
};

export default MyMembership;
