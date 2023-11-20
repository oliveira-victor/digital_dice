import styled from "styled-components";
import variables from "../../styles/variables";

export const IntroBanner = styled.section`
    width: 98%;
    margin: 0 auto;
    position: relative;
    height: 768px;
    transform: translateY(-160px);

    & img {
        height: 100%;
        position: absolute;
        z-index: 2;
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
`