"use client";
import {motion} from "framer-motion";

export default function Dostupnost() {
    return(
        <motion.div className="p-8 bg-white w-full h-full "
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        >
        <div className=" max-w-fit mx-5 my-10 2xl:mx-8 ">
            <ul className="list-disc">
              <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">Verfügbarkeit</li>
            </ul>
        </div>
        <div className=" flex flex-wrap content-center">
            <p className="text-center text-md 2xl:text-xl ">
            Zu Fuß erreichen Sie uns vom Zentrum aus in 20 Minuten. Dieser Spaziergang ermöglicht es Ihnen, unseren Standort zu erreichen und alle von uns angebotenen Dienstleistungen zu genießen.
            </p> 
        </div>
      </motion.div>
    );
};