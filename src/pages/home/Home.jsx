import React from 'react';
import Banner from '../../components/Banner/Banner';
import Service from '../../components/Service/Service';
import Course from '../../components/course/Course';
import Footer from '../../components/footer/Footer';
import Faq from '../../components/Faq/Faq';
import LocationSection from '../../components/Location/LocationSection';
import LearningProcess from '../../components/Learning/LearningProcess';
const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <Course />
      <LearningProcess />
      <Faq />
      <LocationSection />
    </>
  );
};

export default Home;
