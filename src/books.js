const mongoose = require('mongoose');

const Shema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
    title:{type : String, required:[true,'le titre est requis']},
    totalPages: {
        type:Number,
        default:0,
        validate: {
            validator: (totalPages) => totalPages < 3000,
            message: 'un livre doit faire moins de 3000 pages frero !'
        }
    }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;