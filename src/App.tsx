import React, { useState, useEffect } from 'react';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import NameList from './components/NameList';
import NameInfo from './components/NameInfo';
import { AppContainer, Header1 } from './components/StyledComponents';
import { getAllNames } from './services/nameService';

interface nameObj {
  name: string;
  amount: number;
}

interface routerProps {
  id: string;
}

const App: React.FC = () => {
  const [names, setNames] = useState<nameObj[]>([]);

  useEffect(() => {
    getAllNames().then((names) =>
      setNames(names.sort((a: nameObj, b: nameObj) => b.amount - a.amount))
    );
  }, []);

  const totalNumOfNames = names.reduce((total: number, name: nameObj) => {
    return total + name.amount;
  }, 0);

  const matchName = useRouteMatch<routerProps>('/names/:id');
  const selectedName = matchName
    ? names.find((name) => name.name === matchName.params.id)
    : null;

  return (
    <AppContainer>
      <Header1>{totalNumOfNames} Solita Names</Header1>

      <Switch>
        <Route path='/names/:id'>
          <NameInfo selectedName={selectedName} />
        </Route>
        <Route path='/names'>
          <NameList namesFromDB={names} />
        </Route>
        <Route path='/'>
          <Redirect to='/names' />
        </Route>
      </Switch>
    </AppContainer>
  );
};

export default App;
