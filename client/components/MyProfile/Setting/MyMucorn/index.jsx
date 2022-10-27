import {useSelector} from "react-redux";
import {
  Header, MucornList,
  MySettingWrapper,
} from "../MyAccount/styles";
import MucornListItem from "../../../MucornListItem";
import {MAIN_COLOR} from "../../../../styles/common";

const MyMucorn = () => {
  const { userInfo } = useSelector((state) => state.user);

  console.log(userInfo);

  return (
    <MySettingWrapper>
      <div>
        <Header>
          <h1>내 먹콘</h1>
          <span>
            총 { userInfo?.mucornList.length } 개 보유중
          </span>
        </Header>
        <MucornList>
          {
            userInfo?.mucornList.map((code, i) => {
              return (
                <MucornListItem
                  myMucorn={userInfo?.mucorn}
                  code={code}
                />
              );
            })
          }
        </MucornList>
      </div>
    </MySettingWrapper>
  );
};

export default MyMucorn;
