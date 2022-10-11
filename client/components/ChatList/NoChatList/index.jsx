import {Background} from "./styles";

const NoChatList = ({ icon, comment }) => {
  return (
    <Background>
      {icon}
      <h1>{ comment }</h1>
    </Background>
  );
};

export default NoChatList;
