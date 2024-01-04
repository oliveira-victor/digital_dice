import { useState } from "react"
import { ContentWrapper, SectionTitle } from "../../styles"

import variables from "../../styles/variables"

import * as S from './styles'

const Login = () => {

    const [createNewAccount, setCreateNewAccount] = useState(false)

    const [type, setType] = useState('password')

    const [password, setPassword] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')

    function matchingPassword() {
        if (password !== confirmPassword) {
            return <p style={{ color: variables.removeBtn }}>Your password must match</p>
        } else if (password === confirmPassword && password !== '') {
            return <p style={{ color: variables.greenColor }}>Your password is matching!</p>
        }
    }

    function passwordLenght() {
        if  (password.length > 0) {
            if (password === confirmPassword && password.length < 8) {
                return <p style={{ color: variables.removeBtn }}>Your password must be at least 8 digits long</p>
            }
        }
    }

    return (
        <ContentWrapper>
            {!createNewAccount ? (
                <S.LoginContainer>
                    <S.LoginForm>
                        <S.LoginLabel htmlFor="username">User name</S.LoginLabel>
                        <S.LoginInput type="text" id="username" />
                        <S.LoginLabel htmlFor="password">Password</S.LoginLabel>
                        <S.LoginInput type="password" id="password" />
                        <S.SubmitButton>Login</S.SubmitButton>
                        <S.CreateAccountLink onClick={() => setCreateNewAccount(true)}>Create an account</S.CreateAccountLink>
                    </S.LoginForm>
                </S.LoginContainer>
            ) : (
                <S.CreateAccountContainer>
                    <SectionTitle>Create a new account</SectionTitle><br />
                    <S.NewAccountForm>
                        <p>Already have an account? <S.CreateAccountLink onClick={() => setCreateNewAccount(false)}>Log in.</S.CreateAccountLink></p>
                        <S.NameContainer>
                            <div>
                                <S.LoginLabel htmlFor="firstName">First name</S.LoginLabel>
                                <S.LoginInput type="text" id="firstName" />
                            </div>
                            <div>
                                <S.LoginLabel htmlFor="lastName">Last name</S.LoginLabel>
                                <S.LoginInput type="text" id="lastName" />
                            </div>
                        </S.NameContainer>
                        <S.LoginLabel htmlFor="email">E-mail</S.LoginLabel>
                        <S.LoginInput type="email" id="email" />
                        <S.LoginLabel htmlFor="tel">Phone number</S.LoginLabel>
                        <S.LoginInput type="tel" id="tel" />
                        <S.LoginLabel htmlFor="password">Create a password</S.LoginLabel>
                        <S.LoginInput onChange={event => setPassword(event.target.value)} type={type} id="createPassword" />
                        <S.ShowHidePassword onClick={() => type === 'password' ? setType('text') : setType('password')}>
                            {type === 'password' ? 'Show password' : 'Hide password'}
                        </S.ShowHidePassword>
                        <S.LoginLabel htmlFor="password">Confirm your password</S.LoginLabel>
                        <S.LoginInput
                            onChange={event => setConfirmPassword(event.target.value)}
                            type={type}
                            id="password"
                        />
                        {matchingPassword()}
                        {passwordLenght()}
                        <S.SubmitButton>Create account</S.SubmitButton>
                    </S.NewAccountForm>
                </S.CreateAccountContainer>
            )}
        </ContentWrapper>
    )
}

export default Login