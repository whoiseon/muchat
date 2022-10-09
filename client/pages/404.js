import Head from "next/head";
import ErrorPage404 from "../components/ErrorPage/404";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Muchat - 404 Error</title>
      </Head>
      <ErrorPage404 />
    </>
  );
};

export default Custom404;
