import { useAppHook } from 'components/App/hook';
import React from 'react';
import ListViewItem from '../ListViewItem';
import useListView from './hook';

import './styles.scss';

export interface ListViewInterface {
  name: string;
  className: string;
}

const ListView: React.FC = () => {

  const hook = useListView();
  const data = hook.getListData;

  const {
    isLoading,
    isSuccess,
    isFailure
  } = useAppHook();

  return (
    <div className="listView">
      {data.map(renderItem)}
      {/* {isLoading && renderSuccessMessage()}
      {isSuccess && renderSuccessMessage()}
      {isFailure && renderFailureMessage()} */}
    </div>
  );
};

const renderItem = (id: string) => {
  return (
    <ListViewItem
      key={id}
      id={id}
    />
  )
}

export default ListView;