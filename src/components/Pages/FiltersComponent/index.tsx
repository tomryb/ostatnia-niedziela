import React from 'react';
import useFiltersHook from './hook';
import DateTimePicker from 'react-datetime-picker';

import './styles.scss';

const FiltersContainer: React.FC = () => {

  const hook = useFiltersHook();

  return (
    <div className="filtersContainer">
      <div className="timeToOrder">
        <div className="filterLabel">Time to order</div>
        <div className="filterContent"><input type="text" name="timeToOrder" placeholder="HH:MM" onChange={(event) => hook.handleChange('timeToOrder', event)}/></div>
      </div>
      <div>
        <div className="filterLabel">Delivery type</div>
        <div className="filterContent">
          <select onChange={(event) => hook.handleChange('deliveryType', event)}>
            <option value="null"> {"I don't care"}</option>
            <option value="0"> {"Me -> Host"}</option>
            <option value="1"> {"Host -> Me"}</option>
          </select>
        </div>
      </div>
      <div>
        <div className="filterLabel">Max order amount</div>
        <div className="filterContent"><input type="text" name="maxOrderAmount" onChange={(event) => hook.handleChange('maxOrderAmount', event)}/></div>
      </div>
      <div>
        <div className="filterLabel">Max distance (km)</div>
        <div className="filterContent"><input type="text" name="maxDistance" onChange={(event) => hook.handleChange('maxDistance', event)}/></div>
      </div>
    </div>
  );
};

export default FiltersContainer;