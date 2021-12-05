const serverConfig = require('../server');
const {RESTDataSource} = require('apollo-datasource-rest');

class AuthCatalogoAPI extends RESTDataSource{

    constructor(){
        super();

        this.baseURL = serverConfig.auth_catalogo_api_url;
    }

    async accountByIdUserRequest(idUser){
        return await this.get(`user/${idUser}/`);
    }

    async loginRequest(credentials){
        return await this.post(`login/`, credentials)
    }

    async signUpRequest(signupData){
return await this.post(`user/`, signupData)
    }

}

module.exports = AuthCatalogoAPI;