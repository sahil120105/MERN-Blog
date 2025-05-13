const { MongoClient, ServerApiVersion } = require('mongodb');
// Load environment variables from the './config.env' file into the process.env object.
require("dotenv").config({ path: "./config.env" });

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.ATLAS_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  ssl: true,
  tls: true // This might default to a specific version

});


let database

module.exports = {
    connectToServer: () => {
        database = client.db("blogData")
    },

    getDb: () => {
        return database
    }

    
}


