import { useAppHook } from 'components/App/hook';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { format, distanceInWords } from 'date-fns'

import './styles.scss';
import useListViewItem from './hook';

export interface ListViewItemInterface {
  id: string;
}

const ListViewItem: React.FC<{id: string}> = (props) => {
  const history = useHistory();

  const hook = useListViewItem(props);
  const data = hook.getListData;

  const {
    isLoading,
    isSuccess,
    isFailure
  } = useAppHook();

  if (data) {
  let deadlineTimeAbsolute = format(data.deadlineTime * 1000, 'YYYY-MM-DD HH:mm:ss')
  let deadlineTimeRelative = distanceInWords(Date.now(), data.deadlineTime * 1000)
  return (
    <div className="listViewItem">
      <div className="shopPic"><img className="shopPic" src={data.shopPicUrl} /></div>
      <div className="shopName">
        <a href={data.shopUrl ? data.shopUrl : "#"}>{data.shopName}</a>
      </div>
      <div className="deadlineTime">
        <div>{deadlineTimeAbsolute}</div>
        <div className="relativeTime">{deadlineTimeRelative}</div>
      </div>
      <div className="hostAddress">{data.address}</div>
      <div className="isTakeaway">{data.isTakeaway ? "You -> Host" : "Host -> You"}</div>
      <div className="minOrderAmount">{data.minOrderAmount}</div>
      <div className="showDetails" onClick={() => {history.push(`/details-view/${props.id}`)}}>➩➩</div>
    </div>
  );
} else {
  return (
    <div className="listViewItem">
    </div>
  )
}
};

export default ListViewItem;