import AppLayout from "../components/AppLayout";
import SearchForm from "../components/SearchForm";
import CurrentUser from "../components/CurrentUser";

const Search = () => {
  return (
    <AppLayout>
      <SearchForm />
      <CurrentUser />
    </AppLayout>
  );
};

export default Search;
