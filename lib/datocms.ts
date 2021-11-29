import { GraphQLClient } from "graphql-request";

interface Args {
  query: string;
  variables?: object;
  isPreview?: boolean;
}

export function request({ query, variables, isPreview }: Args) {
  const endpoint = isPreview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });

  return client.request(query, variables);
}
