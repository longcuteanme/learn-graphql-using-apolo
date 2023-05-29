const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: Author
  }

  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  #roots
  type Query {
    books: [Book]
    book (id: ID!): Book
    authors: [Author]
    author (id: ID!): Author
  }

  #mutations
  type Mutation {
    addBook(title: String, author: String): Book
    createAuthor(id: ID!, name: String!): Author
  }
`;

export { typeDefs };
