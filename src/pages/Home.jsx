import Hero from "../components/Hero.jsx";
import Info from "../components/Info.jsx";
import Faq from "../components/Faq.jsx";
import About from "../components/About.jsx"
import React from 'react'

const Home = () => {
  return (
    <>
     <Hero/>
     <hr className="h-[1px] bg-black w-10/12 mx-auto my-5"></hr>
    <Info />
     <hr className="h-[1px] bg-black w-10/12 mx-auto my-5"></hr>
     <Faq />
     <hr className="h-[1px] bg-black w-10/12 mx-auto my-5"></hr>
    <About/>
    </>
   
  )
}

export default Home
