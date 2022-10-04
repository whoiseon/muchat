import Head from "next/head";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useCookies} from "react-cookie";
import cookies from "next-cookies";
import AppLayout from "../components/AppLayout";
import ChatList from "../components/ChatList";
import CurrentUser from "../components/CurrentUser";
import {MainWrapper} from "../styles/common";
import {loadMyInfo} from "../slices/userSlice";
import wrapper from "../store/configureStore";
import axios from "axios";

const Home = () => {
  const { userLoginDone, userInfo } = useSelector((state) => state.user);
  const [cookie, setCookie] = useCookies('AccessToken');

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadMyInfo({
  //     token: cookie.AccessToken,
  //   }));
  // }, [dispatch, loadMyInfo, cookie]);

  return (
    <>
      <Head>
        <title>Muchat - 홈</title>
      </Head>
      <AppLayout userInfo={userInfo}>
        <MainWrapper>
          <ChatList />
          <CurrentUser />
        </MainWrapper>
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async ({req, res}) => {
  const { AccessToken } = req.cookies;

  await store.dispatch(loadMyInfo({
    token: AccessToken,
  }));

  return {
    props: {},
  };
});

export default Home;
