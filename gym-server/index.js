const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors=require("cors")

app.use(cors)
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 



const uri = "mongodb+srv://gym-server:raoMjgItfLD8nxu@cluster0.zovp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
  
  
    console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})