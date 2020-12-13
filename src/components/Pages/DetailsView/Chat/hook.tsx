import React, { useState } from 'react';

export type Message = {
    text: string,
    added: number
}

interface ChatInterface {
    handleChange: (value: string, event) => void;
    handleSubmit: (event) => void;
    value: string;
    msgArray: Message[];
}

export default function useChatDisplayHook(): ChatInterface {

    const [state, setState] = useState({
        value: '',
        msgArray: [],
    });

    const handleChange = (value: string, event) => {
        setState(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        reset();
    }

    const reset = () => {
        setState({
            value: '',
            msgArray: []
        })
    }

    return {
        handleChange,
        handleSubmit,
        value: state.value,
        msgArray: []
    };
}