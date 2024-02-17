import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { useGetGamesQuery } from '../../services/api'
import { RootReducer } from '../../store'
import { add } from '../../store/reducers/cart'
import { currencyFormat } from '../../utils/currency'

import { ContentWrapper } from '../../styles'
import * as S from './styles'

const Hero = () => {

    const { data: games } = useGetGamesQuery()

    const dispatch = useDispatch()

    const release: any = games?.find(item => item.title === 'The Jungle Quest')

    const items = useSelector((state: RootReducer) => state.cart.items)

    function addReleaseToCart() {
        dispatch(add(release))
    }

    return (
        <S.HeroImg>
            <S.HeroGradient></S.HeroGradient>
            <ContentWrapper>
                {release && (
                    <S.HeroHighlightData>
                    <S.ReleaseTitle>Our latest release</S.ReleaseTitle>
                    <S.HeroGameTitle>The Jungle Quest</S.HeroGameTitle>
                    <S.HeroText>
                        {<p>Help Iara save her people in this new incredible <br /><span>{currencyFormat.format(release.previousPrice)}</span> release for only {currencyFormat.format(release.currentPrice)} for a limited time!</p>}
                    </S.HeroText>
                    {items.filter(e => e.title === 'The Jungle Quest').length > 0 ? (
                        <NavLink to='/cart'>
                            <S.HeroCheckoutBtn>Go to cart</S.HeroCheckoutBtn>
                        </NavLink>
                    ) : (
                        <S.HeroBtn onClick={addReleaseToCart}>Get it now!</S.HeroBtn>
                    )}
                </S.HeroHighlightData>
                )}
            </ContentWrapper>
        </S.HeroImg>
    )
}

export default Hero