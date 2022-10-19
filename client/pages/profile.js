import Head from "next/head";
import AppLayout from "../components/AppLayout";
import {MainWrapper} from "../styles/common";
import MyProfile from "../components/MyProfile";
import wrapper from "../store/configureStore";
import {loadMyInfo} from "../slices/userSlice";
import {loadMyOpenedChat} from "../slices/chatSlice";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Muchat - 내 정보</title>
      </Head>
      <AppLayout>
        <MainWrapper>
          <MyProfile />
        </MainWrapper>
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async ({req, res}) => {
  const { AccessToken } = req.cookies;

  if (AccessToken) {
    await store.dispatch(loadMyInfo({
      token: AccessToken,
    }));
  }

  return {
    props: {},
  };
});

export default Profile;
