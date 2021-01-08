import React, { useState, useEffect } from 'react';
import { ensure } from '../utils/undefinedChecker';
import { Arrow } from './Arrow';
import { StyledLink, Button, ShadowBox, List, ListItem, ListItemAmountBar, ListItemAmount, MenuContainer } from './StyledComponents';

interface nameObj {
  name: string;
  amount: number;
}

interface nameProps {
  namesFromDB: {
    name: string;
    amount: number;
  }[];
}

interface sortDir {
  sortColumn: string;
  direction: boolean;
}

const Namelist: React.FC<nameProps> = ({ namesFromDB }) => {
  const [names, setNames] = useState(namesFromDB);
  const [sortDirection, setSortDirection] = useState<sortDir[]>([
    { sortColumn: 'amount', direction: true },
    { sortColumn: 'name', direction: false },
  ]);

  useEffect(() => {
    setNames(namesFromDB);
  }, [namesFromDB]);

  const handleSort = (sortProp: 'amount' | 'name') => {
    setSortDirection(
      sortDirection.map((item) =>
        item.sortColumn === sortProp
          ? { ...item, direction: !item.direction }
          : item
      )
    );
    const selectedColumn = ensure(
      sortDirection.find((item) => item.sortColumn === sortProp)
    );
    selectedColumn.direction
      ? setNames(
        [...names].sort((a, b) =>
          b[sortProp] < a[sortProp] ? -1 : Number(b[sortProp] > a[sortProp])
        )
      )
      : setNames(
        [...names].sort((a, b) =>
          a[sortProp] < b[sortProp] ? -1 : Number(a[sortProp] > b[sortProp])
        )
      );
    console.log(sortDirection);
    console.log(names);
  };

  return (
    <>
      <MenuContainer>
        <Button className='nameButton' onClick={() => handleSort('name')}>
          <Arrow sortColumn='name' sortDirection={sortDirection} />
          name
        </Button>
        <Button className='amountButton' onClick={() => handleSort('amount')}>
          <Arrow sortColumn='amount' sortDirection={sortDirection} />
          amount
        </Button>
      </MenuContainer>
      <ShadowBox>
        {names.map((item: nameObj) => (
          <List key={item.name} className='namelist'>
            <ListItem>
              <StyledLink to={`/names/${item.name}`} data-cy='namelink'>
                {item.name}
              </StyledLink>
            </ListItem>
            <ListItemAmountBar amount={item.amount} />
            <ListItemAmount>{item.amount}</ListItemAmount>
          </List>
        ))}
      </ShadowBox>
    </>
  );
};

export default Namelist;
