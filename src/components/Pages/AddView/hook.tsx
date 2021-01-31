import React, { useState } from 'react';
import { addKnajpa } from 'redux/models/KnajpyModel/actions';
import { useDispatch } from 'react-redux';

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

    const dispatch = useDispatch();

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
            deadlineTime: '',
            address: '',
            checked: '',
            isTakeaway: '',
        })
    }

    const handleSubmit = (event) => {

        console.log(state);
        const knajpa = {
            shopName: state.name,
            shopUrl: state.link,
            deadlineTime: state.deadlineTime,
            address: state.address,
            isTakeaway: state.isTakeaway,
            minOrderAmount: state.minOrderAmount,
        };

        event.preventDefault();
        dispatch(addKnajpa(knajpa));
        alert('Wysłano typie');
        reset();
    }

    return {
        isTakeaway: state.isTakeaway,
        handleChange,
        handleSubmit,
    };
}