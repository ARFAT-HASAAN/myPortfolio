import React from 'react';
import Aboute from '../Aboute';
import Banner from '../Banner';
import Blog from '../Blog';
import Contact from '../Contact';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Skills from '../Skills';
import Work from '../Work';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <Banner></Banner>
            <Aboute></Aboute>
            <Skills></Skills>
            <Work></Work>
            <Contact></Contact>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;