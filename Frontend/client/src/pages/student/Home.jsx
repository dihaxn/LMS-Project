import React from 'react';
import Hero from "../../component/student/Hero.jsx";
import Companies from "../../component/student/Companies.jsx";
import CoursesSection from "../../component/student/CoursesSection.jsx";
import TestimonialsSelection from "../../component/student/TestimonialsSelection.jsx";

const Home = () => {
    return (
        <div className='flex flex-col items-center space-y-7 text-[15px] leading-[21px] text-center'>
            <Hero/>
            <Companies/>
            <CoursesSection/>
            <TestimonialsSelection/>
        </div>
    );
};

export default Home;