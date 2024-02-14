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
            
            if (state.orderNumber === 0) {
                state.orderNumber = NewOrderNumber
            } else {
                state.orderNumber = 0
            }
        }
    }
})

export const { orderPlaced, setOrderNumber } = modalSlice.actions
export default modalSlice.reducer