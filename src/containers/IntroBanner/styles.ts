import styled from "styled-components";
import variables from "../../styles/colors";

export const IntroBanner = styled.section`
    margin: 0 auto;
    position: relative;
    height: 768px;
    transform: translateY(-40px);

    @media (max-width: 767px) {
            height: auto;
            transform: translateY(-90px);
        }

    & img {
        height: 100%;
        position: absolute;
        z-index: 2;

        @media (max-width: 767px) {
            width: 50%;
            height: fit-content;
            display: block;
            margin: 0 auto;
            position: relative;
            transform: translateY(50px);
        }
    }
`

export const BannerMsg = styled.div`
    background-color: ${variables.mainColor};
    padding: 124px 90px;
    width: 100%;
    font-size: 62px;
    color: #fff;
    border-radius: 30px 200px 30px 200px;
    position: absolute;
    bottom: 0;
    display: grid;
    grid-template-columns: 360px auto;

    @media (max-width: 767px) {
            padding: 40px 50px;
            padding-top: 100px;
            font-size: 7vw;
            text-align: center;
            position: relative;
            display: block;
            border-radius: 30px 80px 30px 80px;
            transform: translateY(-50px);

            & div {
                display: none;
            }
        }
`