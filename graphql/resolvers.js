// import {
//     people,
//     getByID,
//     deleteCode,
//     coding,
//     addCoding
// } from './db.js';

import {
    getMovies
} from "./db.js";

// const resolvers = {
//   Query: {
//     people: () => people,
//     person: (_, { id }) => getByID(id),
//     codings: () => coding,
//     coding: (_, { id }) => deleteCode(id),
//   },
//   Mutation: {
//     addCoding: (_, { name, score }) => addCoding(name, score),
//     deleteCode: (_, { id }) => deleteCode(id),
//   },
// };

const resolvers = {
    Query: {
        movies: (_,{limit,rating}) => getMovies(limit,rating),
    },
};

export default resolvers;