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
          Oase nicht nur für Tischtennis:
              <span className="underline underline-offset-4">
              Neue Unterkunft
                </span> <br/>
                in Vysočina
                
              </h1> 
          
          <div className="mt-10 2xl:my-20">
            <p className="text-white text-justify text-xl font-normal 2xl:text-xl lg:text-lg">Wir befinden uns in Havlíčková Brod in Vysočina, 23 km nördlich von Jihlava am Fluss Sázava. Die Stadt ist ein wichtiger Verkehrszentrum in der Tschechischen Republik. Die Unterkunft wird aus den Räumlichkeiten der ehemaligen Agrarschule in Havlíčková Brod gebaut. Es grenzt an die Birrel Arena, die Heimat des sechsmaligen Champions der Tschechischen Republik im Tischtennis ist. Das Gebiet wird häufig von der tschechischen Nationalmannschaft und zur Vorbereitung von HB Ostrov -Teams und jungen Spielern im Regionalzentrum für talentierte Jugendliche genutzt.</p>
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
        Der Komplex bietet Platz für 40 Personen, ein Klassenzimmer, ein Esszimmer, eine Küche, Umkleideräume und einen Entspannungsbereich mit einer PlayStation.
          Darüber hinaus bieten wir Ihnen ein modernes Fitnessstudio und einen Wellnessbereich mit Sauna, Dampfbädern und Whirlpools. Parkplätze und WLAN sind kostenlos.
          Rezeption 10:00 - 20:00 Uhr, Zahlungskarten werden akzeptiert. Neue Zimmer mit eigenem Bad, Minibar, Kühlschrank, Smart-TV und der Möglichkeit von Zustellbetten.
          Frühstück in Form von TAKE AWAY oder Buffettischen für größere Gruppen.
          Möglichkeit zum Mittag- und Abendessen im Restaurant auf der Insel.
        </div>
      </div>
      {/*Card*/}
      </div>
      {/*Wrapper */}
    </motion.div>
    );
};