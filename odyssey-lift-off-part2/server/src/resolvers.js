// src/resolvers.js
const resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, {dataSources}) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  // another key to resolve object for track type in schema
  Track: {
    author: ({authorId}, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;