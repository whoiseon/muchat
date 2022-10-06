import PersonIcon from '@mui/icons-material/Person';
import {useCallback} from "react";
import {useRouter} from "next/router";
import {CardWrapper, ChatInfo} from "./styles";

const ChatRoomCard = ({ data }) => {
  const router = useRouter();

  const onClickMoveChat = useCallback(() => {
    router.push(`/chat/${data.code}`);
  }, [data.code]);

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
