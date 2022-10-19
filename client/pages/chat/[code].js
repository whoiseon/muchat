import {useSelector} from "react-redux";
import {useEffect} from "react";
import styled from "@emotion/styled";
import AppLayout from "../../components/AppLayout";
import ChatInfo from "../../components/ChatInfo";
import Chat from "../../components/Chat";
import ChatCurrentUser from "../../components/ChatCurrentUser";
import wrapper from "../../store/configureStore";
import {loadMyInfo} from "../../slices/userSlice";
import {loadChatData, loadMyOpenedChat} from "../../slices/chatSlice";
import {useRouter} from "next/router";

const ChatRoom = () => {
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
