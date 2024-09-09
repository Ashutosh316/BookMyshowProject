const mongoose = require('mongoose');

//creating a new Schema for storing movie booking details.

const TicketSchema = new mongoose.Schema({
    movie:{type: String},
    slot:{type:String},
    seats:{
        A1:{type: Number},
        A2:{type: Number},
        A3:{type: Number},
        A4:{type: Number},
        D1:{type: Number},
        D2:{type: Number},
    }
});

//Registering the schema with the Mongoose model.

const Ticket = mongoose.mongoose.model('bookmovietickets', TicketSchema);
module.exports = Ticket;
