import { IntrospectionQuery, buildClientSchema, getIntrospectionQuery, printSchema } from "graphql";

const query = getIntrospectionQuery();

export const getIntrospection = (url: string) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  })
    .then(res => res.json())
    .then(res => res as { data: IntrospectionQuery })
    .then(res => res.data)
    .then(res => buildClientSchema(res))
    .then(res => printSchema(res))

    .catch(err => {
      console.error(err);
      process.exit(1);
    });
