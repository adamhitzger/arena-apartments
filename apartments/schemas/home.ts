
export default{
    name: "home",
    title: "Home Page",
    type: "document",
    fields: [
        {
            name: "singleBed",
            title:"Cena pokoje pro jednoho bez snídaně",
            type: "number",
        },
        {
            name: "singleBedWithBreakfast",
            title: "Cena pokoje pro jednoho se snídaní",
            type: "number"
        },
        {
            name: "doubleBed",
            title: "Cena pokoje pro dva bez snídaně",
            type: "number",
        },
        {
            name: "doubleBedWithBreakfast",
            title: "Cena pokoje pro dva se snídaní",
            type: "number",
        },
        {
            name: "pricePerGroup",
            title: "Cena osoba/nos pro 15 členou skupinu",
            type: "number",
        },
        {
            name: "wellnessPrice",
            title: "Cena za wellness",
            type: "number",
        },
    ],
};