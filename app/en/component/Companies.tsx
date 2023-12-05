"use client";

import  Link  from "next/link";
import { motion } from "framer-motion";

export default function Companies() {
    return(
        <>
        <motion.div className="p-8 bg-white w-full h-full "
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
        >
        <div className="w-full h-full flex flex-col ">
          
          <div className="flex justify-center">
            <div className="text-center text-xl 2xl:text-2xl">
              <h2 >Looking for the perfect retreat for your four-legged friend?</h2>
            </div>
          </div>

          <div className="flex justify-center py-5">
            <div >
              <Link href={"https://tig-house.cz/"} target="_blank">
                <img src="/img/sponsor/tighouse.png" alt="Tig House" title="Tig house - dokonalé útočiště pro čtyřnohého mazlíčka"/>
              </Link>
            </div>
          </div>

        </div>
      </motion.div>
    {/* Othres */}
    <motion.div className="p-10 bg-white w-full h-full"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
    >
      <div className="w-full h-full flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-fit">

          <Link href={"http://restauracenaostrove.cz/"} target="_blank">
            <div className="bg-[url('/img/sponsor/urquell.jpg')] bg-cover  p-8 w-full rounded-[20px]" title="Plzeňská restaurace Na Ostrově v Havlíčkově Brodě">
              <div className="text-white text-3xl font-semibold py-20 my-5">
                <h2>Restaurant Ostrov</h2>
              </div>
            </div>
            </Link>

            <Link href={"https://www.kdostrov.cz"} target="_blank">
            <div className="bg-[url('/img/sponsor/kdostrov.jpg')] bg-auto bg-center p-8 w-full  rounded-[20px] " title="Kluturní dům Ostrov v Havlíčkově Brodě">
              <div className="text-white text-3xl font-semibold py-20 my-5">
                <h2>House of Culture Ostrov</h2>
              </div>
            </div>
            </Link>

          <Link href={"https://www.hotelpanskydum.com/"} target="_blank">
            <div className="bg-[url('/img/sponsor/panskydum.jpg')] bg-cover p-8 w-full  rounded-[20px]" title="Hotel Panský dům v Novém Městě na Moravě">
              <div className="text-white text-3xl font-semibold py-20 my-5">
                <h2>Hotel Panský dům</h2>
              </div>
            </div>
            </Link>

          <Link href={"https://www.facebook.com/profile.php?id=100010902601548"} target="_blank">
            <div className="bg-[url('/img/sponsor/barostrov.jpg')] bg-cover p-8 w-full  rounded-[20px]" title=" Bar na Ostrově v Havlíčkově Brodě">
              <div className="text-white text-3xl font-semibold py-20 my-5">
                <h2>Bar Ostrov</h2>
              </div>
            </div>
            </Link>     
          </div>
        </div>
      </motion.div> 
        </>
    );
};