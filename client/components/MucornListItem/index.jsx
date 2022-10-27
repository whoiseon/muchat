import {Background} from "./styles";
import {MAIN_COLOR} from "../../styles/common";

const MucornListItem = ({ myMucorn, code }) => {
  const appliedStyled = {
    backgroundColor: MAIN_COLOR,
  };

  return (
    <Background
      style={
        myMucorn === code
          ? appliedStyled
          : {}
      }
    >
      <img src={`/image/mucorn/${code}.png`} alt={`mucorn_${code}`} />
    </Background>
  );
};

export default MucornListItem;
