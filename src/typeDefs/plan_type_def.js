const {gql} = require('apollo-server');

const planTypeDefs = gql`

type Servicio{
    idServicio: Int!
    idTipoServicio: Int!
    idProveedor: Int!
    nombre: String!
    completado: Boolean!
    precio: Float!
}

type Plan{
    idPlan: ID!
    idUsuario: Int!
    valor: Float!
    fInicio: String!
    fFin: String!
    completado: Boolean!
    servicios: [Servicio]
}

input ServicioInput{
    idServicio: Int!
    idTipoServicio: Int!
    idProveedor: Int!
    nombre: String!
    completado: Boolean!
    precio: Float!
}
input PlanInput{
    valor: Float!
    fInicio: String!
    fFin: String!
    completado: Boolean!
    servicios: [ServicioInput]
}

type Query{
    planByIdPlan(idPlan: String!):Plan!
}

type Mutation{
    createPlan(plan: PlanInput!): Plan!
}
`;

module.exports = planTypeDefs;