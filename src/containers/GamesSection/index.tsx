import GameCard from "../../components/GameCard"
import Loader from "../../components/loader"
import { useGetGamesQuery } from "../../services/api"

import { CardsContainer, SectionTitle } from "../../styles"

const GamesSection = () => {
    const { data: games, isLoading } = useGetGamesQuery()

    if (isLoading) return <Loader />

    return (
        <section>
            <SectionTitle>Get incredible games</SectionTitle>
            <CardsContainer>
                {games?.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </CardsContainer>
        </section>
    )
}

export default GamesSection