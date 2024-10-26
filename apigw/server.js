const {ApolloServer, AuthenticationError} = require('apollo-server');
const axios = require('axios');

const typeDefs = `
  type Query {
    service1: String
    service2: String
    service3: String
  }
`;

const resolvers = {
    Query: {
        servicea: async () => {
            try {
                const response = await axios.get('http://servicio-a-service/servicio-a');
                const data = response.data;
                return data.message;
            } catch (err) {
                console.error("Error al obtener datos de service a", err);
                return "Error al obtener datos de service a";
            }
        },
        serviceb: async () => {
            try {
                const response = await axios.get('http://servicio-b-service/servicio-b');
                const data = response.data;
                console.log("This is the data", data)
                console.log("This is the message", data.message)
                return data.message;
            } catch (err) {
                console.error("Error al obtener datos de service b", err);
                return "Error al obtener datos de service b";
            }
        },
        servicec: async () => {
            try {
                const response = await axios.get('http://servicio-c-service/servicio-c');
                console.log(response)
                const data = response.data;
                return data.message;
            } catch (err) {
                console.error("Error al obtener datos de service c", err);
                return "Error al obtener datos de service c";
            }
        },
        serviced: async () => {
            try {
                const response = await axios.get('http://servicio-d-service/servicio-d');
                const data = response.data;
                return data.bebidas;
            } catch (err) {
                console.error("Error al obtener datos de service d", err);
                return "Error al obtener datos de service d";
            }
        },
        servicee: async () => {
            try {
                const response = await axios.get('http://servicio-e-service/servicio-e');
                const data = response.data;
                return data.cereales;
            } catch (err) {
                console.error("Error al obtener datos de service e", err);
                return "Error al obtener datos de service e";
            }
        },
        servicef: async () => {
            try {
                const response = await axios.get('http://servicio-f-service/servicio-f');
                const data = response.data;
                return data.dulces;
            } catch (err) {
                console.error("Error al obtener datos de service f", err);
                return "Error al obtener datos de service f";
            }
        },
        serviceg: async () => {
            try {
                const response = await axios.get('http://servicio-g-service/servicio-g');
                const data = response.data;
                return data.frutas;
            } catch (err) {
                console.error("Error al obtener datos de service g", err);
                return "Error al obtener datos de service g";
            }
        },
        serviceh: async () => {
            try {
                const response = await axios.get('http://servicio-h-service/servicio-h');
                const data = response.data;
                return data.quesos;
            } catch (err) {
                console.error("Error al obtener datos de service h", err);
                return "Error al obtener datos de service h";
            }
        },

    },
};

async function getContext({req}) {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.split('Bearer ')[1];

    try {
        const response = await axios.post('http://authservice-service/verify-token', {token: token});
        console.log(response.data)
        if (response.data && response.data.isValid) {
            return {token};
        } else {
            throw new AuthenticationError("No estás autorizado");
        }
    } catch (err) {
        throw new AuthenticationError("Error al validar el token");
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: getContext
});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});

