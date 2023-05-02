import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Section from "../../Component/Section";
import Card from "../../Component/Card";
import Footer from "../../Component/Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Section>
        <Section title="Blog Menjelajah" className="w-2/3">
          <div>
            <div className="border w-[970px] h-[460px]">text</div>
            <div className="flex gap-8 mt-8">
              <Card type="explore" to="/" title="Discover New Experiences" />
              <Card type="explore" to="/" title="Discover New Experiences" />
            </div>
          </div>
        </Section>
        <Section title="Our Recommendation" className="w-1/3">
          <div className="flex flex-col gap-10">
            <Card
              type="hero"
              minutes="5 MIN READ"
              place="International"
              title="5 Recommends places to go in 2023 as a couple"
              description="Santorini, Greece: With its stunning views, romantic sunsets, and charming whitewashed buildings..."
            />
            <Card
              type="hero"
              minutes="10 MIN READ"
              place="Local"
              title="Welcome Heads of Delegation of the G20 Summit"
              description="Malesuada vitae ante erat, donec gravida malesuada mus condimentum risus..."
            />
            <Card
              type="hero"
              minutes="12 MIN READ"
              place="International"
              title="4 Days in Fukuoka, Japan: how to eat your way through the city"
              description="Fukuoka is known for its delicious food, and there are many local specialties that you should try during your four-day stay in the city..."
            />
            <Card
              type="hero"
              minutes="10 MIN READ"
              place="Local"
              title="7 Things to do in Bromo, Indonesia"
              description="Bromo is a beautiful region in Indonesia with a variety of exciting activities and breathtaking landscapes. Here are seven things to do in..."
            />
            <Card
              type="hero"
              minutes="10 MIN READ"
              place="Local"
              title="7 Affordable Travel Destinations for Budget-Conscious Wanderers"
              description="Thailand: Thailand is an affordable destination with a rich culture, beautiful beaches, and delicious food..."
            />
          </div>
        </Section>
      </Section>
      <Footer />
    </div>
  );
};

export default Blog;
