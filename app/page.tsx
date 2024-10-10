'use client'

import { motion } from "framer-motion";
import CompanyServices from "./Components/Home/CompanyServices";
import WelcomeText from "./Components/Home/WelcomeText";
import VideoComponent from "./Components/VideoComponent/VideoComponent";

export default function Home() {
  return (
    <div>
     
      <motion.div
        initial={{ opacity: 0, y: -100 }}  
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}       
        viewport={{ amount: 0.5 }}         
      >
        <VideoComponent
          videoSrc="/videos/banner.mp4"
          demoname="Elevating Style, Comfort, and Elegance for Modern Living"
        />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, x: -100 }}   
        whileInView={{ opacity: 1, x: 0 }}  
        transition={{ duration: 1 }}        
      >
      
        <CompanyServices/>
      </motion.div>


      
      <motion.div
        initial={{ opacity: 0, y: 100 }}  
        whileInView={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1 }}        
        viewport={{ amount: 0.5 }}          
      >
        <WelcomeText />
      </motion.div>
    </div>
  );
}
