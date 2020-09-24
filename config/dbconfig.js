const mongoose = require('mongoose')

function connectToDB() {
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost:27017/ecojobs',
        { useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false  }, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Connected to Database")
            }
        })
}
 
module.exports = {
    url: 'mongodb://localhost:27017/ecojobs',
    connectToDB: connectToDB()
}