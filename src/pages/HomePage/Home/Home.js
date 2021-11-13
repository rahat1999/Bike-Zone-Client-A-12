import React from 'react';
import AllReview from '../AllReview/AllReview';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import OurServices from '../OurServices/OurServices';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurServices></OurServices>
            <AllReview></AllReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;