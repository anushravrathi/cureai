import React from 'react'
import Navbar from '../Components/Navbar'
import img1 from "../Images/german.png"
import img2 from "../Images/books.png"
import img3 from "../Images/english.png"
import img4 from "../Images/icon.png"
import FAQ from '../Routes/Faq'
import Footer from '../Sections/Footer'
import AboutSection from '../Components/AboutSection'
const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className='w-screen h-[35vh] py-12 px-16 flex flex-row'>
      <div className="w-[100%]  text-[80px] leading-[80px] font-sans text-center text-black font-extrabold"> Who we are and<br/> what we do</div>
      <div className="w-[100%] ">
        <p className='text-[18px] text-start text-[#797878]'>Welcome to Cure.ai, We harness the potential of cutting-edge AI technology to revolutionize disease detection. Our platform analyzes vast datasets with precision, enabling early diagnosis and personalized risk assessment. With a commitment to proactive healthcare, we empower individuals and healthcare providers to make informed decisions and take timely action for better health outcomes.</p>
        <button className=" text-white  rounded py-2 px-6 md:px-12 transition-colors mt-6 duration-300">Search Services</button>

      </div>

    </div>

    <div className="w-screen px-[180px] mb-10 gap-10 h-auto  ">
      <div className='w-[100%] flex flex-row gap-2 mb-2'>
        <div className='h-[400px]  w-[65%] overflow-hidden'><img src={img1}/></div>
        <div className='h-[400px]  w-[35%] overflow-hidden'><img src={img2}/></div>
      </div>
      <div className='w-[100%] flex flex-row gap-2'>
        <div className='h-[350px]  w-[35%] overflow-hidden'><img src={img3}/></div>
        <div className='h-[350px]  w-[65%] overflow-hidden'><img src={img4}/></div>
      </div>
      <div></div>

    </div>

    <AboutSection/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default AboutUs