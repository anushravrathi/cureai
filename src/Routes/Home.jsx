import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Sections/Header'
import images from '../../public/images/Header.png'
import images1 from '../../public/images/1.png'
import images2 from '../../public/images/2.png'
import images3 from '../../public/images/3.png'
import Midsection from '../Sections/Midsection'
import Testimonial from '../Sections/Testimonial'
import Subscrive from '../Sections/Subscrive'
import Footer from '../Sections/Footer'
import Cardbox from '../Sections/Cardbox'
import About from '../Sections/About'
  const data = [
    {
    title: "Detecting Heart disease with help of AI",
    para:"We're dedicated to using cutting-edge AI technology to revolutionize the detection of heart disease. Heart disease remains one of the leading causes of mortality worldwide, but with early detection, its impact can be significantly reduced.",
    link:"kkk",
    img:images1,
    leftImage:true,
  },
  {
    title: "Detecting Alzheimer's with AI",
    para:"We're leveraging the power of Artificial Intelligence (AI) to advance the early detection of Alzheimer's disease. Our AI-driven platform analyzes a variety of data, including cognitive assessments, brain imaging scans, and genetic markers, to identify individuals at risk of developing Alzheimer's.",
    link:"kkk",
    img:images2,
    leftImage:false,
  },
  {
    title: "Detecting Infectious Disease with AI",
    para:"We're committed to utilizing advanced technology to revolutionize the detection of infectious diseases. From viral outbreaks to bacterial infections, early detection is essential for controlling the spread of infectious diseases and saving lives.",
    link:"kkk",
    img:images3,
    leftImage:true,
  },
]

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Midsection data={data[0]}/>
    <Midsection data={data[1]}/>
    <Midsection data={data[2]}/>
    <Cardbox/>
    <Testimonial/>
    <Subscrive/>
    <Footer/>

    </>
  )
}

export default Home