import {memo, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Background, CurrentUserWrapper, Header, UserList} from "./styles";
import UserChatProfile from "../UserChatProfile";

const dummyUser = [
  {
    id: 0,
    name: '강동원',
  },
  {
    id: 1,
    name: '매니저',
  },
  {
    id: 2,
    name: '차은우',
  },
  {
    id: 3,
    name: '박해진',
  },
  {
    id: 4,
    name: '이종석',
  },
];

const ChatCurrentUser = () => {
  const router = useRouter();

  return (
    <Background>
      <Header>
        접속중인 회원
        <span>1,293명</span>
      </Header>
      <UserList>
        <ul>
          {
            dummyUser.map((user, i) => {
              return (
                <UserChatProfile key={user.name} user={user} />
              );
            })
          }
        </ul>
      </UserList>
    </Background>
  );
};

export default memo(ChatCurrentUser);
