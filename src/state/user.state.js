import { Enum } from 'lib/enum.js';

export { UserState };

function UserState() {
  let state = {};

  const events = Enum();

  const reducers = {};

  return {
    state,
    events,
    reducers,
  };
}
