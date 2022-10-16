import {useCallback, useState} from "react";
import PersonIcon from '@mui/icons-material/Person';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {CardWrapper, ChatInfo, CurrentUserBox, SupportersMark} from "./styles";
import UserProfile from "../UserProfile";
import {MAIN_COLOR, RED_COLOR} from "../../styles/common";

const ChatCard = ({ data, setNonLoginModal }) => {
  const { userInfo } = useSelector((state) => state.user);

  const router = useRouter();

  const [showCurrentUser, setShowCurrentUser] = useState(false);

  const onClickMoveChat = useCallback(() => {
    if (!userInfo) {
      return setNonLoginModal(true);
    }
    router.push(`/chat/${data.code}`);
  }, [userInfo, data.code]);

  const onMouseEnterCurrentUser = useCallback(() => {
    setShowCurrentUser(true);
  }, []);

  const onMouseLeaveCurrentUser = useCallback(() => {
    setShowCurrentUser(false);
  }, []);

  const supportersStyle = {
    border: `2px solid ${RED_COLOR}`,
  };

  return (
    <CardWrapper
      onClick={onClickMoveChat}
      onMouseEnter={onMouseEnterCurrentUser}
      onMouseLeave={onMouseLeaveCurrentUser}
      style={data.supporters ? supportersStyle : {}}
    >
      {
        data.supporters && (
          <SupportersMark>
            <div>
              <WhatshotIcon />
              <span>서포터즈</span>
            </div>
          </SupportersMark>
        )
      }
      <p>[{data.genre}]</p>
      <h1>
        {data.title}
      </h1>
      <ChatInfo>
        <div>
          방장
          <UserProfile
            mucorn={data.manager.mucorn}
            userName={data.manager.nickname}
          />
        </div>
        <div>
          멤버십 회원
          <span>{ data.member } 명</span>
        </div>
      </ChatInfo>
      {
        showCurrentUser && (
          data.supporters
            ? (
              <CurrentUserBox style={{ backgroundColor: RED_COLOR }}>
                <PersonIcon />
                { data.current } 명
              </CurrentUserBox>
            )
            : (
              <CurrentUserBox>
                <PersonIcon />
                { data.current } 명
              </CurrentUserBox>
            )
        )
      }
    </CardWrapper>
  );
};

export default ChatCard;
