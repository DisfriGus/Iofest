import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Section from '../../Component/Section'
import Card from "../../Component/Card";
import Footer from '../../Component/Footer/Footer';

const Exploration = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col'>
        <Section>
          <div className='flex items-center flex-col w-full sm:pt-[72px] bg-bgExploration bg-no-repeat text-white pb-[8%] rounded-3xl' >
              <h1 className='heading1 text-white sm:mb-4 '>Lets Explore</h1>
              <p className='subheading mb-[88px] text-white'>Search any destination you prefer.</p>
              <div className='flex items-center gap-12'>
                <input type="text" placeholder='Lets Explore' className='w-[760px] bg-transparent border-b-2 border-white outline-none' />
                <button className='py-4 px-[52px] bg-[#2257DF] rounded-lg'>Search</button>
              </div>
          </div>
        </Section>
        <Section title = "Popular Search" useArrows>
        <Card
          type="destination"
          to="/"
          title="Discover New Experiences"
          place="Istanbul, Turkey"
          rating="4.5"
        />
        <Card
          type="destination"
          to="/"
          title="Discover New Experiences"
          place="Istanbul, Turkey"
          rating="4.5"
        />
        <Card
          type="destination"
          to="/"
          title="Discover New Experiences"
          place="Istanbul, Turkey"
          rating="4.5"
        />
        <Card
          type="destination"
          to="/"
          title="Discover New Experiences"
          place="Istanbul, Turkey"
          rating="4.5"
        />
        </Section>
      </div>
      <Footer/>
    </div>
  )
}

export default Exploration