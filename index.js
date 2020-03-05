const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Hike {
    id: ID!
    title: String!
    description: String!
    dateTime: String
    location: String!
    meetLocation: String
  }

  type Query {
    hike(id: ID!): Hike
    hikes: [Hike]
  }
`;

const resolvers = {
  Query: {
    hike: (_, { id }) => hikes.find(hike => hike.id === id),
    hikes: () => hikes
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server
  .listen({
    port: process.env.PORT || 4000
  })
  .then(({ url }) => console.log(`Server started at ${url}`));

const hikes = [
  {
    id: "2345364321",
    title: "Goin out on the Mountain, if ya know what I mean.",
    description:
      "As my good friend Bruno Mars would say, bring some wine and wet wipes.",
    location: "1993 Willburough Drive, 35827",
    dateTime: "5-3-2020"
  },
  {
    id: "5124253647",
    title: "Hike up El Capitan nbd.",
    description:
      "This hike is going to be a little out of the norm as far as what direction we're hiking.",
    location: "7754 Themiddla Nowere Ln, 74857",
    dateTime: "23-4-2021"
  },
  {
    id: "3245676543",
    title: "Fusion Hike at Wesley Woods.",
    description:
      "This will be an important day for you guys to please don't forget to bring a towel.",
    location: "7914 Wesley Drive, 68258",
    dateTime: "7-6-1977"
  }
];
