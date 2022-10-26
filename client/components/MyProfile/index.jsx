import {Content, Header, Wrapper} from "./styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {useRouter} from "next/router";
import ProfileLeftMenu from "./ProfileLeftMenu";
import {useCallback} from "react";
import MyAccount from "./Setting/MyAccount";
import MyMucorn from "./Setting/MyMucorn";
import MyMembership from "./Setting/MyMembership";

const MyProfile = () => {
  const router = useRouter();

  const settingLoader = useCallback((query) => {
    switch (query) {
      case 'mucorn':
        return <MyMucorn />;
      case 'membership':
        return <MyMembership />;
      default:
        return <MyAccount />;
    }
  }, []);

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
        {
          settingLoader(router.query.setting)
        }
      </Content>
    </Wrapper>
  );
};

export default MyProfile;
