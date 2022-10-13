import {useCallback, useState} from "react";
import PersonIcon from '@mui/icons-material/Person';
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {CardWrapper, ChatInfo, CurrentUserBox} from "./styles";
import UserProfile from "../UserProfile";

const SupportersCard = ({ data, setNonLoginModal }) => {
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

  return (
    <CardWrapper
      onClick={onClickMoveChat}
      onMouseEnter={onMouseEnterCurrentUser}
      onMouseLeave={onMouseLeaveCurrentUser}
    >
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
          <CurrentUserBox>
            <PersonIcon />
            { data.current } 명
          </CurrentUserBox>
        )
      }
    </CardWrapper>
  );
};

export default SupportersCard;