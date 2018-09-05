// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log('CANT CONNECT TO MONGO SERVER');
    }
    console.log('Connected Succesfully!');
    const db = client.db('TodoApp');

    console.log('Connected Succesfully!');
    db.collection('Todos')
      .find()
      .toArray()
      .then(
        docs => {
          console.log('Todos');
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log('UNABLE TO FETH', err);
        }
      );
    // // db.collection('Todos').insertOne(
    // //   {
    // //     text: 'Something else here',
    // //     completed: false
    // //   },
    // //   (err, result) => {
    // //     if (err) {
    // //       return console.log('unable to insert todo', err);
    // //     }
    // //     console.log(JSON.stringify(result.ops, undefined, 2));
    // //   }
    // // );

    // // db.collection('Uers').insertOne(
    // //   {
    // //     name: 'Alfred',
    // //     age: 22,
    // //     gender: 'Male',
    // //     Location: 'Pasay'
    // //   },
    // //   (err, result) => {
    // //     if (err) {
    // //       return console.log('Unable to insert todo', err);
    // //     }
    // //     console.log(JSON.stringify(result.ops));
    // //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // //   }
    // // );
    // client.close();
  }
);
