import { createSlice } from "@reduxjs/toolkit";

type RevealState = {
    reveal: boolean
}

const initialState: RevealState = {
    reveal: false
}

const revealSlice = createSlice({
    name: 'reveal',
    initialState,
    reducers: {
        revealMsg: (state) => {

            if (state.reveal === false) {
                state.reveal = true
            } else {
                state.reveal = false
            }
        }
    }
})

export const { revealMsg } = revealSlice.actions
export default revealSlice.reducer