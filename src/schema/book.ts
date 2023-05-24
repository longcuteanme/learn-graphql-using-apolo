const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  #root
  type Query {
    books: [Book]
  }
`;
export default typeDefs;
