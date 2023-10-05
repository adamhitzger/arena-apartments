import { createClient } from "next-sanity"

const projectId = "xc3et9jd";
const dataset = "production";
const apiVersion = "2023-03-01";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});