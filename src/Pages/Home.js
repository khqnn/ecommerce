
import Footer from '../components/Footer'
import Header from '../components/Header'
import { BusinessData } from '../theme/BusinessWrapper'
import styled from 'styled-components'
import { SectionFactory } from '../theme/HomepageBuilder/SectionFactory'

const HomePageWrapper = styled.div`

`

const Home = () => {

    /**
     * Headings factory
     * generate 2 to 3 custom sections
     * 
     */

    const businessData = BusinessData()

    const sections = businessData.settings.home_page.sections

    return (
        <div>
            <Header />
            <HomePageWrapper>
                {sections.map((section)=>(
                    (new SectionFactory(section)).init(businessData)
                ))}
            </HomePageWrapper>
            <Footer />
        </div>
    )
}

export default Home