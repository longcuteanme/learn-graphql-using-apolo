const typeDefs = `#graphql
  type Book {
    _id: ID!
    title: String!
    author: Author!
  }

  type Author {
    _id: ID!
    name: String!
    age: Int!
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
    createBook(title: String!, authorId: String!): Book
    createAuthor(name: String!, age: Int!): Author
  }
`;

export default typeDefs;
