import db from './mongodb.js'
import express from 'express'


const app = express()
const port = 3000

app.use(express.json());

app.get('/user/all', async (req, res) => {
    let collection = await db.collection("users");

    let users = await collection.find({}).toArray();

    console.log(users)

    res.send(users).status(200);
})

app.get("/user/:id", async (req, res) => {
    let collection = await db.collection("users");

    const id = parseInt(req.params.id)

    let query = {id: id};
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

app.get('/door/all', async (req, res) => {
    let collection = await db.collection("door");

    let entrances = await collection.find({}).toArray();

    console.log(entrances)

    res.send(entrances).status(200);
})

app.get("/door/:userId", async (req, res) => {
    let collection = await db.collection("door");

    const id = parseInt(req.params.userId)

    let query = {userId: id};
    let result = await collection.find(query).toArray();

    
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});


app.post("/user/create", async (req, res) => {
    let collection = await db.collection("users");
    let newUser = req.body;

    console.log(req.body)

    newUser.createDate = new Date();
    let result = await collection.insertOne(newUser);
    res.send(result).status(204);
});

app.post("/door/create", async (req, res) => {
    let collection = await db.collection("door");
    let newEntrance = req.body;

    console.log(req.body)

    newEntrance.createDate = new Date();
    let result = await collection.insertOne(newEntrance);
    res.send(result).status(204);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

module.exports = app
