const serverConfig = require('../server');
const {RESTDataSource} = require('apollo-datasource-rest');

class TransactionalAPI extends RESTDataSource{

    constructor(){
        super();

        this.baseURL = serverConfig.transations_api_url;
    }

    async obtenerPlanByIdRequest(idPlan){
        return await this.get(`plan/${idPlan}/`);
    }

    async createPlanRequest(plan){
        return await this.post(`plan/`, plan)
            }

}

module.exports = TransactionalAPI;