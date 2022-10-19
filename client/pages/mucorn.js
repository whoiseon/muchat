import Head from "next/head";
import AppLayout from "../components/AppLayout";
import MucornShop from "../components/MucornShop";
import {MainWrapper} from "../styles/common";
import wrapper from "../store/configureStore";
import {loadMyInfo} from "../slices/userSlice";
import {loadMyOpenedChat} from "../slices/chatSlice";

const Mucorn = () => {
  return (
    <>
      <Head>
        <title>Muchat - 먹콘</title>
      </Head>
      <AppLayout>
        <MainWrapper>
          <MucornShop />
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

export default Mucorn;
