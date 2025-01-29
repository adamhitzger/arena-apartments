import "server-only";
import { createClient } from 'next-sanity'
import type { ClientPerspective, QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "./env";
export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
    useCdn: useCdn,
});

  export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    perspective = "published",
    stega = perspective === "previewDrafts" ||
      process.env.VERCEL_ENV === "preview",
  }: {
    query: string;
    params?: QueryParams;
    perspective?: Omit<ClientPerspective, "raw">;
    stega?: boolean;
  }) {
    if (perspective === "previewDrafts") {
      return client.fetch<QueryResponse>(query, params, {
        stega,
        perspective: "previewDrafts",
        useCdn: false,
        next: { revalidate: 0 },
      });
    }
    return client.fetch<QueryResponse>(query, params, {
      stega,
      perspective: "published",
      useCdn: true,
      next: { revalidate: 30 },
    });
  }