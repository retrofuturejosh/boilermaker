const db = require('./__db.js');
const Example = require('./models/exampleModel');

//associations go here


const syncPromise = db.sync().then(() => console.log('db synced, dummies!'));

module.exports = {
    db,
    syncPromise
}


