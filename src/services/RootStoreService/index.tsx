import rootStore from 'redux/rootStore';
import { ConfigInterface } from 'services/interfaces';

export const RootStoreSingleton = (function () {
  let store;

  return {
    getInstance: function (config: ConfigInterface) {
      if (!store) {
        store = rootStore({}, config);

        window['__store'] = store;
      }
      return store;
    },
  };
})();
