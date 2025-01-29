"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Okoli() {
  return (
    <motion.section className="p-8 bg-black text-white w-full h-full 2xl:pt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className=" w-full ">
        <div className=" max-w-fit mx-5 2xl:mb-20 2xl:mx-8 ">
          <ul className="list-disc">
            <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">Surroundings</li>
          </ul>
        </div>

      </div>
      <div className=" w-full">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 py-10">
            <div>
              <Link href="https://www.hrad-lipnice.cz/cs" target="_blank"><h2 className="text-xl 2xl:text-4xl underline underline-offset-4">Schloss Lipnice</h2></Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Schloss Lipnice – Im mittelalterlichen Schloss Lipnice werden Sie sich wie im Märchen fühlen. Hier wurden die Märchen „Der Teufel weiß warum“ und „Es lebe die Ritter“ gedreht. Es liegt 15 km von Havlíčkov Brod entfernt.</p>
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
                  Biathlon in Nové Město in Mähren
                </h2>
              </Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Das jährliche Biathlonrennen in Nové Město na Morava ist einer der Höhepunkte im Biathlonkalender. Diese prestigeträchtige Veranstaltung findet in der malerischen Umgebung der mährischen Wälder statt und lockt die besten Biathlon-Teilnehmer aus der ganzen Welt an. Der Wettbewerb ist bekannt für seine anspruchsvollen Strecken und ein leidenschaftliches Publikum, das die Teilnehmer auf jeder Runde anfeuert.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pb-5 flex lg:justify-end 2xl:justify-end" >
            <Image width={1028} height={1028} src="/img/okoli/nmnm.jpg" className="w-full rounded-[25px] lg:w-2/3 2xl:w-2/3" alt="Každoroční biatlonový závod v Novém Městě na Moravě je jedním z vrcholů biatlonového kalendáře. Tato prestižní událost se koná v malebném prostředí moravských lesů a přitahuje nejlepší biatlonové závodníky z celého světa. Soutěž je známá svými náročnými tratěmi a vášnivým publikem, které podporuje závodníky v každém kole." title="Každoroční mistrovstí světa v Bialtonu v Novém Městě na Moravě" />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="lg:w-1/2 py-10">
            <div>
              <Link href="https://lyzarhb.cz/2022/" target="_blank"><h2 className="text-xl 2xl:text-4xl underline underline-offset-4">Skigebiet Vysoká</h2></Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Das Skigebiet Vysoká liegt 8 km von Havl.Brod entfernt. Die Länge der Piste beträgt 420 Meter und der Höhenunterschied 85 Meter. Aufzug mit einer Kapazität von 900 Personen/Stunde. Kostenlose Parkplätze auf der Wiese neben der Anlage.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-5 pb-5 flex lg:justify-start 2xl:justify-start" >
            <Image width={1028} height={1028} src="/img/okoli/vysoka.jpg" className="w-full rounded-[25px] lg:w-2/3 2xl:w-2/3" alt="Lyžařský areál Vysoká se nachází 8km od Havl.Brodu. Délka sjezdovky je 420 metrů a převýšení 85 metrů. Vlek s kapacitou 900 osob/hodinu. Parkování zdarma na louce vedle areálu." title="Ski areál Vysoká u Havlíčkova Brodu" />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="lg:w-1/2 py-10">
            <div>
              <Link href="https://www.jihlava.cz/" target="_blank"><h2 className="text-xl 2xl:text-4xl underline underline-offset-4">Die Kreisstadt Jihlava</h2></Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Die Kreisstadt Jihlava ist eine Kreis- und Statutarstadt auf der Böhmisch-Mährischen Höhe und liegt an der ehemaligen tschechisch-mährischen Grenze, die hier teilweise vom Fluss Jihlava gebildet wird. Historisch gesehen ist es eine mährische Stadt und auch heute noch liegt der größte Teil von Jihlava auf mährischer Seite, nur der nordwestliche Rand liegt in Böhmen. Es liegt 20 Autominuten von Havl.Brod entfernt.</p>
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