let express = require('express');
let app = express();


app.use(express.json());
app.use(express.static('client'));


app.listen(3000, function(){
    console.log('listening...')
})