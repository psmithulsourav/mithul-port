import { motion } from 'framer-motion'
import React, { Component } from 'react'

type Props = {}

type State = {}

class Expcard extends Component<Props, State> {
  state = {}

  render() {
    return (
      <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:[w-600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
        initial={{y:-100,opacity:0,}}
        transition={{duration:2.5}}
        viewport={{once:true}}
        className="w-32 h-32 rounded-full xl:h-[200px] object-cover object-center "
        src="/pic.png"
         />
         <div className="px-0 md:px-14">
            <h4 className="text-4xl font-light">Ceo of my inc</h4>
            <p className="text-2xl mt-1 text-bold">my inc</p>
            <div className="flex space-x-2 my-2">
            {/*  <img className="h-10 w-10 rounded-full"
              src="" />
    */}</div>
            <p className="uppercase py-5 text-gray-300">Started to work ... ended...</p>
         <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summarry</li>
            <li>Summarry</li>
            <li>Summarry</li>
            <li>Summarry</li>
         </ul>
         </div>
        </article>
    )
  }
}

export default Expcard