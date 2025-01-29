"use client"
import { Schema } from "@/types";

export default function Announcement({ data }: { data: Schema }) {

    return (
        <section className="flex w-full justify-center p-2">
            <p className="text-lg font-bold">{data.czAnnouncement}</p>
        </section>
    );
}