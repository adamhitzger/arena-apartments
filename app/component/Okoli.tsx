"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Okoli() {
  return (
    <motion.section className="p-8 bg-black text-white w-full h-full 2xl:pt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className=" w-full ">
        <div className=" max-w-fit mx-5 2xl:mb-20 2xl:mx-8 ">
          <ul className="list-disc">
            <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">Okolí</li>
          </ul>
        </div>

      </div>
      <div className=" w-full">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 py-10">
            <div>
              <Link href="https://www.hrad-lipnice.cz/cs" target="_blank"><h2 className="text-xl 2xl:text-4xl underline underline-offset-4">Hrad Lipnice</h2></Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Hrad Lipnice – Jako v pohádce si budete připadat na středověkém hradu Lipnice. Natáčely se tu pohádky Čert ví, proč a také Ať žijí rytíři. Nachází se 15km od Havlíčkova Brodu.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pb-5 flex lg:justify-start 2xl:justify-start" >
            <Image width={1028} height={1028} src="/img/okoli/lipnice.jpg" className="w-full rounded-[25px] lg:w-2/3 2xl:w-2/3" alt="Hrad Lipnice – Jako v pohádce si budete připadat na středověkém hradu Lipnice. Natáčely se tu pohádky Čert ví, proč a také Ať žijí rytíři. Nachází se 15km od Havlíčkova Brodu" title="Kamenný strážce Posázaví, hrad Lipnice v Lipnici nad Sázavou" />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="lg:w-1/2 py-10">
            <div>
              <Link href="https://www.biathlonnmnm.cz/" target="_blank">
                <h2 className="text-xl 2xl:text-4xl underline underline-offset-4">
                  Biatlon v Novém Městě na Moravě
                </h2>
              </Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Každoroční biatlonový závod v Novém Městě na Moravě je jedním z vrcholů biatlonového kalendáře. Tato prestižní událost se koná v malebném prostředí moravských lesů a přitahuje nejlepší biatlonové závodníky z celého světa. Soutěž je známá svými náročnými tratěmi a vášnivým publikem, které podporuje závodníky v každém kole.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pb-5 flex lg:justify-end 2xl:justify-end" >
            <Image width={1028} height={1028} src="/img/okoli/nmnm.jpg" className="w-full rounded-[25px] lg:w-2/3 2xl:w-2/3" alt="Každoroční biatlonový závod v Novém Městě na Moravě je jedním z vrcholů biatlonového kalendáře. Tato prestižní událost se koná v malebném prostředí moravských lesů a přitahuje nejlepší biatlonové závodníky z celého světa. Soutěž je známá svými náročnými tratěmi a vášnivým publikem, které podporuje závodníky v každém kole." title="Každoroční mistrovstí světa v Bialtonu v Novém Městě na Moravě" />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="lg:w-1/2 py-10">
            <div>
              <Link href="https://lyzarhb.cz/2022/" target="_blank"><h2 className="text-xl 2xl:text-4xl underline underline-offset-4">Lyžařský areál Vysoká</h2></Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Lyžařský areál Vysoká se nachází 8km od Havl.Brodu. Délka sjezdovky je 420 metrů a převýšení 85 metrů. Vlek s kapacitou 900 osob/hodinu. Parkování zdarma na louce vedle areálu.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-5 pb-5 flex lg:justify-start 2xl:justify-start" >
            <Image width={1028} height={1028} src="/img/okoli/vysoka.jpg" className="w-full rounded-[25px] lg:w-2/3 2xl:w-2/3" alt="Lyžařský areál Vysoká se nachází 8km od Havl.Brodu. Délka sjezdovky je 420 metrů a převýšení 85 metrů. Vlek s kapacitou 900 osob/hodinu. Parkování zdarma na louce vedle areálu." title="Ski areál Vysoká u Havlíčkova Brodu" />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="lg:w-1/2 py-10">
            <div>
              <Link href="https://www.jihlava.cz/" target="_blank"><h2 className="text-xl 2xl:text-4xl underline underline-offset-4">Krajské město Jihlava</h2></Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Krajské město Jihlava je krajské a statutární město, ležící na Českomoravské vrchovině a položené na někdejší česko-moravské zemské hranici, tvořené zde z části řekou Jihlavou. Historicky se jedná o moravské město a i dnes většina Jihlavy leží na moravské straně, pouze severozápadní okraj je v Čechách Nachází se 20 min cesty autem z Havl.Brodu.</p>
            </div>
          </div>
          <div className="w-full  lg:w-1/2 pb-5 flex lg:justify-end 2xl:justify-end " >
            <Image width={1028} height={1028} src="/img/okoli/iglau.jpg" className="w-full rounded-[25px] lg:w-2/3 2xl:w-2/3" alt="Krajské město Jihlava je krajské a statutární město, ležící na Českomoravské vrchovině a položené na někdejší česko-moravské zemské hranici, tvořené zde z části řekou Jihlavou. Historicky se jedná o moravské město a i dnes většina Jihlavy leží na moravské straně, pouze severozápadní okraj je v Čechách Nachází se 20 min cesty autem z Havl.Brodu." title="Krajské město Jihlava odkud pochází např. 58g" />
          </div>
        </div>


      </div>

    </motion.section>
  );
};