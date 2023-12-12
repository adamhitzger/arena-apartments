"use client";

import { BedSingle} from "lucide-react";
import { motion } from "framer-motion";

export default function Herobanner(){
    return(
      <motion.div className="p-8 bg-cover bg-[url('/img/bg-hero.jpg')] w-full h-full " 
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
      >
      <div className=" w-full 2xl:pt-[25%] md:pt-[50%]"></div>
      {/*Wrapper */}
      <div className="flex flex-wrap ">
      {/*Field */}
      <div className="pb-6 lg:w-4/6 lg:pr-5 2xl:w-4/5 2xl:pr-10">
        <fieldset className="border-white border-[3px] rounded-[20px]">
          <legend className="mx-auto p-3 rounded-full border-white border-[3px] bg-transparent text-white font-bold text-2xl">Arena Apartments</legend>
          <div className=" w-full 2xl:pt-[5%] "></div>
          <div className="m-10 2xl:mx-20">
          <h1 className=" text-3xl 2xl:text-5xl text-white font-normal ">
          Oasis Not Just For Table Tennis:
              <span className="underline underline-offset-4">
                New 
                Accommodation 
                </span> <br/>
                in Vysočina
                
              </h1> 
          
          <div className="mt-10 2xl:my-20">
            <p className="text-white text-justify text-xl font-normal 2xl:text-xl lg:text-lg">We are in Havlíčková Brod in Vysočina, 23 km north of Jihlava by the river Sázava. The city is a key transport hub in the Czech Republic. The accommodation is built from the premises of the former agricultural school in Havlíčková Brod. It is adjacent to the Birrel Arena, which is the home of the 6-time champion of the Czech Republic in table tennis. The area is often used by the Czech national team and for the preparation of HB Ostrov teams and young players in the Regional Center for Talented Youth.</p>
          </div>
          </div>
        </fieldset>
      </div>
      {/*Field */}
      {/*Card*/}
      <div className='rounded-[20px] md:m-auto lg:w-2/6 2xl:w-1/5 bg-black text-white px-8 py-5'>
          <div className='flex justify-between'>
            <div className='font-bold text-3xl'>
              40+
            </div>
            <div >
              <BedSingle size={36} strokeWidth={2.6}/>
            </div>
          </div>
        <div className="pt-3 text-justify">
        The complex has accommodation for 40 people, a classroom, a dining room, a kitchen, changing rooms and a relaxation area with a PlayStation.
          We also provide a modern gym and a Wellness zone with a sauna, steam baths and whirlpools. Parking and WI-FI are free.
          Reception 10:00 - 20:00, payment cards accepted. New rooms with private bathroom, minibar, fridge, Smart TV and the option of extra beds.
          Breakfast in the form of TAKE AWAY or buffet tables for larger groups.
          Possibility of lunches and dinners in the restaurant on the island.
        </div>
      </div>
      {/*Card*/}
      </div>
      {/*Wrapper */}
    </motion.div>
    );
};