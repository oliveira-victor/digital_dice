import { useDispatch, useSelector } from 'react-redux'
import { useGetGamesQuery } from '../../services/api'
import { RootReducer } from '../../store'
import { ContentWrapper } from '../../styles'
import { add } from '../../store/reducers/cart'
import * as S from './styles'
import { NavLink } from 'react-router-dom'

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
                <div>
                    <S.ReleaseTitle>Our latest release</S.ReleaseTitle>
                    <S.HeroGameTitle>The Jungle Quest</S.HeroGameTitle>
                    <S.HeroText>
                        Help Iara save her people in this new incredible release <br />from <span>$ {release?.previousPrice}</span> to only {release?.currentPrice} for a limited time!
                    </S.HeroText>
                    {items.filter(e => e.title === 'The Jungle Quest').length > 0 ? (
                        <NavLink to='/cart'>
                            <S.HeroCheckoutBtn>Go to cart</S.HeroCheckoutBtn>
                        </NavLink>
                    ) : (
                        <S.HeroBtn onClick={addReleaseToCart}>Get it now!</S.HeroBtn>
                    )}
                </div>
            </ContentWrapper>
        </S.HeroImg>
    )
}

export default Hero