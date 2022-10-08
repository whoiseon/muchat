import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect} from "react";
import AppLayout from "../../components/AppLayout";
import ChatList from "../../components/ChatList";
import {MainWrapper} from "../../styles/common";
import {loadMyInfo} from "../../slices/userSlice";
import wrapper from "../../store/configureStore";
import {loadChatByGenre, loadMainChat} from "../../slices/chatSlice";
import {genreList} from "../../utils/genreList";
import Error from "next/error";

const Tag = () => {
  const router = useRouter();

  useEffect(() => {

  }, []);

  if (genreList.find((v) => v.name === router.query.genre) === undefined) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>Muchat - 홈</title>
      </Head>
      <AppLayout>
        <MainWrapper>
          <ChatList supporters={false} />
        </MainWrapper>
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async ({req, res, query}) => {
  const { AccessToken } = req.cookies;
  console.log(query.genre);

  if (AccessToken) {
    await store.dispatch(loadMyInfo({
      token: AccessToken,
    }));
  }

  await store.dispatch(loadChatByGenre({
    genre: query.genre,
  }));

  return {
    props: {},
  };
});

export default Tag;
