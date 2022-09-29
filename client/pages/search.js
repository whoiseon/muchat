import Head from "next/head";
import AppLayout from "../components/AppLayout";
import SearchForm from "../components/SearchForm";
import CurrentUser from "../components/CurrentUser";
import {MainWrapper} from "../styles/common";

const Search = () => {
  return (
    <>
      <Head>
        <title>Muchat - 채팅방 검색</title>
      </Head>
      <AppLayout>
        <MainWrapper>
          <SearchForm />
          <CurrentUser />
        </MainWrapper>
      </AppLayout>
    </>
  );
};

export default Search;
