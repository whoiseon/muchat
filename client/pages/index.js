import Head from "next/head";
import AppLayout from "../components/AppLayout";
import ChatList from "../components/ChatList";
import CurrentUser from "../components/CurrentUser";
import {MainWrapper} from "../styles/common";

const Home = () => {
  return (
    <>
      <Head>
        <title>Muchat - 홈</title>
      </Head>
      <AppLayout>
        <MainWrapper>
          <ChatList />
          <CurrentUser />
        </MainWrapper>
      </AppLayout>
    </>
  );
};

export default Home;
