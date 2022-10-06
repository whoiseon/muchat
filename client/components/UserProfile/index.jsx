import {ProfileWrapper} from "./styles";

const UserProfile = ({ mucorn, userName }) => {
  return (
    <ProfileWrapper>
      <img src={`/image/mucorn/${mucorn}.png`} alt={`mucorn_${mucorn}`} />
      <span>{ userName }</span>
    </ProfileWrapper>
  );
};

export default UserProfile;
