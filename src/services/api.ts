import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-storage-digitaldice.vercel.app/'
    }),
    endpoints: builder => ({
        getGames: builder.query<Game[], void>({
            query: () => 'products'
        })
    })
})

export const { useGetGamesQuery } = api

export default api