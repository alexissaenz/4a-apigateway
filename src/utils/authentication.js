const fetch = require('node-fetch');
const serverConfig = require('../server');
const { ApolloError } = require('apollo-server');
const { ApolloServer } = require('apollo-server-express');

const authentication = async ({ req }) => {
    //console.log("req.headers.authorization: " + req.headers.authorization);
    const token = req.headers.authorization || '';
    if (token == '') {
        return { idUserToken: null }
    } else {

        //try {
            //console.log("token: " + token);
            let requestOptions = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                },
                redirect: "follow"
            }
            let response = await fetch(`${serverConfig.auth_catalogo_api_url}usuario-conectado/`, requestOptions);
            if (response.status != 200) {
                console.log(response);
                throw new ApolloError("Token invalido", 401);
            }
            let userData = (await response.json());
            return { 
                idUserToken: userData.id, 
                userData: userData

            };

        //} catch (error) {
            console.log("error: " + error);
            //throw new ApolloError("Error inesperado", 500);

       // }


    }
}

module.exports = authentication;