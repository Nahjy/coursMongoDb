const assert = require('assert');
const Book = require('../src/books');
const mongoose = require('mongoose');

describe('Test de validation', () => {
    it('un titre doit etre requis', (done) => {
        const book1 = new Book({title: undefined});
        const validationResult = book1.validateSync();
        const {message} = validationResult.errors.title;
        assert(message==='un titre est requis');
        done();
    })

    it('un titre doit faire moins de 3000 pages', (done) => {
        const book1 = new Book({title: 'les fleurs du pays', totaPages:30});
        book1.validate( (validationResult) => {
            const {message} = validationResult.errors.totaPages;
            assert(message==='un livre doit faire moins de 3000 pages frero !');
            done();
        })
    })
})