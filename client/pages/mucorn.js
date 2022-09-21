import AppLayout from "../components/AppLayout";
import CurrentUser from "../components/CurrentUser";
import MucornShop from "../components/MucornShop";

const Mucorn = () => {
  return (
    <AppLayout>
      <MucornShop />
      <CurrentUser />
    </AppLayout>
  );
};

export default Mucorn;
