import styled from "styled-components";

export const TitleText = styled.a`
  cursor: pointer;
  font-family: "S-CoreDream-6Bold";
  text-decoration: none;
  color: #a48fe0;
  font-size: 3rem;
  font-weight: bold;
`;
export const Header = styled.header`
  background-color: white;
  display: flex;
  margin: 0.1rem 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  align-items: center;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const SearchBox = styled.input`
  width: 500px;
  height: 30px;
  margin: 20px 10px;
  margin-left: 20px;
  padding: 5px 10px;
  border: none;
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.15);
  &:hover,
  &:focus {
    outline: none;
  }
`;
export const SearchIcon = styled.i`
  align-self: center;
  justify-self: center;
  font-size: 25px;
  margin-left: 5px;
`;

export const NavMenu = styled.nav`
  justify-content: flex-end;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 20px;
`;
export const Menus = styled.a`
  cursor: pointer;
  font-family: "S-CoreDream-3Light";
  font-size: 1rem;
  margin: 10px 50px;
  &:hover {
    font-weight: bold;
  }
`;
