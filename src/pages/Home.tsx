import React from 'react';
import Banner from '../components/partials/Banner';
import Footer from '../components/layout/Footer';
import Hero from '../components/layout/Hero';
import Newsletter from '../components/partials/Newsletter';
import ProudProducts from '../components/partials/ProudProducts';
import TrendingSlider from '../components/partials/TrendingSlider';
import Banner1 from '../assets/img/banner/banner1.jpg';
import Banner2 from '../assets/img/banner/banner2.jpg';
import '../styles/Banner.css';

const Home = () => {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        className="banner-container"
        title="Creative harmonious living"
        text="Our products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      <TrendingSlider />
      <Banner
        className="banner-container-reverse"
        title="Comfortable & Elegant Living"
        text="Our products are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />

      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
