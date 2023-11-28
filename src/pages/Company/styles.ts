import styled from "styled-components";

import companyBanner from '../../assets/company.webp'

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
    }

    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        padding: 0 10px;
    }
`

export const secondWrapper = styled(firstWrapper)`
    grid-template-columns: 30% auto;
    margin: 100px auto;
`

export const textContainer = styled.div`
    display: flex;
    align-items: center;
`