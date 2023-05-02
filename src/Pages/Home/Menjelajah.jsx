import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Card from "../../Component/Card";
import Section from "../../Component/Section";
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandReddit,
} from "@tabler/icons-react";
import Hero from './components/Hero';
import Footer from "../../Component/Footer/Footer";


const Menjelajah = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section
        useElement
        title="Explore Different Cultures Across the Globe 🌎"
        description="Expand your Worldview by enjoy various kinds of culture, diversity, culinary and natural beauty that will make you fall in love"
      >
        <Card
          type="explore"
          to="/"
          title="Discover New Experiences"
          description="Get ready to discover new experiences whether their culture habits, culinary, or how they live."
        />
        <Card
          type="explore"
          to="/"
          title="Discover New Experiences"
          description="Get ready to discover new experiences whether their culture habits, culinary, or how they live."
        />
        <Card
          type="explore"
          to="/"
          title="Discover New Experiences"
          description="Get ready to discover new experiences whether their culture habits, culinary, or how they live."
        />
      </Section>
      <Section
        className="bg-[#F7F8FB]"
        title="Join our community!"
        useArrows
        description="Every travelers loves to make new friend, that’s why we give you community in case you need travelers buddy 😀"
      >
        <Card type="feedback" />
        <Card type="feedback" />
        <Card type="feedback" />
        <Card type="feedback" />
        <Card type="feedback" />
        <Card type="feedback" />
      </Section>
      <Section title="Popular Destination" useArrows>
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
        <Card
          type="destination"
          to="/"
          title="Discover New Experiences"
          place="Istanbul, Turkey"
          rating="4.5"
        />
      </Section>
      <Section
        title="Join our community!"
        description="Every travelers loves to make new friend, that’s why we give you community in case you need travelers buddy 😀"
      >
        <Card
          type="community"
          icon={<IconBrandReddit className="mb-4" size={32} />}
          description="Reddit Users Are Joined!"
          max={320}
        />
        <Card
          type="community"
          icon={<IconBrandFacebook className="mb-4" size={32} />}
          description="People are joined in Facebook!"
          max={80}
        />
        <Card
          type="community"
          icon={<IconBrandInstagram className="mb-4" size={32} />}
          description="Instagram users are joined!"
          max={480}
        />
        <Card
          type="community"
          icon={<IconBrandDiscord className="mb-4" size={32} />}
          description="People are talking on Discord!"
          max={40}
        />
      </Section>
      <Footer/>
    </div>
  );
};

export default Menjelajah;
