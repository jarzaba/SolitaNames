import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header1 = styled.h1`
  display: flex;
  justify-content: center;
  background: DarkBlue;
  font-size: 2em;
  margin: 10px;
  padding: 0px 1.5em 0px 1.5em;
  border: 0px;
  border-radius: 10px 0px 10px 0px;
  color: White;
`;

export const Header2 = styled.h2`
  display: flex;
  justify-content: center;
  background: White;
  font-size: 1.5em;
  margin: 10px;
  padding: 0px 30px 0px 30px;
  border: 0px;
  color: DarkBlue;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: White;
  color: DarkBlue;
  font-size: 1em;
  font-weight: 800;
  padding: 5px 5px;
  border: 0px;
  text-transform: uppercase;
  &:hover {
    color: DeepPink;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  color: DarkBlue;
  font-size: 1em;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    color: DeepPink;
`;

export const Input = styled.input`
  margin: 0.25em;
`;
