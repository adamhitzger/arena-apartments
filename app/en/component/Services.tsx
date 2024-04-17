import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import Image from "next/image";
import { client } from "@/app/lib/sanity";

export const revalidate = 30;

async function getData(){
    const query = "*[_type == 'home'][0]";
    const data = await client.fetch(query);

    return data;
}


export default async function Services() {
    const data = await getData();

    return(
    <div className="p-8 w-full h-full">
      <div className=" w-full ">
        <div className=" max-w-fit mx-5 my-10 2xl:mx-8 ">
            <ul className="list-disc">
              <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">Apartments and services</li>
            </ul>
        </div>
      </div>
      {/*Wrapper */}
      <div className=" flex flex-wrap md:grid md:grid-cols-2 md:gap-5">
                
                <div className="border-grey-300 border-2 rounded-[20px] mb-10">
                    <div className="w-full">
                        <img src="/img/rooms/1.jpg" className="rounded-[20px]" alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=""/>
                    </div>

                    <div className="p-8">
                        <div className="">
                            <h2 className="font-medium text-lg 2xl:text-4xl">
                            2 single beds
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
        	            <div className="grid gap-y-4 xl:grid-cols-2 xl:gap-4">

                            {/**Sanity */}
                            <div className="w-full p-4 rounded-[25px] border border-black flex flex-row justify-between">
                                <Image
                                width={32}
                                height={32}
                                src="/img/icons/user.png"
                                alt="osoba"
                                /> 
                                <span className="text-xl">{data.singleBed} Kč</span>
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
                                 <span className="text-xl">{data.singleBedWithBreakfast} Kč</span>
                                 </div>

                            <div className="w-full p-4 rounded-[25px] border border-black flex flex-row justify-between">
                                <Image
                                    width={32}
                                    height={32}
                                    src="/img/icons/people.png"
                                    alt="2 osoby"
                                />                                 
                                    <span className="text-xl">{data.doubleBed} Kč</span>
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
                                <span className="text-xl">{data.doubleBedWithBreakfast} Kč</span>
                            </div>
                            {/**Sanity code */}
                        </div>
                    </div>
                </div>

                <div className="border-grey-300 border-2 rounded-[20px] mb-10">
                    <div className="grid grid-cols-2 gap-2">
                        <img src="/img/rooms/2.jpg" className="rounded-[20px]" alt="Pokoj s manželskou postelí. Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title="Pokoj s manželskou postelí"/>
                        <img src="/img/rooms/3.jpg" className="rounded-[20px]" alt="Útulný pokoj. Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title="Útulný pokoj"/>
                        <img src="/img/rooms/7.jpg" className="rounded-[20px]" alt="Breakfest . Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title="Snídaně"/>
                        <img src="/img/rooms/8.jpg" className="rounded-[20px]" alt="Snídaně. Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title="Breakfest"/>
                    </div>

                    <div className="p-8 flex flex-col justify between ">
                      <p className="text-black text-lg my-4">
                        Wireless internet connection is available in common areas free of charge. Each room is equipped with its own social equipment and towels, Smart TV, wardrobe, minibar, desk and chair.
                        For groups of 15 or more, we have a special offer of {data.pricePerGroup} CZK per person/night. The possibility of providing breakfast, lunch and dinner. If you are interested in table tennis, we offer individual training with professional coaches.
                        Wellness is not included in the price. By agreement, the use of the fitness center is possible.
                        </p>
                        <div className="my-4">
                        <Button  variant="outline" size="sm" asChild>
                            <Link href="/en/#contact">Contact us</Link>
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}; 