import styled from "styled-components";
import variables from "../../styles/variables";

export const LoginContainer = styled.div`
    width: 60%;
    min-height: 60vh;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        width: 100%;
    }
`

export const LoginForm = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const LoginLabel = styled.label`
    margin-top: 30px;
    font-size: 24px;
    color: ${variables.lightGrayBtn};
`

export const LoginInput = styled.input`
    margin-top: 10px;
    height: 50px;
    padding: 10px;
    font-size: 20px;

    &:focus {
        outline-color: ${variables.mainColor};
    }
`

export const LoginButton = styled.button`
    background-color: ${variables.mainColor};
    color: #fff;
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
    padding: 16px 0;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${variables.addBtnHover};
    }
`

export const CreateAccountLink = styled.span`
    color: ${variables.mainColor};
    margin-top: 20px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`