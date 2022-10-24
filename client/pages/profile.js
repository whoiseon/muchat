import Head from "next/head";
import {useSelector} from "react-redux";
import AppLayout from "../components/AppLayout";
import {MainWrapper} from "../styles/common";
import MyProfile from "../components/MyProfile";
import wrapper from "../store/configureStore";
import {loadMyInfo} from "../slices/userSlice";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }
  }, [userInfo]);

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
