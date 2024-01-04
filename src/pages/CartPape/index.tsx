import { SectionTitle } from "../../styles"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import CartItem from "../../components/CartItem"

import * as S from './styles'

import emptyCart from '../../assets/empty-cart.webp'

const CartPage = () => {

    const items = useSelector((state: RootReducer) => state.cart.items)

    const prices = items.map(game => game.currentPrice)

    const totalPrice = prices.reduce((sum, price) => sum + price, 0)

    return (
        <S.CartContentWrapper>
            <SectionTitle>Your shopping cart</SectionTitle>
            {items.length >= 1 ? (
                <>
                    <ul>
                        {items?.map((game) => (
                            <CartItem key={game.id} game={game} />
                        ))}
                    </ul>
                    <S.CheckoutContainer>
                        <S.Total>{items.length >= 2 ? `${items.length} games ` : `${items.length} game •`}</S.Total>
                        <S.Total>Total: $ {totalPrice}</S.Total>
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