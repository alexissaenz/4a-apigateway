const authResolvers = {
    Query: {
        myAccount: async (_, { }, { dataSources, idUserToken, userData }) => {
            if (idUserToken == null) {
                return null;
            }
            return userData;

        }
    },
    Mutation: {
        login: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authCatalogoAPI.loginRequest(credentials);
        },
        signup: async (_, { signupData }, { dataSources }) => {
            return await dataSources.authCatalogoAPI.signUpRequest(signupData);
        },

    }

}

module.exports = authResolvers;