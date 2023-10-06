import Link from "next/link";

export default function Okoli(){
    return(
        <div className="p-8 bg-black text-white w-full h-full 2xl:pt-20">
    <div className=" w-full ">
        <div className=" max-w-fit mx-5 2xl:mb-20 2xl:mx-8 ">
            <ul className="list-disc">
              <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">Okolí</li>
            </ul>
        </div>
        
      </div>
        <div className=" w-full">
        <div className="flex flex-wrap">
          <div className="2xl:w-1/2 py-10">
            <div>
              <Link href="https://www.hrad-lipnice.cz/cs"><h2 className="text-xl 2xl:text-4xl underline underline-offset-4">Hrad Lipnice</h2></Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Hrad Lipnice – Jako v pohádce si pak budete připadat na mohutném středověkém hradu Lipnice. Natáčela se tu pohádka Čert ví, proč (2003) a také pohádkový film Ať žijí rytíři : 15km z Havlíčkova Brodu</p>
            </div>
          </div>
          <div className="w-full 2xl:w-1/2 pb-5 flex lg:justify-start 2xl:justify-start">
            <img src="/img/okoli/lipnice.jpg" className="w-full rounded-[25px] lg:w-2/3 2xl:w-2/3"/>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="2xl:w-1/2 py-10">
            <div>
            <Link href="https://www.hbrebel.cz/"><h2 className="text-xl 2xl:text-4xl underline underline-offset-4">Měšťanský pivovar Havlíčkův Brod</h2></Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Měšťanský pivovar Havlíčkův Brod – Rebel byl původně název pro čtrnáctistupňové pivo. Nový sládek Josef Bouda vyhlásil soutěž mezi zaměstnanci o název pro tmavé čtrnáctistupňové pivo. Podmínkou bylo, aby byl spjatý s městem nebo významnou osobností. Nápadů bylo nespočet, ale jako vítěz vzešel právě Rebel. Inspirací byl samozřejmě známý politik, novinář, ekonom a také rebel Karel Havlíček Borovský. Název se postupem času stal značkou pro všechna piva z produkce pivovaru.</p>
            </div>
          </div>
          <div className="w-full 2xl:w-1/2 pb-5 flex lg:justify-end 2xl:justify-end">
            <img src="/img/okoli/pivovar.jpg" className="w-full rounded-[25px] lg:w-2/3 2xl:w-2/3"/>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="2xl:w-1/2 py-10">
            <div>
              <Link href=""><h2 className="text-xl 2xl:text-4xl underline underline-offset-4">Lyžařský areál Vysoká</h2></Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Lyžařský areál Vysoká Nachází se 8km od Havl.Brodu Délka sjezdovky je 420 metrů a převýšení 85 metrů. Vlek s kapacitou 900 osob/hodinu. Parkování zdarma na louce vedle areálu.</p>
            </div>
          </div>
          <div className="w-full 2xl:w-1/2 pl-5 pb-5 flex lg:justify-start 2xl:justify-start">
            <img src="/img/okoli/vysoka.jpg" className="w-full rounded-[25px] lg:w-2/3 2xl:w-2/3"/>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="2xl:w-1/2 py-10">
            <div>
              <Link href="https://www.jihlava.cz/"><h2 className="text-xl 2xl:text-4xl underline underline-offset-4">Krajské město Jihlava</h2></Link>
            </div>
            <div className="py-5 2xl:py-10">
              <p className="2xl:text-2xl">Krajské město Jihlava je české krajské a statutární město, ležící na Českomoravské vrchovině a položené na někdejší česko-moravské zemské hranici, tvořené zde zčásti řekou Jihlavou. Historicky se jedná o moravské město a i dnes většina Jihlavy leží na moravské straně, pouze severozápadní okraj je v Čechách Nachází se 20 min cesty autem z Havl.Brodu.</p>
            </div>
          </div>
          <div className="w-full  2xl:w-1/2 pb-5 flex lg:justify-end 2xl:justify-end ">
            <img src="/img/okoli/iglau.jpg" className="w-full rounded-[25px] lg:w-2/3 2xl:w-2/3"/>
          </div>
        </div>

        
      </div>

    </div>
    );
};