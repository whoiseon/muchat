import SearchIcon from '@mui/icons-material/Search';
import {useCallback, useState} from "react";
import {useRouter} from "next/router";
import {ChatListWrapper, Content, Header, SearchWrapper, TopMenu} from "./styles";
import Link from "next/link";
import {WHITE_COLOR} from "../../styles/common";
import MainSection from "../MainSection";
import SupportersCard from "../SupportersCard";
import ChatRoomCard from "../ChatRoomCard";
import CreateChatModal from "../CreateChatModal";
import {useSelector} from "react-redux";

const ChatList = ({ supporters }) => {
  const {userInfo} = useSelector((state) => state.user);
  const { mainChatList, supportersChatList, chatListByGenre } = useSelector((state) => state.chat);

  const [showCreateChat, setShowCreateChat] = useState(false);
  const router = useRouter();

  const onClickShowCreateChatModal = useCallback(() => {
    setShowCreateChat(true);
  }, []);

  const onClickTest = useCallback(() => {
    router.push('/search');
  }, [router]);

  const testObject = [
    {
      name: 'sun',
    },
  ];

  return (
    <ChatListWrapper>
      <Header>
        <SearchWrapper>
          <input
            type="text"
            onClick={onClickTest}
            placeholder="채팅방 검색"
          />
          <SearchIcon />
        </SearchWrapper>
        <TopMenu>
          <Link href="/mucorn">
            먹콘
          </Link>
          <Link href="/support">
            서포터즈
          </Link>
        </TopMenu>
        {
          userInfo && (
            <button type="button" onClick={onClickShowCreateChatModal}>
              채팅방 개설
            </button>
          )
        }
      </Header>
      <Content>
        <MainSection title="서포터즈" subMenu={false}>
          {
            supportersChatList.length > 0
              ? (
                supportersChatList?.map((data, i) => {
                  return (
                    <SupportersCard key={data.code} data={data} />
                  );
                })
              )
              : '서포터즈 채팅방이 없습니다.'
          }
        </MainSection>
        <MainSection title="개설된 채팅방" subMenu={true}>
          <ul>
            {
              chatListByGenre.length > 0
                ? (
                  chatListByGenre?.map((data, i) => {
                    return (
                      <ChatRoomCard key={data.code} data={data} />
                    );
                  })
                )
                : (
                  mainChatList?.length > 0
                    ? (
                      mainChatList?.map((data, i) => {
                        return (
                          <ChatRoomCard key={data.code} data={data} />
                        );
                      })
                    )
                    : '개설된 채팅방이 없습니다.'
                )
            }
          </ul>
        </MainSection>
      </Content>
      { showCreateChat && <CreateChatModal setShowCreateChat={setShowCreateChat} /> }
    </ChatListWrapper>
  );
};

export default ChatList;
