
import Contact from "./component/Contact";
import Companies from "./component/Companies";
import Dostupnost from "./component/Dostupnost";
import Footer from "./component/Footer";
import Herobanner from "./component/Herobanner";
import Okoli from "./component/Okoli";
import Services from "./component/Services";
import Wellness from "./component/Wellness";
import Navbar from "./component/Navbar"
import Announcement from "./component/Announcement";
import { Schema } from "@/types";
import { sanityFetch } from "../lib/sanity";
export default async function Home() {
  const data: Schema = await sanityFetch<Schema>({ query: "*[_type == 'home'][0]" })
  return (
    <>
      <Announcement data={data} />
      <Navbar />
      <Herobanner />
      <Services data={data} />
      <Wellness data={data} />
      <Okoli />
      <Dostupnost />
      <Contact />
      <Companies />
      <Footer />
    </>
  )
}