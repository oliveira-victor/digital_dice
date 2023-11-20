import GameCard from '../../components/GameCard'
import { CardsContainer } from '../../styles'
import * as S from './styles'

const Highlights = () => {
    return (
        <section>
            <S.HighlightsTitle>Highlights</S.HighlightsTitle>
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