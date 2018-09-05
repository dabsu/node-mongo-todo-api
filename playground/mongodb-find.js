// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log('CANT CONNECT TO MONGO SERVER');
    }
    const db = client.db('TodoApp');
    console.log('Connected Succesfully!');
    // db.collection('Todos')
    //   .find({ _id: new ObjectID('5b8e591ae6788a3419e43ec3') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('UNABLE TO FETH', err);
    //     }
    //   );

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`);
    //     },
    //     err => {
    //       console.log('UNABLE TO FETH', err);
    //     }
    //   );

    db.collection('Users')
      .find({ name: 'Alfred' })
      .toArray()
      .then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
      });
    // client.close();
  }
);
