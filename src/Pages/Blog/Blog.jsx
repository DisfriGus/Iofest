import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Section from '../../Component/Section'
import Card from '../../Component/Card'
import Footer from '../../Component/Footer/Footer'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <Section>
          <Section title="Blog Menjelajah" className='w-2/3'>
            <div>
              <div className='border w-[970px] h-[460px]'>
                text
              </div>
              <div className='flex gap-8 mt-8'> 
                <Card
                  type="explore"
                  to="/"
                  title="Discover New Experiences"
                />
                <Card
                  type="explore"
                  to="/"
                  title="Discover New Experiences"
                />
              </div>
            </div>
            
          </Section>
          <Section title="Our Recommendation" className="w-1/3">
              <div className='flex flex-col gap-10'>
                <Card type="hero"/>
                <Card type="hero"/>
                <Card type="hero"/>
                <Card type="hero"/>
                <Card type="hero"/>
              </div>
          </Section>
        </Section>
        <Footer/>
    </div>
  )
}

export default Blog