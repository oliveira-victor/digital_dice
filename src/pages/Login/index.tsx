import { ContentWrapper } from "../../styles"

import * as S from './styles'

const Login = () => {
    return (
        <ContentWrapper>
            <S.LoginContainer>
                <S.LoginForm>
                    <S.LoginLabel htmlFor="username">User name</S.LoginLabel>
                    <S.LoginInput type="text" />
                    <S.LoginLabel htmlFor="password">Password</S.LoginLabel>
                    <S.LoginInput type="password" />
                    <S.LoginButton>Login</S.LoginButton>
                    <S.CreateAccountLink>Create an account</S.CreateAccountLink>
                </S.LoginForm>
            </S.LoginContainer>
        </ContentWrapper>
    )
}

export default Login