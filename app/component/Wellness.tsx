import Image from "next/image";
import { Button } from "@/components/ui/button";
import  Link  from "next/link";

export default function Wellness(){

    return(
        <div className="p-8 bg-green w-full h-full">
            <div className="flex flex-wrap-reverse md:grid md:grid-cols-2 md:gap-5">  

                <div className="border-grey-300 border-2 rounded-[25px] mb-10">
                    <div className="grid grid-cols-2 gap-2">
                        <img src="/img/welness/2.jpg" className="rounded-[25px]"/>
                        <img src="/img/welness/3.jpg" className="rounded-[25px]"/>
                        <img src="/img/welness/4.jpg" className="rounded-[25px]"/>
                        <img src="/img/welness/5.jpg" className="rounded-[25px]"/>
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

                <div className="border-grey-300 border-2 rounded-[25px] mb-10">
                    <div className="w-full">
                        <img src="/img/welness/1.jpg" className="rounded-[25px]"/>
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
                                 <span className="text-xl">971 Kč</span>
                                 </div>

                            <div className="w-full p-4 rounded-[25px] border border-black flex flex-row justify-between">
                                <Image
                                    width={32}
                                    height={32}
                                    src="/img/icons/people.png"
                                    alt="2 osoby"
                                />                                 
                                    <span className="text-xl">1276 Kč</span>
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
                                <span className="text-xl">1467 Kč</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}