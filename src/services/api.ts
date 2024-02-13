import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

type Product = {
    id: number
    price: number
}

type PurchasePayload = {
    products: Product[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            state: string
            country: string
            zipcode: string
            houseNumber: string
            email: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-digitaldice.vercel.app/api/digitaldice'
    }),
    endpoints: builder => ({
        getGames: builder.query<Game[], void>({
            query: () => 'games'
        }),
        purchase: builder.mutation<any, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { useGetGamesQuery, usePurchaseMutation } = api

export default api