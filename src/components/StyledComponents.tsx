import styled, { StyledProps } from 'styled-components';
import { Link } from 'react-router-dom';

type ItemAmountBarProps = StyledProps<{
  amount: number;
}>;

export const AppContainer = styled.div`
  margin: auto;
  max-width: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

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

export const ShadowBox = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: DarkBlue;
`;

export const List = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70px;
  padding-right: 3px;
  font-size: 15px;
  border-right: solid;
  border-width: 1px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const ListItemAmountBar = styled.div(
  (props: ItemAmountBarProps) =>
    `
    min-height: 15px;
    width: ${props.amount ? props.amount * 5 : 0}px;
    background: DarkBlue;
    color: white;
    `
);

export const ListItemAmount = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: DarkBlue;
  padding: 3px;
`;

export const Input = styled.input`
  margin: 0.25em;
`;
