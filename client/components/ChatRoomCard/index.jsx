import PersonIcon from '@mui/icons-material/Person';
import {CardWrapper, ChatInfo} from "./styles";

const ChatRoomCard = ({data}) => {
  return (
    <CardWrapper>
      <h1>
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
