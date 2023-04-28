import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Component/Navbar/Navbar'
import './Menjelajah.css'

import img2 from '../../Assets/Rectangle 15.png'
import img3 from '../../Assets/Rectangle 16.png'
import img4 from '../../Assets/Rectangle 17.png'
// import img5 from '../../Assets/Rectangle 9.png'
// import img6 from '../../Assets/Rectangle 10.png'
// import img7 from '../../Assets/Rectangle 11.png'
// import img8 from '../../Assets/Rectangle 12.png'
import Highlight from '../../Component/Highlight/Highlight'
import {TbBrandInstagram, TbBrandTwitter ,TbBrandFacebook, TbBrandReddit, TbBrandDiscord,} from 'react-icons/tb'
import Explore from '../../Component/Explore/Explore'
import Card from '../../Component/Card/Card'

import CardComunity from '../../Component/CardComunity/CardComunity'
const Menjelajah = () => {
  return (
    <div className='container'>
        <Navbar/>
        <div className='content'>
          <div className='leftSide'>
            <h5>Welcome to Menjelajah 👋</h5>
            <h1>Title Text Goes Here And Kwak Kwak Gwak</h1>
            <p style={{color:'#4E5568', fontWeight:'600'}} className='titleDesc' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perferendis recusandae sapiente expedita numquam itaque facilis laborum totam maiores eaque consequuntur adipisci, nulla voluptatum reprehenderit. Inventore quis distinctio molestiae neque.</p>
            <div className='searchDestination'>
              <input type="search" placeholder='Discover your next escape...' />
              <button type='submit'>Find Destination</button>
            </div>
            <div className='highlightBlog'>
              <Highlight nama="International" title="5 Recommends places to go in 2023 as a couple" desc="Lorem ipsum dolor sit amet consectetur. Tempor nec imperdiet ornare augue in."/>
              <Highlight nama="Local" title="Pendet Dance Performance to Welcome Heads of Delegation of the G20 Summit" desc="Malesuada vitae ante erat, donec gravida malesuada mus condimentum risus."/>
            </div>
            <div className='socialMedia'>
              <Link><TbBrandInstagram/></Link>
              <Link><TbBrandTwitter/></Link>
              <Link><TbBrandFacebook/></Link>
            </div>
          </div>
          <aside>
            
          </aside>
        </div>
        <div className='explore'>
          <h3>Explore Different Cultures Across the Globe 🌎</h3>
          <p>Expand your Worldview by enjoy various kinds of culture, diversity, culinary and natural beauty that will make you fall in love</p>
        </div>
        <div className='exploreContent'>
          <Explore 
          gambar={img2} 
          title="Discover New Experiences" 
          desc="Get ready to discover new experiences whether their culture habits, culinary, or how they live."
          />
          <Explore 
          gambar={img3} 
          title="180+ Countries Destination" 
          desc="Over 180 countries available to be visited by YOU! Get ready to take the journey on new level."
          />
          <Explore 
          gambar={img4} 
          title="Taste on Traditional Food" 
          desc="Enthusiast on others culinary? We have gathered all the recommendation of traditional foods just for you."
          />
        </div>
        <div className='feedbackContainer'>
          <div>
            <h1>Everyone Loves It!</h1>
          </div>
          <div className='feedback'>
            <Card 
            comment='“I recently used the virtual tour product for culture seekers and I have to say, it was an incredible experience. I was able to explore historical landmarks from all over the world without leaving my house.”'
            nama='Sarah Azhar'
            job='Traveler '/>
            <Card 
            comment='“I recently used the virtual tour product for culture seekers and I have to say, it was an incredible experience. I was able to explore historical landmarks from all over the world without leaving my house.”'
            nama='Sarah Azhar'
            job='Traveler '/>
            <Card 
            comment='“I recently used the virtual tour product for culture seekers and I have to say, it was an incredible experience. I was able to explore historical landmarks from all over the world without leaving my house.”'
            nama='Sarah Azhar'
            job='Traveler '/>
          </div>
        </div>
      {/* Popular Destination */}
        <div>
          <div>
            <h1>Popular Destination</h1>
          </div>
        </div>
      {/* Join Our Community */}
        <div className='community'>
          <div className='communityTitle'>
            <h1>Join Our Community</h1>
            <p>Every travelers loves to make new friend, that’s why we give you community in case you need travelers buddy 😀</p>
          </div>
          <div className='communityContent'>
            <div className='cardComunity'>
              <TbBrandReddit/>
              <CardComunity
              jumlah = "340 K"
              desc = "Reddit users are joined!"
              />
            </div>
            <div className='cardComunity'>
              <TbBrandFacebook/>
              <CardComunity
              jumlah = "80 K"
              desc = "People are joined in Facebook!"
              />
            </div>
            <div className='cardComunity'>
              <TbBrandInstagram/>
              <CardComunity
              jumlah = "480 K"
              desc = "Instagram users are joined!"
              />
            </div>
            <div className='cardComunity'>
              <TbBrandDiscord/>
              <CardComunity
              jumlah = "40 K"
              desc = "People are talking on Discord!"
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menjelajah