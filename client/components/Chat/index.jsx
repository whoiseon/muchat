import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useCallback, useRef} from "react";
import {io} from "socket.io-client";
import {Background, ChatSendForm, ChatTools, ChatWrapper, Header, SendWrapper} from "./styles";
import useInput from "../../hooks/useInput";

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
  const MessageRef = useRef();

  const [chatMessage, onChangeChatMessage, setChatMessage] = useInput('');

  const onClickChatSend = useCallback(() => {
    if (chatMessage === '') return;
    console.log(chatMessage);
    socket.emit('message', chatMessage);
    setChatMessage('');
  }, [chatMessage]);

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

export default Chat;
