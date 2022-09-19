import Link from "next/link";
import {useRouter} from "next/router";
import {AppWrapper, ChatTab, ContentWrapper} from "./styles";
import {BACKGROUND_COLOR, WHITE_COLOR} from "../../styles/common";

const AppLayout = ({ children }) => {
  const router = useRouter();

  const active = {
    backgroundColor: BACKGROUND_COLOR,
    color: WHITE_COLOR,
  };

  return (
    <AppWrapper>
      <ChatTab>
        <h1 style={router.pathname === "/" ? active : {}}>
          <Link
            href="/"
          >
            Muchat
          </Link>
        </h1>
        <ul>
          <li style={router.pathname === "/shop" ? active : {}}>
            <Link href="/shop">
              shop
            </Link>
          </li>
        </ul>
        <div>
          <Link href="/login">
            로그인
          </Link>
        </div>
      </ChatTab>
      <ContentWrapper>{children}</ContentWrapper>
    </AppWrapper>
  );
};

export default AppLayout;
