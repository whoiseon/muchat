import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect} from "react";
import AppLayout from "../../components/AppLayout";
import ChatList from "../../components/ChatList";
import {MainWrapper} from "../../styles/common";
import {loadMyInfo} from "../../slices/userSlice";
import wrapper from "../../store/configureStore";
import {loadChatByGenre, loadMainChat, loadSupporterChats} from "../../slices/chatSlice";
import {genreList} from "../../utils/genreList";

const Genre = () => {
  const router = useRouter();

  //
  // useEffect(() => {
  //   if (genreList.find((v) => v.name === router.query.genre) === undefined) {
  //     router.push('/404');
  //   }
  // }, [genreList, router]);

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

export const getServerSideProps = wrapper.getServerSideProps(store => async ({req, res, query}) => {
  const { AccessToken } = req.cookies;

  if (AccessToken) {
    await store.dispatch(loadMyInfo({
      token: AccessToken,
    }));
  }

  await store.dispatch(loadChatByGenre({
    genre: query.genre,
  }));

  if (genreList.find((v) => v.name === query.genre) === undefined) {
    res.setHeader("location", "/404");
    res.statusCode = 301;
    res.end();
    return;
  }

  return {
    props: {},
  };
});

export default Genre;
