import Head from "next/head";
import AppLayout from "../components/AppLayout";
import CurrentUser from "../components/CurrentUser";
import MucornShop from "../components/MucornShop";
import {MainWrapper} from "../styles/common";

const Mucorn = () => {
  return (
    <>
      <Head>
        <title>Muchat - 먹콘</title>
      </Head>
      <AppLayout>
        <MainWrapper>
          <MucornShop />
          <CurrentUser />
        </MainWrapper>
      </AppLayout>
    </>
  );
};

export default Mucorn;
