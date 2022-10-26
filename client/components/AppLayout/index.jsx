import Link from "next/link";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {useState, useCallback} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {AppWrapper, ChatTab, ContentWrapper, LoginBtn, Logo, MyProfile} from "./styles";
import {BACKGROUND_COLOR, WHITE_COLOR} from "../../styles/common";
import MyProfileModal from "../MyProfileModal";
import Footer from "../Footer";
import OpenedChatItem from "../OpenedChatItem";

const AppLayout = ({ children, chatRoom }) => {
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
            || router.pathname.includes('/profile') || router.pathname === "/genre/[genre]"
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
                <OpenedChatItem
                  key={chat.code}
                  chat={chat}
                  style={router.query.code === chat.code ? active : {}}
                />
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
      <ContentWrapper>
        {children}
      </ContentWrapper>
      { !chatRoom && <Footer /> }
    </AppWrapper>
  );
};

export default AppLayout;
