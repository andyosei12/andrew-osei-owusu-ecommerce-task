import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({ uri: "http://localhost:4000" });
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

// const query = gql`
//   {
//     categories {
//       name
//       products {
//         id
//         name
//       }
//     }
//   }
// `;

// client.query({ query }).then((result) => console.log(result));

export default client;
