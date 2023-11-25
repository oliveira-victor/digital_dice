import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://digital-dice-data.onrender.com/'
    }),
    endpoints: builder => ({
        getGames: builder.query<Game[], void>({
            query: () => 'products'
        })
    })
})

export const { useGetGamesQuery } = api

export default api

  /* 'http://localhost:4000/products' */
/*   https://github.com/oliveira-victor/servidor_estaticos/blob/main/digital-dice_server/db.json */