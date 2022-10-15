import {useRouter} from "next/router";
import styled from "@emotion/styled";
import AppLayout from "../../components/AppLayout";
import ChatInfo from "../../components/ChatInfo";
import Chat from "../../components/Chat";
import ChatCurrentUser from "../../components/ChatCurrentUser";
import wrapper from "../../store/configureStore";
import {loadMyInfo} from "../../slices/userSlice";
import {loadSupporterChats} from "../../slices/chatSlice";

const ChatRoom = () => {
  const router = useRouter();

  return (
    <AppLayout chatRoom={true}>
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

export const getServerSideProps = wrapper.getServerSideProps(store => async ({req, res}) => {
  const { AccessToken } = req.cookies;

  if (AccessToken) {
    await store.dispatch(loadMyInfo({
      token: AccessToken,
    }));
  }

  return {
    props: {},
  };
});

export default ChatRoom;
