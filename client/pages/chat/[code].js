import {useRouter} from "next/router";
import styled from "@emotion/styled";
import AppLayout from "../../components/AppLayout";
import ChatInfo from "../../components/ChatInfo";
import Chat from "../../components/Chat";
import ChatCurrentUser from "../../components/ChatCurrentUser";

const ChatRoom = () => {
  const router = useRouter();

  console.log(Math.random().toString(36).substr(2, 6));
  return (
    <AppLayout>
      <ChatWrapper>
        <ChatInfo />
        <Chat />
        <ChatCurrentUser />
      </ChatWrapper>
    </AppLayout>
  );
};

const ChatWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 40px
`;

export default ChatRoom;
