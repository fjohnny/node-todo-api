//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://10.0.0.11:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect ', err)
    } 
    console.log('Connected to MongoDB server');
    var db = client.db('ToDoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text : 'Have dinner'}).then((result) => {
    //     console.log(result)
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text : 'Have dinner'}).then((result) => {
    //     console.log(result)
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
    //     console.log(result)
    // })
    db.collection('Users').findOneAndDelete({
        _id : new ObjectID('5adc6f4df1f1311860dcb9ef')
    }).then((result) => {
        console.log(result)
    })


    //client.close();
})