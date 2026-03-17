import React from 'react';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import Hero3 from '../components/Hero3';
// import Features from '../components/Features';
// import ComparisonTable from '../components/ComparisonTable';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            {/* <Features />
            <ComparisonTable /> */}
            <Hero2 />
            <Hero3 />
        </>
    );
};

export default Home;
