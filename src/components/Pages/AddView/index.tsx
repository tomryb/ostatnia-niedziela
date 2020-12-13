import React, { useState } from 'react';
import useAddViewHook from './hook';
import hook from './hook';

import './styles.scss';

export interface AddNewViewInterface {
  name?: string;
  className?: string;
}

const defaultProps: AddNewViewInterface = {
  className: '',
  name: 'Uzupełnij formularz typie'
}


const AddView: React.FC<AddNewViewInterface> = (props) => {

  const hook = useAddViewHook();

  return (
    <div className="addView">
      <label>Nazwa knajpy
        <input onChange={(event) => hook.handleChange('name', event)} type="text" name="Nazwa knajpy" />
      </label>
      <label>Link do knajpy
        <input onChange={(event) => hook.handleChange('link', event)} type="text" name="Link do knajpy" />
      </label>
      <label>Kiedy wygasa
        <input onChange={(event) => hook.handleChange('expire', event)} type="text" name="Kiedy wygasa" />
      </label>
      <label>Adres hosta
        <input onChange={(event) => hook.handleChange('address', event)} type="text" name="Adres hosta" />
      </label>
      <label>Sposób odbioru
        <input type="radio" name="Sam się ruszę" value="user" onChange={(event) => hook.handleChange('isTakeaway', event)} checked={hook.isTakeaway === 'user'} />
        <label htmlFor="user">Sam się ruszę</label>
        <input type="radio" name="Ty się rusz" value="host" onChange={(event) => hook.handleChange('isTakeaway', event)} checked={hook.isTakeaway === 'host'} />
        <label htmlFor="host">Ty się rusz</label>
      </label>
      <label>Min kwota zamówienia
      <input onChange={(event) => hook.handleChange('number', event)} type="number" name="Min kwota zamówienia" />zł
      </label>
      <label>Dodatkowe uwagi
        <input onChange={(event) => hook.handleChange('extra', event)} type="text" name="Dodatkowe uwagi" />
      </label>
      <button onClick={(event) => hook.handleSubmit(event)}>Wyślij typie</button>
    </div>

  );
};

export default AddView;