const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AuthCatalogoAPI = require('./dataSources/auth_catalogo');
const TransactionalAPI = require('./dataSources/transational');
const authentication = require('./utils/authentication');


const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authCatalogoAPI: new AuthCatalogoAPI(),
        transactionalAPI: new TransactionalAPI()
    }),
    introspection: true,
    playground: true

});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
})