import {Background, Description, Info, InfoWrapper, Membership, Wrapper} from "./styles";

const ChatInfo = () => {
  return (
    <Background>
      <Membership>
        <button type="button">멤버십</button>
      </Membership>
      <InfoWrapper>
        <h1>롤 듀오 모집방</h1>
        <div>
          <Info>
            방장 <span>매니저</span>
          </Info>
          <Info>
            개설일 <span>22.09.27.</span>
          </Info>
          <Info>
            멤버십 가입자 <span>230명</span>
          </Info>
          <Info>
            누적 접속자 <span>12,569명</span>
          </Info>
          <Info>
            최고 접속자 <span>245명</span>
          </Info>
          <Description>
            <p>
              안녕하세요 롤 듀오를 모집하는 방입니다.
              친목질은 자유이고 방 규칙에 철저히 따라주세요
              일반 - 글씨크기 X 색상 X 배경 X 굵기 X
            </p>
          </Description>
        </div>
      </InfoWrapper>
    </Background>
  );
};

export default ChatInfo;
