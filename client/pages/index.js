import Head from "next/head";
import {useSelector} from "react-redux";
import AppLayout from "../components/AppLayout";
import ChatList from "../components/ChatList";
import {MainWrapper} from "../styles/common";
import {loadMyInfo} from "../slices/userSlice";
import wrapper from "../store/configureStore";

const Home = () => {
  return (
    <>
      <Head>
        <title>Muchat - 홈</title>
      </Head>
      <AppLayout>
        <MainWrapper>
          <ChatList />
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

export default Home;
