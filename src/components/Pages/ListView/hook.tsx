import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getKnajpy } from 'redux/models/KnajpyModel/actions';
import { selectKnajpyIds } from 'redux/models/KnajpyModel/selectors';

interface ListViewHookInterface {
    getListData: any;
    id: string;
}

export default function useListView(): ListViewHookInterface {
    let { id }  = useParams<{ id: string }>();

    const dispatch = useDispatch();
    const onFetchData = (id: string) => {

        dispatch(getKnajpy());
    }
    
    const knajpy = useSelector((state) => selectKnajpyIds(state));

    console.log('KNAJPA = ', knajpy);
    

    const [state, setState] = useState({
        
    });

    useEffect(() => {
        console.log('SASDSd');

       onFetchData(id);
    }, []);

    return {
        getListData: knajpy,
        id
    };
}