const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://improvers:dev123@cluster0.jo7bn.mongodb.net/nova?retryWrites=true&w=majority'
)
.then( res => console.log('DB connected'))
.catch(error => console.err(error))