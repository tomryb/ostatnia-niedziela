import { useAppHook } from 'components/App/hook';
import AddView from 'components/Pages/AddView';
import MainListView from 'components/Pages/MainListView';
import DetailsView from 'components/Pages/DetailsView';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="fullWidth">
        <Switch>
          <Route path="/add-view">
            <AddView />
          </Route>
          <Route path="/details-view/:id">
            <DetailsView />
          </Route>
          <Route path="/">
            <MainListView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;