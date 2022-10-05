import Head from "next/head";
import AppLayout from "../components/AppLayout";
import SupportPage from "../components/SupportPage";
import {MainWrapper} from "../styles/common";
import wrapper from "../store/configureStore";
import {loadMyInfo} from "../slices/userSlice";

const Support = () => {
  return (
    <>
      <Head>
        <title>Muchat - 서포터즈</title>
      </Head>
      <AppLayout>
        <MainWrapper>
          <SupportPage />
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

export default Support;
