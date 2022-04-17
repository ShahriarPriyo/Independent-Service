import React from 'react';
import Services from '../Services/Services';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Extra from './Extra/Extra';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Extra></Extra>
            <Footer></Footer>
        </div>
    );
};

export default Home;