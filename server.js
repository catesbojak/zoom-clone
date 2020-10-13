const express = require('express');
const app = express();
const server = require('http').Server(app);
const {v4: uuidv4 } = require('uuid');
app.set('view engine', 'ejs');
app.use(express.static('public'));
// redirect to the specific room with the uuid specific random id generated.
// how we get the 'uuid'? => we use 'app.get()' method
app.get('/', (req, res) => {
  res.redirect(`/${uuidv4()}`);
})

// pass the para. as roomId
app.get('/:room', (req, res) => {
  res.render('room', {roomId: req.params.room})

})


server.listen(3030);