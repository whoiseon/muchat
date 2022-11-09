import {useSelector} from "react-redux";
import {useState} from "react";
import {
  Header, MembershipList,
  MySettingWrapper,
} from "../MyAccount/styles";
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import ProfilePageChatCard from "../../../ChatCard/ProfilePageChatCard";
import NoChatList from "../../../ChatList/NoChatList";

const MyMembership = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <MySettingWrapper>
      <div>
        <Header>
          <h1>가입된 멤버십</h1>
        </Header>
        <MembershipList>
          {
            userInfo?.membership.length > 0
              ? (
                userInfo?.membership.map((data, i) => {
                  return (
                    <ProfilePageChatCard
                      data={data}
                    />
                  );
                })
              )
              : (
                <NoChatList
                  icon={<CommentsDisabledIcon />}
                  comment="가입된 멤버십이 없습니다"
                />
              )
          }
        </MembershipList>
      </div>
    </MySettingWrapper>
  );
};

export default MyMembership;
