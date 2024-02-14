import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalState = {
    modalOn: boolean
    orderNumber: number
}

const initialState: ModalState = {
    modalOn: false,
    orderNumber: 0
}

const modalSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        orderPlaced: (state) => {
            state.modalOn ? state.modalOn = false : state.modalOn = true
        },
        setOrderNumber: (state, action: PayloadAction<number>) => {
            const NewOrderNumber = action.payload
            state.orderNumber = NewOrderNumber
        }
    }
})

export const { orderPlaced, setOrderNumber } = modalSlice.actions
export default modalSlice.reducer