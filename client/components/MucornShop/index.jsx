import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useRouter} from "next/router";
import {Content, Header, ShopWrapper} from "./styles";

const MucornShop = () => {
  const router = useRouter();

  return (
    <ShopWrapper>
      <Header>
        <button type="button" onClick={() => router.back()}>
          <ArrowBackIosNewIcon />
        </button>
        <h1>먹콘</h1>
        <span>닉네임 앞에 사용되는 아이콘 먹콘을 구매할 수 있습니다.</span>
      </Header>
      <Content>
        <p>준비중입니다.</p>
      </Content>
    </ShopWrapper>
  );
};

export default MucornShop;
