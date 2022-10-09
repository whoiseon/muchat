import {PageWrapper} from "./styles";
import Link from "next/link";

const ErrorPage404 = () => {
  return (
    <PageWrapper>
      <img src="/image/logo/gray_logo.svg" alt="Logo" />
      <h1>404 - ERROR</h1>
      <p>현재 페이지를 찾을 수 없습니다</p>
      <Link href="/">
        <a>홈으로 돌아가기</a>
      </Link>
    </PageWrapper>
  );
};

export default ErrorPage404;