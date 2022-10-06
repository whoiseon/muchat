import Link from "next/link";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {useState, useCallback} from "react";
import {AppWrapper, ChatTab, ContentWrapper, LoginBtn, Logo, MyProfile} from "./styles";
import {BACKGROUND_COLOR, WHITE_COLOR} from "../../styles/common";
import MyProfileModal from "../MyProfileModal";

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
  const { userInfo } = useSelector((state) => state.user);

  const router = useRouter();

  const [showMyProfileModal, setShowMyProfileModal] = useState(false);

  const onClickMyProfileModal = useCallback(() => {
    setShowMyProfileModal((prev) => !prev);
  }, []);

  const active = {
    backgroundColor: BACKGROUND_COLOR,
    color: WHITE_COLOR,
  };

  return (
    <AppWrapper>
      <ChatTab>
        <h1 style={
          (
            router.pathname === "/" || router.pathname === "/search"
            || router.pathname === "/mucorn" || router.pathname === "/support"
            || router.pathname === "/profile"
          )
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
            userInfo?.openedChat.map((chat, i) => {
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
        {
          userInfo
            ? (
              <MyProfile onClick={onClickMyProfileModal}>
                <div>
                  <img src={`/image/mucorn/${userInfo?.mucorn}.png`} alt={`mucorn_${userInfo?.mucorn}`} />
                  <span>{ userInfo?.nickname } 님</span>
                </div>
                {
                  showMyProfileModal && (
                    <MyProfileModal setShowMyProfileModal={setShowMyProfileModal} />
                  )
                }
              </MyProfile>
            )
            : (
              <LoginBtn>
                <Link href="/login">
                  <a>로그인</a>
                </Link>
              </LoginBtn>
            )
        }
      </ChatTab>
      <ContentWrapper>{children}</ContentWrapper>
    </AppWrapper>
  );
};

export default AppLayout;
