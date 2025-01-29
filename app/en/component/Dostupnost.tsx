"use client";
import { motion } from "framer-motion";

export default function Dostupnost() {
  return (
    <motion.section className="p-8 bg-white w-full h-full "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className=" max-w-fit mx-5 my-10 2xl:mx-8 ">
        <ul className="list-disc">
          <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">Availability</li>
        </ul>
      </div>
      <div className=" flex flex-wrap content-center">
        <p className="text-center text-md 2xl:text-xl ">
          You can reach us by foot from the center in 20 minutes. This walk will allow you to reach our location and start enjoying all the services we offer.
        </p>
      </div>
    </motion.section>
  );
};