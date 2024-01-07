import { SectionTitle } from "../../styles"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { useState } from "react"
import CartItem from "../../components/CartItem"

import * as S from './styles'

import emptyCart from '../../assets/empty-cart.webp'
import CheckoutForm from "../../containers/CheckoutForm"

const CartPage = () => {

    const items = useSelector((state: RootReducer) => state.cart.items)

    const prices = items.map(game => game.currentPrice)

    const totalPrice = prices.reduce((sum, price) => sum + price, 0)

    const [showForm, setShowForm] = useState(false)

    return (
        <S.CartContentWrapper>
            {items.length >= 1 ? (
                <>
                    <SectionTitle>Your shopping cart</SectionTitle>
                    <ul>
                        {items?.map((game) => (
                            <CartItem key={game.id} game={game} />
                        ))}
                    </ul>
                    <S.CheckoutContainer>
                        <S.Total>{items.length >= 2 ? `${items.length} games ` : `${items.length} game •`}</S.Total>
                        <S.Total>Total: $ {totalPrice}</S.Total>
                        {!showForm ? (
                            <a href="#checkout-form"><S.CheckoutBtn onClick={() => setShowForm(true)}>Check-out</S.CheckoutBtn></a>
                        ) : ''}
                    </S.CheckoutContainer>
                    <div id="checkout-form">
                        {showForm ? <CheckoutForm finalItems={items.length} finalPrice={totalPrice} /> : ''}
                    </div>
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