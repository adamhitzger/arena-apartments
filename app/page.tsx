import Herobanner from "./component/Herobanner";
import Contact from "./component/Contact";
import Dostupnost from "./component/Dostupnost";
import Okoli from "./component/Okoli";
import Services from "./component/Services";
import Companies from './component/Companies'
import Footer from './component/Footer'
import Navbar from "./component/Navbar";
import Announcement from "./component/Announcement";
import { sanityFetch } from "./lib/sanity";
import { Schema } from "@/types";
export const revalidate = 30;

export default async function Home() {
  const data: Schema = await sanityFetch<Schema>({ query: `*[_type == 'home'][0]` })
  return (
    <>
      <Announcement data={data} />
      <Navbar />
      <Herobanner />
      <Services data={data} />
      <Okoli />
      <Dostupnost />
      <Contact />
      <Companies />
      <Footer />
    </>
  )
}
