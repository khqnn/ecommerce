
import { getPopularCategories, getPopularProducts } from '../api/utils'
import CardList from '../components/CardList'
import CardSlider from '../components/CardSlider'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import ProductSlider from '../components/ProductSlider'
import Features from '../components/Sections/Features'
import Slider from '../components/Slider'
import { BusinessData } from '../theme/BusinessWrapper'


const Home = () => {

    /**
     * Headings factory
     * generate 2 to 3 custom sections
     * 
     */

    const businessData = BusinessData()
    const slides = businessData.settings

    const popular_categories = getPopularCategories(businessData.id)
    const popular_products = getPopularProducts(businessData.id)

    const advantages = [
        {
            id: 1,
            title: 'Screen Repair',
            icon: 'https://images.samsung.com/is/image/samsung/assets/pk/offer/all-deals/repair-icon1.jpg?$36_36_JPG$',
            desc: 'Get up to 100% off phone screen repairs when you purchase any smartphone from Samsung Online Shop.',
            path: '/'
        },
        {
            id: 2,
            title: 'Free Delivery',
            icon: 'https://images.samsung.com/is/content/samsung/assets/pk/smartphones/socialimage/icons/Truck.svg?$36_36_IMG$',
            desc: 'Samsung.com works with professional logistic partners to deliver your order directly.',
            path: '/'
        },
        {
            id: 3,
            title: 'Warranty',
            icon: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/icons/warranty.png?$36_36_PNG$',
            desc: 'Find out everything you need to know about your service and warranty',
            path: '/'
        },
        {
            id: 4,
            title: 'Free Installation',
            icon: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/icons/free-installation.png?$36_36_PNG$',
            desc: 'Items that require installation such as washing machines and refrigerators are installed by our experts.',
            path: '/'
        }
    ]

    const offerItems = [
        {
            id: 1,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/blessed-friday/480x270.jpg?$ORIGIN_JPG$',
            title: 'Galaxy S22 Ultra',
            desc: '',
            path: '/'
        },
        {
            id: 2,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/ce-tiles-adapt/Frame_480x270.jpg?$ORIGIN_JPG$',
            title: 'Global No.1 TV for 17 years',
            desc: 'Enjoy razor-sharp images, ultra-bright output and insanely crisp colors',
            path: '/'
        },
        {
            id: 3,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/ce-tiles-adapt/Freestyle_480x270.jpg?$ORIGIN_JPG$',
            title: 'The Freestyle',
            desc: 'A smart theater and portable projector that projects up to a 100-inch screen',
            path: '/'
        },
        {
            id: 4,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/SESAR_S23_Ultra_480x270.png?$ORIGIN_PNG$',
            title: 'Galaxy S23 Ultra',
            desc: '',
            path: '/'
        },
        {
            id: 5,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/ce-tiles-adapt/SEPAK_Frame_480x270-1.jpg?$ORIGIN_JPG$',
            title: 'The Frame',
            desc: 'Artwork, shows or memories. Watch what inspires you like a framed piece of art',
            path: '/'
        },
        {
            id: 6,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/B5_SEPAK_470x270-11.jpg?$ORIGIN_JPG$',
            title: 'Galaxy Z Flip5',
            desc: '',
            path: '/'
        },
        {
            id: 7,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/Q5_SEPAK_470x270-1.jpg?$ORIGIN_JPG$',
            title: 'Galaxy Z Fold5',
            desc: '',
            path: '/'
        }
    ]

    const supportItems = [
        {
            id: 1,
            title: 'Warranty',
            icon: 'https://images.samsung.com/is/content/samsung/assets/pk/smartphones/socialimage/icons/Warranty-large.svg?$36_36_IMG$',
            desc: 'Register your product and find out whats covered',
            path: '/'
        },
        {
            id: 2,
            title: 'Support',
            icon: 'https://images.samsung.com/is/content/samsung/assets/pk/smartphones/socialimage/icons/Help.svg?$36_36_IMG$',
            desc: 'Find the support you need for your Samsung product, from tips and manuals to troubleshooting and software updates',
            path: '/'
        },
        {
            id: 3,
            title: 'Samsung Account',
            icon: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/icons/contact.png?$36_36_PNG$',
            desc: 'Enjoy access to Samsung services and applications',
            path: '/'
        }
    ]

    const helpMeChoose = [
        {
            id: 1,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/04_Help_me_choose_PC_07.jpg?$330_440_PNG$',
            title: 'Home Appliances Buying Guide'
        },
        {
            id: 2,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/Main_03_help_me_choose_PC_04_330x440.jpg?$330_440_PNG$',
            title: 'Take the quiz to find your perfect TV'
        },
        {
            id: 3,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/Main_03_help_me_choose_PC_06_330x440.jpg?$330_440_PNG$',
            title: 'Pick the fridge thats best for you'
        },
        {
            id: 4,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/Main_03_help_me_choose_PC_05_330x440.jpg?$330_440_PNG$',
            title: 'Find your ideal Samsung TV'
        },
        {
            id: 5,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/Main_03_help_me_choose_PC_03_330x440.jpg?$330_440_PNG$',
            title: 'Compare up to 3 Tablets'
        }
    ]


    return (
        <div>
            <Header />
            <Slider params={slides} />
            <Features />

            <CardList id="offer" items={offerItems} heading="Our best offers" />
            <CardSlider id="support" items={advantages} heading="Advantages" />


            <Categories categories={popular_categories} heading="Popular Categories" />
            <ProductSlider products={popular_products} heading="Popular Products" />

            <CardSlider id="image" items={helpMeChoose} heading="Help me choose" count={5} />


            <CardList id="support" items={supportItems} heading="Support features" />

            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home