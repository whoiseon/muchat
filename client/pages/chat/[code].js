import {useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import {io} from "socket.io-client";
import AppLayout from "../../components/AppLayout";
import ChatInfo from "../../components/ChatInfo";
import Chat from "../../components/Chat";
import ChatCurrentUser from "../../components/ChatCurrentUser";
import wrapper from "../../store/configureStore";
import {loadMyInfo} from "../../slices/userSlice";
import {loadChatData} from "../../slices/chatSlice";

const ChatRoom = () => {
  const socket = io("http://localhost:3075", { transports: ["websocket"] });

  const initSocketConnection = () => {
    if (socket) return;
    socket.connect();
  };

  const { nowConnectedChat } = useSelector((state) => state.chat);
  const { userInfo } = useSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }
  }, [userInfo]);

  return (
    <AppLayout chatRoom={true}>
      <ChatWrapper>
        <ChatInfo data={nowConnectedChat} />
        <Chat
          socket={socket}
        />
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

export const getServerSideProps = wrapper.getServerSideProps(store => async ({req, res, query}) => {
  const { AccessToken } = req.cookies;

  if (AccessToken) {
    await store.dispatch(loadMyInfo({
      token: AccessToken,
    }));
  }

  await store.dispatch(loadChatData({
    code: query.code,
  }));

  return {
    props: {},
  };
});

export default ChatRoom;
