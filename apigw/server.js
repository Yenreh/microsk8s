const { ApolloServer, AuthenticationError } = require('apollo-server');
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
    service1: async () => {
        try {
            const response = await axios.get('http://servicio-a-service/servicio-a');
            console.log(response)
            const data = response.data;
            return data.message;
        } catch (err) {
            console.error("Error al obtener datos de service 1", err);
            return "Error al obtener datos de service 1";
        }
    },
  service2: async () => {
      try {
          const response = await axios.get('http://servicio-b-service/servicio-b');
          console.log(response)
          const data = response.data;
          return data.message;
      } catch (err) {
          console.error("Error al obtener datos de service 2", err);
          return "Error al obtener datos de service 2";
      }
  },
      service3: async () => {
          try {
              const response = await axios.get('http://servicio-c-service/servicio-c');
              console.log(response)
              const data = response.data;
              return data.message;
          } catch (err) {
              console.error("Error al obtener datos de service 3", err);
              return "Error al obtener datos de service 3";
          }
      },
  },
};

async function getContext({ req }) {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.split('Bearer ')[1];

    try {
        const response = await axios.post('http://authservice-service/verify-token', { token: token });
        console.log(response.data)
        if (response.data && response.data.isValid) {
            return { token };
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

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

