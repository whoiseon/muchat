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

const dummySupporters = [
  {
    title: '롤 듀오 모집방',
    manager: {
      cornId: '1001',
      name: '마스터',
    },
    membership: '1,028',
    current: '240',
  },
  {
    title: '진지하게 고민상담 좀 들어주실 분 서포터즈',
    manager: {
      cornId: '1001',
      name: '강동원',
    },
    membership: '138',
    current: '1,512',
  },
  {
    title: '발로란트 팀 모집 초월자 이상',
    manager: {
      cornId: '1001',
      name: '차은우',
    },
    membership: '1,002',
    current: '523',
  },
  {
    title: '프론트엔드 개발은 왜 이렇게 어려운 걸까요?',
    manager: {
      cornId: '1001',
      name: '꿈나무',
    },
    membership: '620',
    current: '1,002',
  },
];

const ChatList = () => {
  const [showCreateChat, setShowCreateChat] = useState(false);
  const router = useRouter();

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
        <button type="button" onClick={onClickShowCreateChatModal}>
          채팅방 개설
        </button>
      </Header>
      <Content>
        <MainSection title="서포터즈">
          {
            dummySupporters.map((data, i) => {
              return (
                <SupportersCard key={data.manager} data={data} />
              );
            })
          }
        </MainSection>
        <MainSection title="개설된 채팅방">
          <ul>
            {
              dummySupporters.map((data, i) => {
                return (
                  <ChatRoomCard key={data.manager} data={data} />
                );
              })
            }
          </ul>
        </MainSection>
      </Content>
      { showCreateChat && <CreateChatModal setShowCreateChat={setShowCreateChat} /> }
    </ChatListWrapper>
  );
};

export default ChatList;
