import { useAppHook } from 'components/App/hook';
import React from 'react';
import ListViewItem from '../ListViewItem';

import './styles.scss';

export interface ListViewInterface {
  name: string;
  className: string;
}

const ListView: React.FC = () => {

  const items = [
    {
      id: 1,
      name: 'Rburger',
      address: 'Piękna',
      shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/OO5N055N/logo_465x320.png",
      deadlineTime: 1607867786,
      isTakeaway: true,
      minOrderAmount: 30,

    },
    {
      id: 2,
      name: 'PWroc',
      address: 'Racławicka',
      shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/NRN5R5O/logo_465x320.png",
      deadlineTime: 1607867426,
      isTakeaway: true,
      minOrderAmount: 50,
    },
    {
      id: 3,
      name: 'Sulejman',
      address: 'Zdrowa',
      shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/OR7O0N01/logo_465x320.png",
      deadlineTime: 1607867386,
      isTakeaway: false,
      minOrderAmount: 30,
    },
    {
      id: 4,
      name: 'PANda',
      address: 'al. Armii Krajowej',
      shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/O0OR55N1/logo_465x320.png",
      deadlineTime: 1607867516,
      isTakeaway: true,
      minOrderAmount: 100,
    },
    {
      id: 5,
      name: 'pizza express',
      address: 'Krakowska',
      shopPicUrl: "https://static.pyszne.pl/images/restaurants/pl/00QQ1511/logo_465x320.png",
      deadlineTime: 1607867606,
      isTakeaway: false,
      minOrderAmount: 10,
    },
  ];

  const {
    isLoading,
    isSuccess,
    isFailure
  } = useAppHook();

  return (
    <div className="listView">
      {items.map(renderItem)}
      {/* {isLoading && renderSuccessMessage()}
      {isSuccess && renderSuccessMessage()}
      {isFailure && renderFailureMessage()} */}
    </div>
  );
};

const renderItem = (item: any) => {
  return (
    <ListViewItem
      key={item.id}
      id={item.id}
      shopName={item.name}
      shopPicUrl={item.shopPicUrl}
      address={item.address}
      deadlineTime={item.deadlineTime}
      isTakeaway={item.isTakeaway}
      minOrderAmount={item.minOrderAmount}
    />
  )
}

export default ListView;