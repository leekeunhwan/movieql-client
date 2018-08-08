import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // uri는 url보다 상위 개념
  uri: "https://movieql-osezlvyqsg.now.sh"
});

export default client;
