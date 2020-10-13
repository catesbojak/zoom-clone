# 1st Meeting: 
Participants: Bojak, Jennifer, and Melissa
Roles: Controller, Navigator, Driver
Date: 10-6-2020: Zoom Clone
YouTube
stop at: 31:14 / 3:28:02
Group Meeting: start at 6p.m. PST to 7:30p.m. (1hrs 30 mins)
progress:  installed nodemon, node, express

# 2nd Meeting:
Participants: Bojak, Jennifer, and Melissa
Roles: Controller, Navigator, Driver
Date: 10-7-2020: Zoom Clone
YouTube
stop at: 53:54 / 3:28:02
Group Meeting: start at 6p.m. PST to 7:30p.m. (1hrs 30 mins)
progress:  installed ejs, , express

Notes: 
0) npm insatll 'ejs': 'ejs' is embedded javascript will help us get the variable from backend to frontend
1) set the room 'veiw engine' to be: 'ejs' (in 'server.js' file)
2) then, run "nodemon server.js" & go to localhost://3030
3) install : npm install 'uuid'
--> why we need uuid? we need random unique id for each specific room
3.2) import the 'uuid' (in the server.js file)
which is: const {v4: uuidv4} = require ('uuid');
3.3) create a new url,
app.get('/:room', (req, res)=> {
  res.render('room', {roomId: req.params.room })
})
4) room id link:
localhost:3030/
redirect 'url' with new random generated unique 'uuid'
http://localhost:3030/9acc811e-d560-4959-8e30-2795c9e89b4a

5)create script with src =""
6) set public file
==> app.use(express.static('public)); 
7) inside script.js we

