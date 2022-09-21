import SearchIcon from "@mui/icons-material/Search";
import {useCallback, useEffect, useRef} from "react";
import {SearchBar, SearchFormWrapper} from "./styles";

const SearchForm = () => {
  const InputRef = useRef();

  const onSubmitSearch = useCallback((e) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  return (
    <SearchFormWrapper onSubmit={onSubmitSearch}>
      <SearchBar>
        <input
          ref={InputRef}
          type="text"
          placeholder="채팅방 검색"
        />
        <SearchIcon />
      </SearchBar>
    </SearchFormWrapper>
  );
};

export default SearchForm;
