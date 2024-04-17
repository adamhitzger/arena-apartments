import Herobanner from "./component/Herobanner";
import Contact from "./component/Contact";
import Dostupnost from "./component/Dostupnost";
import Okoli from "./component/Okoli";
import Services from "./component/Services";
import Wellness from "./component/Wellness";
import Companies from './component/Companies'
import Footer from './component/Footer'
import Navbar from "./component/Navbar";
import Announcement from "./component/Announcement";

export const revalidate = 30;

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

export default function Home() {

  return (
    <>
    <Announcement/>
      <ResponziveBar/>
      <Herobanner/>
      <Services/>
      <Wellness/>
      <Okoli/>
      <Dostupnost/>
      <Contact/>
      <Companies/>
      <Footer/>
    </>
  )
}
