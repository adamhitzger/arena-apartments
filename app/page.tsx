
import { client } from "./lib/sanity";
import { Home } from "./lib/interface";
import Herobanner from "./component/Herobanner";
import Contact from "./component/Contact";
import Dostupnost from "./component/Dostupnost";
import Okoli from "./component/Okoli";
import Services from "./component/Services";
import Wellness from "./component/Wellness";
import Credit from "./component/Credit";

async function getData(){
  const query = `*[_type == "home"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data = await getData() as Home[];
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
