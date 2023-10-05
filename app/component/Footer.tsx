import Link from "next/link";

export default function Footer() {
    const currentYear: number = new Date().getFullYear();

    return (
        <>
            <div className="p-8 bg-black text-white w-full h-full ">
                <div className="w-full h-full flex flex-col ">
                    <div className="grid grid-cols-2 w-full text-xl border-b-2 border-b-white  2xl:text-3xl  ">

                        <div className="p-3  h-fit">
                            <h2>Arena Apartments HB &copy; {currentYear}. All Rights Reserved.</h2>
                        </div>

                        <div className="text-right grid grid-rows-3 justify-end 2xl:grid-cols-3  font-light">
                                <div className="p-3 ">
                                
                                    <Link href={{
                                        pathname: '/',
                                    }}
                                    >
                                        Homepage
                                    </Link>
                                
                                </div>

                                <div className="p-3 " >    
                                
                                    <Link href={{
                                        pathname: '/gallery',
                                    }}
                                    >
                                        Galerie
                                    </Link>
                                
                                </div>

                                <div  className="p-3"> 
                                
                                    <Link href="/#contact"
                                    
                                    >
                                        Kontakt
                                    </Link>
                                
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};