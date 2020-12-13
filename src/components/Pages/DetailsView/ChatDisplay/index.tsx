import React from 'react';
import useDetailViewHook from '../Chat/hook';
import { format, distanceInWords } from 'date-fns'


const ChatDisplay: React.FC = (props) => {

  const hook = useDetailViewHook();

  return (
    <div className="chatDisplay">
        <ul>{hook.msgArray.map((item, index) => { 
          let timestamp = format(item.added, 'YYYY-MM-DD HH:mm:ss')
          return (<li className="singleMessage" key={index}>
          <span className="date">{timestamp}</span>
          {item.text}
        </li>)
        })}
        </ul>
    </div>
  );
};

export default ChatDisplay;

