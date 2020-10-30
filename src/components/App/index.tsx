import { useAppHook } from 'components/App/hook';
import React from 'react';

import './styles.scss';

const App: React.FC = () => {

  const {
    isLoading,
    isSuccess,
    isFailure
  } = useAppHook();

  return (
    <div className="App">
      {isLoading && renderLoading()}
      {isSuccess && renderSuccessMessage()}
      {isFailure && renderFailureMessage()}
    </div>
  );
};

const renderLoading = () => {
  return (
    <span className="App__loader">{'Loading...'}</span>
  );
}

const renderSuccessMessage = () => {
  return (
    <img
      className="App__image"
      src="https://media0.giphy.com/media/BoBOKNtlR8rTi/200.gif"
      alt="Gif"
    />
  );
}

const renderFailureMessage = () => {
  return (
    <span className="App__failure">{'Whooops, something went wrong!'}</span>
  );
}

export default App;