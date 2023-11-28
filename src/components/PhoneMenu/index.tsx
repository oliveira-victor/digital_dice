import { NavLink } from 'react-router-dom'

import * as S from './styles'

import tempImg from '../../assets/moon-icon.svg'

const PhoneMenu = () => {
    return (
        <S.MenuBar>
            <nav>
                <S.PhoneMenuList>
                    <NavLink to="/login">
                        <S.PhoneMenuButton>
                            <S.BtnIcon src={tempImg} alt="" />
                            <span>Login</span>
                        </S.PhoneMenuButton>
                    </NavLink>
                    <NavLink to="/">
                        <S.PhoneMenuButton>
                            <S.BtnIcon src={tempImg} alt="" />
                            <span>Games</span>
                        </S.PhoneMenuButton>
                    </NavLink>
                    <NavLink to="/company">
                        <S.PhoneMenuButton>
                            <S.BtnIcon src={tempImg} alt="" />
                            <span>About</span>
                        </S.PhoneMenuButton>
                    </NavLink>
                    <NavLink to="/cart">
                        <S.PhoneMenuButton>
                            <S.BtnIcon src={tempImg} alt="" />
                            <span>Cart</span>
                        </S.PhoneMenuButton>
                    </NavLink>
                </S.PhoneMenuList>
            </nav>
        </S.MenuBar>
    )
}

export default PhoneMenu