//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://10.0.0.11:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect ', err)
    } 
    console.log('Connected to MongoDB server');
    var db = client.db('ToDoApp');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID('5adf05590e4506129cbcf464')},
    //     {$set : {completed : true}},
    //     {returnOriginal : false} ).then((result) => {
    //         console.log(result)
    //     })
    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('5adc6f6631c68718b49d0918')},
        {$set : {name : 'Johnny'},
         $inc : {age: 5}},
        {returnOriginal : false} ).then((result) => {
            console.log(result)
        })


    //client.close();
})