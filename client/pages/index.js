import Head from "next/head";
import AppLayout from "../components/AppLayout";
import ChatList from "../components/ChatList";
import {MainWrapper} from "../styles/common";
import {loadMyInfo} from "../slices/userSlice";
import wrapper from "../store/configureStore";
import {loadMainChat, loadMyOpenedChat} from "../slices/chatSlice";

const Home = () => {
  return (
    <>
      <Head>
        <title>Muchat - 홈</title>
      </Head>
      <AppLayout>
        <MainWrapper>
          <ChatList supporters={true} />
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

  await store.dispatch(loadMainChat());

  return {
    props: {},
  };
});

export default Home;
