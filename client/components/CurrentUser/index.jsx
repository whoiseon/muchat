import {CurrentUserWrapper, Header, UserList} from "./styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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

const CurrentUser = () => {
  return (
    <CurrentUserWrapper>
      <Header>
        접속중인 회원
        <span>1,293명</span>
      </Header>
      <UserList>
        <ul>
          {
            dummyUser.map((user, i) => {
              return (
                <li key={user.id}>
                  <AccountCircleIcon />
                  { user.name }
                </li>
              );
            })
          }
        </ul>
      </UserList>
    </CurrentUserWrapper>
  );
};

export default CurrentUser;
