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
    <style>
    .container {}

    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 40px;
    }

    .column {}

    .img-wrapper {}

    .txt-wrapper {
        margin-top: 20px;
    }

    .image {
        width: 400px;
        height: 400px;
    }

    .text {
        font-size: large;
    }

    @media only screen and (max-width: 768px) {
        .wrapper{
            flex-direction: column;
            align-items: center;
        }
        .image{
            width: 300px;
            height: 300px;
        }
        .txt-wrapper{
            margin-top: 4px;
            margin-bottom: 20px;
        }

    }
</style>
<div class="container">
    <div class="wrapper">
        <div class="column">
            <div class="img-wrapper">
                <img class="image"
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nike-running-shoe-buying-guide-refresh-lead-64517574cc201.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*" />
            </div>
            <div class="txt-wrapper">
                The Most Iconic Gifts
            </div>
        </div>
        <div class="column">
            <div class="img-wrapper">
                <img class="image"
                    src="https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1670326183" />
            </div>
            <div class="txt-wrapper">
                Dunk The Halls
            </div>
        </div>
        <div class="column">
            <div class="img-wrapper">
                <img class="image"
                    src="https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=false" />
            </div>
            <div class="txt-wrapper">
                Winter Running Essentials
            </div>
        </div>

    </div>
</div>
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