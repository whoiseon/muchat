import {useRouter} from "next/router";
import {useCallback} from "react";
import {Content, Header, SectionWrapper, SubMenu} from "./styles";
import {genreList} from "../../utils/genreList";
import {BACKGROUND_COLOR, BACKGROUND_WHITE, WHITE_COLOR} from "../../styles/common";

const MainSection = ({ children, title, subMenu }) => {
  const router = useRouter();

  const onClickChatCategory = useCallback((e) => {
    if (e.target.textContent === '전체') {
      return router.push('/');
    }
    router.push(`/genre/${e.target.textContent}`);
  }, []);

  const active = {
    backgroundColor: BACKGROUND_WHITE,
    color: WHITE_COLOR,
    fontWeight: 'bold',
  };

  return (
    <SectionWrapper>
      <Header>
        <p>
          {
            router.query.genre === undefined
              ? title
              : router.query.genre
          }
        </p>
        <SubMenu>
          <button
            type="button"
            onClick={onClickChatCategory}
            style={router.pathname === '/' ? active : {}}
          >
            전체
          </button>
          {
            subMenu && (
              genreList.map((item, i) => {
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={onClickChatCategory}
                    style={router.query.genre === item.name ? active : {}}
                  >
                    {item.name}
                  </button>
                );
              })
            )
          }
        </SubMenu>
      </Header>
      <Content>
        { children }
      </Content>
    </SectionWrapper>
  );
};

export default MainSection;
