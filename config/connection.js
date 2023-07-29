const mongoose = require('mongoose')

module.exports.connect = function () {
    mongoose.connect('mongodb+srv://munshid:munshid123@cluster0.fyiocsw.mongodb.net/event-tech?retryWrites=true&w=majority/job-portal')
    console.log('mongoose connected');
}
