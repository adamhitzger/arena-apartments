"use client"
import Image from 'next/image';
type UrlsProps = {
    sectionName: string;
    url1: string;
    url2: string;
    url3: string;
    url4: string;
    url5: string;
    url6: string;
};

export default function Section({ ...props }: UrlsProps) {
    return (
        <div className="w-fit ">
            <div className=" max-w-fit mx-5 my-5 2xl:mx-8 ">
                <ul className="list-disc">
                    <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">{props.sectionName}</li>
                </ul>
            </div>
            <div className="grid grid-cols-2 2xl:grid-cols-3 gap-3 mx-5 my-5 2xl:mx-10 ">

                <Image width={1028} height={1028} src={props.url1} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness" className="rounded-[20px]" />

                <Image width={1028} height={1028} src={props.url2} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness" className="rounded-[20px]" />

                <Image width={1028} height={1028} src={props.url3} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness" className="rounded-[20px]" />

                <Image width={1028} height={1028} src={props.url4} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness" className="rounded-[20px]" />

                <Image width={1028} height={1028} src={props.url5} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness" className="rounded-[20px]" />

                <Image width={1028} height={1028} src={props.url6} alt="Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra." title=" .Ubytování v Havlíčkově Brodě - Wellness, Fitness" className="rounded-[20px]" />

            </div>
        </div>
    );
};