export const createStore = ({ state, events, reducers }) => {
  let listeners = [];

  const store = Object.freeze({
    get: () => ({ state, events }),

    getState: () => ({ ...state }),

    getEvents: () => ({ ...events }),

    dispatch: async (part, action, payload) => {
      const update = await reducers[part][action](state, payload);
      state = update.state;

      for (const listener of listeners) {
        for (const event of update.trigger) {
          if (typeof event === 'string') {
            if (listener[event]) {
              await listener[event]();
            }
          } else if (typeof event === 'object' && listener[event.event]) {
            await listener[event.event](event.payload);
          }
        }
      }
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
