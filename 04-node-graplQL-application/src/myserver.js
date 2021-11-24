const express = require('express');
const app = express();
const port = 3000;

var users = [
  {
    id: 0,
    name: '0',
  },
  {
    id: 1,
    name: '1',
  },
  {
    id: 2,
    name: '2',
  },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/user/:id', (req, res) => {
  console.log(req.query);
  const { id } = req.params;
  res.json(users[id]);
});

// http://localhost:3000/queryString?names=hamid&class=jamstack&students=300
app.get('/queryString', (req, res) => {
  res.json(req.query);
});

app.get('/', (req, res) => {
  res.send('Running my Express Server!');
});

app.get('/yahoo', (req, res) => {
  res.send('<h1 style="color: red;">Rendering HTML</h1>');
});

app.get('/stringify', (req, res) => {
  res.send(JSON.stringify({ foo: 'bar' }));
});

app.get('/json/:id', (req, res) => {
  console.log('params: ', req.params);
  console.log('query: ', req.query);
  res.json({ foo: 'bar' });
});

app.post('/mypost/:id', (req, res) => {
  res.send('post api called');
});

app.get('/allUsers', (req, res) => {
  res.json(users);
});

app.get('/blog', (req, res) => {
  res.json(users);
});

app.post('/blog', (req, res) => {
  res.json(users);
});

app.delete('/blog', (req, res) => {
  res.json(users);
});

app.put('/blog', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
