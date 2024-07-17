import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStore = create(immer((set, get) => ({
  bears: 0,
  userEmail: '',
  isUserLoggedIn: true,

  setUserLoggedIn: (userStatus) => set(state => state.isUserLoggedIn = userStatus),

  updateUserEmail: (Email) => set(state => { state.userEmail = Email; }),

  resetUserEmail: () => set(state => { state.userEmail = ''; }),

  getUserEmail: () => get().userEmail,

  increasePopulation: () => set(state => { state.bears += 1; }),

  removeAllBears: () => set({ bears: 0 }),

  updateBears: (newBears) => set({ bears: newBears }),
})));

export default useStore;