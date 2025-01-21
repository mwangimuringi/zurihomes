import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

# This "Book" type defines the queryable fields for every book in our data source.
type Book {
  id: ID!
  title: String
  author: String
  platform: String
}

type Review {
  id: ID!
  rating: Int!  
  content: String!
}

type Author {
  id: ID!
  name: String!
  verified: Boolean!
}


# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  books: [Book]
  reviews: [Review]
  authors: [Author]
}
`;
let books = [
    { id: '1', title: 'Zelda, Tears of the kingdom', platform: ['Switch'] },
    { id: '2', title: 'hfjfujjiir', platform: ['Ps5', 'Xbox'] },
    { id: '3', title: 'Eden Ring', platform: ['ps5', 'Xbox', 'Pc'] },
    { id: '4', title: 'Mario kart', platform: ['Switch'] },
    { id: '5', title: 'Pokemon Scarlet', platform: ['ps5', 'Xbox', 'Pc'] },
];
let authors = [
    { id: '1', name: 'mario', verified: true },
    { id: '2', name: 'yoshi', verified: false },
    { id: '3', name: 'peach', verified: true },
];
let reviews = [
    { id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', book_id: '2' },
    { id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', book_id: '1' },
    { id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', book_id: '3' },
    { id: '4', rating: 6, content: 'lorem ipsum', author_id: '4', book_id: '4' },
    { id: '5', rating: 7, content: 'lorem ipsum', author_id: '1', book_id: '2' },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
        authors: () => authors,
        reviews: () => reviews,
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
