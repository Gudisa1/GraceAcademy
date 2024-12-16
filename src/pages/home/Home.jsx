import React from "react";
import Banner from "../../components/Banner/Banner";
import Service from "../../components/Service/Service";
import Course from "../../components/course/Course";
import Footer from "../../components/footer/Footer";
import Faq from "../../components/Faq/Faq";
const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <Course />
      <Faq />
    </>
  );
};

export default Home;
