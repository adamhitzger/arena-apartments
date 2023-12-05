import Companies from '../component/Companies'
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

function ResponziveBar(){
    return(
      <div className="bg-transparent  w-full overflow-hidden">
          <div className={`sm:px-16 px-6 flex justify-center items-center`}>
            <div className={`xl:max-w-[1280px] w-full`}>
              <Navbar />
            </div>
          </div>
        </div>
    )
  }

type UrlsProps = {
    sectionName: string;
    url1:string;
    url2:string;
    url3:string;
    url4:string;
    url5:string;
    url6:string;
};

function Section({...props}: UrlsProps ){
    return(
        <div className="w-fit ">
            <div className=" max-w-fit mx-5 my-5 2xl:mx-8 ">
                <ul className="list-disc">
                    <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">{props.sectionName}</li>
                </ul>
            </div>
            <div className="grid grid-cols-2 2xl:grid-cols-3 gap-3 mx-5 my-5 2xl:mx-10 ">
                                <div >
                                    <img src={props.url1} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness" className="rounded-[20px]" />
                                </div>
                                <div>
                                    <img src={props.url2} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness"className="rounded-[20px]"/>
                                </div>
                                <div>
                                    <img src={props.url3} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness" className="rounded-[20px]"/>
                                </div>
                                <div>
                                    <img src={props.url4} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness" className="rounded-[20px]"/>
                                </div>
                                <div>
                                    <img src={props.url5} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness" className="rounded-[20px]"/>
                                </div>
                                <div>
                                    <img src={props.url6} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness" className="rounded-[20px]"/>
                                </div>
                            </div>
                        </div>
    );
};

export default function Gallery() {

    return (
        <>
        <ResponziveBar/>
        <div className="p-2 w-full h-full">
           <div className="w-full ">
                <div className="grid gap-x-5 grid-rows-3 w-full">  
                    <Section sectionName="Ubytování" url1="/img/rooms/1.jpg" url2="/img/rooms/2.jpg" url3="/img/rooms/3.jpg" url4="/img/rooms/4.jpg" url5="/img/rooms/5.jpg" url6="/img/rooms/6.jpg"/>
                    <Section sectionName="Wellness" url1="/img/welness/1.jpg" url2="/img/welness/2.jpg" url3="/img/welness/3.jpg" url4="/img/welness/4.jpg" url5="/img/welness/5.jpg" url6="/img/welness/6.jpg"/>
                    <Section sectionName="Fitness" url1="/img/fitness/1.jpg" url2="/img/fitness/2.jpg" url3="/img/fitness/3.jpg" url4="/img/fitness/4.jpg" url5="/img/fitness/5.jpg" url6="/img/fitness/6.jpg"/>    
                </div>
            </div> 
        </div>
        <Companies/>
        <Footer/>
        </>
    )
}