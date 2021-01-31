import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from 'redux/models/ChatModel/actions';

export type Message = {
    text: string,
    added: number,
    id: string
};

interface ChatInterface {
    handleChange: (value: string, event) => void;
    handleSubmit: (event) => void;
    value: string;
    msgArray: Message[];
}

export default function useChatDisplayHook(): ChatInterface {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    value: '',
    msgArray: [],
  });

  const handleChange = (value: string, event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addMessage(state.text, state.id));
    reset();
  };

  const reset = () => {
    setState({
      value: '',
      msgArray: []
    });
  };

  return {
    handleChange,
    handleSubmit,
    value: state.value,
    msgArray: []
  };
}