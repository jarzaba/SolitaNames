import React, { useState, useEffect } from 'react';
import { ensure } from '../utils/undefinedChecker';
import { Arrow } from './Arrow';
import { StyledLink, Button } from './StyledComponents';

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
  // const [selectedName, setSelectedName] = useState<nameObj>();
  const [sortDirection, setSortDirection] = useState<sortDir[]>([
    { sortColumn: 'amount', direction: true },
    { sortColumn: 'name', direction: false },
  ]);

  console.log(namesFromDB);

  useEffect(() => {
    setNames(namesFromDB);
  }, [namesFromDB]);

  const handleSort = (sortProp: 'amount' | 'name') => {
    const selectedColumn = ensure(
      sortDirection.find((item) => item.sortColumn === sortProp)
    );
    selectedColumn.direction = !selectedColumn.direction;
    setSortDirection([...sortDirection, selectedColumn]);
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
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button onClick={() => handleSort('name')}>
          <Arrow sortColumn='name' sortDirection={sortDirection} />
          name
        </Button>
        <Button onClick={() => handleSort('amount')}>
          <Arrow sortColumn='amount' sortDirection={sortDirection} />
          amount
        </Button>
      </div>
      <div
        style={{
          marginTop: 10,
          marginLeft: 50,
        }}
      >
        {names.map((item: nameObj) => (
          <div
            key={item.name}
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: 70,
                paddingRight: 3,
                fontSize: 15,
                borderRight: 'solid',
                borderWidth: 1,
                marginBottom: 0,
                marginTop: 0,
              }}
            >
              <StyledLink to={`/names/${item.name}`}>{item.name}</StyledLink>
            </div>
            <div
              style={{
                minHeight: 15,
                width: item.amount * 5,
                background: 'DarkBlue',
                color: 'white',
              }}
            ></div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: 'DarkBlue',
                padding: 3,
              }}
            >
              {item.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Namelist;