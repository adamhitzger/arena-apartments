import { client } from "@/app/lib/sanity";

export const revalidate = 30;

async function getData() {
    const query = `*[_type == 'home'][0]`;
    const data = await client.fetch(query);

    return data;
}

export default async function Announcement(){
    const data = await getData();
    return(
        <div className="flex w-full justify-center p-2">
            <p className="text-lg font-bold">{data.enAnnouncement}</p>
        </div>
    );
}