import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectKnajpa } from 'redux/models/KnajpyModel/selectors';

interface DetailViewHookInterface {
  getDetailedData: any;
  id: string;
}

export default function useDetailView(): DetailViewHookInterface {
  const { id } = useParams<{ id: string }>();

    const knajpa = useSelector((state) => selectKnajpa(state, { id }));

  console.log('KNAJPA = ', knajpa)

  const sampleData = {
    id: 5,
    name: 'pizza express',
    address: 'Krakowska',
    shopPicUrl: 'https://static.pyszne.pl/images/restaurants/pl/00QQ1511/logo_465x320.png',
    deadlineTime: 1607867606,
    isTakeaway: false,
    minOrderAmount: 10
  };

  const [state, setState] = useState({

  });

    useEffect(() => {
        console.log('SASDSd');
    }, []);

  return {
    getDetailedData: sampleData,
    id
  };
}