import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import Header from '../components/Header'
import ProductSlider from '../components/ProductSlider'
import { getBusinessId, getBusinessName, getDiscountedProducts, getLatestProducts, getPopularCategories, getPopularProducts } from '../api/utils'
import { BusinessData } from '../theme/BusinessWrapper'
import styled from 'styled-components'
import { useEffect } from 'react'
import { categorySliderBuilder } from '../theme/HomepageBuilder/CategorySliderBuilder'
import { productSliderBuilder } from '../theme/HomepageBuilder/ProductSliderBuilder'
import { SectionFactory, SliderFactory } from '../theme/HomepageBuilder/SectionFactory'
import { customSectionBuilder } from '../theme/HomepageBuilder/CustomSectionBuilder'

const HomePageWrapper = styled.div`

`

const Home = () => {
    const businessData = BusinessData()

    const sections = businessData.settings.home_page.sections

    const html = `
    `

    console.log(btoa(html));

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