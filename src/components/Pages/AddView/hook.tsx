import React, { useState } from 'react';

interface AddViewHookInterface {
    isTakeaway: string;
    handleChange: (labelName: string, event) => void;
    handleSubmit: (event) => void;
}

export default function useAddViewHook(): AddViewHookInterface {

    const [state, setState] = useState({
        name: '',
        link: '',
        checked: '',
        isTakeaway: ''
    });

    const handleChange = (labelName: string, event) => {
        setState({
            ...state,
            [labelName]: event.target.value,
        });
    };


    const reset = () => {
        setState({
            name: '',
            link: '',
            checked: '',
            isTakeaway: '',
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Wysłano typie');
        reset();
    }

    return {
        isTakeaway: state.isTakeaway,
        handleChange,
        handleSubmit,
    };
}