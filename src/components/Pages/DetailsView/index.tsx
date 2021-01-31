import React, { useState } from 'react';
import useDetailView from './hook';
import { format, distanceInWords } from 'date-fns';

import './styles.scss';
import Chat from './Chat';
import ChatDisplay from './ChatDisplay';

const DetailView: React.FC = (props) => {

  const hook = useDetailView();
  const data = hook.getDetailedData;

  const deadlineTimeAbsolute = format(data.deadlineTime * 1000, 'YYYY-MM-DD HH:mm:ss');
  const deadlineTimeRelative = distanceInWords(Date.now(), data.deadlineTime * 1000);

  return (
    <div className="detailView">
      <a className="backLink" href="/list" >{'<<<'}</a>
      <div className="detailsContainer">
        <div className="shopLogo"><img src={data.shopPicUrl} /></div>
        <div className="detailsData">
          <div><span className="label">Name</span> <br /> {data.name}</div>
          <div><span className="label">Address</span>  <br /> {data.address}</div>
          <div><span className="label">Deadline abs</span>  <br /> {deadlineTimeAbsolute}</div>
          <div><span className="label">Deadline rel</span>  <br /> {deadlineTimeRelative}</div>
          <div><span className="label">Takeaway</span>  <br /> {data.isTakeaway ? 'You -> Host' : 'Host -> You'}</div>
          <div><span className="label">Min order amount</span>  <br /> {data.minOrderAmount}zł</div>
        </div>
      </div>
      <div className="chatContainer">
        <Chat></Chat>
        <ChatDisplay></ChatDisplay>
      </div>
    </div>
  );
};

export default DetailView;