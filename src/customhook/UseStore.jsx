import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStore = create(immer((set, get) => ({
  bears: 0,


  func1: null,
  func2: null,
  func3: null,
  func4: null,

  updateAimateWishListIcon: (func) => set(state => {state.func4 = func}),

  updateAnimateCartIcon: (func) => set(state => {state.func3 = func}),

  updateAnimateWishListExist: (func) => set(state => {state.func2 = func}),

  updateAnimateOrderExist: (func) => set(state => {state.func1 = func}),

  increasePopulation: () => set(state => { state.bears += 1; }),

  removeAllBears: () => set({ bears: 0 }),

  updateBears: (newBears) => set({ bears: newBears }),
})));

export default useStore;