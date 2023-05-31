import Author from "../schema/Author";
import Book from "../schema/Book";

const resolvers = {
  Query: {
    books: async () => await Book.find(),
    book: async (parent, args) => await Book.findOne({ _id: args.id }),
    authors: async () => await Author.find(),
    author: async (parent, args) => await Author.findOne({ _id: args.id }),
  },
  Book: {
    author: async (parent, args) => await Author.findOne({ _id: parent.authorId }),
  },
  Author: {
    books: async (parent, args) => await Book.find({ authorId: parent._id }),
  },

  //mutations
  Mutation: {
    createAuthor: async (parent, args) => {
      const newAuthor = new Author(args);
      await newAuthor.save();
      return newAuthor;
    },
    createBook: async (parent, args) => {
      const newBook = new Book(args);
      await newBook.save();
      return newBook;
    },
  },
};

export default resolvers;
