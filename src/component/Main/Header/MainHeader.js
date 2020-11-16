import React, { useState } from 'react';
import {
  TitleText,
  Header,
  FlexContainer,
  SearchBox,
  SearchIcon,
  NavMenu,
  Menus,
} from './HeaderStyle';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const MainHeader = () => {
  const [search, setSearch] = useState('');
  const [searchCookie, setSearchCookie] = useCookies(['search']);
  const history = useHistory();
  const goSearch = () => {
    history.push({ pathname: '/search', state: { search: search } });
  };

  const saveCurSearch = () => {
    setSearch(search.trim());
    goSearch();
    if (search === '') return;
    const cookie =
      searchCookie.search !== undefined ? searchCookie.search.split(',') : [];
    if (cookie.includes(search)) {
      setSearch('');
      return;
    }

    if (cookie.length > 10) cookie.shift();
    let str = cookie;
    str += search + ',';
    setSearchCookie('search', str);
    setSearch('');
  };
  return (
    <Header>
      <FlexContainer>
        <TitleText to="/main">HARANG</TitleText>
        <FlexContainer id="searchBox">
          <SearchBox
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => {
              if (e.keyCode == 13) saveCurSearch();
            }}
          ></SearchBox>
          <SearchIcon
            onClick={saveCurSearch}
            className="fas fa-search"
          ></SearchIcon>
        </FlexContainer>
      </FlexContainer>

      <NavMenu>
        <Menus to="/main">전체모임</Menus>
        <Menus to="/Mypage">마이페이지</Menus>
      </NavMenu>
    </Header>
  );
};
export default MainHeader;
