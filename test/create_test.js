const assert = require('assert');
const Book = require('../src/books');
const mongoose = require('mongoose');

describe('Test de create', () => {
    it('Sauvegarde d un livre', (done) => {
        const book1 = new Book({title: "livre de merde"});
        book1.save().then( () => {
            assert(!book1.isNew);
            done();
        });
    })
})