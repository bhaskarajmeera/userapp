import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();
console.log(__dirname,"======");

app.use(express.static(path.join(__dirname,"public")));


app.get('/', (req, res) => {
    console.log("request recived");
  res.sendFile(__dirname+"/index.html");
})

app.listen(8000, (error) => {

    error ? console.log(error): console.log('Server is running on http://localhost:8000');
});