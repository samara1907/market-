import React from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import CardList from '../CardList';
import Footer from '../Footer/Footer';

const Home =()=>{
    return(
        <div>
            <Navbar/>
            <Slider/>
            <CardList/>
            <Footer/>
        </div>
    )
}

export default Home;