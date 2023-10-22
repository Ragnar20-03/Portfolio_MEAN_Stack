const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const {MongoClient} = require('mongodb')
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url);

async function getConnection(){
    let conn = await client.connect();
    if(!conn)
    {
        console.log("Connction Failed with Database");
        return;
    }
    let db = await conn.db("Portfolio");
    if (!db){
        console.log("Unable to Fetch Database tabel");
        return ;
    }
    return (await db.collection("data"))

}

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.listen(5100 , ()=>{
    console.log("Server started on port Number 5100");
})

app.get('/portfolio' , async(req, res)=>{
    let collection = await getConnection();
    if (!collection){console.log("getConnection Failed");}

    res.status(200).send((await collection.find({}) .toArray()));
})