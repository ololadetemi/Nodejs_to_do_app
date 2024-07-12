const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    completedAt: {
        type: Date,
        default: null
    },
    deletedAt: {
        type: Date,
        default: null
    },
    completed: {
        type: Boolean,
        default: false
    }
    

});

module.exports = mongoose.model('Task', tasksSchema);