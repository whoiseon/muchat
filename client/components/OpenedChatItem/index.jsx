import {useCallback, useState} from "react";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import {ListWrapper} from "./styles";

const OpenedChatItem = ({ chat, style }) => {
  const [showCloseBtn, setShowCloseBtn] = useState(false);

  const onMouseEnterImage = useCallback(() => {
    setShowCloseBtn(true);
  }, []);

  const onMouseLeaveImage = useCallback(() => {
    setShowCloseBtn(false);
  }, []);

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
          <button type="button">
            <CloseIcon />
          </button>
        )
      }
    </ListWrapper>
  );
};

export default OpenedChatItem;
