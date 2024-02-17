import styled from "styled-components";

import companyBanner from '../../assets/images/company.webp'
import variables from "../../styles/variables";

export const CompanyHero = styled.div`
    width: 100%;
    height: 60vh;
    background-image: url(${companyBanner});
    background-size: cover;
    background-position: bottom;
    margin-bottom: 40px;
`

export const firstWrapper = styled.div`
    display: grid;
    grid-template-columns: 70% auto; 
    gap: 20px;

    & img {
        width: 100%;
        border-radius: 10px;
    }

    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        padding: 0 10px;
    }
`

export const secondWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    margin: 100px auto;
    padding: 100px 10px;

    img {
        width: 300px;
        border-radius: 10px;
    }
`

export const textContainer = styled.div`
    display: flex;
    align-items: center;
`

export const MainColorBg = styled.div`
    background-color: ${variables.mainColor};
    margin: 60px auto;

    & p {
        color: #fff;
    }
`

export const PartnersTitle = styled.h3`
    color: ${(props) => props.theme.cardTxtColor};
    font-size: 32px;
    text-align: center;
`

export const PartnersList = styled.ul`
    margin: 40px auto 200px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    justify-content: center;
`

export const PartnerContainer = styled.li`
    width: 300px;
    height: 100px;
    text-align: center;
    margin-top: 60px;

    & img {
        height: 100%;
    }
`