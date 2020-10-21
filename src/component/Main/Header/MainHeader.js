import React, { useState } from "react";
import {
  TitleText,
  Header,
  FlexContainer,
  SearchBox,
  SearchIcon,
  NavMenu,
  Menus,
} from "./HeaderStyle";
import { useCookies } from "react-cookie";
const MainHeader = () => {
  const [search, setSearch] = useState("");
  const [searchCookie, setSearchCookie] = useCookies(["search"]);
  const onSearch = () => {
    setSearch(search.trim());
    if (search === "") return;
    const cookie =
      searchCookie.search !== undefined
        ? Array.from(new Set(searchCookie.search.split(",")))
        : [];
    console.log(cookie);
    if (cookie.length > 10) cookie.shift();
    let str = cookie;
    str += search + ",";
    setSearchCookie("search", str);
    setSearch("");
  };
  return (
    <Header>
      <FlexContainer>
        <TitleText>HARANG</TitleText>
        <FlexContainer id="searchBox">
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></SearchBox>
          <SearchIcon onClick={onSearch} className="fas fa-search"></SearchIcon>
        </FlexContainer>
      </FlexContainer>

      <NavMenu>
        <Menus id="main" className="">
          전체모임
        </Menus>
        <Menus id="mypage" className="">
          마이페이지
        </Menus>
      </NavMenu>
    </Header>
  );
};
export default MainHeader;
