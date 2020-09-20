const assert = require('assert');
const Book = require('../src/books');
const mongoose = require('mongoose');

describe('Test de update', () => {
    let book1;
    let newTitle = 'un livre cool';
    beforeEach( (done) => {
        book1 = new Book({title:'un livre de merde'});
        book1.save().then( () => {
            done();
        })
    })

    function asserTitle(promise,done)   {
        promise.then( () => {
            Book.find({}).then( (books) => {
                assert(books[0].title===newTitle);
                done();
            })
        })
    }

    it('update depuis instance', (done) => {
        book1.set('title', newTitle);
        asserTitle(book1.save(), done)
        
    })

    it('update depuis modele', (done) => {
        asserTitle(Book.update({title:'un livre de merde'}, {title:newTitle}), done);
    })

    it('Recherche un livre par son titre et update (findOneAndUpdate)', (done) => {
        asserTitle(Book.findOneAndUpdate({title:'un livre de merde'},{title:newTitle}), done)
    })

    it('Recherche un livre par son id et update (findByIdAndUpdate)', (done) => {
        asserTitle(Book.findByIdAndUpdate(book1._id, {title:newTitle}), done);
    })

    it('Recherche un livre et incrémente son nombre de page', (done) => {
        Book.update({title:'un livre de merde'},{$inc : {totalPages: 3}})
        .then( () => Book.findOne({title:'un livre de merde'}))
        .then( (book) => {
            assert(book.totalPages===3);
            done();
        })
    })

})