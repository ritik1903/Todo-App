//require the mongoose library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_list_db', {     
    useNewUrlParser: true,     useUnifiedTopology: true,     family: 4, 
});

//acquire the connection to check if it is successful or not
const db = mongoose.connection;

// error
db.on('error',console.error.bind(console,'erroe connecting to db'));

// up and running then message
db.once('open',function(){
    console.log('Successfully connected to the database')
})