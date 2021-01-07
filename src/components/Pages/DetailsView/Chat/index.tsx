import React from 'react';
import useChatDisplayHook from './hook';

import './styles.scss';

const Chat: React.FC = () => {

  const hook = useChatDisplayHook();

  return (
    <div className="chat">
      <label>Jak się zwiecie Towarzyszu
  <input value={hook.value} type="text" name="name" onChange={(event) => hook.handleChange('name', event)} />
      </label>
      <label>Napiszcie coś ładnego o naszym Ojcu Józefie
  <input value={hook.value} type="text" name="message" onChange={(event) => hook.handleChange('name', event)} />
      </label>
      <button onClick={(event) => hook.handleSubmit(event)}>Wyślijcie do cenzora</button>
    </div>
  );
};

export default Chat;

