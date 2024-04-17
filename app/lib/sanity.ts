import { createClient } from "next-sanity"

export const client = createClient({
    projectId: "xc3et9jd",
    dataset: "production",
    apiVersion: "2023-05-03",
    useCdn: false,
});