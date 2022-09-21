import '../styles/globals.css';
import wrapper from "../store/configureStore";

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

export default wrapper.withRedux(App);
