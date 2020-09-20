const assert = require('assert');
const Book = require('../src/books');
const mongoose = require('mongoose');

describe('Test de delete', () => {
    let book1;
    beforeEach( (done) => {
        book1 = new Book({title:'un livre de caca'});
        book1.save().then(() => {
            done();
        })
    })

    function assertDelete(promise,done){
        promise.then( () => {
            Book.findOne({title:'un livre de caca'}).then((book) => {
                assert(book===null);
                done();
            })
        })
    }

    it('Suppression d un livre par son instance', (done) => {
        assertDelete(book1.remove(),done);
    });
    

})