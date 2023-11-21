import GameCard from '../../components/GameCard'
import { CardsContainer, SectionTitle } from '../../styles'

const Highlights = () => {
    return (
        <section>
            <SectionTitle>Highlights</SectionTitle>
            <CardsContainer>
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
            </CardsContainer>
        </section>
    )
}

export default Highlights