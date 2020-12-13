import React from 'react';
import useDetailViewHook from './hook';


const Chat: React.FC = (props) => {

  const hook = useDetailViewHook();

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

