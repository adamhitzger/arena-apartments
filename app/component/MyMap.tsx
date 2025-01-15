"use client"
import Map, { Marker } from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css';
import { toast } from "react-toastify";
export default function MyMap() {
    const showToast = (
        company: string, adress: string, phone: string
    ) => {
        toast.info(`Název: ${company}, Adresa: ${adress}, Telefon: ${phone}.`, {
            position: toast.POSITION.TOP_CENTER,
        });
    };
    return (
        <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN!}
            initialViewState={{
                longitude: 15.5797036,
                latitude: 49.5945936,
                zoom: 17,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
        >
            <Marker latitude={49.5945936} longitude={15.5797036} anchor='bottom' color="red" onClick={() => showToast("Arena Apartments", "Jihlavská 895", "606 838 786")} />
            <Marker latitude={49.6046983} longitude={15.5826308} anchor='bottom' color="red" onClick={() => showToast("Restaurace na Ostrově", "Žižkova 3329", "720 071 973")} />
            <Marker latitude={49.6046983} longitude={15.582900} anchor='bottom' color="red" onClick={() => showToast("Bar na Ostrově", "Žižkova 3329", "728 507 947")} />
            <Marker latitude={49.6046983} longitude={15.583100} anchor='bottom' color="red" onClick={() => showToast("Kulturní dům Ostrov", "Na Ostrově 28/3", "702 200 208")} />
        </Map>
    )
}