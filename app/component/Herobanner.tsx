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
              Oáza Nejen Pro Stolní Tenis:
              <span className="underline underline-offset-4">
                Nové Ubytování
                </span> 
                <br/>
                na Vysočině
                
              </h1> 
          
          <div className="mt-10 2xl:my-20">
            <p className="text-white text-justify text-xl font-normal 2xl:text-xl lg:text-lg">Jsme v Havlíčkově Brodě na Vysočině, 23 km severně od Jihlavy u řeky Sázavy. Město je klíčovým dopravním uzlem v České republice.  Ubytování je vybudované z areálu bývalé zemědělské školy v Havlíčkově Brodě. Sousedí s Birrel Arénou, která je domovem 6x násobného mistra ČR ve stolním tenisu. Areál je často využíván českou reprezentací a pro přípravu týmů HB Ostrov a mladých hráčů v Krajském centru talentované mládeže. </p>
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
          V areálu jsou ubytovací prostory pro 40 osob, učebna, jídelna, kuchyňka, šatny a odpočinková zóna s PlayStationem. 
          Dále poskytujeme moderní posilovnu a Wellness zónu s saunou, parními lázněmi a vířivkami. Parkování a WI-FI jsou zdarma. 
          Recepce 10:00 – 20:00, platební karty akceptovány. Nové pokoje s vlastním sociálním zařízením, minibarem, lednicí, Smart TV a možností přistýlek. 
          Snídaně formou TAKE AWAY nebo švédské stoly pro větší skupiny. 
          Možnost obědů a večeří v restauraci na Ostrově. Prohlédněte si areál ve <a className="underline" href="https://kuula.co/share/Nr3qf/collection/7FFZN?logo=1&card=1&info=0&logosize=40&fs=1&vr=1&zoom=1&initload=0&thumbs=1&inst=0">VR pomocí 360 snímků.</a>
        </div>
      </div>
      {/*Card*/}
      </div>
      {/*Wrapper */}
    </motion.div>
    );
};