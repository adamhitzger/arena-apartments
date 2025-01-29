"use client"

import { Schema } from "@/types";

export default function Announcement({ data }: { data: Schema }) {

    return (
        <div className="flex w-full justify-center p-2">
            <p className="text-lg font-bold">{data.deAnnouncement}</p>
        </div>
    );
}