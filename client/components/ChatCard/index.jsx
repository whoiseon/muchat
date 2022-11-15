import {useCallback, useState} from "react";
import PersonIcon from '@mui/icons-material/Person';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {CardWrapper, ChatInfo, CurrentUserBox, GenreWrapper, SupportersMark} from "./styles";
import UserProfile from "../UserProfile";
import {MAIN_COLOR, RED_COLOR} from "../../styles/common";
import {chatAccess} from "../../slices/chatSlice";
import useSocket from "../../hooks/useSocket";

const ChatCard = ({ data, setNonLoginModal }) => {
  const { userInfo } = useSelector((state) => state.user);

  const router = useRouter();
  const dispatch = useDispatch();

  const [showCurrentUser, setShowCurrentUser] = useState(false);
  const [socket] = useSocket(router.query.code);

  const onClickMoveChat = useCallback(() => {
    if (!userInfo) {
      return setNonLoginModal(true);
    }

    if (userInfo?.openedChat.find((v) => v.code === data.code) === undefined) {
      dispatch(chatAccess({
        token: userInfo?.token,
        code: data.code,
        title: data.title,
      }));

      socket.emit('join room', data.code);

      router.push(`/chat/${data.code}`);

      return;
    }

    router.push(`/chat/${data.code}`);
  }, [userInfo, data.code, data.title]);

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
      <GenreWrapper>
        {
          data.supporters && (
            <span
              style={{
                backgroundColor: RED_COLOR,
              }}
            >
              서포터즈
            </span>
          )
        }
        <span>
          {data.genre}
        </span>
      </GenreWrapper>
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
