import styled from "styled-components";
import React from "react";
export const Container = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  margin: 1rem 0;
  color: #a48fe0;
  font-family: "S-CoreDream-6Bold";
  font-size: 3rem;
`;
export const SignUpBox = styled.div`
  width: 30rem;
  padding: 1rem 0;
  padding-bottom: 1rem;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);
  color: #566270;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Name = styled.div`
  width: 100%;
  font-size: 1.3rem;
  margin-top: 1rem;
  font-family: "S-CoreDream-3Light";
`;
export const WriteLabel = styled.input`
  border: none;
  outline: none;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 3rem;
  font-family: "S-CoreDream-3Light";
`;

export const Button = styled.button`
  font-family: "S-CoreDream-3Light";
  margin: 1rem 0;
  background-color: #a48fe0;
  color: #fffff3;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  outline: none;
  padding: 0 0.5rem;
  font-size: 1rem;
`;
