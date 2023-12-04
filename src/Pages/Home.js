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


const HomePageWrapper = styled.div`

`

const Home = () => {
    const businessData = BusinessData()
    const businessId = businessData.id

    const popularProducts = getPopularProducts(businessId)
    const discountedProducts = getDiscountedProducts(businessId)
    const latestProducts = getLatestProducts(businessId)
    const popularCategories = getPopularCategories(businessId)

    return (
        <div>
            <Header />
            <HomePageWrapper>
                <Categories categories={popularCategories} />
                <Products products={popularProducts} heading={"POPULAR PRODUCTS"} />
            </HomePageWrapper>

            <Slider />
            <HomePageWrapper>

                <ProductSlider heading={"LATEST PRODUCTS"} products={latestProducts} />
                <ProductSlider heading={"DISCOUNTED PRODUCTS"} products={discountedProducts} />
            </HomePageWrapper>
            <Newsletter />

            <Footer />
        </div>
    )
}

export default Home