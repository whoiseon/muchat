import AppLayout from "../components/AppLayout";
import CurrentUser from "../components/CurrentUser";
import SupportPage from "../components/SupportPage";
import {MainWrapper} from "../styles/common";

const Support = () => {
  return (
    <AppLayout>
      <MainWrapper>
        <SupportPage />
        <CurrentUser />
      </MainWrapper>
    </AppLayout>
  );
};

export default Support;
