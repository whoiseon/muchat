import {useCallback, useState} from "react";
import PersonIcon from '@mui/icons-material/Person';
import {CardWrapper, ChatInfo, CurrentUserBox} from "./styles";

const SupportersCard = ({ data }) => {
  const [showCurrentUser, setShowCurrentUser] = useState(false);

  const onMouseEnterCurrentUser = useCallback(() => {
    setShowCurrentUser(true);
  }, []);

  const onMouseLeaveCurrentUser = useCallback(() => {
    setShowCurrentUser(false);
  }, []);

  return (
    <CardWrapper
      onMouseEnter={onMouseEnterCurrentUser}
      onMouseLeave={onMouseLeaveCurrentUser}
    >
      <h1>
        {data.title}
      </h1>
      <ChatInfo>
        <div>
          방장
          <span>{ data.manager.name }</span>
        </div>
        <div>
          멤버십 회원
          <span>{ data.membership }명</span>
        </div>
      </ChatInfo>
      {
        showCurrentUser && (
          <CurrentUserBox>
            <PersonIcon />
            { data.current } 명
          </CurrentUserBox>
        )
      }
    </CardWrapper>
  );
};

export default SupportersCard;
