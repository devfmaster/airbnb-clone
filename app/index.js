const { GraphQLServer } = require('graphql-yoga');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');







const server = new GraphQLServer({
    typeDefs: './app/schema.graphql',
    resolvers
})

server.start(() => console.log(`Server is running on localhost`))