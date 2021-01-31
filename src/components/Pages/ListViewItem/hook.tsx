import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getKnajpa } from 'redux/models/KnajpyModel/actions';
import { selectKnajpa } from 'redux/models/KnajpyModel/selectors';
import { ListViewItemInterface } from '.';

interface ListViewItemHookInterface {
    getListData: any;
    id: string;
}

export default function useListViewItem(props: ListViewItemInterface): ListViewItemHookInterface {
    
    const knajpa = useSelector((state) => selectKnajpa(state, { id: props.id }));
    const [state, setState] = useState({
        
    });

    return {
        getListData: knajpa,
        id: props.id,
    };
}