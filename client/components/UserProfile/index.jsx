import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useCallback, useState} from "react";
import {ProfileModal, ProfileWrapper} from "./styles";
import UserProfileModal from "../UserProfileModal";

const UserProfile = ({ user }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const onClickProfileModal = useCallback(() => {
    setShowProfileModal((prev) => !prev);
  }, []);

  return (
    <ProfileWrapper onClick={onClickProfileModal}>
      <div>
        <AccountCircleIcon />
        { user.name }
      </div>
      { showProfileModal && <UserProfileModal setShowProfileModal={setShowProfileModal} /> }
    </ProfileWrapper>
  );
};

export default UserProfile;
