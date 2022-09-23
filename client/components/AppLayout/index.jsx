import Link from "next/link";
import {useRouter} from "next/router";
import {AppWrapper, ChatTab, ContentWrapper, LoginBtn, Logo} from "./styles";
import WhiteLogo from "../../public/image/logo/white_logo.svg";
import {BACKGROUND_COLOR, WHITE_COLOR} from "../../styles/common";
import Image from "next/image";

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
            Muchat - 홈
          </Link>
        </h1>
        <ul>
          <li style={router.pathname === "/shop" ? active : {}}>
            <Link href="/shop">
              shop
            </Link>
          </li>
        </ul>
        <LoginBtn>
          <Link href="/login">
            로그인
          </Link>
        </LoginBtn>
      </ChatTab>
      <ContentWrapper>{children}</ContentWrapper>
    </AppWrapper>
  );
};

export default AppLayout;
