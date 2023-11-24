import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Game } from '../../App'

type CartState = {
    items: Game[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Game>) => {
            const game = action.payload

            if (state.items.find((product) => product.id === game.id)) {
                const nextCartItems = state.items.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.items = nextCartItems
            } else {
                state.items.push(game)
            }
        }
    }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer