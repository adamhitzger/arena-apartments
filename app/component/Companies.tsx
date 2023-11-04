import  Link  from "next/link";

export default function Companies() {
    return(
        <>
        <div className="p-8 bg-white w-full h-full ">
        <div className="w-full h-full flex flex-col ">
          
          <div className="flex justify-center">
            <div className="text-center text-xl 2xl:text-2xl">
              <h2 >Hledáte dokonalé útočiště pro svého čtyřnohého kamaráda?</h2>
            </div>
          </div>

          <div className="flex justify-center py-5">
            <div >
              <Link href={"https://tig-house.cz/"} target="_blank">
                <img src="./img/sponsor/tighouse.png" alt="Tig House" title="Tig house - dokonalé útočiště pro čtyřnohého mazlíčka"/>
              </Link>
            </div>
          </div>

        </div>
      </div>
    {/* Othres */}
    <div className="p-10 bg-white w-full h-full">
      <div className="w-full h-full flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-fit">

          <Link href={"http://restauracenaostrove.cz/"} target="_blank">
            <div className="bg-[url('/img/sponsor/urquell.jpg')] bg-cover  p-8 w-full rounded-[20px]" title="Plzeňská restaurace Na Ostrově v Havlíčkově Brodě">
              <div className="text-white text-3xl font-semibold py-20 my-5">
                <h2>Restaurace na Ostrově</h2>
              </div>
            </div>
            </Link>

            <Link href={"https://www.kdostrov.cz"} target="_blank">
            <div className="bg-[url('/img/sponsor/kdostrov.jpg')] bg-auto bg-center p-8 w-full  rounded-[20px] " title="Kluturní dům Ostrov v Havlíčkově Brodě">
              <div className="text-white text-3xl font-semibold py-20 my-5">
                <h2>Kulturní dům Ostrov</h2>
              </div>
            </div>
            </Link>

          <Link href={"https://www.hotelpanskydum.com/"} target="_blank">
            <div className="bg-[url('/img/sponsor/panskydum.jpg')] bg-cover p-8 w-full  rounded-[20px]" title="Hotel Panský dům v Novém Městě na Moravě">
              <div className="text-white text-3xl font-semibold py-20 my-5">
                <h2>Hotel Panský dům</h2>
              </div>
            </div>
            </Link>

          <Link href={"https://www.facebook.com/profile.php?id=100010902601548"} target="_blank">
            <div className="bg-[url('/img/sponsor/barostrov.jpg')] bg-cover p-8 w-full  rounded-[20px]" title=" Bar na Ostrově v Havlíčkově Brodě">
              <div className="text-white text-3xl font-semibold py-20 my-5">
                <h2>Bar na Ostrově</h2>
              </div>
            </div>
            </Link>     
          </div>
        </div>
      </div> 
        </>
    );
};