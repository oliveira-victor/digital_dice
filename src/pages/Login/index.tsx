import { useState } from "react"
import { ContentWrapper, SectionTitle } from "../../styles"

import variables from "../../styles/variables"

import * as S from './styles'

const Login = () => {

    const [createNewAccount, setCreateNewAccount] = useState(false)

    const [type, setType] = useState('password')

    const [password, setPassword] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')

    const [matchingPassword, setMatchingPassword] = useState(true)

    function validatePassword() {
        password === confirmPassword ? setMatchingPassword(true) : setMatchingPassword(false)
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
                        <S.LoginInput onBlur={() => validatePassword()} onChange={event => setPassword(event.target.value)} type={type} id="createPassword" />
                        <S.ShowHidePassword onClick={() => type === 'password' ? setType('text') : setType('password')}>
                            {type === 'password' ? 'Show password' : 'Hide password'}
                        </S.ShowHidePassword>
                        <S.LoginLabel htmlFor="password">Confirm your password</S.LoginLabel>
                        <S.LoginInput 
                            onBlur={() => validatePassword()} 
                            onChange={event => setConfirmPassword(event.target.value)} 
                            type={type} 
                            id="password" 
                        />
                        {matchingPassword ? '' : <span style={{color: variables.removeBtn}}>Your password must match</span>}
                        <S.SubmitButton>Create account</S.SubmitButton>
                    </S.NewAccountForm>
                </S.CreateAccountContainer>
            )}
        </ContentWrapper>
    )
}

export default Login