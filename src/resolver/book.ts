const books = [
  {
    id: 1,
    title: "The Awakening",
    author: {
      id: 1,
    },
  },
  {
    id: 2,
    title: "City of Glass",
    author: {
      id: 2,
    },
  },
];

const authors = [
  {
    id: 1,
    name: "abc",
    books: [],
  },
  {
    id: 2,
    name: "def",
    books: [],
  },
];

const resolvers = {
  Query: {
    books: () => books,
    author: () => authors,
  },
};

module.exports = resolvers;
