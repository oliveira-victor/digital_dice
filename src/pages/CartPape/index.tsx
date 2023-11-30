import { SectionTitle } from "../../styles"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"

import * as S from './styles'

import emptyCart from '../../assets/empty-cart.svg'

const CartPage = () => {

    const items = useSelector((state: RootReducer) => state.cart.items)

    return (
        <S.CartContentWrapper>
            <SectionTitle>Your shopping cart</SectionTitle>
            {items.length >= 1 ? (
                <>
                    <ul>
                        <S.GameList>
                            <S.GameThumb src="https://raw.githubusercontent.com/oliveira-victor/servidor_estaticos/main/digital-dice_server/images/the-jungle-quest.webp" alt="" />
                            <S.GameInfo>
                                <div>
                                    <S.GameCartTitle>Game Title</S.GameCartTitle>
                                    <S.PreviousPriceCart>$ 15</S.PreviousPriceCart>
                                    <S.CurrentPriceCart>Price: $ 10</S.CurrentPriceCart>
                                </div>
                                    <S.RemoveItemButton>Remove from cart</S.RemoveItemButton>
                            </S.GameInfo>
                        </S.GameList>
                    </ul>
                    <S.CheckoutContainer>
                        <S.Total>Total: $ 20</S.Total>
                        <S.CheckoutBtn>Check-out</S.CheckoutBtn>
                    </S.CheckoutContainer>
                </>
            ) : (
                <S.EmptyCartContainer>
                    <S.EmptyCartTxt>Your shopping cart is empty.</S.EmptyCartTxt>
                    <img src={emptyCart} alt="Empty cart image" />
                </S.EmptyCartContainer>
            )}


        </S.CartContentWrapper>
    )
}

export default CartPage