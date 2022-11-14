import {useCallback, useEffect, useState} from "react";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {ListWrapper} from "./styles";
import {chatClosed} from "../../slices/chatSlice";

const OpenedChatItem = ({ chat, style }) => {
  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();

  const [showCloseBtn, setShowCloseBtn] = useState(false);

  const onMouseEnterImage = useCallback(() => {
    setShowCloseBtn(true);
  }, []);

  const onMouseLeaveImage = useCallback(() => {
    setShowCloseBtn(false);
  }, []);

  const onClickClosedChat = useCallback(() => {
    dispatch(chatClosed({
      token: userInfo?.token,
      code: chat.code,
    }));

    router.push('/');
  }, [userInfo, chat.code]);

  return (
    <ListWrapper
      style={style}
      onMouseEnter={onMouseEnterImage}
      onMouseLeave={onMouseLeaveImage}
    >
      <Link href={`/chat/${chat.code}`}>
        <a>{ chat.title }</a>
      </Link>
      {
        showCloseBtn && (
          <button
            type="button"
            onClick={onClickClosedChat}
          >
            <CloseIcon />
          </button>
        )
      }
    </ListWrapper>
  );
};

export default OpenedChatItem;
