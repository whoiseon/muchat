import Head from "next/head";
import AppLayout from "../components/AppLayout";
import CurrentUser from "../components/CurrentUser";
import SupportPage from "../components/SupportPage";
import {MainWrapper} from "../styles/common";

const Support = () => {
  return (
    <>
      <Head>
        <title>Muchat - 서포터즈</title>
      </Head>
      <AppLayout>
        <MainWrapper>
          <SupportPage />
          <CurrentUser />
        </MainWrapper>
      </AppLayout>
    </>
  );
};

export default Support;
