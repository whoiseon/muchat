import PersonIcon from '@mui/icons-material/Person';
import {useCallback, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {CardWrapper, ChatInfo} from "./styles";

const ChatRoomCard = ({ data, setNonLoginModal }) => {
  const { userInfo } = useSelector((state) => state.user);

  const router = useRouter();

  const onClickMoveChat = useCallback(() => {
    if (!userInfo) {
      return setNonLoginModal(true);
    }
    router.push(`/chat/${data.code}`);
  }, [data, userInfo]);

  return (
    <CardWrapper onClick={onClickMoveChat}>
      <h1>
        <i>[{data.genre}]</i>
        {data.title}
      </h1>
      <ChatInfo>
        <PersonIcon />
        <span>
          {data.current}
        </span>
      </ChatInfo>
    </CardWrapper>
  );
};

export default ChatRoomCard;
