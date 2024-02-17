import AddCartMsg from "../../components/AddCartMsg"
import GamesSection from "../../containers/GamesSection"
import Hero from "../../containers/Hero"
import Highlights from "../../containers/Highlights"
import InitialBanner from "../../containers/IntroBanner"

import { ContentWrapper } from "../../styles"

const Home = () => {
    return (
        <>
            <Hero />
            <ContentWrapper>
                <AddCartMsg />
                <InitialBanner />
                <Highlights />
                <GamesSection />
            </ContentWrapper>
        </>
    )
}

export default Home