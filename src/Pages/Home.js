import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Menubar from '../components/Menubar'
import PopularCategories from '../components/PopularCategories'
import PopularCategoriesRendered from '../components/PopularCategoriesRendered'

const Home = () => {

    return (
        <div>
            <Announcement/>
            {/* <Navbar  /> */}
            <Menubar/>
            <Slider/>
            <PopularCategoriesRendered/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home