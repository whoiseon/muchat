import {Content, Header, SectionWrapper} from "./styles";

const MainSection = ({ children, title }) => {
  return (
    <SectionWrapper>
      <Header>
        <p>{ title }</p>
      </Header>
      <Content>
        { children }
      </Content>
    </SectionWrapper>
  );
};

export default MainSection;
