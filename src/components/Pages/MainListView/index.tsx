import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import ListView from '../ListView';
import FiltersContainer from '../FiltersComponent';

export interface ListViewItemInterface {
  id?: number;
}

const MainListView: React.FC<ListViewItemInterface> = (props) => {
  const history = useHistory();

  return (
    <div className="mainListView">
      <FiltersContainer />
      <ListView />
      <div className="addYours" onClick={() => {history.push(`/add-view`)}}>ADD YOUR ADVERTISEMENT {">>>"}</div>
    </div>
  );
};

export default MainListView;