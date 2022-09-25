import AppLayout from "../components/AppLayout";
import CurrentUser from "../components/CurrentUser";
import MucornShop from "../components/MucornShop";
import {MainWrapper} from "../styles/common";

const Mucorn = () => {
  return (
    <AppLayout>
      <MainWrapper>
        <MucornShop />
        <CurrentUser />
      </MainWrapper>
    </AppLayout>
  );
};

export default Mucorn;
