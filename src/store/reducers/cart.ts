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
                alert('This item has already been added to cart.')
            } else {
                state.items.push(game)
            }
        }
    }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer