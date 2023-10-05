export default function Dostupnost() {
    return(
        <div className="p-8 bg-white w-full h-full ">
      <div className=" w-full ">
        <div className=" max-w-fit mx-5 my-10 2xl:mx-8 ">
            <ul className="list-disc">
              <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">Dostupnost</li>
            </ul>
        </div>
        <div className=" flex flex-wrap">
        <div className=" mb-7 text-left 2xl:w-1/2 2xl:pr-5">
          <p className="text-md 2xl:text-xl">
          Pokud plánujete využít hromadnou dopravu, máme pro vás dobrou zprávu. Naše lokalita je dobře dostupná pomocí městské hromadné dopravy. Z dopravního terminálu, který kombinuje vlakovou a autobusovou dopravu, vede k nám linka č. 1 a č. 5. Stejné linky, tedy č. 1 a č. 5, vás přivedou také z Havlíčkova náměstí.</p>
        </div>
          <div className="mb-7 text-right 2xl:w-1/2 2xl:pl-5">
            <p className="text-md 2xl:text-xl">
            Pokud dáváte přednost pěší chůzi, můžete se z centra k nám dostat za pouhých 15 minut. Tato krátká procházka vám umožní snadno a rychle dosáhnout naší lokality a začít si užívat všechny naše nabízené služby.</p>
          </div>
        </div>
        
        </div>
      </div>
    );
};