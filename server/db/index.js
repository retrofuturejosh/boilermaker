const db = require('./__db.js');
const Example = require('./models/exampleModel');
const User = require('./models/user');


//associations go here


const syncPromise = db.sync({ force: false }).then(() => console.log('db synced, dummies!'));

module.exports = {
    db,
    syncPromise,
    User
}

