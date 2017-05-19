import * as express from "express";
import * as path from "path";
var app = express();

app.use(express.static(path.resolve('')));
app.get('/', function (req, res) {
  res.sendFile(path.resolve('index.html'));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})