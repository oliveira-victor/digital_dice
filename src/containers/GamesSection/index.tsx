import GameCard from "../../components/GameCard"
import { useGetGamesQuery } from "../../services/api"
import { CardsContainer, SectionTitle } from "../../styles"


const GamesSection = () => {
    const { data: games, isLoading } = useGetGamesQuery()

    if (isLoading) return <h2>Loading...</h2>

    return (
        <section>
            <SectionTitle>Get incredible games</SectionTitle>
            <CardsContainer>
                {games?.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
                {/* <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard /> */}
            </CardsContainer>
        </section>
    )
}

export default GamesSection