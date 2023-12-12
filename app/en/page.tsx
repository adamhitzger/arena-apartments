import Herobanner from "./component/Herobanner"
import Services from "./component/Services"
import Wellness from "./component/Wellness"
import Okoli from "./component/Okoli"
import Dostupnost from "./component/Dostupnost"
import Contact from "./component/Contact"
import Companies from "./component/Companies"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"

export const dynamic = "force-dynamic";

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
