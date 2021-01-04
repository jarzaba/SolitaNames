import React from 'react';
import { Redirect } from 'react-router-dom';
import { Header2 } from '../components/StyledComponents';

interface nameObj {
  name: string;
  amount: number;
}

interface selectedNameProps {
  selectedName: nameObj | null | undefined;
}

const NameInfo: React.FC<selectedNameProps> = ({ selectedName }) => {
  if (!selectedName) {
    return <Redirect to='/names' />;
  }

  return (
    <Header2 data-cy='selected-name'>
      {selectedName.name}: {selectedName.amount}
    </Header2>
  );
};

export default NameInfo;
