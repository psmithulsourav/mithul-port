import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'


type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{ opacity:1}}
    transition={{duration:2.5}}    
    className="max-w-[2000px] justify-center xl:space-y-0 min-h-screen mx-auto items-center flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 
    ">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
         <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>
         <div className="grid grid-cols-4 gap-5">
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
         </div>
   
    </motion.div>
  )
}