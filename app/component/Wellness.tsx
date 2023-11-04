import Image from "next/image";
import { Button } from "@/components/ui/button";
import  Link  from "next/link";

export default function Wellness(){

    return(
        <div className="p-8 bg-green w-full h-full">
            <div className="flex flex-wrap-reverse md:grid md:grid-cols-2 md:gap-5">  

                <div className="border-grey-300 border-2 rounded-[20px] mb-10">
                    <div className="grid grid-cols-2 gap-2">
                        <img src="/img/welness/2.jpg" className="rounded-[20px]" alt="Výřivka" title="Výřivka"/>
                        <img src="/img/welness/3.jpg" className="rounded-[20px]" alt="Finská sauna" title="Finská sauna"/>
                        <img src="/img/welness/4.jpg" className="rounded-[20px]" alt="Masážní prostory" title="Masážní prostory"/>
                        <img src="/img/welness/5.jpg" className="rounded-[20px]" alt="Masážní prostory" title="Masážní prostory"/>
                    </div>

                    <div className="p-8 h-full flex flex-col content-between ">
                        <div>
                        <p className="text-black text-lg my-4">
                        V přízemí budovy je nové privátní wellness s vířivkou, saunou, parními lázněmi. Cena 3500 Kč/90min pro skupiny od 10 osob.
                        Po domluvě možnost masáží a využití fitness centra - cena dle dohody.                  
                        </p>
                        </div>
                        <div className="my-4">
                        <Button  variant="outline" size="sm" asChild>
                            <Link href="/#contact">Kontaktujte nás</Link>
                        </Button>
                        </div>
                    </div>
                </div>

                <div className="border-grey-300 border-2 rounded-[20px] mb-10">
                    <div className="w-full">
                        <img src="/img/welness/1.jpg" className="rounded-[20px]" alt="Prostory wellness" title="Prostory wellness"/>
                    </div>

                    <div className="p-8">
                        <div className="">
                            <h2 className="font-medium text-lg 2xl:text-4xl">
                                Wellness
                            </h2>
                        </div>
                        <div className=" w-full my-8 flex flex-row justify-between">
                            <Image 
                            width={48}
                            height={48}
                            src="/img/icons/massage.png"
                            alt="masáže"
                            />
                            <Image 
                            width={48}
                            height={48}
                            src="/img/icons/nature.png"
                            alt="spa"
                            />
                            <Image 
                            width={48}
                            height={48}
                            src="/img/icons/steam-room.png"
                            alt="masáže"
                            />
                        </div>
                        <div className="w-full p-4 rounded-[25px] border border-black flex flex-row justify-between">
                            <div className="flex flex-row space-x-4">
                                <span className="text-2xl">10</span>
                                <Image
                                width={32}
                                height={32}
                                src="/img/icons/user.png"
                                alt="osoba"
                                /> 
                                
                            </div>
                            <span className="text-2xl">3500 Kč</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}