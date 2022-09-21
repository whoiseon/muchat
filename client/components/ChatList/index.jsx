import SearchIcon from '@mui/icons-material/Search';
import {useCallback} from "react";
import {useRouter} from "next/router";
import {ChatListWrapper, Content, Header, SearchWrapper, TopMenu} from "./styles";
import Link from "next/link";
import {WHITE_COLOR} from "../../styles/common";
import MainSection from "../MainSection";

const dummySupporters = [
  {
    title: '롤 듀오 모집방',
    manager: '마스터',
    membership: '1,028',
  },
  {
    title: '진지하게 고민상담 좀 들어주실 분 서포터즈',
    manager: '강동원',
    membership: '138',
  },
  {
    title: '개발자 상담방',
    manager: '차은우',
    membership: '202',
  },
  {
    title: '발로란트 팀 모집 초월자 이상',
    manager: '마스터',
    membership: '1,002',
  },
  {
    title: '프론트엔드 개발은 왜 이렇게 어려운 걸까요?',
    manager: '꿈나무',
    membership: '620',
  },
];

const ChatList = () => {
  const router = useRouter();

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
        <button type="button">
          채팅방 개설
        </button>
      </Header>
      <Content>
        <MainSection title="서포터즈">
          준비중
        </MainSection>
        <MainSection title="개설된 채팅방">
          준비중
        </MainSection>
      </Content>
    </ChatListWrapper>
  );
};

export default ChatList;
