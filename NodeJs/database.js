const mongoose = require('mongoose');

const username = encodeURIComponent("vikasmotla");
const password = encodeURIComponent("Mongo@nov2023");

const dbURL = `mongodb+srv://${username}:${password}@cluster0.ocdedpg.mongodb.net/todos`

mongoose.connect(dbURL) // returns promise/ .then . catch
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});
// _id automaticically created.
//timestamp true. created at, updated at,

/*

{
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: Boolean,
    id: {
        type: String,
        unique: true
    }
}
*/

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}