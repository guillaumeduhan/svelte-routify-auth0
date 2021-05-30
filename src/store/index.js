import { writable } from 'svelte/store';

// to user later
function createMapStore(initial) {
  const store = writable(initial)
  const set = (key, value) => store.update(s => Object.assign({}, s, { [key]: value }))

  return {
    subscribe: store.subscribe,
    set
  };
}

export const isAuthenticated = writable(false);

export const userStore = writable({});