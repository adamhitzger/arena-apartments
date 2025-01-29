import { Schema } from '@/types';
import Companies from '../component/Companies'
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Section from '../component/gallerySec';
import { sanityFetch } from '../lib/sanity';
import Announcement from '../component/Announcement';
export default async function Gallery() {
    const data: Schema = await sanityFetch<Schema>({ query: `*[_type == 'home'][0]` })
    return (
        <>
            <Announcement data={data} />
            <Navbar />
            <div className="p-2 w-full h-full">
                <div className="w-full ">
                    <div className="grid gap-x-5 grid-rows-3 w-full">
                        <Section sectionName="Snídaně" url1="/img/rooms/1.jpg" url2="/img/rooms/2.jpg" url3="/img/rooms/3.jpg" url4="/img/rooms/4.jpg" url5="/img/rooms/5.jpg" url6="/img/rooms/6.jpg" />
                        <Section sectionName="Wellness" url1="/img/welness/1.jpg" url2="/img/welness/2.jpg" url3="/img/welness/3.jpg" url4="/img/welness/4.jpg" url5="/img/welness/5.jpg" url6="/img/welness/6.jpg" />
                        <Section sectionName="Fitness" url1="/img/fitness/1.jpg" url2="/img/fitness/2.jpg" url3="/img/fitness/3.jpg" url4="/img/fitness/4.jpg" url5="/img/fitness/5.jpg" url6="/img/fitness/6.jpg" />
                    </div>
                </div>
            </div>
            <Companies />
            <Footer />
        </>
    )
}