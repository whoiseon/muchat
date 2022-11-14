import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useCallback, useState} from "react";
import {ProfileWrapper} from "./styles";
import UserChatProfileModal from "../UserChatProfileModal";

const UserProfile = ({ user }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const onClickProfileModal = useCallback(() => {
    setShowProfileModal((prev) => !prev);
  }, []);

  return (
    <ProfileWrapper onClick={onClickProfileModal}>
      <div>
        <img src={`/image/mucorn/${user.mucorn}.png`} alt={`mucorn_${user.mucorn}`} />
        { user.nickname }
      </div>
      { showProfileModal && <UserChatProfileModal setShowProfileModal={setShowProfileModal} /> }
    </ProfileWrapper>
  );
};

export default UserProfile;
