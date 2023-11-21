import GameCard from "../../components/GameCard"
import { CardsContainer, SectionTitle } from "../../styles"

const GamesSection = () => {
    return (
        <section>
            <SectionTitle>Get incredible games</SectionTitle>
            <CardsContainer>
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
                <GameCard />
                <GameCard />
            </CardsContainer>
        </section>
    )
}

export default GamesSection