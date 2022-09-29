import Link from "next/link";
import {useRouter} from "next/router";
import {AppWrapper, ChatTab, ContentWrapper, LoginBtn, Logo} from "./styles";
import {BACKGROUND_COLOR, WHITE_COLOR} from "../../styles/common";

const dummyCurrentChat = [
  {
    title: '롤 듀오 모집방',
    code: '11022',
  },
  {
    title: '진지하게 고민상담 좀 들어주실 분 서포터즈',
    code: '11023',
  },
  {
    title: '발로란트 팀 모집 초월자 이상',
    code: '11024',
  },
  {
    title: '프론트엔드 개발은 왜 이렇게 어려운 걸까요?',
    code: '11025',
  },
];

const AppLayout = ({ children }) => {
  const router = useRouter();

  const active = {
    backgroundColor: BACKGROUND_COLOR,
    color: WHITE_COLOR,
  };

  return (
    <AppWrapper>
      <ChatTab>
        <h1 style={
          router.pathname === "/" || router.pathname === "/search" || router.pathname === "/mucorn" || router.pathname === "/support"
            ? active
            : {}
          }
        >
          <Link
            href="/"
          >
            <a>Muchat - 홈</a>
          </Link>
        </h1>
        <ul>
          {
            dummyCurrentChat.map((chat, i) => {
              return (
                <li
                  key={chat.code}
                  style={router.query.code === chat.code ? active : {}}
                >
                  <Link href={`/chat/${chat.code}`}>
                    <a>{ chat.title }</a>
                  </Link>
                </li>
              );
            })
          }
        </ul>
        <LoginBtn>
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </LoginBtn>
      </ChatTab>
      <ContentWrapper>{children}</ContentWrapper>
    </AppWrapper>
  );
};

export default AppLayout;
