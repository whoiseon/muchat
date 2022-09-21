import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useRouter} from "next/router";
import {Content, Header, SupportWrapper} from "./styles";

const SupportPage = () => {
  const router = useRouter();

  return (
    <SupportWrapper>
      <Header>
        <button type="button" onClick={() => router.back()}>
          <ArrowBackIosNewIcon />
        </button>
        <h1>서포터즈</h1>
        <span>서포터즈란? 후원을 통해 자신의 채팅방을 최상단에 노출시키는 서비스 입니다. </span>
      </Header>
      <Content>
        <p>준비중입니다.</p>
      </Content>
    </SupportWrapper>
  );
};

export default SupportPage;
