import {GraphQLServer} from 'graphql-yoga';
import resolvers from "./graphql/resolvers.js";

const server = new GraphQLServer({
    typeDefs :"graphql/schema.graphql",
    resolvers: resolvers
})

server.start(()=>{console.log("Running the server")});