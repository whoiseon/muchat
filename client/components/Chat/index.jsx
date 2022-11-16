import {memo, useCallback, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {Background, ChatSendForm, ChatTools, ChatWrapper, Header, SendWrapper} from "./styles";
import useInput from "../../hooks/useInput";
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

  const [messageList, setMessageList] = useState([]);
  const [chatMessage, onChangeChatMessage, setChatMessage] = useInput('');

  const socketMessage = useCallback(async () => {
    const messageData = {
      roomId: router.query.code,
      userInfo,
      content: chatMessage,
      time: new Date(),
    };

    setMessageList((list) => [...list, messageData]);
    await socket.emit('send_message, messageData');
  }, [userInfo, router, chatMessage]);

  const onClickChatSend = useCallback(async () => {
    if (chatMessage === '') return;
    console.log(chatMessage);
    await socketMessage();
    setChatMessage('');
  }, [userInfo, chatMessage]);

  const onKeyDownSendArea = useCallback(async (e) => {
    if (e.keyCode === 13) {
      if (!e.shiftKey) {
        e.preventDefault();
        await onClickChatSend();
      }
    }
  }, [onClickChatSend]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <Background>
      <Header>
        <span>어서 오세요, 오픈 채팅 플랫폼 먹챗 입니다.</span>
      </Header>
      <ChatWrapper>
        <ul>
          {
            messageList.map((chat, i) => {
              return (
                <li key={chat.time}>
                  <div>
                    <img src={`/image/mucorn/${chat.userInfo.mucorn}.png`} alt={`mucorn_${chat.userInfo.mucorn}`} />
                    {chat.userInfo.nickname}
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
