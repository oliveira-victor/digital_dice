import { NavLink } from 'react-router-dom'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

import * as S from './styles'

import controllerIcon from '../../assets/ico-controller.svg'
import loginIcon from '../../assets/ico-login.svg'
import aboutIcon from '../../assets/ico-about.svg'
import mobileCartIcon from '../../assets/ico-mobilecart.svg'

const PhoneMenu = () => {

    const items = useSelector((state: RootReducer) => state.cart.items)

    return (
        <S.MenuBar>
            <nav>
                <S.PhoneMenuList>
                    <NavLink to="/">
                        <S.PhoneMenuButton>
                            <S.BtnIcon src={controllerIcon} alt="Games page icon" />
                            <span>Games</span>
                        </S.PhoneMenuButton>
                    </NavLink>
                    <NavLink to="/company">
                        <S.PhoneMenuButton>
                            <S.BtnIcon src={aboutIcon} alt="About page icon" />
                            <span>About</span>
                        </S.PhoneMenuButton>
                    </NavLink>
                    <NavLink to="/login">
                        <S.PhoneMenuButton>
                            <S.BtnIcon src={loginIcon} alt="Login page icon" />
                            <span>Login</span>
                        </S.PhoneMenuButton>
                    </NavLink>
                    <NavLink to="/cart">
                        <S.CartBtnContainer>
                        <S.CartIcon>
                        <img src={mobileCartIcon} alt="Shopping cart icon" title={items.length > 1 ? `Cart: ${items.length} items` : `Cart: ${items.length} item`} />
                        {items.length ?
                            <S.CartNotification>{items.length}</S.CartNotification>
                            : ''}
                    </S.CartIcon>
                        </S.CartBtnContainer>
                    </NavLink>
                </S.PhoneMenuList>
            </nav>
        </S.MenuBar>
    )
}

export default PhoneMenu