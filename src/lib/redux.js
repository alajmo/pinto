export const createStore = ({ state, events, reducers, effects }) => {
  let listeners = [];

  const store = Object.freeze({
    get: () => ({ state, events }),

    getState: () => ({ ...state }),

    getEvents: () => ({ ...events }),

    dispatch: (part, action, payload) => {
      const update = reducers[part][action](state, payload);
      state = update.state;

      listeners.forEach(listener => {
        update.trigger.forEach(event => {
          if (typeof event === 'string') {
            if (listener[event]) {
              listener[event]();
            }
          } else if (typeof event === 'object' && listener[event.event]) {
            listener[event.event](event.payload);
          }
        });
      });
    },

    subscribe: newListener => {
      listeners.push(newListener);

      const unsubscribe = () => {
        listeners = listeners.filter(l => l !== newListener);
      };

      return unsubscribe;
    },
  });

  return store;
};
