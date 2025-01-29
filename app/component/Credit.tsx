"use client"
import Link from "next/link";

export default function Credit() {
    return (
        <section className="w-full py-8 bg-black text-center text-2xl">
            <span className="text-white">Web developer - <Link href="https://www.linkedin.com/in/adam-hitzger-aa518622b/?originalSubdomain=cz" className="underline underline-offset-2">Adam Hitzger</Link></span>
        </section>
    );
};