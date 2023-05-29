import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {typeDefs} from "./schema/index";

// const typeDefs = `#graphql
//   type Book {
//     id: ID!
//     title: String!
//     author: Author
//   }

//   type Author {
//     id: ID!
//     name: String!
//     books: [Book]
//   }

//   #roots
//   type Query {
//     books: [Book]
//     book (id: ID!): Book
//     authors: [Author]
//     author (id: ID!): Author
//   }

//   #mutations
//   type Mutation {
//     addBook(title: String, author: String): Book
//     createAuthor(id: ID!, name: String!): Author
//   }
// `;

const books = [
  {
    id: 1,
    title: "Book a",
    authorId: 1,
  },
  {
    id: 2,
    title: "Book b",
    authorId: 2,
  },
];

const authors = [
  {
    id: 1,
    name: "Author 1",
    books: [1],
  },
  {
    id: 2,
    name: "Author 2",
    books: [2],
  },
];

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id == args.id),
    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id == args.id),
  },
  Book: {
    author: (parent, args) => authors.find((author) => author.id == parent.id),
  },
  Author: {
    books: (parent, args) => books.filter((book) => book.id == parent.id),
  },

  //mutations
  Mutation: {
    createAuthor: (parent, args) => {
      authors.push({ ...args, books: [] });
      return args;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: Number(process.env.EXPRERSS_PORT) },
});

console.log(`🚀 Server listening at: ${url}`);
