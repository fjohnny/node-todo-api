const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://10.0.0.11:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text : {
        type : String,
        required : true,
        minlength : 1,
        trim: true
    },
    completed: {
        type : Boolean,
        default : false
    },
    completedAt: {
        type : Number,
        default : null
    }
});

// var newTodo = new Todo({
//     text : '  Commit the files   '
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (err) => {
//     console.log('Unable to save todo', err)
// });

var User = mongoose.model('User', {
    email : {
        type : String,
        minlength : 1,
        trim: true
    }
});

var newUser = new User({
    email : '  johnnyfra@mail.com  '
});

newUser.save().then((doc) => {
    console.log('Saved user', doc)
}, (err) => {
    console.log('Unable to save user', err)
});