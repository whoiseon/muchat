import {useSelector} from "react-redux";
import {memo, useCallback, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import AppLayout from "../../components/AppLayout";
import ChatInfo from "../../components/ChatInfo";
import Chat from "../../components/Chat";
import ChatCurrentUser from "../../components/ChatCurrentUser";
import wrapper from "../../store/configureStore";
import {loadMyInfo} from "../../slices/userSlice";
import {loadChatData} from "../../slices/chatSlice";
import useSocket from "../../hooks/useSocket";

const ChatRoom = () => {
  const { nowConnectedChat } = useSelector((state) => state.chat);
  const { userInfo } = useSelector((state) => state.user);

  const router = useRouter();

  const [socket, disconnect] = useSocket(router.query.code);

  useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }
  }, [userInfo]);

  useEffect(() => {
    socket.emit('join_room', {
      userInfo: {
        _id: userInfo?._id,
        nickname: userInfo?.nickname,
        mucorn: userInfo?.mucorn,
      },
      roomId: router.query.code,
    });
  }, [socket, router.query.code, userInfo]);

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [router.query.code]);

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

export default memo(ChatRoom);
