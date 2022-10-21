import SearchIcon from "@mui/icons-material/Search";
import {useCallback, useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {SearchContent, Header, SearchBar, SearchFormWrapper, SearchResult} from "./styles";
import {debounce} from "../../utils/debounce";
import {searchedChat} from "../../slices/chatSlice";
import MainSection from "../MainSection";
import ChatCard from "../ChatCard";
import NoChatList from "../ChatList/NoChatList";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";

const SearchForm = () => {
  const { searchedChatList } = useSelector((state) => state.chat);

  const InputRef = useRef();
  const router = useRouter();
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState('');
  const [searched, setSearched] = useState(false);
  const [nonLoginModal, setNonLoginModal] = useState(false);

  const printValue = useCallback(
    debounce((value) => {
      dispatch(searchedChat({
        keyword: value,
      }));
    }, 200),
    [debounce, dispatch, searchedChat],
  );

  const onChangeSearchInput = useCallback((e) => {
    setSearched(true);
    printValue(e.target.value);
    setKeyword(e.target.value);
  }, []);

  const onBlurSearchBar = useCallback((e) => {
    if (keyword === '') {
      router.back();
    }
  }, [keyword]);

  useEffect(() => {
    InputRef.current.focus();
  }, [InputRef]);

  return (
    <SearchFormWrapper>
      <SearchBar>
        <input
          ref={InputRef}
          type="text"
          value={keyword}
          onChange={onChangeSearchInput}
          onBlur={onBlurSearchBar}
          placeholder="채팅방 검색"
        />
        <SearchIcon />
      </SearchBar>
      {
        searched
          ? (
            <SearchContent>
              <MainSection title={`"${keyword}"에 대한 검색 결과입니다.`} subMenu={false}>
                {
                  searchedChatList.length > 0
                    ? (
                      searchedChatList?.map((data, i) => {
                        return (
                          <ChatCard
                            key={data.code}
                            data={data}
                            setNonLoginModal={setNonLoginModal}
                          />
                        );
                      })
                    )
                    : (
                      <NoChatList
                        icon={<CommentsDisabledIcon />}
                        comment="검색 결과가 없습니다"
                      />
                    )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
                }
              </MainSection>
            </SearchContent>
          )
          : ''
      }
    </SearchFormWrapper>
  );
};

export default SearchForm;
