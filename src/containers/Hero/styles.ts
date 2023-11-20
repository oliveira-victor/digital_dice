import styled from "styled-components";
import heroImg from '../../assets/hero.webp'

export const HeroImg = styled.section`
    background-image: url(${heroImg});
    background-size: cover;
    width: 100%;
    height: 60vh;

    @media (max-width: 767px) {
        height: 70vh;
    }
`