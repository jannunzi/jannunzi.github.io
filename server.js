const express = require('express')
const app = express()

app.use(express.static(__dirname + '/'));

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin",
       req.headers.origin);
   res.header("Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods",
       "GET, POST, PUT, DELETE, OPTIONS");
   res.header("Access-Control-Allow-Credentials", "true");
   next();
});

app.get('/*', function(req,res) {
   res.sendFile(__dirname+'/index.html');
});

app.listen(process.env.PORT || 3000)
