const {gql} = require('apollo-server');

authTypeDefs = gql`
input LoginInput{
    username: String!
    password: String!
}

input PerfilInput{
    num_doc: String!
    ciudad: String!
    celular: String!
    direccion: String!
    activo: Boolean!
    imagen: String!
}

input SignupInput{
    username: String!
    password: String!
    name: String!
    email: String!
    perfil: PerfilInput

}

type Token{
    refresh: String!
    access: String!
}

type Perfil{
    id: Int!
    numDoc: String!
    ciudad: String!
    celular: String!
    direccion: String!
    activo: Boolean!
    imagen: String!
}

type User{
    id: ID!
    username: String!
    name: String!
    email: String!
    perfil: Perfil!
}



type Query{
    myAccount: User
}

type Mutation{
    login(credentials: LoginInput!): Token!
    signup(signupData: SignupInput):Token!
}

`;

module.exports = authTypeDefs;