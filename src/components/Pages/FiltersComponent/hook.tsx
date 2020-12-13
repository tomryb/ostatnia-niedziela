import React, { useState } from 'react';

interface useFiltersHookInterface {
  timeToOrder: number,
  deliveryType: boolean,
  maxOrderAmount: number,
  maxDistance: number,
  handleChange: (labelName: string, event) => void;
}

export default function useFiltersHook(): useFiltersHookInterface {
  
  const [state, setState] = useState({
    timeToOrder: 0,
    deliveryType: false,
    maxOrderAmount: 0,
    maxDistance: 0,
  });

  const handleChange = (labelName: string, event) => {
    if (event === null) {
      return
    }
    setState({
      ...state,
      [labelName]: event.target.value,
    });
  }; 

  return {
    timeToOrder: state.timeToOrder,
    deliveryType: state.deliveryType,
    maxOrderAmount: state.maxOrderAmount,
    maxDistance: state.maxDistance,
    handleChange
  };
}