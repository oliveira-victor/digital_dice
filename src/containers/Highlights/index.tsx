import { useGetGamesQuery } from "../../services/api"
import GameCard from '../../components/GameCard'
import Loader from "../../components/loader"

import { CardsContainer, SectionTitle } from '../../styles'

const Highlights = () => {
    const { data: games, isLoading } = useGetGamesQuery()

    if (isLoading) return <Loader />

    return (
        <section>
            <SectionTitle>Highlights</SectionTitle>
            <CardsContainer>
                {games?.map((game) => (
                    game.highlight ? <GameCard key={game.id} game={game} /> : ''
                ))}
            </CardsContainer>
        </section>
    )
}

export default Highlights