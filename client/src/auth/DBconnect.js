const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://qrsc:iIoFpuISNRxgXsno@qrscdb.nj8kp.mongodb.net/qrsc?retryWrites=true&w=majority";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];

mongoClient.connect(function(err, client){

    const db = client.db("usersdb");
    const collection = db.collection("users");

    collection.insertMany(users, function(err, results){

        console.log(results);
        client.close();
    });
});