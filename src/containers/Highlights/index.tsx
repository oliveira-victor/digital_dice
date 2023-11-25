import { useGetGamesQuery } from "../../services/api"
import { CardsContainer, SectionTitle } from '../../styles'
import GameCard from '../../components/GameCard'

const Highlights = () => {
    const { data: games, isLoading } = useGetGamesQuery()

    if (isLoading) return <h2>Loading...</h2>

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