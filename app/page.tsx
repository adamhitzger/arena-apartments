import Herobanner from "./component/Herobanner";
import Contact from "./component/Contact";
import Dostupnost from "./component/Dostupnost";
import Okoli from "./component/Okoli";
import Services from "./component/Services";
import Wellness from "./component/Wellness";

export default function Home() {
  return (
    <>
      <Herobanner/>
      <Services/>
      <Wellness/>
      <Okoli/>
      <Dostupnost/>
      <Contact/>
    </>
  )
}
