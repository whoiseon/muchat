import {Background, Description, Info, InfoWrapper, Membership, Wrapper} from "./styles";
import UserProfile from "../UserProfile";

const ChatInfo = ({ data }) => {

  return (
    <Background>
      <Membership>
        <button type="button">멤버십 가입하기</button>
      </Membership>
      <InfoWrapper>
        <h1>{data?.title}</h1>
        <div>
          <Info>
            방장
            <UserProfile
              mucorn={data?.manager.mucorn}
              userName={data?.manager.nickname}
            />
          </Info>
          <Info>
            개설일 <span>{ data?.createdAt }</span>
          </Info>
          <Info>
            멤버십 회원 <span>{ data?.member.length }명</span>
          </Info>
          <Description>
            <p>
              { data?.introduce }
            </p>
          </Description>
        </div>
      </InfoWrapper>
    </Background>
  );
};

export default ChatInfo;
