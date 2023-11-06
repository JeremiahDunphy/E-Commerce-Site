// Import the correct builder function from the @sanity/image-url package
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "f2oyslv7",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// Initialize the URL builder using the Sanity client
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
