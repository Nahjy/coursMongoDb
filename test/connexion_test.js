const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before( (done) => {
    mongoose.connect('mongodb://localhost/books_test',{
        //useMongoClient:true           N'est plus compatible avec la version 5.x de mongodb
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    mongoose.connection
        .once('open',() => 
            {console.log('Connexion établie'); done()})
        .on('error',(error) => {
            console.warn('Erreur de connexion', error)})

})

beforeEach ('Supprime les anciens livres', (done) => {
    const {books} = mongoose.connection.collections;
    books.drop( () => {
        done();
    })
})