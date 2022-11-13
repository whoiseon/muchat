import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {memo, useCallback, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {Background, ChatSendForm, ChatTools, ChatWrapper, Header, SendWrapper} from "./styles";
import useInput from "../../hooks/useInput";
import useSocket from "../../hooks/useSocket";
import {useRouter} from "next/router";

const dummyChat = [
  {
    nickname: '먹보가만든것',
    content: '아니 뭐하는건데 ㅋㅋㅋ 재밌네 여기',
  },
  {
    nickname: '매니저',
    content: '뭐가 그렇게 재밌으세요 ㅎㅎ',
  },
  {
    nickname: '강동원',
    content: 'ㅋㅋㅋㅋ 뭐야 저분',
  },
  {
    nickname: '매니저',
    content: '멤버십 가입해주시면 글씨색 변경가능합니다',
  },
  {
    nickname: '일찐',
    content: '매니저 어쩔티비',
  },
];

const Chat = ({ socket }) => {
  const { userInfo } = useSelector((state) => state.user);

  const MessageRef = useRef();
  const router = useRouter();

  const [chatMessage, onChangeChatMessage, setChatMessage] = useInput('');

  const onClickChatSend = useCallback(() => {
    if (chatMessage === '') return;
    console.log(chatMessage);
    socket.emit('message', {
      user: userInfo,
      message: chatMessage,
    });
    setChatMessage('');
  }, [userInfo, chatMessage]);

  const onKeyDownSendArea = useCallback((e) => {
    if (e.keyCode === 13) {
      if (!e.shiftKey) {
        e.preventDefault();
        onClickChatSend();
      }
    }
  }, [onClickChatSend]);

  return (
    <Background>
      <Header>
        <span>어서 오세요, 오픈 채팅 플랫폼 먹챗 입니다.</span>
      </Header>
      <ChatWrapper>
        <ul>
          {
            dummyChat.map((chat, i) => {
              return (
                <li key={chat.content}>
                  <div>
                    <AccountCircleIcon />
                    { chat.nickname }
                  </div>
                  <div>
                    <p>
                      { chat.content }
                    </p>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </ChatWrapper>
      <ChatSendForm>
        <ChatTools>
          채팅툴
        </ChatTools>
        <SendWrapper>
          <textarea
            onKeyDown={onKeyDownSendArea}
            value={chatMessage || ''}
            onChange={onChangeChatMessage}
            ref={MessageRef}
          />
          <button
            type="button"
            onClick={onClickChatSend}
          >
            보내기
          </button>
        </SendWrapper>
      </ChatSendForm>
    </Background>
  );
};

export default memo(Chat);
