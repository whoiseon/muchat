import Head from "next/head";
import AppLayout from "../components/AppLayout";
import SearchForm from "../components/SearchForm";
import {MainWrapper} from "../styles/common";
import wrapper from "../store/configureStore";
import {loadMyInfo} from "../slices/userSlice";
import {loadMyOpenedChat} from "../slices/chatSlice";

const Search = () => {
  return (
    <>
      <Head>
        <title>Muchat - 채팅방 검색</title>
      </Head>
      <AppLayout>
        <MainWrapper>
          <SearchForm />
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

export default Search;
