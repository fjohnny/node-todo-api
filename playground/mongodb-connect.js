//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://10.1.1.217:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect ', err)
    } 
    console.log('Connected to MongoDB server');
    var db = client.db('ToDoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo ', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    
    // db.collection('Users').insertOne({
    //     name: 'Peter',
    //     age: 45,
    //     location: 'Melbourne'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to inster user -> ', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
})