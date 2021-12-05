const { ApolloError } = require('apollo-server');

const planResolvers = {
    Query:{
        planByIdPlan: async (_, {idPlan}, {dataSources, idUserToken}) =>{
        let plan = await dataSources.transactionalAPI.obtenerPlanByIdRequest(idPlan);

        if(idUserToken == plan.idUsuario){
            return plan; 
        }
        return null;
        }
    }, 

    Mutation: {
        createPlan: async (_, { plan }, { dataSources, idUserToken }) => {
            if(idUserToken == null){
                throw new ApolloError("Token invalido", 401);
            }
            plan.idUsuario = idUserToken;
            return await dataSources.transactionalAPI.createPlanRequest(plan);
        }
    }

}


module.exports = planResolvers;