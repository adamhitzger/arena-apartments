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
          <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">Dostupnost</li>
        </ul>
      </div>
      <div className=" flex flex-wrap content-center">
        <p className="text-center text-md 2xl:text-xl ">
          Z centra se k nám pěší chůzí dostanete za 20 minut. Tato procházka vám umožní dosáhnout naší lokality a začít si užívat všechny naše nabízené služby.
        </p>
      </div>
    </motion.section>
  );
};