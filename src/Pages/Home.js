import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Menubar from '../components/Menubar'
import Categories from '../components/Categories'
import { categories, popularProducts } from '../data'
import NavbarMobile from '../components/NavbarMobile'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

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
            <Header/>
            {/* <Announcement />
            <NavbarMobile  /> */}
            {/* <Menubar /> */}
            <Slider />
            <Categories categories={popularCategories} />
            <Products products={products} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home