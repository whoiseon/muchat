import {Content, Header, Wrapper} from "./styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {useRouter} from "next/router";
import ProfileLeftMenu from "./ProfileLeftMenu";

const MyProfile = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Header>
        <button type="button" onClick={() => router.push('/')}>
          <ArrowBackIosNewIcon />
        </button>
        <h1>사용자 설정</h1>
      </Header>
      <Content>
        <ProfileLeftMenu />
        내 계정
      </Content>
    </Wrapper>
  );
};

export default MyProfile;
