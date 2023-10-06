import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import Image from "next/image";

export default function Services() {
    return(
        <div className="p-8 bg-white w-full h-full ">
      <div className=" w-full ">
        <div className=" max-w-fit mx-5 my-10 2xl:mx-8 ">
            <ul className="list-disc">
              <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">Apartmány a služby</li>
            </ul>
        </div>
        <div className=" flex flex-wrap">
        <div className=" mb-7 text-left 2xl:w-1/2 2xl:pr-5">
          <p className="text-md 2xl:text-lg">
          Cena zahrnuje snídaně formou balíčků TAKE AWAY, při větších skupinách švédské stoly. Možnost obědů a večeří po domluvě. Všechny pokoje vybaveny vlastním sociálním zařízením, minibarem, ledničkou a Smart TV. Wellness není v ceně.
          </p>
        </div>
          <div className="mb-7 text-right 2xl:w-1/2 2xl:pl-5">
            <p className="text-md 2xl:text-lg">
            Nabízíme širokou škálu zážitkových služeb včetně půjčovny elektrokol a lyží. Rybaření je možné na nedalekém rybníku Tylšák (13 km od Havlíčkova Brodu směrem k Štokům). Pro milovníky grilování máme připraveny možnosti venkovního vaření. A pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry.
            </p>
          </div>
        </div>
      </div>
      {/*Wrapper */}
      <div className=" flex flex-wrap md:grid md:grid-cols-2 md:gap-5">
                
                <div className="border-grey-300 border-2 rounded-[20px] mb-10">
                    <div className="w-full">
                        <img src="/img/rooms/1.jpg" className="rounded-[20px]"/>
                    </div>

                    <div className="p-8">
                        <div className="">
                            <h2 className="font-medium text-lg 2xl:text-4xl">
                              2 jednolužkové postele
                            </h2>
                        </div>
                        <div className="grid gap-y-4 md:grid-cols-2 md:gap-4">
                        <div className=" w-full my-8 flex flex-row justify-between ">
                            <Image 
                            width={48}
                            height={48}
                            src="/img/icons/single-bed.png"
                            alt="masáže"
                            />
                            <Image 
                            width={48}
                            height={48}
                            src="/img/icons/parking.png"
                            alt="spa"
                            />
                            <Image 
                            width={48}
                            height={48}
                            src="/img/icons/wifi.png"
                            alt="masáže"
                            />
                        </div>

                        <div className=" w-full my-8 flex flex-row justify-between ">
                            <Image 
                            width={48}
                            height={48}
                            src="/img/icons/weights.png"
                            alt="masáže"
                            />
                            <Image 
                            width={48}
                            height={48}
                            src="/img/icons/bbq.png"
                            alt="spa"
                            />
                            <Image 
                            width={48}
                            height={48}
                            src="/img/icons/breakfast.png"
                            alt="masáže"
                            />
                        </div>
                        </div>
        	            <div className="grid gap-y-4 md:grid-cols-2 md:gap-4">
                            <div className="w-full p-4 rounded-[25px] border border-black flex flex-row justify-between">
                                <Image
                                width={32}
                                height={32}
                                src="/img/icons/user.png"
                                alt="osoba"
                                /> 
                                <span className="text-xl">850 Kč</span>
                            </div>

                            <div className="w-full p-4 rounded-[25px] border border-black flex flex-row justify-between">
                                <div className="flex flex-row">
                                <Image
                                width={32}
                                height={32}
                                src="/img/icons/user.png"
                                alt="osoba"
                                />
                                <span className="text-xl mx-5">+</span>
                                <Image
                                width={32}
                                height={32}
                                src="/img/icons/breakfast.png"
                                alt="snidane"
                                />
                                </div>
                                 <span className="text-xl">1000 Kč</span>
                                 </div>

                            <div className="w-full p-4 rounded-[25px] border border-black flex flex-row justify-between">
                                <Image
                                    width={32}
                                    height={32}
                                    src="/img/icons/people.png"
                                    alt="2 osoby"
                                />                                 
                                    <span className="text-xl">1300 Kč</span>
                                </div>
                            <div className="w-full p-4 rounded-[25px] border border-black flex flex-row justify-between"> 
                                <div className="flex flex-row">
                                    <Image
                                width={32}
                                height={32}
                                src="/img/icons/people.png"
                                alt="2 osoby"
                                    />
                                        <span className="text-xl mx-5">+</span>
                                    <Image
                                width={32}
                                height={32}
                                src="/img/icons/breakfast.png"
                                alt="snidane"
                                    />
                                </div>
                                <span className="text-xl">1500 Kč</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-grey-300 border-2 rounded-[20px] mb-10">
                    <div className="grid grid-cols-2 gap-2">
                        <img src="/img/rooms/2.jpg" className="rounded-[20px]"/>
                        <img src="/img/rooms/3.jpg" className="rounded-[20px]"/>
                        <img src="/img/rooms/4.jpg" className="rounded-[20px]"/>
                        <img src="/img/rooms/5.jpg" className="rounded-[20px]"/>
                    </div>

                    <div className="p-8 flex flex-col justify between ">
                        <p className="text-black text-lg my-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, suscipit? Eos sint dolorum totam debitis quaerat dicta? Quo, quisquam error itaque, blanditiis unde impedit reprehenderit, sit ullam porro labore tenetur?
                        </p>
                        <div className="my-4">
                        <Button  variant="outline" size="sm" asChild>
                            <Link href="/#contact">Kontaktujte nás</Link>
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
};