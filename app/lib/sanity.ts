import { createClient } from "next-sanity"

export const client = createClient({
    projectId: "xc3et9jd",
    dataset: "production",
    apiVersion: "2023-03-25",
    useCdn: true,
});