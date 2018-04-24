//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://10.0.0.11:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect ', err)
    } 
    console.log('Connected to MongoDB server');
    var db = client.db('ToDoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5adef5eb0e4506129cbcf45a')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch records')
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Number of documents: ', count);
    //     //console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to get count')
    // })

    db.collection('Users').find({
        name: 'Peter'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch records')
    })

    //client.close();
})