import SearchIcon from '@mui/icons-material/Search';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import {useCallback, useState} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {ChatListWrapper, Content, Header, SearchWrapper, TopMenu} from "./styles";
import Link from "next/link";
import MainSection from "../MainSection";
import SupportersCard from "../SupportersCard";
import ChatRoomCard from "../ChatRoomCard";
import CreateChatModal from "../CreateChatModal";
import DefaultModal from "../CommonModal/Default";
import NoChatList from "./NoChatList";

const ChatList = ({ supporters }) => {
  const {userInfo} = useSelector((state) => state.user);
  const { mainChatList, supportersChatList, chatListByGenre } = useSelector((state) => state.chat);

  const router = useRouter();

  const [showCreateChat, setShowCreateChat] = useState(false);
  const [nonLoginModal, setNonLoginModal] = useState(false);

  const onClickShowCreateChatModal = useCallback(() => {
    setShowCreateChat(true);
  }, []);

  const onClickTest = useCallback(() => {
    router.push('/search');
  }, [router]);

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
                    <SupportersCard
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
                  comment="현재 등록된 서포터즈가 없습니다"
                />
              )
          }
        </MainSection>
        <MainSection title="개설된 채팅방" subMenu={true}>
          <ul>
            {
              chatListByGenre.length > 0
                ? (
                  chatListByGenre?.map((data, i) => {
                    return (
                      <ChatRoomCard
                        key={data.code}
                        data={data}
                        setNonLoginModal={setNonLoginModal}
                      />
                    );
                  })
                )
                : (
                  mainChatList?.length > 0
                    ? (
                      mainChatList?.map((data, i) => {
                        return (
                          <ChatRoomCard
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
                        comment="현재 개설된 채팅방이 없습니다"
                      />
                    )
                )
            }
          </ul>
        </MainSection>
      </Content>
      { showCreateChat && <CreateChatModal setShowCreateChat={setShowCreateChat} /> }
      { nonLoginModal && (
        <DefaultModal
          setNonLoginModal={setNonLoginModal}
          header="비로그인 회원"
          content="로그인 후 이용 가능한 서비스입니다."
          buttonText="로그인 하러갈래요"
          router="/login"
        />
      )}
    </ChatListWrapper>
  );
};

export default ChatList;
