import {memo, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Background, CurrentUserWrapper, Header, UserList} from "./styles";
import UserChatProfile from "../UserChatProfile";
import useSocket from "../../hooks/useSocket";

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

  const [socket] = useSocket(router.query.code);
  const [onlineList, setOnlineList] = useState([]);

  useEffect(() => {
    socket.on('onlineList', (data) => {
      setOnlineList(data);
    });
  }, []);

  console.log(onlineList);

  return (
    <Background>
      <Header>
        접속중인 회원
        <span>{onlineList.length} 명</span>
      </Header>
      <UserList>
        <ul>
          {
            onlineList.map((user, i) => {
              return (
                <UserChatProfile key={user.nickname} user={user} />
              );
            })
          }
        </ul>
      </UserList>
    </Background>
  );
};

export default memo(ChatCurrentUser);
