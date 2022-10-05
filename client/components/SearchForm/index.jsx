import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import {useCallback, useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {SearchBar, SearchFormWrapper} from "./styles";
import useInput from "../../hooks/useInput";

const SearchForm = () => {
  const InputRef = useRef();
  const router = useRouter();

  const [searchInput, onChangeSearchInput, setSearchInput] = useInput('');
  const [searched, setSearched] = useState(false);

  const onSubmitSearch = useCallback((e) => {
    e.preventDefault();
    setSearched(true);
  }, []);

  const onBlurSearchBar = useCallback((e) => {
    if (!searched) {
      router.back();
    }
  }, [searched]);

  useEffect(() => {
    InputRef.current.focus();
  }, [InputRef]);

  return (
    <SearchFormWrapper onSubmit={onSubmitSearch}>
      <SearchBar>
        <input
          ref={InputRef}
          type="text"
          value={searchInput}
          onChange={onChangeSearchInput}
          onBlur={onBlurSearchBar}
          placeholder="채팅방 검색"
        />
        <SearchIcon />
      </SearchBar>
      {
        searched
          ? '123'
          : ''
      }
    </SearchFormWrapper>
  );
};

export default SearchForm;
