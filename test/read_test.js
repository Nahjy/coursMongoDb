const assert = require('assert');
const Book = require('../src/books');
const mongoose = require('mongoose');

describe('Test de read', () => {
    let book1;
    beforeEach( (done) => {
        book1 = new Book({title:'un livre de merde'});
        book1.save().then( () => {
            done();
        })
    })
    it('Recherche d un livre par son titre', (done) => {
        Book.find({title:'un livre de merde'}).then((books) => {
            assert(books[0]._id.equals(book1._id));
            done();
        })
    });
    
    it('Recherche d un livre par son id', (done) => {
        Book.findOne({_id:book1._id}).then((book) => {
            assert(book.title === book1.title);
            done();
        })
    });
})