import React from 'react';
import Hero from '../Components/Homepage/Hero';
import AllBooks from '../Components/Homepage/AllBooks';


const Home = () => {
    return (
        <>
            <header>
                <Hero/>
                <AllBooks/>
            </header>
        </>
    );
};

export default Home;