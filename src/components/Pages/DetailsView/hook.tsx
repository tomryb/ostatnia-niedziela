import React, { useState } from 'react';
import { useParams } from "react-router-dom";

interface DetailViewHookInterface {
    getDetailedData: any;
    id: string;
}

export default function useDetailView(): DetailViewHookInterface {
    let { id }  = useParams<{ id: string }>();
    
    const sampleData = {
        id: 5,
        name: 'pizza express',
        address: 'Krakowska',
        shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/00QQ1511/logo_465x320.png",
        deadlineTime: 1607867606,
        isTakeaway: false,
        minOrderAmount: 10
    }

    const [state, setState] = useState({
        
    });

    return {
        getDetailedData: sampleData,
        id
    };
}