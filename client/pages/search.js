import AppLayout from "../components/AppLayout";
import SearchForm from "../components/SearchForm";
import CurrentUser from "../components/CurrentUser";
import {MainWrapper} from "../styles/common";

const Search = () => {
  return (
    <AppLayout>
      <MainWrapper>
        <SearchForm />
        <CurrentUser />
      </MainWrapper>
    </AppLayout>
  );
};

export default Search;
