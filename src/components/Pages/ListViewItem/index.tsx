import { useAppHook } from 'components/App/hook';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { format, distanceInWords } from 'date-fns'

import './styles.scss';

export interface ListViewItemInterface {
  id: number;
  shopName: string;
  shopUrl?: string;
  shopPicUrl?: string;
  address?: string;
  deadlineTime: number;
  isTakeaway: boolean;
  minOrderAmount: number;
}

const ListViewItem: React.FC<ListViewItemInterface> = (props) => {
  const history = useHistory();

  const {
    isLoading,
    isSuccess,
    isFailure
  } = useAppHook();

  let deadlineTimeAbsolute = format(props.deadlineTime * 1000, 'YYYY-MM-DD HH:mm:ss')
  let deadlineTimeRelative = distanceInWords(Date.now(), props.deadlineTime * 1000)

  return (
    <div className="listViewItem">
      <div className="shopPic"><img className="shopPic" src={props.shopPicUrl} /></div>
      <div className="shopName">
        <a href={props.shopUrl ? props.shopUrl : "#"}>{props.shopName}</a>
      </div>
      <div className="deadlineTime">
        <div>{deadlineTimeAbsolute}</div>
        <div className="relativeTime">{deadlineTimeRelative}</div>
      </div>
      <div className="hostAddress">{props.address}</div>
      <div className="isTakeaway">{props.isTakeaway ? "You -> Host" : "Host -> You"}</div>
      <div className="minOrderAmount">{props.minOrderAmount}</div>
      <div className="showDetails" onClick={() => {history.push(`/details-view/${props.id}`)}}>➩➩</div>
    </div>
  );
};

export default ListViewItem;