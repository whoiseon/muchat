import AppLayout from "../components/AppLayout";
import ChatList from "../components/ChatList";
import CurrentUser from "../components/CurrentUser";

const Home = () => {
  return (
    <AppLayout>
      <ChatList />
      <CurrentUser />
    </AppLayout>
  );
};

export default Home;
