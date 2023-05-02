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
import Hero from "./components/Hero";
import Footer from "../../Component/Footer/Footer";
import feedbacks from "../../Data/Feedback.json";
import destionations from "../../Data/Destination.json";
import explorations from "../../Data/Explore.json";
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
        {explorations.explore.map((val) => (
          <Card
            type="explore"
            to="/blog"
            src={val.image.url}
            title={val.title}
            description={val.description}
          />
        ))}
      </Section>
      <Section
        className="bg-[#F7F8FB]"
        title="Join our community!"
        useArrows
        description="Every travelers loves to make new friend, that’s why we give you community in case you need travelers buddy 😀"
      >
        {feedbacks.feedback.map((val) => (
          <Card
            type="feedback"
            src={val.image.url}
            message={val.message}
            name={val.name}
            status={val.job}
          />
        ))}
      </Section>
      <Section title="Popular Destination" useArrows>
        {destionations.destination.map((val) => (
          <Card
            type="destination"
            to={`/place/${val.id}`}
            src={val.image.url}
            title={val.title}
            place={val.place}
            rating={val.rating}
          />
        ))}
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
      <Footer />
    </div>
  );
};

export default Menjelajah;
