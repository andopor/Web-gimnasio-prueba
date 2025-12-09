import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CycleSchedule from '../components/CycleSchedule';
import Contact from '../components/Contact';

import TechReference from '../components/TechReference';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <CycleSchedule />
            <Contact />
            <TechReference />
        </>
    );
};

export default Home;
