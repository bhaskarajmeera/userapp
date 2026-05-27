import express from 'express'
const app = express();
app.get('/', (req, res) => {
    console.log(req);
  res.send('Hello World')
})

app.listen(8000, (error) => {

    error ? console.log(error): console.log('Server is running on http://localhost:8000');
});