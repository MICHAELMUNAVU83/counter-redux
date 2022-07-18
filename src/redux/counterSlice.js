import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incriment: (state) => {
      state.count += 1;
    },
    decriment: (state) => {
        state.count -= 1;
    }, 
    reset:(state)=>{
        state.count = 0
    },
    addbyNumber :(state, actions)=>{
        state.count += actions.payload
    }
  },
});
export const {incriment , decriment, reset ,addbyNumber} = counterSlice.actions
export default counterSlice.reducer
