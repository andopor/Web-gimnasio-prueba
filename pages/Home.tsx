import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Schedule from '../components/Schedule';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

import TechReference from '../components/TechReference';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <Schedule />
            <Pricing />
            <Contact />
            <TechReference />
        </>
    );
};

export default Home;
