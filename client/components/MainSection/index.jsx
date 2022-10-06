import {Content, Header, SectionWrapper, SubMenu} from "./styles";
import {genreList} from "../../utils/genreList";

const MainSection = ({ children, title, subMenu }) => {
  const category = 'active'

  return (
    <SectionWrapper>
      <Header>
        <p>{ title }</p>
        {
          subMenu && (
            <SubMenu>
              <button type="button">
                전체
              </button>
              {
                genreList.map((item, i) => {
                  return (
                    <button
                      key={item.code}
                      type="button"
                      className={category}
                    >
                      {item.name}
                    </button>
                  );
                })
              }
            </SubMenu>
          )
        }
      </Header>
      <Content>
        { children }
      </Content>
    </SectionWrapper>
  );
};

export default MainSection;
