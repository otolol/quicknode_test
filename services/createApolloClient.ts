import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://graphql.icy.tools/graphql/",
    cache: new InMemoryCache(),
    headers: {
      "x-api-key": process.env.API_KEY || "",
    },
  });
};
