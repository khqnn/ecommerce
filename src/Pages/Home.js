import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import { categories, popularProducts } from '../data'
import Header from '../components/Header'
import ProductSlider from '../components/ProductSlider'

const Home = () => {


    /**
     * Fetch popular categories
     */
    const popularCategories = categories

    /**
     * Fetch popular products
     */

    const products = popularProducts

    return (
        <div>
            <Header />
            <Slider />
            <Categories categories={popularCategories} />
            {/* <CategorySlider categories={popularCategories} /> */}

            {/* <Products products={products} /> */}

            <ProductSlider heading={"POPULAR PRODUCTS"} products={products} />
            <ProductSlider heading={"DISCOUNTED PRODUCTS"} products={products} />
            <Newsletter />

            <Footer />
        </div>
    )
}

export default Home