import '../styles/globals.css';
import wrapper from "../store/configureStore";
import {loadMyInfo} from "../slices/userSlice";

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

export default wrapper.withRedux(App);
