import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import PersonIcon from '@mui/icons-material/Person';
import {useRouter} from "next/router";
import {chatAccess} from "../../../slices/chatSlice";
import {CardWrapper, CurrentUserBox, GenreWrapper} from "./styles";

const ProfilePageChatCard = ({ data }) => {
  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();

  const onClickMoveChat = useCallback(() => {
    if (userInfo?.openedChat.find((v) => v.code === data.code) === undefined) {
      dispatch(chatAccess({
        token: userInfo?.token,
        code: data.code,
        title: data.title,
      }));

      router.push(`/chat/${data.code}`);

      return;
    }

    router.push(`/chat/${data.code}`);
  }, [userInfo, data.code, data.title]);

  return (
    <CardWrapper
      onClick={onClickMoveChat}
    >
      <GenreWrapper>
        <span>
          { data.genre }
        </span>
      </GenreWrapper>
      <h1>{ data.title }</h1>
      <CurrentUserBox>
        <PersonIcon />
        { data.member }
      </CurrentUserBox>
    </CardWrapper>
  );
};

export default ProfilePageChatCard;
